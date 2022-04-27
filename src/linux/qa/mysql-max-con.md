---
category: Linux
tag:
  - 常见问题
---

# mysql最大连接数的改变

在使用MySQL数据库的时候，经常会遇到这么一个问题，就是“Can not connect to MySQL server. Too many connections”-mysql 1040错误，这是因为访问MySQL且还未释放的连接数目已经达到MySQL的上限。通常，mysql的最大连接数默认是100, 最大可以达到16384。

常用的有两种方式修改最大连接数。

### 命令行修改

```
#mysql -uuser -ppassword(命令行登录MySQL)
mysql>show variables like 'max_connections';(查可以看当前的最大连接数)
msyql>set global max_connections=1000;(设置最大连接数为1000，可以再次查看是否设置成功)
mysql>exit(退出)
```

这种方式有个问题，就是设置的最大连接数只在mysql当前服务进程有效，一旦mysql重启，又会恢复到初始状态。因为mysql启动后的初始化工作是从其配置文件中读取数据的，而这种方式没有对其配置文件做更改。

### 修改配置文件

这 种方式说来很简单，只要修改MySQL配置文件my.ini 或 my.cnf的参数max_connections，将其改为max_connections=1000，然后重启MySQL即可。