---
category: 监控
tag:
  - Zabbix
---

# 4 MySQL监控模块

> zabbix旧版本可以用，新版本建议用官方模板

## Template DB MySQL简介

### 应用集

MySQL

### 监控项

1. MySQL begin operations per second（MySQL每秒开始操作）
2. MySQL bytes received per second（从所有客户端接收的字节数）
3. MySQL bytes sent per second（发送到所有客户端的字节数）
4. MySQL commit operations per second（MySQL每秒提交操作）
5. MySQL delete operations per second（MySQL每秒删除操作）
6. MySQL insert operations per second（MySQL每秒插入操作）
7. MySQL queries per second（MySQL每秒查询）
8. MySQL rollback operations per second（MySQL每秒回滚操作）
9. MySQL select operations per second（MySQL每秒选择操作）
10. MySQL slow queries（MySQL慢查询）
11. MySQL status（MySQL的存活状态）
12. MySQL update operations per second（MySQL每秒更新操作）
13. MySQL uptime（MySQL正常运行时间）
14. MySQL version（MySQL的版本信息）

### 触发器

MySQL is down

表达式：{Template DB MySQL:mysql.ping.last(0)}=0

### 图形

1. MySQL operations（MySQL业务操作）

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysql图形1.png)

2. MySQL bandwidth（MySQL带宽）

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysql图形2.png)

### 聚合图形

MySQL performance（MySQL性能）

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysql图形3.png)

## 实现MySQL模板监控

### MySQL监控授权

配置mysql的客户端，创建一个用户来获取mysql的相关数据，使用mysql账号密码登陆数据库

```
> grant all on *.* to monitor@'localhost' identified by 'W***';
> flush privileges;
```

### 修改zabbix_agent配置文件

1. 设置完帐户之后在被监控端新建/etc/zabbix/etc/.my.cnf以提供Zabbix Agent访问数据库，内容类似如下

```
#vim /etc/zabbix/etc/.my.cnf
[mysql]
host=localhost
user=monitor
password=W***
socket=/var/lib/mysql/mysql.sock
[mysqladmin]
host=localhost
user=monitor
password=W***
socket=/var/lib/mysql/mysql.sock
```

* 注意：agent安装路径/etc/zabbix/,etc目录若不存在，需要自已创建，创建.my.cnf,为隐藏文件。W***为mysql的密码。

2. 修改模板中的mysql路径/etc/zabbix/zabbix_agentd.d，将以下三个目录补全

```
#vim userparameter_mysql.conf
```

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysql配置.png)

### 重启agent服务

```
service zabbix_agentd restart
```

### zabbix-web设置

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysqlweb.png)

## 修改模板添加主从和连接数监控

### 主从状态监控

1. 在`/opt/monitor`目录下添加主从监控脚本

vim mysql_slave.sh

```
#!/usr/bin/env bash
user='monitor'
passwd=
# Seconds_Behind_Master 阈值
tho=1000

# rs为Yes成功数,sbr为同步时间差
rs=$(mysql -u"$user" -p"$passwd" -e "show slave status\G;" 2>/dev/null | grep Running | awk '{print $2}' | grep -c Yes)
sbr=$(mysql -u"$user" -p"$passwd" -e "show slave status\G;" 2>/dev/null | grep Seconds_Behind_Master | awk -F':' '{print $2}')

# 判断主从状态是否正常,0代表正常,1代表异常
if [ "$rs" -eq 2 -a "$sbr" -le "$tho" ];then
    echo 0
else
    echo $(date +"%Y-%m-%d %H:%M:%S") "Yes成功数为$rs" "延时时间为$sbr" >> /var/log/zabbix/mysql_slave.log
    echo 1
fi
```

2. 在zabbix_agentd.conf中添加自定义key

在`etc/zabbix/zabbix_agentd.conf`中新加

```
UserParameter=mysql.replication,/opt/monitor/mysql_slave.sh
```

3. 重启agent服务

```
service zabbix_agentd restart
```

4. 在mysql模板中新增监控项，新增触发器，返回值不是0时，报警。

* 注意：当监控非主从mysql时，把此项监控禁用掉

## 连接数监控

1. 在zabbix_agentd.conf中添加自定义key

在`etc/zabbix/zabbix_agentd.conf`中新加

```
UserParameter=mysql.linknum, ss -an | grep 3306 | grep -c ESTAB
```

2. 重启agent服务

```
service zabbix_agentd restart
```

3. 添加监控项和触发器