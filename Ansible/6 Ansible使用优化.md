## 1 关闭gather_facts

关闭获取被控主机信息：在playbook中关闭即可，在大量的主机下，其效果明显

```
hosts: all
gather_facts: no
```

## 2 关闭pipeling

在不使用sudo的情况下开启pipeling，减少ansible没有传输时的连接数

```
修改ansible.cfg中pipelining=False改为True
```

## 3 controlpresist 持久化socket

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
  ControlPersist 4h：
```

> 个人感觉效果不明显，不如下面ansible设置开启ssh长连接

## 4 开启SSH长连接

开启ssh长连接为5天 ，要求ssh为5.6版本，查看版本ssh -v

```
# cat /etc/ansible/ansible.cfg
ssh_args = -C -o ControlMaster=auto -o ControlPersist=5d 
```

设置之后，连接信息会被保留在~.ansible/cp下, netstat -nltpa | grep ESTABLISH | grep ssh 会看到长连接存在

## 5 优化常规配置

```
host_key_checking = False #关闭密码检查
remote_user = ane #指定连接到的ssh用户
deprecation_warnings = False #关闭一些告警
retry_files_enabled = False #关闭book产生的retry文件
```

## 6 其他优化项

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

> https://blog.csdn.net/Jack_Yangyj/article/details/86503591
>
> https://blog.csdn.net/goodlife111/article/details/94440672