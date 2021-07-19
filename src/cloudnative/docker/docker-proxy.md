---
category: 云原生
tags:
  - Docker
---

# Docker 设置代理

> 起因：由于有些国外的镜像拉取不下来，所以设置翻墙代理，下载成功后，再导出`docker save xx:tar -o xx.tar`，传输到需要的节点导入`docker load -i xx.tar`

```shell
## 先停止Docker
systemctl stop docker

## 修改Docker配置文件
vim /lib/systemd/system/docker.service
## 在 [Service] 节点下面新增代理信息
[Service]
......
Environment="HTTP_PROXY=socks5://192.168.66.76:20080/" "HTTPS_PROXY=socks5://192.168.66.76:20080/"

## 重新加载Docker并启动 
systemctl daemon-reload
systemctl restart docker
```

> 其中 socks5 中的地址，是我本地启动的代理服务地址

参考链接：

[Docker设置代理](https://www.cnblogs.com/HeCG95/p/12221683.html)

