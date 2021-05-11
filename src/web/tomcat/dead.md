---
time: 2020-03-08
category: web中间件
tags:
  - Tomcat
---

# tomcat假死现象

# 1 背景

## 1.1 编写目的

 

 为了方便大家以后发现进程假死的时候能够正常的分析并且第一时间保留现场快照。

 

## 1.2编写背景

 

最近服务器发现tomcat的应用会偶尔出现无法访问的情况。经过一段时间的观察最近又发现有台tomcat的应用出

现了无法访问情况。简单描述下该台tomcat当时具体的表现：客户端请求没有响应，查看服务器端tomcat的进程

是存活的，查看业务日志的时候发现日志停止没有任何最新的访问日志。连tomcat下面的catalina.log也没有任何

访问记录，基本断定该台tomcat已不能提供服务。

 

# 2 分析步骤

 

根据前面我描述的假死现象，我最先想到的是网络是否出现了问题，是不是有什么丢包严重的情况，于是我开始从

请求的数据流程开始分析，由于我们业务的架构采用的是nginx+tomcat的集群配置，一个请求上来的流向可以用

下图来简单的描述一下：

 

 

 

## 2.1检查nginx的网络情况

 

更改nginx的配置，让该台nginx请求只转到本机器的出现问题的tomcat应用上面，在access.log里看是否有网络

请求，结果可以查看到当前所有的网络请求，也就是说可以排除是网络的问题。



 

## 2.2检查tomcat 的网络情况

 

分析业务配置的tomcat访问日志xxxx.log上是否有日志访问记录，经过查询该台tomcat应用日志完全没有任何访

问记录，由于我们的部署是本机的nginx转到本机的tomcat应用，所以可以排除不是网络问题。到此基本可以断定

网络没有问题，tomcat 本身出现了假死的情况。在tomcat的日志里有报过OutOfMemoryError的异常，所以可以

肯定tomcat假死的原因是OOM

# 3 分析JVM内存溢出

 

## 3.1**为什么会发生内存泄漏**

 

在我们学习Java的时候就知道它最为方便的地方就是我们不需要管理内存的分配和释放，一切由JVM自己来进行处

理，当Java对象不再被应用时，等到堆内存不够用时JVM会进行GC处理，清除这些对象占用的堆内存空间，但是

如果对象一直被应用，那么JVM是无法对其进行GC处理的，那么我们创建新的对象时，JVM就没有办法从堆中获取

足够的内存分配给此对象，这时就会导致OOM。我们出现OOM原因，一般都是因为我们不断的往容器里存放对

象，然而容器没有相应的大小限制或清除机制，这样就容易导致OOM。

 

## 3.2**快速定位问题**

 

  当我们的应用服务器占用了过多内存的时候，我们怎么样才能快速的定位问题呢？要想快速定位问题，首先我们

必需获取服务器JVM某时刻的内存快照。Jdk里面提供了很多相应的命令比如：jstack,jstat,jmap,jps等等. 在出现问

题后我们应该快速保留现场。

 

3.2.1 jstack

 

可以观察到jvm中当前所有线程的运行情况和线程当前状态.

 

sudo jstack -F 进程ID 

从上面的图我们可以看到tomcat进程里面没有死锁的情况，而且每个线程都处理等待的状态。这个时候我们可以

telnet命令连上tomcat的端口查看tomcat进程是否有任务回应。这时发现tomcat没有任何回应可以证明tomcat应

用已没有响应处理假死状态。

 

3.2.2 jstat

这是jdk命令中比较重要，也是相当实用的一个命令，可以观察到classloader，compiler，gc相关信息

具体参数如下：

```
-class：统计class loader行为信息
-compile：统计编译行为信息
-gc：统计jdk gc时heap信息
-gccapacity：统计不同的generations（包括新生区，老年区，permanent区）相应的heap容量情况
-gccause：统计gc的情况，（同-gcutil）和引起gc的事件
-gcnew：统计gc时，新生代的情况
-gcnewcapacity：统计gc时，新生代heap容量
-gcold：统计gc时，老年区的情况
-gcoldcapacity：统计gc时，老年区heap容量
-gcpermcapacity：统计gc时，permanent区heap容量
-gcutil：统计gc时，heap情况
-printcompilation：不知道干什么的，一直没用过。
```

一般比较常用的几个参数是：

```
sudo jstat -class 2083 1000 10 （每隔1秒监控一次，一共做10次）
```



查看当时的head情况

 ```
sudo jstat -gcutil 20683 2000
 ```



出现时候截取的数据是gc已经完全没有处理了,因为没有加上full gc的日志所以不确定JVMGC 时间过长，导致应用

暂停.

 

3.2.3获取内存快照

 

Jdk自带的jmap可以获取内在某一时刻的快照

 

命令：jmap -dump:format=b,file=heap.bin \<pid>

file：保存路径及文件名

pid：进程编号（windows通过任务管理器查看，linux通过ps aux查看）



dump文件可以通过MemoryAnalyzer分析查看，网址：http://www.eclipse.org/mat/，可以查看dump时对象数

量，内存占用，线程情况等。



从上图我们可以明确的看出此项目的HashMap内存使用率比较高，因为我们的系统都是返回Map的数据结构所以

占用比较高的内存是正常情况。

 

 

3.2.4观察运行中的jvm物理内存的占用情况  

 

观察运行中的jvm物理内存的占用情况。我们也可以用jmap命令

参数如下：

```
-heap：打印jvm heap的情况
-histo：打印jvm heap的直方图。其输出信息包括类名，对象数量，对象占用大小。
-histo：live: 同上，但是只答应存活对象的情况
-permstat:打印permanent generation heap情况
```





命令使用：

`jmap -heap 2083`

可以观察到New Generation（Eden Space，From Space，To Space）,tenured generation,Perm Generation的内存使用情况

 

上图为tomcat应用出错前JVM的配置信息,可以明确的看到当时的信息:

 

MaxHeapSize堆内存大小为：3500M

 

MaxNewSize新生代内存大小：512M

 

PermSize永久代内存大小:192M

 

NewRatio设置年轻代（包括Eden和两个Survivor区）与年老代的比值（除去持久代）。设置为2，则年轻代与年老代所占比值为1：2，年轻代占整个堆栈的1/3

 

SurvivorRatio设置年轻代中Eden区与Survivor区的大小比值。设置为8，则两个Survivor区与一个Eden区的比值为2:8，一个Survivor区占整个年轻代的1/10

 

在New Generation中，有一个叫Eden的空间，主要是用来存放新生的对象，还有两个SurvivorSpaces（from,to）, 它们用来存放每次垃圾回收后存活下来的对象。在Old Generation中，主要存放应用程序中生命周期长的内存对象，还有个Permanent Generation，主要用来放JVM自己的反射对象，比如类对象和方法对象等。

 

从上面的图可以看出来JVM的新生代设置太小，可以看出应用的新生代区完全占满了，无法再往新生代区增加新的对象此时的这些对象都处于活跃状态，所以不会被GC处理，但是tomcat应用还在继续产生新的对象，这样就会导致OOM的发生，这就是导致tomcat假死的原因.

 

# 4 Tomcat假死其它情况

 

​     以下是网上资料说的tomcat假的情况：

* 应用本身程序的问题，造成死锁。
* load 太高，已经超出服务的极限
* jvm GC时间过长，导致应用暂停
  * 因为出错项目里面没有打出GC的处理情况，所以不确定此原因是否也是我项目tomcat假死的原因之一。
* 大量tcp 连接 CLOSE_WAIT
  * `netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}' `

> 转载链接：https://www.cnblogs.com/lilyjia/p/5729197.html
