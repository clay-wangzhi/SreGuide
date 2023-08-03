import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,a as d}from"./app-95912f92.js";const i={},n=d(`<h1 id="_8-4-运算符优先级" tabindex="-1"><a class="header-anchor" href="#_8-4-运算符优先级" aria-hidden="true">#</a> 8.4 运算符优先级</h1><p>在脚本中，运算执行的顺序被称为<em>优先级</em>: 高优先级的操作会比低优先级的操作先执行。<a href="Precedence(%E4%BC%98%E5%85%88%E7%BA%A7)%EF%BC%8C%E6%A0%B9%E6%8D%AE%E4%B8%8A%E4%B8%8B%E6%96%87%EF%BC%8C%E4%B8%8Epriority%E5%90%AB%E4%B9%89%E7%9B%B8%E8%BF%91%E3%80%82">^1</a></p><p><strong>表 8-1. 运算符优先级(从高到低)</strong></p><table><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">含义</th><th style="text-align:left;">注解</th></tr></thead><tbody><tr><td style="text-align:left;">var++ var--</td><td style="text-align:left;">后缀自增/自减</td><td style="text-align:left;">C风格运算符</td></tr><tr><td style="text-align:left;">++var --var</td><td style="text-align:left;">前缀自增/自减</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">! ~</td><td style="text-align:left;">按位取反/逻辑取反</td><td style="text-align:left;">对每一比特位取反/对逻辑判断的结果取反</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">**</td><td style="text-align:left;">幂运算</td><td style="text-align:left;">算数运算符</td></tr><tr><td style="text-align:left;">* / %</td><td style="text-align:left;">乘, 除, 取余</td><td style="text-align:left;">算数运算符</td></tr><tr><td style="text-align:left;">+ -</td><td style="text-align:left;">加, 减</td><td style="text-align:left;">算数运算符</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">&lt;&lt; &gt;&gt;</td><td style="text-align:left;">左移, 右移</td><td style="text-align:left;">比特位运算符</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-z -n</td><td style="text-align:left;">一元比较</td><td style="text-align:left;">字符串是/否为空</td></tr><tr><td style="text-align:left;">-e -f -t -x, etc</td><td style="text-align:left;">一元比较</td><td style="text-align:left;">文件测试</td></tr><tr><td style="text-align:left;">-lt -gt -le -ge &lt;= &gt;=</td><td style="text-align:left;">复合比较</td><td style="text-align:left;">字符串/整数比较</td></tr><tr><td style="text-align:left;">-nt -ot -ef</td><td style="text-align:left;">复合比较</td><td style="text-align:left;">文件测试</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">&amp;</td><td style="text-align:left;">AND(按位与)</td><td style="text-align:left;">按位与操作</td></tr><tr><td style="text-align:left;">^</td><td style="text-align:left;">XOR(按位异或)</td><td style="text-align:left;">按位异或操作</td></tr><tr><td style="text-align:left;">|</td><td style="text-align:left;">OR(按位或)</td><td style="text-align:left;">按位或操作</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">&amp;&amp; -a</td><td style="text-align:left;">AND(逻辑与)</td><td style="text-align:left;">逻辑与, 复合比较</td></tr><tr><td style="text-align:left;">|| -o</td><td style="text-align:left;">OR(逻辑或)</td><td style="text-align:left;">逻辑或, 复合比较</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">? :</td><td style="text-align:left;">if/else三目运算符</td><td style="text-align:left;">C风格运算符</td></tr><tr><td style="text-align:left;">=</td><td style="text-align:left;">赋值</td><td style="text-align:left;">不要与test中的等号混淆</td></tr><tr><td style="text-align:left;">*= /= %= += -= &lt;&lt;= &gt;&gt;= &amp;=</td><td style="text-align:left;">赋值运算</td><td style="text-align:left;">先运算后赋值</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">,</td><td style="text-align:left;">逗号运算符</td><td style="text-align:left;">连接一系列语句</td></tr></tbody></table><p>实际上，你只需要记住以下规则就可以了:</p><ul><li>先乘除取余，后加减，与算数运算相似</li><li>复合逻辑运算符，&amp;&amp;, ||, -a, -o 优先级较低</li><li>优先级相同的操作按<em>从左至右</em>顺序求值</li></ul><p>现在，让我们利用运算符优先级的知识来分析一下<em>Fedora Core Linux</em>中的<code>/etc/init.d/functions</code>文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while [ -n &quot;$remaining&quot; -a &quot;$retry&quot; -gt 0 ]; do

# 初看之下很恐怖...


# 分开来分析
while [ -n &quot;$remaining&quot; -a &quot;$retry&quot; -gt 0 ]; do
#       --condition 1-- ^^ --condition 2-

#  如果变量&quot;$remaining&quot; 长度不为0
#+      并且AND (-a)
#+ 变量 &quot;$retry&quot; 大于0
#+ 那么
#+ [ 方括号表达式 ] 返回成功(0)
#+ while-loop 开始迭代执行语句。
#  ==============================================================
#  &quot;condition 1&quot; 和 &quot;condition 2&quot; 在 AND之前执行，为什么？
#  因为AND(-a)优先级比-n,-gt来得低，逻辑与会在最后求值。
#################################################################

if [ -f /etc/sysconfig/i18n -a -z &quot;\${NOLOCALE:-}&quot; ] ; then


# 同样，分开来分析
if [ -f /etc/sysconfig/i18n -a -z &quot;\${NOLOCALE:-}&quot; ] ; then
#    --condition 1--------- ^^ --condition 2-----

#  如果文件&quot;/etc/sysconfig/i18n&quot; 存在
#+      并且AND (-a)
#+ 变量 $NOLOCALE 长度不为0
#+ 那么
#+ [ 方括号表达式 ] 返回成功(0)
#+ 执行接下来的语句。
#
#  和之前的情况一样，逻辑与AND(-a)最后求值。
#  因为在方括号测试结构中，逻辑运算的优先级是最低的。
#  ==============================================================
#  注意:
#  \${NOLOCALE:-} 是一个参数扩展式，看起来有点多余。
#  但是, 如果 $NOLOCALE 没有提前声明, 它会被设成null，
#  在某些情况下，这会有点问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/tip.gif" alt="tip">为了避免在复杂比较运算中的错误，可以把运算分散到几个括号结构中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if [ &quot;$v1&quot; -gt &quot;$v2&quot;  -o  &quot;$v1&quot; -lt &quot;$v2&quot;  -a  -e &quot;$filename&quot; ]
# 这样写不清晰...

if [[ &quot;$v1&quot; -gt &quot;$v2&quot; ]] || [[ &quot;$v1&quot; -lt &quot;$v2&quot; ]] &amp;&amp; [[ -e &quot;$filename&quot; ]]
# 好多了 -- 把逻辑判断分散到多个组之中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,9),s=[n];function a(r,g){return e(),l("div",null,s)}const u=t(i,[["render",a],["__file","08_4_operator_precedence.html.vue"]]);export{u as default};
