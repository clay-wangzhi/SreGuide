<template><h1 id="第十二章-命令替换" tabindex="-1"><a class="header-anchor" href="#第十二章-命令替换" aria-hidden="true">#</a> 第十二章 命令替换</h1>
<p>命令替换重新指定一个<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>或多个命令的输出。其实就是将命令的输出导到另外一个地方<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup>。</p>
<p>命令替换的通常形式是（<code>`...`</code>），即用反引号引用命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">script_name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"The name of this script is <span class="token variable">$scirpt_name</span>."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>命令的输出可以作为另一个命令的参数，也可以赋值给一个变量。甚至在 <a href="http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1" target="_blank" rel="noopener noreferrer"><code>for</code><ExternalLinkIcon/></a> 循环中可以用输出产生参数表。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> filename<span class="token variable">`</span></span>   <span class="token comment"># "filename" 中包含了一系列需要被删除的文件名。</span>
<span class="token comment">#</span>
<span class="token comment"># S.C. 指出这样写可能会导致出现 "arg list too long" 的错误。</span>
<span class="token comment"># 更好的写法应该是 xargs rm -- &lt; filename</span>
<span class="token comment"># （ -- 可以在 "filename" 文件名以 "-" 为开头时仍旧正常执行 ）</span>

<span class="token assign-left variable">textfile_listing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">ls</span> *.txt<span class="token variable">`</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> 命令替换本质上是调用了一个 <a href="http://tldp.org/LDP/abs/html/subshells.html#SUBSHELLSREF" target="_blank" rel="noopener noreferrer">子进程<ExternalLinkIcon/></a> 来执行。</p>
</blockquote>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> 命令替换有可能会出现 <a href="http://tldp.org/LDP/abs/html/quotingvar.html#WSPLITREF" target="_blank" rel="noopener noreferrer">字符分割<ExternalLinkIcon/></a> 的情况。</p>
</blockquote>
<blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>COMMAND <span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> a b<span class="token variable">`</span></span>     <span class="token comment"># 2个参数：a和b</span>

COMMAND <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> a b<span class="token variable">`</span></span>"</span>   <span class="token comment"># 1个参数："a b"</span>

COMMAND <span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span><span class="token variable">`</span></span>         <span class="token comment"># 没有参数</span>

COMMAND <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span><span class="token variable">`</span></span>"</span>       <span class="token comment"># 一个空参数</span>


<span class="token comment"># 感谢 S.C.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></blockquote>
<blockquote>
<p>但即使不存在字符分割的情况，使用命令替换也会出现丢失尾部换行符的情况。</p>
</blockquote>
<blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># cd "`pwd`"  # 你是不是认为这条语句在任何情况下都不会出现错误？</span>
<span class="token comment"># 但事实却不是这样的。</span>

<span class="token function">mkdir</span> <span class="token string">'dir with trailing newline
'</span>

<span class="token builtin class-name">cd</span> <span class="token string">'dir with trailing newline
'</span>

<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">pwd</span><span class="token variable">`</span></span>"</span>  <span class="token comment"># Bash 会出现如下错误提示：</span>
<span class="token comment"># bash: cd: /tmp/file with trailing newline: No such file or directory</span>

<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token environment constant">$PWD</span>"</span>   <span class="token comment"># 这样写是对的。</span>





<span class="token assign-left variable">old_tty_setting</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>stty -g<span class="token variable">)</span></span>   <span class="token comment"># 保存旧的设置。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Hit a key "</span>
stty -icanon -echo           <span class="token comment"># 禁用终端的 canonical 模式。</span>
                             <span class="token comment"># 同时禁用 echo。</span>
<span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">dd</span> <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span> /dev/null<span class="token variable">)</span></span>   <span class="token comment"># 使用 'dd' 获得键值。</span>
stty <span class="token string">"<span class="token variable">$old_tty_setting</span>"</span>      <span class="token comment"># 恢复旧的设置。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"You hit <span class="token variable">${<span class="token operator">#</span>key}</span> key."</span>  <span class="token comment"># ${#variable} 表示 $variable 中的字符个数。</span>
<span class="token comment">#</span>
<span class="token comment"># 除了按下回车键外，其余情况都会输出 "You hit 1 key."</span>
<span class="token comment"># 按下回车键会输出 "You hit 0 key."</span>
<span class="token comment"># 因为唯一的换行符在命令替换中被丢失了。</span>

<span class="token comment"># 这段代码摘自 Stéphane Chazelas。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></blockquote>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> 使用 <code>echo</code> 输出未被引用的命令代换的变量时会删掉尾部的换行。这可能会导致非常不好的情况出现。</p>
</blockquote>
<blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">dir_listing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">ls</span> -l<span class="token variable">`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$dir_listing</span>     <span class="token comment"># 未被引用</span>

<span class="token comment"># 你希望会出现按行显示出文件列表。</span>

<span class="token comment"># 但是，你却看到了：</span>
<span class="token comment"># total 3 -rw-rw-r-- 1 bozo bozo 30 May 13 17:15 1.txt -rw-rw-r-- 1 bozo</span>
<span class="token comment"># bozo 51 May 15 20:57 t2.sh -rwxr-xr-x 1 bozo bozo 217 Mar 5 21:13 wi.sh</span>

<span class="token comment"># 所有换行都消失了。</span>


<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$dir_listing</span>"</span>   <span class="token comment"># 被引用</span>
<span class="token comment"># -rw-rw-r--    1 bozo       30 May 13 17:15 1.txt</span>
<span class="token comment"># -rw-rw-r--    1 bozo       51 May 15 20:57 t2.sh</span>
<span class="token comment"># -rwxr-xr-x    1 bozo      217 Mar  5 21:13 wi.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></blockquote>
<p>你甚至可以使用 <a href="http://tldp.org/LDP/abs/html/io-redirection.html#IOREDIRREF" target="_blank" rel="noopener noreferrer">重定向<ExternalLinkIcon/></a> 或者 <a href="http://tldp.org/LDP/abs/html/basic.html#CATREF" target="_blank" rel="noopener noreferrer"><code>cat</code><ExternalLinkIcon/></a> 命令把一个文件的内容通过命令代换赋值给一个变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">variable1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token operator">&lt;</span>file1<span class="token variable">`</span></span>      <span class="token comment"># 将 "file1" 的内容赋值给 variable1。</span>
<span class="token assign-left variable">variable2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> file2<span class="token variable">`</span></span>   <span class="token comment"># 将 "file2" 的内容赋值给 variable2。</span>
                        <span class="token comment"># 使用 cat 命令会开一个新进程，因此执行速度会比重定向慢。</span>

<span class="token comment"># 需要注意的是，这些变量中可能包含一些空格或者控制字符。</span>

<span class="token comment"># 无需显示的赋值给一个变量。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable"><span class="token variable">`</span> <span class="token operator">&lt;</span>$0<span class="token variable">`</span></span>"</span>           <span class="token comment"># 输出脚本自身。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#  摘录自系统文件 /etc/rc.d/rc.sysinit</span>
<span class="token comment">#+ （Red Hat Linux 发行版）</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> -f /fsckoptions <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">fsckoptions</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> /fsckoptions<span class="token variable">`</span></span>
<span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -e <span class="token string">"/proc/ide/<span class="token variable">${disk<span class="token punctuation">[</span>$device<span class="token punctuation">]</span>}</span>/media"</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
             <span class="token assign-left variable">hdmedia</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> /proc/ide/$<span class="token punctuation">{</span>disk<span class="token punctuation">[</span>$device<span class="token punctuation">]</span><span class="token punctuation">}</span>/media<span class="token variable">`</span></span>
<span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -n <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> -r <span class="token operator">|</span> <span class="token function">grep</span> -- <span class="token string">"-"</span><span class="token variable">`</span></span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
       <span class="token assign-left variable">ktag</span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> /proc/version<span class="token variable">`</span></span>"</span>
<span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$usb</span> <span class="token operator">=</span> <span class="token string">"1"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">sleep</span> <span class="token number">5</span>
    <span class="token assign-left variable">mouseoutput</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> /proc/bus/usb/devices <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token operator">|</span><span class="token function">grep</span> -E <span class="token string">"^I.*Cls=03.*Prot=02"</span><span class="token variable">`</span></span>
    <span class="token assign-left variable">kbdoutput</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> /proc/bus/usb/devices <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token operator">|</span><span class="token function">grep</span> -E <span class="token string">"^I.*Cls=03.*Prot=01"</span><span class="token variable">`</span></span>
<span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> 尽量不要将一大段文字赋值给一个变量，除非你有足够的理由。也绝不要将一个二进制文件的内容赋值给一个变量。</p>
</blockquote>
<blockquote>
<p>样例 12-1. 蠢蠢的脚本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># stupid-script-tricks.sh: 不要在自己的电脑上尝试。</span>
<span class="token comment"># 摘自 "Stupid Script Tricks" 卷一。</span>

<span class="token builtin class-name">exit</span> <span class="token number">99</span>  <span class="token comment">### 如果你有胆，就注释掉这行。:)</span>

<span class="token assign-left variable">dangerous_variable</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> /boot/vmlinuz<span class="token variable">`</span></span>   <span class="token comment"># 压缩的 Linux 内核。</span>

<span class="token builtin class-name">echo</span> <span class="token string">"string-length of \<span class="token variable">$dangerous_variable</span> = <span class="token variable">${<span class="token operator">#</span>dangerous_variable}</span>"</span>
<span class="token comment"># $dangerous_variable 的长度为 794151</span>
<span class="token comment"># （更新版本的内核可能更大。）</span>
<span class="token comment"># 与 'wc -c /boot/vmlinuz' 的结果不同。</span>

<span class="token comment"># echo "$dangerous_variable"</span>
<span class="token comment"># 不要作死。否则脚本会挂起。</span>



<span class="token comment"># 将二进制文件的内容赋值给一个变量没有任何意义。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></blockquote>
<blockquote>
<p>尽管脚本会挂起，但并不会出现缓存溢出的情况。而这正是像 Bash 这样的解释型语言相比起编译型语言能够提供更多保护的一个例子。</p>
</blockquote>
<p>命令替换允许将 <a href="http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1" target="_blank" rel="noopener noreferrer">循环<ExternalLinkIcon/></a> 的输出结果赋值给一个变量。这其中的关键在于循环内部的 <a href="http://tldp.org/LDP/abs/html/internal.html#ECHOREF" target="_blank" rel="noopener noreferrer"><code>echo</code><ExternalLinkIcon/></a> 命令。</p>
<p>样例 12-2. 将循环的输出结果赋值给变量</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># csubloop.sh: 将循环的输出结果赋值给变量。</span>

<span class="token assign-left variable">variable1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">"<span class="token variable">$i</span>"</span>                 <span class="token comment">#  在这里，'echo' 命令非常关键。</span>
<span class="token keyword">done</span><span class="token variable">`</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">"variable1 = <span class="token variable">$variable1</span>"</span>  <span class="token comment"># variable1 = 12345</span>


<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">variable2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$i</span>"</span> -lt <span class="token number">10</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">"<span class="token variable">$i</span>"</span>                 <span class="token comment"># 很关键的 'echo'。</span>
  <span class="token builtin class-name">let</span> <span class="token string">"i += 1"</span>                 <span class="token comment"># i 自增。</span>
<span class="token keyword">done</span><span class="token variable">`</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">"variable2 = <span class="token variable">$variable2</span>"</span>  <span class="token comment"># variable2 = 0123456789</span>

<span class="token comment"># 这个例子表明可以在变量声明时嵌入循环。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote>
<p>命令替换能够让 Bash 做更多的事情。而这仅仅需要在书写程序或者脚本时将结果输出到标准输出 <code>stdout</code> 中，然后将这些输出结果赋值给变量即可。</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>

<span class="token comment">/*  "Hello, world." C program  */</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span> <span class="token string">"Hello, world.\n"</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash$ gcc -0 hello hello.c
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># hello.sh</span>

<span class="token assign-left variable">greeting</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>./hello<span class="token variable">`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$greeting</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash$ sh hello.sh
Hello, world.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> 在命令替换中，你可以使用 <code>$(...)</code> 来替代反引号。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">output</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">sed</span> -n /<span class="token string">"<span class="token variable">$1</span>"</span>/p $file<span class="token variable">)</span></span>   <span class="token comment"># 摘自 "grp.sh"。</span>

<span class="token comment"># 将文本文件的内容赋值给一个变量。</span>
<span class="token assign-left variable">File_contents1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $file1<span class="token variable">)</span></span>
<span class="token assign-left variable">File_contents2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token operator">&lt;</span>$file2<span class="token variable">)</span></span>        <span class="token comment"># 这么做也是可以的。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>$(...)</code> 和反引号在处理双反斜杠上有所不同。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash$ echo `echo \\`


bash$ echo $(echo \\)
\
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>$(...)</code> 允许嵌套。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3" /></sup></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">word_count</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span> <span class="token function">wc</span> -w <span class="token punctuation">$(</span>echo * <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $8}'</span><span class="token punctuation">)</span> <span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>样例 12-3. 寻找变位词（anagram）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># agram2.sh</span>
<span class="token comment"># 嵌套命令替换的例子。</span>

<span class="token comment"># 其中使用了作者写的工具包 "yawl" 中的 "anagram" 工具。</span>
<span class="token comment"># http://ibiblio.org/pub/Linux/libs/yawl-0.3.2.tar.gz</span>
<span class="token comment"># http://bash.deta.in/yawl-0.3.2.tar.gz</span>

<span class="token assign-left variable">E_NOARGS</span><span class="token operator">=</span><span class="token number">86</span>
<span class="token assign-left variable">E_BADARG</span><span class="token operator">=</span><span class="token number">87</span>
<span class="token assign-left variable">MINLEN</span><span class="token operator">=</span><span class="token number">7</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Usage <span class="token variable">$0</span> LETTERSET"</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOARGS</span>         <span class="token comment"># 脚本需要命令行参数。</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">${<span class="token operator">#</span>1}</span> -lt <span class="token variable">$MINLEN</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Argument must have at least <span class="token variable">$MINLEN</span> letters."</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARG</span>
<span class="token keyword">fi</span>



<span class="token assign-left variable">FILTER</span><span class="token operator">=</span><span class="token string">'.......'</span>         <span class="token comment"># 至少需要7个字符。</span>
<span class="token comment">#       1234567</span>
<span class="token assign-left variable">Anagrams</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token punctuation">$(</span>anagram $1 <span class="token operator">|</span> <span class="token function">grep</span> $FILTER<span class="token punctuation">)</span> <span class="token variable">)</span></span> <span class="token punctuation">)</span>
<span class="token comment">#          $(     $(        嵌套命令集        ) )</span>
<span class="token comment">#        (              赋值给数组                )</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${<span class="token operator">#</span>Anagrams<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>  7+ letter anagrams found"</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${Anagrams<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>      <span class="token comment"># 第一个变位词。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${Anagrams<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>      <span class="token comment"># 第二个变位词。</span>
                         <span class="token comment"># 以此类推。</span>

<span class="token comment"># echo "${Anagrams[*]}"  # 将所有变位词在一行里面输出。</span>

<span class="token comment"># 可以配合后面的数组章节来理解上面的代码。</span>

<span class="token comment"># 建议同时查看另一个寻找变位词的脚本 agram.sh。</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div></blockquote>
<p>以下是包含命令替换的样例：</p>
<ol>
<li><a href="http://tldp.org/LDP/abs/html/loops1.html#BINGREP" target="_blank" rel="noopener noreferrer">样例 11-8<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/testbranch.html#CASECMD" target="_blank" rel="noopener noreferrer">样例 11-27<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/randomvar.html#SEEDINGRANDOM" target="_blank" rel="noopener noreferrer">样例 9-16<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/moreadv.html#EX57" target="_blank" rel="noopener noreferrer">样例 16-3<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/textproc.html#LOWERCASE" target="_blank" rel="noopener noreferrer">样例 16-22<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/textproc.html#GRP" target="_blank" rel="noopener noreferrer">样例 16-17<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/extmisc.html#EX53" target="_blank" rel="noopener noreferrer">样例 16-54<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/loops1.html#EX24" target="_blank" rel="noopener noreferrer">样例 11-14<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/loops1.html#SYMLINKS" target="_blank" rel="noopener noreferrer">样例 11-11<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/filearchiv.html#STRIPC" target="_blank" rel="noopener noreferrer">样例 16-32<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/redircb.html#REDIR4" target="_blank" rel="noopener noreferrer">样例 20-8<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#TREE" target="_blank" rel="noopener noreferrer">样例 A-16<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/procref1.html#PIDID" target="_blank" rel="noopener noreferrer">样例 29-3<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/mathc.html#MONTHLYPMT" target="_blank" rel="noopener noreferrer">样例 16-47<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/mathc.html#BASE" target="_blank" rel="noopener noreferrer">样例 16-48<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/mathc.html#ALTBC" target="_blank" rel="noopener noreferrer">样例 16-49<ExternalLinkIcon/></a></li>
</ol>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>在命令替换中可以使用外部系统命令，<a href="http://tldp.org/LDP/abs/html/internal.html#BUILTINREF" target="_blank" rel="noopener noreferrer">内建命令<ExternalLinkIcon/></a> 甚至是 <a href="http://tldp.org/LDP/abs/html/assortedtips.html#RVT" target="_blank" rel="noopener noreferrer">脚本函数<ExternalLinkIcon/></a>。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p>从技术的角度来讲，命令替换实际上是获得了命令输出到标准输出的结果，然后通过赋值号将结果赋值给一个变量。 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote3" class="footnote-item"><p>事实上，使用反引号进行嵌套也是可行的。但是 John Default 提醒到需要将内部的反引号进行转义。<pre>word_count=` wc -w \`echo * | awk '{print $8}'\` `</pre> <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
