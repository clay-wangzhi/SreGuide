import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as t,a as s,b as n,d as c,e as p}from"./app-8ee9ded0.js";const o={},u=p(`<h1 id="_11-4-测试与分支" tabindex="-1"><a class="header-anchor" href="#_11-4-测试与分支" aria-hidden="true">#</a> 11.4 测试与分支</h1><p><code>case</code> 和 <code>select</code> 结构并不属于循环结构，因为它们并没有反复执行代码块。但是和循环结构相似的是，它们会根据代码块顶部或尾部的条件控制程序流。</p><p>下面介绍两种在代码块中控制程序流的方法：</p><h3 id="case-in-esac" tabindex="-1"><a class="header-anchor" href="#case-in-esac" aria-hidden="true">#</a> <code>case (in)</code> / <code>esac</code></h3><p>在 shell 脚本中，<code>case</code> 模拟了 C/C++ 语言中的 <code>switch</code>，可以根据条件跳转到其中一个分支。其相当于简写版的 <code>if/then/else</code> 语句。很适合用来创建菜单选项哟！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token string">&quot;<span class="token variable">$condition1</span>&quot;</span> <span class="token punctuation">)</span>
    command<span class="token punctuation">..</span>.
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token string">&quot;<span class="token variable">$condition2</span>&quot;</span> <span class="token punctuation">)</span>
    command<span class="token punctuation">..</span>.
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"></p><ul><li><p>对变量进行引用不是必须的，因为在这里不会进行字符分割。</p></li><li><p>条件测试语句必须以右括号 ) 结束。[^1]</p></li><li><p>每一段代码块都必须以双分号 ;; 结束。</p></li><li><p>如果测试条件为真，其对应的代码块将被执行，而后整个 <code>case</code> 代码段结束执行。</p></li><li><p><code>case</code> 代码段必须以 <code>esac</code> 结束（倒着拼写case）。</p></li></ul></blockquote><p>样例 11-25. 如何使用 <code>case</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 测试字符的种类。</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hit a key, then hit return.&quot;</span>
<span class="token builtin class-name">read</span> Keypress

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$Keypress</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span><span class="token punctuation">]</span>   <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Lowercase letter&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span>   <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Uppercase letter&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>         <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Digit&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  *             <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Punctuation, whitespace, or other&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>      <span class="token comment">#  字符范围可以用[方括号]表示，也可以用 POSIX 形式的[[双方括号]]表示。</span>

<span class="token comment"># 在这个例子的第一个版本中，用来测试是小写还是大写字符使用的是 [a-z] 和 [A-Z]。</span>
<span class="token comment"># 这在一些特定的语言环境和 Linux 发行版中不起效。</span>
<span class="token comment"># POSIX 形式具有更好的兼容性。</span>
<span class="token comment"># 感谢 Frank Wang 指出这一点。</span>

<span class="token comment"># 练习：</span>
<span class="token comment"># -----</span>
<span class="token comment"># 这个脚本接受一个单字符然后结束。</span>
<span class="token comment"># 修改脚本，使得其可以循环接受输入，并且检测键入的每一个字符，直到键入 &quot;X&quot; 为止。</span>
<span class="token comment"># 提示：将所有东西包在 &quot;while&quot; 中。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 11-26. 使用 <code>case</code> 创建菜单</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 简易的通讯录数据库</span>

<span class="token function">clear</span> <span class="token comment"># 清屏。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;          Contact List&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;          ------- ----&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Choose one of the following persons:&quot;</span> 
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[E]vans, Roland&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[J]ones, Mildred&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[S]mith, Julie&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[Z]ane, Morris&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">read</span> person

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$person</span>&quot;</span> <span class="token keyword">in</span>
<span class="token comment"># 注意变量是被引用的。</span>

  <span class="token string">&quot;E&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;e&quot;</span> <span class="token punctuation">)</span>
  <span class="token comment"># 同时接受大小写的输入。</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Roland Evans&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;4321 Flash Dr.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hardscrabble, CO 80753&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(303) 734-9874&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(303) 734-9892 fax&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;revans@zzy.net&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Business partner &amp; old friend&quot;</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token comment"># 注意用双分号结束这一个选项。</span>

  <span class="token string">&quot;J&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;j&quot;</span> <span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Mildred Jones&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;249 E. 7th St., Apt. 19&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;New York, NY 10009&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(212) 533-2814&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(212) 533-9972 fax&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;milliej@loisaida.com&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Ex-girlfriend&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Birthday: Feb. 11&quot;</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  
  <span class="token comment"># Smith 和 Zane 的信息稍后添加。</span>

  *         <span class="token punctuation">)</span>
  <span class="token comment"># 缺省设置。</span>
  <span class="token comment"># 空输入（直接键入回车）也是执行这一部分。</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Not yet in database.&quot;</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  
<span class="token keyword">esac</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 练习：</span>
<span class="token comment"># -----</span>
<span class="token comment"># 修改脚本，使得其可以循环接受多次输入而不是只显示一个地址后终止脚本。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以用 <code>case</code> 来检测命令行参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable">\${0<span class="token operator">##</span>*<span class="token operator">/</span>}</span> &lt;filename&gt;&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token variable">$E_PARAM</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
                      <span class="token comment"># 没有命令行参数，或者第一个参数为空。</span>
                      <span class="token comment"># 注意 \${0##*/} 是参数替换 \${var##pattern} 的一种形式。</span>
                      <span class="token comment"># 最后的结果是 $0.</span>
  
  -*<span class="token punctuation">)</span> <span class="token assign-left variable">FILENAME</span><span class="token operator">=</span>./<span class="token variable">$1</span><span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token comment">#  如果传入的参数以短横线开头，那么将其替换为 ./$1</span>
                      <span class="token comment">#+ 以避免后续的命令将其解释为一个选项。</span>
  
  * <span class="token punctuation">)</span> <span class="token assign-left variable">FILENAME</span><span class="token operator">=</span><span class="token variable">$1</span><span class="token punctuation">;</span><span class="token punctuation">;</span>   <span class="token comment"># 否则赋值为 $1。</span>
<span class="token keyword">esac</span>                  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个更加直观的处理命令行参数的例子：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>    <span class="token comment"># 遍历完所有参数</span>
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    -d<span class="token operator">|</span>--debug<span class="token punctuation">)</span>
              <span class="token comment"># 检测是否是 &quot;-d&quot; 或者 &quot;--debug&quot;。</span>
              <span class="token assign-left variable">DEBUG</span><span class="token operator">=</span><span class="token number">1</span>
              <span class="token punctuation">;</span><span class="token punctuation">;</span>
    -c<span class="token operator">|</span>--conf<span class="token punctuation">)</span>
              <span class="token assign-left variable">CONFFILE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
              <span class="token builtin class-name">shift</span>
              <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token variable">$CONFFILE</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;Error: Supplied file doesn&#39;t exist!&quot;</span>
                <span class="token builtin class-name">exit</span> <span class="token variable">$E_CONFFILE</span>     <span class="token comment"># 找不到文件。</span>
              <span class="token keyword">fi</span>
              <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  <span class="token builtin class-name">shift</span>       <span class="token comment"># 检测下一个参数</span>
<span class="token keyword">done</span>

<span class="token comment"># 摘自 Stefano Falsetto 的 &quot;Log2Rot&quot; 脚本中 &quot;rottlog&quot; 包的一部分。</span>
<span class="token comment"># 已授权使用。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 11-27. 使用命令替换生成 <code>case</code> 变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># case-cmd.sh: 使用命令替换生成 &quot;case&quot; 变量。</span>

<span class="token keyword">case</span> <span class="token variable"><span class="token variable">$(</span> arch <span class="token variable">)</span></span> <span class="token keyword">in</span>   <span class="token comment"># $( arch ) 返回设备架构。</span>
                    <span class="token comment"># 等价于 &#39;uname -m&quot;。</span>
  i386 <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;80386-based machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  i486 <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;80486-based machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  i586 <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pentium-based machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  i686 <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Pentium2+-based machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  *    <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Other type of machine&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>case</code> 还可以用来做字符串模式匹配。</p><p>样例 11-28. 简单的字符串匹配</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># match-string.sh: 使用 &#39;case&#39; 结构进行简单的字符串匹配。</span>

<span class="token function-name function">match_string</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span> <span class="token comment"># 字符串精确匹配。</span>
  <span class="token assign-left variable">MATCH</span><span class="token operator">=</span><span class="token number">0</span>
  <span class="token assign-left variable">E_NOMATCH</span><span class="token operator">=</span><span class="token number">90</span>
  <span class="token assign-left variable">PARAMS</span><span class="token operator">=</span><span class="token number">2</span>     <span class="token comment"># 需要2个参数。</span>
  <span class="token assign-left variable">E_BAD_PARAMS</span><span class="token operator">=</span><span class="token number">91</span>
  
  <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token variable">$PARAMS</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$E_BAD_PARAMS</span>
  
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$MATCH</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    *   <span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$E_NOMATCH</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  
<span class="token punctuation">}</span>


<span class="token assign-left variable">a</span><span class="token operator">=</span>one
<span class="token assign-left variable">b</span><span class="token operator">=</span>two
<span class="token assign-left variable">c</span><span class="token operator">=</span>three
<span class="token assign-left variable">d</span><span class="token operator">=</span>two

match_string <span class="token variable">$a</span>     <span class="token comment"># 参数个数不够</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>             <span class="token comment"># 91</span>

match_string <span class="token variable">$a</span> <span class="token variable">$b</span>  <span class="token comment"># 匹配不到</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>             <span class="token comment"># 90</span>

match_string <span class="token variable">$a</span> <span class="token variable">$d</span>  <span class="token comment"># 匹配成功</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>             <span class="token comment"># 0</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 11-29. 检查输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># isaplpha.sh: 使用 &quot;case&quot; 结构检查输入。</span>

<span class="token assign-left variable">SUCCESS</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">FAILURE</span><span class="token operator">=</span><span class="token number">1</span>   <span class="token comment">#  以前是FAILURE=-1,</span>
            <span class="token comment">#+ 但现在 Bash 不允许返回负值。</span>

isalpha <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 测试字符串的第一个字符是否是字母。</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>                <span class="token comment"># 检测是否传入参数。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span>
<span class="token keyword">fi</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token punctuation">[</span>a-zA-Z<span class="token punctuation">]</span>*<span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$SUCCESS</span><span class="token punctuation">;</span><span class="token punctuation">;</span>  <span class="token comment"># 是否以字母形式开始？</span>
  *        <span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token punctuation">}</span>             <span class="token comment"># 可以与 C 语言中的函数 &quot;isalpha ()&quot; 作比较。</span>


isalpha2 <span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 测试整个字符串是否都是字母。</span>
<span class="token punctuation">{</span>
  <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span>
  
  <span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  *<span class="token punctuation">[</span><span class="token operator">!</span>a-zA-Z<span class="token punctuation">]</span>*<span class="token operator">|</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
               *<span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$SUCCESS</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token punctuation">}</span>

isdigit <span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 测试整个字符串是否都是数字。</span>
<span class="token punctuation">{</span>             <span class="token comment"># 换句话说，也就是测试是否是一个整型变量。</span>
  <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span>
  
  <span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
    *<span class="token punctuation">[</span><span class="token operator">!</span><span class="token number">0</span>-9<span class="token punctuation">]</span>*<span class="token operator">|</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$FAILURE</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
              *<span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token variable">$SUCCESS</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token punctuation">}</span>



check_var <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 包装后的 isalpha ()。</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span> isalpha <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> begins with an alpha character.&quot;</span>
  <span class="token keyword">if</span> isalpha2 <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
  <span class="token keyword">then</span>        <span class="token comment"># 其实没必要检查第一个字符是不是字母。</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> contains only alpha characters.&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> contains at least one non-alpha character.&quot;</span>
  <span class="token keyword">fi</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> begins with a non-alpha character.&quot;</span>
              <span class="token comment"># 如果没有传入参数同样同样返回“存在非字母”。</span>
<span class="token keyword">fi</span>
  
<span class="token builtin class-name">echo</span>
  
<span class="token punctuation">}</span>

digit_check <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 包装后的 isdigit ()。</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span> isdigit <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> contains only digits [0 - 9].&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span> has at least one non-digit character.&quot;</span>
<span class="token keyword">fi</span>
  
<span class="token builtin class-name">echo</span>
  
<span class="token punctuation">}</span>


<span class="token assign-left variable">a</span><span class="token operator">=</span>23skidoo
<span class="token assign-left variable">b</span><span class="token operator">=</span>H3llo
<span class="token assign-left variable">c</span><span class="token operator">=</span>-What?
<span class="token assign-left variable">d</span><span class="token operator">=</span>What?
<span class="token assign-left variable">e</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $b<span class="token variable">)</span></span>   <span class="token comment"># 命令替换。</span>
<span class="token assign-left variable">f</span><span class="token operator">=</span>AbcDef
<span class="token assign-left variable">g</span><span class="token operator">=</span><span class="token number">27234</span>
<span class="token assign-left variable">h</span><span class="token operator">=</span>27a34
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">27.34</span>

check_var <span class="token variable">$a</span>
check_var <span class="token variable">$b</span>
check_var <span class="token variable">$c</span>
check_var <span class="token variable">$d</span>
check_var <span class="token variable">$e</span>
check_var <span class="token variable">$f</span>
check_var     <span class="token comment"># 如果不传入参数会发送什么？</span>
<span class="token comment">#</span>
digit_check <span class="token variable">$g</span>
digit_check <span class="token variable">$h</span>
digit_check <span class="token variable">$i</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>        <span class="token comment"># S.C. 改进了本脚本。</span>

<span class="token comment"># 练习：</span>
<span class="token comment"># -----</span>
<span class="token comment"># 写一个函数 &#39;isfloat ()&#39; 来检测输入值是否是浮点数。</span>
<span class="token comment"># 提示：可以参考函数 &#39;isdigit ()&#39;，在其中加入检测合法的小数点即可。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> <code>select</code></h3><p><code>select</code> 结构是学习自 Korn Shell。其同样可以用来构建菜单。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">select</span> variable <span class="token punctuation">[</span>in list<span class="token punctuation">]</span>
<span class="token keyword">do</span>
 command<span class="token punctuation">..</span>.
 <span class="token builtin class-name">break</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而效果则是终端会提示用户输入列表中的一个选项。注意，<code>select</code> 默认使用提示字串3（Prompt String 3，<code>$PS3</code>, 即#?），但同样可以被修改。</p><p>样例 11-30. 使用 <code>select</code> 创建菜单</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable"><span class="token environment constant">PS3</span></span><span class="token operator">=</span><span class="token string">&#39;Choose your favorite vegetable: &#39;</span> <span class="token comment"># 设置提示字串。</span>
                                       <span class="token comment"># 否则默认为 #?。</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">select</span> <span class="token for-or-select variable">vegetable</span> <span class="token keyword">in</span> <span class="token string">&quot;beans&quot;</span> <span class="token string">&quot;carrots&quot;</span> <span class="token string">&quot;potatoes&quot;</span> <span class="token string">&quot;onions&quot;</span> <span class="token string">&quot;rutabagas&quot;</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite veggie is <span class="token variable">$vegetable</span>.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Yuck!&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">break</span>  <span class="token comment"># 如果没有 &#39;break&#39; 会发生什么？</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span>

<span class="token comment"># 练习:</span>
<span class="token comment"># -----</span>
<span class="token comment"># 修改脚本，使得其可以接受其他输入而不是 &quot;select&quot; 语句中所指定的。</span>
<span class="token comment"># 例如，如果用户输入 &quot;peas,&quot;，那么脚本会通知用户 &quot;Sorry. That is not on the menu.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <em>in list</em> 被省略，那么 <code>select</code> 将会使用传入脚本的命令行参数（<code>$@</code>）或者传入函数的参数作为 <em>list</em>。</p><p>可以与 <code>for variable [in list]</code> 中 <em>in list</em> 被省略的情况做比较。</p><p>样例 11-31. 在函数中使用 <code>select</code> 创建菜单</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable"><span class="token environment constant">PS3</span></span><span class="token operator">=</span><span class="token string">&#39;Choose your favorite vegetable: &#39;</span>

<span class="token builtin class-name">echo</span>

<span class="token function-name function">choice_of</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">select</span> vegetable
<span class="token comment"># [in list] 被省略，因此 &#39;select&#39; 将会使用传入函数的参数作为 list。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite veggie is <span class="token variable">$vegetable</span>.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Yuck!&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">break</span>
<span class="token keyword">done</span>
<span class="token punctuation">}</span>

choice_of beans rice carrorts radishes rutabaga spinach
<span class="token comment">#         $1    $2   $3      $4       $5       $6</span>
<span class="token comment">#         传入了函数 choice_of()</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),d={href:"http://tldp.org/LDP/abs/html/bashver2.html#RESISTOR",target:"_blank",rel:"noopener noreferrer"},r=s("p",null,[n("[^1]: 在写匹配行的时候，可以在左边加上左括号 (，使整个结构看起来更加优雅。"),s("pre",null,[n("case $( arch ) in   # $( arch ) 返回设备架构。"),s("br"),n('  ( i386 ) echo "80386-based machine";;'),s("br"),n("# ^      ^"),s("br"),n('  ( i486 ) echo "80486-based machine";;'),s("br"),n('  ( i586 ) echo "Pentium-based machine";;'),s("br"),n('  ( i686 ) echo "Pentium2+-based machine";;'),s("br"),n('  (    * ) echo "Other type of machine";;'),s("br"),n("esac")])],-1);function v(k,m){const a=i("ExternalLinkIcon");return l(),t("div",null,[u,s("p",null,[n("还可以参照 "),s("a",d,[n("样例37-3"),c(a)]),n("。")]),r])}const g=e(o,[["render",v],["__file","11_4_testing_and_branching.html.vue"]]);export{g as default};
