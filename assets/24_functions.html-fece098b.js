import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as r,a as n,d as i,w as d,b as e,e as v}from"./app-ff59e76a.js";const t={},m=n("h1",{id:"_24-函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_24-函数","aria-hidden":"true"},"#"),e(" 24 函数")],-1),o=n("h3",{id:"本章目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本章目录","aria-hidden":"true"},"#"),e(" 本章目录")],-1),b={href:"http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF",target:"_blank",rel:"noopener noreferrer"},h=v(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function function_name {
command...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function_name () { 
command...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={href:"http://tldp.org/LDP/abs/html/portabilityissues.html",target:"_blank",rel:"noopener noreferrer"},p=v(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function_name () {
command...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 一个函数可能被“压缩”到一个单独行里。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>￼fun () { echo &quot;This is a function&quot;; echo; } 
#                                 ^     ^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，在这种情况下，函数里的最后一个命令必须跟有一个分号。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fun () { echo &quot;This is a function&quot;; echo } # Error! 
#                                       ^
fun2 () { echo &quot;Even a single-command function? Yes!&quot;; } 
#                                                    ^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要引用函数名字就可以调用或者触发函数。一个函数调用相当于一个命令。</p><p>例子 24-1. 简单的函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# ex59.sh: 练习函数(简单的).

JUST_A_SECOND=1

funky ()
{ # 这是一个简单的函数
    echo &quot;This is a funky function.&quot;
    echo &quot;Now exiting funky function.&quot;
} # 函数必须在调用前声明.


fun ()
{   # 一个稍微复杂点的函数.
    i=0
    REPEATS=30

    echo
    echo &quot;And now the fun really begins.&quot;
    echo

    sleep $JUST_A_SECOND    # Hey, 等一秒钟!
    while [ $i -lt $REPEATS ]
    do
        echo &quot;----------FUNCTIONS----------&gt;&quot;
        echo &quot;&lt;------------ARE-------------&quot;
        echo &quot;&lt;------------FUN------------&gt;&quot;
        echo
        let &quot;i+=1&quot;
    done
}

# 现在，调用这些函数.

funky
fun

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数定义必须在第一次函数调用之前。没有声明函数的方法，比如像C语言中一样。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>f1
# 将会产生一个错误消息，因为“f1”函数还没有定义。

declare -f f1      # 这样也不会有帮助。
f1                 # 仍然会产生一个错误消息。

# 然而...


f1 () {
    echo &quot;Calling function \\&quot;f2\\&quot; from within function \\&quot;f1\\&quot;.&quot;
    f2 
}

f2 () {
    echo &quot;Function \\&quot;f2\\&quot;.&quot;
}

f1  #  在此之前，事实上函数“f2”是没有被调用的，
    #+ 尽管在它定义之前被引用了。
    #  这是可以的。
    # 感谢, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 函数不能为空！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# empty-functionn.sh

empty () 
{
}

exit 0  # 这里将不会退出!


# $ sh empty-function.sh
# empty-function.sh: line 6: syntax error near unexpected token \`}&#39;
# empty-function.sh: line 6: \`}&#39;

# $ echo $? 
# 2

# 请注意，只包含注释的函数也是空函数。

func () 
{
    # 注释 1.
    # 注释 2.
    # 这仍然是一个空函数。
    # 感谢, Mark Bova将这一点指出来。
}
# 结果会出现和上面一样的错误信息。

# 然而 ...

not_quite_empty ()
{
    illegal_command
} #  一个包含这个函数的脚本将不会出错
    #+ 只要这个函数没有被调用。
not_empty ()
{
    :
} # 包含一个 : (空命令符），这样是可以的。

# 感谢, Dominick Geyer 和 Thiemo Kellner.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至，把一个函数嵌套在另外一个函数里也是可行的，尽管这并没有什么用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>f1 () 
{
    f2 () # 嵌套函数
    {
        echo &quot;Function \\&quot;f2\\&quot;, inside \\&quot;f1\\&quot;.&quot;
    }
}

f2  #  将会产生一个错误消息。
    #  即使有一个前置的 &quot;declare -f f2&quot; 也不会有什么作用。

echo

f1  #  不会做任何事情，因为调用“f1”的时候，并不会自动调用“f2”。
    #  现在，调用“f2”是可以的，
    #+ 因为通过调用“f1”，它的定义现在已是可见的。

    # 感谢, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数定义可能出现在不太可能出现的地方，甚至出现在本应该是命令出现的地方。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls -l | foo() { echo &quot;foo&quot;; }  # 可行的，尽管没有什么作用。


if [ &quot;$USER&quot; = bozo ]
then
    bozo_greet ()   # 函数定义嵌套在if/then的结构体中。
    {
        echo &quot;Hello, Bozo.&quot;
    }
fi

bozo_greet        # 只有Bozo用户工作，其它用户会得到一个错误消息。


# 在某些场景中，像下面这些东西可能会很有用。
NO_EXIT=1   # 将会激活下面的函数定义。

[[ $NO_EXIT -eq 1 ]] &amp;&amp; exit() { true; }     # 函数定义出现在“与列表”中。
# 如果 $NO_EXIT 等于 1, 定义 &quot;exit ()&quot;.
# 通过把exit函数别名为“true”，这样把内置的exit命令给禁用了。

exit  # 调用 &quot;exit ()&quot; 函数, 而不是内置的 &quot;exit&quot; 命令。


# 或者，类似地:
filename=file1

[ -f &quot;$filename&quot; ] &amp;&amp;
foo () { rm -f &quot;$filename&quot;; echo &quot;File &quot;$filename&quot; deleted.&quot;; } ||
foo () { echo &quot;File &quot;$filename&quot; not found.&quot;; touch bar; }

foo

# 感谢, S.C. 和 Christopher Head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数名字可以呈现各种奇怪的形式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>_(){ for i in {1..10}; do echo -n &quot;$FUNCNAME&quot;; done; echo; }
# ^^^         函数名字和圆括号之间没有空格。
#             这并不会总是会正常工作。为什么呢？

# 现在，我们来调用函数。
_         # __________
#           ^^^^^^^^^^   10 个下划线（10 倍的函数名字）！
# 一个“假”的下划线也是一个可以接受的函数名字。

# 事实上，一个分号也是一个可以接受的函数名字。

:(){ echo &quot;:&quot;; }; :

# 这有什么作用呢？
# 这是一个狡诈的方式去混淆脚本中的代码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),_={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#GRONSFELD",target:"_blank",rel:"noopener noreferrer"},x=v(`<p>小提示：当一个函数的不同版本出现在一个脚本中，会发生什么事情呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#  正如Yan Chen 指出的那样,
#  当一个函数被多次定义的时候，
#  最后一个函数是被调用的那个。
#  然而这并不是特别有用。

func () 
{
    echo &quot;First version of func ().&quot;
}

func () 
{
    echo &quot;Second version of func ().&quot;
}

func   # 调用的是第二个 func () 函数版本。

exit $?

#  甚至，可能用函数去覆盖
#+ 或者占用系统命令。
#  当然，这并不是可取的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function q(g,E){const l=a("RouterLink"),s=a("ExternalLinkIcon");return c(),r("div",null,[m,o,n("ul",null,[n("li",null,[i(l,{to:"/code/shell/part5/24_1_complex_functions_and_function_complexities.html"},{default:d(()=>[e("24.1 复杂函数和函数复杂性")]),_:1})]),n("li",null,[i(l,{to:"/code/shell/part5/24_2_local_variables.html"},{default:d(()=>[e("24.2 局部变量")]),_:1})]),n("li",null,[i(l,{to:"/code/shell/part5/24_3_recursion_without_local_variables.html"},{default:d(()=>[e("24.3 不使用局部变量的递归")]),_:1})])]),n("p",null,[e("和其它“真正”的编程语言一样，Bash也有函数，尽管它在实现方面有一些限制。一个函数就是一个子程序，实现一系列操作的"),n("a",b,[e("代码块"),i(s)]),e("，执行一个特定任务的“黑盒子”。有重复代码的地方，当一个过程只需要轻微修改任务就会重复执行的时候，那么你就需要考虑使用函数了。")]),h,n("p",null,[e("第二种形式可能会更受C程序员的喜爱（并且它更具有"),n("a",f,[e("可移植性"),i(s)]),e("）。 在C语言里面，函数的圆括号可以出现在第二行。")]),p,n("p",null,[e("也可以参见 "),n("a",_,[e("Example A-56"),i(s)])]),x])}const y=u(t,[["render",q],["__file","24_functions.html.vue"]]);export{y as default};
