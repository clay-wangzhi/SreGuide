---
title: 每天一个linux命令（3）-pwd
tag: linux常用命令
categories: Linux
date: 2018-07-27 18:32:00
copyright: true
---

Linux中用 pwd 命令来查看”当前工作目录“的完整路径。 简单得说，每当你在终端进行操作时，你都会有一个当前工作目录。 在不太确定当前位置时，就会使用pwd来判定当前目录在文件系统内的确切位置。

<!--more-->

## 语法

`pwd（选项）`

## 选项

```
-L 目录连接链接时，输出连接路径
-P 输出物理路径
--help：显示帮助信息；
--version：显示版本信息。
```

## 常用范例

显示当前位置

```
pwd
```





参考链接：

http://www.cnblogs.com/peida/archive/2012/10/24/2737730.html

http://man.linuxde.net/pwd