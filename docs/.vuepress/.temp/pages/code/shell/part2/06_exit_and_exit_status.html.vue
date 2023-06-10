<template><div><h1 id="第六章-退出与退出状态" tabindex="-1"><a class="header-anchor" href="#第六章-退出与退出状态" aria-hidden="true">#</a> 第六章 退出与退出状态</h1>
<blockquote>
<p>Bourne shell里存在不明确之处，但人们也会使用它们。</p>
<p>—— Chat Ramey</p>
</blockquote>
<p>跟C程序类似，<code v-pre>exit</code> 命令被用来结束脚本。同时，它也会返回一个值，返回值可以被交给父进程。</p>
<p>每个命令都会返回一个退出状态（exit status），有时也叫做返回状态（return status）或退出码（exit code）。命令执行成功返回0，如果返回一个非0值，通常情况下会被认为是一个错误代码。一个运行状态良好的UNIX命令、程序和工具在正常执行退出后都会返回一个0的退出码，当然也有例外。</p>
<p>同样地，脚本中的函数和脚本本身也会返回一个退出状态。在脚本或者脚本函数中执行的最后的命令会决定它们的退出状态。在脚本中，<code v-pre>exit nnn</code> 命令将会把nnn退出状态码传递给shell（nnn 必须是 0-255 之间的整型数）。</p>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"> 当一个脚本以不带参数的 <code v-pre>exit</code> 来结束时，脚本的退出状态由脚本最后执行命令决定（<code v-pre>exit</code> 命令之前）。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

COMMAND_1

<span class="token punctuation">..</span>.

COMMAND_LAST

<span class="token comment"># 将以最后的命令来决定退出状态</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>exit</code>，<code v-pre>exit $?</code> 以及省略 <code v-pre>exit</code> 效果等同。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash </span>

COMMAND_1

<span class="token punctuation">..</span>.

COMMAND_LAST

<span class="token comment">#将以最后的命令来决定退出状态</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

COMMAND_1

<span class="token punctuation">..</span>.

COMMAND_LAST

<span class="token comment">#将以最后的命令来决定退出状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>$?</code> 读取上一个执行命令的退出状态。在一个函数返回后，<code v-pre>$?</code> 给出函数最后执行的那条命令的退出状态。这就是Bash函数的&quot;返回值&quot;。<RouterLink to="/code/shell/part2/%E5%9C%A8%E5%87%BD%E6%95%B0%E6%B2%A1%E6%9C%89%E7%94%A8%5Breturn%5D(http:/tldp.org/LDP/abs/html/complexfunct.html#RETURNREF)%E6%9D%A5%E7%BB%93%E6%9D%9F%E8%BF%99%E4%B8%AA%E5%87%BD%E6%95%B0%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E3%80%82">^1</RouterLink></p>
<p>在<a href="http://tldp.org/LDP/abs/html/special-chars.html#PIPEREF" target="_blank" rel="noopener noreferrer">管道<ExternalLinkIcon/></a>执行后，<code v-pre>$?</code> 给出最后执行的那条命令的退出状态。</p>
<p>在脚本终止后，命令行下键入<code v-pre>$?</code>会给出脚本的退出状态，即在脚本中最后一条命令执行后的退出状态。一般情况下，0为成功，1-255为失败。</p>
<p>样例 6-1. 退出与退出状态</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> hello
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>    <span class="token comment"># 返回值为0，因为执行成功。</span>

lskdf      <span class="token comment"># 不认识的命令。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>    <span class="token comment"># 返回非0值，因为失败了。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">113</span>   <span class="token comment"># 将返回113给shell</span>
           <span class="token comment"># 为了验证这些，在脚本结束的地方使用“echo $?”</span>

<span class="token comment">#  按照惯例，'exit 0' 意味着执行成功，</span>
<span class="token comment">#+ 非0意味着错误或者异常情况。</span>
<span class="token comment">#  查看附录章节“退出码的特殊含义”</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>$?</code> 对于测试脚本中的命令的执行结果特别有用（查看样例 16-35和样例 16-20）。</p>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"> 逻辑非操作符 <a href="http://tldp.org/LDP/abs/html/special-chars.html#NOTREF" target="_blank" rel="noopener noreferrer">!<ExternalLinkIcon/></a> 将会反转测试或命令的结果，并且这将会影响退出状态。</p>
</blockquote>
<p>样例 6-2. 否定一个条件使用!</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token boolean">true</span>    <span class="token comment"># true 是 shell 内建命令。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"exit status of <span class="token entity" title="\&quot;">\"</span>true<span class="token entity" title="\&quot;">\"</span> = <span class="token variable">$?</span>"</span>     <span class="token comment"># 0</span>

<span class="token operator">!</span> <span class="token boolean">true</span>
<span class="token builtin class-name">echo</span> <span class="token string">"exit status of <span class="token entity" title="\&quot;">\"</span>! true<span class="token entity" title="\&quot;">\"</span> = <span class="token variable">$?</span>"</span>   <span class="token comment"># 1</span>
<span class="token comment"># 注意在命令之间的 "!" 需要一个空格。</span>
<span class="token comment"># !true 将导致一个"command not found"错误。</span>
<span class="token comment">#</span>
<span class="token comment"># 如果一个命令以'!'开头，那么将调用 Bash 的历史机制，显示这个命令被使用的历史。</span>

<span class="token boolean">true</span>
<span class="token operator">!</span>true
<span class="token comment"># 这次就没有错误了，但是同样也没有反转。</span>
<span class="token comment"># 它不过是重复之前的命令（true）。</span>


<span class="token comment"># ============================================================ #</span>
<span class="token comment"># 在 _pipe_ 前使用 ! 将改变返回的退出状态。</span>
<span class="token function">ls</span> <span class="token operator">|</span> bogus_command      <span class="token comment">#bash: bogus_command: command not found</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                 <span class="token comment">#127</span>
<span class="token operator">></span>
<span class="token operator">!</span> <span class="token function">ls</span> <span class="token operator">|</span> bogus_command    <span class="token comment">#bash: bogus_command:command not found</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                 <span class="token comment">#0</span>
<span class="token comment"># 注意 ! 不会改变管道的执行。</span>
<span class="token comment"># 只改变退出状态。</span>
<span class="token comment">#============================================================  #</span>
<span class="token operator">></span>
<span class="token comment"># 感谢 Stéphane Chazelas 和 Kristopher Newsome。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution"> 某些特定的退出码具有一些特定的<a href="http://tldp.org/LDP/abs/html/exitcodes.html#EXITCODESREF" target="_blank" rel="noopener noreferrer">保留含义<ExternalLinkIcon/></a>，用户不应该在自己的脚本中重新定义它们。</p>
</blockquote>
</div></template>


