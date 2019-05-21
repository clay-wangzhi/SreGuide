---
title: 主库异常，从库手动切换为主库方案
tag: Mysql
categories: Linux
date: 2017-11-28 18:23:00
copyright: true
---

<!--more-->

### 1.登录从服务器，确认从服务器已经完成所有同步操作：

```
mysql> stop slave io_thread  
mysql> show processlist 
直到看到状态都为：xxx has read all relay log 表示更新都执行完毕
```

### 2.停止从服务器slave服务：

```
mysql> stop slave
```

### 3.将从服务器切换为主服务器：

```
mysql> reset master 
```

完成切换

### 4.授权内网其他机器有写入等权限(如果没有权限的话)

```
mysql> SELECT Host,User FROM mysql.user;
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.1.%' IDENTIFIED BY '123456'  WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
```

### 5.修改其他机器hosts或应用内连接

```
# vi /etc/hosts
192.168.1.106 db-001
```