import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-de4b287a.js";const t={},p=e(`<h1 id="ingress-nginx-安装配置" tabindex="-1"><a class="header-anchor" href="#ingress-nginx-安装配置" aria-hidden="true">#</a> ingress-nginx 安装配置</h1><p>对外暴露集群服务</p><p>前面我们学习了在 Kubernetes 集群内部使用 kube-dns 实现服务发现的功能，那么我们部署在 Kubernetes 集群中的应用如何暴露给外部的用户使用呢？我们知道可以使用 <code>NodePort</code> 和 <code>LoadBlancer</code> 类型的 Service 可以把应用暴露给外部用户使用，除此之外，Kubernetes 还为我们提供了一个非常重要的资源对象可以用来暴露服务给外部用户，那就是 <code>Ingress</code>。对于小规模的应用我们使用 NodePort 或许能够满足我们的需求，但是当你的应用越来越多的时候，你就会发现对于 NodePort 的管理就非常麻烦了，这个时候使用 Ingress 就非常方便了，可以避免管理大量的端口。</p><p>Ingress 其实就是从 Kuberenets 集群外部访问集群的一个入口，将外部的请求转发到集群内不同的 Service 上，其实就相当于 nginx、haproxy 等负载均衡代理服务器，可能你会觉得我们直接使用 nginx 就实现了，但是只使用 nginx 这种方式有很大缺陷，每次有新服务加入的时候怎么改 Nginx 配置？不可能让我们去手动更改或者滚动更新前端的 Nginx Pod 吧？那我们再加上一个服务发现的工具比如 consul 如何？貌似是可以，对吧？Ingress 实际上就是这样实现的，只是服务发现的功能自己实现了，不需要使用第三方的服务了，然后再加上一个域名规则定义，路由信息的刷新依靠 Ingress Controller 来提供。</p><p>Ingress Controller 可以理解为一个监听器，通过不断地监听 kube-apiserver，实时的感知后端 Service、Pod 的变化，当得到这些信息变化后，Ingress Controller 再结合 Ingress 的配置，更新反向代理负载均衡器，达到服务发现的作用。其实这点和服务发现工具 consul、 consul-template 非常类似。</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/ingress-flow.png" alt="ingress flow"></p><p>现在可以供大家使用的 Ingress Controller 有很多，比如 traefik、nginx-controller、Kubernetes Ingress Controller for Kong、HAProxy Ingress controller，当然你也可以自己实现一个 Ingress Controller，现在普遍用得较多的是 traefik 和 nginx-controller，traefik 的性能较 nginx-controller 差，但是配置使用要简单许多，我们这里会重点给大家介绍 nginx-controller 以及 traefik 的使用。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>NGINX Ingress Controller 是使用 Kubernetes Ingress 资源对象构建的，用 ConfigMap 来存储 Nginx 配置的一种 Ingress Controller 实现。</p><p>要使用 Ingress 对外暴露服务，就需要提前安装一个 Ingress Controller，我们这里就先来安装 NGINX Ingress Controller，由于 nginx-ingress 所在的节点需要能够访问外网，这样域名可以解析到这些节点上直接使用，所以需要让 nginx-ingress 绑定节点的 80 和 443 端口，所以可以使用 hostPort 来进行访问，当然对于线上环境来说为了保证高可用，一般是需要运行多个 nginx-ingress 实例的，然后可以用一个 nginx/haproxy 作为入口，通过 keepalived 来访问边缘节点的 vip 地址。</p><p>边缘节点</p><p>所谓的边缘节点即集群内部用来向集群外暴露服务能力的节点，集群外部的服务通过该节点来调用集群内部的服务，边缘节点是集群内外交流的一个Endpoint。</p><h3 id="安装-helm" tabindex="-1"><a class="header-anchor" href="#安装-helm" aria-hidden="true">#</a> 安装 helm</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">helmversion</span><span class="token operator">=</span><span class="token number">3.7</span>.2
<span class="token function">wget</span> https://get.helm.sh/helm-v<span class="token variable">\${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> helm-v<span class="token variable">\${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">mv</span> linux-amd64/helm /usr/bin/
helm completion <span class="token function">bash</span>
<span class="token comment"># 将输出的文件拷贝到 \`\`/etc/bash_completion.d/helm.sh\`\` 文件中</span>
<span class="token builtin class-name">source</span> /etc/bash_completion.d/helm.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 ingress-nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm pull ingress-nginx/ingress-nginx --version 3.40.0
tar -xvf ingress-nginx-3.40.0.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备份并修改 <code>values.yaml</code></p><p>主要修改内容如下：</p><ul><li>注释 digest</li><li>修改 dnsPolicy 为 ClusterFirstWithHostNet</li><li>修改 hostNetwork 为 true</li><li>修改 publishService.enabled 为 false</li><li>修改 kind 为 DaemonSet</li><li>新增 nodeSelector 的标签 ingress: &quot;true&quot;</li><li>修改 service.enable 为 false</li><li>修改 defaultBackend.enabled 为 true</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">controller</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> controller
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">registry</span><span class="token punctuation">:</span> k8s.gcr.io
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx/controller
    <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token string">&quot;v0.50.0&quot;</span>
    <span class="token comment">#digest: sha256:f46fc2d161c97a9d950635acb86fb3f8d4adcfb03ee241ea89c6cde16aa3fdf8</span>
    <span class="token key atrule">pullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">101</span>
    <span class="token key atrule">allowPrivilegeEscalation</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">existingPsp</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">containerName</span><span class="token punctuation">:</span> controller
  <span class="token key atrule">containerPort</span><span class="token punctuation">:</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">https</span><span class="token punctuation">:</span> <span class="token number">443</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">configAnnotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">proxySetHeaders</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">addHeaders</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">dnsConfig</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">dnsPolicy</span><span class="token punctuation">:</span> ClusterFirstWithHostNet
  <span class="token key atrule">reportNodeInternalIp</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">allowSnippetAnnotations</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">hostPort</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">https</span><span class="token punctuation">:</span> <span class="token number">443</span>
  <span class="token key atrule">electionID</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>controller<span class="token punctuation">-</span>leader
  <span class="token key atrule">ingressClass</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">ingressClassResource</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">parameters</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">podLabels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">podSecurityContext</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">sysctls</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">publishService</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">pathOverride</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">scope</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>   <span class="token comment"># defaults to .Release.Namespace</span>
  <span class="token key atrule">configMapNamespace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>   <span class="token comment"># defaults to .Release.Namespace</span>
    <span class="token key atrule">configMapNamespace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>   <span class="token comment"># defaults to .Release.Namespace</span>
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">udp</span><span class="token punctuation">:</span>
    <span class="token key atrule">configMapNamespace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>   <span class="token comment"># defaults to .Release.Namespace</span>
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">maxmindLicenseKey</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">extraArgs</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">extraEnvs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">updateStrategy</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">minReadySeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
    <span class="token key atrule">ingress</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
    <span class="token key atrule">kubernetes.io/os</span><span class="token punctuation">:</span> linux
  <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
    <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/healthz&quot;</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10254</span>
      <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP
    <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
    <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/healthz&quot;</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10254</span>
      <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP
    <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">healthCheckPath</span><span class="token punctuation">:</span> <span class="token string">&quot;/healthz&quot;</span>
  <span class="token key atrule">podAnnotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">replicaCount</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">minAvailable</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 100m
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 90Mi
  <span class="token key atrule">autoscaling</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">minReplicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">maxReplicas</span><span class="token punctuation">:</span> <span class="token number">11</span>
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">autoscalingTemplate</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">keda</span><span class="token punctuation">:</span>
    <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> <span class="token string">&quot;keda.sh/v1alpha1&quot;</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">minReplicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">maxReplicas</span><span class="token punctuation">:</span> <span class="token number">11</span>
    <span class="token key atrule">pollingInterval</span><span class="token punctuation">:</span> <span class="token number">30</span>
    <span class="token key atrule">cooldownPeriod</span><span class="token punctuation">:</span> <span class="token number">300</span>
    <span class="token key atrule">restoreToOriginalReplicaCount</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">scaledObject</span><span class="token punctuation">:</span>
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">enableMimalloc</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">customTemplate</span><span class="token punctuation">:</span>
    <span class="token key atrule">configMapName</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token key atrule">configMapKey</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">externalIPs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token key atrule">loadBalancerSourceRanges</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token key atrule">enableHttp</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">enableHttps</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">https</span><span class="token punctuation">:</span> <span class="token number">443</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> http
      <span class="token key atrule">https</span><span class="token punctuation">:</span> https
    <span class="token key atrule">nodePorts</span><span class="token punctuation">:</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token key atrule">https</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token key atrule">udp</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">internal</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">loadBalancerSourceRanges</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">extraContainers</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">extraVolumeMounts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">extraVolumes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">extraInitContainers</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">admissionWebhooks</span><span class="token punctuation">:</span>
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">failurePolicy</span><span class="token punctuation">:</span> Fail
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8443</span>
    <span class="token key atrule">certificate</span><span class="token punctuation">:</span> <span class="token string">&quot;/usr/local/certificates/cert&quot;</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">&quot;/usr/local/certificates/key&quot;</span>
    <span class="token key atrule">namespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">objectSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">existingPsp</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">externalIPs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token key atrule">loadBalancerSourceRanges</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token key atrule">servicePort</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">createSecretJob</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">patchWebhookJob</span><span class="token punctuation">:</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">patch</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span>
        <span class="token key atrule">registry</span><span class="token punctuation">:</span> docker.io
        <span class="token key atrule">image</span><span class="token punctuation">:</span> jettech/kube<span class="token punctuation">-</span>webhook<span class="token punctuation">-</span>certgen
        <span class="token key atrule">pullPolicy</span><span class="token punctuation">:</span> IfNotPresent
      <span class="token key atrule">priorityClassName</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token key atrule">podAnnotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">kubernetes.io/os</span><span class="token punctuation">:</span> linux
      <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">2000</span>
  <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10254</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">externalIPs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token key atrule">loadBalancerSourceRanges</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token key atrule">servicePort</span><span class="token punctuation">:</span> <span class="token number">10254</span>
    <span class="token key atrule">serviceMonitor</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">additionalLabels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token key atrule">namespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">scrapeInterval</span><span class="token punctuation">:</span> 30s
      <span class="token key atrule">metricRelabelings</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token key atrule">prometheusRule</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">additionalLabels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">rules</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
    <span class="token key atrule">preStop</span><span class="token punctuation">:</span>
      <span class="token key atrule">exec</span><span class="token punctuation">:</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> /wait<span class="token punctuation">-</span>shutdown
  <span class="token key atrule">priorityClassName</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
<span class="token key atrule">revisionHistoryLimit</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token key atrule">defaultBackend</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> defaultbackend
  <span class="token key atrule">image</span><span class="token punctuation">:</span>
    <span class="token key atrule">registry</span><span class="token punctuation">:</span> k8s.gcr.io
    <span class="token key atrule">image</span><span class="token punctuation">:</span> defaultbackend<span class="token punctuation">-</span>amd64
    <span class="token key atrule">pullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">65534</span>
    <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">readOnlyRootFilesystem</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">allowPrivilegeEscalation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">existingPsp</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">extraArgs</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">serviceAccount</span><span class="token punctuation">:</span>
    <span class="token key atrule">create</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token key atrule">automountServiceAccountToken</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">extraEnvs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
    <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">3</span>
    <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>
    <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
    <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">6</span>
    <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">podSecurityContext</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">podLabels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubernetes.io/os</span><span class="token punctuation">:</span> linux
  <span class="token key atrule">podAnnotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">replicaCount</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">minAvailable</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">extraVolumeMounts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">extraVolumes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">autoscaling</span><span class="token punctuation">:</span>
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">minReplicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">maxReplicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">externalIPs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token key atrule">loadBalancerSourceRanges</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token key atrule">servicePort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token key atrule">priorityClassName</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
<span class="token key atrule">rbac</span><span class="token punctuation">:</span>
  <span class="token key atrule">create</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">scope</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">podSecurityPolicy</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">serviceAccount</span><span class="token punctuation">:</span>
  <span class="token key atrule">create</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">automountServiceAccountToken</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token key atrule">udp</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token key atrule">dhParam</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用如下命令安装 ingress-nginx 应用到 ingress-nginx 的命名空间中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl create ns ingress-nginx
kubectl label nodes nodeNmae ingress=true
helm -n ingress-nginx install ingress-nginx ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>镜像请提前下载好，并传到指定 node 上</p><p>部署完成后查看 Pod 的运行状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># kubectl get svc -n ingress-nginx
NAME                                 TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
ingress-nginx-controller-admission   ClusterIP   10.70.81.243   &lt;none&gt;        443/TCP   3h14m
ingress-nginx-defaultbackend         ClusterIP   10.70.81.196   &lt;none&gt;        80/TCP    3h14m
# kubectl get pods -n ingress-nginx
NAME                                            READY   STATUS    RESTARTS   AGE
ingress-nginx-controller-9q4gr                  1/1     Running   0          3h6m
ingress-nginx-controller-gvk4z                  1/1     Running   0          3h6m
ingress-nginx-defaultbackend-7b65f5957c-vbg9l   1/1     Running   0          3h15m
# POD_NAME=$(kubectl get pods -l app.kubernetes.io/name=ingress-nginx -n ingress-nginx -o jsonpath=&#39;{.items[0].metadata.name}&#39;)
 # kubectl exec -it $POD_NAME -n ingress-nginx -- /nginx-ingress-controller --version
-------------------------------------------------------------------------------
NGINX Ingress controller
  Release:       v0.50.0
  Build:         34a35a24cfef17aa1392b7fb2280f323b253c6b2
  Repository:    https://github.com/kubernetes/ingress-nginx
  nginx version: nginx/1.19.9

-------------------------------------------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当看到上面的信息证明 ingress-nginx 部署成功了。</p><h2 id="ingress-demo" tabindex="-1"><a class="header-anchor" href="#ingress-demo" aria-hidden="true">#</a> Ingress-demo</h2><p>安装成功后，现在我们来为一个 nginx 应用创建一个 Ingress 资源，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx
spec:
  selector:
    matchLabels:
      app: my-nginx
  template:
    metadata:
      labels:
        app: my-nginx
    spec:
      containers:
      - name: my-nginx
        image: nginx
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: my-nginx
  labels:
    app: my-nginx
spec:
  ports:
  - port: 80
    protocol: TCP
    name: http
  selector:
    app: my-nginx
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: my-nginx
  annotations:
    kubernetes.io/ingress.class: &quot;nginx&quot;
spec:
  rules:
  - host: ttt.clay-wangzhi.com  # 将域名映射到 my-nginx 服务
    http:
      paths:
      - path: /
        backend:
          serviceName: my-nginx  # 将所有请求发送到 my-nginx 服务的 80 端口
          servicePort: 80     # 不过需要注意大部分Ingress controller都不是直接转发到Service
                            # 而是只是通过Service来获取后端的Endpoints列表，直接转发到Pod，这样可以减少网络跳转，提高性能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接创建上面的资源对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># kubectl apply -f ngdemo.yaml
deployment.apps &quot;my-nginx&quot; created
service &quot;my-nginx&quot; created
ingress.extensions &quot;my-nginx&quot; created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意我们在 Ingress 资源对象中添加了一个 annotations：<code>kubernetes.io/ingress.class: &quot;nginx&quot;</code>，这就是指定让这个 Ingress 通过 nginx-ingress 来处理。</p><p>上面资源创建成功后，然后我们可以将域名 <code>ttt.clay-wangzhi.com</code> 解析到 <code>ingress-nginx</code> 所在的<strong>边缘节点</strong>中的任意一个，当然也可以在本地<code>/etc/hosts</code>中添加对应的映射也可以，然后就可以通过域名进行访问了。</p><p>下图显示了客户端是如果通过 Ingress Controller 连接到其中一个 Pod 的流程，客户端首先对 <code>ttt.clay-wangzhi.com</code> 执行 DNS 解析，得到 Ingress Controller 所在节点的 IP，然后客户端向 Ingress Controller 发送 HTTP 请求，然后根据 Ingress 对象里面的描述匹配域名，找到对应的 Service 对象，并获取关联的 Endpoints 列表，将客户端的请求转发给其中一个 Pod。</p><p>Todo: 把 helm charts 归档到git，保存 commit 记录即可，不要每次都一个个手动改参数</p>`,35),l=[p];function i(c,o){return s(),a("div",null,l)}const k=n(t,[["render",i],["__file","ingress-nginx.html.vue"]]);export{k as default};
