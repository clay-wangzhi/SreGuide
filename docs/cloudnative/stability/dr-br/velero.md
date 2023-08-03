---
order: 4
category: 云原生
tag:
  - Kubernetes
---

# Velero 备份恢复

## 方案制定

1. 物理备份：etcd 备份，保存某一个时刻的快照，快捷方便。
2. 逻辑备份：velero 备份 ，允许用户自己选择备份的内容，比如单个 namespace、指定资源类型等

物理备份的优点是速度快，无论是备份还是回恢复，但缺点是元数据不可读，只能全部恢复。而逻辑备份正好相反，因此两者可以结合使用，既能快，又能有细粒度控制的能力。

> etcd 备份恢复见[上文](etcd-backup-restore.md)

## 备份信息

volumes 建议有 csi 进行备份，耗时较长，容易失败

备份策略如下

```bash
## 备份
velero backup create offline-k8s-work --include-namespaces=work --snapshot-volumes=false --default-volumes-to-restic=false
## 周期备份
velero create schedule offline-k8s-work --schedule="30 23 * * *" --include-namespaces=work --snapshot-volumes=false --default-volumes-to-restic=false --ttl=168h
```

## velero 备份恢复操作步骤

### velero 备份

1. 配置 COS 对象存储
   参考：[使用对象存储 COS 作为 Velero 存储实现集群资源备份和还原](https://cloud.tencent.com/document/product/457/50122)

2. 安装 velero
   ```bash
   # 下载版本：https://github.com/vmware-tanzu/velero/releases 最新稳定版，注意k8s版本兼容性，1.8.1版本要求k8s版本至少1.16
   wget https://github.com/vmware-tanzu/velero/releases/download/v1.8.1/velero-v1.8.1-linux-amd64.tar.gz
   # 解压
   tar -xvf velero-v1.8.1-linux-amd64.tar.gz
   # 加入环境变量
   cp velero-v1.8.1-linux-amd64/velero /usr/bin/
   # 设置补全命令
   velero completion bash > /etc/bash_completion.d/velero.sh
   source /etc/bash_completion.d/velero.sh
   # 安装
   velero install  --provider aws --plugins velero/velero-plugin-for-aws:v1.1.0 --bucket  velero-xxx --secret-file ./credentials-velero --use-volume-snapshots=false --use-restic --default-volumes-to-restic --backup-location-config region=ap-shanghai,s3ForcePathStyle="true",s3Url=https://cos.ap-shanghai.myqcloud.com --restic-pod-cpu-request=1000m --restic-pod-cpu-limit=2000m --restic-pod-mem-request=1024Mi --restic-pod-mem-limit=4096Mi  --velero-pod-cpu-request=1000m --velero-pod-cpu-limit=2000m --velero-pod-mem-request=1024Mi --velero-pod-mem-limit=4096Mi
   # 查看配置的存储位置是否可用
   velero backup-location get
   ```

3. 备份
   根据实际情况备份指定 namespace 或 指定资源类型

   ```bash
   velero backup create test-backup 一次性备份
   velero create schedule NAME --schedule="0 */6 * * *”
   velero create schedule NAME --schedule="@every 6h" 定时备份
   velero create schedule NAME --schedule="@every 6h" --exclude-resources persistentvolumeclaims,persistentvolumes
   velero create schedule NAME --schedule="@every 24h" --include-namespaces web
   velero create schedule NAME --schedule="@every 168h" --ttl 2160h0m0s
   ```
   
3. 示例
   根据 namespace 进行备份，排除持久化数据

   ```bash
   velero backup create k8s-prod --include-namespaces=prod --snapshot-volumes=false --default-volumes-to-restic=false
   ```
   
   

### velero 恢复

```bash
velero restore create restore-1 --from-backup backup-1
velero restore create --from-backup backup-1
velero restore create --from-schedule NAME 或通过namespace和type指定恢复的内容
velero restore create --from-schedule schedule-1 --allow-partially-failed
velero restore create --from-backup backup-2 --include-resources persistentvolumeclaims,persistentvolumes
```

### 其他

- velero 备份删除

  ```bash
  velero backup delete test-backup
  velero schedule delete test-schedule
  ```

- velero 卸载
  ```bash
  kubectl delete namespace/velero clusterrolebinding/velero
  kubectl delete crds -l component=velero
  ```


## 实战：使用 velero 进行集群间数据迁移

> 部分应用从集群 A 迁移到集群 B
>
> 说明：部署烈性为 deployment.apps 和 rollouts.argoproj.io 两种类型，默认一个应用对应一个AppID,  deployment.apps 命令规范为 ${AppID}-default

整理应用列表`deploy.txt`

```tex
xxxx
xxxx
```

### 备份 A 集群 deployment 资源对象

```bash
# 给要迁移的 appid 列表打标签
kubectl -n ut label deployments.apps $(sed 's/$/-default/' deploy.txt) migrate=k8s1
kubectl -n ut label rollouts.argoproj.io $(sed 's/$/-default/' deploy.txt) migrate=k8s1
kubectl -n ut label service $(sed 's/$/-default/' deploy.txt) migrate=k8s1
kubectl -n ut label ingress $(kubectl -n ut get ingress | awk 'NR>1{print $1}') migrate=k8s1
 
# 校验打标是否成功
kubectl -n ut get deployments.apps --selector migrate=k8s1
kubectl -n ut get rollouts.argoproj.io --selector migrate=k8s1
kubectl -n ut get service --selector migrate=k8s1
kubectl -n ut get ingress --selector migrate=k8s1
 
# 在 sh1 集群进行备份
velero backup create ut-deploy-01 --include-namespaces=ut --include-resources=deployment.apps,rollouts.argoproj.io,service,ingress --selector migrate=k8s1
 
# 校验是否备份成功
velero backup describe ut-deploy-01
```

### 在 B 集群进行恢复

```bash
# 在 B 集群 进行恢复
velero restore create --from-backup ut-deploy-01
 
# 校验是否恢复成功
velero restore describe ut-deploy-01
 
# 查看资源对象是否创建成功
kubectl -n ut get rollouts.argoproj.io --selector migrate=k8s1
kubectl -n ut get service --selector migrate=k8s1
 
# 抽选服务查看是否正常
```

### A 集群删除已迁移数据

```bash
kubectl -n ut delete rollouts.argoproj.io $(sed 's/$/-default/' deploy.txt)
kubectl -n ut delete svc $(sed 's/$/-default/' deploy.txt)
```

