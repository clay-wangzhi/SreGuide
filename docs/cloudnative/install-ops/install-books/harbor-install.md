---
order: 6
category: 云原生
tag:
  - Kubernetes
---

# Harbor 安装配置

```bash
# 下载 helm charts
helm repo add harbor https://helm.goharbor.io
helm repo update
helm pull harbor/harbor --version=1.9.4
tar -xvf harbor-1.9.4.tgz

# 配置 tls secret
## 下载nginx使用的 key 和 pem 传到服务器，并重命名为 tls.xxx
## 使用 openssl 把 pem 证书转换为 crt
mkdir harbor-tls
cd harbor-tls/
openssl x509 -in  tls.pem -out tls.crt
kubectl create ns harbor
kubectl -n harbor create secret tls harbor-secret   --cert=tls.crt   --key=tls.key
```

修改 `charts values.yaml`

```bash
cd ../harbor/
cp values.yaml{,.bak}
```

主要修改如下位置：

```yaml
expose.tls.certSource: secret
expose.tls.secret.secretName: "harbor-secret"
expose.ingress.hsots.core: "xxx.xxx.xx"
externalURL: "xxx.xxx.xx"
ipFamily.ipv6.enabled: false # 关闭 ipv6
# 所有的 storageClass 改为 "longhorn",我本地使用的 longhorn 作为持久化存储
persistence.persistentVolumeClaim.registry.size: 500Gi # 变大
harborAdminPassword: "xxxxxxx" # 修改初始化密码
metrics.enabled: true # 暴露监控指标
metrics.serviceMonitor.enabled:  true # 添加 servicemonitor
metrics.serviceMonitor.additionalLabels: {"release": "monitoring"} 
```

安装

```bash
helm install harbor ./ -n harbor
```

查看 Prometheus 是否收到数据，查看 target

grafana 展示 harbor 数据，导入 14075

参考链接：

* [Deploying Harbor with High Availability via Helm](https://goharbor.io/docs/2.6.0/install-config/harbor-ha-helm/)