---
category: 云原生
tag:
  - Kubernetes
---

# k8s node 配置资源预留

## 背景

如果某些pod 没有设置资源限制，导致 node 节点 负载过高，进而导入 kubelet 和 apiserver 的心跳出现问题，节点就会 Not Ready

Not Ready 的 节点 开始驱逐应用，当没有资源限制的应用跑到其他 节点，其他节点也会产生连锁反应，load 高，心跳失败，Not Ready，进而导致整个集群的雪崩

所以现在设置资源预留：防止 某些 pod 将 cpu 跑满，进而 kubelet 和 apiserver 心跳失败，出现 Not Ready 现象

## 具体操作步骤

在 kubelet yaml 文件中 追加以下内容，然后重启 kubelet

`/var/lib/kubelet/config.yaml`

```yaml
enforceNodeAllocatable:  # 配置资源预留
- pods
kubeReserved:  # 配置 kube 资源预留
  cpu: 1000m
  memory: 1Gi
  ephemeral-storage: 8Gi
systemReserved:  # 配置系统资源预留
  memory: 1Gi
evictionHard:  # 配置硬驱逐阈值
  memory.available: "5%"
  nodefs.available: "10%"
```

```bash
systemctl restart kubelet
```

参考链接：

* [资源预留 | 阳明](https://www.qikqiak.com/k8strain2/maintain/reserved/)
