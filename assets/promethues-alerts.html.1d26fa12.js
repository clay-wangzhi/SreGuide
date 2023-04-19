import{_ as n,e as t}from"./app.a7ee6068.js";const s={},e=t(`<h1 id="prometheusalert" tabindex="-1"><a class="header-anchor" href="#prometheusalert" aria-hidden="true">#</a> PrometheusAlert</h1><p>Prometheus Alert\u662F\u5F00\u6E90\u7684\u8FD0\u7EF4\u544A\u8B66\u4E2D\u5FC3\u6D88\u606F\u8F6C\u53D1\u7CFB\u7EDF,\u652F\u6301\u4E3B\u6D41\u7684\u76D1\u63A7\u7CFB\u7EDFPrometheus,Zabbix,\u65E5\u5FD7\u7CFB\u7EDFGraylog\u548C\u6570\u636E\u53EF\u89C6\u5316\u7CFB\u7EDFGrafana\u53D1\u51FA\u7684\u9884\u8B66\u6D88\u606F,\u652F\u6301\u9489\u9489,\u5FAE\u4FE1,\u534E\u4E3A\u4E91\u77ED\u4FE1,\u817E\u8BAF\u4E91\u77ED\u4FE1,\u817E\u8BAF\u4E91\u7535\u8BDD,\u963F\u91CC\u4E91\u77ED\u4FE1,\u963F\u91CC\u4E91\u7535\u8BDD\u7B49</p><h2 id="\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a> \u6587\u6863</h2><p>https://feiyu563.gitbook.io/prometheusalert/</p><h2 id="\u81EA\u5B9A\u4E49\u7684\u544A\u8B66\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7684\u544A\u8B66\u6A21\u677F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7684\u544A\u8B66\u6A21\u677F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status &quot;resolved&quot;}}
## [Prometheus\u6062\u590D\u4FE1\u606F]({{$v.generatorURL}})

&gt; &lt;font color=&quot;info&quot;&gt;\u544A\u8B66\u540D\u79F0&lt;/font&gt;\uFF1A[{{$v.labels.alertname}}]({{$var}})

&gt; &lt;font color=&quot;info&quot;&gt;\u544A\u8B66\u7EA7\u522B&lt;/font&gt;\uFF1A{{$v.labels.severity}}

&gt; &lt;font color=&quot;info&quot;&gt;\u5F53\u524D\u72B6\u6001&lt;/font&gt;\uFF1A{{$v.status}}

&gt; &lt;font color=&quot;info&quot;&gt;\u544A\u8B66\u5206\u7EC4&lt;/font&gt;\uFF1A{{$v.labels.team}}

&gt; &lt;font color=&quot;info&quot;&gt;\u5F00\u59CB\u65F6\u95F4&lt;/font&gt;\uFF1A{{GetCSTtime $v.startsAt}}

&gt; &lt;font color=&quot;info&quot;&gt;\u7ED3\u675F\u65F6\u95F4&lt;/font&gt;\uFF1A{{GetCSTtime $v.endsAt}}

&gt; &lt;font color=&quot;info&quot;&gt;\u5B9E\u4F8B\u5730\u5740&lt;/font&gt;\uFF1A{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{else}}
## [ &lt;font color=&quot;#FF0000&quot;&gt;Prometheus\u544A\u8B66\u4FE1\u606F&lt;/font&gt;]({{$v.generatorURL}})
&gt; &lt;font color=&quot;#FF0000&quot;&gt;\u544A\u8B66\u540D\u79F0&lt;/font&gt;\uFF1A[{{$v.labels.alertname}}]({{$var}})

&gt; &lt;font color=&quot;#FF0000&quot;&gt;\u544A\u8B66\u7EA7\u522B&lt;/font&gt;\uFF1A{{$v.labels.severity}}

&gt; &lt;font color=&quot;#FF0000&quot;&gt;\u5F53\u524D\u72B6\u6001&lt;/font&gt;\uFF1A{{$v.status}}

&gt; &lt;font color=&quot;#FF0000&quot;&gt;\u544A\u8B66\u5206\u7EC4&lt;/font&gt;\uFF1A{{$v.labels.team}}

&gt; &lt;font color=&quot;#FF0000&quot;&gt;\u5F00\u59CB\u65F6\u95F4&lt;/font&gt;\uFF1A{{GetCSTtime $v.startsAt}}

&gt; &lt;font color=&quot;#FF0000&quot;&gt;\u5B9E\u4F8B\u5730\u5740&lt;/font&gt;\uFF1A{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{end}}
{{ end }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,6);function a(l,r){return e}var u=n(s,[["render",a],["__file","promethues-alerts.html.vue"]]);export{u as default};
