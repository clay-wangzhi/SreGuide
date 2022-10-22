---
category: 自动化工具
tag:
  - Ansible
  - Kubernetes
---

# 使用 ansible 快速安装 k8s 机器

推荐：

* kubeadm 安装用：[kubespray](https://github.com/kubernetes-sigs/kubespray)

* 二进制安装用：[kubeasz](https://github.com/easzlab/kubeasz)

> 此安装方式参考上面两个项目创建，如果刚开始搭建，直接使用上面的安装方式即可，可根据实际情况微调

项目地址：https://github.com/clay-wangzhi/ansible-collection-k8s

## 相关支持

**支持 Linux 的版本**

- **CentOS/RHEL** 7

**支持的组件**

- Core
  - [kubernetes](https://github.com/kubernetes/kubernetes) v1.18.10
  - [etcd](https://github.com/coreos/etcd) v3.4.3
  - [docker](https://www.docker.com/) v19.03.4
- Network Plugin
  - [calico](https://github.com/projectcalico/calico) v3.18.6
- Application
  - [coredns](https://github.com/coredns/coredns) v1.6.7

## 快速开始

```bash
# 更换 yum 源，如果本来就是国内源，无需更换
curl -fsSL "https://gitee.com/clay-wangzhi/shell/raw/master/repo_replace.sh" | bash

# 安装 python3
yum -y install python3

# Install dependencies from ``requirements.txt``
pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/

cd ansible-collection-k8s
# 根据实际情况修改 主机列表 ``inventory/hosts``、全局变量 ``group_vars/all.yml``

# 依次执行 playbook
ansible-playbook 01-preinstall.yml
ansible-playbook 02-docker.yml
ansible-playbook 03-ha.yml
ansible-playbook 04-master.yml
ansible-playbook 05-calico.yml
ansible-playbook 06-node.yml
```

## Roles 介绍

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
- master1 生产certificate key
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

- 步骤和 master 2，3 安装类似，下镜像，生产凭证，`kubeadm join`