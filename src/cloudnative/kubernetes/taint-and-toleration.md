---
category: 云原生
tags:
  - Kubernetes
---

# Kubernetes 污点 Taint 和容忍 Toleration

> 转载自：[Kubernetes 污点 Taint 和容忍 Toleration | 超级小豆丁](http://www.mydlq.club/article/69/)

## 一、介绍

​    在 Kubernetes 中，节点亲和性 `NodeAffinity` 是 Pod 上定义的一种属性，能够使 `Pod` 按我们的要求调度到某个节点上，而 `Taints`(污点) 则恰恰相反，它是 `Node` 上的一个属性，可以让 Pod 不能调度到带污点的节点上，甚至会对带污点节点上已有的 Pod 进行驱逐。当然，对应的 `Kubernetes` 可以给 `Pod` 设置 `Tolerations`(容忍) 属性来让 `Pod` 能够容忍节点上设置的污点，这样在调度时就会忽略节点上设置的污点，将 `Pod` 调度到该节点。一般时候 `Taints` 通常与 `Tolerations` 配合使用。

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/shuiyin.png)

## 二、污点 taints

### 1、查看污点

污点是设置在 `Node` 节点上，所以我们可以通过查看节点信息来查找该节点是否设置污点以及对污点的信息，首先使用 `kubectl get node` 命令查看节点列表：

```bash
$ kubectl get node

NAME            STATUS   ROLES    AGE    VERSION
k8s-master      Ready    master   102d   v1.16.6
k8s-node-2-12   Ready    <none>   102d   v1.16.6
k8s-node-2-13   Ready    <none>   102d   v1.16.6
```



污点信息可以通过 `kubectl describe nodes {Node名称}` 命令，查看输出节点描述信息一栏中 `Taints` 标题后面的内容，即是污点的信息：

```bash
$ kubectl describe nodes k8s-master

...
CreationTimestamp:  Sat, 23 Nov 2019 00:52:45 +0800
Taints:             node-role.kubernetes.io/master:PreferNoSchedule
Unschedulable:      false
...
```



污点内容一般组成为 `key`、`value` 及一个 `effect` 三个元素，表现为：

```bash
<key>=<value>:<effect>
```



> 上面 value 可以设置为空，那么组成形式为 :

由上可以点到 `master` 节点的污点内容为：

```bash
node-role.kubernetes.io/master:PreferNoSchedule
```



- key：node-role.kubernetes.io/master
- value：空
- effect：PreferNoSchedule

### 2、设置污点

一般我们需要想要设置某个节点只允许特定的 `Pod` 进行调度，这时候就得对节点设置污点，可以按 `kubectl taint node [node] key=value[effect]` 格式进行设置，其中 `effect` 可取值如下：

- **PreferNoSchedule：** 尽量不要调度。
- **NoSchedule：** 一定不能被调度。
- **NoExecute：** 不仅不会调度, 还会驱逐 Node 上已有的 Pod。

一般时候我们设置污点，就像下面例子一样对齐进行设置：

```bash
## 设置污点并不允许 Pod 调度到该节点
$ kubectl taint node k8s-master key1=value1:NoSchedule

## 设置污点尽量阻止污点调度到该节点
$ kubectl taint node k8s-master key2=value2:PreferNoSchedule

## 设置污点，不允许普通 Pod 调度到该节点，且将该节点上已经存在的 Pod 进行驱逐
$ kubectl taint node k8s-master key3=value3:NoExecute
```



### 3、删除污点

上面说明了如何对 `Node` 添加污点阻止 `Pod` 进行调度，下面再说一下如何删除节点上的污点，可以使用下面命令：

```bash
$ kubectl taint node [node] [key]-
```



上面语法和创建污点类似，不过需要注意的是删除污点需要知道 key 和最后面设置一个 "-" 两项将污点删除，示例如下：

为了方便演示，先给节点设置污点：

```bash
## 设置污点1
$ kubectl taint node k8s-master key1=value1:PreferNoSchedule
node/k8s-master tainted

## 设置污点2
$ kubectl taint node k8s-master key2=value2:NoSchedule
node/k8s-master tainted

## 设置污点3，并且不设置 value
$ kubectl taint node k8s-master key2=:PreferNoSchedule
node/k8s-master tainted
```



查看污点，可以看到上面设置的三个值：

```bash
$ kubectl describe node k8s-master

...
Taints:     key1=value1:PreferNoSchedule
            key2=value2:NoSchedule
            key2:PreferNoSchedule
            node-role.kubernetes.io/master:PreferNoSchedule
...
```



然后再删除污点：

```bash
## 删除污点，可以不指定 value，指定 [effect] 值就可删除该 ket:[effect] 的污点
$ kubectl taint node k8s-master key1:PreferNoSchedule-

## 也可以根据 key 直接将该 key2 的所有 [effect] 都删除：
$ kubectl taint node k8s-master key2-
```



再次查看污点，可以看到以上污点都被删除：

```bash
$ kubectl describe node k8s-master

Taints:     node-role.kubernetes.io/master:PreferNoSchedule
```



## 三、容忍 tolerations

### 1、Pod 设置容忍

为了使某些 `Pod` 禁止调度到某些特定节点上，就可以对节点设置污点 `taints`。当然，如果希望有些 `Pod` 能够忽略节点的污点，继续能够调度到该节点，就可以对 `Pod` 设置容忍，让 `Pod` 能够容忍节点上设置的污点，例如：

**对一个节点设置污点：**

```bash
$ kubectl taint node k8s-master key=value:NoSchedule
```



**对 Pod 设置容忍，以下两种方式都可：**

```yaml
## 容忍的 key、value 和对应 effect 也必须和污点 taints 保持一致
......
tolerations:
- key: "key"
  operator: "Equal"
  value: "value"
  effect: "NoSchedule"

## 容忍 tolerations 的 key 和要污点 taints 的 key 一致，且设置的 effect 也相同，不需要设置 value
......
tolerations:
- key: "key"
  operator: "Exists"
  effect: "NoSchedule"
```



### 2、Node 和 Pod 对于污点与容忍基本概念

#### (1)、概念

- 一个 Node 可以有多个污点。
- 一个 Pod 可以有多个容忍。
- Kuberentes 执行多个污点和容忍方法类似于过滤器。

如果一个 `Node` 有多个污点，且 `Pod` 上也有多个容忍，只要 `Pod` 中容忍能包含 `Node` 上设置的全部污点，就可以将 `Pod` 调度到该 `Node` 上。如果 `Pod` 上设置的容忍不能够包含 `Node` 上设置的全部污点，且 `Node` 上剩下不能被包含的污点 `effect` 为 `PreferNoSchedule`，那么也可能会被调度到该节点。

#### (2)、注意

- 如果 Node 上带有污点 effect 为 NoSchedule，而 Node 上不带相应容忍，Kubernetes 就不会调度 Pod 到这台 Node 上。
- 如果 Node 上带有污点 effect 为 PreferNoShedule，这时候 Kubernetes 会努力不要调度这个 Pod 到这个 Node 上。
- 如果 Node 上带有污点 effect 为 NoExecute，这个已经在 Node 上运行的 Pod 会从 Node 上驱逐掉。没有运行在 Node 的 Pod 不能被调度到这个 Node 上。

### 3、Deployment 中设置容忍

在 `Kubernetes` 中 `Deployment` 设置容忍，示例如下：

```yaml
apiVersion: apps/vl
kind: Deployment
metadata: 
  name: example 
spec: 
  replicas: 5 
  template:
    spec: 
      ......
      tolerations: 
      - key: "key"
        operator: "Equal"
        value: "value"
        effect: "NoSchedule"
```



### 4、设置容忍时间

正常情况下，如果一个污点带有 `effect=NoExecute` 被添加到了这个 `Node`。那么不能容忍这个污点的所有 `Pod` 就会立即被踢掉。而带有容忍标签的 `Pod` 就不会踢掉。然而，一个带有 `effect=Noexecute` 的容忍可以指定一个 `tolerationSeconds` 来指定当这个污点被添加的时候在多长时间内不被踢掉。例如：

```yaml
tolerations:
- key: "key"
  operator: "Equal"
  value: "value"
  effect: "PreferNoSchedule"
  tolerationSeconds: 3600
```



> 如果这个 Pod 已经在这个带污点且 effect 为 NoExecute 的 node 上。这个 pod 可以一直运行到 3600s 后再被踢掉。如果这时候 Node 的污点被移除了，这个 Pod 就不会被踢掉。

### 5、容忍示例

`Operator` 默认是 `Equal`，可设置为 `Equal` 与 `Exists` 两种，按这两种进行示例：

#### (1)、Operator 是 Exists

**容忍任何污点**

例如一个空的key，将匹配所有的key、value、effect。即容忍任何污点。

```yaml
tolerations:
- operator: "Exists"
```



**容忍某 key 值的污点**

例如一个空的 effect，并且 key 不为空，那么将匹配所有与 key 相同的 effect：

```yaml
tolerations:
- key: "key"
  operator: "Exists"
```



#### (2)、operator 是 Equal

**Node 上有一个污点**

Node 和 Pod 的 key 为 key1、value1 与 effect 相同则能调度：

```yaml
#污点
key1=value1:NoSchedule

#Pod设置
tolerations:
- key: "key1"
  operator: "Equal"
  value: "value1"
  effect: "NoSchedule"
```



**Node 上有多个污点**

Node 的污点的 key、value、effect 和 Pod 容忍都相同则能调度：

```yaml
# 设置污点
key1=value1:NoSchedule
key2=value2:NoExecute

# Pod设置容忍
tolerations:
- key: "key1"
  operator: "Equal"
  value: "value1"
  effect: "NoSchedule"
- key: "key2"
  operator: "Equal"
  value: "value2"
  effect: "NoExecute"
```



Node 的污点和 Pod 的大部分都相同，不同的是 Node 污点 effect 为 PreferNoSchedule 的，可能会调度：

```yaml
# 污点
key1=value1:NoSchedule
key2=value2:NoExecute
key3=value3:PreferNoSchedule

# Pod设置容忍
tolerations:
- key: "key1"
  operator: "Equal"
  value: "value1"
  effect: "NoSchedule"
- key: "key2"
  operator: "Equal"
  value: "value2"
  effect: "NoExecute"
```



Node 的污点和 Pod 的大部分都相同，不同的是 Node 污点 effect 为 NoSchedule 和 NoExecute 的，不会被调度：

```yaml
# 污点
key1=value1:NoSchedule
key2=value2:NoExecute
key3=value3:PreferNoSchedule

# Pod设置容忍
tolerations:
- key: "key1"
  operator: "Equal"
  value: "value1"
  effect: "NoSchedule"
- key: "key3"
  operator: "Equal"
  value: "value3"
  effect: "PreferNoSchedule"
```



## 四、其它

### 1、污染驱逐

前面我们提到了污点的 `effect` 可以设置为 NoExecute，它会影响节点上已经运行的 Pod，如下所示：

- 立即将没有配置容忍的 Pod 逐出。
- 设置容忍但是没有指定 tolerationSeconds 参数的，那么该容忍永久生效。
- 设置容忍但是有指定 tolerationSeconds 参数的，那么在指定的时间内容忍有效，超过指定时间后将被剔除。

此外，当某些条件为 true 时，节点控制器会自动污染节点。内置以下污点：

- node.kubernetes.io/not-ready： 节点尚未准备好。这对应于 NodeCondition Ready 为 false。
- node.kubernetes.io/unreachable： 无法从节点控制器访问节点。这对应于 NodeCondition Ready 为 Unknown。
- node.kubernetes.io/out-of-disk： 节点磁盘不足。
- node.kubernetes.io/memory-pressure： 节点有内存压力。
- node.kubernetes.io/disk-pressure： 节点有磁盘压力。
- node.kubernetes.io/network-unavailable： 节点的网络不可用。
- node.kubernetes.io/unschedulable： 节点不可调度。
- node.cloudprovider.kubernetes.io/uninitialized： 当 kubelet 从 "外部" 云提供程序开始时，此污点在节点上设置为将其标记为不可用。来自 cloud-controller-manager 的控制器初始化此节点后，kubelet 删除此污点。

在版本 1.13 中，该 TaintBasedEvictions 功能提升为 beta 并默认情况下启用，因此 NodeController（或 kubelet）会自动添加污点，并且将禁用基于 Ready NodeCondition 从节点驱逐 Pod 的常规逻辑。

> 注意：为了维护 由于节点问题而导致的现时豆荚逐出的限速行为，系统实际上会以限速的方式添加异味。这样可以防止在主机（例如，主机）与节点分离的情况下发生大规模的Pod逐出。

### 2、设置节点失效后 Pod 转移前等待时间

​    当某个 `Pod` 运行所在的 `Node` 变成 `unready` 或者 `unreachable` 不可用状态时，`Kubernetes` 可以等待该 `Pod` 被调度到其他节点的最长等待时间。 当发生该状况时，查看其中一个 `Pod` 的容忍度信息，你将看到两条内容，如以下代码清单所示:

```yaml
tolerations:
- effect: NoExecutekey: node.alpha.kubernetes.io/notReady
  operator: Exists
  tolerationSeconds: 300
- effect: NoExecutekey: node.alpha.kubernetes.io/unreachable 
  key: operator: Exists 
  tolerationSeconds: 300 
```



这两个容忍度表示，该 `Pod` 将容忍所在节点处于 `notReady` 或者 `unreachable` 状态维持 `300` 秒。 当 `Kubernetes` 控制器检测到有节点处 `notReady` 或者 `unreachable` 状态时， 将会等待 `300` 秒，如果超过指定时间的话 `Kubernetes` 将会把该 `Pod` 重新调度到其他节点上。



### 3、Daemonset 调度问题

> :warning: 系统会自动添加 `node.kubernetes.io/unschedulable：NoSchedule` 容忍度到 DaemonSet Pods。在调度 DaemonSet Pod 时，默认调度器会忽略 `unschedulable` 节点。
>
> ```shell
> # 也就是说会自动忽略下面这个命令，禁止调度的节点
> kubectl cordon xxx
> ```