<template><h1 id="helm-安装配置" tabindex="-1"><a class="header-anchor" href="#helm-安装配置" aria-hidden="true">#</a> Helm 安装配置</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>下载二进制文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">helmversion</span><span class="token operator">=</span><span class="token number">3.7</span>.2
<span class="token function">wget</span> https://get.helm.sh/helm-v<span class="token variable">${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">tar</span> -xvf helm-v<span class="token variable">${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">mv</span> linux-amd64/helm /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>设置补全命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>helm completion <span class="token function">bash</span>
<span class="token comment"># 将输出的文件拷贝到 ``/etc/bash_completion.d/helm.sh`` 文件中</span>
<span class="token builtin class-name">source</span> /etc/bash_completion.d/helm.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 将 helm charts 转换为 yaml 文件 apply</span>
helm xxx xxx  --dry-run  <span class="token operator">|</span> kubectl apply -f -
helm template xxx xxx --output-dir <span class="token builtin class-name">.</span>
<span class="token comment"># helm 安装 charts 包时指定版本</span>
helm <span class="token function">install</span> xxx --version<span class="token operator">=</span>xxx
<span class="token comment"># 安装</span>
helm <span class="token function">install</span> xxx ./ -n xxx
<span class="token comment"># 升级</span>
helm upgrade xxx ./ -n xxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
