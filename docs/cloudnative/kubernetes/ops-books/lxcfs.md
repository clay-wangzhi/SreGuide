---
category: 云原生
tag:
  - Kubernetes
---

# 利用 LXCFS 提升容器资源可见性

## 背景

解决应用无法识别容器资源限制的问题

## 具体操作步骤

```bash
git clone https://github.com/clay-wangzhi/lxcfs-admission-webhook.git
kubectl create ns sre
cd lxcfs-admission-webhook
kubectl apply -f deployment/lxcfs-daemonset.yaml
./deployment/install.sh
# 为注入启用命名空间
kubectl label namespace xxx lxcfs-admission-webhook=enabled
```

