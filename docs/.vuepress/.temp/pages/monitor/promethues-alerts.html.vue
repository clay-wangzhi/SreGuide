<template><h1 id="prometheusalert" tabindex="-1"><a class="header-anchor" href="#prometheusalert" aria-hidden="true">#</a> PrometheusAlert</h1>
<p>Prometheus Alert是开源的运维告警中心消息转发系统,支持主流的监控系统Prometheus,Zabbix,日志系统Graylog和数据可视化系统Grafana发出的预警消息,支持钉钉,微信,华为云短信,腾讯云短信,腾讯云电话,阿里云短信,阿里云电话等</p>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>
<p>https://feiyu563.gitbook.io/prometheusalert/</p>
<h2 id="自定义的告警模板" tabindex="-1"><a class="header-anchor" href="#自定义的告警模板" aria-hidden="true">#</a> 自定义的告警模板</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></template>
