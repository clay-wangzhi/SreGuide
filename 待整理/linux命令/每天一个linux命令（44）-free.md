---
title: 每天一个linux命令（44）-free
tag: linux常用命令
categories: Linux
date: 2018-07-27 19:15:00
copyright: true
---

free命令可以显示Linux系统中空闲的、已用的物理内存及swap内存,及被内核使用的buffer。在Linux系统监控的工具中，free命令是最经常使用的命令之一。

<!--more-->

## 语法

`free(选项)`

## 选项

```
-b 　以Byte为单位显示内存使用情况。 
-k 　以KB为单位显示内存使用情况。 
-m 　以MB为单位显示内存使用情况。
-g   以GB为单位显示内存使用情况。 
-o 　不显示缓冲区调节列。 
-s<间隔秒数> 　持续观察内存使用状况。 
-t 　显示内存总和列。 
-V 　显示版本信息。 
```

## 功能

free 命令显示系统使用和空闲的内存情况，包括物理内存、交互区内存(swap)和内核缓冲区内存。共享内存将被忽略

## 常用实例

1）显示内存使用情况

```
# free
             total       used       free     shared    buffers     cached
Mem:      32940112   30841684    2098428          0    4545340   11363424
-/+ buffers/cache:   14932920   18007192
Swap:     32764556    1944984   30819572
# free -g
             total       used       free     shared    buffers     cached
Mem:            31         29          2          0          4         10
-/+ buffers/cache:         14         17
Swap:           31          1         29
# free -m
             total       used       free     shared    buffers     cached
Mem:         32168      30119       2048          0       4438      11097
-/+ buffers/cache:      14583      17584
Swap:        31996       1899      30097
```

说明：

下面是对这些数值的解释：

total：总计物理内存的大小。

used：已使用多大。

free：可用有多少。

Shared：多个进程共享的内存总额。

Buffers/cached：磁盘缓存的大小。

第三行（-/+ buffers/cached）：

used：已使用多大。

free：可用有多少。

第四行是交换分区SWAP的，也就是他们我们通常所说的虚拟内存。

区别：第二行（mem）的used/free与第三行（-/+ buffers/cache）used/free的区别。这两个的区别在于使用的角度来看，第一行是从OS的角度来看，因为对于OS，buffers/cached 都是属于被使用，所以他的可用内存是2098428KB,已用内存是30841684KB,其中包括，内核（OS）使用+Application(X, oracle,etc)使用的+buffers+cached.

第三行所指的是从应用程序角度来看，对于应用程序来说，buffers/cached 是等于可用的，因为buffer/cached是为了提高文件读取的性能，当应用程序需在用到内存的时候，buffer/cached会很快地被回收。

所以从应用程序的角度来说，可用内存=系统free memory+buffers+cached。

如本机情况的可用内存为：

18007156=2098428KB+4545340KB+11363424KB

接下来解释什么时候内存会被交换，以及按什么方交换。

当可用内存少于额定值的时候，就会开会进行交换.如何看额定值： 

```
# cat /proc/meminfo
MemTotal:     32940112 kB
MemFree:       2096700 kB
Buffers:       4545340 kB
Cached:       11364056 kB
SwapCached:    1896080 kB
Active:       22739776 kB
Inactive:      7427836 kB
HighTotal:           0 kB
HighFree:            0 kB
LowTotal:     32940112 kB
LowFree:       2096700 kB
SwapTotal:    32764556 kB
SwapFree:     30819572 kB
Dirty:             164 kB
Writeback:           0 kB
AnonPages:    14153592 kB
Mapped:          20748 kB
Slab:           590232 kB
PageTables:      34200 kB
NFS_Unstable:        0 kB
Bounce:              0 kB
CommitLimit:  49234612 kB
Committed_AS: 23247544 kB
VmallocTotal: 34359738367 kB
VmallocUsed:    278840 kB
VmallocChunk: 34359459371 kB
HugePages_Total:     0HugePages_Free:      0HugePages_Rsvd:      0Hugepagesize: 
```

交换将通过三个途径来减少系统中使用的物理页面的个数：

1.减少缓冲与页面cache的大小， 

2.将系统V类型的内存页面交换出去，　 

3.换出或者丢弃页面。(Application 占用的内存页，也就是物理内存不足）。 

事实上，少量地使用swap是不是影响到系统性能的。

那buffers和cached都是缓存，两者有什么区别呢？

为了提高磁盘存取效率, Linux做了一些精心的设计, 除了对dentry进行缓存(用于VFS,加速文件路径名到inode的转换), 还采取了两种主要Cache方式：Buffer Cache和Page Cache。前者针对磁盘块的读写，后者针对文件inode的读写。这些Cache有效缩短了 I/O系统调用(比如read,write,getdents)的时间。

磁盘的操作有逻辑级（文件系统）和物理级（磁盘块），这两种Cache就是分别缓存逻辑和物理级数据的。

Page cache实际上是针对文件系统的，是文件的缓存，在文件层面上的数据会缓存到page cache。文件的逻辑层需要映射到实际的物理磁盘，这种映射关系由文件系统来完成。当page cache的数据需要刷新时，page cache中的数据交给buffer cache，因为Buffer Cache就是缓存磁盘块的。但是这种处理在2.6版本的内核之后就变的很简单了，没有真正意义上的cache操作。

Buffer cache是针对磁盘块的缓存，也就是在没有文件系统的情况下，直接对磁盘进行操作的数据会缓存到buffer cache中，例如，文件系统的元数据都会缓存到buffer cache中。

简单说来，page cache用来缓存文件数据，buffer cache用来缓存磁盘数据。在有文件系统的情况下，对文件操作，那么数据会缓存到page cache，如果直接采用dd等工具对磁盘进行读写，那么数据会缓存到buffer cache。

所以我们看linux,只要不用swap的交换空间,就不用担心自己的内存太少.如果常常swap用很多,可能你就要考虑加物理内存了.这也是linux看内存是否够用的标准.

如果是应用服务器的话，一般只看第二行，+buffers/cache,即对应用程序来说free的内存太少了，也是该考虑优化程序或加内存了。

2）以总和的形式显示内存的使用信息

```
#  free -t 
             total       used       free     shared    buffers     cached
Mem:      32940112   30845024    2095088          0    4545340   11364324
-/+ buffers/cache:   14935360   18004752Swap:     32764556    1944984   30819572
Total:    65704668   32790008   32914660
```

3）周期性的查询内存使用信息

```
#  free -s 10
             total       used       free     shared    buffers     cached
Mem:      32940112   30844528    2095584          0    4545340   11364380
-/+ buffers/cache:   14934808   18005304Swap:     32764556    1944984   30819572
             total       used       free     shared    buffers     cached
Mem:      32940112   30843932    2096180          0    4545340   11364388
-/+ buffers/cache:   14934204   18005908Swap:     32764556    1944984   30819572
```

说明：

每10s 执行一次命令

转载链接：

http://www.cnblogs.com/peida/archive/2012/12/25/2831814.html

