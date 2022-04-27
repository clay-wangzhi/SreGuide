import{_ as n,e as s}from"./app.ac0f71d5.js";const a={},e=s(`<h1 id="_4-4-\u9012\u5F52\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-4-\u9012\u5F52\u51FD\u6570" aria-hidden="true">#</a> 4.4 \u9012\u5F52\u51FD\u6570</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u5728\u51FD\u6570\u5185\u90E8\uFF0C\u53EF\u4EE5\u8C03\u7528\u5176\u4ED6\u51FD\u6570\u3002\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u5728\u5185\u90E8\u8C03\u7528\u81EA\u8EAB\u672C\u8EAB\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5C31\u662F\u9012\u5F52\u51FD\u6570\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u6765\u8BA1\u7B97\u9636\u4E58<code>n! = 1 x 2 x 3 x ... x n</code>\uFF0C\u7528\u51FD\u6570<code>fact(n)</code>\u8868\u793A\uFF0C\u53EF\u4EE5\u770B\u51FA\uFF1A</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210622160651079.png" alt="image-20210622160651079" loading="lazy"></p><p>\u6240\u4EE5\uFF0C<code>fact(n)</code>\u53EF\u4EE5\u8868\u793A\u4E3A<code>n x fact(n-1)</code>\uFF0C\u53EA\u6709n=1\u65F6\u9700\u8981\u7279\u6B8A\u5904\u7406\u3002</p><p>\u4E8E\u662F\uFF0C<code>fact(n)</code>\u7528\u9012\u5F52\u7684\u65B9\u5F0F\u5199\u51FA\u6765\u5C31\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def fact(n):
    if n==1:
        return 1
    return n * fact(n - 1)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u9762\u5C31\u662F\u4E00\u4E2A\u9012\u5F52\u51FD\u6570\u3002\u53EF\u4EE5\u8BD5\u8BD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt;&gt;&gt; fact(1)
1
&gt;&gt;&gt; fact(5)
120
&gt;&gt;&gt; fact(100)
93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5982\u679C\u6211\u4EEC\u8BA1\u7B97<code>fact(5)</code>\uFF0C\u53EF\u4EE5\u6839\u636E\u51FD\u6570\u5B9A\u4E49\u770B\u5230\u8BA1\u7B97\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><div class="language-ascii ext-ascii line-numbers-mode"><pre class="language-ascii"><code>===&gt; fact(5)
===&gt; 5 * fact(4)
===&gt; 5 * (4 * fact(3))
===&gt; 5 * (4 * (3 * fact(2)))
===&gt; 5 * (4 * (3 * (2 * fact(1))))
===&gt; 5 * (4 * (3 * (2 * 1)))
===&gt; 5 * (4 * (3 * 2))
===&gt; 5 * (4 * 6)
===&gt; 5 * 24
===&gt; 120
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u9012\u5F52\u51FD\u6570\u7684\u4F18\u70B9\u662F\u5B9A\u4E49\u7B80\u5355\uFF0C\u903B\u8F91\u6E05\u6670\u3002\u7406\u8BBA\u4E0A\uFF0C\u6240\u6709\u7684\u9012\u5F52\u51FD\u6570\u90FD\u53EF\u4EE5\u5199\u6210\u5FAA\u73AF\u7684\u65B9\u5F0F\uFF0C\u4F46\u5FAA\u73AF\u7684\u903B\u8F91\u4E0D\u5982\u9012\u5F52\u6E05\u6670\u3002</p><p>\u4F7F\u7528\u9012\u5F52\u51FD\u6570\u9700\u8981\u6CE8\u610F\u9632\u6B62\u6808\u6EA2\u51FA\u3002\u5728\u8BA1\u7B97\u673A\u4E2D\uFF0C\u51FD\u6570\u8C03\u7528\u662F\u901A\u8FC7\u6808\uFF08stack\uFF09\u8FD9\u79CD\u6570\u636E\u7ED3\u6784\u5B9E\u73B0\u7684\uFF0C\u6BCF\u5F53\u8FDB\u5165\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\uFF0C\u6808\u5C31\u4F1A\u52A0\u4E00\u5C42\u6808\u5E27\uFF0C\u6BCF\u5F53\u51FD\u6570\u8FD4\u56DE\uFF0C\u6808\u5C31\u4F1A\u51CF\u4E00\u5C42\u6808\u5E27\u3002\u7531\u4E8E\u6808\u7684\u5927\u5C0F\u4E0D\u662F\u65E0\u9650\u7684\uFF0C\u6240\u4EE5\uFF0C\u9012\u5F52\u8C03\u7528\u7684\u6B21\u6570\u8FC7\u591A\uFF0C\u4F1A\u5BFC\u81F4\u6808\u6EA2\u51FA\u3002\u53EF\u4EE5\u8BD5\u8BD5<code>fact(1000)</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt;&gt;&gt; fact(1000)
Traceback (most recent call last):
  File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;
  File &quot;&lt;stdin&gt;&quot;, line 4, in fact
  ...
  File &quot;&lt;stdin&gt;&quot;, line 4, in fact
RuntimeError: maximum recursion depth exceeded in comparison
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u89E3\u51B3\u9012\u5F52\u8C03\u7528\u6808\u6EA2\u51FA\u7684\u65B9\u6CD5\u662F\u901A\u8FC7<strong>\u5C3E\u9012\u5F52</strong>\u4F18\u5316\uFF0C\u4E8B\u5B9E\u4E0A\u5C3E\u9012\u5F52\u548C\u5FAA\u73AF\u7684\u6548\u679C\u662F\u4E00\u6837\u7684\uFF0C\u6240\u4EE5\uFF0C\u628A\u5FAA\u73AF\u770B\u6210\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5C3E\u9012\u5F52\u51FD\u6570\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p><p>\u5C3E\u9012\u5F52\u662F\u6307\uFF0C\u5728\u51FD\u6570\u8FD4\u56DE\u7684\u65F6\u5019\uFF0C\u8C03\u7528\u81EA\u8EAB\u672C\u8EAB\uFF0C\u5E76\u4E14\uFF0Creturn\u8BED\u53E5\u4E0D\u80FD\u5305\u542B\u8868\u8FBE\u5F0F\u3002\u8FD9\u6837\uFF0C\u7F16\u8BD1\u5668\u6216\u8005\u89E3\u91CA\u5668\u5C31\u53EF\u4EE5\u628A\u5C3E\u9012\u5F52\u505A\u4F18\u5316\uFF0C\u4F7F\u9012\u5F52\u672C\u8EAB\u65E0\u8BBA\u8C03\u7528\u591A\u5C11\u6B21\uFF0C\u90FD\u53EA\u5360\u7528\u4E00\u4E2A\u6808\u5E27\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u6808\u6EA2\u51FA\u7684\u60C5\u51B5\u3002</p><p>\u4E0A\u9762\u7684<code>fact(n)</code>\u51FD\u6570\u7531\u4E8E<code>return n * fact(n - 1)</code>\u5F15\u5165\u4E86\u4E58\u6CD5\u8868\u8FBE\u5F0F\uFF0C\u6240\u4EE5\u5C31\u4E0D\u662F\u5C3E\u9012\u5F52\u4E86\u3002\u8981\u6539\u6210\u5C3E\u9012\u5F52\u65B9\u5F0F\uFF0C\u9700\u8981\u591A\u4E00\u70B9\u4EE3\u7801\uFF0C\u4E3B\u8981\u662F\u8981\u628A\u6BCF\u4E00\u6B65\u7684\u4E58\u79EF\u4F20\u5165\u5230\u9012\u5F52\u51FD\u6570\u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def fact(n):
    return fact_iter(n, 1)

def fact_iter(num, product):
    if num == 1:
        return product
    return fact_iter(num - 1, num * product)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>return fact_iter(num - 1, num * product)</code>\u4EC5\u8FD4\u56DE\u9012\u5F52\u51FD\u6570\u672C\u8EAB\uFF0C<code>num - 1</code>\u548C<code>num * product</code>\u5728\u51FD\u6570\u8C03\u7528\u524D\u5C31\u4F1A\u88AB\u8BA1\u7B97\uFF0C\u4E0D\u5F71\u54CD\u51FD\u6570\u8C03\u7528\u3002</p><p><code>fact(5)</code>\u5BF9\u5E94\u7684<code>fact_iter(5, 1)</code> \u7684\u8C03\u7528\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>===&gt; fact_iter(5, 1)
===&gt; fact_iter(4, 5)
===&gt; fact_iter(3, 20)
===&gt; fact_iter(2, 60)
===&gt; fact_iter(1, 120)
===&gt; 120
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5C3E\u9012\u5F52\u8C03\u7528\u65F6\uFF0C\u5982\u679C\u505A\u4E86\u4F18\u5316\uFF0C\u6808\u4E0D\u4F1A\u589E\u957F\uFF0C\u56E0\u6B64\uFF0C\u65E0\u8BBA\u591A\u5C11\u6B21\u8C03\u7528\u4E5F\u4E0D\u4F1A\u5BFC\u81F4\u6808\u6EA2\u51FA\u3002</p><p>\u9057\u61BE\u7684\u662F\uFF0C\u5927\u591A\u6570\u7F16\u7A0B\u8BED\u8A00\u6CA1\u6709\u9488\u5BF9\u5C3E\u9012\u5F52\u505A\u4F18\u5316\uFF0CPython\u89E3\u91CA\u5668\u4E5F\u6CA1\u6709\u505A\u4F18\u5316\uFF0C\u6240\u4EE5\uFF0C\u5373\u4F7F\u628A\u4E0A\u9762\u7684<code>fact(n)</code>\u51FD\u6570\u6539\u6210\u5C3E\u9012\u5F52\u65B9\u5F0F\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u6808\u6EA2\u51FA\u3002</p><h2 id="\u8F93\u51FA\u6590\u6CE2\u90A3\u5951\u6570\u5217" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u6590\u6CE2\u90A3\u5951\u6570\u5217" aria-hidden="true">#</a> \u8F93\u51FA\u6590\u6CE2\u90A3\u5951\u6570\u5217</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">recur_fibo</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u9012\u5F52\u51FD\u6570
   \u8F93\u51FA\u6590\u6CE2\u90A3\u5951\u6570\u5217
   &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> n
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>recur_fibo<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> recur_fibo<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># \u83B7\u53D6\u7528\u6237\u8F93\u5165</span>
nterms <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u60A8\u8981\u8F93\u51FA\u51E0\u9879? &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>nterms<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>recur_fibo<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u4F7F\u7528\u9012\u5F52\u51FD\u6570\u7684\u4F18\u70B9\u662F\u903B\u8F91\u7B80\u5355\u6E05\u6670\uFF0C\u7F3A\u70B9\u662F\u8FC7\u6DF1\u7684\u8C03\u7528\u4F1A\u5BFC\u81F4\u6808\u6EA2\u51FA\u3002</p><p>\u9488\u5BF9\u5C3E\u9012\u5F52\u4F18\u5316\u7684\u8BED\u8A00\u53EF\u4EE5\u901A\u8FC7\u5C3E\u9012\u5F52\u9632\u6B62\u6808\u6EA2\u51FA\u3002\u5C3E\u9012\u5F52\u4E8B\u5B9E\u4E0A\u548C\u5FAA\u73AF\u662F\u7B49\u4EF7\u7684\uFF0C\u6CA1\u6709\u5FAA\u73AF\u8BED\u53E5\u7684\u7F16\u7A0B\u8BED\u8A00\u53EA\u80FD\u901A\u8FC7\u5C3E\u9012\u5F52\u5B9E\u73B0\u5FAA\u73AF\u3002</p><p>Python\u6807\u51C6\u7684\u89E3\u91CA\u5668\u6CA1\u6709\u9488\u5BF9\u5C3E\u9012\u5F52\u505A\u4F18\u5316\uFF0C\u4EFB\u4F55\u9012\u5F52\u51FD\u6570\u90FD\u5B58\u5728\u6808\u6EA2\u51FA\u7684\u95EE\u9898\u3002</p>`,30);function t(p,r){return e}var l=n(a,[["render",t],["__file","python-recursive-function.html.vue"]]);export{l as default};
