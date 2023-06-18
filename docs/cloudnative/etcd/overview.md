---
category: 云原生
tag:
  - etcd
---

# Etcd 概述

## 什么是 Etcd ?

Etcd 是 CoreOS 团队于2013年6月发起的开源项目，它的目标是构建一个高可用的分布式键值(key-value)数据库。etcd内部采用`raft`协议作为一致性算法，Etcd基于 Go 语言实现。

名字由来，它源于两个方面，unix的“/etc”文件夹和分布式系统(“D”istribute system)的D，组合在一起表示etcd是用于存储分布式配置的信息存储服务。



## Kubernetes 为什么用 Etcd ?

2014年6月，Google的Kubernetes项目诞生了，我们前面所讨论到Go语言编写、etcd高可用、Watch机制、CAS、TTL等特性正是Kubernetes所需要的，它早期的0.4版本，使用的正是etcd v0.2版本。

Kubernetes是如何使用etcd v2这些特性的呢？举几个简单小例子。

当你使用Kubernetes声明式API部署服务的时候，Kubernetes的控制器通过etcd Watch机制，会实时监听资源变化事件，对比实际状态与期望状态是否一致，并采取协调动作使其一致。Kubernetes更新数据的时候，通过CAS机制保证并发场景下的原子更新，并通过对key设置TTL来存储Event事件，提升Kubernetes集群的可观测性，基于TTL特性，Event事件key到期后可自动删除。

Kubernetes项目使用etcd，除了技术因素也与当时的商业竞争有关。CoreOS是Kubernetes容器生态圈的核心成员之一。



## Etcd 版本变化

时间轴图，总结一下etcd v1/v2关键特性

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/d0af3537c0eef89b499a82693da23f0e.png)



然而随着Kubernetes项目不断发展，v2版本的瓶颈和缺陷逐渐暴露，遇到了若干性能和稳定性问题，Kubernetes社区呼吁支持新的存储、批评etcd不可靠的声音开始不断出现。

问题如下

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/881db1b7d05dc40771e9737f3117f5d1.png)



2016年6月，etcd 3.0诞生，随后Kubernetes 1.6发布，默认启用etcd v3，助力Kubernetes支撑5000节点集群规模。

时间轴及重要特性

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/5f1bf807db06233ed51d142917798b6d.png)

发展到今天，在 GitHub 上 star 数超过43K。在 Kubernetes 的业务场景磨炼下它不断成长，走向稳定和成熟，成为技术圈众所周知的开源产品，而 **v3方案的发布，也标志着 etcd 进入了技术成熟期，成为云原生时代的首选元数据存储产品。**

## 基础架构

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/34486534722d2748d8cd1172bfe63084.png)

你可以看到，按照分层模型，etcd可分为Client层、API网络层、Raft算法层、逻辑层和存储层。这些层的功能如下：

- **Client层**：Client层包括client v2和v3两个大版本API客户端库，提供了简洁易用的API，同时支持负载均衡、节点间故障自动转移，可极大降低业务使用etcd复杂度，提升开发效率、服务可用性。

- **API网络层**：API网络层主要包括client访问server和server节点之间的通信协议。一方面，client访问etcd server的API分为v2和v3两个大版本。v2 API使用HTTP/1.x协议，v3 API使用gRPC协议。同时v3通过etcd grpc-gateway组件也支持HTTP/1.x协议，便于各种语言的服务调用。另一方面，server之间通信协议，是指节点间通过Raft算法实现数据复制和Leader选举等功能时使用的HTTP协议。

- **Raft算法层**：Raft算法层实现了Leader选举、日志复制、ReadIndex等核心算法特性，用于保障etcd多个节点间的数据一致性、提升服务可用性等，是etcd的基石和亮点。

- **功能逻辑层**：etcd核心特性实现层，如典型的KVServer模块、MVCC模块、Auth鉴权模块、Lease租约模块、Compactor压缩模块等，其中MVCC模块主要由treeIndex模块和boltdb模块组成。

- **存储层**：存储层包含预写日志(WAL)模块、快照(Snapshot)模块、boltdb模块。其中WAL可保障etcd crash后数据不丢失，boltdb则保存了集群元数据和用户写入的数据。

## 概念术语

- Raft：etcd所采用的保证分布式系统强一致性的算法。
- Node：一个Raft状态机实例。
- Member： 一个etcd实例。它管理着一个Node，并且可以为客户端请求提供服务。
- Cluster：由多个Member构成可以协同工作的etcd集群。
- Peer：对同一个etcd集群中另外一个Member的称呼。
- Client： 向etcd集群发送HTTP请求的客户端。
- WAL：预写式日志，etcd用于持久化存储的日志格式。
- snapshot：etcd防止WAL文件过多而设置的快照，存储etcd数据状态。
- Proxy：etcd的一种模式，为etcd集群提供反向代理服务。
- Leader：Raft算法中通过竞选而产生的处理所有数据提交的节点。
- Follower：竞选失败的节点作为Raft中的从属节点，为算法提供强一致性保证。
- Candidate：当Follower超过一定时间接收不到Leader的心跳时转变为Candidate开始竞选。
- Term：某个节点成为Leader到下一次竞选时间，称为一个Term。
- Index：数据项编号。Raft中通过Term和Index来定位数据。

## etcdctl 常用命令

全局参数

```bash
ETCD_CA_CERT="/etc/kubernetes/pki/etcd/ca.crt"
ETCD_CERT="/etc/kubernetes/pki/etcd/server.crt"
ETCD_KEY="/etc/kubernetes/pki/etcd/server.key"
HOST_1=https://xxx.xxx.xxx.xxx:2379
```

使用示例

```bash
ETCDCTL_API=3 etcdctl --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" \
  --endpoints="${HOST_1}" endpoint status --write-out=table 
```

常用命令

* 键值命令
  ```bash
  # 增 & 改
  put foo bar
  # 查
  get foo
  # 根据前缀查询
  get --prefix "/demo"
  # 查询所有 keys
  get --prefix "" --keys-only
  # 删
  del foo
  # 事务，多个操作合并为一个事务
  txn <<<'mod("key1") > "0"
  
  put key1 "overwrote-key1"
  
  put key1 "created-key1"
  put key2 "some extra key"
  
  '
  # 压缩
  compaction 1234
  # 监听
  watch foo
  ```
  
* 集群维护命令
  ```bash
  # 列出成员
  member list
  # 端点健康情况
  endpoint health
  # 端点状态
  endpoint status
  # 告警列表
  alarm list
  # 解除所有告警
  alarm disarm
  # 碎片整理
  defrag
  # 创建快照进行备份
  snapshot save snapshot.db
  # 快照恢复
  snapshot restore
  # 快照状态
  snapshot status
  ```
  
  

参考链接：

[etcd 实战课 | 极客时间 唐聪](https://time.geekbang.org/column/intro/100069901)

[一文入门ETCD](https://juejin.cn/post/6844904031186321416#heading-27)

[github etcdctl doc](https://github.com/etcd-io/etcd/blob/main/etcdctl/README.md)
