---
title: 基本命令
tag: linux
abbrlink: f4463618
date: 2017-08-16 21:00:00
---

#   初识shell

GNU bash

Shell是系统的用户界面，提供了用户与内核进行交互操作的一种接口。它接收用户输入的命令并把它送内核去执行。实际上Shell是一个命令解释器，它解释由用户输入的命令并且把它们送到内核。不仅如此，Shell有自己的编程语言用于对命令的编辑，它允许用户编写由shell命令组成的程序。Shell编程语言具有普通编程语言的很多特点，比如它也有循环结构和分支控制结构等，用这种编程语言编写的Shell程序与其他应用程序具有同样的效果。

<!--more-->

我们可以使用SHELL实现对Linux系统的大部分管理例如：


1. 文件管理
2. 用户管理
3. 权限管理
4. 磁盘管理
5. 软件管理
6. 网络管理
......

## bash shell提示符

1.

````
echo $PS1
````

[\u@\h \W]$

[用户 在 主机名 用户的家]    #  超级用户   $普通用户echo  $USER

2.

```
whoami                     ==   echo $USER
```

root

3.

````
useradd boss
passwd boss
````

更改用户 boss 的密码 
新的 密码：
无效的密码： WAY 过短
无效的密码： 过于简单
重新输入新的 密
passwd： 所有的身份验证令牌已经成功更新

## shell 语法

命令    选项   参数

 ````
ls -a /home/                           //-a代表显示全部文件
 ````

命令：整条shell命令的主体
选项：会影响会微调命令的行为		         //通常以 -, --
参数：命令作用的对象  

## bash基本特性

### 命令和文件自动补全 tab键               

Tab只能补全命令和文件（在centos7之前）

````
ls /etc/sysconfig/network-scripts/
ls /etc/sysconfig/network-scripts/ifcfg-eth0
cat /etc/sysconfig/network-scripts/ifcfg-eth0
service network restart
service sshd restart
date -s 12:30
````

### 快捷键

Esc键

Esc+. 上一个命令的后面的参数

Esc+B 移动到当前单词的开头

Esc+F 移动到当前单词的结尾

Esc+T 颠倒光标所在处及其相邻单词的位置



Ctrl键

Ctrl+A 光标移到命令行的最前端

Ctrl+C 终止前台运行的程序

Ctrl+D 退出 等价exit

Ctrl+E 光标移动到命令行的后端

Ctrl+K 删除光标处到行尾的字符

Ctrl+R 搜索历史名利，利用关键字

Ctrl+T 交换光标位置前的两个字符

Ctrl+U 删除整个命令行文本字符

Ctrl+W 移除光标前的一个单词

Ctrl+Y 粘贴Ctrl+u，Ctrl+k，Ctrl+w删除的文本，粘贴或者恢复上次的删



### 历史命令

1.history

````
history
````

!220						                       //执行历史命令中第220条命令
!字符串					                           //搜索历史命令中最近一个以xxxx字符开头的命令，例如!ser

2.光标上下键



3.^R

搜索历史命令(输入一段某条命令的关键字：必须是连续的)

### 命令别名


1.查看系统当前的别名

````
alias
````

alias cp='cp -i'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias mv='mv -i'
alias rm='rm -i'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'



2.临时别名

````
cat aa.txt 
````

aa aa aa

````
alias boss='cat aa.txt'     //建立别名
boss
````

aa aa aa

````
unalias boss            //取消boss这个别名
````



3.永久别名

````
gedit /etc/bashrc              //添加如下行
alias boss='cat aa.txt'
````

## Linux获得帮助

### 命令 --help

1.

````
ls --help
````

用法：ls [选项]... [文件]...

ls 常见选项
-a    all,查看目录下的所有文件，包括隐藏文件
-l     长列表显示
-h    human 以人性化方式显示出来   
-d    只列出目录名，不列出其他内容                       
-t     按修改时间排序
-S    按文件的Size排序
-r     逆序排列reverse
-i     显示文件的inode号（索引号）

2.

````
date --help
````

用法：date [选项]... [+格式]
　或：date [-u|--utc|--universal][MMDDhhmm[[CC]YY][.ss]]

### man 手册名

针对命令帮助，针对配置文件帮助，针对函数帮助

![avatar](/images/man.png)

````
man man
````


MANUAL SECTIONS
​       The standard sections of the manual include:

​       1      User Commands

​       2      System Calls

​       3      C Library Functions

​       4      Devices and Special Files

​       5      File Formats and Conventions

​       6      Games et. Al.

​       7      Miscellanea

​       8      System Administration tools and Deamons



命令帮助：   章节1，章节8
函数帮助：   章节2，章节3
文件格式：   章节5



一般情况是不需要使用章节号，例如：

````
man ls
man useradd
man setfacl           (/EXAMPLES)
````

技巧1：按章节查询

/usr/bin/passwd                 修改用户口令命令

/etc/passwd                       包含用户信息的配置文件

````
man -f passwd               //列出所有章节中的passwd手册
man 1 passwd                //passwd命令的帮助
man 5 passwd                //用户配置文件的帮助
````

技巧2：在所有章节中查询

````
man -a passwd
````

### 官方手册

http://docs.redhat.com         Enterprise Linux (5/6/7)
http://www.mysql.com        docs

### baidu，google