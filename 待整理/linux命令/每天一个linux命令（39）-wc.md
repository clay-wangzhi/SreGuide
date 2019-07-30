---
title: 每天一个linux命令（39）-wc
tag: linux常用命令
categories: Linux
date: 2018-07-27 19:10:00
copyright: true
---

Linux系统中的wc(Word Count)命令的功能为统计指定文件中的字节数、字数、行数，并将统计结果显示输出。

<!--more-->

## 语法

`wc(选项)(参数)`

## 选项

```
-c 统计字节数。
-l 统计行数。
-m 统计字符数。这个标志不能与 -c 标志一起使用。
-w 统计字数。一个字被定义为由空白、跳格或换行字符分隔的字符串。
-L 打印最长行的长度。
-help 显示帮助信息
--version 显示版本信息
```

## 参数

文件：需要统计的文件列表。

## 功能

统计指定文件中的字节数、字数、行数，并将统计结果显示输出。该命令统计指定文件中的字节数、字数、行数。如果没有给出文件名，则从标准输入读取。wc同时也给出所指定文件的总统计数。

## 常用实例

1）查看文件的字节数、字数、行数

```
# cat test.txt 
hnlinux
peida.cnblogs.com
ubuntu
ubuntu linux
redhat
Redhat
linuxmint
# wc test.txt
 7  8 70 test.txt
# wc -l test.txt 
7 test.txt
# wc -c test.txt 
70 test.txt
# wc -w test.txt 
8 test.txt
# wc -m test.txt 
70 test.txt
# wc -L test.txt 
17 test.txt
```

说明：

7         8          70     test.txt

行数 单词数 字节数 文件名

2）用wc命令怎么做到只打印统计数字不打印文件名

```
# wc -l test.txt 
7 test.txt
# cat test.txt |wc -l
7
```

说明：

使用管道线，这在编写shell脚本时特别有用。

3）用来统计当前目录下的文件数

```
#cd test6
# ll
总计 604
---xr--r-- 1 root mail  302108 11-30 08:39 linklog.log
---xr--r-- 1 mail users 302108 11-30 08:39 log2012.log
-rw-r--r-- 1 mail users     61 11-30 08:39 log2013.log
-rw-r--r-- 1 root mail       0 11-30 08:39 log2014.log
-rw-r--r-- 1 root mail       0 11-30 08:39 log2015.log
-rw-r--r-- 1 root mail       0 11-30 08:39 log2016.log
-rw-r--r-- 1 root mail       0 11-30 08:39 log2017.log
# ls -l | wc -l
8
```

说明：

数量中包含当前目录

转载链接：

http://www.cnblogs.com/peida/archive/2012/12/18/2822758.html