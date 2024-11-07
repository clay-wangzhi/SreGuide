---
isOriginal: true
order: 1
category: 云原生
---

# Kubernetes 概述

# 什么是 kubernetes 

容器编排、调度平台，是一个完备的分布式系统支撑平台。

## kubernetes 架构

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/k8s-archeitecture.png)

- etcd 兼具一致性和高可用性的键值数据库，只有API Server能与其通信；
- apiserver 提供了资源操作的唯一入口，并提供认证、授权、访问控制、API 注册和发现等机制；
- controller manager 负责维护集群的状态，比如故障检测、自动扩展、滚动更新等；
- scheduler 负责资源的调度，按照预定的调度策略将 Pod 调度到相应的机器上；
- kubelet 负责维护容器的生命周期，同时也负责 Volume（CSI）和网络（CNI）的管理；
- container runtime 负责镜像管理以及 Pod 和容器的真正运行（CRI）；

## K8s vs KVM

|            | Kubernetes                                                   | KVM                          |
| :--------- | :----------------------------------------------------------- | :--------------------------- |
| 效率       | 从资源声明周期管理和发布流程看，使用容器效率较高             | 较低                         |
| 自修复能力 | 通过**声明式语法**提供了强大的自修复能力 自动保持应用状态、自动健康检查、**自动异常重启**、**自动缩放**、**自动故障迁移** | 无，需额外软件介入或人工处理 |
| 负载均衡   | 透明的服务注册和服务发现机制、内建智能负载均衡器             | 不支持应用和LB 动态联动      |
| 使用习惯   | 新技术，需要一定学习成本                                     | 方便                         |

