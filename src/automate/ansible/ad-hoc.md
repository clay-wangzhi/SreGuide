---
time: 2020-03-20
category: 自动化工具
tags:
  - Ansible
---

# 3 Ansible Ad-hoc命令集

## 1 Ad-hoc简介

Ad-Hoc（点对点模式）是指ansible下临时执行的一条命令，并且不需要保存的命令，对于复杂的命令会使用playbook。Ad-hoc的执行依赖于模块，ansible官方提供了大量的模块。 如：command、raw、shell、file、cron等，具体可以通过ansible-doc -l 进行查看 。可以使用ansible-doc -s module来查看某个模块的参数，也可以使用ansible-doc module来查看该模块更详细的信息。

### 1.1 命令说明

一个ad-hoc命令的执行，需要按以下格式进行执行：

```sh
ansible 主机或组 -m 模块名 -a '模块参数'  ansible参数
```

- 主机和组，是在/etc/ansible/hosts 里进行指定的部分，当然动态Inventory 使用的是脚本从外部应用里获取的主机；
- 模块名，可以通过ansible-doc -l 查看目前安装的模块，默认不指定时，使用的是command模块，具体可以查看/etc/ansible/ansible.cfg 的“#module_name = command ” 部分，默认模块可以在该配置文件中进行修改；
- 模块参数，可以通过 “ansible-doc -s 模块名” 查看具体的用法及后面的参数；
- ansible参数，可以通过ansible命令的帮助信息里查看到，这里有很多参数可以供选择，如是否需要输入密码、是否sudo等。

### 1.2  用户说明

ansible在执行ad-hoc的时候，需要使用远程管理机上的一个用户身份，默认这个用户是root，而在实际生产环境中，不建议直接使用root，而推荐使用一个普通用户，需要配置该普通用户可通过sudo提权。

下面是一个配置示例：

1. 在被管理机上创建一个普通用户ansible，并配置sudo提权：

```
# 创建ansible用户
useradd ansible

# 设置ansible用户可免密提权
vim /etc/sudoers.d/ansible
ansible    ALL=(ALL)       NOPASSWD:ALL

chmod 400 /etc/sudoers.d/ansible

mkdir /home/ansible/.ssh
chown ansible.ansible /home/ansible/.ssh
chmod 700 /home/ansible/.ssh
```

1. 在管理端修改ansible.cfg配置文件如下：

```
[default]
remote_user = ansible
ask_pass = False

[privilege_escalation]
become=True
become_method=sudo
become_user=root
become_ask_pass=False
```

1. 将管理端用户的`id_rsa.pub`复制到被管理端的`/home/ansible/.ssh//home/ansible/.ssh/authorized_keys`文件中，并设置该文件的权限为400

```
# 管理端执行：
ssh-copy-id -i .ssh/id_rsa.pub ansible@db1.example.com
```

> 需要说明的是，通过上面的操作，需要为ansible用户先创建密码，在实际生产当中，不建议为该用户设置密码。可在安装系统时，提前将管理端公钥直接写入到被管理节点的ansible用户下

### 1.3 命令执行模块

命令执行模块包含如下 四个模块：

- command模块：该模块通过-a跟上要执行的命令可以直接执行，不过命令里如果有带有如下字符部分则执行不成功 “ "<", ">", "|", "&" 
- shell 模块：用法基本和command一样，但是支持解析特殊shell符号
- raw模块：执行底层shell命令。command和shell模块都是通过目标主机上的python代码启动/bin/sh来执行命令的，但目标主机上可能没有安装python，这时只能使用raw模块在远程主机上直接启动/bin/sh来执行命令，通常只有在目标主机上安装python时才使用raw模块，其它时候都不使用该模块
- script模块：在远程主机上执行脚本文件，其原理是先将shell 复制到远程主机，再在远程主机上执行

> raw模块和comand、shell 模块不同的是其没有chdir、creates、removes参数，chdir参数的作用就是先切到chdir指定的目录后，再执行后面的命令，这在后面很多模块里都会有该参数 。

## 2 常用模块

根据官方的分类，将模块按功能分类为：云模块、命令模块、数据库模块、文件模块、资产模块、消息模块、监控模块、网络模块、通知模块、包管理模块、源码控制模块、系统模块、单元模块、web设施模块、windows模块 ，具体可以参看官方页面。

这里从官方分类的模块里选择最常用的一些模块进行介绍。

### 2.1 command模块

command模块包含如下选项：

- creates：一个文件名，当该文件存在，则该命令不执行
- free_form：要执行的linux指令
- chdir：在执行指令之前，先切换到该指定的目录
- removes：一个文件名，当该文件不存在，则该选项不执行
- executable：切换shell来执行指令，该执行路径必须是一个绝对路径

chdir示例：

```sh
# 三个命令都会返回执行成功的状态。不过实际上只有前两个文件会被创建成功。使用raw模块的执行的结果文件事实上也被正常创建了，不过不是在chdir指定的目录，而是在当前执行用户的家目录
ansible 192.168.1.1 -m command -a 'chdir=/tmp/test.txt touch test.file'
ansible 192.168.1.1 -m shell -a 'chdir=/tmp/test.txt touch test2.file'
ansible 192.168.1.1 -m raw -a 'chdir=/tmp/text.txt touch test3.file'
```

creates与removes示例：

```sh
ansible 192.168.1.1 -a 'creates=/tmp/server.txt uptime' #当/tmp/server.txt文件存在时，则不执行uptime指令
ansible 192.168.1.1 -a 'removes=/tmp/server.txt uptime' #当/tmp/server.txt文件不存在时，则不执行uptime指令
```

### 2.2 script模块

示例：

```sh
#要执行的脚本文件script.sh内容如下： 

#/bin/bash
ifconfig
df -hT

# 执行ansible指令：
ansible 10.212.52.252 -m script -a 'script.sh' 
```

### 2.3 ping模块

测试主机是否是通的，用法很简单，不涉及参数：

```sh
 ansible test -m ping
```

### 2.4 file模块

file模块主要用于远程主机上的文件操作，file模块包含如下选项：

- force：需要在两种情况下强制创建软链接，一种是源文件不存在但之后会建立的情况下；另一种是目标软链接已存在,需要先取消之前的软链，然后创建新的软链，有两个选项：yes|no
- group：定义文件/目录的属组
- mode：定义文件/目录的权限
- owner：定义文件/目录的属主
- path：必选项，定义文件/目录的路径
- src：要被链接的源文件的路径，只应用于state=link的情况
- dest：被链接到的路径，只应用于state=link的情况
- state：
  - directory：如果目录不存在，创建目录
  - file：即使文件不存在，也不会被创建
  - link：创建软链接
  - hard：创建硬链接
  - touch：如果文件不存在，则会创建一个新的文件，如果文件或目录已存在，则更新其最后修改时间
  - absent：删除目录、文件或者取消链接文件

使用示例：

```sh
ansible 192.168.8.120 -m file -a 'path=/tmp/test.txt state=touch owner=root group=root mode=644'

ansible 192.168.8.120 -m file -a 'src=/tmp/test.txt dest=/root/test.txt state=link'

ansible 192.168.8.120 -m file -a 'path=/tmp/test.txt state=file'

ansible 192.168.8.120 -m file -a 'path=/tmp/test state=directory owner=root group=root mode=755'

ansible 192.168.8.120 -m file -a 'path=/tmp/test2/test3/aaa/bbb state=directory owner=root group=root mode=755'

ansible 192.168.8.120 -m file -a 'path=/tmp/test2 state=absent'
```

### 2.5 copy模块

复制文件到远程主机，copy模块包含如下选项：

- backup：在覆盖之前将原文件备份，备份文件包含时间信息。有两个选项：yes|no
- content：用于替代"src",可以直接设定指定文件的值
- dest：必选项。要将源文件复制到的远程主机的绝对路径，如果源文件是一个目录，那么该路径也必须是个目录
- force：如果目标主机包含该文件，但内容不同，如果设置为yes，则强制覆盖，如果为no，则只有当目标主机的目标位置不存在该文件时，才复制。默认为yes
- others：所有的file模块里的相关文件属性选项都可以在这里使用
- src：要复制到远程主机的文件在本地的地址，可以是绝对路径，也可以是相对路径。如果路径是一个目录，它将递归复制。在这种情况下，如果路径使用"/"来结尾，则只复制目录里的内容，如果没有使用"/"来结尾，则包含目录在内的整个内容全部复制，类似于rsync。

示例如下：

```
ansible 192.168.8.120 -m copy -a 'src=/etc/ansible/ansible.cfg dest=/usr/local/src/ owner=root group=root mode=644'

ansible 192.168.8.120 -m copy -a 'backup=yes src=/etc/fstab dest=/usr/local/src/ansible.cfg owner=root group=root mode=644'

ansible 192.168.8.120 -m copy -a 'content="just a test!" dest=/usr/local/src/test.txt'

ansible 192.168.8.120 -m copy -a 'src=/data dest=/usr/local/src/'

ansible 192.168.8.120 -m copy -a 'src=/data/ dest=/usr/local/src/'

ansible 192.168.8.120 -m copy -a "src=/mine/sudoers dest=/etc/sudoers validate='visudo -cf %s'"
```

### 2.6 yum模块

使用yum包管理器来管理软件包，其选项有：

- `name`：要进行操作的软件包的名字，也可以传递一个url或者一个本地的rpm包的路径
- `state`：状态（present，absent，latest）

示例如下：

```
ansible test -m yum -a 'name=httpd state=latest'
ansible test -m yum -a 'name="@Development tools" state=present'
ansible test -m yum -a 'name=http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm state=present'
```

### 2.7 service模块

用于管理服务
该模块包含如下选项：

- arguments：给命令行提供一些选项
- enabled：是否开机启动 yes|no
- name：必选项，服务名称
- pattern：定义一个模式，如果通过status指令来查看服务的状态时，没有响应，就会通过ps指令在进程中根据该模式进行查找，如果匹配到，则认为该服务依然在运行
- runlevel：运行级别
- sleep：如果执行了restarted，在则stop和start之间沉睡几秒钟
- state：对当前服务执行启动，停止、重启、重新加载等操作（started,stopped,restarted,reloaded）
- daemon_reload：针对使用systemd的系统，重新加载systemd配置，yes/no

使用示例：

```
ansible test -m service -a "name=httpd state=started enabled=yes"
asnible test -m service -a "name=foo pattern=/usr/bin/foo state=started"
ansible test -m service -a "name=network state=restarted args=eth0"
```

### 2.8 cron模块

用于管理计划任务

包含如下选项：

- backup：对远程主机上的原任务计划内容修改之前做备份
- cron_file：如果指定该选项，则用该文件替换远程主机上的cron.d目录下的用户的任务计划
- day：日（1-31，*，*/2,……）
- hour：小时（0-23，*，*/2，……）
- minute：分钟（0-59，*，*/2，……）
- month：月（1-12，*，*/2，……）
- weekday：周（0-7，*，……）
- job：要执行的任务，依赖于state=present
- name：该任务的描述
- special_time：指定什么时候执行，参数：reboot,yearly,annually,monthly,weekly,daily,hourly
- state：确认该任务计划是创建还是删除
- user：以哪个用户的身份执行

示例：

```sh
ansible test -m cron -a 'name="a job for reboot" special_time=reboot job="/some/job.sh"'
ansible test -m cron -a 'name="yum autoupdate" weekday="2" minute=0 hour=12 user="root"'
ansible test -m cron  -a 'backup="True" name="test" minute="0" hour="5,2" job="ls -alh > /dev/null"'
ansilbe test -m cron -a 'cron_file=ansible_yum-autoupdate state=absent'
```

### 2.9 user模块与group模块

user模块是请求的是useradd, userdel, usermod三个指令，goup模块请求的是groupadd, groupdel, groupmod 三个指令。

#### 2.9.1 user模块

- home：指定用户的家目录，需要与createhome配合使用
- groups：指定用户的属组
- uid：指定用的uid
- password：指定用户的密码
- name：指定用户名
- createhome：是否创建家目录 yes|no
- system：是否为系统用户
- remove：当state=absent时，remove=yes则表示连同家目录一起删除，等价于userdel -r
- state：是创建还是删除
- shell：指定用户的shell环境

使用示例：

```sh
user: name=johnd comment="John Doe" uid=1040 group=admin
user: name=james shell=/bin/bash groups=admins,developers append=yes user: name=johnd state=absent remove=yes
user: name=james18 shell=/bin/zsh groups=developers expires=1422403387
#生成密钥时，只会生成公钥文件和私钥文件，和直接使用ssh-keygen指令效果相同，不会生成authorized_keys文件
user: name=test generate_ssh_key=yes ssh_key_bits=2048 ssh_key_file=.ssh/id_rsa  
```

需要说明的是，在指定password参数时，不能使用明文密码，因为后面这一串密码会被直接传送到被管理主机的/etc/shadow文件中，所以需要先将密码字符串进行加密处理。然后将得到的字符串放到password中即可。

```
echo "123456" | openssl passwd -1 -salt $(< /dev/urandom tr -dc '[:alnum:]' | head -c 32) -stdin
$1$4P4PlFuE$ur9ObJiT5iHNrb9QnjaIB0

#使用上面的密码创建用户
ansible all -m user -a 'name=foo password="$1$4P4PlFuE$ur9ObJiT5iHNrb9QnjaIB0"'
```

> 不同的发行版默认使用的加密方式可能会有区别，具体可以查看/etc/login.defs文件确认，centos 6.5版本使用的是SHA512加密算法。

#### 2.9.2 group示例

```
group: name=somegroup state=present
```

### 2.10 synchronize模块

使用rsync同步文件，其参数如下：

- archive: 归档，相当于同时开启recursive(递归)、links、perms、times、owner、group、-D选项都为yes ，默认该项为开启
- checksum: 跳过检测sum值，默认关闭
- compress:是否开启压缩
- copy_links：复制链接文件，默认为no ，注意后面还有一个links参数
- delete: 删除不存在的文件，默认no
- dest：目录路径
- dest_port：默认目录主机上的端口 ，默认是22，走的ssh协议
- dirs：传输目录不进行递归，默认为no，即进行目录递归
- rsync_opts：rsync参数部分
- set_remote_user：主要用于/etc/ansible/hosts中定义或默认使用的用户与rsync使用的用户不同的情况
- mode: push或pull 模块，push模的话，一般用于从本机向远程主机上传文件，pull 模式用于从远程主机上取文件

使用示例：

```
src=some/relative/path dest=/some/absolute/path rsync_path="sudo rsync"
src=some/relative/path dest=/some/absolute/path archive=no links=yes
src=some/relative/path dest=/some/absolute/path checksum=yes times=no
src=/tmp/helloworld dest=/var/www/helloword rsync_opts=--no-motd,--exclude=.git mode=pull
```

### 2.11 filesystem模块

在块设备上创建文件系统
常用选项：

- dev：目标块设备
- force：在一个已有文件系统 的设备上强制创建
- fstype：文件系统的类型
- opts：传递给mkfs命令的选项

示例：

```sh
ansible test -m filesystem -a 'fstype=ext2 dev=/dev/sdb1 force=yes'
ansible test -m filesystem -a 'fstype=ext4 dev=/dev/sdb1 opts="-cc"'
```

### 2.12 mount模块

配置挂载点
选项：

- dump
- fstype：必选项，挂载文件的类型
- name：必选项，挂载点
- opts：传递给mount命令的参数
- src：必选项，要挂载的文件
- state：必选项
  - present：只处理fstab中的配置
  - absent：删除挂载点
  - mounted：自动创建挂载点并挂载之
  - umounted：卸载

示例：

```
name=/mnt/dvd src=/dev/sr0 fstype=iso9660 opts=ro state=present
name=/srv/disk src='LABEL=SOME_LABEL' state=present
name=/home src='UUID=b3e48f45-f933-4c8e-a700-22a159ec9077' opts=noatime state=present

ansible test -a 'dd if=/dev/zero of=/disk.img bs=4k count=1024'
ansible test -a 'losetup /dev/loop0 /disk.img'
ansible test -m filesystem 'fstype=ext4 force=yes opts=-F dev=/dev/loop0'
ansible test -m mount 'name=/mnt src=/dev/loop0 fstype=ext4 state=mounted opts=rw'
```

### 2.13 get_url 模块

该模块主要用于从http、ftp、https服务器上下载文件（类似于wget），主要有如下选项：

- sha256sum：下载完成后进行sha256 check；
- timeout：下载超时时间，默认10s
- url：下载的URL
- url_password、url_username：主要用于需要用户名密码进行验证的情况
- use_proxy：是事使用代理，代理需事先在环境变更中定义

示例：

```
get_url: url=http://example.com/path/file.conf dest=/etc/foo.conf mode=0440
get_url: url=http://example.com/path/file.conf dest=/etc/foo.conf sha256sum=b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c
```

### 2.14 unarchive模块

用于解压文件，模块包含如下选项：

- copy：在解压文件之前，是否先将文件复制到远程主机，默认为yes。若为no，则要求目标主机上压缩包必须存在。
- creates：指定一个文件名，当该文件存在时，则解压指令不执行
- dest：远程主机上的一个路径，即文件解压的路径
- group：解压后的目录或文件的属组
- list_files：如果为yes，则会列出压缩包里的文件，默认为no，2.0版本新增的选项
- mode：解决后文件的权限
- src：如果copy为yes，则需要指定压缩文件的源路径
- owner：解压后文件或目录的属主

示例如下：

```
- unarchive: src=foo.tgz dest=/var/lib/foo
- unarchive: src=/tmp/foo.zip dest=/usr/local/bin copy=no
- unarchive: src=https://example.com/example.zip dest=/usr/local/bin copy=no
```

### 2.15 debug

用于输出调试一些数据，模块包含如下选项：

* msg：可以输出字符串，可以输出变量的值，变量调用需加"{{}}"
* var：只能输出变量的值，变量调用无需加任何东西，只需数据变量名称

示例如下：

```bash
$ ansible localhost -e 'str=world' -m debug -a 'msg="hello {{str}}"'
localhost | SUCCESS => {
    "msg": "hello world"
}

$ ansible localhost -e 'str="hello world"' -m debug -a 'var=str'
localhost | SUCCESS => {
    "str": "hello world"
}
```

> 参考链接：
>
> https://www.cnblogs.com/breezey/p/8810414.html
>
> https://www.cnblogs.com/breezey/p/8811187.html
>
> https://blog.51cto.com/cloumn/blog/1544
