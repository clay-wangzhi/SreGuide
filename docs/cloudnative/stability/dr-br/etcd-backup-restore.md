---
order: 3
category: 云原生
tag:
  - etcd
---

# Etcd 备份恢复

## Etcd 备份

1. 创建备份脚本`/opt/etcd_backup.sh`
   ```bash
   #!/usr/bin/env bash
   #
   # Etcd backup
    
   set -e
    
   ETCD_CA_CERT="/etc/kubernetes/pki/etcd/ca.crt"
   ETCD_CERT="/etc/kubernetes/pki/etcd/server.crt"
   ETCD_KEY="/etc/kubernetes/pki/etcd/server.key"
   BACKUP_DIR="/var/lib/docker/etcd_backup"
   DT=$(date +%Y%m%d.%H%M%S)
    
   [[ ! -d ${BACKUP_DIR} ]] && mkdir -p ${BACKUP_DIR}
   find ${BACKUP_DIR} -name "*.db" -mtime +7 -exec rm -f {} \;
    
   ETCDCTL_API=3 /usr/local/bin/etcdctl --endpoints=https://127.0.0.1:2379 \
     --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" \
     snapshot save "${BACKUP_DIR}/etcd-snapshot-${DT}.db"
    
   echo "Etcd backup success, backup file: ${BACKUP_DIR}/etcd-snapshot-${DT}.db, \
     file size: $(du -sh ${BACKUP_DIR}/etcd-snapshot-${DT}.db |awk '{print $1}')"
   echo
   ```

2. 添加cron定时任务 `crontab -e`
   ```bash
   0 */1 * * * /bin/bash /opt/etcd_backup.sh >>/opt/log-backup-etcd.log 2>&1
   ```

## Etcd 恢复

1. 创建备份目录

   ```bash
   mkdir -p /opt/k8s_manifests_backup
   ```

2. 停止所有 Master 上 kube-apiserver 服务

   ```bash
   mv /etc/kubernetes/manifests/kube-apiserver.yaml /opt/k8s_manifests_backup/
   # 检查服务是否已停止
   kubectl get pod -n kube-system | grep kube-apiserver
   ```

3. 停止集群中所有 etcd 服务

   ```bash
   # 记录 etcd --name、--initial-advertise-peer-urls、--data-dir 值
   ps -ef | grep etcd
   # 停止服务
   mv /etc/kubernetes/manifests/etcd.yaml /opt/k8s_manifests_backup/
   # 检查服务是否已停止
   docker ps | grep etcd
   ```

4. 移除所有 etcd 存储目录下数据，不同环境下，存储目录可能不一样，线上存储目录为 `/data/etcd`

   ```bash
   mv /data/etcd{,.bak}
   ```

5. 拷贝要恢复的快照到所有 etcd 节点，进行快照恢复
   所有 etcd 节点操作，不同节点，传入不同的 `--name、--initial-advertise-peer-urls、--data-dir`值

   ```bash
   ETCDCTL_API=3 /usr/local/bin/etcdctl snapshot restore /tmp/xxx.db \
     --name st-kubernetes-master-2 \
     --initial-cluster "st-kubernetes-master-3=https://10.100.142.165:2380,st-kubernetes-master-1=https://10.100.142.163:2380,st-kubernetes-master-2=https://10.100.142.164:2380" \
     --initial-cluster-token k8s_etcd \
     --initial-advertise-peer-urls https://10.100.142.164:2380 \
     --data-dir=/data/etcd
   ```

6. 启动集群中所有 etcd

   ```bash
   mv /opt/k8s_manifests_backup/etcd.yaml /etc/kubernetes/manifests/
   # 检查集群状态
   ETCDCTL_API=3 /usr/local/bin/etcdctl  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
     --cert=/etc/kubernetes/pki/etcd/server.crt \
     --key=/etc/kubernetes/pki/etcd/server.key \
     --endpoints=https://10.100.142.163:2379,https://10.100.142.164:2379,https://10.100.142.165:2379 \
     endpoint health
   ```

7. 启动所有 Master 上 kube-apiserver 服务

   ```bash
   mv /opt/k8s_manifests_backup/kube-apiserver.yaml /etc/kubernetes/manifests/
   # 检查服务状态
   kubectl get pod -n kube-system | grep kube-apiserver
   ```

8. 检查是否如期恢复

## 总结

Kubernetes 集群备份主要是备份etcd集群。而恢复时，主要考虑恢复整个顺序：

停止Kube-apiserver–> 停止etcd–> 恢复数据–>启动etcd–>启动kube-apiserver

>  注意：备份etcd集群时，只需要备份一个etcd就行，恢复时，拿同一份备份数据恢复。

参考：

- [Etcd备份数据如何做到完美恢复Kubernetes中误删数据呢](https://kubesphere.com.cn/forum/d/3532-etcdkubernetes)