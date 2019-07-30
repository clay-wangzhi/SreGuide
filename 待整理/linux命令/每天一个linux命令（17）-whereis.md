---
title: 每天一个linux命令（17）-whereis
tag: linux常用命令
categories: Linux
date: 2018-07-27 18:46:00
copyright: true
---

**whereis命令**用来定位指令的二进制程序、源代码文件和man手册页等相关文件的路径。

whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。

<!--more-->

和find相比，whereis查找的速度非常快，这是因为linux系统会将 系统内的所有文件都记录在一个数据库文件中，当使用whereis和下面即将介绍的locate时，会从数据库中查找数据，而不是像find命令那样，通 过遍历硬盘来查找，效率自然会很高。 但是该数据库文件并不是实时更新，默认情况下时一星期更新一次，因此，我们在用whereis和locate 查找文件时，有时会找到已经被删除的数据，或者刚刚建立文件，却无法查找到，原因就是因为数据库文件没有被更新。

## 语法

`whereis(选项)(参数)`

## 选项

```
-b   定位可执行文件。
-m   定位帮助文件。
-s   定位源代码文件。
-u   搜索默认路径下除可执行文件、源代码文件、帮助文件以外的其它文件。
-B   指定搜索可执行文件的路径。
-M   指定搜索帮助文件的路径。
-S   指定搜索源代码文件的路径。
```

## 常用范例

1）将和**文件相关的文件都查找出来

```
# whereis svn
svn: /usr/bin/svn /usr/local/svn /usr/share/man/man1/svn.1.gz
```

说明：

tomcat没安装，找不出来，svn安装找出了很多相关文件

2）只将二进制文件 查找出来 

```
# whereis -b svn
svn: /usr/bin/svn /usr/local/svn
```

说明：

whereis -m svn 查出说明文档路径，whereis -s svn 找source源文件。