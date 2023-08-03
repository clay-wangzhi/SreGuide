---
order: 3
category: 云原生
tag:
  - Kubernetes
---

# Helm 安装配置

## 安装

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

## 常用命令

```bash
# 将 helm charts 转换为 yaml 文件 apply
helm xxx xxx  --dry-run  | kubectl apply -f -
helm template xxx xxx --output-dir .
# helm 安装 charts 包时指定版本
helm install xxx --version=xxx
# 安装
helm install xxx ./ -n xxx
# 升级
helm upgrade xxx ./ -n xxx
```

