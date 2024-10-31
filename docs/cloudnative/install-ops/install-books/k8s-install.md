---
category: 云原生
order: 1
tag:
  - Kubernetes
---

# 简述 K8s 集群搭建步骤

### preinstall：安装前准备

- 关闭 swap 分区
- 更换 yum 源、安装 依赖包
- 更新 系统版本 到 centos 7.9、内核版本 到 长期支持版本 kernel-lt 5.4.196
- 如果硬件网卡驱动不支持新版本内核，升级 网卡驱动， 针对新内核重新编译
- **调节 CPU 性能模式为高性能**
- 禁用防火墙、SELINUX
- 修改内核参数、加载 br_netfilter、ip_conntrack、ipvs 等 modules
- 配置时间同步
- 重启服务器，使用内核生效
- 检查 内核版本
- 检查 hostname 是否符合 DNS 规范
- 检查 kube_service_addresses 和 kube_pods_subnet 是否为正确的网络段
- 检查 kube_service_addresses 和 kube_pods_subnet 的网段是否冲突
- 检查时间是否同步
- 检查 访问外网的连通性（DNS配置是否正确）

### docker：安装Docker

- 更换 yum 下载源
- 安装 docker 和相关依赖
- 新增配置目录，拷贝配置文件
- 启动并加入开机自启

### master: 安装 master

- 更换 yum 下载源
- 下载 kubelet、kubeadm、kubectl 等
- 下载 kube-apiserver、kube-controller-manager、kube-scheduler、kube-proxy、pause、etcd、coredns 等镜像
- 启动 kubelet 服务
- 配置 kubeadm-config.yml 初始化配置文件
- 使用`kubeadm init` 进行初始化
- master1 生成 certificate key
- 其余master 使用 `kubeadm join` 加入master集群

### ha：使用 `haproxy + keepalived` 实现master高可用，负载均衡

> 先申请vip

- 安装 keepalived 、 haproxy
- 重定向日志文件
- keepalived 新增监控检查脚本
- 配置keepalived、haproxy
- 启动 keepalived、haproxy ，并配置开机自启

### calico：安装配置 Calico BGP RR模型

> 提前设置好 LOCAL_AS、AS_NUMBER、PEER_IP，安装好后还需要网络设置一下，BGP做宣告加邻居等

- 拷贝官方 yaml 文件
- 替换 PODSUBNET
- 设置 NIC 为 bond4 或 eth0
- apply calico yaml 文件
- 安装 并配置 calicoctl 工具
- 拷贝 设置 为 BGP RR 模式 的一些列 yaml 文件
- 使用 calicoctl apply 上面的yaml文件

### node：安装 node

- 步骤和 master 2，3 安装类似，下镜像，生成凭证，`kubeadm join`





## Master 节点缩容

```bash
# 删除 Master 节点
kubectl drain st-kubernetes-master-4 --delete-local-data --force --ignore-daemonsets
kubectl delete node st-kubernetes-master-4
ETCDCTL_API=3 etcdctl --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" --endpoints="${HOST_1}" member list
ETCDCTL_API=3 etcdctl --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" --endpoints="${HOST_1}" member remove 60efa3874101e09f
# 查看 ep
kubectl get ep kubernetes -oyaml
# 被删除节点停止 kubelet、docker
systemctl stop kubelet
systemctl stop docker
```





## K8s 集群升级

```bash
# 配yum 源
yum -y install kubelet-1.19.16 kubeadm-1.19.16 kubectl-1.19.16
# 下拉镜像
# edit node  加 CRI 注解
kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock
# 查看升级计划
kubeadm upgrade plan
kubeadm upgrade apply v1.19.16
systemctl daemon-reload
systemctl restart kubelet

# 如果 kube-proxy 没升级，看一下卡在哪里了， ds 类型，默认是滚动升级的

```

