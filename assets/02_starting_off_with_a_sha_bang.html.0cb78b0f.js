import{_ as c,r as o,c as r,a as n,b as a,w as l,F as i,d as s,e as t,o as b}from"./app.ac0f71d5.js";const m={},u=n("h1",{id:"\u7B2C\u4E8C\u7AE0-\u548Csha-bang-\u4E00\u8D77\u51FA\u53D1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C\u4E8C\u7AE0-\u548Csha-bang-\u4E00\u8D77\u51FA\u53D1","aria-hidden":"true"},"#"),s(" \u7B2C\u4E8C\u7AE0 \u548CSha-Bang\uFF08#!\uFF09\u4E00\u8D77\u51FA\u53D1")],-1),k=n("blockquote",null,[n("p",null,"Shell\u7F16\u7A0B\u58F0\u540D\u663E\u8D6B"),n("p",null,"\u2014\u2014 Larry Wall")],-1),d=n("h3",{id:"\u672C\u7AE0\u76EE\u5F55",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u672C\u7AE0\u76EE\u5F55","aria-hidden":"true"},"#"),s(" \u672C\u7AE0\u76EE\u5F55")],-1),h=s("2.1 \u8C03\u7528\u4E00\u4E2A\u811A\u672C"),f=s("2.2 \u725B\u5200\u5C0F\u8BD5"),_=t(`<hr><p>\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u811A\u672C\u5176\u5B9E\u5C31\u662F\u5C06\u4E00\u8FDE\u4E32\u7CFB\u7EDF\u547D\u4EE4\u5B58\u50A8\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\u3002\u6700\u8D77\u7801\uFF0C\u5B83\u80FD\u5E2E\u4F60\u7701\u4E0B\u91CD\u590D\u8F93\u5165\u8FD9\u4E00\u8FDE\u4E32\u547D\u4EE4\u7684\u529F\u592B\u3002</p><p>\u6837\u4F8B 2-1. <em>cleanup</em>\uFF1A\u6E05\u7406<code>/var/log</code>\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Cleanup</span>
<span class="token comment"># \u8BF7\u4F7F\u7528root\u6743\u9650\u6267\u884C</span>

<span class="token builtin class-name">cd</span> /var/log
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> messages
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> wtmp
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Log files cleaned up.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u652F\u811A\u672C\u4EC5\u4EC5\u662F\u4E00\u4E9B\u53EF\u4EE5\u5F88\u5BB9\u6613\u4ECE\u7EC8\u7AEF\u6216\u63A7\u5236\u53F0\u8F93\u5165\u7684\u547D\u4EE4\u7684\u96C6\u5408\u7F62\u4E86\uFF0C\u6CA1\u4EC0\u4E48\u7279\u6B8A\u7684\u5730\u65B9\u3002\u5C06\u547D\u4EE4\u653E\u5728\u811A\u672C\u4E2D\u7684\u597D\u5904\u662F\uFF0C\u4F60\u4E0D\u7528\u518D\u4E00\u904D\u904D\u91CD\u590D\u8F93\u5165\u8FD9\u4E9B\u547D\u4EE4\u5566\u3002\u811A\u672C\u6210\u4E86\u4E00\u652F<em>\u7A0B\u5E8F</em>\u3001\u4E00\u6B3E<em>\u5DE5\u5177</em>\uFF0C\u5B83\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u88AB\u4FEE\u6539\u6216\u4E3A\u7279\u6B8A\u9700\u6C42\u5B9A\u5236\u3002</p><p>\u6837\u4F8B 2-2. <em>cleanup</em>\uFF1A\u6539\u8FDB\u7684\u6E05\u7406\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Bash\u811A\u672C\u6807\u51C6\u8D77\u59CB\u884C\u3002</span>

<span class="token comment"># Cleanup, version 2</span>

<span class="token comment"># \u8BF7\u4F7F\u7528root\u6743\u9650\u6267\u884C\u3002</span>
<span class="token comment"># \u8FD9\u91CC\u53EF\u4EE5\u63D2\u5165\u4EE3\u7801\u6765\u6253\u5370\u9519\u8BEF\u4FE1\u606F\uFF0C\u5E76\u5728\u672A\u4F7F\u7528root\u6743\u9650\u65F6\u9000\u51FA\u3002</span>

<span class="token assign-left variable">LOG_DIR</span><span class="token operator">=</span>/var/log
<span class="token comment"># \u4F7F\u7528\u53D8\u91CF\u6BD4\u786C\u7F16\u7801\uFF08hard-coded\uFF09\u66F4\u5408\u9002</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$LOG_DIR</span>

<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> messages
<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> wtmp


<span class="token builtin class-name">echo</span> <span class="token string">&quot;Logs cleaned up.&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token comment"># \u6B63\u786E\u7EC8\u6B62\u811A\u672C\u7684\u65B9\u5F0F\u3002</span>
     <span class="token comment"># \u4E0D\u5E26\u53C2\u6570\u7684exit\u8FD4\u56DE\u4E0A\u4E00\u6761\u6307\u4EE4\u7684\u8FD0\u884C\u7ED3\u679C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u73B0\u5728\u6211\u4EEC\u770B\u5230\u4E86\u4E00\u4E2A\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u811A\u672C! \u8BA9\u6211\u4EEC\u7EE7\u7EED\u524D\u8FDB...</p><p>\u6837\u4F8B 2-3. <em>cleanup</em>\uFF1A\u6539\u826F\u3001\u901A\u7528\u7248</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Cleanup, version 3</span>

<span class="token comment"># \u6CE8\u610F\uFF1A</span>
<span class="token comment"># --------</span>
<span class="token comment"># \u6B64\u811A\u672C\u6D89\u53CA\u5230\u8BB8\u591A\u540E\u8FB9\u624D\u4F1A\u89E3\u91CA\u7684\u7279\u6027\u3002</span>
<span class="token comment"># \u5F53\u4F60\u9605\u8BFB\u5B8C\u6574\u672C\u4E66\u7684\u4E00\u534A\u4EE5\u540E\uFF0C\u7406\u89E3\u5B83\u4EEC\u5C31\u6CA1\u6709\u4EFB\u4F55\u56F0\u96BE\u4E86\u3002</span>


<span class="token assign-left variable">LOG_DIR</span><span class="token operator">=</span>/var/log
<span class="token assign-left variable">ROOT_UID</span><span class="token operator">=</span><span class="token number">0</span>     <span class="token comment"># UID\u4E3A0\u7684\u7528\u6237\u624D\u62E5\u6709root\u6743\u9650\u3002</span>
<span class="token assign-left variable"><span class="token environment constant">LINES</span></span><span class="token operator">=</span><span class="token number">50</span>       <span class="token comment"># \u9ED8\u8BA4\u4FDD\u5B58messages\u65E5\u5FD7\u6587\u4EF6\u884C\u6570\u3002</span>
<span class="token assign-left variable">E_XCD</span><span class="token operator">=</span><span class="token number">86</span>       <span class="token comment"># \u65E0\u6CD5\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55\u7684\u9519\u8BEF\u7801\u3002</span>
<span class="token assign-left variable">E_NOTROOT</span><span class="token operator">=</span><span class="token number">87</span>   <span class="token comment"># \u975Eroot\u6743\u9650\u7528\u6237\u6267\u884C\u7684\u9519\u8BEF\u7801\u3002</span>



<span class="token comment"># \u8BF7\u4F7F\u7528root\u6743\u9650\u8FD0\u884C\u3002</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$UID</span>&quot;</span> -ne <span class="token string">&quot;<span class="token variable">$ROOT_UID</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Must be root to run this script.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOTROOT</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token comment"># \u6D4B\u8BD5\u547D\u4EE4\u884C\u53C2\u6570\uFF08\u4FDD\u5B58\u884C\u6570\uFF09\u662F\u5426\u4E3A\u7A7A</span>
<span class="token keyword">then</span>
  <span class="token assign-left variable">lines</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">else</span>
  <span class="token assign-left variable">lines</span><span class="token operator">=</span><span class="token environment constant">$LINES</span> <span class="token comment"># \u5982\u679C\u4E3A\u7A7A\u5219\u4F7F\u7528\u9ED8\u8BA4\u8BBE\u7F6E</span>
<span class="token keyword">fi</span>


<span class="token comment">#  Stephane Chazelas \u5EFA\u8BAE\u4F7F\u7528\u5982\u4E0B\u65B9\u6CD5\u68C0\u67E5\u547D\u4EE4\u884C\u53C2\u6570\uFF0C</span>
<span class="token comment">#  \u4F46\u662F\u8FD9\u5DF2\u7ECF\u8D85\u51FA\u4E86\u6B64\u9636\u6BB5\u6559\u7A0B\u7684\u8303\u56F4\u3002</span>
<span class="token comment">#</span>
<span class="token comment">#    E_WRONGARGS=85  # Non-numerical argument (bad argument format).</span>
<span class="token comment">#    case &quot;$1&quot; in</span>
<span class="token comment">#    &quot;&quot;      ) lines=50;;</span>
<span class="token comment">#    *[!0-9]*) echo &quot;Usage: \`basename $0\` lines-to-cleanup&quot;;</span>
<span class="token comment">#     exit $E_WRONGARGS;;</span>
<span class="token comment">#    *       ) lines=$1;;</span>
<span class="token comment">#    esac</span>
<span class="token comment">#</span>
<span class="token comment">#* \u5728\u7B2C\u5341\u4E00\u7AE0\u201C\u5FAA\u73AF\u4E0E\u5206\u652F\u201D\u4E2D\u4F1A\u5BF9\u6B64\u4F5C\u8BE6\u7EC6\u7684\u9610\u8FF0\u3002</span>


<span class="token builtin class-name">cd</span> <span class="token variable">$LOG_DIR</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span> <span class="token operator">!=</span> <span class="token string">&quot;<span class="token variable">$LOG_DIR</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment"># \u4E5F\u53EF\u4EE5\u8FD9\u6837\u5199 if [ &quot;$PWD&quot; != &quot;$LOG_DIR&quot; ]</span>
                            <span class="token comment"># \u68C0\u67E5\u5DE5\u4F5C\u76EE\u5F55\u662F\u5426\u4E3A /var/log ?</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Can&#39;t change to <span class="token variable">$LOG_DIR</span>&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_XCD</span>
<span class="token keyword">fi</span>  <span class="token comment"># \u5728\u6E05\u7406\u65E5\u5FD7\u524D\uFF0C\u4E8C\u6B21\u786E\u8BA4\u662F\u5426\u5728\u6B63\u786E\u7684\u5DE5\u4F5C\u76EE\u5F55\u4E0B\u3002</span>

<span class="token comment"># \u66F4\u9AD8\u6548\u7684\u5199\u6CD5\uFF1A</span>
<span class="token comment">#</span>
<span class="token comment"># cd /var/log || {</span>
<span class="token comment">#   echo &quot;Cannot change to necessary directory.&quot; &gt;&amp;2</span>
<span class="token comment">#   exit $E_XCD;</span>
<span class="token comment"># }</span>


<span class="token function">tail</span> -n <span class="token variable">$lines</span> messages <span class="token operator">&gt;</span> mesg.temp <span class="token comment"># \u4FDD\u5B58messages\u65E5\u5FD7\u6587\u4EF6\u6700\u540E\u4E00\u90E8\u5206</span>
<span class="token function">mv</span> mesg.temp messages              <span class="token comment"># \u66FF\u6362\u7CFB\u7EDF\u65E5\u5FD7\u6587\u4EF6\u4EE5\u8FBE\u5230\u6E05\u7406\u76EE\u7684</span>

<span class="token comment">#  cat /dev/null &gt; messages</span>
<span class="token comment">#* \u6211\u4EEC\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u4E86\uFF0C\u4E0A\u9762\u7684\u65B9\u6CD5\u66F4\u5B89\u5168</span>

<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> wtmp  <span class="token comment">#  &#39;: &gt; wtmp&#39; \u4E0E &#39;&gt; wtmp&#39; \u6709\u540C\u6837\u7684\u6548\u679C</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Log files cleaned up.&quot;</span>
<span class="token comment">#  \u6CE8\u610F\u5728/var/log\u76EE\u5F55\u4E0B\u7684\u5176\u4ED6\u65E5\u5FD7\u6587\u4EF6\u4E0D\u4F1A\u88AB\u8FD9\u4E2A\u811A\u672C\u6E05\u9664</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token comment">#  \u8FD4\u56DE0\u8868\u793A\u811A\u672C\u8FD0\u884C\u6210\u529F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><p>\u4E5F\u8BB8\u4F60\u5E76\u4E0D\u5E0C\u671B\u6E05\u7A7A\u5168\u90E8\u7684\u7CFB\u7EDF\u65E5\u5FD7\uFF0C\u8FD9\u4E2A\u811A\u672C\u4FDD\u7559\u4E86messages\u65E5\u5FD7\u7684\u6700\u540E\u4E00\u90E8\u5206\u3002\u968F\u7740\u5B66\u4E60\u7684\u6DF1\u5165\uFF0C\u4F60\u5C06\u660E\u767D\u66F4\u591A\u63D0\u9AD8\u811A\u672C\u8FD0\u884C\u6548\u7387\u7684\u65B9\u6CD5\u3002</p><hr><p>\u811A\u672C\u8D77\u59CB\u884C<em>sha-bang</em>\uFF08#!\uFF09<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>\u544A\u8BC9\u7CFB\u7EDF\u8FD9\u4E2A\u811A\u672C\u6587\u4EF6\u9700\u8981\u4F7F\u7528\u6307\u5B9A\u7684\u547D\u4EE4\u89E3\u91CA\u5668\u6765\u6267\u884C\u3002#!\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u5360\u4E24\u5B57\u8282<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>\u7684<em>\u5E7B\u6570</em>\uFF08magic number\uFF09,\u5E7B\u6570\u53EF\u4EE5\u7528\u6765\u6807\u8BC6\u7279\u6B8A\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u5728\u8FD9\u91CC\u5219\u662F\u6807\u8BB0\u53EF\u6267\u884Cshell\u811A\u672C\uFF08\u4F60\u53EF\u4EE5\u5728\u7EC8\u7AEF\u4E2D\u8F93\u5165<code>man magic</code>\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF09\u3002\u7D27\u968F#!\u7684\u662F\u4E00\u4E2A\u8DEF\u5F84\u540D\u3002\u6B64\u8DEF\u5F84\u6307\u5411\u7528\u6765\u89E3\u91CA\u6B64\u811A\u672C\u7684\u7A0B\u5E8F\uFF0C\u5B83\u53EF\u4EE5\u662Fshell\uFF0C\u53EF\u4EE5\u662F\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5B9E\u7528\u7A0B\u5E8F\u3002\u8FD9\u4E2A\u89E3\u91CA\u5668\u4ECE\u5934\uFF08#!\u7684\u4E0B\u4E00\u884C\uFF09\u5F00\u59CB\u6267\u884C\u6574\u4E2A\u811A\u672C\u7684\u547D\u4EE4\uFF0C\u540C\u65F6\u5FFD\u7565\u6CE8\u91CA\u3002<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh
#!/bin/bash
#!/usr/bin/perl
#!/usr/bin/tcl
#!/bin/sed -f
#!/bin/awk -f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0A\u9762\u6BCF\u4E00\u6761\u811A\u672C\u8D77\u59CB\u884C\u90FD\u8C03\u7528\u4E86\u4E0D\u540C\u7684\u89E3\u91CA\u5668\uFF0C\u6BD4\u5982<code>/bin/sh</code>\u8C03\u7528\u4E86\u7CFB\u7EDF\u9ED8\u8BA4shell\uFF08Linux\u7CFB\u7EDF\u4E2D\u9ED8\u8BA4\u662Fbash\uFF09<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup>\u3002\u5927\u90E8\u5206UNIX\u5546\u4E1A\u53D1\u884C\u7248\u4E2D\u9ED8\u8BA4\u7684\u662FBourne shell\uFF0C\u5373<code>#!/bin/sh</code>\u3002\u4F60\u53EF\u4EE5\u4EE5\u727A\u7272Bash\u7279\u6027\u4E3A\u4EE3\u4EF7\uFF0C\u5728\u975ELinux\u7684\u673A\u5668\u4E0A\u8FD0\u884Csh\u811A\u672C\u3002\u5F53\u7136\uFF0C\u811A\u672C\u5F97\u9075\u5FAAPOSIX<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup> sh\u6807\u51C6\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F<code>#!</code>\u540E\u7684\u8DEF\u5F84\u5FC5\u987B\u6B63\u786E\uFF0C\u5426\u5219\u5F53\u4F60\u8FD0\u884C\u811A\u672C\u65F6\u53EA\u4F1A\u5F97\u5230\u4E00\u6761\u9519\u8BEF\u4FE1\u606F\uFF0C\u901A\u5E38\u662F&quot;Command not found.&quot;<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup></p><p>\u5F53\u811A\u672C\u4EC5\u5305\u542B\u4E00\u4E9B\u901A\u7528\u7684\u7CFB\u7EDF\u547D\u4EE4\u800C\u4E0D\u4F7F\u7528shell\u5185\u90E8\u6307\u4EE4\u65F6\uFF0C\u53EF\u4EE5\u7701\u7565<code>#!</code>\u3002\u7B2C\u4E09\u4E2A\u4F8B\u5B50\u9700\u8981<code>#!</code>\u662F\u56E0\u4E3A\u5F53\u5BF9\u53D8\u91CF\u8D4B\u503C\u65F6\uFF0C\u4F8B\u5982<code>lines=50</code>\uFF0C\u4F7F\u7528\u4E86\u4E0Eshell\u7279\u6027\u76F8\u5173\u7684\u7ED3\u6784<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup>\u3002\u518D\u91CD\u590D\u4E00\u6B21\uFF0C<code>#!/bin/sh</code>\u8C03\u7528\u7684\u662F\u7CFB\u7EDF\u9ED8\u8BA4shell\u89E3\u91CA\u5668\uFF0C\u5728Linux\u7CFB\u7EDF\u4E2D\u9ED8\u8BA4\u4E3A<code>/bin/bash</code>\u3002</p><p>\u8FD9\u4E2A\u4F8B\u5B50\u9F13\u52B1\u8BFB\u8005\u4F7F\u7528\u6A21\u5757\u5316\u7684\u65B9\u5F0F\u7F16\u5199\u811A\u672C\uFF0C\u5E76\u5728\u5E73\u65F6\u8BB0\u5F55\u548C\u6536\u96C6\u4E00\u4E9B\u5728\u4EE5\u540E\u53EF\u80FD\u4F1A\u7528\u5230\u7684\u4EE3\u7801\u6A21\u677F\u3002\u6700\u7EC8\u4F60\u5C06\u62E5\u6709\u4E00\u4E2A\u76F8\u5F53\u4E30\u5BCC\u6613\u7528\u7684\u4EE3\u7801\u5E93\u3002\u4EE5\u4E0B\u7684\u4EE3\u7801\u53EF\u4EE5\u7528\u6765\u6D4B\u8BD5\u811A\u672C\u88AB\u8C03\u7528\u65F6\u7684\u53C2\u6570\u6570\u91CF\u662F\u5426\u6B63\u786E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">E_WRONG_ARGS</span><span class="token operator">=</span><span class="token number">85</span>
<span class="token assign-left variable">script_parameters</span><span class="token operator">=</span><span class="token string">&quot;-a -h -m -z&quot;</span>
                 <span class="token comment"># -a = all, -h = help \u7B49\u7B49</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -ne <span class="token variable">$Number_of_expected_args</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> <span class="token variable">$script_parameters</span>&quot;</span>
  <span class="token comment"># \`basename $0\` \u662F\u811A\u672C\u7684\u6587\u4EF6\u540D</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_WRONG_ARGS</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4F60\u4F1A\u9488\u5BF9\u7279\u5B9A\u7684\u4EFB\u52A1\u7F16\u5199\u811A\u672C\u3002\u672C\u7AE0\u7684\u7B2C\u4E00\u4E2A\u811A\u672C\u5C31\u662F\u8FD9\u6837\u3002\u7136\u540E\u4F60\u4E5F\u8BB8\u4F1A\u6CDB\u5316\uFF08generalize\uFF09\u811A\u672C\u4F7F\u5176\u80FD\u591F\u9002\u5E94\u66F4\u591A\u76F8\u4F3C\u7684\u4EFB\u52A1\uFF0C\u6BD4\u5982\u7528\u53D8\u91CF\u4EE3\u66FF\u786C\u7F16\u7801\uFF0C\u7528\u51FD\u6570\u4EE3\u66FF\u91CD\u590D\u4EE3\u7801\u3002</p><hr class="footnotes-sep">`,21),g={class:"footnotes"},v={class:"footnotes-list"},q=n("li",{id:"footnote1",class:"footnote-item"},[n("p",null,[s("\u5728\u6587\u732E\u4E2D\u66F4\u5E38\u89C1\u7684\u5F62\u5F0F\u662Fshe-bang\u6216\u8005sh-bang\u3002\u5B83\u4EEC\u90FD\u6765\u6E90\u4E8E\u8BCD\u6C47sharp(#)\u548Cbang(!)\u7684\u8FDE\u63A5\u3002 "),n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E")])],-1),w={id:"footnote2",class:"footnote-item"},x=s("\u4E00\u4E9BUNIX\u7684\u884D\u751F\u7248\uFF08\u57FA\u4E8E4.2 BSD\uFF09\u58F0\u79F0\u4ED6\u4EEC\u4F7F\u7528\u56DB\u5B57\u8282\u7684\u5E7B\u6570\uFF0C\u5728#!\u540E\u589E\u52A0\u4E00\u4E2A\u7A7A\u683C\uFF0C\u5373"),$=n("code",null,"#! /bin/sh",-1),O=s("\u3002\u800C"),R={href:"http://www.in-ulm.de/~mascheck/various/shebang/#details",target:"_blank",rel:"noopener noreferrer"},I=s("Sven Mascheck"),E=s("\u6307\u51FA\u8FD9\u662F\u865A\u6784\u7684\u3002 "),L=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),N=t('<li id="footnote3" class="footnote-item"><p>\u547D\u4EE4\u89E3\u91CA\u5668\u9996\u5148\u5C06\u4F1A\u89E3\u91CA#!\u8FD9\u4E00\u884C\uFF0C\u800C\u56E0\u4E3A#!\u4EE5#\u6253\u5934\uFF0C\u56E0\u6B64\u89E3\u91CA\u5668\u5C06\u5176\u89C6\u4F5C\u6CE8\u91CA\u3002\u8D77\u59CB\u884C\u4F5C\u4E3A\u8C03\u7528\u89E3\u91CA\u5668\u7684\u4F5C\u7528\u5DF2\u7ECF\u5B8C\u6210\u4E86\u3002</p><p>\u4E8B\u5B9E\u4E0A\u5373\u4F7F\u811A\u672C\u4E2D\u542B\u6709\u4E0D\u6B62\u4E00\u4E2A#!,bash\u4E5F\u4F1A\u5C06\u9664\u7B2C\u4E00\u4E2A`#!`\u4EE5\u5916\u7684\u89E3\u91CA\u4E3A\u6CE8\u91CA\u3002</p><pre>#!/bin/bash<br><br>echo &quot;Part 1 of script.&quot;<br>a=1<br><br>#!/bin/bash<br># \u8FD9\u5E76\u4E0D\u4F1A\u542F\u52A8\u65B0\u7684\u811A\u672C<br><br>echo &quot;Part 2 of script.&quot;<br>echo $a  # $a\u7684\u503C\u4ECD\u65E7\u4E3A1</pre><a href="#footnote-ref3" class="footnote-backref">\u21A9\uFE0E</a></li><li id="footnote4" class="footnote-item"><p>\u8FD9\u91CC\u5141\u8BB8\u4F7F\u7528\u4E00\u4E9B\u6280\u5DE7\u3002</p><pre>#!/bin/rm<br># \u81EA\u6211\u5220\u9664\u7684\u811A\u672C<br><br># \u5F53\u4F60\u8FD0\u884C\u8FD9\u4E2A\u811A\u672C\uFF0C\u9664\u4E86\u8FD9\u4E2A\u811A\u672C\u672C\u8EAB\u6D88\u5931\u4EE5\u5916\u5E76\u4E0D\u4F1A\u53D1\u751F\u4EC0\u4E48\u3002<br><br>WHATEVER=85<br><br>echo &quot;This line will never print (betcha!).&quot;<br><br>exit $WHATEVER  # \u8FD9\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u3002\u811A\u672C\u5C06\u4E0D\u4F1A\u4ECE\u8FD9\u91CC\u9000\u51FA\u3002<br>                # \u5C1D\u8BD5\u5728\u811A\u672C\u7EC8\u6B62\u540E\u6253\u5370echo $a\u3002<br>                # \u5F97\u5230\u7684\u503C\u5C06\u4F1A\u662F0\u800C\u4E0D\u662F85.</pre>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u5EFA\u7ACB\u4E00\u4E2A\u8D77\u59CB\u884C\u662F`#!/bin/more`\u7684README\u6587\u4EF6\uFF0C\u5E76\u4E14\u4F7F\u5B83\u53EF\u4EE5\u6267\u884C\u3002\u7ED3\u679C\u5C31\u662F\u8FD9\u4E2A\u6587\u4EF6\u6210\u4E3A\u4E86\u4E00\u4E2A\u53EF\u4EE5\u6253\u5370\u672C\u8EAB\u7684\u6587\u4EF6\u3002\uFF08\u67E5\u770B\u6837\u4F8B 19-3\uFF0C\u4F7F\u7528`cat`\u547D\u4EE4\u7684here document\u4E5F\u8BB8\u662F\u4E00\u4E2A\u66F4\u597D\u7684\u9009\u62E9\uFF09 <a href="#footnote-ref4" class="footnote-backref">\u21A9\uFE0E</a></li>',2),y={id:"footnote5",class:"footnote-item"},D=s("\u53EF\u79FB\u690D\u64CD\u4F5C\u7CFB\u7EDF\u63A5\u53E3\uFF08POSIX\uFF09\u5C1D\u8BD5\u6807\u51C6\u5316\u7C7BUNIX\u64CD\u4F5C\u7CFB\u7EDF\u3002POSIX\u89C4\u8303\u53EF\u4EE5\u5728"),G={href:"http://www.opengroup.org/onlinepubs/007904975/toc.htm",target:"_blank",rel:"noopener noreferrer"},S=s("Open Group site"),C=s("\u4E2D\u67E5\u770B\u3002 "),T=n("a",{href:"#footnote-ref5",class:"footnote-backref"},"\u21A9\uFE0E",-1),U=n("li",{id:"footnote6",class:"footnote-item"},[n("p",null,[s("\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u53EF\u4EE5\u4F7F\u7528"),n("code",null,"#!/bin/env bash"),s("\u4F5C\u4E3A\u8D77\u59CB\u884C\u3002\u8FD9\u5728bash\u4E0D\u5728"),n("code",null,"/bin"),s("\u7684UNIX\u7CFB\u7EDF\u4E2D\u4F1A\u6709\u6548\u679C\u3002 "),n("a",{href:"#footnote-ref6",class:"footnote-backref"},"\u21A9\uFE0E")])],-1),X=n("li",{id:"footnote7",class:"footnote-item"},[n("p",null,[s("\u5982\u679Cbash\u662F\u7CFB\u7EDF\u9ED8\u8BA4shell\uFF0C\u90A3\u4E48\u811A\u672C\u5E76\u4E0D\u4E00\u5B9A\u9700\u8981#!\u4F5C\u4E3A\u8D77\u59CB\u884C\u3002\u4F46\u662F\u5F53\u4F60\u5728\u5176\u4ED6\u7684shell\u4E2D\u8FD0\u884C\u811A\u672C\uFF0C\u4F8B\u5982tcsh\uFF0C\u5219\u9700\u8981\u4F7F\u7528#!\u3002 "),n("a",{href:"#footnote-ref7",class:"footnote-backref"},"\u21A9\uFE0E")])],-1);function B(W,A){const e=o("RouterLink"),p=o("ExternalLinkIcon");return b(),r(i,null,[u,k,d,n("ul",null,[n("li",null,[a(e,{to:"/code/shell/part1/02_1_invoking_the_script.html"},{default:l(()=>[h]),_:1})]),n("li",null,[a(e,{to:"/code/shell/part1/02_2_preliminary_exercises.html"},{default:l(()=>[f]),_:1})])]),_,n("section",g,[n("ol",v,[q,n("li",w,[n("p",null,[x,$,O,n("a",R,[I,a(p)]),E,L])]),N,n("li",y,[n("p",null,[D,n("a",G,[S,a(p)]),C,T])]),U,X])])],64)}var V=c(m,[["render",B],["__file","02_starting_off_with_a_sha_bang.html.vue"]]);export{V as default};
