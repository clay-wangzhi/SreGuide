<template><h1 id="_7-4-嵌套-if-then-条件测试" tabindex="-1"><a class="header-anchor" href="#_7-4-嵌套-if-then-条件测试" aria-hidden="true">#</a> 7.4 嵌套 if/then 条件测试</h1>
<p>可以嵌套 <code>if/then</code> 条件测试结构。嵌套的结果等价于使用 <a href="http://tldp.org/LDP/abs/html/ops.html#LOGOPS1" target="_blank" rel="noopener noreferrer"><code>&amp;&amp;</code><ExternalLinkIcon/></a> 复合比较运算符。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> -gt <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> -lt <span class="token number">5</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\&quot;">\"</span>a<span class="token entity" title="\&quot;">\"</span> lies somewhere between 0 and 5."</span>
  <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

<span class="token comment"># 和下面的结果相同</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> -gt <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> -lt <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\&quot;">\"</span>a<span class="token entity" title="\&quot;">\"</span> lies somewhere between 0 and 5."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在 <a href="http://tldp.org/LDP/abs/html/bashver2.html#CARDS" target="_blank" rel="noopener noreferrer">样例 37-4<ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/system.html#BACKLIGHT" target="_blank" rel="noopener noreferrer">样例 17-11<ExternalLinkIcon/></a> 中展示了嵌套 <code>if/then</code> 条件测试结构。</p>
</template>
