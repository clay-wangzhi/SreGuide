<template><h1 id="_5-4-装饰器" tabindex="-1"><a class="header-anchor" href="#_5-4-装饰器" aria-hidden="true">#</a> 5.4 装饰器</h1>
<h2 id="由来" tabindex="-1"><a class="header-anchor" href="#由来" aria-hidden="true">#</a> 由来</h2>
<p>需求：为一个加法函数增加记录实参的功能</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'add called. x={}, y={}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 增加的记录功能</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

add<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面的代码满足了需求，但有缺点：</p>
<p>记录信息的功能，可以是一个单独的功能。显然和add函数耦合太紧密。加法函数属于业务功能，输出信息属于非功能代码，不该放在add函数中</p>
<p>1、提供一个函数logger完成记录功能</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

<span class="token keyword">def</span> <span class="token function">logger</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用前增强'</span><span class="token punctuation">)</span>
    ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用后增强'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret

<span class="token keyword">print</span><span class="token punctuation">(</span>logger<span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>2、改进传参</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

<span class="token keyword">def</span> <span class="token function">logger</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用前增强'</span><span class="token punctuation">)</span>
    ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用后增强'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret

<span class="token keyword">print</span><span class="token punctuation">(</span>logger<span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>3、柯里化</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

<span class="token keyword">def</span> <span class="token function">logger</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用前增强'</span><span class="token punctuation">)</span>
        ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用后增强'</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> ret
    <span class="token keyword">return</span> wrapper

inner <span class="token operator">=</span> logger<span class="token punctuation">(</span>add<span class="token punctuation">)</span>
x <span class="token operator">=</span> inner<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>再进一步</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

<span class="token keyword">def</span> <span class="token function">logger</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用前增强'</span><span class="token punctuation">)</span>
        ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用后增强'</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> ret
    <span class="token keyword">return</span> wrapper

add <span class="token operator">=</span> logger<span class="token punctuation">(</span>add<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>4、装饰器语法</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">logger</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用前增强'</span><span class="token punctuation">)</span>
        ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用后增强'</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> ret
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@logger</span> <span class="token comment"># 等价于 add = wrapper &lt;=> add = logger(add)</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>@logger就是装饰器语法</p>
<p><em><strong>等价式非常重要，如果你不能理解装饰器，开始的时候一定要把等价式写在后面</strong></em></p>
<h2 id="无参装饰器" tabindex="-1"><a class="header-anchor" href="#无参装饰器" aria-hidden="true">#</a> 无参装饰器</h2>
<ul>
<li>上例的装饰器语法，称为无参装饰器</li>
<li>@符号后是一个函数</li>
<li>虽然是无参装饰器，但是@后的函数本质上是单参函数</li>
<li>上例的 logger 函数是一个高阶函数</li>
</ul>
<h2 id="日志记录装饰器实现" tabindex="-1"><a class="header-anchor" href="#日志记录装饰器实现" aria-hidden="true">#</a> 日志记录装饰器实现</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> datetime

<span class="token keyword">def</span> <span class="token function">logger</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用前增强'</span><span class="token punctuation">)</span>
        start <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
        ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token comment"># 参数解构</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用后增强'</span><span class="token punctuation">)</span>
        delta <span class="token operator">=</span> <span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">.</span>total_seconds<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Function {} took {}s.'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> ret
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@logger</span> <span class="token comment"># 等价于 add = wrapper &lt;=> add = logger(add)</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="文档字符串" tabindex="-1"><a class="header-anchor" href="#文档字符串" aria-hidden="true">#</a> 文档字符串</h2>
<ul>
<li>Python 文档字符串 Documentation Strings</li>
<li>在函数（类、模块）语句块的第一行，且习惯是多行的文本，所以多使用三引号</li>
<li>文档字符串也算是合法的一条语句</li>
<li>惯例是首字母大写，第一行写概述，空一行，第三行写详细描述</li>
<li>可以使用特殊属性__doc__访问这个文档</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""这是加法函数的文档"""</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}'s doc = {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span>__name__ <span class="token punctuation">,</span> add<span class="token punctuation">.</span>__doc__<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> datetime

<span class="token keyword">def</span> <span class="token function">logger</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">'''wrapper's doc'''</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用前增强'</span><span class="token punctuation">)</span>
        start <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
        ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token comment"># 参数解构</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用后增强'</span><span class="token punctuation">)</span>
        delta <span class="token operator">=</span> <span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">.</span>total_seconds<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Function {} took {}s.'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> ret
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@logger</span> <span class="token comment"># 等价于 add = wrapper &lt;=> add = logger(add)</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">'''add's doc'''</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"name={}, doc={}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> add<span class="token punctuation">.</span>__doc__<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>被装饰后，函数名和文档都不对了。如何解决？</p>
<p><strong>functools模块</strong>提供了一个wraps装饰器函数，本质上调用的是update_wrapper，它就是一个属性复制函数。</p>
<p>wraps(wrapped, assigned=WRAPPER_ASSIGNMENTS, updated=WRAPPER_UPDATES)</p>
<ul>
<li>wrapped 就是被包装函数</li>
<li>wrapper 就是包装函数</li>
<li>用被包装函数的属性覆盖包装函数的同名属性</li>
<li>元组 WRAPPER_ASSIGNMENTS 中是要被覆盖的属性
<ul>
<li><code>__module__</code> ,  <code>__name__</code> ,  <code>__qualname__</code> ,  <code>__doc__</code> ,  <code>__annotations__</code></li>
<li>模块名、名称、限定名、文档、参数注解</li>
</ul>
</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> datetime
<span class="token keyword">from</span> functools <span class="token keyword">import</span> wraps

<span class="token keyword">def</span> <span class="token function">logger</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@wraps</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token comment"># 用被包装函数fn的属性覆盖包装函数wrapper的同名属性</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">'''wrapper's doc'''</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用前增强'</span><span class="token punctuation">)</span>
        start <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
        ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token comment"># 参数解构</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'调用后增强'</span><span class="token punctuation">)</span>
        delta <span class="token operator">=</span> <span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">.</span>total_seconds<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Function {} took {}s.'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> ret
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@logger</span> <span class="token comment"># 等价于 add = wrapper &lt;=> add = logger(add)</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">'''add's doc'''</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"name={}, doc={}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> add<span class="token punctuation">.</span>__doc__<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="带参装饰器" tabindex="-1"><a class="header-anchor" href="#带参装饰器" aria-hidden="true">#</a> 带参装饰器</h2>
<ul>
<li>@之后不是一个单独的标识符，是一个函数调用</li>
<li>函数调用的返回值又是一个函数，此函数是一个无参装饰器</li>
<li>带参装饰器，可以有任意个参数
<ul>
<li>@func()</li>
<li>@func(1)</li>
<li>@func(1, 2)</li>
</ul>
</li>
</ul>
<h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> datetime
<span class="token keyword">from</span> functools <span class="token keyword">import</span> wraps

<span class="token keyword">def</span> <span class="token function">logger</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'logger run'</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@wraps</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token comment"># 用被包装函数fn的属性覆盖包装函数wrapper的同名属性</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># wrapper = wraps(fn)(wrapper)</span>
        <span class="token string">"wrapper's doc"</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'wrapper run'</span><span class="token punctuation">)</span>
        start <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
        ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token comment"># 参数解构</span>
        delta <span class="token operator">=</span> <span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">.</span>total_seconds<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Function {} took {}s.'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> ret
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@logger</span> <span class="token comment"># 等价于 add = wrapper &lt;=> add = logger(add)</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""add function"""</span>

<span class="token decorator annotation punctuation">@logger</span>
<span class="token keyword">def</span> <span class="token function">sub</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""sub function"""</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> sub<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul>
<li>logger 什么时候执行？  从上到下执行</li>
<li>logger 执行过几次？ 两次</li>
<li>wraps 装饰器执行过几次？ 两次 ， 也是进入函数，从上到下依次执行，函数没调用前，跳过函数部分代码</li>
<li>wrapper 的 <code>__name__</code> 等属性被覆盖过几次？ 两次</li>
<li><code>add.__name__</code> 打印什么名称？add</li>
<li><code>sub.__name__</code> 打印什么名称？sub</li>
</ul>
<h2 id="时间模块" tabindex="-1"><a class="header-anchor" href="#时间模块" aria-hidden="true">#</a> 时间模块</h2>
<h3 id="datetime-模块" tabindex="-1"><a class="header-anchor" href="#datetime-模块" aria-hidden="true">#</a> datetime 模块</h3>
<p>datetime类</p>
<ul>
<li>时间高级类</li>
<li>类方法，即使用类调用的方法，由类方法获得一个时间对象
<ul>
<li>now(tz=None) 返回当前时间的datetime对象，时间到微秒，如果tz为None，返回当前时区的不带时区信息的时间</li>
<li>utcnow() 不带时区的0时区时间</li>
<li>fromtimestamp(timestamp, tz=None) 从一个时间戳返回一个datetime对象</li>
</ul>
</li>
<li>时间对象方法
<ul>
<li>timestamp() 返回一个到微秒的时间戳
<ul>
<li>时间戳：格林威治时间1970年1月1日0点到现在的秒数</li>
</ul>
</li>
<li>构造方法 datetime.datetime(2016, 12, 6, 16, 29, 43, 79043)</li>
<li>year、month、day、hour、minute、second、microsecond，取datetime对象的年月日时分秒及微秒</li>
<li>weekday() 返回星期的天，周一0，周日6</li>
<li>isoweekday() 返回星期的天，周一1，周日7</li>
<li>date() 返回日期date对象</li>
<li>time() 返回时间time对象</li>
</ul>
</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> datetime

<span class="token comment"># 类方法获得时间对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>timezone<span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>timedelta<span class="token punctuation">(</span>hours<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 时区时间</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 无时区时间</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>utcnow<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># UTC时间，可以认为是GMT或0时区时间</span>

<span class="token comment"># 时间戳操作</span>
stamp <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 获得时间戳</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>stamp<span class="token punctuation">)</span>
dt <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>fromtimestamp<span class="token punctuation">(</span>stamp<span class="token punctuation">)</span> <span class="token comment"># 从时间戳获得时间对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dt<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span>date<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dt<span class="token punctuation">.</span>date<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dt<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="日期与格式化" tabindex="-1"><a class="header-anchor" href="#日期与格式化" aria-hidden="true">#</a> 日期与格式化</h3>
<ul>
<li>类方法 strptime(date_string, format) ，返回datetime对象（时间字符串+格式化字符串 =&gt; 时间对象）</li>
<li>对象方法 strftime(format) ，返回字符串（时间对象通过格式字符串 =&gt; 时间字符串）</li>
<li>字符串format函数格式化（时间对象通过格式字符串 =&gt; 时间字符串）</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> datetime

datestr <span class="token operator">=</span> <span class="token string">'2018-01-10 17:16:08'</span>
dt <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>datestr<span class="token punctuation">,</span> <span class="token string">'%Y-%m-%d %H:%M:%S'</span><span class="token punctuation">)</span> <span class="token comment">#由字符串到时间对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>dt<span class="token punctuation">)</span><span class="token punctuation">,</span> dt<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">'%Y/%m/%d-%H:%M:%S'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出为字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:%Y/%m/%d %H:%M:%S}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>dt<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 输出为字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="timedelta-类" tabindex="-1"><a class="header-anchor" href="#timedelta-类" aria-hidden="true">#</a> timedelta 类</h3>
<ul>
<li>datetime2 = datetime1 + timedelta</li>
<li>datetime2 = datetime1 - timedelta</li>
<li>timedelta = datetime1 - datetime2</li>
<li>构造方法
<ul>
<li>datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0,hours=0, weeks=0)</li>
<li>year = datetime.timedelta(days=365)</li>
</ul>
</li>
<li>timedelta对象有方法total_seconds()， 返回<strong>时间差的总秒数</strong></li>
</ul>
<h3 id="time-模块" tabindex="-1"><a class="header-anchor" href="#time-模块" aria-hidden="true">#</a> time 模块</h3>
<ul>
<li>time.sleep(secs) 将调用线程挂起指定的秒数</li>
</ul>
</template>
