<template><h1 id="kubernetes-学习笔记" tabindex="-1"><a class="header-anchor" href="#kubernetes-学习笔记" aria-hidden="true">#</a> Kubernetes 学习笔记</h1>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h2>
<ul>
<li>集群搭建
<ul>
<li><RouterLink to="/cloudnative/kubernetes/k8s-install.html">使用 ansible 快速搭建 k8s 集群</RouterLink></li>
</ul>
</li>
<li>常见应用安装配置
<ul>
<li><RouterLink to="/cloudnative/kubernetes/harbor.html">harbor 安装配置(k8s)</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/docker-harbor-ha.html">harbor 高可用安装(docker-compose)</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/rancher-install.html">rancher 安装配置</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/helm.html">helm 安装配置</RouterLink></li>
</ul>
</li>
<li>容器运行时
<ul>
<li><RouterLink to="/cloudnative/kubernetes/k8s-gpu.html">GPU 适配</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/kata.html">Kata Container</RouterLink></li>
</ul>
</li>
<li>存储
<ul>
<li><RouterLink to="/cloudnative/kubernetes/longhorn.html">longhorn 安装配置</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/deploy-ceph-cluster-with-rook.html">使用 Rook 快速搭建 Ceph 集群</RouterLink></li>
</ul>
</li>
<li>服务发现与路由
<ul>
<li><RouterLink to="/cloudnative/kubernetes/ingress-nginx.html">ingress-nginx 安装配置</RouterLink></li>
</ul>
</li>
<li>集群网络
<ul>
<li><RouterLink to="/cloudnative/kubernetes/cni.html">理解CNI和CNI插件</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/calico.html">calico 安装配置</RouterLink></li>
</ul>
</li>
<li>监控告警
<ul>
<li><RouterLink to="/cloudnative/kubernetes/kube-prometheus-stack.html">Prometheus Operator 安装配置</RouterLink></li>
</ul>
</li>
<li>实用技巧
<ul>
<li>高效实用 kubectl</li>
</ul>
</li>
<li>运维手册
<ul>
<li><RouterLink to="/cloudnative/kubernetes/etcd-backup-restore.html">etcd 备份恢复</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/velero.html">velero 备份恢复</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/k8s-audit.html">k8s 开启审计日志</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/kernel-upgrade.html">内核版本升级</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/cert-update.html">使用 kubeadm 手动更新证书</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/k8s-allocatable.html">为 k8s node 配置资源预留</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/lxcfs.html">利用LXCFS提升容器资源可见性</RouterLink></li>
</ul>
</li>
<li>最佳实践
<ul>
<li>优雅终止</li>
<li><RouterLink to="/cloudnative/kubernetes/kube-reserved.html">k8s node 配置资源预留</RouterLink></li>
<li><RouterLink to="/cloudnative/kubernetes/sysbench.html">性能压测指标及方法</RouterLink></li>
<li>健康检查配置</li>
<li>合理设置 Request 与 Limit</li>
<li>Pod 性能优化
<ul>
<li><RouterLink to="/cloudnative/kubernetes/numa.html">CPU 绑核</RouterLink></li>
</ul>
</li>
<li>高可用部署
<ul>
<li>Pod 打散调度</li>
<li>工作负载平滑升级</li>
</ul>
</li>
<li>DNS
<ul>
<li>Coredns 性能优化</li>
</ul>
</li>
<li>弹性伸缩
<ul>
<li>自定义指标进行弹性伸缩</li>
</ul>
</li>
<li>Java 应用容器化</li>
<li>集群运维
<ul>
<li>ETCD 优化</li>
<li>大规模集群优化</li>
</ul>
</li>
<li>日志收集</li>
<li>长连接服务
<ul>
<li>istio 解决 grpc 负载均衡</li>
</ul>
</li>
</ul>
</li>
<li>故障排查
<ul>
<li>排障技能
<ul>
<li>Linux 常用排查命令</li>
<li>使用 nsenter 进入 netns 排查网络问题</li>
<li>使用 tcpdump 抓包分析</li>
<li>使用 wireshark 分析数据包</li>
</ul>
</li>
<li>Pod 排障
<ul>
<li>Pod 状态异常</li>
<li>健康检查失败</li>
</ul>
</li>
<li>节点排障
<ul>
<li>节点高负载</li>
<li>内存碎片化</li>
<li>磁盘爆满</li>
<li>PID 爆满</li>
<li>inotify 资源耗尽</li>
</ul>
</li>
<li>网络排障
<ul>
<li>网络超时</li>
<li>网络丢包</li>
</ul>
</li>
<li>集群排障
<ul>
<li><RouterLink to="/cloudnative/kubernetes/namespace-terminating.html">如何更新Terminating状态的命名空间</RouterLink></li>
</ul>
</li>
<li><RouterLink to="/cloudnative/kubernetes/fault.html">故障复盘模版</RouterLink></li>
<li>排障案例
<ul>
<li><RouterLink to="/cloudnative/kubernetes/delete-rancher-causing-node-disappear.html">卸载 rancher 导致 node 被清空</RouterLink></li>
</ul>
</li>
<li><RouterLink to="/cloudnative/kubernetes/lvs-health-check.html">lvs 健康检查 k8s apiserver</RouterLink></li>
</ul>
</li>
<li>安全加固
<ul>
<li><RouterLink to="/cloudnative/kubernetes/apiserver-tls.html">k8s 更改apiserver使用强加密算法</RouterLink></li>
</ul>
</li>
<li><RouterLink to="/cloudnative/kubernetes/recommend.html">教程|项目|博客|文章推荐</RouterLink></li>
<li>附录
<ul>
<li><RouterLink to="/cloudnative/kubernetes/kubectl-cheatsheet.html">kubectl 速查手册</RouterLink></li>
</ul>
</li>
</ul>
</template>
