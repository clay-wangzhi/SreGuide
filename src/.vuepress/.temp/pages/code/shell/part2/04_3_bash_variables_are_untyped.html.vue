<template><h1 id="_4-3-bash变量是弱类型的" tabindex="-1"><a class="header-anchor" href="#_4-3-bash变量是弱类型的" aria-hidden="true">#</a> 4.3 Bash变量是弱类型的</h1>
<p>不同于许多其他编程语言，Bash 并不区分变量的类型。本质上说，<em>Bash 变量是字符串</em>，但在某些情况下，Bash 允许对变量进行算术运算和比较。决定因素则是变量值是否只含有数字。</p>
<p>样例 4-4. 整数还是字符串？</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># int-or-string.sh</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">2334</span>                   <span class="token comment"># 整数。</span>
<span class="token builtin class-name">let</span> <span class="token string">"a += 1"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span> "</span>           <span class="token comment"># a = 2335</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># 依旧是整数。</span>


<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token variable">${a<span class="token operator">/</span>23<span class="token operator">/</span>BB}</span>             <span class="token comment"># 将 "23" 替换为 "BB"。</span>
                         <span class="token comment"># $b 变成了字符串。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"b = <span class="token variable">$b</span>"</span>            <span class="token comment"># b = BB35</span>
<span class="token builtin class-name">declare</span> -i b             <span class="token comment"># 将其声明为整数并没有什么卵用。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"b = <span class="token variable">$b</span>"</span>            <span class="token comment"># b = BB35</span>

<span class="token builtin class-name">let</span> <span class="token string">"b += 1"</span>             <span class="token comment"># BB35 + 1</span>
<span class="token builtin class-name">echo</span> <span class="token string">"b = <span class="token variable">$b</span>"</span>            <span class="token comment"># b = 1</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># Bash 认为字符串的"整数值"为0。</span>

<span class="token assign-left variable">c</span><span class="token operator">=</span>BB34
<span class="token builtin class-name">echo</span> <span class="token string">"c = <span class="token variable">$c</span>"</span>            <span class="token comment"># c = BB34</span>
<span class="token assign-left variable">d</span><span class="token operator">=</span><span class="token variable">${c<span class="token operator">/</span>BB<span class="token operator">/</span>23}</span>             <span class="token comment"># 将 "BB" 替换为 "23"。</span>
                         <span class="token comment"># $d 变为了一个整数。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"d = <span class="token variable">$d</span>"</span>            <span class="token comment"># d = 2334</span>
<span class="token builtin class-name">let</span> <span class="token string">"d += 1"</span>             <span class="token comment"># 2334 + 1</span>
<span class="token builtin class-name">echo</span> <span class="token string">"d = <span class="token variable">$d</span>"</span>            <span class="token comment"># d = 2335</span>
<span class="token builtin class-name">echo</span>


<span class="token comment"># 如果是空值会怎样呢？</span>
<span class="token assign-left variable">e</span><span class="token operator">=</span><span class="token string">''</span>                     <span class="token comment"># ...也可以是 e="" 或 e=</span>
<span class="token builtin class-name">echo</span> <span class="token string">"e = <span class="token variable">$e</span>"</span>            <span class="token comment"># e =</span>
<span class="token builtin class-name">let</span> <span class="token string">"e += 1"</span>             <span class="token comment"># 空值是否允许进行算术运算？</span>
<span class="token builtin class-name">echo</span> <span class="token string">"e = <span class="token variable">$e</span>"</span>            <span class="token comment"># e = 1</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># 空值变为了一个整数。</span>

<span class="token comment"># 如果时未声明的变量呢？</span>
<span class="token builtin class-name">echo</span> <span class="token string">"f = <span class="token variable">$f</span>"</span>            <span class="token comment"># f =</span>
<span class="token builtin class-name">let</span> <span class="token string">"f += 1"</span>             <span class="token comment"># 是否允许进行算术运算？</span>
<span class="token builtin class-name">echo</span> <span class="token string">"f = <span class="token variable">$f</span>"</span>            <span class="token comment"># f = 1</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># 未声明变量变为了一个整数。</span>
<span class="token comment">#</span>
<span class="token comment"># 然而……</span>
<span class="token builtin class-name">let</span> <span class="token string">"f /= <span class="token variable">$undecl_var</span>"</span>   <span class="token comment"># 可以除以0么？</span>
<span class="token comment">#   let: f /= : syntax error: operand expected (error token is " ")</span>
<span class="token comment"># 语法错误！在这里 $undecl_var 并没有被设置为0！</span>
<span class="token comment">#</span>
<span class="token comment"># 但是，仍旧……</span>
<span class="token builtin class-name">let</span> <span class="token string">"f /= 0"</span>
<span class="token comment">#   let: f /= 0: division by 0 (error token is "0")</span>
<span class="token comment"># 预期之中。</span>


<span class="token comment"># 在执行算术运算时，Bash 通常将其空值的整数值设为0。</span>
<span class="token comment"># 但是不要做这种事情！</span>
<span class="token comment"># 因为这可能会导致一些意外的后果。</span>


<span class="token comment"># 结论：上面的结果都表明 Bash 中的变量是弱类型的。</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>弱类型变量有利有弊。它可以使编程更加灵活、更加容易（给与你足够的想象空间）。但它也同样的容易造成一些小错误，容易养成粗心大意的编程习惯。</p>
<p>为了减轻脚本持续跟踪变量类型的负担，Bash <em>不允许</em>变量声明。</p>
</template>
