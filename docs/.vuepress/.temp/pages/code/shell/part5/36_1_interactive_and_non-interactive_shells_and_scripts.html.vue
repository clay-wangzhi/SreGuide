<template><h1 id="_36-1-交互和非交互shell以及脚本" tabindex="-1"><a class="header-anchor" href="#_36-1-交互和非交互shell以及脚本" aria-hidden="true">#</a> 36.1 交互和非交互shell以及脚本</h1>
<p>交互shell从tty读取用户输入。shell默认会读取启动文件，显示提示符和打开任务控制等。用户可以和shell交互。</p>
<p>脚本总是运行在非交互的shell上。同样，脚本可以访问它自己的tty，这使得在脚本中依然可以模拟出交互的shell。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash
MY_PROMPT='$ '
while :
    do
        echo -n "$MY_PROMPT"
        read line
        eval "$line"
    done

exit 0

# 这个脚本以及以上解释是由Stéphane Chazelas提供的
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>一个要求用户输入的交互脚本，通常会用到read语句（请看例15-3）。不过实际上要复杂一些，一个被用户通过console或者xterm调用的脚本，意味着这个脚本被绑定到了一个tty上。</p>
<p>初始化和启动脚本必须是非交互的，因为在运行过程中不能要求人类的介入。许多管理和系统维护脚本也同样是非交互的。要求自动运行的重复性任务也是通过非交互脚本实现的。</p>
<p>非交互的脚本可以在后台运行，而交互脚本（在后台运行）则会挂起，因为要等待永远不可能出现的“输入”。解决这个难题可以使用带有expect命令的脚本，或者将文档嵌入到后台运行的交互脚本中。最简单的例子就是将一个文件重定向到read语句，来提供“输入”。(read variable &lt; file) 这可以创造出一个在交互和非交互两种模式下通用的脚本。</p>
<p>如果脚本需要知道它是否运行在交互模式下，简单的方法就是看提示符变量是否存在，就是$PS1变量。（如果用户通过提示符输入，那么脚本就需要显示提示符，所以脚本中$PS1变量会被设置）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>if [ -z $PS1 ] # 是否有提示符（译注：判断脚本是否运行在交互模式下）
### if [ -v PS1 ]   # Bash 4.2+ ...
then
    # 非交互模式
    ...
else
    # 交互模式
    ...
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>脚本也可以测试$-变量中是否使用了“i”选项来判读是否运行在交互模式下。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>case $- in
    *i*)    # 交互shell
    ;;
    *)      # 非交互shell
    ;;
# (参见 "UNIX F.A.Q.," 1993)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>John Lange描述了另一种替代方法：使用test -t来测试。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 关于终端的测试！

fd=0   # stdin 标准输入

# 使用test -t测试stdin或者stdout是否是一个终端（如果是则证明该脚本运行于交互模式）。
if [ -t "$fd" ]
then
    echo interactive # 译注：交互模式
else
    echo non-interactive # 译注：非交互模式
fi

# 但是John指出：
#     if [ -t 0 ] 仅在你本地登录时有效，
#     如果通过ssh远程调用就会失效，
#     所以还要加上对socket的判断。

if [[ -t "$fd" || -p /dev/stdin ]]
then
    echo interactive # 译注：交互模式
else
    echo non-interactive # 译注：非交互模式
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>笔记</p>
<p>脚本可以使用-i选项或者#!/bin/bash -i的文件头强制进入交互模式执行。这可能导致古怪的脚本行为或者在没有错误的情况下显示错误信息。</p>
</template>
