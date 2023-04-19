---
category: 监控
tag:
  - Zabbix
---

# 5 Redis监控模块

> zabbix旧版本可以用，新版本建议用官方模板

## 模板导入

打开“配置”-->“模板”-->"导入"

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/redis_daoru.png)

导入`zax_redis`文件夹下的`redis_templates_for_zbx_3.4.xml`文件

## 配置文件导入

将`zax_redis`文件夹下的`userparameter_redis.conf`文件上传到redis服务器的`/etc/zabbix/zabbix_agentd.d`文件夹下，并根据实际情况修改`$HostIP`和`$Pass`。

## 增加ss命令权限

因为zabbix-server端不是通过root用户进行获取数据，所以给ss命令提权

```
chmod +s /usr/sbin/ss
```

## 重启zabbix客户端

修改完成后，重新启动zabbix客户端

centos7下

```
systemctl restart zabbix-agent.service
```

