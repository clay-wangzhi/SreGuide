<template><h1 id="_10-1-1-使用-awk-处理字符串" tabindex="-1"><a class="header-anchor" href="#_10-1-1-使用-awk-处理字符串" aria-hidden="true">#</a> 10.1.1 使用 <code>awk</code> 处理字符串</h1>
<p>在 Bash 脚本中可以调用字符串处理工具 <code>awk</code> 来替换内置的字符串处理操作。</p>
<p>样例 10-6. 使用另一种方式来截取和定位子字符串</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># substring-extraction.sh</span>

<span class="token assign-left variable">String</span><span class="token operator">=</span>23skidoo1
<span class="token comment">#      012345678    Bash</span>
<span class="token comment">#      123456789    awk</span>
<span class="token comment"># 注意不同字符串索引系统：</span>
<span class="token comment"># Bash 中第一个字符的位置为0。</span>
<span class="token comment"># Awk 中第一个字符的位置为1。</span>

<span class="token builtin class-name">echo</span> <span class="token variable">${String<span class="token operator">:</span>2<span class="token operator">:</span>4}</span> <span class="token comment"># 从第3位开始（0-1-2），4个字符的长度</span>
                                         <span class="token comment"># skid</span>

<span class="token comment"># Awk 中与 ${string:pos:length} 等价的是 substr(string,pos,length)。</span>
<span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'
{ print substr("'</span>"<span class="token variable">${String}</span><span class="token string">"'"</span>,3,4<span class="token punctuation">)</span>      <span class="token comment"># skid</span>
<span class="token punctuation">}</span>
<span class="token string">'
#  将空的 "echo" 通过管道传递给 awk 作为一个模拟输入，
#+ 这样就不需要提供一个文件名来操作 awk 了。

echo "----"

# 同样的：

echo | awk '</span>
<span class="token punctuation">{</span> print index<span class="token punctuation">(</span><span class="token string">"'"</span><span class="token variable">${String}</span><span class="token string">"'"</span>, <span class="token string">"skid"</span><span class="token punctuation">)</span>      <span class="token comment"># 3</span>
<span class="token punctuation">}</span>                                           <span class="token comment"># （skid 从第3位开始）</span>
'   <span class="token comment"># 这里使用 awk 等价于 "expr index"。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></template>
