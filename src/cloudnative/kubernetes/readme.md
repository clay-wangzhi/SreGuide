---
category: 云原生
icon: kubernetes
tag:
  - Kubernetes
---

# Kubernetes 学习笔记

## Summary

- 集群搭建
	- [Prometheus Operator 安装配置](kube-prometheus-stack.md)
	- [calico 安装配置](calico.md)
	- [ingress-nginx 安装配置](ingress-nginx.md)
	- [rancher 安装配置](rancher-instal.mdl)
	- [helm 安装配置](helm.md)
	- [使用 Rook 快速搭建 Ceph 集群](deploy-ceph-cluster-with-rook.md)
	- [harbor 安装配置](harbor.md)
	- [longhorn 安装配置](longhorn.md)
	- [GPU 适配](k8s-gpu.md)
	- [CPU 绑核](numa.md)
- 集群网络
  - [CNI 初探](cni.md)
- 运维手册
  - [etcd 备份恢复](etcd-backup-restore.md)
  - [velero 备份恢复](velero.md)
  - [k8s 开启审计日志](k8s-audit.md)
  - [内核版本升级](kernel-upgrade.md)
  - [使用 kubeadm 手动更新证书](cert-update.md)
  - [为 k8s node 配置资源预留](k8s-allocatable.md)
  - [如何更新Terminating状态的命名空间](namespace-terminating.md)
  - [利用LXCFS提升容器资源可见性](lxcfs.md)
- 最佳实践
  - [k8s node 配置资源预留](kube-reserved.md)
  - [性能压测指标及方法](sysbench.md)
- 故障排查
  - [故障复盘模版](fault.md)
  - [卸载 rancher 导致 node 被清空](delete-rancher-causing-node-disappear.md)
  - [lvs 健康检查 k8s apiserver](lvs-health-check.md)
- 安全加固
  - [k8s 更改apiserver使用强加密算法](apiserver-tls.md)

- [教程|项目|博客|文章推荐](recommend.md)
- 附录
  - [kubectl 速查手册](kubectl-cheatsheet.md)

