---
category: 云原生
tags:
  - Kubernetes
---

# 使用 Helm 和 Operator 快速部署 Prometheus

随着`heapster`项目停止更新并慢慢被`metrics-server`取代，集群监控这项任务也将最终转移。`prometheus`的监控理念、数据结构设计其实相当精简，包括其非常灵活的查询语言；但是对于初学者来说，想要在k8s集群中实践搭建一套相对可用的部署却比较麻烦，由此还产生了不少专门的项目（如：[prometheus-operator](https://github.com/coreos/prometheus-operator)）。

`Helm`致力于成为k8s集群的应用包管理工具，希望像linux 系统的`RPM` `DPKG`那样成功；确实在k8s上部署复杂一点的应用很麻烦，需要管理很多yaml文件（configmap,controller,service,rbac,pv,pvc等等），而helm能够整齐管理这些文档：版本控制，参数化安装，方便的打包与分享等。

* 建议积累一定k8s经验以后再去使用helm；对于初学者来说手工去配置那些yaml文件对于快速学习k8s的设计理念和运行原理非常有帮助，而不是直接去使用helm，面对又一层封装与复杂度。

Operator 用于管理 Kubernetes 的有状态分布式应用。

## 安装 Helm

在官方repo下载[release版本](https://github.com/helm/helm/releases)中自带的二进制文件即可（以Linux amd64为例）

```shell
wget https://get.helm.sh/helm-v3.6.1-linux-amd64.tar.gz
tar -xvf helm-v3.6.1-linux-amd64.tar.gz 
mv ./linux-amd64/helm /usr/bin
```

* 启用官方 charts 仓库

```shell
helm repo add stable https://charts.helm.sh/stable
```

## 准备

创建名称空间

```
kubectl create ns monitoring
```

下载镜像源

```
helm pull stable/prometheus-operator
```

解压

```
tar -xvf prometheus-operator-9.3.2.tgz
rm -f prometheus-operator-9.3.2.tgz
cd prometheus-operator/
cp values.yaml{,.bak}
```

修改一些参数`vim values.yaml`

* 修改ControllerManager

  ![image-20200721111652787](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200721111652787.png)

* 修改etcd，增加证书认证

  ```
  kubectl create secret generic etcd-certs -n monitoring --from-file=/etc/kubernetes/ssl/ca.pem --from-file=/etc/kubernetes/ssl/kubernetes-key.pem --from-file=/etc/kubernetes/ssl/kubernetes.pem
  ```

  ![image-20200721112626079](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200721112626079.png)

  ![image-20200721112701363](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200721112701363.png)

* 修改Scheduler

  ![image-20200721112954847](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200721112954847.png)

* 修改Proxy

  ![image-20200721113147517](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-2020072111314751.png)

* 暴露服务，将`grafana、prometheus、alertmanager`中service的暴露方式改为`NodePort`

  `prometheus、alertmanager`，找到service 的type改为NodePort即可

  `grafana`，找到service后，新增以下两行

  ```
      type: NodePort
      nodePort: 30524
  ```

## 安装

```
helm install  prometheus-operator --namespace=monitoring ./
```

查找 grafana admin 账户密码

```
kubectl get secret --namespace monitoring  prometheus-operator-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

## 验证安装

```
# 查看相关pod和svc
$ kubectl get pod,svc -n monitoring 
NAME                                                          READY   STATUS    RESTARTS   AGE
pod/alertmanager-prometheus-operator-alertmanager-0           2/2     Running   0          5m54s
pod/prometheus-operator-grafana-7769fc4f77-2wpxk              2/2     Running   0          10m
pod/prometheus-operator-kube-state-metrics-69fcc8d48c-vlxv6   1/1     Running   0          10m
pod/prometheus-operator-operator-c68d5d4cc-b2m77              2/2     Running   0          10m
pod/prometheus-operator-prometheus-node-exporter-gxmsp        1/1     Running   0          10m
pod/prometheus-operator-prometheus-node-exporter-jb9qm        1/1     Running   0          10m
pod/prometheus-operator-prometheus-node-exporter-ld4c4        1/1     Running   0          10m
pod/prometheus-operator-prometheus-node-exporter-tr2vg        1/1     Running   0          10m
pod/prometheus-operator-prometheus-node-exporter-x9ss4        1/1     Running   0          10m
pod/prometheus-operator-prometheus-node-exporter-xrg7s        1/1     Running   0          10m
pod/prometheus-prometheus-operator-prometheus-0               3/3     Running   1          5m44s

NAME                                                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
service/alertmanager-operated                          ClusterIP   None            <none>        9093/TCP,9094/TCP,9094/UDP   5m54s
service/prometheus-operated                            ClusterIP   None            <none>        9090/TCP                     5m44s
service/prometheus-operator-alertmanager               NodePort    10.68.148.209   <none>        9093:30903/TCP               10m
service/prometheus-operator-grafana                    NodePort    10.68.154.126   <none>        80:30524/TCP                 10m
service/prometheus-operator-kube-state-metrics         ClusterIP   10.68.166.79    <none>        8080/TCP                     10m
service/prometheus-operator-operator                   ClusterIP   10.68.42.82     <none>        8080/TCP,443/TCP             10m
service/prometheus-operator-prometheus                 NodePort    10.68.2.85      <none>        9090:30090/TCP               10m
service/prometheus-operator-prometheus-node-exporter   ClusterIP   10.68.85.233    <none>        9100/TCP                     10m
```

- 访问prometheus的web界面：`http://$NodeIP:30090`
- 访问alertmanager的web界面：`http://$NodeIP:30903`
- 访问grafana的web界面：`http://$NodeIP:30524` (默认用户密码 admin:prom-operator，可在web界面修改)

## 管理

## 管理操作

- 升级（修改配置）：修改配置请在``等文件中进行，保存后执行：

```
$ helm upgrade prometheus-operator -n monitoring ./
```

- 回退：具体可以参考`helm help rollback`文档

```
# 查看历史找到版本号
$ helm history prometheus-operator -n monitoring
$ helm rollback prometheus-operator [REVISION] -n monitoring
```

- 删除

```
$ helm delete prometheus-operator -n monitoring
```

## 增加钉钉告警

使用 PrometheusAlert全家桶 进行钉钉告警

> 文档：https://feiyu563.gitbook.io/prometheusalert/

自定义模板如下，如何自定义模板，详见文档：

```
{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
## [Prometheus恢复信息]({{$v.generatorURL}})

> <font color="info">告警名称</font>：[{{$v.labels.alertname}}]({{$var}})

> <font color="info">告警级别</font>：{{$v.labels.severity}}

> <font color="info">当前状态</font>：{{$v.status}}

> <font color="info">告警分组</font>：{{$v.labels.team}}

> <font color="info">开始时间</font>：{{GetCSTtime $v.startsAt}}

> <font color="info">结束时间</font>：{{GetCSTtime $v.endsAt}}

> <font color="info">实例地址</font>：{{$v.labels.instance}}

**{{$v.annotations.message}}**
{{else}}
## [ <font color="#FF0000">Prometheus告警信息</font>]({{$v.generatorURL}})
> <font color="#FF0000">告警名称</font>：[{{$v.labels.alertname}}]({{$var}})

> <font color="#FF0000">告警级别</font>：{{$v.labels.severity}}

> <font color="#FF0000">当前状态</font>：{{$v.status}}

> <font color="#FF0000">告警分组</font>：{{$v.labels.team}}

> <font color="#FF0000">开始时间</font>：{{GetCSTtime $v.startsAt}}

> <font color="#FF0000">实例地址</font>：{{$v.labels.instance}}

{{$v.annotations.message}}
{{end}}
{{ end }}
```

跑通 PrometheusAlert 后，修改 values.yaml 配置温江

![image-20210713205650167](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210713205650167.png)

* 升级

```shell
$ helm upgrade prometheus-operator -n monitoring ./
```

