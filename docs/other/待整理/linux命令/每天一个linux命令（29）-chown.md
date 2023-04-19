---
title: 每天一个linux命令（29）-chown
tag: linux常用命令
category: Linux
date: 2018-07-27 18:58:00
copyright: true
---

chown将指定文件的拥有者改为指定的用户或组，用户可以是用户名或者用户ID；组可以是组名或者组ID；文件是以空格分开的要改变权限的文件列表，支持通配符。系统管理员经常使用chown命令，在将文件拷贝到另一个用户的名录下之后，让用户拥有使用该文件的权限。 

<!--more-->

## 语法

`chown(选项)(参数)`

## 选项

```
-c或——changes：效果类似“-v”参数，但仅回报更改的部分；
-f或--quite或——silent：不显示错误信息；
-h或--no-dereference：只对符号连接的文件作修改，而不更改其他任何相关文件；
-R或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；
-v或——version：显示指令执行过程；
--dereference：效果和“-h”参数相同；
--help：在线帮助；
--reference=<参考文件或目录>：把指定文件或目录的拥有者与所属群组全部设成和参考文件或目录的拥有者与所属群组相同；
--version：显示版本信息。
```

## 参数

用户：组：指定所有者和所属工作组。当省略“：组”，仅改变文件所有者；
文件：指定要改变所有者和工作组的文件列表。支持多个文件和目标，支持shell通配符。

## 功能

通过chown改变文件的拥有者和群组。在更改文件的所有者或所属群组时，可以使用用户名称和用户识别码设置。普通用户不能将自己的文件改变成其他的拥有者。其操作权限一般为管理员。

## 常用实例

1）**改变拥有者和群组**

```
# ll
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 root users 302108 11-30 08:39 log2012.log
# chown mail:mail log2012.log 
# ll
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 mail mail  302108 11-30 08:39 log2012.log
```

2）**改变文件拥有者**

```
ll
总计 604
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 mail mail  302108 11-30 08:39 log2012.log
# chown root: log2012.log 
# ll
总计 604
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 root mail  302108 11-30 08:39 log2012.log
```

3）**改变文件群组**

```
# ll
总计 604
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 root root  302108 11-30 08:39 log2012.log
# chown :mail log2012.log 
# ll
总计 604
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 root mail  302108 11-30 08:39 log2012.log
```

4）**改变指定目录以及其子目录下的所有文件的拥有者和群组 **

```
# ll
drwxr-xr-x 2 root users   4096 11-30 08:39 test6
# chown -R -v root:mail test6
“test6/log2014.log” 的所有者已更改为 root:mail
“test6/linklog.log” 的所有者已更改为 root:mail
“test6/log2015.log” 的所有者已更改为 root:mail
“test6/log2013.log” 的所有者已更改为 root:mail
“test6/log2012.log” 的所有者已保留为 root:mail
“test6/log2017.log” 的所有者已更改为 root:mail
“test6/log2016.log” 的所有者已更改为 root:mail
“test6” 的所有者已更改为 root:mail
# ll
drwxr-xr-x 2 root mail   4096 11-30 08:39 test6
# cd test6
# ll
总计 604
---xr--r-- 1 root mail 302108 11-30 08:39 linklog.log
---xr--r-- 1 root mail 302108 11-30 08:39 log2012.log
-rw-r--r-- 1 root mail     61 11-30 08:39 log2013.log
-rw-r--r-- 1 root mail      0 11-30 08:39 log2014.log
-rw-r--r-- 1 root mail      0 11-30 08:39 log2015.log
-rw-r--r-- 1 root mail      0 11-30 08:39 log2016.log
-rw-r--r-- 1 root mail      0 11-30 08:39 log2017.log
```

参考链接：

http://www.cnblogs.com/peida/archive/2012/12/04/2800684.html

http://man.linuxde.net/chown