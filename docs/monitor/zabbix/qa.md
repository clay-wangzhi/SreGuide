---
category: 监控
tag:
  - Zabbix
---



# 6 常见问题

# Zabbix客户端日志出现(Not all processes could be identified）

场景：因为使用了netstat -p参数。

权限问题，zabbix_agentd是zabbix用户启动的，默认不能执行netstat -p等命令，导致从服务器取到的自动发现脚本为空

(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
解决方法 ：

```shell
chmod +s /bin/netstat
```

chmod +s 是什么意思

> 为了方便普通用户执行一些特权命令，SUID/SGID程序允许普通用户以root身份暂时执行该程序，并在执行结束后再恢复身份。

## zabbix_server.log大量提示cannot sen list of active checks to "IP":host [Hostname] not found

zabbix server 日志大量提示上图信息 原因是 zabbix_agent.conf配置文件中配置的HostName与zabbix的web界面配置的不同导致的

zabbix_agent.conf里尽量不使用HostnameItem=system.hostname此项去自动获取主机名

尽量使用HostName指定一个主机名，然后web界面配置相同即可

最后重启相应的agent即可