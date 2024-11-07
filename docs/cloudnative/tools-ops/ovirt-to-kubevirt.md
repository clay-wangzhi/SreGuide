---
isOriginal: true
order: 7
category: 云原生
tag:
  - Kubernetes
---

# 将 oVirt 虚拟机迁移到 KubeVirt

上篇，我们 [从0开始装一套 KubeVirt 1.2.1](http://mp.weixin.qq.com/s?__biz=MzI4NzAxMjIzNw==&mid=2247484895&idx=1&sn=833c14f781e945bcaeac3175579b3fea&chksm=ebd5613ddca2e82bd7f0198735d7f082ea44883b236f62795d8b97c6becba8d1b20e211b1f35&scene=21#wechat_redirect)

本篇，我们将 oVirt 虚拟机迁移到 KubeVirt，分两步：

1.  oVirt 磁盘数据借助 CDI 导出
2. KubeVirt 使用 DataVolume 导入

## Ovirt 磁盘数据使用 CDI 导出

创建 `source` 为 `imageio` 的 `DataVolume` 对象，先创建依赖，`Secret` 认证信息、`tls-certs` 证书信息

`endpoint-secret.yaml` 内容如下：

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: endpoint-secret
  labels:
    app: containerized-data-importer
type: Opaque
data:
  accessKeyId: ""  # <optional: your key or user name, base64 encoded>
  secretKey:    "" # <optional: your secret or password, base64 encoded>
```

> 用户名、密码通过 base64 加密
>
> ```bash
> echo -n  "username"| base64
> echo -n  "password"| base64
> ```



`cert-configmap.yaml` 内容如下：

证书获取方式：

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240701192248980.png)

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: tls-certs
data:
  ca.pem: |
    -----BEGIN CERTIFICATE-----
    ... <base64 encoded cert> ...
    -----END CERTIFICATE-----
```



一般虚拟机上，有两块盘，系统盘和数据盘，先准备 `PV` ，再创建 `DataVolume`

`test-pv.yaml` 内容如下：

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: ovirt-test-sys
spec:
  capacity:
    storage: 90Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /data/ovirt-test-sys
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - sh1-st-int-k8s-ops-kubevirt-03

---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: ovirt-test-data
spec:
  capacity:
    storage: 12Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /data/ovirt-test-data
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - sh1-st-int-k8s-ops-kubevirt-03
```

> 为了测试，所以数据盘较小一些
>
> PV 中 spec.capacity.storage 要略大于 DataVolume 中的设置
>
> local  类型的 path  需要在宿主机上提前创建
>
> ```bash
> mkdir /data/ovirt-test-sys /data/ovirt-test-data
> ```



`test-dv.yaml`内容如下：

```yaml
apiVersion: cdi.kubevirt.io/v1beta1
kind: DataVolume
metadata:
  annotations:
    cdi.kubevirt.io/storage.bind.immediate.requested: ""
    cdi.kubevirt.io/storage.usePopulator: "false"
  name: "test-dv-sys"
spec:
  source:
      imageio:
         url: "https://xxx/ovirt-engine/api"
         secretRef: "endpoint-secret"
         certConfigMap: "tls-certs"
         diskId: "xxx"
  storage:
    accessModes:
    - ReadWriteOnce
    resources:
      requests:
        storage: 80Gi
    storageClassName: local-storage

---
apiVersion: cdi.kubevirt.io/v1beta1
kind: DataVolume
metadata:
  annotations:
    cdi.kubevirt.io/storage.bind.immediate.requested: ""
    cdi.kubevirt.io/storage.usePopulator: "false"
  name: "test-dv-data"
spec:
  source:
      imageio:
         url: "https://xxx/ovirt-engine/api"
         secretRef: "endpoint-secret"
         certConfigMap: "tls-certs"
         diskId: "xxx"
  storage:
    accessModes:
    - ReadWriteOnce
    resources:
      requests:
        storage: 10Gi
    storageClassName: local-storage
```



Apply

```bash
kubectl apply -f endpoint-secret.yaml
kubectl apply -f cert-configmap.yaml
kubectl  apply -f test-pv.yaml
kubectl  apply -f test-dv.yaml
```

> 由于 ovirt 域名做的本地 hosts 解析，所以要在 Coredns 上加上，域名对应的解析记录，见附录一
>
> 要迁移的虚拟机，需要关机，使用离线迁移方式，否则会报错
>
> Fault reason is "Operation Failed". Fault detail is "[Cannot transfer Virtual Disk. The disk xxx_Disk1 is plugged to non-Down VMs: ip-hostname]". HTTP response code is "409". HTTP response message is "409 Conflict".



查看导入状态

```bash
$ kubectl get datavolumes.cdi.kubevirt.io
NAME           PHASE       PROGRESS   RESTARTS   AGE
test-dv-data   Succeeded   100.0%                13m
test-dv-sys    Succeeded   100.0%                13m
```



## KubeVirt 使用 DataVolume 导入

创建 `VM`，`test-vm.yaml`内容如下

```yaml
apiVersion: kubevirt.io/v1
kind: VirtualMachine
metadata:
  labels:
    kubevirt.io/vm: ovirt-test
  name: ovirt-test
spec:
  running: false
  template:
    metadata:
      labels:
        kubevirt.io/vm: ovirt-test
      annotations:
        cni.projectcalico.org/ipAddrs: '["10.70.73.10"]'
    spec:
      domain:
        devices:
          disks:
          - disk:
              bus: virtio
            name: test-dv-sys
          - disk:
              bus: virtio
            name: test-dv-data
          interfaces:
          - name: default
            bridge: {}
        resources:
          requests:
            cpu: 4
            memory: 8Gi
      networks:
      - name: default
        pod: {}
      volumes:
      - dataVolume:
          name: test-dv-sys
        name: test-dv-sys
      - dataVolume:
          name: test-dv-data
        name: test-dv-data
```



创建、启动

```bash
kubectl  apply -f test-vm.yaml
virtctl start ovirt-test
```



连接服务查看系统是否正常

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240701200744420.png)



> 在创建 VM 的过程中，使用 virtctl console ovirt-test , 终端无反应，且 `VM IP` Ping 不同，然后安装了 VNC 排查解决了 cloud-init 问题，见附录二
>
> :warning: 需要数据落盘的，不要直接删除 VM，要先 STOP，在 DELETE



## 附录一：K8s 新增自定义解析

本集群使用 Coredns + NodeLocalDNS 方案

首先在 Coredns 上修改配置文件，然后重启

```bash
$ kubectl  -n kube-system edit cm coredns
        hosts {
            ovirt-ip ovirt-domain
            fallthrough
        }
$ kubectl  -n kube-system rollout restart deployment coredns        
```

然后在 NodeLocalDNS 上修改配置文件 ，然后重启

```bash
$ kubectl  -n kube-system edit cm nodelocaldns
# .53 下面的 forward 进行修改,此处为 CoreDNS 地址
        forward . {CoreDNS_SERVICE_IP}} {
            force_tcp
        }
$ kubectl -n kube-system rollout restart ds nodelocaldns        
```



## 附录二：安装 VNC 排查网络不通，VM 连不上

```bash
# Centos 安装可视化页面
yum groupinstall "GNOME Desktop"
systemctl set-default graphical.target
systemctl start graphical.target

# 安装 vnc
yum install -y tigervnc tigervnc-server

# vnc 进去排查
virtctl vnc ovirt-test

## 排查发现，网络依然是 oVirt 旧虚拟机的网络，默认 cloud-init 服务会重置网络为 DHCP ，分配 IP 才对，这里没有生效
## oVirt 虚拟机开机，发现停止且禁用了 cloud-init 服务，启动服务，关机，重启导入即可
```

根因：oVirt 虚拟机停止禁用了 cloud-init 服务。所以 oVirt 迁移前，需要先启动 cloud-init 服务



参考链接：

从 oVirt 导入：https://github.com/kubevirt/containerized-data-importer/blob/main/doc/datavolumes.md#image-io-data-volume





文章如有错误，欢迎业界专家指正

我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/SreGuide  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容



<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240615194414355.png" alt="weixin" style="zoom: 50%;" />