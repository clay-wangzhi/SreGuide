<template><h1 id="获取-jumpserver-ssh-连接的私钥" tabindex="-1"><a class="header-anchor" href="#获取-jumpserver-ssh-连接的私钥" aria-hidden="true">#</a> 获取 jumpserver  ssh 连接的私钥</h1>
<p>迁移后，或者自己测试使用私钥连接时，找不到，可以通过如下方式获取</p>
<ul>
<li>jumpserver 版本： v2.19.2</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it jms_core /bin/bash
<span class="token builtin class-name">cd</span> apps/
from assets.models <span class="token function">import</span> SystemUser
s <span class="token operator">=</span> SystemUser.objects.get<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">)</span>
s.private_key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>最后 <code>echo -n</code>  格式化 完整私钥</p>
</template>
