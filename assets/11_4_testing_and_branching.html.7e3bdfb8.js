import{_ as p,r as l,c as t,a as s,b as c,F as o,e as a,d as n,o as r}from"./app.be088d1f.js";const i={},u=a(`<h1 id="_11-4-\u6D4B\u8BD5\u4E0E\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_11-4-\u6D4B\u8BD5\u4E0E\u5206\u652F" aria-hidden="true">#</a> 11.4 \u6D4B\u8BD5\u4E0E\u5206\u652F</h1><p><code>case</code> \u548C <code>select</code> \u7ED3\u6784\u5E76\u4E0D\u5C5E\u4E8E\u5FAA\u73AF\u7ED3\u6784\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u53CD\u590D\u6267\u884C\u4EE3\u7801\u5757\u3002\u4F46\u662F\u548C\u5FAA\u73AF\u7ED3\u6784\u76F8\u4F3C\u7684\u662F\uFF0C\u5B83\u4EEC\u4F1A\u6839\u636E\u4EE3\u7801\u5757\u9876\u90E8\u6216\u5C3E\u90E8\u7684\u6761\u4EF6\u63A7\u5236\u7A0B\u5E8F\u6D41\u3002</p><p>\u4E0B\u9762\u4ECB\u7ECD\u4E24\u79CD\u5728\u4EE3\u7801\u5757\u4E2D\u63A7\u5236\u7A0B\u5E8F\u6D41\u7684\u65B9\u6CD5\uFF1A</p><h3 id="case-in-esac" tabindex="-1"><a class="header-anchor" href="#case-in-esac" aria-hidden="true">#</a> <code>case (in)</code> / <code>esac</code></h3><p>\u5728 shell \u811A\u672C\u4E2D\uFF0C<code>case</code> \u6A21\u62DF\u4E86 C/C++ \u8BED\u8A00\u4E2D\u7684 <code>switch</code>\uFF0C\u53EF\u4EE5\u6839\u636E\u6761\u4EF6\u8DF3\u8F6C\u5230\u5176\u4E2D\u4E00\u4E2A\u5206\u652F\u3002\u5176\u76F8\u5F53\u4E8E\u7B80\u5199\u7248\u7684 <code>if/then/else</code> \u8BED\u53E5\u3002\u5F88\u9002\u5408\u7528\u6765\u521B\u5EFA\u83DC\u5355\u9009\u9879\u54DF\uFF01</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token string">&quot;<span class="token variable">$condition1</span>&quot;</span> <span class="token punctuation">)</span>
    command<span class="token punctuation">..</span>.
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token string">&quot;<span class="token variable">$condition2</span>&quot;</span> <span class="token punctuation">)</span>
    command<span class="token punctuation">..</span>.
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"></p><ul><li><p>\u5BF9\u53D8\u91CF\u8FDB\u884C\u5F15\u7528\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u56E0\u4E3A\u5728\u8FD9\u91CC\u4E0D\u4F1A\u8FDB\u884C\u5B57\u7B26\u5206\u5272\u3002</p></li><li><p>\u6761\u4EF6\u6D4B\u8BD5\u8BED\u53E5\u5FC5\u987B\u4EE5\u53F3\u62EC\u53F7 ) \u7ED3\u675F\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></li><li><p>\u6BCF\u4E00\u6BB5\u4EE3\u7801\u5757\u90FD\u5FC5\u987B\u4EE5\u53CC\u5206\u53F7 ;; \u7ED3\u675F\u3002</p></li><li><p>\u5982\u679C\u6D4B\u8BD5\u6761\u4EF6\u4E3A\u771F\uFF0C\u5176\u5BF9\u5E94\u7684\u4EE3\u7801\u5757\u5C06\u88AB\u6267\u884C\uFF0C\u800C\u540E\u6574\u4E2A <code>case</code> \u4EE3\u7801\u6BB5\u7ED3\u675F\u6267\u884C\u3002</p></li><li><p><code>case</code> \u4EE3\u7801\u6BB5\u5FC5\u987B\u4EE5 <code>esac</code> \u7ED3\u675F\uFF08\u5012\u7740\u62FC\u5199case\uFF09\u3002</p></li></ul></blockquote><p>\u6837\u4F8B 11-25. \u5982\u4F55\u4F7F\u7528 <code>case</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u6D4B\u8BD5\u5B57\u7B26\u7684\u79CD\u7C7B\u3002</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hit a key, then hit return.&quot;</span>
<span class="token builtin class-name">read</span> Keypress

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$Keypress</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span><span class="token punctuation">]</span>   <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Lowercase letter&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span>   <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Uppercase letter&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>         <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Digit&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  *             <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Punctuation, whitespace, or other&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>      <span class="token comment">#  \u5B57\u7B26\u8303\u56F4\u53EF\u4EE5\u7528[\u65B9\u62EC\u53F7]\u8868\u793A\uFF0C\u4E5F\u53EF\u4EE5\u7528 POSIX \u5F62\u5F0F\u7684[[\u53CC\u65B9\u62EC\u53F7]]\u8868\u793A\u3002</span>

<span class="token comment"># \u5728\u8FD9\u4E2A\u4F8B\u5B50\u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u4E2D\uFF0C\u7528\u6765\u6D4B\u8BD5\u662F\u5C0F\u5199\u8FD8\u662F\u5927\u5199\u5B57\u7B26\u4F7F\u7528\u7684\u662F [a-z] \u548C [A-Z]\u3002</span>
<span class="token comment"># \u8FD9\u5728\u4E00\u4E9B\u7279\u5B9A\u7684\u8BED\u8A00\u73AF\u5883\u548C Linux \u53D1\u884C\u7248\u4E2D\u4E0D\u8D77\u6548\u3002</span>
<span class="token comment"># POSIX \u5F62\u5F0F\u5177\u6709\u66F4\u597D\u7684\u517C\u5BB9\u6027\u3002</span>
<span class="token comment"># \u611F\u8C22 Frank Wang \u6307\u51FA\u8FD9\u4E00\u70B9\u3002</span>

<span class="token comment"># \u7EC3\u4E60\uFF1A</span>
<span class="token comment"># -----</span>
<span class="token comment"># \u8FD9\u4E2A\u811A\u672C\u63A5\u53D7\u4E00\u4E2A\u5355\u5B57\u7B26\u7136\u540E\u7ED3\u675F\u3002</span>
<span class="token comment"># \u4FEE\u6539\u811A\u672C\uFF0C\u4F7F\u5F97\u5176\u53EF\u4EE5\u5FAA\u73AF\u63A5\u53D7\u8F93\u5165\uFF0C\u5E76\u4E14\u68C0\u6D4B\u952E\u5165\u7684\u6BCF\u4E00\u4E2A\u5B57\u7B26\uFF0C\u76F4\u5230\u952E\u5165 &quot;X&quot; \u4E3A\u6B62\u3002</span>
<span class="token comment"># \u63D0\u793A\uFF1A\u5C06\u6240\u6709\u4E1C\u897F\u5305\u5728 &quot;while&quot; \u4E2D\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u6837\u4F8B 11-26. \u4F7F\u7528 <code>case</code> \u521B\u5EFA\u83DC\u5355</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># \u7B80\u6613\u7684\u901A\u8BAF\u5F55\u6570\u636E\u5E93</span>

<span class="token function">clear</span> <span class="token comment"># \u6E05\u5C4F\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;          Contact List&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;          ------- ----&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Choose one of the following persons:&quot;</span> 
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[E]vans, Roland&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[J]ones, Mildred&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[S]mith, Julie&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[Z]ane, Morris&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">read</span> person

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$person</span>&quot;</span> <span class="token keyword">in</span>
<span class="token comment"># \u6CE8\u610F\u53D8\u91CF\u662F\u88AB\u5F15\u7528\u7684\u3002</span>

  <span class="token string">&quot;E&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;e&quot;</span> <span class="token punctuation">)</span>
  <span class="token comment"># \u540C\u65F6\u63A5\u53D7\u5927\u5C0F\u5199\u7684\u8F93\u5165\u3002</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Roland Evans&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;4321 Flash Dr.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hardscrabble, CO 80753&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(303) 734-9874&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(303) 734-9892 fax&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;revans@zzy.net&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Business partner &amp; old friend&quot;</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token comment"># \u6CE8\u610F\u7528\u53CC\u5206\u53F7\u7ED3\u675F\u8FD9\u4E00\u4E2A\u9009\u9879\u3002</span>

  <span class="token string">&quot;J&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;j&quot;</span> <span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Mildred Jones&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;249 E. 7th St., Apt. 19&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;New York, NY 10009&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(212) 533-2814&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(212) 533-9972 fax&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;milliej@loisaida.com&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Ex-girlfriend&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Birthday: Feb. 11&quot;</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  
  <span class="token comment"># Smith \u548C Zane \u7684\u4FE1\u606F\u7A0D\u540E\u6DFB\u52A0\u3002</span>

  *         <span class="token punctuation">)</span>
  <span class="token comment"># \u7F3A\u7701\u8BBE\u7F6E\u3002</span>
  <span class="token comment"># \u7A7A\u8F93\u5165\uFF08\u76F4\u63A5\u952E\u5165\u56DE\u8F66\uFF09\u4E5F\u662F\u6267\u884C\u8FD9\u4E00\u90E8\u5206\u3002</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Not yet in database.&quot;</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  
<span class="token keyword">esac</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># \u7EC3\u4E60\uFF1A</span>
<span class="token comment"># -----</span>
<span class="token comment"># \u4FEE\u6539\u811A\u672C\uFF0C\u4F7F\u5F97\u5176\u53EF\u4EE5\u5FAA\u73AF\u63A5\u53D7\u591A\u6B21\u8F93\u5165\u800C\u4E0D\u662F\u53EA\u663E\u793A\u4E00\u4E2A\u5730\u5740\u540E\u7EC8\u6B62\u811A\u672C\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p>\u4F60\u53EF\u4EE5\u7528 <code>case</code> \u6765\u68C0\u6D4B\u547D\u4EE4\u884C\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable">\${0<span class="token operator">##</span>*<span class="token operator">/</span>}</span> &lt;filename&gt;&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token variable">$E_PARAM</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
                      <span class="token comment"># \u6CA1\u6709\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u6216\u8005\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u7A7A\u3002</span>
                      <span class="token comment"># \u6CE8\u610F \${0##*/} \u662F\u53C2\u6570\u66FF\u6362 \${var##pattern} \u7684\u4E00\u79CD\u5F62\u5F0F\u3002</span>
                      <span class="token comment"># \u6700\u540E\u7684\u7ED3\u679C\u662F $0.</span>
  
  -*<span class="token punctuation">)</span> <span class="token assign-left variable">FILENAME</span><span class="token operator">=</span>./<span class="token variable">$1</span><span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token comment">#  \u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u4EE5\u77ED\u6A2A\u7EBF\u5F00\u5934\uFF0C\u90A3\u4E48\u5C06\u5176\u66FF\u6362\u4E3A ./$1</span>
                      <span class="token comment">#+ \u4EE5\u907F\u514D\u540E\u7EED\u7684\u547D\u4EE4\u5C06\u5176\u89E3\u91CA\u4E3A\u4E00\u4E2A\u9009\u9879\u3002</span>
  
  * <span class="token punctuation">)</span> <span class="token assign-left variable">FILENAME</span><span class="token operator">=</span><span class="token variable">$1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>   <span class="token comment"># \u5426\u5219\u8D4B\u503C\u4E3A $1\u3002</span>
<span class="token keyword">esac</span>                  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u66F4\u52A0\u76F4\u89C2\u7684\u5904\u7406\u547D\u4EE4\u884C\u53C2\u6570\u7684\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -gt <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>    <span class="token comment"># \u904D\u5386\u5B8C\u6240\u6709\u53C2\u6570</span>
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    -d<span class="token operator">|</span>--debug<span class="token punctuation">)</span>
              <span class="token comment"># \u68C0\u6D4B\u662F\u5426\u662F &quot;-d&quot; \u6216\u8005 &quot;--debug&quot;\u3002</span>
              <span class="token assign-left variable">DEBUG</span><span class="token operator">=</span><span class="token number">1</span>
              <span class="token punctuation">;</span><span class="token punctuation">;</span>
    -c<span class="token operator">|</span>--conf<span class="token punctuation">)</span>
              <span class="token assign-left variable">CONFFILE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
              <span class="token builtin class-name">shift</span>
              <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -f <span class="token variable">$CONFFILE</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;Error: Supplied file doesn&#39;t exist!&quot;</span>
                <span class="token builtin class-name">exit</span> <span class="token variable">$E_CONFFILE</span>     <span class="token comment"># \u627E\u4E0D\u5230\u6587\u4EF6\u3002</span>
              <span class="token keyword">fi</span>
              <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  <span class="token builtin class-name">shift</span>       <span class="token comment"># \u68C0\u6D4B\u4E0B\u4E00\u4E2A\u53C2\u6570</span>
<span class="token keyword">done</span>

<span class="token comment"># \u6458\u81EA Stefano Falsetto \u7684 &quot;Log2Rot&quot; \u811A\u672C\u4E2D &quot;rottlog&quot; \u5305\u7684\u4E00\u90E8\u5206\u3002</span>
<span class="token comment"># \u5DF2\u6388\u6743\u4F7F\u7528\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u6837\u4F8B 11-27. \u4F7F\u7528\u547D\u4EE4\u66FF\u6362\u751F\u6210 <code>case</code> \u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># case-cmd.sh: \u4F7F\u7528\u547D\u4EE4\u66FF\u6362\u751F\u6210 &quot;case&quot; \u53D8\u91CF\u3002</span>

<span class="token keyword">case</span> <span class="token variable"><span class="token variable">$(</span> arch <span class="token variable">)</span></span> <span class="token keyword">in</span>   <span class="token comment"># $( arch ) \u8FD4\u56DE\u8BBE\u5907\u67B6\u6784\u3002</span>
                    <span class="token comment"># \u7B49\u4EF7\u4E8E &#39;uname -m&quot;\u3002</span>
  i386 <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;80386-based machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  i486 <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;80486-based machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  i586 <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pentium-based machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  i686 <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pentium2+-based machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  *    <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Other type of machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>case</code> \u8FD8\u53EF\u4EE5\u7528\u6765\u505A\u5B57\u7B26\u4E32\u6A21\u5F0F\u5339\u914D\u3002</p><p>\u6837\u4F8B 11-28. \u7B80\u5355\u7684\u5B57\u7B26\u4E32\u5339\u914D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># match-string.sh: \u4F7F\u7528 &#39;case&#39; \u7ED3\u6784\u8FDB\u884C\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u5339\u914D\u3002</span>

<span class="token function-name function">match_string</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span> <span class="token comment"># \u5B57\u7B26\u4E32\u7CBE\u786E\u5339\u914D\u3002</span>
  <span class="token assign-left variable">MATCH</span><span class="token operator">=</span><span class="token number">0</span>
  <span class="token assign-left variable">E_NOMATCH</span><span class="token operator">=</span><span class="token number">90</span>
  <span class="token assign-left variable">PARAMS</span><span class="token operator">=</span><span class="token number">2</span>     <span class="token comment"># \u9700\u89812\u4E2A\u53C2\u6570\u3002</span>
  <span class="token assign-left variable">E_BAD_PARAMS</span><span class="token operator">=</span><span class="token number">91</span>
  
  <span class="token punctuation">[</span> <span class="token variable">$#</span> -eq <span class="token variable">$PARAMS</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$E_BAD_PARAMS</span>
  
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$MATCH</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    *   <span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$E_NOMATCH</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  
<span class="token punctuation">}</span>


<span class="token assign-left variable">a</span><span class="token operator">=</span>one
<span class="token assign-left variable">b</span><span class="token operator">=</span>two
<span class="token assign-left variable">c</span><span class="token operator">=</span>three
<span class="token assign-left variable">d</span><span class="token operator">=</span>two

match_string <span class="token variable">$a</span>     <span class="token comment"># \u53C2\u6570\u4E2A\u6570\u4E0D\u591F</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>             <span class="token comment"># 91</span>

match_string <span class="token variable">$a</span> <span class="token variable">$b</span>  <span class="token comment"># \u5339\u914D\u4E0D\u5230</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>             <span class="token comment"># 90</span>

match_string <span class="token variable">$a</span> <span class="token variable">$d</span>  <span class="token comment"># \u5339\u914D\u6210\u529F</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>             <span class="token comment"># 0</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u6837\u4F8B 11-29. \u68C0\u67E5\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># isaplpha.sh: \u4F7F\u7528 &quot;case&quot; \u7ED3\u6784\u68C0\u67E5\u8F93\u5165\u3002</span>

<span class="token assign-left variable">SUCCESS</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">FAILURE</span><span class="token operator">=</span><span class="token number">1</span>   <span class="token comment">#  \u4EE5\u524D\u662FFAILURE=-1,</span>
            <span class="token comment">#+ \u4F46\u73B0\u5728 Bash \u4E0D\u5141\u8BB8\u8FD4\u56DE\u8D1F\u503C\u3002</span>

isalpha <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u6D4B\u8BD5\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u662F\u5426\u662F\u5B57\u6BCD\u3002</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>                <span class="token comment"># \u68C0\u6D4B\u662F\u5426\u4F20\u5165\u53C2\u6570\u3002</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span>
<span class="token keyword">fi</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token punctuation">[</span>a-zA-Z<span class="token punctuation">]</span>*<span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$SUCCESS</span><span class="token punctuation">;</span><span class="token punctuation">;</span>  <span class="token comment"># \u662F\u5426\u4EE5\u5B57\u6BCD\u5F62\u5F0F\u5F00\u59CB\uFF1F</span>
  *        <span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token punctuation">}</span>             <span class="token comment"># \u53EF\u4EE5\u4E0E C \u8BED\u8A00\u4E2D\u7684\u51FD\u6570 &quot;isalpha ()&quot; \u4F5C\u6BD4\u8F83\u3002</span>


isalpha2 <span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># \u6D4B\u8BD5\u6574\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u90FD\u662F\u5B57\u6BCD\u3002</span>
<span class="token punctuation">{</span>
  <span class="token punctuation">[</span> <span class="token variable">$#</span> -eq <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span>
  
  <span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  *<span class="token punctuation">[</span><span class="token operator">!</span>a-zA-Z<span class="token punctuation">]</span>*<span class="token operator">|</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
               *<span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$SUCCESS</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token punctuation">}</span>

isdigit <span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># \u6D4B\u8BD5\u6574\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u90FD\u662F\u6570\u5B57\u3002</span>
<span class="token punctuation">{</span>             <span class="token comment"># \u6362\u53E5\u8BDD\u8BF4\uFF0C\u4E5F\u5C31\u662F\u6D4B\u8BD5\u662F\u5426\u662F\u4E00\u4E2A\u6574\u578B\u53D8\u91CF\u3002</span>
  <span class="token punctuation">[</span> <span class="token variable">$#</span> -eq <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span>
  
  <span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
    *<span class="token punctuation">[</span><span class="token operator">!</span><span class="token number">0</span>-9<span class="token punctuation">]</span>*<span class="token operator">|</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
              *<span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$SUCCESS</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token punctuation">}</span>



check_var <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u5305\u88C5\u540E\u7684 isalpha ()\u3002</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span> isalpha <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> begins with an alpha character.&quot;</span>
  <span class="token keyword">if</span> isalpha2 <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
  <span class="token keyword">then</span>        <span class="token comment"># \u5176\u5B9E\u6CA1\u5FC5\u8981\u68C0\u67E5\u7B2C\u4E00\u4E2A\u5B57\u7B26\u662F\u4E0D\u662F\u5B57\u6BCD\u3002</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> contains only alpha characters.&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> contains at least one non-alpha character.&quot;</span>
  <span class="token keyword">fi</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> begins with a non-alpha character.&quot;</span>
              <span class="token comment"># \u5982\u679C\u6CA1\u6709\u4F20\u5165\u53C2\u6570\u540C\u6837\u540C\u6837\u8FD4\u56DE\u201C\u5B58\u5728\u975E\u5B57\u6BCD\u201D\u3002</span>
<span class="token keyword">fi</span>
  
<span class="token builtin class-name">echo</span>
  
<span class="token punctuation">}</span>

digit_check <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u5305\u88C5\u540E\u7684 isdigit ()\u3002</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span> isdigit <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> contains only digits [0 - 9].&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> has at least one non-digit character.&quot;</span>
<span class="token keyword">fi</span>
  
<span class="token builtin class-name">echo</span>
  
<span class="token punctuation">}</span>


<span class="token assign-left variable">a</span><span class="token operator">=</span>23skidoo
<span class="token assign-left variable">b</span><span class="token operator">=</span>H3llo
<span class="token assign-left variable">c</span><span class="token operator">=</span>-What?
<span class="token assign-left variable">d</span><span class="token operator">=</span>What?
<span class="token assign-left variable">e</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $b<span class="token variable">)</span></span>   <span class="token comment"># \u547D\u4EE4\u66FF\u6362\u3002</span>
<span class="token assign-left variable">f</span><span class="token operator">=</span>AbcDef
<span class="token assign-left variable">g</span><span class="token operator">=</span><span class="token number">27234</span>
<span class="token assign-left variable">h</span><span class="token operator">=</span>27a34
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">27.34</span>

check_var <span class="token variable">$a</span>
check_var <span class="token variable">$b</span>
check_var <span class="token variable">$c</span>
check_var <span class="token variable">$d</span>
check_var <span class="token variable">$e</span>
check_var <span class="token variable">$f</span>
check_var     <span class="token comment"># \u5982\u679C\u4E0D\u4F20\u5165\u53C2\u6570\u4F1A\u53D1\u9001\u4EC0\u4E48\uFF1F</span>
<span class="token comment">#</span>
digit_check <span class="token variable">$g</span>
digit_check <span class="token variable">$h</span>
digit_check <span class="token variable">$i</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>        <span class="token comment"># S.C. \u6539\u8FDB\u4E86\u672C\u811A\u672C\u3002</span>

<span class="token comment"># \u7EC3\u4E60\uFF1A</span>
<span class="token comment"># -----</span>
<span class="token comment"># \u5199\u4E00\u4E2A\u51FD\u6570 &#39;isfloat ()&#39; \u6765\u68C0\u6D4B\u8F93\u5165\u503C\u662F\u5426\u662F\u6D6E\u70B9\u6570\u3002</span>
<span class="token comment"># \u63D0\u793A\uFF1A\u53EF\u4EE5\u53C2\u8003\u51FD\u6570 &#39;isdigit ()&#39;\uFF0C\u5728\u5176\u4E2D\u52A0\u5165\u68C0\u6D4B\u5408\u6CD5\u7684\u5C0F\u6570\u70B9\u5373\u53EF\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> <code>select</code></h3><p><code>select</code> \u7ED3\u6784\u662F\u5B66\u4E60\u81EA Korn Shell\u3002\u5176\u540C\u6837\u53EF\u4EE5\u7528\u6765\u6784\u5EFA\u83DC\u5355\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">select</span> variable <span class="token punctuation">[</span>in list<span class="token punctuation">]</span>
<span class="token keyword">do</span>
 command<span class="token punctuation">..</span>.
 <span class="token builtin class-name">break</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u800C\u6548\u679C\u5219\u662F\u7EC8\u7AEF\u4F1A\u63D0\u793A\u7528\u6237\u8F93\u5165\u5217\u8868\u4E2D\u7684\u4E00\u4E2A\u9009\u9879\u3002\u6CE8\u610F\uFF0C<code>select</code> \u9ED8\u8BA4\u4F7F\u7528\u63D0\u793A\u5B57\u4E323\uFF08Prompt String 3\uFF0C<code>$PS3</code>, \u5373#?\uFF09\uFF0C\u4F46\u540C\u6837\u53EF\u4EE5\u88AB\u4FEE\u6539\u3002</p><p>\u6837\u4F8B 11-30. \u4F7F\u7528 <code>select</code> \u521B\u5EFA\u83DC\u5355</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable"><span class="token environment constant">PS3</span></span><span class="token operator">=</span><span class="token string">&#39;Choose your favorite vegetable: &#39;</span> <span class="token comment"># \u8BBE\u7F6E\u63D0\u793A\u5B57\u4E32\u3002</span>
                                       <span class="token comment"># \u5426\u5219\u9ED8\u8BA4\u4E3A #?\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">select</span> <span class="token for-or-select variable">vegetable</span> <span class="token keyword">in</span> <span class="token string">&quot;beans&quot;</span> <span class="token string">&quot;carrots&quot;</span> <span class="token string">&quot;potatoes&quot;</span> <span class="token string">&quot;onions&quot;</span> <span class="token string">&quot;rutabagas&quot;</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite veggie is <span class="token variable">$vegetable</span>.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Yuck!&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">break</span>  <span class="token comment"># \u5982\u679C\u6CA1\u6709 &#39;break&#39; \u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span>

<span class="token comment"># \u7EC3\u4E60:</span>
<span class="token comment"># -----</span>
<span class="token comment"># \u4FEE\u6539\u811A\u672C\uFF0C\u4F7F\u5F97\u5176\u53EF\u4EE5\u63A5\u53D7\u5176\u4ED6\u8F93\u5165\u800C\u4E0D\u662F &quot;select&quot; \u8BED\u53E5\u4E2D\u6240\u6307\u5B9A\u7684\u3002</span>
<span class="token comment"># \u4F8B\u5982\uFF0C\u5982\u679C\u7528\u6237\u8F93\u5165 &quot;peas,&quot;\uFF0C\u90A3\u4E48\u811A\u672C\u4F1A\u901A\u77E5\u7528\u6237 &quot;Sorry. That is not on the menu.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u5982\u679C <em>in list</em> \u88AB\u7701\u7565\uFF0C\u90A3\u4E48 <code>select</code> \u5C06\u4F1A\u4F7F\u7528\u4F20\u5165\u811A\u672C\u7684\u547D\u4EE4\u884C\u53C2\u6570\uFF08<code>$@</code>\uFF09\u6216\u8005\u4F20\u5165\u51FD\u6570\u7684\u53C2\u6570\u4F5C\u4E3A <em>list</em>\u3002</p><p>\u53EF\u4EE5\u4E0E <code>for variable [in list]</code> \u4E2D <em>in list</em> \u88AB\u7701\u7565\u7684\u60C5\u51B5\u505A\u6BD4\u8F83\u3002</p><p>\u6837\u4F8B 11-31. \u5728\u51FD\u6570\u4E2D\u4F7F\u7528 <code>select</code> \u521B\u5EFA\u83DC\u5355</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable"><span class="token environment constant">PS3</span></span><span class="token operator">=</span><span class="token string">&#39;Choose your favorite vegetable: &#39;</span>

<span class="token builtin class-name">echo</span>

<span class="token function-name function">choice_of</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">select</span> vegetable
<span class="token comment"># [in list] \u88AB\u7701\u7565\uFF0C\u56E0\u6B64 &#39;select&#39; \u5C06\u4F1A\u4F7F\u7528\u4F20\u5165\u51FD\u6570\u7684\u53C2\u6570\u4F5C\u4E3A list\u3002</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite veggie is <span class="token variable">$vegetable</span>.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Yuck!&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">break</span>
<span class="token keyword">done</span>
<span class="token punctuation">}</span>

choice_of beans rice carrorts radishes rutabaga spinach
<span class="token comment">#         $1    $2   $3      $4       $5       $6</span>
<span class="token comment">#         \u4F20\u5165\u4E86\u51FD\u6570 choice_of()</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,32),b=n("\u8FD8\u53EF\u4EE5\u53C2\u7167 "),k={href:"http://tldp.org/LDP/abs/html/bashver2.html#RESISTOR",target:"_blank",rel:"noopener noreferrer"},m=n("\u6837\u4F8B37-3"),d=n("\u3002"),h=a('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>\u5728\u5199\u5339\u914D\u884C\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5728\u5DE6\u8FB9\u52A0\u4E0A\u5DE6\u62EC\u53F7 (\uFF0C\u4F7F\u6574\u4E2A\u7ED3\u6784\u770B\u8D77\u6765\u66F4\u52A0\u4F18\u96C5\u3002<pre>case $( arch ) in   # $( arch ) \u8FD4\u56DE\u8BBE\u5907\u67B6\u6784\u3002<br>  ( i386 ) echo &quot;80386-based machine&quot;;;<br># ^      ^<br>  ( i486 ) echo &quot;80486-based machine&quot;;;<br>  ( i586 ) echo &quot;Pentium-based machine&quot;;;<br>  ( i686 ) echo &quot;Pentium2+-based machine&quot;;;<br>  (    * ) echo &quot;Other type of machine&quot;;;<br>esac</pre> <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>',2);function q(g,v){const e=l("ExternalLinkIcon");return r(),t(o,null,[u,s("p",null,[b,s("a",k,[m,c(e)]),d]),h],64)}var y=p(i,[["render",q],["__file","11_4_testing_and_branching.html.vue"]]);export{y as default};
