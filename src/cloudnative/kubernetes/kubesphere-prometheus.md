---
category: 云原生
tags:
  - Kubernetes
---

# 使用 kubesphere3.1.1 监控功能遇到的问题

## 接入自定义 Prometheus

> :warning:
>
> * node-exporter 和 kube-state-metrics 两个组件的版本一定要 kubeSphere 吻合
>
> * 如果使用helm部署的， prometheus-rules.yaml 和 prometheus-rulesEtcd.yaml 两个rules的配置文件需要额外添加一些 labels和annotations
>
>   > 简单来说，类似标签选择器，定义的PrometheusRule资源对象，需要带有一些Labels，具体哪些可以参考默认生成的PrometheusRule，然后新建的也给加上

千呼万唤始出来，KubeSphere 3.1.1 终于可以接入自定义 Prometheus 了，以前虽然也支持集成自己的prometheus,但是我们来看下KubeSphere 3.1.1 之前集成自己的prometheus的步骤

1. 卸载 KubeSphere 的自定义 Prometheus 堆栈
2. 安装您自己的 Prometheus 堆栈
3. 将 KubeSphere 自定义组件安装至您的 Prometheus 堆栈
4. 更改 KubeSphere 的 `monitoring endpoint`

这个步骤，给我的感觉就一个，脱裤子放屁，一点都不优雅，接下来我们试一下使用最新的KubeSphere 3.1.1直接接入自定义的Prometheus

首先这个kubernetes集群里已经安装了prometheus-operator ，位于monitoring 这个namaspace

[![image-20210716003034486](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716003034486.png)](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716003034486.png)

### 最小化部署kubesphere

下载配置文件

```
wget https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/kubesphere-installer.yaml
wget https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/cluster-configuration.yaml
```

官方默认提供的cluster-configuration.yaml是一个最小化安装的配置文件，主要修改monitoring 中的type和endpoint：

```
    monitoring:
      type: external   # 设置使用自定义的prometheus
      endpoint: http://prometheus-operated.monitoring.svc:9090 # Prometheus 地址
```

注意上述定义的`storageClass`要根据自己实际情况填写。

部署这两个文件

```
kubectl apply -f kubesphere-installer.yaml
kubectl apply -f cluster-configuration.yaml
```

我们可以使用如下命令检查安装日志：

```
kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f
```

[![image-20210716010631751](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716010631751.png)](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716010631751.png)

安装服务日志最后出现如下错误，可以暂时不用处理，这个后面会提到：

[![image-20210716011208355](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716011208355.png)](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716011208355.png)

服务会部署一个类型为`nodePort`类型的service来作为访问入口

```
[root@master-01 kubesphere]# kubectl get pod,svc -n kubesphere-system 
NAME                                         READY   STATUS      RESTARTS   AGE
pod/ks-apiserver-6f79d49f66-4p88s            1/1     Running     0          105s
pod/ks-console-74cf8b9487-56gxm              1/1     Running     0          3m
pod/ks-controller-manager-668f5fd585-zzd8h   1/1     Running     0          105s
pod/ks-installer-7bd6b699df-pjjmf            1/1     Running     0          6m50s
pod/minio-597cb64f44-stwz6                   1/1     Running     0          4m16s
pod/openpitrix-import-job-2dk99              0/1     Completed   0          2m12s

NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
service/ks-apiserver            ClusterIP   10.105.13.140    <none>        80/TCP         3h50m
service/ks-console              NodePort    10.105.229.139   <none>        80:30880/TCP   3h50m
service/ks-controller-manager   ClusterIP   10.106.17.200    <none>        443/TCP        3h50m
service/minio                   ClusterIP   10.102.76.218    <none>        9000/TCP       4m16s
```

我们可以使用默认帐户和密码 `(admin/P@88w0rd)` 访问 Web 控制台。

### 将 KubeSphere 自定义组件安装至您的 Prometheus 堆栈

KubeSphere 3.0 使用 Prometheus Operator 来管理 Prometheus/Alertmanager 配置和生命周期、ServiceMonitor（用于管理抓取配置）和 PrometheusRule（用于管理 Prometheus 记录/告警规则）。

[![image-20210716011553759](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716011553759.png)](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716011553759.png)

我们此时访问web控制台会发现展示监控数据相关的页面均无法正常显示，想要正常显示监控数据，我们需要部署kubesphere提供的prometheus-rules.yaml`和`prometheus-rulesEtcd.yaml

```
git clone https://github.com/kubesphere/kube-prometheus.git
cd kube-prometheus/kustomize
sed -i 's/kubesphere-monitoring-system/monitoring/g' prometheus-rulesEtcd.yaml
sed -i 's/kubesphere-monitoring-system/monitoring/g' prometheus-rules.yaml
kubectl apply -f prometheus-rules.yaml -f prometheus-rulesEtcd.yaml
```

部署后，稍等一两分钟页面即可正常显示监控数据

### 已知问题

**问题一**

点击监控告警下的自定义监控页面会提示找不到api ，这个就和我们前面安装日志最后日志出现的报错有关系

[![image-20210716020743998](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716020743998.png)](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716020743998.png)

使用如下命令部署缺少的crd资源

```
kubectl apply -f https://raw.githubusercontent.com/kubesphere/monitoring-dashboard/master/config/crd/bases/monitoring.kubesphere.io_clusterdashboards.yaml
kubectl apply -f https://raw.githubusercontent.com/kubesphere/monitoring-dashboard/master/config/crd/bases/monitoring.kubesphere.io_dashboards.yaml
```

部署完成后需要执行如下命令重启`ks-apiserver`

```
kubectl -n kubesphere-system rollout restart deploy/ks-apiserver
```

重启完成后，访问页面如下

[![image-20210716021427587](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021427587.png)](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021427587.png)

点击创建，系统内置了几个默认的模板，我们这里添加一个redis的dashboard

[![image-20210716021543542](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021543542.png)](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021543542.png)

[![image-20210716021557850](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021557850.png)](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021557850.png)

自定义监控模板可参考：

- [https://kubesphere.com.cn/docs/project-user-guide/custom-application-monitoring/visualization/overview/#%E5%88%9B%E5%BB%BA%E7%9B%91%E6%8E%A7%E9%9D%A2%E6%9D%BF](https://kubesphere.com.cn/docs/project-user-guide/custom-application-monitoring/visualization/overview/#创建监控面板)
- https://github.com/kubesphere/monitoring-dashboard

**问题二**

监控告警下的告警策略和告警消息无法创建自定义策略

[![image-20210716023858088](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716023858088.png)](https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716023858088.png)

参考：

https://github.com/kubesphere/kubesphere/issues/3880

## 使用 kubesphere 自带监控 监控二进制部署的k8s

### kubesphere监控外部etcd集群

1）创建集群 Etcd 的证书 Secret

```
kubectl -n kubesphere-monitoring-system create secret generic kube-etcd-client-certs  \
--from-file=etcd-client-ca.crt=/etc/kubernetes/ssl/ca.pem  \
--from-file=etcd-client.crt=/etc/kubernetes/ssl/kubernetes.pem  \
--from-file=etcd-client.key=/etc/kubernetes/ssl/kubernetes-key.pem
```

> 证书路径根据实际情况来改

2）编辑 ClusterConfiguration 开启可插拔的功能组件:

```
  etcd:
    monitoring: true
    endpointIps: 192.168.135.29,192.168.135.157,192.168.135.47
    port: 2379
    tlsEnable: true
```

3）解决 找不到证书

`kubectl edit prometheuses.monitoring.coreos.com -n kubesphere-monitoring-system k8s`
securityContext前添加

```
secrets:
- kube-etcd-client-certs
securityContext:
```

4）按功能需求编辑配置文件之后，退出等待生效即可，如长时间未生效请使用如下命令查看相关日志:

```shell
kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f
```

### kubesphere监控外部controller-manager和scheduler

二进制安装的k8s，在使用operator安装的Prometheus，默认是监控不到controller-manager和scheduler，需要另行配置这两个组件。原因在于servicemonitor是通过匹配service中的label来添加监控的，但是二进制安装的k8s中，kube-system这个namespace中没有controller-manager和scheduler的service

查看kube-controller-manager的servicemonitor

```shell
# kubectl -n kubesphere-monitoring-system get servicemonitors.monitoring.coreos.com kube-controller-manager -o yaml | tail -15
    - action: keep
      regex: up
      sourceLabels:
      - __name__
    port: http-metrics
    scheme: http
    tlsConfig:
      insecureSkipVerify: false
  jobLabel: k8s-app
  namespaceSelector:
    matchNames:
    - kube-system
  selector:
    matchLabels:
      k8s-app: kube-controller-manager
```

* 其需要在kube-system下匹配一个含有k8s-app=kube-controller-manager的service
* 修改其scheme为http，默认为https

kube-controller-manager这个标签的`service`和`endpoints`在kube-system这个namespace是没有的，所有Prometheus无法获取controller-manager的信息，所以需要创建controller-manager的service和endpoint

1）删除旧的svc，ep

2）创建新的svc，ep

```shell
# cat controller-service.yaml 
apiVersion: v1
kind: Service
metadata:
  name: kube-controller-manager-svc
  namespace: kube-system
  labels:
    k8s-app: kube-controller-manager
spec:
  ports:
  - port: 10252
    name: http-metrics
    protocol: TCP
  type: ClusterIP
```

```shell
# cat controller-endpoint.yaml 
apiVersion: v1
kind: Endpoints
metadata:
  name: kube-controller-manager-svc
  namespace: kube-system
  labels:
    k8s-app: kube-controller-manager
subsets:
  - addresses:
    - ip: 192.168.135.214
    - ip: 192.168.135.175
    - ip: 192.168.135.218
    ports:
    - name: http-metrics
      port: 10252
      protocol: TCP
```

```shell
kubectl apply -f controller-service.yaml controller-endpoint.yaml 
kubectl get svc,ep -n kube-system -l k8s-app=kube-controller-manager
```

同理修改scheduler的相关配置，就能监控scheduler的信息

yaml 文件如下

```shell
# cat scheduler-service.yaml 
apiVersion: v1
kind: Service
metadata:
  name: kube-scheduler-svc
  namespace: kube-system
  labels:
    k8s-app: kube-scheduler
spec:
  ports:
  - port: 10251
    name: http-metrics
    protocol: TCP
  type: ClusterIP
  
# cat scheduler-endpoint.yaml 
apiVersion: v1
kind: Endpoints
metadata:
  name: kube-scheduler-svc
  namespace: kube-system
  labels:
    k8s-app: kube-scheduler
subsets:
  - addresses:
    - ip: 192.168.135.214
    - ip: 192.168.135.175
    - ip: 192.168.135.218
    ports:
    - name: http-metrics
      port: 10251
      protocol: TCP
```

## 其他问题

* 问题一：How to fix the error undefined variable “$labels”in Prometheus?

  * 问题原因：使用helm模板

  * 解决办法：将 `{{` 和 `}}`更改为如下格式

    ```
    "{{`{{`}}  {{`}}`}}"
    ```

## 参考链接

* [集成您自己的 Prometheus | kubesphere官方文档](https://kubesphere.com.cn/docs/faq/observability/byop/)
* [kubesphere 3.1.1 接入自定义 Prometheus | 李帅](https://www.lishuai.fun/2021/07/16/kubesphere-external-prometheus/)
* [ks 安装可插拔功能组件 | github](https://github.com/kubesphere/ks-installer/blob/master/README_zh.md#%E5%AE%89%E8%A3%85%E5%8F%AF%E6%8F%92%E6%8B%94%E5%8A%9F%E8%83%BD%E7%BB%84%E4%BB%B6)
* [开启etcd监控时无数据 | kubesphere开发者社区](https://kubesphere.com.cn/forum/d/2349-etcd)
* [How to fix the error undefined variable “$labels”in Prometheus?](https://stackoverflow.com/questions/64693812/how-to-fix-the-error-undefined-variable-labelsin-prometheus)
* [prometheus-operator使用【自定义PrometheusRule】| CSDN](https://blog.csdn.net/wzy_168/article/details/103290235)
* [Prometheus operator | CSDN bigberg](https://www.cnblogs.com/bigberg/p/14009940.html)

