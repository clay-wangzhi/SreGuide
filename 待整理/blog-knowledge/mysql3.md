---
title: Mysql常见的几个错误问题及解决方法
tag: Mysql
categories: Linux
date: 2017-11-29 18:23:00
copyright: true
---

Mysql常见的几个错误问题及解决方法：

<!--more-->

## mysql DNS反解：skip-name-resolve

错误日志有类似警告：

1. 120119 16:26:04 [Warning] IP address '192.168.1.10' could not be resolved: Name or service not known

2. 120119 16:26:04 [Warning] IP address '192.168.1.14' could not be resolved: Name or service not known

3. 120119 16:26:04 [Warning] IP address '192.168.1.17' could not be resolved: Name or service not known

通过show processlist发现大量类似如下的连接：


1. |592|unauthenticated user|192.168.1.10:35320|NULL|Connect| |login|NULL|

2. |593|unauthenticated user|192.168.1.14:35321|NULL|Connect| |login|NULL|

3. |594|unauthenticated user|192.168.1.17:35322|NULL|Connect| |login|NULL|

 skip-name-resolve 参数的作用：不再进行反解析（ip不反解成域名），这样可以加快数据库的反应时间。 修改配置文件添加并需要重启：
点击(此处)折叠或打开
1. [mysqld] 

2. skip-name-resolve



##  问题错误日志：Error: Can't create a new thread (errno 12)

数据库服务器问题，数据库操作无法创建新线程。一般是有以下3个方面的原因：
1）、MySQL 线程开得太多。
2）、服务器系统内存溢出。
3）、环境软件损坏或系统损坏。 【问题解决】


1. 1）进入 phpmyadmin 的 mysql 数据库中的 user 表，对数据库的用户进行编辑，修改 max_connections 的值。适当的改小一点。

2. 2）联系服务器管理员检查服务器的内存和系统是否正常，如果服务器内存紧张，请检查一下哪些进程消耗了服务器的内存，同时考虑是否增加服务器的内存来提高整个系统的负载能力。

3. 3）mysql版本更改为稳定版本

4. 4）优化网站程序的sql等等



## 操作报错：ERROR 1010 (HY000): Error dropping database


1. mysql> drop database xjtrace;

2. ERROR 1010 (HY000): Error dropping database (can't rmdir './xjtrace/


在做数据库删除时出现这种提示，其原因是在database下面含有自己放进去的文件，譬如*.txt文件或*.sql文件等，只要进去把这个文件删了在执行。

1. mysql>drop database xjtrace; 
2. Query OK, 0 rows affected (0.00 sec)

果断删除即可！！ 4.导出数据很快，导入到新库时却很慢： MySQL导出的SQL语句在导入时有可能会非常非常慢，经历过导入仅400万条记录，竟用了近2个小时。在导出时合理使用几个参数，可以大大加快导入的速度。 -e 使用包括几个VALUES列表的多行INSERT语法;
--max_allowed_packet=XXX 客户端/服务器之间通信的缓存区的最大大小;
--net_buffer_length=XXX TCP/IP和套接字通信缓冲区大小,创建长度达net_buffer_length的行注意：max_allowed_packet和net_buffer_length不能比目标数据库的配置数值大，否则可能出错。 首先确定目标库的参数值


1. mysql> show variables like 'max_allowed_packet';

2. +--------------------+---------+

3. | Variable_name | Value |

4. +--------------------+---------+

5. | max_allowed_packet | 1048576 |

6. +--------------------+---------+

7. 1 row in set (0.00 sec)

8. 

9. mysql> show variables like 'net_buffer_length';

10. 

11. +-------------------+-------+

12. | Variable_name | Value |

13. +-------------------+-------+

14. | net_buffer_length | 16384 |

15. +-------------------+-------+

16. 1 row in set (0.00 sec)


根据参数值书写mysqldump命令，如：
mysql>mysqldump -uroot -p   数据库名 -e --max_allowed_packet=1048576 -net_buffer_length=16384 > SQL文件 例如：
点击(此处)折叠或打开
1. mysql> mysqldump -uroot -p xjtrace -e --max_allowed_packet=1048576 --net_buffer_length=16384 >xjtrace_data_`date +%F`.sql

 之前2小时才能导入的sql现在几十秒就可以完成了。k