const e=JSON.parse('{"key":"v-4a1e26a7","path":"/cloudnative/kubernetes/monitor-alert/kube-prometheus-stack.html","title":"Prometheus Operator 安装配置","lang":"zh-CN","frontmatter":{"category":"云原生","tag":["Kubernetes"],"description":"Prometheus Operator 安装配置 一、概述 首先Prometheus整体监控结构略微复杂，一个个部署并不简单。另外监控Kubernetes就需要访问内部数据，必定需要进行认证、鉴权、准入控制， 那么这一整套下来将变得难上加难，而且还需要花费一定的时间，如果你没有特别高的要求，还是建议选用开源比较好的一些方案。 在k8s初期使用Heapster+cAdvisor方式监控，这是Prometheus Operator出现之前的k8s监控方案。后来出现了Prometheus Operator，但是目前Prometheus Operator已经不包含完整功能，完整的解决方案已经变为kube-prometheus。项目地址为：","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/kubernetes/monitor-alert/kube-prometheus-stack.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"Prometheus Operator 安装配置"}],["meta",{"property":"og:description","content":"Prometheus Operator 安装配置 一、概述 首先Prometheus整体监控结构略微复杂，一个个部署并不简单。另外监控Kubernetes就需要访问内部数据，必定需要进行认证、鉴权、准入控制， 那么这一整套下来将变得难上加难，而且还需要花费一定的时间，如果你没有特别高的要求，还是建议选用开源比较好的一些方案。 在k8s初期使用Heapster+cAdvisor方式监控，这是Prometheus Operator出现之前的k8s监控方案。后来出现了Prometheus Operator，但是目前Prometheus Operator已经不包含完整功能，完整的解决方案已经变为kube-prometheus。项目地址为："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T15:14:52.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:modified_time","content":"2023-06-18T15:14:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Prometheus Operator 安装配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T15:14:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"一、概述","slug":"一、概述","link":"#一、概述","children":[{"level":3,"title":"Prometheus","slug":"prometheus","link":"#prometheus","children":[]},{"level":3,"title":"Alertmanager","slug":"alertmanager","link":"#alertmanager","children":[]},{"level":3,"title":"ThanosRuler","slug":"thanosruler","link":"#thanosruler","children":[]},{"level":3,"title":"ServiceMonitor","slug":"servicemonitor","link":"#servicemonitor","children":[]},{"level":3,"title":"PodMonitor","slug":"podmonitor","link":"#podmonitor","children":[]},{"level":3,"title":"Probe","slug":"probe","link":"#probe","children":[]},{"level":3,"title":"PrometheusRule","slug":"prometheusrule","link":"#prometheusrule","children":[]},{"level":3,"title":"AlertmanagerConfig","slug":"alertmanagerconfig","link":"#alertmanagerconfig","children":[]}]},{"level":2,"title":"二、安装","slug":"二、安装","link":"#二、安装","children":[{"level":3,"title":"Helm 获取压缩包","slug":"helm-获取压缩包","link":"#helm-获取压缩包","children":[]},{"level":3,"title":"Prometheus 安装配置","slug":"prometheus-安装配置","link":"#prometheus-安装配置","children":[]},{"level":3,"title":"查找 grafana admin 账户密码","slug":"查找-grafana-admin-账户密码","link":"#查找-grafana-admin-账户密码","children":[]}]},{"level":2,"title":"三、配置报警","slug":"三、配置报警","link":"#三、配置报警","children":[]},{"level":2,"title":"四、问题处理","slug":"四、问题处理","link":"#四、问题处理","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1687101292000,"updatedTime":1687101292000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":8.02,"words":2407},"filePathRelative":"cloudnative/kubernetes/monitor-alert/kube-prometheus-stack.md","localizedDate":"2023年6月18日","excerpt":"<h1> Prometheus Operator 安装配置</h1>\\n<h2> 一、概述</h2>\\n<p>首先Prometheus整体监控结构略微复杂，一个个部署并不简单。另外监控Kubernetes就需要访问内部数据，必定需要进行认证、鉴权、准入控制，</p>\\n<p>那么这一整套下来将变得难上加难，而且还需要花费一定的时间，如果你没有特别高的要求，还是建议选用开源比较好的一些方案。</p>\\n<p>在k8s初期使用Heapster+cAdvisor方式监控，这是Prometheus Operator出现之前的k8s监控方案。后来出现了Prometheus Operator，但是目前Prometheus Operator已经不包含完整功能，完整的解决方案已经变为kube-prometheus。项目地址为：</p>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
