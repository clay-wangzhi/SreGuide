<template><h1 id="harbor-安装配置-k8s" tabindex="-1"><a class="header-anchor" href="#harbor-安装配置-k8s" aria-hidden="true">#</a> Harbor 安装配置(k8s)</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载 helm charts</span>
helm repo <span class="token function">add</span> harbor https://helm.goharbor.io
helm repo update
helm pull harbor/harbor --version<span class="token operator">=</span><span class="token number">1.9</span>.4
<span class="token function">tar</span> -xvf harbor-1.9.4.tgz

<span class="token comment"># 配置 tls secret</span>
<span class="token comment">## 下载nginx使用的 key 和 pem 传到服务器，并重命名为 tls.xxx</span>
<span class="token comment">## 使用 openssl 把 pem 证书转换为 crt</span>
<span class="token function">mkdir</span> harbor-tls
<span class="token builtin class-name">cd</span> harbor-tls/
openssl x509 -in  tls.pem -out tls.crt
kubectl create ns harbor
kubectl -n harbor create secret tls harbor-secret   --cert<span class="token operator">=</span>tls.crt   --key<span class="token operator">=</span>tls.key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>修改 <code>charts values.yaml</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/harbor/
<span class="token function">cp</span> values.yaml<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>主要修改如下位置：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">expose.tls.certSource</span><span class="token punctuation">:</span> secret
<span class="token key atrule">expose.tls.secret.secretName</span><span class="token punctuation">:</span> <span class="token string">"harbor-secret"</span>
<span class="token key atrule">expose.ingress.hsots.core</span><span class="token punctuation">:</span> <span class="token string">"xxx.xxx.xx"</span>
<span class="token key atrule">externalURL</span><span class="token punctuation">:</span> <span class="token string">"xxx.xxx.xx"</span>
<span class="token key atrule">ipFamily.ipv6.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 关闭 ipv6</span>
<span class="token comment"># 所有的 storageClass 改为 "longhorn",我本地使用的 longhorn 作为持久化存储</span>
<span class="token key atrule">persistence.persistentVolumeClaim.registry.size</span><span class="token punctuation">:</span> 500Gi <span class="token comment"># 变大</span>
<span class="token key atrule">harborAdminPassword</span><span class="token punctuation">:</span> <span class="token string">"xxxxxxx"</span> <span class="token comment"># 修改初始化密码</span>
<span class="token key atrule">metrics.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 暴露监控指标</span>
<span class="token key atrule">metrics.serviceMonitor.enabled</span><span class="token punctuation">:</span>  <span class="token boolean important">true</span> <span class="token comment"># 添加 servicemonitor</span>
<span class="token key atrule">metrics.serviceMonitor.additionalLabels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">"release"</span><span class="token punctuation">:</span> <span class="token string">"monitoring"</span><span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>helm <span class="token function">install</span> harbor ./ -n harbor
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看 Prometheus 是否收到数据，查看 target</p>
<p>grafana 展示 harbor 数据，导入 14075</p>
<p>参考链接：</p>
<ul>
<li><a href="https://goharbor.io/docs/2.6.0/install-config/harbor-ha-helm/" target="_blank" rel="noopener noreferrer">Deploying Harbor with High Availability via Helm<ExternalLinkIcon/></a></li>
</ul>
</template>
