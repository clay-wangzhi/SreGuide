---
category: Linux
---
# 创建、复制、移动、删除

### touch命令（创建文件）

linux的touch命令不常用，一般在使用make的时候可能会用到，用来修改文件时间戳，或者新建一个不存在的文件。

#### 语法

`touch(选项)(参数)`

选项

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

#### 功能

touch命令参数可更改文档或目录的日期时间，包括存取时间和更改时间。 

#### 常用范例

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

### mkdir命令（创建目录）

mkdir命令用来创建目录。该命令创建由[dirname](http://man.linuxde.net/dirname)命名的目录。如果在目录名的前面没有加任何路径名，则在当前目录下创建由dirname指定的目录；如果给出了一个已经存在的路径，将会在该目录下创建一个指定的目录。在创建目录时，应保证新建的目录与它所在目录下的文件没有重名。 

#### 语法

`cd (选项) (参数)`

#### 选项

```
-Z：设置安全上下文，当使用SELinux时有效；
-m<目标属性>或--mode<目标属性>建立目录的同时设置目录的权限；
-p或--parents 若所要建立目录的上层目录目前尚未建立，则会一并建立上层目录；
-v, --verbose  每次创建新目录都显示信息
--version 显示版本信息。
```

#### 常用范例

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

### cp命令（复制）

cp命令用来复制文件或者目录，是Linux系统中最常用的命令之一。一般情况下，shell会设置一个别名，在命令行下复制文件时，如果目标文件已经存在，就会询问是否覆盖，不管你是否使用-i参数。但是如果是在shell脚本中执行cp时，没有-i参数时不会询问是否覆盖。这说明命令行和shell脚本的执行方式有些不同。

#### 语法

`cp(选项)(参数)`

#### 选项

```
-a：此参数的效果和同时指定"-dpR"参数相同；
-d：当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录；
-f：强行复制文件或目录，不论目标文件或目录是否已存在；
-i：覆盖既有文件之前先询问用户；
-l：对源文件建立硬连接，而非复制文件；
-p：保留源文件或目录的属性；
-R/r：递归处理，将指定目录下的所有文件与子目录一并处理；
-s：对源文件建立符号连接，而非复制文件；
-u：使用这项参数后只会在源文件的更改时间较目标文件更新时或是名称相互对应的目标文件并不存在时，才复制文件；
-S：在备份文件时，用指定的后缀“SUFFIX”代替文件的默认后缀；
-b：覆盖已存在的文件目标前将目标文件备份；
-v：详细显示命令执行的操作。
```

#### 参数

- 源文件：制定源文件列表。默认情况下，cp命令不能复制目录，如果要复制目录，则必须使用`-R`选项；
- 目标文件：指定目标文件。当“源文件”为多个文件时，要求“目标文件”为指定的目录。

#### 常用范例

1）复制单个文件到目标目录，文件在目标文件中不存在

```
# cp log.log test5
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxr-xr-x 2 root root 4096 10-28 14:53 test5
# cd test5
# ll
-rw-r--r-- 1 root root 0 10-28 14:46 log5-1.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-2.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-3.log
-rw-r--r-- 1 root root 0 10-28 14:53 log.log
```

说明：

在没有带-a参数时，两个文件的时间是不一样的。在带了-a参数时，两个文件的时间是一致的。  

2）目标文件存在时，会询问是否覆盖

```
# cp log.log test5
cp：是否覆盖“test5/log.log”? n
# cp -a log.log test5
cp：是否覆盖“test5/log.log”? y
# cd test5/
# ll
-rw-r--r-- 1 root root 0 10-28 14:46 log5-1.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-2.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-3.log
-rw-r--r-- 1 root root 0 10-28 14:48 log.log
```

说明：

目标文件存在时，会询问是否覆盖。这是因为cp是cp -i的别名。目标文件存在时，即使加了-f标志，也还会询问是否覆盖。

3）复制整个目录

目标目录存在时：

```
#cp -a test3 test5 
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxr-xr-x 3 root root 4096 10-28 15:11 test5
# cd test5/
# ll
-rw-r--r-- 1 root root    0 10-28 14:46 log5-1.log
-rw-r--r-- 1 root root    0 10-28 14:46 log5-2.log
-rw-r--r-- 1 root root    0 10-28 14:46 log5-3.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
```

目标目录不存在时：

```
# cp -a test3 test4
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxrwxrwx 2 root root 4096 10-28 14:47 test4
drwxr-xr-x 3 root root 4096 10-28 15:11 test5
```

说明：

注意目标目录存在与否结果是不一样的。目标目录存在时，整个源目录被复制到目标目录里面。

4）复制的 log.log 建立一个链接到 log_link.log

```
# cp -s log.log log_link.log
# ll
lrwxrwxrwx 1 root root    7 10-28 15:18 log_link.log -> log.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxrwxrwx 2 root root 4096 10-28 14:47 test4
drwxr-xr-x 3 root root 4096 10-28 15:11 test5
```

说明：

那个 log_link.log 是由 -s 的参数造成的，建立的是一个『快捷方式』，所以您会看到在文件的最右边，会显示这个文件是『连结』到哪里去的！

5）将文件file复制到目录`/usr/men/tmp`下，并改名为file1

```
cp file /usr/men/tmp/file1
```

6）将目录`/usr/men`下的所有文件及其子目录复制到目录`/usr/zh`中

```
cp -i /usr/men m*.c /usr/zh
```

我们在Linux下使用cp命令复制文件时候，有时候会需要覆盖一些同名文件，覆盖文件的时候都会有提示：需要不停的按Y来确定执行覆盖。文件数量不多还好，但是要是几百个估计按Y都要吐血了，于是折腾来半天总结了一个方法：

```
cp aaa/* /bbb
复制目录aaa下所有到/bbb目录下，这时如果/bbb目录下有和aaa同名的文件，需要按Y来确认并且会略过aaa目录下的子目录。

cp -r aaa/* /bbb
这次依然需要按Y来确认操作，但是没有忽略子目录。

cp -r -a aaa/* /bbb
依然需要按Y来确认操作，并且把aaa目录以及子目录和文件属性也传递到了/bbb。

\cp -r -a aaa/* /bbb
成功，没有提示按Y、传递了目录属性、没有略过目录。
```

### mv命令（移动）

**mv命令**用来对文件或目录重新命名，或者将文件从一个目录移到另一个目录中。source表示源文件或目录，target表示目标文件或目录。如果将一个文件移到一个已经存在的目标文件中，则目标文件的内容将被覆盖。

mv命令可以用来将源文件移至一个目标文件中，或将一组文件移至一个目标目录中。源文件被移至目标文件有两种不同的结果：

1. 如果目标文件是到某一目录文件的路径，源文件会被移到此目录下，且文件名不变。
2. 如果目标文件不是目录文件，则源文件名（只能有一个）会变为此目标文件名，并覆盖己存在的同名文件。如果源文件和目标文件在同一个目录下，mv的作用就是改文件名。当目标文件是目录文件时，源文件或目录参数可以有多个，则所有的源文件都会被移至目标文件中。所有移到该目录下的文件都将保留以前的文件名。

注意事项：mv与cp的结果不同，mv好像文件“搬家”，文件个数并未增加。而cp对文件进行复制，文件个数增加了。

#### 语法

`mv(选项)(参数)`

#### 选项

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

#### 参数

- 源文件：源文件列表。
- 目标文件：如果“目标文件”是文件名则在移动文件的同时，将其改名为“目标文件”；如果“目标文件”是目录名则将源文件移动到“目标文件”下。

#### 常用范例

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

### rm命令（删除）

rm命令可以删除一个目录中的一个或多个文件或目录，也可以将某个目录及其下属的所有文件及其子目录均删除掉。对于链接文件，只是删除整个链接文件，而原有文件保持不变。

rm是一个危险的命令，使用的时候要特别当心，尤其对于新手，否则整个系统就会毁在这个命令（比如在/（根目录）下执行rm * -rf）。所以，我们在执行rm之前最好先确认一下在哪个目录，到底要删除什么东西，操作时保持高度清醒的头脑。

#### 语法

`rm (选项)(参数)`

#### 选项

```
-d：直接把欲删除的目录的硬连接数据删除成0，删除该目录；
-f：强制删除文件或目录；
-i：删除已有文件或目录之前先询问用户；
-r或-R：递归处理，将指定目录下的所有文件与子目录一并处理；
--preserve-root：不对根目录进行递归操作；
-v：显示指令的详细执行过程。
```

#### 参数

文件：指定被删除的文件列表，如果参数中含有目录，则必须加上`-r`或者`-R`选项。

#### 常用范例

1）删除文件file，系统会先询问是否删除。

```
# rm log.log 
rm：是否删除 一般文件 “log.log”? y
```

输入rm log.log命令后，系统会询问是否删除，输入y后就会删除文件，不想删除则数据n。

2）强行删除file，系统不再提示

```
rm -f log1.log
```

3）删除任何.log文件；删除前逐一询问确认 

```
rm -i *.log
```

4）将 test1子目录及子目录中所有档案删除

```
rm -r test1
```

### rmdir命令（删除空目录）

rmdir命令。rmdir是常用的命令，该命令的功能是删除空目录，一个目录被删除之前必须是空的。（注意，rm - r dir命令可代替rmdir，但是有很大危险性。）删除某目录时也必须具有对父目录的写权限。

#### 语法

`rmdir(选项)(参数)`

#### 选项

```
-p或--parents：删除指定目录后，若该目录的上层目录已变成空目录，则将其一并删除；
--ignore-fail-on-non-empty：此选项使rmdir命令忽略由于删除非空目录时导致的错误信息；
-v或-verboes：显示命令的详细执行过程；
--help：显示命令的帮助信息；
--version：显示命令的版本信息。
```

#### 参数

目录列表：要删除的空目录列表。当删除多个空目录时，目录名之间使用空格隔开。

#### 常用范例

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
