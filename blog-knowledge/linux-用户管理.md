---
title: 用户管理
tag: linux
abbrlink: 500fed5c
date: 2017-08-18 21:00:00
---

groupadd,groupdel
useradd,usermod,userdel
passwd,chage

<!--more-->

## 用户组 基本概念

Users and groups：
. Every process (running program) on the system runs as a particular user.
. Every file is owned by a particular user. 
. Access to files and directories are restricted by user. 
. The user associated with a running process determines the files and directories accessible to that process.

 查看当前登录的用户信息：

```
# id
uid=0(root) gid=0(root) groups=0(root)
```

查看文件的owner：

```
# ll /home/
drwxr-xr-x 10 zabbix zabbix 4096 Dec 19  2017 zabbix
```

查看运行进程的username

```
# ps -aux
Warning: bad syntax, perhaps a bogus '-'? See /usr/share/doc/procps-3.2.8/FAQ
USER        PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root          1  0.0  0.0  19344  1324 ?        Ss   Jun08   0:01 /sbin/init
root          2  0.0  0.0      0     0 ?        S    Jun08   0:00 [kthreadd]
```

和用户组相关的一些文件

/etc/passwd 	    root: x:0:0:root:/root:/bin/bash

​				  用户名: x:uid:gid:描述:HOME:shell
/etc/shadow      root: \$1\$MYG2NDG6$a1wtyr5GDM2esAPjug0YP0:15636:0:99999:7:: :
​                               \$id\$salt$encrypted
 登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志
1)“登录名”是与/etc/passwd文件中的登录名相一致的用户账号
2)“口令”字段存放的是加密后的用户口令字,长度为13个字符。如果为空,则对应用户没有口令,登
录时不需要口令;如果含有不属于集合{./0-9A-Za-z}中的字符,则对应的用户不能登录。
3)“最后一次修改时间”表示的是从某个时刻起,到用户最后一次修改口令时的天数。时间起点对不同
的系统可能不一样。例如在SCOLinux中,这个时间起点是1970年1月1日。
4)“最小时间间隔”指的是两次修改口令之间所需的最小天数。
5)“最大时间间隔”指的是口令保持有效的最大天数。
6)“警告时间”字段表示的是从系统开始警告用户到用户密码正式失效之间的天数。
7)“不活动时间”表示的是用户没有登录活动但账号仍能保持有效的最大天数。
8)“失效时间”字段给出的是一个绝对的天数,如果使用了这个字段,那么就给出相应账号的生存期。
期满后,该账号就不再是一个合法的账号,也就不能再用来登录了。                                                   
/etc/group	        root: x:0:



加密算法$id：
$1:  MD5
$5:  SHA-256
$6:  SHA-512

 


系统约定： RHEL6
uid: 0     	    特权用户
uid: 1~499 	    系统用户
uid: 500+  	    普通用户

  

The root user 


. uid is 0
. all power
. This user has the power to override normal privileges on the file system
. installing or removing software and to manage system files and directorie
. Most devices can only be controlled by rootEndFragment

## 给普通用户提权

以下两种方式都可以将普通用户提升为root

1. Switching users with su

   ```
   # su -
   ```

   ​

2. Running commands as root with sudo

   ```
   # vim /etc/sudoers
   ansible    ALL=(ALL)       NOPASSWD: ALL
   $ sudo ls
   ```

   ​

## 用户/组管理

用户组

```
# groupadd hr
# groupdel hr
```

用户

```
useradd user1
```

