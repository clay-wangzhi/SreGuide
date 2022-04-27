<template><h1 id="_4-1-变量替换" tabindex="-1"><a class="header-anchor" href="#_4-1-变量替换" aria-hidden="true">#</a> 4.1 变量替换</h1>
<p>变量名是其所指向值的一个占位符（placeholder）。引用变量值的过程我们称之为变量替换（variable substitution）。</p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $</h3>
<p>接下来我们仔细区分一下<strong>变量名</strong>与<strong>变量值</strong>。如果变量名是 <code>variable1</code>， 那么 <code>$variable1</code> 就是对变量值的引用。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash$ variable1=23


bash$ echo variable1
variable1

bash$ echo $variable1
23
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>变量仅仅在声明时、赋值时、被删除时（<code>unset</code>）、被导出时（<code>export</code>），算术运算中使用双括号结构((...))时或在代表信号时（signal，查看样例 32-5）才不需要有 $ 前缀。赋值可以是使用 =（比如 <code>var1=27</code>），可以是在 <code>read</code> 语句中，也可以是在循环的头部（<code>for var2 in 1 2 3</code>）。</p>
<p>在双引号<code>&quot;&quot;</code>字符串中可以使用变量替换。我们称之为部分引用，有时候也称弱引用。而使用单引号<code>''</code>引用时，变量只会作为字符串显示，变量替换不会发生。我们称之为全引用，有时也称强引用。更多细节将在第五章讲解。</p>
<p>实际上, <code>$variable</code> 这种写法是 <code>${variable}</code> 的简化形式。在某些特殊情况下，使用 <code>$variable</code> 写法会造成语法错误，使用完整形式会更好（查看章节 10.2）。</p>
<p>样例 4-1. 变量赋值与替换</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># ex9.sh</span>

<span class="token comment"># 变量赋值与替换</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">375</span>
<span class="token assign-left variable">hello</span><span class="token operator">=</span><span class="token variable">$a</span>
<span class="token comment">#   ^ ^</span>

<span class="token comment">#----------------------------------------------------</span>
<span class="token comment"># 初始化变量时，赋值号 = 的两侧绝不允许有空格出现。</span>
<span class="token comment"># 如果有空格会发生什么？</span>

<span class="token comment">#   "VARIABLE =value"</span>
<span class="token comment">#            ^</span>
<span class="token comment">#% 脚本将会尝试运行带参数 "=value" 的 "VARIABLE " 命令。</span>

<span class="token comment">#   "VARIABLE= value"</span>
<span class="token comment">#             ^</span>
<span class="token comment">#% 脚本将会尝试运行 "value" 命令，</span>
<span class="token comment">#+ 同时设置环境变量 "VARIABLE" 为 ""。</span>
<span class="token comment">#----------------------------------------------------</span>


<span class="token builtin class-name">echo</span> hello    <span class="token comment"># hello</span>
<span class="token comment"># 没有引用变量，"hello" 只是一个字符串...</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$hello</span>   <span class="token comment"># 375</span>
<span class="token comment">#    ^          这是变量引用。</span>

<span class="token builtin class-name">echo</span> <span class="token variable">${hello}</span> <span class="token comment"># 375</span>
<span class="token comment">#               与上面的类似，变量引用。</span>

<span class="token comment"># 字符串内引用变量</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$hello</span>"</span>    <span class="token comment"># 375</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${hello}</span>"</span>  <span class="token comment"># 375</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">hello</span><span class="token operator">=</span><span class="token string">"A B  C   D"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$hello</span>   <span class="token comment"># A B C D</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$hello</span>"</span> <span class="token comment"># A B  C   D</span>
<span class="token comment"># 正如我们所见，echo $hello 与 echo "$hello" 的结果不同。</span>
<span class="token comment"># ====================================</span>
<span class="token comment"># 字符串内引用变量将会保留变量的空白符。</span>
<span class="token comment"># ====================================</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">'$hello'</span>  <span class="token comment"># $hello</span>
<span class="token comment">#    ^      ^</span>
<span class="token comment">#  单引号会禁用掉（转义）变量引用，这导致 "$" 将以普通字符形式被解析。</span>

<span class="token comment"># 注意单双引号字符串引用效果的不同。</span>

<span class="token assign-left variable">hello</span><span class="token operator">=</span>    <span class="token comment"># 将其设置为空值</span>
<span class="token builtin class-name">echo</span> <span class="token string">"\<span class="token variable">$hello</span> (null value) = <span class="token variable">$hello</span>"</span>      <span class="token comment"># $hello (null value) =</span>
<span class="token comment"># 注意 </span>
<span class="token comment"># 将一个变量设置为空与删除(unset)它不同，尽管它们的表现形式相同。</span>

<span class="token comment"># -----------------------------------------------</span>

<span class="token comment"># 使用空白符分隔，可以在一行内对多个变量进行赋值。</span>
<span class="token comment"># 但是这会降低程序的可读性，并且可能会导致部分程序不兼容的问题。</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">21</span>  <span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">22</span>  <span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token variable">$V3</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1=<span class="token variable">$var1</span>   var2=<span class="token variable">$var2</span>   var3=<span class="token variable">$var3</span>"</span>

<span class="token comment"># 在一些老版本的 shell 中这样写可能会有问题。</span>

<span class="token comment"># -----------------------------------------------</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">numbers</span><span class="token operator">=</span><span class="token string">"one two three"</span>
<span class="token comment">#           ^   ^</span>
<span class="token assign-left variable">other_numbers</span><span class="token operator">=</span><span class="token string">"1 2 3"</span>
<span class="token comment">#               ^ ^</span>
<span class="token comment"># 如果变量中有空白符号，那么必须用引号进行引用。</span>
<span class="token comment"># other_numbers=1 2 3                  # 出错</span>
<span class="token builtin class-name">echo</span> <span class="token string">"numbers = <span class="token variable">$numbers</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"other_numbers = <span class="token variable">$other_numbers</span>"</span>  <span class="token comment"># other_numbers = 1 2 3</span>
<span class="token comment"># 也可以转义空白符。</span>
<span class="token assign-left variable">mixed_bag</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">\</span> ---<span class="token punctuation">\</span> Whatever
<span class="token comment">#           ^    ^ 使用 \ 转义空格</span>

<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$mixed_bag</span>"</span>         <span class="token comment"># 2 --- Whatever</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"uninitialized_variable = <span class="token variable">$uninitialized_variable</span>"</span>
<span class="token comment"># 未初始化的变量是空值(null表示不含有任何值)。</span>
<span class="token assign-left variable">uninitialized_variable</span><span class="token operator">=</span>   <span class="token comment"># 只声明而不初始化，等同于设为空值。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"uninitialized_variable = <span class="token variable">$uninitialized_variable</span>"</span> <span class="token comment"># 仍旧为空</span>

<span class="token assign-left variable">uninitialized_variable</span><span class="token operator">=</span><span class="token number">23</span>       <span class="token comment"># 设置变量</span>
<span class="token builtin class-name">unset</span> uninitialized_variable    <span class="token comment"># 删除变量</span>
<span class="token builtin class-name">echo</span> <span class="token string">"uninitialized_variable = <span class="token variable">$uninitialized_variable</span>"</span>
                                <span class="token comment"># uninitialized_variable =</span>
                                <span class="token comment"># 变量值为空</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice" loading="lazy"> 一个未被赋值或未初始化的变量拥有空值（null value）。<em>注意：null值不等同于0</em>。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$unassigned</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"\<span class="token variable">$unassigned</span> is NULL."</span>
<span class="token keyword">fi</span>     <span class="token comment"># $unassigned is NULL.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>在赋值前使用变量可能会导致错误。但在算术运算中使用未赋值变量是可行的。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$uninitialized</span>"</span>            <span class="token comment"># 空行</span>
<span class="token builtin class-name">let</span> <span class="token string">"uninitialized += 5"</span>         <span class="token comment"># 加5</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$uninitialized</span>"</span>            <span class="token comment"># 5</span>
<span class="token comment"># 结论：</span>
<span class="token comment"># 一个未初始化的变量不含值(null)，但在算术运算中会被作为0处理。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>也可参考样例 15-23。</p>
</blockquote>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>实际上，变量名是被称作左值（lvalue），意思是出现在赋值表达式的左侧的值，比如 <code>VARIABLE=23</code>。变量值被称作右值（rvalue），意思是出现在赋值表达式右侧的值，比如 <code>VAR2=$VARIABLE</code>。<br />事实上，变量名只是一个引用，一枚指针，指向实际存储数据内存地址的指针。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
