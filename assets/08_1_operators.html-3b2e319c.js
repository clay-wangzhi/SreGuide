import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as v,b as e,d as i,a,e as n}from"./app-e46907be.js";const t={},u=n(`<h1 id="_8-1-运算符" tabindex="-1"><a class="header-anchor" href="#_8-1-运算符" aria-hidden="true">#</a> 8.1 运算符</h1><h2 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h2><p><em>变量赋值</em>，初始化或改变一个变量的值。</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> =</h3><p>等号<code>=</code>赋值运算符，既可用于算术赋值，也可用于字符串赋值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var=27
category=minerals  # &quot;=&quot;左右不允许有空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=e("img",{src:"http://tldp.org/LDP/abs/images/caution.gif",alt:"caution"},null,-1),o=e("code",null,"=",-1),m=e("code",null,"=",-1),b={href:"http://tldp.org/LDP/abs/html/comparison-ops.html#EQUALSIGNREF",target:"_blank",rel:"noopener noreferrer"},h=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#   =   作为测试操作符

if [ &quot;$string1&quot; = &quot;$string2&quot; ]
then
   command
fi

#  [ &quot;X$string1&quot; = &quot;X$string2&quot; ] 这样写是安全的,
#  这样写可以避免任意一个变量为空时的报错。
#  (变量前加的&quot;X&quot;字符规避了变量为空的情况)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h2><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> +</h3><p>加</p><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> -</h3><p>减</p><h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> *</h3><p>乘</p><h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> /</h3><p>除</p><h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-hidden="true">#</a> **</h3><p>幂运算</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Bash, 2.02版本，推出了&quot;**&quot;幂运算操作符。

let &quot;z=5**3&quot;    # 5 * 5 * 5
echo &quot;z = $z&quot;   # z = 125
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> %</h3><p>取余(返回整数除法的余数)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ expr 5 % 3
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5/3=1，余2 取余运算符经常被用于生成一定范围内的数( 案例9-11, 案例9-15)，以及格式化程序输出(案例 27-16，案例 A-6)。 取余运算符还可以用来产生素数（案例A-15），取余的出现大大扩展了整数的算术运算。</p><p><strong>样例 8-1. 最大公约数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# gcd.sh: 最大公约数
#         使用欧几里得算法

#  两个整数的最大公约数（gcd）
#  是两数能同时整除的最大数

#  欧几里得算法使用辗转相除法
#    In each pass,
#       dividend &lt;---  divisor
#       divisor  &lt;---  remainder
#    until remainder = 0.
#    The gcd = dividend, on the final pass.
#
#  关于欧几里得算法更详细的讨论，可以查看:
#  Jim Loy&#39;s site, http://www.jimloy.com/number/euclids.htm.


# ------------------------------------------------------
# 参数检查
ARGS=2
E_BADARGS=85

if [ $# -ne &quot;$ARGS&quot; ]
then
  echo &quot;Usage: \`basename $0\` first-number second-number&quot;
  exit $E_BADARGS
fi
# ------------------------------------------------------


gcd ()
{

  dividend=$1             #  随意赋值，
  divisor=$2              #  两数谁大谁小是无关紧要的，
                          #  为什么?

  remainder=1             #  如果在测试括号里使用了一个未初始化的变量，
                          #  会报错的。

  until [ &quot;$remainder&quot; -eq 0 ]
  do    #  ^^^^^^^^^^  该变量必须在使用前初始化！
    let &quot;remainder = $dividend % $divisor&quot;
    dividend=$divisor     # 对被除数，除数重新赋值
    divisor=$remainder
  done                    # 欧几里得算法

}                         # 最后的 $dividend 就是最大公约数（gcd）


gcd $1 $2

echo; echo &quot;GCD of $1 and $2 = $dividend&quot;; echo


# 练习 :
# ---------
# 1) 检查命令行参数，保证其为整数，
#+   如果有错误，捕捉错误并在脚本退出前打印出适当的错误信息。
# 2) 使用本地变量(local variables)重写gcd()函数。

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7" aria-hidden="true">#</a> +=</h3><p>加等 （加上一个数）[^1] <code>let &quot;var += 5&quot;</code> 的结果是<code>var</code>变量的值增加了5。</p><h3 id="-8" tabindex="-1"><a class="header-anchor" href="#-8" aria-hidden="true">#</a> -=</h3><p>减等 （减去一个数）</p><h3 id="-9" tabindex="-1"><a class="header-anchor" href="#-9" aria-hidden="true">#</a> *=</h3><p>乘等 （乘以一个数） <code>let &quot;var *= 4&quot;</code> 的结果是<code>var</code>变量的值乘了4。</p><h3 id="-10" tabindex="-1"><a class="header-anchor" href="#-10" aria-hidden="true">#</a> /=</h3><p>除等 （除以一个数）</p><h3 id="-11" tabindex="-1"><a class="header-anchor" href="#-11" aria-hidden="true">#</a> %=</h3><p>余等 （取余赋值）</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>算术运算符常用于<code>expr</code>或<code>let</code>表达式中。</p><p><strong>样例 8-2. 使用算术运算符</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# 使变量自增1，10种不同的方法实现

n=1; echo -n &quot;$n &quot;

let &quot;n = $n + 1&quot;   # 可以使用 let &quot;n = n + 1&quot;
echo -n &quot;$n &quot;


: $((n = $n + 1))
#  &quot;:&quot; 是必要的，不加的话，bash会将
#+ &quot;$((n = $n + 1))&quot;看做一条命令。
echo -n &quot;$n &quot;

(( n = n + 1 ))
#  更简洁的写法。
#  感谢 David Lombard指出。
echo -n &quot;$n &quot;

n=$(($n + 1))
echo -n &quot;$n &quot;

: $[ n = $n + 1 ]
#  &quot;:&quot; 是必要的，不加的话，bash会将
#+ &quot;$[ n = $n + 1 ]&quot;看做一条命令。
#  即使&quot;n&quot;是字符串，也是可行的。
echo -n &quot;$n &quot;

n=$[ $n + 1 ]
#  即使&quot;n&quot;是字符串，也是可行的。
#* 不要用这种写法，它已被废弃且不具有兼容性。
#  感谢 Stephane Chazelas.
echo -n &quot;$n &quot;

# 使用C风格的自增运算符也是可以的
# 感谢 Frank Wang 指出。

let &quot;n++&quot;          # let &quot;++n&quot; 可行
echo -n &quot;$n &quot;

(( n++ ))          # (( ++n ))  可行
echo -n &quot;$n &quot;

: $(( n++ ))       # : $(( ++n )) 可行
echo -n &quot;$n &quot;

: $[ n++ ]         # : $[ ++n ] 可行
echo -n &quot;$n &quot;

echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在早期的Bash版本中，整型变量是带符号的长整型数（32-bit），取值范围从 -2147483648 到 2147483647。如果算术操作超出了整数的取值范围，结果会不准确。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo $BASH_VERSION   # Bash 1.14版本

a=2147483646
echo &quot;a = $a&quot;        # a = 2147483646
let &quot;a+=1&quot;           # 自增 &quot;a&quot;.
echo &quot;a = $a&quot;        # a = 2147483647
let &quot;a+=1&quot;           # 再次自增&quot;a&quot;，超出取值范围。
echo &quot;a = $a&quot;        # a = -2147483648
                     #      错误：超出范围，
                     #+     最左边的符号位被重置，
                     #+     结果变负
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bash版本 &gt;= 2.05b, Bash支持了64-bit整型数。</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution"> 注意，Bash并不支持浮点运算，Bash会将带小数点的数看做字符串。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a=1.5

let &quot;b = $a + 1.3&quot;  # 报错
# t2.sh: let: b = 1.5 + 1.3: syntax error in expression
#                            (error token is &quot;.5 + 1.3&quot;)

echo &quot;b = $b&quot;       # b=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),q={href:"http://tldp.org/LDP/abs/html/mathc.html#BCREF",target:"_blank",rel:"noopener noreferrer"},p=n(`<h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h2><p>位运算很少出现在shell脚本中，在bash中加入位运算的初衷似乎是为了操控和检测来自<code>ports</code>或<code>sockets</code>的数据。位运算在编译型语言中能发挥更大的作用，比如C/C++，位运算提供了直接访问系统硬件的能力。然而，聪明的vladz在他的base64.sh(案例 A-54)脚本中也用到了位运算。 下面介绍位运算符。</p><h3 id="-12" tabindex="-1"><a class="header-anchor" href="#-12" aria-hidden="true">#</a> &lt;&lt;</h3><p>左移运算符(左移1位相当于乘2)</p><h3 id="-13" tabindex="-1"><a class="header-anchor" href="#-13" aria-hidden="true">#</a> &lt;&lt;=</h3><p>左移赋值</p><p><code>let &quot;var &lt;&lt;= 2&quot;</code> 的结果是var变量的值向左移了2位(乘以4)</p><h3 id="-14" tabindex="-1"><a class="header-anchor" href="#-14" aria-hidden="true">#</a> &gt;&gt;</h3><p>右移运算符(右移1位相当于除2)</p><h3 id="-15" tabindex="-1"><a class="header-anchor" href="#-15" aria-hidden="true">#</a> &gt;&gt;=</h3><p>右移赋值</p><h3 id="-16" tabindex="-1"><a class="header-anchor" href="#-16" aria-hidden="true">#</a> &amp;</h3><p>按位与（AND）</p><h3 id="-17" tabindex="-1"><a class="header-anchor" href="#-17" aria-hidden="true">#</a> &amp;=</h3><p>按位与等（AND-equal）</p><h3 id="-18" tabindex="-1"><a class="header-anchor" href="#-18" aria-hidden="true">#</a> |</h3><p>按位或（OR）</p><h3 id="-19" tabindex="-1"><a class="header-anchor" href="#-19" aria-hidden="true">#</a> |=</h3><p>按位或等（OR-equal）</p><h3 id="-20" tabindex="-1"><a class="header-anchor" href="#-20" aria-hidden="true">#</a> ~</h3><p>按位取反</p><h3 id="-21" tabindex="-1"><a class="header-anchor" href="#-21" aria-hidden="true">#</a> ^</h3><p>按位异或（XOR）</p><h3 id="-22" tabindex="-1"><a class="header-anchor" href="#-22" aria-hidden="true">#</a> ^=</h3><p>按位异或等（XOR-equal）</p><h2 id="逻辑-布尔-运算符" tabindex="-1"><a class="header-anchor" href="#逻辑-布尔-运算符" aria-hidden="true">#</a> 逻辑(布尔)运算符</h2><h3 id="-23" tabindex="-1"><a class="header-anchor" href="#-23" aria-hidden="true">#</a> !</h3><p>非(NOT)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if [ ! -f $FILENAME ]
then
  ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-24" tabindex="-1"><a class="header-anchor" href="#-24" aria-hidden="true">#</a> &amp;&amp;</h3><p>与(AND)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if [ $condition1 ] &amp;&amp; [ $condition2 ]
#  等同于:  if [ $condition1 -a $condition2 ]
#  返回true如果 condition1 和 condition2 同时为真...

if [[ $condition1 &amp;&amp; $condition2 ]]    # 可行
#  注意，&amp;&amp; 运算符不能用在[ ... ]结构里。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"> &amp;&amp;也可以被用在<code>list</code>结构中连接命令。</p></blockquote><h3 id="-25" tabindex="-1"><a class="header-anchor" href="#-25" aria-hidden="true">#</a> ||</h3><p>或(OR)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if [ $condition1 ] || [ $condition2 ]

#  等同于:  if [ $condition1 -a $condition2 ]
#  返回true如果 condition1 和 condition2 任意一个为真...

if [[ $condition1 || $condition2 ]]    # 可行
#  注意，|| 运算符不能用在[ ... ]结构里。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结-1" tabindex="-1"><a class="header-anchor" href="#小结-1" aria-hidden="true">#</a> 小结</h3><p><strong>样例 8-3. 在条件测试中使用 &amp;&amp; 和 ||</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

a=24
b=47

if [ &quot;$a&quot; -eq 24 ] &amp;&amp; [ &quot;$b&quot; -eq 47 ]
then
  echo &quot;Test #1 succeeds.&quot;
else
  echo &quot;Test #1 fails.&quot;
fi

#  错误:   if [ &quot;$a&quot; -eq 24 &amp;&amp; &quot;$b&quot; -eq 47 ]
#          这样写的话，bash会先执行&#39;[ &quot;$a&quot; -eq 24&#39;
#          然后就找不到右括号&#39;]&#39;了...
#
#  注意:  if [[ $a -eq 24 &amp;&amp; $b -eq 24 ]]  这样写是可以的
#  双方括号测试结构比单方括号更加灵活。
#  (双方括号中的&quot;&amp;&amp;&quot;与单方括号中的&quot;&amp;&amp;&quot;意义不同)
#  感谢 Stephane Chazelas 指出。


if [ &quot;$a&quot; -eq 98 ] || [ &quot;$b&quot; -eq 47 ]
then
  echo &quot;Test #2 succeeds.&quot;
else
  echo &quot;Test #2 fails.&quot;
fi


#  使用 -a 和 -o 选项也具有同样的效果。
#  感谢 Patrick Callahan 指出。


if [ &quot;$a&quot; -eq 24 -a &quot;$b&quot; -eq 47 ]
then
  echo &quot;Test #3 succeeds.&quot;
else
  echo &quot;Test #3 fails.&quot;
fi


if [ &quot;$a&quot; -eq 98 -o &quot;$b&quot; -eq 47 ]
then
  echo &quot;Test #4 succeeds.&quot;
else
  echo &quot;Test #4 fails.&quot;
fi


a=rhino
b=crocodile
if [ &quot;$a&quot; = rhino ] &amp;&amp; [ &quot;$b&quot; = crocodile ]
then
  echo &quot;Test #5 succeeds.&quot;
else
  echo &quot;Test #5 fails.&quot;
fi

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&amp;&amp;</code>和<code>||</code>运算符也可以用在算术运算中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ echo $(( 1 &amp;&amp; 2 )) $((3 &amp;&amp; 0)) $((4 || 0)) $((0 || 0))
1 0 1 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他运算符" tabindex="-1"><a class="header-anchor" href="#其他运算符" aria-hidden="true">#</a> 其他运算符</h2><h3 id="-26" tabindex="-1"><a class="header-anchor" href="#-26" aria-hidden="true">#</a> ,</h3><p>逗号运算符 逗号运算符用于连接两个或多个算术操作，所有的操作会被依次求值（可能会有副作用）。[^2]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let &quot;t1 = ((5 + 3, 7 - 1, 15 - 4))&quot;
echo &quot;t1 = $t1&quot;           ^^^^^^  # t1 = 11
# 这里的t1 被赋值了11，为什么？

let &quot;t2 = ((a = 9, 15 / 3))&quot;      # 对&quot;a&quot;赋值并对&quot;t2&quot;求值。
echo &quot;t2 = $t2    a = $a&quot;         # t2 = 5    a = 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逗号运算符常被用在<code>for</code>循环中。参看案例 11-13。</p><p>[^1]: 取决与不同的上下文，+= 也可能作为字符串连接符。它可以很方便地修改环境变量。 [^2]: 副作用，顾名思义，就是预料之外的结果。</p>`,47);function x(g,$){const d=l("ExternalLinkIcon");return r(),v("div",null,[u,e("blockquote",null,[e("p",null,[c,i(" 注意，不要混淆"),o,i("赋值运算符与"),m,e("a",b,[i("测试操作符"),a(d)]),i("。")])]),h,e("p",null,[i("如果你想在脚本中使用浮点数运算，借助"),e("a",q,[i("bc"),a(d)]),i("或外部数学函数库吧。")]),p])}const k=s(t,[["render",x],["__file","08_1_operators.html.vue"]]);export{k as default};
