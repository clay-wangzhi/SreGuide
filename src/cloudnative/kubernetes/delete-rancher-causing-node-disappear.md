---
category: 云原生
tag:
  - Kubernetes
---

# 卸载 rancher 导致 node 被清空

## 问题描述

集群的节点突然全都不见了 (`kubectl get node` 为空)，导致集群瘫痪，但实际上节点对应的宿主机都还在。因为集群没开审计，所以也不太好查 node 是被什么删除的。

## 快速恢复

由于当时没有排查出来问题，当时批量重启了服务器，自动拉起 kubelet 重新注册 node，故障恢复。其实只是 k8s node 资源被删除，重启 kubelet 服务，自动注册即可。

## 根因分析（5 why）

从 kube-apiserver 日志中可以看到，DELETE node 的操作，导致 node 被清空

**哪里调用的 删除接口？**

node 被清空前，查看 history，发现有卸载 rancher 的操作，很可疑，调查发现，rancher 自定义crd `nodes.management.cattle.io`，有操控 node 的嫌疑，而这个crd 只在 `local` namespace 发现资源，所以判断是卸载 rancher 的脚步中，有直接删除 `local`的操作

## 教训

操作类似的 k8s web 管理平台，尤其删删除卸载时，务必小心，没有把握不要操作，网上的脚步慎用，最好用官方提供的卸载方式，恰巧当时 rancher 官方的卸载方式好久没有维护了，说多了都是泪。。。

**参考链接：**

* [误删 rancher 的 namespace 导致 node 被清空](https://imroc.cc/kubernetes/troubleshooting/cases/cluster/delete-rancher-ns-causing-node-disappear.html#误删-rancher-的-namespace-导致-node-被清空)

