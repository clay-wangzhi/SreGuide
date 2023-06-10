<template><div><h1 id="_18-1-正则表达式简介" tabindex="-1"><a class="header-anchor" href="#_18-1-正则表达式简介" aria-hidden="true">#</a> 18.1 正则表达式简介</h1>
<p>正则表达式是一系列的字符串。这些包含超过其字面含义的字符串被称之为元字符。例如，一个符号前面的引用符代表一个人的言语能力，或者按照上面的说法，代表着meta-meaning<a href="http://tldp.org/LDP/abs/html/x17129.html#FTN.AEN17134" target="_blank" rel="noopener noreferrer">[1]<ExternalLinkIcon/></a>。正则表达式是一组字符串和（或者）一组匹配（特定的）模式的元字符。</p>
<p>一个正则表达式包含下面的一个或多个选项：</p>
<ul>
<li>一组字符串。这是仅仅表示字面意思的字符串。最简单形式的正则表达式仅仅包含一组字符串。</li>
<li>一个锚字符。锚节点指定了正则表达式在一行文本中的匹配位置。例如，^和$就是锚字符。</li>
<li>修饰符。修饰符扩展或者限定（修改）了正则表达式在文本中的匹配范围。修饰符包括星号、方括号和反斜线。</li>
</ul>
<p>正则表达式的主要用在文本搜索和字符串操作。一个正则表达式匹配单个字符或者一组字符 -- 一系列的字符或者字符串的一部分。</p>
<ul>
<li>
<p>星号 * 匹配前面的子表达式任意次，包括0次</p>
<p>&quot;1133*&quot;匹配&quot;11&quot;加一个或多个&quot;3&quot;：113，1133，1133333，及以后</p>
</li>
<li>
<p>点号 . 匹配任意字符，除了新的一行<a href="http://tldp.org/LDP/abs/html/x17129.html#AEN17189" target="_blank" rel="noopener noreferrer">[2]<ExternalLinkIcon/></a></p>
<p>&quot;13.&quot;匹配&quot;13&quot;加至少一个字符（包括空格）：1133，11333，但不是13（缺少额外的字符）<br>
参见例子<a href="http://tldp.org/LDP/abs/html/textproc.html#CWSOLVER" target="_blank" rel="noopener noreferrer">16-18<ExternalLinkIcon/></a>，展示单字符匹配</p>
</li>
<li>
<p>脱字符 ^ 匹配行的起始位置，但有时候会根据上下文环境匹配其相反的意义（译者注：例如[^a]匹配任意一个非a的字符）</p>
</li>
<li>
<p>美元符 $ 匹配行的结束位置</p>
<p>&quot;XXX$&quot;匹配行尾处的&quot;XXX&quot;<br>
&quot;^$&quot;匹配空行</p>
</li>
<li>
<p>方括号 [...] 匹配所包含的任意一个字符</p>
<p>&quot;[xyz]&quot;匹配x、y或z中的任意一个字符<br>
&quot;[c-n]&quot;匹配c到n之间的任意一个字符<br>
&quot;[B-Pk-y]&quot;匹配B到P和k到y之间任意一个字符<br>
&quot;[a-z0-9]&quot;匹配任意一个小写字符和任意一个数字<br>
&quot;[^b-d]&quot;匹配任意一个不在b到d之间的字符。这是一个很好的例子，展示了&quot;^&quot;的匹配了正则表达式的反义（类似在其他环境下的&quot;!&quot;符号所起的作用）<br>
组合一连串的用方括号括起来的字符能匹配非常多的词组模式。&quot;[Yy][Ee][Ss]&quot;匹配yes、Yes、YES、yEs等等。&quot;[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]&quot;匹配任何一个社会保险号</p>
</li>
<li>
<p>反斜线 \ 转义一个特殊字符，意味着这个字符被解释为字面意义（因此不再包含特殊意思）</p>
<p>&quot;$&quot;表示回它的字面意义&quot;$&quot;，而不是它原本在正则表达式中代表行尾的意义。同样，&quot;\&quot;表示字面意义&quot;&quot;</p>
</li>
<li>
<p>转义后的尖括号 &lt;..&gt; 代表词组的边界</p>
<p>尖括号必须进行转义，否则它们就代表其字面意义<br>
&quot;&lt;the&gt;&quot;匹配词组&quot;the&quot;，而不是词组&quot;them,&quot; &quot;there,&quot; &quot;other,&quot;等等</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bash$ <span class="token function">cat</span> textfile
This is line <span class="token number">1</span>, of <span class="token function">which</span> there is only one instance.
 This is the only instance of line <span class="token number">2</span>.
 This is line <span class="token number">3</span>, another line.
 This is line <span class="token number">4</span>.


bash$ <span class="token function">grep</span> <span class="token string">'the'</span> textfile
This is line <span class="token number">1</span>, of <span class="token function">which</span> there is only one instance.
 This is the only instance of line <span class="token number">2</span>.
 This is line <span class="token number">3</span>, another line.


bash$ <span class="token function">grep</span> <span class="token string">'\&lt;the\>'</span> textfile
This is the only instance of line <span class="token number">2</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>唯一判断一个特定的正则表达式是否有效的方法就是测试它。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>测试文件: tstfile                          <span class="token comment"># No match.</span>
                                            <span class="token comment"># No match.</span>
运行 <span class="token function">grep</span> <span class="token string">"1133*"</span>  tstfile                  <span class="token comment"># Match.</span>
                                            <span class="token comment"># No match.</span>
                                            <span class="token comment"># No match.</span>
This line contains the number <span class="token number">113</span>.          <span class="token comment"># Match.</span>
This line contains the number <span class="token number">13</span>.           <span class="token comment"># No match.</span>
This line contains the number <span class="token number">133</span>.          <span class="token comment"># No match.</span>
This line contains the number <span class="token number">1133</span>.         <span class="token comment"># Match.</span>
This line contains the number <span class="token number">113312</span>.       <span class="token comment"># Match.</span>
This line contains the number <span class="token number">1112</span>.         <span class="token comment"># No match.</span>
This line contains the number <span class="token number">113312312</span>.    <span class="token comment"># Match.</span>
This line contains no numbers at all.       <span class="token comment"># No match.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bash$ <span class="token function">grep</span> <span class="token string">"1133*"</span> tstfile
Run   <span class="token function">grep</span> <span class="token string">"1133*"</span>  on this file.           <span class="token comment"># Match.</span>
 This line contains the number <span class="token number">113</span>.          <span class="token comment"># Match.</span>
 This line contains the number <span class="token number">1133</span>.         <span class="token comment"># Match.</span>
 This line contains the number <span class="token number">113312</span>.       <span class="token comment"># Match.</span>
 This line contains the number <span class="token number">113312312</span>.    <span class="token comment"># Match.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注解</p>
<p><a href="http://tldp.org/LDP/abs/html/x17129.html#FTN.AEN17134" target="_blank" rel="noopener noreferrer">[1]<ExternalLinkIcon/></a> 元意义指的是一个词组或者表达式在更高层次的抽象上的意义。例如，正则表达式的字面意思就是所有人接受其用法的普通表达式。元意义则完全不同，正如在本章最终讨论的那样。
<a href="http://tldp.org/LDP/abs/html/x17129.html#AEN17189" target="_blank" rel="noopener noreferrer">[2]<ExternalLinkIcon/></a>
Since sed, awk, and grep process single lines, there will usually not be a newline to match. In those cases where there is a newline in a multiple line expression, the dot will match the newline.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">'N;s/.*/[&amp;]/'</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation">   <span class="token comment"># Here Document</span></span>
line1
line2
EOF</span>
<span class="token comment"># OUTPUT:</span>
<span class="token comment"># [line1</span>
<span class="token comment"># line2]</span>



<span class="token builtin class-name">echo</span>

<span class="token function">awk</span> <span class="token string">'{ $0=$1 "\n" $2; if (/line.1/) {print}}'</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
line 1
line 2
EOF</span>
<span class="token comment"># OUTPUT:</span>
<span class="token comment"># line</span>
<span class="token comment"># 1</span>


<span class="token comment"># Thanks, S.C.</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


