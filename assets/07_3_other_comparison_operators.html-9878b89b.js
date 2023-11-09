import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as p,b as n,d as s,e,a as t}from"./app-52a338cc.js";const c={},r=t('<h1 id="_7-3-其他比较操作" tabindex="-1"><a class="header-anchor" href="#_7-3-其他比较操作" aria-hidden="true">#</a> 7.3 其他比较操作</h1><p>二元比较操作比较变量或者数量。注意整数和字符串比较使用的是两套运算符。</p><h2 id="整数比较" tabindex="-1"><a class="header-anchor" href="#整数比较" aria-hidden="true">#</a> 整数比较</h2><h3 id="eq" tabindex="-1"><a class="header-anchor" href="#eq" aria-hidden="true">#</a> -eq</h3><p>等于</p><p><code>if [ &quot;$a&quot; -eq &quot;$b&quot; ]</code></p><h3 id="ne" tabindex="-1"><a class="header-anchor" href="#ne" aria-hidden="true">#</a> -ne</h3><p>不等于</p><p><code>if [ &quot;$a&quot; -ne &quot;$b&quot; ]</code></p><h3 id="gt" tabindex="-1"><a class="header-anchor" href="#gt" aria-hidden="true">#</a> -gt</h3><p>大于</p><p><code>if [ &quot;$a&quot; -gt &quot;$b&quot; ]</code></p><h3 id="ge" tabindex="-1"><a class="header-anchor" href="#ge" aria-hidden="true">#</a> -ge</h3><p>大于等于</p><p><code>if [ &quot;$a&quot; -ge &quot;$b&quot; ]</code></p><h3 id="lt" tabindex="-1"><a class="header-anchor" href="#lt" aria-hidden="true">#</a> -lt</h3><p>小于</p><p><code>if [ &quot;$a&quot; -lt &quot;$b&quot; ]</code></p><h3 id="le" tabindex="-1"><a class="header-anchor" href="#le" aria-hidden="true">#</a> -le</h3><p>小于等于</p><p><code>if [ &quot;$a&quot; -le &quot;$b&quot; ]</code></p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> &lt;</h3>',22),d={href:"http://tldp.org/LDP/abs/html/dblparens.html",target:"_blank",rel:"noopener noreferrer"},u=t('<p><code>((&quot;$a&quot; &lt; &quot;$b&quot;))</code></p><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> &lt;=</h3><p>小于等于（使用双圆括号）</p><p><code>((&quot;$a&quot; &lt;= &quot;$b&quot;))</code></p><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> &gt;</h3><p>大于（使用双圆括号）</p><p><code>((&quot;$a&quot; &gt; &quot;$b&quot;))</code></p><h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> &gt;=</h3><p>大于等于（使用双圆括号）</p><p><code>((&quot;$a&quot; &gt;= &quot;$b&quot;))</code></p><h2 id="字符串比较" tabindex="-1"><a class="header-anchor" href="#字符串比较" aria-hidden="true">#</a> 字符串比较</h2><h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> =</h3><p>等于</p><p><code>if [ &quot;$a&quot; = &quot;$b&quot; ]</code></p>',14),m=n("img",{src:"http://tldp.org/LDP/abs/images/caution.gif",alt:"caution"},null,-1),v=n("code",null,"=",-1),k={href:"http://tldp.org/LDP/abs/images/caution.gif",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[n("code",null,'if [ "$a"="$b" ]'),s(" 和上面不等价。")],-1),h=n("h3",{id:"-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#-5","aria-hidden":"true"},"#"),s(" ==")],-1),q=n("p",null,"等于",-1),g=n("p",null,[n("code",null,'if [ "$a" == "$b" ]')],-1),f=n("p",null,[s("和 "),n("code",null,"="),s(" 同义")],-1),_=n("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"note"},null,-1),$=n("code",null,"==",-1),y={href:"http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> z* <span class="token punctuation">]</span><span class="token punctuation">]</span>   <span class="token comment"># $a 以 &quot;z&quot; 开头时为真（模式匹配）</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token string">&quot;z*&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment"># $a 等于 z* 时为真（字符匹配）</span>

<span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> z* <span class="token punctuation">]</span>     <span class="token comment"># 发生文件匹配和字符分割。</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;z*&quot;</span> <span class="token punctuation">]</span> <span class="token comment"># $a 等于 z* 时为真（字符匹配）</span>

<span class="token comment"># 感谢 Stéphane Chazelas</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> !=</h3><p>不等于</p><p><code>if [ &quot;$a&quot; != &quot;$b&quot; ]</code></p>`,4),w={href:"http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"[[ ... ]]",-1),D=n("h3",{id:"-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#-7","aria-hidden":"true"},"#"),s(" <")],-1),z={href:"http://tldp.org/LDP/abs/html/special-chars.html#ASCIIDEF",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,[n("code",null,'if [[ "$a" < "$b" ]]')],-1),P=n("p",null,[n("code",null,'if [ "$a" \\< "$b" ]')],-1),E=n("code",null,"[]",-1),B=n("code",null,"<",-1),I={href:"http://tldp.org/LDP/abs/html/escapingsection.html#ESCP",target:"_blank",rel:"noopener noreferrer"},T=t('<h3 id="-8" tabindex="-1"><a class="header-anchor" href="#-8" aria-hidden="true">#</a> &gt;</h3><p>大于，按照 ASCII 码排序。</p><p><code>if [[ &quot;$a&quot; &gt; &quot;$b&quot; ]]</code></p><p><code>if [ &quot;$a&quot; \\&gt; &quot;$b&quot; ]</code></p><p>注意在 <code>[]</code> 结构里 <code>&gt;</code> 需要被转义。</p>',5),N={href:"http://tldp.org/LDP/abs/html/arrays.html#BUBBLE",target:"_blank",rel:"noopener noreferrer"},C=t(`<h3 id="z" tabindex="-1"><a class="header-anchor" href="#z" aria-hidden="true">#</a> -z</h3><p>字符串为空，即字符串长度为0。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">String</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>   <span class="token comment"># 长度为0的字符串变量。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$String</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$String</span> is null.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$String</span> is NOT null.&quot;</span>
<span class="token keyword">fi</span>     <span class="token comment"># $String is null.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> -n</h3><p>字符串非空（<code>null</code>）。</p>`,5),A=n("img",{src:"http://tldp.org/LDP/abs/images/caution.gif",alt:"caution"},null,-1),O=n("code",null,"-n",-1),R=n("code",null,"! -z",-1),F={href:"http://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST",target:"_blank",rel:"noopener noreferrer"},G=t(`<p>样例 7-5. 算术比较和字符串比较</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">5</span>

<span class="token comment"># 这里的 &quot;a&quot; 和 &quot;b&quot; 可以是整数也可以是字符串。</span>
<span class="token comment"># 因为 Bash 的变量是弱类型的，因此字符串和整数比较有很多相同之处。</span>

<span class="token comment"># 在 Bash 中可以用处理整数的方式来处理全是数字的字符串。</span>
<span class="token comment"># 但是谨慎使用。</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token parameter variable">-ne</span> <span class="token string">&quot;<span class="token variable">$b</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$a</span> is not equal to <span class="token variable">$b</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(arithmetic comparison)&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;<span class="token variable">$b</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$a</span> is not equal to <span class="token variable">$b</span>.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(string comparison)&quot;</span>
  <span class="token comment">#     &quot;4&quot;  != &quot;5&quot;</span>
  <span class="token comment"># ASCII 52 != ASCIII 53</span>
<span class="token keyword">fi</span>

<span class="token comment"># 在这个例子里 &quot;-ne&quot; 和 &quot;!=&quot; 都可以。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 7-6. 测试字符串是否为空（<code>null</code>）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># str-test.sh: 测试是否为空字符串或是未引用的字符串。</span>

<span class="token comment"># 使用 if [ ... ] 结构</span>

<span class="token comment"># 如果字符串未被初始化，则其值是未定义的。</span>
<span class="token comment"># 这种状态就是空 &quot;null&quot;（并不是 0）。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token variable">$string1</span> <span class="token punctuation">]</span>    <span class="token comment"># 并未声明或是初始化 string1。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is not null.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is null.&quot;</span>
<span class="token keyword">fi</span>
<span class="token comment"># 尽管没有初始化 string1，但是结果显示其非空。</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 再试一次。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$string1</span>&quot;</span> <span class="token punctuation">]</span>   <span class="token comment"># 这次引用了 $string1。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is not null.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is null.&quot;</span>
<span class="token keyword">fi</span>                    <span class="token comment"># 在测试括号内引用字符串得到了正确的结果。</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$string1</span> <span class="token punctuation">]</span>       <span class="token comment"># 这次只有一个 $string1。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is not null.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is null.&quot;</span>
<span class="token keyword">fi</span>                    <span class="token comment"># 结果正确。</span>
<span class="token comment"># 独立的 [ ... ] 测试运算符可以用来检测字符串是否为空。</span>
<span class="token comment"># 但是最好将字符串进行引用（if [ &quot;$string1&quot; ]）。</span>
<span class="token comment">#</span>
<span class="token comment"># Stephane Chazelas 指出：</span>
<span class="token comment">#    if [ $string1 ]    只有一个参数 &quot;]&quot;</span>
<span class="token comment">#    if [ &quot;$string1&quot; ]  则有两个参数，空的 &quot;$string1&quot; 和 &quot;]&quot;</span>


<span class="token builtin class-name">echo</span>


<span class="token assign-left variable">string1</span><span class="token operator">=</span>initialized

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$string1</span> <span class="token punctuation">]</span>       <span class="token comment"># $string1 这次仍然没有被引用。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is not null.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is null.&quot;</span>
<span class="token keyword">fi</span>                    <span class="token comment"># 这次的结果仍然是正确的。</span>
<span class="token comment"># 最好将字符串引用（&quot;$string1&quot;）</span>


<span class="token assign-left variable">string1</span><span class="token operator">=</span><span class="token string">&quot;a = b&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$string1</span> <span class="token punctuation">]</span>       <span class="token comment"># $string1 这次仍然没有被引用。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is not null.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;String <span class="token entity" title="\\&quot;">\\&quot;</span>string1<span class="token entity" title="\\&quot;">\\&quot;</span> is null.&quot;</span>
<span class="token keyword">fi</span>                    <span class="token comment"># 这次没有引用就错了。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>   <span class="token comment"># 同时感谢 Florian Wisser 的提示。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 7-7. <code>zmore</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># zmore</span>

<span class="token comment"># 使用筛选器 &#39;more&#39; 查看 gzipped 文件。</span>

<span class="token assign-left variable">E_NOARGS</span><span class="token operator">=</span><span class="token number">85</span>
<span class="token assign-left variable">E_NOTFOUND</span><span class="token operator">=</span><span class="token number">86</span>
<span class="token assign-left variable">E_NOTGZIP</span><span class="token operator">=</span><span class="token number">87</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token comment"># 作用和 if [ -z &quot;$1&quot; ] 相同。</span>
<span class="token comment"># $1 可以为空： zmore &quot;&quot; arg2 arg3</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> filename&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
  <span class="token comment"># 将错误信息通过标准错误 stderr 进行输出。</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOARGS</span>
  <span class="token comment"># 脚本的退出状态为 85.</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$filename</span>&quot;</span> <span class="token punctuation">]</span>   <span class="token comment"># 引用字符串以防字符串中带有空格。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File <span class="token variable">$filename</span> not found!&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>   <span class="token comment"># 通过标准错误 stderr 进行输出。</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOTFOUND</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${filename<span class="token operator">##</span>*.}</span> <span class="token operator">!=</span> <span class="token string">&quot;gz&quot;</span> <span class="token punctuation">]</span>
<span class="token comment"># 在括号内使用变量代换。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File <span class="token variable">$1</span> is not a gzipped file!&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOTGZIP</span>
<span class="token keyword">fi</span>

zcat <span class="token variable">$1</span> <span class="token operator">|</span> <span class="token function">more</span>

<span class="token comment"># 使用筛选器 &#39;more&#39;</span>
<span class="token comment"># 也可以用 &#39;less&#39; 替代</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>   <span class="token comment"># 脚本的退出状态由管道 pipe 的退出状态决定。</span>
<span class="token comment">#  实际上 &quot;exit $?&quot; 不一定要写出来，</span>
<span class="token comment">#+ 因为无论如何脚本都会返回最后执行命令的退出状态。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复合比较" tabindex="-1"><a class="header-anchor" href="#复合比较" aria-hidden="true">#</a> 复合比较</h2><h3 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> -a</h3><p>逻辑与</p><p><code>exp1 -a exp2</code> 返回真当且仅当 <code>exp1</code> 和 <code>exp2</code> 均为真。</p><h3 id="o" tabindex="-1"><a class="header-anchor" href="#o" aria-hidden="true">#</a> -o</h3><p>逻辑或</p><p>如果 <code>exp1</code> 或 <code>exp2</code> 为真，则 <code>exp1 -o exp2</code> 返回真。</p>`,13),U={href:"http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"&&",-1),K=n("code",null,"||",-1),W=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> condition1 <span class="token operator">&amp;&amp;</span> condition2 <span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),Z=n("code",null,"-o",-1),H=n("code",null,"-a",-1),M={href:"http://tldp.org/LDP/abs/html/testconstructs.html#TTESTREF",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"test",-1),j=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$expr1</span>&quot;</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;<span class="token variable">$expr2</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Both expr1 and expr2 are true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Either expr1 or expr2 is false.&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution"> rihad 指出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span> <span class="token number">1</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token boolean">true</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;2</span><span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span>   <span class="token comment"># 真</span>
<span class="token punctuation">[</span> <span class="token number">1</span> <span class="token parameter variable">-eq</span> <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token boolean">true</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;2</span><span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span>   <span class="token comment"># 没有输出</span>
<span class="token comment"># ^^^^^^^ 条件为假。到这里为止，一切都按预期执行。</span>

<span class="token comment"># 但是</span>
<span class="token punctuation">[</span> <span class="token number">1</span> <span class="token parameter variable">-eq</span> <span class="token number">2</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token boolean">true</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;2</span><span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span>       <span class="token comment"># 真</span>
<span class="token comment"># ^^^^^^^ 条件为假。但是为什么结果为真？</span>

<span class="token comment"># 是因为括号内的两个条件子句都执行了么？</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token number">1</span> <span class="token parameter variable">-eq</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token boolean">true</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;2</span><span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>     <span class="token comment"># 没有输出</span>
<span class="token comment"># 并不是。</span>

<span class="token comment">#  所以显然 &amp;&amp; 和 || 具备“短路”机制，</span>
<span class="token comment">#+ 例如对于 &amp;&amp;，若第一个表达式为假，则不执行第二个表达式直接返回假，</span>
<span class="token comment">#+ 而 -a 和 -o 则不是。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),J={href:"http://tldp.org/LDP/abs/html/ops.html#ANDOR",target:"_blank",rel:"noopener noreferrer"},Q={href:"http://tldp.org/LDP/abs/html/arrays.html#TWODIM",target:"_blank",rel:"noopener noreferrer"},Y={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#WHX",target:"_blank",rel:"noopener noreferrer"},nn=n("p",null,[s("[^1]: S.C. 指出在复合测试中，仅仅引用字符串可能还不够。比如表达式 "),n("code",null,'[ -n "$string" -o "$a" = "$b" ]'),s(" 在某些 Bash 版本下，如果 "),n("code",null,"$string"),s(" 为空可能会出错。更加安全的方式是，对于可能为空的字符串，添加一个额外的字符，例如 "),n("code",null,'[ "x$string" != x -o "x$a" = "x$b" ]'),s("（其中的 x 互相抵消）。")],-1);function sn(an,en){const a=i("ExternalLinkIcon");return o(),p("div",null,[r,n("p",null,[s("小于（使用 "),n("a",d,[s("双圆括号"),e(a)]),s("）")]),u,n("p",null,[m,s(" 注意在"),v,s("前后要加上"),n("a",k,[s("空格"),e(a)])]),b,h,q,g,f,n("p",null,[_,s(),$,s(" 运算符在 "),n("a",y,[s("双方括号"),e(a)]),s(" 和单方括号里表现不同。")]),x,n("p",null,[s("在 "),n("a",w,[S,e(a)]),s(" 结构中会进行模式匹配。")]),D,n("p",null,[s("小于，按照 "),n("a",z,[s("ASCII码"),e(a)]),s(" 排序。")]),L,P,n("p",null,[s("注意在 "),E,s(" 结构里 "),B,s(" 需要被 "),n("a",I,[s("转义"),e(a)]),s("。")]),T,n("p",null,[n("a",N,[s("样例 27-11"),e(a)]),s(" 包含了比较运算符。")]),C,n("p",null,[A,s(" 使用 "),O,s(" 时字符串必须是在括号中且被引用的。使用 "),R,s(" 判断未引用的字符串或者直接判断（"),n("a",F,[s("样例 7-6"),e(a)]),s("）通常可行，但是非常危险。判断字符串时一定要引用[^1]。")]),G,n("p",null,[s("以上两个操作和 "),n("a",U,[s("双方括号"),e(a)]),s(" 结构中的 Bash 比较运算符号 "),V,s(" 和 "),K,s(" 类似。")]),W,n("p",null,[s("测试操作 "),Z,s(" 和 "),H,s(" 可以在 "),n("a",M,[X,e(a)]),s(" 命令或在测试括号中进行。")]),j,n("p",null,[s("复合比较操作的例子可以参考 "),n("a",J,[s("样例 8-3"),e(a)]),s("，"),n("a",Q,[s("样例 27-17"),e(a)]),s(" 和 "),n("a",Y,[s("样例 A-29"),e(a)]),s("。")]),nn])}const on=l(c,[["render",sn],["__file","07_3_other_comparison_operators.html.vue"]]);export{on as default};
