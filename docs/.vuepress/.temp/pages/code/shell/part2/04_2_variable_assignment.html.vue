<template><div><h1 id="_4-2-变量赋值" tabindex="-1"><a class="header-anchor" href="#_4-2-变量赋值" aria-hidden="true">#</a> 4.2 变量赋值</h1>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> =</h3>
<p>赋值操作符（在其前后没有空白符）。</p>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="noitce"> 不要混淆 = 与 -eq，后者用来进行比较而非赋值。</p>
<p>同时也要注意 = 根据使用场景既可作赋值操作符，也可作比较操作符。</p>
</blockquote>
<p>样例 4-2. 变量赋值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 非引用形式变量</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 什么时候变量是非引用形式，即变量名前没有 '$' 符号的呢？</span>
<span class="token comment"># 当变量在被赋值而不是被引用时。</span>

<span class="token comment"># 赋值</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">879</span>
<span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\&quot;">\"</span>a<span class="token entity" title="\&quot;">\"</span> is <span class="token variable">$a</span>."</span>

<span class="token comment"># 使用 'let' 进行赋值</span>
<span class="token builtin class-name">let</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">16</span>+5
<span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\&quot;">\"</span>a<span class="token entity" title="\&quot;">\"</span> is now <span class="token variable">$a</span>."</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 在 'for' 循环中赋值（隐式赋值）</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"Values of <span class="token entity" title="\&quot;">\"</span>a<span class="token entity" title="\&quot;">\"</span> in the loop are: "</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">11</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span> "</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span>

<span class="token comment"># 在 'read' 表达式中（另一种赋值形式）</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"Enter <span class="token entity" title="\&quot;">\"</span>a<span class="token entity" title="\&quot;">\"</span> "</span>
<span class="token builtin class-name">read</span> a
<span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\&quot;">\"</span>a<span class="token entity" title="\&quot;">\"</span> is now <span class="token variable">$a</span>."</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 4-3. 奇妙的变量赋值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">23</span>              <span class="token comment"># 简单形式</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token variable">$a</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$b</span>

<span class="token comment"># 来我们玩点炫的（命令替换）。</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> Hello<span class="token operator">!</span><span class="token variable">`</span></span>   <span class="token comment"># 将 'echo' 命令的结果赋值给 'a'</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token comment">#  注意在命令替换结构中包含感叹号(!)在命令行中使用将会失效，</span>
<span class="token comment">#+ 因为它将会触发 Bash 的历史(history)机制。</span>
<span class="token comment">#  在shell脚本内，Bash 的历史机制默认关闭。</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">ls</span> <span class="token parameter variable">-l</span><span class="token variable">`</span></span>         <span class="token comment"># 将 'ls -l' 命令的结果赋值给 'a'</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>           <span class="token comment"># 不带引号引用，将会移除所有的制表符与分行符</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$a</span>"</span>         <span class="token comment"># 引号引用变量将会保留空白符</span>
                  <span class="token comment"># 查看 "引用" 章节。</span>
                  
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>$(...)</code> 形式进行赋值（与反引号不同的新形式），与命令替换形式相似。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 摘自 /etc/rc.d/rc.local</span>
<span class="token assign-left variable">R</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/redhat-release<span class="token variable">)</span></span>
<span class="token assign-left variable">arch</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


