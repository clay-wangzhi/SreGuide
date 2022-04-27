<template><h1 id="_6-模块" tabindex="-1"><a class="header-anchor" href="#_6-模块" aria-hidden="true">#</a> 6 模块</h1>
<h2 id="模块简介" tabindex="-1"><a class="header-anchor" href="#模块简介" aria-hidden="true">#</a> 模块简介</h2>
<p>在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。</p>
<p>为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在Python中，一个.py文件就称之为一个模块（Module）。</p>
<p>使用模块有什么好处？</p>
<p>最大的好处是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括Python内置的模块和来自第三方的模块。</p>
<p>使用模块还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。但是也要注意，尽量不要与内置函数名字冲突。点<a href="http://docs.python.org/3/library/functions.html" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>查看Python的所有内置函数。</p>
<p>你也许还想到，如果不同的人编写的模块名相同怎么办？为了避免模块名冲突，Python又引入了按目录来组织模块的方法，称为包（Package）。</p>
<p>举个例子，一个<code>abc.py</code>的文件就是一个名字叫<code>abc</code>的模块，一个<code>xyz.py</code>的文件就是一个名字叫<code>xyz</code>的模块。</p>
<p>现在，假设我们的<code>abc</code>和<code>xyz</code>这两个模块名字与其他模块冲突了，于是我们可以通过包来组织模块，避免冲突。方法是选择一个顶层包名，比如<code>mycompany</code>，按照如下目录存放：</p>
<div class="language-ascii ext-ascii line-numbers-mode"><pre v-pre class="language-ascii"><code>mycompany
├─ __init__.py
├─ abc.py
└─ xyz.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>引入了包以后，只要顶层的包名不与别人冲突，那所有模块都不会与别人冲突。现在，<code>abc.py</code>模块的名字就变成了<code>mycompany.abc</code>，类似的，<code>xyz.py</code>的模块名变成了<code>mycompany.xyz</code>。</p>
<p>请注意，每一个包目录下面都会有一个<code>__init__.py</code>的文件，这个文件是必须存在的，否则，Python就把这个目录当成普通目录，而不是一个包。<code>__init__.py</code>可以是空文件，也可以有Python代码，因为<code>__init__.py</code>本身就是一个模块，而它的模块名就是<code>mycompany</code>。</p>
<p>类似的，可以有多级目录，组成多级层次的包结构。比如如下的目录结构：</p>
<div class="language-ascii ext-ascii line-numbers-mode"><pre v-pre class="language-ascii"><code>mycompany
 ├─ web
 │  ├─ __init__.py
 │  ├─ utils.py
 │  └─ www.py
 ├─ __init__.py
 ├─ abc.py
 └─ utils.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>文件<code>www.py</code>的模块名就是<code>mycompany.web.www</code>，两个文件<code>utils.py</code>的模块名分别是<code>mycompany.utils</code>和<code>mycompany.web.utils</code>。</p>
<blockquote>
<p>⚠️ 自己创建模块时要注意命名，不能和Python自带的模块名称冲突。点<a href="https://docs.python.org/3/py-modindex.html" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>查看Python的所有内置包。例如，系统自带了sys模块，自己的模块就不可命名为sys.py，否则将无法导入系统自带的sys模块。</p>
</blockquote>
<p><strong>总结</strong></p>
<p>模块是一组Python代码的集合，可以使用其他模块，也可以被其他模块使用。</p>
<p>创建自己的模块时，要注意：</p>
<ul>
<li>模块名要遵循Python变量命名规范，不要使用中文、特殊字符；</li>
<li>模块名不要和系统模块名冲突，最好先查看系统是否已存在该模块，检查方法是在Python交互环境执行<code>import abc</code>，若成功则说明系统存在此模块。</li>
</ul>
<h2 id="使用模块" tabindex="-1"><a class="header-anchor" href="#使用模块" aria-hidden="true">#</a> 使用模块</h2>
<p>Python本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。</p>
<p>我们以内建的<code>sys</code>模块为例，编写一个<code>hello</code>的模块：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token string">' a test module '</span>

__author__ <span class="token operator">=</span> <span class="token string">'Michael Liao'</span>

<span class="token keyword">import</span> sys

<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    args <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Hello, world!'</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Hello, %s!'</span> <span class="token operator">%</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Too many arguments!'</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">'__main__'</span><span class="token punctuation">:</span>
    test<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>第1行和第2行是标准注释，第1行注释可以让这个<code>hello.py</code>文件直接在Unix/Linux/Mac上运行，第2行注释表示.py文件本身使用标准UTF-8编码；</p>
<p>第4行是一个字符串，表示模块的文档注释，任何模块代码的第一个字符串都被视为模块的文档注释；</p>
<p>第6行使用<code>__author__</code>变量把作者写进去，这样当你公开源代码后别人就可以瞻仰你的大名；</p>
<p>以上就是Python模块的标准文件模板，当然也可以全部删掉不写，但是，按标准办事肯定没错。</p>
<p>后面开始就是真正的代码部分。</p>
<p>你可能注意到了，使用<code>sys</code>模块的第一步，就是导入该模块：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">import</span> sys
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>导入<code>sys</code>模块后，我们就有了变量<code>sys</code>指向该模块，利用<code>sys</code>这个变量，就可以访问<code>sys</code>模块的所有功能。</p>
<p><code>sys</code>模块有一个<code>argv</code>变量，用list存储了命令行的所有参数。<code>argv</code>至少有一个元素，因为第一个参数永远是该.py文件的名称，例如：</p>
<p>运行<code>python3 hello.py</code>获得的<code>sys.argv</code>就是<code>['hello.py']</code>；</p>
<p>运行<code>python3 hello.py Michael</code>获得的<code>sys.argv</code>就是<code>['hello.py', 'Michael']</code>。</p>
<p>最后，注意到这两行代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token assign-left variable">__name__</span><span class="token operator">==</span><span class="token string">'__main__'</span><span class="token builtin class-name">:</span>
    test<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当我们在命令行运行<code>hello</code>模块文件时，Python解释器把一个特殊变量<code>__name__</code>置为<code>__main__</code>，而如果在其他地方导入该<code>hello</code>模块时，<code>if</code>判断将失败，因此，这种<code>if</code>测试可以让一个模块通过命令行运行时执行一些额外的代码，最常见的就是运行测试。</p>
<p>我们可以用命令行运行<code>hello.py</code>看看效果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ python3 hello.py
Hello, world<span class="token operator">!</span>
$ python hello.py Michael
Hello, Michael<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果启动Python交互环境，再导入<code>hello</code>模块：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ python3
Python <span class="token number">3.4</span>.3 <span class="token punctuation">(</span>v3.4.3:9b73f1c3e601, Feb <span class="token number">23</span> <span class="token number">2015</span>, 02:52:03<span class="token punctuation">)</span> 
<span class="token punctuation">[</span>GCC <span class="token number">4.2</span>.1 <span class="token punctuation">(</span>Apple Inc. build <span class="token number">5666</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>dot <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span> on darwin
Type <span class="token string">"help"</span>, <span class="token string">"copyright"</span>, <span class="token string">"credits"</span> or <span class="token string">"license"</span> <span class="token keyword">for</span> <span class="token function">more</span> information.
<span class="token operator">>></span><span class="token operator">></span> <span class="token function">import</span> hello
<span class="token operator">>></span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>导入时，没有打印<code>Hello, word!</code>，因为没有执行<code>test()</code>函数。</p>
<p>调用<code>hello.test()</code>时，才能打印出<code>Hello, word!</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">>></span><span class="token operator">></span> hello.test<span class="token punctuation">(</span><span class="token punctuation">)</span>
Hello, world<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
