## 设置被检查端的主机名
```
vim /etc/hosts
xxx xxx
vim /etc/sysconfig/network
xxx xxx
hostnamectl set-hostname xxx
```
## 安装zabbix-agent
centos7
```
rmp -ivh http://repo.zabbix.com/zabbix/3.4/rhel/7/x86_64/zabbix-release-3.4-1.el7.centos.noarch.rpm
```
centos6
```
rpm -ivh http://repo.zabbix.com/zabbix/3.4/rhel/6/x86_64/zabbix-release-3.4-1.el6.noarch.rpm
```
## 监控的简单流程
Host Groups(设备组) —>Hosts(设备) -> Applications (监控项组) -> Items(监控项) -> Triggers(触发器) ->Actions(告警动作) ->Medias(告警方式) -> User Groups (用户组) -> Users(用户)
## 添加远程主机的监控
1.创建主机群组
2.添加主机
3.选取模板
4.添加完成，查看状态
5.查看图形
