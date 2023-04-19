<template><h1 id="rancher-安装配置" tabindex="-1"><a class="header-anchor" href="#rancher-安装配置" aria-hidden="true">#</a> Rancher 安装配置</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>添加 Helm Chart 仓库</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>helm repo <span class="token function">add</span> rancher-stable http://rancher-mirror.oss-cn-beijing.aliyuncs.com/server-charts/stable
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>为 Rancher 创建 Namespace</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl create namespace cattle-system
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加 TLS 密文</p>
<blockquote>
<p>下载 nginx 使用的 key 和 pem 传到服务器，并重命名为 tls.xxx</p>
<p>使用openssl把pem证书转换为crt</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>openssl x509 -in  tls.pem -out tls.crt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl -n cattle-system create secret tls tls-rancher-ingress   --cert<span class="token operator">=</span>tls.crt   --key<span class="token operator">=</span>tls.key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过 helm 安装 rancher</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>helm pull rancher-stable/rancher --version <span class="token number">2.5</span>.12
<span class="token function">tar</span> -xvf rancher-2.5.12.tgz
<span class="token builtin class-name">cd</span> rancher/
<span class="token comment"># rancher.xxx.xxx 为申请的域名</span>
helm -n cattle-system <span class="token function">install</span> rancher ./ --set <span class="token assign-left variable">hostname</span><span class="token operator">=</span>rancher.xxx.xxx --set <span class="token assign-left variable">replicas</span><span class="token operator">=</span><span class="token number">3</span> --set ingress.tls.source<span class="token operator">=</span>secret
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>验证 Rancher Server 是否安成功</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl -n cattle-system rollout status deploy/rancher
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>保存使用选项</p>
<p>请保存您使用的全部<code>--set</code>选项。使用 Helm 升级 Rancher 到新版本时，您将需要使用相同的选项。</p>
<blockquote>
<p>⚠️</p>
<p>如果外层还有nginx，proxy_pass 协议用https
并加上 websocket 的一些参数</p>
<div class="language-tex ext-tex line-numbers-mode"><pre v-pre class="language-tex"><code>proxy_set_header Host <span class="token equation string">$host;
proxy_set_header X-Real_IP $</span>remote_addr;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection upgrade;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote>
<h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧" aria-hidden="true">#</a> 小技巧</h2>
<p>重置 rancher admin密码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> -it rancher-65bd74d789-748wj -n cattle-system -- reset-password
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>参考文章：</p>
<p><a href="http://docs.rancher.cn/docs/rancher2/installation/install-rancher-on-k8s/_index" target="_blank" rel="noopener noreferrer">Rnacher 高可用安装 | Rancher Doc<ExternalLinkIcon/></a></p>
<p><a href="http://docs.rancher.cn/docs/rancher2.5/installation/resources/tls-secrets/_index/" target="_blank" rel="noopener noreferrer">添加 TLS 密文 | Rancher Doc <ExternalLinkIcon/></a></p>
</template>
