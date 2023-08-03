---
order: 14
category: 云原生
tag:
  - Kubernetes
---

# Longorn 安装配置

## 安装配置

```bash
# 检查相关依赖，如果没有，安装官方文档进行安装
curl -sSfL https://raw.githubusercontent.com/longhorn/longhorn/v1.3.0/scripts/environment_check.sh | bash
# helm 安装
helm repo add longhorn https://charts.longhorn.io
helm pull longhorn/longhorn --version 1.3.0
tar -xvf longhorn-1.3.0.tgz
cd longhorn/
helm install longhorn --namespace longhorn-system --create-namespace ./
```

## 功能测试

### 备份恢复

通过 Longhorn UI 进行配置，我这里使用 腾讯云的 COS 进行备份

首先要 在 rancher 上配置 secret

 ![image-20220923155113113](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220923155113113.png)

然后在 longhorn UI 的 settings 页面配置 Backup Target

 ![image-20220923155225931](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220923155225931.png)

> :warning:  注意格式，及得在 COS 上提前创建好目录

校验是否创建成功

```bash
kubectl -n longhorn-system get backuptargets.longhorn.io
```

### 其他功能

创建应用测试，参考下方链接进行测试

* ReadWriteMany

* CSI 卷快照

  ```bash
  git clone https://github.com/kubernetes-csi/external-snapshotter
  # 根据支持的 k8s 兼容版本进行 apply
  cd external-snapshotter && git checkout v4.0.1
  kubectl apply -f client/config/crd/
  # 镜像拉不到可以找个dockerhub, liangjw/snapshot-controller:v4.0.0
  kubectl apply -f deploy/kubernetes/snapshot-controller/
  ```

* CSI 卷恢复

* CSI 卷克隆

  要求扩展的卷必须处于 `detached` 状态才能操作

参考链接：

* https://longhorn.io/docs/1.3.1/deploy/install/install-with-rancher/
* https://longhorn.io/docs/1.3.1/deploy/install/install-with-helm/
* [云原生分布式块存储 Longhorn 初体验](https://kube100.com/d/6)
* [Longhorn 高级使用之备份恢复与 ReadWriteMany](https://mp.weixin.qq.com/s?__biz=MzU4MjQ0MTU4Ng==&mid=2247497465&idx=1&sn=0cd268d145f622b7fb5b35fa88d0abb4&chksm=fdbaf9e4cacd70f2eb0695f565d10875d90f0b9857da3734a385a73579f97aeb8a0575a93958&mpshare=1&scene=1&srcid=07214JQqcaJXHvh6PJfXlFkc&sharer_sharetime=1658397389879&sharer_shareid=35faa6bb6d10f874cf6f57390f055300&version=4.0.0.70098&platform=mac#rd)
* [通过 Kubernetes CSI 实现 Longhorn 卷快照备份、恢复、克隆与扩容操作](https://kube100.com/d/9)