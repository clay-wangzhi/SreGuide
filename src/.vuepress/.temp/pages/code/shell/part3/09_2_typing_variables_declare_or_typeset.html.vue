<template><h1 id="_9-2-变量类型标注-declare-与-typeset" tabindex="-1"><a class="header-anchor" href="#_9-2-变量类型标注-declare-与-typeset" aria-hidden="true">#</a> 9.2 变量类型标注：<code>declare</code> 与 <code>typeset</code></h1>
<p><a href="">内建命令</a> <code>declare</code> 和 <code>typeset</code> 是完全相同的命令，其被用于修改变量的属性。相比起一部分编程语言来说，这种修改属于非常弱的类型标注方式<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>。<code>declare</code> 命令只有在 Bash version 2 及更高版本才能使用，而 <code>typeset</code> 命令可以在 ksh 脚本中运行。</p>
<h2 id="declare-typeset-命令选项" tabindex="-1"><a class="header-anchor" href="#declare-typeset-命令选项" aria-hidden="true">#</a> <code>declare</code>/<code>typeset</code> 命令选项</h2>
<h3 id="r-只读-readonly" tabindex="-1"><a class="header-anchor" href="#r-只读-readonly" aria-hidden="true">#</a> -r 只读（readonly）</h3>
<p>（<code>declare -r var1</code> 与 <code>readonly var1</code> 的作用相同）</p>
<p>该选项约等于 C 语言中的类型限定符 <code>const</code>。任何尝试修改只读变量的行为都会导致脚本出错。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -r <span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1 = <span class="token variable">$var1</span>"</span>   <span class="token comment"># var1 = 1</span>

<span class="token variable"><span class="token punctuation">((</span> var1<span class="token operator">++</span> <span class="token punctuation">))</span></span>          <span class="token comment"># x.sh: line 4: var1: readonly variable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="i-整型-integer" tabindex="-1"><a class="header-anchor" href="#i-整型-integer" aria-hidden="true">#</a> -i 整型（integer）</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -i number
<span class="token comment"># 脚本会将之后所有出现的 "number" 变量的类型都视作整型。</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Number = <span class="token variable">$number</span>"</span>     <span class="token comment"># Number = 3</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span>three
<span class="token builtin class-name">echo</span> <span class="token string">"Number = <span class="token variable">$number</span>"</span>     <span class="token comment"># Number = 0</span>
<span class="token comment"># 脚本试图将字符串 "three" 视为整型。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>被视为整型的变量无需命令 <a href=""><code>expr</code></a> 或是 <a href=""><code>let</code></a> 即可进行数学运算。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">6</span>/3
<span class="token builtin class-name">echo</span> <span class="token string">"n = <span class="token variable">$n</span>"</span>       <span class="token comment"># n = 6/3</span>

<span class="token builtin class-name">declare</span> -i n
<span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">6</span>/3
<span class="token builtin class-name">echo</span> <span class="token string">"n = <span class="token variable">$n</span>"</span>       <span class="token comment"># n = 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="a-数组-array" tabindex="-1"><a class="header-anchor" href="#a-数组-array" aria-hidden="true">#</a> -a 数组（array）</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -a indices
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>变量 <code>indices</code> 会被视作 <a href="">数组</a>。</p>
<h3 id="f-函数-function" tabindex="-1"><a class="header-anchor" href="#f-函数-function" aria-hidden="true">#</a> -f 函数（function）</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果没有在 <code>declare -f</code> 后带上任何参数，该语句将会列出在脚本中已经定义的所有函数。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -f function_name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>而 <code>declare -f function_name</code> 则仅仅列出名为 <code>function_name</code> 的函数。</p>
<h3 id="x-导出-export" tabindex="-1"><a class="header-anchor" href="#x-导出-export" aria-hidden="true">#</a> -x 导出（export）</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -x var3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该语句声明了变量 <code>var3</code> 可以导出到该变量所属脚本之外的 shell 环境中。</p>
<h3 id="x-var-value" tabindex="-1"><a class="header-anchor" href="#x-var-value" aria-hidden="true">#</a> -x var=$value</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -x <span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token number">373</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>declare</code> 命令允许在设置变量属性的同时给变量赋值。</p>
<h4 id="样例9-10-使用-declare-命令标注变量类型" tabindex="-1"><a class="header-anchor" href="#样例9-10-使用-declare-命令标注变量类型" aria-hidden="true">#</a> 样例9-10. 使用 <code>declare</code> 命令标注变量类型</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function-name function">func1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> This is a function.
<span class="token punctuation">}</span>

<span class="token builtin class-name">declare</span> -f        <span class="token comment"># 显示上面的所有函数。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">declare</span> -i var1   <span class="token comment"># var1 是一个整型变量。</span>
<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">2367</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1 declared as <span class="token variable">$var1</span>"</span>
<span class="token assign-left variable">var1</span><span class="token operator">=</span>var1+1       <span class="token comment"># 整型变量的运算可以省略 let 命令。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1 incremented by 1 is <span class="token variable">$var1</span>."</span>
<span class="token comment"># 尝试修改整型变量。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Attempting to change var1 to floating point value, 2367.1."</span>
<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">2367.1</span>       <span class="token comment"># 报错，并且 var1 的值并没有被修改。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1 is still <span class="token variable">$var1</span>"</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">declare</span> -r <span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">13.36</span>         <span class="token comment"># 'declare' 允许在设置变量属性时，</span>
                              <span class="token comment">#+ 同时给变量赋值。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var2 declared as <span class="token variable">$var2</span>"</span> <span class="token comment"># 尝试修改只读变量。</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">13.37</span>                    <span class="token comment"># 报错，然后脚本异常结束。</span>

<span class="token builtin class-name">echo</span> <span class="token string">"var2 is still <span class="token variable">$var2</span>"</span>    <span class="token comment"># 这行语句将不会被执行。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>                        <span class="token comment"># 脚本也不会从这里结束。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>{% hint style=&quot;warning&quot; %}</p>
<p>使用内建命令 <code>declare</code> 还可以限制变量的 <a href="">作用域</a>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function-name function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token assign-left variable">FOO</span><span class="token operator">=</span><span class="token string">"bar"</span>
<span class="token punctuation">}</span>

<span class="token function-name function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
foo
<span class="token builtin class-name">echo</span> <span class="token variable">$FOO</span>
<span class="token punctuation">}</span>

bar   <span class="token comment"># 输出 bar。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>但是...</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function-name function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">declare</span> <span class="token assign-left variable">FOO</span><span class="token operator">=</span><span class="token string">"bar"</span>
<span class="token punctuation">}</span>

<span class="token function-name function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
foo
<span class="token builtin class-name">echo</span> <span class="token variable">$FOO</span>
<span class="token punctuation">}</span>

bar  <span class="token comment"># 什么都不会输出。</span>


<span class="token comment"># 感谢 Michael Iatrou 指出这点。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>{% endhint %}</p>
<h2 id="注记" tabindex="-1"><a class="header-anchor" href="#注记" aria-hidden="true">#</a> 注记</h2>
<p>{% hint style=&quot;info&quot; %}
在本书中，变量类型标注（typing）是指指定变量类型并限制其属性。例如一个变量被 <code>declared</code> 或是 <code>typed</code> 命令声明为整型，则该变量不再适用于各种 <a href="">字符串操作</a>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -i intvar

<span class="token assign-left variable">intvar</span><span class="token operator">=</span><span class="token number">23</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$intvar</span>"</span>   <span class="token comment"># 23</span>
<span class="token assign-left variable">intvar</span><span class="token operator">=</span>stringval
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$intvar</span>"</span>   <span class="token comment"># 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>{% endhint %}</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>Footnotes placeholder <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
