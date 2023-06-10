import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-1a5afd71.js";const t={},p=e(`<h1 id="_3-4-迭代器" tabindex="-1"><a class="header-anchor" href="#_3-4-迭代器" aria-hidden="true">#</a> 3.4 迭代器</h1><p>我们已经知道，可以直接作用于<code>for</code>循环的数据类型有以下几种：</p><p>一类是集合数据类型，如<code>list</code>、<code>tuple</code>、<code>dict</code>、<code>set</code>、<code>str</code>等；</p><p>一类是<code>generator</code>，包括生成器和带<code>yield</code>的generator function。</p><p>这些可以直接作用于<code>for</code>循环的对象统称为可迭代对象：<code>Iterable</code>。</p><p>可以使用<code>isinstance()</code>判断一个对象是否是<code>Iterable</code>对象：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而生成器不但可以作用于<code>for</code>循环，还可以被<code>next()</code>函数不断调用并返回下一个值，直到最后抛出<code>StopIteration</code>错误表示无法继续返回下一个值了。</p><p>可以被<code>next()</code>函数调用并不断返回下一个值的对象称为迭代器：<code>Iterator</code>。</p><p>可以使用<code>isinstance()</code>判断一个对象是否是<code>Iterator</code>对象：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterator
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成器都是<code>Iterator</code>对象，但<code>list</code>、<code>dict</code>、<code>str</code>虽然是<code>Iterable</code>，却不是<code>Iterator</code>。</p><p>把<code>list</code>、<code>dict</code>、<code>str</code>等<code>Iterable</code>变成<code>Iterator</code>可以使用<code>iter()</code>函数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能会问，为什么<code>list</code>、<code>dict</code>、<code>str</code>等数据类型不是<code>Iterator</code>？</p><p>这是因为Python的<code>Iterator</code>对象表示的是一个数据流，Iterator对象可以被<code>next()</code>函数调用并不断返回下一个数据，直到没有数据时抛出<code>StopIteration</code>错误。可以把这个数据流看做是一个有序序列，但我们却不能提前知道序列的长度，只能不断通过<code>next()</code>函数实现按需计算下一个数据，所以<code>Iterator</code>的计算是惰性的，只有在需要返回下一个数据时它才会计算。</p><p><code>Iterator</code>甚至可以表示一个无限大的数据流，例如全体自然数。而使用list是永远不可能存储全体自然数的。</p><p><strong>小结</strong></p><p>凡是可作用于<code>for</code>循环的对象都是<code>Iterable</code>类型；</p><p>凡是可作用于<code>next()</code>函数的对象都是<code>Iterator</code>类型，它们表示一个惰性计算的序列；</p><p>集合数据类型如<code>list</code>、<code>dict</code>、<code>str</code>等是<code>Iterable</code>但不是<code>Iterator</code>，不过可以通过<code>iter()</code>函数获得一个<code>Iterator</code>对象。</p><p>Python的<code>for</code>循环本质上就是通过不断调用<code>next()</code>函数实现的，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上完全等价于：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 首先获得Iterator对象:</span>
it <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 循环:</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># 获得下一个值:</span>
        x <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span>
    <span class="token keyword">except</span> StopIteration<span class="token punctuation">:</span>
        <span class="token comment"># 遇到StopIteration就退出循环</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代器</p><ul><li>特殊的对象，一定是可迭代对象，具备可迭代对象的特征</li><li>通过 iter 方法把一个可迭代对象封装成迭代器</li><li>通过 next 方法，迭代 迭代器对象</li><li>生成器对象，就是迭代器对象。但是迭代器对象未必是生成器对象</li></ul><p>可迭代对象</p><ul><li>能够通过迭代一次次返回不同的元素的对象 <ul><li>所谓相同，不是指值是否相同，而是元素在容器中是否是同一个，例如列表中值可以重复的，[&#39;a&#39;, &#39;a&#39;]，虽然这个列表有2个元素，值一样，但是两个&#39;a&#39;是不同的元素</li></ul></li><li>可以迭代，但是未必有序，未必可索引</li><li>可迭代对象有：list、tuple、string、bytes、bytearray、range、set、dict、生成器、迭代器等</li><li>可以使用成员操作符in、not in <ul><li>对于线性数据结构，in本质上是在遍历对象，时间复杂度为O(n)</li></ul></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
it <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span> <span class="token comment"># 返回一个迭代器对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 3</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> x <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>it<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token comment">#2 5</span>
<span class="token comment">#3 7</span>
<span class="token comment">#4 9</span>

<span class="token comment"># print(next(it)) # StopIteration</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">reversed</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment"># 9 7 5 3 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","python-iterator.html.vue"]]);export{d as default};
