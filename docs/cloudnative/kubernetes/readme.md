---
dir:
  order: 1
category: 云原生
icon: kubernetes
tag:
  - Kubernetes
---

# Kubernetes 学习笔记

## Summary

- 集群搭建
  - [使用 ansible 快速搭建 k8s 集群](k8s-install.md)
- 常见应用安装配置
  - [harbor 安装配置(k8s)](harbor.md)
  - [harbor 高可用安装(docker-compose)](docker-harbor-ha.md)
  - [rancher 安装配置](rancher-install.md)
  - [helm 安装配置](helm.md)
- 容器运行时
  - [GPU 适配](k8s-gpu.md)
  - [Kata Container](kata.md)
- 存储
  - [longhorn 安装配置](longhorn.md)
  - [使用 Rook 快速搭建 Ceph 集群](deploy-ceph-cluster-with-rook.md)
- 服务发现与路由
  - [ingress-nginx 安装配置](ingress-nginx.md)
- 集群网络
  - [理解CNI和CNI插件](cni.md)
  - [calico 安装配置](calico.md)
- 监控告警
  - [Prometheus Operator 安装配置](kube-prometheus-stack.md)
- 实用技巧
  - 高效实用 kubectl
- 运维手册
  - [etcd 备份恢复](etcd-backup-restore.md)
  - [velero 备份恢复](velero.md)
  - [k8s 开启审计日志](k8s-audit.md)
  - [内核版本升级](kernel-upgrade.md)
  - [使用 kubeadm 手动更新证书](cert-update.md)
  - [为 k8s node 配置资源预留](k8s-allocatable.md)
  - [利用LXCFS提升容器资源可见性](lxcfs.md)
- 最佳实践
  - 优雅终止
  - [k8s node 配置资源预留](kube-reserved.md)
  - [性能压测指标及方法](sysbench.md)
  - 健康检查配置
  - 合理设置 Request 与 Limit
  - Pod 性能优化
    - [CPU 绑核](numa.md)
  - 高可用部署
    - Pod 打散调度
    - 工作负载平滑升级
  - DNS
    - Coredns 性能优化
  - 弹性伸缩
    - 自定义指标进行弹性伸缩
  - Java 应用容器化
  - 集群运维
    - ETCD 优化
    - 大规模集群优化
  - 日志收集
  - 长连接服务
    - istio 解决 grpc 负载均衡
- 故障排查
  - 排障技能
    - Linux 常用排查命令
    - 使用 nsenter 进入 netns 排查网络问题
    - 使用 tcpdump 抓包分析
    - 使用 wireshark 分析数据包
  - Pod 排障
    - Pod 状态异常
    - 健康检查失败
  - 节点排障
    - 节点高负载
    - 内存碎片化
    - 磁盘爆满
    - PID 爆满
    - inotify 资源耗尽
  - 网络排障
    - 网络超时
    - 网络丢包
  - 集群排障
    - [如何更新Terminating状态的命名空间](namespace-terminating.md)
  - [故障复盘模版](fault.md)
  - 排障案例
    - [卸载 rancher 导致 node 被清空](delete-rancher-causing-node-disappear.md)
  - [lvs 健康检查 k8s apiserver](lvs-health-check.md)
- 安全加固
  - [k8s 更改apiserver使用强加密算法](apiserver-tls.md)
- [教程|项目|博客|文章推荐](recommend.md)
- 附录
  - [kubectl 速查手册](kubectl-cheatsheet.md)

