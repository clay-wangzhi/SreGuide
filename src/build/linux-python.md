---
title: centos6.5下安装python3.6、pip、ipython
category: 常见服务的搭建
date: 2017-09-27 21:00:00
---

centos6.5下安装python3.6、pip、ipython

<!--more-->

## 安装依赖包
test

```
# yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel
```

开始下载、编译、安装python3.6

```
# wget https://www.python.org/ftp/python/3.6.1/Python-3.6.1.tgz
# tar vxf Python-3.6.1.tgz
# cd Python-3.6.1.tgz
# ./configure --prefix=/usr/local   #编译，自定义安装目录，如果自定目录不在环境变量重要，要把安装的目录加入到环境变量中
# make && make install  #这个过程会非常慢 
```

检查是否安装成功

```
# python3
Python 3.6.1 (default, May 12 2017, 00:21:59) 
[GCC 4.4.7 20120313 (Red Hat 4.4.7-4)] on linux
Type "help", "copyright", "credits" or "license" for more information.
```

## 安装pip（pip-9.0）

```
# wget https://pypi.python.org/packages/11/b6/abcb525026a4be042b486df43905d6893fb04f05aac21c32c638e939e447/pip-9.0.1.tar.gz#md5=35f01da33009719497f01a4ba69d63c9  #pip下载，官网去下载。
# tar zxf pip-9.0.1.tar.gz 
# cd pip-9.0.1
# python3 setup.py install
```

## 安装ipython

```
# pip install ipython
```

## 设置 3.x 为默认版本

```
rm -f /usr/bin/python
ln -s /usr/local/bin/python3 /usr/bin/python
```



## 配置yum

升级 Python 之后，由于将默认的 python 指向了 python3，yum 不能正常使用，需要编辑 yum 的配置文件：

```
vim /usr/bin/yum
```

同时修改：

```
vim /usr/libexec/urlgrabber-ext-down
```

将 #!/usr/bin/python 改为 #!/usr/bin/python2.7，保存退出即可。

参考链接；

https://www.cnblogs.com/thong2006/p/6843633.html
