import{_ as n,e as s}from"./app.4908d213.js";const a={},e=s(`<h1 id="ingress" tabindex="-1"><a class="header-anchor" href="#ingress" aria-hidden="true">#</a> Ingress</h1><p>\u5BF9\u5916\u66B4\u9732\u96C6\u7FA4\u670D\u52A1</p><p>\u524D\u9762\u6211\u4EEC\u5B66\u4E60\u4E86\u5728 Kubernetes \u96C6\u7FA4\u5185\u90E8\u4F7F\u7528 kube-dns \u5B9E\u73B0\u670D\u52A1\u53D1\u73B0\u7684\u529F\u80FD\uFF0C\u90A3\u4E48\u6211\u4EEC\u90E8\u7F72\u5728 Kubernetes \u96C6\u7FA4\u4E2D\u7684\u5E94\u7528\u5982\u4F55\u66B4\u9732\u7ED9\u5916\u90E8\u7684\u7528\u6237\u4F7F\u7528\u5462\uFF1F\u6211\u4EEC\u77E5\u9053\u53EF\u4EE5\u4F7F\u7528 <code>NodePort</code> \u548C <code>LoadBlancer</code> \u7C7B\u578B\u7684 Service \u53EF\u4EE5\u628A\u5E94\u7528\u66B4\u9732\u7ED9\u5916\u90E8\u7528\u6237\u4F7F\u7528\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0CKubernetes \u8FD8\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u8D44\u6E90\u5BF9\u8C61\u53EF\u4EE5\u7528\u6765\u66B4\u9732\u670D\u52A1\u7ED9\u5916\u90E8\u7528\u6237\uFF0C\u90A3\u5C31\u662F <code>Ingress</code>\u3002\u5BF9\u4E8E\u5C0F\u89C4\u6A21\u7684\u5E94\u7528\u6211\u4EEC\u4F7F\u7528 NodePort \u6216\u8BB8\u80FD\u591F\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\uFF0C\u4F46\u662F\u5F53\u4F60\u7684\u5E94\u7528\u8D8A\u6765\u8D8A\u591A\u7684\u65F6\u5019\uFF0C\u4F60\u5C31\u4F1A\u53D1\u73B0\u5BF9\u4E8E NodePort \u7684\u7BA1\u7406\u5C31\u975E\u5E38\u9EBB\u70E6\u4E86\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F7F\u7528 Ingress \u5C31\u975E\u5E38\u65B9\u4FBF\u4E86\uFF0C\u53EF\u4EE5\u907F\u514D\u7BA1\u7406\u5927\u91CF\u7684\u7AEF\u53E3\u3002</p><p>Ingress \u5176\u5B9E\u5C31\u662F\u4ECE Kuberenets \u96C6\u7FA4\u5916\u90E8\u8BBF\u95EE\u96C6\u7FA4\u7684\u4E00\u4E2A\u5165\u53E3\uFF0C\u5C06\u5916\u90E8\u7684\u8BF7\u6C42\u8F6C\u53D1\u5230\u96C6\u7FA4\u5185\u4E0D\u540C\u7684 Service \u4E0A\uFF0C\u5176\u5B9E\u5C31\u76F8\u5F53\u4E8E nginx\u3001haproxy \u7B49\u8D1F\u8F7D\u5747\u8861\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u53EF\u80FD\u4F60\u4F1A\u89C9\u5F97\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528 nginx \u5C31\u5B9E\u73B0\u4E86\uFF0C\u4F46\u662F\u53EA\u4F7F\u7528 nginx \u8FD9\u79CD\u65B9\u5F0F\u6709\u5F88\u5927\u7F3A\u9677\uFF0C\u6BCF\u6B21\u6709\u65B0\u670D\u52A1\u52A0\u5165\u7684\u65F6\u5019\u600E\u4E48\u6539 Nginx \u914D\u7F6E\uFF1F\u4E0D\u53EF\u80FD\u8BA9\u6211\u4EEC\u53BB\u624B\u52A8\u66F4\u6539\u6216\u8005\u6EDA\u52A8\u66F4\u65B0\u524D\u7AEF\u7684 Nginx Pod \u5427\uFF1F\u90A3\u6211\u4EEC\u518D\u52A0\u4E0A\u4E00\u4E2A\u670D\u52A1\u53D1\u73B0\u7684\u5DE5\u5177\u6BD4\u5982 consul \u5982\u4F55\uFF1F\u8C8C\u4F3C\u662F\u53EF\u4EE5\uFF0C\u5BF9\u5427\uFF1FIngress \u5B9E\u9645\u4E0A\u5C31\u662F\u8FD9\u6837\u5B9E\u73B0\u7684\uFF0C\u53EA\u662F\u670D\u52A1\u53D1\u73B0\u7684\u529F\u80FD\u81EA\u5DF1\u5B9E\u73B0\u4E86\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528\u7B2C\u4E09\u65B9\u7684\u670D\u52A1\u4E86\uFF0C\u7136\u540E\u518D\u52A0\u4E0A\u4E00\u4E2A\u57DF\u540D\u89C4\u5219\u5B9A\u4E49\uFF0C\u8DEF\u7531\u4FE1\u606F\u7684\u5237\u65B0\u4F9D\u9760 Ingress Controller \u6765\u63D0\u4F9B\u3002</p><p>Ingress Controller \u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u76D1\u542C\u5668\uFF0C\u901A\u8FC7\u4E0D\u65AD\u5730\u76D1\u542C kube-apiserver\uFF0C\u5B9E\u65F6\u7684\u611F\u77E5\u540E\u7AEF Service\u3001Pod \u7684\u53D8\u5316\uFF0C\u5F53\u5F97\u5230\u8FD9\u4E9B\u4FE1\u606F\u53D8\u5316\u540E\uFF0CIngress Controller \u518D\u7ED3\u5408 Ingress \u7684\u914D\u7F6E\uFF0C\u66F4\u65B0\u53CD\u5411\u4EE3\u7406\u8D1F\u8F7D\u5747\u8861\u5668\uFF0C\u8FBE\u5230\u670D\u52A1\u53D1\u73B0\u7684\u4F5C\u7528\u3002\u5176\u5B9E\u8FD9\u70B9\u548C\u670D\u52A1\u53D1\u73B0\u5DE5\u5177 consul\u3001 consul-template \u975E\u5E38\u7C7B\u4F3C\u3002</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/ingress-flow.png" alt="ingress flow" loading="lazy"></p><p>\u73B0\u5728\u53EF\u4EE5\u4F9B\u5927\u5BB6\u4F7F\u7528\u7684 Ingress Controller \u6709\u5F88\u591A\uFF0C\u6BD4\u5982 traefik\u3001nginx-controller\u3001Kubernetes Ingress Controller for Kong\u3001HAProxy Ingress controller\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A Ingress Controller\uFF0C\u73B0\u5728\u666E\u904D\u7528\u5F97\u8F83\u591A\u7684\u662F traefik \u548C nginx-controller\uFF0Ctraefik \u7684\u6027\u80FD\u8F83 nginx-controller \u5DEE\uFF0C\u4F46\u662F\u914D\u7F6E\u4F7F\u7528\u8981\u7B80\u5355\u8BB8\u591A\uFF0C\u6211\u4EEC\u8FD9\u91CC\u4F1A\u91CD\u70B9\u7ED9\u5927\u5BB6\u4ECB\u7ECD nginx-controller \u4EE5\u53CA traefik \u7684\u4F7F\u7528\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>NGINX Ingress Controller \u662F\u4F7F\u7528 Kubernetes Ingress \u8D44\u6E90\u5BF9\u8C61\u6784\u5EFA\u7684\uFF0C\u7528 ConfigMap \u6765\u5B58\u50A8 Nginx \u914D\u7F6E\u7684\u4E00\u79CD Ingress Controller \u5B9E\u73B0\u3002</p><p>\u8981\u4F7F\u7528 Ingress \u5BF9\u5916\u66B4\u9732\u670D\u52A1\uFF0C\u5C31\u9700\u8981\u63D0\u524D\u5B89\u88C5\u4E00\u4E2A Ingress Controller\uFF0C\u6211\u4EEC\u8FD9\u91CC\u5C31\u5148\u6765\u5B89\u88C5 NGINX Ingress Controller\uFF0C\u7531\u4E8E nginx-ingress \u6240\u5728\u7684\u8282\u70B9\u9700\u8981\u80FD\u591F\u8BBF\u95EE\u5916\u7F51\uFF0C\u8FD9\u6837\u57DF\u540D\u53EF\u4EE5\u89E3\u6790\u5230\u8FD9\u4E9B\u8282\u70B9\u4E0A\u76F4\u63A5\u4F7F\u7528\uFF0C\u6240\u4EE5\u9700\u8981\u8BA9 nginx-ingress \u7ED1\u5B9A\u8282\u70B9\u7684 80 \u548C 443 \u7AEF\u53E3\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528 hostPort \u6765\u8FDB\u884C\u8BBF\u95EE\uFF0C\u5F53\u7136\u5BF9\u4E8E\u7EBF\u4E0A\u73AF\u5883\u6765\u8BF4\u4E3A\u4E86\u4FDD\u8BC1\u9AD8\u53EF\u7528\uFF0C\u4E00\u822C\u662F\u9700\u8981\u8FD0\u884C\u591A\u4E2A nginx-ingress \u5B9E\u4F8B\u7684\uFF0C\u7136\u540E\u53EF\u4EE5\u7528\u4E00\u4E2A nginx/haproxy \u4F5C\u4E3A\u5165\u53E3\uFF0C\u901A\u8FC7 keepalived \u6765\u8BBF\u95EE\u8FB9\u7F18\u8282\u70B9\u7684 vip \u5730\u5740\u3002</p><p>\u8FB9\u7F18\u8282\u70B9</p><p>\u6240\u8C13\u7684\u8FB9\u7F18\u8282\u70B9\u5373\u96C6\u7FA4\u5185\u90E8\u7528\u6765\u5411\u96C6\u7FA4\u5916\u66B4\u9732\u670D\u52A1\u80FD\u529B\u7684\u8282\u70B9\uFF0C\u96C6\u7FA4\u5916\u90E8\u7684\u670D\u52A1\u901A\u8FC7\u8BE5\u8282\u70B9\u6765\u8C03\u7528\u96C6\u7FA4\u5185\u90E8\u7684\u670D\u52A1\uFF0C\u8FB9\u7F18\u8282\u70B9\u662F\u96C6\u7FA4\u5185\u5916\u4EA4\u6D41\u7684\u4E00\u4E2AEndpoint\u3002</p><h3 id="\u5B89\u88C5-helm" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-helm" aria-hidden="true">#</a> \u5B89\u88C5 helm</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">helmversion</span><span class="token operator">=</span><span class="token number">3.7</span>.2
<span class="token function">wget</span> https://get.helm.sh/helm-v<span class="token variable">\${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">tar</span> -xvf helm-v<span class="token variable">\${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">mv</span> linux-amd64/helm /usr/bin/
helm completion <span class="token function">bash</span>
<span class="token comment"># \u5C06\u8F93\u51FA\u7684\u6587\u4EF6\u62F7\u8D1D\u5230 \`\`/etc/bash_completion.d/helm.sh\`\` \u6587\u4EF6\u4E2D</span>
<span class="token builtin class-name">source</span> /etc/bash_completion.d/helm.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5B89\u88C5 ingress-nginx</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm pull ingress-nginx/ingress-nginx --version 3.40.0
tar -xvf ingress-nginx-3.40.0.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5907\u4EFD\u5E76\u4FEE\u6539 <code>values.yaml</code></p><p>\u4E3B\u8981\u4FEE\u6539\u5185\u5BB9\u5982\u4E0B\uFF1A</p><ul><li>\u6CE8\u91CA digest</li><li>\u4FEE\u6539 dnsPolicy \u4E3A ClusterFirstWithHostNet</li><li>\u4FEE\u6539 hostNetwork \u4E3A true</li><li>\u4FEE\u6539 publishService.enabled \u4E3A false</li><li>\u4FEE\u6539 kind \u4E3A DaemonSet</li><li>\u65B0\u589E nodeSelector \u7684\u6807\u7B7E ingress: &quot;true&quot;</li><li>\u4FEE\u6539 service.enable \u4E3A false</li><li>\u4FEE\u6539 defaultBackend.enabled \u4E3A true</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">controller</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br></div></div><p>\u7136\u540E\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u5B89\u88C5 ingress-nginx \u5E94\u7528\u5230 ingress-nginx \u7684\u547D\u540D\u7A7A\u95F4\u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl create ns ingress-nginx
kubectl label nodes nodeNmae ingress=true
helm -n ingress-nginx install ingress-nginx ./
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u955C\u50CF\u8BF7\u63D0\u524D\u4E0B\u8F7D\u597D\uFF0C\u5E76\u4F20\u5230\u6307\u5B9A node \u4E0A</p><p>\u90E8\u7F72\u5B8C\u6210\u540E\u67E5\u770B Pod \u7684\u8FD0\u884C\u72B6\u6001\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># kubectl get svc -n ingress-nginx
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5F53\u770B\u5230\u4E0A\u9762\u7684\u4FE1\u606F\u8BC1\u660E ingress-nginx \u90E8\u7F72\u6210\u529F\u4E86\u3002</p><h2 id="ingress-demo" tabindex="-1"><a class="header-anchor" href="#ingress-demo" aria-hidden="true">#</a> Ingress-demo</h2><p>\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u73B0\u5728\u6211\u4EEC\u6765\u4E3A\u4E00\u4E2A nginx \u5E94\u7528\u521B\u5EFA\u4E00\u4E2A Ingress \u8D44\u6E90\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiVersion: apps/v1
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
  - host: ttt.clay-wangzhi.com  # \u5C06\u57DF\u540D\u6620\u5C04\u5230 my-nginx \u670D\u52A1
    http:
      paths:
      - path: /
        backend:
          serviceName: my-nginx  # \u5C06\u6240\u6709\u8BF7\u6C42\u53D1\u9001\u5230 my-nginx \u670D\u52A1\u7684 80 \u7AEF\u53E3
          servicePort: 80     # \u4E0D\u8FC7\u9700\u8981\u6CE8\u610F\u5927\u90E8\u5206Ingress controller\u90FD\u4E0D\u662F\u76F4\u63A5\u8F6C\u53D1\u5230Service
                            # \u800C\u662F\u53EA\u662F\u901A\u8FC7Service\u6765\u83B7\u53D6\u540E\u7AEF\u7684Endpoints\u5217\u8868\uFF0C\u76F4\u63A5\u8F6C\u53D1\u5230Pod\uFF0C\u8FD9\u6837\u53EF\u4EE5\u51CF\u5C11\u7F51\u7EDC\u8DF3\u8F6C\uFF0C\u63D0\u9AD8\u6027\u80FD
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>\u76F4\u63A5\u521B\u5EFA\u4E0A\u9762\u7684\u8D44\u6E90\u5BF9\u8C61\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># kubectl apply -f ngdemo.yaml
deployment.apps &quot;my-nginx&quot; created
service &quot;my-nginx&quot; created
ingress.extensions &quot;my-nginx&quot; created
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6CE8\u610F\u6211\u4EEC\u5728 Ingress \u8D44\u6E90\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u4E86\u4E00\u4E2A annotations\uFF1A<code>kubernetes.io/ingress.class: &quot;nginx&quot;</code>\uFF0C\u8FD9\u5C31\u662F\u6307\u5B9A\u8BA9\u8FD9\u4E2A Ingress \u901A\u8FC7 nginx-ingress \u6765\u5904\u7406\u3002</p><p>\u4E0A\u9762\u8D44\u6E90\u521B\u5EFA\u6210\u529F\u540E\uFF0C\u7136\u540E\u6211\u4EEC\u53EF\u4EE5\u5C06\u57DF\u540D <code>ttt.clay-wangzhi.com</code> \u89E3\u6790\u5230 <code>ingress-nginx</code> \u6240\u5728\u7684<strong>\u8FB9\u7F18\u8282\u70B9</strong>\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u5728\u672C\u5730<code>/etc/hosts</code>\u4E2D\u6DFB\u52A0\u5BF9\u5E94\u7684\u6620\u5C04\u4E5F\u53EF\u4EE5\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7\u57DF\u540D\u8FDB\u884C\u8BBF\u95EE\u4E86\u3002</p><p>\u4E0B\u56FE\u663E\u793A\u4E86\u5BA2\u6237\u7AEF\u662F\u5982\u679C\u901A\u8FC7 Ingress Controller \u8FDE\u63A5\u5230\u5176\u4E2D\u4E00\u4E2A Pod \u7684\u6D41\u7A0B\uFF0C\u5BA2\u6237\u7AEF\u9996\u5148\u5BF9 <code>ttt.clay-wangzhi.com</code> \u6267\u884C DNS \u89E3\u6790\uFF0C\u5F97\u5230 Ingress Controller \u6240\u5728\u8282\u70B9\u7684 IP\uFF0C\u7136\u540E\u5BA2\u6237\u7AEF\u5411 Ingress Controller \u53D1\u9001 HTTP \u8BF7\u6C42\uFF0C\u7136\u540E\u6839\u636E Ingress \u5BF9\u8C61\u91CC\u9762\u7684\u63CF\u8FF0\u5339\u914D\u57DF\u540D\uFF0C\u627E\u5230\u5BF9\u5E94\u7684 Service \u5BF9\u8C61\uFF0C\u5E76\u83B7\u53D6\u5173\u8054\u7684 Endpoints \u5217\u8868\uFF0C\u5C06\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5176\u4E2D\u4E00\u4E2A Pod\u3002</p>`,34);function p(t,l){return e}var o=n(a,[["render",p],["__file","ingress-nginx.html.vue"]]);export{o as default};
