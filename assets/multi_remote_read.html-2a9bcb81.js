import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as a,b as e,d as i,e as t,a as d}from"./app-95912f92.js";const o={},u=e("h1",{id:"别再乱用-prometheus-联邦了-分享一个-prometheus-高可用新方案",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#别再乱用-prometheus-联邦了-分享一个-prometheus-高可用新方案","aria-hidden":"true"},"#"),i(" 别再乱用 Prometheus 联邦了，分享一个 Prometheus 高可用新方案")],-1),m={href:"https://mp.weixin.qq.com/s/PDmSntHaN-tTltLBghyO4g",target:"_blank",rel:"noopener noreferrer"},c=d(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li><p>我看到很多人会这样使用联邦：联邦 prometheus 收集多个采集器的数据</p></li><li><p>实在看不下下去了，很多小白还在乱用<code>prometheus</code>的联邦</p></li><li><p>其实很多人是想实现 prometheus 数据的可用性，数据分片保存，有个统一的查询地方(小白中的联邦 prometheus)</p></li><li><p>而且引入 m3db 等支持集群的 tsdb 可能比较重</p></li><li><p>具体问题可以看我之前写的文章 <strong>m3db 资源开销，聚合降采样，查询限制等注意事项</strong>[1]</p></li><li><ul><li><strong>m3db-node oom 追踪和内存分配器代码查看</strong>[2]</li></ul></li><li><p>今天写篇文章分析下联邦的问题，并给出一个基于全部是 prometheus 的<code>multi_remote_read</code>方案</p></li></ul><h2 id="架构图" tabindex="-1"><a class="header-anchor" href="#架构图" aria-hidden="true">#</a> 架构图</h2><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/640" alt="图片">img</p><h2 id="联邦问题" tabindex="-1"><a class="header-anchor" href="#联邦问题" aria-hidden="true">#</a> 联邦问题</h2><ul><li><strong>联邦文档地址</strong>[3]</li></ul><h2 id="联邦使用样例" tabindex="-1"><a class="header-anchor" href="#联邦使用样例" aria-hidden="true">#</a> 联邦使用样例</h2><ul><li>本质上就是采集级联</li><li>说白了就是 a 从 b,c,d 那里再采集数据过来</li><li>可以搭配 match 指定只拉取某些指标</li><li>下面就是官方文档给出的样例</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scrape_configs:
  - job_name: &#39;federate&#39;
    scrape_interval: 15s

    honor_labels: true
    metrics_path: &#39;/federate&#39;

    params:
      &#39;match[]&#39;:
        - &#39;{job=&quot;prometheus&quot;}&#39;
        - &#39;{__name__=~&quot;job:.*&quot;}&#39;

    static_configs:
      - targets:
        - &#39;source-prometheus-1:9090&#39;
        - &#39;source-prometheus-2:9090&#39;
        - &#39;source-prometheus-3:9090&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="看上面的样例配置怎么感觉是采集的配置呢" tabindex="-1"><a class="header-anchor" href="#看上面的样例配置怎么感觉是采集的配置呢" aria-hidden="true">#</a> 看上面的样例配置怎么感觉是采集的配置呢</h2><ul><li>不用怀疑就是，下面看看代码分析一下 从上述配置可以看到采集的 path 是 <code>/federate</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// web.go 的 federate Handler
    router.Get(&quot;/federate&quot;, readyf(httputil.CompressionHandler{
        Handler: http.HandlerFunc(h.federation),
    }.ServeHTTP))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>分析下联邦函数 说白了就是读取本地存储数据处理</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func (h *Handler) federation(w http.ResponseWriter, req *http.Request) {

    // localstorage 的query
    q, err := h.localStorage.Querier(req.Context(), mint, maxt)

    defer q.Close()
    // 最终发送的Vector 数组
    vec := make(promql.Vector, 0, 8000)

    hints := &amp;storage.SelectHints{Start: mint, End: maxt}

    var sets []storage.SeriesSet

    set := storage.NewMergeSeriesSet(sets, storage.ChainedSeriesMerge)
    // 遍历存储中的full series
    for set.Next() {
        s := set.At()


        vec = append(vec, promql.Sample{
            Metric: s.Labels(),
            Point:  promql.Point{T: t, V: v},
        })

    for _, s := range vec {
        nameSeen := false
        globalUsed := map[string]struct{}{}
        protMetric := &amp;dto.Metric{
            Untyped: &amp;dto.Untyped{},
        }
        // Encode方法根据请求类型编码
                if protMetricFam != nil {
                    if err := enc.Encode(protMetricFam); err != nil {
                        federationErrors.Inc()
                        level.Error(h.logger).Log(&quot;msg&quot;, &quot;federation failed&quot;, &quot;err&quot;, err)
                        return
                    }
                }

        }

        protMetric.TimestampMs = proto.Int64(s.T)
        protMetric.Untyped.Value = proto.Float64(s.V)

        protMetricFam.Metric = append(protMetricFam.Metric, protMetric)
    }
    //
    if protMetricFam != nil {
        if err := enc.Encode(protMetricFam); err != nil {
            federationErrors.Inc()
            level.Error(h.logger).Log(&quot;msg&quot;, &quot;federation failed&quot;, &quot;err&quot;, err)
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>最终调用压缩函数压缩</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type CompressionHandler struct {
    Handler http.Handler
}

// ServeHTTP adds compression to the original http.Handler&#39;s ServeHTTP() method.
func (c CompressionHandler) ServeHTTP(writer http.ResponseWriter, req *http.Request) {
    compWriter := newCompressedResponseWriter(writer, req)
    c.Handler.ServeHTTP(compWriter, req)
    compWriter.Close()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有过滤那么只是一股脑把分片的数据集中到了一起，没意义。很多时候是因为数据量太大了，分散在多个采集器的数据是不能被一个联邦消化的。</p><h2 id="正确使用联邦的姿势" tabindex="-1"><a class="header-anchor" href="#正确使用联邦的姿势" aria-hidden="true">#</a> 正确使用联邦的姿势</h2><ul><li><p>使用 match 加过滤，将采集数据分位两类</p></li><li><p>第一类需要再聚合的数据，通过联邦收集在一起</p></li><li><ul><li>只收集中间件的数据的联邦 只收集业务数据的联邦</li><li>举个例子</li><li>其余数据保留在采集器本地即可</li></ul></li><li><p>这样可以在各个联邦上执行<code>预聚合</code>和<code>alert</code>，使得查询速度提升</p></li></ul><h2 id="默认-prometheus-不支持降采样" tabindex="-1"><a class="header-anchor" href="#默认-prometheus-不支持降采样" aria-hidden="true">#</a> 默认 prometheus 不支持降采样</h2><ul><li>可以在联邦配置 scrape_interval 的时候设置的大一点来达到 模拟降采样的目的</li><li>真实的降采样需要 agg 算法支持的，比如 5 分钟的数据算平均值、最大值、最小值保留，而不是这种把采集间隔调大到 5 分钟的随机选点逻辑</li></ul><h2 id="正确实现统一查询的姿势" tabindex="-1"><a class="header-anchor" href="#正确实现统一查询的姿势" aria-hidden="true">#</a> 正确实现统一查询的姿势</h2><blockquote><p>什么是 remote_read</p></blockquote><ul><li>简单说就是 prometheus 意识到自己本地存储不具备高可用性，所以通过支持第三方存储来补足这点的手段</li><li><strong>配置文档地址</strong>[4]</li></ul><blockquote><p>读写都支持的存储</p></blockquote><ul><li>AWS Timestream</li><li>Azure Data Explorer</li><li>Cortex</li><li>CrateDB</li><li>Google BigQuery</li><li>Google Cloud Spanner</li><li><strong>InfluxDB</strong>[5]</li><li>IRONdb</li><li><strong>M3DB</strong>[6]</li><li>PostgreSQL/TimescaleDB</li><li>QuasarDB</li><li>Splunk</li><li>Thanos</li><li>TiKV</li></ul><blockquote><p>但是这个和我们今天聊的问题关联在哪里?，往下看你就知道了</p></blockquote><h2 id="multi-remote-read" tabindex="-1"><a class="header-anchor" href="#multi-remote-read" aria-hidden="true">#</a> multi_remote_read</h2><p>如果我们配置了多个 remote_read 接口的话即可实现 multi</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>remote_read:
  - url: &quot;http://172.20.70.205:9090/api/v1/read&quot;
    read_recent: true
  - url: &quot;http://172.20.70.215:9090/api/v1/read&quot;
    read_recent: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述配置代表并发查询两个后端存储，并可以对查询的结果进行 merge</p><p>merge 有啥用：你们的查询 promql 或者 alert 配置文件就无需关心数据到底存储在哪个存储里面 ，可以直接使用全局的聚合函数</p><h2 id="prometheus-可以-remote-read-prometheus-自己" tabindex="-1"><a class="header-anchor" href="#prometheus-可以-remote-read-prometheus-自己" aria-hidden="true">#</a> prometheus 可以 remote_read prometheus 自己</h2><p>感觉这个特点很多人不知道，以为 remote<em>read 必须配置第三方存储如 m3db 等，其实 p 也可以 remote_wirte 自己，只不过需要开启</em> --enable-feature=remote-write-receiver</p><h2 id="高可用方案" tabindex="-1"><a class="header-anchor" href="#高可用方案" aria-hidden="true">#</a> 高可用方案</h2><p>所以结合上述两个特点就可以用多个采集的 prometheus + 多个无状态的 prometheus query 实现 prometheus 的高可用方案</p><ul><li>监控数据存储在多个采集器的本地，可以是机器上的 prometheus</li><li>也可以是 k8s 中的 prometheus statefulset</li><li>prometheus query remote_read 填写多个<code>prometheus的/api/v1/read/</code>地址</li></ul><h3 id="数据重复怎么办" tabindex="-1"><a class="header-anchor" href="#数据重复怎么办" aria-hidden="true">#</a> 数据重复怎么办</h3><p>不用管，上面提到了 query 会做 merge，多个数据只会保留一份</p><p>可以利用这个特点模拟副本机制：</p><ul><li>重要的采集 job 由两个以上的采集 prometheus 采集</li><li>查询的时候 merge 数据</li><li>可以避免其中一个挂掉时没数据的问题</li></ul><h3 id="这种方案的缺点" tabindex="-1"><a class="header-anchor" href="#这种方案的缺点" aria-hidden="true">#</a> 这种方案的缺点</h3><p>并发查询必须要等最慢的那个返回才返回，所以如果有个慢的节点会导致查询速度下降，举个例子：</p><p>有个美东的节点，网络基础延迟是 1 秒，那么所有查询无论返回多快都必须叠加 1 秒的延迟。</p><p>应对重查询时可能会把 query 打挂。</p><p>但也正是这个特点，会很好的保护后端存储分片，重查询的基数分散给多个采集器了。</p><p>由于是无差别的并发 query，也就是说所有的 query 都会打向所有的采集器，会导致一些采集器总是查询不存在他这里的数据</p><p>那么一个关键性的问题就是，查询不存在这个 prometheus 的数据的资源开销到底是多少？据我观察，新版本速度还是很快的说明资源开销不会在很深的地方才判断出不属于我的数据。</p><p>m3db 有布隆过滤器来防止这个问题。</p><p>如果想精确把 query 打向数据它的存储分片可以参考我之前写的 route 方案：<strong>开源项目 : prome-route：使用反向代理实现 prometheus 分片</strong>[7]</p><p>主要哦，需要特征标签支持，并且数据天然就是分开的！！</p><p><strong>忘了说了，这个方案还有个缺点就是重查询没控制好容易把你的采集器打挂了</strong>。</p><h3 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h3><p>[1]m3db 资源开销，聚合降采样，查询限制等注意事项: <em>https://zhuanlan.zhihu.com/p/359551116</em>[2]m3db-node oom 追踪和内存分配器代码查看: <em>https://zhuanlan.zhihu.com/p/183815841</em>[3]联邦文档地址: <em>https://prometheus.io/docs/prometheus/latest/federation/</em>[4]配置文档地址: <em>https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_read</em>[5]InfluxDB: <em>https://docs.influxdata.com/influxdb/v1.8/supported_protocols/prometheus/</em>[6]M3DB: <em>https://m3db.io/docs/integrations/prometheus/</em>[7]开源项目 : prome-route：使用反向代理实现 prometheus 分片: <em>https://zhuanlan.zhihu.com/p/231914857</em></p><p>原文链接：<strong>https://zhuanlan.zhihu.com/p/368868988</strong></p>`,55);function v(p,h){const r=l("ExternalLinkIcon");return s(),a("div",null,[u,e("blockquote",null,[e("p",null,[i("转载自："),e("a",m,[i("别再乱用 Prometheus 联邦了，分享一个 Prometheus 高可用新方案 ｜ 云原生实验室"),t(r)])])]),c])}const f=n(o,[["render",v],["__file","multi_remote_read.html.vue"]]);export{f as default};
