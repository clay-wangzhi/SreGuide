import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as n,a as l,b as t,d as e,w as d,e as o}from"./app-10bfa633.js";const c={},u=o('<h1 id="云原生实践总结" tabindex="-1"><a class="header-anchor" href="#云原生实践总结" aria-hidden="true">#</a> 云原生实践总结</h1><blockquote><p>👉 作为一名SRE，在运维云原生过程中的实践总结、沉淀，以便自己回顾和他人查阅，希望能帮助你在云原生领域的平稳落地。</p></blockquote><h2 id="企业落地云原生的目的" tabindex="-1"><a class="header-anchor" href="#企业落地云原生的目的" aria-hidden="true">#</a> 企业落地云原生的目的</h2><p>一句话概括：<strong>在保证稳定性的前提下，降本增效</strong></p><p>目标拆解：</p><ul><li><p>保障稳定性</p><ul><li>建设高可用性：基础组件（Master三大件/Etcd等）高可用、多机房、多集群、Pod 高可用</li><li>持续进行风险治理：耦合度、故障发现、容量、容灾、变更及可运维性、安全性</li><li>建设可观测性：Metrics、Logging、Tracing、Events、Chaos、Dashboard、Inspection</li><li>故障演练：Apiserver 高可用故障演练、Etcd 高可用故障演练、双机房切换故障演练</li><li>预案建设：Etcd 备份恢复、Velero 备份恢复、Master 节点紧急扩容、Etcd 节点紧急扩容、多集群故障迁移</li><li>性能/容量评估：物理机性能压测、Master 组件性能压测、Etcd 性能压测、应用性能压测</li></ul></li><li><p>节约成本</p><ul><li>推进无状态应用容器化</li><li>推进无状态应用接入弹性伸缩</li><li>K8s 调度能力增强：预选、优选、重调度（使资源分配均匀、提高装箱率、提高资源使用率）</li><li>持续进行应用容量治理：横向缩容（降副本数）、纵向缩容（降规格 CPU/MEM）</li><li>建立资源画像：调度和容量治理依赖资源画像</li></ul></li><li><p>提高效率（平台能力建设）</p><ul><li>自动化运维平台（面向开发）：容器生命周期管理、Ingress 生命周期管理、HPA 生命周期管理、扩缩容&amp;升降配、容器资源预留、Java Dump &amp; GCLog、屏蔽/恢复告警</li><li>发布系统（面向开发）：Java/Nodejs/静态资源模版、自定义镜像、自定义模版、滚动发布、灰度发布、启动日志查看</li><li>堡垒机（面向开发）：Web 终端、文件管理、日志审计</li><li>SRE 平台（面向运维）：集群安装、集群扩缩容、集群升级、插件安装、Ingress 节点扩缩容、Web Kubectl、集群自动化巡检、多集群迁移</li></ul><p>总结为下图，拿走不谢😏</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/sre-k8s (2).png" alt="sre-k8s (2)"></p></li></ul><h2 id="实践中使用到的-cncf-landscape-项目" tabindex="-1"><a class="header-anchor" href="#实践中使用到的-cncf-landscape-项目" aria-hidden="true">#</a> 实践中使用到的 CNCF LANDSCAPE 项目</h2><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240107175222642.png" alt="image-20240107175222642"></p><p>按用途和熟悉度分类：</p><table><thead><tr><th></th><th>深度使用</th><th>轻度使用或测试环境试用</th><th>准备使用</th></tr></thead><tbody><tr><td>调度与编排</td><td>Kubernetes、KEDA</td><td></td><td>Karmada、Volcano</td></tr><tr><td>协调与服务发现</td><td>etcd、CoreDNS</td><td></td><td></td></tr><tr><td>应用程序定义与镜像构建</td><td></td><td>Helm、KubeVirt、Operator Framework</td><td></td></tr><tr><td>持续集成与交付</td><td>Argo</td><td></td><td>OpenKruise</td></tr><tr><td>Service Mesh</td><td></td><td>Istio</td><td></td></tr><tr><td>云原生网络</td><td>Calico</td><td>Cilium</td><td></td></tr><tr><td>云原生存储</td><td></td><td>Rook、Longhorn</td><td></td></tr><tr><td>可观测性</td><td>Prometheus、VictoriaMetrics、Fluentd、Grafana、Chaosblade</td><td></td><td>OpenTelemetry</td></tr><tr><td>容器运行时</td><td>Docker</td><td>containerd</td><td></td></tr><tr><td>镜像仓库</td><td>JFrog Artifactory</td><td>Harbor</td><td>Dragonfly</td></tr></tbody></table><h2 id="实践中遇到的问题-故障" tabindex="-1"><a class="header-anchor" href="#实践中遇到的问题-故障" aria-hidden="true">#</a> 实践中遇到的问题&amp;故障</h2><p>🤔 问题 ：</p><ul><li>如何提高资源可见性？容器内 top free 命令看到的是宿主机资源使用情况</li><li>应用从 KVM 迁移到 容器 后，资源利用率为何发生变化？有增高的，有降低的</li><li>流量洪峰时，个别应用为啥容器比虚拟RT长？</li><li>新增 Ingress 后导致 RedirectUri 不一致？</li><li>自动注入service变量导致 Nodejs 负载变高？</li><li>grpc 应用负载均衡问题，使用 service 和 Ingress 无效？</li><li>接入容器后，域名访问异常？</li></ul><p>🤔 故障：</p><ul><li>Calico 异常重启？</li><li>kubelet pleg ？</li><li>Node 被清空？</li><li>什么？相同型号物理机 容器性能不如虚拟机？</li></ul><h2 id="文章更新预告" tabindex="-1"><a class="header-anchor" href="#文章更新预告" aria-hidden="true">#</a> 文章更新预告</h2><p>根据本期文章总结，后续会先更新以下文章，文章预告：</p><p>保障稳定性：</p>',18),p=l("li",null,"🚩 多集群管理方案",-1),h=l("li",null,"🚩 K8s 多机房高可用方案",-1),_=l("li",null,"🚩 既要稳也要省，容器资源该怎么分配（Qos 设置篇）？",-1),m=l("li",null,[t("🚩 巧用 "),l("code",null,"shell-operator"),t(" 为核心应用自动注入 pdb")],-1),b=l("li",null,"🚩 Prometheus 高可用设计",-1),g=o("<li>🚩 风险治理篇琐碎整理（临时存储限制、告警与 AppID 负责人如何关联、审计日志重要性、Node 资源预留）</li><li>可观测性 <ul><li>🚩 kube-prometheus 使用实践</li><li>🚩 使用 Fluentd 收集 K8s 日志</li><li>🚩 K8s 组件改监控哪些核心指标？</li><li>🚩 自定义 K8s Dashboard 分享</li><li>🚩 K8s 自动化巡检设计思路</li></ul></li><li>故障演练 <ul><li>🚩 Apiserver 高可用故障演练</li><li>🚩 Etcd 高可用故障演练</li></ul></li><li>预案建设 <ul><li>🚩 Etcd 物理备份 + Velero 逻辑备份 &amp; 恢复详解</li><li>🚩 多集群迁移设计思路</li></ul></li>",4),f=l("li",null,"🚩 Master 组件性能压测",-1),C=l("li",null,"🚩 Etcd 性能压测",-1),k=l("li",null,"🚩 物理机 MaxPod 到底设多少合适？",-1),E=l("p",null,"节约成本：",-1),A=l("li",null,"🚩 Keda-hpa-exporter 开发设计（附 Github 源码）",-1),x=o('<p>提高效率</p><ul><li>🚩 GitOps - ArgoCD 方案调研</li><li>🚩 Argo Rollout 使用分享</li><li>🚩 Argo Workflow 使用分享</li><li>🚩 Jumpserver 二开实现容器 Web 终端、文件管理、日志审计（附 Github 源码）</li></ul><p>CNCF LANDSCAPE项目使用介绍</p><ul><li>🚩 Etcd 概述及使用实践</li><li>🚩 Coredns 概述及使用实践</li><li>🚩 Calico 概述及使用实践</li><li>🚩 Helm 概述及使用实践</li><li>🚩 KubeVirt 概述及使用实践</li><li>🚩 Docker 概述及使用实践</li></ul><p>问题故障汇总</p><ul><li>🚩 容器化后常见 FAQ</li><li>🚩 Calico 异常重启根因分析</li></ul><p>参考链接：</p><p>CLOUD NATIVE LANDSCAPE https://cncf.landscape2.io/?group=projects-and-products</p><p>我是 Clay，下期见 👋</p><hr><blockquote><ul><li><p>欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/wiki 查看最新文章</p></li><li><p>欢迎加我微信<code>sre-k8s-ai</code>，与我讨论云原生、稳定性相关内容</p></li></ul></blockquote><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin.png" alt="weixin" style="zoom:33%;">',12);function y(v,K){const i=r("RouterLink");return s(),n("div",null,[u,l("ul",null,[l("li",null,[t("高可用性 "),l("ul",null,[p,h,l("li",null,[t("🚩 建设 Pod 高可用性（优先级、Qos、打散、hpa、无损发布、pdb） "),l("ul",null,[_,m,l("li",null,[t("（已发表）👉 "),e(i,{to:"/cloudnative/best-practice/gracefully-up-down.html"},{default:d(()=>[t("容器化后无损上下线解决方案")]),_:1})])])]),b])]),g,l("li",null,[t("性能/容量评估 "),l("ul",null,[l("li",null,[t("（已发表）👉 "),e(i,{to:"/cloudnative/stability/benchmark/sysbench.html"},{default:d(()=>[t("Linux 性能基准测试工具及测试方法")]),_:1})]),f,C,k])])]),E,l("ul",null,[l("li",null,[t("（已发表）👉 "),e(i,{to:"/cloudnative/best-practice/containerization.html"},{default:d(()=>[t("云原生落地最佳实践")]),_:1})]),l("li",null,[t("（已发表）👉 "),e(i,{to:"/cloudnative/best-practice/hpa.html"},{default:d(()=>[t("弹性伸缩落地实践")]),_:1})]),A]),x])}const V=a(c,[["render",y],["__file","index.html.vue"]]);export{V as default};
