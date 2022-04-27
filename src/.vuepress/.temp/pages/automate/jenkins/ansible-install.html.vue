<template><h1 id="_2-3-使用-ansible-安装-jenkins" tabindex="-1"><a class="header-anchor" href="#_2-3-使用-ansible-安装-jenkins" aria-hidden="true">#</a> 2.3 使用 ansible 安装 jenkins</h1>
<blockquote>
<p>经实验：ansible 2.7.10版本可以安装 jenkins 2.210版本</p>
<p>安装更高版本，请一并升级ansible，低版本ansible在安装插件时会报如下错误：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{"attempts": 5, "changed": false, "details": "HTTP Error 403: Forbidden", "item": "ansible", "msg": "Cannot install plugin."}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote>
<p><strong>ansible安装jenkins</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ansible-galaxy <span class="token function">install</span> clay_wangzhi.jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>galaxy中有详细的文档说明：</p>
<blockquote>
<p>链接地址：https://galaxy.ansible.com/clay_wangzhi/jenkins</p>
</blockquote>
<p>额外注意一些插件的安装：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Role-based Authorization Strategy  #权限控制插件
git-parameter
Publish Over SSH
DIngDIng
git-parameter #选项参数增加，git-brach选项
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
