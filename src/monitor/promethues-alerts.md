---
category: 监控
date: 2020-11-02
tags:
  - alert
---



# PrometheusAlert

Prometheus Alert是开源的运维告警中心消息转发系统,支持主流的监控系统Prometheus,Zabbix,日志系统Graylog和数据可视化系统Grafana发出的预警消息,支持钉钉,微信,华为云短信,腾讯云短信,腾讯云电话,阿里云短信,阿里云电话等

## 文档

https://feiyu563.gitbook.io/prometheusalert/

## 自定义的告警模板

```
{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
## [Prometheus恢复信息]({{$v.generatorURL}})

> <font color="info">告警名称</font>：[{{$v.labels.alertname}}]({{$var}})

> <font color="info">告警级别</font>：{{$v.labels.severity}}

> <font color="info">当前状态</font>：{{$v.status}}

> <font color="info">告警分组</font>：{{$v.labels.team}}

> <font color="info">开始时间</font>：{{GetCSTtime $v.startsAt}}

> <font color="info">结束时间</font>：{{GetCSTtime $v.endsAt}}

> <font color="info">实例地址</font>：{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{else}}
## [ <font color="#FF0000">Prometheus告警信息</font>]({{$v.generatorURL}})
> <font color="#FF0000">告警名称</font>：[{{$v.labels.alertname}}]({{$var}})

> <font color="#FF0000">告警级别</font>：{{$v.labels.severity}}

> <font color="#FF0000">当前状态</font>：{{$v.status}}

> <font color="#FF0000">告警分组</font>：{{$v.labels.team}}

> <font color="#FF0000">开始时间</font>：{{GetCSTtime $v.startsAt}}

> <font color="#FF0000">实例地址</font>：{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{end}}
{{ end }}
```

