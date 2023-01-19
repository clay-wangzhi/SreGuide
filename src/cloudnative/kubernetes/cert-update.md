---
category: 云原生
tag:
  - Kubernetes
---

# 使用 kubeadm 手动更新证书

背景：K8S 各个组件需要与 api-server 进行通信，通信使用的证书都存放在 /etc/kubernetes/pki 路径下，kubeadm 生成的证书默认有效为 1 年，因此需要定时更新证书，否则证书到期会导致整个集群不可用。
      自动更新证书，Kubenetes 在升级控制面板相关组件时会主动更新证书，因此如果保证 Kubernetes 能够定期（一年以内）升级的话，证书会自动更新。

环境说明：k8s 1.18.10

以下步骤，在所有 master 节点执行

具体操作步骤
1）检查证书是否过期，以下两个命令均可

```bash
kubeadm alpha certs check-expiration
openssl x509 -in /etc/kubernetes/pki/apiserver.crt -noout -text |grep ' Not '
```

2）证书、配置文件等备份

```bash
cp -rp /etc/kubernetes /etc/kubernetes.bak
```

3）重新生成证书

```bash
kubeadm alpha certs renew all
```

4）重新生成配置文件

```bash
rm -f /etc/kubernetes/*.conf
kubeadm init phase kubeconfig all
```

5）重启 kubelet、apiserver、scheduler、controller-manager、etcd

```bash
systemctl restart kubelet
docker ps | egrep "k8s_kube-apiserver|k8s_kube-scheduler|k8s_kube-controller-manager|k8s_etcd" | awk '{print $1}' | xargs docker restart
```

6）更新 admin 配置

```bash
cp /etc/kubernetes/admin.conf ~/.kube/config
```

7）检查证书过期时间

```bash
kubeadm alpha certs check-expiration
```

> 如果重新生成过程中有错误，就把旧文件删除