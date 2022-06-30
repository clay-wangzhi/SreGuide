import{_ as s,e as n}from"./app.e53fe3a5.js";const a={},e=n(`<h1 id="_4-2-\u53D8\u91CF\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#_4-2-\u53D8\u91CF\u8D4B\u503C" aria-hidden="true">#</a> 4.2 \u53D8\u91CF\u8D4B\u503C</h1><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> =</h3><p>\u8D4B\u503C\u64CD\u4F5C\u7B26\uFF08\u5728\u5176\u524D\u540E\u6CA1\u6709\u7A7A\u767D\u7B26\uFF09\u3002</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="noitce" loading="lazy"> \u4E0D\u8981\u6DF7\u6DC6 = \u4E0E -eq\uFF0C\u540E\u8005\u7528\u6765\u8FDB\u884C\u6BD4\u8F83\u800C\u975E\u8D4B\u503C\u3002</p><p>\u540C\u65F6\u4E5F\u8981\u6CE8\u610F = \u6839\u636E\u4F7F\u7528\u573A\u666F\u65E2\u53EF\u4F5C\u8D4B\u503C\u64CD\u4F5C\u7B26\uFF0C\u4E5F\u53EF\u4F5C\u6BD4\u8F83\u64CD\u4F5C\u7B26\u3002</p></blockquote><p>\u6837\u4F8B 4-2. \u53D8\u91CF\u8D4B\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u975E\u5F15\u7528\u5F62\u5F0F\u53D8\u91CF</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># \u4EC0\u4E48\u65F6\u5019\u53D8\u91CF\u662F\u975E\u5F15\u7528\u5F62\u5F0F\uFF0C\u5373\u53D8\u91CF\u540D\u524D\u6CA1\u6709 &#39;$&#39; \u7B26\u53F7\u7684\u5462\uFF1F</span>
<span class="token comment"># \u5F53\u53D8\u91CF\u5728\u88AB\u8D4B\u503C\u800C\u4E0D\u662F\u88AB\u5F15\u7528\u65F6\u3002</span>

<span class="token comment"># \u8D4B\u503C</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">879</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The value of <span class="token entity" title="\\&quot;">\\&quot;</span>a<span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$a</span>.&quot;</span>

<span class="token comment"># \u4F7F\u7528 &#39;let&#39; \u8FDB\u884C\u8D4B\u503C</span>
<span class="token builtin class-name">let</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">16</span>+5
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The value of <span class="token entity" title="\\&quot;">\\&quot;</span>a<span class="token entity" title="\\&quot;">\\&quot;</span> is now <span class="token variable">$a</span>.&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># \u5728 &#39;for&#39; \u5FAA\u73AF\u4E2D\u8D4B\u503C\uFF08\u9690\u5F0F\u8D4B\u503C\uFF09</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Values of <span class="token entity" title="\\&quot;">\\&quot;</span>a<span class="token entity" title="\\&quot;">\\&quot;</span> in the loop are: &quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">11</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span>

<span class="token comment"># \u5728 &#39;read&#39; \u8868\u8FBE\u5F0F\u4E2D\uFF08\u53E6\u4E00\u79CD\u8D4B\u503C\u5F62\u5F0F\uFF09</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Enter <span class="token entity" title="\\&quot;">\\&quot;</span>a<span class="token entity" title="\\&quot;">\\&quot;</span> &quot;</span>
<span class="token builtin class-name">read</span> a
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The value of <span class="token entity" title="\\&quot;">\\&quot;</span>a<span class="token entity" title="\\&quot;">\\&quot;</span> is now <span class="token variable">$a</span>.&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u6837\u4F8B 4-3. \u5947\u5999\u7684\u53D8\u91CF\u8D4B\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">23</span>              <span class="token comment"># \u7B80\u5355\u5F62\u5F0F</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token variable">$a</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$b</span>

<span class="token comment"># \u6765\u6211\u4EEC\u73A9\u70B9\u70AB\u7684\uFF08\u547D\u4EE4\u66FF\u6362\uFF09\u3002</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> Hello<span class="token operator">!</span><span class="token variable">\`</span></span>   <span class="token comment"># \u5C06 &#39;echo&#39; \u547D\u4EE4\u7684\u7ED3\u679C\u8D4B\u503C\u7ED9 &#39;a&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token comment">#  \u6CE8\u610F\u5728\u547D\u4EE4\u66FF\u6362\u7ED3\u6784\u4E2D\u5305\u542B\u611F\u53F9\u53F7(!)\u5728\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528\u5C06\u4F1A\u5931\u6548\uFF0C</span>
<span class="token comment">#+ \u56E0\u4E3A\u5B83\u5C06\u4F1A\u89E6\u53D1 Bash \u7684\u5386\u53F2(history)\u673A\u5236\u3002</span>
<span class="token comment">#  \u5728shell\u811A\u672C\u5185\uFF0CBash \u7684\u5386\u53F2\u673A\u5236\u9ED8\u8BA4\u5173\u95ED\u3002</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> -l<span class="token variable">\`</span></span>         <span class="token comment"># \u5C06 &#39;ls -l&#39; \u547D\u4EE4\u7684\u7ED3\u679C\u8D4B\u503C\u7ED9 &#39;a&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>           <span class="token comment"># \u4E0D\u5E26\u5F15\u53F7\u5F15\u7528\uFF0C\u5C06\u4F1A\u79FB\u9664\u6240\u6709\u7684\u5236\u8868\u7B26\u4E0E\u5206\u884C\u7B26</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span>         <span class="token comment"># \u5F15\u53F7\u5F15\u7528\u53D8\u91CF\u5C06\u4F1A\u4FDD\u7559\u7A7A\u767D\u7B26</span>
                  <span class="token comment"># \u67E5\u770B &quot;\u5F15\u7528&quot; \u7AE0\u8282\u3002</span>
                  
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u4F7F\u7528 <code>$(...)</code> \u5F62\u5F0F\u8FDB\u884C\u8D4B\u503C\uFF08\u4E0E\u53CD\u5F15\u53F7\u4E0D\u540C\u7684\u65B0\u5F62\u5F0F\uFF09\uFF0C\u4E0E\u547D\u4EE4\u66FF\u6362\u5F62\u5F0F\u76F8\u4F3C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6458\u81EA /etc/rc.d/rc.local</span>
<span class="token assign-left variable">R</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/redhat-release<span class="token variable">)</span></span>
<span class="token assign-left variable">arch</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10);function p(l,t){return e}var o=s(a,[["render",p],["__file","04_2_variable_assignment.html.vue"]]);export{o as default};
