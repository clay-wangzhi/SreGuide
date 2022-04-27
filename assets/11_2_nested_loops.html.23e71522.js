import{_ as p,r as o,c as t,a as s,b as e,F as l,e as r,d as n,o as c}from"./app.ac0f71d5.js";const b={},i=r(`<h1 id="_11-2-\u5D4C\u5957\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_11-2-\u5D4C\u5957\u5FAA\u73AF" aria-hidden="true">#</a> 11.2 \u5D4C\u5957\u5FAA\u73AF</h1><p>\u5D4C\u5957\u5FAA\u73AF\uFF0C\u987E\u540D\u601D\u4E49\u5C31\u662F\u5728\u5FAA\u73AF\u91CC\u9762\u8FD8\u6709\u5FAA\u73AF\u3002\u5916\u5C42\u5FAA\u73AF\u4F1A\u4E0D\u65AD\u7684\u89E6\u53D1\u5185\u5C42\u5FAA\u73AF\u76F4\u5230\u5916\u5C42\u5FAA\u73AF\u7ED3\u675F\u3002\u5F53\u7136\uFF0C\u4F60\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528 <code>break</code> \u53EF\u4EE5\u7EC8\u6B62\u5916\u5C42\u6216\u5185\u5C42\u7684\u5FAA\u73AF\u3002</p><p>\u6837\u4F8B 11-20. \u5D4C\u5957\u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># nested-loop.sh: \u5D4C\u5957 &quot;for&quot; \u5FAA\u73AF\u3002</span>

<span class="token assign-left variable">outer</span><span class="token operator">=</span><span class="token number">1</span>             <span class="token comment"># \u8BBE\u7F6E\u5916\u5C42\u5FAA\u73AF\u8BA1\u6570\u5668\u3002</span>

<span class="token comment"># \u5916\u5C42\u5FAA\u73AF\u3002</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> 
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pass <span class="token variable">$outer</span> in outer loop.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------&quot;</span>
  <span class="token assign-left variable">inner</span><span class="token operator">=</span><span class="token number">1</span>           <span class="token comment"># \u91CD\u8BBE\u5185\u5C42\u5FAA\u73AF\u8BA1\u6570\u5668\u3002</span>
  
  <span class="token comment"># =====================================</span>
  <span class="token comment"># \u5185\u5C42\u5FAA\u73AF\u3002</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">b</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pass <span class="token variable">$inner</span> in inner loop.&quot;</span>
    <span class="token builtin class-name">let</span> <span class="token string">&quot;inner+=1&quot;</span>  <span class="token comment"># \u589E\u52A0\u5185\u5C42\u5FAA\u73AF\u8BA1\u6570\u5668\u3002</span>
  <span class="token keyword">done</span>
  <span class="token comment"># \u5185\u5C42\u5FAA\u73AF\u7ED3\u675F\u3002</span>
  <span class="token comment"># =====================================</span>
  
  <span class="token builtin class-name">let</span> <span class="token string">&quot;outer+=1&quot;</span>    <span class="token comment"># \u589E\u52A0\u5916\u5C42\u5FAA\u73AF\u8BA1\u6570\u5668\u3002</span>
  <span class="token builtin class-name">echo</span>              <span class="token comment"># \u5728\u6BCF\u6B21\u5916\u5C42\u5FAA\u73AF\u8F93\u51FA\u4E2D\u52A0\u5165\u7A7A\u884C\u3002</span>
<span class="token keyword">done</span>
<span class="token comment"># \u5916\u5C42\u5FAA\u73AF\u7ED3\u675F\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,4),m=n("\u67E5\u770B "),u={href:"http://tldp.org/LDP/abs/html/arrays.html#BUBBLE",target:"_blank",rel:"noopener noreferrer"},k=n("\u6837\u4F8B 27-11"),d=n(" \u8BE6\u7EC6\u4E86\u89E3\u5D4C\u5957 "),_={href:"http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF",target:"_blank",rel:"noopener noreferrer"},h=n("while \u5FAA\u73AF"),f=n("\u3002\u67E5\u770B "),g={href:"http://tldp.org/LDP/abs/html/arrays.html#EX68",target:"_blank",rel:"noopener noreferrer"},v=n("\u6837\u4F8B 27-13"),q=n(" \u8BE6\u7EC6\u4E86\u89E3\u5D4C\u5957 "),L={href:"http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF",target:"_blank",rel:"noopener noreferrer"},y=n("until \u5FAA\u73AF"),w=n("\u3002");function x(E,P){const a=o("ExternalLinkIcon");return c(),t(l,null,[i,s("p",null,[m,s("a",u,[k,e(a)]),d,s("a",_,[h,e(a)]),f,s("a",g,[v,e(a)]),q,s("a",L,[y,e(a)]),w])],64)}var N=p(b,[["render",x],["__file","11_2_nested_loops.html.vue"]]);export{N as default};
