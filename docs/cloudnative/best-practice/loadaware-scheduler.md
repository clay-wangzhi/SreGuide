---
isOriginal: true
category: 云原生
tag:
  - Kubernetes
---

# K8s 负载感知调度实践（koordinator & crane）

上篇 “深入了解 kube-scheduler” ，已经知道 kube-scheduler 的工作流程，以及如何实现自定义插件。koordinator 和 crane 都是基于Scheduler Framework 进行实现的 负载感知插件。本文不再赘述，感兴趣可以看上篇文章。

## 背景

原生 Kubernetes 调度器仅基于资源的 Request 进行调度，在生产环境资源的真实使用率和申请率往往相差巨大，造成**资源浪费**的同时也会造成节点的负**载不均衡**。

## 开源方案对比 koordinator VS crane

**crane-scheduler 架构**

<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241024143748739.png" style="zoom:67%;" />

> 前置条件是安装了 Prometheus ， 从 Prometheus 中获取数据。



**koord-scheduler 架构**

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241024144013602.png)

> 监控指标是从  koordlet 中获取， koordlet 是一个 daemonset 类型的插件，负责收集指标，并存储在本地 Prometheus 中



**对比**

|                    | crane-scheduler                                              | koord-scheduler                                              |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 指标收集周期       | 依赖于外置 Prometheus 的收集周期，默认为 30s （颗粒度较粗，不容易收集到突刺） | ds 方式 的 koordlet 插件收集， 相当于每个 Node 节点都有一个 Prometheus， 收集周期默认为 1s |
| 数值类型           | avg 、max                                                    | avg、p50、p90、p95、p99                                      |
| 在离线混部         | 不支持                                                       | 支持<br />在线 Pod(LSE/LSR/LS）和离线 Pod（BE）              |
| hotValue  资源预估 | 支持                                                         | 支持                                                         |
| 使用率 分母        | 宿主机 Total 资源（不合理）                                  | Node allocatable (合理)                                      |

综上，选用 koord-scheduler 。

## koordinator 使用实践

新增 UsageAggregatedDuration 为 18h 的时间段

```bash
kubectl -n koordinator-system edit  cm slo-controller-config
```

```yaml
data:
  colocation-config: |
    {
      "enable": true,
      "metricAggregatePolicy": {
        "durations": [
          "5m",
          "10m",
          "30m",
          "24h"
        ]
      }
    }
```



修改 koordlet 中 Prometheus 的存储时间

```bash
kubectl -n koordinator-system edit ds koordlet
```

```yaml
      containers:
      - args:
        - -addr=:9316
        - -cgroup-root-dir=/host-cgroup/
        - --logtostderr=true
        - --tsdb-retention-duration=18h
```

> 可以使用promtool 工具进入 Pod 查看数据：  ./promtool  tsdb list /metric-data/



修改 阈值 触发规则， 需要重启 koord-scheduler 才生效。

```bash
kubectl -n koordinator-system edit cm  koord-scheduler-config
```

```yaml
            aggregated:
              usageThresholds:
                cpu: 55
                memory: 85
              usageAggregationType: "p99"
              scoreAggregationType: "p99"
            estimatedScalingFactors:
              cpu: 85
              memory: 70
```

```bash
kubectl -n koordinator-system rollout restart deployment koord-scheduler
```



考虑到 公有云资源 可能有自己的 调度实现， 所以只改 IDC 机房的调度器，增加 mutatingwebhook 进行拦截修改，有问题可以快速回退。

生效方式：

```bash
kubectl label ns ${NsName} koordinator-injection=enabled
```

回退方式：

```bash
kubectl label ns ${NsName} koordinator-injection-
```



源代码地址：https://github.com/koordinator-sh/koordinator

魔改代码地址：https://github.com/clay-wangzhi/koordinator

魔改代码 快速部署：

```bash
git clone https://github.com/clay-wangzhi/koordinator
cd koordinator/manifests
kubectl apply -f setup/
kubectl apply -f koordlet/
kubectl apply -f koord-scheduler/
kubectl apply -f koord-manager/
```



## 测试

1） 找出 负载较高的 Node

```bash
kubectl top node | sort -nk 3
kubectl get nodemetrics.slo.koordinator.sh
```

2） 给一个 负载较高的 Node + 几个 负载正常的 Node 打标签

```bash
kubectl label node $(NodeName) test=true
```

3）找到应用所在 Ns，打标，设置 SchedulerName 为 koord-scheduler 是通过 mutatingwebhook 实现的

```bash
kubectl label ns ${NsName} koordinator-injection=enabled
```

4）找一个应用，加上节点亲和性 和 Pod 反亲和性， 并把副本数 设置为 和 打标的 Node 数 相等

```yaml
spec:
  replicas: 4
  template:
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: test
                operator: In
                values:
                - "true"
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
              - key: appid
                operator: In
                values:
                - $(AppidName)
            topologyKey: kubernetes.io/hostname
```

5）查看结果，当有一个 Pod 处于 Pending ，且时间 Reson 包涵如下字样，代表设置成功

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241024172736806.png)





参考链接：

* Crane-Scheduler:真实工作负载感知的调度器设计与实现：https://cloud.tencent.com/developer/article/2296515?areaId=106005
* koordinator 负载感知调度：https://koordinator.sh/zh-Hans/docs/user-manuals/load-aware-scheduling



我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/SreGuide  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容

<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240615194414355.png" alt="weixin" style="zoom: 50%;" />