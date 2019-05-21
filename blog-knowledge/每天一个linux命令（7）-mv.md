---
title: 每天一个linux命令（7）-mv
tag: linux常用命令
categories: Linux
date: 2018-07-27 18:36:00
copyright: true
---

**mv命令**用来对文件或目录重新命名，或者将文件从一个目录移到另一个目录中。source表示源文件或目录，target表示目标文件或目录。如果将一个文件移到一个已经存在的目标文件中，则目标文件的内容将被覆盖。

<!--more-->

mv命令可以用来将源文件移至一个目标文件中，或将一组文件移至一个目标目录中。源文件被移至目标文件有两种不同的结果：

1. 如果目标文件是到某一目录文件的路径，源文件会被移到此目录下，且文件名不变。
2. 如果目标文件不是目录文件，则源文件名（只能有一个）会变为此目标文件名，并覆盖己存在的同名文件。如果源文件和目标文件在同一个目录下，mv的作用就是改文件名。当目标文件是目录文件时，源文件或目录参数可以有多个，则所有的源文件都会被移至目标文件中。所有移到该目录下的文件都将保留以前的文件名。

注意事项：mv与cp的结果不同，mv好像文件“搬家”，文件个数并未增加。而cp对文件进行复制，文件个数增加了。

## 语法

`mv(选项)(参数)`

## 选项

```
--backup=<备份模式>：若需覆盖文件，则覆盖前先行备份；
-b：当文件存在时，覆盖前，为其创建一个备份；
-f：若目标文件或目录与现有的文件或目录重复，则直接覆盖现有的文件或目录；
-i：交互式操作，覆盖前先行询问用户，如果源文件与目标文件或目标目录中的文件同名，则询问用户是否覆盖目标文件。用户输入”y”，表示将覆盖目标文件；输入”n”，表示取消对源文件的移动。这样可以避免误将文件覆盖。
--strip-trailing-slashes：删除源文件中的斜杠“/”；
-S<后缀>：为备份文件指定后缀，而不使用默认的后缀；
-t:--target-directory=<目录>,指定源文件要移动到目标目录；
-u：当源文件比目标文件新或者目标文件不存在时，才执行移动操作。
```

## 参数

- 源文件：源文件列表。
- 目标文件：如果“目标文件”是文件名则在移动文件的同时，将其改名为“目标文件”；如果“目标文件”是目录名则将源文件移动到“目标文件”下。

## 常用范例

1）文件改名

```
# ll
总计 20drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
-rw-r--r-- 1 root root   16 10-28 06:04 test.log
# mv test.log test1.txt
# ll
总计 20drwxr-xr-x 6 root root 4096 10-27 01:58 scf
-rw-r--r-- 1 root root   16 10-28 06:04 test1.txt
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
```

2）移动文件

```
# ll
总计 20drwxr-xr-x 6 root root 4096 10-27 01:58 scf
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# mv test1.txt test3
# ll
总计 16drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 06:09 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# cd test3
# ll
总计 4
-rw-r--r-- 1 root root 29 10-28 06:05 test1.txt
```

3）将文件log1.txt,log2.txt,log3.txt移动到目录test3中

```
# ll
总计 28
-rw-r--r-- 1 root root    8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root   12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log3.txt
drwxrwxrwx 2 root root 4096 10-28 06:09 test3
# mv log1.txt log2.txt log3.txt test3
# ll
总计 16drwxrwxrwx 2 root root 4096 10-28 06:18 test3
# cd test3/
# ll
总计 16
-rw-r--r-- 1 root root  8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root 12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
-rw-r--r-- 1 root root 29 10-28 06:05 test1.txt
# ll
总计 20
-rw-r--r-- 1 root root    8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root   12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log3.txt
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
# mv -t /opt/soft/test/test4/ log1.txt log2.txt 	log3.txt 
]# cd ..
# cd test4/
# ll
总计 12
-rw-r--r-- 1 root root  8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root 12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
```

4）将文件file1改名为file2，如果file2已经存在，则询问是否覆盖

```
# ll
总计 12
-rw-r--r-- 1 root root  8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root 12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
# cat log1.txt 
odfdfs
# cat log2.txt 
ererwerwer
# mv -i log1.txt log2.txt 
mv：是否覆盖“log2.txt”? y
# cat log2.txt 
odfdfs
```

5）将文件file1改名为file2，即使file2存在，也是直接覆盖掉

```
# ll
总计 8
-rw-r--r-- 1 root root  8 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
# cat log2.txt 
odfdfs
# cat log3
cat: log3: 没有那个文件或目录
# ll
总计 8
-rw-r--r-- 1 root root  8 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
# cat log2.txt 
odfdfs
# cat log3.txt 
dfosdfsdfdss
# mv -f log3.txt log2.txt 
# cat log2.txt 
dfosdfsdfdss
# ll
总计 4
-rw-r--r-- 1 root root 13 10-28 06:16 log2.txt
```

说明：

log3.txt的内容直接覆盖了log2.txt内容，-f 这是个危险的选项，使用的时候一定要保持头脑清晰，一般情况下最好不用加上它。

6）目录的移动

```
ll
-rw-r--r-- 1 root root 13 10-28 06:16 log2.txt
# ll
-rw-r--r-- 1 root root 13 10-28 06:16 log2.txt
# cd ..
# ll
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 3 root root 4096 10-28 06:24 test3
drwxr-xr-x 2 root root 4096 10-28 06:48 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# cd test3
# ll
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
# cd ..
# mv test4 test3
# ll
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 4 root root 4096 10-28 06:54 test3
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# cd test3/
# ll
drwxr-xr-x 2 root root 4096 10-28 06:21 log
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-28 06:48 test4
```

说明：

如果目录dir2不存在，将目录dir1改名为dir2；否则，将dir1移动到dir2中。

7）移动当前文件夹下的所有文件到上一级目录

```
# ll
-rw-r--r-- 1 root root 25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log2.txt
# mv * ../
# ll
# cd ..
# ll
-rw-r--r-- 1 root root   25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-28 07:02 test4
```

8）把当前目录的一个子目录里的文件移动到另一个子目录里

```
# ll
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 4 root root 4096 10-28 07:02 test3
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# cd test3
# ll
-rw-r--r-- 1 root root   25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-28 07:02 test4
# cd ..
# mv test3/*.txt test5
# cd test5
# ll
-rw-r--r-- 1 root root   25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-25 17:56 test5-1
# 	cd ..
# cd test3/
# ll
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
drwxr-xr-x 2 root root 4096 10-28 07:02 test4
```

9）文件被覆盖前做简单备份，前面加参数-b

```
# ll
-rw-r--r-- 1 root root   25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-25 17:56 test5-1
# mv log1.txt -b log2.txt
mv：是否覆盖“log2.txt”? y
# ll
-rw-r--r-- 1 root root   25 10-28 07:02 log2.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt~
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-25 17:56 test5-1
```

说明：

-b 不接受参数，mv会去读取环境变量VERSION_CONTROL来作为备份策略。

--backup该选项指定如果目标文件存在时的动作，共有四种备份策略：

1.CONTROL=none或off : 不备份。

2.CONTROL=numbered或t：数字编号的备份

3.CONTROL=existing或nil：如果存在以数字编号的备份，则继续编号备份m+1...n：

执行mv操作前已存在以数字编号的文件log2.txt.~1~，那么再次执行将产生log2.txt~2~，以次类推。如果之前没有以数字编号的文件，则使用下面讲到的简单备份。

4.CONTROL=simple或never：使用简单备份：在被覆盖前进行了简单备份，简单备份只能有一份，再次被覆盖时，简单备份也会被覆盖。



参考链接：

http://www.cnblogs.com/peida/archive/2012/10/27/2743022.html

http://man.linuxde.net/mv