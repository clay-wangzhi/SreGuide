---
title: 每天一个linux命令（9）-touch
tag: linux常用命令
categories: Linux
date: 2018-07-27 18:38:00
copyright: true
---

linux的touch命令不常用，一般在使用make的时候可能会用到，用来修改文件时间戳，或者新建一个不存在的文件。

<!--more-->

## 语法

`touch(选项)(参数)`

## 选项

```
-a：或--time=atime或--time=access或--time=use  只更改存取时间；
-c：或--no-create  不建立任何文件；
-d：<时间日期> 使用指定的日期时间，而非现在的时间；
-f：此参数将忽略不予处理，仅负责解决BSD版本touch指令的兼容性问题；
-m：或--time=mtime或--time=modify  只更该变动时间；
-r：<参考文件或目录>  把指定文件或目录的日期时间，统统设成和参考文件或目录的日期时间相同；
-t：<日期时间>  使用指定的日期时间，而非现在的时间；
--help：在线帮助；
--version：显示版本信息。
```

## 功能

touch命令参数可更改文档或目录的日期时间，包括存取时间和更改时间。 

## 常用范例

1）创建不存在的文件

```
# touch log2012.log log2013.log
# ll
-rw-r--r-- 1 root root    0 10-28 16:01 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
```

如果log2014.log不存在，则不创建文件

```
# touch -c log2014.log
# ll
-rw-r--r-- 1 root root    0 10-28 16:01 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
```

2）更新log.log的时间和log2012.log时间戳相同

```
# ll
-rw-r--r-- 1 root root    0 10-28 16:01 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
# touch -r log.log log2012.log 
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
```

3）设定文件的时间戳

```
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
# touch -t 201211142234.50 log.log
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
-rw-r--r-- 1 root root    0 2012-11-14 log.log
```

说明：

-t  time 使用指定的时间值 time 作为指定文件相应时间戳记的新值．此处的 time规定为如下形式的十进制数:      

  [[CC]YY]MMDDhhmm[.SS]     

  这里，CC为年数中的前两位，即”世纪数”；YY为年数的后两位，即某世纪中的年数．如果不给出CC的值，则touch   将把年数CCYY限定在1969--2068之内．MM为月数，DD为天将把年数CCYY限定在1969--2068之内．MM为月数，DD为天数，hh 为小时数(几点)，mm为分钟数，SS为秒数．此处秒的设定范围是0--61，这样可以处理闰秒．这些数字组成的时间是环境变量TZ指定的时区中的一个时 间．由于系统的限制，早于1970年1月1日的时间是错误的。

4）同时创建多个文件

```shell
touch file{1..20}
touch /home/{aa,bb}
//{}里面为集合
```





参考链接：

http://www.cnblogs.com/peida/archive/2012/10/30/2745714.html

http://man.linuxde.net/touch