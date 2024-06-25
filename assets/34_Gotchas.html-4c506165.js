import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-4e885309.js";const l={},i=e(`<h1 id="第34章-陷阱" tabindex="-1"><a class="header-anchor" href="#第34章-陷阱" aria-hidden="true">#</a> 第34章 陷阱</h1><blockquote><p>Turandot: Gli enigmi sono tre, la morte una! Caleph: No, no! Gli enigmi sono tre, una la vita!</p></blockquote><blockquote><p>——Puccini</p></blockquote><h3 id="以下的做法-非推荐-将让你原本平淡无奇的生活激动不已。" tabindex="-1"><a class="header-anchor" href="#以下的做法-非推荐-将让你原本平淡无奇的生活激动不已。" aria-hidden="true">#</a> 以下的做法（非推荐）将让你原本平淡无奇的生活激动不已。</h3><ul><li>将保留字或特殊字符声明为变量名。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">case</span><span class="token operator">=</span>value0       <span class="token comment"># 引发错误。</span>
<span class="token assign-left variable">23skidoo</span><span class="token operator">=</span>value1   <span class="token comment"># 也会引发错误。</span>
<span class="token comment"># 以数字开头的变量名是被shell保留使用的。</span>
<span class="token comment"># 试试_23skidoo=value1。以下划线开头的变量名就没问题.</span>

<span class="token comment"># 然而 . . .   只用一个下划线作为变量名就不行。</span>
<span class="token assign-left variable">_</span><span class="token operator">=</span><span class="token number">25</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>           <span class="token comment"># $_是一个特殊变量, 代表最后一个命令的最后一个参数。</span>
<span class="token comment"># 但是，_是一个有效的函数名！</span>

xyz<span class="token punctuation">((</span><span class="token operator">!</span>*<span class="token operator">=</span>value2    <span class="token comment"># 引起严重的错误。</span>
<span class="token comment"># Bash3.0之后，标点不能出现在变量名中。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用连字符或其他保留字符来做变量名（或函数名）。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>var-1<span class="token operator">=</span><span class="token number">23</span>
<span class="token comment"># 用 &#39;var_1 代替。</span>

function-whatever <span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 错误</span>
<span class="token comment"># 用 ‘function_whatever ()’ 代替。</span>

 
<span class="token comment"># Bash3.0之后，标点不能出现在函数名中。</span>
function.whatever <span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 错误</span>
<span class="token comment"># 用 ‘functionWhatever ()’ 代替。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>让变量名与函数名相同。 这会使得脚本的可读性变得很差。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">do_something</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;This function does something with <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$1</span><span class="token entity" title="\\&quot;">\\&quot;</span>.&quot;</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">do_something</span><span class="token operator">=</span>do_something

do_something do_something

<span class="token comment"># 这么做是合法的，但会让人混淆。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不合时宜的使用[空白符][1]。与其他编程语言相比，Bash非常讲究空白符的使用。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>var1 <span class="token operator">=</span> <span class="token number">23</span>   <span class="token comment"># ‘var1=23’才是正确的。</span>
<span class="token comment"># 对于上边这一行来说，Bash会把“var1”当作命令来执行，</span>
<span class="token comment"># “=”和“23”会被看作“命令”“var1”的参数。</span>
	
<span class="token builtin class-name">let</span> c <span class="token operator">=</span> <span class="token variable">$a</span> - <span class="token variable">$b</span>   <span class="token comment"># ‘let c=$a-$b’或‘let &quot;c = $a - $b&quot;’才是正确的。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-le</span> <span class="token number">5</span><span class="token punctuation">]</span>    <span class="token comment"># if [ $a -le 5 ]   是正确的。</span>
<span class="token comment">#           ^^      if [ &quot;$a&quot; -le 5 ]   这么写更好。</span>
                  <span class="token comment"># [[ $a -le 5 ]] 也行。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在[大括号包含的代码块][2]中，最后一条命令没有以[分号][3]结尾。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token function">ls</span> -l<span class="token punctuation">;</span> <span class="token function">df</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Done.&quot;</span> <span class="token punctuation">}</span>
<span class="token comment"># bash: syntax error: unexpected end of file</span>

<span class="token punctuation">{</span> <span class="token function">ls</span> -l<span class="token punctuation">;</span> <span class="token function">df</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Done.&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">#                        ^     ### 最后的这条命令必须以分号结尾。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>假定未被初始化的变量（赋值前的变量）被“清0”。事实上，未初始化的变量值为“null”，而不是0。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;uninitialized_var = <span class="token variable">$uninitialized_var</span>&quot;</span>
<span class="token comment"># uninitialized_var =</span>

<span class="token comment"># 但是 . . .</span>
<span class="token comment"># if $BASH_VERSION ≥ 4.2; then</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-v</span> uninitialized_var <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token assign-left variable">uninitialized_var</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># Initialize it to zero!</span>
<span class="token keyword">fi</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>混淆测试符号=和-ep。请记住，=用于比较字符变量，而-ep用来比较整数。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token operator">=</span> <span class="token number">273</span> <span class="token punctuation">]</span>      <span class="token comment"># $a是整数还是字符串？</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">273</span> <span class="token punctuation">]</span>    <span class="token comment"># $a为整数。</span>

<span class="token comment"># 有些情况下，即使你混用-ep和=，也不会产生错误的结果。</span>
<span class="token comment"># 然而 . . .</span>


<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">273.0</span>   <span class="token comment"># 不是一个整数。</span>
	   
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token operator">=</span> <span class="token number">273</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Comparison works.&quot;</span>
<span class="token keyword">else</span>  
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Comparison does not work.&quot;</span>
<span class="token keyword">fi</span>    <span class="token comment"># Comparison does not work.</span>

<span class="token comment"># 与a=&quot; 273&quot;和a=&quot;0273&quot;相同。</span>


<span class="token comment"># 类似的， 如果对非整数值使用“-ep”的话，就会产生问题。</span>
	   
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">273.0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>
<span class="token keyword">fi</span>  <span class="token comment"># 产生了错误消息而退出。</span>
<span class="token comment"># test.sh: [: 273.0: integer expression expected</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>误用了[字符串比较][4]操作符。</li></ul><p>样例 34-1. 数字比较与字符串比较并不相同</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># bad-op.sh: 尝试一下对整数使用字符串比较。</span>

<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">#  下面的&quot;while循环&quot;有两个过错误:</span>
<span class="token comment">#+ 一个比较明显，而另一个比较隐蔽。</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">]</span>    <span class="token comment"># 错！应该是:  while [ &quot;$number&quot; -lt 5 ]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$number</span> &quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;number += 1&quot;</span>
<span class="token keyword">done</span>  
<span class="token comment">#  如果试图运行这个错误的脚本，就会得到一个错误信息:</span>
<span class="token comment">#+ bad-op.sh: line 10: 5: No such file or directory</span>
<span class="token comment">#  在单中括号结构（[ ]）中，&quot;&lt;&quot;必须被转义，</span>
<span class="token comment">#+ 即便如此，比较两个整数仍是错误的。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------&quot;</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token punctuation">\\</span><span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">]</span>    <span class="token comment">#  1 2 3 4</span>
<span class="token keyword">do</span>                          <span class="token comment">#</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$number</span> &quot;</span>        <span class="token comment">#  看起来好像可以工作，但是 . . .</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;number += 1&quot;</span>         <span class="token comment">#+ 事实上是比较ASCII码，</span>
  <span class="token keyword">done</span>                      <span class="token comment">#+ 而不是整数比较。</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------&quot;</span>

<span class="token comment"># 这么做会产生问题。比如:</span>

<span class="token assign-left variable">lesser</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">greater</span><span class="token operator">=</span><span class="token number">105</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$greater</span>&quot;</span> <span class="token punctuation">\\</span><span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$lesser</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$greater</span> is less than <span class="token variable">$lesser</span>&quot;</span>
<span class="token keyword">fi</span>                          <span class="token comment"># 105 is less than 5</span>
<span class="token comment">#  事实上，在字符串比较中（按照ASCII码的顺序）</span>
<span class="token comment">#+ &quot;105&quot;小于&quot;5&quot;。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>试图用[let][5]来设置字符串变量。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> <span class="token string">&quot;a = hello, you&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span>   <span class="token comment"># 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>有时候在“test”中括号（[ ]）结构里的变量需要被引用起来（双引号）。如果不这么做的话，可能会引起不可预料的结果。请参考[例子 7-6][6]，[例子 16-5][7]，[例子 9-6][8]。</p></li><li><p>[为防分隔][9]，用双引号引用一个包含空白符的变量。 有些情况下，这会产生[意想不到的后果][10]。</p></li><li><p>脚本中的命令可能会因为脚本宿主不具备相应的运行权限而导致运行失败。如果用户在命令行中不能调用这个命令的话，那么即使把它放到脚本中来运行，也还是会失败。这时可以通过修改命令的属性来解决这个问题，有时候甚至要给它设置suid位(当然, 要以root身份来设置)。</p></li><li><p>试图使用-作为作为重定向操作符（事实上它不是），通常都会导致令人不快的结果。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>command1 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> - <span class="token operator">|</span> command2
<span class="token comment"># 试图将command1的错误输出重定向到一个管道中 . . .</span>
<span class="token comment"># . . . 不会工作。</span>

command1 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&amp;</span> - <span class="token operator">|</span> command2  <span class="token comment"># 也没效果。</span>

感谢，S.C。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用[Bash 2.0或更高版本][11]的功能，可以在产生错误信息的时候，引发修复动作。但是比较老的Linux机器默认安装的可能是Bash 1.XX。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">minimum_version</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token comment"># 因为Chet Ramey经常给Bash添加一些新的特征，</span>
<span class="token comment"># 所以你最好将$minimum_version设置为2.XX，3.XX，或是其他你认为比较合适的值。</span>
<span class="token assign-left variable">E_BAD_VERSION</span><span class="token operator">=</span><span class="token number">80</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$BASH_VERSION</span>&quot;</span> <span class="token punctuation">\\</span><span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$minimum_version</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;This script works only with Bash, version <span class="token variable">$minimum</span> or greater.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Upgrade strongly recommended.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BAD_VERSION</span>
<span class="token keyword">fi</span>

<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>在非Linux机器上的[Bourne shell][12]脚本( <strong>#!/bin/sh</strong> )中使用Bash特有的功能，[可能会引起不可预料的行为][13]。Linux系统通常都会把<strong>bash</strong>别名化为<strong>sh</strong>，但是在一般的UNIX机器上却不一定会这么做。</p></li><li><p>使用Bash未文档化的特征，将是一种危险的举动。本书之前的几个版本就依赖一个这种“特征”，下面说明一下这个“特征”，虽然[exit][14]或[return][15]所能返回的最大正值为255，但是并没有限制我们使用负整数。不幸的是, Bash 2.05b之后的版本，这个漏洞消失了。请参考[例子 24-9][16]。</p></li><li><p>在某些情况下，会返回一个误导性的[退出状态][17]。[设置一个函数内的局部变量][18]或[分配一个算术值给一个变量][19]时，就有可能发生这种情况。</p></li><li><p>[算术表达式的退出状态][20]不等同于一个错误代码。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token variable"><span class="token punctuation">((</span><span class="token operator">--</span>var<span class="token punctuation">))</span></span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$var</span>
<span class="token comment">#        ^^^^^^^^^ 在这里，这个与列表返回错误代码1而终止。</span>
<span class="token comment">#                     不会打印$var的值！</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>   <span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一个带有DOS风格换行符(\\r\\n)的脚本将会运行失败，因为**#!/bin/bash\\r\\n<strong>是不合法的，与我们所期望的</strong>#!/bin/bash\\n**不同，解决办法就是将这个脚本转换为UNIX风格的换行符。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Here&quot;</span>

unix2dos <span class="token variable">$0</span>    <span class="token comment"># 脚本先将自己改为DOS格式。</span>
<span class="token function">chmod</span> <span class="token number">755</span> <span class="token variable">$0</span>   <span class="token comment"># 更改可执行权限。</span>
               <span class="token comment"># &#39;unix2dos&#39;会删除可执行权限</span>

./<span class="token variable">$0</span>           <span class="token comment"># 脚本尝试再次运行自己。</span>
               <span class="token comment"># 但它作为一个DOS文件，已经不能运行了。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;There&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>以**#!/bin/sh<strong>开头的Bash脚本，不能在完整的Bash兼容模式下运行。某些Bash特定的功能可能会被禁用。如果脚本需要完整的访问所有Bash专有扩展，那么它需要使用</strong>#!/bin/bash**作为开头。</p></li><li><p>如果在[here document][21]中，[结尾的limit string之前加上空白字符][22]的话，将会导致脚本的异常行为。</p></li><li><p>在一个[输出被捕获][23]的函数中放置了不止一个echo语句。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">add2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Whatever ... &quot;</span>   <span class="token comment"># 删掉zhehan</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;retval = <span class="token variable">$1</span> + <span class="token variable">$2</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$retval</span>
    <span class="token punctuation">}</span>

    <span class="token assign-left variable">num1</span><span class="token operator">=</span><span class="token number">12</span>
    <span class="token assign-left variable">num2</span><span class="token operator">=</span><span class="token number">43</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sum of <span class="token variable">$num1</span> and <span class="token variable">$num2</span> = <span class="token variable"><span class="token variable">$(</span>add2 $num1 $num2<span class="token variable">)</span></span>&quot;</span>

<span class="token comment">#   Sum of 12 and 43 = Whatever ... </span>
<span class="token comment">#   55</span>

<span class="token comment">#        这些echo连在一起了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是[行不通][24]的。</p><ul><li>脚本不能将变量export到它的[父进程]<a href="%E5%8D%B3%E8%B0%83%E7%94%A8%E8%BF%99%E4%B8%AA%E8%84%9A%E6%9C%AC%E7%9A%84shell">25</a>，或父进程的环境中。就好比我们在生物学中所学到的那样，子进程只会继承父进程, 反过来则不行。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">WHATEVER</span><span class="token operator">=</span>/home/bozo
<span class="token builtin class-name">export</span> WHATEVER
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token variable">$WHATEVER</span>
bash$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>可以确定的是，即使回到命令行提示符，变量$WHATEVER仍然没有被设置。</p></li><li><p>在[子shell][26]中设置和操作变量之后，如果尝试在子shell作用域之外使用同名变量的话, 将会产生令人不快的结果。</p></li></ul><p>样例 34-2. 子shell缺陷</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 子shell中的变量缺陷。</span>

<span class="token assign-left variable">outer_variable</span><span class="token operator">=</span>outer
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;outer_variable = <span class="token variable">$outer_variable</span>&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token punctuation">(</span>
<span class="token comment"># 开始子shell</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;outer_variable inside subshell = <span class="token variable">$outer_variable</span>&quot;</span>
<span class="token assign-left variable">inner_variable</span><span class="token operator">=</span>inner  <span class="token comment"># Set</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;inner_variable inside subshell = <span class="token variable">$inner_variable</span>&quot;</span>
<span class="token assign-left variable">outer_variable</span><span class="token operator">=</span>inner  <span class="token comment"># 会修改全局变量吗？</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;outer_variable inside subshell = <span class="token variable">$outer_variable</span>&quot;</span>

<span class="token comment"># 如果将变量‘导出’会产生不同的结果么？</span>
<span class="token comment">#    export inner_variable</span>
<span class="token comment">#    export outer_variable</span>
<span class="token comment"># 试试看。</span>

<span class="token comment"># 结束子shell</span>
<span class="token punctuation">)</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;inner_variable outside subshell = <span class="token variable">$inner_variable</span>&quot;</span>  <span class="token comment"># Unset.</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;outer_variable outside subshell = <span class="token variable">$outer_variable</span>&quot;</span>  <span class="token comment"># Unchanged.</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># 如果你去掉第19和第20行的注释会怎样？</span>
<span class="token comment"># 会产生不同的结果吗？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将echo的输出通过[管道][27]传递给[read][28]命令可能会产生不可预料的结果。在这种情况下，read命令的行为就好像它在子shell中运行一样。可以使用[set][29]命令来代替(就好像[例子15-18][30]一样)。</li></ul><p>样例 34-3. 将echo的输出通过管道传递给read命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#  badread.sh:</span>
<span class="token comment">#  尝试使用&#39;echo&#39;和&#39;read&#39;命令</span>
<span class="token comment">#+ 非交互的给变量赋值。</span>

<span class="token comment">#   shopt -s lastpipe</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span>aaa
<span class="token assign-left variable">b</span><span class="token operator">=</span>bbb
<span class="token assign-left variable">c</span><span class="token operator">=</span>ccc

<span class="token builtin class-name">echo</span> <span class="token string">&quot;one two three&quot;</span> <span class="token operator">|</span> <span class="token builtin class-name">read</span> a b c
<span class="token comment"># 尝试重新给变量a，b，和c赋值。</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>  <span class="token comment"># a = aaa</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>  <span class="token comment"># b = bbb</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;c = <span class="token variable">$c</span>&quot;</span>  <span class="token comment"># c = ccc</span>
<span class="token comment"># 重新赋值失败。</span>

<span class="token comment">### 但如果 . . .</span>
<span class="token comment">##  去掉第6行的注释:</span>
<span class="token comment">#   shopt -s lastpipe</span>
<span class="token comment">##+ 就能解决这个问题！</span>
<span class="token comment">### 这是Bash 4.2版本的新特性。</span>

<span class="token comment"># ------------------------------</span>

<span class="token comment"># 试试下边这种方法。</span>

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;one two three&quot;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">set</span> -- <span class="token variable">$var</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">$1</span><span class="token punctuation">;</span> <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token variable">$2</span><span class="token punctuation">;</span> <span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;-------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>  <span class="token comment"># a = one</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>  <span class="token comment"># b = two</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;c = <span class="token variable">$c</span>&quot;</span>  <span class="token comment"># c = three </span>
<span class="token comment"># 重新赋值成功。</span>

<span class="token comment"># ------------------------------</span>

<span class="token comment">#  也请注意，echo到&#39;read&#39;的值只会在子shell中起作用。</span>
<span class="token comment">#  所以，变量的值*只*会在子shell中被修改。</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span>aaa          <span class="token comment"># 重新开始。</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span>bbb
<span class="token assign-left variable">c</span><span class="token operator">=</span>ccc

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;one two three&quot;</span> <span class="token operator">|</span> <span class="token punctuation">(</span> <span class="token builtin class-name">read</span> a b c<span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Inside subshell: &quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;c = <span class="token variable">$c</span>&quot;</span> <span class="token punctuation">)</span>
<span class="token comment"># a = one</span>
<span class="token comment"># b = two</span>
<span class="token comment"># c = three</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----------------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Outside subshell: &quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>  <span class="token comment"># a = aaa</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>  <span class="token comment"># b = bbb</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;c = <span class="token variable">$c</span>&quot;</span>  <span class="token comment"># c = ccc</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，也正如Anthony Richardson指出的那样，通过管道将输出传递到任何循环中, 都会引起类似的问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 循环的管道问题。</span>
<span class="token comment">#  这个例子由Anthony Richardson编写，</span>
<span class="token comment">#+ 由Wilbert Berendsen补遗。</span>


<span class="token assign-left variable">foundone</span><span class="token operator">=</span>false
<span class="token function">find</span> <span class="token environment constant">$HOME</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +30 <span class="token parameter variable">-size</span> 100k <span class="token operator">|</span>
<span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
   <span class="token builtin class-name">read</span> f
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$f</span> is over 100KB and has not been accessed in over 30 days&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Consider moving the file to archives.&quot;</span>
   <span class="token assign-left variable">foundone</span><span class="token operator">=</span>true
   <span class="token comment"># ------------------------------------</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;Subshell level = <span class="token variable">$BASH_SUBSHELL</span>&quot;</span>
   <span class="token comment"># Subshell level = 1</span>
   <span class="token comment"># 没错, 现在是在子shell中运行。</span>
   <span class="token comment"># ------------------------------------</span>
<span class="token keyword">done</span>
   
<span class="token comment">#  变量foundone在这里肯定是false，</span>
<span class="token comment">#+ 因为它是在子shell中被设置为true的。</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$foundone</span> <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;No files need archiving.&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># =====================现在，下边是正确的方法:=================</span>

<span class="token assign-left variable">foundone</span><span class="token operator">=</span>false
<span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> <span class="token environment constant">$HOME</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +30 <span class="token parameter variable">-size</span> 100k<span class="token variable">)</span></span>  <span class="token comment"># 这里没使用管道。</span>
<span class="token keyword">do</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$f</span> is over 100KB and has not been accessed in over 30 days&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Consider moving the file to archives.&quot;</span>
   <span class="token assign-left variable">foundone</span><span class="token operator">=</span>true
<span class="token keyword">done</span>
   
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$foundone</span> <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;No files need archiving.&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># ==================这里是另一种方法==================</span>

<span class="token comment">#  将脚本中读取变量的部分放到一个代码块中，</span>
<span class="token comment">#+ 这样一来，它们就能在相同的子shell中共享了。</span>
<span class="token comment">#  感谢，W.B。</span>

<span class="token function">find</span> <span class="token environment constant">$HOME</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +30 <span class="token parameter variable">-size</span> 100k <span class="token operator">|</span> <span class="token punctuation">{</span>
     <span class="token assign-left variable">foundone</span><span class="token operator">=</span>false
     <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f
     <span class="token keyword">do</span>
       <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$f</span> is over 100KB and has not been accessed in over 30 days&quot;</span>
       <span class="token builtin class-name">echo</span> <span class="token string">&quot;Consider moving the file to archives.&quot;</span>
       <span class="token assign-left variable">foundone</span><span class="token operator">=</span>true
     <span class="token keyword">done</span>

     <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token variable">$foundone</span>
     <span class="token keyword">then</span>
       <span class="token builtin class-name">echo</span> <span class="token string">&quot;No files need archiving.&quot;</span>
     <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一个相关的问题：当你尝试将tail -f的stdout通过管道传递给[grep][31]时，会产生问题。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/messages <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable">$ERROR_MSG</span>&quot;</span> <span class="token operator">&gt;&gt;</span> error.log
<span class="token comment">#  “error.log”文件将不会写入任何东西。</span>
<span class="token comment">#  正如Samuli Kaipiainen指出的那样，</span>
<span class="token comment">#+ 这一结果是从grep的缓冲区输出的。</span>
<span class="token comment">#  解决的办法就是把“--line-buffered”参数添加到grep中。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>在脚本中使用“suid”命令是非常危险的，因为这会危及系统安全。<a href="%E5%9C%A8Linux%E5%92%8C%E7%BB%9D%E5%A4%A7%E5%A4%9A%E6%95%B0%E7%9A%84UNIX%E6%9C%BA%E5%99%A8%E4%B8%8A%EF%BC%8C%E7%BB%99%E8%84%9A%E6%9C%AC%E8%AE%BE%E7%BD%AE%5Bsuid%5D%5B36%5D%E6%9D%83%E9%99%90%E6%98%AF%E6%B2%A1%E7%94%A8%E7%9A%84%E3%80%82">^suid</a></p></li><li><p>使用shell脚本来编写CGI程序是值得商榷的。因为Shell脚本的变量不是“类型安全”的，当CGI被关联的时候，可能会产生令人不快的行为。此外，它还很难抵挡住“破解的考验”。</p></li><li><p>Bash不能正确地处理[双斜线(//)字符串][32]。</p></li><li><p>在Linux或BSD上编写的Bash脚本，可能需要修改一下，才能使它们运行在商业的UNIX机器上。这些脚本通常都使用GNU命令和过滤工具，GNU工具通常都比一般的UNIX上的同类工具更加强大。这方面的一个非常明显的例子就是，文本处理工具[tr][33]。</p></li><li><p>遗憾的是，更新Bash本身就会破坏[过去工作完全正常][34]的脚本。让我们回顾一下[使用无正式文件的Bash功能有多危险][35]。</p></li></ul><blockquote><p>危险正在接近你 -- 小心，小心，小心，小心。 许多勇敢的心都在沉睡。 所以一定要小心 -- 小心。</p></blockquote><blockquote><p>——A.J. Lamb and H.W. Petrie [1]: http://tldp.org/LDP/abs/html/special-chars.html#WHITESPACEREF [2]: http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF [3]: http://tldp.org/LDP/abs/html/special-chars.html#SEMICOLONREF [4]: http://tldp.org/LDP/abs/html/comparison-ops.html#SCOMPARISON1 [5]: http://tldp.org/LDP/abs/html/internal.html#LETREF [6]: http://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST [7]: http://tldp.org/LDP/abs/html/redircb.html#REDIR2 [8]: http://tldp.org/LDP/abs/html/internalvariables.html#ARGLIST [9]: http://tldp.org/LDP/abs/html/quotingvar.html#WSQUO [10]: http://tldp.org/LDP/abs/html/quotingvar.html#VARSPLITTING [11]: http://tldp.org/LDP/abs/html/bashver2.html#BASH2REF [12]: http://tldp.org/LDP/abs/html/why-shell.html#BASHDEF [13]: http://tldp.org/LDP/abs/html/gotchas.html#BINSH [14]: http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF [15]: http://tldp.org/LDP/abs/html/complexfunct.html#RETURNREF [16]: http://tldp.org/LDP/abs/html/complexfunct.html#RETURNTEST [17]: http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF [18]: http://tldp.org/LDP/abs/html/localvar.html#EXITVALANOMALY01 [19]: http://tldp.org/LDP/abs/html/internal.html#EXITVALANOMALY02 [20]: http://tldp.org/LDP/abs/html/testconstructs.html#ARXS [21]: http://tldp.org/LDP/abs/html/here-docs.html#HEREDOCREF [22]: http://tldp.org/LDP/abs/html/here-docs.html#INDENTEDLS [23]: http://tldp.org/LDP/abs/html/assortedtips.html#RVT [24]: http://tldp.org/LDP/abs/html/assortedtips.html#RVTCAUTION [25]: http://tldp.org/LDP/abs/html/internal.html#FORKREF [26]: http://tldp.org/LDP/abs/html/subshells.html#SUBSHELLSREF [27]: http://tldp.org/LDP/abs/html/special-chars.html#PIPEREF [28]: http://tldp.org/LDP/abs/html/internal.html#READREF [29]: http://tldp.org/LDP/abs/html/internal.html#SETREF [30]: http://tldp.org/LDP/abs/html/internal.html#SETPOS [31]: http://tldp.org/LDP/abs/html/textproc.html#GREPREF [32]: http://tldp.org/LDP/abs/html/internal.html#DOUBLESLASHREF [33]: http://tldp.org/LDP/abs/html/textproc.html#TRREF [34]: http://tldp.org/LDP/abs/html/string-manipulation.html#PARAGRAPHSPACE [35]: http://tldp.org/LDP/abs/html/gotchas.html#UNDOCF [36]: http://tldp.org/LDP/abs/html/fto.html#SUIDREF</p></blockquote><h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h4>`,51),t=[i];function p(o,c){return n(),a("div",null,t)}const u=s(l,[["render",p],["__file","34_Gotchas.html.vue"]]);export{u as default};
