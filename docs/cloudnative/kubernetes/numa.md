---
category: 云原生
tag:
  - Kubernetes
---

# CPU 绑核

背景：算法集群，跑的应用为CPU 密集型应用，k8s 原来的 CPU调度算法为 CFS（基于时间片的），会产生限流，从而影响性能，影响 响应时间，所有改为 CPU 绑核

## 内核启动 NUMA

修改 `/etc/default/grub`  中`numa=off` 改为`numa=on`

重新生成`grub.cfg`

```bash
grub2-mkconfig -o /boot/efi/EFI/centos/grub.cfg
```

重启检验

```bash
shutdown -r now
lscpu | grep NUMA
```

## k8s 绑核配置步骤

前提条件

* k8s 1.18 版本以上

1） 修改 kubelet 配置文件（Node 节点）

`vim /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf`，修改前后对比

```
9a10,11
> ExecStartPre=/usr/bin/mkdir -p /sys/fs/cgroup/cpuset/system.slice/kubelet.service
> ExecStartPre=/usr/bin/mkdir -p /sys/fs/cgroup/hugetlb/system.slice/kubelet.service
11c13,14
< ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
---
> #ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
> ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS --kube-reserved=cpu=2,memory=250Mi --cpu-manager-policy=static --feature-gates=CPUManager=true --topology-manager-policy=single-numa-node
```

2）删除旧的 CPU 管理器状态文件

```bash
rm -f /var/lib/kubelet/cpu_manager_state
```

3）重启 kubelet

```bash
systemctl daemon-reload
systemctl restart kubelet
```

## 验证 pod 是否绑核成功

1）将 工作负载 设置为 Guaranteed Pod， 即 设置limit 和 request ，并相等，CPU 为整数

2）验证

```bash
docker inspect xxx | grep Cpuset
```



参考链接：

* [鲲鹏Kubernetes平台如何使用CPU Manager + Topology Manager达成最佳绑核实例](https://bbs.huaweicloud.com/blogs/181224)
* [CPU 绑核](https://imroc.cc/kubernetes/best-practices/performance-optimization/cpu.html#cpu-绑核)