---
title: 每天一个linux命令（8）-cp
tag: linux常用命令
categories: Linux
date: 2018-07-27 18:37:00
copyright: true
---

cp命令用来复制文件或者目录，是Linux系统中最常用的命令之一。一般情况下，shell会设置一个别名，在命令行下复制文件时，如果目标文件已经存在，就会询问是否覆盖，不管你是否使用-i参数。但是如果是在shell脚本中执行cp时，没有-i参数时不会询问是否覆盖。这说明命令行和shell脚本的执行方式有些不同。

<!--more-->

## 语法

`cp(选项)(参数)`

## 选项

```
-a：此参数的效果和同时指定"-dpR"参数相同；
-d：当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录；
-f：强行复制文件或目录，不论目标文件或目录是否已存在；
-i：覆盖既有文件之前先询问用户；
-l：对源文件建立硬连接，而非复制文件；
-p：保留源文件或目录的属性；
-R/r：递归处理，将指定目录下的所有文件与子目录一并处理；
-s：对源文件建立符号连接，而非复制文件；
-u：使用这项参数后只会在源文件的更改时间较目标文件更新时或是名称相互对应的目标文件并不存在时，才复制文件；
-S：在备份文件时，用指定的后缀“SUFFIX”代替文件的默认后缀；
-b：覆盖已存在的文件目标前将目标文件备份；
-v：详细显示命令执行的操作。
```

## 参数

- 源文件：制定源文件列表。默认情况下，cp命令不能复制目录，如果要复制目录，则必须使用`-R`选项；
- 目标文件：指定目标文件。当“源文件”为多个文件时，要求“目标文件”为指定的目录。

## 常用范例

1）复制单个文件到目标目录，文件在目标文件中不存在

```
# cp log.log test5
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxr-xr-x 2 root root 4096 10-28 14:53 test5
# cd test5
# ll
-rw-r--r-- 1 root root 0 10-28 14:46 log5-1.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-2.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-3.log
-rw-r--r-- 1 root root 0 10-28 14:53 log.log
```

说明：

在没有带-a参数时，两个文件的时间是不一样的。在带了-a参数时，两个文件的时间是一致的。  

2）目标文件存在时，会询问是否覆盖

```
# cp log.log test5
cp：是否覆盖“test5/log.log”? n
# cp -a log.log test5
cp：是否覆盖“test5/log.log”? y
# cd test5/
# ll
-rw-r--r-- 1 root root 0 10-28 14:46 log5-1.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-2.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-3.log
-rw-r--r-- 1 root root 0 10-28 14:48 log.log
```

说明：

目标文件存在时，会询问是否覆盖。这是因为cp是cp -i的别名。目标文件存在时，即使加了-f标志，也还会询问是否覆盖。

3）复制整个目录

目标目录存在时：

```
#cp -a test3 test5 
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxr-xr-x 3 root root 4096 10-28 15:11 test5
# cd test5/
# ll
-rw-r--r-- 1 root root    0 10-28 14:46 log5-1.log
-rw-r--r-- 1 root root    0 10-28 14:46 log5-2.log
-rw-r--r-- 1 root root    0 10-28 14:46 log5-3.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
```

目标目录不存在时：

```
# cp -a test3 test4
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxrwxrwx 2 root root 4096 10-28 14:47 test4
drwxr-xr-x 3 root root 4096 10-28 15:11 test5
```

说明：

注意目标目录存在与否结果是不一样的。目标目录存在时，整个源目录被复制到目标目录里面。

4）复制的 log.log 建立一个链接到 log_link.log

```
# cp -s log.log log_link.log
# ll
lrwxrwxrwx 1 root root    7 10-28 15:18 log_link.log -> log.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxrwxrwx 2 root root 4096 10-28 14:47 test4
drwxr-xr-x 3 root root 4096 10-28 15:11 test5
```

说明：

那个 log_link.log 是由 -s 的参数造成的，建立的是一个『快捷方式』，所以您会看到在文件的最右边，会显示这个文件是『连结』到哪里去的！

5）将文件file复制到目录`/usr/men/tmp`下，并改名为file1

```
cp file /usr/men/tmp/file1
```

6）将目录`/usr/men`下的所有文件及其子目录复制到目录`/usr/zh`中

```
cp -i /usr/men m*.c /usr/zh
```

我们在Linux下使用cp命令复制文件时候，有时候会需要覆盖一些同名文件，覆盖文件的时候都会有提示：需要不停的按Y来确定执行覆盖。文件数量不多还好，但是要是几百个估计按Y都要吐血了，于是折腾来半天总结了一个方法：

```
cp aaa/* /bbb
复制目录aaa下所有到/bbb目录下，这时如果/bbb目录下有和aaa同名的文件，需要按Y来确认并且会略过aaa目录下的子目录。

cp -r aaa/* /bbb
这次依然需要按Y来确认操作，但是没有忽略子目录。

cp -r -a aaa/* /bbb
依然需要按Y来确认操作，并且把aaa目录以及子目录和文件属性也传递到了/bbb。

\cp -r -a aaa/* /bbb
成功，没有提示按Y、传递了目录属性、没有略过目录。
```

参考链接：

http://www.cnblogs.com/peida/archive/2012/10/29/2744185.html

http://man.linuxde.net/cp