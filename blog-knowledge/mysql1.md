---
title: mysqldump数据导出和source数据导入
tag: Mysql
categories: Linux
date: 2017-11-27 18:23:00
copyright: true
---

一般情况下我用Navicat软件进行数据的导入导出比较多，一下是用mysqldump进行实现

<!--more-->



## 导出数据

启动dos
运行里面运行：cmd
（1）导出数据库
   ①导出所有数据库（包括系统数据库）到指定文件下

```
mysqldump -u$ -p*** --all-databases > D:/all.sql
   注：$为用户***为用户密码（最好回车后填写）命令后面没有任何标点符号
```

  ②导出db1和db2两个数据库的所有数据

```
mysqldump -uroot -p123456 --databases db1 db2 > D:/db1_2.sql
```

 ③只导出表结构不导出数据，--no-data

```
mysqldum -uroot -p123456 --no-data --database db1 >D:/db1_data.sql
```

 ④跨服务器导出导入数据

```
mysqldump --host=192.168.80.136 -uroot -p123456 -C --database db1 |mysql --host=192.168.80.156 -uroot -p123456 db1
```


  注意：加上-C参数可以启用压缩传递

（2）导出表
​            注意导出指定表只能针对一个数据库进行导出，且导出的内容中和导出数据库也不一样，导出指定表的导出文本中没有创建  数据库的判断语句，只有删除表-创建表-导入数据

 ①导出db1中的a1、a2表

```
mysqldump -uroot -p123456 --databases db1 --tables a1 a2 >D:/db1_a1_a2.sql  
```

 ②条件导出，导出db1表a1中字段id=1的表

```
mysqldump -uroot -p123456 --databases db1 --tables a1 --where="id='1'" > D:db1_id1.sql
```

注意：如果想导出“远程数据库服务器”的数据，加一个-h参数指定服务器地址即可:

```
mysqldump -h125.123.125.220 -uroot -p123456 --databases db1 >D:/remote_data.sql
```

## 导入数据

  （1）导入数据库
 登录进入mysql界面使用CREATE命令创建数据库后使用USE命令进入该数据库，然后再使用SOURCE命令即可导入数据库
  注：如果sql文件中已经有数据库创建语句，则不用使用CREATE和USE命令

  例如：导入数据库db1

```
    CREATE DATABASE db1;
     USE db1;
     SOURCE d:/dn1.sql;
```

（2）导入数据表
  登录进入mysql界面选择数据库使用SOURCE命令即可

参考博客：

><https://blog.csdn.net/wdg1994/article/details/51089245>

