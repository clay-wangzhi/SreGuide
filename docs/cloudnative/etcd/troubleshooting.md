---
order: 60
category: 云原生
tag:
  - etcd
---

# Etcd 故障排查

## Etcd 磁盘空间爆满解决方案

> etcd默认的空间配额限制为2G，超出空间配额限制就会影响服务，所以需要定期清理

设置环境变量

```bash
ETCD_CA_CERT="/etc/kubernetes/pki/etcd/ca.crt"
ETCD_CERT="/etc/kubernetes/pki/etcd/server.crt"
ETCD_KEY="/etc/kubernetes/pki/etcd/server.key"
HOST_1=https://xxx.xxx.xxx.xxx:2379
```



### 查看集群状态

```bash
ETCDCTL_API=3 etcdctl --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" \
  --endpoints="${HOST_1}" --write-out=table endpoint status
```

查看ETCD集群报警情况

``` bash
ETCDCTL_API=3 etcdctl --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" \
  --endpoints="${HOST_1}" alarm list
```

输出为：

```shell
meberID:XXXXXXXXXXXXXXX alarm:NOSPACE
```

> 此处 `alarm` 提示 `NOSPACE`，需要升级 ETCD 集群的空间（默认为2G的磁盘使用空间），或者压缩老数据，升级空间后，需要使用 etcd命令，取消此报警信息，否则集群依旧无法使用

### 解决方案一：增加etcd的容量

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

修改后重启

### 解决方案二：压缩老数据清理

#### 压缩老数据

* 获取当前etcd数据的修订版本(revision)

```shell
rev=$(ETCDCTL_API=3 etcdctl  --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" \
  --endpoints="${HOST_1}" endpoint status --write-out="json" | egrep -o '"revision":[0-9]*' | egrep -o '[0-9].*')
echo $rev
```

- 整合压缩旧版本数据

```shell
ETCDCTL_API=3 etcdctl --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" \
  --endpoints="${HOST_1}" compact $rev
```

- 执行碎片整理

```shell
ETCDCTL_API=3 etcdctl --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" \
  --endpoints="${HOST_1}" defrag
```

#### 解除告警

```shell
ETCDCTL_API=3 etcdctl --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" \
  --endpoints="${HOST_1}" alarm disarm
```

### 验证可以添加新数据

```shell
ETCDCTL_API=3 etcdctl --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" \
  --endpoints="${HOST_1}" put newkeytestfornospace 123
```

> :warning: auto compact只会压缩key space，不会释放物理存储空间。所以需要定期的执行defrag

