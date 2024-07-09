import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c,a as n,b as s,d as a,e as i}from"./app-4bb5a871.js";const r={},p=n("h1",{id:"_18-1-正则表达式简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_18-1-正则表达式简介","aria-hidden":"true"},"#"),s(" 18.1 正则表达式简介")],-1),u={href:"http://tldp.org/LDP/abs/html/x17129.html#FTN.AEN17134",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"一个正则表达式包含下面的一个或多个选项：",-1),m=n("ul",null,[n("li",null,"一组字符串。这是仅仅表示字面意思的字符串。最简单形式的正则表达式仅仅包含一组字符串。"),n("li",null,"一个锚字符。锚节点指定了正则表达式在一行文本中的匹配位置。例如，^和$就是锚字符。"),n("li",null,"修饰符。修饰符扩展或者限定（修改）了正则表达式在文本中的匹配范围。修饰符包括星号、方括号和反斜线。")],-1),b=n("p",null,"正则表达式的主要用在文本搜索和字符串操作。一个正则表达式匹配单个字符或者一组字符 -- 一系列的字符或者字符串的一部分。",-1),h=n("li",null,[n("p",null,"星号 * 匹配前面的子表达式任意次，包括0次"),n("p",null,'"1133*"匹配"11"加一个或多个"3"：113，1133，1133333，及以后')],-1),v={href:"http://tldp.org/LDP/abs/html/x17129.html#AEN17189",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),_={href:"http://tldp.org/LDP/abs/html/textproc.html#CWSOLVER",target:"_blank",rel:"noopener noreferrer"},q=i("<li><p>脱字符 ^ 匹配行的起始位置，但有时候会根据上下文环境匹配其相反的意义（译者注：例如[^a]匹配任意一个非a的字符）</p></li><li><p>美元符 $ 匹配行的结束位置</p><p>&quot;XXX$&quot;匹配行尾处的&quot;XXX&quot;<br> &quot;^$&quot;匹配空行</p></li><li><p>方括号 [...] 匹配所包含的任意一个字符</p><p>&quot;[xyz]&quot;匹配x、y或z中的任意一个字符<br> &quot;[c-n]&quot;匹配c到n之间的任意一个字符<br> &quot;[B-Pk-y]&quot;匹配B到P和k到y之间任意一个字符<br> &quot;[a-z0-9]&quot;匹配任意一个小写字符和任意一个数字<br> &quot;[^b-d]&quot;匹配任意一个不在b到d之间的字符。这是一个很好的例子，展示了&quot;^&quot;的匹配了正则表达式的反义（类似在其他环境下的&quot;!&quot;符号所起的作用）<br> 组合一连串的用方括号括起来的字符能匹配非常多的词组模式。&quot;[Yy][Ee][Ss]&quot;匹配yes、Yes、YES、yEs等等。&quot;[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]&quot;匹配任何一个社会保险号</p></li><li><p>反斜线 \\ 转义一个特殊字符，意味着这个字符被解释为字面意义（因此不再包含特殊意思）</p><p>&quot;$&quot;表示回它的字面意义&quot;$&quot;，而不是它原本在正则表达式中代表行尾的意义。同样，&quot;\\&quot;表示字面意义&quot;&quot;</p></li><li><p>转义后的尖括号 &lt;..&gt; 代表词组的边界</p><p>尖括号必须进行转义，否则它们就代表其字面意义<br> &quot;&lt;the&gt;&quot;匹配词组&quot;the&quot;，而不是词组&quot;them,&quot; &quot;there,&quot; &quot;other,&quot;等等</p></li>",5),g=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token function">cat</span> textfile
This is line <span class="token number">1</span>, of <span class="token function">which</span> there is only one instance.
 This is the only instance of line <span class="token number">2</span>.
 This is line <span class="token number">3</span>, another line.
 This is line <span class="token number">4</span>.


bash$ <span class="token function">grep</span> <span class="token string">&#39;the&#39;</span> textfile
This is line <span class="token number">1</span>, of <span class="token function">which</span> there is only one instance.
 This is the only instance of line <span class="token number">2</span>.
 This is line <span class="token number">3</span>, another line.


bash$ <span class="token function">grep</span> <span class="token string">&#39;\\&lt;the\\&gt;&#39;</span> textfile
This is the only instance of line <span class="token number">2</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>唯一判断一个特定的正则表达式是否有效的方法就是测试它。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>测试文件: tstfile                          <span class="token comment"># No match.</span>
                                            <span class="token comment"># No match.</span>
运行 <span class="token function">grep</span> <span class="token string">&quot;1133*&quot;</span>  tstfile                  <span class="token comment"># Match.</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token function">grep</span> <span class="token string">&quot;1133*&quot;</span> tstfile
Run   <span class="token function">grep</span> <span class="token string">&quot;1133*&quot;</span>  on this file.           <span class="token comment"># Match.</span>
 This line contains the number <span class="token number">113</span>.          <span class="token comment"># Match.</span>
 This line contains the number <span class="token number">1133</span>.         <span class="token comment"># Match.</span>
 This line contains the number <span class="token number">113312</span>.       <span class="token comment"># Match.</span>
 This line contains the number <span class="token number">113312312</span>.    <span class="token comment"># Match.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注解</p>`,5),f={href:"http://tldp.org/LDP/abs/html/x17129.html#FTN.AEN17134",target:"_blank",rel:"noopener noreferrer"},T={href:"http://tldp.org/LDP/abs/html/x17129.html#AEN17189",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;N;s/.*/[&amp;]/&#39;</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation">   <span class="token comment"># Here Document</span></span>
line1
line2
EOF</span>
<span class="token comment"># OUTPUT:</span>
<span class="token comment"># [line1</span>
<span class="token comment"># line2]</span>



<span class="token builtin class-name">echo</span>

<span class="token function">awk</span> <span class="token string">&#39;{ $0=$1 &quot;\\n&quot; $2; if (/line.1/) {print}}&#39;</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
line 1
line 2
EOF</span>
<span class="token comment"># OUTPUT:</span>
<span class="token comment"># line</span>
<span class="token comment"># 1</span>


<span class="token comment"># Thanks, S.C.</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function N(E,y){const e=l("ExternalLinkIcon");return o(),c("div",null,[p,n("p",null,[s("正则表达式是一系列的字符串。这些包含超过其字面含义的字符串被称之为元字符。例如，一个符号前面的引用符代表一个人的言语能力，或者按照上面的说法，代表着meta-meaning"),n("a",u,[s("[1]"),a(e)]),s("。正则表达式是一组字符串和（或者）一组匹配（特定的）模式的元字符。")]),d,m,b,n("ul",null,[h,n("li",null,[n("p",null,[s("点号 . 匹配任意字符，除了新的一行"),n("a",v,[s("[2]"),a(e)])]),n("p",null,[s('"13."匹配"13"加至少一个字符（包括空格）：1133，11333，但不是13（缺少额外的字符）'),k,s(" 参见例子"),n("a",_,[s("16-18"),a(e)]),s("，展示单字符匹配")])]),q]),g,n("p",null,[n("a",f,[s("[1]"),a(e)]),s(" 元意义指的是一个词组或者表达式在更高层次的抽象上的意义。例如，正则表达式的字面意思就是所有人接受其用法的普通表达式。元意义则完全不同，正如在本章最终讨论的那样。 "),n("a",T,[s("[2]"),a(e)]),s(" Since sed, awk, and grep process single lines, there will usually not be a newline to match. In those cases where there is a newline in a multiple line expression, the dot will match the newline.")]),x])}const M=t(r,[["render",N],["__file","18_1_a_brief_introduction_to_regular_expressions.html.vue"]]);export{M as default};
