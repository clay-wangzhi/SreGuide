---
title: 每天一个linux命令（6）-rmdir
tag: linux常用命令
categories: Linux
date: 2018-07-27 18:35:00
copyright: true
---

rmdir命令。rmdir是常用的命令，该命令的功能是删除空目录，一个目录被删除之前必须是空的。（注意，rm - r dir命令可代替rmdir，但是有很大危险性。）删除某目录时也必须具有对父目录的写权限。

<!--more-->

## 语法

`rmdir(选项)(参数)`

## 选项

```
-p或--parents：删除指定目录后，若该目录的上层目录已变成空目录，则将其一并删除；
--ignore-fail-on-non-empty：此选项使rmdir命令忽略由于删除非空目录时导致的错误信息；
-v或-verboes：显示命令的详细执行过程；
--help：显示命令的帮助信息；
--version：显示命令的版本信息。
```

## 参数

目录列表：要删除的空目录列表。当删除多个空目录时，目录名之间使用空格隔开。

## 常用范例

1）rmdir 不能删除非空目录

```
# tree
.
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
# rmdir doc
rmdir: doc: 目录非空
# rmdir doc/info
# rmdir doc/product
# tree
.
|-- bin
|-- doc
|-- lib
|-- logs
|   |-- info
|   `-- product
`-- service
    `-- deploy
        |-- info
        `-- product
10 directories, 0 files
```

2）rmdir -p 当子目录被删除后使它也成为空目录的话，则顺便一并删除 

```
# tree
.
|-- bin
|-- doc
|-- lib
|-- logs
|   `-- product
`-- service
    `-- deploy
        |-- info
        `-- product
10 directories, 0 files
# rmdir -p logs
rmdir: logs: 目录非空
# tree
.
|-- bin
|-- doc
|-- lib
|-- logs
|   `-- product
`-- service
    `-- deploy
        |-- info
        `-- product
9 directories, 0 files
# rmdir -p logs/product
# tree
.
|-- bin
|-- doc
|-- lib
`-- service
`-- deploy
        |-- info
        `-- product
7 directories, 0 files
```

参考链接：

http://www.cnblogs.com/peida/archive/2012/10/27/2742076.html

http://man.linuxde.net/rmdir