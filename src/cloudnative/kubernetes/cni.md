---
category: 云原生
tag:
  - Kubernetes
---

# CNI 初探

## CNI 是什么

首先我们介绍一下什么是 CNI，它的全称是 Container Network Interface，即容器网络的 API 接口。

它是 K8s 中标准的一个调用网络实现的接口。Kubelet 通过这个标准的 API 来调用不同的网络插件以实现不同的网络配置方式，实现了这个接口的就是 CNI 插件，它实现了一系列的 CNI API 接口。常见的 CNI 插件包括 Calico、flannel、Terway、Weave Net 以及 Contiv。

## 哪个 CNI 插件适合我

社区有很多的 CNI 插件，比如 Calico, flannel, Terway 等等。那么在一个真正具体的生产环境中，我们要选择哪一个 CNI 插件呢？

这就要从 CNI 的几种实现模式说起。我们需要根据不同的场景选择不同的实现模式，再去选择对应的具体某一个插件。

通常来说，CNI 插件可以分为三种：Overlay、路由及 Underlay。

## **常用网络术语**

**2层网络**

- OSI 网络模型中的数据链路层.
- 处理网络上两个相邻节点之间的帧传递.
- 以太网就工作在第2层, MAC地址表示为子层.

**3层网络**

- OSI 网络模型中的网络层.
- 处理主机之间路由数据包.
- IPv4、IPv6、ICMP 工作在第3层.

**VXLAN**

- VXLAN代表虚拟可扩展的LAN.
- VXLAN是一种封装和覆盖协议, 可在现有网络上运行.
- VXLAN虚拟化与VLAN类似, 但提供更大的灵活性和功能, VLAN只有4096个网络ID.
- VXLAN用于通过在UDP数据报中封装第2层以太网帧来实现大型网络部署.

**Overlay**

- Overlay网络是建立在现有网络之上的虚拟逻辑网络.
- Overlay网络通常用于在现有网络之上提供有用的抽象, 并分离和保护不同的逻辑网络.

**数据封装**

- 数据封装是指在附加层中封装网络数据包以提供其他上下文和信息的过程.
- 在Overlay网络中, 数据封装被用于从虚拟网络转换到底层地址空间, 从而能路由到不同的位置.

**网状网络(Mesh NetWork)**

- 网状网络是指每个节点连接到许多其他节点以协作路由、并实现更大连接的网络.
- 网状网络允许通过多个路径进行路由, 从而提供更可靠的网络.
- 网状网络的缺点是每个附加节点都会增加大量开销.

**BGP**

- BGP代表”边界网关协议”, 用于管理边缘路由器之间数据包的路由方式.
- BGP通过考虑可用路径, 路由规则和特定网络策略, 帮助弄清楚如何将数据包从一个网络发送到另一个网络.
- BGP有时被用作CNI插件中的路由机制, 而不是封装的覆盖网络.

## Flannel

Flannel 的框架包含以下组件：每个节点上的代理服务 flanneld，负责为每个主机分配和管理子网；全局的网络配 f 置存储 etcd（或 K8S API）负责存储主机和容器子网的映射关系；多种网络转发功能的后端实现。本文主要介绍三种最常见的模式：UDP、VXLAN 和 Host-gateway（以下简称 host-gw）。

1. udp: 使用用户态udp封装,默认使用8285端口, 由于是在用户态 封包与解包, 性能上有较大的损耗.
2. vxlan: vxlan封装, 需要配置VNI, Port ( 默认端口8472 ) 和 BGP.
3. host-gw: 直接路由模式, 将容器网络的路由信息直接更新到主机的路由表中. 仅适用于二层直接可达的网络中, 推荐在网络自由的环境中使用, 效率较高.

### Flannel 数据转发模式之 UDP

UDP 是与 Docker 网桥模式最相似的实现模式。不同的是，**UDP 模式在虚拟网桥基础上引入了 TUN 设备（flannel0）**。TUN 设备的特殊性在于它可以把数据包转给创建它的用户空间进程，从而实现内核到用户空间的拷贝。**在 Flannel 中，flannel0 由 flanneld 进程创建，因此会把容器的数据包转到 flanneld，然后由 flanneld 封包转给宿主机发向外部网络**。

**flannel0 是内核态，flanneld 是用户态，最终又要通过内核将数据发到外部网络，因此性能损耗较大**，对于有数据传输有要求的在线业务并不适用。



### Flannel 数据转发模式之 VXLAN

- VXLAN 模式使用比较简单, flannel 会在各节点生成一个 flannel.1 的 VXLAN 网卡(VTEP设备).
- VXLAN 模式下封包与解包的工作是由内核进行的. flannel不转发数据, 仅动态设置ARP和FDB表项.
- VXLAN 模式下通信如下(跨主机的情况)

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/v2-5ef222f540110bd58a3ea5e77015bd29_720w.jpg)

1. 容器A 中的数据包先通过容器A 的路由表发送到 cni0.
2. cni0 通过匹配主机A中的路由表信息,将数据包发送到 flannel.1 接口.
3. flannel.1 是一个 VTEP 设备, 收到报文后按照 VTEP的配置进行封包. 根据flannel.1设备创建时设置的参数 VNI、local IP、Port 进行VXLAN封包。
4. 主机A通过物理网卡 eth0 发送封包到 主机B的物理网卡 eth0中.
5. 主机B的物理网卡eth0 再通过VXLAN默认端口8472 转发到 VTEP 设备flannel.1 进行解包.
6. 解包以后根据IP头匹配路由规则, 内核将包发送到cni0.
7. cni0 发送到桥接到此接口的容器B中.

作为 Flannel 中最被普遍采用的方案，VXLAN 采用的是内置在 Linux 内核里的标准协议，因此虽然封包结构比 UDP 模式复杂，但装包和解包过程均在内核中完成，实际的传输速度要比 UDP 模式快许多。较快的传输速度和对底层网络的可兼容性也使得 VXLAN 适用性较其他模式更高，成为业务环境下的主流选择。

### Flannel 数据转发模式之 Host-gw

除去上述两种模式外，Flannel 还提供了一种纯三层网络模式 host-gw。顾名思义，host-gw 是一种主机网关模式，每个主机会维护一张路由表，记录发往某目标容器子网的数据包的下一跳 IP 地址（也就是子网所在宿主机的 IP）。宿主机将下一跳目的主机的 MAC 地址作为目的地址，通过二层网络把包发往目的主机。目的主机收到后，会直接转发给对应容器。所以 host-gw 模式下，数据包直接以容器 IP 包的形式在网络中传递，每个宿主机就是通信链路中的网关。

和其他两种模式相比，host-gw 模式少了额外的封包和拆包过程，效率与虚拟机直接的通信相差无几。但是，该模式要求所有节点都在物理二层网络中联通，且每个主机都需要维护路由表，节点规模较大时有较大的维护压力，因此不适用复杂网络。



## calico 为什么效率比 flannel 高

整个过程中始终都是根据iptables规则进行路由转发，并没有进行封包，解包的过程，这和flannel比起来效率就会快多了。

## 参考链接

* [从零开始入门 K8s | 理解 CNI 和 CNI 插件](https://www.kubernetes.org.cn/6908.html)
* [十分钟漫谈容器网络方案 01—Flannel](https://www.infoq.cn/article/rnbqhui1wipzj6bjiwet)
* [Flannel网络模型](https://zhuanlan.zhihu.com/p/161425392)
* [如何选择网络插件](https://kuboard.cn/learning/k8s-intermediate/service/cni.html)
* [容器通信flannel和calico对比](https://zhuanlan.zhihu.com/p/225063539)

