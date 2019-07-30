---
title: 每天一个linux命令（18）-locate
tag: linux常用命令
categories: Linux
date: 2018-07-27 18:47:00
copyright: true
---

locate 让使用者可以很快速的搜寻档案系统内是否有指定的档案。其方法是先建立一个包括系统内所有档案名称及路径的数据库，之后当寻找时就只需查询这个数据库，而不必实际深入档案系统之中了。在一般的 distribution 之中，数据库的建立都被放在 crontab 中自动执行。

<!--more-->

## 语法

`locate (选项)(参数)`

## 选项

```
-e   将排除在寻找的范围之外。
-1  如果 是 1．则启动安全模式。在安全模式下，使用者不会看到权限无法看到	的档案。这会始速度减慢，因为 locate 必须至实际的档案系统中取得档案的	权限资料。
-f   将特定的档案系统排除在外，例如我们没有到理要把 proc 档案系统中的档案	放在资料库中
-q  安静模式，不会显示任何错误讯息
-n 至多显示 n个输出
-r 使用正规运算式 做寻找的条件
-o 指定资料库存的名称
-d 指定资料库的路径
-h 显示辅助讯息
-V 显示程式的版本讯息
```

## 参数

查找字符串：要查找的文件名中含有的字符串。

## 功能

locate命令可以在搜寻数据库是快速找到档案，数据库有updatedb程序来更新，updatedb是由cron daemon周期性建立的，locate命令在搜寻数据库时比由整个由硬盘来搜寻资料来得快，但locate所找到的档案若是最近才建立或刚更名的，可能会找不到，在内定值中，updatedb每天会跑一次，可以由修改crontab来更新设定值。（/etc/crontab）

locate指令和find找寻档案的功能类似，但locate是透过update程序将硬盘中的所有档案盒目录资料先建立一个索引数据库，在执行locate时直接找该索引，查询速度会较快，索引数据库一般是由操作系统管理，但也可以直接下达update强迫系统立即修改索引数据库。

## 常用范例

1）查找和pwd相关的所有文件

```
# locate pwd
/bin/pwd
/etc/.pwd.lock
/sbin/unix_chkpwd
/usr/bin/pwdx
/usr/include/pwd.h
/usr/lib/python2.7/dist-packages/twisted/python/fakepwd.py
```

2） 搜索etc目录下所有以sh开头的文件 

```
 # locate /etc/sh
/etc/shadow
/etc/shadow-
/etc/shells
```

3）搜索etc目录下，所有以m开头的文件

```
# locate /etc/m
/etc/magic
/etc/magic.mime
/etc/mailcap
/etc/mailcap.order
```

参考链接：

http://www.cnblogs.com/peida/archive/2012/11/12/2765750.html

http://man.linuxde.net/locate_slocate