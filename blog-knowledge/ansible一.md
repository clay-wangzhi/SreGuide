---
title: Ansible学习笔记（一）
tag: Ansible
abbrlink: 66fbcdb0
date: 2017-09-09 21:00:00
---

Let's learn together Ansible!

<!--more-->

- Ansible官方地址： https://docs.ansible.com/;

- GitHub地址：https://github.com/ansible/ansible/blob/devel/docsite/rst/index.rst;

- Ansible中文权威地址：http://www.ansible.com.cn/。

## Ansible是如何工作的

Ansible没有客户端，因此底层通信依赖于系统软件，Linux系统下基于OpenSSH通信，Windows系统下基于PowerShell，管理端必须是Linux系统，使用者认证通过之后在管理节点通过Ansible工具调用各应用模块将指令推送至被管理端执行，并在执行完毕后自动删除产生的临时文件。根据Ansible使用过程中的不同角色，我们将其分为：

- 使用者

- Ansible工具集

- 作用对象

1）使用者

​	如图1-1中Ansible工作机制所示，Ansible使用者来源于多种维度，图中为我们展示了4种方式：

![](/images/ansible1.png)

第一种方式：CMDB（Configuration Management Database，配置管理数据库），CMDB存储和管理着企业IT架构中的各项配置信息，是构建ITIL项目的核心工具，运维人员可以组合CMDB和Ansible，通过CMDB直接下发指令调用Ansible工具完成操作者所希望达成的目标；

第二种方式：PUBLIC/PRIVATE方式，Ansible除了丰富的内置模块外，同时提供丰富的API语言接口，如PHP、Python、PERL等多种当下流行语言，基于PUBLIC（公有云）/PRIVATE（私有云），Ansible一API调用的方式运行；

第三种方式：USERS直接使用Ad-Hoc临时命令调用Ansible工具集来完成任务执行；

第四种方式：USERS预先编写好的ANSIBLE PLAYBOOKS，通过执行Playbooks中预先编排好的任务集按序完成任务执行。

2）Ansible工具集

ansible命令时Ansible的核心工具，ansible命令并非自身完成所有的功能集，其只是Ansible执行任务的调用入口，大家可以理解为“总指挥”，所有命令的执行通过其“调兵遣将”最终完成。ansible命令共有哪些兵将可供使唤呢？图片中间框有INVENTORY（命令执行的目标对象配置文件）、API（供第三方程序调用的应用程序编程接口）、MODULES（丰富的内置模块）、PLUGINS（内置和可自定义的插件）这些可供调遣。

3）作用对象

Ansible的作用对象，不仅仅是Linux和非Linux操作系统的主机（HOSTS），同样也可以作用于各类公有云/私有云,商业和非商业设备的网络设施。

​	同样，如果我们按Ansible工具集的组成来讲，由图1-1可以看出Ansible主要由6部分组成。

- ANSIBLE PLAYBOOKS：任务剧本（任务集），编排定义Ansible任务集的配置文件，由Ansible顺序依次执行，通常是JSON格式的YML文件；

- INVENTORY：Ansible管理主机的清单；

- MODULES：Ansible执行命令的功能模块，多数为内置的核心模块，也可自定义；

- PLUGINS：模块功能的补充，如连接类型插件、循环插件、变量插件、过滤插件等，该功能不常用；

- API：供第三方程序调用的应用程序编程接口；

- ANSIBLE：该部分图中表示的不明显，组合INVENTORY、API、MODULES、PLUGINS的中间部分大家可以理解为是Ansible命令工具，其为核心执行工具；

Ansible执行任务这些组件相互调用关系如图1-2所示：

![](/images/ansible2.png)

使用者使用Ansible或Ansible-playbook（会额外读取Playbook文件）时，在服务器终端输入Ansible的Ad-Hoc命令集或Playbook后，Ansible会遵循预先编排的规则将Playbooks逐条拆解为Play，再将Play组织成Ansible可识别的任务（Task），随后调用任务涉及的所有模块（Module）和插件（Plugin），根据Inventory中定义的主机列表通过SSH（Linux默认）将任务集以临时文件或命令的形式传输到远程客户端执行并返回执行结果，如果是临时文件则执行完毕后自动删除。

## Ansible的安装部署

### PIP方式

安装pyhton-pip及python-devel程序包。

```
yum -y install python-pip python-devel
```

安装开发环境

```
yum -y install gcc glibc-devel zlib-devel rpm-build openssl-devel
```

 升级本地PIP至最新版本

```
pip install --upgrade pip
```

安装Ansible服务

```
pip install ansible
ansible --version
```

### YUM方式

需事先安装EPEL源后方可找到并安装Ansible

```
rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
yum -y install ansible
ansible --version
```

### 源码安装方式

安装Git客户端

```
yum -y install git
```

安装Ansible软件包

```
git clone git://github.com/ansible/ansible.git
cd ansible/
source hacking/env-setup
```

