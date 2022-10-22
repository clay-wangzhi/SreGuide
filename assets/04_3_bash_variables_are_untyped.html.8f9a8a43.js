import{_ as s,e as n}from"./app.cb2299af.js";const a={},e=n(`<h1 id="_4-3-bash\u53D8\u91CF\u662F\u5F31\u7C7B\u578B\u7684" tabindex="-1"><a class="header-anchor" href="#_4-3-bash\u53D8\u91CF\u662F\u5F31\u7C7B\u578B\u7684" aria-hidden="true">#</a> 4.3 Bash\u53D8\u91CF\u662F\u5F31\u7C7B\u578B\u7684</h1><p>\u4E0D\u540C\u4E8E\u8BB8\u591A\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\uFF0CBash \u5E76\u4E0D\u533A\u5206\u53D8\u91CF\u7684\u7C7B\u578B\u3002\u672C\u8D28\u4E0A\u8BF4\uFF0C<em>Bash \u53D8\u91CF\u662F\u5B57\u7B26\u4E32</em>\uFF0C\u4F46\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0CBash \u5141\u8BB8\u5BF9\u53D8\u91CF\u8FDB\u884C\u7B97\u672F\u8FD0\u7B97\u548C\u6BD4\u8F83\u3002\u51B3\u5B9A\u56E0\u7D20\u5219\u662F\u53D8\u91CF\u503C\u662F\u5426\u53EA\u542B\u6709\u6570\u5B57\u3002</p><p>\u6837\u4F8B 4-4. \u6574\u6570\u8FD8\u662F\u5B57\u7B26\u4E32\uFF1F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># int-or-string.sh</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">2334</span>                   <span class="token comment"># \u6574\u6570\u3002</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;a += 1&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span> &quot;</span>           <span class="token comment"># a = 2335</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># \u4F9D\u65E7\u662F\u6574\u6570\u3002</span>


<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token variable">\${a<span class="token operator">/</span>23<span class="token operator">/</span>BB}</span>             <span class="token comment"># \u5C06 &quot;23&quot; \u66FF\u6362\u4E3A &quot;BB&quot;\u3002</span>
                         <span class="token comment"># $b \u53D8\u6210\u4E86\u5B57\u7B26\u4E32\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>            <span class="token comment"># b = BB35</span>
<span class="token builtin class-name">declare</span> -i b             <span class="token comment"># \u5C06\u5176\u58F0\u660E\u4E3A\u6574\u6570\u5E76\u6CA1\u6709\u4EC0\u4E48\u5375\u7528\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>            <span class="token comment"># b = BB35</span>

<span class="token builtin class-name">let</span> <span class="token string">&quot;b += 1&quot;</span>             <span class="token comment"># BB35 + 1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>            <span class="token comment"># b = 1</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># Bash \u8BA4\u4E3A\u5B57\u7B26\u4E32\u7684&quot;\u6574\u6570\u503C&quot;\u4E3A0\u3002</span>

<span class="token assign-left variable">c</span><span class="token operator">=</span>BB34
<span class="token builtin class-name">echo</span> <span class="token string">&quot;c = <span class="token variable">$c</span>&quot;</span>            <span class="token comment"># c = BB34</span>
<span class="token assign-left variable">d</span><span class="token operator">=</span><span class="token variable">\${c<span class="token operator">/</span>BB<span class="token operator">/</span>23}</span>             <span class="token comment"># \u5C06 &quot;BB&quot; \u66FF\u6362\u4E3A &quot;23&quot;\u3002</span>
                         <span class="token comment"># $d \u53D8\u4E3A\u4E86\u4E00\u4E2A\u6574\u6570\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;d = <span class="token variable">$d</span>&quot;</span>            <span class="token comment"># d = 2334</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;d += 1&quot;</span>             <span class="token comment"># 2334 + 1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;d = <span class="token variable">$d</span>&quot;</span>            <span class="token comment"># d = 2335</span>
<span class="token builtin class-name">echo</span>


<span class="token comment"># \u5982\u679C\u662F\u7A7A\u503C\u4F1A\u600E\u6837\u5462\uFF1F</span>
<span class="token assign-left variable">e</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>                     <span class="token comment"># ...\u4E5F\u53EF\u4EE5\u662F e=&quot;&quot; \u6216 e=</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;e = <span class="token variable">$e</span>&quot;</span>            <span class="token comment"># e =</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;e += 1&quot;</span>             <span class="token comment"># \u7A7A\u503C\u662F\u5426\u5141\u8BB8\u8FDB\u884C\u7B97\u672F\u8FD0\u7B97\uFF1F</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;e = <span class="token variable">$e</span>&quot;</span>            <span class="token comment"># e = 1</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># \u7A7A\u503C\u53D8\u4E3A\u4E86\u4E00\u4E2A\u6574\u6570\u3002</span>

<span class="token comment"># \u5982\u679C\u65F6\u672A\u58F0\u660E\u7684\u53D8\u91CF\u5462\uFF1F</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;f = <span class="token variable">$f</span>&quot;</span>            <span class="token comment"># f =</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;f += 1&quot;</span>             <span class="token comment"># \u662F\u5426\u5141\u8BB8\u8FDB\u884C\u7B97\u672F\u8FD0\u7B97\uFF1F</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;f = <span class="token variable">$f</span>&quot;</span>            <span class="token comment"># f = 1</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># \u672A\u58F0\u660E\u53D8\u91CF\u53D8\u4E3A\u4E86\u4E00\u4E2A\u6574\u6570\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># \u7136\u800C\u2026\u2026</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;f /= <span class="token variable">$undecl_var</span>&quot;</span>   <span class="token comment"># \u53EF\u4EE5\u9664\u4EE50\u4E48\uFF1F</span>
<span class="token comment">#   let: f /= : syntax error: operand expected (error token is &quot; &quot;)</span>
<span class="token comment"># \u8BED\u6CD5\u9519\u8BEF\uFF01\u5728\u8FD9\u91CC $undecl_var \u5E76\u6CA1\u6709\u88AB\u8BBE\u7F6E\u4E3A0\uFF01</span>
<span class="token comment">#</span>
<span class="token comment"># \u4F46\u662F\uFF0C\u4ECD\u65E7\u2026\u2026</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;f /= 0&quot;</span>
<span class="token comment">#   let: f /= 0: division by 0 (error token is &quot;0&quot;)</span>
<span class="token comment"># \u9884\u671F\u4E4B\u4E2D\u3002</span>


<span class="token comment"># \u5728\u6267\u884C\u7B97\u672F\u8FD0\u7B97\u65F6\uFF0CBash \u901A\u5E38\u5C06\u5176\u7A7A\u503C\u7684\u6574\u6570\u503C\u8BBE\u4E3A0\u3002</span>
<span class="token comment"># \u4F46\u662F\u4E0D\u8981\u505A\u8FD9\u79CD\u4E8B\u60C5\uFF01</span>
<span class="token comment"># \u56E0\u4E3A\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u610F\u5916\u7684\u540E\u679C\u3002</span>


<span class="token comment"># \u7ED3\u8BBA\uFF1A\u4E0A\u9762\u7684\u7ED3\u679C\u90FD\u8868\u660E Bash \u4E2D\u7684\u53D8\u91CF\u662F\u5F31\u7C7B\u578B\u7684\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>\u5F31\u7C7B\u578B\u53D8\u91CF\u6709\u5229\u6709\u5F0A\u3002\u5B83\u53EF\u4EE5\u4F7F\u7F16\u7A0B\u66F4\u52A0\u7075\u6D3B\u3001\u66F4\u52A0\u5BB9\u6613\uFF08\u7ED9\u4E0E\u4F60\u8DB3\u591F\u7684\u60F3\u8C61\u7A7A\u95F4\uFF09\u3002\u4F46\u5B83\u4E5F\u540C\u6837\u7684\u5BB9\u6613\u9020\u6210\u4E00\u4E9B\u5C0F\u9519\u8BEF\uFF0C\u5BB9\u6613\u517B\u6210\u7C97\u5FC3\u5927\u610F\u7684\u7F16\u7A0B\u4E60\u60EF\u3002</p><p>\u4E3A\u4E86\u51CF\u8F7B\u811A\u672C\u6301\u7EED\u8DDF\u8E2A\u53D8\u91CF\u7C7B\u578B\u7684\u8D1F\u62C5\uFF0CBash <em>\u4E0D\u5141\u8BB8</em>\u53D8\u91CF\u58F0\u660E\u3002</p>`,6);function p(l,t){return e}var o=s(a,[["render",p],["__file","04_3_bash_variables_are_untyped.html.vue"]]);export{o as default};
