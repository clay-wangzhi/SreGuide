<template><div><h1 id="_2-3-2-字符串-str" tabindex="-1"><a class="header-anchor" href="#_2-3-2-字符串-str" aria-hidden="true">#</a> 2.3.2 字符串 str</h1>
<ul>
<li>一个个字符组成的有序的序列，是字符的集合</li>
<li>使用单引号、双引号、三引号引住的字符序列</li>
<li>字符串是不可变对象，是字面常量</li>
</ul>
<p>Python3 起，字符串都是 Unicode 类型</p>
<h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>s1 = 'string'
s2 = "string2"
s3 = '''this's a "String" '''
s4 = 'hello \n magedu.com'
s5 = r"hello \n magedu.com"
s6 = 'c:\windows\nt'
s7 = R"c:\windows\nt"
s8 = 'c:\windows\\nt'
name = 'tom'; age = 20 # python代码写在一行，使用分号隔开，不推荐
s9 = f'{name}, {age}' # 3.6支持f前缀
sql = """select * from user where name='tom' """
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>r前缀：所有字符都是本来的意思，没有转义
f前缀：3.6开始，使用变量插值</p>
<h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2>
<p>字符串是序列，支持下标访问。但不可变，不可以修改元素。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>sql <span class="token operator">=</span> <span class="token string">"select * from user where name='tom'"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sql<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># 字符串'c'</span>
sql<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'o'</span> <span class="token comment"># 不可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连接" tabindex="-1"><a class="header-anchor" href="#连接" aria-hidden="true">#</a> 连接</h2>
<p>+加号</p>
<ul>
<li>将2个字符串连接起来</li>
<li>返回一个新的字符串</li>
</ul>
<p>join方法</p>
<ul>
<li>sep.join(iterable)</li>
<li>使用指定字符串作为分隔符，将可迭代对象中字符串使用这个分隔符拼接起来</li>
<li>可迭代对象必须是字符串</li>
<li>返回一个新的字符串</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">'ab'</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token string">'cd'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'\t'</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'\n'</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 可以吗 不可以，可迭代对象必须是字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符查找" tabindex="-1"><a class="header-anchor" href="#字符查找" aria-hidden="true">#</a> 字符查找</h2>
<p>find、rfind、index、rindex</p>
<p>后续补充</p>
<h2 id="分割" tabindex="-1"><a class="header-anchor" href="#分割" aria-hidden="true">#</a> 分割</h2>
<ul>
<li>split(sep=None, maxsplit=-1) -&gt; list of strings
<ul>
<li>从左至右</li>
<li>sep 指定分割字符串，缺省的情况下空白字符串作为分隔符</li>
<li>maxsplit 指定分割的次数，-1 表示遍历整个字符串</li>
<li>立即返回列表</li>
</ul>
</li>
<li>rsplit(sep=None, maxsplit=-1) -&gt; list of strings
<ul>
<li>从右向左开始切，但是输出的字符串字符不会反</li>
<li>sep 指定分割字符串，缺省的情况下空白字符串作为分隔符</li>
<li>maxsplit 指定分割的次数，-1 表示遍历整个字符串</li>
<li>立即返回列表</li>
</ul>
</li>
<li>splitlines([keepends]) -&gt; list of strings
<ul>
<li>按照行来切分字符串</li>
<li>keepends 指的是是否保留行分隔符</li>
<li>行分隔符包括\n、\r\n、\r等</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">','</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">'abcd'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># ['a', 'b', 'c,d']</span>

s1 <span class="token operator">=</span> <span class="token string">'\na b \tc\nd\n'</span> <span class="token comment"># 注意下面3个切割的区别</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'\n'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>partition(sep) -&gt; (head, sep, tail)
<ul>
<li>从左至右，遇到分隔符就把字符串分割成两部分，返回头、分隔符、尾三部分的三元组</li>
<li>如果没有找到分隔符，就返回头、2个空元素的三元组</li>
<li>sep 分割字符串，必须指定</li>
</ul>
</li>
<li>rpartition(sep) -&gt; (head, sep, tail)
<ul>
<li>从右至左，遇到分隔符就把字符串分割成两部分，返回头、分隔符、尾三部分的三元组</li>
<li>如果没有找到分隔符，就返回2个空元素和尾的三元组</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">','</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">'abcd'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>partition<span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>partition<span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>rpartition<span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>rpartition<span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h2>
<ul>
<li>replace(old, new[, count]) -&gt; str
<ul>
<li>字符串中找到匹配替换为新子串，返回新字符串</li>
<li>count表示替换几次，不指定就是全部替换</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">','</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">'abcd'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
s1 <span class="token operator">=</span> <span class="token string">'www.baidu.edu'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'w'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'ww'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'www'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移除" tabindex="-1"><a class="header-anchor" href="#移除" aria-hidden="true">#</a> 移除</h2>
<ul>
<li>strip([chars]) -&gt; str
<ul>
<li>在字符串两端去除指定的字符集chars中的所有字符</li>
<li>如果chars没有指定，去除两端的空白字符</li>
</ul>
</li>
<li>lstrip([chars]) -&gt; str ，从左开始</li>
<li>rstrip([chars]) -&gt; str，从右开始</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">'\t\r\na b c,d\ne\n\t'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'-'</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">'\t\n'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'-'</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">'\t\ne\r'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首尾判断</p>
<ul>
<li>endswith(suffix[, start[, end]]) -&gt; bool
<ul>
<li>在指定的区间[start, end)，字符串是否是suffix结尾</li>
</ul>
</li>
<li>startswith(prefix[, start[, end]]) -&gt; bool
<ul>
<li>在指定的区间[start, end)，字符串是否是prefix开头</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"www.baidu.edu"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">'ww'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">'i'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">'edu'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">'edu'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他函数" tabindex="-1"><a class="header-anchor" href="#其他函数" aria-hidden="true">#</a> 其他函数</h2>
<ul>
<li>upper()大写</li>
<li>lower()小写</li>
<li>swapcase() 交换大小写</li>
<li>isalnum() -&gt; bool 是否是字母和数字组成</li>
<li>isalpha() 是否是字母</li>
<li>isdecimal() 是否只包含十进制数字</li>
<li>isdigit() 是否全部数字(0~9)</li>
<li>isidentifier() 是不是字母和下划线开头，其他都是字母、数字、下划线</li>
<li>islower() 是否都是小写</li>
<li>isupper() 是否全部大写</li>
<li>isspace() 是否只包含空白字符</li>
</ul>
<h2 id="格式化" tabindex="-1"><a class="header-anchor" href="#格式化" aria-hidden="true">#</a> 格式化</h2>
<p>简单的使用+或者 join 也可以拼接字符串，但是需要先转换数据到字符串后才能拼接。</p>
<p><strong>C 风格 printf-style</strong></p>
<ul>
<li>占位符：使用%和格式字符，例如%s、%d</li>
<li>修饰符：在占位符中还可以插入修饰符，例如%03d</li>
<li>format % values
<ul>
<li>format 是格式字符串，values 是被格式的值</li>
<li>格式字符串和被格式的值之间使用%</li>
<li>values只能是一个对象，可以是一个值，可以是一个元素个数和占位符数目相等的元组，也可以是一个字典</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"I am %5d"</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'I like %s.'</span> <span class="token operator">%</span> <span class="token string">'Python'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"%3.2f%% 0x%x %#X"</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">89.7654</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 宽度为3，小数点后2位</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"I am %-5d"</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"%(host)s.%(domain)s"</span> <span class="token operator">%</span> <span class="token punctuation">{</span><span class="token string">'domain'</span><span class="token punctuation">:</span><span class="token string">'baidu.com'</span><span class="token punctuation">,</span> <span class="token string">'host'</span><span class="token punctuation">:</span><span class="token string">'www'</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 靠名字对应</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>format函数</strong></p>
<p>Python2.5 之后，字符串类型提供了 format 函数，功能更加强大，鼓励使用。
&quot;{} {xxx}&quot;.format(*args, **kwargs) -&gt; str</p>
<ul>
<li>args是可变的位置参数</li>
<li>kwargs是可变关键字参数，写作a=100</li>
<li>使用花括号作为占位符</li>
<li>{}表示按照顺序匹配位置参数，{n}表示取位置参数索引为n的值</li>
<li>{xxx}表示在关键字参数中搜索名称一致的</li>
<li>{{}} 表示打印花括号</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 位置对应</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}:{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 位置或关键字对应</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{server} {1}:{0}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span> server<span class="token operator">=</span><span class="token string">'Web Server Info: '</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 访问元素</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0[0]}.{0[1]}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">'baidu'</span><span class="token punctuation">,</span> <span class="token string">'com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 进制</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{0:d} {0:b} {0:o} {0:x} {0:#X}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 浮点数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">**</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1.7320508075688772</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:f}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">**</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1.732051，精度默认6</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:10f}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">**</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 右对齐，宽度10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:2}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">102.231</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 宽度为2数字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:2}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 宽度为2数字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:.2}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">**</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1.7 2个数字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:.2f}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">**</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1.73 小数点后2位</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:3.2f}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">**</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1.73 宽度为3，小数点后2位</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:20.3f}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">0.2745</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0.275</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:3.3%}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 33.333%</span>
<span class="token comment"># 注意宽度可以被撑破</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 对齐</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}*{}={}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token operator">*</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}*{}={:2}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token operator">*</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{1}*{0}={2:3}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token operator">*</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 6*5= 30</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{1}*{0}={2:0>3}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token operator">*</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}*{}={:#&lt;3}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 4*5=20#</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{:#^7}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">'*'</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ##***##</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


