<template><div><h1 id="第二章-和sha-bang-一起出发" tabindex="-1"><a class="header-anchor" href="#第二章-和sha-bang-一起出发" aria-hidden="true">#</a> 第二章 和Sha-Bang（#!）一起出发</h1>
<blockquote>
<p>Shell编程声名显赫</p>
<p>—— Larry Wall</p>
</blockquote>
<h3 id="本章目录" tabindex="-1"><a class="header-anchor" href="#本章目录" aria-hidden="true">#</a> 本章目录</h3>
<ul>
<li><RouterLink to="/code/shell/part1/02_1_invoking_the_script.html">2.1 调用一个脚本</RouterLink></li>
<li><RouterLink to="/code/shell/part1/02_2_preliminary_exercises.html">2.2 牛刀小试</RouterLink></li>
</ul>
<hr>
<p>一个最简单的脚本其实就是将一连串系统命令存储在一个文件中。最起码，它能帮你省下重复输入这一连串命令的功夫。</p>
<p>样例 2-1. <em>cleanup</em>：清理<code v-pre>/var/log</code>目录下的日志文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Cleanup</span>
<span class="token comment"># 请使用root权限执行</span>

<span class="token builtin class-name">cd</span> /var/log
<span class="token function">cat</span> /dev/null <span class="token operator">></span> messages
<span class="token function">cat</span> /dev/null <span class="token operator">></span> wtmp
<span class="token builtin class-name">echo</span> <span class="token string">"Log files cleaned up."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这支脚本仅仅是一些可以很容易从终端或控制台输入的命令的集合罢了，没什么特殊的地方。将命令放在脚本中的好处是，你不用再一遍遍重复输入这些命令啦。脚本成了一支<em>程序</em>、一款<em>工具</em>，它可以很容易的被修改或为特殊需求定制。</p>
<p>样例 2-2. <em>cleanup</em>：改进的清理脚本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Bash脚本标准起始行。</span>

<span class="token comment"># Cleanup, version 2</span>

<span class="token comment"># 请使用root权限执行。</span>
<span class="token comment"># 这里可以插入代码来打印错误信息，并在未使用root权限时退出。</span>

<span class="token assign-left variable">LOG_DIR</span><span class="token operator">=</span>/var/log
<span class="token comment"># 使用变量比硬编码（hard-coded）更合适</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$LOG_DIR</span>

<span class="token function">cat</span> /dev/null <span class="token operator">></span> messages
<span class="token function">cat</span> /dev/null <span class="token operator">></span> wtmp


<span class="token builtin class-name">echo</span> <span class="token string">"Logs cleaned up."</span>

<span class="token builtin class-name">exit</span> <span class="token comment"># 正确终止脚本的方式。</span>
     <span class="token comment"># 不带参数的exit返回上一条指令的运行结果。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们看到了一个真正意义上的脚本! 让我们继续前进...</p>
<p>样例 2-3. <em>cleanup</em>：改良、通用版</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Cleanup, version 3</span>

<span class="token comment"># 注意：</span>
<span class="token comment"># --------</span>
<span class="token comment"># 此脚本涉及到许多后边才会解释的特性。</span>
<span class="token comment"># 当你阅读完整本书的一半以后，理解它们就没有任何困难了。</span>


<span class="token assign-left variable">LOG_DIR</span><span class="token operator">=</span>/var/log
<span class="token assign-left variable">ROOT_UID</span><span class="token operator">=</span><span class="token number">0</span>     <span class="token comment"># UID为0的用户才拥有root权限。</span>
<span class="token assign-left variable"><span class="token environment constant">LINES</span></span><span class="token operator">=</span><span class="token number">50</span>       <span class="token comment"># 默认保存messages日志文件行数。</span>
<span class="token assign-left variable">E_XCD</span><span class="token operator">=</span><span class="token number">86</span>       <span class="token comment"># 无法切换工作目录的错误码。</span>
<span class="token assign-left variable">E_NOTROOT</span><span class="token operator">=</span><span class="token number">87</span>   <span class="token comment"># 非root权限用户执行的错误码。</span>



<span class="token comment"># 请使用root权限运行。</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token environment constant">$UID</span>"</span> <span class="token parameter variable">-ne</span> <span class="token string">"<span class="token variable">$ROOT_UID</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Must be root to run this script."</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOTROOT</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token punctuation">]</span>
<span class="token comment"># 测试命令行参数（保存行数）是否为空</span>
<span class="token keyword">then</span>
  <span class="token assign-left variable">lines</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">else</span>
  <span class="token assign-left variable">lines</span><span class="token operator">=</span><span class="token environment constant">$LINES</span> <span class="token comment"># 如果为空则使用默认设置</span>
<span class="token keyword">fi</span>


<span class="token comment">#  Stephane Chazelas 建议使用如下方法检查命令行参数，</span>
<span class="token comment">#  但是这已经超出了此阶段教程的范围。</span>
<span class="token comment">#</span>
<span class="token comment">#    E_WRONGARGS=85  # Non-numerical argument (bad argument format).</span>
<span class="token comment">#    case "$1" in</span>
<span class="token comment">#    ""      ) lines=50;;</span>
<span class="token comment">#    *[!0-9]*) echo "Usage: `basename $0` lines-to-cleanup";</span>
<span class="token comment">#     exit $E_WRONGARGS;;</span>
<span class="token comment">#    *       ) lines=$1;;</span>
<span class="token comment">#    esac</span>
<span class="token comment">#</span>
<span class="token comment">#* 在第十一章“循环与分支”中会对此作详细的阐述。</span>


<span class="token builtin class-name">cd</span> <span class="token variable">$LOG_DIR</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">pwd</span><span class="token variable">`</span></span> <span class="token operator">!=</span> <span class="token string">"<span class="token variable">$LOG_DIR</span>"</span> <span class="token punctuation">]</span>  <span class="token comment"># 也可以这样写 if [ "$PWD" != "$LOG_DIR" ]</span>
                            <span class="token comment"># 检查工作目录是否为 /var/log ?</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Can't change to <span class="token variable">$LOG_DIR</span>"</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_XCD</span>
<span class="token keyword">fi</span>  <span class="token comment"># 在清理日志前，二次确认是否在正确的工作目录下。</span>

<span class="token comment"># 更高效的写法：</span>
<span class="token comment">#</span>
<span class="token comment"># cd /var/log || {</span>
<span class="token comment">#   echo "Cannot change to necessary directory." >&amp;2</span>
<span class="token comment">#   exit $E_XCD;</span>
<span class="token comment"># }</span>


<span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token variable">$lines</span> messages <span class="token operator">></span> mesg.temp <span class="token comment"># 保存messages日志文件最后一部分</span>
<span class="token function">mv</span> mesg.temp messages              <span class="token comment"># 替换系统日志文件以达到清理目的</span>

<span class="token comment">#  cat /dev/null > messages</span>
<span class="token comment">#* 我们不需要使用这个方法了，上面的方法更安全</span>

<span class="token function">cat</span> /dev/null <span class="token operator">></span> wtmp  <span class="token comment">#  ': > wtmp' 与 '> wtmp' 有同样的效果</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Log files cleaned up."</span>
<span class="token comment">#  注意在/var/log目录下的其他日志文件不会被这个脚本清除</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token comment">#  返回0表示脚本运行成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也许你并不希望清空全部的系统日志，这个脚本保留了messages日志的最后一部分。随着学习的深入，你将明白更多提高脚本运行效率的方法。</p>
<hr>
<p>脚本起始行<em>sha-bang</em>（#!）<a href="%E5%9C%A8%E6%96%87%E7%8C%AE%E4%B8%AD%E6%9B%B4%E5%B8%B8%E8%A7%81%E7%9A%84%E5%BD%A2%E5%BC%8F%E6%98%AFshe-bang%E6%88%96%E8%80%85sh-bang%E3%80%82%E5%AE%83%E4%BB%AC%E9%83%BD%E6%9D%A5%E6%BA%90%E4%BA%8E%E8%AF%8D%E6%B1%87sharp(#)%E5%92%8Cbang(!)%E7%9A%84%E8%BF%9E%E6%8E%A5%E3%80%82">^1</a>告诉系统这个脚本文件需要使用指定的命令解释器来执行。#!实际上是一个占两字节[^2]的<em>幻数</em>（magic number）,幻数可以用来标识特殊的文件类型，在这里则是标记可执行shell脚本（你可以在终端中输入<code v-pre>man magic</code>了解更多信息）。紧随#!的是一个路径名。此路径指向用来解释此脚本的程序，它可以是shell，可以是程序设计语言，也可以是实用程序。这个解释器从头（#!的下一行）开始执行整个脚本的命令，同时忽略注释。[^3]</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/sh
#!/bin/bash
#!/usr/bin/perl
#!/usr/bin/tcl
#!/bin/sed -f
#!/bin/awk -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面每一条脚本起始行都调用了不同的解释器，比如<code v-pre>/bin/sh</code>调用了系统默认shell（Linux系统中默认是bash）[^4]。大部分UNIX商业发行版中默认的是Bourne shell，即<code v-pre>#!/bin/sh</code>。你可以以牺牲Bash特性为代价，在非Linux的机器上运行sh脚本。当然，脚本得遵循POSIX[^5] sh标准。</p>
<p>需要注意的是<code v-pre>#!</code>后的路径必须正确，否则当你运行脚本时只会得到一条错误信息，通常是&quot;Command not found.&quot;[^6]</p>
<p>当脚本仅包含一些通用的系统命令而不使用shell内部指令时，可以省略<code v-pre>#!</code>。第三个例子需要<code v-pre>#!</code>是因为当对变量赋值时，例如<code v-pre>lines=50</code>，使用了与shell特性相关的结构[^7]。再重复一次，<code v-pre>#!/bin/sh</code>调用的是系统默认shell解释器，在Linux系统中默认为<code v-pre>/bin/bash</code>。</p>
<p>这个例子鼓励读者使用模块化的方式编写脚本，并在平时记录和收集一些在以后可能会用到的代码模板。最终你将拥有一个相当丰富易用的代码库。以下的代码可以用来测试脚本被调用时的参数数量是否正确。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">E_WRONG_ARGS</span><span class="token operator">=</span><span class="token number">85</span>
<span class="token assign-left variable">script_parameters</span><span class="token operator">=</span><span class="token string">"-a -h -m -z"</span>
                 <span class="token comment"># -a = all, -h = help 等等</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token variable">$Number_of_expected_args</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Usage: <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span> <span class="token variable">$script_parameters</span>"</span>
  <span class="token comment"># `basename $0` 是脚本的文件名</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_WRONG_ARGS</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大多数情况下，你会针对特定的任务编写脚本。本章的第一个脚本就是这样。然后你也许会泛化（generalize）脚本使其能够适应更多相似的任务，比如用变量代替硬编码，用函数代替重复代码。</p>
<p>[^2]: 一些UNIX的衍生版（基于4.2 BSD）声称他们使用四字节的幻数，在#!后增加一个空格，即<code v-pre>#! /bin/sh</code>。而<a href="http://www.in-ulm.de/~mascheck/various/shebang/#details" target="_blank" rel="noopener noreferrer">Sven Mascheck<ExternalLinkIcon/></a>指出这是虚构的。
[^3]: <p>命令解释器首先将会解释#!这一行，而因为#!以#打头，因此解释器将其视作注释。起始行作为调用解释器的作用已经完成了。</p><p>事实上即使脚本中含有不止一个#!,bash也会将除第一个<code v-pre>#!</code>以外的解释为注释。</p><pre>#!/bin/bash<br/><br/>echo &quot;Part 1 of script.&quot;<br/>a=1<br/><br/>#!/bin/bash<br/># 这并不会启动新的脚本<br/><br/>echo &quot;Part 2 of script.&quot;<br/>echo $a  # $a的值仍旧为1</pre>
[^4]: <p>这里允许使用一些技巧。</p><pre>#!/bin/rm<br/># 自我删除的脚本<br/><br/># 当你运行这个脚本，除了这个脚本本身消失以外并不会发生什么。<br/><br/>WHATEVER=85<br/><br/>echo &quot;This line will never print (betcha!).&quot;<br/><br/>exit $WHATEVER  # 这没有任何关系。脚本将不会从这里退出。<br/>                # 尝试在脚本终止后打印echo $a。<br/>                # 得到的值将会是0而不是85.</pre>当然你也可以建立一个起始行是<code v-pre>#!/bin/more</code>的README文件，并且使它可以执行。结果就是这个文件成为了一个可以打印本身的文件。（查看样例 19-3，使用<code v-pre>cat</code>命令的here document也许是一个更好的选择）
[^5]: 可移植操作系统接口（POSIX）尝试标准化类UNIX操作系统。POSIX规范可以在<a href="http://www.opengroup.org/onlinepubs/007904975/toc.htm" target="_blank" rel="noopener noreferrer">Open Group site<ExternalLinkIcon/></a>中查看。
[^6]: 为了避免这种情况的发生，可以使用<code v-pre>#!/bin/env bash</code>作为起始行。这在bash不在<code v-pre>/bin</code>的UNIX系统中会有效果。
[^7]: 如果bash是系统默认shell，那么脚本并不一定需要#!作为起始行。但是当你在其他的shell中运行脚本，例如tcsh，则需要使用#!。</p>
</div></template>


