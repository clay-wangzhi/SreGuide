import{_ as a,e as s}from"./app.ab95b9c4.js";const n={},e=s(`<h1 id="_36-3-\u6D4B\u8BD5\u548C\u6BD4\u8F83\u7684\u5176\u4ED6\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_36-3-\u6D4B\u8BD5\u548C\u6BD4\u8F83\u7684\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a> 36.3 \u6D4B\u8BD5\u548C\u6BD4\u8F83\u7684\u5176\u4ED6\u65B9\u6CD5</h1><p>\u5BF9\u4E8E\u5224\u65AD\uFF08test\u547D\u4EE4\uFF09\u6765\u8BF4\uFF0C[[ ]]\u6BD4[ ]\u66F4\u52A0\u5408\u9002\u3002\u540C\u6837\u7684\uFF0C\u7B97\u6570\u8FD0\u7B97\u7B26\uFF08\u8BD1\u6CE8\uFF1A-eq\u4E4B\u7C7B\u7684\uFF09\u6BD4(( ))\u66F4\u6709\u4F18\u52BF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a=8

# \u4E0B\u9762\u6240\u6709\u8FD9\u4E9B\u6BD4\u8F83\u7684\u7ED3\u679C\u90FD\u5E94\u8BE5\u662F\u76F8\u7B49\u7684
test &quot;$a&quot; -lt 16 &amp;&amp; echo &quot;yes, $a &lt; 16&quot;         # &quot;and list&quot;
/bin/test &quot;$a&quot; -lt 16 &amp;&amp; echo &quot;yes, $a &lt; 16&quot; 
[ &quot;$a&quot; -lt 16 ] &amp;&amp; echo &quot;yes, $a &lt; 16&quot; 
[[ $a -lt 16 ]] &amp;&amp; echo &quot;yes, $a &lt; 16&quot;          # \u4E3A\u8868\u8FBE\u5F0F\u6DFB\u52A0
(( a &lt; 16 )) &amp;&amp; echo &quot;yes, $a &lt; 16&quot;             # [[ ]]\u548C(( ))\u5E76\u4E0D\u662F\u5FC5\u987B\u7684

city=&quot;New York&quot;
# \u4E0B\u9762\u8FD9\u4E9B\u7ED3\u679C\u4E5F\u662F\u76F8\u7B49\u7684
test &quot;$city&quot; \\&lt; Paris &amp;&amp; echo &quot;Yes, Paris is greater than $city&quot;
                                  # ASCII\u5B57\u7B26\u6BD4\u8F83
/bin/test &quot;$city&quot; \\&lt; Paris &amp;&amp; echo &quot;Yes, Paris is greater than $city&quot; 
[ &quot;$city&quot; \\&lt; Paris ] &amp;&amp; echo &quot;Yes, Paris is greater than $city&quot; 
[[ $city &lt; Paris ]] &amp;&amp; echo &quot;Yes, Paris is greater than $city&quot;
                                  # \u5E76\u4E0D\u9700\u8981\u4E3A$city\u53D8\u91CF\u52A0\u5F15\u53F7\u3002

# \u5411S.C.\u81F4\u8C22
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,3);function t(r,l){return e}var p=a(n,[["render",t],["__file","36_3_tests_and_comparisons_alternatives.html.vue"]]);export{p as default};
