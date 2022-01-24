---
category: 云原生
tags:
  - Kubernetes
---

# 安装 kube-prometheus-stack

## Helm 安装配置

下载二进制文件

```bash
export helmversion=3.7.2
wget https://get.helm.sh/helm-v${helmversion}-linux-amd64.tar.gz
tar -xvf helm-v${helmversion}-linux-amd64.tar.gz
mv linux-amd64/helm /usr/bin/
```

设置补全命令

```bash
helm completion bash
# 将输出的文件拷贝到 ``/etc/bash_completion.d/helm.sh`` 文件中
source /etc/bash_completion.d/helm.sh
```

## Prometheus 安装配置

添加 helm repo

> 之前拉取的最新版本，kube-state-metrisc 的 target 没添加上去，所以用的  23.3.2

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

下拉压缩包

```bash
helm pull prometheus-community/kube-prometheus-stack --version 23.3.2
tar -xvf kube-prometheus-stack-23.3.2.tgz
```

为 prometheus 创建 Namespace

```bash
kubectl create namespace cattle-prometheus
```

新增 etcd secret

```
kubectl create secret generic etcd-certs -n cattle-prometheus --from-file=/etc/kubernetes/pki/etcd/ca.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.key
```

修改 kube-proxy 的configmap

> 将 metricsBindAddress 修改为  "0.0.0.0:10249"

```bash
kubectl -n kube-system edit configmaps kube-proxy
kubectl rollout restart ds kube-proxy -n kube-system
```

注释sha 校验

> prometheusOperator.admissionWebhooks.patch.image.sha

部署

```bash
helm install monitoring -n cattle-prometheus --set prometheusOperator.createCustomResource=false --set kubeEtcd.serviceMonitor.scheme=https --set kubeEtcd.serviceMonitor.caFile=/etc/prometheus/secrets/etcd-certs/ca.crt --set kubeEtcd.serviceMonitor.certFile=/etc/prometheus/secrets/etcd-certs/healthcheck-client.crt --set kubeEtcd.serviceMonitor.keyFile=/etc/prometheus/secrets/etcd-certs/healthcheck-client.key --set prometheus.prometheusSpec.secrets={etcd-certs} ./
```

如何官方镜像拉不下来，可以先从其他源，下载下来，然后改tag

* k8s.gcr.io/kube-state-metrics/kube-state-metrics:v2.2.4

* k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.0

参考链接

[**Prometheus定义指南之Operator**](https://baijiahao.baidu.com/s?id=1715822973549386399&wfr=spider&for=pc)