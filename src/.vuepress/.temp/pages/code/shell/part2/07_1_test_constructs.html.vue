<template><h1 id="_7-1-测试结构" tabindex="-1"><a class="header-anchor" href="#_7-1-测试结构" aria-hidden="true">#</a> 7.1 测试结构</h1>
<ul>
<li>
<p><code>if/then</code> 结构是用来检测一系列命令的 <a href="http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF" target="_blank" rel="noopener noreferrer">退出状态<ExternalLinkIcon/></a> 是否为0（按 UNIX 惯例,退出码 0 表示命令执行成功），如果为0，则执行接下来的一个或多个命令。</p>
</li>
<li>
<p>测试结构会使用一个特殊的命令 <code>[</code>（参看特殊字符章节 <a href="http://tldp.org/LDP/abs/html/special-chars.html#LEFTBRACKET" target="_blank" rel="noopener noreferrer">左方括号<ExternalLinkIcon/></a>）。等同于 <code>test</code> 命令，它是一个<a href="http://tldp.org/LDP/abs/html/internal.html#BUILTINREF" target="_blank" rel="noopener noreferrer">内建命令<ExternalLinkIcon/></a>，写法更加简洁高效。该命令将其参数视为比较表达式或文件测试，以比较结果作为其退出状态码返回（0 为真，1 为假）。</p>
</li>
<li>
<p>Bash 在 2.02 版本中引入了扩展测试命令 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS" target="_blank" rel="noopener noreferrer"><code>[[...]]</code><ExternalLinkIcon/></a>，它提供了一种与其他语言语法更为相似的方式进行比较操作。注意， <code>[[</code> 是一个 <a href="http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF" target="_blank" rel="noopener noreferrer">关键字<ExternalLinkIcon/></a> 而非一个命令。</p>
<p>Bash 将 <code>[[ $a -lt $b ]]</code> 视为一整条语句，执行并返回退出状态。</p>
</li>
<li>
<p>结构 <a href="http://tldp.org/LDP/abs/html/dblparens.html" target="_blank" rel="noopener noreferrer"><code>(( ... ))</code><ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/internal.html#LETREF" target="_blank" rel="noopener noreferrer"><code>let ...</code><ExternalLinkIcon/></a> 根据其执行的算术表达式的结果决定退出状态码。这样的 <a href="http://tldp.org/LDP/abs/html/arithexp.html#ARITHEXPREF" target="_blank" rel="noopener noreferrer">算术扩展<ExternalLinkIcon/></a> 结构可以用来进行 <a href="http://tldp.org/LDP/abs/html/comparison-ops.html#ICOMPARISON1" target="_blank" rel="noopener noreferrer">数值比较<ExternalLinkIcon/></a>。</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token punctuation">))</span></span>                 <span class="token comment"># 逻辑与</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>     <span class="token comment"># 1     ***</span>
<span class="token comment"># 然后 ...</span>
<span class="token builtin class-name">let</span> <span class="token string">"num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token punctuation">))</span></span>"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>   <span class="token comment"># 0</span>
<span class="token comment"># 然而 ...</span>
<span class="token builtin class-name">let</span> <span class="token string">"num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token punctuation">))</span></span>"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>     <span class="token comment"># 1     ***</span>


<span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">||</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>              <span class="token comment"># 逻辑或</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>     <span class="token comment"># 0     ***</span>
<span class="token comment"># ...</span>
<span class="token builtin class-name">let</span> <span class="token string">"num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">||</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>   <span class="token comment"># 1</span>
<span class="token builtin class-name">let</span> <span class="token string">"num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">||</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>     <span class="token comment"># 0     ***</span>


<span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">|</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>               <span class="token comment"># 按位或</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                      <span class="token comment"># 0     ***</span>
<span class="token comment"># ...</span>
<span class="token builtin class-name">let</span> <span class="token string">"num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">|</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>                    <span class="token comment"># 203</span>
<span class="token builtin class-name">let</span> <span class="token string">"num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">|</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                      <span class="token comment"># 0     ***</span>

<span class="token comment"># "let" 结构的退出状态与双括号算术扩展的退出状态是相同的。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> 注意，双括号算术扩展表达式的退出状态码不是一个错误的值。算术表达式为0，返回1；算术表达式不为0，返回0。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">var</span><span class="token operator">=</span>-2 <span class="token operator">&amp;&amp;</span> <span class="token variable"><span class="token punctuation">((</span> var<span class="token operator">+=</span><span class="token number">2</span> <span class="token punctuation">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                   <span class="token comment"># 1</span>

<span class="token assign-left variable">var</span><span class="token operator">=</span>-2 <span class="token operator">&amp;&amp;</span> <span class="token variable"><span class="token punctuation">((</span> var<span class="token operator">+=</span><span class="token number">2</span> <span class="token punctuation">))</span></span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$var</span>
                          <span class="token comment"># 并不会输出 $var, 因为((var+=2))的状态码为1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><code>if</code> 不仅可以用来测试括号内的条件表达式，还可以用来测试其他任何命令。</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token function">cmp</span> a b <span class="token operator">&amp;></span> /dev/null  <span class="token comment"># 消去输出结果</span>
<span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">"Files a and b are identical."</span>
<span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">"Files a and b differ."</span>
<span class="token keyword">fi</span>

<span class="token comment"># 下面介绍一个非常实用的 “if-grep" 结构：</span>
<span class="token comment"># -----------------------------------</span>
<span class="token keyword">if</span> <span class="token function">grep</span> -q Bash <span class="token function">file</span>
  <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">"File contains at least one occurrence of Bash."</span>
<span class="token keyword">fi</span>
    
<span class="token assign-left variable">word</span><span class="token operator">=</span>Linux
<span class="token assign-left variable">letter_sequence</span><span class="token operator">=</span>inu
<span class="token keyword">if</span> <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$word</span>"</span> <span class="token operator">|</span> <span class="token function">grep</span> -q <span class="token string">"<span class="token variable">$letter_sequence</span>"</span>
<span class="token comment"># 使用 -q 选项消去 grep 的输出结果</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$letter_sequence</span> found in "</span><span class="token variable">$word</span><span class="token string">"
else
  echo "</span><span class="token variable">$letter_sequence</span> not found <span class="token keyword">in</span> <span class="token variable">$word</span><span class="token string">"
fi


if COMMAND_WHOSE_EXIT_STATUS_IS_0_UNLESS_ERROR_OCCURRED
  then echo "</span>Command succeed.<span class="token string">"
  else echo "</span>Command failed."
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul>
<li>感谢 Stéphane Chazelas 提供了后两个例子。</li>
</ul>
<p>样例 7-1. 什么才是真？</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 提示：</span>
<span class="token comment"># 如果你不确定某个表达式的布尔值，可以用 if 结构进行测试。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span>0<span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"0 is true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"0 is false."</span>
<span class="token keyword">fi</span>            <span class="token comment"># 0 为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span>1<span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"1 is true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"1 is false."</span>
<span class="token keyword">fi</span>            <span class="token comment"># 1 为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span>-1<span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -1 <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"-1 is true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"-1 is false."</span>
<span class="token keyword">fi</span>            <span class="token comment"># -1 为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span>NULL<span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>        <span class="token comment"># NULL, 空</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"NULL is true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"NULL is false."</span>
<span class="token keyword">fi</span>            <span class="token comment"># NULL 为假。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span>xyz<span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> xyz <span class="token punctuation">]</span>    <span class="token comment"># 字符串</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Random string is true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Random string is false."</span>
<span class="token keyword">fi</span>            <span class="token comment"># 随机字符串为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span><span class="token variable">$xyz</span><span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$xyz</span> <span class="token punctuation">]</span>   <span class="token comment"># 原意是测试 $xyz 是否为空，但是</span>
              <span class="token comment"># 现在 $xyz 只是一个没有初始化的变量。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Uninitialized variable is true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Uninitialized variable is flase."</span>
<span class="token keyword">fi</span>            <span class="token comment"># 未初始化变量含有null空值，为假。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span>-n \<span class="token variable">$xyz</span><span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">$xyz</span>"</span> <span class="token punctuation">]</span>            <span class="token comment"># 更加准确的写法。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Uninitialized variable is true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Uninitialized variable is false."</span>
<span class="token keyword">fi</span>            <span class="token comment"># 未初始化变量为假。</span>

<span class="token builtin class-name">echo</span>


<span class="token assign-left variable">xyz</span><span class="token operator">=</span>          <span class="token comment"># 初始化为空。</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span>-n \<span class="token variable">$xyz</span><span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">$xyz</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Null variable is true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Null variable is false."</span>
<span class="token keyword">fi</span>            <span class="token comment"># 空变量为假。</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 什么时候 "false" 为真？</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span>false<span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"false"</span> <span class="token punctuation">]</span>              <span class="token comment">#  看起来 "false" 只是一个字符串</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token entity" title="\&quot;">\"</span>false<span class="token entity" title="\&quot;">\"</span> is true."</span> <span class="token comment">#+ 测试结果为真。</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token entity" title="\&quot;">\"</span>false<span class="token entity" title="\&quot;">\"</span> is false."</span>
<span class="token keyword">fi</span>            <span class="token comment"># "false" 为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Testing <span class="token entity" title="\&quot;">\"</span>\<span class="token variable">$false</span><span class="token entity" title="\&quot;">\"</span>"</span>  <span class="token comment"># 未初始化的变量。</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$false</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token entity" title="\&quot;">\"</span>\<span class="token variable">$false</span><span class="token entity" title="\&quot;">\"</span> is true."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token entity" title="\&quot;">\"</span>\<span class="token variable">$false</span><span class="token entity" title="\&quot;">\"</span> is false."</span>
<span class="token keyword">fi</span>            <span class="token comment"># "$false" 为假。</span>
              <span class="token comment"># 得到了我们想要的结果。</span>

<span class="token comment"># 如果测试空变量 "$true" 会有什么样的结果？</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br></div></div><p>练习：理解 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#EX10" target="_blank" rel="noopener noreferrer">样例 7-1<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition-true <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">command</span> <span class="token number">1</span>
   <span class="token builtin class-name">command</span> <span class="token number">2</span>
   <span class="token punctuation">..</span>.
<span class="token keyword">else</span>  <span class="token comment"># 如果测试条件为假，则执行 else 后面的代码段</span>
   <span class="token builtin class-name">command</span> <span class="token number">3</span>
   <span class="token builtin class-name">command</span> <span class="token number">4</span>
   <span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> 如果把 <code>if</code> 和 <code>then</code> 写在同一行时，则必须在 <code>if</code> 语句后加上一个分号来结束语句。因为 <code>if</code> 和 <code>then</code> 都是 <a href="http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF" target="_blank" rel="noopener noreferrer">关键字<ExternalLinkIcon/></a>。以关键字（或者命令）开头的语句，必须先结束该语句(分号;)，才能执行下一条语句。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> -x <span class="token string">"<span class="token variable">$filename</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="else-if-与-elif" tabindex="-1"><a class="header-anchor" href="#else-if-与-elif" aria-hidden="true">#</a> Else if 与 elif</h3>
<p>elif</p>
<p><code>elif</code> 是 <code>else if</code> 的缩写。可以把多个 <code>if/then</code> 语句连到外边去，更加简洁明了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition1 <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   command1
   command2
   command3
<span class="token keyword">elif</span> <span class="token punctuation">[</span>condition2 <span class="token punctuation">]</span>
<span class="token comment"># 等价于 else if</span>
<span class="token keyword">then</span>
   command4
   command5
<span class="token keyword">else</span>
   default-command
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>if test condition-true</code> 完全等价于 <code>if [ condition-true ]</code>。当语句开始执行时，左括号 <code>[</code> 是作为调用 <code>test</code> 命令的标记<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>，而右括号则不严格要求，但在新版本的 Bash 里，右括号必须补上。</p>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> <code>test</code> 命令是 Bash 的 <a href="http://tldp.org/LDP/abs/html/internal.html#BUILTINREF" target="_blank" rel="noopener noreferrer">内建命令<ExternalLinkIcon/></a>，可以用来检测文件类型和比较字符串。在 Bash 脚本中，<code>test</code> 不调用 <code>sh-utils</code> 包下的文件 <code>/usr/bin/test</code>。同样，<code>[</code> 也不会调用链接到 <code>/usr/bin/test</code> 的 <code>/usr/bin/[</code> 文件。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash$ type test
test is a shell builtin
bash$ type '['
[ is a shell builtin
bash$ type '[['
[[ is a shell keyword
bash$ type ']]'
]] is a shell keyword
bash$ type ']'
bash: type: ]: not found
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果你想在 Bash 脚本中使用 <code>/usr/bin/test</code>，那你必须把路径写全。</p>
<p>样例 7-2. <code>test</code>，<code>/usr/bin/test</code>，<code>[]</code> 和 <code>/usr/bin/[</code> 的等价性</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token builtin class-name">test</span> -z <span class="token string">"<span class="token variable">$1</span>"</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"No command-line arguments."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"First command-line argument is <span class="token variable">$1</span>."</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> /usr/bin/test -z <span class="token string">"<span class="token variable">$1</span>"</span>      <span class="token comment"># 等价于内建命令 "test"</span>
<span class="token comment">#  ^^^^^^^^^^^^^              # 指定全路径</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"No command-line arguments."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"First command-line argument is <span class="token variable">$1</span>."</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token punctuation">]</span>                <span class="token comment"># 功能和上面的代码相同。</span>
<span class="token comment">#   if [ -z "$1"                理论上可行，但是 Bash 会提示缺失右括号</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"No command-line arguments."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"First command-line argument is <span class="token variable">$1</span>."</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>


<span class="token keyword">if</span> /usr/bin/<span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token punctuation">]</span>       <span class="token comment"># 功能和上面的代码相同。</span>
<span class="token comment"># if /usr/bin/[ -z "$1"       # 理论上可行，但是会报错</span>
<span class="token comment">#                             # 已经在 Bash 3.x 版本被修复了</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"No command-line arguments."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"First command-line argument is <span class="token variable">$1</span>."</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>在 Bash 里，<code>[[ ]]</code> 是比 <code>[ ]</code> 更加通用的写法。其作为扩展<code>test</code> 命令从 ksh88 中被继承了过来。</p>
<p>在 <code>[[</code> 和 <code>]]</code> 中不会进行文件名扩展或字符串分割，但是可以进行参数扩展和命令替换。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">file</span><span class="token operator">=</span>/etc/passwd

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -e <span class="token variable">$file</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Password file exists."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>使用 <code>[[...]]</code> 代替 <code>[...]</code>可以避免很多逻辑错误。比如可以在 <code>[[]]</code> 中使用 <code>&amp;&amp;</code>，<code>||</code>，<code>&lt;</code> 和 <code>&gt;</code> 运算符，而在 <code>[]</code> 中使用会报错。</p>
<p>在 <code>[[]]</code> 中会自动执行八进制和十六进制的进制转换操作。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># [[ 八进制和十六进制进制转换 ]]</span>
<span class="token comment"># 感谢 Moritz Gronbach 提出。</span>


<span class="token assign-left variable">decimal</span><span class="token operator">=</span><span class="token number">15</span>
<span class="token assign-left variable">octal</span><span class="token operator">=</span>017   <span class="token comment"># = 15 (十进制)</span>
<span class="token assign-left variable">hex</span><span class="token operator">=</span>0x0f    <span class="token comment"># = 15 (十进制)</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$decimal</span>"</span> -eq <span class="token string">"<span class="token variable">$octal</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$decimal</span> equals <span class="token variable">$octal</span>"</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$decimal</span> is not equal to <span class="token variable">$octal</span>"</span>       <span class="token comment"># 15 不等于 017</span>
<span class="token keyword">fi</span>      <span class="token comment"># 在单括号 [ ] 之间不会进行进制转换。</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$decimal</span>"</span> -eq <span class="token string">"<span class="token variable">$octal</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$decimal</span> equals <span class="token variable">$octal</span>"</span>                <span class="token comment"># 15 等于 017</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$decimal</span> is not equal to <span class="token variable">$octal</span>"</span>
<span class="token keyword">fi</span>      <span class="token comment"># 在双括号 [[ ]] 之间会进行进制转换。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$decimal</span>"</span> -eq <span class="token string">"<span class="token variable">$hex</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$decimal</span> equals <span class="token variable">$hex</span>"</span>                  <span class="token comment"># 15 等于 0x0f</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$decimal</span> is not equal to <span class="token variable">$hex</span>"</span>
<span class="token keyword">fi</span>      <span class="token comment"># 十六进制也可以进行转换。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> 语法上并不严格要求在 <code>if</code> 之后一定要写 <code>test</code> 命令或者测试结构（<code>[]</code> 或 <code>[[]]</code>）。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">dir</span><span class="token operator">=</span>/home/bozo

<span class="token keyword">if</span> <span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable">$dir</span>"</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>   <span class="token comment"># "2>/dev/null" 重定向消去错误输出。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Now in <span class="token variable">$dir</span>."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Can't change to <span class="token variable">$dir</span>."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>if COMMAND</code> 的退出状态就是<code>COMMAND</code> 的退出状态。</p>
<p>同样的，测试括号也不一定需要与 <code>if</code> 一起使用。其可以同 <a href="http://tldp.org/LDP/abs/html/list-cons.html#LISTCONSREF" target="_blank" rel="noopener noreferrer">列表结构<ExternalLinkIcon/></a> 结合而不需要 <code>if</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">22</span>
<span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$var1</span>"</span> -ne <span class="token string">"<span class="token variable">$var2</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$var1</span> is not equal to <span class="token variable">$var2</span>"</span>

<span class="token assign-left variable">home</span><span class="token operator">=</span>/home/bozo
<span class="token punctuation">[</span> -d <span class="token string">"<span class="token variable">$home</span>"</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$home</span> directory does not exist."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><a href="http://tldp.org/LDP/abs/html/dblparens.html" target="_blank" rel="noopener noreferrer"><code>(( ))</code> 结构<ExternalLinkIcon/></a> 扩展和执行算术表达式。如果执行结果为0，其返回的 <a href="http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF" target="_blank" rel="noopener noreferrer">退出状态码<ExternalLinkIcon/></a> 为1（假）。非0表达式返回的退出状态为0（真）。这与上述所使用的 <code>test</code> 和 <code>[ ]</code> 结构形成鲜明的对比。</p>
<p>样例 7-3. 使用 <code>(( ))</code> 进行算术测试</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># arith-tests.sh</span>
<span class="token comment"># 算术测试。</span>

<span class="token comment"># (( ... )) 结构执行并测试算术表达式。</span>
<span class="token comment"># 与 [ ... ] 结构的退出状态正好相反。</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token punctuation">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"Exit status of <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token punctuation">))</span></span><span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$?</span>."</span>         <span class="token comment"># 1</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token punctuation">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"Exit status of <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token punctuation">))</span></span><span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$?</span>."</span>         <span class="token comment"># 0</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">></span> <span class="token number">4</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 真</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Exit status of <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">></span> <span class="token number">4</span> <span class="token punctuation">))</span></span><span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$?</span>."</span>     <span class="token comment"># 0</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">></span> <span class="token number">9</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 假</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Exit status of <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">></span> <span class="token number">9</span> <span class="token punctuation">))</span></span><span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$?</span>."</span>     <span class="token comment"># 1</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">))</span></span>                                     <span class="token comment"># 真</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Exit status of <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">))</span></span><span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$?</span>."</span>    <span class="token comment"># 0</span>
<span class="token comment"># (( 5 = 5 )) 会报错。</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">-</span> <span class="token number">5</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 0</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Exit status of <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">-</span> <span class="token number">5</span> <span class="token punctuation">))</span></span><span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$?</span>."</span>     <span class="token comment"># 1</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">4</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 合法</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Exit status of <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">4</span> <span class="token punctuation">))</span></span><span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$?</span>."</span>     <span class="token comment"># 0 </span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 结果小于1</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Exit status of <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">))</span></span><span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$?</span>."</span>     <span class="token comment"># 舍入至0。</span>
                                                 <span class="token comment"># 1</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token punctuation">))</span></span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null                          <span class="token comment"># 除0，非法</span>
<span class="token comment">#           ^^^^^^^^^^^</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Exit status of <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token punctuation">))</span></span><span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$?</span>."</span>     <span class="token comment"># 1</span>

<span class="token comment"># "2>/dev/null" 的作用是什么？</span>
<span class="token comment"># 如果将其移除会发生什么？</span>
<span class="token comment"># 尝试移除这条语句并重新执行脚本。</span>

<span class="token comment"># ======================================= #</span>

<span class="token comment"># (( ... )) 在 if-then 中也非常有用</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">4</span>

<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> var1 <span class="token operator">></span> var2 <span class="token punctuation">))</span></span>
<span class="token keyword">then</span> <span class="token comment">#^      ^      注意不是 $var1 和 $var2，为什么？</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$var1</span> is greater then <span class="token variable">$var2</span>"</span>
<span class="token keyword">fi</span>     <span class="token comment"># 5 大于 4</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>标记是一个具有特殊意义（<a href="http://tldp.org/LDP/abs/html/x17129.html#METAMEANINGREF" target="_blank" rel="noopener noreferrer">元语义<ExternalLinkIcon/></a>）的符号或者短字符串。在 Bash 里像 <code>[</code> 和 <a href="http://tldp.org/LDP/abs/html/special-chars.html#DOTREF" target="_blank" rel="noopener noreferrer"><code>.（点命令）</code><ExternalLinkIcon/></a> 这样的标记可以扩展成关键字和命令。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
