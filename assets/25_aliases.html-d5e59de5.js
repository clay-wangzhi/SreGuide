import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as r,b as n,d as e,e as l,a as v}from"./app-679550bc.js";const t={},o=n("h1",{id:"_25-别名",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_25-别名","aria-hidden":"true"},"#"),e(" 25. 别名")],-1),c=n("code",null,"别名",-1),u={href:"http://tldp.org/LDP/abs/html/sample-bashrc.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,'lm="ls -l | more',-1),b={href:"http://tldp.org/LDP/abs/html/aliases.html#FTN.AEN18669",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"ls -l | more",-1),_=n("code",null,'rm="rm -i"',-1),p={href:"http://tldp.org/LDP/abs/html/aliases.html#FTN.AEN18676",target:"_blank",rel:"noopener noreferrer"},q={href:"http://tldp.org/LDP/abs/html/tests.html#IFTHEN",target:"_blank",rel:"noopener noreferrer"},x={href:"http://tldp.org/LDP/abs/html/functions.html#FUNCTIONREF",target:"_blank",rel:"noopener noreferrer"},f=v(`<p>样例 25-1. 脚本中的别名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# alias.sh

shopt -s expand_aliases
# 必须设置此选项, 否则脚本不能别名扩展.


# 首先来点好玩的东西.
alias Jesse_James=&#39;echo &quot;\\&quot;Alias Jesse James\\&quot; was a 1959 comedy starring Bob Hope.&quot;&#39;
Jesse_James

echo; echo; echo;

alias ll=&quot;ls -l&quot;
# 可以任意使用单引号 (&#39;) 或双引号 (&quot;) 把别名括起来.

echo &quot;Trying aliased \\&quot;ll\\&quot;:&quot;
ll /usr/X11R6/bin/mk*   #* 别名可以运行.

echo

directory=/usr/X11R6/bin/
prefix=mk*  # See if wild card causes problems.
echo &quot;Variables \\&quot;directory\\&quot; + \\&quot;prefix\\&quot; = $directory$prefix&quot;
echo

alias lll=&quot;ls -l $directory$prefix&quot;

echo &quot;Trying aliased \\&quot;lll\\&quot;:&quot;
lll         # 所有 /usr/X11R6/bin 文件清单以 mk 开始.
# 别名可以处理连续的变量 -- 包含 wild card -- o.k.




TRUE=1

echo

if [ TRUE ]
then
  alias rr=&quot;ls -l&quot;
  echo &quot;Trying aliased \\&quot;rr\\&quot; within if/then statement:&quot;
  rr /usr/X11R6/bin/mk*   #* 结果报错!
  # 别名在复合的表达式中并没有生效.
  echo &quot;However, previously expanded alias still recognized:&quot;
  ll /usr/X11R6/bin/mk*
fi  

echo

count=0
while [ $count -lt 3 ]
do
  alias rrr=&quot;ls -l&quot;
  echo &quot;Trying aliased \\&quot;rrr\\&quot; within \\&quot;while\\&quot; loop:&quot;
  rrr /usr/X11R6/bin/mk*   #* 这里的别名也没生效.
                           #  alias.sh: 行 57: rrr: 命令未找到
  let count+=1
done 

echo; echo

alias xyz=&#39;cat $0&#39;   # 列出了自身.
                     # 注意强引.
xyz
#  这看起来能工作,
#+ 尽管 bash 文档不介意这么做.
#
#  然而, Steve Jacobson 指出,
#+ &quot;$0&quot; 参数的扩展在上面的别名申明后立刻生效.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消别名的命令删除之前设置的别名.</p><p>样例 25-2. unalias: 设置和取消一个别名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# unalias.sh

shopt -s expand_aliases  # 开启别名扩展.

alias llm=&#39;ls -al | more&#39;
llm

echo

unalias llm              # 取消别名.
llm
# &#39;llm&#39; 不再被识别后的报错信息.

exit 0
bash$ ./unalias.sh
total 6
drwxrwxr-x    2 bozo     bozo         3072 Feb  6 14:04 .
drwxr-xr-x   40 bozo     bozo         2048 Feb  6 14:04 ..
-rwxr-xr-x    1 bozo     bozo          199 Feb  6 14:04 unalias.sh

./unalias.sh: llm: 命令未找到
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4>`,6),g={href:"http://tldp.org/LDP/abs/html/aliases.html#AEN18669",target:"_blank",rel:"noopener noreferrer"},k={href:"http://tldp.org/LDP/abs/html/aliases.html#AEN18676",target:"_blank",rel:"noopener noreferrer"};function N(w,y){const i=d("ExternalLinkIcon");return a(),r("div",null,[o,n("p",null,[e("Bash "),c,e(" 本质上不外乎是键盘上的快捷键，缩写呢是避免输入很长的命令串的一种手段.举个例子, 在 "),n("a",u,[e("~/.bashrc"),l(i)]),e(" 文件中包含别名 "),m,e(", 而后每个命令行输入的 lm "),n("a",b,[e("[1]"),l(i)]),e(" 将会自动被替换成 "),h,e(". 这可以节省大量的命令行输入和避免记住复杂的命令和选项. 设定别名 "),_,e(" (交互的删除模式) 防止无意的删除重要文件，也许可以少些悲痛.")]),n("p",null,[e("脚本中别名作用十分有限. 如果别名可以有一些 C 预处理器的功能会更好, 例如宏扩展, 但不幸的是 bash 别名中没有扩展参数. "),n("a",p,[e("[2]"),l(i)]),e(' 另外, 脚本在 "复合结构" 中并不能扩展自身的别名，例如 '),n("a",q,[e("if/then"),l(i)]),e(", 循环和函数. 另一个限制是，别名不能递归扩展. 基本上是我们无论怎么喜欢用别名都不如函数 "),n("a",x,[e("function"),l(i)]),e(" 来的更有效.")]),f,n("p",null,[n("a",g,[e("[1]"),l(i)]),e(" ... 作为命令行的第一个词. 显然别名只在命令的开始有意义. "),n("a",k,[e("[2]"),l(i)]),e(" 然而, 别名可用来扩展位置参数.")])])}const z=s(t,[["render",N],["__file","25_aliases.html.vue"]]);export{z as default};
