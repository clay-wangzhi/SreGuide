---
category: Linux
---
# 查看文件类型

### ls命令

ls命令时linux下最常用的命令。ls命令就是list的缩写，缺省下ls用来打印出当前目录的清单，如果ls指定其他目录，那么就会显示指定目录里的文件及文件夹清单。

通过ls命令不仅可以查看linux文件夹包含的文件，而且可以查看文件权限（包括目录、文件夹、文件权限），查看目录信息等等。

#### 常用选项

```
-a：显示所有档案及目录（ls内定将档案名或目录名称为“.”的视为影藏，不会列出）；
-l：以长格式显示目录下的内容列表。输出的信息从左到右依次包括文件名，文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后修改时间等；
-h:–human-readable 以容易理解的格式列出文件大小 (例如 1K 234M 2G);
-s：显示文件和目录的大小，以区块为单位；
-t：用文件和目录的更改时间排序；
-r：以文件名反序排列并输出目录内容列表；
-d：仅显示目录名，而不显示目录下的内容列表。显示符号链接文件本身，而不显示其所指向的目录列表；
-R：递归处理，将指定目录下的所有文件及子目录一并处理；
--color[=WHEN]：使用不同的颜色高亮显示不同类型的。
```

#### 常用范例

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



#### 颜色

蓝色—–目录

绿色—–可执行文件 

白色—–一般性文件，如文本文件，配置文件等 

红色—–压缩文件或归档文件 

浅蓝色—-链接文件 

红色闪烁—-链接文件存在问题 

黄色—–设备文件 

青黄色—-管道文件 



### file命令

用来探测给定文件的类型。

#### 补充说明

**file命令** 用来探测给定文件的类型。file命令对文件的检查分为文件系统、魔法幻数检查和语言检查3个过程。

#### 语法  

```
file(选项)(参数)
```

#### 选项  

```
-b：列出辨识结果时，不显示文件名称；
-c：详细显示指令执行过程，便于排错或分析程序执行的情形；
-f<名称文件>：指定名称文件，其内容有一个或多个文件名称时，让file依序辨识这些文件，格式为每列一个文件名称；
-L：直接显示符号连接所指向的文件类别；
-m<魔法数字文件>：指定魔法数字文件；
-v：显示版本信息；
-z：尝试去解读压缩文件的内容。
```

#### 参数  

文件：要确定类型的文件列表，多个文件之间使用空格分开，可以使用shell通配符匹配多个文件。

#### 实例  

显示文件类型

```
[root@localhost ~]# file install.log
install.log: UTF-8 Unicode text

[root@localhost ~]# file -b install.log      <== 不显示文件名称
UTF-8 Unicode text

[root@localhost ~]# file -i install.log      <== 显示MIME类别。
install.log: text/plain; charset=utf-8

[root@localhost ~]# file -b -i install.log
text/plain; charset=utf-8

```

显示符号链接的文件类型

```
[root@localhost ~]# ls -l /var/mail
lrwxrwxrwx 1 root root 10 08-13 00:11 /var/mail -> spool/mail

[root@localhost ~]# file /var/mail
/var/mail: symbolic link to `spool/mail'

[root@localhost ~]# file -L /var/mail
/var/mail: directory

[root@localhost ~]# file /var/spool/mail
/var/spool/mail: directory

[root@localhost ~]# file -L /var/spool/mail
/var/spool/mail: directory

```

