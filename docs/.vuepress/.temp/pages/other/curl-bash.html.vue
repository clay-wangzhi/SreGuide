<template><div><h1 id="curl方式执行shell脚本时如何传参" tabindex="-1"><a class="header-anchor" href="#curl方式执行shell脚本时如何传参" aria-hidden="true">#</a> curl方式执行shell脚本时如何传参</h1>
<p>有时候shell脚本可以放在http页面上，不用download，可以直接执行。</p>
<p>通常我们可以用curl的方式执行http页面上的shell脚本。 一般方式是：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>curl ftp://192.168.166.21:/system_optimize.sh | bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样脚本就可以在本地机器上执行了。</p>
<p>但是需要传入参数的脚本。我们可以用下面的方式传入shell参数</p>
<ul>
<li>-s方式</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>curl -s ftp://192.168.166.21:/system_optimize.sh | bash -s arg1 arg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>&lt; 方式</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>bash &lt;(curl -s ftp://192.168.166.21:/system_optimize.sh) arg1 arg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注意 &lt;( 之间不要有空格！！！</p>
</blockquote>
<ul>
<li>若参数中带有<code v-pre>-</code>，则可使用长选项<code v-pre>--</code>解决</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>curl -s ftp://192.168.166.21:/system_optimize.sh | bash -s -- arg1 arg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>若参数为”-p arg -d arg”,则可使用以下命令执行</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>curl -s ftp://192.168.166.21:/system_optimize.sh | bash -s -- -p arg1 -d arg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>不止是curl的输入，其他方式的输入也满足。可以通过以下例子深入理解下</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>echo 'i=1; for a in $@; do echo "$i = $a"; i=$((i+1)); done' | bash -s -- -a1 -a2 -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="bash选项" tabindex="-1"><a class="header-anchor" href="#bash选项" aria-hidden="true">#</a> Bash选项</h2>
<p>Bash选项</p>
<table>
<thead>
<tr>
<th>缩写</th>
<th>名称</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>-B</td>
<td>brace expansion</td>
<td>开启<a href="">大括号展开</a>(默认 setting = on)</td>
</tr>
<tr>
<td>+B</td>
<td>brace expansion</td>
<td>关闭大括号展开</td>
</tr>
<tr>
<td>-C</td>
<td>noclobber</td>
<td>防止重定向时覆盖文件(可能会被&gt;|覆盖)</td>
</tr>
<tr>
<td>-D</td>
<td>(none)</td>
<td>列出用双引号引用起来的, 以$为前缀的字符串, 但是不执行脚本中的命令</td>
</tr>
<tr>
<td>-a</td>
<td>all export</td>
<td>export(导出)所有定义过的变量</td>
</tr>
<tr>
<td>-b</td>
<td>notify</td>
<td>当后台运行的作业终止时, 给出通知(脚本中并不常见)</td>
</tr>
<tr>
<td>-c ...</td>
<td>(none)</td>
<td>从...中读取命令</td>
</tr>
<tr>
<td>checkjobs</td>
<td>(none)</td>
<td>通知有活跃shell<a href="http://tldp.org/LDP/abs/html/x9644.html#JOBSREF" target="_blank" rel="noopener noreferrer">任务<ExternalLinkIcon/></a>的用户退出。<a href="http://tldp.org/LDP/abs/html/bashver4.html#BASH4REF" target="_blank" rel="noopener noreferrer">Bash 4<ExternalLinkIcon/></a>版本中引入，仍然处于&quot;实验&quot;阶段. 用法:shopt -s checkjobs .(注意：可能会hang！</td>
</tr>
<tr>
<td>-e</td>
<td>errexit</td>
<td>当脚本发生第一个错误时, 就退出脚本, 换种说法就是, 当一个命令返回非零值时, 就退出脚本(除了<a href="http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF" target="_blank" rel="noopener noreferrer">until<ExternalLinkIcon/></a>或<a href="http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF" target="_blank" rel="noopener noreferrer">while loops<ExternalLinkIcon/></a>, <a href="http://tldp.org/LDP/abs/html/testconstructs.html#TESTCONSTRUCTS1" target="_blank" rel="noopener noreferrer">if-tests<ExternalLinkIcon/></a>, <a href="http://tldp.org/LDP/abs/html/list-cons.html#LCONS1" target="_blank" rel="noopener noreferrer">list constructs<ExternalLinkIcon/></a>)</td>
</tr>
<tr>
<td>-f</td>
<td>noglob</td>
<td>禁用文件名扩展(就是禁用globbing)</td>
</tr>
<tr>
<td>globstar</td>
<td><a href="http://tldp.org/LDP/abs/html/bashver4.html#GLOBSTARREF" target="_blank" rel="noopener noreferrer">globbing star-match<ExternalLinkIcon/></a></td>
<td>打开<a href="http://tldp.org/LDP/abs/html/globbingref.html" target="_blank" rel="noopener noreferrer">globbling<ExternalLinkIcon/></a>操作符(Bash <a href="http://tldp.org/LDP/abs/html/bashver4.html#BASH4REF" target="_blank" rel="noopener noreferrer">4+<ExternalLinkIcon/></a>). 使用方法：shopt -s globstar</td>
</tr>
<tr>
<td>-i</td>
<td>interactive</td>
<td>让脚本以交互模式运行</td>
</tr>
<tr>
<td>-n</td>
<td>noexec</td>
<td>从脚本中读取命令, 但是不执行它们(做语法检查)</td>
</tr>
<tr>
<td>-o Option-Name</td>
<td>(none)</td>
<td>调用Option-Name选项</td>
</tr>
<tr>
<td>-o posix</td>
<td>POSIX</td>
<td>修改Bash或被调用脚本的行为, 使其符合<a href="http://tldp.org/LDP/abs/html/sha-bang.html#POSIX2REF" target="_blank" rel="noopener noreferrer">POSIX<ExternalLinkIcon/></a>标准.</td>
</tr>
<tr>
<td>-o pipefail</td>
<td>pipe failure</td>
<td>创建一个管道去返回最后一条命令的<a href="http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF" target="_blank" rel="noopener noreferrer">退出状态码<ExternalLinkIcon/></a>，这个返回值是一个非0的返回值</td>
</tr>
<tr>
<td>-p</td>
<td>privileged</td>
<td>以&quot;suid&quot;身份来运行脚本(小心!)</td>
</tr>
<tr>
<td>-r</td>
<td>restricted</td>
<td>以受限模式来运行脚本(参考 <a href="http://tldp.org/LDP/abs/html/restricted-sh.html" target="_blank" rel="noopener noreferrer">22<ExternalLinkIcon/></a>).</td>
</tr>
<tr>
<td>-s</td>
<td>stdin</td>
<td>从stdin 中读取命令</td>
</tr>
<tr>
<td>-t</td>
<td>(none)</td>
<td>执行完第一个命令之后, 就退出</td>
</tr>
<tr>
<td>-u</td>
<td>nounset</td>
<td>如果尝试使用了未定义的变量, 就会输出一个错误消息, 然后强制退出</td>
</tr>
<tr>
<td>-v</td>
<td>verbose</td>
<td>在执行每个命令之前, 把每个命令打印到stdout上</td>
</tr>
<tr>
<td>-x</td>
<td>xtrace</td>
<td>与-v选项类似, 但是会打印完整命令</td>
</tr>
<tr>
<td>-</td>
<td>(none)</td>
<td>选项结束标志. 后面的参数为<a href="http://tldp.org/LDP/abs/html/internalvariables.html#POSPARAMREF" target="_blank" rel="noopener noreferrer">位置参数<ExternalLinkIcon/></a>.</td>
</tr>
<tr>
<td>--</td>
<td>(none)</td>
<td>unset(释放)位置参数. 如果指定了参数列表(-- arg1 arg2), 那么位置 参数将会依次设置到参数列表中.</td>
</tr>
</tbody>
</table>
<p>重点是后面的&quot;-&quot;和&quot;--&quot;，理解一下</p>
</div></template>


