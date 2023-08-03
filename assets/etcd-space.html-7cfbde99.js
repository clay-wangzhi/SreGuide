const e=JSON.parse('{"key":"v-495b86f9","path":"/cloudnative/stability/troubleshooting/etcd-space.html","title":"Etcd 故障排查","lang":"zh-CN","frontmatter":{"order":60,"category":"云原生","tag":["etcd"],"description":"Etcd 故障排查 Etcd 磁盘空间爆满解决方案 etcd默认的空间配额限制为2G，超出空间配额限制就会影响服务，所以需要定期清理 设置环境变量 ETCD_CA_CERT=\\"/etc/kubernetes/pki/etcd/ca.crt\\" ETCD_CERT=\\"/etc/kubernetes/pki/etcd/server.crt\\" ETCD_KEY=\\"/etc/kubernetes/pki/etcd/server.key\\" HOST_1=https://xxx.xxx.xxx.xxx:2379","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/stability/troubleshooting/etcd-space.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"Etcd 故障排查"}],["meta",{"property":"og:description","content":"Etcd 故障排查 Etcd 磁盘空间爆满解决方案 etcd默认的空间配额限制为2G，超出空间配额限制就会影响服务，所以需要定期清理 设置环境变量 ETCD_CA_CERT=\\"/etc/kubernetes/pki/etcd/ca.crt\\" ETCD_CERT=\\"/etc/kubernetes/pki/etcd/server.crt\\" ETCD_KEY=\\"/etc/kubernetes/pki/etcd/server.key\\" HOST_1=https://xxx.xxx.xxx.xxx:2379"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-03T16:18:47.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"etcd"}],["meta",{"property":"article:modified_time","content":"2023-08-03T16:18:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Etcd 故障排查\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-03T16:18:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"Etcd 磁盘空间爆满解决方案","slug":"etcd-磁盘空间爆满解决方案","link":"#etcd-磁盘空间爆满解决方案","children":[{"level":3,"title":"查看集群状态","slug":"查看集群状态","link":"#查看集群状态","children":[]},{"level":3,"title":"解决方案一：增加etcd的容量","slug":"解决方案一-增加etcd的容量","link":"#解决方案一-增加etcd的容量","children":[]},{"level":3,"title":"解决方案二：压缩老数据清理","slug":"解决方案二-压缩老数据清理","link":"#解决方案二-压缩老数据清理","children":[]},{"level":3,"title":"验证可以添加新数据","slug":"验证可以添加新数据","link":"#验证可以添加新数据","children":[]}]}],"git":{"createdTime":1691079527000,"updatedTime":1691079527000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":1.51,"words":453},"filePathRelative":"cloudnative/stability/troubleshooting/etcd-space.md","localizedDate":"2023年8月3日","excerpt":"<h1> Etcd 故障排查</h1>\\n<h2> Etcd 磁盘空间爆满解决方案</h2>\\n<blockquote>\\n<p>etcd默认的空间配额限制为2G，超出空间配额限制就会影响服务，所以需要定期清理</p>\\n</blockquote>\\n<p>设置环境变量</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token assign-left variable\\">ETCD_CA_CERT</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/etc/kubernetes/pki/etcd/ca.crt\\"</span>\\n<span class=\\"token assign-left variable\\">ETCD_CERT</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/etc/kubernetes/pki/etcd/server.crt\\"</span>\\n<span class=\\"token assign-left variable\\">ETCD_KEY</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/etc/kubernetes/pki/etcd/server.key\\"</span>\\n<span class=\\"token assign-left variable\\">HOST_1</span><span class=\\"token operator\\">=</span>https://xxx.xxx.xxx.xxx:2379\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
