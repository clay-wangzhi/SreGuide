import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as i,e as a}from"./app-20d624c9.js";const s={},n=a(`<h1 id="_36-3-测试和比较的其他方法" tabindex="-1"><a class="header-anchor" href="#_36-3-测试和比较的其他方法" aria-hidden="true">#</a> 36.3 测试和比较的其他方法</h1><p>对于判断（test命令）来说，[[ ]]比[ ]更加合适。同样的，算数运算符（译注：-eq之类的）比(( ))更有优势。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a=8

# 下面所有这些比较的结果都应该是相等的
test &quot;$a&quot; -lt 16 &amp;&amp; echo &quot;yes, $a &lt; 16&quot;         # &quot;and list&quot;
/bin/test &quot;$a&quot; -lt 16 &amp;&amp; echo &quot;yes, $a &lt; 16&quot; 
[ &quot;$a&quot; -lt 16 ] &amp;&amp; echo &quot;yes, $a &lt; 16&quot; 
[[ $a -lt 16 ]] &amp;&amp; echo &quot;yes, $a &lt; 16&quot;          # 为表达式添加
(( a &lt; 16 )) &amp;&amp; echo &quot;yes, $a &lt; 16&quot;             # [[ ]]和(( ))并不是必须的

city=&quot;New York&quot;
# 下面这些结果也是相等的
test &quot;$city&quot; \\&lt; Paris &amp;&amp; echo &quot;Yes, Paris is greater than $city&quot;
                                  # ASCII字符比较
/bin/test &quot;$city&quot; \\&lt; Paris &amp;&amp; echo &quot;Yes, Paris is greater than $city&quot; 
[ &quot;$city&quot; \\&lt; Paris ] &amp;&amp; echo &quot;Yes, Paris is greater than $city&quot; 
[[ $city &lt; Paris ]] &amp;&amp; echo &quot;Yes, Paris is greater than $city&quot;
                                  # 并不需要为$city变量加引号。

# 向S.C.致谢
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[n];function o(r,c){return t(),i("div",null,l)}const m=e(s,[["render",o],["__file","36_3_tests_and_comparisons_alternatives.html.vue"]]);export{m as default};
