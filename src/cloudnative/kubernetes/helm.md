# Helm 安装使用

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

