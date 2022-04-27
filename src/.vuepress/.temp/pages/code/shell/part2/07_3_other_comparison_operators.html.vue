<template><h1 id="_7-3-其他比较操作" tabindex="-1"><a class="header-anchor" href="#_7-3-其他比较操作" aria-hidden="true">#</a> 7.3 其他比较操作</h1>
<p>二元比较操作比较变量或者数量。注意整数和字符串比较使用的是两套运算符。</p>
<h2 id="整数比较" tabindex="-1"><a class="header-anchor" href="#整数比较" aria-hidden="true">#</a> 整数比较</h2>
<h3 id="eq" tabindex="-1"><a class="header-anchor" href="#eq" aria-hidden="true">#</a> -eq</h3>
<p>等于</p>
<p><code>if [ &quot;$a&quot; -eq &quot;$b&quot; ]</code></p>
<h3 id="ne" tabindex="-1"><a class="header-anchor" href="#ne" aria-hidden="true">#</a> -ne</h3>
<p>不等于</p>
<p><code>if [ &quot;$a&quot; -ne &quot;$b&quot; ]</code></p>
<h3 id="gt" tabindex="-1"><a class="header-anchor" href="#gt" aria-hidden="true">#</a> -gt</h3>
<p>大于</p>
<p><code>if [ &quot;$a&quot; -gt &quot;$b&quot; ]</code></p>
<h3 id="ge" tabindex="-1"><a class="header-anchor" href="#ge" aria-hidden="true">#</a> -ge</h3>
<p>大于等于</p>
<p><code>if [ &quot;$a&quot; -ge &quot;$b&quot; ]</code></p>
<h3 id="lt" tabindex="-1"><a class="header-anchor" href="#lt" aria-hidden="true">#</a> -lt</h3>
<p>小于</p>
<p><code>if [ &quot;$a&quot; -lt &quot;$b&quot; ]</code></p>
<h3 id="le" tabindex="-1"><a class="header-anchor" href="#le" aria-hidden="true">#</a> -le</h3>
<p>小于等于</p>
<p><code>if [ &quot;$a&quot; -le &quot;$b&quot; ]</code></p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> &lt;</h3>
<p>小于（使用 <a href="http://tldp.org/LDP/abs/html/dblparens.html" target="_blank" rel="noopener noreferrer">双圆括号<ExternalLinkIcon/></a>）</p>
<p><code>((&quot;$a&quot; &lt; &quot;$b&quot;))</code></p>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> &lt;=</h3>
<p>小于等于（使用双圆括号）</p>
<p><code>((&quot;$a&quot; &lt;= &quot;$b&quot;))</code></p>
<h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> &gt;</h3>
<p>大于（使用双圆括号）</p>
<p><code>((&quot;$a&quot; &gt; &quot;$b&quot;))</code></p>
<h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> &gt;=</h3>
<p>大于等于（使用双圆括号）</p>
<p><code>((&quot;$a&quot; &gt;= &quot;$b&quot;))</code></p>
<h2 id="字符串比较" tabindex="-1"><a class="header-anchor" href="#字符串比较" aria-hidden="true">#</a> 字符串比较</h2>
<h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> =</h3>
<p>等于</p>
<p><code>if [ &quot;$a&quot; = &quot;$b&quot; ]</code></p>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> 注意在<code>=</code>前后要加上<a href="http://tldp.org/LDP/abs/images/caution.gif" target="_blank" rel="noopener noreferrer">空格<ExternalLinkIcon/></a></p>
<p><code>if [ &quot;$a&quot;=&quot;$b&quot; ]</code> 和上面不等价。</p>
<h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-hidden="true">#</a> ==</h3>
<p>等于</p>
<p><code>if [ &quot;$a&quot; == &quot;$b&quot; ]</code></p>
<p>和 <code>=</code> 同义</p>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> <code>==</code> 运算符在 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS" target="_blank" rel="noopener noreferrer">双方括号<ExternalLinkIcon/></a> 和单方括号里表现不同。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> z* <span class="token punctuation">]</span><span class="token punctuation">]</span>   <span class="token comment"># $a 以 "z" 开头时为真（模式匹配）</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token string">"z*"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment"># $a 等于 z* 时为真（字符匹配）</span>

<span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> z* <span class="token punctuation">]</span>     <span class="token comment"># 发生文件匹配和字符分割。</span>
<span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> <span class="token operator">==</span> <span class="token string">"z*"</span> <span class="token punctuation">]</span> <span class="token comment"># $a 等于 z* 时为真（字符匹配）</span>

<span class="token comment"># 感谢 Stéphane Chazelas</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> !=</h3>
<p>不等于</p>
<p><code>if [ &quot;$a&quot; != &quot;$b&quot; ]</code></p>
<p>在 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS" target="_blank" rel="noopener noreferrer"><code>[[ ... ]]</code><ExternalLinkIcon/></a> 结构中会进行模式匹配。</p>
<h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7" aria-hidden="true">#</a> &lt;</h3>
<p>小于，按照 <a href="http://tldp.org/LDP/abs/html/special-chars.html#ASCIIDEF" target="_blank" rel="noopener noreferrer">ASCII码<ExternalLinkIcon/></a> 排序。</p>
<p><code>if [[ &quot;$a&quot; &lt; &quot;$b&quot; ]]</code></p>
<p><code>if [ &quot;$a&quot; \&lt; &quot;$b&quot; ]</code></p>
<p>注意在 <code>[]</code> 结构里 <code>&lt;</code> 需要被 <a href="http://tldp.org/LDP/abs/html/escapingsection.html#ESCP" target="_blank" rel="noopener noreferrer">转义<ExternalLinkIcon/></a>。</p>
<h3 id="-8" tabindex="-1"><a class="header-anchor" href="#-8" aria-hidden="true">#</a> &gt;</h3>
<p>大于，按照 ASCII 码排序。</p>
<p><code>if [[ &quot;$a&quot; &gt; &quot;$b&quot; ]]</code></p>
<p><code>if [ &quot;$a&quot; \&gt; &quot;$b&quot; ]</code></p>
<p>注意在 <code>[]</code> 结构里 <code>&gt;</code> 需要被转义。</p>
<p><a href="http://tldp.org/LDP/abs/html/arrays.html#BUBBLE" target="_blank" rel="noopener noreferrer">样例 27-11<ExternalLinkIcon/></a> 包含了比较运算符。</p>
<h3 id="z" tabindex="-1"><a class="header-anchor" href="#z" aria-hidden="true">#</a> -z</h3>
<p>字符串为空，即字符串长度为0。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">String</span><span class="token operator">=</span><span class="token string">''</span>   <span class="token comment"># 长度为0的字符串变量。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$String</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"\<span class="token variable">$String</span> is null."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"\<span class="token variable">$String</span> is NOT null."</span>
<span class="token keyword">fi</span>     <span class="token comment"># $String is null.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> -n</h3>
<p>字符串非空（<code>null</code>）。</p>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> 使用 <code>-n</code> 时字符串必须是在括号中且被引用的。使用 <code>! -z</code> 判断未引用的字符串或者直接判断（<a href="http://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST" target="_blank" rel="noopener noreferrer">样例 7-6<ExternalLinkIcon/></a>）通常可行，但是非常危险。判断字符串时一定要引用<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>。</p>
<p>样例 7-5. 算术比较和字符串比较</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">5</span>

<span class="token comment"># 这里的 "a" 和 "b" 可以是整数也可以是字符串。</span>
<span class="token comment"># 因为 Bash 的变量是弱类型的，因此字符串和整数比较有很多相同之处。</span>

<span class="token comment"># 在 Bash 中可以用处理整数的方式来处理全是数字的字符串。</span>
<span class="token comment"># 但是谨慎使用。</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> -ne <span class="token string">"<span class="token variable">$b</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$a</span> is not equal to <span class="token variable">$b</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"(arithmetic comparison)"</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> <span class="token operator">!=</span> <span class="token string">"<span class="token variable">$b</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$a</span> is not equal to <span class="token variable">$b</span>."</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"(string comparison)"</span>
  <span class="token comment">#     "4"  != "5"</span>
  <span class="token comment"># ASCII 52 != ASCIII 53</span>
<span class="token keyword">fi</span>

<span class="token comment"># 在这个例子里 "-ne" 和 "!=" 都可以。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>样例 7-6. 测试字符串是否为空（<code>null</code>）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># str-test.sh: 测试是否为空字符串或是未引用的字符串。</span>

<span class="token comment"># 使用 if [ ... ] 结构</span>

<span class="token comment"># 如果字符串未被初始化，则其值是未定义的。</span>
<span class="token comment"># 这种状态就是空 "null"（并不是 0）。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token variable">$string1</span> <span class="token punctuation">]</span>    <span class="token comment"># 并未声明或是初始化 string1。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is not null."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is null."</span>
<span class="token keyword">fi</span>
<span class="token comment"># 尽管没有初始化 string1，但是结果显示其非空。</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 再试一次。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">$string1</span>"</span> <span class="token punctuation">]</span>   <span class="token comment"># 这次引用了 $string1。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is not null."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is null."</span>
<span class="token keyword">fi</span>                    <span class="token comment"># 在测试括号内引用字符串得到了正确的结果。</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$string1</span> <span class="token punctuation">]</span>       <span class="token comment"># 这次只有一个 $string1。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is not null."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is null."</span>
<span class="token keyword">fi</span>                    <span class="token comment"># 结果正确。</span>
<span class="token comment"># 独立的 [ ... ] 测试运算符可以用来检测字符串是否为空。</span>
<span class="token comment"># 但是最好将字符串进行引用（if [ "$string1" ]）。</span>
<span class="token comment">#</span>
<span class="token comment"># Stephane Chazelas 指出：</span>
<span class="token comment">#    if [ $string1 ]    只有一个参数 "]"</span>
<span class="token comment">#    if [ "$string1" ]  则有两个参数，空的 "$string1" 和 "]"</span>


<span class="token builtin class-name">echo</span>


<span class="token assign-left variable">string1</span><span class="token operator">=</span>initialized

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$string1</span> <span class="token punctuation">]</span>       <span class="token comment"># $string1 这次仍然没有被引用。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is not null."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is null."</span>
<span class="token keyword">fi</span>                    <span class="token comment"># 这次的结果仍然是正确的。</span>
<span class="token comment"># 最好将字符串引用（"$string1"）</span>


<span class="token assign-left variable">string1</span><span class="token operator">=</span><span class="token string">"a = b"</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$string1</span> <span class="token punctuation">]</span>       <span class="token comment"># $string1 这次仍然没有被引用。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is not null."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"String <span class="token entity" title="\&quot;">\"</span>string1<span class="token entity" title="\&quot;">\"</span> is null."</span>
<span class="token keyword">fi</span>                    <span class="token comment"># 这次没有引用就错了。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>   <span class="token comment"># 同时感谢 Florian Wisser 的提示。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><p>样例 7-7. <code>zmore</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># zmore</span>

<span class="token comment"># 使用筛选器 'more' 查看 gzipped 文件。</span>

<span class="token assign-left variable">E_NOARGS</span><span class="token operator">=</span><span class="token number">85</span>
<span class="token assign-left variable">E_NOTFOUND</span><span class="token operator">=</span><span class="token number">86</span>
<span class="token assign-left variable">E_NOTGZIP</span><span class="token operator">=</span><span class="token number">87</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token comment"># 作用和 if [ -z "$1" ] 相同。</span>
<span class="token comment"># $1 可以为空： zmore "" arg2 arg3</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Usage: <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span> filename"</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>
  <span class="token comment"># 将错误信息通过标准错误 stderr 进行输出。</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOARGS</span>
  <span class="token comment"># 脚本的退出状态为 85.</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -f <span class="token string">"<span class="token variable">$filename</span>"</span> <span class="token punctuation">]</span>   <span class="token comment"># 引用字符串以防字符串中带有空格。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"File <span class="token variable">$filename</span> not found!"</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>   <span class="token comment"># 通过标准错误 stderr 进行输出。</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOTFOUND</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">${filename<span class="token operator">##</span>*.}</span> <span class="token operator">!=</span> <span class="token string">"gz"</span> <span class="token punctuation">]</span>
<span class="token comment"># 在括号内使用变量代换。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"File <span class="token variable">$1</span> is not a gzipped file!"</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOTGZIP</span>
<span class="token keyword">fi</span>

zcat <span class="token variable">$1</span> <span class="token operator">|</span> <span class="token function">more</span>

<span class="token comment"># 使用筛选器 'more'</span>
<span class="token comment"># 也可以用 'less' 替代</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>   <span class="token comment"># 脚本的退出状态由管道 pipe 的退出状态决定。</span>
<span class="token comment">#  实际上 "exit $?" 不一定要写出来，</span>
<span class="token comment">#+ 因为无论如何脚本都会返回最后执行命令的退出状态。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="复合比较" tabindex="-1"><a class="header-anchor" href="#复合比较" aria-hidden="true">#</a> 复合比较</h2>
<h3 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> -a</h3>
<p>逻辑与</p>
<p><code>exp1 -a exp2</code> 返回真当且仅当 <code>exp1</code> 和 <code>exp2</code> 均为真。</p>
<h3 id="o" tabindex="-1"><a class="header-anchor" href="#o" aria-hidden="true">#</a> -o</h3>
<p>逻辑或</p>
<p>如果 <code>exp1</code> 或 <code>exp2</code> 为真，则 <code>exp1 -o exp2</code> 返回真。</p>
<p>以上两个操作和 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS" target="_blank" rel="noopener noreferrer">双方括号<ExternalLinkIcon/></a> 结构中的 Bash 比较运算符号 <code>&amp;&amp;</code> 和 <code>||</code> 类似。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> condition1 <span class="token operator">&amp;&amp;</span> condition2 <span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>测试操作 <code>-o</code> 和 <code>-a</code> 可以在 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#TTESTREF" target="_blank" rel="noopener noreferrer"><code>test</code><ExternalLinkIcon/></a> 命令或在测试括号中进行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$expr1</span>"</span> -a <span class="token string">"<span class="token variable">$expr2</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Both expr1 and expr2 are true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Either expr1 or expr2 is false."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> rihad 指出：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span> <span class="token number">1</span> -eq <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> <span class="token boolean">true</span> <span class="token operator"><span class="token file-descriptor important">1</span>></span><span class="token file-descriptor important">&amp;2</span><span class="token variable">`</span></span>"</span> <span class="token punctuation">]</span>   <span class="token comment"># 真</span>
<span class="token punctuation">[</span> <span class="token number">1</span> -eq <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> <span class="token boolean">true</span> <span class="token operator"><span class="token file-descriptor important">1</span>></span><span class="token file-descriptor important">&amp;2</span><span class="token variable">`</span></span>"</span> <span class="token punctuation">]</span>   <span class="token comment"># 没有输出</span>
<span class="token comment"># ^^^^^^^ 条件为假。到这里为止，一切都按预期执行。</span>

<span class="token comment"># 但是</span>
<span class="token punctuation">[</span> <span class="token number">1</span> -eq <span class="token number">2</span> -a -n <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> <span class="token boolean">true</span> <span class="token operator"><span class="token file-descriptor important">1</span>></span><span class="token file-descriptor important">&amp;2</span><span class="token variable">`</span></span>"</span> <span class="token punctuation">]</span>       <span class="token comment"># 真</span>
<span class="token comment"># ^^^^^^^ 条件为假。但是为什么结果为真？</span>

<span class="token comment"># 是因为括号内的两个条件子句都执行了么？</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token number">1</span> -eq <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> -n <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> <span class="token boolean">true</span> <span class="token operator"><span class="token file-descriptor important">1</span>></span><span class="token file-descriptor important">&amp;2</span><span class="token variable">`</span></span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>     <span class="token comment"># 没有输出</span>
<span class="token comment"># 并不是。</span>

<span class="token comment">#  所以显然 &amp;&amp; 和 || 具备“短路”机制，</span>
<span class="token comment">#+ 例如对于 &amp;&amp;，若第一个表达式为假，则不执行第二个表达式直接返回假，</span>
<span class="token comment">#+ 而 -a 和 -o 则不是。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>复合比较操作的例子可以参考 <a href="http://tldp.org/LDP/abs/html/ops.html#ANDOR" target="_blank" rel="noopener noreferrer">样例 8-3<ExternalLinkIcon/></a>，<a href="http://tldp.org/LDP/abs/html/arrays.html#TWODIM" target="_blank" rel="noopener noreferrer">样例 27-17<ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#WHX" target="_blank" rel="noopener noreferrer">样例 A-29<ExternalLinkIcon/></a>。</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>S.C. 指出在复合测试中，仅仅引用字符串可能还不够。比如表达式 <code>[ -n &quot;$string&quot; -o &quot;$a&quot; = &quot;$b&quot; ]</code> 在某些 Bash 版本下，如果 <code>$string</code> 为空可能会出错。更加安全的方式是，对于可能为空的字符串，添加一个额外的字符，例如 <code>[ &quot;x$string&quot; != x -o &quot;x$a&quot; = &quot;x$b&quot; ]</code>（其中的 x 互相抵消）。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
