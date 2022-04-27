<template><h1 id="_6-1-nginx出现403-forbidden的三种原因" tabindex="-1"><a class="header-anchor" href="#_6-1-nginx出现403-forbidden的三种原因" aria-hidden="true">#</a> 6.1 Nginx出现403 forbidden的三种原因</h1>
<p>引起<code>nginx 403 forbidden</code>通常是三种情况：一是缺少主页文件，二是权限问题，三是<code>SELinux</code>状态。</p>
<h2 id="缺少主页文件" tabindex="-1"><a class="header-anchor" href="#缺少主页文件" aria-hidden="true">#</a> 缺少主页文件</h2>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span> index.php index.html</span><span class="token punctuation">;</span>
    <span class="token comment"># index index.html index.htm;</span>
    <span class="token directive"><span class="token keyword">root</span> /clay/clay1/clay2/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果在<code>/clay/clay1/clay2/</code>下面没有<code>index.php</code>或<code>index.html</code>的时候，直接文件，会报403 forbidden。</p>
<blockquote>
<p>当index文件问<code>index.html</code>时，index指令可以省略不写</p>
</blockquote>
<h2 id="权限问题" tabindex="-1"><a class="header-anchor" href="#权限问题" aria-hidden="true">#</a> 权限问题</h2>
<p>主要原因是<code>nginx</code>启动用户没有，查看主页文件的权限</p>
<p>1）查看<code>nginx</code>启动用户</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"nginx: worker process"</span> <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token string">"grep"</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{ print $1 }'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2）查看主页文件权限及递归查看主页文件所在目录权限</p>
<ul>
<li>
<p>主页文件，<code>nginx</code>启动用户要有<code>r</code>权限，读取文件内容的权限</p>
</li>
<li>
<p>递归主页所在的目录，<code>nginx</code>启动用户要有<code>x</code>权限，可以访问目录的内容</p>
<blockquote>
<p>递归目录在上述配置文件中是指<code>/clay/</code>、<code>/clay/clay1/</code>、<code>/clay/clay1/clay2/</code>这三个目录</p>
</blockquote>
</li>
</ul>
<h2 id="selinux为开启状态-enabled" tabindex="-1"><a class="header-anchor" href="#selinux为开启状态-enabled" aria-hidden="true">#</a> <code>SELinux</code>为开启状态(enabled)</h2>
<p>1）查看当前<code>selinux</code>的状态</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/usr/sbin/sestatus 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2）将<code>SELINUX=enforcing</code> 修改为 <code>SELINUX=disabled</code> 状态</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> /etc/selinux/config

<span class="token comment">#SELINUX=enforcing</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>3）重启生效</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
