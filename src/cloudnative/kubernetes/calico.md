---
category: 云原生
tag:
  - Kubernetes
---

# Calico 安装配置

> 选择与k8s 兼容的最新版本

## 安装配置

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

参考：https://rainwu.cn/archives/calico-rr-guide