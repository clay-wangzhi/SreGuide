import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-20d624c9.js";const i={},l=e(`<h1 id="_1-2-python-代码规范" tabindex="-1"><a class="header-anchor" href="#_1-2-python-代码规范" aria-hidden="true">#</a> 1.2 Python 代码规范</h1><blockquote><p>转载自：草根学 Python | TwoWater</p></blockquote><h2 id="简明概述" tabindex="-1"><a class="header-anchor" href="#简明概述" aria-hidden="true">#</a> 简明概述</h2><h3 id="代码格式" tabindex="-1"><a class="header-anchor" href="#代码格式" aria-hidden="true">#</a> 代码格式</h3><h4 id="缩进" tabindex="-1"><a class="header-anchor" href="#缩进" aria-hidden="true">#</a> 缩进</h4><ul><li>统一使用 4 个空格进行缩进</li></ul><h4 id="行宽" tabindex="-1"><a class="header-anchor" href="#行宽" aria-hidden="true">#</a> 行宽</h4><p>每行代码尽量不超过 80 个字符(在特殊情况下可以略微超过 80 ，但最长不得超过 120)</p><p>理由：</p><ul><li>这在查看 side-by-side 的 diff 时很有帮助</li><li>方便在控制台下查看代码</li><li>太长可能是设计有缺陷</li></ul><h4 id="引号" tabindex="-1"><a class="header-anchor" href="#引号" aria-hidden="true">#</a> 引号</h4><p>简单说，自然语言使用双引号，机器标示使用单引号，因此 <strong>代码里</strong> 多数应该使用 <strong>单引号</strong></p><ul><li>自然语言使用双引号 <code>&quot;...&quot;</code> 例如错误信息；很多情况还是 unicode，使用<code>u&quot;你好世界&quot;</code></li><li>机器标识使用单引号 <code>&#39;...&#39;</code> 例如 dict 里的 key</li><li>正则表达式使用原生的双引号 <code>r&quot;...&quot;</code></li><li>文档字符串 (docstring)使用三个双引号 <code>&quot;&quot;&quot;......&quot;&quot;&quot;</code></li></ul><h4 id="空行" tabindex="-1"><a class="header-anchor" href="#空行" aria-hidden="true">#</a> 空行</h4><ul><li>模块级函数和类定义之间空两行；</li><li>类成员函数之间空一行；</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以使用多个空行分隔多组相关的函数</li><li>函数中可以使用空行分隔出逻辑相关的代码</li></ul><h3 id="import-语句" tabindex="-1"><a class="header-anchor" href="#import-语句" aria-hidden="true">#</a> import 语句</h3><ul><li>import 语句应该分行书写</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">import</span> sys<span class="token punctuation">,</span>os

<span class="token comment"># 正确的写法</span>
<span class="token keyword">from</span> subprocess <span class="token keyword">import</span> Popen<span class="token punctuation">,</span> PIPE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>import语句应该使用 <strong>absolute</strong> import</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">from</span> foo<span class="token punctuation">.</span>bar <span class="token keyword">import</span> Bar

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">from</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>bar <span class="token keyword">import</span> Bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>import语句应该放在文件头部，置于模块说明及docstring之后，于全局变量之前；</li><li>import语句应该按照顺序排列，每组之间用一个空行分隔</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

<span class="token keyword">import</span> msgpack
<span class="token keyword">import</span> zmq

<span class="token keyword">import</span> foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入其他模块的类定义时，可以使用相对导入</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> myclass <span class="token keyword">import</span> MyClass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果发生命名冲突，则可使用命名空间</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> bar
<span class="token keyword">import</span> foo<span class="token punctuation">.</span>bar

bar<span class="token punctuation">.</span>Bar<span class="token punctuation">(</span><span class="token punctuation">)</span>
foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>Bar<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空格" tabindex="-1"><a class="header-anchor" href="#空格" aria-hidden="true">#</a> 空格</h3><ul><li>在二元运算符两边各空一格<code>[=,-,+=,==,&gt;,in,is not, and]</code>:</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
submitted <span class="token operator">+=</span> <span class="token number">1</span>
x <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
hypot2 <span class="token operator">=</span> x <span class="token operator">*</span> x <span class="token operator">+</span> y <span class="token operator">*</span> y
c <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>

<span class="token comment"># 不推荐的写法</span>
i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span>
submitted <span class="token operator">+=</span><span class="token number">1</span>
x <span class="token operator">=</span> x<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
hypot2 <span class="token operator">=</span> x<span class="token operator">*</span>x <span class="token operator">+</span> y<span class="token operator">*</span>y
c <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数的参数列表中，<code>,</code>之后要有空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> imag<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span>imag<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数的参数列表中，默认值等号两边不要添加空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> imag<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">def</span> <span class="token function">complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> imag <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>左括号之后，右括号之前不要加多余的空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
spam<span class="token punctuation">(</span>ham<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>eggs<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 不推荐的写法</span>
spam<span class="token punctuation">(</span> ham<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> eggs <span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字典对象的左括号之前不要多余的空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span>

<span class="token comment"># 不推荐的写法</span>
<span class="token builtin">dict</span> <span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">list</span> <span class="token punctuation">[</span>index<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不要为对齐赋值语句而使用的额外空格</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
x <span class="token operator">=</span> <span class="token number">1</span>
y <span class="token operator">=</span> <span class="token number">2</span>
long_variable <span class="token operator">=</span> <span class="token number">3</span>

<span class="token comment"># 不推荐的写法</span>
x             <span class="token operator">=</span> <span class="token number">1</span>
y             <span class="token operator">=</span> <span class="token number">2</span>
long_variable <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="换行" tabindex="-1"><a class="header-anchor" href="#换行" aria-hidden="true">#</a> 换行</h3><p>Python 支持括号内的换行。这时有两种情况。</p><ol><li>第二行缩进到括号的起始处</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>foo <span class="token operator">=</span> long_function_name<span class="token punctuation">(</span>var_one<span class="token punctuation">,</span> var_two<span class="token punctuation">,</span>
                         var_three<span class="token punctuation">,</span> var_four<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>第二行缩进 4 个空格，适用于起始括号就换行的情形</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">long_function_name</span><span class="token punctuation">(</span>
        var_one<span class="token punctuation">,</span> var_two<span class="token punctuation">,</span> var_three<span class="token punctuation">,</span>
        var_four<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>var_one<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用反斜杠<code>\\</code>换行，二元运算符<code>+</code> <code>.</code>等应出现在行末；长字符串也可以用此法换行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>session<span class="token punctuation">.</span>query<span class="token punctuation">(</span>MyTable<span class="token punctuation">)</span><span class="token punctuation">.</span>\\
        filter_by<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\\
        one<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span> <span class="token string">&#39;Hello, &#39;</span>\\
      <span class="token string">&#39;%s %s!&#39;</span> <span class="token operator">%</span>\\
      <span class="token punctuation">(</span><span class="token string">&#39;Harry&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Potter&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>禁止复合语句，即一行中包含多个语句：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
do_first<span class="token punctuation">(</span><span class="token punctuation">)</span>
do_second<span class="token punctuation">(</span><span class="token punctuation">)</span>
do_third<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 不推荐的写法</span>
do_first<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>do_second<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>do_third<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if/for/while</code>一定要换行：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
<span class="token keyword">if</span> foo <span class="token operator">==</span> <span class="token string">&#39;blah&#39;</span><span class="token punctuation">:</span>
    do_blah_thing<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 不推荐的写法</span>
<span class="token keyword">if</span> foo <span class="token operator">==</span> <span class="token string">&#39;blah&#39;</span><span class="token punctuation">:</span> do_blash_thing<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docstring" tabindex="-1"><a class="header-anchor" href="#docstring" aria-hidden="true">#</a> docstring</h3><p>docstring 的规范中最其本的两点：</p><ol><li>所有的公共模块、函数、类、方法，都应该写 docstring 。私有方法不一定需要，但应该在 def 后提供一个块注释来说明。</li><li>docstring 的结束&quot;&quot;&quot;应该独占一行，除非此 docstring 只有一行。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;Return a foobar
Optional plotz says to frobnicate the bizbaz first.
&quot;&quot;&quot;</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;Oneline docstring&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><h3 id="块注释" tabindex="-1"><a class="header-anchor" href="#块注释" aria-hidden="true">#</a> 块注释</h3><p>“#”号后空一格，段落件用空行分开（同样需要“#”号）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 块注释</span>
<span class="token comment"># 块注释</span>
<span class="token comment">#</span>
<span class="token comment"># 块注释</span>
<span class="token comment"># 块注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行注释" tabindex="-1"><a class="header-anchor" href="#行注释" aria-hidden="true">#</a> 行注释</h3><p>至少使用两个空格和语句分开，注意不要使用无意义的注释</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的写法</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment"># 边框加粗一个像素</span>

<span class="token comment"># 不推荐的写法(无意义的注释)</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment"># x加1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议</h3><ul><li>在代码的关键部分(或比较复杂的地方), 能写注释的要尽量写注释</li><li>比较重要的注释段, 使用多个等号隔开, 可以更加醒目, 突出重要性</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>app <span class="token operator">=</span> create_app<span class="token punctuation">(</span>name<span class="token punctuation">,</span> options<span class="token punctuation">)</span>


<span class="token comment"># =====================================</span>
<span class="token comment"># 请勿在此处添加 get post等app路由行为 !!!</span>
<span class="token comment"># =====================================</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档注释-docstring" tabindex="-1"><a class="header-anchor" href="#文档注释-docstring" aria-hidden="true">#</a> 文档注释（Docstring）</h3><p>作为文档的Docstring一般出现在模块头部、函数和类的头部，这样在python中可以通过对象的__doc__对象获取文档. 编辑器和IDE也可以根据Docstring给出自动提示.</p><ul><li>文档注释以 &quot;&quot;&quot; 开头和结尾, 首行不换行, 如有多行, 末行必需换行, 以下是Google的docstring风格示例</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不要在文档注释复制函数定义原型, 而是具体描述其具体内容, 解释具体参数和返回值等</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#  不推荐的写法(不要写函数原型等废话)</span>
<span class="token keyword">def</span> <span class="token function">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;function(a, b) -&gt; list&quot;&quot;&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token comment">#  正确的写法</span>
<span class="token keyword">def</span> <span class="token function">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;计算并返回a到b范围内数据的平均值&quot;&quot;&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对函数参数、返回值等的说明采用numpy标准, 如下所示</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;在这里写函数的一句话总结(如: 计算平均值).

    这里是具体描述.

    参数
    ----------
    arg1 : int
        arg1的具体描述
    arg2 : int
        arg2的具体描述

    返回值
    -------
    int
        返回值的具体描述

    参看
    --------
    otherfunc : 其它关联函数等...

    示例
    --------
    示例使用doctest格式, 在\`&gt;&gt;&gt;\`后的代码可以被文档测试工具作为测试用例自动运行

    &gt;&gt;&gt; a=[1,2,3]
    &gt;&gt;&gt; print [x + 3 for x in a]
    [4, 5, 6]
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文档注释不限于中英文, 但不要中英文混用</li><li>文档注释不是越长越好, 通常一两句话能把情况说清楚即可</li><li>模块、公有类、公有方法, 能写文档注释的, 应该尽量写文档注释</li></ul><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h2><h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h3><ul><li>模块尽量使用小写命名，首字母保持小写，尽量不要用下划线(除非多个单词，且数量不多的情况)</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正确的模块名</span>
<span class="token keyword">import</span> decoder
<span class="token keyword">import</span> html_parser

<span class="token comment"># 不推荐的模块名</span>
<span class="token keyword">import</span> Decoder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类名" tabindex="-1"><a class="header-anchor" href="#类名" aria-hidden="true">#</a> 类名</h3><ul><li>类名使用驼峰(CamelCase)命名风格，首字母大写，私有类可用一个下划线开头</li></ul><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Farm():
    pass

class AnimalFarm(Farm):
    pass

class _PrivateFarm(Farm):
    pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将相关的类和顶级函数放在同一个模块里. 不像Java, 没必要限制一个类一个模块.</li></ul><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><ul><li>函数名一律小写，如有多个单词，用下划线隔开</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">run_with_env</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>私有函数在函数前加一个下划线_</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">_private_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量名" tabindex="-1"><a class="header-anchor" href="#变量名" aria-hidden="true">#</a> 变量名</h3><ul><li>变量名尽量小写, 如有多个单词，用下划线隔开</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> <span class="token number">0</span>
    school_name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常量采用全大写，如有多个单词，使用下划线隔开</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MAX_CLIENT <span class="token operator">=</span> <span class="token number">100</span>
MAX_CONNECTION <span class="token operator">=</span> <span class="token number">1000</span>
CONNECTION_TIMEOUT <span class="token operator">=</span> <span class="token number">600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h3><ul><li>常量使用以下划线分隔的大写命名</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MAX_OVERFLOW <span class="token operator">=</span> <span class="token number">100</span>

Class <span class="token class-name">FooBar</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">foo_bar</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> print_<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>print_<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,97),t=[l];function p(o,c){return s(),a("div",null,t)}const r=n(i,[["render",p],["__file","codeSpecification.html.vue"]]);export{r as default};
