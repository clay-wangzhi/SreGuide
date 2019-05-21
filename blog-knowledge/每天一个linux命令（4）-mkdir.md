---
title: 每天一个linux命令（4）-mkdir
tag: linux常用命令
categories: Linux
date: 2018-07-27 18:33:00
copyright: true
---

mkdir命令用来创建目录。该命令创建由[dirname](http://man.linuxde.net/dirname)命名的目录。如果在目录名的前面没有加任何路径名，则在当前目录下创建由dirname指定的目录；如果给出了一个已经存在的路径，将会在该目录下创建一个指定的目录。在创建目录时，应保证新建的目录与它所在目录下的文件没有重名。 

<!--more-->

## 语法

`cd (选项) (参数)`

## 选项

```
-Z：设置安全上下文，当使用SELinux时有效；
-m<目标属性>或--mode<目标属性>建立目录的同时设置目录的权限；
-p或--parents 若所要建立目录的上层目录目前尚未建立，则会一并建立上层目录；
-v, --verbose  每次创建新目录都显示信息
--version 显示版本信息。
```

## 常用范例

1）创建一个空目录 

```
mkdir test1
```

2）递归创建多个目录 

```
mkdir -p test2/test22
```

3）创建权限为777的目录 

```
mkdir -m 777 test3
```

4）一个命令创建项目的目录结构

```
#mkdir -vp scf/{lib/,bin/,doc/{info,product},logs/{info,product},service/deploy/{info,product}}
mkdir: 已创建目录 “scf”

mkdir: 已创建目录 “scf/lib”

mkdir: 已创建目录 “scf/bin”

mkdir: 已创建目录 “scf/doc”

mkdir: 已创建目录 “scf/doc/info”

mkdir: 已创建目录 “scf/doc/product”

mkdir: 已创建目录 “scf/logs”

mkdir: 已创建目录 “scf/logs/info”

mkdir: 已创建目录 “scf/logs/product”

mkdir: 已创建目录 “scf/service”

mkdir: 已创建目录 “scf/service/deploy”

mkdir: 已创建目录 “scf/service/deploy/info”

mkdir: 已创建目录 “scf/service/deploy/product”

# tree scf/

scf/

|-- bin

|-- doc

|   |-- info

|   `-- product

|-- lib

|-- logs

|   |-- info

|   `-- product

`-- service

   	 	`-- deploy

  	    	|-- info

        	`-- product


12 directories, 0 files

```

参考链接：

http://www.cnblogs.com/peida/archive/2012/10/25/2738271.html

http://man.linuxde.net/mkdir