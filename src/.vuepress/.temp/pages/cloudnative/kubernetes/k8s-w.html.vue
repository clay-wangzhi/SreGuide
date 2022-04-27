<template><h1 id="如何为你的kubernetes保驾护航" tabindex="-1"><a class="header-anchor" href="#如何为你的kubernetes保驾护航" aria-hidden="true">#</a> 如何为你的Kubernetes保驾护航</h1>
<blockquote>
<p>转载自：<a href="https://mp.weixin.qq.com/s/NGadhltif_xWnuLdmFCZIw" target="_blank" rel="noopener noreferrer">运维开发故事 | 乔克<ExternalLinkIcon/></a></p>
</blockquote>
<p>随着Kubernetes的不断发展，技术不断成熟，越来越多的公司选择把自家的应用部署到Kubernetes中。但是把应用部署到Kubernetes中就完事了吗？显然不是，应用容器化只是万里长征的第一步，如何让应用安心、稳定的运行才是后续的所有工作。</p>
<p>这里主要从以下几个方面来进行整理，对于大部分公司足够使用。</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk1.png" alt="图片" loading="lazy"></p>
<h2 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h2>
<p>Node可以是物理主机，也可以是云主机，它是Kubernetes的载体。在很多时候我们并不太关心Node怎么样了，除非其异常。但是作为运维人员，我们最不希望的就是异常，对于Node也是一样。</p>
<p>Node节点并不需要做太多太复杂的操作，主要如下：<img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk2.png" alt="图片" loading="lazy"></p>
<h4 id="内核升级" tabindex="-1"><a class="header-anchor" href="#内核升级" aria-hidden="true">#</a> &gt;内核升级</h4>
<p>对于大部分企业，CentOS系统还是首选，默认情况下，7系列系统默认版本是3.10，该版本的内核在Kubernetes社区有很多已知的Bug，所以对节点来说，升级内核是必须的，或者企业可以选择Ubuntu作为底层操作系统。</p>
<p>升级内核的步骤如下（简单的升级方式）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget https://elrepo.org/linux/kernel/el7/x86_64/RPMS/kernel-lt-5.4.86-1.el7.elrepo.x86_64.rpm
rpm -ivh kernel-lt-5.4.86-1.el7.elrepo.x86_64.rpm
cat /boot/grub2/grub.cfg | grep menuentry
grub2-set-default 'CentOS Linux (5.4.86-1.el7.elrepo.x86_64) 7 (Core)'
grub2-editenv list
grub2-mkconfig -o /boot/grub2/grub.cfg
reboot
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="软件更新" tabindex="-1"><a class="header-anchor" href="#软件更新" aria-hidden="true">#</a> &gt;软件更新</h4>
<p>对于大部分人来说，更新软件在很多情况下是不做的，因为害怕兼容问题。不过在实际生产中，对于已知有高危漏洞的软件，我们还需要对其进行更新，这个可以针对处理。</p>
<h4 id="优化docker配置文件" tabindex="-1"><a class="header-anchor" href="#优化docker配置文件" aria-hidden="true">#</a> &gt;优化Docker配置文件</h4>
<p>对于Docker的配置文件，主要优化的就是日志驱动、保留日志大小以及镜像加速等，其他的配置根据情况而定，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat > /etc/docker/daemon.json  &lt;&lt; EOF
{
    "exec-opts": ["native.cgroupdriver=systemd"],
    "log-driver": "json-file",
    "log-opts": {
        "max-size": "100m",
        "max-file": "10"
    },
    "bip": "169.254.123.1/24",
    "oom-score-adjust": -1000,
    "registry-mirrors": ["https://pqbap4ya.mirror.aliyuncs.com"],
    "storage-driver": "overlay2",
    "storage-opts":["overlay2.override_kernel_check=true"],
    "live-restore": true
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="优化kubelet参数" tabindex="-1"><a class="header-anchor" href="#优化kubelet参数" aria-hidden="true">#</a> &gt;优化kubelet参数</h4>
<p>对于K8S来讲，kubelet是每个Node的组长，负责Node的&quot;饮食起居&quot;，这里对它的参数配置主要如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat > /etc/systemd/system/kubelet.service &lt;&lt;EOF
[Unit]
Description=kubelet: The Kubernetes Node Agent
Documentation=https://kubernetes.io/docs/


[Service]
ExecStartPre=/usr/bin/mkdir -p /sys/fs/cgroup/pids/system.slice/kubelet.service
ExecStartPre=/usr/bin/mkdir -p /sys/fs/cgroup/cpu/system.slice/kubelet.service
ExecStartPre=/usr/bin/mkdir -p /sys/fs/cgroup/cpuacct/system.slice/kubelet.service
ExecStartPre=/usr/bin/mkdir -p /sys/fs/cgroup/cpuset/system.slice/kubelet.service
ExecStartPre=/usr/bin/mkdir -p /sys/fs/cgroup/memory/system.slice/kubelet.service
ExecStartPre=/usr/bin/mkdir -p /sys/fs/cgroup/systemd/system.slice/kubelet.service
ExecStart=/usr/bin/kubelet \
--enforce-node-allocatable=pods,kube-reserved \
--kube-reserved-cgroup=/system.slice/kubelet.service \
--kube-reserved=cpu=200m,memory=250Mi \
--eviction-hard=memory.available&lt;5%,nodefs.available&lt;10%,imagefs.available&lt;10% \
--eviction-soft=memory.available&lt;10%,nodefs.available&lt;15%,imagefs.available&lt;15% \
--eviction-soft-grace-period=memory.available=2m,nodefs.available=2m,imagefs.available=2m \
--eviction-max-pod-grace-period=30 \
--eviction-minimum-reclaim=memory.available=0Mi,nodefs.available=500Mi,imagefs.available=500Mi
Restart=always
StartLimitInterval=0
RestartSec=10


[Install]
WantedBy=multi-user.target
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>其功能主要是为每个Node增加资源预留，可以在一定程度上防止Node宕机。</p>
<h4 id="日志配置管理" tabindex="-1"><a class="header-anchor" href="#日志配置管理" aria-hidden="true">#</a> &gt;日志配置管理</h4>
<p>这里的日志配置管理针对的是系统日志，非自研应用日志。默认情况下，系统日志都不需要我们特殊配置，我这里提出来，主要是保障日志的可追溯。当系统因为某种原因被入侵，系统系统被删除的情况下，还有日志提供给我们分析。</p>
<p>所以在条件允许的情况下，对Node节点的系统日志进行远程备份是有必要的，可以采用<code>rsyslog</code>进行配置管理，日志可以保存到远端的日志中心或者<code>oss</code>上。</p>
<h4 id="安全配置" tabindex="-1"><a class="header-anchor" href="#安全配置" aria-hidden="true">#</a> &gt;安全配置</h4>
<p>安全配置这里涉及的不多，主要是针对已知的一些安全问题进行加固。主要有以下五种（当然还有更多，看自己的情况）：</p>
<ul>
<li>ssh密码过期策略</li>
<li>密码复杂度策略</li>
<li>ssh登录次数限制</li>
<li>系统超时配置</li>
<li>历史记录配置</li>
</ul>
<h2 id="pod" tabindex="-1"><a class="header-anchor" href="#pod" aria-hidden="true">#</a> Pod</h2>
<p>Pod是K8S的最小调度单元，是应用的载体，它的稳定直接关乎应用本身，在部署应用的时候，主要考虑一下几个方面。</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk3.png" alt="图片" loading="lazy"></p>
<h4 id="资源限制" tabindex="-1"><a class="header-anchor" href="#资源限制" aria-hidden="true">#</a> &gt;资源限制</h4>
<p>Pod使用的是主机的资源，合理的资源限制可以有效避免资源超卖或者资源抢占问题。在配置资源限制的时候，要根据实际的应用情况来决定Pod的QoS，不同的QoS配置情况不一样。</p>
<p>如果应用的级别比较高，建议配置<code>Guaranteed</code>级别配置，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>resources:
  limits:
    memory: "200Mi"
    cpu: "700m"
  requests:
    memory: "200Mi"
    cpu: "700m"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果应用级别一般，建议配置<code>Burstable</code>级别，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>resources:
  limits:
    memory: "200Mi"
    cpu: "500m"
  requests:
    memory: "100Mi"
    cpu: "100m"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>强烈不建议使用<code>BestEffort</code>类型的Pod。</p>
<h4 id="调度策略" tabindex="-1"><a class="header-anchor" href="#调度策略" aria-hidden="true">#</a> &gt;调度策略</h4>
<p>调度策略也是根据情况来定，如果你的应用需要指定调度到某些节点，可以使用亲和性调度，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>affinity:
  nodeAffinity:
    preferredDuringSchedulingIgnoredDuringExecution:
      - preference: {}
        weight: 100
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
        - matchExpressions:
            - key: env
              operator: In
              values:
                - uat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>如果一个节点只允许某一个应用调度，这时候就需要用到污点调度了，也就是先给节点打污点，然后需要调度到该节点的Pod需要容忍污点。最稳妥的方式是标签+污点相结合。如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tolerations:
- key: "key1"          #能容忍的污点key
  operator: "Equal"    #Equal等于表示key=value ， Exists不等于，表示当值不等于下面value正常
  value: "value1"      #值
  effect: "NoExecute"  #effect策略
  tolerationSeconds: 3600  #原始的pod多久驱逐，注意只有effect: "NoExecute"才能设置，不然报错
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>当然，除了Pod和Node的关联，还有Pod和Pod之间的关联，一般情况下，为了达到真正的高可用，我们不建议同一个应用的Pod都可以调度到同一个节点，所以我们需要给Pod做反亲和性调度，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>affinity:
  podAntiAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
    - labelSelector:
        matchExpressions:
        - key: app
          operator: In
          values:
          - store
      topologyKey: "kubernetes.io/hostname"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果某个应用亲和其他应用，则可以使用亲和性，这样可以在一定程度上降低网络延迟，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>affinity:
  podAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
    - labelSelector:
        matchExpressions:
        - key: security
          operator: In
          values:
          - S1
      topologyKey: failure-domain.beta.kubernetes.io/zone
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="优雅升级" tabindex="-1"><a class="header-anchor" href="#优雅升级" aria-hidden="true">#</a> &gt;优雅升级</h4>
<p>Pod默认是采用的滚动更新策略，我们关注点主要在新的Pod起来后，老的Pod如何能优雅的处理流量，对外界是无感的。</p>
<p>最简单的方式是&quot;睡几秒&quot;，这种方式并不能保证百分百的优雅处理流量，方式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>lifecycle:
  preStop:
    exec:
      command:
      - /bin/sh
      - -c
      - sleep 15
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果有注册中心，可以在退出的时候先把原服务从注册中心下线再退出，比如这里使用的nacos作为注册中心，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>lifecycle:
  preStop:
    exec:
      command:
        - /bin/sh
        - -c
        - "curl -X DELETE your_nacos_ip:8848/nacos/v1/ns/instance?serviceName=nacos.test.1&amp;ip=${POD_IP}&amp;port=8880&amp;clusterName=DEFAULT" &amp;&amp; sleep 15
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="探针配置" tabindex="-1"><a class="header-anchor" href="#探针配置" aria-hidden="true">#</a> &gt;探针配置</h4>
<p>探针重要吗？重要！它是kubelet判断Pod是否健康的重要依据。</p>
<p>Pod的主要探针有：</p>
<ul>
<li>livenessProbe</li>
<li>readinessProbe</li>
<li>startupProbe</li>
</ul>
<p>其中<code>startupProbe</code>是v1.16版本后才新增的探针，其主要针对启动时间较长的应用，在多数情况下只需要配置<code>livenessProbe</code>和<code>readinessProbe</code>即可。</p>
<p>通常情况下，一个Pod就代表一个应用，所以在配置探针的时候最好能直接反应应用是否正常，很多框架都带有健康检测功能，我们在配置探针的时候可以考虑使用这些健康检测功能，如果框架没有，也可以考虑让开发人员统一开发一个健康检测接口，这样便于标准化健康检测。如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>readinessProbe:
  failureThreshold: 3
  httpGet:
    path: /health
    port: http
    scheme: HTTP
  initialDelaySeconds: 40
  periodSeconds: 10
  successThreshold: 1
  timeoutSeconds: 3
livenessProbe:
  failureThreshold: 3
  httpGet:
    path: /health
    port: http
    scheme: HTTP
  initialDelaySeconds: 60
  periodSeconds: 10
  successThreshold: 1
  timeoutSeconds: 2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>如果需要配置<code>startupProbe</code>，则可以如下配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>startupProbe:
  httpGet:
    path: /health
    prot: 80
  failureThreshold: 10
  initialDelay：10
  periodSeconds: 10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="保护策略" tabindex="-1"><a class="header-anchor" href="#保护策略" aria-hidden="true">#</a> &gt;保护策略</h4>
<p>这里的保护策略主要是指在我们主动销毁Pod的时候，通过保护策略来控制Pod的运行个数。</p>
<p>在K8S中通过<code>PodDisruptionBudget</code>（PDB）来实现这个功能，对于一些重要应用，我们需要为其配置PDB，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>apiVersion: policy/v1beta1
kind: PodDisruptionBudget
metadata:
  name: pdb-demo
spec:
  minAvailable: 2
  selector:
    matchLables:
      app: nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在PDB中，主要通过两个参数来控制Pod的数量：</p>
<ul>
<li>minAvailable：表示最小可用Pod数，表示在Pod集群中处于运行状态的最小Pod数或者是运行状态的Pod数和总数的百分比；</li>
<li>maxUnavailable：表示最大不可用Pod数，表示Pod集群中处于不可用状态的最大Pod数或者不可用状态Pod数和总数的百分比；</li>
</ul>
<blockquote>
<p>注意：minAvailable和maxUnavailable是互斥了，也就是说两者同一时刻只能出现一种。</p>
</blockquote>
<h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2>
<p>日志会贯穿应用的整个生命周期，在排查问题或者分析数据的时候，日志都不可缺少。对于日志，这里主要从以下方面进行分析。</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk4.png" alt="图片" loading="lazy"></p>
<h4 id="日志标准" tabindex="-1"><a class="header-anchor" href="#日志标准" aria-hidden="true">#</a> &gt;日志标准</h4>
<p>日志一般分为业务日志和异常日志，对于日志，我们不希望其太复杂，也不希望其太简单，更多的是希望通过日志达到如下目标：</p>
<ol>
<li>对程序运行情况的记录和监控；</li>
<li>在必要时可详细了解程序内部的运行状态；</li>
<li>对系统性能的影响尽量小；</li>
</ol>
<p>那日志标准如何定义呢？我这里简单整理以下几点：</p>
<ul>
<li>合理使用日志分级</li>
<li>统一输出格式</li>
<li>代码编码规范</li>
<li>日志输出路径统一</li>
<li>日志输出命名规范统一</li>
</ul>
<p>这样规定的主要目的是便于收集和查看日志。</p>
<h4 id="收集" tabindex="-1"><a class="header-anchor" href="#收集" aria-hidden="true">#</a> &gt;收集</h4>
<p>针对不同的日志输出有不同的日志收集方案，主要有以下二种：</p>
<ul>
<li>在Node上部署Logging Agent进行收集</li>
<li>在Pod中以Sidecar形式进行收集</li>
</ul>
<h5 id="在node上部署logging-agent进行收集" tabindex="-1"><a class="header-anchor" href="#在node上部署logging-agent进行收集" aria-hidden="true">#</a> 在Node上部署Logging Agent进行收集</h5>
<p>这种日志收集方案主要针对已经标准输出的日志，架构如下：</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk5.png" alt="图片" loading="lazy">对于非标准输出的日志就没办法进行收集。</p>
<h5 id="在pod中以sidecar形式进行收集" tabindex="-1"><a class="header-anchor" href="#在pod中以sidecar形式进行收集" aria-hidden="true">#</a> 在Pod中以Sidecar形式进行收集</h5>
<p>这种收集方案主要针对非标准输出的日志，可以在Pod中以sidecar的方式运行日志收集客户端，将日志收集到日志中心，架构如下：</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk6.png" alt="图片" loading="lazy"></p>
<p>不过这种方式比较浪费资源，所以最理想的情况就是把应用日志都标准输出，这样收集起来比较简单。</p>
<h4 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> &gt;分析</h4>
<p>在业务正常的情况下，我们其实很少去查看日志内容，只有在出问题的时候才会借助日志分析问题（大部分情况下都是这样），那为什么我这里要把分析提出来呢？</p>
<p>日志其实承载了很多信息，如果能对日志进行有效分析，可以帮助我们识别、排查很多问题，比如阿里云的日志中心，在日志分析方面做的就很不错。</p>
<h4 id="告警" tabindex="-1"><a class="header-anchor" href="#告警" aria-hidden="true">#</a> &gt;告警</h4>
<p>日志告警，可以让我们快速知道问题，也缩小了故障排查范围。不过要做日志告警就必须做好日志“关键字”管理，也就是要确定某一个关键字能够准确的代表一个问题，最好不出现泛指的现象，这样做的好处就是能够让告警更加准备，而不是出现一些告警风暴或者无效告警，久而久之就麻木了。</p>
<h2 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h2>
<p>集群、应用等的生命周期里离不开监控系统，有效的监控系统可以为我们提供更高的可观测性，方便我们线性的分析问题，排查问题以及定位问题，再配上有效的告警通知，也方便我们能快速的知道问题。</p>
<p>对于监控，主要从以下几个方面进行介绍。</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk7.png" alt="图片" loading="lazy"></p>
<h4 id="集群监控" tabindex="-1"><a class="header-anchor" href="#集群监控" aria-hidden="true">#</a> &gt;集群监控</h4>
<p>对于K8S集群以及跑在K8S应用来说，普遍使用Prometheus来进行监控。整个集群的稳定性关乎着应用的稳定性，所以对集群的监控至关重要，下面简单列举了一些监控项，在实际的工作中酌情处理。</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk8.png" alt="图片" loading="lazy"></p>
<h4 id="应用监控" tabindex="-1"><a class="header-anchor" href="#应用监控" aria-hidden="true">#</a> &gt;应用监控</h4>
<p>在很多企业中，并没有接入应用监控，主要还是没有在应用中集成监控指标，导致无法监控，所以在应用开发的时候就强烈建议开发将应用监控加上，将指标按prometheus标准格式暴露出来。</p>
<p>除了开发人员主动暴露指标外，我们也可以通过<code>javaagent</code>方式配置一些exporter，用来抓取一些指标，比如jvm监控指标。</p>
<p>在应用级别做监控，可以将监控粒度更细化，这样可以更容易发现问题。我这里简单整理了一些应用监控项，如下：</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk9.png" alt="图片" loading="lazy"></p>
<p>这些监控项都有对于的exporter来完成，比如redis中间件有redis-exporter，api监控有blcakbox-exporter等。</p>
<h4 id="事件监控" tabindex="-1"><a class="header-anchor" href="#事件监控" aria-hidden="true">#</a> &gt;事件监控</h4>
<p>在Kubernetes中，事件分为两种，一种是Warning事件，表示产生这个事件的状态转换是在非预期的状态之间产生的；另外一种是Normal事件，表示期望到达的状态，和目前达到的状态是一致的。</p>
<p>事件大多数情况下表示正在发生或者已经发生的事，在实际工作中很容易就忽略这类信息，所以我们有必要借助事件监控来规避这类问题。</p>
<p>在K8S中，常用的事件监控是kube-eventer，它可以收集pod/node/kubelet等资源对象的event，还可以收集自定义资源对象的event，然后将这类信息发送到相关人员。</p>
<p>通过事件，我们主要关注的监控项如下：</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk10.png" alt="图片" loading="lazy"></p>
<h4 id="链路监控" tabindex="-1"><a class="header-anchor" href="#链路监控" aria-hidden="true">#</a> &gt;链路监控</h4>
<p>正常情况下，K8S中的应用是单独的个体存在，彼此之间没有显性的联系，这时候就需要一种手段，将应用间的关系表现出来，方便我们跟踪分析整个链路的问题。</p>
<p>目前比较流行的链路监控工具有很多，我这边主要是使用<code>skywalking</code>进行链路监控，其主要agent端比较丰富，也提供了很高的自扩展能力，有兴趣的朋友可以了解一下。</p>
<p>通过链路监控，主要达到以下目的。</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk12.png" alt="图片" loading="lazy"></p>
<h4 id="告警通知" tabindex="-1"><a class="header-anchor" href="#告警通知" aria-hidden="true">#</a> &gt;告警通知</h4>
<p>很多人会忽略告警通知，觉得告警就行。但是在做告警通知的时候还是需要仔细去考虑的。</p>
<p>如下简单整理一下关注点。</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/qk13.png" alt="图片" loading="lazy"></p>
<p>个人觉得难点在于<code>哪些指标需要告警</code>。我们在选取指标的时候一定要遵循以下规则：</p>
<ul>
<li>告警的指标具有唯一性</li>
<li>告警的指标能正确反应问题</li>
<li>所暴露的问题是需要介入解决的</li>
</ul>
<p>综合这些规则考虑，才方便我们选取需要的指标。</p>
<p>第二就是紧急程度分类，这个主要是根据这个告警指标所暴露出来的问题是不是需要我们及时去解决，还有影响范围来综合衡量。</p>
<p>故障升级主要是针对需要解决的问题没有解决而做的一种策略，提高故障等级，也相当于提高了紧急程度了。通知渠道分类主要是方便我们区分不同的告警，还有如果能快速接收到告警信息。</p>
</template>
