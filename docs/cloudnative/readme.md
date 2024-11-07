---
isOriginal: true
category: 云原生
tag:
  - Kubernetes
---

# 云原生实践总结

> 👉 作为一名SRE，在运维云原生过程中的实践总结、沉淀，以便自己回顾和他人查阅，希望能帮助你在云原生领域的平稳落地。
>

## 企业落地云原生的目的

一句话概括：**在保证稳定性的前提下，降本增效**

目标拆解：

* 保障稳定性
  * 建设高可用性：基础组件（Master三大件/Etcd等）高可用、多机房、多集群、Pod 高可用
  * 持续进行风险治理：耦合度、故障发现、容量、容灾、变更及可运维性、安全性
  * 建设可观测性：Metrics、Logging、Tracing、Events、Chaos、Dashboard、Inspection
  * 故障演练：Apiserver 高可用故障演练、Etcd 高可用故障演练、双机房切换故障演练
  * 预案建设：Etcd 备份恢复、Velero 备份恢复、Master 节点紧急扩容、Etcd 节点紧急扩容、多集群故障迁移
  * 性能/容量评估：物理机性能压测、Master 组件性能压测、Etcd 性能压测、应用性能压测
* 节约成本
  * 推进无状态应用容器化
  * 推进无状态应用接入弹性伸缩
  * K8s 调度能力增强：预选、优选、重调度（使资源分配均匀、提高装箱率、提高资源使用率）
  * 持续进行应用容量治理：横向缩容（降副本数）、纵向缩容（降规格 CPU/MEM）
  * 建立资源画像：调度和容量治理依赖资源画像
* 提高效率（平台能力建设）
  * 自动化运维平台（面向开发）：容器生命周期管理、Ingress 生命周期管理、HPA 生命周期管理、扩缩容&升降配、容器资源预留、Java Dump & GCLog、屏蔽/恢复告警
  * 发布系统（面向开发）：Java/Nodejs/静态资源模版、自定义镜像、自定义模版、滚动发布、灰度发布、启动日志查看
  * 堡垒机（面向开发）：Web 终端、文件管理、日志审计
  * SRE 平台（面向运维）：集群安装、集群扩缩容、集群升级、插件安装、Ingress 节点扩缩容、Web Kubectl、集群自动化巡检、多集群迁移
  
  
  
  总结为下图，拿走不谢😏
  
  ![sre-k8s (2)](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/sre-k8s%20(2).png)
  
  
  
  
  
  

## 实践中使用到的 CNCF LANDSCAPE 项目

![image-20240107175222642](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240107175222642.png)

按用途和熟悉度分类：

|                        | 深度使用                                                  | 轻度使用或测试环境试用             | 准备使用         |
| ---------------------- | --------------------------------------------------------- | ---------------------------------- | ---------------- |
| 调度与编排             | Kubernetes、KEDA                                          |                                    | Karmada、Volcano |
| 协调与服务发现         | etcd、CoreDNS                                             |                                    |                  |
| 应用程序定义与镜像构建 |                                                           | Helm、KubeVirt、Operator Framework |                  |
| 持续集成与交付         | Argo                                                      |                                    | OpenKruise       |
| Service Mesh           |                                                           | Istio                              |                  |
| 云原生网络             | Calico                                                    | Cilium                             |                  |
| 云原生存储             |                                                           | Rook、Longhorn                     |                  |
| 可观测性               | Prometheus、VictoriaMetrics、Fluentd、Grafana、Chaosblade |                                    | OpenTelemetry    |
| 容器运行时             | Docker                                                    | containerd                         |                  |
| 镜像仓库               | JFrog Artifactory                                         | Harbor                             | Dragonfly        |

## 实践中遇到的问题&故障

🤔 问题 ：

* 如何提高资源可见性？容器内 top free 命令看到的是宿主机资源使用情况
* 应用从 KVM 迁移到 容器 后，资源利用率为何发生变化？有增高的，有降低的
* 流量洪峰时，个别应用为啥容器比虚拟RT长？
* （已发表）👉 [故障排查 之 单点登录跳转失败(Ingress 相关)](troubleshooting/ingress-forward.md)
* （已发表）👉 [K8s 一条默认参数引起的性能问题](troubleshooting/enable-service-links.md)
* grpc 应用负载均衡问题，使用 service 和 Ingress 无效？
* 接入容器后，域名访问异常？
*  容器化后常见 FAQ
*  （已发表）👉 [K8s 驱逐场景以及规避方案](troubleshooting/k8s-eviction.md)

🤔 故障：

* （已发表）👉 [Calico 异常重启问题复盘](troubleshooting/calico-restart.md)
* kubelet pleg ？
* Node 被清空？
* （已发表）👉 [什么？相同型号物理机 容器性能不如虚拟机？](troubleshooting/vm-vs-container-performance.md)

## 文章更新预告

根据本期文章总结，后续会先更新以下文章，文章预告：

保障稳定性：

* 高可用性
  * 🚩 多集群管理方案
    * （已发表）👉 [kube on kube 实现思路分享](best-practice/kube-on-kube.md)
  * （已发表）👉 [K8s 多集群思考、实践和探索](best-practice/multicluster.md)
  * 🚩 建设 Pod 高可用性（优先级、Qos、打散、hpa、无损发布、pdb）
    * 🚩 既要稳也要省，容器资源该怎么分配（Qos 设置篇）？
    * （已发表）👉 [巧用 shell-operator 配置 K8s Pod 保护策略](best-practice/shell-operator-pdb.md)
    * （已发表）👉 [容器化后无损上下线解决方案](best-practice/gracefully-up-down.md)
  * 🚩 Prometheus 高可用设计
* 🚩 风险治理篇琐碎整理（临时存储限制、告警与 AppID 负责人如何关联、审计日志重要性、Node 资源预留）
* 可观测性
  * 🚩 kube-prometheus 使用实践
  * 🚩 使用 Fluentd 收集 K8s 日志
  * 🚩 K8s 组件改监控哪些核心指标？
  * 🚩 自定义 K8s Dashboard 分享
  * （已发表）👉 [K8s 集群巡检](best-practice/k8s-scanner.md)
* 故障演练
  * 🚩 Apiserver 高可用故障演练
  * 🚩 Etcd 高可用故障演练
* 预案建设
  * （已发表）👉 [K8s 无备份，不运维](stability/dr-br/etcd-and-velero.md)
* 性能/容量评估
  * （已发表）👉  [Linux 性能基准测试工具及测试方法](stability/benchmark/sysbench.md)
  * （已发表）👉 [K8s CPU Throttle 优化方案](troubleshooting/cpu-burst.md)
  * 🚩 Master 组件性能压测
  * 🚩 物理机 MaxPod 到底设多少合适？

节约成本：

* （已发表）👉 [云原生落地最佳实践](best-practice/containerization.md)
* （已发表）👉  [弹性伸缩落地实践](best-practice/hpa.md)
* 🚩 Keda-hpa-exporter 开发设计（附 Github 源码）

提高效率

* 🚩 GitOps - ArgoCD 方案调研
* 🚩 Argo Rollout 使用分享
* 🚩 Argo Workflow 使用分享
* 🚩 Jumpserver 二开实现容器 Web 终端、文件管理、日志审计（附 Github 源码）

CNCF LANDSCAPE项目使用介绍

* （已发表）👉 [Etcd 概述及运维实践](install-ops/ops-books/etcd.md)
* （已发表）👉  [CoreDNS 概述及运维实践](install-ops/ops-books/coredns.md)
* （已发表）👉 [6 张图带你深入了解 kube-scheduler](best-practice/k8s-scheduler.md)
* （已发表）👉 [K8s 负载感知调度实践（koordinator & crane）](best-practice/loadaware-scheduler.md)
* 🚩 Calico 概述及使用实践
* 🚩 Helm 概述及使用实践
* （已发表）👉 [从0开始装一套 KubeVirt 1.2.1](install-ops/install-books/kubevirt-install.md)
* （已发表）👉 [将 oVirt 虚拟机迁移到 KubeVirt](install-ops/ops-books/ovirt-to-kubevirt.md)
* 🚩 Docker 概述及使用实践



参考链接：

CLOUD NATIVE LANDSCAPE https://cncf.landscape2.io/?group=projects-and-products



我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/wiki  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容



<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin.png" alt="weixin" style="zoom:50%;" />



