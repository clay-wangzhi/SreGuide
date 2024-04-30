import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as r,a as s,b as n,d as e,e as i}from"./app-22100c49.js";const p={},c=i(`<h1 id="_11-2-嵌套循环" tabindex="-1"><a class="header-anchor" href="#_11-2-嵌套循环" aria-hidden="true">#</a> 11.2 嵌套循环</h1><p>嵌套循环，顾名思义就是在循环里面还有循环。外层循环会不断的触发内层循环直到外层循环结束。当然，你仍然可以使用 <code>break</code> 可以终止外层或内层的循环。</p><p>样例 11-20. 嵌套循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># nested-loop.sh: 嵌套 &quot;for&quot; 循环。</span>

<span class="token assign-left variable">outer</span><span class="token operator">=</span><span class="token number">1</span>             <span class="token comment"># 设置外层循环计数器。</span>

<span class="token comment"># 外层循环。</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> 
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pass <span class="token variable">$outer</span> in outer loop.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------&quot;</span>
  <span class="token assign-left variable">inner</span><span class="token operator">=</span><span class="token number">1</span>           <span class="token comment"># 重设内层循环计数器。</span>
  
  <span class="token comment"># =====================================</span>
  <span class="token comment"># 内层循环。</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">b</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pass <span class="token variable">$inner</span> in inner loop.&quot;</span>
    <span class="token builtin class-name">let</span> <span class="token string">&quot;inner+=1&quot;</span>  <span class="token comment"># 增加内层循环计数器。</span>
  <span class="token keyword">done</span>
  <span class="token comment"># 内层循环结束。</span>
  <span class="token comment"># =====================================</span>
  
  <span class="token builtin class-name">let</span> <span class="token string">&quot;outer+=1&quot;</span>    <span class="token comment"># 增加外层循环计数器。</span>
  <span class="token builtin class-name">echo</span>              <span class="token comment"># 在每次外层循环输出中加入空行。</span>
<span class="token keyword">done</span>
<span class="token comment"># 外层循环结束。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={href:"http://tldp.org/LDP/abs/html/arrays.html#BUBBLE",target:"_blank",rel:"noopener noreferrer"},m={href:"http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF",target:"_blank",rel:"noopener noreferrer"},u={href:"http://tldp.org/LDP/abs/html/arrays.html#EX68",target:"_blank",rel:"noopener noreferrer"},b={href:"http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF",target:"_blank",rel:"noopener noreferrer"};function k(v,h){const a=o("ExternalLinkIcon");return t(),r("div",null,[c,s("p",null,[n("查看 "),s("a",d,[n("样例 27-11"),e(a)]),n(" 详细了解嵌套 "),s("a",m,[n("while 循环"),e(a)]),n("。查看 "),s("a",u,[n("样例 27-13"),e(a)]),n(" 详细了解嵌套 "),s("a",b,[n("until 循环"),e(a)]),n("。")])])}const g=l(p,[["render",k],["__file","11_2_nested_loops.html.vue"]]);export{g as default};
