---
isOriginal: true
order: 6
category: 云原生
tag:
  - Kubernetes
---

# 从0开始装一套 KubeVirt 1.2.1

## KubeVirt 架构

**架构**

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/architecture.png)

- virt-api : 负责提供一些 KubeVirt 特有的 api，像是 console, vnc, startvm, stopvm 等。
- virt-controller : 管理和监控 VMI 对象及其关联的 Pod，对其状态进行更新。
- virt-hander : 以 DaemonSet 运行在每一个节点上，监听 VMI 的状态向上汇报，管理 VMI 的生命周期。
- virt-launcher : 以 Pod 方式运行，每个 VMI Object 都会对应一个 virt-launcher Pod，容器内有单独的 libvirtd，用于启动和管理虚拟机。



**网络和存储选型**

固定 IP 能力：网络需要支持具备固定 IP 的能力， 这里选用 Calico 

数据持久化：dataVolume、hostDisk、PVC ，这里选用 dataVolume，可以动态创建 PVC， 并将镜像填充进去

SC 选用 local-storage，性能最好，灾备首先磁盘 RAID 做了冗余，其次在应用层实现高可用灾备



## Kubernetes 安装

使用 kubespray 安装 K8s 1.28 集群（离线版）

搬运镜像和文件

> 没有条件的，可以跳过这步，使用国内 daocloud 站点

```bash
## 安装 skopeo
sudo apt-get -y update # Ubuntu Server 22.04 LTS 
sudo apt-get -y install skopeo
sudo apt-get -y install ansible
git clone https://github.com/kubernetes-sigs/kubespray.git -b v2.24.1 --depth 1
## 生成搬运列表
cd kubespray/contrib/offline
bash generate_list.sh
## 搬运镜像，注意 {IMAGE-REPO} 为镜像仓库地址，根据实际情况修改
skopeo login {IMAGE-REPO}
for image in $(cat temp/images.list); do skopeo copy docker://${image} docker://{IMAGE-REPO}/k8s/${image#*/}; done
## 搬运文件
wget -x -P temp/files -i temp/files.list
### 安装配置 Nginx， Centos7
yum -y install nginx
systemctl start nginx
#### nginx.conf 配置
        location / {
            root    /home/clay/kubespray/contrib/offline/temp/files;
            autoindex on;
            autoindex_exact_size off;
            autoindex_localtime on;
        }
```



安装前准备

```bash
# 挂盘、升 kernel、升操作系统、配置时间同步、参数调优等
```



下载 kubespray，修改配置文件

```bash
# 下载
git clone https://github.com/kubernetes-sigs/kubespray.git -b v2.24.1 --depth 1
cd kubespray

# 修改配置文件
cp -rfp inventory/sample inventory/kubevirt-test
## inventory/kubevirt-test/group_vars/k8s_cluster/k8s-cluster.yml 文件修改
### 开启审计日志
kubernetes_audit: true
### 自动重新生成证书
auto_renew_certificates: true
### 开启资源预留，注意，下面具体的参数也要打开 ## The following two items need to be set when kube_reserved is true
kube_reserved: true
system_reserved: true
### 修改 Pod 、 Service CIDR， 根据实际情况修改，不要冲突
kube_pods_subnet:
kube_service_addresses:

## inventory/kubevirt-test/group_vars/all/offline.yml 文件修改，注意 {IMAGE-REPO} 、{FILE-REPO}，根据实际情况修改
sed -i -E '/# .*\{\{ files_repo/s/^# //g' inventory/kubevirt-test/group_vars/all/offline.yml  # 命令需在 Linux 系统执行
tee -a inventory/kubevirt-test/group_vars/all/offline.yml <<EOF
gcr_image_repo: "{IMAGE-REPO}/k8s"
kube_image_repo: "{IMAGE-REPO}/k8s"
docker_image_repo: "{IMAGE-REPO}/k8s"
quay_image_repo: "{IMAGE-REPO}/k8s"
github_image_repo: "{IMAGE-REPO}/k8s"
files_repo: "{FILE-REPO}"
EOF

## inventory/kubevirt-test/group_vars/k8s_cluster/addons.yml 修改默认安装插件
helm_enabled: true
metrics_server_enabled: true
csi_snapshot_controller_enabled: true
ingress_nginx_enabled: true

## 修改主机列表，注意{HOSTNAME1},{IP1} {HOSTNAME2},{IP2} {HOSTNAME3},{IP3}，根据实际情况修改
pip3 install ruamel_yaml
declare -a IPS=({HOSTNAME1},{IP1} {HOSTNAME2},{IP2} {HOSTNAME3},{IP3})
CONFIG_FILE=inventory/kubevirt-test/hosts.yaml python3 contrib/inventory_builder/inventory.py ${IPS[@]}
```

 

新建集群

```bash
## 下拉封装好的镜像
docker pull quay.io/kubespray/kubespray:v2.24.1

## 启动
docker run --rm -it --mount type=bind,source="$(pwd)"/inventory,dst=/kubespray/inventory \
  --mount type=bind,source="${HOME}"/.ssh/id_rsa,dst=/root/.ssh/id_rsa \
  quay.io/kubespray/kubespray:v2.24.1 bash
  
## 执行 playbook
ansible-playbook -i inventory/kubevirt-test/hosts.yaml --private-key /root/.ssh/id_rsa cluster.yml
```





## KubeVirt 安装

KubeVirt 是 Kubernetes 的虚拟化附加组件，本指南假定已经安装了 Kubernetes 群集。

### Requirements

在开始之前需要满足一些要求

- Kubernetes 群集或衍生物（例如 OpenShift ），基于最新的三个 Kubernetes 发行版之一，该版本是在 KubeVirt 发布时发行的。
  - 这里 KubeVirt 最新版是 1.2.1 ，K8s 选择 1.28.6 
- Kubernetes apiserver 必须具有-allow-privileged = true，才能运行Kubevirt的特权守护程序。
- `kubectl`  客户端
- 推荐使用 containerd 或 crio (with runv) 容器运行时

### 验证硬件虚拟化支持

建议使用虚拟化支持的硬件。您可以使用 virt-host validate 来确保您的主机能够运行虚拟化工作负载：

```bash
# 安装 virt-host-validate 命令，centos7
yum install -y qemu-kvm libvirt virt-install bridge-utils
# 验证
virt-host-validate qemu
  QEMU: Checking for hardware virtualization                                 : PASS
  QEMU: Checking if device /dev/kvm exists                                   : PASS
  QEMU: Checking if device /dev/kvm is accessible                            : PASS
  QEMU: Checking if device /dev/vhost-net exists                             : PASS
  QEMU: Checking if device /dev/net/tun exists                               : PASS
...
```

### 在 Kubernetes 上安装 KubeVirt

```bash
# 指定为 v1.2.1 版本
export RELEASE=v1.2.1
# 下载 KubeVirt operator Yaml，并安装
wget https://github.com/kubevirt/kubevirt/releases/download/${RELEASE}/kubevirt-operator.yaml
kubectl apply -f kubevirt-operator.yaml
# 下载 KubeVirt CR， 创建 KubeVirt CR（实例部署请求），该 CR 触发实际安装
wget https://github.com/kubevirt/kubevirt/releases/download/${RELEASE}/kubevirt-cr.yaml
kubectl apply -f kubevirt-cr.yaml
# 等待所有 KubeVirt 组件都启动
kubectl -n kubevirt wait kv kubevirt --for condition=Available
# 下载 virtctl client
wget https://github.com/kubevirt/kubevirt/releases/download/${RELEASE}/virtctl-${RELEASE}-linux-amd64
mv virtctl-${RELEASE}-linux-amd64 /usr/local/bin/virtctl
chmod +x /usr/local/bin/virtctl
```

### Containerized Data Importer



CDI (Containerized Data Importer)项目提供了一些功能，可以通过 DataVolumes 将 pvc (Persistent Volume Claims) 用作 KubeVirt 虚拟机的磁盘。三个主要的CDI 用例是：

* 从 web 服务器或容器注册中心导入磁盘映像到 DataVolume
* 将现有的 PVC 克隆到数据卷
* 上传本地磁盘映像到数据卷



**安装 CDI**

```bash
# 指定 v1.59.0 版本
export VERSION=v1.59.0
# 下载 Yaml 并创建
wget https://github.com/kubevirt/containerized-data-importer/releases/download/$VERSION/cdi-operator.yaml
wget https://github.com/kubevirt/containerized-data-importer/releases/download/$VERSION/cdi-cr.yaml
kubectl create -f cdi-operator.yaml
kubectl create -f cdi-cr.yaml
```



## 配置启动 VM

vm 特性

* 需要数据持久化，重启不丢数据
* IP 固定不变



**配置 sc、pv、pvc** 

```yaml
# local-sc-and-pv.yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-storage
provisioner: kubernetes.io/no-provisioner
volumeBindingMode: WaitForFirstConsumer
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: centos-image
spec:
  capacity:
    storage: 90Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /data/centos-image
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
  name: centos-image-scratch
spec:
  capacity:
    storage: 90Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /data/centos-image-scratch
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - sh1-st-int-k8s-ops-kubevirt-03
```

```bash
kubectl  apply -f local-sc-and-pv.yaml
```



将压缩好的镜像放到内部 文件服务器中， {source_url} ，根据实际情况修改，然后部署 vm

```yaml
# vm.yaml
apiVersion: kubevirt.io/v1
kind: VirtualMachine
metadata:
  labels:
    kubevirt.io/vm: vm-centos-test
  name: vm-centos-test
spec:
  running: false
  template:
    metadata:
      labels:
        kubevirt.io/vm: vm-centos-test
      annotations:
        cni.projectcalico.org/ipAddrs: '["10.70.73.9"]'
    spec:
      domain:
        devices:
          disks:
          - disk:
              bus: virtio
            name: datavolumedisk1
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
          name: centos-dv
        name: datavolumedisk1
  dataVolumeTemplates:
  - metadata:
      name: centos-dv
    spec:
      storage:
        storageClassName: local-storage
        accessModes:
        - ReadWriteOnce
        resources:
          requests:
            storage: 80Gi
      source:
        http:
          url: {source_url}
```



```bash
# 部署 vm
kubectl  apply -f vm.yaml
# 启动 vm
virtctl start vm-centos-test
# 进入 vmi
virtctl console vm-centos-test
# 写文件，然后重启，然后数据持久化，和 IP 是否固定
virtctl restart vm-centos-test
```



> 踩坑：
>
> PVC  需要看镜像里面，实际的大小限制
>
> CPU、MEM 不能太小，不然启动不起来



Todo：

编写自动化工具实现

* 自动按需创建 local-pv
* 纳管 calico-ipam， 实现 静态 IP 固定和分发。



参考文档：

kubespray doc：https://github.com/kubernetes-sigs/kubespray/blob/master/docs/operations/mirror.md

kubespray 离线安装配置 | roc：https://imroc.cc/kubernetes/basics/deploy/kubespray/offline

Kubevirt doc：https://kubevirt.io/user-guide/architecture/

kubevirt doc：https://kubevirt.io/user-guide/cluster_admin/installation/

kubevirt doc：https://kubevirt.io/user-guide/storage/containerized_data_importer/

kubevirt k8s-support-matrix：https://github.com/kubevirt/sig-release/blob/main/releases/k8s-support-matrix.md





我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/wiki  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容



<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin.png" alt="weixin" style="zoom: 50%;" />

