---
order: 10
category: 云原生
tag:
  - Kubernetes
---

# Rancher 安装配置

## 安装

添加 Helm Chart 仓库

```bash
helm repo add rancher-stable http://rancher-mirror.oss-cn-beijing.aliyuncs.com/server-charts/stable
```

为 Rancher 创建 Namespace

```bash
kubectl create namespace cattle-system
```

添加 TLS 密文

> 下载 nginx 使用的 key 和 pem 传到服务器，并重命名为 tls.xxx
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
helm pull rancher-stable/rancher --version 2.5.12
tar -xvf rancher-2.5.12.tgz
cd rancher/
# rancher.xxx.xxx 为申请的域名
helm -n cattle-system install rancher ./ --set hostname=rancher.xxx.xxx --set replicas=3 --set ingress.tls.source=secret
```

验证 Rancher Server 是否安成功

```bash
kubectl -n cattle-system rollout status deploy/rancher
```

保存使用选项

请保存您使用的全部`--set`选项。使用 Helm 升级 Rancher 到新版本时，您将需要使用相同的选项。

> :warning:
>
> 如果外层还有nginx，proxy_pass 协议用https
> 并加上 websocket 的一些参数
>
> ```tex
> proxy_set_header Host $host;
> proxy_set_header X-Real_IP $remote_addr;
> proxy_http_version 1.1;
> proxy_set_header Upgrade $http_upgrade;
> proxy_set_header Connection $http_connection;
> ```

## 小技巧

重置 rancher admin密码

```bash
kubectl exec -it rancher-xxxxxx-xxxx -n cattle-system -- reset-password
```

参考文章：

[Rnacher 高可用安装 | Rancher Doc](http://docs.rancher.cn/docs/rancher2/installation/install-rancher-on-k8s/_index)

[添加 TLS 密文 | Rancher Doc ](http://docs.rancher.cn/docs/rancher2.5/installation/resources/tls-secrets/_index/)

