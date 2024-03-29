---
date: 2020-03-20
category: 自动化工具
tag:
  - Ansible
---

# 6 Ansible使用优化

## 1 加大forks的值

默认forks=5，即最多5个Ansible工作进程。即便是只有6个目标节点，对于"效率"常挂嘴边的21世纪IT人来说，这么一点数量的工作进程，也显然是杯水车薪。

对于Ansible来说，它的的大多数任务都是分派给目标节点去执行的，所以控制端通常比较闲暇。换句话说，控制端在浪费宝贵的资源。因此，如果没有其它资源的瓶颈(比如网络带宽瓶颈、磁盘IO瓶颈)，Ansible控制端可以尽可能开大马力，让足够多的节点同时开始运行。

加大forks的值，甚至尽情地加大forks的值，可以很大幅度地提升整个任务的执行效率。不用担心太多Ansible工作进程数量会影响Ansible控制端的性能，Ansible工作进程那缓慢的工作量对OS来说实在太轻松了(除非是一些会占用大量资源的特殊任务)。我想，对于一般任务来说，唯一需要考虑的是网络带宽是否足够支撑足够数量目标节点，偶尔可能还需要考虑磁盘瓶颈。

## 2 修改执行策略

默认情况下Ansible会让所有节点(或者serial指定的数量)执行完同一个任务后才让它们进入下一个任务，这体现了各节点的公平性和实时性：每个节点都能尽早执行到任务。这其实和操作系统的进程调度是类似的概念，只不过相对于操作系统的调度系统来说，Ansible的调度策略实在是太简陋了。

假设forks设置的比较大，可以一次性让足够多的节点并发执行任务，那么同时设置任务的执行策略为strategy=free便能让这些执行任务的节点彻底放飞自我。只是剩余的一部分节点可能会比较悲剧，它们处于调度不公平的一方。但是从整体来说，先让大部分节点快速完成任务是值得的。

但是要注意，有些场景下要小心使用free策略，特别是节点依赖时。比如，某些节点运行服务A，另一些节点运行服务B，而服务B是依赖于服务A的，那么必须不能让运行B服务的节点先执行，对于有节点依赖关系的任务，为了健壮性，一般会定义好等待条件，但是出现等待有可能就意味着浪费。

## 3 使Ansible异步执行任务

默认情况下，Ansible按照同步执行的方式执行每个任务。即对每个任务来说，都需要等待目标节点执行完该任务后回馈给Ansible端的报告，然后Ansible才认为该节点上的该任务已经执行完成，才会考虑下一步骤，比如free策略下该节点继续执行下一个任务，或者等待其它节点完成该任务，等等。

### 3.1 async和poll指令

Ansible允许在task级别(且只支持task级别)指定该task是否以异步模式(即放入后台)执行，即将该异步任务放入后台。例如：

```
- name: it is an async task
  copy:
    src:
    dest:
  async: 200
  poll: 2
- name: a sync task
  copy:
    src:
    dest:
```

其中async指令表示该任务将以异步的模式执行。async指令的值200表示，如果该后台任务200秒还未完成，则认为该任务失败。poll指令表示该任务丢入后台后，Ansible每隔多久去检查一次异步任务是否已成功、是否报错等，只有检查到已完成后才认为该异步任务执行完成，才会进入下一个任务。

如此看来，似乎这个异步执行模式并非想象中那样真正的异步：将一个任务放入后台执行，立即进入下一个任务。而且这里的异步似乎会减慢任务的执行流程。比如后台任务在第3秒完成，也必须等到第4秒检查的时候才认为执行完成。

如果poll指令的值大于0，这确实不是真正的异步，每个工作进程必须等待放入后台的任务执行完成才会进入下一个任务，换句话说，尽管使用了async异步指令，也仍然会阻塞在该异步任务上。这会减慢任务的执行速度，但此时执行该异步任务的Ansible工作进程会放弃CPU，使得CPU可以执行其它进程(对于Ansible控制节点来说，这算哪门子优点？)。

但如果poll指令的值为0，将会以真正的异步模式执行任务，表示Ansible工作进程不检查后台任务的执行状况，而是直接执行下一个任务。

不管poll指令的值是否大于0，只要使用了异步，那么强烈建议将forks指令的值设置的足够大。比如能够一次性让所有节点都开始异步执行某任务，这样的话，无论poll的值是否大于0，都能提升效率。

此外，也可以在ansible命令中使用-B N选项指定async功能，N为超时时长，-P N选项指定poll功能，N为检查后台任务状况的时间间隔。

例如：

```
ansible inventory_file -B200 -P 0 -m yum -a 'name=dos2unix' -o -f 20
```

### 3.2 等待异步任务

略，后续补充

### 3.3 何时使用异步任务

有时候合理应用异步任务能大幅提升Ansible的执行效率，但也并非所有场景都能够使用异步任务。

总结来说，以下一些场景可能使用到Ansible的异步特性：

* 某个task需要运行很长的时间，这个task很可能会达到ssh连接的timeout
* 没有任务是需要等待它才能完成的，即没有任务依赖此任务是否完成的状态
* 需要尽快返回当前shell执行其它命令，此时应将所有异步任务的poll设置为0，否则仍然会阻塞在异步任务上

不适合使用异步特性的场景：

* 需要执行完该任务后才能继续另外某个任务
* 申请排它锁的任务
* 从上到下几乎全是非常短的任务，异步与否影响不大，甚至可能会因为poll非0而降低效率

## 4 controlpresist 持久化socket

**controlpresist 持久化socket，一次验证，多次通信,被控主机的ssh版本需要时5.6以上**

安装在ansible被管理主机上

```
# cat ~/.ssh/config
Host * 
  Compression yes 
  ServerAliveInterval 60 
  ServerAliveCountMax 5
  ControlMaster auto
  ControlPath ~/.ssh/sockets/%r@%h-%p
  ControlPersist 4h
```

> 个人感觉效果不明显，不如下面ansible设置开启ssh长连接

## 5 开启SSH长连接

开启ssh长连接为5天 ，要求ssh为5.6版本，查看版本ssh -v

```
# cat /etc/ansible/ansible.cfg
ssh_args = -C -o ControlMaster=auto -o ControlPersist=5d 
```

设置之后，连接信息会被保留在~.ansible/cp下, netstat -nltpa | grep ESTABLISH | grep ssh 会看到长连接存在

## 6 关闭gather_facts

关闭获取被控主机信息：在playbook中关闭即可，在大量的主机下，其效果明显

```
hosts: all
gather_facts: no
```

## 7 开启pipeling

在不使用sudo的情况下开启pipeling，减少ansible没有传输时的连接数

```
修改ansible.cfg中pipelining=False改为True
```

## 8 Shell层次上的优化：将任务分开执行

在LNMP的示例中，分别为nginx和php和MySQL都单独定义了自己的Role，它们分别在三批节点上执行。为了统筹这些Role，一般会定义一个汇聚了所有的Role的playbook文件，称为入口playbook，比如称为main.yml或site.yml。

但是，把这些Role聚集到单个playbook文件中后就必然会产生前后顺序关系。比如执行nginx Role的时候，PHP Role和MySQL Role对应的节点都在空闲。这是一种很低效的执行方式。

因此，可以为每个Role单独定义一个入口playbook文件，比如分别称之为nginx.yml、php.yml和mysql.yml，然后在Shell中使用多个ansible-playbook命令去分别执行这些入口文件。

这样一来，分别执行这三个Role的三批节点就可以同时开始执行任务了。

## 9 第三方策略插件：Mitogen for Ansible

略，后续补充

## 10 优化常规配置

```
inventory      = /etc/ansible/hosts.yml   # 指定主机列表文件
roles_path    = /etc/ansible/roles # 指定roles下载位置
host_key_checking = False #关闭密码检查
remote_user = ane #指定连接到的ssh用户
deprecation_warnings = False #关闭一些告警
retry_files_enabled = False #关闭book产生的retry文件
```

## 11 其他优化项

1. 目录结构

   如果只是一个简单的独立任务，使用playbook文件即可,方便我们在其他地方引用. 复杂建议采用role形式管理.


2. 定义多环境

   通过Inventory 方式去区分多环境下的主机或者主机组信息. 生成多个主机文件.
   不同环境需要调用不同的playbook 或者task ，可以通过when 方式去判断当前的主机信息存在哪个环境中，然后进行引用.

3. 检测
   ansible-playbook 命令的–syntax-check 参数即可

4. 灰度发布

   挑选一台机器进行测试，只有进行测试之后我们才知道整个配置流程是否达到我们想要结果.
   进行预运行时，我们只需要把一个或者多个task 使用delegate_to参数指定到一台设备上进行测试. 如果测试通过后，再进行接下来的工作.

5. 统一管理

   纳入git仓库管理

6. **Facts缓存优化**，可以加入redis缓存（但会有一些问题，比如创建带有时间的文件夹）

参考链接：

> https://blog.51cto.com/cloumn/blog/1544
>
> https://blog.csdn.net/Jack_Yangyj/article/details/86503591
>
> https://blog.csdn.net/goodlife111/article/details/94440672
