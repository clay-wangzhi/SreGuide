---
category: 云原生
tags:
  - Kubernetes
---

# 通过备份 Etcd 来完美恢复 Kubernetes 中的误删数据

> 转载自：[Etcd备份数据如何做到完美恢复Kubernetes中误删数据呢](https://kubesphere.com.cn/forum/d/3532-etcdkubernetes)

误删或者机器宕机，会导致etcd数据的丢失或某个节点的etcd数据异常时，**请不要慌，认真看完此文，绝对有收获**。当误删时，如何恢复数据，这个操作需求在实际环境当中是不可避免的。以下描述删除两个namespace下的pod，如何恢复对应namespace的数据。

## 1 操作环境信息

3个（master、etcd）+1个node、新建1个namespace下且创建pod和default namespace下创建pod。

## 2 前提条件

误删除的数据已在etcd备份

## 3 数据环境的模拟

### 3.1 新建 test namespace，在该ns下创建pod，创建成功之后，此时这些数据已存在etcd中。

```sql
kubectl get pod -n test
NAME                              READY   STATUS    RESTARTS   AGE
details-v1-7d78fc5688-ntvtd       1/1     Running   0          12h
productpage-v1-844495cb4b-qn6l9   1/1     Running   0          12h
ratings-v1-55ccf46fb4-pwqw7       1/1     Running   0          12h
reviews-v1-68bb7b8c4f-h6vr9       1/1     Running   0          12h
```

### 3.2 在default namespace 创建pod，如下所示，创建成功之后，此时这些数据已存在etcd中

```sql
kubectl get pod
NAME                      READY   STATUS    RESTARTS   AGE
nginx-6db489d4b7-jdfkw    1/1     Running   0          12h
nginx1-675bf6c9f-jndrx    1/1     Running   0          12h
nginx2-6dfc958b55-vgsc4   1/1     Running   0          12h
nginx3-8f65b44f9-2pk4l    1/1     Running   0          12h
nginx4-9bb966479-svhs6    1/1     Running   0          12h
nginx5-7d4d998c6c-7xlp8   1/1     Running   0          12h
nginx6-79444687cf-rc8vk   1/1     Running   0          12h
```

### 3.3 在某目录下已存放包含上述产生数据的etcd快照

```sql
ls
member  snapshot.db
```

## 4 模拟数据的删除

default和test namespace下pod都被干掉

```csharp
kubectl get pod
No resources found in default namespace.
[root@node1 etcd-2021-01-19_02:00:01]# kubectl get pod -n test
No resources found in test namespace.
```

## 5 数据的恢复

### 5.1 准备工作

停止所有master上kube-apiserver服务，因为和etcd交互是kube-apiserver。此步骤不会影响正常运行的pod。

#### 5.1.1 所有master机器上操作如下指令,将kube-apiserver.yaml文件移除当前目录下，作用是停止kube-apiserver服务

```undefined
mv /etc/kubernetes/manifests/kube-apiserver.yaml .
```

#### 5.1.2 检查kube-apiserver服务已停止

```perl
kubectl get pod -n kube-system | grep kube-apiserver
Unable to connect to the server: EOF
```

#### 5.1.3 所有etcd机器上，停止etcd运行，此步操作不会影响现有的pod，只是不能新建、删除pod。

```vbnet
systemctl stop etcd
```

#### 5.1.4 查看etcd服务是否已停止

```java
docker ps -a | grep etcd
18dfbbfb8317   kubesphere/etcd:v3.3.12            "/usr/local/bin/etcd"    15 hours ago   Exited (0) 45 seconds ago             etcd3
```

#### 5.1.5 移除所有etcd存储目录下数据，不同环境下，存储目录可能不一样，可以通过systemctl status etcd查看etcd 配置参数。

```csharp
mv /var/lib/etcd /var/lib/etcd.bak
```

#### 5.1.6 将node1机器上的快照snapshot.db分别拷贝到另外两台etcd机器上。

```ruby
scp snapshot.db 192.168.0.26:/root


scp snapshot.db 192.168.0.28:/root
```

### 5.2 恢复备份

不同环境下，目录可能不一样，可以通过systemctl status etcd查看etcd 配置参数。特别需要注意name、initial-cluster、initial-cluster-token、initial-advertise-peer-urls和data-dir参数的值。

#### 5.2.1 在第一台etcd节点上，注意需要ETCDCTL_API=3、name值、ip值、snapshot.db文件目录和data-dir目录。

```javascript
export ETCDCTL_API=3 
一条指令，可以直接在终端上修改里面参数
etcdctl snapshot restore snapshot.db --name etcd1 --initial-cluster "etcd1=https://192.168.0.25:2380,etcd2=https://192.168.0.26:2380,etcd3=https://192.168.0.28:2380" --initial-cluster-token k8s_etcd --initial-advertise-peer-urls https://192.168.0.25:2380 --data-dir=/var/lib/etcd
和上面指令一样作用，把长的指令以换行形式展现
etcdctl snapshot restore snapshot.db --name etcd1 \
--initial-cluster "etcd1=https://192.168.0.25:2380,etcd2=https://192.168.0.26:2380,etcd3=https://192.168.0.28:2380" \
--initial-cluster-token k8s_etcd \
--initial-advertise-peer-urls https://192.168.0.25:2380 \
--data-dir=/var/lib/etcd

2021-01-19 11:17:06.773113 I | mvcc: restore compact to 96139
2021-01-19 11:17:06.800086 I | etcdserver/membership: added member 7370b1d3dc967c [https://192.168.0.25:2380] to cluster e4d7f96e88cc9d71
2021-01-19 11:17:06.800159 I | etcdserver/membership: added member 2ef3cfc4ca48ad38 [https://192.168.0.26:2380] to cluster e4d7f96e88cc9d71
2021-01-19 11:17:06.800190 I | etcdserver/membership: added member 3a0c86c4c744477c [https://192.168.0.28:2380] to cluster e4d7f96e88cc9d71
```

#### 5.2.2 第二台和第三台etcd恢复数据，同样需要改变ETCDCTL_API=3、name值、ip值、snapshot.db文件目录和data-dir目录。

```javascript
export ETCDCTL_API=3
一条指令，可以直接在终端上修改里面参数
etcdctl snapshot restore snapshot.db --name etcd2 --initial-cluster "etcd1=https://192.168.0.25:2380,etcd2=https://192.168.0.26:2380,etcd3=https://192.168.0.28:2380" --initial-cluster-token k8s_etcd --initial-advertise-peer-urls https://192.168.0.26:2380 --data-dir=/var/lib/etcd
和上面指令一样作用，把长的指令以换行形式展现
etcdctl snapshot restore snapshot.db --name etcd2 \
--initial-cluster "etcd1=https://192.168.0.25:2380,etcd2=https://192.168.0.26:2380,etcd3=https://192.168.0.28:2380" \
--initial-cluster-token k8s_etcd \
--initial-advertise-peer-urls https://192.168.0.26:2380 \
--data-dir=/var/lib/etcd

2021-01-19 11:19:59.857363 I | mvcc: restore compact to 96139
2021-01-19 11:19:59.873793 I | etcdserver/membership: added member 7370b1d3dc967c [https://192.168.0.25:2380] to cluster e4d7f96e88cc9d71
2021-01-19 11:19:59.873837 I | etcdserver/membership: added member 2ef3cfc4ca48ad38 [https://192.168.0.26:2380] to cluster e4d7f96e88cc9d71
2021-01-19 11:19:59.873852 I | etcdserver/membership: added member 3a0c86c4c744477c [https://192.168.0.28:2380] to cluster e4d7f96e88cc9d71

export ETCDCTL_API=3
一条指令，可以直接在终端上修改里面参数
etcdctl snapshot restore snapshot.db --name etcd3 --initial-cluster "etcd1=https://192.168.0.25:2380,etcd2=https://192.168.0.26:2380,etcd3=https://192.168.0.28:2380" --initial-cluster-token k8s_etcd --initial-advertise-peer-urls https://192.168.0.28:2380 --data-dir=/var/lib/etcd
和上面指令一样作用，把长的指令以换行形式展现
etcdctl snapshot restore snapshot.db --name etcd3 \
--initial-cluster "etcd1=https://192.168.0.25:2380,etcd2=https://192.168.0.26:2380,etcd3=https://192.168.0.28:2380" \
--initial-cluster-token k8s_etcd \
--initial-advertise-peer-urls https://192.168.0.28:2380 \
--data-dir=/var/lib/etcd

2021-01-19 11:22:21.423215 I | mvcc: restore compact to 96139
2021-01-19 11:22:21.438319 I | etcdserver/membership: added member 7370b1d3dc967c [https://192.168.0.25:2380] to cluster e4d7f96e88cc9d71
2021-01-19 11:22:21.438357 I | etcdserver/membership: added member 2ef3cfc4ca48ad38 [https://192.168.0.26:2380] to cluster e4d7f96e88cc9d71
2021-01-19 11:22:21.438371 I | etcdserver/membership: added member 3a0c86c4c744477c [https://192.168.0.28:2380] to cluster e4d7f96e88cc9d71
```

#### 5.2.3 上面三台etcd启动

```sql
systemctl start etcd
```

#### 5.2.4 检查etcd集群状态，注意：如果有证书，需要加上证书；在哪台etcd机器执行，注意找到对应的证书文件及最后面加endpoint health字样。

```javascript
一条指令，可以直接在终端上修改里面参数
etcdctl --cacert=/etc/ssl/etcd/ssl/ca.pem --cert=/etc/ssl/etcd/ssl/node-node3.pem --key=/etc/ssl/etcd/ssl/node-node3-key.pem --endpoints=https://192.168.0.25:2379,https://192.168.0.26:2379,https://192.168.0.28:2379 endpoint health
和上面指令一样作用，把长的指令以换行形式展现
etcdctl --cacert=/etc/ssl/etcd/ssl/ca.pem \
--cert=/etc/ssl/etcd/ssl/node-node3.pem \
--key=/etc/ssl/etcd/ssl/node-node3-key.pem \
--endpoints=https://192.168.0.25:2379,https://192.168.0.26:2379,https://192.168.0.28:2379 \
endpoint health

https://192.168.0.28:2379 is healthy: successfully committed proposal: took = 11.664519ms
https://192.168.0.26:2379 is healthy: successfully committed proposal: took = 5.04665ms
https://192.168.0.25:2379 is healthy: successfully committed proposal: took = 1.837265ms
```

#### 5.2.5 三台etcd全部正常，分别到每台master启动kube-apiserver

```undefined
mv /root/kube-apiserver.yaml /etc/kubernetes/manifests/
```

#### 5.2.6 检查kubernetes集群和创建的pod是否恢复正常，包括etcd服务、kube-apiserver服务及对应ns下删除的pod。

```sql
kubectl get pod -n kube-system | grep kube-apiserver
kube-apiserver-node1                           1/1     Running   0          16h
kube-apiserver-node2                           1/1     Running   0          16h
kube-apiserver-node3                           1/1     Running   0          16h
[root@node1 ssl]# docker ps -a | grep etcd
156b19a72bf0   kubesphere/etcd:v3.3.12      "/usr/local/bin/etcd"    15 minutes ago   Up 15 minutes                           etcd1


kubectl get pod
NAME                      READY   STATUS              RESTARTS   AGE
nginx-6db489d4b7-jdfkw    1/1     Running             0          13h
nginx1-675bf6c9f-jndrx    1/1     Running             0          13h
nginx2-6dfc958b55-vgsc4   1/1     Running             0          13h
nginx3-8f65b44f9-2pk4l    1/1     Running             0          13h
nginx4-9bb966479-svhs6    1/1     Running             0          13h
nginx5-7d4d998c6c-7xlp8   0/1     ContainerCreating   0          13h
nginx6-79444687cf-rc8vk   1/1     Running             0          13h
[root@node1 ssl]# kubectl get pod -n test
NAME                              READY   STATUS    RESTARTS   AGE
details-v1-7d78fc5688-ntvtd       1/1     Running   0          13h
productpage-v1-844495cb4b-qn6l9   1/1     Running   0          13h
ratings-v1-55ccf46fb4-pwqw7       1/1     Running   0          13h
reviews-v1-68bb7b8c4f-h6vr9       1/1     Running   0          13h
```

## 6 总结

Kubernetes 集群备份主要是备份etcd集群。而恢复时，主要考虑恢复整个顺序：

停止Kube-apiserver–> 停止etcd–> 恢复数据–>启动etcd–>启动kube-apiserver

注意：备份etcd集群时，只需要备份一个etcd就行，恢复时，拿同一份备份数据恢复。