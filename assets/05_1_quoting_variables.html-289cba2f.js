import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-efb515d7.js";const l={},i=e(`<h1 id="_5-1-引用变量" tabindex="-1"><a class="header-anchor" href="#_5-1-引用变量" aria-hidden="true">#</a> 5.1 引用变量</h1><p>引用变量时，通常建议将变量包含在双引号中。因为这样可以防止除 <code>$</code>，<code>\`</code>（反引号）和<code>\\</code>（转义符）之外的其他特殊字符被重新解释。[^1]在双引号中仍然可以使用<code>$</code>引用变量（<code>&quot;$variable&quot;</code>），也就是将变量名替换为变量值（详情查看样例 4-1）。</p><p>使用双引号可以防止字符串被分割。[^2]即使参数中拥有很多空白分隔符，被包在双引号中后依旧是算作单一字符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">List</span><span class="token operator">=</span><span class="token string">&quot;one two three&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token variable">$List</span>     <span class="token comment"># 空白符将变量分成几个部分。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span>
<span class="token keyword">done</span>
<span class="token comment"># one</span>
<span class="token comment"># two</span>
<span class="token comment"># three</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;---&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$List</span>&quot;</span>   <span class="token comment"># 在单一变量中保留所有空格。</span>
<span class="token keyword">do</span> <span class="token comment">#     ^     ^</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span>
<span class="token keyword">done</span>
<span class="token comment"># one two three</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个更加复杂的例子：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">variable1</span><span class="token operator">=</span><span class="token string">&quot;a variable containing five words&quot;</span>
COMMAND This is <span class="token variable">$variable1</span>    <span class="token comment"># 带上7个参数执行COMMAND命令：</span>
<span class="token comment"># &quot;This&quot; &quot;is&quot; &quot;a&quot; &quot;variable&quot; &quot;containing&quot; &quot;five&quot; &quot;words&quot;</span>

COMMAND <span class="token string">&quot;This is <span class="token variable">$variable1</span>&quot;</span>  <span class="token comment"># 带上1个参数执行COMMAND命令：</span>
<span class="token comment"># &quot;This is a variable containing five words&quot;</span>


<span class="token assign-left variable">variable2</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>    <span class="token comment"># 空值。</span>

COMMAND  <span class="token variable">$variable2</span> <span class="token variable">$variable2</span> <span class="token variable">$variable2</span>
                <span class="token comment"># 不带参数执行COMMAND命令。</span>
COMMAND <span class="token string">&quot;<span class="token variable">$variable2</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$variable2</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$variable2</span>&quot;</span>
                <span class="token comment"># 带上3个参数执行COMMAND命令。</span>
COMMAND <span class="token string">&quot;<span class="token variable">$variable2</span> <span class="token variable">$variable2</span> <span class="token variable">$variable2</span>&quot;</span>
                <span class="token comment"># 带上1个参数执行COMMAND命令（2空格）。</span>

<span class="token comment"># 感谢 Stéphane Chazelas。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/tip.gif" alt="info"> 当字符分割或者保留空白符出现问题时，才需要在<code>echo</code>语句中用双引号包住参数。</p></blockquote><p>样例 5-1. 输出一些奇怪的变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># weirdvars.sh: 输出一些奇怪的变量</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot;&#39;(]<span class="token entity" title="\\\\">\\\\</span>{}\\$<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var</span>        <span class="token comment"># &#39;(]\\{}$&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>      <span class="token comment"># &#39;(]\\{}$&quot;     没有任何区别。</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&#39;\\&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var</span>        <span class="token comment"># &#39;(] {}$&quot;     \\ 被转换成了空格，为什么？</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>      <span class="token comment"># &#39;(]\\{}$&quot;</span>

<span class="token comment"># 上面的例子由 Stephane Chazelas 提供。</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span><span class="token entity" title="\\\\">\\\\</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>       <span class="token comment">#   &quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var2</span>&quot;</span>     <span class="token comment"># \\\\&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token comment"># 但是...var2=&quot;\\\\\\\\&quot;&quot; 不是合法的语句，为什么？</span>
<span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token string">&#39;\\\\\\\\&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var3</span>&quot;</span>     <span class="token comment"># \\\\\\\\</span>
<span class="token comment"># 强引用是可以的。</span>


<span class="token comment"># ************************************************************ #</span>
<span class="token comment"># 就像第一个例子展示的那样，嵌套引用是允许的。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&#39;&quot;&#39;</span><span class="token variable">)</span></span>&quot;</span>           <span class="token comment"># &quot;</span>
<span class="token comment">#    ^           ^</span>


<span class="token comment"># 在有些时候这种方法非常有用。</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token string">&quot;Two bits&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$var1</span> = &quot;</span><span class="token variable">$var1</span><span class="token string">&quot;&quot;</span>      <span class="token comment"># $var1 = Two bits</span>
<span class="token comment">#    ^                ^</span>

<span class="token comment"># 或者，可以像 Chris Hiestand 指出的那样：</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">du</span> <span class="token string">&quot;<span class="token variable">$My_File1</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-gt</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">du</span> <span class="token string">&quot;<span class="token variable">$My_File2</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment">#     ^     ^         ^ ^     ^     ^         ^ ^</span>
<span class="token keyword">then</span>
  <span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
<span class="token comment"># ************************************************************ #</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单引号（&#39; &#39;）与双引号类似，但是在单引号中不能引用变量，因为 <code>$</code> 不再具有特殊含义。在单引号中，除<code>&#39;</code>之外的所有特殊字符都将会被直接按照字面意思解释。可以认为单引号（“全引用”）是双引号（“部分引用”）的一种更严格的形式。</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 因为在单引号中转义符（\\）都已经按照字面意思解释了，因此尝试在单引号中包含单引号将不会产生你所预期的结果。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Why can&#39;t I write &#39;s between single quotes&quot;</span>
<span class="token operator">&gt;</span>
<span class="token builtin class-name">echo</span>
<span class="token operator">&gt;</span>
<span class="token comment"># 可以采取迂回的方式。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;Why can&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token string">&#39;t I write &#39;</span><span class="token string">&quot;&#39;&quot;</span>&#39;s between single quotes&#39;
<span class="token comment">#    |-------|  |----------|   |-----------------------|</span>
<span class="token comment"># 由三个单引号引用的字符串，再加上转义以及双引号包住的单引号组成。</span>
<span class="token operator">&gt;</span>
<span class="token comment"># 感谢 Stéphane Chazelas 提供的例子。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[^1]: 在命令行里，如果双引号包含了 &quot;!&quot; 将会产生错误。这是因为shell将其解释为查看历史命令。而在脚本中，因为历史机制已经被关闭，所以不会产生这个问题。<br>我们更加需要注意的是在双引号中 <code>\\</code> 的反常行为，尤其是在使用 <code>echo -e</code> 命令时。<br><pre>bash$ echo hello\\!<br>hello!<br>bash$ echo &quot;hello\\!&quot;<br>hello\\!<br><br><br>bash$ echo \\<br>&gt;<br>bash$ echo &quot;\\&quot;<br>&gt;<br>bash$ echo \\a<br>a<br>bash$ echo &quot;\\a&quot;<br>\\a<br><br><br>bash$ echo x\\ty<br>xty<br>bash$ echo &quot;x\\ty&quot;<br>x\\ty<br><br>bash$ echo -e x\\ty<br>xty<br>bash$ echo -e &quot;x\\ty&quot;<br>x       y</pre>在 <code>echo</code> 后的双引号中一般会转义 <code>\\</code>。并且 <code>echo -e</code> 会将 <code>&quot;\\t&quot;</code> 解释成制表符。<br>（感谢 Wayne Pollock 提出这些；感谢Geoff Lee 与 Daniel Barclay 对此做出的解释。） [^2]: 字符分割（word splitting）在本文中的意思是指将一个字符串分割成独立的、离散的变量。</p>`,13),t=[i];function o(c,p){return n(),a("div",null,t)}const v=s(l,[["render",o],["__file","05_1_quoting_variables.html.vue"]]);export{v as default};
