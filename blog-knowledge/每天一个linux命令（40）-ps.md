---
title: 每天一个linux命令（40）-ps
tag: linux常用命令
categories: Linux
date: 2018-07-27 19:11:00
copyright: true
---

**ps命令**用于报告当前系统的进程状态。可以搭配[kill](http://man.linuxde.net/kill)指令随时中断、删除不必要的程序。ps命令是最基本同时也是非常强大的进程查看命令，使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等，总之大部分信息都是可以通过执行该命令得到的。

<!--more-->

linux上进程有5种状态: 

1. 运行(正在运行或在运行队列中等待) 


2. 中断(休眠中, 受阻, 在等待某个条件的形成或接受到信号) 


3. 不可中断(收到信号不唤醒和不可运行, 进程必须等待直到有中断发生) 


4. 僵死(进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放) 

5. 停止(进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行) 

ps工具标识进程的5种状态码:

D 不可中断 uninterruptible sleep （usually IO）

R 运行 runnable （on run queue）

S 中断 sleeping

T 停止 traced or stopped

Z 僵死 a defunct （“zombie”） process

### 语法

`ps(选项)`

## 选项

```
-a：显示所有终端机下执行的程序，除了阶段作业领导者之外。
a：显示现行终端机下的所有程序，包括其他用户的程序。
-A：显示所有程序。
-c：显示CLS和PRI栏位。
c：列出程序时，显示每个程序真正的指令名称，而不包含路径，选项或常驻服务的标示。
-C<指令名称>：指定执行指令的名称，并列出该指令的程序的状况。
-d：显示所有程序，但不包括阶段作业领导者的程序。
-e：此选项的效果和指定"A"选项相同。
e：列出程序时，显示每个程序所使用的环境变量。
-f：显示UID,PPIP,C与STIME栏位。
f：用ASCII字符显示树状结构，表达程序间的相互关系。
-g<群组名称>：此选项的效果和指定"-G"选项相同，当亦能使用阶段作业领导者的名称来指定。
g：显示现行终端机下的所有程序，包括群组领导者的程序。
-G<群组识别码>：列出属于该群组的程序的状况，也可使用群组名称来指定。
h：不显示标题列。
-H：显示树状结构，表示程序间的相互关系。
-j或j：采用工作控制的格式显示程序状况。
-l或l：采用详细的格式来显示程序状况。
L：列出栏位的相关信息。
-m或m：显示所有的执行绪。
n：以数字来表示USER和WCHAN栏位。
-N：显示所有的程序，除了执行ps指令终端机下的程序之外。
-p<程序识别码>：指定程序识别码，并列出该程序的状况。
p<程序识别码>：此选项的效果和指定"-p"选项相同，只在列表格式方面稍有差异。
r：只列出现行终端机正在执行中的程序。
-s<阶段作业>：指定阶段作业的程序识别码，并列出隶属该阶段作业的程序的状况。
s：采用程序信号的格式显示程序状况。
S：列出程序时，包括已中断的子程序资料。
-t<终端机编号>：指定终端机编号，并列出属于该终端机的程序的状况。
t<终端机编号>：此选项的效果和指定"-t"选项相同，只在列表格式方面稍有差异。
-T：显示现行终端机下的所有程序。
-u<用户识别码>：此选项的效果和指定"-U"选项相同。
u：以用户为主的格式来显示程序状况。
-U<用户识别码>：列出属于该用户的程序的状况，也可使用用户名称来指定。
U<用户名称>：列出属于该用户的程序的状况。
v：采用虚拟内存的格式显示程序状况。
-V或V：显示版本信息。
-w或w：采用宽阔的格式来显示程序状况。　
x：显示所有程序，不以终端机来区分。
X：采用旧式的Linux i386登陆格式显示程序状况。
-y：配合选项"-l"使用时，不显示F(flag)栏位，并以RSS栏位取代ADDR栏位　。
-<程序识别码>：此选项的效果和指定"p"选项相同。
--cols<每列字符数>：设置每列的最大字符数。
--columns<每列字符数>：此选项的效果和指定"--cols"选项相同。
--cumulative：此选项的效果和指定"S"选项相同。
--deselect：此选项的效果和指定"-N"选项相同。
--forest：此选项的效果和指定"f"选项相同。
--headers：重复显示标题列。
--help：在线帮助。
--info：显示排错信息。
--lines<显示列数>：设置显示画面的列数。
--no-headers：此选项的效果和指定"h"选项相同，只在列表格式方面稍有差异。
--group<群组名称>：此选项的效果和指定"-G"选项相同。
--Group<群组识别码>：此选项的效果和指定"-G"选项相同。
--pid<程序识别码>：此选项的效果和指定"-p"选项相同。
--rows<显示列数>：此选项的效果和指定"--lines"选项相同。
--sid<阶段作业>：此选项的效果和指定"-s"选项相同。
--tty<终端机编号>：此选项的效果和指定"-t"选项相同。
--user<用户名称>：此选项的效果和指定"-U"选项相同。
--User<用户识别码>：此选项的效果和指定"-U"选项相同。
--version：此选项的效果和指定"-V"选项相同。
--widty<每列字符数>：此选项的效果和指定"-cols"选项相同。
```
## 常用范例

1）显示所有进程信息

```
# ps -A
  PID TTY          TIME CMD
    1 ?        00:00:00 init
    2 ?        00:00:01 migration/0
    3 ?        00:00:00 ksoftirqd/0
    4 ?        00:00:01 migration/1
```

2）显示指定用户信息

```
# ps -u root
  PID TTY          TIME CMD
    1 ?        00:00:00 init
    2 ?        00:00:01 migration/0
    3 ?        00:00:00 ksoftirqd/0
    4 ?        00:00:01 migration/1
```

3）显示所有进程信息，连同命令行

```
ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 Nov02 ?        00:00:00 init [3]                  
root         2     1  0 Nov02 ?        00:00:01 [migration/0]
root         3     1  0 Nov02 ?        00:00:00 [ksoftirqd/0]
root         4     1  0 Nov02 ?        00:00:01 [migration/1]
root         5     1  0 Nov02 ?        00:00:00 [ksoftirqd/1]
```

4） ps 与grep 常用组合用法，查找特定进程

```
# ps -ef|grep ssh
root      2720     1  0 Nov02 ?        00:00:00 /usr/sbin/sshd
root     17394  2720  0 14:58 ?        00:00:00 sshd: root@pts/0 
root     17465 17398  0 15:57 pts/0    00:00:00 grep ssh
```

5）将目前属于您自己这次登入的 PID 与相关信息列示出来

```
# ps -l
F S   UID   PID  PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
4 S     0 17398 17394  0  75   0 - 16543 wait   pts/0    00:00:00 bash
4 R     0 17469 17398  0  77   0 - 15877 -      pts/0    00:00:00 ps
```

说明：

各相关信息的意义：

F 代表这个程序的旗标 (flag)， 4 代表使用者为 super user

S 代表这个程序的状态 (STAT)，关于各 STAT 的意义将在内文介绍

UID 程序被该 UID 所拥有

PID 就是这个程序的 ID ！

PPID 则是其上级父程序的ID

C CPU 使用的资源百分比

PRI 这个是 Priority (优先执行序) 的缩写，详细后面介绍

NI 这个是 Nice 值，在下一小节我们会持续介绍

ADDR 这个是 kernel function，指出该程序在内存的那个部分。如果是个 running的程序，一般就是 "-"

SZ 使用掉的内存大小

WCHAN 目前这个程序是否正在运作当中，若为 - 表示正在运作

TTY 登入者的终端机位置

TIME 使用掉的 CPU 时间。

CMD 所下达的指令为何

在预设的情况下， ps 仅会列出与目前所在的 bash shell 有关的 PID 而已，所以， 当我使用 ps -l 的时候，只有三个 PID。

6）列出目前所有的正在内存当中的程序

```
# ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0  10368   676 ?        Ss   Nov02   0:00 init [3]                  
root         2  0.0  0.0      0     0 ?        S<   Nov02   0:01 [migration/0]
root         3  0.0  0.0      0     0 ?        SN   Nov02   0:00 [ksoftirqd/0]
root         4  0.0  0.0      0     0 ?        S<   Nov02   0:01 [migration/1]
root         5  0.0  0.0      0     0 ?        SN   Nov02   0:00 [ksoftirqd/1]
```

说明：

USER：该 process 属于那个使用者账号的

PID ：该 process 的号码

%CPU：该 process 使用掉的 CPU 资源百分比

%MEM：该 process 所占用的物理内存百分比

VSZ ：该 process 使用掉的虚拟内存量 (Kbytes)

RSS ：该 process 占用的固定的内存量 (Kbytes)

TTY ：该 process 是在那个终端机上面运作，若与终端机无关，则显示 ?，另外， tty1-tty6 是本机上面的登入者程序，若为 pts/0 等等的，则表示为由网络连接进主机的程序。

STAT：该程序目前的状态，主要的状态有

R ：该程序目前正在运作，或者是可被运作

S ：该程序目前正在睡眠当中 (可说是 idle 状态)，但可被某些讯号 (signal) 唤醒。

T ：该程序目前正在侦测或者是停止了

Z ：该程序应该已经终止，但是其父程序却无法正常的终止他，造成 zombie (疆尸) 程序的状态

START：该 process 被触发启动的时间

TIME ：该 process 实际使用 CPU 运作的时间

COMMAND：该程序的实际指令

7）列出类似程序树的程序显示

```
 ps -axjf
Warning: bad syntax, perhaps a bogus '-'? See /usr/share/doc/procps-3.2.7/FAQ
 PPID   PID  PGID   SID TTY      TPGID STAT   UID   TIME COMMAND
    0     1     1     1 ?           -1 Ss       0   0:00 init [3]                  
    1     2     1     1 ?           -1 S<       0   0:01 [migration/0]
    1     3     1     1 ?           -1 SN       0   0:00 [ksoftirqd/0]
    1     4     1     1 ?           -1 S<       0   0:01 [migration/1]
    1     5     1     1 ?           -1 SN       0   0:00 [ksoftirqd/1]
```

8）找出与 cron 与 syslog 这两个服务有关的 PID 号码

```
# ps aux | egrep '(cron|syslog)'
root      2682  0.0  0.0  83384  2000 ?        Sl   Nov02   0:00 /sbin/rsyslogd -i /var/run/syslogd.pid -c 5
root      2735  0.0  0.0  74812  1140 ?        Ss   Nov02   0:00 crond
root     17475  0.0  0.0  61180   832 pts/0    S+   16:27   0:00 egrep (cron|syslog)
```

说明：

其他实例：

1. 可以用 | 管道和 more 连接起来分页查看

```
ps -aux |more
```

2. 把所有进程显示出来，并输出到ps001.txt文件

```
ps -aux > ps001.txt
```

3. 输出指定的字段

```
# ps -o pid,ppid,pgrp,session,tpgid,comm
  PID  PPID  PGRP  SESS TPGID COMMAND
17398 17394 17398 17398 17478 bash
17478 17398 17478 17398 17478 ps
```
参考链接：

http://www.cnblogs.com/peida/archive/2012/12/19/2824418.html

http://man.linuxde.net/ps