## 基本权限 UGO

文件权限设置： 可以赋于某个用户或组  能够以何种方式  访问某个文件

文件权限管理之： UGO设置基本权限(r、w、x)

```
    rw-r--r--  alice hr  install.log
```

权限对象：

* 属主： u
* 属组：g
* 其他人： o

权限类型：

* 读：r  4

* 写：w 2

* 执行： x 1

### 设置权限

1. 更改文件的属主、属组

* chown：

```
chown ops.sre file1 //改属主、属组
chown ops file1     //只改属主
chown .ser file1	//只改属组
```

* chgrp：

```
chgrp it file1	    //改文件属组
chgrp -R it dir1	//改变目录dir1的属组及其目录下已有文件的属组
```

2. 更改权限

* 使用符号

```
chmod u+x file1		 //属主增加执行
chmod a=rwx file1	 //所有人等于读写执行
chmod a=- file1	     //所有人没有权限
chmod ug=rw,o=r file1 //属主属组等于读写，其他人只读
```

* 使用数字

```
chmod 644 file1  //给file1 属主读写，属组和其他读的权限
```

###  r、w、x权限对文件和目录的意义

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/01.png)