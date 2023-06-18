const e=JSON.parse('{"key":"v-4a422e1d","path":"/cloudnative/etcd/overview.html","title":"Etcd 概述","lang":"zh-CN","frontmatter":{"category":"云原生","tag":["etcd"],"description":"Etcd 概述 什么是 Etcd ? Etcd 是 CoreOS 团队于2013年6月发起的开源项目，它的目标是构建一个高可用的分布式键值(key-value)数据库。etcd内部采用raft协议作为一致性算法，Etcd基于 Go 语言实现。 名字由来，它源于两个方面，unix的“/etc”文件夹和分布式系统(“D”istribute system)的D，组合在一起表示etcd是用于存储分布式配置的信息存储服务。 Kubernetes 为什么用 Etcd ? 2014年6月，Google的Kubernetes项目诞生了，我们前面所讨论到Go语言编写、etcd高可用、Watch机制、CAS、TTL等特性正是Kubernetes所需要的，它早期的0.4版本，使用的正是etcd v0.2版本。","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/etcd/overview.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"Etcd 概述"}],["meta",{"property":"og:description","content":"Etcd 概述 什么是 Etcd ? Etcd 是 CoreOS 团队于2013年6月发起的开源项目，它的目标是构建一个高可用的分布式键值(key-value)数据库。etcd内部采用raft协议作为一致性算法，Etcd基于 Go 语言实现。 名字由来，它源于两个方面，unix的“/etc”文件夹和分布式系统(“D”istribute system)的D，组合在一起表示etcd是用于存储分布式配置的信息存储服务。 Kubernetes 为什么用 Etcd ? 2014年6月，Google的Kubernetes项目诞生了，我们前面所讨论到Go语言编写、etcd高可用、Watch机制、CAS、TTL等特性正是Kubernetes所需要的，它早期的0.4版本，使用的正是etcd v0.2版本。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T13:22:29.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"etcd"}],["meta",{"property":"article:modified_time","content":"2023-06-18T13:22:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Etcd 概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T13:22:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是 Etcd ?","slug":"什么是-etcd","link":"#什么是-etcd","children":[]},{"level":2,"title":"Kubernetes 为什么用 Etcd ?","slug":"kubernetes-为什么用-etcd","link":"#kubernetes-为什么用-etcd","children":[]},{"level":2,"title":"Etcd 版本变化","slug":"etcd-版本变化","link":"#etcd-版本变化","children":[]},{"level":2,"title":"基础架构","slug":"基础架构","link":"#基础架构","children":[]},{"level":2,"title":"概念术语","slug":"概念术语","link":"#概念术语","children":[]},{"level":2,"title":"etcdctl 常用命令","slug":"etcdctl-常用命令","link":"#etcdctl-常用命令","children":[]}],"git":{"createdTime":1687094549000,"updatedTime":1687094549000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":5.1,"words":1531},"filePathRelative":"cloudnative/etcd/overview.md","localizedDate":"2023年6月18日","excerpt":"<h1> Etcd 概述</h1>\\n<h2> 什么是 Etcd ?</h2>\\n<p>Etcd 是 CoreOS 团队于2013年6月发起的开源项目，它的目标是构建一个高可用的分布式键值(key-value)数据库。etcd内部采用<code>raft</code>协议作为一致性算法，Etcd基于 Go 语言实现。</p>\\n<p>名字由来，它源于两个方面，unix的“/etc”文件夹和分布式系统(“D”istribute system)的D，组合在一起表示etcd是用于存储分布式配置的信息存储服务。</p>\\n<h2> Kubernetes 为什么用 Etcd ?</h2>\\n<p>2014年6月，Google的Kubernetes项目诞生了，我们前面所讨论到Go语言编写、etcd高可用、Watch机制、CAS、TTL等特性正是Kubernetes所需要的，它早期的0.4版本，使用的正是etcd v0.2版本。</p>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
