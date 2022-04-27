<template><h1 id="安装-kube-prometheus-stack" tabindex="-1"><a class="header-anchor" href="#安装-kube-prometheus-stack" aria-hidden="true">#</a> 安装 kube-prometheus-stack</h1>
<h2 id="helm-安装配置" tabindex="-1"><a class="header-anchor" href="#helm-安装配置" aria-hidden="true">#</a> Helm 安装配置</h2>
<p>下载二进制文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">helmversion</span><span class="token operator">=</span><span class="token number">3.7</span>.2
<span class="token function">wget</span> https://get.helm.sh/helm-v<span class="token variable">${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">tar</span> -xvf helm-v<span class="token variable">${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">mv</span> linux-amd64/helm /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>设置补全命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>helm completion <span class="token function">bash</span> <span class="token operator">></span> /etc/bash_completion.d/helm.sh
<span class="token builtin class-name">source</span> /etc/bash_completion.d/helm.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="prometheus-安装配置" tabindex="-1"><a class="header-anchor" href="#prometheus-安装配置" aria-hidden="true">#</a> Prometheus 安装配置</h2>
<p>添加 helm repo</p>
<blockquote>
<p>之前拉取的最新版本，kube-state-metrisc 的 target 没添加上去，所以用的  23.3.2</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>helm repo <span class="token function">add</span> prometheus-community https://prometheus-community.github.io/helm-charts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下拉压缩包</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>helm pull prometheus-community/kube-prometheus-stack --version <span class="token number">23.3</span>.2
<span class="token function">tar</span> -xvf kube-prometheus-stack-23.3.2.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>为 prometheus 创建 Namespace</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl create namespace cattle-prometheus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>新增 etcd secret</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl create secret generic etcd-certs -n cattle-prometheus --from-file=/etc/kubernetes/pki/etcd/ca.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改 kube-proxy 的configmap</p>
<blockquote>
<p>将 metricsBindAddress 修改为  &quot;0.0.0.0:10249&quot;</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl -n kube-system edit configmaps kube-proxy
kubectl rollout restart ds kube-proxy -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注释sha 校验</p>
<blockquote>
<p>prometheusOperator.admissionWebhooks.patch.image.sha</p>
</blockquote>
<p>部署</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>helm <span class="token function">install</span> monitoring -n cattle-prometheus --set prometheusOperator.createCustomResource<span class="token operator">=</span>false --set kubeEtcd.serviceMonitor.scheme<span class="token operator">=</span>https --set kubeEtcd.serviceMonitor.caFile<span class="token operator">=</span>/etc/prometheus/secrets/etcd-certs/ca.crt --set kubeEtcd.serviceMonitor.certFile<span class="token operator">=</span>/etc/prometheus/secrets/etcd-certs/healthcheck-client.crt --set kubeEtcd.serviceMonitor.keyFile<span class="token operator">=</span>/etc/prometheus/secrets/etcd-certs/healthcheck-client.key --set prometheus.prometheusSpec.secrets<span class="token operator">=</span><span class="token punctuation">{</span>etcd-certs<span class="token punctuation">}</span> ./
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如何官方镜像拉不下来，可以先从其他源，下载下来，然后改tag</p>
<ul>
<li>
<p>k8s.gcr.io/kube-state-metrics/kube-state-metrics:v2.2.4</p>
</li>
<li>
<p>k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.0</p>
</li>
</ul>
<p>参考链接</p>
<p><a href="https://baijiahao.baidu.com/s?id=1715822973549386399&amp;wfr=spider&amp;for=pc" target="_blank" rel="noopener noreferrer"><strong>Prometheus定义指南之Operator</strong><ExternalLinkIcon/></a></p>
</template>
