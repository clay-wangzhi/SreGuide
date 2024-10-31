---
order: 2
category: 云原生
tag:
  - Kubernetes
---

# Calico 安装配置

## 架构

简单说一下 Calico 架构，Calico 是一个基于三层的数据中心网络方案，可作为 CNI 插件为运行于 Kubernetes 中的容器提供基于 TCP/IP 三层的网络通信方案，也可与 OpenStack 这种 IaaS 云架构集成，利用 BGP，IPIP 等协议为工作负载提供网络联通功能，能够提供高效可控的 VM、容器、物理机之间的通信。

![图片](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640.jpeg)

Calico的核心组件包括：

*  Felix，Calico Agent，运行在每个容器宿主节点上，主要负责配置路由、ACL等信息来确保容器的联通状态；
*  Etcd ，分布式的 Key/Value 存储，负责网络元数据一致性，确保 Calico 网络状态的准确性；
* BGP Client(Bird) ，主要把 Felix 写入 Kernel 的路由信息分发到 Calico 网络，保证容器间的通信有效性；
* BGP Route Reflector (简称：RR )，路由反射器，默认 Calico 工作在 node-mesh 模式，所有节点互相连接， node-mesh 模式在小规模部署时工作是没有问题的，当大规模部署时，连接数会非常大，消耗过多资源，利用 BGP RR ，可以避免这种情况的发生，通过一个或者多个 BGP RR 来完成集中式的路由分发，减少对网络资源的消耗以及提高 Calico 工作效率、稳定性。

其中名词概念：

* Endpoint ：接入到Calico网络中的网卡称为Endpoint (这里即POD)
* AS ：网络自治系统，通过BGP协议与其它的AS交换路由信息 (自治网络拥有独立交换机、路由器等，可独立运转)
* IBGP：AS内部的BGP_Speaker，与相同AS的ibgp、ebgp交换路由信息
* EBGP：AS边界的BGP_Speaker，与相同AS的ibgp、以及不同AS的ebgp交换路由信息
* BGP：端口 179，BIRD 建立TCP/179的连接

> Bird 相关配置：[BIRD 与 BGP 的新手开场](https://soha.moe/post/bird-bgp-kickstart.html)

## 网络模式

### vxlan

略，不走bgp

### IPIP

也走 bgp

IPIP 需要内核模块 ipip.ko 使用命令查看内核是否加载IPIP模块lsmod | grep ipip ；使用命令modprobe ipip 加载

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/436EF78A6A0877DE5732F186CE1406A9.jpg)

### BGP

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/F94A48ADC2A1721363C79FB990B94A85.jpg)

## 安装配置

>  选择与k8s 兼容的最新版本

1）下载 yaml 文件

```bash
curl https://docs.projectcalico.org/archive/v3.18/manifests/calico.yaml -O
```

2）修改 yaml 文件

- 修改镜像地址为 内部仓库地址
  ```bash
  sed -i 's/docker.io/xxx.xxx.xxx/g' calico.yaml
  ```

- CALICO_IPV4POOL_CIDR 参数 为 实际 POD 的CIDR

- 在 value: "autodetect 后新增以下两行参数

  ```yaml
  - name: IP_AUTODETECTION_METHOD
    value: "interface=bond4,eth0"
  ```

3）apply yaml 文件进行安装

```bash
kubectl apply -f calico.yaml
```

4）生产 yaml 文件

`bgpconfig.yaml`, 关闭 fullmesh，LOCAL_AS、service cidr 根据实际情况修改

```yaml
apiVersion: projectcalico.org/v3
kind: BGPConfiguration
metadata:
  name: default
spec:
  logSeverityScreen: Info
  nodeToNodeMeshEnabled: false
  asNumber: {{ LOCAL_AS }}
  serviceClusterIPs:
  - cidr: xx.xx.xx.xx/xx
```

`peer.yaml`,建立全局 bgppeer，和交互机建联，tor模式，PEER_IP，AS_NUMBER 根据实际情况修改

```yaml
apiVersion: projectcalico.org/v3
kind: BGPPeer
metadata:
  name: peer
spec:
  peerIP: {{ PEER_IP }}
  asNumber: {{ AS_NUMBER }}
```

`calico-nat`，指定 ippool，kube_pods_subnet  为 pod 的 CIDR

```yaml
apiVersion: projectcalico.org/v3
kind: IPPool
metadata:
 name: default-ipv4-ippool
spec:
  cidr: {{ kube_pods_subnet }}
  natOutgoing: false
```

5） 下载 calicoctl 二进制文件

```bash
curl -L https://github.com/projectcalico/calicoctl/releases/download/v3.18.6/calicoctl -o /usr/bin/calicoctl
chmod +x /usr/bin/calicoctl
```

6） 生成 calicoclt 的配置文件

```bash
mkdir -p /etc/calico/
```

vim /etc/calico/calicoctl.cfg

```
apiVersion: projectcalico.org/v3
kind: CalicoAPIConfig
metadata:
spec:
  datastoreType: "kubernetes"
  kubeconfig: "/root/.kube/config"
```

7）calicoctl apply 一些规则

```bash
calicoctl apply -f bgpconfig.yaml && calicoctl apply -f peer.yaml && calicoctl apply -f calico-nat.yaml
```

## 版本升级

升级官方文档：[Upgrade Calico on k8s](https://projectcalico.docs.tigera.io/archive/v3.18/maintenance/kubernetes-upgrade)

总共分三步，备份，下载新的yaml文件和calicoctl 二进制文件，按原来的安装方式进行修改，最后 apply 进行升级

tips：calico-node 可能会缺少权限，根据报错添加权限即可

## 监控

开启监控

```bash
calicoctl patch felixconfiguration default  --patch '{"spec":{"prometheusMetricsEnabled": true}}'
calicoctl get felixConfiguration default -o yaml
```

新增 service 和 servicemonitor 用于 监控发现 `servicemonitor.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  name: felix-metrics-svc
  namespace: kube-system
  labels:
    k8s-app: calico
spec:
  clusterIP: None
  selector:
    k8s-app: calico-node
  ports:
  - name: calico-metrics
    port: 9091
    targetPort: 9091
    protocol: TCP

---
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: calico-prometheus-servicemonitor
  namespace: kube-system
  labels:
    name: calico-prometheus-servicemonitor
    release: monitoring
spec:
  selector:
    matchLabels:
      k8s-app: calico
  namespaceSelector:
    matchNames:
    - kube-system
  endpoints:
  - port: calico-metrics
```

apply

```bash
kubectl apply -f servicemonitor.yaml
```

最后 grafana dashboard 进行导入即可

## TOR 模式 改为 RR 路由反射模式

减少交换机压力

删除旧的 BGPPeer  ，建立新的 bgppeer 即可，拿一台 node 节点 和所有其他 node 建联，然后 这台 node 再和交互机建联即可

Node 跨网段时，调整 IPIP 封装策略为 `CrossSubnet`， 设置后发现 跨网段的node 中pod 到master 不通，ipip又改为 Never了

> :warning: 同一组 rr  设置相同的 routeReflectorClusterID，要手动修改
>
> tips: nat 和 ipip mode 的改变，最终生效 再  calicoctl get ippools  、可以kubectl edit ippools.crd.projectcalico.org

参考：https://rainwu.cn/archives/calico-rr-guide

## 注意事项

**路由黑洞问题**

要解决路由黑洞问题问题，首先，除了对整个Calico 的IP Pool总量进行监控外，还需要对可用的IP Block进行监控，确保不会出现IP Block不够分的情况，或者或者IP地址Block借用的情况；





## 常用命令

```bash
# 获取 每个 node 的cidr
kubectl get blockaffinity
# 查看某个 Pod IP 的使用信息
calicoctl ipam show --ip=$(ip_addr)
# 查看 FREE IPS 数
calicoctl ipam show
# 释放 Pod IP
calicoctl ipam release --ip=$(ip_addr)
```





带宽限制

带宽限速，目前版本calico默认支持 

# 通过对Pod的流量的控制，避免某个应用Pod占用过多资源导致影响宿主机或者其他业务。

`/etc/cni/net.d/10-calico.conflist`  配置中有，如下字段

```tex
    {
      "type": "bandwidth",
      "capabilities": {"bandwidth": true}
    }
```

`/opt/cni/bin/bandwidth`  二进制文件存在

`deployment  yaml ` 文件新增如下注解：spec.template

```yaml
      annotations:
        kubernetes.io/ingress-bandwidth: 10M
        kubernetes.io/egress-bandwidth: 10M
```



问题排查

```bash
Node CPU使用率突增，网络流量突增，拿到网卡名称，route -n | grep 网卡名称
```





ToDo
高级功能：带宽限制、固定IP、+  插件固定IP组





