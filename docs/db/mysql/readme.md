---
category: MySQL
---
# 1 MySQL基本操作

## 1 数据库相关概念

### 1.1 什么是数据？

​		数据（data）是事实或观察的结果，是对客观事物的逻辑归纳，是用于表示客观事物的未经加工的原始素材。数据是信息的表现形式和载体，可以是符号、文字、数字、语音、图像、视频等。数据和信息是不可分离的，数据是信息的表达，信息是数据的内涵。数据本身没有意义，数据只有对实体行为产生影响才成为信息。数据可以是连续的值，比如声音、图像，称为模拟数据。也可以是离散的，如符号、文字，称为数字数据。在计算机系统中，数据以二进制信息单元0,1的形式表示。

### 1.2 什么是数据库？

​		数据库（Database）：是按照数据结构来组织、存储和管理数据的仓库。

### 1.3 什么是数据库管理系统（DBMS）？

​		数据库管理系统：是由数据库及其管理软件组成的系统，它支持如下操作：

​			1）提供数据持久性的存储，备份，恢复

​			2）支持事务管理

​			3）支持数据操作的并发

​			4）支持独立的管理语言（sql语句）

## 2 数据库的发展史

### 2.1 萌芽阶段：文件系统

最初始的数据库是用磁盘来存储数据的。文件就是最早的数据库。

### 2.2  第一代数据库：层次模型、网状模型

#### 2.2.1 层次模型

 ![1536628336467](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536628336467.png)

 缺点：

1. 查找不同类的数据效率低了（导航的结构的缺点）

2. 数据不完整（不能区分到底是一个李白还是两个李白）

#### 2.2.2 网状模型

网状模型解决了层次数据的数据不完整的问题，但是没有解决层次模型的导航问题。

 ![1536628485678](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536628485678.png)

### 2.3 第二代数据库：关系型数据库

特点：

1. 每个表都是独立的

2. 表与表之间通过公共字段来建立关系

![1536628687644](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536628687644.png)


优点：解决了导航问题，并且数据完整性得到解决

缺点：多表查询效率低了 

提示：我们现在用的主流的数据库都是关系模型的。 

```
多学一招：NoSQL（非关系型数据库）解决关系型数据库多表查询效率的问题，常见的非关系型数据库有：Redis、mongodb。数据库中存储格式是键值对。 
```

## 3 数据库的分类

### 3.1 关系型数据库

​		关系数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。现实世界中的各种实体以及实体之间的各种联系均用关系模型来表示。关系模型是由埃德加·科德于1970年首先提出的，并配合“科德十二定律”。现如今虽然对模型有一些批评意见，但它还是数据存储的传统标准。标准数据查询语言SQL就是一种基于关系数据库的语言，这种语言执行对关系数据库中数据的检索和操作。关系模型由关系数据结构、关系操作集合、关系完整性约束三部分组成。

#### 3.1.2  常见的关系型数据库

| 关系型数据库 | 开发公司                          | 使用语言 |
| ------------ | --------------------------------- | -------- |
| SQL Server   | 微软公司                          | T-SQL    |
| Oracle       | 甲骨文公司                        | PL/SQL   |
| MySQL        | MySQL AB 公司开发——甲骨文公司收购 | MySQL    |

### 3.2 非关系型数据库

## 4 Mysql的安装

## 5 连接服务器

```shell
-h 主机（host）
-u 用户名（username）
-p 密码（password）
-P 端口（port）
```

![1536633424017](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536633424017.png)

***

 ![1536633591923](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536633591923.png)

```
多学一招：如果MySQL服务器在本地，IP地址可以省略；如果MySQL服务器用的是3306端口，-P也是可以省略 
```

## 6 SQL介绍

### 6.1 SQL是什么

Structured Query Language（结构化查询语言），是用来操作关系型数据库的一门语言。这是一个关系型数据库的通用操作语言，也成为标准SQL，也叫SQL-92。

```
多学一招：数据库的生产厂商为了占有市场份额，都会在标准SQL的基础上扩展一些自己的东西以吸引用户。
```

**思考：**已知标准SQL可以在所有的关系型数据库上运行，在Oracle上编写的PL/SQL能否在MySQL上运行？

答：不能，只能运行标准SQL 。

### 6.2 SQL的分类

* DDL（data definition language）数据库定义语言CREATE、ALTER、DROP、SHOW
* DML（data manipulation language）数据操纵语言SELECT、UPDATE、INSERT、DELETE
* DCL（data control language）数据库控制语言,是用来设置或更改数据库用户或角色权限的语句GRANT,REVOKE,COMMIT,ROLLBACK
* DQL（data query language）：数据查询语言 SELECT

### 6.3 注意事项

* 每条SQL语句结束时要以`;`做为结束符(除了use命令)

* SQL语句的关键字不区分大小写(除了库名字和表名字)

* 在查询数据库信息或者表信息时,可以以\G做为结束符,表示以文本模式输出

* 当你不需要一条语句输出的结果以\c结束,不可以使用ctrl+c,否则登出mysql.

* 我们可以在命令行执行sql语句,要通过mysql -e参数

  `mysql -e "show databases \G`"显示到shell上

* 如果需要获取SQL语句的帮助可以用help命令`help create` 
  如果需要进一步获取帮助,可以继续使用help命令`help create database`

## 7 数据库操作

### 7.1 增
```mysql
create database [if not exists] `数据库名` [charset=utf8];
```
### 7.2 删
```mysql
drop database [if exists] 数据库名;
```
### 7.3 改
```mysql
alter database 数据库名 charset=字符编码;
```
### 7.4 查

```mysql
show databases;
```

安装MySQL后，MySQL自带了4个数据库

1. information_schema：存储了MySQL服务器管理数据库的信息。
2. performance_schema：MySQL5.5新增的表，用来保存数据库服务器性能的参数
3. mysql：MySQL系统数据库，保存的登录用户名，密码，以及每个用户的权限等等
4. test：给用户学习和测试的数据库。

显示创建数据库的SQL语句

```mysql
show create database 数据库名;
```

### 7.5 选择数据库

```mysql
use 数据库名称
```
## 8 表操作

### 8.1 增

```mysql
create table [if not exists] 表名（字段名 数据类型 [null|not null] [auto_increment] [primary key] [comment], 字段名 数据类型 [default]...）engine=存储引擎;
```

单词

```
null | not null   	空|非空
default	          	默认值
auto_increment    	自动增长
primary key       	主键
comment           	备注
engine           	引擎   
innodb  myisam  memory  引擎是决定数据存储的方式
```

### 8.2 删

```mysql
drop table [if exists] 表1,表2;
```

### 8.3 改

#### 8.3.1 修改表名

```mysql
alter table aa rename to bb;
```

#### 8.3.2 添加字段

```mysql
alter table aa add age int;
```

在第一个位置上添加字段

```mysql
alter table aa add email varchar(30) first;
```

在指定的字段后添加字段

```mysql
alter table aa add age int(10) after name;
```

#### 8.3.3 删除字段

```mysql
alter table aa drop email;
```

#### 8.3.4 修改字段名和类型

```mysql
alter table aa change sex xingbie int;
```

#### 8.3.5 修改字段类型

```mysql
alter table aa modify xingbie varchar(2);
```

#### 8.3.6 修改引擎

```mysql
alter table aa engine=myisam;
```

### 8.4 查

#### 8.4.1 显示所有表

```mysql
show tables;
```
#### 8.4.2 显示创建表的语句
```mysql
show create table 表名;
```
#### 8.4.3 查看表结构
```mysql
desc 表名;
```
### 8.5 复制表
```mysql
create table 新表 select 字段 from 旧表;
```
## 9 数据操作
### 9.1 增
```mysql
insert into 表名 (字段名，字段名，...) values (值1，值2，...);
```
### 9.2 删

```mysql
delete from 表名 [where 条件];
```

删除表中所有记录

```mysql
delete from aa;
```

### 9.3 改

```mysql
update 表名 set 字段=值 [where 条件];
```
### 9.4 查

```mysql
select 列名 from 表;
```

### 9.5 清空表数据

```mysql
truncate table 表名;
```
## 10 数据表的文件介绍
一个数据库对应一个文件夹

一个表对应一个或多个文件

引擎是myisam，一个表对应三个文件

1.   xx.frm  表结构 
2.   xx.MYD  数据
3.   xx.MYI   index信息

 ![1536654269605](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536654269605.png)

引擎是innodb,一个表对应一个表结构文件

 ![1536654519700](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536654519700.png)

go3.frm 表结构

所有的innodb引擎的数据统一的存放在data\ibdata1文件中。如果数据量很大，MySQL会自动的创建ibdata2，ibdata3，…，目的就是为了便于管理。

 引擎是memory，数据存储在内存中，重启服务数据丢失，但是读取速度非常快
## 11 字符集
查看当前设置的字符编码集
```mysql
show variables like 'character_set_%';
```
客户端编码、character_set_client、character_set_results三个编码的值一致即可操作中文。

## 12 思维导图

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/xmind.png)