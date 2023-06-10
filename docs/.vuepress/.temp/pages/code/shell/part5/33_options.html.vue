<template><div><h1 id="_33-选项" tabindex="-1"><a class="header-anchor" href="#_33-选项" aria-hidden="true">#</a> 33 选项</h1>
<p>选项用来更改shell和脚本的行为.</p>
<p><a href="http://tldp.org/LDP/abs/html/internal.html#SETREF" target="_blank" rel="noopener noreferrer">set<ExternalLinkIcon/></a>命令用来打开脚本中的选项. 你可以在脚本中任何你想让选项生效的地方插入<strong>set -o option-name</strong>, 或者使用更简单的形式, <strong>set -option-abbrev</strong>. 这两种形式是等价的.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash

set -o verbose
# # 打印出所有执行前的命令.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash

set -v
# 与上边的例子具有相同的效果.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 如果你想在脚本中禁用某个选项, 可以使用<strong>set +o option-name</strong>或<strong>set +option-abbrev</strong>.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash
set -o verbose
# 激活命令回显.
command
...
command

set +o verbose
# 禁用命令回显.
command
# 没有命令回显了.

set -v
# 激活命令回显.
command
...
command

set +v
# 禁用命令回显.
command

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有另一种可以在脚本中启用选项的方法, 那就是在脚本头部, #!的后边直接指定选项.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash -x
#
# 下边是脚本的主要内容.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以从命令行中打开脚本的选项. 某些不能与<strong>set</strong>命令一起用的选项就可以使用这种方法来打开. - i就是其中之一, 这个选项用来强制脚本以交互的方式运行.</p>
<p><strong>bash - v script - name</strong></p>
<p><strong>bash - o verbose script - name</strong></p>
<p>下表列出了一些有用的选项. 它们都可以使用缩写的形式来指定(开头加一个破折号), 也可以使用完整名字来指定(开头加上双破折号, 或者使用-o选项来指定).</p>
<h2 id="bash-选项表" tabindex="-1"><a class="header-anchor" href="#bash-选项表" aria-hidden="true">#</a> Bash 选项表</h2>
<table>
<thead>
<tr>
<th style="text-align:left">缩写</th>
<th style="text-align:left">名称</th>
<th style="text-align:left">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">-B</td>
<td style="text-align:left">brace expansion</td>
<td style="text-align:left">开启<a href="">大括号展开</a>(默认 setting = on)</td>
</tr>
<tr>
<td style="text-align:left">+B</td>
<td style="text-align:left">brace expansion</td>
<td style="text-align:left">关闭大括号展开</td>
</tr>
<tr>
<td style="text-align:left">-C</td>
<td style="text-align:left">noclobber</td>
<td style="text-align:left">防止重定向时覆盖文件(可能会被&gt;|覆盖)</td>
</tr>
<tr>
<td style="text-align:left">-D</td>
<td style="text-align:left">(none)</td>
<td style="text-align:left">列出用双引号引用起来的, 以$为前缀的字符串, 但是不执行脚本中的命令</td>
</tr>
<tr>
<td style="text-align:left">-a</td>
<td style="text-align:left">all export</td>
<td style="text-align:left">export(导出)所有定义过的变量</td>
</tr>
<tr>
<td style="text-align:left">-b</td>
<td style="text-align:left">notify</td>
<td style="text-align:left">当后台运行的作业终止时, 给出通知(脚本中并不常见)</td>
</tr>
<tr>
<td style="text-align:left">-c ...</td>
<td style="text-align:left">(none)</td>
<td style="text-align:left">从...中读取命令</td>
</tr>
<tr>
<td style="text-align:left">checkjobs</td>
<td style="text-align:left">(none)</td>
<td style="text-align:left">通知有活跃shell<a href="http://tldp.org/LDP/abs/html/x9644.html#JOBSREF" target="_blank" rel="noopener noreferrer">任务<ExternalLinkIcon/></a>的用户退出。<a href="http://tldp.org/LDP/abs/html/bashver4.html#BASH4REF" target="_blank" rel="noopener noreferrer">Bash 4<ExternalLinkIcon/></a>版本中引入，仍然处于&quot;实验&quot;阶段. 用法:shopt -s checkjobs .(注意：可能会hang！</td>
</tr>
<tr>
<td style="text-align:left">-e</td>
<td style="text-align:left">errexit</td>
<td style="text-align:left">当脚本发生第一个错误时, 就退出脚本, 换种说法就是, 当一个命令返回非零值时, 就退出脚本(除了<a href="http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF" target="_blank" rel="noopener noreferrer">until<ExternalLinkIcon/></a>或<a href="http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF" target="_blank" rel="noopener noreferrer">while loops<ExternalLinkIcon/></a>, <a href="http://tldp.org/LDP/abs/html/testconstructs.html#TESTCONSTRUCTS1" target="_blank" rel="noopener noreferrer">if-tests<ExternalLinkIcon/></a>, <a href="http://tldp.org/LDP/abs/html/list-cons.html#LCONS1" target="_blank" rel="noopener noreferrer">list constructs<ExternalLinkIcon/></a>)</td>
</tr>
<tr>
<td style="text-align:left">-f</td>
<td style="text-align:left">noglob</td>
<td style="text-align:left">禁用文件名扩展(就是禁用globbing)</td>
</tr>
<tr>
<td style="text-align:left">globstar</td>
<td style="text-align:left"><a href="http://tldp.org/LDP/abs/html/bashver4.html#GLOBSTARREF" target="_blank" rel="noopener noreferrer">globbing star-match<ExternalLinkIcon/></a></td>
<td style="text-align:left">打开<a href="http://tldp.org/LDP/abs/html/globbingref.html" target="_blank" rel="noopener noreferrer">globbling<ExternalLinkIcon/></a>操作符(Bash <a href="http://tldp.org/LDP/abs/html/bashver4.html#BASH4REF" target="_blank" rel="noopener noreferrer">4+<ExternalLinkIcon/></a>). 使用方法：shopt -s globstar</td>
</tr>
<tr>
<td style="text-align:left">-i</td>
<td style="text-align:left">interactive</td>
<td style="text-align:left">让脚本以交互模式运行</td>
</tr>
<tr>
<td style="text-align:left">-n</td>
<td style="text-align:left">noexec</td>
<td style="text-align:left">从脚本中读取命令, 但是不执行它们(做语法检查)</td>
</tr>
<tr>
<td style="text-align:left">-o Option-Name</td>
<td style="text-align:left">(none)</td>
<td style="text-align:left">调用Option-Name选项</td>
</tr>
<tr>
<td style="text-align:left">-o posix</td>
<td style="text-align:left">POSIX</td>
<td style="text-align:left">修改Bash或被调用脚本的行为, 使其符合<a href="http://tldp.org/LDP/abs/html/sha-bang.html#POSIX2REF" target="_blank" rel="noopener noreferrer">POSIX<ExternalLinkIcon/></a>标准.</td>
</tr>
<tr>
<td style="text-align:left">-o pipefail</td>
<td style="text-align:left">pipe failure</td>
<td style="text-align:left">创建一个管道去返回最后一条命令的<a href="http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF" target="_blank" rel="noopener noreferrer">退出状态码<ExternalLinkIcon/></a>，这个返回值是一个非0的返回值</td>
</tr>
<tr>
<td style="text-align:left">-p</td>
<td style="text-align:left">privileged</td>
<td style="text-align:left">以&quot;suid&quot;身份来运行脚本(小心!)</td>
</tr>
<tr>
<td style="text-align:left">-r</td>
<td style="text-align:left">restricted</td>
<td style="text-align:left">以受限模式来运行脚本(参考 <a href="http://tldp.org/LDP/abs/html/restricted-sh.html" target="_blank" rel="noopener noreferrer">22<ExternalLinkIcon/></a>).</td>
</tr>
<tr>
<td style="text-align:left">-s</td>
<td style="text-align:left">stdin</td>
<td style="text-align:left">从stdin 中读取命令</td>
</tr>
<tr>
<td style="text-align:left">-t</td>
<td style="text-align:left">(none)</td>
<td style="text-align:left">执行完第一个命令之后, 就退出</td>
</tr>
<tr>
<td style="text-align:left">-u</td>
<td style="text-align:left">nounset</td>
<td style="text-align:left">如果尝试使用了未定义的变量, 就会输出一个错误消息, 然后强制退出</td>
</tr>
<tr>
<td style="text-align:left">-v</td>
<td style="text-align:left">verbose</td>
<td style="text-align:left">在执行每个命令之前, 把每个命令打印到stdout上</td>
</tr>
<tr>
<td style="text-align:left">-x</td>
<td style="text-align:left">xtrace</td>
<td style="text-align:left">与-v选项类似, 但是会打印完整命令</td>
</tr>
<tr>
<td style="text-align:left">-</td>
<td style="text-align:left">(none)</td>
<td style="text-align:left">选项结束标志. 后面的参数为<a href="http://tldp.org/LDP/abs/html/internalvariables.html#POSPARAMREF" target="_blank" rel="noopener noreferrer">位置参数<ExternalLinkIcon/></a>.</td>
</tr>
<tr>
<td style="text-align:left">--</td>
<td style="text-align:left">(none)</td>
<td style="text-align:left">unset(释放)位置参数. 如果指定了参数列表(-- arg1 arg2), 那么位置 参数将会依次设置到参数列表中.</td>
</tr>
</tbody>
</table>
</div></template>


