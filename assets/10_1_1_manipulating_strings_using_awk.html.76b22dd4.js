import{_ as n,e as s}from"./app.a7ee6068.js";const a={},e=s(`<h1 id="_10-1-1-\u4F7F\u7528-awk-\u5904\u7406\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_10-1-1-\u4F7F\u7528-awk-\u5904\u7406\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 10.1.1 \u4F7F\u7528 <code>awk</code> \u5904\u7406\u5B57\u7B26\u4E32</h1><p>\u5728 Bash \u811A\u672C\u4E2D\u53EF\u4EE5\u8C03\u7528\u5B57\u7B26\u4E32\u5904\u7406\u5DE5\u5177 <code>awk</code> \u6765\u66FF\u6362\u5185\u7F6E\u7684\u5B57\u7B26\u4E32\u5904\u7406\u64CD\u4F5C\u3002</p><p>\u6837\u4F8B 10-6. \u4F7F\u7528\u53E6\u4E00\u79CD\u65B9\u5F0F\u6765\u622A\u53D6\u548C\u5B9A\u4F4D\u5B50\u5B57\u7B26\u4E32</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># substring-extraction.sh</span>

<span class="token assign-left variable">String</span><span class="token operator">=</span>23skidoo1
<span class="token comment">#      012345678    Bash</span>
<span class="token comment">#      123456789    awk</span>
<span class="token comment"># \u6CE8\u610F\u4E0D\u540C\u5B57\u7B26\u4E32\u7D22\u5F15\u7CFB\u7EDF\uFF1A</span>
<span class="token comment"># Bash \u4E2D\u7B2C\u4E00\u4E2A\u5B57\u7B26\u7684\u4F4D\u7F6E\u4E3A0\u3002</span>
<span class="token comment"># Awk \u4E2D\u7B2C\u4E00\u4E2A\u5B57\u7B26\u7684\u4F4D\u7F6E\u4E3A1\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${String<span class="token operator">:</span>2<span class="token operator">:</span>4}</span> <span class="token comment"># \u4ECE\u7B2C3\u4F4D\u5F00\u59CB\uFF080-1-2\uFF09\uFF0C4\u4E2A\u5B57\u7B26\u7684\u957F\u5EA6</span>
                                         <span class="token comment"># skid</span>

<span class="token comment"># Awk \u4E2D\u4E0E \${string:pos:length} \u7B49\u4EF7\u7684\u662F substr(string,pos,length)\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;
{ print substr(&quot;&#39;</span>&quot;<span class="token variable">\${String}</span><span class="token string">&quot;&#39;&quot;</span>,3,4<span class="token punctuation">)</span>      <span class="token comment"># skid</span>
<span class="token punctuation">}</span>
<span class="token string">&#39;
#  \u5C06\u7A7A\u7684 &quot;echo&quot; \u901A\u8FC7\u7BA1\u9053\u4F20\u9012\u7ED9 awk \u4F5C\u4E3A\u4E00\u4E2A\u6A21\u62DF\u8F93\u5165\uFF0C
#+ \u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u6587\u4EF6\u540D\u6765\u64CD\u4F5C awk \u4E86\u3002

echo &quot;----&quot;

# \u540C\u6837\u7684\uFF1A

echo | awk &#39;</span>
<span class="token punctuation">{</span> print index<span class="token punctuation">(</span><span class="token string">&quot;&#39;&quot;</span><span class="token variable">\${String}</span><span class="token string">&quot;&#39;&quot;</span>, <span class="token string">&quot;skid&quot;</span><span class="token punctuation">)</span>      <span class="token comment"># 3</span>
<span class="token punctuation">}</span>                                           <span class="token comment"># \uFF08skid \u4ECE\u7B2C3\u4F4D\u5F00\u59CB\uFF09</span>
&#39;   <span class="token comment"># \u8FD9\u91CC\u4F7F\u7528 awk \u7B49\u4EF7\u4E8E &quot;expr index&quot;\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,4);function p(t,l){return e}var r=n(a,[["render",p],["__file","10_1_1_manipulating_strings_using_awk.html.vue"]]);export{r as default};
