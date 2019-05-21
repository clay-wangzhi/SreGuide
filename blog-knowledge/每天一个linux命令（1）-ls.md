---
title: linux常用命令(一)
tag: linux常用命令
categories: Linux
date: 2016-06-07 18:30:00
copyright: true
---

linux常用命令：

ls、

<!-- more -->

## ls

ls命令时linux下最常用的命令。ls命令就是list的缩写，缺省下ls用来打印出当前目录的清单，如果ls指定其他目录，那么就会显示指定目录里的文件及文件夹清单。

通过ls命令不仅可以查看linux文件夹包含的文件，而且可以查看文件权限（包括目录、文件夹、文件权限），查看目录信息等等。

### 选项

常用选项

````
-a：显示所有档案及目录（ls内定将档案名或目录名称为“.”的视为影藏，不会列出）；
-l：以长格式显示目录下的内容列表。输出的信息从左到右依次包括文件名，文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后修改时间等；
-h:–human-readable 以容易理解的格式列出文件大小 (例如 1K 234M 2G);
-s：显示文件和目录的大小，以区块为单位；
-t：用文件和目录的更改时间排序；
-r：以文件名反序排列并输出目录内容列表；
-d：仅显示目录名，而不显示目录下的内容列表。显示符号链接文件本身，而不显示其所指向的目录列表；
-R：递归处理，将指定目录下的所有文件及子目录一并处理；
--color[=WHEN]：使用不同的颜色高亮显示不同类型的。
````

### 常用范例

1. 列出/opt文件夹下的所有文件和目录的详细资料

```
ls -lR /opt/
```

输出结果为：

```
/opt/:
total 124188
-rw-r--r-- 1 root root 127163815 Aug 25 06:10 go1.11.linux-amd64.tar.gz
-rw-r--r-- 1 root root      1003 Sep 11 14:16 setup.sh
drwxr-xr-x 1 root root       512 Jan 28 22:17 test

/opt/test:
total 0
-rw-r--r-- 1 root root 0 Jan 28 22:17 test.txt

```

2. 列出当前目录中所有以“t”开头的目录的详细内容，可以使用如下命令：

```
ls -l t*
```

输出结果为：

```
total 0
-rw-r--r-- 1 root root 0 Jan 28 22:17 test.txt
```

3. 列出目前工作目录下所有名称是s 开头的档案，越新的排越后面，可以使用如下命令：

```
ls -ltr s*
```

输出结果为：

```
-rw-r--r-- 1 root root 1003 Sep 11 14:16 setup.sh
-rw-r--r-- 1 root root    0 Jan 28 22:21 s.txt
```



## 颜色

蓝色—–目录 
绿色—–可执行文件 
白色—–一般性文件，如文本文件，配置文件等 
红色—–压缩文件或归档文件 
浅蓝色—-链接文件 
红色闪烁—-链接文件存在问题 
黄色—–设备文件 
青黄色—-管道文件 



参考链接：

http://man.linuxde.net/ls

http://www.9usb.net/201005/linux-ls.html

http://www.cnblogs.com/peida/archive/2012/10/23/2734829.html