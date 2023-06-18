---
category: 云原生
tag:
  - etcd
---

# 评估 Etcd 性能及可靠性

## SLI & SLO

SLI（Service Level Indicator）：服务等级指标，其实就是我们选择哪些指标来衡量我们的稳定性。

SLO（Service Level Objective）：服务等级目标，指的就是我们设定的稳定性目标，比如“几个 9”这样的目标。

**SLO 是 SLI 要达成的目标，我们需要选择合适的 SLI，设定对应的 SLO。**

| SLI                                            | SLO                                        | 测试方式       |
| ---------------------------------------------- | ------------------------------------------ | -------------- |
| 吞吐量：衡量etcd每秒可以处理的请求数量         | 每秒处理40,000个读取请求和20,000个写入请求 | 官方 benchmark |
| 响应时间：衡量etcd对于读取和写入请求的响应时间 | 99%的读写请求在100毫秒以内完成             | 官方 benchmark |
| 可用性：衡量etcd服务的持续可用性               | 服务在任何给定的月份内可用性达到99.9%      | 故障演练       |

目前已有 SLI 指标的收集、监控、展示及告警

## 测试

### 使用 benchmark 测试延迟和吞吐量

#### 环境准备

**在 Linux 主机安装 Go 环境**

**下载解压**

```bash
wget https://golang.google.cn/dl/go1.19.10.linux-amd64.tar.gz
tar -C /usr/local -xzf  go1.19.10.linux-amd64.tar.gz
```

**配置到PATH环境变量**

在 `/etc/profile` 文件追加如下内容

```tex
export PATH=$PATH:/usr/local/go/bin
export GOPROXY=https://goproxy.cn
```

最后 source 生效

```bash
source /etc/profile
```

**安装 benchmark 工具**

clone 代码，安装 benchmark

```bash
git clone https://github.com/etcd-io/etcd.git --depth 1
cd etcd/
go install -v ./tools/benchmark
# 找到二进制文件位置
go list -f "{{.Target}}" ./tools/benchmark
```

#### 基准测试

查看帮助

```bash
cd /root/go/bin/
./benchmark -h
```

配置变量

```bash
ETCD_CA_CERT="/etc/kubernetes/pki/etcd/ca.crt"
ETCD_CERT="/etc/kubernetes/pki/etcd/server.crt"
ETCD_KEY="/etc/kubernetes/pki/etcd/server.key"
HOST_1=https://xxx.xxx.xxx.xxx:2379
HOST_2=https://xxx.xxx.xxx.xxx:2379
HOST_3=https://xxx.xxx.xxx.xxx:2379

# 提前写个测试 key
YOUR_KEY=foo
ETCDCTL_API=3 /usr/local/bin/etcdctl --endpoints=${HOST_1},${HOST_2},${HOST_3} --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" put $YOUR_KEY bar
```

**写测试**

```bash
# write to leader
./benchmark --endpoints=${HOST_2} --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" --target-leader --conns=1 --clients=1 \
     put --key-size=8 --sequential-keys --total=10000 --val-size=256
./benchmark --endpoints=${HOST_2} --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" --target-leader  --conns=100 --clients=1000 \
     put --key-size=8 --sequential-keys --total=100000 --val-size=256
     
# write to all members
./benchmark --endpoints=${HOST_1},${HOST_2},${HOST_3} --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" --conns=100 --clients=1000 \
    put --key-size=8 --sequential-keys --total=100000 --val-size=256
```



| Number of keys | Key size in bytes | Value size in bytes | Number of connections | Number of clients | Target etcd server | Average write QPS | 99% latency per request |
| -------------: | ----------------: | ------------------: | --------------------: | ----------------: | ------------------ | ----------------: | ----------------------: |
|         10,000 |                 8 |                 256 |                     1 |                 1 | leader only        |               154 |                  14.8ms |
|        100,000 |                 8 |                 256 |                   100 |              1000 | leader only        |            14,567 |                 134.4ms |
|        100,000 |                 8 |                 256 |                   100 |              1000 | all members        |            17,018 |                   117ms |



**读测试**

```bash
# Single connection read requests
./benchmark --endpoints=${HOST_1},${HOST_2},${HOST_3} --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" --conns=1 --clients=1 \
    range $YOUR_KEY --consistency=l --total=10000
./benchmark --endpoints=${HOST_1},${HOST_2},${HOST_3} --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" --conns=1 --clients=1 \
    range $YOUR_KEY --consistency=s --total=10000

# Many concurrent read requests
./benchmark --endpoints=${HOST_1},${HOST_2},${HOST_3} --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" --conns=100 --clients=1000 \
    range $YOUR_KEY --consistency=l --total=100000
./benchmark --endpoints=${HOST_1},${HOST_2},${HOST_3} --cacert="${ETCD_CA_CERT}" --cert="${ETCD_CERT}" --key="${ETCD_KEY}" --conns=100 --clients=1000 \
    range $YOUR_KEY --consistency=s --total=100000
```



| Number of requests | Key size in bytes | Value size in bytes | Number of connections | Number of clients | Consistency  | Average read QPS | 99% latency per request |
| -----------------: | ----------------: | ------------------: | --------------------: | ----------------: | ------------ | ---------------: | ----------------------: |
|             10,000 |                 8 |                 256 |                     1 |                 1 | Linearizable |              509 |                   7.3ms |
|             10,000 |                 8 |                 256 |                     1 |                 1 | Serializable |            1,709 |                   1.7ms |
|            100,000 |                 8 |                 256 |                   100 |              1000 | Linearizable |           29,326 |                 104.8ms |
|            100,000 |                 8 |                 256 |                   100 |              1000 | Serializable |           43,469 |                  98.9ms |

### 使用 FIO 测试磁盘性能

Etcd 对内存和 CPU 消耗并不高，足够就行。

一次 Etcd 请求的最小时间 = 成员节点之间的网络往返时延 + 收到数据之后进行持久化的时延。因此，Etcd 的性能主要受两方面的约束：

- 网络
- 磁盘

多节点的 Etcd 集群成员节点应该尽量部署在同一个数据中心，减少网络时延。同一数据中心内，不同节点的网络情况通常是非常好的，如果需要测试可以使用 `ping` 或 `tcpdump` 命令进行分析。

下面主要讨论硬盘 IO 测试方法。

存储性能能够满足 etcd 的性能要求，有两种方法测试：

存储性能能够满足 etcd 的性能要求，有两种方法测试：

1. 已运行的 etcd 集群，通过指标`etcd_disk_wal_fysnc_duration_seconds`来评估存储 I/O 性能， 该指标记录了 WAL 文件系统调用 fsync 的延迟分布，当 99% 样本的同步时间小于 10 毫秒就可以认为存储性能能够满足 etcd 的性能要求。

2. 是用 fio 命令，还原 etcd 使用场景，看99线
   ```bash
   mkdir test-data 
   fio --rw=write --ioengine=sync --fdatasync=1 --directory=test-data --size=22m --bs=2300 --name=mytest
   ```

   

### 故障演进测试可用性

通过[故障演练](disaster-drill)，发现3节点集群，在停止一个 etcd 节点的 etcd 进程后，其他 etcd 节点能够顺利接管其工作，确保 Kubernetes 集群的正常运行。

为了增强可用性，将集群节点由3节点扩充到5节点，最多允许2节点异常，仍可保障集群正常工作。

### 

## 优化方案

换 SSD 盘

给定较高的磁盘优先级

```sh
# best effort, highest priority
$ sudo ionice -c2 -n0 -p `pgrep etcd`
```



参考链接：

[etcd 官方文档-tunning](https://etcd.io/docs/v3.5/tuning/)

[etcd 官方文档-硬件要求](https://etcd.io/docs/v3.5/op-guide/hardware/)

[etcd 官方文档-benchmark](https://etcd.io/docs/v3.5/benchmarks/etcd-3-demo-benchmarks/)

[使用fio测试etcd是否满足要求](https://www.ibm.com/cloud/blog/using-fio-to-tell-whether-your-storage-is-fast-enough-for-etcd)