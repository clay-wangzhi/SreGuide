---
title: 每天一个linux命令（41）-kill
tag: linux常用命令
categories: Linux
date: 2018-07-27 19:12:00
copyright: true
---

Linux中的kill命令用来终止指定的进程（terminate a process）的运行，是Linux下进程管理的常用命令。通常，终止一个前台进程可以使用Ctrl+C键，但是，对于一个后台进程就须用kill命令来终止，我们就需要先使用ps/pidof/pstree/top等工具获取进程PID，然后使用kill命令来杀掉该进程。kill命令是通过向进程发送指定的信号来结束相应进程的。在默认情况下，采用编号为15的TERM信号。TERM信号将终止所有不能捕获该信号的进程。对于那些可以捕获该信号的进程就要用编号为9的kill信号，强行“杀掉”该进程。 

<!--more-->

## 语法

`kill(选项)(参数)`

## 选项

```
-a：当处理当前进程时，不限制命令名和进程号的对应关系；
-l <信息编号>：若不加<信息编号>选项，则-l参数会列出全部的信息名称；
-p：指定kill 命令只打印相关进程的进程号，而不发送任何信号；
-s <信息名称或编号>：指定要送出的信息；
-u：指定用户。
```

## 参数

进程或作业识别号：指定要删除的进程或作业。

## 功能

发送指定的信号到相应进程。不指定型号将发送SIGTERM（15）终止指定进程。如果无法终止该程序可用“-KILL”参数，其发送的信号为SIGKILL（9），将强制结束进程，使用ps命令或者jobs命令可以查看进程号。root用户将影响用户的进程，非root用户只能影响自己的进程。

## 常用实例

```
# kill -l
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL
 5) SIGTRAP      6) SIGABRT      7) SIGBUS       8) SIGFPE
 9) SIGKILL     10) SIGUSR1     11) SIGSEGV     12) SIGUSR2
13) SIGPIPE     14) SIGALRM     15) SIGTERM     16) SIGSTKFLT
17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU
25) SIGXFSZ     26) SIGVTALRM   27) SIGPROF     28) SIGWINCH
29) SIGIO       30) SIGPWR      31) SIGSYS      34) SIGRTMIN
35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3  38) SIGRTMIN+4
39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12
47) SIGRTMIN+13 48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14
51) SIGRTMAX-13 52) SIGRTMAX-12 53) SIGRTMAX-11 54) SIGRTMAX-10
55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7  58) SIGRTMAX-6
59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
63) SIGRTMAX-1  64) SIGRTMAX
```

说明：

只有第9种信号(SIGKILL)才可以无条件终止进程，其他信号进程都有权利忽略。	下面是常用的信号：

HUP    1    终端断线

INT     2    中断（同 Ctrl + C）

QUIT    3    退出（同 Ctrl + \）

TERM   15    终止

KILL    9    强制终止

CONT   18    继续（与STOP相反， fg/bg命令）

STOP    19    暂停（同 Ctrl + Z）

2）得到指定信号的数值

```
# kill -l KILL
9
# kill -l SIGKILL
9
# kill -l TERM
15
# kill -l SIGTERM
15
```

3）先用ps查找进程，然后用kill杀掉

```
#ps -ef|grep vim 
root      3268  2884  0 16:21 pts/1    00:00:00 vim install.log
root      3370  2822  0 16:21 pts/0    00:00:00 grep vim
# kill 3268 
# kill 3268 
-bash: kill: (3268) - 没有那个进程
```

4）彻底杀死进程

```
# ps -ef|grep vim 
root      3268  2884  0 16:21 pts/1    00:00:00 vim install.log
root      3370  2822  0 16:21 pts/0    00:00:00 grep vim
# kill –9 3268 
# kill 3268 
-bash: kill: (3268) - 没有那个进程
```

5）杀死指定用户所有进程

```
# kill -9 $(ps -ef | grep peidalinux) 
# kill -u peidalinux
```

6）init进程是不可杀的

```
# ps -ef|grep init
root         1     0  0 Nov02 ?        00:00:00 init [3]                  
root     17563 17534  0 17:37 pts/1    00:00:00 grep init
# kill -9 1
# kill -HUP 1
# ps -ef|grep init
root         1     0  0 Nov02 ?        00:00:00 init [3]                  
root     17565 17534  0 17:38 pts/1    00:00:00 grep init
# kill -KILL 1
# ps -ef|grep init
root         1     0  0 Nov02 ?        00:00:00 init [3]                  
root     17567 17534  0 17:38 pts/1    00:00:00 grep init
```

说明：

init是Linux系统操作中不可缺少的程序之一。所谓的init进程，它是一个由内核启动的用户级进程。内核自行启动（已经被载入内存，开始运行，并已初始化所有的设备驱动程序和数据结构等）之后，就通过启动一个用户级程序init的方式，完成引导进程。所以,init始终是第一个进程（其进程编号始终为1）。 其它所有进程都是init进程的子孙。init进程是不可杀的！

参考链接：

http://www.cnblogs.com/peida/archive/2012/12/20/2825837.html

http://man.linuxde.net/kill