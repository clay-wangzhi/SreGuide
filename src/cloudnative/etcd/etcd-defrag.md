---
category: 云原生
tags:
  - etcd
---

# ETCD 磁盘空间爆满解决方案

> etcd默认的空间配额限制为2G，超出空间配额限制就会影响服务，所以需要定期清理

## 查看集群状态

```bash
ETCDCTL_API=3 etcdctl --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key --endpoints=https://10.100.142.163:2379 --write-out=table endpoint status
```

查看ETCD集群报警情况

``` bash
ETCDCTL_API=3 etcdctl --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key --endpoints=https://10.100.142.163:2379 alarm list
```

输出为：

```shell
meberID:XXXXXXXXXXXXXXX alarm:NOSPACE
```

> 此处 `alarm` 提示 `NOSPACE`，需要升级 ETCD 集群的空间（默认为2G的磁盘使用空间），或者压缩老数据，升级空间后，需要使用 etcd命令，取消此报警信息，否则集群依旧无法使用

## 增加etcd的容量

修改 etcd.yaml 文件，由2G-->8G,增加以下三个参数

```shell
- --auto-compaction-mode=revision
- --auto-compaction-retention=1000
- --quota-backend-bytes=8589934592
```

> auto-compaction-mode=revision 按版本号压缩
>
> auto-compaction-retention=1000 保留近1000个revision，每5分钟自动压缩 ”latest revision” - 1000
>
> quota-backend-bytes 设置etcd最大容量为8G

## 压缩老数据

* 获取当前etcd数据的修订版本(revision)

```shell
rev=$(ETCDCTL_API=3 etcdctl  --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key --endpoints=https://10.100.142.163:2379 endpoint status --write-out="json" | egrep -o '"revision":[0-9]*' | egrep -o '[0-9].*')
echo $rev
```

- 整合压缩旧版本数据

```shell
ETCDCTL_API=3 etcdctl --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key --endpoints=https://10.100.142.163:2379 compact $rev
```

- 执行碎片整理

```shell
ETCDCTL_API=3 etcdctl --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key --endpoints=https://10.100.142.163:2379 defrag
```

## 解除告警

```shell
ETCDCTL_API=3 etcdctl --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key --endpoints=https://10.100.142.163:2379 alarm disarm
```

## 验证可以添加新数据

```shell
ETCDCTL_API=3 etcdctl --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key --endpoints=https://10.100.142.163:2379 put newkeytestfornospace 123
```

> :warning: auto compact只会压缩key space，不会释放物理存储空间。所以需要定期的执行defrag

