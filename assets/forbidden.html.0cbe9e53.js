import{_ as n,e}from"./app.ac0f71d5.js";const s={},a=e(`<h1 id="_6-1-nginx\u51FA\u73B0403-forbidden\u7684\u4E09\u79CD\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_6-1-nginx\u51FA\u73B0403-forbidden\u7684\u4E09\u79CD\u539F\u56E0" aria-hidden="true">#</a> 6.1 Nginx\u51FA\u73B0403 forbidden\u7684\u4E09\u79CD\u539F\u56E0</h1><p>\u5F15\u8D77<code>nginx 403 forbidden</code>\u901A\u5E38\u662F\u4E09\u79CD\u60C5\u51B5\uFF1A\u4E00\u662F\u7F3A\u5C11\u4E3B\u9875\u6587\u4EF6\uFF0C\u4E8C\u662F\u6743\u9650\u95EE\u9898\uFF0C\u4E09\u662F<code>SELinux</code>\u72B6\u6001\u3002</p><h2 id="\u7F3A\u5C11\u4E3B\u9875\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u5C11\u4E3B\u9875\u6587\u4EF6" aria-hidden="true">#</a> \u7F3A\u5C11\u4E3B\u9875\u6587\u4EF6</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span> index.php index.html</span><span class="token punctuation">;</span>
    <span class="token comment"># index index.html index.htm;</span>
    <span class="token directive"><span class="token keyword">root</span> /clay/clay1/clay2/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u5728<code>/clay/clay1/clay2/</code>\u4E0B\u9762\u6CA1\u6709<code>index.php</code>\u6216<code>index.html</code>\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u6587\u4EF6\uFF0C\u4F1A\u62A5403 forbidden\u3002</p><blockquote><p>\u5F53index\u6587\u4EF6\u95EE<code>index.html</code>\u65F6\uFF0Cindex\u6307\u4EE4\u53EF\u4EE5\u7701\u7565\u4E0D\u5199</p></blockquote><h2 id="\u6743\u9650\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u95EE\u9898" aria-hidden="true">#</a> \u6743\u9650\u95EE\u9898</h2><p>\u4E3B\u8981\u539F\u56E0\u662F<code>nginx</code>\u542F\u52A8\u7528\u6237\u6CA1\u6709\uFF0C\u67E5\u770B\u4E3B\u9875\u6587\u4EF6\u7684\u6743\u9650</p><p>1\uFF09\u67E5\u770B<code>nginx</code>\u542F\u52A8\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;nginx: worker process&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token string">&quot;grep&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $1 }&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2\uFF09\u67E5\u770B\u4E3B\u9875\u6587\u4EF6\u6743\u9650\u53CA\u9012\u5F52\u67E5\u770B\u4E3B\u9875\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u6743\u9650</p><ul><li><p>\u4E3B\u9875\u6587\u4EF6\uFF0C<code>nginx</code>\u542F\u52A8\u7528\u6237\u8981\u6709<code>r</code>\u6743\u9650\uFF0C\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u7684\u6743\u9650</p></li><li><p>\u9012\u5F52\u4E3B\u9875\u6240\u5728\u7684\u76EE\u5F55\uFF0C<code>nginx</code>\u542F\u52A8\u7528\u6237\u8981\u6709<code>x</code>\u6743\u9650\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u76EE\u5F55\u7684\u5185\u5BB9</p><blockquote><p>\u9012\u5F52\u76EE\u5F55\u5728\u4E0A\u8FF0\u914D\u7F6E\u6587\u4EF6\u4E2D\u662F\u6307<code>/clay/</code>\u3001<code>/clay/clay1/</code>\u3001<code>/clay/clay1/clay2/</code>\u8FD9\u4E09\u4E2A\u76EE\u5F55</p></blockquote></li></ul><h2 id="selinux\u4E3A\u5F00\u542F\u72B6\u6001-enabled" tabindex="-1"><a class="header-anchor" href="#selinux\u4E3A\u5F00\u542F\u72B6\u6001-enabled" aria-hidden="true">#</a> <code>SELinux</code>\u4E3A\u5F00\u542F\u72B6\u6001(enabled)</h2><p>1\uFF09\u67E5\u770B\u5F53\u524D<code>selinux</code>\u7684\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/sbin/sestatus 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2\uFF09\u5C06<code>SELINUX=enforcing</code> \u4FEE\u6539\u4E3A <code>SELINUX=disabled</code> \u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/selinux/config

<span class="token comment">#SELINUX=enforcing</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>3\uFF09\u91CD\u542F\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,19);function c(o,i){return a}var d=n(s,[["render",c],["__file","forbidden.html.vue"]]);export{d as default};
