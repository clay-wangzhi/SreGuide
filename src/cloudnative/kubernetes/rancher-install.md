---
category: 云原生
tags:
  - Kubernetes
---

# Rancher 安装

添加 Helm Chart 仓库

```bash
helm repo add rancher-stable http://rancher-mirror.oss-cn-beijing.aliyuncs.com/server-charts/stable
```

为 Rancher 创建 Namespace

```bash
kubectl create namespace cattle-system
```

添加 TLS 密文

> 下载nginx使用的key和pem到服务器，并重命名为 tls.xxx
>
> 使用openssl把pem证书转换为crt
>
> ```bash
> openssl x509 -in  tls.pem -out tls.crt
> ```

```bash
kubectl -n cattle-system create secret tls tls-rancher-ingress   --cert=tls.crt   --key=tls.key
```

通过 helm 安装 rancher

```bash
helm -n cattle-system install rancher ./ --set hostname=rancher.xxx.xxx --set replicas=3 --set ingress.tls.source=secret
```

> rancher.xxx.xxx 为申请的域名

验证 Rancher Server 是否安成功

```bash
kubectl -n cattle-system rollout status deploy/rancher
```

保存使用选项

请保存您使用的全部`--set`选项。使用 Helm 升级 Rancher 到新版本时，您将需要使用相同的选项。

参考文章：

[Rnacher 高可用安装 | Rancher Doc](http://docs.rancher.cn/docs/rancher2/installation/install-rancher-on-k8s/_index)

[添加 TLS 密文 | Rancher Doc ](http://docs.rancher.cn/docs/rancher2.5/installation/resources/tls-secrets/_index/)

