const t=JSON.parse('{"key":"v-190a9a42","path":"/cloudnative/troubleshooting/calico-restart.html","title":"Calico 异常重启问题复盘","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"云原生","tag":["Kubernetes"],"description":"Calico 异常重启问题复盘 集群内网络架构为，基于Calico BGP 的路由模式，直接与交互机建联。 影响范围和故障时间线 影响范围 线下环境 node-xx 物理机上 Pod 网络不可用 影响时间线（2023-07-23 22:09 ~ 22:14） [22:13] 收到网工反馈 Peer Down","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/troubleshooting/calico-restart.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"Calico 异常重启问题复盘"}],["meta",{"property":"og:description","content":"Calico 异常重启问题复盘 集群内网络架构为，基于Calico BGP 的路由模式，直接与交互机建联。 影响范围和故障时间线 影响范围 线下环境 node-xx 物理机上 Pod 网络不可用 影响时间线（2023-07-23 22:09 ~ 22:14） [22:13] 收到网工反馈 Peer Down"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-27T12:52:39.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:modified_time","content":"2024-03-27T12:52:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Calico 异常重启问题复盘\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-27T12:52:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"影响范围和故障时间线","slug":"影响范围和故障时间线","link":"#影响范围和故障时间线","children":[]},{"level":2,"title":"故障发生原因","slug":"故障发生原因","link":"#故障发生原因","children":[{"level":3,"title":"故障现象","slug":"故障现象","link":"#故障现象","children":[]},{"level":3,"title":"根因分析","slug":"根因分析","link":"#根因分析","children":[]}]},{"level":2,"title":"Why 分析","slug":"why-分析","link":"#why-分析","children":[]},{"level":2,"title":"后续 TODO","slug":"后续-todo","link":"#后续-todo","children":[]}],"git":{"createdTime":1711543959000,"updatedTime":1711543959000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":4.25,"words":1276},"filePathRelative":"cloudnative/troubleshooting/calico-restart.md","localizedDate":"2024年3月27日","excerpt":"<h1> Calico 异常重启问题复盘</h1>\\n<blockquote>\\n<p>集群内网络架构为，基于Calico BGP 的路由模式，直接与交互机建联。</p>\\n</blockquote>\\n<h2> 影响范围和故障时间线</h2>\\n<p><strong>影响范围</strong></p>\\n<p>线下环境  node-xx 物理机上 Pod 网络不可用</p>\\n<p><strong>影响时间线（2023-07-23 22:09 ~ 22:14）</strong></p>\\n<p><strong>[22:13] 收到网工反馈 Peer Down</strong></p>\\n<p><img src=\\"https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240327201713521.png\\" alt=\\"image-20240327201713521\\"></p>","copyright":{"author":"Clay"},"autoDesc":true}');export{t as data};
