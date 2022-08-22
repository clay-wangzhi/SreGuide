import{_ as n,e as s}from"./app.200bae49.js";const a={},e=s(`<h1 id="_4-1-\u53D8\u91CF\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#_4-1-\u53D8\u91CF\u66FF\u6362" aria-hidden="true">#</a> 4.1 \u53D8\u91CF\u66FF\u6362</h1><p>\u53D8\u91CF\u540D\u662F\u5176\u6240\u6307\u5411\u503C\u7684\u4E00\u4E2A\u5360\u4F4D\u7B26\uFF08placeholder\uFF09\u3002\u5F15\u7528\u53D8\u91CF\u503C\u7684\u8FC7\u7A0B\u6211\u4EEC\u79F0\u4E4B\u4E3A\u53D8\u91CF\u66FF\u6362\uFF08variable substitution\uFF09\u3002</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $</h3><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u4ED4\u7EC6\u533A\u5206\u4E00\u4E0B<strong>\u53D8\u91CF\u540D</strong>\u4E0E<strong>\u53D8\u91CF\u503C</strong>\u3002\u5982\u679C\u53D8\u91CF\u540D\u662F <code>variable1</code>\uFF0C \u90A3\u4E48 <code>$variable1</code> \u5C31\u662F\u5BF9\u53D8\u91CF\u503C\u7684\u5F15\u7528\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash$ variable1=23


bash$ echo variable1
variable1

bash$ echo $variable1
23
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u53D8\u91CF\u4EC5\u4EC5\u5728\u58F0\u660E\u65F6\u3001\u8D4B\u503C\u65F6\u3001\u88AB\u5220\u9664\u65F6\uFF08<code>unset</code>\uFF09\u3001\u88AB\u5BFC\u51FA\u65F6\uFF08<code>export</code>\uFF09\uFF0C\u7B97\u672F\u8FD0\u7B97\u4E2D\u4F7F\u7528\u53CC\u62EC\u53F7\u7ED3\u6784((...))\u65F6\u6216\u5728\u4EE3\u8868\u4FE1\u53F7\u65F6\uFF08signal\uFF0C\u67E5\u770B\u6837\u4F8B 32-5\uFF09\u624D\u4E0D\u9700\u8981\u6709 $ \u524D\u7F00\u3002\u8D4B\u503C\u53EF\u4EE5\u662F\u4F7F\u7528 =\uFF08\u6BD4\u5982 <code>var1=27</code>\uFF09\uFF0C\u53EF\u4EE5\u662F\u5728 <code>read</code> \u8BED\u53E5\u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5728\u5FAA\u73AF\u7684\u5934\u90E8\uFF08<code>for var2 in 1 2 3</code>\uFF09\u3002</p><p>\u5728\u53CC\u5F15\u53F7<code>&quot;&quot;</code>\u5B57\u7B26\u4E32\u4E2D\u53EF\u4EE5\u4F7F\u7528\u53D8\u91CF\u66FF\u6362\u3002\u6211\u4EEC\u79F0\u4E4B\u4E3A\u90E8\u5206\u5F15\u7528\uFF0C\u6709\u65F6\u5019\u4E5F\u79F0\u5F31\u5F15\u7528\u3002\u800C\u4F7F\u7528\u5355\u5F15\u53F7<code>&#39;&#39;</code>\u5F15\u7528\u65F6\uFF0C\u53D8\u91CF\u53EA\u4F1A\u4F5C\u4E3A\u5B57\u7B26\u4E32\u663E\u793A\uFF0C\u53D8\u91CF\u66FF\u6362\u4E0D\u4F1A\u53D1\u751F\u3002\u6211\u4EEC\u79F0\u4E4B\u4E3A\u5168\u5F15\u7528\uFF0C\u6709\u65F6\u4E5F\u79F0\u5F3A\u5F15\u7528\u3002\u66F4\u591A\u7EC6\u8282\u5C06\u5728\u7B2C\u4E94\u7AE0\u8BB2\u89E3\u3002</p><p>\u5B9E\u9645\u4E0A, <code>$variable</code> \u8FD9\u79CD\u5199\u6CD5\u662F <code>\${variable}</code> \u7684\u7B80\u5316\u5F62\u5F0F\u3002\u5728\u67D0\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528 <code>$variable</code> \u5199\u6CD5\u4F1A\u9020\u6210\u8BED\u6CD5\u9519\u8BEF\uFF0C\u4F7F\u7528\u5B8C\u6574\u5F62\u5F0F\u4F1A\u66F4\u597D\uFF08\u67E5\u770B\u7AE0\u8282 10.2\uFF09\u3002</p><p>\u6837\u4F8B 4-1. \u53D8\u91CF\u8D4B\u503C\u4E0E\u66FF\u6362</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># ex9.sh</span>

<span class="token comment"># \u53D8\u91CF\u8D4B\u503C\u4E0E\u66FF\u6362</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">375</span>
<span class="token assign-left variable">hello</span><span class="token operator">=</span><span class="token variable">$a</span>
<span class="token comment">#   ^ ^</span>

<span class="token comment">#----------------------------------------------------</span>
<span class="token comment"># \u521D\u59CB\u5316\u53D8\u91CF\u65F6\uFF0C\u8D4B\u503C\u53F7 = \u7684\u4E24\u4FA7\u7EDD\u4E0D\u5141\u8BB8\u6709\u7A7A\u683C\u51FA\u73B0\u3002</span>
<span class="token comment"># \u5982\u679C\u6709\u7A7A\u683C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</span>

<span class="token comment">#   &quot;VARIABLE =value&quot;</span>
<span class="token comment">#            ^</span>
<span class="token comment">#% \u811A\u672C\u5C06\u4F1A\u5C1D\u8BD5\u8FD0\u884C\u5E26\u53C2\u6570 &quot;=value&quot; \u7684 &quot;VARIABLE &quot; \u547D\u4EE4\u3002</span>

<span class="token comment">#   &quot;VARIABLE= value&quot;</span>
<span class="token comment">#             ^</span>
<span class="token comment">#% \u811A\u672C\u5C06\u4F1A\u5C1D\u8BD5\u8FD0\u884C &quot;value&quot; \u547D\u4EE4\uFF0C</span>
<span class="token comment">#+ \u540C\u65F6\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF &quot;VARIABLE&quot; \u4E3A &quot;&quot;\u3002</span>
<span class="token comment">#----------------------------------------------------</span>


<span class="token builtin class-name">echo</span> hello    <span class="token comment"># hello</span>
<span class="token comment"># \u6CA1\u6709\u5F15\u7528\u53D8\u91CF\uFF0C&quot;hello&quot; \u53EA\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32...</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$hello</span>   <span class="token comment"># 375</span>
<span class="token comment">#    ^          \u8FD9\u662F\u53D8\u91CF\u5F15\u7528\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${hello}</span> <span class="token comment"># 375</span>
<span class="token comment">#               \u4E0E\u4E0A\u9762\u7684\u7C7B\u4F3C\uFF0C\u53D8\u91CF\u5F15\u7528\u3002</span>

<span class="token comment"># \u5B57\u7B26\u4E32\u5185\u5F15\u7528\u53D8\u91CF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$hello</span>&quot;</span>    <span class="token comment"># 375</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${hello}</span>&quot;</span>  <span class="token comment"># 375</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">hello</span><span class="token operator">=</span><span class="token string">&quot;A B  C   D&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$hello</span>   <span class="token comment"># A B C D</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$hello</span>&quot;</span> <span class="token comment"># A B  C   D</span>
<span class="token comment"># \u6B63\u5982\u6211\u4EEC\u6240\u89C1\uFF0Cecho $hello \u4E0E echo &quot;$hello&quot; \u7684\u7ED3\u679C\u4E0D\u540C\u3002</span>
<span class="token comment"># ====================================</span>
<span class="token comment"># \u5B57\u7B26\u4E32\u5185\u5F15\u7528\u53D8\u91CF\u5C06\u4F1A\u4FDD\u7559\u53D8\u91CF\u7684\u7A7A\u767D\u7B26\u3002</span>
<span class="token comment"># ====================================</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;$hello&#39;</span>  <span class="token comment"># $hello</span>
<span class="token comment">#    ^      ^</span>
<span class="token comment">#  \u5355\u5F15\u53F7\u4F1A\u7981\u7528\u6389\uFF08\u8F6C\u4E49\uFF09\u53D8\u91CF\u5F15\u7528\uFF0C\u8FD9\u5BFC\u81F4 &quot;$&quot; \u5C06\u4EE5\u666E\u901A\u5B57\u7B26\u5F62\u5F0F\u88AB\u89E3\u6790\u3002</span>

<span class="token comment"># \u6CE8\u610F\u5355\u53CC\u5F15\u53F7\u5B57\u7B26\u4E32\u5F15\u7528\u6548\u679C\u7684\u4E0D\u540C\u3002</span>

<span class="token assign-left variable">hello</span><span class="token operator">=</span>    <span class="token comment"># \u5C06\u5176\u8BBE\u7F6E\u4E3A\u7A7A\u503C</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$hello</span> (null value) = <span class="token variable">$hello</span>&quot;</span>      <span class="token comment"># $hello (null value) =</span>
<span class="token comment"># \u6CE8\u610F </span>
<span class="token comment"># \u5C06\u4E00\u4E2A\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u7A7A\u4E0E\u5220\u9664(unset)\u5B83\u4E0D\u540C\uFF0C\u5C3D\u7BA1\u5B83\u4EEC\u7684\u8868\u73B0\u5F62\u5F0F\u76F8\u540C\u3002</span>

<span class="token comment"># -----------------------------------------------</span>

<span class="token comment"># \u4F7F\u7528\u7A7A\u767D\u7B26\u5206\u9694\uFF0C\u53EF\u4EE5\u5728\u4E00\u884C\u5185\u5BF9\u591A\u4E2A\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C\u3002</span>
<span class="token comment"># \u4F46\u662F\u8FD9\u4F1A\u964D\u4F4E\u7A0B\u5E8F\u7684\u53EF\u8BFB\u6027\uFF0C\u5E76\u4E14\u53EF\u80FD\u4F1A\u5BFC\u81F4\u90E8\u5206\u7A0B\u5E8F\u4E0D\u517C\u5BB9\u7684\u95EE\u9898\u3002</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">21</span>  <span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">22</span>  <span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token variable">$V3</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;var1=<span class="token variable">$var1</span>   var2=<span class="token variable">$var2</span>   var3=<span class="token variable">$var3</span>&quot;</span>

<span class="token comment"># \u5728\u4E00\u4E9B\u8001\u7248\u672C\u7684 shell \u4E2D\u8FD9\u6837\u5199\u53EF\u80FD\u4F1A\u6709\u95EE\u9898\u3002</span>

<span class="token comment"># -----------------------------------------------</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">numbers</span><span class="token operator">=</span><span class="token string">&quot;one two three&quot;</span>
<span class="token comment">#           ^   ^</span>
<span class="token assign-left variable">other_numbers</span><span class="token operator">=</span><span class="token string">&quot;1 2 3&quot;</span>
<span class="token comment">#               ^ ^</span>
<span class="token comment"># \u5982\u679C\u53D8\u91CF\u4E2D\u6709\u7A7A\u767D\u7B26\u53F7\uFF0C\u90A3\u4E48\u5FC5\u987B\u7528\u5F15\u53F7\u8FDB\u884C\u5F15\u7528\u3002</span>
<span class="token comment"># other_numbers=1 2 3                  # \u51FA\u9519</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;numbers = <span class="token variable">$numbers</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;other_numbers = <span class="token variable">$other_numbers</span>&quot;</span>  <span class="token comment"># other_numbers = 1 2 3</span>
<span class="token comment"># \u4E5F\u53EF\u4EE5\u8F6C\u4E49\u7A7A\u767D\u7B26\u3002</span>
<span class="token assign-left variable">mixed_bag</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">\\</span> ---<span class="token punctuation">\\</span> Whatever
<span class="token comment">#           ^    ^ \u4F7F\u7528 \\ \u8F6C\u4E49\u7A7A\u683C</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$mixed_bag</span>&quot;</span>         <span class="token comment"># 2 --- Whatever</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;uninitialized_variable = <span class="token variable">$uninitialized_variable</span>&quot;</span>
<span class="token comment"># \u672A\u521D\u59CB\u5316\u7684\u53D8\u91CF\u662F\u7A7A\u503C(null\u8868\u793A\u4E0D\u542B\u6709\u4EFB\u4F55\u503C)\u3002</span>
<span class="token assign-left variable">uninitialized_variable</span><span class="token operator">=</span>   <span class="token comment"># \u53EA\u58F0\u660E\u800C\u4E0D\u521D\u59CB\u5316\uFF0C\u7B49\u540C\u4E8E\u8BBE\u4E3A\u7A7A\u503C\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;uninitialized_variable = <span class="token variable">$uninitialized_variable</span>&quot;</span> <span class="token comment"># \u4ECD\u65E7\u4E3A\u7A7A</span>

<span class="token assign-left variable">uninitialized_variable</span><span class="token operator">=</span><span class="token number">23</span>       <span class="token comment"># \u8BBE\u7F6E\u53D8\u91CF</span>
<span class="token builtin class-name">unset</span> uninitialized_variable    <span class="token comment"># \u5220\u9664\u53D8\u91CF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;uninitialized_variable = <span class="token variable">$uninitialized_variable</span>&quot;</span>
                                <span class="token comment"># uninitialized_variable =</span>
                                <span class="token comment"># \u53D8\u91CF\u503C\u4E3A\u7A7A</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice" loading="lazy"> \u4E00\u4E2A\u672A\u88AB\u8D4B\u503C\u6216\u672A\u521D\u59CB\u5316\u7684\u53D8\u91CF\u62E5\u6709\u7A7A\u503C\uFF08null value\uFF09\u3002<em>\u6CE8\u610F\uFF1Anull\u503C\u4E0D\u7B49\u540C\u4E8E0</em>\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$unassigned</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$unassigned</span> is NULL.&quot;</span>
<span class="token keyword">fi</span>     <span class="token comment"># $unassigned is NULL.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u5728\u8D4B\u503C\u524D\u4F7F\u7528\u53D8\u91CF\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9519\u8BEF\u3002\u4F46\u5728\u7B97\u672F\u8FD0\u7B97\u4E2D\u4F7F\u7528\u672A\u8D4B\u503C\u53D8\u91CF\u662F\u53EF\u884C\u7684\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$uninitialized</span>&quot;</span>            <span class="token comment"># \u7A7A\u884C</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;uninitialized += 5&quot;</span>         <span class="token comment"># \u52A05</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$uninitialized</span>&quot;</span>            <span class="token comment"># 5</span>
<span class="token comment"># \u7ED3\u8BBA\uFF1A</span>
<span class="token comment"># \u4E00\u4E2A\u672A\u521D\u59CB\u5316\u7684\u53D8\u91CF\u4E0D\u542B\u503C(null)\uFF0C\u4F46\u5728\u7B97\u672F\u8FD0\u7B97\u4E2D\u4F1A\u88AB\u4F5C\u4E3A0\u5904\u7406\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>\u4E5F\u53EF\u53C2\u8003\u6837\u4F8B 15-23\u3002</p></blockquote><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>\u5B9E\u9645\u4E0A\uFF0C\u53D8\u91CF\u540D\u662F\u88AB\u79F0\u4F5C\u5DE6\u503C\uFF08lvalue\uFF09\uFF0C\u610F\u601D\u662F\u51FA\u73B0\u5728\u8D4B\u503C\u8868\u8FBE\u5F0F\u7684\u5DE6\u4FA7\u7684\u503C\uFF0C\u6BD4\u5982 <code>VARIABLE=23</code>\u3002\u53D8\u91CF\u503C\u88AB\u79F0\u4F5C\u53F3\u503C\uFF08rvalue\uFF09\uFF0C\u610F\u601D\u662F\u51FA\u73B0\u5728\u8D4B\u503C\u8868\u8FBE\u5F0F\u53F3\u4FA7\u7684\u503C\uFF0C\u6BD4\u5982 <code>VAR2=$VARIABLE</code>\u3002<br>\u4E8B\u5B9E\u4E0A\uFF0C\u53D8\u91CF\u540D\u53EA\u662F\u4E00\u4E2A\u5F15\u7528\uFF0C\u4E00\u679A\u6307\u9488\uFF0C\u6307\u5411\u5B9E\u9645\u5B58\u50A8\u6570\u636E\u5185\u5B58\u5730\u5740\u7684\u6307\u9488\u3002 <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,17);function l(p,c){return e}var t=n(a,[["render",l],["__file","04_1_variable_substitution.html.vue"]]);export{t as default};
