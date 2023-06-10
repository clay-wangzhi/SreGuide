<template><div><h1 id="第二十一章-子shell" tabindex="-1"><a class="header-anchor" href="#第二十一章-子shell" aria-hidden="true">#</a> 第二十一章 子shell</h1>
<p>运行一个shell脚本会启动一个新的进程，即<em>子shell</em>。</p>
<p><strong>定义</strong>： 一个<em>子shell</em>是由一个shell（或<em>shell脚本</em>）触发的<a href="http://tldp.org/LDP/abs/html/othertypesv.html#CHILDREF2" target="_blank" rel="noopener noreferrer">子进程<ExternalLinkIcon/></a>。</p>
<p>一个子shell是命令处理器（-- 在终端或者<em>xtrem</em>窗口给出提示符的<em>shell</em>）的一个独立的例子。正如你的命令在命令行提示符处被理解执行一样，一个脚本<a href="http://tldp.org/LDP/abs/html/timedate.html#BATCHPROCREF" target="_blank" rel="noopener noreferrer">批处理<ExternalLinkIcon/></a>一组命令。每一个shell脚本运行实际上是<a href="http://tldp.org/LDP/abs/html/internal.html#FORKREF" target="_blank" rel="noopener noreferrer">父<ExternalLinkIcon/></a>shell的一个支线进程（<em>子进程</em>）。</p>
<p>一个shell脚本可以自己启动多个子进程。这些子进程使得脚本进行并行处理，实际上是多个支线任务同时进行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># subshell-test.sh</span>

<span class="token punctuation">(</span>
<span class="token comment"># 在圆括号内，因此是一个子shell . . .</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token punctuation">]</span>   <span class="token comment"># 无限循环.</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Subshell running . . ."</span>
<span class="token keyword">done</span>
<span class="token punctuation">)</span>

<span class="token comment">#  脚本会永远运行，或者至少直到由Ctl-C终止。</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>  <span class="token comment"># 脚本结束 （但是永远无法到达这里）。</span>



现在，运行这个脚本：
<span class="token function">sh</span> subshell-test.sh

另外，在脚本运行的同时， 从另一个xterm运行：
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> subshell-test.sh

<span class="token environment constant">UID</span>       PID   <span class="token environment constant">PPID</span>  C STIME TTY      TIME     CMD
<span class="token number">500</span>       <span class="token number">2698</span>  <span class="token number">2502</span>  <span class="token number">0</span> <span class="token number">14</span>:26 pts/4    00:00:00 <span class="token function">sh</span> subshell-test.sh
<span class="token number">500</span>       <span class="token number">2699</span>  <span class="token number">2698</span> <span class="token number">21</span> <span class="token number">14</span>:26 pts/4    00:00:24 <span class="token function">sh</span> subshell-test.sh

          ^^^^

分析：
PID <span class="token number">2698</span>, 脚本, 启动 PID <span class="token number">2699</span>, 子shell.

注释: “<span class="token environment constant">UID</span> <span class="token punctuation">..</span>.”这一列可以通过“grep”命令筛去，但是由于说明的目的而显示在这里。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般来说，脚本的一个<a href="http://tldp.org/LDP/abs/html/external.html#EXTERNALREF" target="_blank" rel="noopener noreferrer">外部命令<ExternalLinkIcon/></a>会使得子进程产生<a href="http://tldp.org/LDP/abs/html/internal.html#FORKREF" target="_blank" rel="noopener noreferrer">分叉<ExternalLinkIcon/></a>，[^1] 但是一个Bash内建命令不会如此。</p>
<p><strong>在圆括号内的命令列</strong></p>
<p>(命令1; 命令1; 命令3; ...)</p>
<pre><code>放在圆括号内的一列命令作为子shell运行。
</code></pre>
<p>子shell的变量<em>不能</em>被这个子shell内代码区块之外的部分看见。这些变量不能被<a href="http://tldp.org/LDP/abs/html/internal.html#FORKREF" target="_blank" rel="noopener noreferrer">父进程<ExternalLinkIcon/></a>中调用，也不能被启动次子shell的shell调用。这些变量实际上是<em>子进程</em>的<a href="http://tldp.org/LDP/abs/html/localvar.html#LOCALREF" target="_blank" rel="noopener noreferrer">局部变量<ExternalLinkIcon/></a>。</p>
<p><strong>例21-1.子shell的变量范围</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># subshell.sh</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"We are outside the subshell."</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Subshell level OUTSIDE subshell = <span class="token variable">$BASH_SUBSHELL</span>"</span>
<span class="token comment"># Bash, 版本3，增加新变量                 $BASH_SUBSHELL 。</span>
<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">outer_variable</span><span class="token operator">=</span>Outer
<span class="token assign-left variable">global_variable</span><span class="token operator">=</span>
<span class="token comment">#  定义全局变量来”存储“子shell变量值。</span>

<span class="token punctuation">(</span>
<span class="token builtin class-name">echo</span> <span class="token string">"We are inside the subshell."</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Subshell level INSIDE subshell = <span class="token variable">$BASH_SUBSHELL</span>"</span>
<span class="token assign-left variable">inner_variable</span><span class="token operator">=</span>Inner

<span class="token builtin class-name">echo</span> <span class="token string">"From inside subshell, <span class="token entity" title="\&quot;">\"</span>inner_variable<span class="token entity" title="\&quot;">\"</span> = <span class="token variable">$inner_variable</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"From inside subshell, <span class="token entity" title="\&quot;">\"</span>outer<span class="token entity" title="\&quot;">\"</span> = <span class="token variable">$outer_variable</span>"</span>

<span class="token assign-left variable">global_variable</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$inner_variable</span>"</span>   <span class="token comment">#  这会允许”输出“ 一个子shell变量吗？</span>
<span class="token punctuation">)</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">"We are outside the subshell."</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Subshell level OUTSIDE subshell = <span class="token variable">$BASH_SUBSHELL</span>"</span>
<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable">$inner_variable</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"inner_variable undefined in main body of shell"</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"inner_variable defined in main body of shell"</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">"From main body of shell, <span class="token entity" title="\&quot;">\"</span>inner_variable<span class="token entity" title="\&quot;">\"</span> = <span class="token variable">$inner_variable</span>"</span>
<span class="token comment">#  $inner_variable 会显示为空白 （未初始化） </span>
<span class="token comment">#+ 因为定义在子shell的变量是“局部变量”。</span>
<span class="token comment">#  有办法改正这一点吗？</span>
<span class="token builtin class-name">echo</span> <span class="token string">"global_variable = "</span><span class="token variable">$global_variable</span><span class="token string">""</span>  <span class="token comment"># 为什么这不行？</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># =======================================================================</span>

<span class="token comment"># 另外 ...</span>

<span class="token builtin class-name">echo</span> <span class="token string">"-----------------"</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token number">41</span>                                                 <span class="token comment"># 全局变量。</span>

<span class="token punctuation">(</span> <span class="token builtin class-name">let</span> <span class="token string">"var+=1"</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">"\<span class="token variable">$var</span> INSIDE subshell = <span class="token variable">$var</span>"</span> <span class="token punctuation">)</span>  <span class="token comment"># 42</span>

<span class="token builtin class-name">echo</span> <span class="token string">"\<span class="token variable">$var</span> OUTSIDE subshell = <span class="token variable">$var</span>"</span>                   <span class="token comment"># 41</span>
<span class="token comment"># 子shell内的变量操作，即使是对全局变量，不影响变量在子shell外的值！</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment">#  问题：</span>
<span class="token comment">#  --------</span>
<span class="token comment">#  一旦执行一个子shell，</span>
<span class="token comment">#+ 是否有办法再次进入这个子shell以便修改或调用子shell的变量？ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样参看 <a href="http://tldp.org/LDP/abs/html/internalvariables.html#BASHPIDREF" target="_blank" rel="noopener noreferrer">$BASHPID<ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/gotchas.html#SUBPIT" target="_blank" rel="noopener noreferrer">例34-2<ExternalLinkIcon/></a>。</p>
<p><strong>定义</strong>： 变量的<em>范围</em>是指其有意义的上下文内容，在此变量<em>值</em>可以被引用。比如说，<a href="http://tldp.org/LDP/abs/html/localvar.html#LOCALREF1" target="_blank" rel="noopener noreferrer">局部变量<ExternalLinkIcon/></a>的范围只在函数、代码区块或子shell内的相应定义范围内，而<em>全局</em>变量的范围则是其出现的整个脚本区域。</p>
<p>内部变量 <a href="http://tldp.org/LDP/abs/html/internalvariables.html#BASHSUBSHELLREF" target="_blank" rel="noopener noreferrer">$BASH_SUBSHELL<ExternalLinkIcon/></a> 指出一个子shell的嵌套层级时，而变量 <a href="http://tldp.org/LDP/abs/html/internalvariables.html#SHLVLREF" target="_blank" rel="noopener noreferrer">$SHLVL<ExternalLinkIcon/></a> 指示在子shell内<em>不变</em>的层级。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">" \<span class="token variable">$BASH_SUBSHELL</span> outside subshell       = <span class="token variable">$BASH_SUBSHELL</span>"</span>           <span class="token comment"># 0</span>
  <span class="token punctuation">(</span> <span class="token builtin class-name">echo</span> <span class="token string">" \<span class="token variable">$BASH_SUBSHELL</span> inside subshell        = <span class="token variable">$BASH_SUBSHELL</span>"</span> <span class="token punctuation">)</span>     <span class="token comment"># 1</span>
  <span class="token punctuation">(</span> <span class="token punctuation">(</span> <span class="token builtin class-name">echo</span> <span class="token string">" \<span class="token variable">$BASH_SUBSHELL</span> inside nested subshell = <span class="token variable">$BASH_SUBSHELL</span>"</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token comment"># 2</span>
<span class="token comment"># ^ ^                          ***  嵌套   ***                        ^ ^</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">" \<span class="token environment constant">$SHLVL</span> outside subshell = <span class="token environment constant">$SHLVL</span>"</span>       <span class="token comment"># 3</span>
<span class="token punctuation">(</span> <span class="token builtin class-name">echo</span> <span class="token string">" \<span class="token environment constant">$SHLVL</span> inside subshell  = <span class="token environment constant">$SHLVL</span>"</span> <span class="token punctuation">)</span>   <span class="token comment"># 3 (不变！)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子shell内的路径改变不会带入到父shell中。</p>
<p><strong>例21-2. 列出用户信息</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># allprofs.sh: 打印所有用户信息.</span>

<span class="token comment"># 此脚本作者 Heiner Steven，由文件作者修改。</span>

<span class="token assign-left variable">FILE</span><span class="token operator">=</span>.bashrc  <span class="token comment">#  包含用户信息的文件是".profile"的原始脚本。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">home</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span><span class="token function">awk</span> -F: <span class="token string">'{print $6}'</span> /etc/passwd<span class="token variable">`</span></span>
<span class="token keyword">do</span>
  <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">"<span class="token variable">$home</span>"</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">continue</span>    <span class="token comment"># 如果没有home目录，到下一个。</span>
  <span class="token punctuation">[</span> <span class="token parameter variable">-r</span> <span class="token string">"<span class="token variable">$home</span>"</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">continue</span>    <span class="token comment"># 如果没有读取权限，到下一个。</span>
  <span class="token punctuation">(</span>cd <span class="token variable">$home</span><span class="token punctuation">;</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$FILE</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">less</span> <span class="token variable">$FILE</span><span class="token punctuation">)</span>
<span class="token keyword">done</span>

<span class="token comment"># 脚本终止时， 不需要使用命令'cd'回到初始目录，因为'cd $home'只在子shell发生。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个子shell可以用来为一个命令组设定一个“特定环境”。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>命令1
命令2
命令3
<span class="token punctuation">(</span>
  <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
  <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin
  <span class="token builtin class-name">unset</span> TERMINFO
  <span class="token builtin class-name">set</span> <span class="token parameter variable">-C</span>
  <span class="token builtin class-name">shift</span> <span class="token number">5</span>
  命令4
  命令5
  <span class="token builtin class-name">exit</span> <span class="token number">3</span> <span class="token comment"># 只退出子shell！</span>
<span class="token punctuation">)</span>
<span class="token comment"># 父shell不受影响， 且环境保留。</span>
命令6
命令7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里可以看出，命令 <a href="http://tldp.org/LDP/abs/html/internal.html#EXITREF" target="_blank" rel="noopener noreferrer">exit<ExternalLinkIcon/></a> 只终止正在运行的子shell，并不终止父shell或脚本。</p>
<p>这样的“特定环境”的一个应用是检查一个变量是否被定义。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>set -u<span class="token punctuation">;</span> <span class="token builtin class-name">:</span> <span class="token variable">$variable</span><span class="token punctuation">)</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span> /dev/null
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Variable is set."</span>
<span class="token keyword">fi</span>     <span class="token comment">#  变量已在当前脚本被设定， </span>
       <span class="token comment">#+ 或者变量是一个Bash内部变量，</span>
       <span class="token comment">#+ 或者变量在环境变量中（在export命令后）。</span>

<span class="token comment"># 也可以写成  [[ ${variable-x} != x || ${variable-y} != y ]]</span>
<span class="token comment"># 或者       [[ ${variable-x} != x$variable ]]</span>
<span class="token comment"># 或者       [[ ${variable+x} = x ]]</span>
<span class="token comment"># 或者       [[ ${variable-x} != x ]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个应用是检查一个锁定文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>set -C<span class="token punctuation">;</span> <span class="token builtin class-name">:</span> <span class="token operator">></span> lock_file<span class="token punctuation">)</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span> /dev/null
<span class="token keyword">then</span>
  <span class="token builtin class-name">:</span>   <span class="token comment"># lock_file不存在：没有用户运行此脚本</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Another user is already running that script."</span>
<span class="token builtin class-name">exit</span> <span class="token number">65</span>
<span class="token keyword">fi</span>

<span class="token comment">#  代码段作者 Stéphane Chazelas,</span>
<span class="token comment">#+ 修改者 Paulo Marcel Coelho Aragao。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li></li>
</ul>
<p>多个进程可以在不同子shell内并行执行。这样就可以将一个复杂的任务分解成多个子部分同时处理。</p>
<p><strong>例21-3. 在子shell中运行并行进程</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>	<span class="token punctuation">(</span>cat list1 list2 list3 <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token operator">></span> list123<span class="token punctuation">)</span> <span class="token operator">&amp;</span>
	<span class="token punctuation">(</span>cat list4 list5 list6 <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token operator">></span> list456<span class="token punctuation">)</span> <span class="token operator">&amp;</span>
	<span class="token comment"># 同时合并和排列两组列表。</span>
	<span class="token comment"># 在后台运行以确保并行执行。</span>
	<span class="token comment">#</span>
	<span class="token comment"># 同样效果如下</span>
	<span class="token comment">#   cat list1 list2 list3 | sort | uniq > list123 &amp;</span>
	<span class="token comment">#   cat list4 list5 list6 | sort | uniq > list456 &amp;</span>
	
	<span class="token function">wait</span>   <span class="token comment"># 在子shell结束前不执行之后命令。</span>
	
	<span class="token function">diff</span> list123 list456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向子shell的I/O重定向使用管道算符&quot;|&quot;，正如 ls -al | (命令)</p>
<p>在花括号间的代码块不会启动一个子shell。</p>
<p>{ 命令1； 命令2； 命令3； ...命令N； }</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">23</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$var1</span>"</span>   <span class="token comment"># 23</span>

<span class="token punctuation">{</span> <span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">76</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$var1</span>"</span>   <span class="token comment"># 76</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> <strong>Notes</strong></h3>
<p>[^1]: 和 <a href="http://tldp.org/LDP/abs/html/internal.html#EXECREF" target="_blank" rel="noopener noreferrer">exec<ExternalLinkIcon/></a> 命令一起触发的外部命令（通常）不会分叉一个子进程 / 子shell</p>
</div></template>


