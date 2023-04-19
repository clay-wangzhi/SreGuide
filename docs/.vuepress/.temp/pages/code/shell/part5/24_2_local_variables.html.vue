<template><h1 id="_24-2-局部变量" tabindex="-1"><a class="header-anchor" href="#_24-2-局部变量" aria-hidden="true">#</a> 24.2 局部变量</h1>
<p>怎样使一个变量变成“局部”变量？</p>
<p>局部变量
如果变量用local来声明，那么它就只能够在该变量被声明的<a href="http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF" target="_blank" rel="noopener noreferrer">代码块<ExternalLinkIcon/></a>中可见。 这个代码块就是局部<a href="http://tldp.org/LDP/abs/html/subshells.html#SCOPEREF" target="_blank" rel="noopener noreferrer">范围<ExternalLinkIcon/></a>。 在一个函数中，一个局部变量只有在函数代码中才有意义.<a href="http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18568" target="_blank" rel="noopener noreferrer">[1]<ExternalLinkIcon/></a></p>
<p>例子 24-12. 局部变量的可见范围</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash
# ex62.sh: 函数内部的局部变量与全局变量。

func () {
    local loc_var=23       # 声明为局部变量。
    echo                   # 使用'local'内建命令
    echo "\"loc_var\" in function = $loc_var"
    global_var=999         # 没有声明为局部变量。
    # 默认为全局变量。

    echo "\"global_var\" in function = $global_var"
}

func

# 现在，来看看局部变量“loc_var”在函数外部是否可见。

echo
echo "\"loc_var\" outside function = $loc_var"
                                    # $loc_var outside function =
                                    # 不行, $loc_var 不是全局可见的.
echo "\"global_var\" outside function = $global_var"
                                    # $在函数外部global_var = 999
                                    # $global_var 是全局可见的.
echo

exit 0
#  与C语言相比，在函数内声明的Bash变量
#+ 除非它被明确声明为local时，它才是局部的。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice" loading="lazy"> 在函数被调用之前，所有在函数中声明的变量，在函数外部都是不可见的，当然也包括那些被明确声明为local的变量。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash

func ()
{
    global_var=37    #  变量只在函数体内可见
                     #+ 在函数被调用之前。
}                    #  函数结束

echo "global_var = $global_var"  # global_var =
                                 #  函数 "func" 还没被调用，
                                 #+ 所以$global_var 在这里还不是可见的.
func
echo "global_var = $global_var"  # global_var = 37
                                 # 已经在函数调用的时候设置。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra" loading="lazy"> 正如Evgeniy Ivanov指出的那样，当在一条命令中定义和给一个局部变量赋值时，显然操作的顺序首先是给变量赋值，之后限定变量的局部范围。这可以通过<a href="http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF" target="_blank" rel="noopener noreferrer">返回值<ExternalLinkIcon/></a>来反应。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash

echo "==OUTSIDE Function (global)=="
t=$(exit 1)
echo $?     # 1
            # 如预期一样.

echo
function0 ()
{
    echo "==INSIDE Function=="
    echo "Global"
    t0=$(exit 1)
    echo $?      # 1
                 # 如预期一样.

    echo
    echo "Local declared &amp; assigned in same command."
    local t1=$(exit 1)
    echo $?      # 0
                 # 意料之外!
#  显然，变量赋值发生在Apparently, 
#+ 局部声明之前。
#+ 返回值是为了latter.

    echo
    echo "Local declared, then assigned (separate commands)."
    local t2
    t2=$(exit 1)
    echo $?
}

function0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="_24-2-1-局部变量和递归" tabindex="-1"><a class="header-anchor" href="#_24-2-1-局部变量和递归" aria-hidden="true">#</a> 24.2.1 局部变量和递归</h2>
<p>递归是一个有趣并且有时候非常有用的自己调用自己的形式。 <a href="http://tldp.org/LDP/abs/html/biblio.html#MAYERREF" target="_blank" rel="noopener noreferrer">Herbert Mayer<ExternalLinkIcon/></a> 是这样定义递归的，“。。。表示一个算法通过使用一个简单的相同算法版本。。。”</p>
<p>想象一下，一个定义是从自身考虑的，<a href="http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18607" target="_blank" rel="noopener noreferrer">[2]<ExternalLinkIcon/></a> 一个表达包含了自身的表达， <a href="http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18610" target="_blank" rel="noopener noreferrer">[3]<ExternalLinkIcon/></a> 一条蛇吞下自己的尾巴， <a href="http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18614" target="_blank" rel="noopener noreferrer">[4]<ExternalLinkIcon/></a> 或者 。。。 一个函数调用自身。<a href="http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18617" target="_blank" rel="noopener noreferrer">[5]<ExternalLinkIcon/></a></p>
<p>例子 24-13. 一个简单的递归函数表示</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash
# recursion-demo.sh
# 递归演示.

RECURSIONS=9   # 递归的次数.
r_count=0      # 必须是全局变量，为什么？

recurse ()
{
    var="$1"

    while [ "$var" -ge 0 ]
    do
        echo "Recursion count = "$r_count"  +-+  \$var = "$var""
        (( var-- )); (( r_count++ ))
        recurse "$var"  #  函数调用自身(递归)
    done              #+ 直到遇到什么样的终止条件？
}

recurse $RECURSIONS

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>例子 24-14. 另一个简单的例子</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash
# recursion-def.sh
# 另外一个描述递归的比较生动的脚本。

RECURSIONS=10
r_count=0
sp=" "

define_recursion ()
{
    ((r_count++))
    sp="$sp"" "
    echo -n "$sp"
    echo "\"The act of recurring ... \""        # Per 1913 Webster's dictionary.

    while [ $r_count -le $RECURSIONS ]
    do
        define_recursion
    done
}

echo
echo "Recursion: "
define_recursion
echo

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>局部变量是一个写递归代码有效的工具，但是这种方法一般会包含大量的计算负载，显然在shell脚本中并不推荐递归.<a href="http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18632" target="_blank" rel="noopener noreferrer">[6]<ExternalLinkIcon/></a></p>
<p>例子24-15. 使用局部变量进行递归</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash

# 阶乘
# ---------

# Bash允许递归么？
# 恩，允许，但是...
# 他太慢了，所以恐怕你难以忍受。

MAX_ARG=5
E_WRONG_ARGS=85
E_RANGE_ERR=86


if [ -z "$1" ]
then
    echo "Usage: `basename $0` number"
    exit $E_WRONG_ARGS
fi

if [ "$1" -gt $MAX_ARG ]
then
    echo "Out of range ($MAX_ARG is maximum)."
    #  现在让我们来了解一些实际情况。
    #  如果你想计算比这个更大的范围的阶乘，
    #+ 应该用真正的编程语言来重写它。
    exit $E_RANGE_ERR
fi

fact () 
{
    local number=$1
    #  变量"number" 必须被定义为局部变量，
    #+ 否则不能正常工作。
    if [ "$number" -eq 0 ]
    then
        factorial=1    # 0的阶乘为1.
    else
        let "decrnum = number - 1"
        fact $decrnum  # 递归的函数调用 (就是函数调用自己).
        let "factorial = $number * $?"
    fi
    return $factorial
}

fact $1
echo "Factorial of $1 is $?."

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>也可以参考<a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#PRIMES" target="_blank" rel="noopener noreferrer">例子 A-15<ExternalLinkIcon/></a>，一个包含递归例子的脚本。我们意识到递归同时也意味着巨大的资源消耗和缓慢的运行速度，因此它并不适合在脚本中使用。</p>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>
<p><a href="http://tldp.org/LDP/abs/html/localvar.html#AEN18568" target="_blank" rel="noopener noreferrer">[1]<ExternalLinkIcon/></a> 然而，如Thomas Braunberger 指出的那样，一个函数里定义的局部变量对于调用它的父函数也是可见的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash

function1 ()
{
  local func1var=20

  echo "Within function1, \$func1var = $func1var."

  function2
}

function2 ()
{
  echo "Within function2, \$func1var = $func1var."
}

function1

exit 0


# 脚本的输出:

# Within function1, $func1var = 20.
# Within function2, $func1var = 20.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>在Bash手册里是这样描述的：</p>
<blockquote>
<p>&quot;局部变量只能在函数内部使用; 它让变量名的可见范围限制在了函数内部以及它的孩子里&quot; [emphasis added]
The ABS Guide的作者认为这个行为一个bug.</p>
</blockquote>
<p><a href="http://tldp.org/LDP/abs/html/localvar.html#AEN18607" target="_blank" rel="noopener noreferrer">[2]<ExternalLinkIcon/></a> 被熟知为冗余。</p>
<p><a href="http://tldp.org/LDP/abs/html/localvar.html#AEN18610" target="_blank" rel="noopener noreferrer">[3]<ExternalLinkIcon/></a> 被熟知为同义反复。</p>
<p><a href="http://tldp.org/LDP/abs/html/localvar.html#AEN18614" target="_blank" rel="noopener noreferrer">[4]<ExternalLinkIcon/></a> 被熟知为暗喻。</p>
<p><a href="http://tldp.org/LDP/abs/html/localvar.html#AEN18617" target="_blank" rel="noopener noreferrer">[5]<ExternalLinkIcon/></a> 被熟知为递归函数。</p>
<p><a href="http://tldp.org/LDP/abs/html/localvar.html#AEN18632" target="_blank" rel="noopener noreferrer">[6]<ExternalLinkIcon/></a> 太多的递归层次可能会引发一个脚本的段错误。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash

#  提醒: 运行这个脚本可能会让你的系统卡死。
#  如果你够好运的话，在耗尽可用内存之前，它会发生一个段错误。

recursive_function ()		   
{
echo "$1"     # 让函数做一些事情，加快发生段错误。
(( $1 &lt; $2 )) &amp;&amp; recursive_function $(( $1 + 1 )) $2;
#  只要第一个参数小于第二个参数，
#+ 让第一个参数加1，然后递归。
}

recursive_function 1 50000  # 递归 50,000层!
#  很可能发生段错误(依赖于栈的大小，通过ulimit -m可以设置栈的大小)

#  即使是C语言，递归调用这么多层也会发生段错误，
#+ 通过分配栈耗尽所有的内存。


echo "This will probably not print."
exit 0  # 这个脚本可能不会正常退出。

#  感谢, Stéphane Chazelas.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></template>
