---
category: 监控
tag:
  - Zabbix
---

# 8 activemq监控

> zabbix旧版本可以用，新版本建议用官方模板

## 关闭被监控端的防火墙

activemq  防火墙的添加还是有问题，先把防火墙给关了，它好像是后续会再产生一个随机端口，进行数据的传输

## zabbix_proxy安装java_gateway，

因为是基于JMX进行监控的

## 修改配置文件

配置`./apache-activemq-5.11.1/conf/activemq.xml`

修改broker字段： 增加useJmx="true"

```
<broker useJmx="true" xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}"> 
```

修改broken字段内的managementContext节点：

```
<managementContext>
            <managementContext createConnector="true" connectorPort="11099"/>
</managementContext> 
```

配置./apache-activemq-5.11.1/bin/activemq

在脚本最后添加：

```
ACTIVEMQ_SUNJMX_START="-Dcom.sun.management.jmxremote.port=11099 "
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_CONF}/jmx.password"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_CONF}/jmx.access"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.ssl=false"
```

然后重启activemq

> 增加的方式不对，添加上以后密码还是为空，后续有空查一下原因

## 导入模板

在zabbix_web中导入zbx_activemq目录下的xml文件

在被监控主机上增加宏设置
加入{$JMX_PASSWORD}，和{$JMX_USERNAME}，user为admin，pass为activemq