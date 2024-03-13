import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as s}from"./app-54f39dde.js";const l={},d=s(`<h1 id="_8-3-双圆括号结构" tabindex="-1"><a class="header-anchor" href="#_8-3-双圆括号结构" aria-hidden="true">#</a> 8.3 双圆括号结构</h1><p>与<code>let</code>命令类似，<code>(( ... ))</code> 结构允许对算术表达式的扩展和求值。它是<code>let</code>命令的简化形式。例如，a=$(( 5 + 3 )) 会将变量a赋值成 5 + 3，也就是8。在Bash中，双圆括号结构也允许以C风格的方式操作变量。例如，(( var++ ))。</p><p><strong>样例 8-5. 以C风格的方式操作变量</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# c-vars.sh
# 以C风格的方式操作变量，使用(( ... ))结构


echo

(( a = 23 ))  #  C风格的变量赋值，注意&quot;=&quot;等号前后都有空格

echo &quot;a (initial value) = $a&quot;   # 23

(( a++ ))     #  后缀自增&#39;a&#39;，C-style.
echo &quot;a (after a++) = $a&quot;       # 24

(( a-- ))     #  后缀自减&#39;a&#39;, C-style.
echo &quot;a (after a--) = $a&quot;       # 23


(( ++a ))     #  前缀自增&#39;a&#39;, C-style.
echo &quot;a (after ++a) = $a&quot;       # 24

(( --a ))     #  前缀自减&#39;a&#39;, C-style.
echo &quot;a (after --a) = $a&quot;       # 23

echo

########################################################
#  注意，C风格的++，--运算符，前缀形式与后缀形式有不同的
#+ 副作用。

n=1; let --n &amp;&amp; echo &quot;True&quot; || echo &quot;False&quot;  # False
n=1; let n-- &amp;&amp; echo &quot;True&quot; || echo &quot;False&quot;  # True

#  感谢 Jeroen Domburg。
########################################################

echo

(( t = a&lt;45?7:11 ))   # C风格三目运算符。
#       ^  ^ ^
echo &quot;If a &lt; 45, then t = 7, else t = 11.&quot;  # a = 23
echo &quot;t = $t &quot;                              # t = 7

echo


# -----------
# 复活节彩蛋!
# -----------
#  Chet Ramey 偷偷往Bash里加入了C风格的语句结构，
#  还没写文档说明 (实际上很多是从ksh中继承过来的)。
#  在Bash 文档中，Ramey把 (( ... ))结构称为shell 算术运算，
#  但是这种表述并不准确...
#  抱歉啊，Chet，把你的秘密抖出来了。

#  参看 &quot;for&quot; 和 &quot;while&quot; 循环章节关于 (( ... )) 结构的部分。

#  (( ... )) 结构在Bash 2.04版本之后才能正常工作。

exit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以参看 <strong>样例 11-13</strong> 与 <strong>样例 8-4</strong>。</p>`,5),a=[d];function v(c,u){return n(),i("div",null,a)}const o=e(l,[["render",v],["__file","08_3_the_double_parentheses_construct.html.vue"]]);export{o as default};
