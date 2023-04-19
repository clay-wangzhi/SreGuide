# Todo

## 污点与容忍

### 3、Daemonset 调度问题

> :warning: 系统会自动添加 `node.kubernetes.io/unschedulable：NoSchedule` 容忍度到 DaemonSet Pods。在调度 DaemonSet Pod 时，默认调度器会忽略 `unschedulable` 节点。
>
> ```shell
> # 也就是说会自动忽略下面这个命令，禁止调度的节点
> kubectl cordon xxx
> ```

### 4、设置允许Pod调度到Master节点

查看污点

```bash
# kubectl describe node st-kubernetes-master-3 | grep  Taints
Taints:             node-role.kubernetes.io/master=true:NoSchedule
```

设置允许Pod调度到Master节点

```bash
# kubectl taint nodes st-kubernetes-master-3 node-role.kubernetes.io/master-
node/st-kubernetes-master-3 untainted
```

禁止pod调度到master节点

```bash
# kubectl taint nodes st-kubernetes-master-3 node-role.kubernetes.io/master=true:NoSchedule
node/st-kubernetes-master-3 tainted
```

