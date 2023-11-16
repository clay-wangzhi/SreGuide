---
isOriginal: true
order: 2
category: 云原生
tag:
  - Kubernetes
  - 弹性伸缩
---

# 弹性伸缩落地实践

## 1. 什么是 HPA ?

HPA（Horizontal Pod Autoscaler）是 Kubernetes 中的一种资源自动伸缩机制，用于根据某些指标动态调整 Pod 的副本数量。

## 2. 什么时候需要 HPA ？

- 负载波动：当您的应用程序的负载经常发生波动时，HPA 可以自动调整 Pod 的副本数量，以适应负载的变化。例如，对于 Web 应用程序，在高峰期需要更多的副本以处理更多的请求，而在低谷期可以减少副本数量以节省资源。
- 活动推广：当您的应用程序需要扩展以满足推广活动、新产品发布或突发事件带来的流量增加时，HPA 可以自动增加 Pod 的副本数量，以提供更高的容量和性能。这有助于保持应用程序的可用性和用户体验。
- 定时弹性：大促期间，设置开始和结束时间，自动弹性扩缩容，不用人工干预，提高效率。
- 节约成本：通过使用 HPA，您可以根据应用程序的负载需求自动调整 Pod 的副本数量。这可以帮助您避免过度分配资源，节省资源和成本。当负载较低时，HPA 可以减少副本数量，释放不必要的资源。

## 3. 原生 HPA 的不足

- 使用率计算基于 `resources.requests`
- 不支持定时扩缩容

## 4. KEDA

采用 KEDA 作为弹性伸缩系统的基座，主要考虑到如下优势点：

- 功能丰富：内嵌 CPU/Cron/Prom 多种伸缩策略，原生支持缩容至零。
- 扩展性好：解耦被伸缩对象（支持/scale 子资源即可）和伸缩指标，提供强大的插件机制和抽象接口（scaler + metrics adapter），增加伸缩指标非常便利。
- 社区强大：CNCF 官方毕业项目，微软和 RedHat 强力支持。

### 4.1 工作原理

KEDA 监控来自外部指标提供程序系统（例如 Azure Monitor）的指标，然后根据基于指标值的缩放规则进行缩放。它直接与度量提供者系统通信。它作为 Kubernetes Operator 运行，它只是一个 pod 并持续监控。

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640.png)

KEDA 将 K8s Core Metrics Pipeline 和 Monitoring Pipeline 处理流程统一化，并内置多种 scaler ( link )，提供开箱即用的弹性策略支持，如常见的基于 CPU/Memory 的弹性策略、定时弹性等：

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640-20231116175808185.png)

## 4. 最佳实践

> 说明：
>
> 原生Deployment对象不支持灰度发布策略，所以改用 Argo-Rollout 资源对象，下面示例均采用 Argo-Rollout 演示

### 4.1 定时弹性

#### 4.1.1 后端模版

```yaml
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: <appid>-cron
  namespace: <env>
spec:
  minReplicaCount: <origin-replicas>
  scaleTargetRef:
    apiVersion: argoproj.io/v1alpha1
    kind: Rollout
    name: <appid>-default
  triggers:
  - type: cron
    metadata:
      timezone: Asia/Shanghai
      start: 30 * * * *
      end: 45 * * * *
      desiredReplicas: "10"
```

#### 4.1.2 前端设计

支持三个周期

- 按天
- 按星期
- 自定义 Cron 表达式

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640-20231116175808305.png)

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640-20231116175808409.png)

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640-20231116175808578.png)

#### 4.1.3 消息通知模版

```markdown
定时HPA动态扩缩容提醒：

AppID：<appid>
归属环境：<env>
容器集群：<cluster>
开始扩容时间：30 11 * * 1
结束扩容时间：30 12 * * 1
容器数量变化：1 --> 2
触发时间：2023-11-13 12:35:16
如有疑问可参考：HPA使用文档，或咨询@SRE客服
```

### 4.2 基于资源的弹性

根据 cpu、mem 等资源使用率，自动扩缩容，低负载缩容，减小不必要资源占用，高负载自动扩容，保证应用有足够的资源使用。

#### 4.2.1 后端模版（数据降噪）

> 说明：
>
> 基于 Prometheus 拉取真实资源使用情况，并屏蔽刚启动的 Pod
>
> -default 为基线应用，cluster、zone 是 Prometheus remote_write 到 VictoriaMetrics 新增便签，便于区分集群和区域
>
> VictoriaMetrics 是统一汇总、查询层，方便不同集群使用一套数据源

```yaml
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  labels:
    scaledobject.keda.sh/name: <appid>
  name: <appid>
  namespace:<env>
spec:
  maxReplicaCount: <max-replicas>
  minReplicaCount: <origin-replicas>
  scaleTargetRef:
    apiVersion: argoproj.io/v1alpha1
    kind: Rollout
    name: <appid>-default
  triggers:
  - metadata:
      metricName: cpu_utilization
      query: sum((sum (rate(container_cpu_usage_seconds_total{zone="<zone>",namespace="<env>",pod=~"<appid>-default.*",container!=""}[1m]))
        by(pod) and on(pod) time() - kube_pod_start_time{zone="<zone>",namespace="<env>",pod=~"<appid>-default.*"}
        > 150 )/( sum (container_spec_cpu_quota{zone="<zone>",namespace="<env>",pod=~"<appid>-default.*",container!=""})
        by(pod) /100000) * 100)
      serverAddress: http://<victoria-select>/select/1/prometheus
      threshold: "80"
    type: prometheus
  - metadata:
      metricName: mem_utilization
      query: sum((sum by(pod) (container_memory_working_set_bytes{zone="<zone>",namespace="<env>",pod=~"<appid>-default.*",container!="",container!="POD"})
        and on(pod) time() -kube_pod_start_time{zone="<zone>",namespace="<env>",pod=~"<appid>-default.*"}>
        150) / sum by(pod) (container_spec_memory_limit_bytes{zone="<zone>",namespace="<env>",pod=~"<appid>-default.*",container!="",container!="POD"})*100)
      serverAddress: http://<victoria-select>/select/1/prometheus
      threshold: "80"
    type: prometheus
```

#### 4.2.2 前端设计

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640-20231116175808654.png)

#### 4.2.3 消息通知模版

```markdown
指标HPA动态扩缩容提醒：
 
AppID：<appid>
归属环境：<env>
容器集群：<cluster>
触发指标：cpu使用率（设定阈值为: 40.0%)
触发指标当前值：77.0%
容器数量变化：1 --> 2
触发时间：2023-11-16 10:38:40
如有疑问可参考：HPA使用文档，或咨询@SRE客服
```

### 4.3 基于业务指标的弹性

上生产前，在 UT 环境压测，确定 最大 QPS、最高接受的 RT、最大接受 消息积压数等，监控平台提供接口，根据阀值，自动扩容，自动应对突然流量或压力，保障应用稳定性。

#### 4.3.1 后端模版

> 说明：
>
> QPS 取自 CAT 数据，SRE这边将 CAT 数据使用工具写入到 VictoriaMetrics 中
>
> 前端设计、消息通知 和 基于资源的弹性使用的一套模版，都属于基于指标触发的 HPA，这里不再赘述

```yaml
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  labels:
    scaledobject.keda.sh/name: <appid>
  name: <appid>
  namespace: <env>
spec:
  maxReplicaCount: <max-replicas>
  minReplicaCount: <origin-replicas>
  scaleTargetRef:
    apiVersion: argoproj.io/v1alpha1
    kind: Rollout
    name: <appid>-default
  triggers:
  - metadata:
      metricName: http_requests_total
      query: sum(cat_url_info{appid="<appid>",type="count",env="<env>",assettype="docker",zone="<zone>",host=~"<appid>-default.*"})/60
      serverAddress: http://<victoria-select>/select/1/prometheus
      threshold: "1000"
    type: prometheus
```

### 4.4 补充说明

#### 4.4.1 计算公式

|            | 计算公式                         | 检查触发器间隔 | 指标最新数据间隔 | 备注                             |
| ---------- | -------------------------------- | -------------- | ---------------- | -------------------------------- |
| CPU 使用率 | 所有容器CPU使用率之和/ 容器数量  | 30s            | 30s              | 排除了刚启动的 Pod               |
| MEM 使用率 | 所有容器MEM使用率之和 / 容器数量 | 30s            | 30s              | 排除了刚启动的 Pod               |
| QPS        | 所有容器每秒的请求量 / 容器数量  | 30s            | 60s              | 最新数据为 上一分钟 QPS 的平均值 |

#### 4.4.2 扩缩容默认触发时间

**扩容时间**

当检测结果大于设置的阈值时，立刻触发扩容，没有稳定窗口。

```
期望副本数 = ceil[当前副本数 * (当前指标 / 期望指标)]
```

> ⚠️ HPA 在计算目标副本数时会有一个10%的波动因子。如果在波动范围内，HPA 并不会调整副本数目。

**缩容时间**

稳定窗口的时间为 300 秒，满足缩容条件后，连续5分钟持续满足缩容条件，触发缩容

### 4.5 建立可观测性大盘

后续补充

### 4.6 注意事项（优雅上下线）

自动扩容大多数是在高并发大流量情况触发，此时如果没有对应的解决方案，就会产生短时间流量有损问题。

这里先说下问题，下篇文章会详细介绍具体场景及解决方案

| 过程     | 问题                           |
| -------- | ------------------------------ |
| 无损下线 | 消费者无法及时感知生产者已下线 |
| 无损上线 | 注册太早                       |
| 无损上线 | 发布态与运行态未对⻬           |
| 无损上线 | 初始化慢                       |
