---
title: 每天一个linux命令（47）-watch
tag: linux常用命令
categories: Linux
date: 2018-07-27 19:18:00
copyright: true
---

watch是一个非常实用的命令，基本所有的Linux发行版都带有这个小工具，如同名字一样，watch可以帮你监测一个命令的运行结果，省得你一遍遍的手动运行。在Linux下，watch是周期性的执行下个程序，并全屏显示执行结果。你可以拿他来监测你想要的一切命令的结果变化，比如 tail 一个 log 文件，ls 监测某个文件的大小变化，看你的想象力了！

<!--more-->

## 语法

`watch(选项)(参数)`

## 选项

```
-n：指定指令执行的间隔时间（秒）；
-d：高亮显示指令输出信息不同之处；
-t：不显示标题。
```

## 参数

指令：需要周期性执行的指令。

## 常用实例

1）每隔一秒高亮显示网络链接数的变化情况

```
# watch -n 1 -d netstat -ant
```

说明：

其它操作：

中断watch操作：Ctrl+c

2）每隔一秒高亮显示http链接数的变化情况

```
watch -n 1 -d 'pstree|grep http'
```

说明：

每隔一秒高亮显示http链接数的变化情况。 后面接的命令若带有管道符，需要加''将命令区域归整。

3）实时查看模拟攻击客户机建立起来的连接数

```
watch 'netstat -an | grep:21 | \ grep<模拟攻击客户机的IP>| wc -l' 
```

4）监测当前目录中 scf' 的文件的变化

```
watch -d 'ls -l|grep scf' 
```

5）10秒一次输出系统的平均负载

```
watch -n 10 'cat /proc/loadavg'
```

6）监测磁盘inode和block数目变化情况

```
#watch -n 1 "df -i;df" 
```

参考链接：

http://www.cnblogs.com/peida/archive/2012/12/31/2840241.html

http://man.linuxde.net/watch