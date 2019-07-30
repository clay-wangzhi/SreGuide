---
title: 每天一个linux命令（34）-ln
tag: linux常用命令
categories: Linux
date: 2018-07-27 19:04:00
copyright: true
---

ln是linux中又一个非常重要命令，它的功能是为某一个文件在另外一个位置建立一个同步的链接.当我们需要在不同的目录，用到相同的文件时，我们不需要在每一个需要的目录下都放一个必须相同的文件，我们只要在某个固定的目录，放上该文件，然后在 其它的目录下用ln命令链接（link）它就可以，不必重复的占用磁盘空间。

<!--more-->

## 语法

`ln(选项)(参数)`

## 选项

```
-b或--backup：删除，覆盖目标文件之前的备份；
-d或-F或——directory：建立目录的硬连接；
-f或——force：强行建立文件或目录的连接，不论文件或目录是否存在；
-i或——interactive：覆盖既有文件之前先询问用户；
-n或--no-dereference：把符号连接的目的目录视为一般文件；
-s或——symbolic：对源文件建立符号连接，而非硬连接；
-S<字尾备份字符串>或--suffix=<字尾备份字符串>：用"-b"参数备份目标文件后，备份文件的字尾会被加上一个备份字符串，预设的备份字符串是符号“~”，用户可通过“-S”参数来改变它；
-v或——verbose：显示指令执行过程；
-V<备份方式>或--version-control=<备份方式>：用“-b”参数备份目标文件后，备份文件的字尾会被加上一个备份字符串，这个字符串不仅可用“-S”参数变更，当使用“-V”参数<备份方式>指定不同备份方式时，也会产生不同字尾的备份字符串；
--help：在线帮助；
--version：显示版本信息。
```

## 参数

- 源文件：指定连接的源文件。如果使用`-s`选项创建符号连接，则“源文件”可以是文件或者目录。创建硬连接时，则“源文件”参数只能是文件；
- 目标文件：指定源文件的目标连接文件。

## 功能

linux文件系统中，有所谓的链接（link），我们可以将其视为档案的别名，而链接又可分为两种：硬链接（hard link）与软链接（symbolic link），硬链接的意思是一个档案可以有多个名称，而软链接的方式则是产生一个特殊的档案，该档案的内容是指向另一个档案的位置。硬链接是存在同一个系统中，而软链接却可以跨越不同的文件系统。

**软链接：**

1.软链接，以路径的形式存在。类似于Windows操作系统中的快捷方式

2.软链接可以 跨文件系统 ，硬链接不可以

3.软链接可以对一个不存在的文件名进行链接

4.软链接可以对目录进行链接

**硬链接:**

1.硬链接，以文件副本的形式存在。但不占用实际空间。

2.不允许给目录创建硬链接

3.硬链接只有在同一个文件系统中才能创建

这里有两点要注意：

第一，ln命令会保持每一处链接文件的同步性，也就是说，不论你改动了哪一处，其它的文件都会发生相同的变化；

第二，ln的链接又分软链接和硬链接两种，软链接就是ln –s 源文件 目标文件，它只会在你选定的位置上生成一个文件的镜像，不会占用磁盘空间，硬链接 ln 源文件 目标文件，没有参数-s， 它会在你选定的位置上生成一个和源文件大小相同的文件，无论是软链接还是硬链接，文件都保持同步变化。

ln指令用在链接文件或目录，如同时指定两个以上的文件或目录，且最后的目的地是一个已经存在的目录，则会把前面指定的所有文件或目录复制到该目录中。若同时指定多个文件或目录，且最后的目的地并非是一个已存在的目录，则会出现错误信息。

## 常用范例

1）给文件创建软链接

```
# ll
-rw-r--r-- 1 root bin      61 11-13 06:03 log2013.log
# ln -s log2013.log link2013
# ll
lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
-rw-r--r-- 1 root bin      61 11-13 06:03 log2013.log
```

说明：

为log2013.log文件创建软链接link2013，如果log2013.log丢失，link2013将失效

2）给文件创建硬链接

```
# ll
lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
-rw-r--r-- 1 root bin      61 11-13 06:03 log2013.log
# ln log2013.log ln2013
# ll
lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
-rw-r--r-- 2 root bin      61 11-13 06:03 ln2013
-rw-r--r-- 2 root bin      61 11-13 06:03 log2013.log
```

说明：

为log2013.log创建硬链接ln2013，log2013.log与ln2013的各项属性相同

3）接上面两实例，链接完毕后，删除和重建链接原文件

```
# ll
lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
-rw-r--r-- 2 root bin      61 11-13 06:03 ln2013
-rw-r--r-- 2 root bin      61 11-13 06:03 log2013.log
# rm -rf log2013.log 
# ll
lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
-rw-r--r-- 1 root bin      61 11-13 06:03 ln2013
# touch log2013.log
# ll
lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
-rw-r--r-- 1 root bin      61 11-13 06:03 ln2013
---xrw-r-- 1 root bin  302108 11-13 06:03 log2012.log
-rw-r--r-- 1 root root      0 12-07 16:19 log2013.log
# vi log2013.log 
2013-01
2013-02
2013-03
2013-04
2013-05
2013-06
2013-07
2013-08
2013-09
2013-10
2013-11
2013-12
# ll
lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
-rw-r--r-- 1 root bin      61 11-13 06:03 ln2013
-rw-r--r-- 1 root root     96 12-07 16:21 log2013.log
# cat link2013 
2013-01
2013-02
2013-03
2013-04
2013-05
2013-06
2013-07
2013-08
2013-09
2013-10
2013-11
2013-12
# cat ln2013 
hostnamebaidu=baidu.com
hostnamesina=sina.com
hostnames=true
```

说明：

1.源文件被删除后，并没有影响硬链接文件；软链接文件在centos系统下不断的闪烁，提示源文件已经不存在

2.重建源文件后，软链接不在闪烁提示，说明已经链接成功，找到了链接文件系统；重建后，硬链接文件并没有受到源文件影响，硬链接文件的内容还是保留了删除前源文件的内容，说明硬链接已经失效

4）将文件链接为另一个目录中的相同名字

```
# ln log2013.log test3
# ll
lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
-rw-r--r-- 1 root bin      61 11-13 06:03 ln2013
-rw-r--r-- 2 root root     96 12-07 16:21 log2013.log
# cd test3
# ll
-rw-r--r-- 2 root root 96 12-07 16:21 log2013.log
# vi log2013.log 
2013-01
2013-02
2013-03
2013-04
2013-05
2013-06
2013-07
2013-08
2013-09
2013-10
# ll
-rw-r--r-- 2 root root 80 12-07 16:36 log2013.log
# cd ..
# ll
lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
-rw-r--r-- 1 root bin      61 11-13 06:03 ln2013
-rw-r--r-- 2 root root     80 12-07 16:36 log2013.log
```

说明：

在test3目录中创建了log2013.log的硬链接，修改test3目录中的log2013.log文件，同时也会同步到源文件

5）给目录创建软链接

```
# ll
drwxr-xr-x 2 root root   4096 12-07 16:36 test3
drwxr-xr-x 2 root root   4096 12-07 16:57 test5
# cd test5
# ll
lrwxrwxrwx 1 root root 5 12-07 16:57 test3 -> test3
# cd test3
-bash: cd: test3: 符号连接的层数过多

# ll
lrwxrwxrwx 1 root root 5 12-07 16:57 test3 -> test3
# rm -rf test3
# ll
# ln -sv /opt/soft/test/test3 /opt/soft/test/test5
创建指向“/opt/soft/test/test3”的符号链接“/opt/soft/test/test5/test3”
# ll
lrwxrwxrwx 1 root root 20 12-07 16:59 test3 -> /opt/soft/test/test3
# 
# cd test3
# ll
总计 4
-rw-r--r-- 2 root root 80 12-07 16:36 log2013.log
# touch log2014.log
# ll
总计 4
-rw-r--r-- 2 root root 80 12-07 16:36 log2013.log
-rw-r--r-- 1 root root  0 12-07 17:05 log2014.log
```

说明：

1.目录只能创建软链接

2.目录创建链接必须用绝对路径，相对路径创建会不成功，会提示：符号连接的层数过多 这样的错误

3.在链接目标目录中修改文件都会在源文件目录中同步变化

参考链接：

http://www.cnblogs.com/peida/archive/2012/12/11/2812294.html

http://man.linuxde.net/ln