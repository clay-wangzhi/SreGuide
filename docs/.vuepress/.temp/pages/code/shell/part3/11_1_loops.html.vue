<template><div><h1 id="_11-1-循环" tabindex="-1"><a class="header-anchor" href="#_11-1-循环" aria-hidden="true">#</a> 11.1 循环</h1>
<p>循环是当循环控制条件为真时，一系列命令迭代<a href="%E8%BF%AD%E4%BB%A3%EF%BC%9A%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%B8%80%E4%B8%AA%E6%88%96%E4%B8%80%E7%BB%84%E5%91%BD%E4%BB%A4%E3%80%82%E9%80%9A%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E4%BC%9A%E4%BD%BF%E7%94%A8%60while%60%E6%88%96%E8%80%85%60until%60%E8%BF%9B%E8%A1%8C%E6%8E%A7%E5%88%B6%E3%80%82">^1</a>执行的代码块。</p>
<h3 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h3>
<p><code v-pre>for arg in [list]</code></p>
<p>这是 shell 中最基本的循环结构，它与C语言形式的循环有着明显的不同。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token punctuation">[</span>list<span class="token punctuation">]</span>
<span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"> 在循环的过程中，<code v-pre>arg</code> 会从 <code v-pre>list</code> 中连续获得每一个变量的值。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">$var1</span>"</span> <span class="token string">"<span class="token variable">$var2</span>"</span> <span class="token string">"<span class="token variable">$var3</span>"</span> <span class="token punctuation">..</span>. <span class="token string">"<span class="token variable">$varN</span>"</span>
<span class="token comment"># 第一次循环中，arg = $var1</span>
<span class="token comment"># 第二次循环中，arg = $var2</span>
<span class="token comment"># 第三次循环中，arg = $var3</span>
<span class="token comment"># ...</span>
<span class="token comment"># 第 N 次循环中，arg = $varN</span>
<span class="token operator">></span>
<span class="token comment"># 为了防止可能的字符分割问题，[list] 中的参数都需要被引用。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数 list 中允许含有 <a href="http://tldp.org/LDP/abs/html/special-chars.html#ASTERISKREF" target="_blank" rel="noopener noreferrer">通配符<ExternalLinkIcon/></a>。</p>
<p>如果 <code v-pre>do</code> 和 <code v-pre>for</code> 写在同一行时，需要在 list 之后加上一个分号。</p>
<p><code v-pre>for arg in [list] ; do</code></p>
<p>样例 11-1. 简单的 for 循环</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 列出太阳系的所有行星。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">planet</span> <span class="token keyword">in</span> Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$planet</span>  <span class="token comment"># 每一行输出一个行星。</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">planet</span> <span class="token keyword">in</span> <span class="token string">"Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto"</span>
    <span class="token comment"># 所有的行星都输出在一行上。</span>
    <span class="token comment"># 整个 'list' 被包裹在引号中时是作为一个单一的变量。</span>
    <span class="token comment"># 为什么？因为空格也是变量的一部分。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$planet</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">"Whoops! Pluto is no longer a planet!"</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[list] 中的每一个元素中都可能含有多个参数。这在处理参数组中非常有用。在这种情况下，使用 <a href="http://tldp.org/LDP/abs/html/internal.html#SETREF" target="_blank" rel="noopener noreferrer"><code v-pre>set</code><ExternalLinkIcon/></a> 命令（查看 <a href="http://tldp.org/LDP/abs/html/internal.html#EX34" target="_blank" rel="noopener noreferrer">样例 15-16<ExternalLinkIcon/></a>）强制解析 [list] 中的每一个元素，并将元素的每一个部分分配给位置参数。</p>
<p>样例 11-2. <code v-pre>for</code> 循环 [list] 中的每一个变量有两个参数的情况</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 让行星再躺次枪。</span>

<span class="token comment"># 将每个行星与其到太阳的距离放在一起。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">planet</span> <span class="token keyword">in</span> <span class="token string">"Mercury 36"</span> <span class="token string">"Venus 67"</span> <span class="token string">"Earth 93"</span> <span class="token string">"Mars 142"</span> <span class="token string">"Jupiter 483"</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">set</span> -- <span class="token variable">$planet</span>  <span class="token comment">#  解析变量 "planet"</span>
                  <span class="token comment">#+ 并将其每个部分赋值给位置参数。</span>
  <span class="token comment"># "--" 防止一些极端情况，比如 $planet 为空或者以破折号开头。</span>
  
  <span class="token comment"># 因为位置参数会被覆盖掉，因此需要先保存原先的位置参数。</span>
  <span class="token comment"># 你可以使用数组来保存</span>
  <span class="token comment">#         original_params=("$@")</span>
  
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$1</span>		<span class="token variable">$2</span>,000,000 miles from the sum"</span>
  <span class="token comment">#-------两个制表符---将后面的一系列 0 连到参数 $2 上。</span>
<span class="token keyword">done</span>

<span class="token comment"># （感谢 S.C. 做出的额外注释。）</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个单一变量也可以成为 <code v-pre>for</code> 循环中的 [list]。</p>
<p>样例 11-3. 文件信息：查看一个单一变量中含有的文件列表的文件信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># fileinfo.sh</span>

<span class="token assign-left variable">FILES</span><span class="token operator">=</span><span class="token string">"/usr/sbin/accept
/usr/sbin/pwck
/usr/sbin/chroot
/usr/bin/fakefile
/sbin/badblocks
/sbin/ypbind"</span>     <span class="token comment"># 你可能会感兴趣的一系列文件。</span>
                  <span class="token comment"># 包含一个不存在的文件，/usr/bin/fakefile。</span>
                  
<span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$FILES</span>
<span class="token keyword">do</span>

  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token string">"<span class="token variable">$file</span>"</span> <span class="token punctuation">]</span>       <span class="token comment"># 检查文件是否存在。</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$file</span> does not exist."</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">continue</span>                <span class="token comment"># 继续判断下一个文件。</span>
  <span class="token keyword">fi</span>
  
  <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token variable">$file</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{ print $8 "         file size: " $5 }'</span>  <span class="token comment"># 输出其中的两个域。</span>
  whatis <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $file<span class="token variable">`</span></span>   <span class="token comment"># 文件信息。</span>
  <span class="token comment"># 脚本正常运行需要注意提前设置好 whatis 的数据。</span>
  <span class="token comment"># 使用 root 权限运行 /usr/bin/makewhatis 可以完成。</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>for</code> 循环中的 [list] 可以是一个参数。</p>
<p>样例 11-4. 操作含有一系列文件的参数</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">"*txt"</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$filename</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"Contents of <span class="token variable">$file</span>"</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"---"</span>
 <span class="token function">cat</span> <span class="token string">"<span class="token variable">$file</span>"</span>
 <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在匹配文件扩展名的 <code v-pre>for</code> 循环中的 [list] 含有通配符（* 和 ?），那么将会进行文件名扩展。</p>
<p>样例 11-5. 在 <code v-pre>for</code> 循环中操作文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># list-glob.sh: 通过文件名扩展在 for 循环中产生 [list]。</span>
<span class="token comment"># 通配 = 文件名扩展。</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> *
<span class="token comment">#           ^  Bash 在检测到通配表达式时，</span>
<span class="token comment">#+             会进行文件名扩展。</span>
<span class="token keyword">do</span>
  <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token string">"<span class="token variable">$file</span>"</span>  <span class="token comment"># 列出 $PWD（当前工作目录）下的所有文件。</span>
  <span class="token comment">#  回忆一下，通配符 "*" 会匹配所有的文件名，</span>
  <span class="token comment">#+ 但是，在文件名扩展中，他将不会匹配以点开头的文件。</span>
  
  <span class="token comment">#  如果没有匹配到文件，那么它将会扩展为它自身。</span>
  <span class="token comment">#  为了防止出现这种情况，需要设置 nullglob 选项。</span>
  <span class="token comment">#+    (shopt -s nullglob)。</span>
  <span class="token comment">#  感谢 S.C.</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token punctuation">[</span>jx<span class="token punctuation">]</span>*
<span class="token keyword">do</span>
  <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$file</span>    <span class="token comment"># 删除当前目录下所有以 "j" 或 "x" 开头的文件。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Removed file <span class="token entity" title="\&quot;">\"</span><span class="token variable">$file</span><span class="token entity" title="\&quot;">\"</span>"</span><span class="token builtin class-name">.</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在 <code v-pre>for</code> 循环中省略 <code v-pre>in [list]</code> 部分，那么循环将会遍历位置参数（<code v-pre>$@</code>）。<a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#PRIMES" target="_blank" rel="noopener noreferrer">样例 A-15<ExternalLinkIcon/></a> 中使用到了这一点。也可以查看 <a href="http://tldp.org/LDP/abs/html/internal.html#REVPOSPARAMS" target="_blank" rel="noopener noreferrer">样例 15-17<ExternalLinkIcon/></a>。</p>
<p>样例 11-6. 缺少 <code v-pre>in [list]</code> 的 <code v-pre>for</code> 循环</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 尝试在带参数和不带参数两种情况下调用这个脚本，观察发生了什么。</span>

<span class="token keyword">for</span> a
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span> "</span>
<span class="token keyword">done</span>

<span class="token comment">#  缺失 'in list' 的情况下，循环会遍历 '$@'</span>
<span class="token comment">#+（命令行参数列表，包括空格）。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在 <code v-pre>for</code> 循环中使用 <a href="http://tldp.org/LDP/abs/html/commandsub.html#COMMANDSUBREF" target="_blank" rel="noopener noreferrer">命令代换<ExternalLinkIcon/></a> 生成 [list]。查看 <a href="http://tldp.org/LDP/abs/html/extmisc.html#EX53" target="_blank" rel="noopener noreferrer">样例 16-54<ExternalLinkIcon/></a>，<a href="http://tldp.org/LDP/abs/html/loops1.html#SYMLINKS" target="_blank" rel="noopener noreferrer">样例 11-11<ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/mathc.html#BASE" target="_blank" rel="noopener noreferrer">样例 16-48<ExternalLinkIcon/></a>。</p>
<p>样例 11-7. 在 <code v-pre>for</code> 循环中使用命令代换生成 [list]</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># for-loopcmd.sh: 带命令代换所生成 [list] 的 for 循环</span>

<span class="token assign-left variable">NUMBERS</span><span class="token operator">=</span><span class="token string">"9 7 3 8 37.53"</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">number</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> $NUMBERS<span class="token variable">`</span></span>  <span class="token comment"># for number in 9 7 3 8 37.53</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$number</span> "</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是使用命令代换生成 [list] 的更加复杂的例子。</p>
<p>样例 11-8. 一种替代 <code v-pre>grep</code> 搜索二进制文件的方法</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># bin-grep.sh: 在二进制文件中定位匹配的字符串。</span>

<span class="token comment"># 一种替代 `grep` 搜索二进制文件的方法</span>
<span class="token comment"># 与 "grep -a" 的效果类似</span>

<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">65</span>
<span class="token assign-left variable">E_NOFILE</span><span class="token operator">=</span><span class="token number">66</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Usage: <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span> search_string filename"</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">"<span class="token variable">$2</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"File <span class="token entity" title="\&quot;">\"</span><span class="token variable">$2</span><span class="token entity" title="\&quot;">\"</span> does not exist."</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOFILE</span>
<span class="token keyword">fi</span>


<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$'<span class="token entity" title="\012">\012</span>'</span>       <span class="token comment"># 按照 Anton Filippov 的意见应该是</span>
                  <span class="token comment"># IFS="\n"</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">word</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> strings <span class="token string">"<span class="token variable">$2</span>"</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token variable">)</span></span>
<span class="token comment"># "strings" 命令列出二进制文件中的所有字符串。</span>
<span class="token comment"># 将结果通过管道输出到 "grep" 中，检查是不是匹配的字符串。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$word</span>
<span class="token keyword">done</span>

<span class="token comment"># 就像 S.C. 指出的那样，第 23-30 行可以换成下面的形式：</span>
<span class="token comment">#    strings "$2" | grep "$1" | tr -s "$IFS" '[\n*]'</span>


<span class="token comment"># 尝试运行脚本 "./bin-grep.sh mem /bin/ls"</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子同样展示了如何使用命令代换生成 [list]。</p>
<p>样例 11-9. 列出系统中的所有用户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># userlist.sh</span>

<span class="token assign-left variable">PASSWORD_FILE</span><span class="token operator">=</span>/etc/passwd
<span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">1</span>           <span class="token comment"># 用户数量</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">name</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'BEGIN{fs=":"}{print $1}'</span> <span class="token operator">&lt;</span> <span class="token string">"<span class="token variable">$PASSWORD_FILE</span>"</span> <span class="token variable">)</span></span>
<span class="token comment"># 分隔符 = :              ^^^^^^</span>
<span class="token comment"># 输出第一个域                    ^^^^^^^^</span>
<span class="token comment"># 读取密码文件 /etc/passwd                    ^^^^^^^^^^^^^^^^^</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"USER #<span class="token variable">$n</span> = <span class="token variable">$name</span>"</span>
  <span class="token builtin class-name">let</span> <span class="token string">"n += 1"</span>
<span class="token keyword">done</span>


<span class="token comment"># USER #1 = root</span>
<span class="token comment"># USER #2 = bin</span>
<span class="token comment"># USER #3 = daemon</span>
<span class="token comment"># ...</span>
<span class="token comment"># USER #33 = bozo</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment"># 讨论：</span>
<span class="token comment"># -----</span>
<span class="token comment"># 一个普通用户是如何读取 /etc/passwd 文件的？</span>
<span class="token comment"># 提示：检查 /etc/passwd 的文件权限。</span>
<span class="token comment"># 这算不算是一个安全漏洞？为什么？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一个关于 [list] 的例子也来自于命令代换。</p>
<p>样例 11-10. 检查目录中所有二进制文件的原作者</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># findstring.sh</span>
<span class="token comment"># 在指定目录的二进制文件中寻找指定的字符串。</span>

<span class="token assign-left variable">directory</span><span class="token operator">=</span>/usr/bin
<span class="token assign-left variable">fstring</span><span class="token operator">=</span><span class="token string">"Free Software Foundation"</span>  <span class="token comment"># 查看哪些文件来自于 FSF。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">'*'</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token variable">)</span></span>
<span class="token keyword">do</span>
  strings <span class="token parameter variable">-f</span> <span class="token variable">$file</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"<span class="token variable">$fstring</span>"</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">"s%<span class="token variable">$driectory</span>%%"</span>
  <span class="token comment">#  在 "sed" 表达式中，你需要替换掉 "/" 分隔符，</span>
  <span class="token comment">#+ 因为 "/" 是一个会被过滤的字符。</span>
  <span class="token comment">#  如果不做替换，将会产生一个错误。（你可以尝试一下。）</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment"># 简单的练习：</span>
<span class="token comment"># ----------</span>
<span class="token comment"># 修改脚本，使其可以从命令行参数中获取 $directory 和 $fstring。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后一个关于 [list] 和命令代换的例子，但这个例子中的命令是一个<a href="http://tldp.org/LDP/abs/html/functions.html#FUNCTIONREF" target="_blank" rel="noopener noreferrer">函数<ExternalLinkIcon/></a>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function-name function">generate_list</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"one two three"</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">word</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span>generate_list<span class="token variable">)</span></span>  <span class="token comment"># "word" 获得函数执行的结果。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$word</span>"</span>
<span class="token keyword">done</span>

<span class="token comment"># one</span>
<span class="token comment"># two</span>
<span class="token comment"># three</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>for</code> 循环的结果可以通过管道导向至一个或多个命令中。</p>
<p>样例 11-11. 列出目录中的所有符号链接。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># symlinks.sh: 列出目录中的所有符号链接。</span>

<span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable">${1-`pwd`}</span>
<span class="token comment"># 如果没有特别指定，缺省目录为当前工作目录。</span>
<span class="token comment"># 等价于下面的代码块。</span>
<span class="token comment"># ---------------------------------------------------</span>
<span class="token comment"># ARGS=1                 # 只有一个命令行参数。</span>
<span class="token comment">#</span>
<span class="token comment"># if [ $# -ne "$ARGS" ]  # 如果不是只有一个参数的情况下</span>
<span class="token comment"># then</span>
<span class="token comment">#   directory=`pwd`      # 设为当前工作目录。</span>
<span class="token comment"># else</span>
<span class="token comment">#   directory=$1</span>
<span class="token comment"># fi</span>
<span class="token comment"># ---------------------------------------------------</span>

<span class="token builtin class-name">echo</span> <span class="token string">"symbolic links in directory <span class="token entity" title="\&quot;">\"</span><span class="token variable">$directory</span><span class="token entity" title="\&quot;">\"</span>"</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory <span class="token parameter variable">-type</span> <span class="token number">1</span> <span class="token variable">)</span></span>"</span>   <span class="token comment"># -type 1 = 符号链接</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$file</span>"</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span>                                  <span class="token comment"># 否则文件顺序会是乱序。</span>
<span class="token comment">#  严格的来说这里并不需要使用循环，</span>
<span class="token comment">#+ 因为 "find" 命令的输出结果已经被扩展成一个单一字符串了。</span>
<span class="token comment">#  然而，为了方便大家理解，我们使用了循环的方式。</span>

<span class="token comment">#  Dominik 'Aeneas' Schnitzer 指出，</span>
<span class="token comment">#+ 不引用 $( find $directory -type 1 ) 的话，</span>
<span class="token comment">#  脚本将在文件名包含空格时阻塞。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>


<span class="token comment"># --------------------------------------------------------</span>
<span class="token comment"># Jean Helou 提供了另外一种方法：</span>

<span class="token builtin class-name">echo</span> <span class="token string">"symbolic links in directory <span class="token entity" title="\&quot;">\"</span><span class="token variable">$directory</span><span class="token entity" title="\&quot;">\"</span>"</span>
<span class="token comment"># 备份当前的内部字段分隔符。谨慎永远没有坏处。</span>
<span class="token assign-left variable">OLDIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> $directory <span class="token parameter variable">-type</span> <span class="token number">1</span> <span class="token parameter variable">-printf</span> <span class="token string">"%p<span class="token environment constant">$IFS</span>"</span><span class="token variable">)</span></span>
<span class="token keyword">do</span>     <span class="token comment">#                              ^^^^^^^^^^^^^^^^</span>
       <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$file</span>"</span>
       <span class="token keyword">done</span><span class="token operator">|</span><span class="token function">sort</span>

<span class="token comment"># James "Mike" Conley 建议将 Helou 的代码修改为：</span>

<span class="token assign-left variable">OLDIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">''</span> <span class="token comment"># 空的内部字段分隔符意味着将不会分隔任何字符串</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory <span class="token parameter variable">-type</span> <span class="token number">1</span> <span class="token variable">)</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$file</span>
  <span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span>
  
<span class="token comment">#  上面的代码可以在目录名包含冒号（前一个允许包含空格）</span>
<span class="token comment">#+ 的情况下仍旧正常工作。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要对上一个样例做一些小小的改动，就可以把在标准输出 <code v-pre>stdout</code> 中的循环 <a href="http://tldp.org/LDP/abs/html/io-redirection.html#IOREDIRREF" target="_blank" rel="noopener noreferrer">重定向<ExternalLinkIcon/></a> 到文件中。</p>
<p>样例 11-12. 将目录中的所有符号链接保存到文件中。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># symlinks.sh: 列出目录中的所有符号链接。</span>

<span class="token assign-left variable">OUTFILE</span><span class="token operator">=</span>symlinks.list

<span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable">${1-`pwd`}</span>
<span class="token comment"># 如果没有特别指定，缺省目录为当前工作目录。</span>


<span class="token builtin class-name">echo</span> <span class="token string">"symbolic links in directory <span class="token entity" title="\&quot;">\"</span><span class="token variable">$directory</span><span class="token entity" title="\&quot;">\"</span>"</span> <span class="token operator">></span> <span class="token string">"<span class="token variable">$OUTFILE</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"---------------------------"</span> <span class="token operator">>></span> <span class="token string">"<span class="token variable">$OUTFILE</span>"</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory <span class="token parameter variable">-type</span> <span class="token number">1</span> <span class="token variable">)</span></span>"</span>    <span class="token comment"># -type 1 = 符号链接</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$file</span>"</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">>></span> <span class="token string">"<span class="token variable">$OUTFILE</span>"</span>                     <span class="token comment"># 将 stdout 的循环结果</span>
<span class="token comment">#           ^^^^^^^^^^^^^                       重定向到文件。</span>

<span class="token comment"># echo "Output file = $OUTFILE"</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有另外一种看起来非常像C语言中循环那样的语法。你需要使用到 <a href="http://tldp.org/LDP/abs/html/dblparens.html#DBLPARENSREF" target="_blank" rel="noopener noreferrer">双圆括号<ExternalLinkIcon/></a> 语法。</p>
<p>样例 11-13. C语言风格的循环</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 用多种方式数到10。</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 基础版</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span> "</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># 使用 "seq"</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span><span class="token function">seq</span> <span class="token number">10</span><span class="token variable">`</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span> "</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># 使用大括号扩展语法</span>
<span class="token comment"># Bash 3+ 版本有效。</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span> "</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># 现在用类似C语言的语法再实现一次。</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;=</span> LIMIT <span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">))</span></span>  <span class="token comment"># 双圆括号语法，不带 $ 的 LIMIT</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span> "</span>
<span class="token keyword">done</span>                           <span class="token comment"># 从 ksh93 中学习到的特性。</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># 我们现在使用C语言中的逗号运算符来使得两个变量同时增加。</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;=</span> LIMIT <span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">,</span> b<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>  <span class="token comment"># 逗号连接操作。</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span>-<span class="token variable">$b</span> "</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以查看 <a href="http://tldp.org/LDP/abs/html/arrays.html#QFUNCTION" target="_blank" rel="noopener noreferrer">样例 27-16<ExternalLinkIcon/></a>，<a href="http://tldp.org/LDP/abs/html/arrays.html#TWODIM" target="_blank" rel="noopener noreferrer">样例 27-17<ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#COLLATZ" target="_blank" rel="noopener noreferrer">样例 A-6<ExternalLinkIcon/></a>。</p>
<p>---</p>
<p>接下来，我们将展示在真实环境中应用的循环。</p>
<p>样例 11-14. 在批处理模式下使用 <code v-pre>efax</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 传真（必须提前安装了 'efax' 模块）。</span>

<span class="token assign-left variable">EXPECTED_ARGS</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">85</span>
<span class="token assign-left variable">MODEM_PORT</span><span class="token operator">=</span><span class="token string">"/dev/ttyS2"</span>   <span class="token comment"># 你的电脑可能会不一样。</span>
<span class="token comment">#                ^^^^^       PCMCIA 调制解调卡缺省端口。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token variable">$EXPECTED_ARGS</span> <span class="token punctuation">]</span>
<span class="token comment"># 检查是不是传入了适当数量的命令行参数。</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"Usage: <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span> phone# text-file"</span>
   <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">"<span class="token variable">$2</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"File <span class="token variable">$2</span> is not a text file."</span>
  <span class="token comment">#     File 不是一个正常文件或者文件不存在。</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>


fax <span class="token function">make</span> <span class="token variable">$2</span>              <span class="token comment"># 根据文本文件创建传真格式文件。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> $2.0*<span class="token variable">)</span></span>  <span class="token comment"># 连接转换后的文件。</span>
                         <span class="token comment"># 在参数列表中使用通配符（文件名通配）。</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">fil</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$fil</span> <span class="token variable">$file</span>"</span>
<span class="token keyword">done</span>

efax <span class="token parameter variable">-d</span> <span class="token string">"<span class="token variable">$MODEM_PORT</span>"</span>  <span class="token parameter variable">-t</span> <span class="token string">"T<span class="token variable">$1</span>"</span> <span class="token variable">$fil</span>   <span class="token comment"># 最后使用 efax。</span>
<span class="token comment"># 如果上面一行执行失败，尝试添加 -o1。</span>


<span class="token comment">#  S.C. 指出，上面的 for 循环可以被压缩为</span>
<span class="token comment">#     efax -d /dev/ttyS2 -o1 -t "T$1" $2.0*</span>
<span class="token comment">#+ 但是这并不是一个好主意。</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>   <span class="token comment"># efax 同时也会将诊断信息传递给标准输出。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"> <a href="http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF" target="_blank" rel="noopener noreferrer">关键字<ExternalLinkIcon/></a> <code v-pre>do</code> 和 <code v-pre>done</code> 圈定了 for 循环代码块的范围。但是在一些特殊的情况下，也可以被 <a href="http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF" target="_blank" rel="noopener noreferrer">大括号<ExternalLinkIcon/></a> 取代。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>n<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> n<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token comment"># 没有 do！</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"* <span class="token variable">$n</span> *"</span>
<span class="token punctuation">}</span>
<span class="token comment"># 没有 done！</span>
<span class="token operator">></span>
<span class="token operator">></span>
<span class="token comment"># 输出：</span>
<span class="token comment"># * 1 ** 2 ** 3 ** 4 ** 5 ** 6 ** 7 ** 8 ** 9 ** 10 *</span>
<span class="token comment"># 并且 echo $? 返回 0，因此 Bash 并不认为这是一个错误。</span>
<span class="token operator">></span>
<span class="token operator">></span>
<span class="token builtin class-name">echo</span>
<span class="token operator">></span>
<span class="token operator">></span>
<span class="token comment">#  但是注意在典型的 for 循环 for n in [list] ... 中，</span>
<span class="token comment">#+ 需要在结尾加一个分号。</span>
<span class="token operator">></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
<span class="token punctuation">{</span>  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$n</span> "</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">#               ^</span>
<span class="token operator">></span>
<span class="token operator">></span>
<span class="token comment"># 感谢 Yongye 指出这一点。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h3>
<p><code v-pre>while</code> 循环结构会在循环顶部检测循环条件，若循环条件为真（ <a href="http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF" target="_blank" rel="noopener noreferrer">退出状态<ExternalLinkIcon/></a> 为0）则循环持续进行。与 <a href="http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1" target="_blank" rel="noopener noreferrer"><code v-pre>for</code> 循环<ExternalLinkIcon/></a> 不同的是，<code v-pre>while</code> 循环是在不知道循环次数的情况下使用的。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>while</code> 循环结构中，你不仅可以使用像 <code v-pre>if/test</code> 中那样的 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#TESTCONSTRUCTS1" target="_blank" rel="noopener noreferrer">括号结构<ExternalLinkIcon/></a>，也可以使用用途更广泛的 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS" target="_blank" rel="noopener noreferrer">双括号结构<ExternalLinkIcon/></a>（<code v-pre>while [[ condition ]]</code>）。</p>
<p>就像在 <code v-pre>for</code> 循环中那样，将 <code v-pre>do</code> 和循环条件放在同一行时需要加一个分号。</p>
<p><code v-pre>while [ condition ] ; do</code></p>
<p>在 <code v-pre>while</code> 循环中，括号结构 <a href="http://tldp.org/LDP/abs/html/loops1.html#WHILENOBRACKETS" target="_blank" rel="noopener noreferrer">并不是必须存在的<ExternalLinkIcon/></a>。比如说 <a href="http://tldp.org/LDP/abs/html/internal.html#GETOPTSX" target="_blank" rel="noopener noreferrer"><code v-pre>getopts</code> 结构<ExternalLinkIcon/></a>。</p>
<p>样例 11-15. 简单的 <code v-pre>while</code> 循环</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var0</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$var0</span>"</span> <span class="token parameter variable">-lt</span> <span class="token string">"<span class="token variable">$LIMIT</span>"</span> <span class="token punctuation">]</span>
<span class="token comment">#      ^                    ^</span>
<span class="token comment"># 必须有空格，因为这是测试结构</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$var0</span> "</span>        <span class="token comment"># -n 不会另起一行</span>
  <span class="token comment">#             ^           空格用来分开输出的数字。</span>
  
  <span class="token assign-left variable">var0</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">expr</span> $var0 + <span class="token number">1</span><span class="token variable">`</span></span>   <span class="token comment"># var0=$(($var0+1))  效果相同。</span>
                          <span class="token comment"># var0=$((var0 + 1)) 效果相同。</span>
                          <span class="token comment"># let "var0 += 1"    效果相同。</span>
<span class="token keyword">done</span>                      <span class="token comment"># 还有许多其他的方法也可以达到相同的效果。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 11-16. 另一个例子</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span>
                               <span class="token comment"># 等价于：</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$var1</span>"</span> <span class="token operator">!=</span> <span class="token string">"end"</span> <span class="token punctuation">]</span>     <span class="token comment"># while test "$var1" != "end"</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Input variable #1 (end to exit) "</span>
  <span class="token builtin class-name">read</span> var1                    <span class="token comment"># 不是 'read $var1' （为什么？）。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"variable #1 = <span class="token variable">$var1</span>"</span>   <span class="token comment"># 因为存在 "#"，所以需要使用引号。</span>
  <span class="token comment"># 如果输入的是 "end"，也将会在这里输出。</span>
  <span class="token comment"># 在结束本轮循环之前都不会再测试循环条件了。</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 <code v-pre>while</code> 循环可以有多个测试条件，但只有最后的那一个条件决定了循环是否终止。这是一种你需要注意到的不同于其他循环的语法。</p>
<p>样例 11-17. 多条件 <code v-pre>while</code> 循环</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span>unset
<span class="token assign-left variable">previous</span><span class="token operator">=</span><span class="token variable">$var1</span>

<span class="token keyword">while</span> <span class="token builtin class-name">echo</span> <span class="token string">"previous-variable = <span class="token variable">$previous</span>"</span>
      <span class="token builtin class-name">echo</span>
      <span class="token assign-left variable">previous</span><span class="token operator">=</span><span class="token variable">$var1</span>
      <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$var1</span>"</span> <span class="token operator">!=</span> end <span class="token punctuation">]</span> <span class="token comment"># 记录下 $var1 之前的值。</span>
      <span class="token comment"># 在 while 循环中有4个条件，但只有最后的那个控制循环。</span>
      <span class="token comment"># 最后一个条件的退出状态才会被记录。</span>
<span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Input variable #1 (end to exit) "</span>
  <span class="token builtin class-name">read</span> var1
  <span class="token builtin class-name">echo</span> <span class="token string">"variable #1 = <span class="token variable">$var1</span>"</span>
<span class="token keyword">done</span>

<span class="token comment"># 猜猜这是怎样实现的。</span>
<span class="token comment"># 这是一个很小的技巧。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就像 <code v-pre>for</code> 循环一样， <code v-pre>while</code> 循环也可以使用双圆括号结构写得像C语言那样（也可以查看<a href="http://tldp.org/LDP/abs/html/dblparens.html#CVARS" target="_blank" rel="noopener noreferrer">样例 8-5<ExternalLinkIcon/></a>）。</p>
<p>样例 11-18. C语言风格的 <code v-pre>while</code> 循环</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># wh-loopc.sh: 在 "while" 循环中计数到10。</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>                 <span class="token comment"># 循环10次。</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> <span class="token parameter variable">-le</span> <span class="token variable">$LIMIT</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span> "</span>
  <span class="token builtin class-name">let</span> <span class="token string">"a+=1"</span>
<span class="token keyword">done</span>                     <span class="token comment"># 没什么好奇怪的吧。</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==============================================+</span>

<span class="token comment"># 现在我们用C语言风格再写一次。</span>

<span class="token variable"><span class="token punctuation">((</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">))</span></span>      <span class="token comment"># a=1</span>
<span class="token comment"># 双圆括号结构允许像C语言一样在赋值语句中使用空格。</span>

<span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">&lt;=</span> LIMIT <span class="token punctuation">))</span></span>   <span class="token comment">#  双圆括号结构，</span>
<span class="token keyword">do</span>                       <span class="token comment">#+ 并且没有使用 "$"。</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span> "</span>
  <span class="token variable"><span class="token punctuation">((</span>a <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">))</span></span>             <span class="token comment"># let "a+=1"</span>
  <span class="token comment"># 是的，就是这样。</span>
  <span class="token comment"># 双圆括号结构允许像C语言一样自增一个变量。</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 这可以让C和Java程序猿感觉更加舒服。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在测试部分，<code v-pre>while</code> 循环可以调用 <a href="http://tldp.org/LDP/abs/html/functions.html#FUNCTIONREF" target="_blank" rel="noopener noreferrer">函数<ExternalLinkIcon/></a>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token function-name function">condition</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token variable"><span class="token punctuation">((</span>t<span class="token operator">++</span><span class="token punctuation">))</span></span>
  
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$t</span> <span class="token parameter variable">-lt</span> <span class="token number">5</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">return</span> <span class="token number">0</span>  <span class="token comment"># true 真</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">return</span> <span class="token number">1</span>  <span class="token comment"># false 假</span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">while</span> condition
<span class="token comment">#     ^^^^^^^^^</span>
<span class="token comment">#     调用函数循环四次。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Still going: t = <span class="token variable">$t</span>"</span>
<span class="token keyword">done</span>

<span class="token comment"># Still going: t = 1</span>
<span class="token comment"># Still going: t = 2</span>
<span class="token comment"># Still going: t = 3</span>
<span class="token comment"># Still going: t = 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>和 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#IFGREPREF" target="_blank" rel="noopener noreferrer">if 测试<ExternalLinkIcon/></a> 结构一样，<code v-pre>while</code> 循环也可以省略括号。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">while</span> condition
<span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>while</code> 循环中结合 <a href="http://tldp.org/LDP/abs/html/internal.html#READREF" target="_blank" rel="noopener noreferrer"><code v-pre>read</code><ExternalLinkIcon/></a> 命令，我们就得到了一个非常易于使用的 <a href="http://tldp.org/LDP/abs/html/internal.html#WHILEREADREF" target="_blank" rel="noopener noreferrer"><code v-pre>while read</code><ExternalLinkIcon/></a> 结构。它可以用来读取和解析文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token variable">$filename</span> <span class="token operator">|</span>    <span class="token comment"># 从文件获得输入。</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line    <span class="token comment"># 只要还有可以读入的行，循环就继续。</span>
<span class="token keyword">do</span>
  <span class="token punctuation">..</span>.
<span class="token keyword">done</span>

<span class="token comment"># ==================== 摘自样例脚本 "sd.sh" =================== #</span>

  <span class="token keyword">while</span> <span class="token builtin class-name">read</span> value   <span class="token comment"># 一次读入一个数据。</span>
  <span class="token keyword">do</span>
    <span class="token assign-left variable">rt</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">"scale=<span class="token variable">$SC</span>; <span class="token variable">$rt</span> + <span class="token variable">$value</span>"</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
    <span class="token variable"><span class="token punctuation">((</span> ct<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token keyword">done</span>
  
  <span class="token assign-left variable">am</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">"scale=<span class="token variable">$SC</span>; <span class="token variable">$rt</span> / <span class="token variable">$ct</span>"</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
  
  <span class="token builtin class-name">echo</span> <span class="token variable">$am</span><span class="token punctuation">;</span> <span class="token builtin class-name">return</span> <span class="token variable">$ct</span>   <span class="token comment"># 这个功能“返回”了2个值。</span>
  <span class="token comment"># 注意：这个技巧在 $ct > 255 的情况下会失效。</span>
  <span class="token comment"># 如果要操作更大的数字，注释掉上面的 "return $ct" 就可以了。</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token string">"<span class="token variable">$datafile</span>"</span>   <span class="token comment"># 传入数据文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"> 在 <code v-pre>while</code> 循环后面可以通过 &lt; 将标准输入 <a href="http://tldp.org/LDP/abs/html/redircb.html#REDIRREF" target="_blank" rel="noopener noreferrer">重定位到文件<ExternalLinkIcon/></a> 中。
<code v-pre>while</code> 循环同样可以 <a href="http://tldp.org/LDP/abs/html/internal.html#READPIPEREF" target="_blank" rel="noopener noreferrer">通过管道<ExternalLinkIcon/></a> 传入标准输入中。</p>
</blockquote>
<h3 id="until" tabindex="-1"><a class="header-anchor" href="#until" aria-hidden="true">#</a> until</h3>
<p>与 <code v-pre>while</code> 循环相反，<code v-pre>until</code> 循环测试其顶部的循环条件，直到其中的条件为真时停止。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">until</span> <span class="token punctuation">[</span> condition-is-true <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  commands<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到，跟其他的一些编程语言不同，<code v-pre>until</code> 循环的测试条件在循环顶部。</p>
<p>就像在 <code v-pre>for</code> 循环中那样，将 <code v-pre>do</code> 和循环条件放在同一行时需要加一个分号。</p>
<p><code v-pre>until[ condition-is-true ] ; do</code></p>
<p>样例 11-19. <code v-pre>until</code> 循环</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">END_CONDITION</span><span class="token operator">=</span>end

<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$var1</span>"</span> <span class="token operator">=</span> <span class="token string">"<span class="token variable">$END_CONDITION</span>"</span> <span class="token punctuation">]</span>
<span class="token comment"># 在循环顶部测试条件。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Input variable #1 "</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"(<span class="token variable">$END_CONDITION</span> to exit)"</span>
  <span class="token builtin class-name">read</span> var1
  <span class="token builtin class-name">echo</span> <span class="token string">"variable #1 = <span class="token variable">$var1</span>"</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token comment">#                ---                   #</span>

<span class="token comment">#  就像 "for" 和 "while" 循环一样，</span>
<span class="token comment">#+ "until" 循环也可以写的像C语言一样。</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">until</span> <span class="token variable"><span class="token punctuation">((</span> var <span class="token operator">></span> LIMIT <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>  <span class="token comment"># ^^ ^     ^     ^^   没有方括号，没有 $ 前缀。</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$var</span> "</span>
  <span class="token variable"><span class="token punctuation">((</span> var<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">done</span>    <span class="token comment"># 0 1 2 3 4 5 6 7 8 9 10</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何在 <code v-pre>for</code>，<code v-pre>while</code> 和 <code v-pre>until</code> 之间做出选择？我们知道在C语言中，在已知循环次数的情况下更加倾向于使用 <code v-pre>for</code> 循环。但是在Bash中情况可能更加复杂一些。Bash中的 <code v-pre>for</code> 循环相比起其他语言来说，结构更加松散，使用更加灵活。因此使用你认为最简单的就好。</p>
</div></template>


