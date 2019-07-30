## 以二进制方式安装kubernetes集群

### 基础环境配置

- linux系统版本：centos7.6
- 配置：2核4G
- 主机数量：一台master，一台node
- 镜像：盛大私有云centos76_latest

#### 主机名解析(两台主机上操作)

```
cat <<EOF >>/etc/hosts
192.168.162.146 k8s-master
192.168.162.15 k8s-node
EOF
```

#### 关闭防火墙

```
systemctl stop iptables && systemctl disable iptables
```

#### 加载br_netfilter

```
modprobe br_netfilter
```

#### 内核参数调整

```
cat <<EOF >  /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sysctl -p /etc/sysctl.d/k8s.conf
```

#### 下载官方的软件包

github 地址：https://github.com/kubernetes/kubernetes/

这里我们下载二进制文件，这里我们选择了1.15.0的版本：

我们事先已经准备好了

* kubernetes-server-linux-amd64.tar.gz（Master节点部署）

```
cd /tmp/
scp 192.168.162.118:/tmp/kubernetes-server-linux-amd64.tar.gz .
```

将使用的二进制包解压后贝到执行目录即可

```
tar -xvf kubernetes-server-linux-amd64.tar.gz 
cd kubernetes/server/bin/
cp $(ls|egrep -v "*.tar|*_tag") /usr/bin/
mkdir /var/log/kubernetes
mkdir -p /etc/kubernetes/ssl
cat <<EOF >> /root/.bashrc
source <(kubectl completion bash)
source <(kubeadm completion bash)
EOF
source /root/.bashrc
```

* kubernetes-node-linux-amd64.tar.gz（Node节点部署）

```
cd /tmp/
scp 192.168.162.129:/tmp/kubernetes-node-linux-amd64.tar.gz .
```

将使用的二进制包解压后贝到执行目录即可

```
tar -xvf kubernetes-node-linux-amd64.tar.gz 
cd kubernetes/node/bin
cp kubectl kubelet  kube-proxy  /usr/bin/
mkdir /var/lib/kubelet
mkdir /var/log/kubernetes
mkdir -p /etc/kubernetes/ssl
```

### Master部署

#### etc服务

etcd服务是Kubernetes集群的核心数据库，在安装各个服务之前需要先安装启动。

github地址：https://github.com/coreos/etcd

只需添加二进制文件到环境变量即可，我们事先已经下载好了，版本为3.3.13

```
cd /usr/bin/
scp 192.168.162.118:/usr/bin/{etcd,etcdctl} .
```

编辑systemd管理文件：

```
cat <<EOF >>/usr/lib/systemd/system/etcd.service
[Unit]
Description=Etcd Server
After=network.target

[Service]
Type=simple
WorkingDirectory=/var/lib/etcd/
EnvironmentFile=-/etc/etcd/etcd.conf
ExecStart=/usr/bin/etcd

[Install]
WantedBy=multi-user.target
EOF
```

启动服务：

```
mkdir /var/lib/etcd
mkdir /etc/etcd
systemctl daemon-reload
systemctl enable etcd.service && systemctl start etcd.service 
systemctl status etcd
```

查看服务状态：

```
netstat -nplt|grep etcd
```

输出结果为：

tcp        0      0 127.0.0.1:2379          0.0.0.0:*               LISTEN      6730/etcd           
tcp        0      0 127.0.0.1:2380          0.0.0.0:*               LISTEN      6730/etcd  

```
etcdctl  cluster-health
```

输出结果为：

member 8e9e05c52164694d is healthy: got healthy result from http://localhost:2379

cluster is healthy

> etcd 会启用两个端口，其中2380 是集群的通信端口，2379是服务端口。如果是配置etcd集群，则要修改配置文件，设置监听IP和端口。

#### 安全设置，添加CA认证

配置kube-apiserver的CA证书和私钥文件

```
cd /etc/kubernetes/ssl/
openssl genrsa -out ca.key 2048
openssl req -x509 -new -nodes -key ca.key -subj "/CN=k8s-master" -days 5000 -out ca.crt
openssl genrsa -out server.key 2048
```

创建master_ssl.cnf文件

```
cat <<EOF >>master_ssl.cnf
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name
[req_distinguished_name]
[ v3_req ]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = kubernetes
DNS.2 = kubernetes.default
DNS.3 = kubernetes.default.svc
DNS.4 = kubernetes.default.svc.cluster.local
DNS.5 = k8s_master
IP.1 = 169.169.0.1
IP.2 = 192.168.162.146
EOF
```

> IP.1 为该虚拟服务的ClusterIP地址
>
> IP.2 为MasterIP地址

基于上述文件，创建server.csr和 server.crt文件

```
openssl req -new -key server.key -subj "/CN=k8s-master" -config master_ssl.cnf -out server.csr
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -days 5000 -extensions v3_req -extfile master_ssl.cnf -out server.crt
```

>  执行以上命令后会生成6个文件，ca.crt ca.key ca.srl server.crt server.csr server.key

设置kube-controller-manager相关证书

```
openssl genrsa -out cs_client.key 2048
openssl req -new -key cs_client.key -subj "/CN=k8s-master" -out cs_client.csr
openssl x509 -req -in cs_client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out cs_client.crt -days 5000
```

#### kube-apiserver服务

1. 编辑systemd的启动文件

```
# vim /usr/lib/systemd/system/kube-apiserver.service
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/kubernetes/kubernetes
After=network.target
After=etcd.service

[Service]
EnvironmentFile=/etc/kubernetes/apiserver
ExecStart=/usr/bin/kube-apiserver $KUBE_API_ARGS
Restart=on-failure
Type=notify
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

2. 配置参数文件

```
# vim /etc/kubernetes/apiserver
KUBE_API_ARGS="--etcd-servers=http://127.0.0.1:2379 \
  --bind-address=0.0.0.0 \
  --secure-port=6443 \
  --service-cluster-ip-range=169.169.0.0/16 \
  --service-node-port-range=1-65535 \
  --client-ca-file=/etc/kubernetes/ssl/ca.crt \
  --tls-private-key-file=/etc/kubernetes/ssl/server.key \
  --tls-cert-file=/etc/kubernetes/ssl/server.crt \
  --enable-admission-plugins=NamespaceLifecycle,LimitRanger,SecurityContextDeny,ServiceAccount,DefaultStorageClass,ResourceQuota \
  --logtostderr=false \
  --log-dir=/var/log/kubernetes \
  --v=2"
```

对启动参数说明如下：

* --etcd-servers：指定etcd服务的URL。
* --service-cluster-ip-range：Kubernetes集群中Servcies的虚拟IP的IP范围，这里可以自己定义，以CIDR格式表示，不能当前的宿主机网段重叠。
* --service-node-port-range：Kubernetes集群中Service可使用的物理机端口号范围，默认值为30000~32767。
* --logtostderr：设置为false表示将日志写入文件，不写入stderr。
* --log-dir：日志目录。
* --v：日志级别

3. 启动服务

```
systemctl daemon-reload 
systemctl enable kube-apiserver.service && systemctl start kube-apiserver.service
```

> kube-apiserver 默认会启动两个端口（8080和6443），其中，8080是各个组件之间通信的端口，在新的版本中已经很少使用，kube-apiserver所在的主机一般称为Master, 另一个端口6443是为HTTPS提供身份验证和授权的端口。

#### kube-controller-manager服务

1. 配置systemd的启动文件

```
# vim /usr/lib/systemd/system/kube-controller-manager.service
[Unit]
Description=Kubernetes Controller Manager 
Documentation=https://github.com/kubernetes/kubernetes
After=kube-apiserver.service
Requires=kube-apiserver.service

[Service]
EnvironmentFile=/etc/kubernetes/controller-manager
ExecStart=/usr/bin/kube-controller-manager $KUBE_CONTROLLER_MANAGER_ARGS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

2. 配置启动参数文件

```
# vim /etc/kubernetes/controller-manager
KUBE_CONTROLLER_MANAGER_ARGS="--kubeconfig=/etc/kubernetes/kubeconfig \
  --service-account-private-key-file=/etc/kubernetes/ssl/server.key \
  --root-ca-file=/etc/kubernetes/ssl/ca.crt \
  --logtostderr=false \
  --log-dir=/var/log/kubernetes \
  --v=2"
```

```
# vim /etc/kubernetes/kubeconfig
apiVersion: v1
kind: Config
users:
- name: controllermanager
  user:
    client-certificate: /etc/kubernetes/ssl/cs_client.crt
    client-key: /etc/kubernetes/ssl/cs_client.key
clusters:
- name: local
  cluster:
    certificate-authority: /etc/kubernetes/ssl/ca.crt
    server: http://192.168.162.118:6443
contexts:
- context:
    cluster: local
    user: controllermanager
  name: my-context
current-context: my-context
```

3. 启动服务

```
systemctl daemon-reload 
systemctl enable kube-controller-manager.service && systemctl start kube-controller-manager.service
```

> 此服务会启动一个10252的端口，一个10257端口

#### kube-scheduler服务

1. 配置systemd启动文件

```
# vim /usr/lib/systemd/system/kube-scheduler.service
[Unit]
Description=Kubernetes Controller Manager 
Documentation=https://github.com/kubernetes/kubernetes
After=kube-apiserver.service
Requires=kube-apiserver.service

[Service]
EnvironmentFile=/etc/kubernetes/scheduler
ExecStart=/usr/bin/kube-scheduler $KUBE_SCHEDULER_ARGS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

2. 配置参数文件

```
# vim /etc/kubernetes/scheduler
KUBE_SCHEDULER_ARGS="--kubeconfig=/etc/kubernetes/kubeconfig \
  --logtostderr=false \
  --log-dir=/var/log/kubernetes \
  --v=2"
```

3. 启动服务

```
systemctl daemon-reload 
systemctl enable kube-scheduler.service && systemctl start kube-scheduler.service
```

>  此服务会启动一个10251的端口，一个10259端口

### Node部署

#### 配置docker

1. 安装

```
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum -y install docker-ce docker-ce-cli containerd.io
```

2. 启动服务

```
systemctl daemon-reload
systemctl enable docker.service && systemctl start docker.service 
```

#### 创建kubelet证书

> 每台Node节点上都需要配置kubelet的客户端证书

复制Master上的ca.crt，ca.key到Node节点上的ssl目录，执行如下命令生成kubelet_client.crt和kubelet_client.csr文件

```
cd /etc/kubernetes/ssl/
scp k8s-master:/etc/kubernetes/ssl/ca.{crt,key} .
openssl genrsa -out kubelet_client.key 2048
openssl req -new -key kubelet_client.key -subj "/CN=k8s-node" -out kubelet_client.csr
openssl x509 -req -in kubelet_client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out kubelet_client.crt -days 5000
```

#### kubelet服务

1. 配置启动文件

```
# vim /usr/lib/systemd/system/kubelet.service
[Unit]
Description=Kubernetes Kubelet Server
Documentation=https://github.com/kubernetes/kubernetes
After=docker.service
Requires=docker.service

[Service]
WorkingDirectory=/var/lib/kubelet
EnvironmentFile=/etc/kubernetes/kubelet
ExecStart=/usr/bin/kubelet $KUBELET_ARGS
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

2. 配置参数文件

```
# vim /etc/kubernetes/kubelet
KUBELET_ARGS="--kubeconfig=/etc/kubernetes/kubeconfig \
  --hostname-override=k8s-node \
  --logtostderr=false \
  --log-dir=/var/log/kubernetes \
  --v=2"
```

参数说明：

* ---hostname-override：设置本Node的名称。

```
# vim /etc/kubernetes/kubeconfig
piVersion: v1
kind: Config
users:
- name: controllermanager
  user:
    client-certificate: /etc/kubernetes/ssl/kubelet_client.crt
    client-key: /etc/kubernetes/ssl/kubelet_client.key
clusters:
- name: local
  cluster:
    certificate-authority: /etc/kubernetes/ssl/ca.crt
    server: https://192.168.162.146:6443
contexts:
- context:
    cluster: local
    user: controllermanager
  name: my-context
current-context: my-context
```

3. 启动服务

```
systemctl daemon-reload
systemctl enable kubelet.service && systemctl start kubelet.service
```

> 此服务默认监听10248、10250、10255和一个随机端口

#### kube-proxy服务

1. 配置启动文件

```
# vim /usr/lib/systemd/system/kube-proxy.service
[Unit]
Description=Kubernetes Kube-Proxy Server
Documentation=https://github.com/kubernetes/kubernetes
After=network.service
Requires=network.service

[Service]
EnvironmentFile=/etc/kubernetes/proxy
ExecStart=/usr/bin/kube-proxy $KUBE_PROXY_ARGS  
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

2. 配置参数文件

```
# vim /etc/kubernetes/proxy
KUBE_PROXY_ARGS="--kubeconfig=/etc/kubernetes/kubeconfig \
  --logtostderr=false \
  --log-dir=/var/log/kubernetes \
  --v=2"
```

3. 启动服务

```
systemctl daemon-reload
systemctl enable kube-proxy.service && systemctl start kube-proxy.service 
```

> 此服务默认监控10249、10256端口

Kubernetes集群搭建完成