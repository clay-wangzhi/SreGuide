---
category: 云原生
tags:
  - Kubernetes
---

# 在 Kubernetes 上最小化安装 KubeSphere

## 前提条件

- 如需在 Kubernetes 上安装 KubeSphere v3.1.1，您的 Kubernetes 版本必须为：1.17.x、1.18.x、1.19.x 或 1.20.x。
- 确保您的机器满足最低硬件要求：CPU > 1 核，内存 > 2 GB。
- 在安装之前，需要配置 Kubernetes 集群中的**默认**存储类型。

**改变默认 StorageClass**

存储我们选用ceph，安装详见 [这里](https://clay-wangzhi.com/cloudnative/kubernetes/deploy-ceph-cluster-with-rook/)

```shell
kubectl patch storageclass rook-cephfs  -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

> 不建议您在生产环境中使用 NFS 存储（尤其是在 Kubernetes 1.20 或以上版本），这可能会引起 `failed to obtain lock` 和 `input/output error` 等问题，从而导致 Pod `CrashLoopBackOff`。此外，部分应用不兼容 NFS，例如 [Prometheus](https://github.com/prometheus/prometheus/blob/03b354d4d9386e4b3bfbcd45da4bb58b182051a5/docs/storage.md#operational-aspects) 等。

## 部署 KubeSphere

确保您的机器满足安装的前提条件之后，可以按照以下步骤安装 KubeSphere。

1. 执行以下命令开始安装：

   ```
   kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/kubesphere-installer.yaml
      
   kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/cluster-configuration.yaml
   ```

2. 检查安装日志：

   ```
   kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f
   ```

3. 使用 `kubectl get pod --all-namespaces` 查看所有 Pod 是否在 KubeSphere 的相关命名空间中正常运行。如果是，请通过以下命令检查控制台的端口（默认为 `30880`）：

   ```
   kubectl get svc/ks-console -n kubesphere-system
   ```

4. 确保在安全组中打开了端口 `30880`，并通过 NodePort `(IP:30880)` 使用默认帐户和密码 `(admin/P@88w0rd)` 访问 Web 控制台。

5. 登录控制台后，您可以在**服务组件**中检查不同组件的状态。如果要使用相关服务，可能需要等待某些组件启动并运行。

   ![kubesphere-components](https://kubesphere.com.cn/images/docs/zh-cn/quickstart/minimal-kubesphere-on-k8s/kubesphere-components.png)

## 问题

错误信息：

```
Error creating: pods “ks-console-5576fccbb8-” is forbidden: error looking up service account kubesphere-system/kubesphere: serviceaccount “kubesphere” not found
```

解决办法：

用https://github.com/kubesphere/ks-installer/blob/master/scripts/kubesphere-delete.sh 这个脚本卸载

不能直接 `delete -f`

## 参考链接

* [在 Kubernetes 上最小化安装 KubeSphere | KubeSphere官网](https://kubesphere.com.cn/docs/quick-start/minimal-kubesphere-on-k8s/)
* [重现安装kubesphere 时候 ks-apiserver 的 rs 报错 | 开发者社区](https://kubesphere.com.cn/forum/d/4519-kubesphere-ks-apiserver-rs)

* [改变默认 StorageClass | kubernetes官网](https://kubernetes.io/zh/docs/tasks/administer-cluster/change-default-storage-class/)