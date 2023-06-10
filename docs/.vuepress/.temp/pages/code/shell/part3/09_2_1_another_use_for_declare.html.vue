<template><div><h1 id="_9-2-1-declare-的另类用法" tabindex="-1"><a class="header-anchor" href="#_9-2-1-declare-的另类用法" aria-hidden="true">#</a> 9.2.1 <code v-pre>declare</code> 的另类用法</h1>
<p><code v-pre>declare</code> 命令可以帮助用户识别变量、<a href="">环境变量</a> 或是其他信息，与 <a href="">数组</a> 搭配效果更佳。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bash$ <span class="token builtin class-name">declare</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token environment constant">HOME</span>
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/home/bozo


bash$ <span class="token assign-left variable">zzy</span><span class="token operator">=</span><span class="token number">68</span>
bash$ <span class="token builtin class-name">declare</span> <span class="token operator">|</span> <span class="token function">grep</span> zzy
<span class="token assign-left variable">zzy</span><span class="token operator">=</span><span class="token number">68</span>


bash$ <span class="token assign-left variable">Colors</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"purple"</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"reddish-orange"</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"light green"</span><span class="token punctuation">)</span>
bash$ <span class="token builtin class-name">echo</span> <span class="token variable">${Colors<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
purple reddish-orange light green
bash$ <span class="token builtin class-name">declare</span> <span class="token operator">|</span> <span class="token function">grep</span> Colors
<span class="token assign-left variable">Colors</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"purple"</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"reddish-orange"</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"light green"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


