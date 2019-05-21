---
title: 文件管理
tag: linux
abbrlink: ae533703
date: 2017-08-17 21:00:00
---

bash shell 对文件进行管理

创建、复制、删除、移动、查看、编辑、压缩、查找

<!--more-->

## Linux目录结构

Windows: 	以多根的方式组织文件  C:\   D:\   E:\
Linux:   		以单根的方式组织文件  /

/目录结构： FSH (Filesystem Hierarchy Standard)

```
ls
```

bin     dev   lib          media  net   root     srv  usr
boot    etc   lib64       misc   opt   sbin     sys  var
cgroup  home  lost+found  mnt    proc  selinux  tmp

bin   			    	普通用户使用的命令 /bin/ls, /bin/date
sbin    				管理员使用的命令 /sbin/service 
dev  			    	设备文件 /dev/sda,/dev/sda1,/dev/tty1,/dev/tty2,/dev/pts/1, /dev/zero, /dev/null, /dev/random
root  			    	root用户的HOME
home  				存储普通用户家目录	
lost+found     		fsck修复时，存储没有链接的文件或目录
proc  				虚拟的文件系统，反映出来的是内核，进程信息或实时状态 


usr				系统文件，相当于C:\Windows
​                    /usr/local 	软件安装的目录，相当于C:\Program
​                    /usr/bin  	普通用户使用的应用程序
​                    /usr/sbin 	管理员使用的应用程序
​                    /usr/lib      库文件Glibc
​                    /usr/lib64   库文件Glibc

boot  			存放的系统启动相关的文件，例如kernel,grub(引导装载程序)
etc  				配置文件（系统相关如网络/etc/sysconfig/network，应用相关配置文件如/etc/ssh/sshd_config...）
lib   				库文件Glibc
lib64			库文件Glibc
tmp    			临时文件(全局可写：进程产生的临时文件)   
var				存放的是一些变化文件，比如数据库，日志，邮件....
​					mysql:      	    /var/lib/mysql
​					vsftpd:		    /var/ftp
​					mail:			    /var/spool/mail
​					cron:		        /var/spool/cron
​					log:			    /var/log
​                    临时文件:     /var/tmp(进程产生的临时文件)   

## 文件时间


ls -l 文件名 	仅看的是文件的修改时间

Linux文件有四种时间：

stat anaconda-ks.cfg                              //查看文件的详细属性（其中包括文件时间属性）

访问时间：atime，查看内容                    
修改时间：mtime，修改内容
改变时间：ctime，文件属性，比如权限
删除时间：dtime，文件被删除的时间

## 文件类型

方法一：


ls -l 文件名    //看第一个字符

\-  普通文件（文本文件，二进制文件，压缩文件，电影，图片）

d 目录文件（蓝色）
b 设备文件（块设备）存储设备硬盘，U盘 /dev/sda, /dev/sda1
c 设备文件（字符设备）打印机，终端 /dev/tty1
s 套接字文件
p 管道文件
l  链接文件（淡蓝色）

```
ll -d /root/anaconda-ks.cfg /bin/ls /home /dev/sda /dev/tty1 /etc/grub.conf /dev/log
```

-rwxr-xr-x  1 root root 117024 4月  17 2012 /bin/ls
srw-rw-rw-  1 root root      0 4月  14 13:29 /dev/log
brw-rw----  1 root disk   8, 0 4月  14 13:30 /dev/sda
crw--w----  1 root tty    4, 1 4月  14 13:29 /dev/tty1
lrwxrwxrwx. 1 root root     22 4月  13 15:10 /etc/grub.conf -> ../boot/grub/grub.conf
drwxr-xr-x. 5 root root   4096 4月  14 13:40 /home
-rw-------. 1 root root   4001 4月  14 14:12 /root/anaconda-ks.cfg

方法二：file

```
file /bin/ls
```

/bin/ls: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs)

```
file /home
```

/home/: directory

```
file /dev/sda
```

/dev/sda: block special                                                              			块设备

```
file /dev/tty1
```

/dev/tty1: character special (4/1)                                               		字符设备

```
file /etc/grub.conf
```

/etc/grub.conf: symbolic link to `../boot/grub/grub.conf'              	 符号连接

```
file /dev/log 
```

/dev/log: socket                                                                       			 套接字

## 路径（定位文件）

你要在哪儿创建文件？
你要将什么文件复制到什么地方？
你要删除什么地方的什么文件？

绝对路径：	    从/开始的路径

相对路径：	    相对于当前目录开始

## 文件管理

### cd改变目录

cd                  绝对路径    cd /home

cd                  相对路径     home/boss

cd -     	 	返回上次目录

cd	                  直接回家

### 创建/复制/移动/删除

touch mkdir cp mv rm

略

### 查看文件内容

cat less more head tail tailf grep 

略

#### 扩展知识

dos2unix 	将Windows格式的文件转换成Unix格式
unix2dos 	将Unix格式的文件转换成Windows格式

### 修改

文件编辑器 gedit
文件编辑器 vi, vim, nano 
