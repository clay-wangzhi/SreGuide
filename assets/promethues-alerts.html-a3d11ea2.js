import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,a as l}from"./app-2878b4b3.js";const i={},s=l(`<h1 id="prometheusalert" tabindex="-1"><a class="header-anchor" href="#prometheusalert" aria-hidden="true">#</a> PrometheusAlert</h1><p>Prometheus Alert是开源的运维告警中心消息转发系统,支持主流的监控系统Prometheus,Zabbix,日志系统Graylog和数据可视化系统Grafana发出的预警消息,支持钉钉,微信,华为云短信,腾讯云短信,腾讯云电话,阿里云短信,阿里云电话等</p><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2><p>https://feiyu563.gitbook.io/prometheusalert/</p><h2 id="自定义的告警模板" tabindex="-1"><a class="header-anchor" href="#自定义的告警模板" aria-hidden="true">#</a> 自定义的告警模板</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status &quot;resolved&quot;}}
## [Prometheus恢复信息]({{$v.generatorURL}})

&gt; &lt;font color=&quot;info&quot;&gt;告警名称&lt;/font&gt;：[{{$v.labels.alertname}}]({{$var}})

&gt; &lt;font color=&quot;info&quot;&gt;告警级别&lt;/font&gt;：{{$v.labels.severity}}

&gt; &lt;font color=&quot;info&quot;&gt;当前状态&lt;/font&gt;：{{$v.status}}

&gt; &lt;font color=&quot;info&quot;&gt;告警分组&lt;/font&gt;：{{$v.labels.team}}

&gt; &lt;font color=&quot;info&quot;&gt;开始时间&lt;/font&gt;：{{GetCSTtime $v.startsAt}}

&gt; &lt;font color=&quot;info&quot;&gt;结束时间&lt;/font&gt;：{{GetCSTtime $v.endsAt}}

&gt; &lt;font color=&quot;info&quot;&gt;实例地址&lt;/font&gt;：{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{else}}
## [ &lt;font color=&quot;#FF0000&quot;&gt;Prometheus告警信息&lt;/font&gt;]({{$v.generatorURL}})
&gt; &lt;font color=&quot;#FF0000&quot;&gt;告警名称&lt;/font&gt;：[{{$v.labels.alertname}}]({{$var}})

&gt; &lt;font color=&quot;#FF0000&quot;&gt;告警级别&lt;/font&gt;：{{$v.labels.severity}}

&gt; &lt;font color=&quot;#FF0000&quot;&gt;当前状态&lt;/font&gt;：{{$v.status}}

&gt; &lt;font color=&quot;#FF0000&quot;&gt;告警分组&lt;/font&gt;：{{$v.labels.team}}

&gt; &lt;font color=&quot;#FF0000&quot;&gt;开始时间&lt;/font&gt;：{{GetCSTtime $v.startsAt}}

&gt; &lt;font color=&quot;#FF0000&quot;&gt;实例地址&lt;/font&gt;：{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{end}}
{{ end }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[s];function a(r,d){return e(),n("div",null,o)}const c=t(i,[["render",a],["__file","promethues-alerts.html.vue"]]);export{c as default};
