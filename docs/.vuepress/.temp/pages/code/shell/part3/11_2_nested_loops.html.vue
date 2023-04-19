<template><h1 id="_11-2-嵌套循环" tabindex="-1"><a class="header-anchor" href="#_11-2-嵌套循环" aria-hidden="true">#</a> 11.2 嵌套循环</h1>
<p>嵌套循环，顾名思义就是在循环里面还有循环。外层循环会不断的触发内层循环直到外层循环结束。当然，你仍然可以使用 <code>break</code> 可以终止外层或内层的循环。</p>
<p>样例 11-20. 嵌套循环</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># nested-loop.sh: 嵌套 "for" 循环。</span>

<span class="token assign-left variable">outer</span><span class="token operator">=</span><span class="token number">1</span>             <span class="token comment"># 设置外层循环计数器。</span>

<span class="token comment"># 外层循环。</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> 
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Pass <span class="token variable">$outer</span> in outer loop."</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"---------------------"</span>
  <span class="token assign-left variable">inner</span><span class="token operator">=</span><span class="token number">1</span>           <span class="token comment"># 重设内层循环计数器。</span>
  
  <span class="token comment"># =====================================</span>
  <span class="token comment"># 内层循环。</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">b</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"Pass <span class="token variable">$inner</span> in inner loop."</span>
    <span class="token builtin class-name">let</span> <span class="token string">"inner+=1"</span>  <span class="token comment"># 增加内层循环计数器。</span>
  <span class="token keyword">done</span>
  <span class="token comment"># 内层循环结束。</span>
  <span class="token comment"># =====================================</span>
  
  <span class="token builtin class-name">let</span> <span class="token string">"outer+=1"</span>    <span class="token comment"># 增加外层循环计数器。</span>
  <span class="token builtin class-name">echo</span>              <span class="token comment"># 在每次外层循环输出中加入空行。</span>
<span class="token keyword">done</span>
<span class="token comment"># 外层循环结束。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>查看 <a href="http://tldp.org/LDP/abs/html/arrays.html#BUBBLE" target="_blank" rel="noopener noreferrer">样例 27-11<ExternalLinkIcon/></a> 详细了解嵌套 <a href="http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF" target="_blank" rel="noopener noreferrer">while 循环<ExternalLinkIcon/></a>。查看 <a href="http://tldp.org/LDP/abs/html/arrays.html#EX68" target="_blank" rel="noopener noreferrer">样例 27-13<ExternalLinkIcon/></a> 详细了解嵌套 <a href="http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF" target="_blank" rel="noopener noreferrer">until 循环<ExternalLinkIcon/></a>。</p>
</template>
