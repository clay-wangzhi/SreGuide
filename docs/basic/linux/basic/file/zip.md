---
category: Linux
---
# 打包、压缩

### tar命令

tar命令可以为linux的文件和目录创建档案。利用tar，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。tar最初被用来在磁带上创建档案，现在，用户可以在任何设备上创建档案。利用tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以便于网络传输是非常有用的。

首先要弄清两个概念：打包和压缩。打包时指将一大堆文件或目录变成为一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件。

为什么要区分这两个概念呢？这源于Linux中很多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你得先将这一大堆文件先打成一个包（tar命令），然后再用压缩程序进行压缩（[gzip](http://man.linuxde.net/gzip) [bzip2](http://man.linuxde.net/bzip2)命令）。

#### 语法

`tar(选项)(参数)`

#### 选项

```
-A或--catenate：新增文件到以存在的备份文件；
-B：设置区块大小；
-c或--create：建立新的备份文件；
-C <目录>：这个选项用在解压缩，若要在特定目录解压缩，可以使用这个选项。
-d：记录文件的差别；
-x或--extract或--get：从备份文件中还原文件；
-t或--list：列出备份文件的内容；
-z或--gzip或--ungzip：通过gzip指令处理备份文件；
-Z或--compress或--uncompress：通过compress指令处理备份文件；
-f<备份文件>或--file=<备份文件>：指定备份文件；
-v或--verbose：显示指令执行过程；
-r：添加文件到已经压缩的文件；
-u：添加改变了和现有的文件到已经存在的压缩文件；
-j：支持bzip2解压文件；
-v：显示操作过程；
-l：文件系统边界设置；
-k：保留原有文件不覆盖；
-m：保留文件不被覆盖；
-w：确认压缩文件的正确性；
-p或--same-permissions：用原来的文件权限还原文件；
-P或--absolute-names：文件名使用绝对名称，不移除文件名称前的“/”号；
-N <日期格式> 或 --newer=<日期时间>：只将较指定日期更新的文件保存到备份文件里；
--exclude=<范本样式>：排除符合范本样式的文件。
```

#### 参数

文件或目录：指定要打包的文件或目录列表。

#### 常用实例

1）**将文件全部打包成tar包**：

```
tar -cvf log.tar log2012.log    仅打包，不压缩！ 
tar -zcvf log.tar.gz log2012.log   打包后，以 gzip 压缩 
tar -jcvf log.tar.bz2 log2012.log  打包后，以 bzip2 压缩 
```

在选项`f`之后的文件档名是自己取的，我们习惯上都用 .tar 来作为辨识。 如果加`z`选项，则以.tar.gz或.tgz来代表gzip压缩过的tar包；如果加`j`选项，则以.tar.bz2来作为tar包名。

2）**查阅上述tar包内有哪些文件**：

```
tar -ztvf log.tar.gz
```

由于我们使用 gzip 压缩的log.tar.gz，所以要查阅log.tar.gz包内的文件时，就得要加上`z`这个选项了。

3）**将tar包解压缩**：

```
tar -zxvf /opt/soft/test/log.tar.gz
```

在预设的情况下，我们可以将压缩档在任何地方解开的

4）**只将tar内的部分文件解压出来**：

```
tar -zxvf /opt/soft/test/log30.tar.gz log2013.log
```

5）**文件备份下来，并且保存其权限**：

```
tar -zcvpf log31.tar.gz log2014.log log2015.log log2016.log
```

这个`-p`的属性是很重要的，尤其是当您要保留原本文件的属性时。

6）**在文件夹当中，比某个日期新的文件才备份**：

```
tar -N "2012/11/13" -zcvf log17.tar.gz test
```

7）**备份文件夹内容是排除部分文件：**

```
tar --exclude scf/service -zcvf scf.tar.gz scf/*
```

8）**其实最简单的使用 tar 就只要记忆底下的方式即可：**

```
压　缩：tar -jcv -f filename.tar.bz2 要被压缩的文件或目录名称
查　询：tar -jtv -f filename.tar.bz2
解压缩：tar -jxv -f filename.tar.bz2 -C 欲解压缩的目录

```

### gzip命令

**gzip命令**用来压缩文件。gzip是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多处“.gz”扩展名。

gzip是在Linux系统中经常使用的一个对文件进行压缩和解压缩的命令，既方便又好用。gzip不仅可以用来压缩大的、较少使用的文件以节省磁盘空间，还可以和[tar](http://man.linuxde.net/tar)命令一起构成Linux操作系统中比较流行的压缩文件格式。据统计，gzip命令对文本文件有60%～70%的压缩率。减少文件大小有两个明显的好处，一是可以减少存储空间，二是通过网络传输文件时，可以减少传输的时间。

#### 语法

`gzip(选项)(参数)`

#### 选项

```
-a或——ascii：使用ASCII文字模式；
-d或--decompress或----uncompress：解开压缩文件；
-f或——force：强行压缩文件。不理会文件名称或硬连接是否存在以及该文件是否为符号连接；
-h或——help：在线帮助；
-l或——list：列出压缩文件的相关信息；
-L或——license：显示版本与版权信息；
-n或--no-name：压缩文件时，不保存原来的文件名称及时间戳记；
-N或——name：压缩文件时，保存原来的文件名称及时间戳记；
-q或——quiet：不显示警告信息；
-r或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；
-S或<压缩字尾字符串>或----suffix<压缩字尾字符串>：更改压缩字尾字符串；
-t或——test：测试压缩文件是否正确无误；
-v或——verbose：显示指令执行过程；
-V或——version：显示版本信息；
-<压缩效率>：压缩效率是一个介于1~9的数值，预设值为“6”，指定愈大的数值，压缩效率就会愈高；
--best：此参数的效果和指定“-9”参数相同；
--fast：此参数的效果和指定“-1”参数相同。

```

#### 参数

文件列表：指定要压缩的文件列表。

#### 常用范例

1）把test6目录下的每个文件压缩成.gz文件

```
# ll
总计 604
---xr--r-- 1 root mail  302108 11-30 08:39 linklog.log
---xr--r-- 1 mail users 302108 11-30 08:39 log2012.log
-rw-r--r-- 1 mail users     61 11-30 08:39 log2013.log
# gzip *
# ll
总计 28
---xr--r-- 1 root mail  1341 11-30 08:39 linklog.log.gz
---xr--r-- 1 mail users 1341 11-30 08:39 log2012.log.gz
-rw-r--r-- 1 mail users   70 11-30 08:39 log2013.log.gz

```

2）把例1中每个压缩的文件解压，并列出详细的信息

```
# ll
总计 28
---xr--r-- 1 root mail  1341 11-30 08:39 linklog.log.gz
---xr--r-- 1 mail users 1341 11-30 08:39 log2012.log.gz
-rw-r--r-- 1 mail users   70 11-30 08:39 log2013.log.gz
# gzip -dv *
linklog.log.gz:  99.6% -- replaced with linklog.log
log2012.log.gz:  99.6% -- replaced with log2012.log
log2013.log.gz:  47.5% -- replaced with log2013.log
# ll
总计 604
---xr--r-- 1 root mail  302108 11-30 08:39 linklog.log
---xr--r-- 1 mail users 302108 11-30 08:39 log2012.log
-rw-r--r-- 1 mail users     61 11-30 08:39 log2013.log

```

3）详细显示例1中每个压缩的文件的信息，并不解压

```
# gzip -l *
         compressed        uncompressed  ratio uncompressed_name
               1341              302108  99.6% linklog.log
               1341              302108  99.6% log2012.log
                 70                  61  47.5% log2013.log


```

4）压缩一个tar备份文件，此时压缩文件的扩展名为.tar.gz

```
#ls -al log.tar
-rw-r--r-- 1 root root 307200 11-29 17:54 log.tar
# gzip -r log.tar
# ls -al log.tar.gz 
-rw-r--r-- 1 root root 1421 11-29 17:54 log.tar.gz

```

5）递归的压缩目录

```
# ll
总计 604
---xr--r-- 1 root mail  302108 11-30 08:39 linklog.log
---xr--r-- 1 mail users 302108 11-30 08:39 log2012.log
-rw-r--r-- 1 mail users     61 11-30 08:39 log2013.log
# cd ..
# gzip -rv test6
test6/linklog.log:       99.6% -- replaced with test6/linklog.log.gz
test6/log2013.log:       47.5% -- replaced with test6/log2013.log.gz
test6/log2012.log:       99.6% -- replaced with test6/log2012.log.gz
# cd test6
# ll
总计 28
---xr--r-- 1 root mail  1341 11-30 08:39 linklog.log.gz
---xr--r-- 1 mail users 1341 11-30 08:39 log2012.log.gz
-rw-r--r-- 1 mail users   70 11-30 08:39 log2013.log.gz
```

说明：

这样，所有test下面的文件都变成了*.gz，目录依然存在只是目录里面的文件相应变成了*.gz.这就是压缩，和打包不同。因为是对目录操作，所以需要加上-r选项，这样也可以对子目录进行递归了。 

6）递归地解压目录

```
# ll
总计 28
---xr--r-- 1 root mail  1341 11-30 08:39 linklog.log.gz
---xr--r-- 1 mail users 1341 11-30 08:39 log2012.log.gz
-rw-r--r-- 1 mail users   70 11-30 08:39 log2013.log.gz
# cd ..
# gzip -dr test6
# cd test6
# ll
总计 604
---xr--r-- 1 root mail  302108 11-30 08:39 linklog.log
---xr--r-- 1 mail users 302108 11-30 08:39 log2012.log
-rw-r--r-- 1 mail users     61 11-30 08:39 log2013.log
```
