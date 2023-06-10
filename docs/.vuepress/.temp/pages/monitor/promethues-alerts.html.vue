<template><div><h1 id="prometheusalert" tabindex="-1"><a class="header-anchor" href="#prometheusalert" aria-hidden="true">#</a> PrometheusAlert</h1>
<p>Prometheus Alert是开源的运维告警中心消息转发系统,支持主流的监控系统Prometheus,Zabbix,日志系统Graylog和数据可视化系统Grafana发出的预警消息,支持钉钉,微信,华为云短信,腾讯云短信,腾讯云电话,阿里云短信,阿里云电话等</p>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>
<p>https://feiyu563.gitbook.io/prometheusalert/</p>
<h2 id="自定义的告警模板" tabindex="-1"><a class="header-anchor" href="#自定义的告警模板" aria-hidden="true">#</a> 自定义的告警模板</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
## [Prometheus恢复信息]({{$v.generatorURL}})

> &lt;font color="info">告警名称&lt;/font>：[{{$v.labels.alertname}}]({{$var}})

> &lt;font color="info">告警级别&lt;/font>：{{$v.labels.severity}}

> &lt;font color="info">当前状态&lt;/font>：{{$v.status}}

> &lt;font color="info">告警分组&lt;/font>：{{$v.labels.team}}

> &lt;font color="info">开始时间&lt;/font>：{{GetCSTtime $v.startsAt}}

> &lt;font color="info">结束时间&lt;/font>：{{GetCSTtime $v.endsAt}}

> &lt;font color="info">实例地址&lt;/font>：{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{else}}
## [ &lt;font color="#FF0000">Prometheus告警信息&lt;/font>]({{$v.generatorURL}})
> &lt;font color="#FF0000">告警名称&lt;/font>：[{{$v.labels.alertname}}]({{$var}})

> &lt;font color="#FF0000">告警级别&lt;/font>：{{$v.labels.severity}}

> &lt;font color="#FF0000">当前状态&lt;/font>：{{$v.status}}

> &lt;font color="#FF0000">告警分组&lt;/font>：{{$v.labels.team}}

> &lt;font color="#FF0000">开始时间&lt;/font>：{{GetCSTtime $v.startsAt}}

> &lt;font color="#FF0000">实例地址&lt;/font>：{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{end}}
{{ end }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


