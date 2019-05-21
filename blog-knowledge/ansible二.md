---
title: Ansible学习笔记（二）
tag: Ansible
abbrlink: 56ed2168
date: 2017-09-10 21:00:00
---

Ansible是开源工具，整个开发过程或二次开发均遵循GPL协议，所以所有源码均可见。作为一款日常工作所需的核心软件，我们有必要知道其目录分布及各目录功能。

<!--more-->

## Ansible目录文件介绍

```
# rpm -ql ansible
```

该命令输出内容较多，大致分为如下几类：

- 配置文件目录/etc/ansible/
- 执行文件目录/usr/bin/
- Lib库依赖目录/usr/lib/pythonX.X/site-packages/ansible/
- Help文档目录/usr/share/doc/ansible-X.X.X
- Man文档目录/usr/share/man/man1/
整体目录结构可参照下图

![](/images/ansible3.png)

其中，如下目录运维常要配置，需熟练掌握。

1）配置文件目录/etc/ansible/，主要功能为：Inventory主机信息配置、Ansible工具功能配置等。所有Ansible的配置均存放在该目录下，运维日常的所有配置类操作也均基于此目录进行。

2）执行文件目录/usr/bin，主要功能为：Ansible系列命令默认存放目录。Ansible所有的可执行文件均 存放在该目录下。

## Ansible配置文件解析

Inventory用于定义Ansible的主机列表配置，Ansible的自身配置文件只有一个，即ansible.cfg，Ansible安装好后它默认存放于/etc/ansible/目录下。ansible.cfg配置文件可以存在于多个地方，Ansible读取配置文件的顺序依次是当前命令执行目录--》用户家目录下的.ansible.cfg--》/etc/ansible.cfg，先找到哪个就用哪个的配置。其ansile.cfg配置的所有内容均可通过参数的形式传递或定义在Playbooks中。

配置文件ansible.cfg约有350行语句，大多数为注释行默认配置项。该文件遵循INI格式，分为如下几类配置。

（1）[defaults]

该类配置下定义常规的连接类配置，如inventory、library、remote_tmp、local_tmp、forks、poll_interwal、sudo_user、ask_sudo_pass、ask_pass、transport、remote_port等。

![](/images/ansible4.png)

![](/images/ansible5.png)









