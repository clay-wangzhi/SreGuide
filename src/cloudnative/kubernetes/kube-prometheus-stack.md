---
category: 云原生
tags:
  - Kubernetes
---

# 安装 kube-prometheus-stack

添加 helm repo

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

下拉压缩包

```bash
helm pull prometheus-community/kube-prometheus-stack
tar -xvf kube-prometheus-stack-27.2.0.tgz
```

新增 etcd secret

```
kubectl create secret generic etcd-certs -n cattle-prometheus --from-file=/etc/kubernetes/pki/etcd/ca.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.key
```

修改 kube-proxy 的configmap

> 将 metricsBindAddress 修改为  "0.0.0.0:10249"

```bash
kubectl -n kube-system edit configmaps kube-proxy
```

部署

```bash
helm install monitoring -n cattle-prometheus --set prometheusOperator.createCustomResource=false --set kubeEtcd.serviceMonitor.scheme=https --set kubeEtcd.serviceMonitor.caFile=/etc/prometheus/secrets/etcd-certs/ca.crt --set kubeEtcd.serviceMonitor.certFile=/etc/prometheus/secrets/etcd-certs/healthcheck-client.crt --set kubeEtcd.serviceMonitor.keyFile=/etc/prometheus/secrets/etcd-certs/healthcheck-client.key --set prometheus.prometheusSpec.secrets={etcd-certs} ./
```

参考链接

[Prometheus定义指南之Operator](https://baijiahao.baidu.com/s?id=1715822973549386399&wfr=spider&for=pc)

