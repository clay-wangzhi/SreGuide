<template><h1 id="docker-设置代理" tabindex="-1"><a class="header-anchor" href="#docker-设置代理" aria-hidden="true">#</a> Docker 设置代理</h1>
<blockquote>
<p>起因：由于有些国外的镜像拉取不下来，所以设置翻墙代理，下载成功后，再导出<code>docker save xx:tar -o xx.tar</code>，传输到需要的节点导入<code>docker load -i xx.tar</code></p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 先停止Docker</span>
systemctl stop <span class="token function">docker</span>

<span class="token comment">## 修改Docker配置文件</span>
<span class="token function">vim</span> /lib/systemd/system/docker.service
<span class="token comment">## 在 [Service] 节点下面新增代理信息</span>
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token assign-left variable">Environment</span><span class="token operator">=</span><span class="token string">"HTTP_PROXY=socks5://192.168.66.76:20080/"</span> <span class="token string">"HTTPS_PROXY=socks5://192.168.66.76:20080/"</span>

<span class="token comment">## 重新加载Docker并启动 </span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote>
<p>其中 socks5 中的地址，是我本地启动的代理服务地址</p>
</blockquote>
<p>参考链接：</p>
<p><a href="https://www.cnblogs.com/HeCG95/p/12221683.html" target="_blank" rel="noopener noreferrer">Docker设置代理<ExternalLinkIcon/></a></p>
</template>
