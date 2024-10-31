import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c as p,a as n,b as s,d as i,w as d,e as a}from"./app-7c13e092.js";const r={},u=a(`<h1 id="_9-1-内部变量" tabindex="-1"><a class="header-anchor" href="#_9-1-内部变量" aria-hidden="true">#</a> 9.1 内部变量</h1><h2 id="内建变量" tabindex="-1"><a class="header-anchor" href="#内建变量" aria-hidden="true">#</a> 内建变量</h2><p>影响 Bash 脚本行为的变量。</p><h3 id="bash" tabindex="-1"><a class="header-anchor" href="#bash" aria-hidden="true">#</a> $BASH</h3><p>Bash程序的路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH</span>
/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bash-env" tabindex="-1"><a class="header-anchor" href="#bash-env" aria-hidden="true">#</a> $BASH_ENV</h3><p>这个环境变量会指向一个 Bash 启动文件，该文件在脚本被调用时会被读取。</p><h3 id="bash-subshell" tabindex="-1"><a class="header-anchor" href="#bash-subshell" aria-hidden="true">#</a> $BASH_SUBSHELL</h3><p>该变量用于提示所处的 subshell 层级。这是在 Bash version 3 中被引入的新特性。</p>`,10),v={href:"http://tldp.org/LDP/abs/html/subshells.html#SUBSHELL",target:"_blank",rel:"noopener noreferrer"},m=a(`<h3 id="bashpid" tabindex="-1"><a class="header-anchor" href="#bashpid" aria-hidden="true">#</a> $BASHPID</h3><p>当前 Bash 进程实例的进程ID号。虽然与 <code>$$</code> 变量不一样，但是通常它们会给出相同的结果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash4$ <span class="token builtin class-name">echo</span> <span class="token variable">$$</span>
<span class="token number">11015</span>


bash4$ <span class="token builtin class-name">echo</span> <span class="token variable">$BASHPID</span>
<span class="token number">11015</span>


bash4$ <span class="token function">ps</span> ax <span class="token operator">|</span> <span class="token function">grep</span> bash4
<span class="token number">11015</span> pts/2    R      <span class="token number">0</span>:00 bash4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而...</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash4</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\$\\$ outside of subshell = <span class="token variable">$$</span>&quot;</span>                              <span class="token comment"># 9602</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$BASH_SUBSHELL</span>  outside of subshell = <span class="token variable">$BASH_SUBSHELL</span>&quot;</span>      <span class="token comment"># 0</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$BASHPID</span> outside of subshell = <span class="token variable">$BASHPID</span>&quot;</span>                   <span class="token comment"># 9602</span>

<span class="token builtin class-name">echo</span>

<span class="token punctuation">(</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\$\\$ inside of subshell = <span class="token variable">$$</span>&quot;</span>                             <span class="token comment"># 9602</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$BASH_SUBSHELL</span> inside of subshell = <span class="token variable">$BASH_SUBSHELL</span>&quot;</span>      <span class="token comment"># 1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$BASHPID</span> inside of subshell = <span class="token variable">$BASHPID</span>&quot;</span> <span class="token punctuation">)</span>                <span class="token comment"># 9603</span>
  <span class="token comment">#  注意 $$ 总是返回父进程的 PID。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bash-versinfo-n" tabindex="-1"><a class="header-anchor" href="#bash-versinfo-n" aria-hidden="true">#</a> $BASH_VERSINFO[n]</h3><p>这是一个6个元素的数组，其中包含了已经安装的 Bash 的版本信息。该变量与变量 <code>$BASH_VERSION</code> 类似，但是更加详细。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Bash 版本信息：</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;BASH_VERSINFO[<span class="token variable">$n</span>] = <span class="token variable">\${<span class="token environment constant">BASH_VERSINFO</span><span class="token punctuation">[</span>$n<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># BASH_VERSINFO[0] = 3                      # 主版本号</span>
<span class="token comment"># BASH_VERSINFO[1] = 00                     # 次版本号</span>
<span class="token comment"># BASH_VERSINFO[2] = 14                     # 补丁号</span>
<span class="token comment"># BASH_VERSINFO[3] = 1                      # 构建版本号</span>
<span class="token comment"># BASH_VERSINFO[4] = release                # 发行状态</span>
<span class="token comment"># BASH_VERSINFO[5] = i386-redhat-linux-gnu  # 架构</span>
                                            <span class="token comment"># (与 $MACHTYPE 相同)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bash-version" tabindex="-1"><a class="header-anchor" href="#bash-version" aria-hidden="true">#</a> $BASH_VERSION</h3><p>已经安装的 Bash 的版本信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH_VERSION</span>
<span class="token number">3.2</span>.25<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcsh% <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH_VERSION</span>
<span class="token environment constant">BASH_VERSION</span><span class="token builtin class-name">:</span> Undefined variable.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 <code>$BASH_VERSION</code> 来判断运行的是哪个 shell 是一个不错的方法，因为变量 <code>$SHELL</code> 并不总是能够给出正确的答案。</p><h3 id="cdpath" tabindex="-1"><a class="header-anchor" href="#cdpath" aria-hidden="true">#</a> $CDPATH</h3><p>变量指定 <code>cd</code> 命令可以搜索的路径，路径之间用冒号进行分隔。该变量的功能类似于指定可执行文件搜索路径的变量 <code>$PATH</code>。可以在本地文件 <code>~/.bashrc</code> 中设置该变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">cd</span> bash-doc
bash: <span class="token builtin class-name">cd</span> <span class="token builtin class-name">:</span> bash-doc: No such <span class="token function">file</span> or directory


bash$ <span class="token assign-left variable">CDPATH</span><span class="token operator">=</span>/usr/share/doc
bash$ <span class="token builtin class-name">cd</span> bash-doc
/usr/share/doc/bash-doc


bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PWD</span>
/usr/share/doc/bash-doc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dirstack" tabindex="-1"><a class="header-anchor" href="#dirstack" aria-hidden="true">#</a> $DIRSTACK</h3><p>指代目录栈中顶部的值[^1]，目录栈由命令 <code>pushd</code> 和 <code>popd</code> 控制。</p><p>该变量相当于命令 <code>dirs</code>，但是 <code>dirs</code> 命令会显示整个目录栈。</p><h3 id="editor" tabindex="-1"><a class="header-anchor" href="#editor" aria-hidden="true">#</a> $EDITOR</h3><p>脚本所调用的默认编辑器，通常是 <code>vi</code> 或是 <code>emcas</code>。</p><h3 id="euid" tabindex="-1"><a class="header-anchor" href="#euid" aria-hidden="true">#</a> $EUID</h3><p>有效用户ID。</p><p>有效用户ID（EUID）是指当前用户正在使用的用户ID，可以通过 <code>su</code> 命令修改。</p><p>{% hint style=&quot;warning&quot; %}</p><p><code>$EUID</code> 与 <code>$UID</code> 并不总是相同的。</p><p>{% endhint %}</p><h3 id="funcname" tabindex="-1"><a class="header-anchor" href="#funcname" aria-hidden="true">#</a> $FUNCNAME</h3><p>当前运行函数的函数名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">xyz23</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$FUNCNAME</span> now executing.&quot;</span>  <span class="token comment"># xyz2 now executing.</span>
<span class="token punctuation">}</span>

xyz23

<span class="token builtin class-name">echo</span> <span class="token string">&quot;FUNCNAME = <span class="token variable">$FUNCNAME</span>&quot;</span>        <span class="token comment"># FUNCNAME =</span>
                                   <span class="token comment"># 如果在函数外则为空值。 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以参考 <a href="">样例 A-50</a>。</p><h3 id="globignore" tabindex="-1"><a class="header-anchor" href="#globignore" aria-hidden="true">#</a> $GLOBIGNORE</h3>`,32),b=a(`<h3 id="groups" tabindex="-1"><a class="header-anchor" href="#groups" aria-hidden="true">#</a> $GROUPS</h3><p>当前用户所属的用户组。</p><p>该变量存储了当前用户所归属的用户组ID列表，是一个数组。内容与记录在文件 <code>/etc/passwd</code> 和文件 <code>/etc/group</code> 中的一致。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root<span class="token comment"># echo $GROUPS</span>
<span class="token number">0</span>


root<span class="token comment"># echo \${GROUPS[1]}</span>
<span class="token number">1</span>


root<span class="token comment"># echo \${GROUPS[5]}</span>
<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> $HOME</h3><p>当前用户的主目录，其值通常为 <code>/home/username</code> （参考 <a href="">样例 10-7</a>）。</p><h3 id="homename" tabindex="-1"><a class="header-anchor" href="#homename" aria-hidden="true">#</a> $HOMENAME</h3><p>系统启动的初始化脚本通过命令 <code>hostname</code> 给系统分配主机名。而函数 <code>gethostname()</code> 则是给 Bash 的内部变量 <code>$HOSTNAME</code> 赋值。可以参考 <a href="">样例 10-7</a>。</p><h3 id="hosttype" tabindex="-1"><a class="header-anchor" href="#hosttype" aria-hidden="true">#</a> $HOSTTYPE</h3><p>主机类型。</p><p>类似变量 <a href=""><code>$MACHTYPE</code></a>，用于识别系统硬件信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$HOSTTYPE</span>
i686
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ifs" tabindex="-1"><a class="header-anchor" href="#ifs" aria-hidden="true">#</a> $IFS</h3><p>内部字段分隔符。</p><p>该变量决定了 Bash 在解析字符串时如何去识别 <a href="">字段</a> 或单词边界。</p><p><code>$IFS</code> 的缺省值是空白符（空格，制表符以及换行符），但其可以被修改。例如你在处理逗号分隔的文件时可以将其设置为逗号。需要注意 <a href=""><code>$*</code></a> 使用保存在 <code>$IFS</code> 中的第一个字符。可以参考 <a href="">样例 5-1</a>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token environment constant">$IFS</span>&quot;</span>

<span class="token punctuation">(</span>当 <span class="token environment constant">$IFS</span> 设置为缺省值时，显示空行。<span class="token punctuation">)</span>


bash$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token environment constant">$IFS</span>&quot;</span> <span class="token operator">|</span> <span class="token function">cat</span> <span class="token parameter variable">-vte</span>
 ^I$
 $
<span class="token punctuation">(</span>显示空白符：首先是一个空格，然后是 ^I <span class="token punctuation">[</span>水平制表符<span class="token punctuation">]</span>，
 然后是换行符，最后在末尾显示 <span class="token string">&quot;$&quot;</span>。<span class="token punctuation">)</span>


bash$ <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;set w x y z; IFS=&quot;:-;&quot;; echo &quot;$*&quot;&#39;</span>
w:x:y:z
<span class="token punctuation">(</span>从字符串中解析命令，然后将命令参数分配给位置参数。<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过设置 <code>$IFS</code> 来忽略文件路径名中空格带来的影响。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">printf</span> <span class="token string">&#39;\\n\\t&#39;</span><span class="token variable">)</span></span>&quot;</span>   <span class="token comment"># 按 David Wheeler 所述。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>{% hint style=&quot;warning&quot; %}</p><p>相比于其他字符，变量 <code>$IFS</code> 在处理空白符时有所不同。</p><h4 id="样例-9-1-ifs-与空白符" tabindex="-1"><a class="header-anchor" href="#样例-9-1-ifs-与空白符" aria-hidden="true">#</a> 样例 9-1. $IFS 与空白符</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># ifs.sh</span>


<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token string">&quot;a+b+c&quot;</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token string">&quot;d-e-f&quot;</span>
<span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token string">&quot;g,h,i&quot;</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>+
<span class="token comment"># 加号会被解析成分隔符。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>     <span class="token comment"># a b c</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>     <span class="token comment"># d-e-f</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>     <span class="token comment"># g,h,i</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;-&quot;</span>
<span class="token comment"># 恢复对加号的默认解析。</span>
<span class="token comment"># 现在减号会被解析成分隔符。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>     <span class="token comment"># a+b+c</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>     <span class="token comment"># d e f</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>     <span class="token comment"># g,h,i</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span>
<span class="token comment"># 现在逗号会被解析成分隔符。</span>
<span class="token comment"># 恢复对减号的默认解析。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>     <span class="token comment"># a+b+c</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>     <span class="token comment"># d-e-f</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>     <span class="token comment"># g h i</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot; &quot;</span>
<span class="token comment"># 现在空格会被解析成分隔符。</span>
<span class="token comment"># 逗号恢复成默认解析。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>     <span class="token comment"># a+b+c</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>     <span class="token comment"># d-e-f</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>     <span class="token comment"># g,h,i</span>

<span class="token comment"># ======================================================== #</span>

<span class="token comment"># 然而...</span>
<span class="token comment"># $IFS 处理空白符的方式不同其他字符。</span>

<span class="token function-name function">output_args_one_per_line</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">for</span> arg
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable">$arg</span>]&quot;</span>
  <span class="token keyword">done</span> <span class="token comment">#  ^    ^   为了获得更好的视觉体验，把参数放到了括号里。</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;IFS=<span class="token entity" title="\\&quot;">\\&quot;</span>  <span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-------&quot;</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot; &quot;</span>
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot; a  b c   &quot;</span>
<span class="token comment">#    ^ ^^   ^^^</span>
output_args_one_per_line <span class="token variable">$var</span>  <span class="token comment"># output_args_one_per_line \`echo &quot; a  b c   &quot;\`</span>
<span class="token comment"># [a]</span>
<span class="token comment"># [b]</span>
<span class="token comment"># [c]</span>


<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;IFS=:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----&quot;</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot;:a::b:c:::&quot;</span>               <span class="token comment"># 与上面一样的模式，</span>
<span class="token comment">#    ^ ^^   ^^^                #+ 仅仅是将 &quot; &quot; 替换成了 &quot;:&quot; ...</span>
output_args_one_per_line <span class="token variable">$var</span>
<span class="token comment"># []</span>
<span class="token comment"># [a]</span>
<span class="token comment"># []</span>
<span class="token comment"># [b]</span>
<span class="token comment"># [c]</span>
<span class="token comment"># []</span>
<span class="token comment"># []</span>

<span class="token comment"># 注意那些“空的”括号。</span>
<span class="token comment"># 同样的情况也会出现在 awk 命令所使用的 &quot;FS&quot; 字段分隔符中。</span>


<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{% endhint %}</p><p>（非常感谢 Stéphane Chazelas 提供了上面的样例并做出的详细说明。）</p><p>也可以参考 <a href="">样例 16-41</a>，<a href="">样例 11-8</a> 和 <a href="">样例19-14</a>，获取更多使用 <code>$IFS</code> 的技巧。</p><h3 id="ignoreeof" tabindex="-1"><a class="header-anchor" href="#ignoreeof" aria-hidden="true">#</a> $IGNOREEOF</h3><p>忽略 EOF：用于指示 Shell 在注销前需要忽略多少个文件结束符(EOF，contrl-D)。</p><h3 id="lc-collate" tabindex="-1"><a class="header-anchor" href="#lc-collate" aria-hidden="true">#</a> $LC_COLLATE</h3><p>经常会在文件 <a href=""><code>.bashrc</code></a> 或是文件 <code>/etc/profile</code> 中被设置。该变量控制文件名扩展和模式匹配中的排序顺序。如果设置不得当，<code>LC_COLLATE</code> 将会导致 <a href="">文件名匹配</a> 中出现非预期结果。</p><p>{% hint style=&quot;info&quot; %}</p><p>在 Bash 2.05 版本之后，文件名匹配在不再区分中括号中字母的大小写。例如 <code>ls [A-M]*</code> 将会同时匹配 <code>File1.txt</code> 和 <code>file1.txt</code> 两个文件。如果想要恢复成之前的模式，则需要在文件 <code>/etc/profile</code> 或文件 <code>~/.bashrc</code> 中通过语句 <code>export LC_COLLATE=C</code> 设置 <code>LC_COLLATE</code> 的值为 <code>C</code>。</p><p>{% endhint %}</p><h3 id="lc-ctype" tabindex="-1"><a class="header-anchor" href="#lc-ctype" aria-hidden="true">#</a> $LC_CTYPE</h3><p>这个内部变量控制在 <a href="">文件匹配</a> 和模式匹配中的字符解析行为。</p><h3 id="lineno" tabindex="-1"><a class="header-anchor" href="#lineno" aria-hidden="true">#</a> $LINENO</h3><p>该变量记录了其在脚本中被使用时所处行的行号。该变量只有在被使用时才有意义，在调试过程中非常有用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># *** 调试部分起始 ***</span>
<span class="token assign-left variable">last_cmd_arg</span><span class="token operator">=</span><span class="token variable">$_</span>  <span class="token comment"># 保存最后的命令。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;At line number <span class="token variable">$LINENO</span>, variable <span class="token entity" title="\\&quot;">\\&quot;</span>v1<span class="token entity" title="\\&quot;">\\&quot;</span> = <span class="token variable">$v1</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Last command argument processed = <span class="token variable">$last_cmd_arg</span>&quot;</span>
<span class="token comment"># *** 调试部分终止 ***</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="machtype" tabindex="-1"><a class="header-anchor" href="#machtype" aria-hidden="true">#</a> $MACHTYPE</h3><p>设备类型。</p><p>识别系统硬件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$MACHTYPE</span>
i686
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oldpwd" tabindex="-1"><a class="header-anchor" href="#oldpwd" aria-hidden="true">#</a> $OLDPWD</h3><p>上一个工作目录(OLD-Print-Working-Directory)，也就是之前所在的目录。</p><h3 id="ostype" tabindex="-1"><a class="header-anchor" href="#ostype" aria-hidden="true">#</a> $OSTYPE</h3><p>操作系统类型。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$OSTYPE</span>
linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> $PATH</h3><p>可执行文件搜索路径，其值通常包含 <code>/usr/bin</code>，<code>/usr/X11R6/bin/</code>，<code>/usr/local/bin</code> 等路径。</p><p>给定一个命令，shell就会自动从搜索路径包含的目录中利用哈希表搜索该可执行命令。而搜索路径就保存在 <a href="">环境变量</a> <code>$PATH</code> 中，其中包含的一系列目录则通过冒号进行分隔。通常情况下，<code>$PATH</code> 会定义在文件 <code>/etc/profile</code> 或文件 <a href=""><code>~/.bashrc</code></a> 中（参考 <a href="">附录 H</a>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
/bin:/usr/bin:/usr/local/bin/:/usr/X11R6/bin:/sbin:/usr/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>PATH=\${PATH}:/opt/bin</code> 表示添加目录 <code>/opt/bin</code> 到当前的搜索路径中。在脚本中可以通过这种方式临时添加目录到搜索路径。而当脚本结束时，<code>$PATH</code> 就会恢复到原始值（类似于脚本这样的子进程所作出的修改，不会影响到例如 shell 这样的父进程的环境）。</p><p>{% hint style=&quot;info&quot; %}</p><p>基于安全考虑，通常在 <code>$PATH</code> 中会省略当前工作目录 <code>./</code>。</p><p>{% endhint %}</p><h3 id="pipestatus" tabindex="-1"><a class="header-anchor" href="#pipestatus" aria-hidden="true">#</a> $PIPESTATUS</h3><p>该 <a href="">数组</a> 变量保存了最后运行的前台 <a href="">管道</a> 的 <a href="">退出状态(es)</a>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PIPESTATUS</span>
<span class="token number">0</span>

bash$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator">|</span> bogus_command
bash: bogus_command: <span class="token builtin class-name">command</span> not found
bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>
<span class="token number">127</span>

bash$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator">|</span> bogus_command
bash: bogus_command: <span class="token builtin class-name">command</span> not found
bash$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">127</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$PIPESTATUS</code> 数组中的每一个元素都代表了该管道中相对应命令的退出状态。<code>$PIPESTATUS[0]</code> 表示管道中第一个命令的退出状态，<code>$PIPESTATUS[1]</code> 表示第二个命令的退出状态，以此类推。</p><p>{% hint style=&quot;warning&quot; %}</p><p>在Bash 3.0 以下版本的登录shell中，变量 <code>$PIPESTATUS</code> 可能会包含一个不正确的 0 值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcsh% <span class="token function">bash</span>

bash$ <span class="token function">who</span> <span class="token operator">|</span> <span class="token function">grep</span> nobody <span class="token operator">|</span> <span class="token function">sort</span>
bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果脚本包含了上述代码，应该得到期望的输出是 0 1 0。</p><p>感谢 Wayne Pollock 指出了这个问题并提供了上述的样例。</p><p>{% endhint %}</p><p>{% hint style=&quot;info&quot; %}</p><p>在某些场景下，<code>$PIPESTATUS</code> 变量将会产生非预期结果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH_VERSION</span>
<span class="token number">3.00</span>.14<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>-release

bash$ <span class="token function">ls</span> <span class="token operator">|</span> bogus_command <span class="token operator">|</span> <span class="token function">wc</span>
bash: bogus_command: <span class="token builtin class-name">command</span> not found
 <span class="token number">0</span>       <span class="token number">0</span>       <span class="token number">0</span>

bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">141</span> <span class="token number">127</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Chet Ramey 把上述非预期结果的原因归咎于 <a href=""><code>ls</code></a> 命令的行为。如果 <code>ls</code> 将结果输出到没有被读取的管道上，产生的 SIGPIPE 信号将会终止 <code>ls</code> 命令，同时其 <a href="">退出状态</a> 从期望的 0 变为 141。而同样的情况也会发生在命令 <code>tr</code> 中。</p><p>{% endhint %}</p><p>{% hint style=&quot;info&quot; %}</p><p><code>$PIPESTATUS</code> 是一个易失的变量。该变量需要在目标管道执行完成后，且其他任何命令执行之前去捕获。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token function">ls</span> <span class="token operator">|</span> bogus_command <span class="token operator">|</span> <span class="token function">wc</span>
bash: bogus_command: <span class="token builtin class-name">command</span> not found
 <span class="token number">0</span>       <span class="token number">0</span>                <span class="token number">0</span>

bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">0</span> <span class="token number">127</span> <span class="token number">0</span>

bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{% endhint %}</p><p>{% hint style=&quot;info&quot; %}</p><p>在 <code>$PIPESTATUS</code> 不能给出所期望的信息的情况下，使用 <a href="">pipeline 选项</a> 可能会有帮助。</p><p>{% endhint %}</p><h3 id="ppid" tabindex="-1"><a class="header-anchor" href="#ppid" aria-hidden="true">#</a> $PPID</h3><p>一个进程的 <code>$PPID</code> 即该进程的父进程的进程ID(pid)。[^2]</p><p>可以与命令 <a href=""><code>pidof</code></a> 进行比较。</p><h3 id="prompt-command" tabindex="-1"><a class="header-anchor" href="#prompt-command" aria-hidden="true">#</a> $PROMPT_COMMAND</h3><p>该变量存储在主提示符 <code>$PS1</code> 显示之前所需要执行的命令。</p><h3 id="ps1" tabindex="-1"><a class="header-anchor" href="#ps1" aria-hidden="true">#</a> $PS1</h3><p>主提示符，即在命令行中显示的提示符。</p><h3 id="ps2" tabindex="-1"><a class="header-anchor" href="#ps2" aria-hidden="true">#</a> $PS2</h3><p>次要提示符，当需要额外输入时出现的提示符。默认显示为 <code>&gt;</code>。</p><h3 id="ps3" tabindex="-1"><a class="header-anchor" href="#ps3" aria-hidden="true">#</a> $PS3</h3><p>三级提示符，显示在 <code>select</code> 循环中（参考 <a href="">样例 11-30</a>）。</p><h3 id="ps4" tabindex="-1"><a class="header-anchor" href="#ps4" aria-hidden="true">#</a> $PS4</h3><p>四级提示符，当使用 <code>-x [verbose trace]</code> <a href="">选项</a> 调用脚本时显示的提示符。默认显示为 <code>+</code>。</p><p>其可以作为调试的辅助手段，把一些诊断信息显示在 <code>$PS4</code> 中可能会有帮助。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PS4</span></span><span class="token operator">=</span><span class="token string">&#39;$(read time junk &lt; /proc/$$/schedstat; echo &quot;@@@ $time @@@ &quot; )&#39;</span>
<span class="token comment"># 根据 Erik Brandsberg 提供的建议。</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span>
<span class="token comment"># 可以在后面写各种命令...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pwd" tabindex="-1"><a class="header-anchor" href="#pwd" aria-hidden="true">#</a> $PWD</h3><p>工作目录（你当前所在的目录）。</p><p>该变量是内建命令 <a href=""><code>pwd</code></a> 的翻版。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">E_WRONG_DIRECTORY</span><span class="token operator">=</span><span class="token number">85</span>

<span class="token function">clear</span> <span class="token comment"># 清空屏幕。</span>

<span class="token assign-left variable">TargetDirectory</span><span class="token operator">=</span>/home/bozo/projects/GreatAmericanNovel

<span class="token builtin class-name">cd</span> <span class="token variable">$TargetDirectory</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Deleting stale files in <span class="token variable">$TargetDirectory</span>.&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$PWD</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;<span class="token variable">$TargetDirectory</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>    <span class="token comment"># 小心不要偶然清空了错误的目录。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Wrong directory!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;In <span class="token environment constant">$PWD</span>, rather than <span class="token variable">$TargetDirectory</span>!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Bailing out!&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_WRONG_DIRECTORY</span>
<span class="token keyword">fi</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> *
<span class="token function">rm</span> .<span class="token punctuation">[</span>A-Za-z0-9<span class="token punctuation">]</span>*    <span class="token comment"># 删除隐藏文件。</span>
<span class="token comment"># rm -f .[^.]* ..?*   删除那些以多个点开头的文件。</span>
<span class="token comment"># (shopt -s dotglob; rm -f *)   这样写也可以。</span>
<span class="token comment"># 感谢 S.C. 提出这点。</span>

<span class="token comment">#  文件名可以包含ASCII码中范围为 0-255 的所有字符，</span>
<span class="token comment">#+ 除了字符 &quot;/&quot;。</span>
<span class="token comment">#  删除以一些特殊字符开头的文件，例如 -</span>
<span class="token comment">#+ 留作练习。（提示： rm ./-weirdname 或者 rm -- -weirdname）</span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable">$?</span>   <span class="token comment"># 删除操作的结果。如果删除成功，值为0。</span>

<span class="token builtin class-name">echo</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span>              <span class="token comment"># 是不是还有剩余没有删除的文件？</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Done.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Old files deleted in <span class="token variable">$TargetDirectory</span>.&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token comment"># 如果有其他需要，在这里完成。</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$result</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reply" tabindex="-1"><a class="header-anchor" href="#reply" aria-hidden="true">#</a> $REPLY</h3><p>当没有给 <a href=""><code>read</code></a> 命令提供接收参数时的默认接收参数。该变量同样适用于 <a href=""><code>select</code></a> 菜单接收用户输入值的场景，需要注意的是，用户只需要输入菜单项的编号，而不需要输入完整的菜单项内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># reply.sh</span>

<span class="token comment"># REPLY 是 &#39;read&#39; 命令的默认接收参数。</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;What is your favorite vegetable? &quot;</span>
<span class="token builtin class-name">read</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite vegetable is <span class="token environment constant">$REPLY</span>.&quot;</span>
<span class="token comment">#  当且仅当 &#39;read&#39; 命令没有接收参数的时候，</span>
<span class="token comment">#+ REPLY 才能保存最近一次 &#39;read&#39; 命令接收的值。</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;What is your favorite fruit? &quot;</span>
<span class="token builtin class-name">read</span> fruit
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite fruit is <span class="token variable">$fruit</span>.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;but...&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Value of \\<span class="token environment constant">$REPLY</span> is still <span class="token environment constant">$REPLY</span>.&quot;</span>
<span class="token comment">#  因为变量 $fruit 接收了新一次 &quot;read&quot; 命令所读入的值，</span>
<span class="token comment">#+ 所以 $REPLY 仍旧存储的是上一次接收的值。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="seconds" tabindex="-1"><a class="header-anchor" href="#seconds" aria-hidden="true">#</a> $SECONDS</h3><p>该变量记录到目前为止脚本执行的时间，单位为秒。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">TIME_LIMIT</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">INTERVAL</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hit Control-C to exit before <span class="token variable">$TIME_LIMIT</span> seconds.&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$SECONDS</span>&quot;</span> <span class="token parameter variable">-le</span> <span class="token string">&quot;<span class="token variable">$TIME_LIMIT</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>   <span class="token comment">#   $SECONDS 是一个 shell 的内部变量。</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$SECONDS</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token assign-left variable">units</span><span class="token operator">=</span>second
  <span class="token keyword">else</span>
    <span class="token assign-left variable">units</span><span class="token operator">=</span>seconds
  <span class="token keyword">fi</span>
  
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;This script has been running <span class="token environment constant">$SECONDS</span> <span class="token variable">$units</span>.&quot;</span>
  <span class="token comment">#  在一台性能较差或负载过重的设备上，</span>
  <span class="token comment">#+ 这个脚本可能会偶尔跳过几个计数。</span>
  <span class="token function">sleep</span> <span class="token variable">$INTERVAL</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\a">\\a</span>&quot;</span>  <span class="token comment"># 发出蜂鸣声！</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shellopts" tabindex="-1"><a class="header-anchor" href="#shellopts" aria-hidden="true">#</a> $SHELLOPTS</h3><p>该只读变量记录了 shell 中已启用的 <a href="">选项</a> 列表。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELLOPTS</span>
braceexpand:hashall:histexpand:monitor:history:interactive-comments:emacs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shlvl" tabindex="-1"><a class="header-anchor" href="#shlvl" aria-hidden="true">#</a> $SHLVL</h3><p>当前 shell 的层级，即嵌套了多少层 Bash [^3]。如果命令行的层级 <code>$SHLVL</code> 为 1，那么在其中执行的脚本层级则增加到 2。</p><p>{% hint style=&quot;info&quot; %}</p><p>该变量 <a href="">不受 subshell 影响</a>。当你需要指出嵌套了多少层 subshell 时，需要使用变量 <a href="#$BASH_SUBSHELL"><code>$BASH_SUBSHELL</code></a>。</p><p>{% endhint %}</p><h3 id="tmout" tabindex="-1"><a class="header-anchor" href="#tmout" aria-hidden="true">#</a> $TMOUT</h3><p>如果 <code>$TMOUT</code> 被设为非 0 值 <code>time</code>，那么 shell 会在 <code>$time</code> 秒后超时，然后导致 shell 登出。</p><p>在 Bash 2.05b 版本之后，可以在脚本中将 <code>read</code> 命令与 <code>$TMOUT</code> 变量进行结合。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 只能在 Bash 2.05b 及之后的版本中成功执行。</span>

<span class="token assign-left variable">TMOUT</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token comment"># 提示会在 3 秒后超时。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;What is your favorite song?&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Quickly now, you only have <span class="token variable">$TMOUT</span> seconds to answer!&quot;</span>
<span class="token builtin class-name">read</span> song

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$song</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token assign-left variable">song</span><span class="token operator">=</span><span class="token string">&quot;(no answer)&quot;</span>
  <span class="token comment"># 默认值。</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite song is <span class="token variable">$song</span>.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在脚本中，同样也存在其他一些实现超时功能的更复杂的方法。其中一个方法是设置一个循环的计时器，当脚本超时的时候，计时器会给脚本发送一个信号。同时，也需要一个处理信号的程序来 <a href="">捕获</a>（参考 <a href="">样例 32-5</a>）由循环计时器产生的中断。</p><h4 id="样例-9-2-限时输入" tabindex="-1"><a class="header-anchor" href="#样例-9-2-限时输入" aria-hidden="true">#</a> 样例 9-2. 限时输入</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># timed-input.sh</span>

<span class="token comment"># TMOUT=3    在新版本的 Bash 中起效。</span>

<span class="token assign-left variable">TIMER_INTERRUPT</span><span class="token operator">=</span><span class="token number">14</span>
<span class="token assign-left variable">TIMELIMIT</span><span class="token operator">=</span><span class="token number">3</span>  <span class="token comment"># 在该实例中设置为 3 秒。</span>
             <span class="token comment"># 同样可以设置成其他值。</span>
             
<span class="token function-name function">PrintAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$answer</span>&quot;</span> <span class="token operator">=</span> TIMEOUT <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$answer</span>
  <span class="token keyword">else</span>       <span class="token comment"># 不要混淆了这两个实例。</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite veggie is <span class="token variable">$answer</span>&quot;</span>
    <span class="token function">kill</span> <span class="token variable">$!</span>  <span class="token comment">#  终止在后台运行的</span>
             <span class="token comment">#+ 不再被需要的 TimerOn 函数。</span>
             <span class="token comment">#  $! 代表最后一个在后台运行的作业的进程ID。</span>
  <span class="token keyword">fi</span>

<span class="token punctuation">}</span>
                
                
<span class="token function-name function">TimerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token function">sleep</span> <span class="token variable">$TIMELIMIT</span> <span class="token operator">&amp;&amp;</span> <span class="token function">kill</span> <span class="token parameter variable">-s</span> <span class="token number">14</span> <span class="token variable">$$</span> <span class="token operator">&amp;</span>
  <span class="token comment"># 等待 3 秒，然后给脚本发送一个信号。</span>
<span class="token punctuation">}</span>


<span class="token function-name function">Int14Vector</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token assign-left variable">answer</span><span class="token operator">=</span><span class="token string">&quot;TIMEOUT&quot;</span>
  PrintAnswer
  <span class="token builtin class-name">exit</span> <span class="token variable">$TIMER_INTERRUPT</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">trap</span> Int14Vector <span class="token variable">$TIMER_INTERRUPT</span>
<span class="token comment"># 我们的目的就是通过时间中断 (14) 终止程序。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;What is your favorite vegetable &quot;</span>
TimerOn
<span class="token builtin class-name">read</span> answer
PrintAnswer


<span class="token comment">#  必须承认，这个实现限时输入的方法并不优雅。</span>
<span class="token comment">#  但利用 &quot;read&quot; 命令的 &quot;-t&quot; 选项可以简化这个操作。</span>
<span class="token comment">#  参考脚本 &quot;t-out.sh&quot;。</span>
<span class="token comment">#  思考一下，如果不是对用户的单次输入时间进行限制，</span>
<span class="token comment">#+ 而是对整个脚本的运行时间进行限制，应该怎么做？</span>

<span class="token comment">#  如果你需要更优雅的写法 ...</span>
<span class="token comment">#+ 可以考虑用 C 或者 C++ 来编写应用，</span>
<span class="token comment">#+ 并使用其中包含的类似 &#39;alarm&#39; 或是 ‘setitimer&#39; 等合适的库函数来实现计时。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种方法是使用 <a href=""><code>stty</code></a>。</p><h4 id="样例-9-3-再来一次-限时输入" tabindex="-1"><a class="header-anchor" href="#样例-9-3-再来一次-限时输入" aria-hidden="true">#</a> 样例 9-3. 再来一次，限时输入</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># timeout.sh</span>

<span class="token comment">#  该脚本由 Stephane Chazelas 编写，</span>
<span class="token comment">#+ 并由本书作者修改。</span>

<span class="token assign-left variable">INTERVAL</span><span class="token operator">=</span><span class="token number">5</span>                <span class="token comment"># 超时所需的时间间隔</span>

<span class="token function-name function">timedout_read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">timeout</span><span class="token operator">=</span><span class="token variable">$1</span>
  <span class="token assign-left variable">varname</span><span class="token operator">=</span><span class="token variable">$2</span>
  <span class="token assign-left variable">old_tty_settings</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>stty <span class="token parameter variable">-g</span><span class="token variable">\`</span></span>
  stty <span class="token parameter variable">-icanon</span> min <span class="token number">0</span> <span class="token function">time</span> <span class="token variable">\${timeout}</span><span class="token number">0</span>
  <span class="token builtin class-name">eval</span> <span class="token builtin class-name">read</span> <span class="token variable">$varname</span>      <span class="token comment"># 或者直接写成 read $varname</span>
  stty <span class="token string">&quot;<span class="token variable">$old_tty_settings</span>&quot;</span>
  <span class="token comment"># 参考 &quot;stty&quot; 的帮助页面 (man)。</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;What&#39;s your name? Quick! &quot;</span>
timedout_read <span class="token variable">$INTERVAL</span> your_name

<span class="token comment">#  该脚本也许并不能在所有类型的终端上正常运行。</span>
<span class="token comment">#  最大的超时时间间隔依赖于终端。</span>
<span class="token comment">#+ （通常是 25.5 秒）。</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$your_name</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment"># 如果在超时前输入了姓名 ...</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your name is <span class="token variable">$your_name</span>.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Timed out.&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 该脚本的计时行为与 &quot;timed-input.sh&quot; 中的计时行为有所不同，</span>
<span class="token comment"># 该脚本的计时器会在每次按键后被重置。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可能最简单的方法就是利用 <a href=""><code>read</code></a> 命令的 <code>-t</code> 选项。</p><h4 id="样例-9-4-限时-read" tabindex="-1"><a class="header-anchor" href="#样例-9-4-限时-read" aria-hidden="true">#</a> 样例 9-4. 限时 read</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># t-out.sh [time-out]</span>
<span class="token comment"># 从 &quot;syngin seven&quot; 的建议中所汲取的灵感，谢谢你们。</span>


<span class="token assign-left variable">TIMELIMIT</span><span class="token operator">=</span><span class="token number">4</span>         <span class="token comment"># 4 秒</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token variable">$TIMELIMIT</span> variable <span class="token operator">&lt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token comment">#                           ^^^</span>
<span class="token comment">#  在这个实例中，只有 Bash 1.x 或 Bash 2.x 版本需要 &quot;&lt;&amp;1&quot;，</span>
<span class="token comment">#  而在 Bash 3 及更高版本则不需要。</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment"># 判断是否为空。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Timed out, variable still unset.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;variable = <span class="token variable">$variable</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uid" tabindex="-1"><a class="header-anchor" href="#uid" aria-hidden="true">#</a> $UID</h3><p>用户 ID。</p><p>记录在文件 <a href=""><code>/etc/passwd</code></a> 中当前用户的用户标识号。</p><p>该 ID 表示的是当前用户的真实 ID，即使用户通过 <code>su</code> 命令临时切换至另一个用户，这个 ID 也不会改变。<code>$UID</code> 是一个只读变量，不能够被命令行或是脚本中的命令所修改，并与内建命令 <a href=""><code>id</code></a> 相对应。</p><h4 id="样例-9-5-我是-root-用户吗" tabindex="-1"><a class="header-anchor" href="#样例-9-5-我是-root-用户吗" aria-hidden="true">#</a> 样例 9-5. 我是 root 用户吗？</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># am-i-root.sh:   我是否是 root 用户？</span>

<span class="token assign-left variable">ROOT_UID</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># Root 用户的 $UID 为 0。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$UID</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token string">&quot;<span class="token variable">$ROOT_UID</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment"># 只有真正的 &quot;root&quot; 用户才能经受得住考研。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;You are root.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;You are just an ordinary user (but mom loves you just the same).&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>


<span class="token comment"># ============================================================= #</span>
<span class="token comment"># 下面的代码将不会被执行，因为脚本已经退出了。</span>

<span class="token comment"># 另外一种判断是否是 root 用户的方法：</span>

<span class="token assign-left variable">ROOTUSER_NAME</span><span class="token operator">=</span>root

<span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">id</span> <span class="token parameter variable">-nu</span><span class="token variable">\`</span></span>              <span class="token comment"># 或是...  username=\`whoami\`</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$username</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">$ROOTUSER_NAME</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Rooty, toot, toot. You are root.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;You are just a regular fella.&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以参考 <a href="">样例2-3</a>。</p><p>{% hint style=&quot;info&quot; %}</p><p>变量 <code>$ENV</code>，<code>$LOGNAME</code>，<code>$MAIL</code>，<code>$TERM</code>，<code>$USER</code> 以及 <code>$USERNAME</code> 并不是 Bash 的 <a href="">内建变量</a>，而是在 <a href=""><code>Bash</code></a> 或系统的某个启动文件中，被设置而成的 <a href="">环境变量</a>。代表当前用户登录 shell 名称的变量 <code>$SHELL</code> 是在文件 <code>/etc/password</code> 或是某个初始化脚本中被设定的，它也不是一个 Bash 的内建变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tcsh% <span class="token builtin class-name">echo</span> <span class="token environment constant">$LOGNAME</span>
bozo
tcsh% <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/bin/tcsh
tcsh% <span class="token builtin class-name">echo</span> <span class="token environment constant">$TERM</span>
rxvt

bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$LOGNAME</span>
bozo
bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/bin/tcsh
bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$TERM</span>
rxvt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{% endhint %}</p><h2 id="位置参数" tabindex="-1"><a class="header-anchor" href="#位置参数" aria-hidden="true">#</a> 位置参数</h2><h3 id="_0-1-2-等" tabindex="-1"><a class="header-anchor" href="#_0-1-2-等" aria-hidden="true">#</a> $0, $1, $2 等</h3><p>位置参数。出现在从命令行传递给脚本、函数或是通过内建命令 <a href=""><code>set</code></a> 设置变量时（参考 <a href="">样例 4-5</a> 或是 <a href="">样例 15-16</a>）。</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $#</h3><p>命令行参数[^4]或是位置参数的个数（参考 <a href="">样例 36-2</a>）。</p><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> $*</h3><p>将所有的位置参数整合，视作一个单词。</p><p>{% hint style=&quot;info&quot; %}</p><p>该参数必须是被引用的状态，<code>&quot;$*&quot;</code>。</p><p>{% endhint %}</p><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> $@</h3><p>该参数等同于 <code>$*</code>，但其中每个参数都是独立的被引用的字符串。也就是说，所有的参数都是被原封不动的进行传递，并没有被解析或是扩展。这意味着，参数列表中的每一个参数都被独立视为一个单词。</p><p>{% hint style=&quot;info&quot; %}</p><p>同样，该参数必须是被引用的状态，<code>&quot;$@&quot;</code>。</p><p>{% endhint %}</p><h4 id="样例-9-6-参数列表-利用-和-列出参数" tabindex="-1"><a class="header-anchor" href="#样例-9-6-参数列表-利用-和-列出参数" aria-hidden="true">#</a> 样例 9-6. 参数列表：利用 $* 和 $@ 列出参数</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># arglist.sh</span>
<span class="token comment"># 在调用该脚本时需要跟上一些参数，例如 &quot;one two three&quot; ...</span>

<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">85</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> argument1 argument2 etc.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">index</span><span class="token operator">=</span><span class="token number">1</span>          <span class="token comment"># 初始化计数器。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing args with <span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span>:&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>  <span class="token comment"># 如果这里没有引用 &quot;$*&quot;，脚本将不会正常运行。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg #<span class="token variable">$index</span> = <span class="token variable">$arg</span>&quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;index+=1&quot;</span>
<span class="token keyword">done</span>             <span class="token comment"># $* 将所有参数视作一个单词。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Entire arg list seen as single word.&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">index</span><span class="token operator">=</span><span class="token number">1</span>          <span class="token comment"># 重置计数器。</span>
                 <span class="token comment"># 如果忘了这一步将会发生什么？</span>
                 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing args with <span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$@</span><span class="token entity" title="\\&quot;">\\&quot;</span>:&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg #<span class="token variable">$index</span> = <span class="token variable">$arg</span>&quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;index+=1&quot;</span>
<span class="token keyword">done</span>             <span class="token comment"># $@ 将所有参数视作独立的单词。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg list seen as separate words.&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">index</span><span class="token operator">=</span><span class="token number">1</span>          <span class="token comment"># 重置计数器。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing args with \\<span class="token variable">$*</span> (unquoted):&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token variable">$*</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg #<span class="token variable">$index</span> = <span class="token variable">$arg</span>&quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;index+=1&quot;</span>
<span class="token keyword">done</span>             <span class="token comment"># 未被引用的 $* 将所有参数视作独立的单词。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg list seen as separate words.&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>shift</code> 命令执行后，<code>$@</code> 将会保留除了 <code>$1</code> 之外的剩余的命令行参数，而 <code>$1</code> 则会被丢弃。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 使用 ./scriptname 1 2 3 4 5 调用脚本</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>    <span class="token comment"># 1 2 3 4 5</span>
<span class="token builtin class-name">shift</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>    <span class="token comment"># 2 3 4 5</span>
<span class="token builtin class-name">shift</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>    <span class="token comment"># 3 4 5</span>

<span class="token comment"># 每一次 &quot;shift&quot; 都会丢弃参数 $1。</span>
<span class="token comment"># &quot;$@&quot; 则包含了剩余的所有参数。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数 <code>$@</code> 也可被用作过滤 shell 脚本输入的工具。结构 <code>cat &quot;$@&quot;</code> 可以接受来自标准输入 <code>stdin</code> 的输入，也可以接受传递给脚本的参数中的文件中的输入。参考 <a href="">样例 16-24</a> 和 <a href="">样例 16-25</a>。</p><p>{% hint style=&quot;warning&quot; %}</p><p>根据分隔符 <a href=""><code>$IFS</code></a> 设置的不同，<code>$*</code> 和 <code>$@</code> 有时会出现不一致或非预期行为。</p><p>{% endhint %}</p><h4 id="样例-9-7-和-的不一致行为" tabindex="-1"><a class="header-anchor" href="#样例-9-7-和-的不一致行为" aria-hidden="true">#</a> 样例 9-7. $* 和 $@ 的不一致行为</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#  Bash 的内部变量 &quot;$*&quot; 和 &quot;$@&quot; 拥有不稳定的行为，</span>
<span class="token comment">#+ 这些行为是否出现通常依赖于它们是否是被引用的状态。</span>
<span class="token comment">#  下面的代码会演示在分词和换行时，这些变量所会出现的一些不一致的处理方式。</span>


<span class="token builtin class-name">set</span> -- <span class="token string">&quot;First one&quot;</span> <span class="token string">&quot;second&quot;</span> <span class="token string">&quot;third:one&quot;</span> <span class="token string">&quot;&quot;</span> <span class="token string">&quot;Fifth: :one&quot;</span>
<span class="token comment"># 设置脚本参数，$1, $2, $3 等等。</span>

<span class="token builtin class-name">echo</span> 

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS unchanged, using &quot;$*&quot;&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>               <span class="token comment"># 被引用状态。</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>   <span class="token comment"># 这一行在下面所有的例子中都保持不变。</span>
                            <span class="token comment"># 输出参数。</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS unchanged, using $*&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$*</span>                 <span class="token comment"># 未被引用状态。</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS unchanged, using &quot;$@&quot;&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS unchanged, using $@&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$*&quot;&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $*&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$*</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token variable">$*</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$var&quot; (var=$*)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $var (var=$*)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$var</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $var (var=&quot;$*&quot;)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$var</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$var&quot; (var=&quot;$*&quot;)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$@&quot;&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $@&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token variable">$@</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $var (var=$@)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$var</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$var&quot; (var=$@)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$var&quot; (var=&quot;$@&quot;)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $var (var=&quot;$@&quot;)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$var</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 尝试在 ksh 或是 zsh -y 下执行这个脚本。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment">#  这个样例是由 Stephane Chazelas 所编写，</span>
<span class="token comment">#+ 由本书作者轻微改动。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{% hint style=&quot;info&quot; %}</p><p><code>$@</code> 和 <code>$*</code> 仅在被双引号引用时才会表现出不同。</p><p>{% endhint %}</p><h4 id="样例-9-8-当-ifs-为空时-和-的表现" tabindex="-1"><a class="header-anchor" href="#样例-9-8-当-ifs-为空时-和-的表现" aria-hidden="true">#</a> 样例 9-8. 当 $IFS 为空时 $* 和 $@ 的表现</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#  如果 $IFS 被设置为空，</span>
<span class="token comment">#+ 那么 &quot;$*&quot; 和 &quot;$@&quot; 将不会像期望的那样输出位置参数。</span>

mecho <span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># 输出位置参数。</span>
<span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span>,<span class="token variable">$2</span>,<span class="token variable">$3</span>&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>         <span class="token comment"># 设置为空。</span>
<span class="token builtin class-name">set</span> a b c      <span class="token comment"># 位置参数。</span>

mecho <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>     <span class="token comment"># abc,,</span>
<span class="token comment">#                   ^^</span>
mecho <span class="token variable">$*</span>       <span class="token comment"># a,b,c</span>

mecho <span class="token variable">$@</span>       <span class="token comment"># a,b,c</span>
mecho <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>     <span class="token comment"># a,b,c</span>

<span class="token comment">#  当 $IFS 为空时 $* 和 $@ 的行为</span>
<span class="token comment">#+ 依赖于 Bash 或是 sh 所运行的版本。</span>
<span class="token comment">#  因此不宜在脚本中使用这个“特性”。</span>


<span class="token comment"># 感谢 Stephane Chazelas。</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他特殊参数" tabindex="-1"><a class="header-anchor" href="#其他特殊参数" aria-hidden="true">#</a> 其他特殊参数</h2><h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> $-</h3><p>使用 <a href=""><code>set</code></a> 命令设置的脚本标记。参考 <a href="">样例 15-16</a>。</p><p>{% hint style=&quot;warning&quot; %}</p><p>这个参数最开始是从 ksh 引入到 Bash中的。但很遗憾的是，该参数在 Bash 脚本中并不能可靠地运行。该参数可能的一个用法是用于 <a href="">自检脚本是否可交互</a>。</p><p>{% endhint %}</p><h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> $!</h3><p>运行在后台的最后一个任务的 <a href="">进程ID</a>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">LOG</span><span class="token operator">=</span><span class="token variable">$0</span>.log

<span class="token assign-left variable">COMMAND1</span><span class="token operator">=</span><span class="token string">&quot;sleep 100&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Logging PIDs background commands for script: <span class="token variable">$0</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$LOG</span>&quot;</span>
<span class="token comment"># 这样就可以监控命令，并在必要的时候终止它们。</span>
<span class="token builtin class-name">echo</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$LOG</span>&quot;</span>

<span class="token comment"># 记录命令。</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;PID of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$COMMAND1</span><span class="token entity" title="\\&quot;">\\&quot;</span>:  &quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$LOG</span>&quot;</span>
<span class="token variable">\${COMMAND1}</span> <span class="token operator">&amp;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$!</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$LOG</span>&quot;</span>
<span class="token comment"># &quot;sleep 100&quot; 的 PID 是 1506</span>

<span class="token comment"># 感谢 Jacques Lederer 提出的该建议。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>$!</code> 用于控制任务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>possibly_hanging_job <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token function">sleep</span> <span class="token variable">\${TIMEOUT}</span><span class="token punctuation">;</span> <span class="token builtin class-name">eval</span> <span class="token string">&#39;kill -9 $!&#39;</span> <span class="token operator">&amp;&gt;</span> /dev/null<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment"># 强制终止一个出错的程序。</span>
<span class="token comment"># 非常有用，例如可以用在启动脚本中。</span>

<span class="token comment"># 感谢 Sylvain Fourmanoit 提出的这个利用变量 &quot;$!&quot; 的创造性用法。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以这么使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 该样例由 Matthew Sage 编写。</span>
<span class="token comment"># 本书经授权后使用。</span>

<span class="token assign-left variable">TIMEOUT</span><span class="token operator">=</span><span class="token number">30</span>   <span class="token comment"># 以秒为单位的超时时间值。</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>

possibly_hanging_job <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span>count <span class="token operator">&lt;</span> TIMEOUT <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
                <span class="token builtin class-name">eval</span> <span class="token string">&#39;[ ! -d &quot;/proc/$!&quot; ] &amp;&amp; ((count = TIMEOUT))&#39;</span>
                <span class="token comment"># 当前运行进程的详细信息都可以在 /proc 中找到。</span>
                <span class="token comment"># &quot;-d&quot; 用于测试进程是否存在（即在 /proc 文件夹下该进程的文件夹是否存在）。</span>
                <span class="token comment"># 我们在等待出问题的任务出现。</span>
                <span class="token variable"><span class="token punctuation">((</span>count<span class="token operator">++</span><span class="token punctuation">))</span></span>
                <span class="token function">sleep</span> <span class="token number">1</span>
        <span class="token keyword">done</span>
        <span class="token builtin class-name">eval</span> <span class="token string">&#39;[ -d &quot;/proc/$!&quot; ] &amp;&amp; kill -15 $!&#39;</span>
        <span class="token comment"># 如果被挂起的任务正在运行就终止它。</span>
<span class="token punctuation">}</span>

<span class="token comment">#  -------------------------------------------------------------- #</span>

<span class="token comment">#  然而，如果另外一个进程在 &quot;hanging_job&quot; 之后开始运行</span>
<span class="token comment">#+ 该函数可能不能正常运行 ...</span>
<span class="token comment">#  在那种情况下，一个非我们预期的任务会被终止。</span>
<span class="token comment">#  Ariel Meragelman 提出了如下的解决方案。</span>

<span class="token assign-left variable">TIMEOUT</span><span class="token operator">=</span><span class="token number">30</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>

possibly_hanging_job <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span>count <span class="token operator">&lt;</span> TIMEOUT <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
            <span class="token builtin class-name">eval</span> <span class="token string">&#39;[ !-d &quot;/proc/$lastjob&quot; ] &amp;&amp; ((count = TIMEOUT))&#39;</span>
            <span class="token assign-left variable">lastjob</span><span class="token operator">=</span><span class="token variable">$!</span>
            <span class="token variable"><span class="token punctuation">((</span>count<span class="token operator">++</span><span class="token punctuation">))</span></span>
            <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">eval</span> <span class="token string">&#39;[ -d &quot;/proc/$lastjob&quot; ] &amp;&amp; kill -15 $lastjob&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-hidden="true">#</a> $_</h3><p>该变量被设置为上一个执行的命令的最后一个参数。</p><h4 id="样例-9-9-下划线变量" tabindex="-1"><a class="header-anchor" href="#样例-9-9-下划线变量" aria-hidden="true">#</a> 样例 9-9. 下划线变量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>              <span class="token comment">#  /bin/bash</span>
                     <span class="token comment">#  仅通过调用 /bin/bash 执行该脚本。</span>
                     <span class="token comment">#  注意这个结果会根据脚本如何被调用</span>
                     <span class="token comment">#+ 而有所不同。</span>

<span class="token function">du</span> <span class="token operator">&gt;</span>/dev/null        <span class="token comment">#  这样命令就不会在命令行上有任何输出。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>              <span class="token comment">#  du</span>

<span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator">&gt;</span>/dev/null    <span class="token comment">#  这样命令就不会在命令行上有任何输出。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>              <span class="token comment">#  -al (最后一个参数)</span>

<span class="token builtin class-name">:</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>              <span class="token comment">#  :</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> $?</h3><p>命令、<a href="">函数</a> 或是脚本自身的 <a href="">退出状态</a>。参考 <a href="">样例 24-7</a>。</p><h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7" aria-hidden="true">#</a> $$</h3><p>脚本自身的进程 ID[^5]。该变量 <code>$$</code> 通常在脚本构建独有的临时文件时被使用（参考 <a href="">样例 32-6</a>，<a href="">样例 16-31</a>，以及 <a href="">样例 15-27</a>）。该方法通常比调用 <a href=""><code>mktemp</code></a> 命令更简单。</p><h2 id="注记" tabindex="-1"><a class="header-anchor" href="#注记" aria-hidden="true">#</a> 注记</h2><p>{% hint style=&quot;info&quot; %} 栈寄存器是一段连续的内存空间，在该空间中，存入（压栈）的值是以倒序的方式取出（出栈）的。最后一个存入的值被最先取出。其通常又被称为后进先出(LIFO)或是下堆栈。 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} 当前运行脚本的进程 ID 就是 <code>$$</code>。 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} 类似于 <a href="">递归</a>。在本文中，嵌套是指代一种模式被嵌入在一种更大的模式中。在 1913 年出版的韦伯斯特大辞典中用一种更加优雅的方式解释了什么是嵌套：“一组按体积大小排列的盒子、箱子或是类似的东西，它们中的每一个都被放入到另一个更大的箱子中。(A collection of boxes, cases, or the like, of graduated size, each put within the one next larger.)”。 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} 术语“变量(argument)”和“参数(parameter)”通常情况下是可以互相交换使用的。在本书中，它们具有相同的含义：传入脚本或函数的变量。 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} 在 subshell 中运行的脚本，<code>$$</code> <a href="">返回脚本的进程 ID</a> 而非 subshell 的。 {% endhint %}</p><p>[^1]: Footnotes placeholder [^2]: Footnotes placeholder [^3]: Footnotes placeholder [^4]: Footnotes placeholder [^5]: Footnotes placeholder</p>`,192);function k(h,g){const l=e("ExternalLinkIcon"),t=e("RouterLink");return o(),p("div",null,[u,n("p",null,[s("具体用法可以参考 "),n("a",v,[s("样例21-1"),i(l)]),s("。")]),m,n("p",null,[s("在"),i(t,{to:"/code/shell/part5/18_2_globbing.html"},{default:d(()=>[s("文件匹配")]),_:1}),s("时所忽略的文件名模式列表。")]),b])}const f=c(r,[["render",k],["__file","09_1_internal_variables.html.vue"]]);export{f as default};
