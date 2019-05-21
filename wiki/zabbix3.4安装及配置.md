## 安装
```
rpm -ivh http://repo.zabbix.com/zabbix/3.4/rhel/7/x86_64/zabbix-release-3.4-1.el7.centos.noarch.rpm
yum -y install zabbix-server-mysql zabbix-web-mysql
```
## 创建数据库
```
mysql
>create database zabbix character set utf8 collate utf8_bin;
>grant all privileges on zabbix.* to zabbix@localhost identified by 'zabbix';
```
## 导入数据
```
zcat /usr/share/doc/zabbix-server-mysql-3.4.6/create.sql.gz | mysql -uzabbix -pzabbix zabbix
```
## 配置数据库用户及密码
```
grep -n '^'[a-Z] /etc/zabbix/zabbix_server.conf
38:LogFile=/var/log/zabbix/zabbix_server.log
49:LogFileSize=0
72:PidFile=/var/run/zabbix/zabbix_server.pid
101:DBName=zabbix
117:DBUser=zabbix
125:DBPassword=zabbix
330:SNMPTrapperFile=/var/log/snmptrap/snmptrap.log
448:Timeout=4
490:AlertScriptsPath=/usr/lib/zabbix/alertscripts
500:ExternalScripts=/usr/lib/zabbix/externalscripts
536:LogSlowQueries=3000
```
## 启动zabbix server并设置开机启动
```
systemctl enable zabbix-server
systemctl start zabbix-server
```
## 编辑Zabbix前端PHP配置,更改时区
```
vim /etc/httpd/conf.d/zabbix.conf
php_value date.timezone Asia/Shanghai
```
## 启动httpd并设置开机启动
```
systemctl start httpd
systemctl enable httpd
```



