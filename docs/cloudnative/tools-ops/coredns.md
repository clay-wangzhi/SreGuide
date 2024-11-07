---
isOriginal: true
order: 5
category: 云原生
tag:
  - coredns
---

# CoreDNS 概述及运维实践

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/coredns-1.png)

## 概述

### 什么是 DNS ?

**域名系统**（英语：**D**omain **N**ame **S**ystem，缩写：**DNS**）是互联网的一项服务。它作为将**域名**和**IP地址**相互映射的一个分布式数据库，能够使人更方便地访问互联网。DNS使用TCP和UDP端口53。

DNS 不仅方便了人们访问不同的互联网服务，更为很多应用提供了，动态服务发现和全局负载均衡（Global Server Load Balance，GSLB）的机制。这样，DNS 就可以选择离用户最近的 IP 来提供服务。即使后端服务的 IP 地址发生变化，用户依然可以用相同域名来访问。

DNS 协议在 TCP/IP 栈中属于**应用层**，是一个典型的 客户端 - 服务器应用，客户端发起域名查询请求，服务端对请求进行应答。

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240428172825007.png)

### CoreDNS 介绍

CoreDNS是Kubernetes集群中负责DNS解析的组件，能够支持解析集群内部自定义服务域名和集群外部域名。CoreDNS具备丰富的插件集，在集群层面支持自建DNS、自定义hosts、CNAME、rewrite等需求。与Kubernetes一样，CoreDNS项目由[CNCF](https://cncf.io/)托管。

DNS 服务器支持正向查找（A 和 AAAA 记录）、端口发现（SRV 记录）、反向 IP 地址发现（PTR 记录）等。

如果 Pod 的 `dnsPolicy` 设置为 `default`，则它将从 Pod 运行所在节点继承名称解析配置。 Pod 的 DNS 解析行为应该与节点相同。

如果你不想这样做，或者想要为 Pod 使用其他 DNS 配置，则可以使用 kubelet 的 `--resolv-conf` 标志。

### Pod 的 DNS 策略

- **ClusterFirst**：这是默认的DNS策略，意味着当Pod需要进行域名解析时，首先会查询集群内部的CoreDNS服务。通过CoreDNS来做域名解析，表示Pod的/etc/resolv.conf文件被自动配置指向kube-dns服务地址。
- **None**：使用该策略，Kubernetes会忽略集群的DNS策略。需要您提供**dnsConfig**字段来指定DNS配置信息，否则Pod可能无法正确解析任何域名。
- **Default**：Pod直接继承集群节点的域名解析配置。
- **ClusterFirstWithHostNet**：强制在hostNetwork网络模式下使用ClusterFirst策略（默认使用Default策略）。

### Kubernetes集群中DNS域名解析原理（ClusterFirst 策略）

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/CAEQQRiBgICHx5qL9RgiIDIwYjgyM2QwNWIzMzRiNmZiYmUwM2VmZjE2NDAwNDQy3963382_20230830144006.372.svg)

1）业务Pod（Pod Client）试图访问Nginx服务（Service Nginx）时，先会请求本地DNS配置文件（/etc/resolv.conf）中指向的DNS服务器（nameserver 172.21.0.10，即Service kube-dns）获取服务IP地址，得到解析结果为172.21.0.30的IP地址。

2）业务Pod（Pod Client）再直接发起往该IP地址的请求，请求最终经过Nginx服务（Service Nginx）转发到达后端的Nginx容器（Pod Nginx-1和Pod Nginx-2）上。

## 运维实践

### CoreDNS ConfigMap 选项

CoreDNS 是模块化且可插拔的 DNS 服务器，每个插件都为 CoreDNS 添加了新功能。 可以通过维护 [Corefile](https://coredns.io/2017/07/23/corefile-explained/)，即 CoreDNS 配置文件， 来配置 CoreDNS 服务器。作为一个集群管理员，你可以修改 CoreDNS Corefile 的 [ConfigMap](https://kubernetes.io/zh-cn/docs/tasks/configure-pod-container/configure-pod-configmap/)， 以更改 DNS 服务发现针对该集群的工作方式。

在 Kubernetes 中，CoreDNS 安装时使用如下默认 Corefile 配置：

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns
  namespace: kube-system
data:
  Corefile: |
    .:53 {
        errors
        health {
            lameduck 5s
        }
        ready
        kubernetes cluster.local in-addr.arpa ip6.arpa {
            pods insecure
            fallthrough in-addr.arpa ip6.arpa
            ttl 30
        }
        prometheus :9153
        forward . /etc/resolv.conf
        cache 30
        loop
        reload
        loadbalance
    }
```

Corefile 配置包括以下 CoreDNS [插件](https://coredns.io/plugins/)：

- [errors](https://coredns.io/plugins/errors/)：错误记录到标准输出。

- [health](https://coredns.io/plugins/health/)：在 `http://localhost:8080/health` 处提供 CoreDNS 的健康报告。 在这个扩展语法中，`lameduck` 会使此进程不健康，等待 5 秒后进程被关闭。

- [ready](https://coredns.io/plugins/ready/)：在端口 8181 上提供的一个 HTTP 端点， 当所有能够表达自身就绪的插件都已就绪时，在此端点返回 200 OK。

- [kubernetes](https://coredns.io/plugins/kubernetes/)：CoreDNS 将基于服务和 Pod 的 IP 来应答 DNS 查询。 你可以在 CoreDNS 网站找到有关此插件的[更多细节](https://coredns.io/plugins/kubernetes/)。

  - 你可以使用 `ttl` 来定制响应的 TTL。默认值是 5 秒钟。TTL 的最小值可以是 0 秒钟， 最大值为 3600 秒。将 TTL 设置为 0 可以禁止对 DNS 记录进行缓存。

  - `pods insecure` 选项是为了与 kube-dns 向后兼容。
  - 你可以使用 `pods verified` 选项，该选项使得仅在相同名字空间中存在具有匹配 IP 的 Pod 时才返回 A 记录。
  - 如果你不使用 Pod 记录，则可以使用 `pods disabled` 选项。

- [prometheus](https://coredns.io/plugins/prometheus/)：CoreDNS 的度量指标值以 [Prometheus](https://prometheus.io/) 格式（也称为 OpenMetrics）在 `http://localhost:9153/metrics` 上提供。
- [forward](https://coredns.io/plugins/forward/): 不在 Kubernetes 集群域内的任何查询都将转发到预定义的解析器 (/etc/resolv.conf)。
- [cache](https://coredns.io/plugins/cache/)：启用前端缓存。
- [loop](https://coredns.io/plugins/loop/)：检测简单的转发环，如果发现死循环，则中止 CoreDNS 进程。
- [reload](https://coredns.io/plugins/reload)：允许自动重新加载已更改的 Corefile。 编辑 ConfigMap 配置后，请等待两分钟，以使更改生效。
- [loadbalance](https://coredns.io/plugins/loadbalance)：这是一个轮转式 DNS 负载均衡器， 它在应答中随机分配 A、AAAA 和 MX 记录的顺序。

你可以通过修改 ConfigMap 来更改默认的 CoreDNS 行为。

> 可选插件： 
>
> log：记录解析日志

### CoreDNS 服务端优化

**配置 Pod 打散**

```yaml
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
              - key: k8s-app
                operator: In
                values:
                - kube-dns
            topologyKey: kubernetes.io/hostname
```

**合理设置副本数**

1）80节点以下

副本数 = min ( max ( ceil (QPS/10000), ceil (集群节点数/8) ), 10 ) 

```bash
# 手动调整 CoreDNS 副本数
kubectl scale --replicas={target} deployment/coredns -n kube-system #{target} 目标副本数量
```

> 示例：
>
> 集群节点数为10，DNS 服务请求 QPS 为22000，则副本数为3。
>
> 集群节点数为30，DNS 服务请求 QPS 为15000，则副本数为4。



2）80节点以上，安装 NodeLocal DNSCache

```bash
# 下载 YAML 文件
wget https://raw.githubusercontent.com/kubernetes/kubernetes/master/cluster/addons/dns/nodelocaldns/nodelocaldns.yaml
# 修改变量
kubedns=`kubectl get svc kube-dns -n kube-system -o jsonpath={.spec.clusterIP}`
domain=`grep clusterDomain '/var/lib/kubelet/config.yaml' | awk  '{print $2}'`
localdns="169.254.20.10"
sed -i "s/__PILLAR__LOCAL__DNS__/$localdns/g; s/__PILLAR__DNS__DOMAIN__/$domain/g; s/,__PILLAR__DNS__SERVER__//g; s/__PILLAR__CLUSTER__DNS__/$kubedns/g" nodelocaldns.yaml
sed -i 's#registry.k8s.io/dns/k8s-dns-node-cache:1.22.28#registry.cn-hangzhou.aliyuncs.com/clay-wangzhi/registry.k8s.io.dns.k8s-dns-node-cache:1.22.28#g' nodelocaldns.yaml
# 安装
kubectl create -f nodelocaldns.yaml
# 修改 kubelet 重启
echo "sed -i "s/$kubedns/$localdns/g" /var/lib/kubelet/config.yaml"
# 在每台 Node 节点，使用上面命令的输出结果替换 dns ip , 然后重启
systemctl restart kubelet.service
```



### 客户端优化

在客户端，也可以做适当的优化配置，来提升 DNS 的使用体验。

1. **修改 ndots 值**

   默认情况下，Kubernetes 集群中的域名解析往往需要经过多次请求才能解析到。查看 pod 内 的  `/etc/resolv.conf`  可以知道  `ndots`  选项默认为 5。例如，在 debug 命名空间查询  `kubernetes.default.svc.cluster.local`  这个 service：

   域名中有 4 个  `.` ，小于 5，尝试拼接上第一个 search 进行查询，即`kubernetes.default.svc.cluster.local.debug.svc.cluster.local` ，查不到该域名。

   继续尝试  `kubernetes.default.svc.cluster.local.svc.cluster.local` ，查不到该域名。

   继续尝试  `kubernetes.default.svc.cluster.local.cluster.local` ，仍然查不到该域名。

   尝试不加后缀，即  `kubernetes.default.svc.cluster.local` ，查询成功，返回响应的 ClusterIP。

   上面一个简单的 service 域名解析需要经过 4 轮解析才能成功，集群中充斥着大量无用的 DNS 请求。因此需要根据业务配置的访问方式来为其设置合理的 ndots 来降低查询次数：

```yaml
spec:
  dnsConfig:
    options:
    - name: ndots
      value: "2"
```

2. **优化业务访问服务的域名配置**：

   Pod 访问本命名空间的 Service，使用 `<service-name>` 访问。

   Pod 访问其它命名空间的 Service，使用 `<service-name>.<namespace-name>` 访问。

   Pod 访问外部域名，使用 FQDN 类型域名访问，在域名最后添加 `.` 以减少无效搜索。

3. **修改 timeout、attempts**
   glibc 的 resolver 库访问一个 name server 的超时时间默认为5秒，针对 /etc/resolv.conf 中列出的一组 name server，默认最多尝试（attempts）2次，如 /etc/resolv.conf 中配置两个 name server，当所有 name server 都不可用时，总超时时间为20秒，然而，这对于许多业务来说过于保守。可以根据业务实际需要，为 Pod 设置合理的 DNS 超时配置，以降低超时时间，避免 DNS 服务短时不可用导致业务吞吐量的显著下降，以下是一个示例：

```yaml
spec:
  dnsConfig:
    options:
    - name: timeout
      value: "1"
    - name: attempts
      value: "2"
```

### CoreDNS 监控

用自带的监控大盘即可，重点关注 Requests (total)、Responses (by rcode)、Responses (duration) 这几个指标即可，进行容量扩容，或结合日志进一步问题定位。



参考链接：

维基百科：https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F

自定义 DNS 服务：https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/dns-custom-nameservers/

DNS概述：https://help.aliyun.com/zh/ack/ack-managed-and-ack-dedicated/user-guide/dns-overview

TKE DNS 最佳实践：https://cloud.tencent.com/document/product/457/78005

在 Kubernetes 集群中使用 NodeLocal DNSCache：https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/nodelocaldns/



我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/wiki  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容



<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240220180036567.png" alt="weixin" style="zoom: 50%;" />

