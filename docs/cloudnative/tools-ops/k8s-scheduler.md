---
isOriginal: true
category: 云原生
tag:
  - Kubernetes
---

# 6 张图带你深入了解 kube-scheduler

本文目录：

- kube-scheduler 用途
- Scheduler Pod 调度流程
- 源码调用链路
- Scheduler Framework
- 如何扩展

## kube-scheduler 用途

顾名思义：负责将 Pod **调度**到 Node 上。

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905145020692.png)



Pod  创建流程：

> 说明： 所有的组件只与 Apiserver 做交互，Apiserver 再把信息更新的 Etcd 中。

1. 用户向 Kubernetes API server 发送创建（create/apply）指令。
2. Apiserver 接收到配置文件，进行校验后，将配置数据存储到 etcd 中。
3. Controller-manager 监听 Apiserver 的变化，检测到有新的 Pod 对象时，控制器创建 Pod 并将其状态设为 Pending。
4. **Scheduler 也通过监听 Apiserver 的变化，发现有新的、尚未分配节点的 Pod。根据预选策略和优选策略，选择一个最适合的 Node 来运行新的 Pod。**
5. Pod 被调度到对应的 Node 后，该 Node 上的 kubelet 组件则开始根据 Pod 配置文件，拉镜像、启动 app、就绪探针探测。
6. Kubelet 向 Apiserver  上报状态为 Reday， Apiserver 写入到 etcd 中。



## Scheduler 调度流程

Scheduler 的作用是 负责将 Pod **调度**到 Node 上。

如果让你设计这个组件，你会如何设计，保证它稳定高效的运行。

1）需要能够**实时监听**到 有新的 Pod 待调度

2）同一时间如果有大量待调度的 Pod，如果处理，如果保证不能漏掉，应该先处理哪个 Pod，调度过程中，如果失败，如何处理，  所以得**加个队列**，有重试机制等

3）调度过程中依赖 Node、Pod 的实时信息，根据 Node、Pod 信息，决策 Pod 调度到哪个Node上合适，每次调度 调 Apiserver ，显然低效， 得在本地缓存一份数据，**加个缓存**

4）调度选择过程中，考虑因素太多，很难周全，**可扩展性**一定要设计好

5）Pod 绑定过程中 可能依赖 pvc 绑定等，耗时较长， 所以绑定得是异步的， 但是匹配哪个Node合适的算法 需要同步执行，所**以要有两个周期， 调度周期和绑定周期，调度周期串行，绑定周期并行**



duang，框架这不就出来的了

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905160718399.png)



## 源码调用链路

> 原图放到 Github 上了，需要的自取，图片使用 draw.io 画的，可打开后二次编辑
>
> https://github.com/clay-wangzhi/draw/blob/main/k8s-scheduler.png

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/k8s-scheduler2.png)

```bash
# 42个序号对应的源码位置依次为：
1 找到启动主函数
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/scheduler.go#L30
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go#L81
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/scheduler.go#L31
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go#L134

2 Setup 初始化
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go#L153
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go#L384

3、16 初始化 scheduler 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go#L413
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go#L363
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go#L65

4、5 初始化 snapshot 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go#L293
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/snapshot.go#L48
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/snapshot.go#L29

6、7、8、9 初始化 profiles、fwk 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go#L304
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/profile/profile.go#L49
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/profile/profile.go#L38
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L260
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L53

10、11、12 初始化 podQueue 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go#L340
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go#L134
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go#L372
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go#L155

13、14、15 初始化 schedulerCache 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go#L357
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/cache.go#L41
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/cache.go#L87
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/cache.go#L57

17、18 运行 scheduler
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go#L159
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go#L163
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go#L460

19、运行 SchedulingQueue
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go#L462
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go#L417

20、21 从队列中拿出 Pod 进行调度
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go#L470
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L65
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go#L944

获取 fwk
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L85
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L368

22、23、24、25、26、27、28、29、30、31、32、33、34、35 进入 调度周期
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L110
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L138
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L148
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L400

更新 Snapshot
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L403
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/cache.go#L185

https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L412
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/snapshot.go#L173

运行 PreFilterPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L463
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L698

运行 FilterPlugin
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L507
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L582
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L616
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L649
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L973
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L861

运行 PreScorePlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L435
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L754
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L777
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L1052

运行 ScorePlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L783
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L1101

运行 ReservePluginsReserve
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L208
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L1359

运行 PermitPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L230
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L1443

36、37、38、39、40、41 进入 绑定周期
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L124
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L264

运行 WaitOnPermit
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L277
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L1503

运行 PreBindPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L293
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L1232

运行 BindPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L309
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L967
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L977
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L1275

运行 PostBindPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L322
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go#L1324

42 标记 Pod 调度已完成，不要回队列
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go#L131
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go#L981
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go#L988
```

具体代码就不贴了，太多了，可以根据调用链路图，梳理下，看不懂的可以问 gpt。



## Scheduler Framework 调度器

上面调度链路图，可以清晰的看出  **Framework** 调度算法的扩展点。

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905161641335.png)

具体每个扩展点包含哪些 plugin， 每个 plugin 可作用于那些扩展点，如下图：

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905161934852.png)



## 如何扩展

**如果我们要实现自己的插件，必须向调度框架注册插件并完成配置，另外还必须实现扩展点接口。**

1）向调度框架注册插件 & 扩展点实现接口如下：

out-of-tree 实现扩展示例

`main.go`

```go
package main

import (
	"os"

	"k8s.io/component-base/cli"
	_ "k8s.io/component-base/metrics/prometheus/clientgo" // for rest client metric registration
	_ "k8s.io/component-base/metrics/prometheus/version"  // for version metric registration
	"k8s.io/kubernetes/cmd/kube-scheduler/app"

	"xxx/pkg/example"

	// Ensure scheme package is initialized.
	_ "sigs.k8s.io/scheduler-plugins/apis/config/scheme"
)

func main() {
	// Register custom plugins to the scheduler framework.
	// Later they can consist of scheduler profile(s) and hence
	// used by various kinds of workloads.
	command := app.NewSchedulerCommand(
		app.WithPlugin(example.Name, example.New),
	)

	code := cli.Run(command)
	os.Exit(code)
}
```

`example.go`

```go
package example

import (
	"context"

	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/klog/v2"
	"k8s.io/kubernetes/pkg/scheduler/framework"
)

const Name = "example"

var _ framework.FilterPlugin = &ExamplePlugin{}

type ExamplePlugin struct{}

// NewExampleSchedPlugin initializes a new plugin and returns it.
func NewExamplePlugin(_ runtime.Object, _ framework.Handle) (framework.Plugin, error) {
	return &ExamplePlugin{}, nil
}

func (e *ExamplePlugin) Filter(ctx context.Context, state *framework.CycleState, pod *v1.Pod, nodeInfo *framework.NodeInfo) *framework.Status {
	cpu := nodeInfo.Allocatable.MilliCPU
	memory := nodeInfo.Allocatable.Memory
	klog.InfoS("tanjunchen-scheduler Filter", "pod_name", pod.Name, "current node", nodeInfo.Node().Name, "cpu", cpu, "memory", memory)
	return framework.NewStatus(framework.Success, "")
}

func (e *ExamplePlugin) Name() string {
	return Name
}

```



2）进行配置， enable 插件

编写 kube-scheduler 启动命令配置文件 `example-cm.yaml`

> 一个 ksc 里面可以描述[多个 profile](https://kubernetes.io/docs/reference/scheduling/config/#multiple-profiles)， 会启动多个独立 scheduler。 
>
> pod 想用哪个 schduler，就填对应的 schdulerName。 如果没指定，就是 default-scheduler。
>
> 由于这个配置是给 kube-scheduler 的，而不是 kube-apiserver，
>
> 所以 `k api-resources` 或 `k get KubeSchedulerConfiguration` 都是找不到这个资源的。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: example-scheduler-config
  namespace: kube-system
data:
  scheduler-config.yaml: |
    apiVersion: kubescheduler.config.k8s.io/v1
    kind: KubeSchedulerConfiguration
    leaderElection:
      leaderElect: false
    clientConnection:
      acceptContentTypes: ""
      burst: 100
      contentType: application/vnd.kubernetes.protobuf
      qps: 100
    profiles:
    - schedulerName: example-scheduler
      plugins:
        filter:
          enabled:
          - name: "example" 
```

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905182926497.png)

3） 使用自定义 scheduler

Pod  yaml 文件中指定  `schedulerName: example-scheduler`  即可使用自定义 Scheduler 了

rbac授权 及 自定义 Scheduler 部署文件：略



**enjoy~**



参考链接：

* 深入理解 Kubernetes Scheduler Framework 调度框架（Part 2）：https://tanjunchen.github.io/post/2024-04-07-scheduler-framework-02/
* K8s 调度框架设计与 scheduler plugins 开发部署示例（2024）：https://arthurchiao.art/blog/k8s-scheduling-plugins-zh/



下篇文章，我们分析 crane 和 koordinator 中负载感知调度中的插件。

我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/SreGuide  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容

<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240615194414355.png" alt="weixin" style="zoom: 50%;" />

