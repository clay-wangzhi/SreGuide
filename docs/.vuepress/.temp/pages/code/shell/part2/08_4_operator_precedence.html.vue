<template><h1 id="_8-4-运算符优先级" tabindex="-1"><a class="header-anchor" href="#_8-4-运算符优先级" aria-hidden="true">#</a> 8.4 运算符优先级</h1>
<p>在脚本中，运算执行的顺序被称为<em>优先级</em>: 高优先级的操作会比低优先级的操作先执行。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<p><strong>表 8-1. 运算符优先级(从高到低)</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">含义</th>
<th style="text-align:left">注解</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">var++ var--</td>
<td style="text-align:left">后缀自增/自减</td>
<td style="text-align:left">C风格运算符</td>
</tr>
<tr>
<td style="text-align:left">++var --var</td>
<td style="text-align:left">前缀自增/自减</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">! ~</td>
<td style="text-align:left">按位取反/逻辑取反</td>
<td style="text-align:left">对每一比特位取反/对逻辑判断的结果取反</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">**</td>
<td style="text-align:left">幂运算</td>
<td style="text-align:left">算数运算符</td>
</tr>
<tr>
<td style="text-align:left">* / %</td>
<td style="text-align:left">乘, 除, 取余</td>
<td style="text-align:left">算数运算符</td>
</tr>
<tr>
<td style="text-align:left">+ -</td>
<td style="text-align:left">加, 减</td>
<td style="text-align:left">算数运算符</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">&lt;&lt; &gt;&gt;</td>
<td style="text-align:left">左移, 右移</td>
<td style="text-align:left">比特位运算符</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">-z -n</td>
<td style="text-align:left">一元比较</td>
<td style="text-align:left">字符串是/否为空</td>
</tr>
<tr>
<td style="text-align:left">-e -f -t -x, etc</td>
<td style="text-align:left">一元比较</td>
<td style="text-align:left">文件测试</td>
</tr>
<tr>
<td style="text-align:left">-lt -gt -le -ge &lt;=  &gt;=</td>
<td style="text-align:left">复合比较</td>
<td style="text-align:left">字符串/整数比较</td>
</tr>
<tr>
<td style="text-align:left">-nt -ot -ef</td>
<td style="text-align:left">复合比较</td>
<td style="text-align:left">文件测试</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">&amp;</td>
<td style="text-align:left">AND(按位与)</td>
<td style="text-align:left">按位与操作</td>
</tr>
<tr>
<td style="text-align:left">^</td>
<td style="text-align:left">XOR(按位异或)</td>
<td style="text-align:left">按位异或操作</td>
</tr>
<tr>
<td style="text-align:left">|</td>
<td style="text-align:left">OR(按位或)</td>
<td style="text-align:left">按位或操作</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">&amp;&amp; -a</td>
<td style="text-align:left">AND(逻辑与)</td>
<td style="text-align:left">逻辑与, 复合比较</td>
</tr>
<tr>
<td style="text-align:left">|| -o</td>
<td style="text-align:left">OR(逻辑或)</td>
<td style="text-align:left">逻辑或, 复合比较</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">? :</td>
<td style="text-align:left">if/else三目运算符</td>
<td style="text-align:left">C风格运算符</td>
</tr>
<tr>
<td style="text-align:left">=</td>
<td style="text-align:left">赋值</td>
<td style="text-align:left">不要与test中的等号混淆</td>
</tr>
<tr>
<td style="text-align:left">*= /= %= += -= &lt;&lt;= &gt;&gt;= &amp;=</td>
<td style="text-align:left">赋值运算</td>
<td style="text-align:left">先运算后赋值</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">,</td>
<td style="text-align:left">逗号运算符</td>
<td style="text-align:left">连接一系列语句</td>
</tr>
</tbody>
</table>
<p>实际上，你只需要记住以下规则就可以了:</p>
<ul>
<li>先乘除取余，后加减，与算数运算相似</li>
<li>复合逻辑运算符，&amp;&amp;, ||, -a, -o 优先级较低</li>
<li>优先级相同的操作按<em>从左至右</em>顺序求值</li>
</ul>
<p>现在，让我们利用运算符优先级的知识来分析一下<em>Fedora Core Linux</em>中的<code>/etc/init.d/functions</code>文件。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>while [ -n "$remaining" -a "$retry" -gt 0 ]; do

# 初看之下很恐怖...


# 分开来分析
while [ -n "$remaining" -a "$retry" -gt 0 ]; do
#       --condition 1-- ^^ --condition 2-

#  如果变量"$remaining" 长度不为0
#+      并且AND (-a)
#+ 变量 "$retry" 大于0
#+ 那么
#+ [ 方括号表达式 ] 返回成功(0)
#+ while-loop 开始迭代执行语句。
#  ==============================================================
#  "condition 1" 和 "condition 2" 在 AND之前执行，为什么？
#  因为AND(-a)优先级比-n,-gt来得低，逻辑与会在最后求值。
#################################################################

if [ -f /etc/sysconfig/i18n -a -z "${NOLOCALE:-}" ] ; then


# 同样，分开来分析
if [ -f /etc/sysconfig/i18n -a -z "${NOLOCALE:-}" ] ; then
#    --condition 1--------- ^^ --condition 2-----

#  如果文件"/etc/sysconfig/i18n" 存在
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
#  ${NOLOCALE:-} 是一个参数扩展式，看起来有点多余。
#  但是, 如果 $NOLOCALE 没有提前声明, 它会被设成null，
#  在某些情况下，这会有点问题。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/tip.gif" alt="tip" loading="lazy">为了避免在复杂比较运算中的错误，可以把运算分散到几个括号结构中。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>if [ "$v1" -gt "$v2"  -o  "$v1" -lt "$v2"  -a  -e "$filename" ]
# 这样写不清晰...

if [[ "$v1" -gt "$v2" ]] || [[ "$v1" -lt "$v2" ]] &amp;&amp; [[ -e "$filename" ]]
# 好多了 -- 把逻辑判断分散到多个组之中
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>Precedence(优先级)，根据上下文，与priority含义相近。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
