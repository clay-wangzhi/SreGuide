import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,a as s,b as n,d as e,e as l}from"./app-6b705441.js";const c={},r=l(`<h1 id="_11-1-循环" tabindex="-1"><a class="header-anchor" href="#_11-1-循环" aria-hidden="true">#</a> 11.1 循环</h1><p>循环是当循环控制条件为真时，一系列命令迭代<a href="%E8%BF%AD%E4%BB%A3%EF%BC%9A%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%B8%80%E4%B8%AA%E6%88%96%E4%B8%80%E7%BB%84%E5%91%BD%E4%BB%A4%E3%80%82%E9%80%9A%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E4%BC%9A%E4%BD%BF%E7%94%A8%60while%60%E6%88%96%E8%80%85%60until%60%E8%BF%9B%E8%A1%8C%E6%8E%A7%E5%88%B6%E3%80%82">^1</a>执行的代码块。</p><h3 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h3><p><code>for arg in [list]</code></p><p>这是 shell 中最基本的循环结构，它与C语言形式的循环有着明显的不同。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token punctuation">[</span>list<span class="token punctuation">]</span>
<span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"> 在循环的过程中，<code>arg</code> 会从 <code>list</code> 中连续获得每一个变量的值。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var1</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$var2</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$var3</span>&quot;</span> <span class="token punctuation">..</span>. <span class="token string">&quot;<span class="token variable">$varN</span>&quot;</span>
<span class="token comment"># 第一次循环中，arg = $var1</span>
<span class="token comment"># 第二次循环中，arg = $var2</span>
<span class="token comment"># 第三次循环中，arg = $var3</span>
<span class="token comment"># ...</span>
<span class="token comment"># 第 N 次循环中，arg = $varN</span>
<span class="token operator">&gt;</span>
<span class="token comment"># 为了防止可能的字符分割问题，[list] 中的参数都需要被引用。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d={href:"http://tldp.org/LDP/abs/html/special-chars.html#ASTERISKREF",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>如果 <code>do</code> 和 <code>for</code> 写在同一行时，需要在 list 之后加上一个分号。</p><p><code>for arg in [list] ; do</code></p><p>样例 11-1. 简单的 for 循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 列出太阳系的所有行星。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">planet</span> <span class="token keyword">in</span> Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$planet</span>  <span class="token comment"># 每一行输出一个行星。</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">planet</span> <span class="token keyword">in</span> <span class="token string">&quot;Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto&quot;</span>
    <span class="token comment"># 所有的行星都输出在一行上。</span>
    <span class="token comment"># 整个 &#39;list&#39; 被包裹在引号中时是作为一个单一的变量。</span>
    <span class="token comment"># 为什么？因为空格也是变量的一部分。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$planet</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Whoops! Pluto is no longer a planet!&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u={href:"http://tldp.org/LDP/abs/html/internal.html#SETREF",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"set",-1),k={href:"http://tldp.org/LDP/abs/html/internal.html#EX34",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>样例 11-2. <code>for</code> 循环 [list] 中的每一个变量有两个参数的情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 让行星再躺次枪。</span>

<span class="token comment"># 将每个行星与其到太阳的距离放在一起。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">planet</span> <span class="token keyword">in</span> <span class="token string">&quot;Mercury 36&quot;</span> <span class="token string">&quot;Venus 67&quot;</span> <span class="token string">&quot;Earth 93&quot;</span> <span class="token string">&quot;Mars 142&quot;</span> <span class="token string">&quot;Jupiter 483&quot;</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">set</span> -- <span class="token variable">$planet</span>  <span class="token comment">#  解析变量 &quot;planet&quot;</span>
                  <span class="token comment">#+ 并将其每个部分赋值给位置参数。</span>
  <span class="token comment"># &quot;--&quot; 防止一些极端情况，比如 $planet 为空或者以破折号开头。</span>
  
  <span class="token comment"># 因为位置参数会被覆盖掉，因此需要先保存原先的位置参数。</span>
  <span class="token comment"># 你可以使用数组来保存</span>
  <span class="token comment">#         original_params=(&quot;$@&quot;)</span>
  
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span>		<span class="token variable">$2</span>,000,000 miles from the sum&quot;</span>
  <span class="token comment">#-------两个制表符---将后面的一系列 0 连到参数 $2 上。</span>
<span class="token keyword">done</span>

<span class="token comment"># （感谢 S.C. 做出的额外注释。）</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个单一变量也可以成为 <code>for</code> 循环中的 [list]。</p><p>样例 11-3. 文件信息：查看一个单一变量中含有的文件列表的文件信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># fileinfo.sh</span>

<span class="token assign-left variable">FILES</span><span class="token operator">=</span><span class="token string">&quot;/usr/sbin/accept
/usr/sbin/pwck
/usr/sbin/chroot
/usr/bin/fakefile
/sbin/badblocks
/sbin/ypbind&quot;</span>     <span class="token comment"># 你可能会感兴趣的一系列文件。</span>
                  <span class="token comment"># 包含一个不存在的文件，/usr/bin/fakefile。</span>
                  
<span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$FILES</span>
<span class="token keyword">do</span>

  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span>       <span class="token comment"># 检查文件是否存在。</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> does not exist.&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">continue</span>                <span class="token comment"># 继续判断下一个文件。</span>
  <span class="token keyword">fi</span>
  
  <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token variable">$file</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $8 &quot;         file size: &quot; $5 }&#39;</span>  <span class="token comment"># 输出其中的两个域。</span>
  whatis <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $file<span class="token variable">\`</span></span>   <span class="token comment"># 文件信息。</span>
  <span class="token comment"># 脚本正常运行需要注意提前设置好 whatis 的数据。</span>
  <span class="token comment"># 使用 root 权限运行 /usr/bin/makewhatis 可以完成。</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>for</code> 循环中的 [list] 可以是一个参数。</p><p>样例 11-4. 操作含有一系列文件的参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">&quot;*txt&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$filename</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Contents of <span class="token variable">$file</span>&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;---&quot;</span>
 <span class="token function">cat</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
 <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在匹配文件扩展名的 <code>for</code> 循环中的 [list] 含有通配符（* 和 ?），那么将会进行文件名扩展。</p><p>样例 11-5. 在 <code>for</code> 循环中操作文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># list-glob.sh: 通过文件名扩展在 for 循环中产生 [list]。</span>
<span class="token comment"># 通配 = 文件名扩展。</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> *
<span class="token comment">#           ^  Bash 在检测到通配表达式时，</span>
<span class="token comment">#+             会进行文件名扩展。</span>
<span class="token keyword">do</span>
  <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>  <span class="token comment"># 列出 $PWD（当前工作目录）下的所有文件。</span>
  <span class="token comment">#  回忆一下，通配符 &quot;*&quot; 会匹配所有的文件名，</span>
  <span class="token comment">#+ 但是，在文件名扩展中，他将不会匹配以点开头的文件。</span>
  
  <span class="token comment">#  如果没有匹配到文件，那么它将会扩展为它自身。</span>
  <span class="token comment">#  为了防止出现这种情况，需要设置 nullglob 选项。</span>
  <span class="token comment">#+    (shopt -s nullglob)。</span>
  <span class="token comment">#  感谢 S.C.</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token punctuation">[</span>jx<span class="token punctuation">]</span>*
<span class="token keyword">do</span>
  <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$file</span>    <span class="token comment"># 删除当前目录下所有以 &quot;j&quot; 或 &quot;x&quot; 开头的文件。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Removed file <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$file</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span><span class="token builtin class-name">.</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),h=s("code",null,"for",-1),g=s("code",null,"in [list]",-1),f=s("code",null,"$@",-1),q={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#PRIMES",target:"_blank",rel:"noopener noreferrer"},_={href:"http://tldp.org/LDP/abs/html/internal.html#REVPOSPARAMS",target:"_blank",rel:"noopener noreferrer"},w=l(`<p>样例 11-6. 缺少 <code>in [list]</code> 的 <code>for</code> 循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 尝试在带参数和不带参数两种情况下调用这个脚本，观察发生了什么。</span>

<span class="token keyword">for</span> a
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#  缺失 &#39;in list&#39; 的情况下，循环会遍历 &#39;$@&#39;</span>
<span class="token comment">#+（命令行参数列表，包括空格）。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y=s("code",null,"for",-1),$={href:"http://tldp.org/LDP/abs/html/commandsub.html#COMMANDSUBREF",target:"_blank",rel:"noopener noreferrer"},E={href:"http://tldp.org/LDP/abs/html/extmisc.html#EX53",target:"_blank",rel:"noopener noreferrer"},x={href:"http://tldp.org/LDP/abs/html/loops1.html#SYMLINKS",target:"_blank",rel:"noopener noreferrer"},I={href:"http://tldp.org/LDP/abs/html/mathc.html#BASE",target:"_blank",rel:"noopener noreferrer"},S=l(`<p>样例 11-7. 在 <code>for</code> 循环中使用命令代换生成 [list]</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># for-loopcmd.sh: 带命令代换所生成 [list] 的 for 循环</span>

<span class="token assign-left variable">NUMBERS</span><span class="token operator">=</span><span class="token string">&quot;9 7 3 8 37.53&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">number</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $NUMBERS<span class="token variable">\`</span></span>  <span class="token comment"># for number in 9 7 3 8 37.53</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$number</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是使用命令代换生成 [list] 的更加复杂的例子。</p><p>样例 11-8. 一种替代 <code>grep</code> 搜索二进制文件的方法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># bin-grep.sh: 在二进制文件中定位匹配的字符串。</span>

<span class="token comment"># 一种替代 \`grep\` 搜索二进制文件的方法</span>
<span class="token comment"># 与 &quot;grep -a&quot; 的效果类似</span>

<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">65</span>
<span class="token assign-left variable">E_NOFILE</span><span class="token operator">=</span><span class="token number">66</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> search_string filename&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$2</span><span class="token entity" title="\\&quot;">\\&quot;</span> does not exist.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOFILE</span>
<span class="token keyword">fi</span>


<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\012">\\012</span>&#39;</span>       <span class="token comment"># 按照 Anton Filippov 的意见应该是</span>
                  <span class="token comment"># IFS=&quot;\\n&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">word</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> strings <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token variable">)</span></span>
<span class="token comment"># &quot;strings&quot; 命令列出二进制文件中的所有字符串。</span>
<span class="token comment"># 将结果通过管道输出到 &quot;grep&quot; 中，检查是不是匹配的字符串。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$word</span>
<span class="token keyword">done</span>

<span class="token comment"># 就像 S.C. 指出的那样，第 23-30 行可以换成下面的形式：</span>
<span class="token comment">#    strings &quot;$2&quot; | grep &quot;$1&quot; | tr -s &quot;$IFS&quot; &#39;[\\n*]&#39;</span>


<span class="token comment"># 尝试运行脚本 &quot;./bin-grep.sh mem /bin/ls&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子同样展示了如何使用命令代换生成 [list]。</p><p>样例 11-9. 列出系统中的所有用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># userlist.sh</span>

<span class="token assign-left variable">PASSWORD_FILE</span><span class="token operator">=</span>/etc/passwd
<span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">1</span>           <span class="token comment"># 用户数量</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">name</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;BEGIN{fs=&quot;:&quot;}{print $1}&#39;</span> <span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$PASSWORD_FILE</span>&quot;</span> <span class="token variable">)</span></span>
<span class="token comment"># 分隔符 = :              ^^^^^^</span>
<span class="token comment"># 输出第一个域                    ^^^^^^^^</span>
<span class="token comment"># 读取密码文件 /etc/passwd                    ^^^^^^^^^^^^^^^^^</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;USER #<span class="token variable">$n</span> = <span class="token variable">$name</span>&quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;n += 1&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一个关于 [list] 的例子也来自于命令代换。</p><p>样例 11-10. 检查目录中所有二进制文件的原作者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># findstring.sh</span>
<span class="token comment"># 在指定目录的二进制文件中寻找指定的字符串。</span>

<span class="token assign-left variable">directory</span><span class="token operator">=</span>/usr/bin
<span class="token assign-left variable">fstring</span><span class="token operator">=</span><span class="token string">&quot;Free Software Foundation&quot;</span>  <span class="token comment"># 查看哪些文件来自于 FSF。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&#39;*&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token variable">)</span></span>
<span class="token keyword">do</span>
  strings <span class="token parameter variable">-f</span> <span class="token variable">$file</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable">$fstring</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;s%<span class="token variable">$driectory</span>%%&quot;</span>
  <span class="token comment">#  在 &quot;sed&quot; 表达式中，你需要替换掉 &quot;/&quot; 分隔符，</span>
  <span class="token comment">#+ 因为 &quot;/&quot; 是一个会被过滤的字符。</span>
  <span class="token comment">#  如果不做替换，将会产生一个错误。（你可以尝试一下。）</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment"># 简单的练习：</span>
<span class="token comment"># ----------</span>
<span class="token comment"># 修改脚本，使其可以从命令行参数中获取 $directory 和 $fstring。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),D={href:"http://tldp.org/LDP/abs/html/functions.html#FUNCTIONREF",target:"_blank",rel:"noopener noreferrer"},L=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">generate_list</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;one two three&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">word</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span>generate_list<span class="token variable">)</span></span>  <span class="token comment"># &quot;word&quot; 获得函数执行的结果。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$word</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># one</span>
<span class="token comment"># two</span>
<span class="token comment"># three</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>for</code> 循环的结果可以通过管道导向至一个或多个命令中。</p><p>样例 11-11. 列出目录中的所有符号链接。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># symlinks.sh: 列出目录中的所有符号链接。</span>

<span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable">\${1-\`pwd\`}</span>
<span class="token comment"># 如果没有特别指定，缺省目录为当前工作目录。</span>
<span class="token comment"># 等价于下面的代码块。</span>
<span class="token comment"># ---------------------------------------------------</span>
<span class="token comment"># ARGS=1                 # 只有一个命令行参数。</span>
<span class="token comment">#</span>
<span class="token comment"># if [ $# -ne &quot;$ARGS&quot; ]  # 如果不是只有一个参数的情况下</span>
<span class="token comment"># then</span>
<span class="token comment">#   directory=\`pwd\`      # 设为当前工作目录。</span>
<span class="token comment"># else</span>
<span class="token comment">#   directory=$1</span>
<span class="token comment"># fi</span>
<span class="token comment"># ---------------------------------------------------</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;symbolic links in directory <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$directory</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory <span class="token parameter variable">-type</span> <span class="token number">1</span> <span class="token variable">)</span></span>&quot;</span>   <span class="token comment"># -type 1 = 符号链接</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span>                                  <span class="token comment"># 否则文件顺序会是乱序。</span>
<span class="token comment">#  严格的来说这里并不需要使用循环，</span>
<span class="token comment">#+ 因为 &quot;find&quot; 命令的输出结果已经被扩展成一个单一字符串了。</span>
<span class="token comment">#  然而，为了方便大家理解，我们使用了循环的方式。</span>

<span class="token comment">#  Dominik &#39;Aeneas&#39; Schnitzer 指出，</span>
<span class="token comment">#+ 不引用 $( find $directory -type 1 ) 的话，</span>
<span class="token comment">#  脚本将在文件名包含空格时阻塞。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>


<span class="token comment"># --------------------------------------------------------</span>
<span class="token comment"># Jean Helou 提供了另外一种方法：</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;symbolic links in directory <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$directory</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token comment"># 备份当前的内部字段分隔符。谨慎永远没有坏处。</span>
<span class="token assign-left variable">OLDIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> $directory <span class="token parameter variable">-type</span> <span class="token number">1</span> <span class="token parameter variable">-printf</span> <span class="token string">&quot;%p<span class="token environment constant">$IFS</span>&quot;</span><span class="token variable">)</span></span>
<span class="token keyword">do</span>     <span class="token comment">#                              ^^^^^^^^^^^^^^^^</span>
       <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
       <span class="token keyword">done</span><span class="token operator">|</span><span class="token function">sort</span>

<span class="token comment"># James &quot;Mike&quot; Conley 建议将 Helou 的代码修改为：</span>

<span class="token assign-left variable">OLDIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&#39;&#39;</span> <span class="token comment"># 空的内部字段分隔符意味着将不会分隔任何字符串</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory <span class="token parameter variable">-type</span> <span class="token number">1</span> <span class="token variable">)</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$file</span>
  <span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span>
  
<span class="token comment">#  上面的代码可以在目录名包含冒号（前一个允许包含空格）</span>
<span class="token comment">#+ 的情况下仍旧正常工作。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),R=s("code",null,"stdout",-1),F={href:"http://tldp.org/LDP/abs/html/io-redirection.html#IOREDIRREF",target:"_blank",rel:"noopener noreferrer"},P=l(`<p>样例 11-12. 将目录中的所有符号链接保存到文件中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># symlinks.sh: 列出目录中的所有符号链接。</span>

<span class="token assign-left variable">OUTFILE</span><span class="token operator">=</span>symlinks.list

<span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable">\${1-\`pwd\`}</span>
<span class="token comment"># 如果没有特别指定，缺省目录为当前工作目录。</span>


<span class="token builtin class-name">echo</span> <span class="token string">&quot;symbolic links in directory <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$directory</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$OUTFILE</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------------&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$OUTFILE</span>&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory <span class="token parameter variable">-type</span> <span class="token number">1</span> <span class="token variable">)</span></span>&quot;</span>    <span class="token comment"># -type 1 = 符号链接</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$OUTFILE</span>&quot;</span>                     <span class="token comment"># 将 stdout 的循环结果</span>
<span class="token comment">#           ^^^^^^^^^^^^^                       重定向到文件。</span>

<span class="token comment"># echo &quot;Output file = $OUTFILE&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),A={href:"http://tldp.org/LDP/abs/html/dblparens.html#DBLPARENSREF",target:"_blank",rel:"noopener noreferrer"},B=l(`<p>样例 11-13. C语言风格的循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 用多种方式数到10。</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 基础版</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># 使用 &quot;seq&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">10</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># 使用大括号扩展语法</span>
<span class="token comment"># Bash 3+ 版本有效。</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># 现在用类似C语言的语法再实现一次。</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;=</span> LIMIT <span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">))</span></span>  <span class="token comment"># 双圆括号语法，不带 $ 的 LIMIT</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>                           <span class="token comment"># 从 ksh93 中学习到的特性。</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># 我们现在使用C语言中的逗号运算符来使得两个变量同时增加。</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;=</span> LIMIT <span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">,</span> b<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>  <span class="token comment"># 逗号连接操作。</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$a</span>-<span class="token variable">$b</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C={href:"http://tldp.org/LDP/abs/html/arrays.html#QFUNCTION",target:"_blank",rel:"noopener noreferrer"},T={href:"http://tldp.org/LDP/abs/html/arrays.html#TWODIM",target:"_blank",rel:"noopener noreferrer"},O={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#COLLATZ",target:"_blank",rel:"noopener noreferrer"},N=l(`<p>---</p><p>接下来，我们将展示在真实环境中应用的循环。</p><p>样例 11-14. 在批处理模式下使用 <code>efax</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 传真（必须提前安装了 &#39;efax&#39; 模块）。</span>

<span class="token assign-left variable">EXPECTED_ARGS</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">85</span>
<span class="token assign-left variable">MODEM_PORT</span><span class="token operator">=</span><span class="token string">&quot;/dev/ttyS2&quot;</span>   <span class="token comment"># 你的电脑可能会不一样。</span>
<span class="token comment">#                ^^^^^       PCMCIA 调制解调卡缺省端口。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token variable">$EXPECTED_ARGS</span> <span class="token punctuation">]</span>
<span class="token comment"># 检查是不是传入了适当数量的命令行参数。</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> phone# text-file&quot;</span>
   <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File <span class="token variable">$2</span> is not a text file.&quot;</span>
  <span class="token comment">#     File 不是一个正常文件或者文件不存在。</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>


fax <span class="token function">make</span> <span class="token variable">$2</span>              <span class="token comment"># 根据文本文件创建传真格式文件。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> $2.0*<span class="token variable">)</span></span>  <span class="token comment"># 连接转换后的文件。</span>
                         <span class="token comment"># 在参数列表中使用通配符（文件名通配）。</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">fil</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$fil</span> <span class="token variable">$file</span>&quot;</span>
<span class="token keyword">done</span>

efax <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$MODEM_PORT</span>&quot;</span>  <span class="token parameter variable">-t</span> <span class="token string">&quot;T<span class="token variable">$1</span>&quot;</span> <span class="token variable">$fil</span>   <span class="token comment"># 最后使用 efax。</span>
<span class="token comment"># 如果上面一行执行失败，尝试添加 -o1。</span>


<span class="token comment">#  S.C. 指出，上面的 for 循环可以被压缩为</span>
<span class="token comment">#     efax -d /dev/ttyS2 -o1 -t &quot;T$1&quot; $2.0*</span>
<span class="token comment">#+ 但是这并不是一个好主意。</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>   <span class="token comment"># efax 同时也会将诊断信息传递给标准输出。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),M=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"note"},null,-1),U={href:"http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF",target:"_blank",rel:"noopener noreferrer"},G=s("code",null,"do",-1),V=s("code",null,"done",-1),W={href:"http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF",target:"_blank",rel:"noopener noreferrer"},J=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>n<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> n<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token comment"># 没有 do！</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;* <span class="token variable">$n</span> *&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 没有 done！</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>
<span class="token comment"># 输出：</span>
<span class="token comment"># * 1 ** 2 ** 3 ** 4 ** 5 ** 6 ** 7 ** 8 ** 9 ** 10 *</span>
<span class="token comment"># 并且 echo $? 返回 0，因此 Bash 并不认为这是一个错误。</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>
<span class="token builtin class-name">echo</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>
<span class="token comment">#  但是注意在典型的 for 循环 for n in [list] ... 中，</span>
<span class="token comment">#+ 需要在结尾加一个分号。</span>
<span class="token operator">&gt;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
<span class="token punctuation">{</span>  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$n</span> &quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">#               ^</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>
<span class="token comment"># 感谢 Yongye 指出这一点。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h3>`,2),K=s("code",null,"while",-1),X={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},H={href:"http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1",target:"_blank",rel:"noopener noreferrer"},z=s("code",null,"for",-1),Y=s("code",null,"while",-1),j=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Q=s("code",null,"while",-1),Z=s("code",null,"if/test",-1),nn={href:"http://tldp.org/LDP/abs/html/testconstructs.html#TESTCONSTRUCTS1",target:"_blank",rel:"noopener noreferrer"},sn={href:"http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS",target:"_blank",rel:"noopener noreferrer"},an=s("code",null,"while [[ condition ]]",-1),en=s("p",null,[n("就像在 "),s("code",null,"for"),n(" 循环中那样，将 "),s("code",null,"do"),n(" 和循环条件放在同一行时需要加一个分号。")],-1),ln=s("p",null,[s("code",null,"while [ condition ] ; do")],-1),tn=s("code",null,"while",-1),on={href:"http://tldp.org/LDP/abs/html/loops1.html#WHILENOBRACKETS",target:"_blank",rel:"noopener noreferrer"},pn={href:"http://tldp.org/LDP/abs/html/internal.html#GETOPTSX",target:"_blank",rel:"noopener noreferrer"},cn=s("code",null,"getopts",-1),rn=l(`<p>样例 11-15. 简单的 <code>while</code> 循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var0</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var0</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token string">&quot;<span class="token variable">$LIMIT</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token comment">#      ^                    ^</span>
<span class="token comment"># 必须有空格，因为这是测试结构</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$var0</span> &quot;</span>        <span class="token comment"># -n 不会另起一行</span>
  <span class="token comment">#             ^           空格用来分开输出的数字。</span>
  
  <span class="token assign-left variable">var0</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $var0 + <span class="token number">1</span><span class="token variable">\`</span></span>   <span class="token comment"># var0=$(($var0+1))  效果相同。</span>
                          <span class="token comment"># var0=$((var0 + 1)) 效果相同。</span>
                          <span class="token comment"># let &quot;var0 += 1&quot;    效果相同。</span>
<span class="token keyword">done</span>                      <span class="token comment"># 还有许多其他的方法也可以达到相同的效果。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 11-16. 另一个例子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span>
                               <span class="token comment"># 等价于：</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var1</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;end&quot;</span> <span class="token punctuation">]</span>     <span class="token comment"># while test &quot;$var1&quot; != &quot;end&quot;</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Input variable #1 (end to exit) &quot;</span>
  <span class="token builtin class-name">read</span> var1                    <span class="token comment"># 不是 &#39;read $var1&#39; （为什么？）。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;variable #1 = <span class="token variable">$var1</span>&quot;</span>   <span class="token comment"># 因为存在 &quot;#&quot;，所以需要使用引号。</span>
  <span class="token comment"># 如果输入的是 &quot;end&quot;，也将会在这里输出。</span>
  <span class="token comment"># 在结束本轮循环之前都不会再测试循环条件了。</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 <code>while</code> 循环可以有多个测试条件，但只有最后的那一个条件决定了循环是否终止。这是一种你需要注意到的不同于其他循环的语法。</p><p>样例 11-17. 多条件 <code>while</code> 循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span>unset
<span class="token assign-left variable">previous</span><span class="token operator">=</span><span class="token variable">$var1</span>

<span class="token keyword">while</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;previous-variable = <span class="token variable">$previous</span>&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token assign-left variable">previous</span><span class="token operator">=</span><span class="token variable">$var1</span>
      <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var1</span>&quot;</span> <span class="token operator">!=</span> end <span class="token punctuation">]</span> <span class="token comment"># 记录下 $var1 之前的值。</span>
      <span class="token comment"># 在 while 循环中有4个条件，但只有最后的那个控制循环。</span>
      <span class="token comment"># 最后一个条件的退出状态才会被记录。</span>
<span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Input variable #1 (end to exit) &quot;</span>
  <span class="token builtin class-name">read</span> var1
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;variable #1 = <span class="token variable">$var1</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># 猜猜这是怎样实现的。</span>
<span class="token comment"># 这是一个很小的技巧。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),dn=s("code",null,"for",-1),vn=s("code",null,"while",-1),un={href:"http://tldp.org/LDP/abs/html/dblparens.html#CVARS",target:"_blank",rel:"noopener noreferrer"},mn=l(`<p>样例 11-18. C语言风格的 <code>while</code> 循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># wh-loopc.sh: 在 &quot;while&quot; 循环中计数到10。</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>                 <span class="token comment"># 循环10次。</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token parameter variable">-le</span> <span class="token variable">$LIMIT</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;a+=1&quot;</span>
<span class="token keyword">done</span>                     <span class="token comment"># 没什么好奇怪的吧。</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==============================================+</span>

<span class="token comment"># 现在我们用C语言风格再写一次。</span>

<span class="token variable"><span class="token punctuation">((</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">))</span></span>      <span class="token comment"># a=1</span>
<span class="token comment"># 双圆括号结构允许像C语言一样在赋值语句中使用空格。</span>

<span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">&lt;=</span> LIMIT <span class="token punctuation">))</span></span>   <span class="token comment">#  双圆括号结构，</span>
<span class="token keyword">do</span>                       <span class="token comment">#+ 并且没有使用 &quot;$&quot;。</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
  <span class="token variable"><span class="token punctuation">((</span>a <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">))</span></span>             <span class="token comment"># let &quot;a+=1&quot;</span>
  <span class="token comment"># 是的，就是这样。</span>
  <span class="token comment"># 双圆括号结构允许像C语言一样自增一个变量。</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 这可以让C和Java程序猿感觉更加舒服。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),kn=s("code",null,"while",-1),bn={href:"http://tldp.org/LDP/abs/html/functions.html#FUNCTIONREF",target:"_blank",rel:"noopener noreferrer"},hn=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token number">0</span>

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
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Still going: t = <span class="token variable">$t</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># Still going: t = 1</span>
<span class="token comment"># Still going: t = 2</span>
<span class="token comment"># Still going: t = 3</span>
<span class="token comment"># Still going: t = 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),gn={href:"http://tldp.org/LDP/abs/html/testconstructs.html#IFGREPREF",target:"_blank",rel:"noopener noreferrer"},fn=s("code",null,"while",-1),qn=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> condition
<span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_n=s("code",null,"while",-1),wn={href:"http://tldp.org/LDP/abs/html/internal.html#READREF",target:"_blank",rel:"noopener noreferrer"},yn=s("code",null,"read",-1),$n={href:"http://tldp.org/LDP/abs/html/internal.html#WHILEREADREF",target:"_blank",rel:"noopener noreferrer"},En=s("code",null,"while read",-1),xn=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token variable">$filename</span> <span class="token operator">|</span>    <span class="token comment"># 从文件获得输入。</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line    <span class="token comment"># 只要还有可以读入的行，循环就继续。</span>
<span class="token keyword">do</span>
  <span class="token punctuation">..</span>.
<span class="token keyword">done</span>

<span class="token comment"># ==================== 摘自样例脚本 &quot;sd.sh&quot; =================== #</span>

  <span class="token keyword">while</span> <span class="token builtin class-name">read</span> value   <span class="token comment"># 一次读入一个数据。</span>
  <span class="token keyword">do</span>
    <span class="token assign-left variable">rt</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=<span class="token variable">$SC</span>; <span class="token variable">$rt</span> + <span class="token variable">$value</span>&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
    <span class="token variable"><span class="token punctuation">((</span> ct<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token keyword">done</span>
  
  <span class="token assign-left variable">am</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=<span class="token variable">$SC</span>; <span class="token variable">$rt</span> / <span class="token variable">$ct</span>&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
  
  <span class="token builtin class-name">echo</span> <span class="token variable">$am</span><span class="token punctuation">;</span> <span class="token builtin class-name">return</span> <span class="token variable">$ct</span>   <span class="token comment"># 这个功能“返回”了2个值。</span>
  <span class="token comment"># 注意：这个技巧在 $ct &gt; 255 的情况下会失效。</span>
  <span class="token comment"># 如果要操作更大的数字，注释掉上面的 &quot;return $ct&quot; 就可以了。</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token string">&quot;<span class="token variable">$datafile</span>&quot;</span>   <span class="token comment"># 传入数据文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),In=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"note"},null,-1),Sn=s("code",null,"while",-1),Dn={href:"http://tldp.org/LDP/abs/html/redircb.html#REDIRREF",target:"_blank",rel:"noopener noreferrer"},Ln=s("code",null,"while",-1),Rn={href:"http://tldp.org/LDP/abs/html/internal.html#READPIPEREF",target:"_blank",rel:"noopener noreferrer"},Fn=l(`<h3 id="until" tabindex="-1"><a class="header-anchor" href="#until" aria-hidden="true">#</a> until</h3><p>与 <code>while</code> 循环相反，<code>until</code> 循环测试其顶部的循环条件，直到其中的条件为真时停止。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">until</span> <span class="token punctuation">[</span> condition-is-true <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  commands<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到，跟其他的一些编程语言不同，<code>until</code> 循环的测试条件在循环顶部。</p><p>就像在 <code>for</code> 循环中那样，将 <code>do</code> 和循环条件放在同一行时需要加一个分号。</p><p><code>until[ condition-is-true ] ; do</code></p><p>样例 11-19. <code>until</code> 循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">END_CONDITION</span><span class="token operator">=</span>end

<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">$END_CONDITION</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token comment"># 在循环顶部测试条件。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Input variable #1 &quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(<span class="token variable">$END_CONDITION</span> to exit)&quot;</span>
  <span class="token builtin class-name">read</span> var1
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;variable #1 = <span class="token variable">$var1</span>&quot;</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token comment">#                ---                   #</span>

<span class="token comment">#  就像 &quot;for&quot; 和 &quot;while&quot; 循环一样，</span>
<span class="token comment">#+ &quot;until&quot; 循环也可以写的像C语言一样。</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">until</span> <span class="token variable"><span class="token punctuation">((</span> var <span class="token operator">&gt;</span> LIMIT <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>  <span class="token comment"># ^^ ^     ^     ^^   没有方括号，没有 $ 前缀。</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$var</span> &quot;</span>
  <span class="token variable"><span class="token punctuation">((</span> var<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">done</span>    <span class="token comment"># 0 1 2 3 4 5 6 7 8 9 10</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何在 <code>for</code>，<code>while</code> 和 <code>until</code> 之间做出选择？我们知道在C语言中，在已知循环次数的情况下更加倾向于使用 <code>for</code> 循环。但是在Bash中情况可能更加复杂一些。Bash中的 <code>for</code> 循环相比起其他语言来说，结构更加松散，使用更加灵活。因此使用你认为最简单的就好。</p>`,9);function Pn(An,Bn){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,s("p",null,[n("参数 list 中允许含有 "),s("a",d,[n("通配符"),e(a)]),n("。")]),v,s("p",null,[n("[list] 中的每一个元素中都可能含有多个参数。这在处理参数组中非常有用。在这种情况下，使用 "),s("a",u,[m,e(a)]),n(" 命令（查看 "),s("a",k,[n("样例 15-16"),e(a)]),n("）强制解析 [list] 中的每一个元素，并将元素的每一个部分分配给位置参数。")]),b,s("p",null,[n("如果在 "),h,n(" 循环中省略 "),g,n(" 部分，那么循环将会遍历位置参数（"),f,n("）。"),s("a",q,[n("样例 A-15"),e(a)]),n(" 中使用到了这一点。也可以查看 "),s("a",_,[n("样例 15-17"),e(a)]),n("。")]),w,s("p",null,[n("可以在 "),y,n(" 循环中使用 "),s("a",$,[n("命令代换"),e(a)]),n(" 生成 [list]。查看 "),s("a",E,[n("样例 16-54"),e(a)]),n("，"),s("a",x,[n("样例 11-11"),e(a)]),n(" 和 "),s("a",I,[n("样例 16-48"),e(a)]),n("。")]),S,s("p",null,[n("最后一个关于 [list] 和命令代换的例子，但这个例子中的命令是一个"),s("a",D,[n("函数"),e(a)]),n("。")]),L,s("p",null,[n("只需要对上一个样例做一些小小的改动，就可以把在标准输出 "),R,n(" 中的循环 "),s("a",F,[n("重定向"),e(a)]),n(" 到文件中。")]),P,s("p",null,[n("还有另外一种看起来非常像C语言中循环那样的语法。你需要使用到 "),s("a",A,[n("双圆括号"),e(a)]),n(" 语法。")]),B,s("p",null,[n("还可以查看 "),s("a",C,[n("样例 27-16"),e(a)]),n("，"),s("a",T,[n("样例 27-17"),e(a)]),n(" 和 "),s("a",O,[n("样例 A-6"),e(a)]),n("。")]),N,s("blockquote",null,[s("p",null,[M,n(),s("a",U,[n("关键字"),e(a)]),n(),G,n(" 和 "),V,n(" 圈定了 for 循环代码块的范围。但是在一些特殊的情况下，也可以被 "),s("a",W,[n("大括号"),e(a)]),n(" 取代。")])]),J,s("p",null,[K,n(" 循环结构会在循环顶部检测循环条件，若循环条件为真（ "),s("a",X,[n("退出状态"),e(a)]),n(" 为0）则循环持续进行。与 "),s("a",H,[z,n(" 循环"),e(a)]),n(" 不同的是，"),Y,n(" 循环是在不知道循环次数的情况下使用的。")]),j,s("p",null,[n("在 "),Q,n(" 循环结构中，你不仅可以使用像 "),Z,n(" 中那样的 "),s("a",nn,[n("括号结构"),e(a)]),n("，也可以使用用途更广泛的 "),s("a",sn,[n("双括号结构"),e(a)]),n("（"),an,n("）。")]),en,ln,s("p",null,[n("在 "),tn,n(" 循环中，括号结构 "),s("a",on,[n("并不是必须存在的"),e(a)]),n("。比如说 "),s("a",pn,[cn,n(" 结构"),e(a)]),n("。")]),rn,s("p",null,[n("就像 "),dn,n(" 循环一样， "),vn,n(" 循环也可以使用双圆括号结构写得像C语言那样（也可以查看"),s("a",un,[n("样例 8-5"),e(a)]),n("）。")]),mn,s("p",null,[n("在测试部分，"),kn,n(" 循环可以调用 "),s("a",bn,[n("函数"),e(a)]),n("。")]),hn,s("blockquote",null,[s("p",null,[n("和 "),s("a",gn,[n("if 测试"),e(a)]),n(" 结构一样，"),fn,n(" 循环也可以省略括号。")])]),qn,s("p",null,[n("在 "),_n,n(" 循环中结合 "),s("a",wn,[yn,e(a)]),n(" 命令，我们就得到了一个非常易于使用的 "),s("a",$n,[En,e(a)]),n(" 结构。它可以用来读取和解析文件。")]),xn,s("blockquote",null,[s("p",null,[In,n(" 在 "),Sn,n(" 循环后面可以通过 < 将标准输入 "),s("a",Dn,[n("重定位到文件"),e(a)]),n(" 中。 "),Ln,n(" 循环同样可以 "),s("a",Rn,[n("通过管道"),e(a)]),n(" 传入标准输入中。")])]),Fn])}const On=i(c,[["render",Pn],["__file","11_1_loops.html.vue"]]);export{On as default};
