---
category: 云原生
tags:
  - Kubernetes
---

# Kubernetes 资源请求和限制

> 转载自：[Kubernetes 资源请求和限制 | IT老男孩](https://www.xtplayer.cn/kubernetes/resource-requests-and-limits/)

资源调度是 Kubernetes 的核心功能之一。Kubernetes 调度程序确保容器获得足够的资源以正确执行。此过程由调度策略控制。在深入研究调度程序的工作原理之前，我们确保我们了解 Kubernetes 集群内部资源定义，分配和限制的基本结构。

## 资源类型

Kubernetes 只有两个内置的可管理资源：**CPU**和**内存**。CPU 基本单元是核心，内存以字节为单位，这两种资源在调度器如何将 Pods 分配给节点方面起着关键作用。您将控制您的集群请求，分配和使用内存和 CPU，始终设置正确的 CPU 和内存值，这将确保运行异常的应用程序不会影响群集中其他 Pod 的可用资源容量。

## 资源请求和限制

Kubernetes 使用请求（requests）和限制（limits）结构来控制 CPU 和内存等资源。

- **requests**: 请求是保证容器预期需要分配的资源大小，可以理解为所需的最小资源。如果容器配置了 requests，Kubernetes 将仅在可以为其分配足够资源的节点上调度它。

- limits

  : 限制是容器永远不会超过的资源阈值，可以理解为最大值。

  - CPU 是 **可压缩的资源**，这意味着一旦您的容器使用资源达到 CPU 限制的极限，它将继续运行，但是操作系统将对其进行限制并阻止使用 CPU 进行调度。
  - 内存是 **不可压缩的资源**。如果容器中进程使用内存超过 limits 限制的最大值，将会触发系统的 OOM 机制，容器中应用进程将会被强制 KILL。
  - limits 永远不能低于 requests，如果您的限制高于请求，Kubernetes 将引发错误，并且不允许您运行容器。

> **提示**：最好在容器级别设置请求和限制，以进行更细化的资源控制和更有效地分配容器。

## 定义 CPU 请求和限制

要为容器指定 CPU 请求，请在容器的 YAML 资源清单的 **resources > requests** 字段中添加相应的值。类似地，要指定 CPU 限制，需要在 **resources > limits** 字段中添加相应的值

### 不同云提供商的 CPU 单元

如果您在具有带超线程的英特尔裸金属处理器上运行，Kubernetes 中的 CPU 单元最初相当于一个超线程。重要的是要了解它如何映射到主要云提供商的不同 CPU 容量，误解这些可能会导致 Kubernetes 集群内部的性能下降。

| ***\*Infrastructure\****                       | **相对于 1 个 CPU** |
| ---------------------------------------------- | ------------------- |
| AWS                                            | 1 个 vCPU           |
| Azure                                          | 1 个 vCore          |
| GCP                                            | 1 个 vCore          |
| IBM 公司                                       | 1 个 vCPU           |
| bare-metal Intel processor with Hyperthreading | 1 Hyperthread       |

## 定义内存请求和限制

要为容器指定内存请求，请在容器的 YAML 资源清单的 **resources > requests** 字段中添加相应的值。类似地，要指定内存限制，需要在 **resources > limits** 字段中添加相应的值。

内存限制和请求以字节为单位，您可以将内存表示为普通整数或使用以下后缀之一的定点整数: E, P, T, G, M, K。

## 请求和限制配置示例

看下面的例子。这是一个有两个容器的 Pod。每个容器都有 0.5 CPU 和 300MiB 内存的请求。每个容器限制为 1 个 CPU 和 500MiB 的内存。

[![12qwe2](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/lao2.png)](https://www.xtplayer.cn/kubernetes/resource-requests-and-limits/2.png)

**如果你使用 rancher 进行应用管理，那么配置资源请求和限制将会非常简单。**

1. 选择需要配置请求和限制的服务，然后在右侧省略号菜单中选择 **编辑**；

   ![image-20210218182743548](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210218182743548.png)

2. 跳转后的页面往下翻，点击**显示高级选项**；

3. 页面往下翻，点击 **安全/主机设置**。

4. 最后即可配置**请求和限制**。

   ![image-20210218183054622](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210218183054622.png)

## 命名空间设定请求和限制

理想情况下，您希望团队成员始终设置限制和资源。但是在现实世界中，您的团队会忘记这样做。为了防止这些情况发生，您可以在命名空间级别设置 **ResourceQuotas** 和 **LimitRanges**。

### 资源配额（ResourceQuotas）

您可以使用 ResourceQuotas 来限制命名空间资源大小。ResourceQuotas 让您只看如何限制该命名空间内容器的 CPU 和内存资源使用率。资源配额配置示例如下：

[![qweqweq](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qweqweq.png)](https://www.xtplayer.cn/kubernetes/resource-requests-and-limits/qweqweq.png)

可以看到有四个部分，配置这些部分都是可选的。

- **requests.cpu:** 命名空间中的所有容器请求 CPU 资源总和的最大值。只要命名空间中请求的总 CPU 资源少于 500m，就可以运行任意多的容器。
- **Requests.memory:** 命名空间中的所有容器请求内存资源总和的最大值。只要命名空间中请求的总内存小于 100MiB，就可以运行任意多的容器。
- **limits.cpu:** 命名空间中所有容器 CPU 限制总和的最大值。
- **limits.memory:** 命名空间中所有容器内存限制总和的最大值。

### 限制范围（LimitRanges）

LimitRange 适用于单个容器。这可以防止您的团队成员在命名空间内创建超小型或超大型容器。一个 LimitRange 配置示例：

[![312asd](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/lao3.png)](https://www.xtplayer.cn/kubernetes/resource-requests-and-limits/3.png)

可以看到有四个可选部分：

- **default** 部分为 Pod 中的容器设置了**默认限制**，未明确设置这些值的容器，默认情况下将被赋给这些值。
- **defaultRequest** 部分为 Pod 中的容器设置**默认请求**，未明确设置这些值的容器，默认情况下将被赋给这些值。
- **max** 将设置一个 Pod 中的容器可以设置的**最大限制**，**default** 部分的设置不能高于这个值。同样，对容器设置的限制也不能高于这个值。如果容器本身没有明确设置限制值，并且如果设置了这个 **max** 值而没有设置 **default** 值，则会将 **max** 作为限制值分配给容器。
- 该 **min** 设置的最小要求，在一个荚的容器可以设置。该**defaultRequest**部分不能低于此值。同样，在容器上设置的请求也不能低于此值。如果设置了该最小值而未设置**defaultRequest**部分，则最小值也将成为**defaultRequest**值，
- **min** 部分定义了一个 Pod 容器可以设置的**最小请求**。**defaultRequest** 部分不能低于 **min** 值。同样，容器本身设置的**请求**也不能低于这个 **min** 值。如果设置了这个 **min** 值，而没有设置 **defaultRequest** 部分，则 **min** 也会变成 **defaultRequest** 值设置到容器。

## Kubernetes Pod 的生命周期

了解 Pods 如何获得资源，以及当它们超过了所分配的资源或集群的总体容量时会发生什么，这一点非常重要，这样您就可以正确地调优容器和集群容量。下面是典型的 Pod 调度流程:

1. 您可以通过规范定义资源，并运行 kubectl apply 命令分配给 Pod。
2. Kubernetes 调度器将使用循环调度策略来选择一个节点来运行 Pod。
3. 对于每个节点，Kubernetes 会检查该节点是否有足够的资源来满足资源请求。
4. Pod 被调度到第一个有足够资源的节点。
5. 如果所有节点都没有足够的资源，则 Pod 将进入挂起状态。
   1. 如果您正在使用 CA autoscaler，您的集群将扩展节点数量以分配更多的容量。
6. 如果一个节点正在运行 Pod，而 Pod 的限制总和超过了它的可用容量，那么 Kubernetes 将进入过量使用状态。
   1. 由于 CPU 可以被压缩，Kubernetes 将确保您的容器获得它们请求的 CPU，并将节制其余的 CPU。
   2. 内存无法压缩，因此，如果节点内存不足，Kubernetes 需要开始决定终止哪个容器。

## 如果 Kubernetes 进入过量使用状态怎么办？

请记住，Kuberentes 针对整个系统的运行状况和可用性进行了优化。当它进入过量使用状态时，Kubernetes 调度程序可能会做出杀死 Pod 的决定。通常，如果某个 Pod 使用的资源超过了请求的数量，则该 Pod 会成为终止请求的候选对象。在这里，您要记住的条件是：

- Pod 没有定义对 CPU 和内存的请求，Kubernetes 认为这个 Pod 使用的比他们默认要求的要多。
- Pod 定义了一个 **request**，但它们使用的请求多于 **request**，但低于 **limit**。
- 如果多个 Pod 超过了它们的请求，Kubernetes 将根据它们的优先级对它们进行排序，最低优先级的 Pod 首先被终止。
- 如果所有 Pod 都具有相同的优先级，则 Kubernetes 将从最占用请求资源的 Pod 开始。
- 如果关键组件（例如 kubelet 或 docker 引擎）使用的资源比为其保留的资源更多，Kubernetes 可能会杀死其请求中的 Pod。这是罕见的情况。

## TODO

* 其他可参考

  [你真的理解 K8s 中的 requests 和 limits 吗？ | KubeSphere](https://kubesphere.io/zh/blogs/deep-dive-into-the-k8s-request-and-limit/)