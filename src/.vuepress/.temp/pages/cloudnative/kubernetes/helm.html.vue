<template><h1 id="helm-安装使用" tabindex="-1"><a class="header-anchor" href="#helm-安装使用" aria-hidden="true">#</a> Helm 安装使用</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
