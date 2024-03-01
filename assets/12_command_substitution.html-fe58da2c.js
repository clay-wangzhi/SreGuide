import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as p,a as s,b as n,d as e,e as l}from"./app-de4b287a.js";const c={},r=l('<h1 id="第十二章-命令替换" tabindex="-1"><a class="header-anchor" href="#第十二章-命令替换" aria-hidden="true">#</a> 第十二章 命令替换</h1><p>命令替换重新指定一个[^1]或多个命令的输出。其实就是将命令的输出导到另外一个地方<a href="%E4%BB%8E%E6%8A%80%E6%9C%AF%E7%9A%84%E8%A7%92%E5%BA%A6%E6%9D%A5%E8%AE%B2%EF%BC%8C%E5%91%BD%E4%BB%A4%E6%9B%BF%E6%8D%A2%E5%AE%9E%E9%99%85%E4%B8%8A%E6%98%AF%E8%8E%B7%E5%BE%97%E4%BA%86%E5%91%BD%E4%BB%A4%E8%BE%93%E5%87%BA%E5%88%B0%E6%A0%87%E5%87%86%E8%BE%93%E5%87%BA%E7%9A%84%E7%BB%93%E6%9E%9C%EF%BC%8C%E7%84%B6%E5%90%8E%E9%80%9A%E8%BF%87%E8%B5%8B%E5%80%BC%E5%8F%B7%E5%B0%86%E7%BB%93%E6%9E%9C%E8%B5%8B%E5%80%BC%E7%BB%99%E4%B8%80%E4%B8%AA%E5%8F%98%E9%87%8F%E3%80%82">^2</a>。</p><p>命令替换的通常形式是（<code>`...`</code>），即用反引号引用命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">script_name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;The name of this script is <span class="token variable">$scirpt_name</span>.&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',4),d={href:"http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"for",-1),u=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> filename<span class="token variable">\`</span></span>   <span class="token comment"># &quot;filename&quot; 中包含了一系列需要被删除的文件名。</span>
<span class="token comment">#</span>
<span class="token comment"># S.C. 指出这样写可能会导致出现 &quot;arg list too long&quot; 的错误。</span>
<span class="token comment"># 更好的写法应该是 xargs rm -- &lt; filename</span>
<span class="token comment"># （ -- 可以在 &quot;filename&quot; 文件名以 &quot;-&quot; 为开头时仍旧正常执行 ）</span>

<span class="token assign-left variable">textfile_listing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> *.txt<span class="token variable">\`</span></span>
<span class="token comment"># 变量中包含了当前工作目录下所有的名为 *.txt 的文件。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$textfile_listing</span>

<span class="token assign-left variable">textfile_listing2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> *.txt<span class="token variable">)</span></span>   <span class="token comment"># 命令替换的另一种形式。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$textfile_listing2</span>
<span class="token comment"># 结果相同。</span>

<span class="token comment"># 这样将一系列文件名赋值给一个单一字符串可能会出现换行。</span>
<span class="token comment">#</span>
<span class="token comment"># 而更加安全的方式是将这一系列文件存入数组。</span>
<span class="token comment">#      shopt -s nullglob    # 设置后，如果没有匹配到文件，那么变量会被赋值为空。</span>
<span class="token comment">#      textfile_listing=( *.txt )</span>
<span class="token comment">#</span>
<span class="token comment"># 感谢 S.C.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"note"},null,-1),b={href:"http://tldp.org/LDP/abs/html/subshells.html#SUBSHELLSREF",target:"_blank",rel:"noopener noreferrer"},k=s("img",{src:"http://tldp.org/LDP/abs/images/caution.gif",alt:"caution"},null,-1),h={href:"http://tldp.org/LDP/abs/html/quotingvar.html#WSPLITREF",target:"_blank",rel:"noopener noreferrer"},g=l(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>COMMAND <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> a b<span class="token variable">\`</span></span>     <span class="token comment"># 2个参数：a和b</span>

COMMAND <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> a b<span class="token variable">\`</span></span>&quot;</span>   <span class="token comment"># 1个参数：&quot;a b&quot;</span>

COMMAND <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span><span class="token variable">\`</span></span>         <span class="token comment"># 没有参数</span>

COMMAND <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span><span class="token variable">\`</span></span>&quot;</span>       <span class="token comment"># 一个空参数</span>


<span class="token comment"># 感谢 S.C.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p>但即使不存在字符分割的情况，使用命令替换也会出现丢失尾部换行符的情况。</p></blockquote><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cd &quot;\`pwd\`&quot;  # 你是不是认为这条语句在任何情况下都不会出现错误？</span>
<span class="token comment"># 但事实却不是这样的。</span>

<span class="token function">mkdir</span> <span class="token string">&#39;dir with trailing newline
&#39;</span>

<span class="token builtin class-name">cd</span> <span class="token string">&#39;dir with trailing newline
&#39;</span>

<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span>&quot;</span>  <span class="token comment"># Bash 会出现如下错误提示：</span>
<span class="token comment"># bash: cd: /tmp/file with trailing newline: No such file or directory</span>

<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token environment constant">$PWD</span>&quot;</span>   <span class="token comment"># 这样写是对的。</span>





<span class="token assign-left variable">old_tty_setting</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>stty <span class="token parameter variable">-g</span><span class="token variable">)</span></span>   <span class="token comment"># 保存旧的设置。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hit a key &quot;</span>
stty <span class="token parameter variable">-icanon</span> <span class="token parameter variable">-echo</span>           <span class="token comment"># 禁用终端的 canonical 模式。</span>
                             <span class="token comment"># 同时禁用 echo。</span>
<span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">dd</span> <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null<span class="token variable">)</span></span>   <span class="token comment"># 使用 &#39;dd&#39; 获得键值。</span>
stty <span class="token string">&quot;<span class="token variable">$old_tty_setting</span>&quot;</span>      <span class="token comment"># 恢复旧的设置。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;You hit <span class="token variable">\${<span class="token operator">#</span>key}</span> key.&quot;</span>  <span class="token comment"># \${#variable} 表示 $variable 中的字符个数。</span>
<span class="token comment">#</span>
<span class="token comment"># 除了按下回车键外，其余情况都会输出 &quot;You hit 1 key.&quot;</span>
<span class="token comment"># 按下回车键会输出 &quot;You hit 0 key.&quot;</span>
<span class="token comment"># 因为唯一的换行符在命令替换中被丢失了。</span>

<span class="token comment"># 这段代码摘自 Stéphane Chazelas。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution"> 使用 <code>echo</code> 输出未被引用的命令代换的变量时会删掉尾部的换行。这可能会导致非常不好的情况出现。</p></blockquote><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">dir_listing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$dir_listing</span>     <span class="token comment"># 未被引用</span>

<span class="token comment"># 你希望会出现按行显示出文件列表。</span>

<span class="token comment"># 但是，你却看到了：</span>
<span class="token comment"># total 3 -rw-rw-r-- 1 bozo bozo 30 May 13 17:15 1.txt -rw-rw-r-- 1 bozo</span>
<span class="token comment"># bozo 51 May 15 20:57 t2.sh -rwxr-xr-x 1 bozo bozo 217 Mar 5 21:13 wi.sh</span>

<span class="token comment"># 所有换行都消失了。</span>


<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$dir_listing</span>&quot;</span>   <span class="token comment"># 被引用</span>
<span class="token comment"># -rw-rw-r--    1 bozo       30 May 13 17:15 1.txt</span>
<span class="token comment"># -rw-rw-r--    1 bozo       51 May 15 20:57 t2.sh</span>
<span class="token comment"># -rwxr-xr-x    1 bozo      217 Mar  5 21:13 wi.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,5),f={href:"http://tldp.org/LDP/abs/html/io-redirection.html#IOREDIRREF",target:"_blank",rel:"noopener noreferrer"},_={href:"http://tldp.org/LDP/abs/html/basic.html#CATREF",target:"_blank",rel:"noopener noreferrer"},q=s("code",null,"cat",-1),E=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">variable1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>file1<span class="token variable">\`</span></span>      <span class="token comment"># 将 &quot;file1&quot; 的内容赋值给 variable1。</span>
<span class="token assign-left variable">variable2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> file2<span class="token variable">\`</span></span>   <span class="token comment"># 将 &quot;file2&quot; 的内容赋值给 variable2。</span>
                        <span class="token comment"># 使用 cat 命令会开一个新进程，因此执行速度会比重定向慢。</span>

<span class="token comment"># 需要注意的是，这些变量中可能包含一些空格或者控制字符。</span>

<span class="token comment"># 无需显示的赋值给一个变量。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span> <span class="token operator">&lt;</span>$0<span class="token variable">\`</span></span>&quot;</span>           <span class="token comment"># 输出脚本自身。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  摘录自系统文件 /etc/rc.d/rc.sysinit</span>
<span class="token comment">#+ （Red Hat Linux 发行版）</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /fsckoptions <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">fsckoptions</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /fsckoptions<span class="token variable">\`</span></span>
<span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;/proc/ide/<span class="token variable">\${disk<span class="token punctuation">[</span>$device<span class="token punctuation">]</span>}</span>/media&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
             <span class="token assign-left variable">hdmedia</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /proc/ide/$<span class="token punctuation">{</span>disk<span class="token punctuation">[</span>$device<span class="token punctuation">]</span><span class="token punctuation">}</span>/media<span class="token variable">\`</span></span>
<span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">grep</span> -- <span class="token string">&quot;-&quot;</span><span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
       <span class="token assign-left variable">ktag</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /proc/version<span class="token variable">\`</span></span>&quot;</span>
<span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$usb</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">sleep</span> <span class="token number">5</span>
    <span class="token assign-left variable">mouseoutput</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /proc/bus/usb/devices <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;^I.*Cls=03.*Prot=02&quot;</span><span class="token variable">\`</span></span>
    <span class="token assign-left variable">kbdoutput</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /proc/bus/usb/devices <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;^I.*Cls=03.*Prot=01&quot;</span><span class="token variable">\`</span></span>
<span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution"> 尽量不要将一大段文字赋值给一个变量，除非你有足够的理由。也绝不要将一个二进制文件的内容赋值给一个变量。</p></blockquote><blockquote><p>样例 12-1. 蠢蠢的脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># stupid-script-tricks.sh: 不要在自己的电脑上尝试。</span>
<span class="token comment"># 摘自 &quot;Stupid Script Tricks&quot; 卷一。</span>

<span class="token builtin class-name">exit</span> <span class="token number">99</span>  <span class="token comment">### 如果你有胆，就注释掉这行。:)</span>

<span class="token assign-left variable">dangerous_variable</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /boot/vmlinuz<span class="token variable">\`</span></span>   <span class="token comment"># 压缩的 Linux 内核。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;string-length of \\<span class="token variable">$dangerous_variable</span> = <span class="token variable">\${<span class="token operator">#</span>dangerous_variable}</span>&quot;</span>
<span class="token comment"># $dangerous_variable 的长度为 794151</span>
<span class="token comment"># （更新版本的内核可能更大。）</span>
<span class="token comment"># 与 &#39;wc -c /boot/vmlinuz&#39; 的结果不同。</span>

<span class="token comment"># echo &quot;$dangerous_variable&quot;</span>
<span class="token comment"># 不要作死。否则脚本会挂起。</span>



<span class="token comment"># 将二进制文件的内容赋值给一个变量没有任何意义。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p>尽管脚本会挂起，但并不会出现缓存溢出的情况。而这正是像 Bash 这样的解释型语言相比起编译型语言能够提供更多保护的一个例子。</p></blockquote>`,5),$={href:"http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1",target:"_blank",rel:"noopener noreferrer"},w={href:"http://tldp.org/LDP/abs/html/internal.html#ECHOREF",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"echo",-1),B=l(`<p>样例 12-2. 将循环的输出结果赋值给变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># csubloop.sh: 将循环的输出结果赋值给变量。</span>

<span class="token assign-left variable">variable1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$i</span>&quot;</span>                 <span class="token comment">#  在这里，&#39;echo&#39; 命令非常关键。</span>
<span class="token keyword">done</span><span class="token variable">\`</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;variable1 = <span class="token variable">$variable1</span>&quot;</span>  <span class="token comment"># variable1 = 12345</span>


<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">variable2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$i</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">10</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$i</span>&quot;</span>                 <span class="token comment"># 很关键的 &#39;echo&#39;。</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;i += 1&quot;</span>                 <span class="token comment"># i 自增。</span>
<span class="token keyword">done</span><span class="token variable">\`</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;variable2 = <span class="token variable">$variable2</span>&quot;</span>  <span class="token comment"># variable2 = 0123456789</span>

<span class="token comment"># 这个例子表明可以在变量声明时嵌入循环。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>命令替换能够让 Bash 做更多的事情。而这仅仅需要在书写程序或者脚本时将结果输出到标准输出 <code>stdout</code> 中，然后将这些输出结果赋值给变量即可。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">/*  &quot;Hello, world.&quot; C program  */</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span> <span class="token string">&quot;Hello, world.\\n&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ gcc -0 hello hello.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># hello.sh</span>

<span class="token assign-left variable">greeting</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>./hello<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$greeting</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ sh hello.sh
Hello, world.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"> 在命令替换中，你可以使用 <code>$(...)</code> 来替代反引号。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">output</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> /<span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>/p $file<span class="token variable">)</span></span>   <span class="token comment"># 摘自 &quot;grp.sh&quot;。</span>

<span class="token comment"># 将文本文件的内容赋值给一个变量。</span>
<span class="token assign-left variable">File_contents1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $file1<span class="token variable">)</span></span>
<span class="token assign-left variable">File_contents2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token operator">&lt;</span>$file2<span class="token variable">)</span></span>        <span class="token comment"># 这么做也是可以的。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$(...)</code> 和反引号在处理双反斜杠上有所不同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ echo \`echo \\\\\`


bash$ echo $(echo \\\\)
\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$(...)</code> 允许嵌套。[^3]</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">word_count</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span> <span class="token function">wc</span> <span class="token parameter variable">-w</span> <span class="token punctuation">$(</span>echo * <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $8}&#39;</span><span class="token punctuation">)</span> <span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>样例 12-3. 寻找变位词（anagram）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># agram2.sh</span>
<span class="token comment"># 嵌套命令替换的例子。</span>

<span class="token comment"># 其中使用了作者写的工具包 &quot;yawl&quot; 中的 &quot;anagram&quot; 工具。</span>
<span class="token comment"># http://ibiblio.org/pub/Linux/libs/yawl-0.3.2.tar.gz</span>
<span class="token comment"># http://bash.deta.in/yawl-0.3.2.tar.gz</span>

<span class="token assign-left variable">E_NOARGS</span><span class="token operator">=</span><span class="token number">86</span>
<span class="token assign-left variable">E_BADARG</span><span class="token operator">=</span><span class="token number">87</span>
<span class="token assign-left variable">MINLEN</span><span class="token operator">=</span><span class="token number">7</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage <span class="token variable">$0</span> LETTERSET&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOARGS</span>         <span class="token comment"># 脚本需要命令行参数。</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">\${<span class="token operator">#</span>1}</span> <span class="token parameter variable">-lt</span> <span class="token variable">$MINLEN</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Argument must have at least <span class="token variable">$MINLEN</span> letters.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARG</span>
<span class="token keyword">fi</span>



<span class="token assign-left variable">FILTER</span><span class="token operator">=</span><span class="token string">&#39;.......&#39;</span>         <span class="token comment"># 至少需要7个字符。</span>
<span class="token comment">#       1234567</span>
<span class="token assign-left variable">Anagrams</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token punctuation">$(</span>anagram $1 <span class="token operator">|</span> <span class="token function">grep</span> $FILTER<span class="token punctuation">)</span> <span class="token variable">)</span></span> <span class="token punctuation">)</span>
<span class="token comment">#          $(     $(        嵌套命令集        ) )</span>
<span class="token comment">#        (              赋值给数组                )</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${<span class="token operator">#</span>Anagrams<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>  7+ letter anagrams found&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${Anagrams<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>      <span class="token comment"># 第一个变位词。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${Anagrams<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>      <span class="token comment"># 第二个变位词。</span>
                         <span class="token comment"># 以此类推。</span>

<span class="token comment"># echo &quot;\${Anagrams[*]}&quot;  # 将所有变位词在一行里面输出。</span>

<span class="token comment"># 可以配合后面的数组章节来理解上面的代码。</span>

<span class="token comment"># 建议同时查看另一个寻找变位词的脚本 agram.sh。</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>以下是包含命令替换的样例：</p>`,5),L={href:"http://tldp.org/LDP/abs/html/loops1.html#BINGREP",target:"_blank",rel:"noopener noreferrer"},D={href:"http://tldp.org/LDP/abs/html/testbranch.html#CASECMD",target:"_blank",rel:"noopener noreferrer"},y={href:"http://tldp.org/LDP/abs/html/randomvar.html#SEEDINGRANDOM",target:"_blank",rel:"noopener noreferrer"},A={href:"http://tldp.org/LDP/abs/html/moreadv.html#EX57",target:"_blank",rel:"noopener noreferrer"},P={href:"http://tldp.org/LDP/abs/html/textproc.html#LOWERCASE",target:"_blank",rel:"noopener noreferrer"},R={href:"http://tldp.org/LDP/abs/html/textproc.html#GRP",target:"_blank",rel:"noopener noreferrer"},C={href:"http://tldp.org/LDP/abs/html/extmisc.html#EX53",target:"_blank",rel:"noopener noreferrer"},F={href:"http://tldp.org/LDP/abs/html/loops1.html#EX24",target:"_blank",rel:"noopener noreferrer"},N={href:"http://tldp.org/LDP/abs/html/loops1.html#SYMLINKS",target:"_blank",rel:"noopener noreferrer"},M={href:"http://tldp.org/LDP/abs/html/filearchiv.html#STRIPC",target:"_blank",rel:"noopener noreferrer"},I={href:"http://tldp.org/LDP/abs/html/redircb.html#REDIR4",target:"_blank",rel:"noopener noreferrer"},S={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#TREE",target:"_blank",rel:"noopener noreferrer"},O={href:"http://tldp.org/LDP/abs/html/procref1.html#PIDID",target:"_blank",rel:"noopener noreferrer"},T={href:"http://tldp.org/LDP/abs/html/mathc.html#MONTHLYPMT",target:"_blank",rel:"noopener noreferrer"},z={href:"http://tldp.org/LDP/abs/html/mathc.html#BASE",target:"_blank",rel:"noopener noreferrer"},H={href:"http://tldp.org/LDP/abs/html/mathc.html#ALTBC",target:"_blank",rel:"noopener noreferrer"},G={href:"http://tldp.org/LDP/abs/html/internal.html#BUILTINREF",target:"_blank",rel:"noopener noreferrer"},V={href:"http://tldp.org/LDP/abs/html/assortedtips.html#RVT",target:"_blank",rel:"noopener noreferrer"},Y=s("p",null,[n("[^3]: 事实上，使用反引号进行嵌套也是可行的。但是 John Default 提醒到需要将内部的反引号进行转义。"),s("pre",null,"word_count=` wc -w \\`echo * | awk '{print $8}'\\` `")],-1);function U(W,X){const a=i("ExternalLinkIcon");return o(),p("div",null,[r,s("p",null,[n("命令的输出可以作为另一个命令的参数，也可以赋值给一个变量。甚至在 "),s("a",d,[v,e(a)]),n(" 循环中可以用输出产生参数表。")]),u,s("blockquote",null,[s("p",null,[m,n(" 命令替换本质上是调用了一个 "),s("a",b,[n("子进程"),e(a)]),n(" 来执行。")])]),s("blockquote",null,[s("p",null,[k,n(" 命令替换有可能会出现 "),s("a",h,[n("字符分割"),e(a)]),n(" 的情况。")])]),g,s("p",null,[n("你甚至可以使用 "),s("a",f,[n("重定向"),e(a)]),n(" 或者 "),s("a",_,[q,e(a)]),n(" 命令把一个文件的内容通过命令代换赋值给一个变量。")]),E,s("p",null,[n("命令替换允许将 "),s("a",$,[n("循环"),e(a)]),n(" 的输出结果赋值给一个变量。这其中的关键在于循环内部的 "),s("a",w,[x,e(a)]),n(" 命令。")]),B,s("ol",null,[s("li",null,[s("a",L,[n("样例 11-8"),e(a)])]),s("li",null,[s("a",D,[n("样例 11-27"),e(a)])]),s("li",null,[s("a",y,[n("样例 9-16"),e(a)])]),s("li",null,[s("a",A,[n("样例 16-3"),e(a)])]),s("li",null,[s("a",P,[n("样例 16-22"),e(a)])]),s("li",null,[s("a",R,[n("样例 16-17"),e(a)])]),s("li",null,[s("a",C,[n("样例 16-54"),e(a)])]),s("li",null,[s("a",F,[n("样例 11-14"),e(a)])]),s("li",null,[s("a",N,[n("样例 11-11"),e(a)])]),s("li",null,[s("a",M,[n("样例 16-32"),e(a)])]),s("li",null,[s("a",I,[n("样例 20-8"),e(a)])]),s("li",null,[s("a",S,[n("样例 A-16"),e(a)])]),s("li",null,[s("a",O,[n("样例 29-3"),e(a)])]),s("li",null,[s("a",T,[n("样例 16-47"),e(a)])]),s("li",null,[s("a",z,[n("样例 16-48"),e(a)])]),s("li",null,[s("a",H,[n("样例 16-49"),e(a)])])]),s("p",null,[n("[^1]: 在命令替换中可以使用外部系统命令，"),s("a",G,[n("内建命令"),e(a)]),n(" 甚至是 "),s("a",V,[n("脚本函数"),e(a)]),n("。")]),Y])}const j=t(c,[["render",U],["__file","12_command_substitution.html.vue"]]);export{j as default};
