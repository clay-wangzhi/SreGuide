<template><h1 id="快捷命令" tabindex="-1"><a class="header-anchor" href="#快捷命令" aria-hidden="true">#</a> 快捷命令</h1>
<ul>
<li>
<p>快速查找 k8s pod 和 service 的 CIDR</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Get Services IPs range</span>
kubectl cluster-info dump <span class="token operator">|</span> <span class="token function">grep</span> -m <span class="token number">1</span> service-cluster-ip-range
<span class="token comment"># Get Pods IPs range</span>
kubectl cluster-info dump <span class="token operator">|</span> <span class="token function">grep</span> -m <span class="token number">1</span> cluster-cidr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
</template>
