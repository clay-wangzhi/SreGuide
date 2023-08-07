import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-81daf73f.js";const t={},i=e(`<h1 id="_5-2-转义" tabindex="-1"><a class="header-anchor" href="#_5-2-转义" aria-hidden="true">#</a> 5.2 转义</h1><p>转义是一种引用单字符的方法。通过在特殊字符前加上转义符 <code>\\</code> 来告诉shell按照字面意思去解释这个字符。</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice"> 需要注意的是，在一些特定的命令和工具，比如 <code>echo</code> 和 <code>sed</code> 中，转义字符通常会起到相反的效果，即可能会使得那些字符产生特殊含义。</p></blockquote><p>在 <code>echo</code> 与 <code>sed</code> 命令中，转义字符的特殊含义</p><h3 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> \\n</h3><p>换行（line feed）。</p><h3 id="r" tabindex="-1"><a class="header-anchor" href="#r" aria-hidden="true">#</a> \\r</h3><p>回车（carriage return）。</p><h3 id="t" tabindex="-1"><a class="header-anchor" href="#t" aria-hidden="true">#</a> \\t</h3><p>水平制表符。</p><h3 id="v" tabindex="-1"><a class="header-anchor" href="#v" aria-hidden="true">#</a> \\v</h3><p>垂直制表符。</p><h3 id="b" tabindex="-1"><a class="header-anchor" href="#b" aria-hidden="true">#</a> \\b</h3><p>退格。</p><h3 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> \\a</h3><p>警报、响铃或闪烁。</p><h3 id="_0xx" tabindex="-1"><a class="header-anchor" href="#_0xx" aria-hidden="true">#</a> \\0xx</h3><p>ASCII码的八进制形式，等价于 <code>0nn</code>，其中 <code>nn</code> 是数字。</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/important.gif" alt="important"> 在 <code>$&#39; ... &#39;</code> 字符串扩展结构中可以通过转义八进制或十六进制的ASCII码形式给变量赋值，比如 <code>quote=$&#39;\\042&#39;</code>。</p></blockquote><p>样例 5-2. 转义字符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># escaped.sh: 转义字符</span>

<span class="token comment">##############################################</span>
<span class="token comment">### 首先让我们先看一下转义字符的基本用法。 ###</span>
<span class="token comment">##############################################</span>

<span class="token comment"># 转义新的一行。</span>
<span class="token comment"># ------------</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;This will print
as two lines.&quot;</span>
<span class="token comment"># This will print</span>
<span class="token comment"># as two lines.</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;This will print \\
as one line.&quot;</span>
<span class="token comment"># This will print as one line.</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;=============&quot;</span>


<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span>&quot;</span>      <span class="token comment"># 按字面意思打印 \\v\\v\\v\\v</span>
<span class="token comment"># 使用 echo 命令的 -e 选项来打印转义字符。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=============&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;VERTICAL TABS&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span><span class="token entity" title="\\v">\\v</span>&quot;</span>   <span class="token comment"># 打印四个垂直制表符。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;==============&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;QUOTATION MARK&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\042">\\042</span>&quot;</span>       <span class="token comment"># 打印 &quot; （引号，八进制ASCII码为42）。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;==============&quot;</span>



<span class="token comment"># 使用 $&#39;\\X&#39; 这样的形式后可以不需要加 -e 选项。</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;NEWLINE and (maybe) BEEP&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">$&#39;<span class="token entity" title="\\n">\\n</span>&#39;</span>           <span class="token comment"># 新的一行。</span>
<span class="token builtin class-name">echo</span> <span class="token string">$&#39;<span class="token entity" title="\\a">\\a</span>&#39;</span>           <span class="token comment"># 警报（响铃）。</span>
                     <span class="token comment"># 根据不同的终端版本，也可能是闪屏。</span>

<span class="token comment"># 我们之前介绍了 $&#39;\\nnn</span><span class="token string">&#39; 字符串扩展，而现在我们要看到的是...

# ============================================ #
# 自 Bash 第二个版本开始的 $&#39;</span><span class="token punctuation">\\</span>nnn<span class="token string">&#39; 字符串扩展结构。
# ============================================ #

echo &quot;Introducing the \\$\\&#39;</span> <span class="token punctuation">..</span>. <span class="token punctuation">\\</span>&#39; string-expansion construct <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token string">&quot;
echo &quot;</span><span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> featuring <span class="token function">more</span> quotation marks.<span class="token string">&quot;

echo $&#39;<span class="token entity" title="\\t">\\t</span> <span class="token entity" title="\\042">\\042</span> <span class="token entity" title="\\t">\\t</span>&#39;   # 在制表符之间的引号。
# 需要注意的是 &#39;<span class="token entity" title="\\n">\\n</span>nn&#39; 是一个八进制的值。

# 字符串扩展同样适用于十六进制的值，格式是 $&#39;\\xhhh&#39;。
echo $&#39;<span class="token entity" title="\\t">\\t</span> <span class="token entity" title="\\x22">\\x22</span> <span class="token entity" title="\\t">\\t</span>&#39;  # 在制表符之间的引号。
# 感谢 Greg Keraunen 指出这些。
# 在早期的 Bash 版本中允许使用 &#39;<span class="token entity" title="\\x02">\\x02</span>2&#39; 这样的形式。

echo


# 将 ASCII 码字符赋值给变量。
# -----------------------
quote=$&#39;<span class="token entity" title="\\042">\\042</span>&#39;        # 将 &quot;</span> 赋值给变量。
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$quote</span> Quoted string <span class="token variable">$quote</span> and this lies outside the quotes.&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 连接多个 ASCII 码字符给变量。</span>
<span class="token assign-left variable">triple_underline</span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\137">\\137</span><span class="token entity" title="\\137">\\137</span><span class="token entity" title="\\137">\\137</span>&#39;</span>  <span class="token comment"># 137是 &#39;_</span><span class="token string">&#39; ASCII码的八进制形式
echo &quot;$triple_underline UNDERLINE $triple_underline&quot;

echo

ABC=$&#39;</span><span class="token punctuation">\\</span><span class="token number">101</span><span class="token punctuation">\\</span><span class="token number">102</span><span class="token punctuation">\\</span><span class="token number">103</span><span class="token punctuation">\\</span>010<span class="token string">&#39;           # 101，102，103是 A, B, C 
                                  # ASCII码的八进制形式。
echo $ABC

echo

escape=$&#39;</span><span class="token punctuation">\\</span>033&#39;                    <span class="token comment"># 033 是 ESC 的八进制形式</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>escape<span class="token entity" title="\\&quot;">\\&quot;</span> echoes an <span class="token variable">$escape</span>&quot;</span>
                                  <span class="token comment"># 没有可见输出</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个更加复杂的例子：</p><p>样例 5-3. 检测键盘输入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 作者：Sigurd Solaas，作于2011年4月20日</span>
<span class="token comment"># 授权在《高级Bash脚本编程指南》中使用。</span>
<span class="token comment"># 需要 Bash 版本高于4.2。</span>

<span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&quot;no value yet&quot;</span>
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token function">clear</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Bash Extra Keys Demo. Keys to try:&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;* Insert, Delete, Home, End, Page_Up and Page_Down&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;* The four arrow keys&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;* Tab, enter, escape, and space key&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;* The letter and number keys, etc.&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;    d = show date/time&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;    q = quit&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;================================&quot;</span>
  <span class="token builtin class-name">echo</span>
  
  <span class="token comment"># 将独立的Home键值转换为数字7上的Home键值：</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$key</span>&quot;</span> <span class="token operator">=</span> <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x4f">\\x4f</span><span class="token entity" title="\\x48">\\x48</span>&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x31">\\x31</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span>
   <span class="token comment">#   引用字符扩展结构。</span>
  <span class="token keyword">fi</span>
  
  <span class="token comment"># 将独立的End键值转换为数字1上的End键值：</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$key</span>&quot;</span> <span class="token operator">=</span> <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x4f">\\x4f</span><span class="token entity" title="\\x46">\\x46</span>&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x34">\\x34</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span>
  <span class="token keyword">fi</span>
  
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$key</span>&quot;</span> <span class="token keyword">in</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x32">\\x32</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 插入</span>
    <span class="token builtin class-name">echo</span> Insert Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x33">\\x33</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 删除</span>
    <span class="token builtin class-name">echo</span> Delete Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x31">\\x31</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 数字7上的Home键</span>
    <span class="token builtin class-name">echo</span> Home Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x34">\\x34</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 数字1上的End键</span>
    <span class="token builtin class-name">echo</span> End Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x35">\\x35</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 上翻页</span>
    <span class="token builtin class-name">echo</span> Page_Up
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x36">\\x36</span><span class="token entity" title="\\x7e">\\x7e</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 下翻页</span>
    <span class="token builtin class-name">echo</span> Page_Down
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x41">\\x41</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 上箭头</span>
    <span class="token builtin class-name">echo</span> Up arrow
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x42">\\x42</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 下箭头</span>
    <span class="token builtin class-name">echo</span> Down arrow
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x43">\\x43</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 右箭头</span>
    <span class="token builtin class-name">echo</span> Right arrow
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span><span class="token entity" title="\\x44">\\x44</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 左箭头</span>
    <span class="token builtin class-name">echo</span> Left arrow
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x09">\\x09</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 制表符</span>
    <span class="token builtin class-name">echo</span> Tab Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x0a">\\x0a</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 回车</span>
    <span class="token builtin class-name">echo</span> Enter Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x1b">\\x1b</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># ESC</span>
    <span class="token builtin class-name">echo</span> Escape Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   <span class="token string">$&#39;<span class="token entity" title="\\x20">\\x20</span>&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 空格</span>
    <span class="token builtin class-name">echo</span> Space Key
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   d<span class="token punctuation">)</span>
    <span class="token function">date</span>
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   q<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> Time to quit<span class="token punctuation">..</span>.
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
   *<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> Your pressed: <span class="token punctuation">\\</span>&#39;<span class="token string">&quot;<span class="token variable">$key</span>&quot;</span><span class="token punctuation">\\</span>&#39;
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;================================&quot;</span>
  
  <span class="token builtin class-name">unset</span> K1 K2 K3
  <span class="token builtin class-name">read</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-N1</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Press a key: &quot;</span>
  <span class="token assign-left variable">K1</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$REPLY</span>&quot;</span>
  <span class="token builtin class-name">read</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-N2</span> <span class="token parameter variable">-t</span> <span class="token number">0.001</span>
  <span class="token assign-left variable">K2</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$REPLY</span>&quot;</span>
  <span class="token builtin class-name">read</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-N1</span> <span class="token parameter variable">-t</span> <span class="token number">0.001</span>
  <span class="token assign-left variable">K3</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$REPLY</span>&quot;</span>
  <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$K1</span><span class="token variable">$K2</span><span class="token variable">$K3</span>&quot;</span>
  
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以查看样例 37-1。</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> \\&quot;</h3><p>转义引号，指代自身。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello&quot;</span>                     <span class="token comment"># Hello</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Hello<span class="token entity" title="\\&quot;">\\&quot;</span> ... he said.&quot;</span>    <span class="token comment"># &quot;Hello&quot; ... he said.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> \\$</h3><p>转义美元符号（跟在 <code>\\\\$</code> 后的变量名将不会被引用）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$variable01</span>&quot;</span>           <span class="token comment"># $variable01</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The book cost \\<span class="token variable">$7</span>.98.&quot;</span>  <span class="token comment"># The book cost $7.98.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> \\\\</h3><p>转义反斜杠，指代自身。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>&quot;</span>  <span class="token comment"># 结果是 \\</span>

<span class="token comment"># 然而...</span>

<span class="token builtin class-name">echo</span> &quot;<span class="token punctuation">\\</span>&quot;   <span class="token comment"># 在命令行中会出现第二行并提示输入。</span>
           <span class="token comment"># 在脚本中会出错。</span>
           
<span class="token comment"># 但是...</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;\\&#39;</span>   <span class="token comment"># 结果是 \\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 根据转义符所在的上下文（强引用、弱引用，命令替换或者在 here document）的不同，它的行为也会有所不同。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>                      <span class="token comment">#  简单转义与引用</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>z               <span class="token comment">#  z</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>z              <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\\z&#39;</span>             <span class="token comment"># \\z</span>
ehco <span class="token string">&#39;\\\\z&#39;</span>            <span class="token comment"># \\\\z</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\z&quot;</span>             <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>z&quot;</span>            <span class="token comment"># \\z</span>
<span class="token operator">&gt;</span>
                      <span class="token comment">#  命令替换</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>        <span class="token comment">#  z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>       <span class="token comment">#  z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>      <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>     <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>   <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>z<span class="token variable">\`</span></span>  <span class="token comment"># \\\\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;\\z&quot;</span><span class="token variable">\`</span></span>      <span class="token comment"># \\z</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>z&quot;</span><span class="token variable">\`</span></span>     <span class="token comment"># \\z</span>
<span class="token operator">&gt;</span>
                      <span class="token comment"># Here Document</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
\\z
EOF</span>                   <span class="token comment"># \\z</span>
<span class="token operator">&gt;</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
<span class="token entity" title="\\\\">\\\\</span>z
EOF</span>                   <span class="token comment"># \\z</span>
<span class="token operator">&gt;</span>
<span class="token comment"># 以上例子由 Stéphane Chazelas 提供。 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>含有转义字符的字符串可以赋值给变量，但是仅仅将单一的转义符赋值给变量是不可行的。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>
<span class="token comment"># 这样做会报如下错误：</span>
<span class="token comment"># tesh.sh: : command not found</span>
<span class="token comment"># 单独的转义符不能够赋值给变量。</span>
<span class="token comment"># </span>
<span class="token comment">#  事实上，&quot;\\&quot; 转义了换行，实际效果是：</span>
<span class="token comment">#+ variable=echo &quot;$variable&quot;</span>
<span class="token comment">#+ 这是一个非法的赋值方式。</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span>
23skidoo
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>        <span class="token comment"># 23skidoo</span>
                        <span class="token comment"># 因为第二行是一个合法的赋值，因此不会报错。</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span> 
<span class="token comment">#        \\^    转义符后有一个空格</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>        <span class="token comment"># 空格</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>        <span class="token comment"># \\</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>
<span class="token comment"># 这样做会报如下错误：</span>
<span class="token comment"># tesh.sh: \\: command not found</span>
<span class="token comment">#</span>
<span class="token comment">#  第一个转义符转转义了第二个，但是第三个转义符仍旧转义的是换行，</span>
<span class="token comment">#+ 跟开始的那个例子一样，因此会报错。</span>
<span class="token operator">&gt;</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span><span class="token punctuation">\\</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span>        <span class="token comment"># \\\\</span>
                        <span class="token comment"># 第二个和第四个转义符被转义了，因此可行。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转义空格能够避免在命令参数列表中的字符分割问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">file_list</span><span class="token operator">=</span><span class="token string">&quot;/bin/cat /bin/gzip /bin/more /usr/bin/less /usr/bin/emacs-20.7&quot;</span>
<span class="token comment"># 将一系列文件作为命令的参数。</span>

<span class="token comment"># 增加两个文件到列表中，并且列出整个表。</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /usr/X11R6/bin/xsetroot /sbin/dump <span class="token variable">$file_list</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;-------------------------------------------------------------------------&quot;</span>

<span class="token comment"># 如果我们转义了这些空格会怎样？</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /usr/X11R6/bin/xsetroot<span class="token punctuation">\\</span> /sbin/dump<span class="token punctuation">\\</span> <span class="token variable">$file_list</span>
<span class="token comment"># 错误：因为转义了两个空格，因此前三个文件被连接成了一个参数传递给了 &#39;ls -l&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转义符也提供一种可以撰写多行命令的方式。通常，每一行是一个命令，但是转义换行后命令就可以在下一行继续撰写。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>cd /source/directory <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> cf - <span class="token builtin class-name">.</span> <span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">\\</span>
<span class="token punctuation">(</span>cd /dest/directory <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xpvf -<span class="token punctuation">)</span>
<span class="token comment"># 回顾 Alan Cox 的目录树拷贝命令，但是把它拆成了两行。</span>

<span class="token comment"># 或者你也可以：</span>
<span class="token function">tar</span> cf - <span class="token parameter variable">-C</span> /source/directory <span class="token builtin class-name">.</span> <span class="token operator">|</span>
<span class="token function">tar</span> xpvf - <span class="token parameter variable">-C</span> /dest/directory
<span class="token comment"># 可以看下方的注释。</span>
<span class="token comment"># （感谢 Stéphane Chazelas。）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 在脚本中，如果以 &quot;|&quot; 管道作为一行的结束字符，那么不需要加转义符 \\ 也可以写多行命令。但是一个好的编程习惯就是在写多行命令的事后，无论什么情况都要在行尾加上转义符 \\。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;foo
bar&quot;</span>
<span class="token comment">#foo</span>
<span class="token comment">#bar</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;foo
bar&#39;</span>    <span class="token comment"># 没有区别。</span>
<span class="token comment">#foo</span>
<span class="token comment">#bar</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> foo<span class="token punctuation">\\</span>
bar     <span class="token comment"># 转义换行。</span>
<span class="token comment">#foobar</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;foo\\
bar&quot;</span>     <span class="token comment"># 没有区别，在弱引用中，\\ 转义符仍旧转义了换行。</span>
<span class="token comment">#foobar</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;foo\\
bar&#39;</span>     <span class="token comment"># 在强引用中，\\ 就按照字面意思来解释了。</span>
<span class="token comment">#foo\\</span>
<span class="token comment">#bar</span>

<span class="token comment"># 由 Stéphane Chazelas 提供的例子。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),l=[i];function c(p,o){return s(),a("div",null,l)}const r=n(t,[["render",c],["__file","05_2_escaping.html.vue"]]);export{r as default};
