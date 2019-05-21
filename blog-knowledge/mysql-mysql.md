---
title: MySQL (一)
tag: MySQL
abbrlink: 3083c2a3
date: 2017-09-07 21:00:00
---

ok，everyone，现在让我们一起来探讨一下mysql！

<!--more-->

mysql的官方网址：www.mysql.com

## MySQL数据库的安装

### yum安装

网页地址为：

https://dev.mysql.com/downloads/repo/yum/

1.Adding the MySQL Yum Repository

```
wget https://repo.mysql.com//mysql57-community-release-el7-11.noarch.rpm
rpm -ivh mysql57-community-release-el7-11.noarch.rpm
```

2.Selecting a Release Series

```
yum repolist all|grep mysql
yum -y install yum-utils
yum-config-manager --disable mysql57-community
yum-config-manager --enable mysql56-community
yum repolist enabled | grep mysql
```

3.Installing MySQL

```
yum -y install mysql-community-server
```

4.Starting the MySQL Server

```
systemctl start mysqld.service
systemctl status mysqld.service
```

### rpm安装mysql

网页地址为：

https://dev.mysql.com/downloads/mysql/

根据自己的系统下载所需版本

1.Installing MySQL

```
wget https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-5.7.21-1.el7.x86_64.rpm-bundle.tar
tar -xvf mysql-5.7.21-1.el7.x86_64.rpm-bundle.tar
rpm -ivh mysql-community-common-5.7.21-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-5.7.21-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-5.7.21-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-5.7.21-1.el7.x86_64.rpm
```

2.Starting the MySQL Server

```
systemctl start mysqld.service
```

### 编译安装mysql

https://www.cnblogs.com/goalkeeper/p/5787063.html