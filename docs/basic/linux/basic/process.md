---
category: Linux
---
# 进程管理

## 静态查看进程 ps

**ps命令**用于报告当前系统的进程状态。可以搭配[kill](http://man.linuxde.net/kill)指令随时中断、删除不必要的程序。ps命令是最基本同时也是非常强大的进程查看命令，使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等，总之大部分信息都是可以通过执行该命令得到的。



1. 运行(正在运行或在运行队列中等待)

1. 中断(休眠中, 受阻, 在等待某个条件的形成或接受到信号)

1. 不可中断(收到信号不唤醒和不可运行, 进程必须等待直到有中断发生)

1. 僵死(进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放)
2. 停止(进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行)

ps工具标识进程的5种状态码:

D 不可中断 uninterruptible sleep （usually IO）

R 运行 runnable （on run queue）

S 中断 sleeping

T 停止 traced or stopped

Z 僵死 a defunct （“zombie”） process

### 语法

```
ps(选项)
```

### 选项

复制

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

### 常用范例

1）显示所有进程信息

复制

```
# ps -A  PID TTY          TIME CMD    1 ?        00:00:00 init    2 ?        00:00:01 migration/0    3 ?        00:00:00 ksoftirqd/0    4 ?        00:00:01 migration/1
```

2）显示指定用户信息

复制

```
# ps -u root  PID TTY          TIME CMD    1 ?        00:00:00 init    2 ?        00:00:01 migration/0    3 ?        00:00:00 ksoftirqd/0    4 ?        00:00:01 migration/1
```

3）显示所有进程信息，连同命令行

复制

```
ps -efUID        PID  PPID  C STIME TTY          TIME CMDroot         1     0  0 Nov02 ?        00:00:00 init [3]                  root         2     1  0 Nov02 ?        00:00:01 [migration/0]root         3     1  0 Nov02 ?        00:00:00 [ksoftirqd/0]root         4     1  0 Nov02 ?        00:00:01 [migration/1]root         5     1  0 Nov02 ?        00:00:00 [ksoftirqd/1]
```

4） ps 与grep 常用组合用法，查找特定进程

复制

```
# ps -ef|grep sshroot      2720     1  0 Nov02 ?        00:00:00 /usr/sbin/sshdroot     17394  2720  0 14:58 ?        00:00:00 sshd: root@pts/0 root     17465 17398  0 15:57 pts/0    00:00:00 grep ssh
```

5）将目前属于您自己这次登入的 PID 与相关信息列示出来

复制

```
# ps -lF S   UID   PID  PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD4 S     0 17398 17394  0  75   0 - 16543 wait   pts/0    00:00:00 bash4 R     0 17469 17398  0  77   0 - 15877 -      pts/0    00:00:00 ps
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

ADDR 这个是 kernel function，指出该程序在内存的那个部分。如果是个 running的程序，一般就是 “-“

SZ 使用掉的内存大小

WCHAN 目前这个程序是否正在运作当中，若为 - 表示正在运作

TTY 登入者的终端机位置

TIME 使用掉的 CPU 时间。

CMD 所下达的指令为何

在预设的情况下， ps 仅会列出与目前所在的 bash shell 有关的 PID 而已，所以， 当我使用 ps -l 的时候，只有三个 PID。

6）列出目前所有的正在内存当中的程序

复制

```
# ps auxUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMANDroot         1  0.0  0.0  10368   676 ?        Ss   Nov02   0:00 init [3]                  root         2  0.0  0.0      0     0 ?        S<   Nov02   0:01 [migration/0]root         3  0.0  0.0      0     0 ?        SN   Nov02   0:00 [ksoftirqd/0]root         4  0.0  0.0      0     0 ?        S<   Nov02   0:01 [migration/1]root         5  0.0  0.0      0     0 ?        SN   Nov02   0:00 [ksoftirqd/1]
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

复制

```
 ps -axjfWarning: bad syntax, perhaps a bogus '-'? See /usr/share/doc/procps-3.2.7/FAQ PPID   PID  PGID   SID TTY      TPGID STAT   UID   TIME COMMAND    0     1     1     1 ?           -1 Ss       0   0:00 init [3]                      1     2     1     1 ?           -1 S<       0   0:01 [migration/0]    1     3     1     1 ?           -1 SN       0   0:00 [ksoftirqd/0]    1     4     1     1 ?           -1 S<       0   0:01 [migration/1]    1     5     1     1 ?           -1 SN       0   0:00 [ksoftirqd/1]
```

8）找出与 cron 与 syslog 这两个服务有关的 PID 号码

复制

```
# ps aux | egrep '(cron|syslog)'root      2682  0.0  0.0  83384  2000 ?        Sl   Nov02   0:00 /sbin/rsyslogd -i /var/run/syslogd.pid -c 5root      2735  0.0  0.0  74812  1140 ?        Ss   Nov02   0:00 crondroot     17475  0.0  0.0  61180   832 pts/0    S+   16:27   0:00 egrep (cron|syslog)
```

说明：

其他实例：

1. 可以用 | 管道和 more 连接起来分页查看

复制

```
ps -aux |more
```

1. 把所有进程显示出来，并输出到ps001.txt文件

复制

```
ps -aux > ps001.txt
```

1. 输出指定的字段

复制

```
# ps -o pid,ppid,pgrp,session,tpgid,comm  PID  PPID  PGRP  SESS TPGID COMMAND17398 17394 17398 17398 17478 bash17478 17398 17478 17398 17478 ps
```



## 查看指定进程的PID(pgrep、pidof)
```
pgrep sshd -l
47 sshd
51 sshd
128 sshd
```
```
pidof sshd
128 51 47
```
## 动态查看进程top
top命令是Linux下常用的性能分析工具，能够实时显示系统中各个进程的资源占用状况，类似于Windows的任务管理器。下面详细介绍它的使用方法。top是一个动态显示过程,即可以通过用户按键来不断刷新当前状态.如果在前台执行该命令,它将独占前台,直到用户终止该程序为止.比较准确的说,top命令提供了实时的对系统处理器的状态监视.它将显示系统中CPU最“敏感”的任务列表.该命令可以按CPU使用.内存使用和执行时间对任务进行排序；而且该命令的很多特性都可以通过交互式命令或者在个人定制文件中进行设定.



```
top(选项)
```

### 选项

复制

```
-b：以批处理模式操作；-c：显示完整的治命令；-d：屏幕刷新间隔时间；-I：忽略失效过程；-s：保密模式；-S：累积模式；-i<时间>：设置间隔时间；-u<用户名>：指定用户名；-p<进程号>：指定进程；-n<次数>：循环显示的次数。
```

### 功能

显示当前系统正在执行的进程的相关信息，包括进程ID、内存占用率、CPU占用率等

### 常用实例

1）显示进程信息

复制

```
# toptop - 14:06:23 up 70 days, 16:44,  2 users,  load average: 1.25, 1.32, 1.35Tasks: 206 total,   1 running, 205 sleeping,   0 stopped,   0 zombieCpu(s):  5.9%us,  3.4%sy,  0.0%ni, 90.4%id,  0.0%wa,  0.0%hi,  0.2%si,  0.0%stMem:  32949016k total, 14411180k used, 18537836k free,   169884k buffersSwap: 32764556k total,        0k used, 32764556k free,  3612636k cached  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND                                                                28894 root      22   0 1501m 405m  10m S 52.2  1.3   2534:16 java                                                                   18249 root      18   0 3201m 1.9g  11m S 35.9  6.0 569:39.41 java                                                                    2808 root      25   0 3333m 1.0g  11m S 24.3  3.1 526:51.85 java                                                        25668 root      23   0 3180m 704m  11m S 14.0  2.2 360:44.53 java
```

说明：

统计信息区：

前五行是当前系统情况整体的统计信息区。下面我们看每一行信息的具体意义。

第一行，任务队列信息，同 uptime 命令的执行结果，具体参数说明情况如下：

14:06:23 — 当前系统时间

up 70 days, 16:44 — 系统已经运行了70天16小时44分钟（在这期间系统没有重启过的吆！）

2 users — 当前有2个用户登录系统

load average: 1.15, 1.42, 1.44 — load average后面的三个数分别是1分钟、5分钟、15分钟的负载情况。

load average数据是每隔5秒钟检查一次活跃的进程数，然后按特定算法计算出的数值。如果这个数除以逻辑CPU的数量，结果高于5的时候就表明系统在超负荷运转了。

第二行，Tasks — 任务（进程），具体信息说明如下：

系统现在共有206个进程，其中处于运行中的有1个，205个在休眠（sleep），stoped状态的有0个，zombie状态（僵尸）的有0个。

第三行，cpu状态信息，具体属性说明如下：

5.9%us — 用户空间占用CPU的百分比。

3.4% sy — 内核空间占用CPU的百分比。

0.0% ni — 改变过优先级的进程占用CPU的百分比

90.4% id — 空闲CPU百分比

0.0% wa — IO等待占用CPU的百分比

0.0% hi — 硬中断（Hardware IRQ）占用CPU的百分比

0.2% si — 软中断（Software Interrupts）占用CPU的百分比

第五行，swap交换分区信息，具体信息说明如下：

32764556k total — 交换区总量（32GB）

0k used — 使用的交换区总量（0K）

32764556k free — 空闲交换区总量（32GB）

3612636k cached — 缓冲的交换区总量（3.6GB）

备注：

第四行中使用中的内存总量（used）指的是现在系统内核控制的内存数，空闲内存总量（free）是内核还未纳入其管控范围的数量。纳入内核管理的内存不见得都在使用中，还包括过去使用过的现在可以被重复利用的内存，内核并不把这些可被重新使用的内存交还到free中去，因此在linux上free内存会越来越少，但不用为此担心。

如果出于习惯去计算可用内存数，这里有个近似的计算公式：第四行的free + 第四行的buffers + 第五行的cached，按这个公式此台服务器的可用内存：18537836k +169884k +3612636k = 22GB左右。

对于内存监控，在top里我们要时刻监控第五行swap交换分区的used，如果这个数值在不断的变化，说明内核在不断进行内存和swap的数据交换，这是真正的内存不够用了。

第六行，空行。

第七行以下：各进程（任务）的状态监控，项目列信息说明如下：

PID — 进程id

USER — 进程所有者

PR — 进程优先级

NI — nice值。负值表示高优先级，正值表示低优先级

VIRT — 进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES

RES — 进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA

SHR — 共享内存大小，单位kb

S — 进程状态。D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程

%CPU — 上次更新到现在的CPU时间占用百分比

%MEM — 进程使用的物理内存百分比

TIME+ — 进程使用的CPU时间总计，单位1/100秒

COMMAND — 进程名称（命令名/命令行）

其他使用技巧：

1.多U多核CPU监控

在top基本视图中，按键盘数字“1”，可监控每个逻辑CPU的状况：

观察上图，服务器有16个逻辑CPU，实际上是4个物理CPU。再按数字键1，就会返回到top基本视图界面。

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/top1.png)

2.高亮显示当前运行进程

 敲击键盘“b”（打开/关闭加亮效果），top的视图变化如下：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/top2.png)

我们发现进程id为2570的“top”进程被加亮了，top进程就是视图第二行显示的唯一的运行态（runing）的那个进程，可以通过敲击“y”键关闭或打开运行态进程的加亮效果。

3.进程字段排序

默认进入top时，各进程是按照CPU的占用量来排序的，在下图中进程ID为28894的java进程排在第一（cpu占用142%），进程ID为574的java进程排在第二（cpu占用16%）。

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/top3.png)

 敲击键盘“x”（打开/关闭排序列的加亮效果），top的视图变化如下：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/top4.png)

可以看到，top默认的排序列是“%CPU”。

1. 通过”shift + >”或”shift + <”可以向右或左改变排序列

   ```
   下图是按一次”shift + >”的效果图,视图现在已经按照%MEM来排序。
   ```

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/top5.png)

2）显示完整命令

复制

```
top -c
```

3）以批处理模式显示程序信息

复制

```
top -b
```

4）以累积模式显示程序信息

复制

```
top -S
```

5）设置信息更新次数

复制

```
top -n 2
```

6）设置信息更新时间

复制

```
top -d 3
```

说明：

表示更新周期为3秒

7）显示指定的进程信息

复制

```
top -p 574
```

### top交互命令

在top 命令执行过程中可以使用的一些交互命令。这些命令都是单字母的，如果在命令行中使用了s 选项， 其中一些命令可能会被屏蔽。

h 显示帮助画面，给出一些简短的命令总结说明

k 终止一个进程。

i 忽略闲置和僵死进程。这是一个开关式命令。

q 退出程序

r 重新安排一个进程的优先级别

S 切换到累计模式

s 改变两次刷新之间的延迟时间（单位为s），如果有小数，就换算成m s。输入0值则系统将不断刷新，默认值是5 s

f或者F 从当前显示中添加或者删除项目

o或者O 改变显示项目的顺序

l 切换显示平均负载和启动时间信息

m 切换显示内存信息

t 切换显示进程和CPU状态信息

c 切换显示命令名称和完整命令行

M 根据驻留内存大小进行排序

P 根据CPU使用百分比大小进行排序

T 根据时间/累计时间进行排序

W 将当前设置写入~/.toprc文件中



## 信号控制进程kill
Linux中的kill命令用来终止指定的进程（terminate a process）的运行，是Linux下进程管理的常用命令。通常，终止一个前台进程可以使用Ctrl+C键，但是，对于一个后台进程就须用kill命令来终止，我们就需要先使用ps/pidof/pstree/top等工具获取进程PID，然后使用kill命令来杀掉该进程。kill命令是通过向进程发送指定的信号来结束相应进程的。在默认情况下，采用编号为15的TERM信号。TERM信号将终止所有不能捕获该信号的进程。对于那些可以捕获该信号的进程就要用编号为9的kill信号，强行“杀掉”该进程。



```
kill(选项)(参数)
```

### 选项

复制

```
-a：当处理当前进程时，不限制命令名和进程号的对应关系；-l <信息编号>：若不加<信息编号>选项，则-l参数会列出全部的信息名称；-p：指定kill 命令只打印相关进程的进程号，而不发送任何信号；-s <信息名称或编号>：指定要送出的信息；-u：指定用户。
```

### 参数

进程或作业识别号：指定要删除的进程或作业。

### 功能

发送指定的信号到相应进程。不指定型号将发送SIGTERM（15）终止指定进程。如果无法终止该程序可用“-KILL”参数，其发送的信号为SIGKILL（9），将强制结束进程，使用ps命令或者jobs命令可以查看进程号。root用户将影响用户的进程，非root用户只能影响自己的进程。

### 常用实例

复制

```
# kill -l 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL 5) SIGTRAP      6) SIGABRT      7) SIGBUS       8) SIGFPE 9) SIGKILL     10) SIGUSR1     11) SIGSEGV     12) SIGUSR213) SIGPIPE     14) SIGALRM     15) SIGTERM     16) SIGSTKFLT17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU25) SIGXFSZ     26) SIGVTALRM   27) SIGPROF     28) SIGWINCH29) SIGIO       30) SIGPWR      31) SIGSYS      34) SIGRTMIN35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3  38) SIGRTMIN+439) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+843) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+1247) SIGRTMIN+13 48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-1451) SIGRTMAX-13 52) SIGRTMAX-12 53) SIGRTMAX-11 54) SIGRTMAX-1055) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7  58) SIGRTMAX-659) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-263) SIGRTMAX-1  64) SIGRTMAX
```

说明：

只有第9种信号(SIGKILL)才可以无条件终止进程，其他信号进程都有权利忽略。 下面是常用的信号：

HUP 1 终端断线

INT 2 中断（同 Ctrl + C）

QUIT 3 退出（同 Ctrl + \）

TERM 15 终止

KILL 9 强制终止

CONT 18 继续（与STOP相反， fg/bg命令）

STOP 19 暂停（同 Ctrl + Z）

2）得到指定信号的数值

复制

```
# kill -l KILL9# kill -l SIGKILL9# kill -l TERM15# kill -l SIGTERM15
```

3）先用ps查找进程，然后用kill杀掉

复制

```
#ps -ef|grep vim root      3268  2884  0 16:21 pts/1    00:00:00 vim install.logroot      3370  2822  0 16:21 pts/0    00:00:00 grep vim# kill 3268 # kill 3268 -bash: kill: (3268) - 没有那个进程
```

4）彻底杀死进程

复制

```
# ps -ef|grep vim root      3268  2884  0 16:21 pts/1    00:00:00 vim install.logroot      3370  2822  0 16:21 pts/0    00:00:00 grep vim# kill –9 3268 # kill 3268 -bash: kill: (3268) - 没有那个进程
```

5）杀死指定用户所有进程

复制

```
# kill -9 $(ps -ef | grep peidalinux) # kill -u peidalinux
```

6）init进程是不可杀的

复制

```
# ps -ef|grep initroot         1     0  0 Nov02 ?        00:00:00 init [3]                  root     17563 17534  0 17:37 pts/1    00:00:00 grep init# kill -9 1# kill -HUP 1# ps -ef|grep initroot         1     0  0 Nov02 ?        00:00:00 init [3]                  root     17565 17534  0 17:38 pts/1    00:00:00 grep init# kill -KILL 1# ps -ef|grep initroot         1     0  0 Nov02 ?        00:00:00 init [3]                  root     17567 17534  0 17:38 pts/1    00:00:00 grep init
```

说明：

init是Linux系统操作中不可缺少的程序之一。所谓的init进程，它是一个由内核启动的用户级进程。内核自行启动（已经被载入内存，开始运行，并已初始化所有的设备驱动程序和数据结构等）之后，就通过启动一个用户级程序init的方式，完成引导进程。所以,init始终是第一个进程（其进程编号始终为1）。 其它所有进程都是init进程的子孙。init进程是不可杀的！

参考链接：

http://www.cnblogs.com/peida/archive/2012/12/20/2825837.html

http://man.linuxde.net/kill

http://www.cnblogs.com/peida/archive/2012/12/24/2831353.html

http://man.linuxde.net/top

http://www.cnblogs.com/peida/archive/2012/12/19/2824418.html

http://man.linuxde.net/ps