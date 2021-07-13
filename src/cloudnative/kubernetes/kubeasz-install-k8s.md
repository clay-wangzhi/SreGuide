---
category: 云原生
tags:
  - Kubernetes
---

# 使用 kubeasz 安装 kubernetes

> github 地址：https://github.com/easzlab/kubeasz

项目致力于提供快速部署高可用`k8s`集群的工具, 同时也努力成为`k8s`实践、使用的参考书；基于二进制方式部署和利用`ansible-playbook`实现自动化；既提供一键安装脚本, 也可以根据`安装指南`分步执行安装各个组件。

- **集群特性** `TLS`双向认证、`RBAC`授权、[多Master高可用](https://github.com/easzlab/kubeasz/blob/master/docs/setup/00-planning_and_overall_intro.md#ha-architecture)、支持`Network Policy`、备份恢复、[离线安装](https://github.com/easzlab/kubeasz/blob/master/docs/setup/offline_install.md)
- **集群版本** kubernetes v1.18, v1.19, v1.20, v1.21
- **操作系统** CentOS/RedHat 7, Debian 9/10, Ubuntu 16.04/18.04/20.04
- **运行时** docker 19.03.x, 20.10.x [containerd](https://github.com/easzlab/kubeasz/blob/master/docs/setup/containerd.md) v1.4.4
- **网络** [calico](https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/calico.md), [cilium](https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/cilium.md), [flannel](https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/flannel.md), [kube-ovn](https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/kube-ovn.md), [kube-router](https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/kube-router.md)

## 集群规划和基础参数设定

 ![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/ha-2x.gif)

> :warning: 注意：
>
> * 时间同步
> * 系统干净
> * 新的稳定内核
> * worker 节点 `/var/lib/docker/`、`/var/lib/kubelet` 目录磁盘空间要大一些

## 部署步骤

### 1. 在部署节点安装ansible及准备ssh免密登陆

* 1.1 安装ansible

```shell
# 注意pip 21.0以后不再支持python2和python3.5，需要如下安装
# To install pip for Python 2.7 install it from https://bootstrap.pypa.io/2.7/ :
curl -O https://bootstrap.pypa.io/pip/2.7/get-pip.py
python get-pip.py
python -m pip install --upgrade "pip < 21.0"
 
# pip安装ansible(国内如果安装太慢可以直接用pip阿里云加速)
pip install ansible -i https://mirrors.aliyun.com/pypi/simple/
```

* 1.2 在ansible控制端配置免密码登录

```shell
ssh-keygen -t rsa -b 2048 -N '' -f ~/.ssh/id_rsa

ssh-copy-id $IPs #$IPs为所有节点地址包括自身，按照提示输入yes 和root密码
```

### 2. 在部署节点编排k8s安装

* 2.1 下载项目源码、二进制及离线镜像

 ```shell
 # 下载工具脚本ezdown
 export release=3.0.0
 curl -C- -fLO --retry 3 https://github.com/easzlab/kubeasz/releases/download/${release}/ezdown
 chmod +x ./ezdown
 
 # 使用工具脚本下载
 ./ezdown -k v1.18.15 -D
 ```

上述脚本运行成功后，所有文件（kubeasz代码、二进制、离线镜像）均已整理好放入目录`/etc/kubeasz`

* 2.2 创建集群配置实例

```shell
ln -s /etc/kubeasz/ezctl /usr/bin/ezctl
ezctl new k8s-test
```

然后根据提示配置`/etc/kubeasz/clusters/k8s-test/hosts`和 `/etc/kubeasz/clusters/k8s-test/config.yml` 

根据前面节点规划修改hosts 文件和其他集群层面的主要配置选项；其他集群组件等配置项可以在`config.yml`文件中修改

* 2.3 开始安装

```shell
# 一键安装
ezctl setup k8s-test all
```

