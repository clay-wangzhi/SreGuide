import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as d,a as s,b as n,d as a,w as t,e}from"./app-691f2d69.js";const r={},u=e(`<h1 id="第三章-特殊字符" tabindex="-1"><a class="header-anchor" href="#第三章-特殊字符" aria-hidden="true">#</a> 第三章 特殊字符</h1><p>是什么让一个字符变得<em>特殊</em>呢？如果一个字符不仅具有<em>字面</em>意义，而且具有<em>元意（meta-meaning）</em>，我们就称它为特殊字符。特殊字符同命令和关键词（keywords）一样，是bash脚本的组成部分。</p><p>你在脚本或其他地方都能够找到特殊字符。</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> #</h3><p>注释符。如果一行脚本的开头是#（除了#!），那么代表这一行是注释，不会被执行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 这是一行注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注释也可能会在一行命令结束之后出现。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;A comment will follow.&quot;</span> <span class="token comment"># 这儿可以写注释</span>
<span class="token comment">#                            ^ 注意在#之前有空格</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注释也可以出现在一行开头的空白符（whitespace）之后。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token comment"># 这个注释前面存在着一个制表符（tab）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注释甚至可以嵌入到管道命令（pipe）之中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">initial</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> <span class="token string">&quot;<span class="token variable">$startfile</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;/#/d&#39;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\n&#39;</span> <span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token comment"># 删除所有带&#39;#&#39;注释符号的行</span>
           <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/\\./\\. /g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/_/_ /g&#39;</span><span class="token variable">\`</span></span> <span class="token punctuation">)</span>
<span class="token comment"># 摘录自脚本 life.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice"> 命令不能写在同一行注释之后。因为没有任何方法可以结束注释(仅支持单行注释)，为了让新命令正常执行，另起一行写吧。</p></blockquote><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 当然，在<code>echo</code>语句中被引用或被转义的#不会被认为是注释。同样，在某些参数替换式或常量表达式中的#也不会被认为是注释。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The # here does not begin a comment.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;The # here does not begin a comment.&#39;</span>
<span class="token builtin class-name">echo</span> The <span class="token punctuation">\\</span># here does not begin a comment.
<span class="token builtin class-name">echo</span> The <span class="token comment"># here begins a comment.</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PATH</span><span class="token operator">#</span>*<span class="token operator">:</span>}</span>       <span class="token comment"># 参数替换而非注释</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span> <span class="token number">2</span>#<span class="token number">101011</span> <span class="token variable">))</span></span>  <span class="token comment"># 进制转换而非注释</span>

<span class="token comment"># 感谢S.C.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为引用符和转义符（&quot; &#39; \\）转义了#。</p><p>一些模式匹配操作同样使用了#。</p><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> ;</h3><p>命令分隔符[分号]。允许在同一行内放置两条或更多的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> hello<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> there

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;<span class="token variable">$filename</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>    <span class="token comment">#  注意在分号以后有一个空格</span>
<span class="token comment">#+                   ^^</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File <span class="token variable">$filename</span> exists.&quot;</span><span class="token punctuation">;</span> <span class="token function">cp</span> <span class="token variable">$filename</span> <span class="token variable">$filename</span>.bak
<span class="token keyword">else</span>   <span class="token comment">#                       ^^</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File <span class="token variable">$filename</span> not found.&quot;</span><span class="token punctuation">;</span> <span class="token function">touch</span> <span class="token variable">$filename</span>
<span class="token keyword">fi</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;File test complete.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意有时候&quot;;&quot;需要被转义才能正常工作。</p><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> ;;</h3><p><code>case</code>条件语句终止符[双分号]。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span> <span class="token keyword">in</span>
  abc<span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$variable</span> = abc&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  xyz<span class="token punctuation">)</span>  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$variable</span> = xyz&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> ;;&amp;, ;&amp;</h3><p><code>case</code>条件语句终止符（Bash4+ 版本）。</p><h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> .</h3><p>句点命令[句点]。等价于<code>source</code>命令（查看样例 15-22）。这是一个bash的内建命令。</p><h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-hidden="true">#</a> .</h3><p>句点可以作为文件名的一部分。如果它在文件名开头，那说明此文件是隐藏文件。使用不带参数的<code>ls</code>命令不会显示隐藏文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ touch .hidden-file
bash$ ls -l
total 10
 -rw-r--r--    1 bozo      4034 Jul 18 22:04 data1.addressbook
 -rw-r--r--    1 bozo      4602 May 25 13:58 data1.addressbook.bak
 -rw-r--r--    1 bozo       877 Dec 17  2000 employment.addressbook
	
	
bash$ ls -al
total 14
 drwxrwxr-x    2 bozo  bozo      1024 Aug 29 20:54 ./
 drwx------   52 bozo  bozo      3072 Aug 29 20:51 ../
 -rw-r--r--    1 bozo  bozo      4034 Jul 18 22:04 data1.addressbook
 -rw-r--r--    1 bozo  bozo      4602 May 25 13:58 data1.addressbook.bak
 -rw-r--r--    1 bozo  bozo       877 Dec 17  2000 employment.addressbook
 -rw-rw-r--    1 bozo  bozo         0 Aug 29 20:54 .hidden-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当句点出现在目录中时，单个句点代表当前工作目录，两个句点代表上级目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ pwd
/home/bozo/projects

bash$ cd .
bash$ pwd
/home/bozo/projects

bash$ cd ..
bash$ pwd
/home/bozo/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>句点通常代表文件移动的目的地（目录），下式代表的是当前目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ cp /home/bozo/current_work/junk/* .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>复制所有的“垃圾文件”到<code>当前目录</code></p></blockquote><h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> .</h3><p>句点匹配符。在<em>正则表达式</em>中，点号意味着匹配任意单个字符。</p><h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7" aria-hidden="true">#</a> &quot;</h3>`,39),m=s("h3",{id:"-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#-8","aria-hidden":"true"},"#"),n(" '")],-1),v=e(`<h3 id="-9" tabindex="-1"><a class="header-anchor" href="#-9" aria-hidden="true">#</a> ,</h3><p>逗号运算符。逗号运算符[^1]将一系列的算术表达式串联在一起。算术表达式依次被执行，但只返回最后一个表达式的值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> <span class="token string">&quot;t2 = <span class="token variable"><span class="token punctuation">((</span>a <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">15</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">))</span></span>&quot;</span>
<span class="token comment"># a被赋值为9，t2被赋值为15 / 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>逗号运算符也可以用来连接字符串。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> /<span class="token punctuation">{</span>,usr/<span class="token punctuation">}</span>bin/*calc
<span class="token comment">#             ^    在 /bin 与 /usr/bin 目录中</span>
<span class="token comment">#+                 找到所有的以&quot;calc&quot;结尾的可执行文件</span>
<span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
          <span class="token builtin class-name">echo</span> <span class="token variable">$file</span>
        <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token comment"># /bin/ipcalc</span>
<span class="token comment"># /usr/bin/kcalc</span>
<span class="token comment"># /usr/bin/oidcalc</span>
<span class="token comment"># /usr/bin/oocalc</span>

<span class="token comment"># 感谢Rory Winston提供的执行结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-10" tabindex="-1"><a class="header-anchor" href="#-10" aria-hidden="true">#</a> ,, ,</h3><p>在参数替换中进行小写字母转换（Bash4 新增）。</p><h3 id="-11" tabindex="-1"><a class="header-anchor" href="#-11" aria-hidden="true">#</a> \\</h3><p>转义符[反斜杠]。转义某字符的标志。</p><p><code>\\x</code>转义了字符x。双引号&quot;&quot;内的X与单引号内的X具有同样的效果。 转义符也可以用来转义&quot;与&#39;，使它们表达其字面含义。</p><p>第五章将更加深入的解释转义字符。</p><h3 id="-12" tabindex="-1"><a class="header-anchor" href="#-12" aria-hidden="true">#</a> /</h3><p>文件路径分隔符[正斜杠]。起分割路径的作用。（比如 <code>/home/bozo/projects/Makefile</code>）</p><p>它也在算术运算中充当除法运算符。</p><h3 id="-13" tabindex="-1"><a class="header-anchor" href="#-13" aria-hidden="true">#</a> \`</h3><p>命令替换符。<code>\`command\`</code>结构可以使得命令的输出结果赋值给一个变量。通常也被称作后引号（backquotes）或反引号（backticks）。</p><h3 id="-14" tabindex="-1"><a class="header-anchor" href="#-14" aria-hidden="true">#</a> :</h3><p>空命令[冒号]。它在shell中等价于&quot;NOP&quot;（即no op，空操作）与shell内建命令true有同样的效果。它本身也是Bash的内建命令之一，返回值是true（0）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">:</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>   <span class="token comment"># 返回0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在无限循环中的应用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span>
   operation-1
   operation-2
   <span class="token punctuation">..</span>.
   operation-n
<span class="token keyword">done</span>

<span class="token comment"># 等价于</span>
<span class="token comment">#    while true</span>
<span class="token comment">#    do</span>
<span class="token comment">#      ...</span>
<span class="token comment">#    done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可在 <code>if/then</code> 中充当占位符：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> condition
<span class="token keyword">then</span> <span class="token builtin class-name">:</span>   <span class="token comment"># 什么都不做，跳出判断执行下一条语句</span>
<span class="token keyword">else</span>
   take-some-action
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在二元操作中作占位符: 查看<em>样例 8-2</em>或<em>默认参数</em>部分。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">:</span> <span class="token variable">\${username=\`whoami\`}</span>
<span class="token comment"># \${username=\`whoami\`}   如果没有:就会报错</span>
<span class="token comment">#                        除非 &quot;username&quot; 是系统命令或内建命令</span>

<span class="token builtin class-name">:</span> <span class="token variable">\${1?&quot;Usage<span class="token operator">:</span> $0 ARGUMENT&quot;}</span>     <span class="token comment"># 摘自样例脚本 &quot;usage-message.sh&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看<em>样例 19-10</em>了解空命令在here document中作为占位符的情况。</p><p>使用参数替换为字符串变量赋值（查看<em>样例 10-7</em>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">:</span> <span class="token variable">\${<span class="token environment constant">HOSTNAME</span>?}</span> <span class="token variable">\${<span class="token environment constant">USER</span>?}</span> <span class="token variable">\${MAIL?}</span>
<span class="token comment">#  如果其中一个或多个必要的环境变量没有被设置</span>
<span class="token comment">#  将会打印错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看<em>变量扩展</em>或<em>字符串替换</em>章节了解空命令在其中的作用。</p><p>与<code>&gt;</code>重定向操作符结合，可以在不改变文件权限的情况下清空文件。如果文件不存在，那么将创建这个文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">:</span> <span class="token operator">&gt;</span> data.xxx   <span class="token comment"># 文件 &quot;data.xxx&quot; 已被清空</span>

<span class="token comment"># 与 cat /dev/null &gt;data.xxx 作用相同</span>
<span class="token comment"># 但是此操作不会产生一个新进程，因为 &quot;:&quot; 是shell内建命令。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可查看<em>样例 16-15</em>。</p><p>与<code>&gt;&gt;</code>重定向操作符结合，将不会清空任何已存在的文件（<code>: &gt;&gt; target_file</code>）。如果文件不存在，将创建这个文件。</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 以上操作仅适用于普通文件，不适用于管道、符号链接和特殊文件。</p></blockquote><p>空命令可以用来作为一行注释的开头，尽管我们并不推荐这么做。使用 # 可以使解释器关闭该行的错误检测，所以几乎所有的内容都可以出现在注释#中。使用空命令却不是这样的：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">:</span> 这一行注释将会产生一个错误，<span class="token punctuation">(</span> <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$x</span> <span class="token parameter variable">-eq</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:也可以作为一个域分隔符，比如在<code>/etc/passwd</code>和 <code>$PATH</code> 变量中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ echo $PATH
/usr/local/bin:/bin:/usr/bin:/usr/X11R6/bin:/sbin:/usr/sbin:/usr/games
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将冒号作为函数名也是可以的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>:<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The name of this function is &quot;</span><span class="token variable">$FUNCNAME</span><span class="token string">&quot; &quot;</span>
  <span class="token comment"># 为什么要使用冒号作函数名？</span>
  <span class="token comment"># 这是一种混淆代码的方法......</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">:</span>

<span class="token comment"># 函数名是 :</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法并不具有可移植性，也不推荐使用。事实上，在Bash的最近的版本更新中已经禁用了这种用法。但我们还可以使用*下划线 _*来替代。</p><p>冒号也可以作为非空函数的占位符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">not_empty</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">:</span>
<span class="token punctuation">}</span> <span class="token comment"># 含有空指令，这并不是一个空函数。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-15" tabindex="-1"><a class="header-anchor" href="#-15" aria-hidden="true">#</a> !</h3><p>取反（或否定）操作符[感叹号]。! 操作符反转已执行的命令的返回状态（查看<em>样例 6-2</em>）。它同时可以反转测试操作符的意义，例如可以将相等（=）反转成不等（!=）。它是一个Bash关键词。</p><p>在一些特殊场景下，它也会出现在间接变量引用中。</p><p>在另外一些特殊场景下，即在命令行下可以使用 ! 调用Bash的历史记录（<em>附录 L</em>）。需要注意的是，在脚本中，这个机制是被禁用的。</p><h3 id="-16" tabindex="-1"><a class="header-anchor" href="#-16" aria-hidden="true">#</a> *</h3><p>通配符[星号]。在文件匹配（globbing）操作时扩展文件名。如果它独立出现，则匹配该目录下的所有文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ echo *
abs-book.sgml add-drive.sh agram.sh alias.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在<em>正则表达式</em>中表示匹配任意多个（包括0）前个字符。</p><h3 id="-17" tabindex="-1"><a class="header-anchor" href="#-17" aria-hidden="true">#</a> *</h3><p>算术运算符。在进行算术运算时，表示乘法运算。</p><p>** 双星号可以表示乘方运算或扩展文件匹配。</p><h3 id="-18" tabindex="-1"><a class="header-anchor" href="#-18" aria-hidden="true">#</a> ?</h3><p>测试操作符[问号]。在一些特定的语句中，? 表示一个条件测试。</p><p>在一个双圆括号结构中，? 可以表示一个类似C语言风格的三元（trinary）运算符的一个组成部分。[^2]</p><p><code>condition?result-if-true:result-if-false</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable"><span class="token punctuation">((</span> var0 <span class="token operator">=</span> var1<span class="token operator">&lt;</span><span class="token number">98</span><span class="token operator">?</span><span class="token number">9</span><span class="token operator">:</span><span class="token number">21</span> <span class="token punctuation">))</span></span>
<span class="token comment">#不要加空格，紧挨着写</span>

<span class="token comment">#等价于</span>
<span class="token comment"># if [ &quot;$var1&quot; -lt 98 ]</span>
<span class="token comment"># then</span>
<span class="token comment">#   var0=9</span>
<span class="token comment"># else</span>
<span class="token comment">#   var0=21</span>
<span class="token comment"># fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在参数替换表达式中，? 用来测试一个变量是否已经被赋值。</p><h3 id="-19" tabindex="-1"><a class="header-anchor" href="#-19" aria-hidden="true">#</a> ?</h3><p>通配符。它在进行文件匹配（globbing）时以单字符通配符扩展文件名。 在<em>扩展正则表达式</em>中匹配一个单字符。</p><h3 id="-20" tabindex="-1"><a class="header-anchor" href="#-20" aria-hidden="true">#</a> $</h3><p>取值符号[钱字符]，用来进行变量替换（即取出变量的内容）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span>23skidoo

<span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>     <span class="token comment"># 5</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>     <span class="token comment"># 23skidoo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在变量名前有 $，则表示此变量的值。</p><h3 id="-21" tabindex="-1"><a class="header-anchor" href="#-21" aria-hidden="true">#</a> $</h3><p>行结束符[EOF]。 在<em>正则表达式</em>中，$ 匹配行尾字符串。</p><h3 id="-22" tabindex="-1"><a class="header-anchor" href="#-22" aria-hidden="true">#</a> \${}</h3><p>参数替换。</p><h3 id="-23" tabindex="-1"><a class="header-anchor" href="#-23" aria-hidden="true">#</a> $&#39;...&#39;</h3><p>引用字符串扩展。这个结构将转义八进制或十六进制的值转换成ASCII[^3]或Unicode字符。</p><h3 id="-24" tabindex="-1"><a class="header-anchor" href="#-24" aria-hidden="true">#</a> $*, $@</h3><p>位置参数。</p><h3 id="-25" tabindex="-1"><a class="header-anchor" href="#-25" aria-hidden="true">#</a> $?</h3><p>返回状态变量。此变量保存一个命令、一个函数或该脚本自身的返回状态。</p><h3 id="-26" tabindex="-1"><a class="header-anchor" href="#-26" aria-hidden="true">#</a> $$</h3><p>进程ID变量。此变量保存该运行脚本的进程ID[^4]。</p><h3 id="-27" tabindex="-1"><a class="header-anchor" href="#-27" aria-hidden="true">#</a> ()</h3><p>命令组。</p><p><code>(a=hello; echo $a)</code></p><p><img src="http://tldp.org/LDP/abs/images/important.gif" alt="notice"> 通过括号执行一系列命令会产生一个子shell（subshell）。 括号中的变量，即在子shell中的变量，在脚本的其他部分是不可见的。父进程脚本不能访问子进程（子shell）所创建的变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">123</span>
<span class="token punctuation">(</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">321</span><span class="token punctuation">;</span> <span class="token punctuation">)</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>   <span class="token comment"># a = 123</span>
<span class="token comment"># 在括号中的 &quot;a&quot; 就像个局部变量。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组初始化。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">Array</span><span class="token operator">=</span><span class="token punctuation">(</span>element1 element2 element3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="xxx-yyy-zzz" tabindex="-1"><a class="header-anchor" href="#xxx-yyy-zzz" aria-hidden="true">#</a> {xxx,yyy,zzz,...}</h3><p>花括号扩展结构。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>&quot;<span class="token punctuation">{</span>These,words,are,quoted<span class="token punctuation">}</span><span class="token punctuation">\\</span>&quot;   <span class="token comment"># &quot; 将作为单词的前缀和后缀</span>
<span class="token comment"># &quot;These&quot; &quot;words&quot; &quot;are&quot; &quot;quoted&quot;</span>


<span class="token function">cat</span> <span class="token punctuation">{</span>file1,file2,file3<span class="token punctuation">}</span> <span class="token operator">&gt;</span> combined_file
<span class="token comment"># 将 file1, file2 与 file3 拼接在一起后写入 combined_file 中。</span>

<span class="token function">cp</span> file22.<span class="token punctuation">{</span>txt,backup<span class="token punctuation">}</span>
<span class="token comment"># 将 &quot;file22.txt&quot; 拷贝为 &quot;file22.backup&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令可以作用于花括号内由逗号分隔的文件描述列表。[^5] 文件名扩展（匹配）作用于大括号间的各个文件。</p><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice"> 除非被引用或被转义，否则空白符不应在花括号中出现。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>file1,file2<span class="token punctuation">}</span><span class="token punctuation">\\</span> :<span class="token punctuation">{</span><span class="token punctuation">\\</span> A,<span class="token string">&quot; B&quot;</span>,<span class="token string">&#39; C&#39;</span><span class="token punctuation">}</span>
file1 <span class="token builtin class-name">:</span> A file1 <span class="token builtin class-name">:</span> B file1 <span class="token builtin class-name">:</span> C file2 <span class="token builtin class-name">:</span> A file2 <span class="token builtin class-name">:</span> B file2 <span class="token builtin class-name">:</span> C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="a-z" tabindex="-1"><a class="header-anchor" href="#a-z" aria-hidden="true">#</a> {a..z}</h3><p>扩展的花括号扩展结构。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>a<span class="token punctuation">..</span>z<span class="token punctuation">}</span> <span class="token comment">#  a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
<span class="token comment"># 输出 a 到 z 之间所有的字母。</span>
	
<span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">}</span> <span class="token comment"># 0 1 2 3</span>
<span class="token comment"># 输出 0 到 3 之间所有的数字。</span>


<span class="token assign-left variable">base64_charset</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token punctuation">{</span>A<span class="token punctuation">..</span>Z<span class="token punctuation">}</span> <span class="token punctuation">{</span>a<span class="token punctuation">..</span>z<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">9</span><span class="token punctuation">}</span> + / <span class="token operator">=</span> <span class="token punctuation">)</span>
<span class="token comment"># 使用扩展花括号初始化一个数组。</span>
<span class="token comment"># 摘自 vladz 编写的样例脚本 &quot;base64.sh&quot;。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bash第三版中引入了 {a..z} 扩展的花括号扩展结构。</p><h3 id="-28" tabindex="-1"><a class="header-anchor" href="#-28" aria-hidden="true">#</a> {}</h3><p>代码块[花括号]，又被称作内联组（inline group）。它实际上创建了一个匿名函数（anonymous function），即没有名字的函数。但是，不同于那些“标准”函数，代码块内的变量在脚本的其他部分仍旧是可见的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ { local a;
              a=123; }
bash: local: can only be used in a
function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">123</span>
<span class="token punctuation">{</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">321</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>   <span class="token comment"># a = 321   (代码块内赋值)</span>

<span class="token comment"># 感谢S.C.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码块可以经由I/O重定向进行输入或输出。</p><p><strong>样例 3-1. 代码块及I/O重定向</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 读取文件 /etc/fstab</span>

<span class="token assign-left variable">File</span><span class="token operator">=</span>/etc/fstab

<span class="token punctuation">{</span>
<span class="token builtin class-name">read</span> line1
<span class="token builtin class-name">read</span> line2
<span class="token punctuation">}</span> <span class="token operator">&lt;</span> <span class="token variable">$File</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;First line in <span class="token variable">$File</span> is:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$line1</span>&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Second line in <span class="token variable">$File</span> is:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$line2</span>&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># 你知道如何解析剩下的行吗？</span>
<span class="token comment"># 提示：使用 awk 或...</span>
<span class="token comment"># Hans-Joerg Diers 建议：使用Bash的内建命令 set。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>样例 3-2. 将代码块的输出保存至文件中</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># rpm-check.sh</span>

<span class="token comment"># 查询一个rpm文件的文件描述、包含文件列表，以及是否可以被安装。</span>
<span class="token comment"># 将输出保存至文件。</span>
<span class="token comment">#</span>
<span class="token comment"># 这个脚本使用代码块来描述。</span>

<span class="token assign-left variable">SUCCESS</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">E_NOARGS</span><span class="token operator">=</span><span class="token number">65</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> rpm-file&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOARGS</span>
<span class="token keyword">fi</span>  

<span class="token punctuation">{</span> <span class="token comment"># 代码块起始</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Archive Description:&quot;</span>
  <span class="token function">rpm</span> <span class="token parameter variable">-qpi</span> <span class="token variable">$1</span>       <span class="token comment"># 查询文件描述。</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Archive Listing:&quot;</span>
  <span class="token function">rpm</span> <span class="token parameter variable">-qpl</span> <span class="token variable">$1</span>       <span class="token comment"># 查询文件列表。</span>
  <span class="token builtin class-name">echo</span>
  <span class="token function">rpm</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">--test</span> <span class="token variable">$1</span>  <span class="token comment"># 查询是否可以被安装。</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token variable">$SUCCESS</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> can be installed.&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> cannot be installed.&quot;</span>
  <span class="token keyword">fi</span>  
  <span class="token builtin class-name">echo</span>              <span class="token comment"># 代码块结束。</span>
<span class="token punctuation">}</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$1</span>.test&quot;</span>       <span class="token comment"># 输出重定向至文件。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Results of rpm test in file <span class="token variable">$1</span>.test&quot;</span>

<span class="token comment"># rpm各项参数的具体含义可查看man文档</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 与由圆括号包裹起来的命令组不同，由花括号包裹起来的代码块不产生子进程。[^6]</p><p>也可以使用非标准的 for 循环语句来遍历代码块。</p><h3 id="-29" tabindex="-1"><a class="header-anchor" href="#-29" aria-hidden="true">#</a> {}</h3><p>文本占位符。在 <code>xargs -i</code> 后作为输出的占位符使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token function">cp</span> ./<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token variable">$1</span>
<span class="token comment">#            ^^         ^^</span>

<span class="token comment"># 摘自 &quot;ex42.sh&quot; (copydir.sh)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-30" tabindex="-1"><a class="header-anchor" href="#-30" aria-hidden="true">#</a> {} ;</h3><p>路径名。通常在 <code>find</code> 命令中使用，但这不是shell的内建命令。</p><blockquote><p>定义：路径名是包含完整路径的文件名，例如<code>/home/bozo/Notes/Thursday/schedule.txt</code>。我们通常又称之为绝对路径。</p></blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 在执行<code>find -exec</code>时最后需要加上<code>;</code>，但是分号需要被转义以保证其不会被shell解释。</p><h3 id="-31" tabindex="-1"><a class="header-anchor" href="#-31" aria-hidden="true">#</a> [ ]</h3><p>测试。在 [ ] 之间填写测试表达式。值得注意的是，[ 是shell内建命令 <code>test</code> 的一个组成部分，而不是外部命令 <code>/usr/bin/test</code> 的链接。</p><h3 id="-32" tabindex="-1"><a class="header-anchor" href="#-32" aria-hidden="true">#</a> [[ ]]</h3><p>测试。在 [[ ]] 之间填写测试表达式。相比起单括号测试 （[ ]），它更加的灵活。它是一个shell的关键字。</p><p>详情查看<em>关于 [[ ]] 结构的讨论</em>。</p><h3 id="-33" tabindex="-1"><a class="header-anchor" href="#-33" aria-hidden="true">#</a> [ ]</h3><p>数组元素。在数组中，可以使用中括号的偏移量来用来访问数组中的每一个元素。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>slot_1
<span class="token builtin class-name">echo</span> <span class="token variable">\${Array<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-34" tabindex="-1"><a class="header-anchor" href="#-34" aria-hidden="true">#</a> [ ]</h3><p>字符集、字符范围。 在<em>正则表达式</em>中，中括号用来匹配指定字符集或字符范围内的任意字符。</p><h3 id="-35" tabindex="-1"><a class="header-anchor" href="#-35" aria-hidden="true">#</a> $[ ... ]</h3><p>整数扩展符。在 $[ ] 中可以计算整数的算术表达式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">7</span>

<span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span><span class="token variable">$a</span>+<span class="token variable">$b</span><span class="token punctuation">]</span>   <span class="token comment"># 10</span>
<span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span><span class="token variable">$a</span>*<span class="token variable">$b</span><span class="token punctuation">]</span>   <span class="token comment"># 21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-36" tabindex="-1"><a class="header-anchor" href="#-36" aria-hidden="true">#</a> (( ))</h3><p>整数扩展符。在 (( )) 中可以计算整数的算术表达式。</p><p>详情查看<em>关于 (( ... )) 结构的讨论</em>。</p><h3 id="-37" tabindex="-1"><a class="header-anchor" href="#-37" aria-hidden="true">#</a> &gt; &amp;&gt; &gt;&amp; &gt;&gt; &lt; &lt;&gt;</h3><p>重定向。</p><p><code>scriptname &gt;filename</code> 将脚本 <em>scriptname</em> 的输出重定向到 <em>filename</em> 中。如果文件存在，那么覆盖掉文件内容。</p><p><code>command &amp;&gt;filename</code> 将命令 <em>command</em> 的标准输出(stdout) 和标准错误输出(stderr) 重定向到 <em>filename</em>。</p><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 重定向在用于清除测试条件的输出时特别有效。例如测试一个特定的命令是否存在。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ type bogus_command &amp;&gt;/dev/null


bash$ echo $?
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或写在脚本中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">command_test</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">type</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">&amp;&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">#                                      ^</span>
 
<span class="token assign-left variable">cmd</span><span class="token operator">=</span>rmdir            <span class="token comment"># 存在的命令。</span>
command_test <span class="token variable">$cmd</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>   <span class="token comment"># 返回0</span>


<span class="token assign-left variable">cmd</span><span class="token operator">=</span>bogus_command    <span class="token comment"># 不存在的命令。</span>
command_test <span class="token variable">$cmd</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>   <span class="token comment"># 返回1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>command &gt;&amp;2</code> 将命令的标准输出重定向至标准错误输出。</p><p><code>scriptname &gt;&gt;filename</code> 将脚本 <em>scriptname</em> 的输出追加到 <em>filename</em> 文件末尾。如果文件不存在，那么将创建这个文件。</p><p><code>[i]&lt;&gt;filename</code> 打开文件 <em>filename</em> 用来读写，并且分配一个文件描述符<em>i</em>指向它。如果文件不存在，那么将创建这个文件。</p><p>进程替换： <code>(command)&gt;</code><code>&lt;(command)</code></p><p>在某些情况下， &quot;&lt;&quot; 与 &quot;&gt;&quot; 将用作字符串比较。</p><p>在另外一些情况下， &quot;&lt;&quot; 与 &quot;&gt;&quot; 将用作数字比较。详情查看<em>样例 16-9</em>。</p><h3 id="-38" tabindex="-1"><a class="header-anchor" href="#-38" aria-hidden="true">#</a> &lt;&lt;</h3><p>在here document中进行重定向。</p><h3 id="-39" tabindex="-1"><a class="header-anchor" href="#-39" aria-hidden="true">#</a> &lt;&lt;&lt;</h3><p>在here string中进行重定向。</p><h3 id="-40" tabindex="-1"><a class="header-anchor" href="#-40" aria-hidden="true">#</a> &lt;, &gt;</h3><p>ASCII码比较。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">veg1</span><span class="token operator">=</span>carrots
<span class="token assign-left variable">veg2</span><span class="token operator">=</span>tomatoes

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;veg1&quot;</span> <span class="token operator">&lt;</span> <span class="token string">&quot;veg2&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Although <span class="token variable">$veg1</span> precede <span class="token variable">$veg2</span> in the dictionary,&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;this does not necessarily imply anything &quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;about my culinary preferences.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;What kind of dictionary are you using, anyhow?&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-41" tabindex="-1"><a class="header-anchor" href="#-41" aria-hidden="true">#</a> &lt;, &gt;</h3><p><em>正则表达式</em>中的单词边界（word boundary）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ grep &#39;\\&lt;the\\&gt;&#39; textfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="-42" tabindex="-1"><a class="header-anchor" href="#-42" aria-hidden="true">#</a> |</h3><p>管道（pipe）。管道可以将上一个命令的输出作为下一个命令的输入，或者直接输出到shell中。管道是一种可以将一系列命令连接在一起的绝妙方式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">sh</span>
<span class="token comment">#  将 &quot;echo ls -l&quot; 的结果输出到shell中，</span>
<span class="token comment">#  与直接输入 &quot;ls -l&quot; 的结果相同。</span>


<span class="token function">cat</span> *.lst <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span>
<span class="token comment"># 将所有后缀名为 lst 的文件合并后排序，接着删掉所有重复行。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,156),b=s("p",null,[n("管道是一种在进程间通信的典型方法。它将一个进程的输出作为另一个进程的输入。举一个经典的例子，像 "),s("code",null,"cat"),n(" 或者 "),s("code",null,"echo"),n(" 这样的命令，可以通过管道将它们产生的数据流导入到过滤器（filter）中。过滤器是可以用来处理输入流的命令。[^7]")],-1),h=s("p",null,[s("code",null,"cat $filename1 $filename2 | grep $search_word")],-1),k={href:"http://www.faqs.org/faqs/unix-faq/faq/part3/",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>命令的输出同样可以通过管道输入到脚本中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># uppercase.sh : 将所有输入变成大写</span>

<span class="token function">tr</span> <span class="token string">&#39;a-z&#39;</span> <span class="token string">&#39;A-Z&#39;</span>
<span class="token comment">#  为了防止产生单字符文件名，</span>
<span class="token comment">#  必须使用单引号引用字符范围。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，让我们将 <code>ls -l</code> 的输出通过管道导入到脚本中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ ls -l | ./uppercase.sh
 -RW-RW-R--    1 BOZO  BOZO       109 APR  7 19:49 1.TXT
 -RW-RW-R--    1 BOZO  BOZO       109 APR 14 16:48 2.TXT
 -RW-R--R--    1 BOZO  BOZO       725 APR 20 20:56 DATA-FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 在管道中，每一个进程的输出必须作为下个进程的输入被正确读入，如果不这样，数据流会被阻塞（block），管道就无法按照预期正常工作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> file1 file2 <span class="token operator">|</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">sort</span>
<span class="token comment"># &quot;cat file1 file2&quot; 的输出会消失。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>管道是在一个子进程中运行的，因此它并不能修改父进程脚本中的变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token string">&quot;initial_value&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;new_value&quot;</span> <span class="token operator">|</span> <span class="token builtin class-name">read</span> variable
<span class="token builtin class-name">echo</span> <span class="token string">&quot;variable = <span class="token variable">$variable</span>&quot;</span>     <span class="token comment"># variable = initial_value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果管道中的任意一个命令意外中止了，管道将会提前中断，我们称其为<em>管道破裂</em>(Broken Pipe)。出现这种情况，系统将发送一个 <code>SIGPIPE</code> 信号。</p><h3 id="-43" tabindex="-1"><a class="header-anchor" href="#-43" aria-hidden="true">#</a> &gt;|</h3><p>强制重定向。即使在 <code>noclobber</code> 选项被设置的情况下，重定向也会覆盖已存在的文件。</p><h3 id="-44" tabindex="-1"><a class="header-anchor" href="#-44" aria-hidden="true">#</a> ||</h3><p>或（OR）逻辑运算符。在测试结构中，任意一个测试条件为真，整个表达式为真。返回 0（成功标志位）。</p><h3 id="-45" tabindex="-1"><a class="header-anchor" href="#-45" aria-hidden="true">#</a> &amp;</h3><p>后台运行操作符。如果命令后带&amp;，那么此命令将转至后台运行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ sleep 10 &amp;
[1] 850
[1]+  Done                    sleep 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在脚本中，命令甚至循环都可以在后台运行。</p><p><strong>样例 3-3. 在后台运行的循环</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># background-loop.sh</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>            <span class="token comment"># 第一个循环</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$i</span> &quot;</span>
<span class="token keyword">done</span> <span class="token operator">&amp;</span> <span class="token comment"># 这个循环在后台运行。</span>
       <span class="token comment"># 有时会在第二个循环结之后才执行此后台循环。</span>

<span class="token builtin class-name">echo</span>   <span class="token comment"># 此&#39;echo&#39; 有时不显示</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> <span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span> <span class="token number">20</span>   <span class="token comment"># 第二个循环</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$i</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>   <span class="token comment"># 此&#39;echo&#39; 有时不显示</span>

<span class="token comment"># ======================================================</span>

<span class="token comment"># 脚本期望输出结果：</span>
<span class="token comment"># 1 2 3 4 5 6 7 8 9 10</span>
<span class="token comment"># 11 12 13 14 15 16 17 18 19 20</span>

<span class="token comment"># 一些情况下可能会输出：</span>
<span class="token comment"># 11 12 13 14 15 16 17 18 19 20</span>
<span class="token comment"># 1 2 3 4 5 6 7 8 9 10 bozo $</span>
<span class="token comment"># 第二个 &#39;echo&#39; 没有被执行，为什么？</span>

<span class="token comment"># 另外一些情况下可能会输出：</span>
<span class="token comment"># 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20</span>
<span class="token comment"># 第一个 &#39;echo&#39; 没有被执行，为什么？</span>

<span class="token comment"># 非常罕见的情况下，可能会输出：</span>
<span class="token comment"># 11 12 13 1 2 3 4 5 6 7 8 9 10 14 15 16 17 18 19 20</span>
<span class="token comment"># 前台循环抢占（preempt）了后台循环。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment">#  Nasimuddin Ansari 建议：在第6行和第14行的</span>
<span class="token comment">#  echo -n &quot;$i &quot; 后增加 sleep 1，</span>
<span class="token comment">#  会得到许多有趣的结果。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice"> 脚本在后台执行命令时可能因为等待键盘事件被挂起。幸运的是，有一套方案可以解决这个问题。</p><h3 id="-46" tabindex="-1"><a class="header-anchor" href="#-46" aria-hidden="true">#</a> &amp;&amp;</h3><p>与（AND）逻辑操作符。在测试结构中，所有测试条件都为真，表达式才为真，返回 0（成功标志位）。</p><h3 id="-47" tabindex="-1"><a class="header-anchor" href="#-47" aria-hidden="true">#</a> -</h3><p>选项与前缀。它可以作为命令的选项标志，也可以作为一个操作符的前缀，也可以作为在参数代换中作为默认参数的前缀。</p><p><code>COMMAND -[Option1][Option2][..]</code></p><p><code>ls -al</code></p><p><code>sort -dfu $filename</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$file1</span> <span class="token parameter variable">-ot</span> <span class="token variable">$file2</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span> <span class="token comment">#      ^</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File <span class="token variable">$file1</span> is older than <span class="token variable">$file2</span>.&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token string">&quot;<span class="token variable">$b</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span> <span class="token comment">#    ^</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$a</span> is equal to <span class="token variable">$b</span>.&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$c</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">24</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;<span class="token variable">$d</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">47</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span> <span class="token comment">#    ^              ^</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$c</span> equals 24 and <span class="token variable">$d</span> equals 47.&quot;</span>
<span class="token keyword">fi</span>


<span class="token assign-left variable">param2</span><span class="token operator">=</span><span class="token variable">\${param1<span class="token operator">:-</span>$DEFAULTVAL}</span>
<span class="token comment">#               ^</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-48" tabindex="-1"><a class="header-anchor" href="#-48" aria-hidden="true">#</a> --</h3><p>双横线一般作为命令长选项的前缀。</p><p><code>sort --ignore-leading-blanks</code></p><p>双横线与Bash内建命令一起使用时，意味着该命令选项的结束。</p><p><img src="http://tldp.org/LDP/abs/images/tip.gif" alt="info"> 下面提供了一种删除文件名以横线开头文件的简单方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ ls -l
-rw-r--r-- 1 bozo bozo 0 Nov 25 12:29 -badname


bash$ rm -- -badname

bash$ ls -l
total 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双横线通常也和 <code>set</code> 连用。</p><p><code>set -- $variable</code>（查看<em>样例 15-18</em>）。</p><h3 id="-49" tabindex="-1"><a class="header-anchor" href="#-49" aria-hidden="true">#</a> -</h3><p>重定向输入输出[短横线]。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ cat -
abc
abc

...

Ctl-D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>cat -</code> 输出由键盘读入的标准输入(stdin) 到 标准输出(stdout)。但是在真实应用的 I/O 重定向中是否有使用 &#39;-&#39;？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>cd /source/directory <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> cf - <span class="token builtin class-name">.</span> <span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>cd /dest/directory <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xpvf -<span class="token punctuation">)</span>

<span class="token comment"># 将整个文件树从一个目录移动到另一个目录。</span>
<span class="token comment"># 感谢 Alan Cox &lt;a.cox@swansea.ac.uk&gt; 所作出的部分改动</span>

<span class="token comment"># 1) cd /source/directory</span>
<span class="token comment">#    工作目录定位到文件所属的源目录</span>
<span class="token comment"># 2) &amp;&amp;</span>
<span class="token comment">#    &quot;与链&quot;：如果 &#39;cd&#39; 命令操作成功，那么执行下一条命令</span>
<span class="token comment"># 3) tar cf - .</span>
<span class="token comment">#    &#39;tar c&#39; (create 创建) 创建一份新的档案</span>
<span class="token comment">#    &#39;tar f -&#39; (file 指定文件) 在 &#39;-&#39; 后指定一个目标文件作为输出</span>
<span class="token comment">#    &#39;.&#39; 代表当前目录</span>
<span class="token comment"># 4) |</span>
<span class="token comment">#    通过管道进行重定向</span>
<span class="token comment"># 5) ( ... )</span>
<span class="token comment">#    在建立的子进程中执行命令</span>
<span class="token comment"># 6) cd /dest/directory</span>
<span class="token comment">#    工作目录定位到目标目录</span>
<span class="token comment"># 7) &amp;&amp;</span>
<span class="token comment">#    与 2) 相同</span>
<span class="token comment"># 8) tar xpvf -</span>
<span class="token comment">#    &#39;tar x&#39; 解压档案</span>
<span class="token comment">#    &#39;tar p&#39; (preserve 保留) 保留档案内文件的所有权及文件权限</span>
<span class="token comment">#    &#39;tar v&#39; (verbose 冗余) 发送全部信息到标准输出</span>
<span class="token comment">#    &#39;tar f -&#39; (file 指定文件) 在 &#39;-&#39; 后指定一个目标文件作为输入</span>
<span class="token comment">#</span>
<span class="token comment">#    注意 &#39;x&#39; 是一个命令，而 &#39;p&#39;, &#39;v&#39;, &#39;f&#39; 是选项。</span>

<span class="token comment"># 干的漂亮！</span>


<span class="token comment"># 更加优雅的写法是:</span>
<span class="token comment">#   cd source/directory</span>
<span class="token comment">#   tar cf - . | (cd ../dest/directory; tar xpvf -)</span>
<span class="token comment">#</span>
<span class="token comment"># 同样可以写成:</span>
<span class="token comment">#   cp -a /source/directory/* /dest/directory</span>
<span class="token comment"># 或:</span>
<span class="token comment">#   cp -a /source/directory/* /source/directory/.[^.]* /dest/directory</span>
<span class="token comment"># 可以在源目录中有隐藏文件时使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bunzip2 <span class="token parameter variable">-c</span> linux-2.6.16.tar.bz2 <span class="token operator">|</span> <span class="token function">tar</span> xvf -
<span class="token comment">#  --未解压的 tar 文件--        | --将解压出的 tar 传递给 &quot;tar&quot;--</span>
<span class="token comment">#  如果不使用管道让 &quot;tar&quot; 处理 &quot;bunzip2&quot; 得到的文件，</span>
<span class="token comment">#  那么就需要使用单独的两步来完成。</span>
<span class="token comment">#  目的是为了解压 &quot;bzipped&quot; 压缩的内核源代码。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子中，&quot;-&quot; 并不是一个Bash的操作符，它仅仅是 <code>tar</code>, <code>cat</code> 等一些特定UNIX命令中将结果输出到标准输出的选项。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ echo &quot;whatever&quot; | cat -
whatever 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当需要文件名的时候，- 可以用来代替某个文件而重定向到标准输出（通常出现在 <code>tar cf</code> 中）或从 <em>stdin</em> 中接受数据。这是一种在管道中使用面向文件（file-oriented）工具作为过滤器的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ file
Usage: file [-bciknvzL] [-f namefile] [-m magicfiles] file...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>单独执行 <code>file</code> 命令，将会得到一条错误信息。</p><p>在命令后增加一个 &quot;-&quot; 可以得到一个更加有用的结果。它会使得shell暂停等待用户输入。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ file -
abc
standard input:              ASCII text


bash$ file -
#!/bin/bash
standard input:              Bourne-Again shell script text executable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在命令能够接受标准输入并且处理它们了。</p><p>&quot;-&quot; 能够通过管道将标准输出重定向到其他命令中。这就可以做到像在某个文件前添加几行这样的事情。</p><p>使用 <code>diff</code> 比较两个文件的部分内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> Linux file1 <span class="token operator">|</span> <span class="token function">diff</span> file2 -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后介绍一个使用 - 的 <code>tar</code> 命令的实际案例。</p><p><strong>样例 3-4. 备份最近一天修改过的所有文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#  将当前目录下24小时之内修改过的所有文件备份成一个</span>
<span class="token comment">#  &quot;tarball&quot; (经 tar 打包\`与 gzip 压缩) 文件</span>

<span class="token assign-left variable">BACKUPFILE</span><span class="token operator">=</span>backup-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%m-%d-%Y<span class="token variable">)</span></span>
<span class="token comment">#                 在备份文件中嵌入时间</span>
<span class="token comment">#                 感谢 Joshua Tschida 提供的建议</span>

<span class="token assign-left variable">archive</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">:-</span>$BACKUPFILE}</span>
<span class="token comment">#  如果没有在命令行中特别制定备份格式，</span>
<span class="token comment">#  那么将会默认设置为 &quot;backup-MM-DD-YYYY.tar.gz&quot;。</span>

<span class="token function">tar</span> cvf - <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-mtime</span> <span class="token parameter variable">-1</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-print</span><span class="token variable">\`</span></span> <span class="token operator">&gt;</span> <span class="token variable">$archive</span>.tar
<span class="token function">gzip</span> <span class="token variable">$archive</span>.tar
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Directory <span class="token environment constant">$PWD</span> backed up in archive file <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$archive</span>.tar.gz<span class="token entity" title="\\&quot;">\\&quot;</span>.&quot;</span>

<span class="token comment">#  Stephane Chazeles 指出如果目录中有非常多的文件，</span>
<span class="token comment">#  或文件名中包含空白符时，上面的代码会运行失败。</span>

<span class="token comment"># 他建议使用以下的任意一种方法：</span>
<span class="token comment"># -------------------------------------------------------------------</span>
<span class="token comment">#   find . -mtime -1 -type f -print0 | xargs -0 tar rvf &quot;$archive.tar&quot;</span>
<span class="token comment">#   使用了 GNU 版本的 &quot;find&quot; 命令。</span>


<span class="token comment">#   find . -mtime -1 -type f -exec tar rvf &quot;$archive.tar&quot; &#39;{}&#39; \\;</span>
<span class="token comment">#   兼容其他的 UNIX 发行版，但是速度会比较慢</span>
<span class="token comment"># -------------------------------------------------------------------</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice"> 以 &quot;-&quot; 开头的文件在和&quot;-&quot; 重定向操作符一起使用时可能会导致一些问题。因此合格的脚本必须首先检查这种情况。如果遇到，就需要给文件名加一个合适的前缀，比如 <code>./-FILENAME, $PWD/-FILENAME</code> 或者<code>$PATHNAME/-FILENAME</code> 。</p><p>如果变量的值以 &#39;-&#39; 开头，也可能会造成类似问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&#39;-n&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var</span>
<span class="token comment"># 等同于 &quot;echo -n&quot;，不会输出任何东西。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-50" tabindex="-1"><a class="header-anchor" href="#-50" aria-hidden="true">#</a> -</h3><p>先前的工作目录。使用 <code>cd -</code> 命令可以返回先前的工作目录。它实际上是使用了 <code>$OLDPWD</code> 环境变量。</p><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice"> 不要将这里的 &quot;-&quot; 与先前的 &quot;-&quot; 重定位操作符混淆。&quot;-&quot; 的具体含义需要根据上下文来解释。</p><h3 id="-51" tabindex="-1"><a class="header-anchor" href="#-51" aria-hidden="true">#</a> -</h3><p>减号。算术运算符中的减法标志。</p><h3 id="-52" tabindex="-1"><a class="header-anchor" href="#-52" aria-hidden="true">#</a> =</h3><p>等号。赋值操作符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">28</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>   <span class="token comment"># 28</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在一些情况下，&quot;=&quot; 可以作为字符串比较操作符。</p><h3 id="-53" tabindex="-1"><a class="header-anchor" href="#-53" aria-hidden="true">#</a> +</h3><p>加号。加法算术运算。</p><p>在一些情况下，+ 是作为正则表达式中的一个操作符。</p><h3 id="-54" tabindex="-1"><a class="header-anchor" href="#-54" aria-hidden="true">#</a> +</h3><p>选项操作符。作为一个命令或过滤器的选项标记。</p><p>特定的一些指令和内建命令使用 + 启用特定的选项，使用 - 禁用特定的选项。在参数代换中，+ 是作为变量扩展的备用值（alternate value）的前缀。</p><h3 id="-55" tabindex="-1"><a class="header-anchor" href="#-55" aria-hidden="true">#</a> %</h3><p>取模。取模操作运算符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> <span class="token string">&quot;z = 5 % 3&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$z</span>  <span class="token comment"># 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在另外一些情况下，% 是一种模式匹配的操作符。</p><h3 id="-56" tabindex="-1"><a class="header-anchor" href="#-56" aria-hidden="true">#</a> ~</h3><p>主目录[波浪号]。它相当于内部变量 <code>$HOME</code>。<code>~bozo</code> 是 bozo 的主目录，执行 <code>ls ~bozo</code> 将会列出他的主目录中内容。<code>~/</code> 是当前用户的主目录，执行 <code>ls ~/</code> 将会列出其中所有的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ echo ~bozo
/home/bozo

bash$ echo ~
/home/bozo

bash$ echo ~/
/home/bozo/

bash$ echo ~:
/home/bozo:

bash$ echo ~nonexistent-user
~nonexistent-user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-57" tabindex="-1"><a class="header-anchor" href="#-57" aria-hidden="true">#</a> ~+</h3><p>当前工作目录。它等同于内部变量 <code>$PWD</code>。</p><h3 id="-58" tabindex="-1"><a class="header-anchor" href="#-58" aria-hidden="true">#</a> ~-</h3><p>先前的工作目录。它等同于内部变量 <code>$OLDPWD</code>。</p><h3 id="-59" tabindex="-1"><a class="header-anchor" href="#-59" aria-hidden="true">#</a> =~</h3><p><em>正则表达式</em>匹配。将在 *Bash version 3 *章节中介绍。</p><h3 id="-60" tabindex="-1"><a class="header-anchor" href="#-60" aria-hidden="true">#</a> ^</h3><p>行起始符。在正则表达式中，&quot;^&quot; 代表一行文本的开始。</p><h3 id="-61" tabindex="-1"><a class="header-anchor" href="#-61" aria-hidden="true">#</a> ^, ^^</h3><p>参数替换中的大写转换符（在Bash第4版新增）。</p><h3 id="控制字符" tabindex="-1"><a class="header-anchor" href="#控制字符" aria-hidden="true">#</a> 控制字符</h3><p>改变终端或文件显示的一些行为。一个控制符是由 <em>CONTRL + key</em> 组成的（同时按下）。控制字符同样可以通过转义以八进制或十六进制的方式显示。</p><p>控制符不能在脚本中使用。</p><h4 id="ctrl-a" tabindex="-1"><a class="header-anchor" href="#ctrl-a" aria-hidden="true">#</a> Ctrl-A</h4><p>移动光标至行首。</p><h4 id="ctrl-b" tabindex="-1"><a class="header-anchor" href="#ctrl-b" aria-hidden="true">#</a> Ctrl-B</h4><p>非破坏性退格（即不删除字符）。</p><h4 id="ctrl-c" tabindex="-1"><a class="header-anchor" href="#ctrl-c" aria-hidden="true">#</a> Ctrl-C</h4><p>中断指令。终止当前运行的任务。</p><h4 id="ctrl-d" tabindex="-1"><a class="header-anchor" href="#ctrl-d" aria-hidden="true">#</a> Ctrl-D</h4><p>登出shell（类似 <code>exit</code>）</p><p>键入 <code>EOF</code>（end-of-file，文件终止标记），中断 <em>stdin</em> 的输入。</p><p>当你在终端或 <em>xterm</em> 窗口中输入字符时，<code>Ctl-D</code> 将会删除光标上的字符。当没有字符时，<code>Crl-D</code> 将会登出shell。在 <em>xterm</em> 中，将会关闭整个窗口。</p><h4 id="ctrl-e" tabindex="-1"><a class="header-anchor" href="#ctrl-e" aria-hidden="true">#</a> Ctrl-E</h4><p>移动光标至行末。</p><h4 id="ctrl-f" tabindex="-1"><a class="header-anchor" href="#ctrl-f" aria-hidden="true">#</a> Ctrl-F</h4><p>光标向前移动一个字符。</p><h4 id="ctrl-g" tabindex="-1"><a class="header-anchor" href="#ctrl-g" aria-hidden="true">#</a> Ctrl-G</h4><p>响铃<code>BEL</code>。在一些老式打字机终端上，将会响铃。而在 <em>xterm</em> 中，将会产生“哔”声。</p><h4 id="ctrl-h" tabindex="-1"><a class="header-anchor" href="#ctrl-h" aria-hidden="true">#</a> Ctrl-H</h4><p>抹除（破坏性退格）。退格删除前面的字符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 在字符串中嵌入 Ctrl-H</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token string">&quot;^H^H&quot;</span>                  <span class="token comment"># 两个退格符 Ctrl-H</span>
                          <span class="token comment"># 在 vi/vim 中使用 Ctrl-V Ctrl-H 来键入</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;abcdef&quot;</span>             <span class="token comment"># abcdef</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;abcdef<span class="token variable">$a</span> &quot;</span>       <span class="token comment"># abcd f</span>
<span class="token comment">#                ^              ^ 末尾有空格退格两次的结果</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;abcdef<span class="token variable">$a</span>&quot;</span>        <span class="token comment"># abcdef</span>
<span class="token comment">#                                ^ 末尾没有空格时为什么退格无效了？</span>
                          <span class="token comment"># 并不是我们期望的结果。</span>
<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># Constantin Hagemeier 建议尝试一下：</span>
<span class="token comment"># a=$&#39;\\010\\010&#39;</span>
<span class="token comment"># a=$&#39;\\b\\b&#39;</span>
<span class="token comment"># a=$&#39;\\x08\\x08&#39;</span>
<span class="token comment"># 但是这些并不会改变结果。</span>

<span class="token comment">########################################</span>

<span class="token comment"># 现在来试试这个。</span>

<span class="token assign-left variable">rubout</span><span class="token operator">=</span><span class="token string">&quot;^H^H^H^H^H&quot;</span>       <span class="token comment"># 5个 Ctrl-H</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;12345678&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$rubout</span>&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ctrl-i" tabindex="-1"><a class="header-anchor" href="#ctrl-i" aria-hidden="true">#</a> Ctrl-I</h4><p>水平制表符。</p><h4 id="ctrl-j" tabindex="-1"><a class="header-anchor" href="#ctrl-j" aria-hidden="true">#</a> Ctrl-J</h4><p>另起一行（换行）。在脚本中，你也可使用八进制 &#39;\\012&#39; 或者十六进制 &#39;\\x0a&#39; 来表示。</p><h4 id="ctrl-k" tabindex="-1"><a class="header-anchor" href="#ctrl-k" aria-hidden="true">#</a> Ctrl-K</h4><p>垂直制表符。</p><p>当你在终端或 <em>xterm</em> 窗口中输入字符时，<code>Ctrl-K</code> 将会删除光标上及其后的所有字符。而在脚本中，<code>Ctrl-K</code> 的作用有些不同。具体查看下方 Lee Lee Maschmeyer 写的样例。</p><h4 id="ctrl-l" tabindex="-1"><a class="header-anchor" href="#ctrl-l" aria-hidden="true">#</a> Ctrl-L</h4><p>清屏、走纸。在终端中等同于 <code>clear</code> 命令。在打印时，<code>Ctrl-L</code> 将会使纸张移动到底部。</p><h4 id="ctrl-m" tabindex="-1"><a class="header-anchor" href="#ctrl-m" aria-hidden="true">#</a> Ctrl-M</h4><p>回车（CR）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 感谢 Lee Maschmeyer 提供的样例。</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-p</span> <span class="token punctuation">\\</span>
<span class="token string">$&#39;Control-M leaves cursor at beginning of this line. Press Enter. <span class="token entity" title="\\x0d">\\x0d</span>&#39;</span>
           <span class="token comment"># &#39;0d</span><span class="token string">&#39; 是 Control-M 的十六进制的值
echo &gt;&amp;2   # &#39;</span>-s<span class="token string">&#39; 参数禁用了回显，所以需要显式的另起一行。

read -n 1 -s -p $&#39;</span>Control-J leaves cursor on next line. <span class="token punctuation">\\</span>x0a<span class="token string">&#39;
           # &#39;</span>0a<span class="token string">&#39; 是 Control-J 换行符的十六进制的值
echo &gt;&amp;2

###

read -n 1 -s -p $&#39;</span>And Control-K<span class="token punctuation">\\</span>x0bgoes straight down.<span class="token string">&#39;
echo &gt;&amp;2   # Control-K 是垂直制表符。

# 一个更好的垂直制表符例子是：

var=$&#39;</span><span class="token punctuation">\\</span>x0aThis is the bottom line<span class="token punctuation">\\</span>x0bThis is the <span class="token function">top</span> line<span class="token punctuation">\\</span>x0a&#39;
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>
<span class="token comment">#  这将会产生与上面的例子类似的结果。但是</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span> <span class="token operator">|</span> col
<span class="token comment">#  这却会使得右侧行高于左侧行。</span>
<span class="token comment">#  这也解释了为什么我们需要在行首和行尾加上换行符</span>
<span class="token comment">#  来避免显示的混乱。</span>

<span class="token comment"># Lee Maschmeyer 的解释：</span>
<span class="token comment"># --------------------------</span>
<span class="token comment">#  在第一个垂直制表符的例子中，垂直制表符使其</span>
<span class="token comment">#  在没有回车的情况下向下打印。</span>
<span class="token comment">#  这在那些不能回退的设备上，例如 Linux 的终端才可以。</span>
<span class="token comment">#  而垂直制表符的真正目的是向上而非向下。</span>
<span class="token comment">#  它可以用来在打印机中用来打印上标。</span>
<span class="token comment">#  col 工具可以用来模拟真实的垂直制表符行为。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ctrl-n" tabindex="-1"><a class="header-anchor" href="#ctrl-n" aria-hidden="true">#</a> Ctrl-N</h4><p>在命令行历史记录中调用下一条历史命令[^8]。</p><h4 id="ctrl-o" tabindex="-1"><a class="header-anchor" href="#ctrl-o" aria-hidden="true">#</a> Ctrl-O</h4><p>在命令行中另起一行。</p><h4 id="ctrl-p" tabindex="-1"><a class="header-anchor" href="#ctrl-p" aria-hidden="true">#</a> Ctrl-P</h4><p>在命令行历史记录中调用上一条历史命令。</p><h4 id="ctrl-q" tabindex="-1"><a class="header-anchor" href="#ctrl-q" aria-hidden="true">#</a> Ctrl-Q</h4><p>恢复（XON）。</p><p>终端恢复读入 <em>stdin</em>。</p><h4 id="ctrl-r" tabindex="-1"><a class="header-anchor" href="#ctrl-r" aria-hidden="true">#</a> Ctrl-R</h4><p>在命令行历史记录中进行搜索。</p><h4 id="ctrl-s" tabindex="-1"><a class="header-anchor" href="#ctrl-s" aria-hidden="true">#</a> Ctrl-S</h4><p>挂起（XOFF）。</p><p>终端冻结 <em>stdin</em>。（可以使用 <code>Ctrl-Q</code> 恢复）</p><h4 id="ctrl-t" tabindex="-1"><a class="header-anchor" href="#ctrl-t" aria-hidden="true">#</a> Ctrl-T</h4><p>交换光标所在字符与其前一个字符。</p><h4 id="ctrl-u" tabindex="-1"><a class="header-anchor" href="#ctrl-u" aria-hidden="true">#</a> Ctrl-U</h4><p>删除光标所在字符之前的所有字符。 在一些情况下，不管光标在哪个位置，<code>Ctrl-U</code> 都会删除整行文字。</p><h4 id="ctrl-v" tabindex="-1"><a class="header-anchor" href="#ctrl-v" aria-hidden="true">#</a> Ctrl-V</h4><p>输入时，使用 <code>Ctrl-V</code> 允许插入控制字符。例如，下面两条语句是等价的：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;\\x0a&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token operator">&lt;</span>Ctl-V<span class="token operator">&gt;</span><span class="token operator">&lt;</span>Ctl-J<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Ctrl-V</code> 在文本编辑器中特别有用。</p><h4 id="ctrl-w" tabindex="-1"><a class="header-anchor" href="#ctrl-w" aria-hidden="true">#</a> Ctrl-W</h4><p>当你在终端或 <em>xterm</em> 窗口中输入字符时，<code>Ctrl-W</code> 将会删除光标所在字符之前到其最近的空白符之间的所有字符。 在一些情况下，<code>Ctrl-W</code> 会删除到之前最近的非字母或数字的字符。</p><h4 id="ctrl-x" tabindex="-1"><a class="header-anchor" href="#ctrl-x" aria-hidden="true">#</a> Ctrl-X</h4><p>在一些特定的文本处理程序中，剪切高亮文本并复制到剪贴板（clipboard）。</p><h4 id="ctrl-y" tabindex="-1"><a class="header-anchor" href="#ctrl-y" aria-hidden="true">#</a> Ctrl-Y</h4><p>粘贴之前使用 <code>Ctrl-U</code> 或 <code>Ctrl-W</code> 删除的文字。</p><h4 id="ctrl-z" tabindex="-1"><a class="header-anchor" href="#ctrl-z" aria-hidden="true">#</a> Ctrl-Z</h4><p>暂停当前运行的任务。</p><p>在一些特定的文本处理程序中是替代操作。</p><p>在 MSDOS 文件系统中作为 <code>EOF</code>（end-of-file，文件终止标记）。</p><h3 id="空白符" tabindex="-1"><a class="header-anchor" href="#空白符" aria-hidden="true">#</a> 空白符</h3><p>作为命令或变量之间的分隔符。空白符包含空格、制表符、换行符或它们的任意组合。[^9]在一些地方，比如变量赋值时，空白符不应该出现，否则会造成语法错误。</p><p>空白行在脚本中不会有任何实际作用，但是可以划分代码，使代码更具可读性。</p><p>特殊变量 <code>$IFS</code> 是作为一些特定命令的输入域（field）分隔符，默认值为空白符。</p><blockquote><p>定义：域是字符串中离散的数据块。使用空白符或者指定的字符（通常由 <code>$IFS</code> 决定）来分隔临近域。在一些情况下，域也可以被称作记录（record）。</p></blockquote><p>如果想在字符串或者变量中保留空白符，请引用。</p><p>UNIX 过滤器可以使用 POSIX 字符类 <code>[:space:]</code> 来寻找和操作空白符。</p><p>[^1]: 操作符（operator）用来执行表达式（operation）。最常见的例子就是算术运算符+ - * /。在Bash中，操作符和关键字的概念有一些重叠。 [^2]: 它更被人熟知的名字是三元（ternary）操作符。但是读起来不清晰，而且容易令人混淆。trinary 是一种更加优雅的写法。 [^3]: 美国信息交换标准代码（American Standard Code for Information Interchange）。这是一套可以由计算机存储和处理的7位（bit）字符（包含字母、数字和一系列有限的符号）编码系统。 [^4]: 进程标识符（PID），是分配给正在运行进程的唯一数字标识。可以使用 <code>ps</code> 命令查看进程的 PID。&lt;br &gt;定义：进程是正在执行的命令或程序，通常也称作任务。 [^5]: 由shell来执行大括号扩展操作。命令本身是在扩展的基础上进行操作的。 [^6]: 例外：作为管道的一部分的大括号中的代码块可能会运行在子进程中。&lt;br &gt;<pre>ls | { read firstline; read secondline; }<br>#  错误。大括号中的代码块在子进程中运行，<br>#+ 因此 &quot;ls&quot; 命令输出的结果不能传递到代码块中。<br>echo &quot;First line is $firstline; second line is $secondline&quot;  # 无效。<br><br># 感谢 S.C.</pre> [^7]: 正如在古代催情剂（philtre）被认为是一种能引发神奇变化的药剂一样，UNIX 中的过滤器（filter）也是有类似的作用的。<br>（如果一个程序员做出了一个能够在 Linux 设备上运行的 &quot;love philtre&quot;，那么他将会获得巨大的荣誉。） [^8]: Bash将之前在命令行中执行过的命令存储在缓存（buffer）中，或者一块内存区域里。可以使用内建命令 <code>history</code> 来查看。 [^9]: 换行符本身也是一个空白符。因此这就是为什么仅仅包含一个换行符的空行也被认为是空白符。</p>`,165);function f(x,q){const i=l("RouterLink"),c=l("ExternalLinkIcon");return o(),d("div",null,[u,s("p",null,[n("部分引用[双引号]。在字符串中保留大部分特殊字符。详细内容将在"),a(i,{to:"/code/shell/part2/05_quoting.html"},{default:t(()=>[n("第五章")]),_:1}),n("介绍。")]),m,s("p",null,[n("全引用[单引号]。在字符串中保留所有的特殊字符。是部分引用的强化版。详细内容将在"),a(i,{to:"/code/shell/part2/05_quoting.html"},{default:t(()=>[n("第五章")]),_:1}),n("介绍。")]),v,s("blockquote",null,[b,h,s("p",null,[n("查看"),s("a",k,[n("UNIX FAQ第三章"),a(c)]),n("获取更多关于使用UNIX管道的信息。")])]),g])}const w=p(r,[["render",f],["__file","03_special_characters.html.vue"]]);export{w as default};
