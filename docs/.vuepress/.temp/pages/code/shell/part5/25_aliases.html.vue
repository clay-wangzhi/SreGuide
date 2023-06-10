<template><div><h1 id="_25-别名" tabindex="-1"><a class="header-anchor" href="#_25-别名" aria-hidden="true">#</a> 25. 别名</h1>
<p>Bash <code v-pre>别名</code> 本质上不外乎是键盘上的快捷键，缩写呢是避免输入很长的命令串的一种手段.举个例子, 在 <a href="http://tldp.org/LDP/abs/html/sample-bashrc.html" target="_blank" rel="noopener noreferrer">~/.bashrc<ExternalLinkIcon/></a> 文件中包含别名 <code v-pre>lm=&quot;ls -l | more</code>, 而后每个命令行输入的 lm <a href="http://tldp.org/LDP/abs/html/aliases.html#FTN.AEN18669" target="_blank" rel="noopener noreferrer">[1]<ExternalLinkIcon/></a> 将会自动被替换成 <code v-pre>ls -l | more</code>. 这可以节省大量的命令行输入和避免记住复杂的命令和选项. 设定别名 <code v-pre>rm=&quot;rm -i&quot;</code> (交互的删除模式) 防止无意的删除重要文件，也许可以少些悲痛.</p>
<p>脚本中别名作用十分有限. 如果别名可以有一些 C 预处理器的功能会更好, 例如宏扩展, 但不幸的是 bash 别名中没有扩展参数. <a href="http://tldp.org/LDP/abs/html/aliases.html#FTN.AEN18676" target="_blank" rel="noopener noreferrer">[2]<ExternalLinkIcon/></a> 另外, 脚本在 &quot;复合结构&quot; 中并不能扩展自身的别名，例如 <a href="http://tldp.org/LDP/abs/html/tests.html#IFTHEN" target="_blank" rel="noopener noreferrer">if/then<ExternalLinkIcon/></a>, 循环和函数. 另一个限制是，别名不能递归扩展. 基本上是我们无论怎么喜欢用别名都不如函数 <a href="http://tldp.org/LDP/abs/html/functions.html#FUNCTIONREF" target="_blank" rel="noopener noreferrer">function<ExternalLinkIcon/></a> 来的更有效.</p>
<p>样例 25-1. 脚本中的别名</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash
# alias.sh

shopt -s expand_aliases
# 必须设置此选项, 否则脚本不能别名扩展.


# 首先来点好玩的东西.
alias Jesse_James='echo "\"Alias Jesse James\" was a 1959 comedy starring Bob Hope."'
Jesse_James

echo; echo; echo;

alias ll="ls -l"
# 可以任意使用单引号 (') 或双引号 (") 把别名括起来.

echo "Trying aliased \"ll\":"
ll /usr/X11R6/bin/mk*   #* 别名可以运行.

echo

directory=/usr/X11R6/bin/
prefix=mk*  # See if wild card causes problems.
echo "Variables \"directory\" + \"prefix\" = $directory$prefix"
echo

alias lll="ls -l $directory$prefix"

echo "Trying aliased \"lll\":"
lll         # 所有 /usr/X11R6/bin 文件清单以 mk 开始.
# 别名可以处理连续的变量 -- 包含 wild card -- o.k.




TRUE=1

echo

if [ TRUE ]
then
  alias rr="ls -l"
  echo "Trying aliased \"rr\" within if/then statement:"
  rr /usr/X11R6/bin/mk*   #* 结果报错!
  # 别名在复合的表达式中并没有生效.
  echo "However, previously expanded alias still recognized:"
  ll /usr/X11R6/bin/mk*
fi  

echo

count=0
while [ $count -lt 3 ]
do
  alias rrr="ls -l"
  echo "Trying aliased \"rrr\" within \"while\" loop:"
  rrr /usr/X11R6/bin/mk*   #* 这里的别名也没生效.
                           #  alias.sh: 行 57: rrr: 命令未找到
  let count+=1
done 

echo; echo

alias xyz='cat $0'   # 列出了自身.
                     # 注意强引.
xyz
#  这看起来能工作,
#+ 尽管 bash 文档不介意这么做.
#
#  然而, Steve Jacobson 指出,
#+ "$0" 参数的扩展在上面的别名申明后立刻生效.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消别名的命令删除之前设置的别名.</p>
<p>样例 25-2. unalias: 设置和取消一个别名</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash
# unalias.sh

shopt -s expand_aliases  # 开启别名扩展.

alias llm='ls -al | more'
llm

echo

unalias llm              # 取消别名.
llm
# 'llm' 不再被识别后的报错信息.

exit 0
bash$ ./unalias.sh
total 6
drwxrwxr-x    2 bozo     bozo         3072 Feb  6 14:04 .
drwxr-xr-x   40 bozo     bozo         2048 Feb  6 14:04 ..
-rwxr-xr-x    1 bozo     bozo          199 Feb  6 14:04 unalias.sh

./unalias.sh: llm: 命令未找到
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4>
<p><a href="http://tldp.org/LDP/abs/html/aliases.html#AEN18669" target="_blank" rel="noopener noreferrer">[1]<ExternalLinkIcon/></a>	... 作为命令行的第一个词. 显然别名只在命令的开始有意义.
<a href="http://tldp.org/LDP/abs/html/aliases.html#AEN18676" target="_blank" rel="noopener noreferrer">[2]<ExternalLinkIcon/></a>	然而, 别名可用来扩展位置参数.</p>
</div></template>


