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
