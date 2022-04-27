<template><h1 id="使用-helm-和-operator-快速部署-prometheus" tabindex="-1"><a class="header-anchor" href="#使用-helm-和-operator-快速部署-prometheus" aria-hidden="true">#</a> 使用 Helm 和 Operator 快速部署 Prometheus</h1>
<p>随着<code>heapster</code>项目停止更新并慢慢被<code>metrics-server</code>取代，集群监控这项任务也将最终转移。<code>prometheus</code>的监控理念、数据结构设计其实相当精简，包括其非常灵活的查询语言；但是对于初学者来说，想要在k8s集群中实践搭建一套相对可用的部署却比较麻烦，由此还产生了不少专门的项目（如：<a href="https://github.com/coreos/prometheus-operator" target="_blank" rel="noopener noreferrer">prometheus-operator<ExternalLinkIcon/></a>）。</p>
<p><code>Helm</code>致力于成为k8s集群的应用包管理工具，希望像linux 系统的<code>RPM</code> <code>DPKG</code>那样成功；确实在k8s上部署复杂一点的应用很麻烦，需要管理很多yaml文件（configmap,controller,service,rbac,pv,pvc等等），而helm能够整齐管理这些文档：版本控制，参数化安装，方便的打包与分享等。</p>
<ul>
<li>建议积累一定k8s经验以后再去使用helm；对于初学者来说手工去配置那些yaml文件对于快速学习k8s的设计理念和运行原理非常有帮助，而不是直接去使用helm，面对又一层封装与复杂度。</li>
</ul>
<p>Operator 用于管理 Kubernetes 的有状态分布式应用。</p>
<h2 id="安装-helm" tabindex="-1"><a class="header-anchor" href="#安装-helm" aria-hidden="true">#</a> 安装 Helm</h2>
<p>在官方repo下载<a href="https://github.com/helm/helm/releases" target="_blank" rel="noopener noreferrer">release版本<ExternalLinkIcon/></a>中自带的二进制文件即可（以Linux amd64为例）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://get.helm.sh/helm-v3.6.1-linux-amd64.tar.gz
<span class="token function">tar</span> -xvf helm-v3.6.1-linux-amd64.tar.gz 
<span class="token function">mv</span> ./linux-amd64/helm /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>启用官方 charts 仓库</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>helm repo <span class="token function">add</span> stable https://charts.helm.sh/stable
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<p>创建名称空间</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl create ns monitoring
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下载镜像源</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>helm pull stable/prometheus-operator
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>解压</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -xvf prometheus-operator-9.3.2.tgz
rm -f prometheus-operator-9.3.2.tgz
cd prometheus-operator/
cp values.yaml{,.bak}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>修改一些参数<code>vim values.yaml</code></p>
<ul>
<li>
<p>修改ControllerManager</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200721111652787.png" alt="image-20200721111652787" loading="lazy"></p>
</li>
<li>
<p>修改etcd，增加证书认证</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl create secret generic etcd-certs -n monitoring --from-file=/etc/kubernetes/ssl/ca.pem --from-file=/etc/kubernetes/ssl/kubernetes-key.pem --from-file=/etc/kubernetes/ssl/kubernetes.pem
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200721112626079.png" alt="image-20200721112626079" loading="lazy"></p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200721112701363.png" alt="image-20200721112701363" loading="lazy"></p>
</li>
<li>
<p>修改Scheduler</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200721112954847.png" alt="image-20200721112954847" loading="lazy"></p>
</li>
<li>
<p>修改Proxy</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-2020072111314751.png" alt="image-20200721113147517" loading="lazy"></p>
</li>
<li>
<p>暴露服务，将<code>grafana、prometheus、alertmanager</code>中service的暴露方式改为<code>NodePort</code></p>
<p><code>prometheus、alertmanager</code>，找到service 的type改为NodePort即可</p>
<p><code>grafana</code>，找到service后，新增以下两行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    type: NodePort
    nodePort: 30524
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>helm install  prometheus-operator --namespace=monitoring ./
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查找 grafana admin 账户密码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl get secret --namespace monitoring  prometheus-operator-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装" aria-hidden="true">#</a> 验证安装</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 查看相关pod和svc
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
service/alertmanager-operated                          ClusterIP   None            &lt;none>        9093/TCP,9094/TCP,9094/UDP   5m54s
service/prometheus-operated                            ClusterIP   None            &lt;none>        9090/TCP                     5m44s
service/prometheus-operator-alertmanager               NodePort    10.68.148.209   &lt;none>        9093:30903/TCP               10m
service/prometheus-operator-grafana                    NodePort    10.68.154.126   &lt;none>        80:30524/TCP                 10m
service/prometheus-operator-kube-state-metrics         ClusterIP   10.68.166.79    &lt;none>        8080/TCP                     10m
service/prometheus-operator-operator                   ClusterIP   10.68.42.82     &lt;none>        8080/TCP,443/TCP             10m
service/prometheus-operator-prometheus                 NodePort    10.68.2.85      &lt;none>        9090:30090/TCP               10m
service/prometheus-operator-prometheus-node-exporter   ClusterIP   10.68.85.233    &lt;none>        9100/TCP                     10m
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul>
<li>访问prometheus的web界面：<code>http://$NodeIP:30090</code></li>
<li>访问alertmanager的web界面：<code>http://$NodeIP:30903</code></li>
<li>访问grafana的web界面：<code>http://$NodeIP:30524</code> (默认用户密码 admin:prom-operator，可在web界面修改)</li>
</ul>
<h2 id="管理" tabindex="-1"><a class="header-anchor" href="#管理" aria-hidden="true">#</a> 管理</h2>
<h2 id="管理操作" tabindex="-1"><a class="header-anchor" href="#管理操作" aria-hidden="true">#</a> 管理操作</h2>
<ul>
<li>升级（修改配置）：修改配置请在``等文件中进行，保存后执行：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ helm upgrade prometheus-operator -n monitoring ./
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>回退：具体可以参考<code>helm help rollback</code>文档</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 查看历史找到版本号
$ helm history prometheus-operator -n monitoring
$ helm rollback prometheus-operator [REVISION] -n monitoring
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>删除</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ helm delete prometheus-operator -n monitoring
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="增加钉钉告警" tabindex="-1"><a class="header-anchor" href="#增加钉钉告警" aria-hidden="true">#</a> 增加钉钉告警</h2>
<p>使用 PrometheusAlert全家桶 进行钉钉告警</p>
<blockquote>
<p>文档：https://feiyu563.gitbook.io/prometheusalert/</p>
</blockquote>
<p>自定义模板如下，如何自定义模板，详见文档：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
## [Prometheus恢复信息]({{$v.generatorURL}})

> &lt;font color="info">告警名称&lt;/font>：[{{$v.labels.alertname}}]({{$var}})

> &lt;font color="info">告警级别&lt;/font>：{{$v.labels.severity}}

> &lt;font color="info">当前状态&lt;/font>：{{$v.status}}

> &lt;font color="info">告警分组&lt;/font>：{{$v.labels.team}}

> &lt;font color="info">开始时间&lt;/font>：{{GetCSTtime $v.startsAt}}

> &lt;font color="info">结束时间&lt;/font>：{{GetCSTtime $v.endsAt}}

> &lt;font color="info">实例地址&lt;/font>：{{$v.labels.instance}}

**{{$v.annotations.message}}**
{{else}}
## [ &lt;font color="#FF0000">Prometheus告警信息&lt;/font>]({{$v.generatorURL}})
> &lt;font color="#FF0000">告警名称&lt;/font>：[{{$v.labels.alertname}}]({{$var}})

> &lt;font color="#FF0000">告警级别&lt;/font>：{{$v.labels.severity}}

> &lt;font color="#FF0000">当前状态&lt;/font>：{{$v.status}}

> &lt;font color="#FF0000">告警分组&lt;/font>：{{$v.labels.team}}

> &lt;font color="#FF0000">开始时间&lt;/font>：{{GetCSTtime $v.startsAt}}

> &lt;font color="#FF0000">实例地址&lt;/font>：{{$v.labels.instance}}

{{$v.annotations.message}}
{{end}}
{{ end }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>跑通 PrometheusAlert 后，修改 values.yaml 配置文件</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210713205650167.png" alt="image-20210713205650167" loading="lazy"></p>
<p>注释掉一个etcd alert rules <code>templates/prometheus/rules/etcd.yaml</code>和<code>templates/prometheus/rules-1.14/etcd.yaml</code>文件，不确定是误报还是bug，etcdHighNumberOfFailedGRPCRequests</p>
<ul>
<li>升级</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm upgrade prometheus-operator -n monitoring ./
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
