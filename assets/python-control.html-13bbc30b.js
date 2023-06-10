import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-f536079c.js";const p={},t=e(`<h1 id="_2-2-程序控制" tabindex="-1"><a class="header-anchor" href="#_2-2-程序控制" aria-hidden="true">#</a> 2.2 程序控制</h1><ul><li>顺序 <ul><li>按照先后顺序一条条执行 例如，先洗手，再吃饭，再洗碗</li></ul></li><li>分支 <ul><li>根据不同的情况判断，条件满足执行某条件下的语句 例如，先洗手，如果饭没有做好，玩游戏；如果饭做好了，就吃饭；如果饭都没有做，叫外卖</li></ul></li><li>循环 <ul><li>条件满足就反复执行，不满足就不执行或不再执行 例如，先洗手，看饭好了没有，没有好，一会来看一次是否好了，一会儿来看一次，直到饭 好了，才可是吃饭。这里循环的条件是饭没有好，饭没有好，就循环的来看饭好了没有</li></ul></li></ul><h2 id="单分支" tabindex="-1"><a class="header-anchor" href="#单分支" aria-hidden="true">#</a> 单分支</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> condition<span class="token punctuation">:</span>
    代码块
    

<span class="token keyword">if</span> <span class="token number">1</span><span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">:</span> <span class="token comment"># if True:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;1 less than 2&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 代码块</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>condition 必须是一个 bool 类型，这个地方有一个隐式转换 bool(condition) ，相当于 False 等价</li><li>if 语句这行最后，会有一个冒号，冒号之后如果有多条语句的代码块，需要另起一行，并缩进 <ul><li>if、for、def、class等关键字后面都可以跟代码块</li><li>这些关键后面，如果有一条语句，也可以跟在这一行后面。例如 <code>if 1&gt;2: pass</code></li></ul></li></ul><h2 id="多分支" tabindex="-1"><a class="header-anchor" href="#多分支" aria-hidden="true">#</a> 多分支</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> condition1<span class="token punctuation">:</span>
    代码块<span class="token number">1</span>
<span class="token keyword">elif</span> condition2<span class="token punctuation">:</span>
    代码块<span class="token number">2</span>
<span class="token keyword">elif</span> condition3<span class="token punctuation">:</span>
    代码块<span class="token number">3</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    代码块
    

   
a <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">if</span> a<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;negative&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> a<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token comment"># 相当于 a &gt;= 0</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;zero&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span> <span class="token comment"># 相当于 a &gt; 0</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;positive&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>多分支结构，只要有一个分支被执行，其他分支都不会被执行</li><li>前一个条件被测试过，下一个条件相当于隐含着这个条件</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 嵌套</span>
a <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;zero&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;negative&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;positive&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h2><p>while循环多用于死循环，或者不明确知道循环次数的场景</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> cond<span class="token punctuation">:</span>
    block

    
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span> <span class="token comment"># 死循环</span>
    <span class="token keyword">pass</span>

a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">while</span> a<span class="token punctuation">:</span> <span class="token comment"># 条件满足则进入循环</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    a <span class="token operator">-=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-语句" tabindex="-1"><a class="header-anchor" href="#for-语句" aria-hidden="true">#</a> for 语句</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> element <span class="token keyword">in</span> iterable<span class="token punctuation">:</span>
    block
   
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>内建函数</th><th>函数签名</th><th>说明</th></tr></thead><tbody><tr><td>range</td><td>range(stop)<br>range(start, stop, [step])</td><td>返回惰性的对象<br>可以生成一个序列，遍历它就可以得到这个序列的一个个元素<br>前包后不包</td></tr></tbody></table><h2 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h2><p>跳过当前循环的当次循环，继续下一次循环</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span> <span class="token keyword">continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h2><p>结束当前循环</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 计算1000以内的被7整除的前20个正整数</span>
count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	count <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token keyword">if</span> count <span class="token operator">&gt;=</span> <span class="token number">20</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
		<span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结</p><ul><li>continue 和 break 是循环的控制语句，只影响当前循环，包括 while、for 循环</li><li>如果循环嵌套， continue 和 break 也只影响语句所在的那一层循环</li><li>continue 和 break 只影响循环，所以<code>if cond: break</code>不是跳出 if，而是终止 if 外的 break 所在的循环</li><li>分支和循环结构可以嵌套使用，可以嵌套多层</li></ul><h2 id="else-字句" tabindex="-1"><a class="header-anchor" href="#else-字句" aria-hidden="true">#</a> else 字句</h2><p>如果循环正常结束，else子句会被执行，即使是可迭代对象没有什么元素可迭代</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 可迭代对象没有迭代</span>
    <span class="token keyword">pass</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span>
    
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">break</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span>
    
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">continue</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有上例可知，一般情况下，循环正常执行，只要当前循环不是被break打断的，就可以执行else子句。 哪怕是range(0)也可以执行else子句。</p><h2 id="三元表达式" tabindex="-1"><a class="header-anchor" href="#三元表达式" aria-hidden="true">#</a> 三元表达式</h2><p>在Python中，也有类似C语言的三目运算符构成的表达式，但python中的三元表达式不支持复杂的语句</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>真值表达式 <span class="token keyword">if</span> 条件表达式 <span class="token keyword">else</span> 假值表达式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>三元表达式比较适合简化非常简单的if-else语句</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 判断用户的输入的值，如果为空，输出&quot;empty&quot;，否则输出该值</span>

value <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> value<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;empty&#39;</span><span class="token punctuation">)</span>
   
value <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>value <span class="token keyword">if</span> value <span class="token keyword">else</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),i=[t];function l(o,c){return s(),a("div",null,i)}const r=n(p,[["render",l],["__file","python-control.html.vue"]]);export{r as default};
