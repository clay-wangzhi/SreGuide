## 安装zabbxi-agent
```
yum -y install zabbix-agent
```
## 配置zabbxi-agent
```
grep -n '^'[a-Z] /etc/zabbix/zabbix_agentd.conf
13:PidFile=/var/run/zabbix/zabbix_agentd.pid
32:LogFile=/var/log/zabbix/zabbix_agentd.log
43:LogFileSize=0
97:Server=10.15.201.122
138:ServerActive=10.15.201.122
149:Hostname=zabbix.server.com
267:Include=/etc/zabbix/zabbix_agentd.d/*.conf
```
## 启动zabbxi-agent并设置开机启动
```
systemctl enable zabbix-agent.service
systemctl start zabbix-agent.service
```
