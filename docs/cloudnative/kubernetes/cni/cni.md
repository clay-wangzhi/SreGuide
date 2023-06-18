---
order: 1
category: 云原生
tag:
  - Kubernetes
---

> 转载自： [理解CNI和CNI插件 | 阿里云原生](https://developer.aliyun.com/learning/course/572/detail/7866?accounttraceid=2703db7b0eea4ec5a775b5aaaca87dd5vtsl)

# CNI

## CNI 是什么

CNI，它的全称是 Container Network Interface，即容器网络的 API 接口。

它是 K8s 中标准的一个调用网络实现的接口。Kubelet 通过这个标准的 API 来调用不同的网络插件以实现不同的网络配置方式。

## k8s 中如何使用CNI

K8s 通过 CNI 配置文件来决定使用什么 CNI。

基本的使用方法为：

1. 首先在每个结点上配置 CNI 配置文件，在 /etc/cni/net.d/ 目录下；
2. 安装 CNI 配置文件中所对应的二进制插件到 /opt/cni/bin/ 目录下；
3. 在这个节点上创建 Pod 之后，Kubelet 就会根据 CNI 配置文件执行前两步所安装的 CNI 插件；
4. 上步执行完之后，Pod 的网络就配置完成了。

具体的流程如下图所示：

 ![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1576553351154-fa1f252a-61b8-48b9-a95f-092f9a48392d-20221122160459021.png)

在集群里面创建一个 Pod 的时候，首先会通过 apiserver 将 Pod 的配置写入。apiserver 的一些管控组件（比如 Scheduler）会调度到某个具体的节点上去。Kubelet 监听到这个 Pod 的创建之后，会在本地进行一些创建的操作。当执行到创建网络这一步骤时，首先它会读取刚才我们所说的配置目录中的配置文件，配置文件里面会声明所使用的是哪一个插件，然后去执行具体的 CNI 插件的二进制文件，再由 CNI 插件进入 Pod 的网络空间去配置 Pod 的网络。配置完成之后，Kuberlet 也就完成了整个 Pod 的创建过程，这个 Pod 就在线了。

## 哪个 CNI 插件适合我

通常来说，CNI 插件可以分为三种：Overlay、路由及 Underlay。

常用插件模式分类：

* overlay：flannel vxlan、calico ipip
* 路由模式：calico bpg、flannel host-gw

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1576553351147-0fabc723-8d47-4c85-98ab-1da2f88c5fd1-20221122155052943-20221122160459692.png)

- **Overlay 模式**的典型特征是容器独立于主机的 IP 段，这个 IP 段进行跨主机网络通信时是通过在主机之间创建隧道的方式，将整个容器网段的包全都封装成底层的物理网络中主机之间的包。该方式的好处在于它不依赖于底层网络；

- **路由模式**中主机和容器也分属不同的网段，它与 Overlay 模式的主要区别在于它的跨主机通信是通过路由打通，无需在不同主机之间做一个隧道封包。但路由打通就需要部分依赖于底层网络，比如说要求底层网络有二层可达的一个能力；

- **Underlay 模式**中容器和宿主机位于同一层网络，两者拥有相同的地位。容器之间网络的打通主要依靠于底层网络。因此该模式是强依赖于底层能力的

> 专家说：路由模式其实属于 Underlay 模式的一种特例

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1576553351164-abd9e024-8ce1-4f07-8f79-1ab2b2e4b989-20221122160500229.png)

