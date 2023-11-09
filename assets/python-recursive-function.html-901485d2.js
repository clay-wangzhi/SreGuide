import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,a}from"./app-92a149ab.js";const i={},t=a(`<h1 id="_4-4-递归函数" tabindex="-1"><a class="header-anchor" href="#_4-4-递归函数" aria-hidden="true">#</a> 4.4 递归函数</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。</p><p>举个例子，我们来计算阶乘<code>n! = 1 x 2 x 3 x ... x n</code>，用函数<code>fact(n)</code>表示，可以看出：</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210622160651079.png" alt="image-20210622160651079"></p><p>所以，<code>fact(n)</code>可以表示为<code>n x fact(n-1)</code>，只有n=1时需要特殊处理。</p><p>于是，<code>fact(n)</code>用递归的方式写出来就是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def fact(n):
    if n==1:
        return 1
    return n * fact(n - 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面就是一个递归函数。可以试试：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; fact(1)
1
&gt;&gt;&gt; fact(5)
120
&gt;&gt;&gt; fact(100)
93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们计算<code>fact(5)</code>，可以根据函数定义看到计算过程如下：</p><div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>===&gt; fact(5)
===&gt; 5 * fact(4)
===&gt; 5 * (4 * fact(3))
===&gt; 5 * (4 * (3 * fact(2)))
===&gt; 5 * (4 * (3 * (2 * fact(1))))
===&gt; 5 * (4 * (3 * (2 * 1)))
===&gt; 5 * (4 * (3 * 2))
===&gt; 5 * (4 * 6)
===&gt; 5 * 24
===&gt; 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归函数的优点是定义简单，逻辑清晰。理论上，所有的递归函数都可以写成循环的方式，但循环的逻辑不如递归清晰。</p><p>使用递归函数需要注意防止栈溢出。在计算机中，函数调用是通过栈（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。可以试试<code>fact(1000)</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; fact(1000)
Traceback (most recent call last):
  File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;
  File &quot;&lt;stdin&gt;&quot;, line 4, in fact
  ...
  File &quot;&lt;stdin&gt;&quot;, line 4, in fact
RuntimeError: maximum recursion depth exceeded in comparison
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决递归调用栈溢出的方法是通过<strong>尾递归</strong>优化，事实上尾递归和循环的效果是一样的，所以，把循环看成是一种特殊的尾递归函数也是可以的。</p><p>尾递归是指，在函数返回的时候，调用自身本身，并且，return语句不能包含表达式。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。</p><p>上面的<code>fact(n)</code>函数由于<code>return n * fact(n - 1)</code>引入了乘法表达式，所以就不是尾递归了。要改成尾递归方式，需要多一点代码，主要是要把每一步的乘积传入到递归函数中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def fact(n):
    return fact_iter(n, 1)

def fact_iter(num, product):
    if num == 1:
        return product
    return fact_iter(num - 1, num * product)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>return fact_iter(num - 1, num * product)</code>仅返回递归函数本身，<code>num - 1</code>和<code>num * product</code>在函数调用前就会被计算，不影响函数调用。</p><p><code>fact(5)</code>对应的<code>fact_iter(5, 1)</code> 的调用如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>===&gt; fact_iter(5, 1)
===&gt; fact_iter(4, 5)
===&gt; fact_iter(3, 20)
===&gt; fact_iter(2, 60)
===&gt; fact_iter(1, 120)
===&gt; 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尾递归调用时，如果做了优化，栈不会增长，因此，无论多少次调用也不会导致栈溢出。</p><p>遗憾的是，大多数编程语言没有针对尾递归做优化，Python解释器也没有做优化，所以，即使把上面的<code>fact(n)</code>函数改成尾递归方式，也会导致栈溢出。</p><h2 id="输出斐波那契数列" tabindex="-1"><a class="header-anchor" href="#输出斐波那契数列" aria-hidden="true">#</a> 输出斐波那契数列</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">recur_fibo</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;递归函数
   输出斐波那契数列
   &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> n
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>recur_fibo<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> recur_fibo<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 获取用户输入</span>
nterms <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;您要输出几项? &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>nterms<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>recur_fibo<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>使用递归函数的优点是逻辑简单清晰，缺点是过深的调用会导致栈溢出。</p><p>针对尾递归优化的语言可以通过尾递归防止栈溢出。尾递归事实上和循环是等价的，没有循环语句的编程语言只能通过尾递归实现循环。</p><p>Python标准的解释器没有针对尾递归做优化，任何递归函数都存在栈溢出的问题。</p>`,30),c=[t];function d(l,r){return e(),s("div",null,c)}const p=n(i,[["render",d],["__file","python-recursive-function.html.vue"]]);export{p as default};
