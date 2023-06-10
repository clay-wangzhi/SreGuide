<template><div><h1 id="_36-3-测试和比较的其他方法" tabindex="-1"><a class="header-anchor" href="#_36-3-测试和比较的其他方法" aria-hidden="true">#</a> 36.3 测试和比较的其他方法</h1>
<p>对于判断（test命令）来说，[[ ]]比[ ]更加合适。同样的，算数运算符（译注：-eq之类的）比(( ))更有优势。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a=8

# 下面所有这些比较的结果都应该是相等的
test "$a" -lt 16 &amp;&amp; echo "yes, $a &lt; 16"         # "and list"
/bin/test "$a" -lt 16 &amp;&amp; echo "yes, $a &lt; 16" 
[ "$a" -lt 16 ] &amp;&amp; echo "yes, $a &lt; 16" 
[[ $a -lt 16 ]] &amp;&amp; echo "yes, $a &lt; 16"          # 为表达式添加
(( a &lt; 16 )) &amp;&amp; echo "yes, $a &lt; 16"             # [[ ]]和(( ))并不是必须的

city="New York"
# 下面这些结果也是相等的
test "$city" \&lt; Paris &amp;&amp; echo "Yes, Paris is greater than $city"
                                  # ASCII字符比较
/bin/test "$city" \&lt; Paris &amp;&amp; echo "Yes, Paris is greater than $city" 
[ "$city" \&lt; Paris ] &amp;&amp; echo "Yes, Paris is greater than $city" 
[[ $city &lt; Paris ]] &amp;&amp; echo "Yes, Paris is greater than $city"
                                  # 并不需要为$city变量加引号。

# 向S.C.致谢
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


