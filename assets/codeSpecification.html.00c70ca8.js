import{_ as n,e as s}from"./app.c279a5c9.js";const a={},e=s(`<h1 id="_1-2-python-\u4EE3\u7801\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_1-2-python-\u4EE3\u7801\u89C4\u8303" aria-hidden="true">#</a> 1.2 Python \u4EE3\u7801\u89C4\u8303</h1><blockquote><p>\u8F6C\u8F7D\u81EA\uFF1A\u8349\u6839\u5B66 Python | TwoWater</p></blockquote><h2 id="\u7B80\u660E\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u7B80\u660E\u6982\u8FF0" aria-hidden="true">#</a> \u7B80\u660E\u6982\u8FF0</h2><h3 id="\u4EE3\u7801\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u683C\u5F0F" aria-hidden="true">#</a> \u4EE3\u7801\u683C\u5F0F</h3><h4 id="\u7F29\u8FDB" tabindex="-1"><a class="header-anchor" href="#\u7F29\u8FDB" aria-hidden="true">#</a> \u7F29\u8FDB</h4><ul><li>\u7EDF\u4E00\u4F7F\u7528 4 \u4E2A\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB</li></ul><h4 id="\u884C\u5BBD" tabindex="-1"><a class="header-anchor" href="#\u884C\u5BBD" aria-hidden="true">#</a> \u884C\u5BBD</h4><p>\u6BCF\u884C\u4EE3\u7801\u5C3D\u91CF\u4E0D\u8D85\u8FC7 80 \u4E2A\u5B57\u7B26(\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\u53EF\u4EE5\u7565\u5FAE\u8D85\u8FC7 80 \uFF0C\u4F46\u6700\u957F\u4E0D\u5F97\u8D85\u8FC7 120)</p><p>\u7406\u7531\uFF1A</p><ul><li>\u8FD9\u5728\u67E5\u770B side-by-side \u7684 diff \u65F6\u5F88\u6709\u5E2E\u52A9</li><li>\u65B9\u4FBF\u5728\u63A7\u5236\u53F0\u4E0B\u67E5\u770B\u4EE3\u7801</li><li>\u592A\u957F\u53EF\u80FD\u662F\u8BBE\u8BA1\u6709\u7F3A\u9677</li></ul><h4 id="\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5F15\u53F7" aria-hidden="true">#</a> \u5F15\u53F7</h4><p>\u7B80\u5355\u8BF4\uFF0C\u81EA\u7136\u8BED\u8A00\u4F7F\u7528\u53CC\u5F15\u53F7\uFF0C\u673A\u5668\u6807\u793A\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u56E0\u6B64 <strong>\u4EE3\u7801\u91CC</strong> \u591A\u6570\u5E94\u8BE5\u4F7F\u7528 <strong>\u5355\u5F15\u53F7</strong></p><ul><li>\u81EA\u7136\u8BED\u8A00\u4F7F\u7528\u53CC\u5F15\u53F7 <code>&quot;...&quot;</code> \u4F8B\u5982\u9519\u8BEF\u4FE1\u606F\uFF1B\u5F88\u591A\u60C5\u51B5\u8FD8\u662F unicode\uFF0C\u4F7F\u7528<code>u&quot;\u4F60\u597D\u4E16\u754C&quot;</code></li><li>\u673A\u5668\u6807\u8BC6\u4F7F\u7528\u5355\u5F15\u53F7 <code>&#39;...&#39;</code> \u4F8B\u5982 dict \u91CC\u7684 key</li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u4F7F\u7528\u539F\u751F\u7684\u53CC\u5F15\u53F7 <code>r&quot;...&quot;</code></li><li>\u6587\u6863\u5B57\u7B26\u4E32 (docstring)\u4F7F\u7528\u4E09\u4E2A\u53CC\u5F15\u53F7 <code>&quot;&quot;&quot;......&quot;&quot;&quot;</code></li></ul><h4 id="\u7A7A\u884C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u884C" aria-hidden="true">#</a> \u7A7A\u884C</h4><ul><li>\u6A21\u5757\u7EA7\u51FD\u6570\u548C\u7C7B\u5B9A\u4E49\u4E4B\u95F4\u7A7A\u4E24\u884C\uFF1B</li><li>\u7C7B\u6210\u5458\u51FD\u6570\u4E4B\u95F4\u7A7A\u4E00\u884C\uFF1B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u53EF\u4EE5\u4F7F\u7528\u591A\u4E2A\u7A7A\u884C\u5206\u9694\u591A\u7EC4\u76F8\u5173\u7684\u51FD\u6570</li><li>\u51FD\u6570\u4E2D\u53EF\u4EE5\u4F7F\u7528\u7A7A\u884C\u5206\u9694\u51FA\u903B\u8F91\u76F8\u5173\u7684\u4EE3\u7801</li></ul><h3 id="import-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#import-\u8BED\u53E5" aria-hidden="true">#</a> import \u8BED\u53E5</h3><ul><li>import \u8BED\u53E5\u5E94\u8BE5\u5206\u884C\u4E66\u5199</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
<span class="token keyword">import</span> sys<span class="token punctuation">,</span>os

<span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token keyword">from</span> subprocess <span class="token keyword">import</span> Popen<span class="token punctuation">,</span> PIPE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>import\u8BED\u53E5\u5E94\u8BE5\u4F7F\u7528 <strong>absolute</strong> import</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token keyword">from</span> foo<span class="token punctuation">.</span>bar <span class="token keyword">import</span> Bar

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
<span class="token keyword">from</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>bar <span class="token keyword">import</span> Bar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>import\u8BED\u53E5\u5E94\u8BE5\u653E\u5728\u6587\u4EF6\u5934\u90E8\uFF0C\u7F6E\u4E8E\u6A21\u5757\u8BF4\u660E\u53CAdocstring\u4E4B\u540E\uFF0C\u4E8E\u5168\u5C40\u53D8\u91CF\u4E4B\u524D\uFF1B</li><li>import\u8BED\u53E5\u5E94\u8BE5\u6309\u7167\u987A\u5E8F\u6392\u5217\uFF0C\u6BCF\u7EC4\u4E4B\u95F4\u7528\u4E00\u4E2A\u7A7A\u884C\u5206\u9694</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

<span class="token keyword">import</span> msgpack
<span class="token keyword">import</span> zmq

<span class="token keyword">import</span> foo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u5BFC\u5165\u5176\u4ED6\u6A21\u5757\u7684\u7C7B\u5B9A\u4E49\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u76F8\u5BF9\u5BFC\u5165</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> myclass <span class="token keyword">import</span> MyClass
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5982\u679C\u53D1\u751F\u547D\u540D\u51B2\u7A81\uFF0C\u5219\u53EF\u4F7F\u7528\u547D\u540D\u7A7A\u95F4</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> bar
<span class="token keyword">import</span> foo<span class="token punctuation">.</span>bar

bar<span class="token punctuation">.</span>Bar<span class="token punctuation">(</span><span class="token punctuation">)</span>
foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>Bar<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u683C" aria-hidden="true">#</a> \u7A7A\u683C</h3><ul><li>\u5728\u4E8C\u5143\u8FD0\u7B97\u7B26\u4E24\u8FB9\u5404\u7A7A\u4E00\u683C<code>[=,-,+=,==,&gt;,in,is not, and]</code>:</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
submitted <span class="token operator">+=</span> <span class="token number">1</span>
x <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
hypot2 <span class="token operator">=</span> x <span class="token operator">*</span> x <span class="token operator">+</span> y <span class="token operator">*</span> y
c <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span>
submitted <span class="token operator">+=</span><span class="token number">1</span>
x <span class="token operator">=</span> x<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
hypot2 <span class="token operator">=</span> x<span class="token operator">*</span>x <span class="token operator">+</span> y<span class="token operator">*</span>y
c <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\u4E2D\uFF0C<code>,</code>\u4E4B\u540E\u8981\u6709\u7A7A\u683C</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> imag<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span>imag<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\u4E2D\uFF0C\u9ED8\u8BA4\u503C\u7B49\u53F7\u4E24\u8FB9\u4E0D\u8981\u6DFB\u52A0\u7A7A\u683C</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> imag<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> imag <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u5DE6\u62EC\u53F7\u4E4B\u540E\uFF0C\u53F3\u62EC\u53F7\u4E4B\u524D\u4E0D\u8981\u52A0\u591A\u4F59\u7684\u7A7A\u683C</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
spam<span class="token punctuation">(</span>ham<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>eggs<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
spam<span class="token punctuation">(</span> ham<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> eggs <span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u5B57\u5178\u5BF9\u8C61\u7684\u5DE6\u62EC\u53F7\u4E4B\u524D\u4E0D\u8981\u591A\u4F59\u7684\u7A7A\u683C</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span>

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
<span class="token builtin">dict</span> <span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">list</span> <span class="token punctuation">[</span>index<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u4E0D\u8981\u4E3A\u5BF9\u9F50\u8D4B\u503C\u8BED\u53E5\u800C\u4F7F\u7528\u7684\u989D\u5916\u7A7A\u683C</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
x <span class="token operator">=</span> <span class="token number">1</span>
y <span class="token operator">=</span> <span class="token number">2</span>
long_variable <span class="token operator">=</span> <span class="token number">3</span>

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
x             <span class="token operator">=</span> <span class="token number">1</span>
y             <span class="token operator">=</span> <span class="token number">2</span>
long_variable <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#\u6362\u884C" aria-hidden="true">#</a> \u6362\u884C</h3><p>Python \u652F\u6301\u62EC\u53F7\u5185\u7684\u6362\u884C\u3002\u8FD9\u65F6\u6709\u4E24\u79CD\u60C5\u51B5\u3002</p><ol><li>\u7B2C\u4E8C\u884C\u7F29\u8FDB\u5230\u62EC\u53F7\u7684\u8D77\u59CB\u5904</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>foo <span class="token operator">=</span> long_function_name<span class="token punctuation">(</span>var_one<span class="token punctuation">,</span> var_two<span class="token punctuation">,</span>
                         var_three<span class="token punctuation">,</span> var_four<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u7B2C\u4E8C\u884C\u7F29\u8FDB 4 \u4E2A\u7A7A\u683C\uFF0C\u9002\u7528\u4E8E\u8D77\u59CB\u62EC\u53F7\u5C31\u6362\u884C\u7684\u60C5\u5F62</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">long_function_name</span><span class="token punctuation">(</span>
        var_one<span class="token punctuation">,</span> var_two<span class="token punctuation">,</span> var_three<span class="token punctuation">,</span>
        var_four<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>var_one<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F7F\u7528\u53CD\u659C\u6760<code>\\</code>\u6362\u884C\uFF0C\u4E8C\u5143\u8FD0\u7B97\u7B26<code>+</code> <code>.</code>\u7B49\u5E94\u51FA\u73B0\u5728\u884C\u672B\uFF1B\u957F\u5B57\u7B26\u4E32\u4E5F\u53EF\u4EE5\u7528\u6B64\u6CD5\u6362\u884C</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>session<span class="token punctuation">.</span>query<span class="token punctuation">(</span>MyTable<span class="token punctuation">)</span><span class="token punctuation">.</span>\\
        filter_by<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
        one<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span> <span class="token string">&#39;Hello, &#39;</span>\\
      <span class="token string">&#39;%s %s!&#39;</span> <span class="token operator">%</span>\\
      <span class="token punctuation">(</span><span class="token string">&#39;Harry&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Potter&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7981\u6B62\u590D\u5408\u8BED\u53E5\uFF0C\u5373\u4E00\u884C\u4E2D\u5305\u542B\u591A\u4E2A\u8BED\u53E5\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
do_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
do_second<span class="token punctuation">(</span><span class="token punctuation">)</span>
do_third<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
do_first<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>do_second<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>do_third<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>if/for/while</code>\u4E00\u5B9A\u8981\u6362\u884C\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token keyword">if</span> foo <span class="token operator">==</span> <span class="token string">&#39;blah&#39;</span><span class="token punctuation">:</span>
    do_blah_thing<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5</span>
<span class="token keyword">if</span> foo <span class="token operator">==</span> <span class="token string">&#39;blah&#39;</span><span class="token punctuation">:</span> do_blash_thing<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="docstring" tabindex="-1"><a class="header-anchor" href="#docstring" aria-hidden="true">#</a> docstring</h3><p>docstring \u7684\u89C4\u8303\u4E2D\u6700\u5176\u672C\u7684\u4E24\u70B9\uFF1A</p><ol><li>\u6240\u6709\u7684\u516C\u5171\u6A21\u5757\u3001\u51FD\u6570\u3001\u7C7B\u3001\u65B9\u6CD5\uFF0C\u90FD\u5E94\u8BE5\u5199 docstring \u3002\u79C1\u6709\u65B9\u6CD5\u4E0D\u4E00\u5B9A\u9700\u8981\uFF0C\u4F46\u5E94\u8BE5\u5728 def \u540E\u63D0\u4F9B\u4E00\u4E2A\u5757\u6CE8\u91CA\u6765\u8BF4\u660E\u3002</li><li>docstring \u7684\u7ED3\u675F&quot;&quot;&quot;\u5E94\u8BE5\u72EC\u5360\u4E00\u884C\uFF0C\u9664\u975E\u6B64 docstring \u53EA\u6709\u4E00\u884C\u3002</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;Return a foobar
Optional plotz says to frobnicate the bizbaz first.
&quot;&quot;&quot;</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;Oneline docstring&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><h3 id="\u5757\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u5757\u6CE8\u91CA" aria-hidden="true">#</a> \u5757\u6CE8\u91CA</h3><p>\u201C#\u201D\u53F7\u540E\u7A7A\u4E00\u683C\uFF0C\u6BB5\u843D\u4EF6\u7528\u7A7A\u884C\u5206\u5F00\uFF08\u540C\u6837\u9700\u8981\u201C#\u201D\u53F7\uFF09</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5757\u6CE8\u91CA</span>
<span class="token comment"># \u5757\u6CE8\u91CA</span>
<span class="token comment">#</span>
<span class="token comment"># \u5757\u6CE8\u91CA</span>
<span class="token comment"># \u5757\u6CE8\u91CA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u884C\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u884C\u6CE8\u91CA" aria-hidden="true">#</a> \u884C\u6CE8\u91CA</h3><p>\u81F3\u5C11\u4F7F\u7528\u4E24\u4E2A\u7A7A\u683C\u548C\u8BED\u53E5\u5206\u5F00\uFF0C\u6CE8\u610F\u4E0D\u8981\u4F7F\u7528\u65E0\u610F\u4E49\u7684\u6CE8\u91CA</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u5199\u6CD5</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment"># \u8FB9\u6846\u52A0\u7C97\u4E00\u4E2A\u50CF\u7D20</span>

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u5199\u6CD5(\u65E0\u610F\u4E49\u7684\u6CE8\u91CA)</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment"># x\u52A01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8BAE" aria-hidden="true">#</a> \u5EFA\u8BAE</h3><ul><li>\u5728\u4EE3\u7801\u7684\u5173\u952E\u90E8\u5206(\u6216\u6BD4\u8F83\u590D\u6742\u7684\u5730\u65B9), \u80FD\u5199\u6CE8\u91CA\u7684\u8981\u5C3D\u91CF\u5199\u6CE8\u91CA</li><li>\u6BD4\u8F83\u91CD\u8981\u7684\u6CE8\u91CA\u6BB5, \u4F7F\u7528\u591A\u4E2A\u7B49\u53F7\u9694\u5F00, \u53EF\u4EE5\u66F4\u52A0\u9192\u76EE, \u7A81\u51FA\u91CD\u8981\u6027</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>app <span class="token operator">=</span> create_app<span class="token punctuation">(</span>name<span class="token punctuation">,</span> options<span class="token punctuation">)</span>


<span class="token comment"># =====================================</span>
<span class="token comment"># \u8BF7\u52FF\u5728\u6B64\u5904\u6DFB\u52A0 get post\u7B49app\u8DEF\u7531\u884C\u4E3A !!!</span>
<span class="token comment"># =====================================</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u6587\u6863\u6CE8\u91CA-docstring" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u6CE8\u91CA-docstring" aria-hidden="true">#</a> \u6587\u6863\u6CE8\u91CA\uFF08Docstring\uFF09</h3><p>\u4F5C\u4E3A\u6587\u6863\u7684Docstring\u4E00\u822C\u51FA\u73B0\u5728\u6A21\u5757\u5934\u90E8\u3001\u51FD\u6570\u548C\u7C7B\u7684\u5934\u90E8\uFF0C\u8FD9\u6837\u5728python\u4E2D\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u7684__doc__\u5BF9\u8C61\u83B7\u53D6\u6587\u6863. \u7F16\u8F91\u5668\u548CIDE\u4E5F\u53EF\u4EE5\u6839\u636EDocstring\u7ED9\u51FA\u81EA\u52A8\u63D0\u793A.</p><ul><li>\u6587\u6863\u6CE8\u91CA\u4EE5 &quot;&quot;&quot; \u5F00\u5934\u548C\u7ED3\u5C3E, \u9996\u884C\u4E0D\u6362\u884C, \u5982\u6709\u591A\u884C, \u672B\u884C\u5FC5\u9700\u6362\u884C, \u4EE5\u4E0B\u662FGoogle\u7684docstring\u98CE\u683C\u793A\u4F8B</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;Example docstrings.

This module demonstrates documentation as specified by the \`Google Python
Style Guide\`_. Docstrings may extend over multiple lines. Sections are created
with a section header and a colon followed by a block of indented text.

Example:
    Examples can be given using either the \`\`Example\`\` or \`\`Examples\`\`
    sections. Sections support any reStructuredText formatting, including
    literal blocks::

        $ python example_google.py

Section breaks are created by resuming unindented text. Section breaks
are also implicitly created anytime a new section starts.
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>\u4E0D\u8981\u5728\u6587\u6863\u6CE8\u91CA\u590D\u5236\u51FD\u6570\u5B9A\u4E49\u539F\u578B, \u800C\u662F\u5177\u4F53\u63CF\u8FF0\u5176\u5177\u4F53\u5185\u5BB9, \u89E3\u91CA\u5177\u4F53\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7B49</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#  \u4E0D\u63A8\u8350\u7684\u5199\u6CD5(\u4E0D\u8981\u5199\u51FD\u6570\u539F\u578B\u7B49\u5E9F\u8BDD)</span>
<span class="token keyword">def</span> <span class="token function">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;function(a, b) -&gt; list&quot;&quot;&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token comment">#  \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token keyword">def</span> <span class="token function">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u8BA1\u7B97\u5E76\u8FD4\u56DEa\u5230b\u8303\u56F4\u5185\u6570\u636E\u7684\u5E73\u5747\u503C&quot;&quot;&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u5BF9\u51FD\u6570\u53C2\u6570\u3001\u8FD4\u56DE\u503C\u7B49\u7684\u8BF4\u660E\u91C7\u7528numpy\u6807\u51C6, \u5982\u4E0B\u6240\u793A</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u5728\u8FD9\u91CC\u5199\u51FD\u6570\u7684\u4E00\u53E5\u8BDD\u603B\u7ED3(\u5982: \u8BA1\u7B97\u5E73\u5747\u503C).

    \u8FD9\u91CC\u662F\u5177\u4F53\u63CF\u8FF0.

    \u53C2\u6570
    ----------
    arg1 : int
        arg1\u7684\u5177\u4F53\u63CF\u8FF0
    arg2 : int
        arg2\u7684\u5177\u4F53\u63CF\u8FF0

    \u8FD4\u56DE\u503C
    -------
    int
        \u8FD4\u56DE\u503C\u7684\u5177\u4F53\u63CF\u8FF0

    \u53C2\u770B
    --------
    otherfunc : \u5176\u5B83\u5173\u8054\u51FD\u6570\u7B49...

    \u793A\u4F8B
    --------
    \u793A\u4F8B\u4F7F\u7528doctest\u683C\u5F0F, \u5728\`&gt;&gt;&gt;\`\u540E\u7684\u4EE3\u7801\u53EF\u4EE5\u88AB\u6587\u6863\u6D4B\u8BD5\u5DE5\u5177\u4F5C\u4E3A\u6D4B\u8BD5\u7528\u4F8B\u81EA\u52A8\u8FD0\u884C

    &gt;&gt;&gt; a=[1,2,3]
    &gt;&gt;&gt; print [x + 3 for x in a]
    [4, 5, 6]
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul><li>\u6587\u6863\u6CE8\u91CA\u4E0D\u9650\u4E8E\u4E2D\u82F1\u6587, \u4F46\u4E0D\u8981\u4E2D\u82F1\u6587\u6DF7\u7528</li><li>\u6587\u6863\u6CE8\u91CA\u4E0D\u662F\u8D8A\u957F\u8D8A\u597D, \u901A\u5E38\u4E00\u4E24\u53E5\u8BDD\u80FD\u628A\u60C5\u51B5\u8BF4\u6E05\u695A\u5373\u53EF</li><li>\u6A21\u5757\u3001\u516C\u6709\u7C7B\u3001\u516C\u6709\u65B9\u6CD5, \u80FD\u5199\u6587\u6863\u6CE8\u91CA\u7684, \u5E94\u8BE5\u5C3D\u91CF\u5199\u6587\u6863\u6CE8\u91CA</li></ul><h2 id="\u547D\u540D\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u89C4\u8303" aria-hidden="true">#</a> \u547D\u540D\u89C4\u8303</h2><h3 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h3><ul><li>\u6A21\u5757\u5C3D\u91CF\u4F7F\u7528\u5C0F\u5199\u547D\u540D\uFF0C\u9996\u5B57\u6BCD\u4FDD\u6301\u5C0F\u5199\uFF0C\u5C3D\u91CF\u4E0D\u8981\u7528\u4E0B\u5212\u7EBF(\u9664\u975E\u591A\u4E2A\u5355\u8BCD\uFF0C\u4E14\u6570\u91CF\u4E0D\u591A\u7684\u60C5\u51B5)</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6B63\u786E\u7684\u6A21\u5757\u540D</span>
<span class="token keyword">import</span> decoder
<span class="token keyword">import</span> html_parser

<span class="token comment"># \u4E0D\u63A8\u8350\u7684\u6A21\u5757\u540D</span>
<span class="token keyword">import</span> Decoder
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u7C7B\u540D" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u540D" aria-hidden="true">#</a> \u7C7B\u540D</h3><ul><li>\u7C7B\u540D\u4F7F\u7528\u9A7C\u5CF0(CamelCase)\u547D\u540D\u98CE\u683C\uFF0C\u9996\u5B57\u6BCD\u5927\u5199\uFF0C\u79C1\u6709\u7C7B\u53EF\u7528\u4E00\u4E2A\u4E0B\u5212\u7EBF\u5F00\u5934</li></ul><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>class Farm():
    pass

class AnimalFarm(Farm):
    pass

class _PrivateFarm(Farm):
    pass
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u5C06\u76F8\u5173\u7684\u7C7B\u548C\u9876\u7EA7\u51FD\u6570\u653E\u5728\u540C\u4E00\u4E2A\u6A21\u5757\u91CC. \u4E0D\u50CFJava, \u6CA1\u5FC5\u8981\u9650\u5236\u4E00\u4E2A\u7C7B\u4E00\u4E2A\u6A21\u5757.</li></ul><h3 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h3><ul><li>\u51FD\u6570\u540D\u4E00\u5F8B\u5C0F\u5199\uFF0C\u5982\u6709\u591A\u4E2A\u5355\u8BCD\uFF0C\u7528\u4E0B\u5212\u7EBF\u9694\u5F00</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">run_with_env</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u79C1\u6709\u51FD\u6570\u5728\u51FD\u6570\u524D\u52A0\u4E00\u4E2A\u4E0B\u5212\u7EBF_</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">_private_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u53D8\u91CF\u540D" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u540D" aria-hidden="true">#</a> \u53D8\u91CF\u540D</h3><ul><li>\u53D8\u91CF\u540D\u5C3D\u91CF\u5C0F\u5199, \u5982\u6709\u591A\u4E2A\u5355\u8BCD\uFF0C\u7528\u4E0B\u5212\u7EBF\u9694\u5F00</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> <span class="token number">0</span>
    school_name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u5E38\u91CF\u91C7\u7528\u5168\u5927\u5199\uFF0C\u5982\u6709\u591A\u4E2A\u5355\u8BCD\uFF0C\u4F7F\u7528\u4E0B\u5212\u7EBF\u9694\u5F00</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>MAX_CLIENT <span class="token operator">=</span> <span class="token number">100</span>
MAX_CONNECTION <span class="token operator">=</span> <span class="token number">1000</span>
CONNECTION_TIMEOUT <span class="token operator">=</span> <span class="token number">600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a> \u5E38\u91CF</h3><ul><li>\u5E38\u91CF\u4F7F\u7528\u4EE5\u4E0B\u5212\u7EBF\u5206\u9694\u7684\u5927\u5199\u547D\u540D</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>MAX_OVERFLOW <span class="token operator">=</span> <span class="token number">100</span>

Class <span class="token class-name">FooBar</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">foo_bar</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> print_<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>print_<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,97);function p(l,t){return e}var c=n(a,[["render",p],["__file","codeSpecification.html.vue"]]);export{c as default};
