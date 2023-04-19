<template><h1 id="使用-kubesphere3-1-1-监控功能遇到的问题" tabindex="-1"><a class="header-anchor" href="#使用-kubesphere3-1-1-监控功能遇到的问题" aria-hidden="true">#</a> 使用 kubesphere3.1.1 监控功能遇到的问题</h1>
<h2 id="接入自定义-prometheus" tabindex="-1"><a class="header-anchor" href="#接入自定义-prometheus" aria-hidden="true">#</a> 接入自定义 Prometheus</h2>
<blockquote>
<p>⚠️</p>
<ul>
<li>
<p>node-exporter 和 kube-state-metrics 两个组件的版本一定要 kubeSphere 吻合</p>
</li>
<li>
<p>如果使用helm部署的， prometheus-rules.yaml 和 prometheus-rulesEtcd.yaml 两个rules的配置文件需要额外添加一些 labels和annotations</p>
<blockquote>
<p>简单来说，类似标签选择器，定义的PrometheusRule资源对象，需要带有一些Labels，具体哪些可以参考默认生成的PrometheusRule，然后新建的也给加上</p>
</blockquote>
</li>
</ul>
</blockquote>
<p>千呼万唤始出来，KubeSphere 3.1.1 终于可以接入自定义 Prometheus 了，以前虽然也支持集成自己的prometheus,但是我们来看下KubeSphere 3.1.1 之前集成自己的prometheus的步骤</p>
<ol>
<li>卸载 KubeSphere 的自定义 Prometheus 堆栈</li>
<li>安装您自己的 Prometheus 堆栈</li>
<li>将 KubeSphere 自定义组件安装至您的 Prometheus 堆栈</li>
<li>更改 KubeSphere 的 <code>monitoring endpoint</code></li>
</ol>
<p>这个步骤，给我的感觉就一个，脱裤子放屁，一点都不优雅，接下来我们试一下使用最新的KubeSphere 3.1.1直接接入自定义的Prometheus</p>
<p>首先这个kubernetes集群里已经安装了prometheus-operator ，位于monitoring 这个namaspace</p>
<p><a href="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716003034486.png" target="_blank" rel="noopener noreferrer"><img src="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716003034486.png" alt="image-20210716003034486" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="最小化部署kubesphere" tabindex="-1"><a class="header-anchor" href="#最小化部署kubesphere" aria-hidden="true">#</a> 最小化部署kubesphere</h3>
<p>下载配置文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/kubesphere-installer.yaml
wget https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/cluster-configuration.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>官方默认提供的cluster-configuration.yaml是一个最小化安装的配置文件，主要修改monitoring 中的type和endpoint：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    monitoring:
      type: external   # 设置使用自定义的prometheus
      endpoint: http://prometheus-operated.monitoring.svc:9090 # Prometheus 地址
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注意上述定义的<code>storageClass</code>要根据自己实际情况填写。</p>
<p>部署这两个文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl apply -f kubesphere-installer.yaml
kubectl apply -f cluster-configuration.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>我们可以使用如下命令检查安装日志：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716010631751.png" target="_blank" rel="noopener noreferrer"><img src="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716010631751.png" alt="image-20210716010631751" loading="lazy"><ExternalLinkIcon/></a></p>
<p>安装服务日志最后出现如下错误，可以暂时不用处理，这个后面会提到：</p>
<p><a href="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716011208355.png" target="_blank" rel="noopener noreferrer"><img src="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716011208355.png" alt="image-20210716011208355" loading="lazy"><ExternalLinkIcon/></a></p>
<p>服务会部署一个类型为<code>nodePort</code>类型的service来作为访问入口</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@master-01 kubesphere]# kubectl get pod,svc -n kubesphere-system 
NAME                                         READY   STATUS      RESTARTS   AGE
pod/ks-apiserver-6f79d49f66-4p88s            1/1     Running     0          105s
pod/ks-console-74cf8b9487-56gxm              1/1     Running     0          3m
pod/ks-controller-manager-668f5fd585-zzd8h   1/1     Running     0          105s
pod/ks-installer-7bd6b699df-pjjmf            1/1     Running     0          6m50s
pod/minio-597cb64f44-stwz6                   1/1     Running     0          4m16s
pod/openpitrix-import-job-2dk99              0/1     Completed   0          2m12s

NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
service/ks-apiserver            ClusterIP   10.105.13.140    &lt;none>        80/TCP         3h50m
service/ks-console              NodePort    10.105.229.139   &lt;none>        80:30880/TCP   3h50m
service/ks-controller-manager   ClusterIP   10.106.17.200    &lt;none>        443/TCP        3h50m
service/minio                   ClusterIP   10.102.76.218    &lt;none>        9000/TCP       4m16s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>我们可以使用默认帐户和密码 <code>(admin/P@88w0rd)</code> 访问 Web 控制台。</p>
<h3 id="将-kubesphere-自定义组件安装至您的-prometheus-堆栈" tabindex="-1"><a class="header-anchor" href="#将-kubesphere-自定义组件安装至您的-prometheus-堆栈" aria-hidden="true">#</a> 将 KubeSphere 自定义组件安装至您的 Prometheus 堆栈</h3>
<p>KubeSphere 3.0 使用 Prometheus Operator 来管理 Prometheus/Alertmanager 配置和生命周期、ServiceMonitor（用于管理抓取配置）和 PrometheusRule（用于管理 Prometheus 记录/告警规则）。</p>
<p><a href="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716011553759.png" target="_blank" rel="noopener noreferrer"><img src="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716011553759.png" alt="image-20210716011553759" loading="lazy"><ExternalLinkIcon/></a></p>
<p>我们此时访问web控制台会发现展示监控数据相关的页面均无法正常显示，想要正常显示监控数据，我们需要部署kubesphere提供的prometheus-rules.yaml<code>和</code>prometheus-rulesEtcd.yaml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone https://github.com/kubesphere/kube-prometheus.git
cd kube-prometheus/kustomize
sed -i 's/kubesphere-monitoring-system/monitoring/g' prometheus-rulesEtcd.yaml
sed -i 's/kubesphere-monitoring-system/monitoring/g' prometheus-rules.yaml
kubectl apply -f prometheus-rules.yaml -f prometheus-rulesEtcd.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>部署后，稍等一两分钟页面即可正常显示监控数据</p>
<h3 id="已知问题" tabindex="-1"><a class="header-anchor" href="#已知问题" aria-hidden="true">#</a> 已知问题</h3>
<p><strong>问题一</strong></p>
<p>点击监控告警下的自定义监控页面会提示找不到api ，这个就和我们前面安装日志最后日志出现的报错有关系</p>
<p><a href="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716020743998.png" target="_blank" rel="noopener noreferrer"><img src="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716020743998.png" alt="image-20210716020743998" loading="lazy"><ExternalLinkIcon/></a></p>
<p>使用如下命令部署缺少的crd资源</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl apply -f https://raw.githubusercontent.com/kubesphere/monitoring-dashboard/master/config/crd/bases/monitoring.kubesphere.io_clusterdashboards.yaml
kubectl apply -f https://raw.githubusercontent.com/kubesphere/monitoring-dashboard/master/config/crd/bases/monitoring.kubesphere.io_dashboards.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>部署完成后需要执行如下命令重启<code>ks-apiserver</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl -n kubesphere-system rollout restart deploy/ks-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启完成后，访问页面如下</p>
<p><a href="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021427587.png" target="_blank" rel="noopener noreferrer"><img src="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021427587.png" alt="image-20210716021427587" loading="lazy"><ExternalLinkIcon/></a></p>
<p>点击创建，系统内置了几个默认的模板，我们这里添加一个redis的dashboard</p>
<p><a href="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021543542.png" target="_blank" rel="noopener noreferrer"><img src="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021543542.png" alt="image-20210716021543542" loading="lazy"><ExternalLinkIcon/></a></p>
<p><a href="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021557850.png" target="_blank" rel="noopener noreferrer"><img src="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716021557850.png" alt="image-20210716021557850" loading="lazy"><ExternalLinkIcon/></a></p>
<p>自定义监控模板可参考：</p>
<ul>
<li><a href="https://kubesphere.com.cn/docs/project-user-guide/custom-application-monitoring/visualization/overview/#%E5%88%9B%E5%BB%BA%E7%9B%91%E6%8E%A7%E9%9D%A2%E6%9D%BF" target="_blank" rel="noopener noreferrer">https://kubesphere.com.cn/docs/project-user-guide/custom-application-monitoring/visualization/overview/#%E5%88%9B%E5%BB%BA%E7%9B%91%E6%8E%A7%E9%9D%A2%E6%9D%BF<ExternalLinkIcon/></a></li>
<li>https://github.com/kubesphere/monitoring-dashboard</li>
</ul>
<p><strong>问题二</strong></p>
<p>监控告警下的告警策略和告警消息无法创建自定义策略</p>
<p><a href="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716023858088.png" target="_blank" rel="noopener noreferrer"><img src="https://hugo-doc-img.oss-cn-shanghai.aliyuncs.com/img/image-20210716023858088.png" alt="image-20210716023858088" loading="lazy"><ExternalLinkIcon/></a></p>
<p>参考：</p>
<p>https://github.com/kubesphere/kubesphere/issues/3880</p>
<h2 id="使用-kubesphere-自带监控-监控二进制部署的k8s" tabindex="-1"><a class="header-anchor" href="#使用-kubesphere-自带监控-监控二进制部署的k8s" aria-hidden="true">#</a> 使用 kubesphere 自带监控 监控二进制部署的k8s</h2>
<h3 id="kubesphere监控外部etcd集群" tabindex="-1"><a class="header-anchor" href="#kubesphere监控外部etcd集群" aria-hidden="true">#</a> kubesphere监控外部etcd集群</h3>
<p>1）创建集群 Etcd 的证书 Secret</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl -n kubesphere-monitoring-system create secret generic kube-etcd-client-certs  \
--from-file=etcd-client-ca.crt=/etc/kubernetes/ssl/ca.pem  \
--from-file=etcd-client.crt=/etc/kubernetes/ssl/kubernetes.pem  \
--from-file=etcd-client.key=/etc/kubernetes/ssl/kubernetes-key.pem
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>证书路径根据实际情况来改</p>
</blockquote>
<p>2）编辑 ClusterConfiguration 开启可插拔的功能组件:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  etcd:
    monitoring: true
    endpointIps: 192.168.135.29,192.168.135.157,192.168.135.47
    port: 2379
    tlsEnable: true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>3）解决 找不到证书</p>
<p><code>kubectl edit prometheuses.monitoring.coreos.com -n kubesphere-monitoring-system k8s</code>
securityContext前添加</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>secrets:
- kube-etcd-client-certs
securityContext:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>4）按功能需求编辑配置文件之后，退出等待生效即可，如长时间未生效请使用如下命令查看相关日志:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl logs -n kubesphere-system <span class="token variable"><span class="token variable">$(</span>kubectl get pod -n kubesphere-system -l <span class="token assign-left variable">app</span><span class="token operator">=</span>ks-install -o <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">'{.items[0].metadata.name}'</span><span class="token variable">)</span></span> -f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="kubesphere监控外部controller-manager和scheduler" tabindex="-1"><a class="header-anchor" href="#kubesphere监控外部controller-manager和scheduler" aria-hidden="true">#</a> kubesphere监控外部controller-manager和scheduler</h3>
<p>二进制安装的k8s，在使用operator安装的Prometheus，默认是监控不到controller-manager和scheduler，需要另行配置这两个组件。原因在于servicemonitor是通过匹配service中的label来添加监控的，但是二进制安装的k8s中，kube-system这个namespace中没有controller-manager和scheduler的service</p>
<p>查看kube-controller-manager的servicemonitor</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># kubectl -n kubesphere-monitoring-system get servicemonitors.monitoring.coreos.com kube-controller-manager -o yaml | tail -15</span>
    - action: keep
      regex: up
      sourceLabels:
      - __name__
    port: http-metrics
    scheme: http
    tlsConfig:
      insecureSkipVerify: <span class="token boolean">false</span>
  jobLabel: k8s-app
  namespaceSelector:
    matchNames:
    - kube-system
  selector:
    matchLabels:
      k8s-app: kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul>
<li>其需要在kube-system下匹配一个含有k8s-app=kube-controller-manager的service</li>
<li>修改其scheme为http，默认为https</li>
</ul>
<p>kube-controller-manager这个标签的<code>service</code>和<code>endpoints</code>在kube-system这个namespace是没有的，所有Prometheus无法获取controller-manager的信息，所以需要创建controller-manager的service和endpoint</p>
<p>1）删除旧的svc，ep</p>
<p>2）创建新的svc，ep</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># cat controller-service.yaml </span>
apiVersion: v1
kind: Service
metadata:
  name: kube-controller-manager-svc
  namespace: kube-system
  labels:
    k8s-app: kube-controller-manager
spec:
  ports:
  - port: <span class="token number">10252</span>
    name: http-metrics
    protocol: TCP
  type: ClusterIP
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># cat controller-endpoint.yaml </span>
apiVersion: v1
kind: Endpoints
metadata:
  name: kube-controller-manager-svc
  namespace: kube-system
  labels:
    k8s-app: kube-controller-manager
subsets:
  - addresses:
    - ip: <span class="token number">192.168</span>.135.214
    - ip: <span class="token number">192.168</span>.135.175
    - ip: <span class="token number">192.168</span>.135.218
    ports:
    - name: http-metrics
      port: <span class="token number">10252</span>
      protocol: TCP
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl apply -f controller-service.yaml controller-endpoint.yaml 
kubectl get svc,ep -n kube-system -l k8s-app<span class="token operator">=</span>kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>同理修改scheduler的相关配置，就能监控scheduler的信息</p>
<p>yaml 文件如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># cat scheduler-service.yaml </span>
apiVersion: v1
kind: Service
metadata:
  name: kube-scheduler-svc
  namespace: kube-system
  labels:
    k8s-app: kube-scheduler
spec:
  ports:
  - port: <span class="token number">10251</span>
    name: http-metrics
    protocol: TCP
  type: ClusterIP
  
<span class="token comment"># cat scheduler-endpoint.yaml </span>
apiVersion: v1
kind: Endpoints
metadata:
  name: kube-scheduler-svc
  namespace: kube-system
  labels:
    k8s-app: kube-scheduler
subsets:
  - addresses:
    - ip: <span class="token number">192.168</span>.135.214
    - ip: <span class="token number">192.168</span>.135.175
    - ip: <span class="token number">192.168</span>.135.218
    ports:
    - name: http-metrics
      port: <span class="token number">10251</span>
      protocol: TCP
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题" aria-hidden="true">#</a> 其他问题</h2>
<ul>
<li>
<p>问题一：How to fix the error undefined variable “$labels”in Prometheus?</p>
<ul>
<li>
<p>问题原因：使用helm模板</p>
</li>
<li>
<p>解决办法：将 <code>{{</code> 和 <code>}}</code>更改为如下格式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"{{`{{`}}  {{`}}`}}"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ul>
</li>
</ul>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>
<ul>
<li><a href="https://kubesphere.com.cn/docs/faq/observability/byop/" target="_blank" rel="noopener noreferrer">集成您自己的 Prometheus | kubesphere官方文档<ExternalLinkIcon/></a></li>
<li><a href="https://www.lishuai.fun/2021/07/16/kubesphere-external-prometheus/" target="_blank" rel="noopener noreferrer">kubesphere 3.1.1 接入自定义 Prometheus | 李帅<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/kubesphere/ks-installer/blob/master/README_zh.md#%E5%AE%89%E8%A3%85%E5%8F%AF%E6%8F%92%E6%8B%94%E5%8A%9F%E8%83%BD%E7%BB%84%E4%BB%B6" target="_blank" rel="noopener noreferrer">ks 安装可插拔功能组件 | github<ExternalLinkIcon/></a></li>
<li><a href="https://kubesphere.com.cn/forum/d/2349-etcd" target="_blank" rel="noopener noreferrer">开启etcd监控时无数据 | kubesphere开发者社区<ExternalLinkIcon/></a></li>
<li><a href="https://stackoverflow.com/questions/64693812/how-to-fix-the-error-undefined-variable-labelsin-prometheus" target="_blank" rel="noopener noreferrer">How to fix the error undefined variable “$labels”in Prometheus?<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/wzy_168/article/details/103290235" target="_blank" rel="noopener noreferrer">prometheus-operator使用【自定义PrometheusRule】| CSDN<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/bigberg/p/14009940.html" target="_blank" rel="noopener noreferrer">Prometheus operator | CSDN bigberg<ExternalLinkIcon/></a></li>
</ul>
</template>
