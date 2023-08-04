const e=JSON.parse('{"key":"v-1ed54ecd","path":"/cloudnative/troubleshooting/delete-rancher-causing-node-disappear.html","title":"卸载 rancher 导致 node 被清空","lang":"zh-CN","frontmatter":{"category":"云原生","tag":["Kubernetes"],"description":"卸载 rancher 导致 node 被清空 问题描述 集群的节点突然全都不见了 (kubectl get node 为空)，导致集群瘫痪，但实际上节点对应的宿主机都还在。因为集群没开审计，所以也不太好查 node 是被什么删除的。 快速恢复 由于当时没有排查出来问题，当时批量重启了服务器，自动拉起 kubelet 重新注册 node，故障恢复。其实只是 k8s node 资源被删除，重启 kubelet 服务，自动注册即可。 根因分析（5 why） 从 kube-apiserver 日志中可以看到，DELETE node 的操作，导致 node 被清空","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/troubleshooting/delete-rancher-causing-node-disappear.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"卸载 rancher 导致 node 被清空"}],["meta",{"property":"og:description","content":"卸载 rancher 导致 node 被清空 问题描述 集群的节点突然全都不见了 (kubectl get node 为空)，导致集群瘫痪，但实际上节点对应的宿主机都还在。因为集群没开审计，所以也不太好查 node 是被什么删除的。 快速恢复 由于当时没有排查出来问题，当时批量重启了服务器，自动拉起 kubelet 重新注册 node，故障恢复。其实只是 k8s node 资源被删除，重启 kubelet 服务，自动注册即可。 根因分析（5 why） 从 kube-apiserver 日志中可以看到，DELETE node 的操作，导致 node 被清空"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-04T10:28:48.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:modified_time","content":"2023-08-04T10:28:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"卸载 rancher 导致 node 被清空\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-04T10:28:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":2,"title":"快速恢复","slug":"快速恢复","link":"#快速恢复","children":[]},{"level":2,"title":"根因分析（5 why）","slug":"根因分析-5-why","link":"#根因分析-5-why","children":[]},{"level":2,"title":"教训","slug":"教训","link":"#教训","children":[]}],"git":{"createdTime":1691144928000,"updatedTime":1691144928000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":1.19,"words":358},"filePathRelative":"cloudnative/troubleshooting/delete-rancher-causing-node-disappear.md","localizedDate":"2023年8月4日","excerpt":"<h1> 卸载 rancher 导致 node 被清空</h1>\\n<h2> 问题描述</h2>\\n<p>集群的节点突然全都不见了 (<code>kubectl get node</code> 为空)，导致集群瘫痪，但实际上节点对应的宿主机都还在。因为集群没开审计，所以也不太好查 node 是被什么删除的。</p>\\n<h2> 快速恢复</h2>\\n<p>由于当时没有排查出来问题，当时批量重启了服务器，自动拉起 kubelet 重新注册 node，故障恢复。其实只是 k8s node 资源被删除，重启 kubelet 服务，自动注册即可。</p>\\n<h2> 根因分析（5 why）</h2>\\n<p>从 kube-apiserver 日志中可以看到，DELETE node 的操作，导致 node 被清空</p>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
