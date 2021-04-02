# 1 初识Ansible
## 1 Ansible简介

Ansible官方文档： https://docs.ansible.com/

Ansible 是一个 IT 自动化工具。它能配置系统、部署软件、编排更复杂的 IT 任务，如连续部署或零停机时间滚动更新。

Ansible 用 python 编写，尽管市面上已经有很多可供选择的配置管理解决方案（例如 Salt，Puppet，Chef等），但它们各有优劣，而Ansible的特点在于它的简洁。让 Ansible 在主流的配置管理系统中与众不同的一点便是，它并不需要你在想要配置的每个节点上安装自己的组件。同时提供的一个优点在于，如果需要的话，你可以在不止一个地方控制你的整个基础架构。

### 1.1 Ansible特性

- Agentless：不需要再被管理节点上安装客户端，只要有sshd即可
- 幂等性：多次操作或多次执行不影响结果。
- Serverless：在服务端不需要启动任何服务，只需要执行命令就行
- Modules in any language：基于模块工作，可以使用任意语言开发ansible模块
- YAML, not code：使用yaml语言定制playbook
- SSH by default：默认使用ssh控制各节点
- Strong multi-tier solution：可实现多级控制

> 幂等性详细解释：比如算术运算时数值加0是幂等的，无论加多少次结果都不会改变，而数值加1是非幂等的，每次加1结果都会改变。再比如执行systemctl stop xxx命令来停止服务,当发现要停止的目标服务已经处于停止状态，它什么也不会做，所以多次停止的结果仍然是停止，不会改变结果，它是幂等的，而systemctl restart xxx是非幂等的。Ansible的很多 模块在执行时都会先判断目标节点是否要执行任务,所以，可以放心大胆地让Ansible去执行任务,重复执行某个任务绝大多数时候不会产生任何副作用。

### 1.2 Ansible的基本组件

![ansible1](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/ansible1-1585014469983.png)

- 核心：ansible
- 核心模块（Core Modules）：这些都是ansible自带的模块
- 扩展模块（Custom Modules）：如果核心模块不足以完成某种功能，可以添加扩展模块
- 插件（Plugins）：完成模块功能的补充
- 剧本（Playbooks）：把需要完成的多个任务定义在剧本中
- 连接插件（Connectior Plugins）：ansible基于连接插件连接到各个主机上，虽然ansible是使用ssh连接到各个主机的，但是它还支持其他的连接方法，所以需要有连接插件
- 主机群（Host Inventory）：ansible在管理多台主机时，可以选择只对其中的一部分执行某些操作

### 1.3 Ansible工作机制

Ansible 在管理节点将 Ansible 模块通过 SSH 协议（或者 Kerberos、LDAP）推送到被管理端执行，执行完之后自动删除，可以使用版本控制系统（git/svn）来管理自定义模块及playbooks。

![ansible2](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/ansible2-1585014469997.png)

## 2 Ansible安装

### 2.1 yum 安装（推荐）

```bash
# 配置epel源
cat > /etc/yum.repos.d/epel.repo <<'EOF'
[epel]
name=epel repo
baseurl=https://mirrors.tuna.tsinghua.edu.cn/epel/7/$basearch
enabled=1
gpgcheck=0
EOF
# 安装
yum -y install ansible
```

> 'EOF'，EOF用单引号括起来，可使配置文件中变量`$basearch`不被转义

### 2.2 源码安装（推荐）

```sh
# 解决依赖关系：
yum install -y python36 python36-devel python36-setuptools gcc libffi-devel openssl-devel

# 配置pip 下载源
mkdir ~/.pip
cat > ~/.pip/pip.conf << 'EOF'
[global] 
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
EOF

 
# 下载ansible：
wget https://github.com/ansible/ansible/archive/v2.9.17.tar.gz

#解压安装

tar xf v2.9.17.tar.gz
cd ansible-2.9.17/
python3 setup.py build
python3 setup.py install # install 过程安装module失败时，使用pip3手动安装
mkdir /etc/ansible
cp -r examples/* /etc/ansible
```

### 2.3  pip 安装

Ansible每个版本释放出来之后，都首先提交到Pypi,所以任何操作系统，都可以使用pip工具来安装最新版的Ansible。

```bash
pip3 install ansible
```

但要注意，使用各系统的包管理I具(如yum)安装Ansible时自动会提供-些配置文件，如/etc/ansible/ansible. cfg。而使用pip安装的Ansible默认不提供配置文件。

## 3 Ansible 参数补全功能

从Ansible 2.9版本开始，它支持命令的选项补全功能，它依赖于python的argcomplete插件

安装argcomplete:

```
yum -y install python-argcomplete
pip3 install argcomplete
```

安装完成后，激活插件

```
activate-global-python-argcomplete 
```

重新进去终端，即可使用tab参数补全功能

## 4 Ansible配置文件管理

### 4.1 配置文件优先级

ansible的配置文件名为ansible.cfg，它一般会存在于四个地方：

- ANSIBLE_CONFIG：首先，Ansible命令会检查该环境变量，及这个环境变量将指向的配置文件
- ./ansible.cfg：当前工作目录，即当前执行ansible指令的目录，如果ANSIBEL_CONFIG环境变量未定义，则优先使用该配置文件
- ~/.ansible.cfg：当前用户家目录下的一个隐藏文件，如果当前工作目录下不存在ansible.cfg配置文件，则会查找用户家目录下的该隐藏文件
- /etc/ansible/ansible.cfg：默认配置文件，如果上面两个路径下的ansible.cfg都不存在，则使用该文件

> 需要说明的是，配置文件中所有的配置项都可以通过环境变量的方式来定义，而环境变量定义的配置项具有最高优先级，会覆盖掉所有配置文件中的配置项

### 4.2 配置文件详解

Ansible 配置文件采用ini风格进行配置，每一项配置都使用`key=value`的方式进行配置

#### 4.2.1 配置文件分段说明

ansible.cfg的配置默认分为十段：

- [defaults]：通用配置项
- [inventory]：与主机清单相关的配置项
- [privilege_escalation]：特权升级相关的配置项
- [paramiko_connection]：使用paramiko连接的相关配置项，Paramiko在RHEL6以及更早的版本中默认使用的ssh连接方式
- [ssh_connection]：使用OpenSSH连接的相关配置项，OpenSSH是Ansible在RHEL6之后默认使用的ssh连接方式
- [persistent_connection]：持久连接的配置项
- [accelerate]：加速模式配置项
- [selinux]：selinux相关的配置项
- [colors]：ansible命令输出的颜色相关的配置项
- [diff]：定义是否在运行时打印diff（变更前与变更后的差异）

#### 4.2.2 配置参数说明

```
[default]
inventory      = /etc/ansible/hosts
remote_user    = root
ask_pass       = false
log_path       = /var/log/ansible.log

[privilege_escalation]
become=True
become_method=sudo
become_user=root
become_ask_pass=False

[ssh_connection]
ssh_args = -C -o ControlMaster=auto -o ControlPersist=60s 
host_key_checking = False 
```

配置项说明：

- inventory：定义默认使用的主机清单
- remote_user： ansible在操作远程主机时，使用远程主机上的哪个用户身份，默认是root
- ask_pass：ansible在操作远程主机时，获取远程主机上的用户身份，是否交互提示密码验证，默认为true。如果使用密钥认证的话，建议将其设置为false
- log_path：默认ansible 执行的时候，并不会输出日志到文件，打开该配置项，所有的命令执行后，都会将日志输出到`/var/log/ansible.log`文件。
- become：如果ansible在操作远程主机时，使用的是远程主机上的普通用户，该普通用户是否允许提权
- become_method：如果允许提权，使用何种提权方式，默认是sudo
- become_user：提权到哪个用户身份，默认是root
- become_ask_pass：提权时，是否交互提示密码验证，默认为False
- ssh_args：ansible通过ssh连接远程被管理机，这里用于定义一些ssh连接时的参数，如-C启用压缩传输，ControlPersist用于提升性能。
- host_key_checking：通过ssh首次连接远程主机时，由于在本机的`~/.ssh/known_hosts`文件中并有`fingerprint key`串，ssh第一次连接的时候一般会提示输入yes/no进行确认将key字符串加入到`~/.ssh/known_hosts`文件中。将此项设置为False将跳过该确认过程。

> 参考链接：
>
> https://www.cnblogs.com/breezey/p/8810263.html
>
> https://blog.51cto.com/cloumn/blog/1540
