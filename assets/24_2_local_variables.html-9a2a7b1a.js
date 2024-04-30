import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as v,a as e,b as n,d as l,e as s}from"./app-22100c49.js";const t={},c=e("h1",{id:"_24-2-局部变量",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_24-2-局部变量","aria-hidden":"true"},"#"),n(" 24.2 局部变量")],-1),u=e("p",null,"怎样使一个变量变成“局部”变量？",-1),o={href:"http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF",target:"_blank",rel:"noopener noreferrer"},b={href:"http://tldp.org/LDP/abs/html/subshells.html#SCOPEREF",target:"_blank",rel:"noopener noreferrer"},m={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18568",target:"_blank",rel:"noopener noreferrer"},h=s(`<p>例子 24-12. 局部变量的可见范围</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# ex62.sh: 函数内部的局部变量与全局变量。

func () {
    local loc_var=23       # 声明为局部变量。
    echo                   # 使用&#39;local&#39;内建命令
    echo &quot;\\&quot;loc_var\\&quot; in function = $loc_var&quot;
    global_var=999         # 没有声明为局部变量。
    # 默认为全局变量。

    echo &quot;\\&quot;global_var\\&quot; in function = $global_var&quot;
}

func

# 现在，来看看局部变量“loc_var”在函数外部是否可见。

echo
echo &quot;\\&quot;loc_var\\&quot; outside function = $loc_var&quot;
                                    # $loc_var outside function =
                                    # 不行, $loc_var 不是全局可见的.
echo &quot;\\&quot;global_var\\&quot; outside function = $global_var&quot;
                                    # $在函数外部global_var = 999
                                    # $global_var 是全局可见的.
echo

exit 0
#  与C语言相比，在函数内声明的Bash变量
#+ 除非它被明确声明为local时，它才是局部的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice"> 在函数被调用之前，所有在函数中声明的变量，在函数外部都是不可见的，当然也包括那些被明确声明为local的变量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

func ()
{
    global_var=37    #  变量只在函数体内可见
                     #+ 在函数被调用之前。
}                    #  函数结束

echo &quot;global_var = $global_var&quot;  # global_var =
                                 #  函数 &quot;func&quot; 还没被调用，
                                 #+ 所以$global_var 在这里还不是可见的.
func
echo &quot;global_var = $global_var&quot;  # global_var = 37
                                 # 已经在函数调用的时候设置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),_=e("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"extra"},null,-1),p={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},g=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

echo &quot;==OUTSIDE Function (global)==&quot;
t=$(exit 1)
echo $?     # 1
            # 如预期一样.

echo
function0 ()
{
    echo &quot;==INSIDE Function==&quot;
    echo &quot;Global&quot;
    t0=$(exit 1)
    echo $?      # 1
                 # 如预期一样.

    echo
    echo &quot;Local declared &amp; assigned in same command.&quot;
    local t1=$(exit 1)
    echo $?      # 0
                 # 意料之外!
#  显然，变量赋值发生在Apparently, 
#+ 局部声明之前。
#+ 返回值是为了latter.

    echo
    echo &quot;Local declared, then assigned (separate commands).&quot;
    local t2
    t2=$(exit 1)
    echo $?
}

function0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-2-1-局部变量和递归" tabindex="-1"><a class="header-anchor" href="#_24-2-1-局部变量和递归" aria-hidden="true">#</a> 24.2.1 局部变量和递归</h2>`,2),f={href:"http://tldp.org/LDP/abs/html/biblio.html#MAYERREF",target:"_blank",rel:"noopener noreferrer"},q={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18607",target:"_blank",rel:"noopener noreferrer"},$={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18610",target:"_blank",rel:"noopener noreferrer"},x={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18614",target:"_blank",rel:"noopener noreferrer"},E={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18617",target:"_blank",rel:"noopener noreferrer"},N=s(`<p>例子 24-13. 一个简单的递归函数表示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# recursion-demo.sh
# 递归演示.

RECURSIONS=9   # 递归的次数.
r_count=0      # 必须是全局变量，为什么？

recurse ()
{
    var=&quot;$1&quot;

    while [ &quot;$var&quot; -ge 0 ]
    do
        echo &quot;Recursion count = &quot;$r_count&quot;  +-+  \\$var = &quot;$var&quot;&quot;
        (( var-- )); (( r_count++ ))
        recurse &quot;$var&quot;  #  函数调用自身(递归)
    done              #+ 直到遇到什么样的终止条件？
}

recurse $RECURSIONS

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子 24-14. 另一个简单的例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# recursion-def.sh
# 另外一个描述递归的比较生动的脚本。

RECURSIONS=10
r_count=0
sp=&quot; &quot;

define_recursion ()
{
    ((r_count++))
    sp=&quot;$sp&quot;&quot; &quot;
    echo -n &quot;$sp&quot;
    echo &quot;\\&quot;The act of recurring ... \\&quot;&quot;        # Per 1913 Webster&#39;s dictionary.

    while [ $r_count -le $RECURSIONS ]
    do
        define_recursion
    done
}

echo
echo &quot;Recursion: &quot;
define_recursion
echo

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),R={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18632",target:"_blank",rel:"noopener noreferrer"},A=s(`<p>例子24-15. 使用局部变量进行递归</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

# 阶乘
# ---------

# Bash允许递归么？
# 恩，允许，但是...
# 他太慢了，所以恐怕你难以忍受。

MAX_ARG=5
E_WRONG_ARGS=85
E_RANGE_ERR=86


if [ -z &quot;$1&quot; ]
then
    echo &quot;Usage: \`basename $0\` number&quot;
    exit $E_WRONG_ARGS
fi

if [ &quot;$1&quot; -gt $MAX_ARG ]
then
    echo &quot;Out of range ($MAX_ARG is maximum).&quot;
    #  现在让我们来了解一些实际情况。
    #  如果你想计算比这个更大的范围的阶乘，
    #+ 应该用真正的编程语言来重写它。
    exit $E_RANGE_ERR
fi

fact () 
{
    local number=$1
    #  变量&quot;number&quot; 必须被定义为局部变量，
    #+ 否则不能正常工作。
    if [ &quot;$number&quot; -eq 0 ]
    then
        factorial=1    # 0的阶乘为1.
    else
        let &quot;decrnum = number - 1&quot;
        fact $decrnum  # 递归的函数调用 (就是函数调用自己).
        let &quot;factorial = $number * $?&quot;
    fi
    return $factorial
}

fact $1
echo &quot;Factorial of $1 is $?.&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),L={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#PRIMES",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"注释",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注释","aria-hidden":"true"},"#"),n(" 注释")],-1),D={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18568",target:"_blank",rel:"noopener noreferrer"},P=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

function1 ()
{
  local func1var=20

  echo &quot;Within function1, \\$func1var = $func1var.&quot;

  function2
}

function2 ()
{
  echo &quot;Within function2, \\$func1var = $func1var.&quot;
}

function1

exit 0


# 脚本的输出:

# Within function1, $func1var = 20.
# Within function2, $func1var = 20.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Bash手册里是这样描述的：</p><blockquote><p>&quot;局部变量只能在函数内部使用; 它让变量名的可见范围限制在了函数内部以及它的孩子里&quot; [emphasis added] The ABS Guide的作者认为这个行为一个bug.</p></blockquote>`,3),S={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18607",target:"_blank",rel:"noopener noreferrer"},T={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18610",target:"_blank",rel:"noopener noreferrer"},F={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18614",target:"_blank",rel:"noopener noreferrer"},I={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18617",target:"_blank",rel:"noopener noreferrer"},C={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18632",target:"_blank",rel:"noopener noreferrer"},G=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

#  提醒: 运行这个脚本可能会让你的系统卡死。
#  如果你够好运的话，在耗尽可用内存之前，它会发生一个段错误。

recursive_function ()		   
{
echo &quot;$1&quot;     # 让函数做一些事情，加快发生段错误。
(( $1 &lt; $2 )) &amp;&amp; recursive_function $(( $1 + 1 )) $2;
#  只要第一个参数小于第二个参数，
#+ 让第一个参数加1，然后递归。
}

recursive_function 1 50000  # 递归 50,000层!
#  很可能发生段错误(依赖于栈的大小，通过ulimit -m可以设置栈的大小)

#  即使是C语言，递归调用这么多层也会发生段错误，
#+ 通过分配栈耗尽所有的内存。


echo &quot;This will probably not print.&quot;
exit 0  # 这个脚本可能不会正常退出。

#  感谢, Stéphane Chazelas.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function O(B,U){const i=r("ExternalLinkIcon");return a(),v("div",null,[c,u,e("p",null,[n("局部变量 如果变量用local来声明，那么它就只能够在该变量被声明的"),e("a",o,[n("代码块"),l(i)]),n("中可见。 这个代码块就是局部"),e("a",b,[n("范围"),l(i)]),n("。 在一个函数中，一个局部变量只有在函数代码中才有意义."),e("a",m,[n("[1]"),l(i)])]),h,e("p",null,[_,n(" 正如Evgeniy Ivanov指出的那样，当在一条命令中定义和给一个局部变量赋值时，显然操作的顺序首先是给变量赋值，之后限定变量的局部范围。这可以通过"),e("a",p,[n("返回值"),l(i)]),n("来反应。")]),g,e("p",null,[n("递归是一个有趣并且有时候非常有用的自己调用自己的形式。 "),e("a",f,[n("Herbert Mayer"),l(i)]),n(" 是这样定义递归的，“。。。表示一个算法通过使用一个简单的相同算法版本。。。”")]),e("p",null,[n("想象一下，一个定义是从自身考虑的，"),e("a",q,[n("[2]"),l(i)]),n(" 一个表达包含了自身的表达， "),e("a",$,[n("[3]"),l(i)]),n(" 一条蛇吞下自己的尾巴， "),e("a",x,[n("[4]"),l(i)]),n(" 或者 。。。 一个函数调用自身。"),e("a",E,[n("[5]"),l(i)])]),N,e("p",null,[n("局部变量是一个写递归代码有效的工具，但是这种方法一般会包含大量的计算负载，显然在shell脚本中并不推荐递归."),e("a",R,[n("[6]"),l(i)])]),A,e("p",null,[n("也可以参考"),e("a",L,[n("例子 A-15"),l(i)]),n("，一个包含递归例子的脚本。我们意识到递归同时也意味着巨大的资源消耗和缓慢的运行速度，因此它并不适合在脚本中使用。")]),k,e("p",null,[e("a",D,[n("[1]"),l(i)]),n(" 然而，如Thomas Braunberger 指出的那样，一个函数里定义的局部变量对于调用它的父函数也是可见的。")]),P,e("p",null,[e("a",S,[n("[2]"),l(i)]),n(" 被熟知为冗余。")]),e("p",null,[e("a",T,[n("[3]"),l(i)]),n(" 被熟知为同义反复。")]),e("p",null,[e("a",F,[n("[4]"),l(i)]),n(" 被熟知为暗喻。")]),e("p",null,[e("a",I,[n("[5]"),l(i)]),n(" 被熟知为递归函数。")]),e("p",null,[e("a",C,[n("[6]"),l(i)]),n(" 太多的递归层次可能会引发一个脚本的段错误。")]),G])}const y=d(t,[["render",O],["__file","24_2_local_variables.html.vue"]]);export{y as default};
