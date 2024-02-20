const e=JSON.parse('{"key":"v-390cb0a0","path":"/cloudnative/troubleshooting/vm-vs-container-performance.html","title":"什么？相同型号物理机 容器性能不如虚拟机？","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"云原生","tag":["Kubernetes"],"description":"什么？相同型号物理机 容器性能不如虚拟机？ 事件经过 该应用通过虚拟机和容器混合部署，上线前压测了虚拟机上的应用性能，理论上流量高峰能抗住。 [xx:xx] 流量突增，接口大量超时 [xx:xx] 限流 [xx:xx] 重启，虚拟机能重启成功，容器重启失败，容器流量摘除，暂时恢复 [xx:xx] 扩容， 容器虚拟机均扩容 [xx:xx] 两台容器异常，流量摘除","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/troubleshooting/vm-vs-container-performance.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"什么？相同型号物理机 容器性能不如虚拟机？"}],["meta",{"property":"og:description","content":"什么？相同型号物理机 容器性能不如虚拟机？ 事件经过 该应用通过虚拟机和容器混合部署，上线前压测了虚拟机上的应用性能，理论上流量高峰能抗住。 [xx:xx] 流量突增，接口大量超时 [xx:xx] 限流 [xx:xx] 重启，虚拟机能重启成功，容器重启失败，容器流量摘除，暂时恢复 [xx:xx] 扩容， 容器虚拟机均扩容 [xx:xx] 两台容器异常，流量摘除"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-20T10:11:40.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:modified_time","content":"2024-02-20T10:11:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么？相同型号物理机 容器性能不如虚拟机？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-20T10:11:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"事件经过","slug":"事件经过","link":"#事件经过","children":[]},{"level":2,"title":"根因分析","slug":"根因分析","link":"#根因分析","children":[]},{"level":2,"title":"后续 TODO","slug":"后续-todo","link":"#后续-todo","children":[]},{"level":2,"title":"同类硬件问题总结","slug":"同类硬件问题总结","link":"#同类硬件问题总结","children":[{"level":3,"title":"CPU","slug":"cpu","link":"#cpu","children":[]},{"level":3,"title":"RAID 卡","slug":"raid-卡","link":"#raid-卡","children":[]}]},{"level":2,"title":"经验教训","slug":"经验教训","link":"#经验教训","children":[]}],"git":{"createdTime":1708423900000,"updatedTime":1708423900000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":5.64,"words":1691},"filePathRelative":"cloudnative/troubleshooting/vm-vs-container-performance.md","localizedDate":"2024年2月20日","excerpt":"<h1> 什么？相同型号物理机 容器性能不如虚拟机？</h1>\\n<h2> 事件经过</h2>\\n<blockquote>\\n<p>该应用通过虚拟机和容器混合部署，上线前压测了虚拟机上的应用性能，理论上流量高峰能抗住。</p>\\n</blockquote>\\n<p>[xx:xx] 流量突增，接口大量超时</p>\\n<p>[xx:xx] <strong>限流</strong></p>\\n<p>[xx:xx] <strong>重启</strong>，虚拟机能重启成功，容器重启失败，容器流量摘除，暂时恢复</p>\\n<p>[xx:xx] <strong>扩容</strong>， 容器虚拟机均扩容</p>\\n<p>[xx:xx] 两台容器异常，流量摘除</p>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
