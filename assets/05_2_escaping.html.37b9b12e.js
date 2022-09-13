import{_ as n,e as s}from"./app.4908d213.js";const a={},e=s(`<h1 id="_5-2-\u8F6C\u4E49" tabindex="-1"><a class="header-anchor" href="#_5-2-\u8F6C\u4E49" aria-hidden="true">#</a> 5.2 \u8F6C\u4E49</h1><p>\u8F6C\u4E49\u662F\u4E00\u79CD\u5F15\u7528\u5355\u5B57\u7B26\u7684\u65B9\u6CD5\u3002\u901A\u8FC7\u5728\u7279\u6B8A\u5B57\u7B26\u524D\u52A0\u4E0A\u8F6C\u4E49\u7B26 <code>\\</code> \u6765\u544A\u8BC9shell\u6309\u7167\u5B57\u9762\u610F\u601D\u53BB\u89E3\u91CA\u8FD9\u4E2A\u5B57\u7B26\u3002</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice" loading="lazy"> \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u4E00\u4E9B\u7279\u5B9A\u7684\u547D\u4EE4\u548C\u5DE5\u5177\uFF0C\u6BD4\u5982 <code>echo</code> \u548C <code>sed</code> \u4E2D\uFF0C\u8F6C\u4E49\u5B57\u7B26\u901A\u5E38\u4F1A\u8D77\u5230\u76F8\u53CD\u7684\u6548\u679C\uFF0C\u5373\u53EF\u80FD\u4F1A\u4F7F\u5F97\u90A3\u4E9B\u5B57\u7B26\u4EA7\u751F\u7279\u6B8A\u542B\u4E49\u3002</p></blockquote><p>\u5728 <code>echo</code> \u4E0E <code>sed</code> \u547D\u4EE4\u4E2D\uFF0C\u8F6C\u4E49\u5B57\u7B26\u7684\u7279\u6B8A\u542B\u4E49</p><h3 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> \\n</h3><p>\u6362\u884C\uFF08line feed\uFF09\u3002</p><h3 id="r" tabindex="-1"><a class="header-anchor" href="#r" aria-hidden="true">#</a> \\r</h3><p>\u56DE\u8F66\uFF08carriage return\uFF09\u3002</p><h3 id="t" tabindex="-1"><a class="header-anchor" href="#t" aria-hidden="true">#</a> \\t</h3><p>\u6C34\u5E73\u5236\u8868\u7B26\u3002</p><h3 id="v" tabindex="-1"><a class="header-anchor" href="#v" aria-hidden="true">#</a> \\v</h3><p>\u5782\u76F4\u5236\u8868\u7B26\u3002</p><h3 id="b" tabindex="-1"><a class="header-anchor" href="#b" aria-hidden="true">#</a> \\b</h3><p>\u9000\u683C\u3002</p><h3 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> \\a</h3><p>\u8B66\u62A5\u3001\u54CD\u94C3\u6216\u95EA\u70C1\u3002</p><h3 id="_0xx" tabindex="-1"><a class="header-anchor" href="#_0xx" aria-hidden="true">#</a> \\0xx</h3><p>ASCII\u7801\u7684\u516B\u8FDB\u5236\u5F62\u5F0F\uFF0C\u7B49\u4EF7\u4E8E <code>0nn</code>\uFF0C\u5176\u4E2D <code>nn</code> \u662F\u6570\u5B57\u3002</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/important.gif" alt="important" loading="lazy"> \u5728 <code>$&#39; ... &#39;</code> \u5B57\u7B26\u4E32\u6269\u5C55\u7ED3\u6784\u4E2D\u53EF\u4EE5\u901A\u8FC7\u8F6C\u4E49\u516B\u8FDB\u5236\u6216\u5341\u516D\u8FDB\u5236\u7684ASCII\u7801\u5F62\u5F0F\u7ED9\u53D8\u91CF\u8D4B\u503C\uFF0C\u6BD4\u5982 <code>quote=$&#39;\\042&#39;</code>\u3002</p></blockquote><p>\u6837\u4F8B 5-2. \u8F6C\u4E49\u5B57\u7B26</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># escaped.sh: \u8F6C\u4E49\u5B57\u7B26</span>

<span class="token comment">##############################################</span>
<span class="token comment">### \u9996\u5148\u8BA9\u6211\u4EEC\u5148\u770B\u4E00\u4E0B\u8F6C\u4E49\u5B57\u7B26\u7684\u57FA\u672C\u7528\u6CD5\u3002 ###</span>
<span class="token comment">##############################################</span>

<span class="token comment"># \u8F6C\u4E49\u65B0\u7684\u4E00\u884C\u3002</span>
<span class="token comment"># ------------</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;This will print
as two lines.&quot;</span>
<span class="token comment"># This will print</span>
<span class="token comment"># as two lines.</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;This will print \\
as one line.&quot;</span>
<span class="token comment"># This will print as one line.</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;=============&quot;</span>


<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span>&quot;</span>      <span class="token comment"># \u6309\u5B57\u9762\u610F\u601D\u6253\u5370 \\v\\v\\v\\v</span>
<span class="token comment"># \u4F7F\u7528 echo \u547D\u4EE4\u7684 -e \u9009\u9879\u6765\u6253\u5370\u8F6C\u4E49\u5B57\u7B26\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=============&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;VERTICAL TABS&quot;</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span>&quot;</span>   <span class="token comment"># \u6253\u5370\u56DB\u4E2A\u5782\u76F4\u5236\u8868\u7B26\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;==============&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;QUOTATION MARK&quot;</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\042">\\042</span>&quot;</span>       <span class="token comment"># \u6253\u5370 &quot; \uFF08\u5F15\u53F7\uFF0C\u516B\u8FDB\u5236ASCII\u7801\u4E3A42\uFF09\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;==============&quot;</span>



<span class="token comment"># \u4F7F\u7528 $&#39;\\X&#39; \u8FD9\u6837\u7684\u5F62\u5F0F\u540E\u53EF\u4EE5\u4E0D\u9700\u8981\u52A0 -e \u9009\u9879\u3002</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;NEWLINE and (maybe) BEEP&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">$&#39;<span class="token entity" title="\\n">\\n</span>&#39;</span>           <span class="token comment"># \u65B0\u7684\u4E00\u884C\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">$&#39;<span class="token entity" title="\\a">\\a</span>&#39;</span>           <span class="token comment"># \u8B66\u62A5\uFF08\u54CD\u94C3\uFF09\u3002</span>
                     <span class="token comment"># \u6839\u636E\u4E0D\u540C\u7684\u7EC8\u7AEF\u7248\u672C\uFF0C\u4E5F\u53EF\u80FD\u662F\u95EA\u5C4F\u3002</span>

<span class="token comment"># \u6211\u4EEC\u4E4B\u524D\u4ECB\u7ECD\u4E86 $&#39;\\nnn</span><span class="token string">&#39; \u5B57\u7B26\u4E32\u6269\u5C55\uFF0C\u800C\u73B0\u5728\u6211\u4EEC\u8981\u770B\u5230\u7684\u662F...

# ============================================ #
# \u81EA Bash \u7B2C\u4E8C\u4E2A\u7248\u672C\u5F00\u59CB\u7684 $&#39;</span><span class="token punctuation">\\</span>nnn<span class="token string">&#39; \u5B57\u7B26\u4E32\u6269\u5C55\u7ED3\u6784\u3002
# ============================================ #

echo &quot;Introducing the \\$\\&#39;</span> <span class="token punctuation">..</span>. <span class="token punctuation">\\</span>&#39; string-expansion construct <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token string">&quot;
echo &quot;</span><span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> featuring <span class="token function">more</span> quotation marks.<span class="token string">&quot;

echo $&#39;<span class="token entity" title="\\t">\\t</span> <span class="token entity" title="\\042">\\042</span> <span class="token entity" title="\\t">\\t</span>&#39;   # \u5728\u5236\u8868\u7B26\u4E4B\u95F4\u7684\u5F15\u53F7\u3002
# \u9700\u8981\u6CE8\u610F\u7684\u662F &#39;<span class="token entity" title="\\n">\\n</span>nn&#39; \u662F\u4E00\u4E2A\u516B\u8FDB\u5236\u7684\u503C\u3002

# \u5B57\u7B26\u4E32\u6269\u5C55\u540C\u6837\u9002\u7528\u4E8E\u5341\u516D\u8FDB\u5236\u7684\u503C\uFF0C\u683C\u5F0F\u662F $&#39;\\xhhh&#39;\u3002
echo $&#39;<span class="token entity" title="\\t">\\t</span> <span class="token entity" title="\\x22">\\x22</span> <span class="token entity" title="\\t">\\t</span>&#39;  # \u5728\u5236\u8868\u7B26\u4E4B\u95F4\u7684\u5F15\u53F7\u3002
# \u611F\u8C22 Greg Keraunen \u6307\u51FA\u8FD9\u4E9B\u3002
# \u5728\u65E9\u671F\u7684 Bash \u7248\u672C\u4E2D\u5141\u8BB8\u4F7F\u7528 &#39;<span class="token entity" title="\\x02">\\x02</span>2&#39; \u8FD9\u6837\u7684\u5F62\u5F0F\u3002

echo


# \u5C06 ASCII \u7801\u5B57\u7B26\u8D4B\u503C\u7ED9\u53D8\u91CF\u3002
# -----------------------
quote=$&#39;<span class="token entity" title="\\042">\\042</span>&#39;        # \u5C06 &quot;</span> \u8D4B\u503C\u7ED9\u53D8\u91CF\u3002
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$quote</span> Quoted string <span class="token variable">$quote</span> and this lies outside the quotes.&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># \u8FDE\u63A5\u591A\u4E2A ASCII \u7801\u5B57\u7B26\u7ED9\u53D8\u91CF\u3002</span>
<span class="token assign-left variable">triple_underline</span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\137">\\137</span><span class="token entity" title="\\137">\\137</span><span class="token entity" title="\\137">\\137</span>&#39;</span>  <span class="token comment"># 137\u662F &#39;_</span><span class="token string">&#39; ASCII\u7801\u7684\u516B\u8FDB\u5236\u5F62\u5F0F
echo &quot;$triple_underline UNDERLINE $triple_underline&quot;

echo

ABC=$&#39;</span><span class="token punctuation">\\</span><span class="token number">101</span><span class="token punctuation">\\</span><span class="token number">102</span><span class="token punctuation">\\</span><span class="token number">103</span><span class="token punctuation">\\</span>010<span class="token string">&#39;           # 101\uFF0C102\uFF0C103\u662F A, B, C 
                                  # ASCII\u7801\u7684\u516B\u8FDB\u5236\u5F62\u5F0F\u3002
echo $ABC

echo

escape=$&#39;</span><span class="token punctuation">\\</span>033&#39;                    <span class="token comment"># 033 \u662F ESC \u7684\u516B\u8FDB\u5236\u5F62\u5F0F</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>escape<span class="token entity" title="\\&quot;">\\&quot;</span> echoes an <span class="token variable">$escape</span>&quot;</span>
                                  <span class="token comment"># \u6CA1\u6709\u53EF\u89C1\u8F93\u51FA</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u66F4\u52A0\u590D\u6742\u7684\u4F8B\u5B50\uFF1A</p><p>\u6837\u4F8B 5-3. \u68C0\u6D4B\u952E\u76D8\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u4F5C\u8005\uFF1ASigurd Solaas\uFF0C\u4F5C\u4E8E2011\u5E744\u670820\u65E5</span>
<span class="token comment"># \u6388\u6743\u5728\u300A\u9AD8\u7EA7Bash\u811A\u672C\u7F16\u7A0B\u6307\u5357\u300B\u4E2D\u4F7F\u7528\u3002</span>
<span class="token comment"># \u9700\u8981 Bash \u7248\u672C\u9AD8\u4E8E4.2\u3002</span>

<span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&quot;no value yet&quot;</span>
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token function">clear</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Bash Extra Keys Demo. Keys to try:&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;* Insert, Delete, Home, End, Page_Up and Page_Down&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;* The four arrow keys&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;* Tab, enter, escape, and space key&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;* The letter and number keys, etc.&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;    d = show date/time&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;    q = quit&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;================================&quot;</span>
  <span class="token builtin class-name">echo</span>
  
  <span class="token comment"># \u5C06\u72EC\u7ACB\u7684Home\u952E\u503C\u8F6C\u6362\u4E3A\u6570\u5B577\u4E0A\u7684Home\u952E\u503C\uFF1A</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$key</span>&quot;</span> <span class="token operator">=</span> <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x4f">\\x4f</span><span class="token entity" title="\\x48">\\x48</span>&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x31">\\x31</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span>
   <span class="token comment">#   \u5F15\u7528\u5B57\u7B26\u6269\u5C55\u7ED3\u6784\u3002</span>
  <span class="token keyword">fi</span>
  
  <span class="token comment"># \u5C06\u72EC\u7ACB\u7684End\u952E\u503C\u8F6C\u6362\u4E3A\u6570\u5B571\u4E0A\u7684End\u952E\u503C\uFF1A</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$key</span>&quot;</span> <span class="token operator">=</span> <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x4f">\\x4f</span><span class="token entity" title="\\x46">\\x46</span>&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x34">\\x34</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span>
  <span class="token keyword">fi</span>
  
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$key</span>&quot;</span> <span class="token keyword">in</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x32">\\x32</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u63D2\u5165</span>
    <span class="token builtin class-name">echo</span> Insert Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x33">\\x33</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u5220\u9664</span>
    <span class="token builtin class-name">echo</span> Delete Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x31">\\x31</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6570\u5B577\u4E0A\u7684Home\u952E</span>
    <span class="token builtin class-name">echo</span> Home Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x34">\\x34</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6570\u5B571\u4E0A\u7684End\u952E</span>
    <span class="token builtin class-name">echo</span> End Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x35">\\x35</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u4E0A\u7FFB\u9875</span>
    <span class="token builtin class-name">echo</span> Page_Up
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x36">\\x36</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u4E0B\u7FFB\u9875</span>
    <span class="token builtin class-name">echo</span> Page_Down
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x41">\\x41</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u4E0A\u7BAD\u5934</span>
    <span class="token builtin class-name">echo</span> Up arrow
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x42">\\x42</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u4E0B\u7BAD\u5934</span>
    <span class="token builtin class-name">echo</span> Down arrow
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x43">\\x43</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u53F3\u7BAD\u5934</span>
    <span class="token builtin class-name">echo</span> Right arrow
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x44">\\x44</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u5DE6\u7BAD\u5934</span>
    <span class="token builtin class-name">echo</span> Left arrow
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x09">\\x09</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u5236\u8868\u7B26</span>
    <span class="token builtin class-name">echo</span> Tab Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x0a">\\x0a</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u56DE\u8F66</span>
    <span class="token builtin class-name">echo</span> Enter Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># ESC</span>
    <span class="token builtin class-name">echo</span> Escape Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x20">\\x20</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u7A7A\u683C</span>
    <span class="token builtin class-name">echo</span> Space Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   d<span class="token punctuation">)</span>
    <span class="token function">date</span>
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   q<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> Time to quit<span class="token punctuation">..</span>.
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   *<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> Your pressed: <span class="token punctuation">\\</span>&#39;<span class="token string">&quot;<span class="token variable">$key</span>&quot;</span><span class="token punctuation">\\</span>&#39;
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;================================&quot;</span>
  
  <span class="token builtin class-name">unset</span> K1 K2 K3
  <span class="token builtin class-name">read</span> -s -N1 -p <span class="token string">&quot;Press a key: &quot;</span>
  <span class="token assign-left variable">K1</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$REPLY</span>&quot;</span>
  <span class="token builtin class-name">read</span> -s -N2 -t <span class="token number">0.001</span>
  <span class="token assign-left variable">K2</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$REPLY</span>&quot;</span>
  <span class="token builtin class-name">read</span> -s -N1 -t <span class="token number">0.001</span>
  <span class="token assign-left variable">K3</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$REPLY</span>&quot;</span>
  <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$K1</span><span class="token variable">$K2</span><span class="token variable">$K3</span>&quot;</span>
  
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u67E5\u770B\u6837\u4F8B 37-1\u3002</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> \\&quot;</h3><p>\u8F6C\u4E49\u5F15\u53F7\uFF0C\u6307\u4EE3\u81EA\u8EAB\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello&quot;</span>                     <span class="token comment"># Hello</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Hello<span class="token entity" title="\\&quot;">\\&quot;</span> ... he said.&quot;</span>    <span class="token comment"># &quot;Hello&quot; ... he said.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> \\$</h3><p>\u8F6C\u4E49\u7F8E\u5143\u7B26\u53F7\uFF08\u8DDF\u5728 <code>\\\\$</code> \u540E\u7684\u53D8\u91CF\u540D\u5C06\u4E0D\u4F1A\u88AB\u5F15\u7528\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$variable01</span>&quot;</span>           <span class="token comment"># $variable01</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The book cost \\<span class="token variable">$7</span>.98.&quot;</span>  <span class="token comment"># The book cost $7.98.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> \\\\</h3><p>\u8F6C\u4E49\u53CD\u659C\u6760\uFF0C\u6307\u4EE3\u81EA\u8EAB\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>&quot;</span>  <span class="token comment"># \u7ED3\u679C\u662F \\</span>

<span class="token comment"># \u7136\u800C...</span>

<span class="token builtin class-name">echo</span> &quot;<span class="token punctuation">\\</span>&quot;   <span class="token comment"># \u5728\u547D\u4EE4\u884C\u4E2D\u4F1A\u51FA\u73B0\u7B2C\u4E8C\u884C\u5E76\u63D0\u793A\u8F93\u5165\u3002</span>
           <span class="token comment"># \u5728\u811A\u672C\u4E2D\u4F1A\u51FA\u9519\u3002</span>
           
<span class="token comment"># \u4F46\u662F...</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;\\&#39;</span>   <span class="token comment"># \u7ED3\u679C\u662F \\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra" loading="lazy"> \u6839\u636E\u8F6C\u4E49\u7B26\u6240\u5728\u7684\u4E0A\u4E0B\u6587\uFF08\u5F3A\u5F15\u7528\u3001\u5F31\u5F15\u7528\uFF0C\u547D\u4EE4\u66FF\u6362\u6216\u8005\u5728 here document\uFF09\u7684\u4E0D\u540C\uFF0C\u5B83\u7684\u884C\u4E3A\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>                      <span class="token comment">#  \u7B80\u5355\u8F6C\u4E49\u4E0E\u5F15\u7528</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>z               <span class="token comment">#  z</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>z              <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\\z&#39;</span>             <span class="token comment"># \\z</span>
ehco <span class="token string">&#39;\\\\z&#39;</span>            <span class="token comment"># \\\\z</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\z&quot;</span>             <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>z&quot;</span>            <span class="token comment"># \\z</span>
<span class="token operator">&gt;</span>
                      <span class="token comment">#  \u547D\u4EE4\u66FF\u6362</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>        <span class="token comment">#  z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>       <span class="token comment">#  z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>      <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>     <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>   <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>  <span class="token comment"># \\\\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;\\z&quot;</span><span class="token variable">\`</span></span>      <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>z&quot;</span><span class="token variable">\`</span></span>     <span class="token comment"># \\z</span>
<span class="token operator">&gt;</span>
                      <span class="token comment"># Here Document</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
\\z
EOF</span>                   <span class="token comment"># \\z</span>
<span class="token operator">&gt;</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
<span class="token entity" title="\\\\">\\\\</span>z
EOF</span>                   <span class="token comment"># \\z</span>
<span class="token operator">&gt;</span>
<span class="token comment"># \u4EE5\u4E0A\u4F8B\u5B50\u7531 St\xE9phane Chazelas \u63D0\u4F9B\u3002 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><blockquote><p>\u542B\u6709\u8F6C\u4E49\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\u53EF\u4EE5\u8D4B\u503C\u7ED9\u53D8\u91CF\uFF0C\u4F46\u662F\u4EC5\u4EC5\u5C06\u5355\u4E00\u7684\u8F6C\u4E49\u7B26\u8D4B\u503C\u7ED9\u53D8\u91CF\u662F\u4E0D\u53EF\u884C\u7684\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>
<span class="token comment"># \u8FD9\u6837\u505A\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</span>
<span class="token comment"># tesh.sh: : command not found</span>
<span class="token comment"># \u5355\u72EC\u7684\u8F6C\u4E49\u7B26\u4E0D\u80FD\u591F\u8D4B\u503C\u7ED9\u53D8\u91CF\u3002</span>
<span class="token comment"># </span>
<span class="token comment">#  \u4E8B\u5B9E\u4E0A\uFF0C&quot;\\&quot; \u8F6C\u4E49\u4E86\u6362\u884C\uFF0C\u5B9E\u9645\u6548\u679C\u662F\uFF1A</span>
<span class="token comment">#+ variable=echo &quot;$variable&quot;</span>
<span class="token comment">#+ \u8FD9\u662F\u4E00\u4E2A\u975E\u6CD5\u7684\u8D4B\u503C\u65B9\u5F0F\u3002</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span>
23skidoo
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>        <span class="token comment"># 23skidoo</span>
                        <span class="token comment"># \u56E0\u4E3A\u7B2C\u4E8C\u884C\u662F\u4E00\u4E2A\u5408\u6CD5\u7684\u8D4B\u503C\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u62A5\u9519\u3002</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span> 
<span class="token comment">#        \\^    \u8F6C\u4E49\u7B26\u540E\u6709\u4E00\u4E2A\u7A7A\u683C</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>        <span class="token comment"># \u7A7A\u683C</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>        <span class="token comment"># \\</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>
<span class="token comment"># \u8FD9\u6837\u505A\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</span>
<span class="token comment"># tesh.sh: \\: command not found</span>
<span class="token comment">#</span>
<span class="token comment">#  \u7B2C\u4E00\u4E2A\u8F6C\u4E49\u7B26\u8F6C\u8F6C\u4E49\u4E86\u7B2C\u4E8C\u4E2A\uFF0C\u4F46\u662F\u7B2C\u4E09\u4E2A\u8F6C\u4E49\u7B26\u4ECD\u65E7\u8F6C\u4E49\u7684\u662F\u6362\u884C\uFF0C</span>
<span class="token comment">#+ \u8DDF\u5F00\u59CB\u7684\u90A3\u4E2A\u4F8B\u5B50\u4E00\u6837\uFF0C\u56E0\u6B64\u4F1A\u62A5\u9519\u3002</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>        <span class="token comment"># \\\\</span>
                        <span class="token comment"># \u7B2C\u4E8C\u4E2A\u548C\u7B2C\u56DB\u4E2A\u8F6C\u4E49\u7B26\u88AB\u8F6C\u4E49\u4E86\uFF0C\u56E0\u6B64\u53EF\u884C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u8F6C\u4E49\u7A7A\u683C\u80FD\u591F\u907F\u514D\u5728\u547D\u4EE4\u53C2\u6570\u5217\u8868\u4E2D\u7684\u5B57\u7B26\u5206\u5272\u95EE\u9898\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">file_list</span><span class="token operator">=</span><span class="token string">&quot;/bin/cat /bin/gzip /bin/more /usr/bin/less /usr/bin/emacs-20.7&quot;</span>
<span class="token comment"># \u5C06\u4E00\u7CFB\u5217\u6587\u4EF6\u4F5C\u4E3A\u547D\u4EE4\u7684\u53C2\u6570\u3002</span>

<span class="token comment"># \u589E\u52A0\u4E24\u4E2A\u6587\u4EF6\u5230\u5217\u8868\u4E2D\uFF0C\u5E76\u4E14\u5217\u51FA\u6574\u4E2A\u8868\u3002</span>
<span class="token function">ls</span> -l /usr/X11R6/bin/xsetroot /sbin/dump <span class="token variable">$file_list</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;-------------------------------------------------------------------------&quot;</span>

<span class="token comment"># \u5982\u679C\u6211\u4EEC\u8F6C\u4E49\u4E86\u8FD9\u4E9B\u7A7A\u683C\u4F1A\u600E\u6837\uFF1F</span>
<span class="token function">ls</span> -l /usr/X11R6/bin/xsetroot<span class="token punctuation">\\</span> /sbin/dump<span class="token punctuation">\\</span> <span class="token variable">$file_list</span>
<span class="token comment"># \u9519\u8BEF\uFF1A\u56E0\u4E3A\u8F6C\u4E49\u4E86\u4E24\u4E2A\u7A7A\u683C\uFF0C\u56E0\u6B64\u524D\u4E09\u4E2A\u6587\u4EF6\u88AB\u8FDE\u63A5\u6210\u4E86\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9\u4E86 &#39;ls -l&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8F6C\u4E49\u7B26\u4E5F\u63D0\u4F9B\u4E00\u79CD\u53EF\u4EE5\u64B0\u5199\u591A\u884C\u547D\u4EE4\u7684\u65B9\u5F0F\u3002\u901A\u5E38\uFF0C\u6BCF\u4E00\u884C\u662F\u4E00\u4E2A\u547D\u4EE4\uFF0C\u4F46\u662F\u8F6C\u4E49\u6362\u884C\u540E\u547D\u4EE4\u5C31\u53EF\u4EE5\u5728\u4E0B\u4E00\u884C\u7EE7\u7EED\u64B0\u5199\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>cd /source/directory <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> cf - <span class="token builtin class-name">.</span> <span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">\\</span>
<span class="token punctuation">(</span>cd /dest/directory <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xpvf -<span class="token punctuation">)</span>
<span class="token comment"># \u56DE\u987E Alan Cox \u7684\u76EE\u5F55\u6811\u62F7\u8D1D\u547D\u4EE4\uFF0C\u4F46\u662F\u628A\u5B83\u62C6\u6210\u4E86\u4E24\u884C\u3002</span>

<span class="token comment"># \u6216\u8005\u4F60\u4E5F\u53EF\u4EE5\uFF1A</span>
<span class="token function">tar</span> cf - -C /source/directory <span class="token builtin class-name">.</span> <span class="token operator">|</span>
<span class="token function">tar</span> xpvf - -C /dest/directory
<span class="token comment"># \u53EF\u4EE5\u770B\u4E0B\u65B9\u7684\u6CE8\u91CA\u3002</span>
<span class="token comment"># \uFF08\u611F\u8C22 St\xE9phane Chazelas\u3002\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra" loading="lazy"> \u5728\u811A\u672C\u4E2D\uFF0C\u5982\u679C\u4EE5 &quot;|&quot; \u7BA1\u9053\u4F5C\u4E3A\u4E00\u884C\u7684\u7ED3\u675F\u5B57\u7B26\uFF0C\u90A3\u4E48\u4E0D\u9700\u8981\u52A0\u8F6C\u4E49\u7B26 \\ \u4E5F\u53EF\u4EE5\u5199\u591A\u884C\u547D\u4EE4\u3002\u4F46\u662F\u4E00\u4E2A\u597D\u7684\u7F16\u7A0B\u4E60\u60EF\u5C31\u662F\u5728\u5199\u591A\u884C\u547D\u4EE4\u7684\u4E8B\u540E\uFF0C\u65E0\u8BBA\u4EC0\u4E48\u60C5\u51B5\u90FD\u8981\u5728\u884C\u5C3E\u52A0\u4E0A\u8F6C\u4E49\u7B26 \\\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;foo
bar&quot;</span>
<span class="token comment">#foo</span>
<span class="token comment">#bar</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;foo
bar&#39;</span>    <span class="token comment"># \u6CA1\u6709\u533A\u522B\u3002</span>
<span class="token comment">#foo</span>
<span class="token comment">#bar</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> foo<span class="token punctuation">\\</span>
bar     <span class="token comment"># \u8F6C\u4E49\u6362\u884C\u3002</span>
<span class="token comment">#foobar</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;foo\\
bar&quot;</span>     <span class="token comment"># \u6CA1\u6709\u533A\u522B\uFF0C\u5728\u5F31\u5F15\u7528\u4E2D\uFF0C\\ \u8F6C\u4E49\u7B26\u4ECD\u65E7\u8F6C\u4E49\u4E86\u6362\u884C\u3002</span>
<span class="token comment">#foobar</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;foo\\
bar&#39;</span>     <span class="token comment"># \u5728\u5F3A\u5F15\u7528\u4E2D\uFF0C\\ \u5C31\u6309\u7167\u5B57\u9762\u610F\u601D\u6765\u89E3\u91CA\u4E86\u3002</span>
<span class="token comment">#foo\\</span>
<span class="token comment">#bar</span>

<span class="token comment"># \u7531 St\xE9phane Chazelas \u63D0\u4F9B\u7684\u4F8B\u5B50\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,44);function p(t,l){return e}var o=n(a,[["render",p],["__file","05_2_escaping.html.vue"]]);export{o as default};
