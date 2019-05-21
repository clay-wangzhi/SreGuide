---
title: 每天一个linux命令（15）-tail
tag: linux常用命令
categories: Linux
date: 2018-07-27 18:44:00
copyright: true
---

tail 命令从指定点开始将文件写到标准输出.使用tail命令的-f选项可以方便的查阅正在改变的日志文件,tail -f filename会把filename里最尾部的内容显示在屏幕上,并且不断刷新,使你看到最新的文件内容. 

<!--more-->

## 语法

`tail(选项)(参数)`

## 选项

```
-f 循环读取
-q 不显示处理信息
-v 显示详细的处理信息
-c<数目> 显示的字节数
-n<行数> 显示行数
--pid=PID 与-f合用,表示在进程ID,PID死掉之后结束. 
-q, --quiet, --silent 从不输出给出文件名的首部 
-s, --sleep-interval=S 与-f合用,表示在每次反复的间隔休眠S秒 
```

## 功能

用于显示指定文件末尾内容，不指定文件时，作为输入信息进行处理。常用查看日志文件。

## 常用范例

1）显示文件末尾内容

```
# tail -n 5 log2014.log 
2014-09
2014-10
2014-11
2014-12
===========================
```

说明：

显示文件最后5行内容

2）循环查看文件内容

```
# ping 192.168.120.204 > test.log &
# tail -f test.log 
PING 192.168.120.204 (192.168.120.204) 56(84) bytes of data.
64 bytes from 192.168.120.204: icmp_seq=1 ttl=64 time=0.038 ms
64 bytes from 192.168.120.204: icmp_seq=2 ttl=64 time=0.036 ms
64 bytes from 192.168.120.204: icmp_seq=3 ttl=64 time=0.033 ms
64 bytes from 192.168.120.204: icmp_seq=4 ttl=64 time=0.027 ms
64 bytes from 192.168.120.204: icmp_seq=5 ttl=64 time=0.032 ms
64 bytes from 192.168.120.204: icmp_seq=6 ttl=64 time=0.026 ms
64 bytes from 192.168.120.204: icmp_seq=7 ttl=64 time=0.030 ms
64 bytes from 192.168.120.204: icmp_seq=8 ttl=64 time=0.029 ms
64 bytes from 192.168.120.204: icmp_seq=9 ttl=64 time=0.044 ms
64 bytes from 192.168.120.204: icmp_seq=10 ttl=64 time=0.033 ms
64 bytes from 192.168.120.204: icmp_seq=11 ttl=64 time=0.027 ms
```

3）从第5行开始显示文件

```
# cat log2014.log 
2014-01
2014-02
2014-03
2014-04
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
# tail -n +5 log2014.log
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
```







参考链接：

http://www.cnblogs.com/peida/archive/2012/11/07/2758084.html