<template><div><h1 id="第十三章-算术扩展" tabindex="-1"><a class="header-anchor" href="#第十三章-算术扩展" aria-hidden="true">#</a> 第十三章 算术扩展</h1>
<p>算术扩展为脚本中的（整数）算术操作提供了强有力的工具。你可以使用反引号、双圆括号或者 <code v-pre>let</code> 将字符串转换为数学表达式。</p>
<h3 id="差异比较" tabindex="-1"><a class="header-anchor" href="#差异比较" aria-hidden="true">#</a> 差异比较</h3>
<h4 id="使用-反引号-的算术扩展-通常与-expr-一起使用" tabindex="-1"><a class="header-anchor" href="#使用-反引号-的算术扩展-通常与-expr-一起使用" aria-hidden="true">#</a> 使用 <a href="http://tldp.org/LDP/abs/html/commandsub.html#BACKQUOTESREF" target="_blank" rel="noopener noreferrer">反引号<ExternalLinkIcon/></a> 的算术扩展（通常与 <a href="http://tldp.org/LDP/abs/html/moreadv.html#EXPRREF" target="_blank" rel="noopener noreferrer"><code v-pre>expr</code><ExternalLinkIcon/></a> 一起使用）</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">z</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">expr</span> $z + <span class="token number">3</span><span class="token variable">`</span></span>         <span class="token comment"># 'expr' 命令执行了算术扩展。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用-双圆括号-或-let-的算术扩展。" tabindex="-1"><a class="header-anchor" href="#使用-双圆括号-或-let-的算术扩展。" aria-hidden="true">#</a> 使用 <a href="http://tldp.org/LDP/abs/html/dblparens.html" target="_blank" rel="noopener noreferrer">双圆括号<ExternalLinkIcon/></a> 或 <a href="http://tldp.org/LDP/abs/html/internal.html#LETREF" target="_blank" rel="noopener noreferrer"><code v-pre>let</code><ExternalLinkIcon/></a> 的算术扩展。</h4>
<p>事实上，在算术扩展中，反引号已经被双圆括号 <code v-pre>((...))</code> 和 <code v-pre>$((...))</code> 以及 <a href="http://tldp.org/LDP/abs/html/internal.html#LETREF" target="_blank" rel="noopener noreferrer"><code v-pre>let</code><ExternalLinkIcon/></a> 所取代。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">z</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$z<span class="token operator">+</span><span class="token number">3</span><span class="token variable">))</span></span>
<span class="token assign-left variable">z</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>z<span class="token operator">+</span><span class="token number">3</span><span class="token variable">))</span></span>                     <span class="token comment"># 同样正确。</span>
                               <span class="token comment"># 在双圆括号内，参数引用形式可用可不用。</span>
                                            
<span class="token comment"># $((EXPRESSION)) 是算术扩展。  # 不要与命令替换混淆。</span>



<span class="token comment"># 双圆括号不是只能用作赋值算术结果。</span>

  <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">0</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"n = <span class="token variable">$n</span>"</span>                <span class="token comment"># n = 0</span>

  <span class="token variable"><span class="token punctuation">((</span> n <span class="token operator">+=</span> <span class="token number">1</span> <span class="token punctuation">))</span></span>                 <span class="token comment"># 自增。</span>
<span class="token comment"># (( $n += 1 )) 是错误用法！</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"n = <span class="token variable">$n</span>"</span>                <span class="token comment"># n = 1</span>


<span class="token builtin class-name">let</span> <span class="token assign-left variable">z</span><span class="token operator">=</span>z+3
<span class="token builtin class-name">let</span> <span class="token string">"z += 3"</span>  <span class="token comment"># 引号允许在赋值表达式中使用空格。</span>
              <span class="token comment"># 'let' 事实上执行的算术运算而非算术扩展。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是包含算术扩展的样例：</p>
<ol>
<li><a href="http://tldp.org/LDP/abs/html/moreadv.html#EX45" target="_blank" rel="noopener noreferrer">样例 16-9<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/loops1.html#EX25" target="_blank" rel="noopener noreferrer">样例 11-15<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/arrays.html#EX66" target="_blank" rel="noopener noreferrer">样例 27-1<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/arrays.html#BUBBLE" target="_blank" rel="noopener noreferrer">样例 27-11<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#TREE" target="_blank" rel="noopener noreferrer">样例 A-16<ExternalLinkIcon/></a></li>
</ol>
</div></template>


