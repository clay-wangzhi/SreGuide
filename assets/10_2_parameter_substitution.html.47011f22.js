import{_ as l,r as t,c as r,a as n,b as e,F as o,e as p,d as s,o as c}from"./app.35f12498.js";const i={},b=p(`<h1 id="_10-2-\u53C2\u6570\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#_10-2-\u53C2\u6570\u66FF\u6362" aria-hidden="true">#</a> 10.2 \u53C2\u6570\u66FF\u6362</h1><p>\u53C2\u6570\u66FF\u6362\u7528\u6765\u5904\u7406\u6216\u6269\u5C55\u53D8\u91CF\u3002</p><h3 id="parameter" tabindex="-1"><a class="header-anchor" href="#parameter" aria-hidden="true">#</a> <code>\${parameter}</code></h3><p>\u7B49\u540C\u4E8E <code>$parameter</code>\uFF0C\u662F\u53D8\u91CF parameter \u7684\u503C\u3002\u5728\u4E00\u4E9B\u7279\u5B9A\u7684\u73AF\u5883\u4E0B\uFF0C\u53EA\u5141\u8BB8\u4F7F\u7528\u4E0D\u6613\u6DF7\u6DC6\u7684 <code>\${parameter}</code> \u5F62\u5F0F\u3002</p><p>\u53EF\u4EE5\u7528\u4E8E\u8FDE\u63A5\u53D8\u91CF\u4E0E\u5B57\u7B26\u4E32\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">your_id</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">USER</span>}</span>-on-<span class="token variable">\${<span class="token environment constant">HOSTNAME</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$your_id</span>&quot;</span>
<span class="token comment"># </span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Old \\<span class="token environment constant">$PATH</span> = <span class="token environment constant">$PATH</span>&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>:/opt/bin  <span class="token comment"># \u5728\u811A\u672C\u6267\u884C\u8FC7\u7A0B\u4E2D\u4E34\u65F6\u5728 $PATH \u4E2D\u52A0\u5165 /opt/bin\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;New \\<span class="token environment constant">$PATH</span> = <span class="token environment constant">$PATH</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="parameter-default-parameter-default" tabindex="-1"><a class="header-anchor" href="#parameter-default-parameter-default" aria-hidden="true">#</a> <code>\${parameter-default}, \${parameter:-default}</code></h3><p>\u5728\u6CA1\u6709\u8BBE\u7F6E\u53D8\u91CF\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u7F3A\u7701\u503C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token comment"># \u6CA1\u6709\u8BBE\u7F6E var3\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${var1-$var2}</span>   <span class="token comment"># 1</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${var3-$var2}</span>   <span class="token comment"># 2</span>
<span class="token comment">#           ^          \u6CE8\u610F\u524D\u9762\u7684 $ \u524D\u7F00\u3002</span>



<span class="token builtin class-name">echo</span> <span class="token variable">\${username-\`whoami\`}</span>
<span class="token comment"># \u5982\u679C\u53D8\u91CF $username \u6CA1\u6709\u88AB\u8BBE\u7F6E\uFF0C\u8F93\u51FA \`whoami\` \u7684\u7ED3\u679C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> <code>\${parameter-default}</code> \u4E0E <code>\${parameter:-default}</code> \u7684\u4F5C\u7528\u51E0\u4E4E\u76F8\u540C\uFF0C\u552F\u4E00\u4E0D\u540C\u7684\u60C5\u51B5\u5C31\u662F\u5F53\u53D8\u91CF parameter \u5DF2\u7ECF\u88AB\u58F0\u660E\u4F46\u503C\u4E3A\u7A7A\u65F6\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># param-sub.sh</span>

<span class="token comment"># \u65E0\u8BBA\u53D8\u91CF\u7684\u503C\u662F\u5426\u4E3A\u7A7A\uFF0C\u5176\u662F\u5426\u5DF2\u88AB\u58F0\u660E\u51B3\u5B9A\u4E86\u7F3A\u7701\u8BBE\u7F6E\u7684\u89E6\u53D1\u3002</span>

<span class="token assign-left variable">username0</span><span class="token operator">=</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;username0 has been declared, but is set to null.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;username0 = <span class="token variable">\${username0-\`whoami\`}</span>&quot;</span>
<span class="token comment"># \u5C06\u4E0D\u4F1A\u8F93\u51FA \`whoami\` \u7684\u7ED3\u679C\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> username1 has not been declared.
<span class="token builtin class-name">echo</span> <span class="token string">&quot;username1 = <span class="token variable">\${username1-\`whoami\`}</span>&quot;</span>
<span class="token comment"># \u5C06\u4F1A\u8F93\u51FA \`whoami\` \u7684\u7ED3\u679C\u3002</span>

<span class="token assign-left variable">username2</span><span class="token operator">=</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;username2 has been declared, but is set to null.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;username2 = <span class="token variable">\${username2<span class="token operator">:-</span>\`whoami\`}</span>&quot;</span>
<span class="token comment">#                            ^</span>
<span class="token comment"># \u56E0\u4E3A\u8FD9\u91CC\u662F :- \u800C\u4E0D\u662F -\uFF0C\u6240\u4EE5\u5C06\u4F1A\u8F93\u51FA \`whoami\` \u7684\u7ED3\u679C\u3002</span>
<span class="token comment"># \u4E0E\u4E0A\u9762\u7684 username0 \u6BD4\u8F83\u3002</span>


<span class="token comment"># </span>

<span class="token comment"># \u518D\u6765\u4E00\u6B21\uFF1A</span>

<span class="token assign-left variable">variable</span><span class="token operator">=</span>
<span class="token comment"># \u53D8\u91CF\u5DF2\u88AB\u58F0\u660E\uFF0C\u4F46\u5176\u503C\u4E3A\u7A7A\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${varibale-0}</span>&quot;</span>    <span class="token comment"># \u6CA1\u6709\u8F93\u51FA\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${variable<span class="token operator">:-</span>1}</span>&quot;</span>   <span class="token comment"># 1</span>
<span class="token comment">#               ^</span>

unser variable

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${variable-2}</span>&quot;</span>    <span class="token comment"># 2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${variable<span class="token operator">:-</span>3}</span>&quot;</span>   <span class="token comment"># 3</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>\u5F53\u4F20\u5165\u7684\u547D\u4EE4\u884C\u53C2\u6570\u7684\u6570\u91CF\u4E0D\u8DB3\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u7F3A\u7701\u53C2\u6570\u7ED3\u6784\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DEFAULT_FILENAME</span><span class="token operator">=</span>generic.data
<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">:-</span>$DEFAULT_FILENAME}</span>
<span class="token comment"># \u5982\u679C\u6CA1\u6709\u5176\u4ED6\u7279\u6B8A\u60C5\u51B5\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u5757\u5C06\u4F1A\u64CD\u4F5C\u6587\u4EF6 &quot;generic.data&quot;\u3002</span>
<span class="token comment"># \u4EE3\u7801\u5757\u5F00\u59CB</span>
<span class="token comment"># ...</span>
<span class="token comment"># ...</span>
<span class="token comment"># ...</span>
<span class="token comment"># \u4EE3\u7801\u5757\u7ED3\u675F</span>



<span class="token comment"># \u6458\u81EA\u6837\u4F8B &quot;hanoi2.bash&quot;\uFF1A</span>
<span class="token assign-left variable">DISKS</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">:-</span>E_NOPARAM}</span>   <span class="token comment"># \u5FC5\u987B\u6307\u5B9A\u789F\u5B50\u7684\u4E2A\u6570\u3002</span>
<span class="token comment">#  \u5C06 $DISKS \u8BBE\u7F6E\u4E3A\u4F20\u5165\u7684\u7B2C\u4E00\u4E2A\u547D\u4EE4\u884C\u53C2\u6570\uFF0C</span>
<span class="token comment">#+ \u5982\u679C\u6CA1\u6709\u4F20\u5165\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5219\u8BBE\u7F6E\u4E3A $E_NOPARAM\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,13),m=s("\u53EF\u4EE5\u67E5\u770B "),u={href:"http://tldp.org/LDP/abs/html/special-chars.html#EX58",target:"_blank",rel:"noopener noreferrer"},k=s("\u6837\u4F8B 3-4"),h=s("\uFF0C"),d={href:"http://tldp.org/LDP/abs/html/zeros.html#EX73",target:"_blank",rel:"noopener noreferrer"},v=s("\u6837\u4F8B 31-2"),g=s(" \u548C "),q={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#COLLATZ",target:"_blank",rel:"noopener noreferrer"},$=s("\u6837\u4F8B A-6"),f=s("\u3002"),_=s("\u53EF\u4EE5\u540C "),x={href:"http://tldp.org/LDP/abs/html/list-cons.html#ANDDEFAULT",target:"_blank",rel:"noopener noreferrer"},y=s("\u4F7F\u7528\u4E0E\u94FE\u8BBE\u7F6E\u7F3A\u7701\u547D\u4EE4\u884C\u53C2\u6570"),E=s(" \u505A\u6BD4\u8F83\u3002"),A=p(`<h3 id="parameter-default-parameter-default-1" tabindex="-1"><a class="header-anchor" href="#parameter-default-parameter-default-1" aria-hidden="true">#</a> <code>\${parameter=default}, \${parameter:=default}</code></h3><p>\u5728\u6CA1\u6709\u8BBE\u7F6E\u53D8\u91CF\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u5176\u8BBE\u7F6E\u4E3A\u7F3A\u7701\u503C\u3002</p><p>\u4E24\u79CD\u5F62\u5F0F\u7684\u4F5C\u7528\u51E0\u4E4E\u76F8\u540C\uFF0C\u552F\u4E00\u4E0D\u540C\u7684\u60C5\u51B5\u4E0E\u4E0A\u9762\u7C7B\u4F3C\uFF0C\u5C31\u662F\u5F53\u53D8\u91CF parameter \u5DF2\u7ECF\u88AB\u58F0\u660E\u4F46\u503C\u4E3A\u7A7A\u65F6\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">\${var=abc}</span>   <span class="token comment"># abc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${vat=xyz}</span>   <span class="token comment"># abc</span>
<span class="token comment"># $var \u5DF2\u7ECF\u5728\u7B2C\u4E00\u6761\u8BED\u53E5\u4E2D\u88AB\u8D4B\u503C\u4E3A abc\uFF0C\u56E0\u6B64\u7B2C\u4E8C\u6761\u8BED\u53E5\u5C06\u4E0D\u4F1A\u6539\u53D8\u5B83\u7684\u503C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="parameter-alt-value-parameter-alt-value" tabindex="-1"><a class="header-anchor" href="#parameter-alt-value-parameter-alt-value" aria-hidden="true">#</a> <code>\${parameter+alt_value}, \${parameter:+alt_value}</code></h3><p>\u5982\u679C\u53D8\u91CF\u5DF2\u88AB\u8BBE\u7F6E\uFF0C\u4F7F\u7528 alt_value\uFF0C\u5426\u5219\u4F7F\u7528\u7A7A\u503C\u3002</p><p>\u4E24\u79CD\u5F62\u5F0F\u7684\u4F5C\u7528\u51E0\u4E4E\u76F8\u540C\uFF0C\u552F\u4E00\u4E0D\u540C\u7684\u60C5\u51B5\u5C31\u662F\u5F53\u53D8\u91CF parameter \u5DF2\u7ECF\u88AB\u58F0\u660E\u4F46\u503C\u4E3A\u7A7A\u65F6\uFF0C\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;###### \\<span class="token variable">\${parameter+alt_value}</span> ########&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">\${param1+xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>      <span class="token comment"># a =</span>

<span class="token assign-left variable">param2</span><span class="token operator">=</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">\${param2+xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>      <span class="token comment"># a = xyz</span>

<span class="token assign-left variable">param3</span><span class="token operator">=</span><span class="token number">123</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">\${param3+xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>      <span class="token comment"># a = xyz</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;###### \\<span class="token variable">\${parameter<span class="token operator">:+</span>alt_value}</span> ########&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">\${param4<span class="token operator">:+</span>xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>      <span class="token comment"># a =</span>

<span class="token assign-left variable">param5</span><span class="token operator">=</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">\${param5<span class="token operator">:+</span>xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>      <span class="token comment"># a =</span>
<span class="token comment"># \u4E0D\u540C\u4E8E a=\${param5+xyz}</span>

<span class="token assign-left variable">param6</span><span class="token operator">=</span><span class="token number">123</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">\${param6<span class="token operator">:+</span>xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>      <span class="token comment"># a = xyz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="parameter-err-msg-parameter-err-msg" tabindex="-1"><a class="header-anchor" href="#parameter-err-msg-parameter-err-msg" aria-hidden="true">#</a> <code>\${parameter?err_msg}, \${parameter:?err_msg}</code></h3>`,9),P=s("\u5982\u679C\u53D8\u91CF\u5DF2\u88AB\u8BBE\u7F6E\uFF0C\u90A3\u4E48\u4F7F\u7528\u539F\u503C\uFF0C\u5426\u5219\u8F93\u51FA err_msg \u5E76\u4E14\u7EC8\u6B62\u811A\u672C\uFF0C\u8FD4\u56DE "),z={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},w=s("\u9519\u8BEF\u7801"),R=s(" 1\u3002"),T=p(`<p>\u4E24\u79CD\u5F62\u5F0F\u7684\u4F5C\u7528\u51E0\u4E4E\u76F8\u540C\uFF0C\u552F\u4E00\u4E0D\u540C\u7684\u60C5\u51B5\u4E0E\u4E0A\u9762\u7C7B\u4F3C\uFF0C\u5C31\u662F\u5F53\u53D8\u91CF parameter \u5DF2\u7ECF\u88AB\u58F0\u660E\u4F46\u503C\u4E3A\u7A7A\u65F6\u3002</p><p>\u6837\u4F8B 10-7. \u5982\u4F55\u4F7F\u7528\u53D8\u91CF\u66FF\u6362\u548C\u9519\u8BEF\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># \u68C0\u67E5\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u3002</span>
<span class="token comment"># \u8FD9\u662F\u4E00\u79CD\u826F\u597D\u7684\u9884\u9632\u6027\u7EF4\u62A4\u63AA\u65BD\u3002</span>
<span class="token comment"># \u5982\u679C\u63A7\u5236\u53F0\u7528\u6237\u7684\u540D\u79F0 $USER \u6CA1\u6709\u88AB\u8BBE\u7F6E\uFF0C\u90A3\u4E48\u4E3B\u673A\u5C06\u4E0D\u80FD\u591F\u8BC6\u522B\u7528\u6237\u3002</span>

<span class="token builtin class-name">:</span> <span class="token variable">\${<span class="token environment constant">HOSTNAME</span>?}</span> <span class="token variable">\${<span class="token environment constant">USER</span>?}</span> <span class="token variable">\${<span class="token environment constant">HOME</span>?}</span> <span class="token variable">\${MAIL?}</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Name of the machine is <span class="token environment constant">$HOSTNAME</span>.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;You are <span class="token environment constant">$USER</span>.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your home directory is <span class="token environment constant">$HOME</span>.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your mail INBOX is located in <span class="token variable">$MAIL</span>.&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;If you are reading this message,&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;critcial environmental variables have been set.&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span>
  
<span class="token comment"># ------------------------------------------------------</span>

<span class="token comment"># \${variablename?} \u7ED3\u6784\u7EDF\u4E00\u53EF\u4EE5\u68C0\u67E5\u811A\u672C\u4E2D\u7684\u53D8\u91CF\u662F\u5426\u88AB\u8BBE\u7F6E\u3002</span>

<span class="token assign-left variable">ThisVariable</span><span class="token operator">=</span>Value-of-ThisVariable
<span class="token comment"># \u987A\u5E26\u4E00\u63D0\uFF0C\u8FD9\u4E2A\u5B57\u7B26\u4E32\u7684\u503C\u53EF\u4EE5\u88AB\u8BBE\u7F6E\u6210\u540D\u79F0\u4E2D\u4E0D\u53EF\u4EE5\u4F7F\u7528\u7684\u7981\u7528\u5B57\u7B26\u3002</span>
<span class="token builtin class-name">:</span> <span class="token variable">\${ThisVariable?}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Value of ThisVariable is <span class="token variable">$ThisVariable</span>.&quot;</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>


<span class="token builtin class-name">:</span> <span class="token variable">\${ZZXy23AB?&quot;ZZXy23AB has not been set.&quot;}</span>
<span class="token comment"># \u56E0\u4E3A ZZXy23AB \u6CA1\u6709\u88AB\u8BBE\u7F6E\uFF0C\u6240\u4EE5\u811A\u672C\u4F1A\u7EC8\u6B62\u540C\u65F6\u663E\u793A\u9519\u8BEF\u6D88\u606F\u3002</span>

<span class="token comment"># \u4F60\u53EF\u4EE5\u6307\u5B9A\u9519\u8BEF\u6D88\u606F\u3002</span>
<span class="token comment"># : \${variablename?&quot;ERROR MESSAGE&quot;}</span>


<span class="token comment"># \u4E0E\u8FD9\u4E9B\u7ED3\u679C\u76F8\u540C:  dummy_variable=\${ZZXy23AB?}</span>
<span class="token comment">#                 dummy_variable=\${ZZXy23AB?&quot;ZZXy23AB has not been set.&quot;}</span>
<span class="token comment">#</span>
<span class="token comment">#                 echo \${ZZXy23AB?} &gt;/dev/null</span>

<span class="token comment"># \u5C06\u4E0A\u9762\u8FD9\u4E9B\u68C0\u67E5\u53D8\u91CF\u662F\u5426\u88AB\u8BBE\u7F6E\u7684\u65B9\u6CD5\u540C &quot;set -u&quot; \u4F5C\u6BD4\u8F83\u3002</span>



<span class="token builtin class-name">echo</span> <span class="token string">&quot;You will not see this message, because script already terminated.&quot;</span>

<span class="token assign-left variable">HERE</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token builtin class-name">exit</span> <span class="token variable">$HERE</span>   <span class="token comment"># \u5C06\u4E0D\u4F1A\u4ECE\u8FD9\u91CC\u9000\u51FA\u3002</span>

<span class="token comment">#  \u4E8B\u5B9E\u4E0A\uFF0C\u8FD9\u4E2A\u811A\u672C\u5C06\u4F1A\u8FD4\u56DE\u9000\u51FA\u7801\uFF08echo $?\uFF091\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>\u6837\u4F8B 10-8. \u53C2\u6570\u66FF\u6362\u4E0E &quot;usage&quot; \u6D88\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># usage-message.sh</span>

<span class="token builtin class-name">:</span> <span class="token variable">\${1?&quot;Usage<span class="token operator">:</span> $0 ARGUMENT&quot;}</span>
<span class="token comment"># \u5982\u679C\u547D\u4EE4\u884C\u53C2\u6570\u7F3A\u5931\uFF0C\u811A\u672C\u5C06\u4F1A\u5728\u8FD9\u91CC\u7ED3\u675F\uFF0C\u5E76\u4E14\u8FD4\u56DE\u4E0B\u9762\u7684\u9519\u8BEF\u4FE1\u606F\u3002</span>
<span class="token comment">#    usage-message.sh: 1: Usage: usage-message.sh ARGUMENT</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;These two lines echo only if command-line parameter given.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;command-line parameter = <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$1</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>  <span class="token comment"># \u4EC5\u5F53\u547D\u4EE4\u884C\u53C2\u6570\u5B58\u5728\u662F\u624D\u4F1A\u4ECE\u8FD9\u91CC\u9000\u51FA\u3002</span>

<span class="token comment"># \u5728\u4F20\u5165\u548C\u672A\u4F20\u5165\u547D\u4EE4\u884C\u53C2\u6570\u7684\u60C5\u51B5\u4E0B\u67E5\u770B\u9000\u51FA\u72B6\u6001\u3002</span>
<span class="token comment"># \u5982\u679C\u4F20\u5165\u4E86\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u90A3\u4E48 &quot;$?&quot; \u7684\u7ED3\u679C\u662F0\u3002</span>
<span class="token comment"># \u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u4E48 &quot;$?&quot; \u7684\u7ED3\u679C\u662F1\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u53C2\u6570\u66FF\u6362\u7528\u6765\u5904\u7406\u6216\u6269\u5C55\u53D8\u91CF\u3002\u4E0B\u9762\u7684\u8868\u8FBE\u5F0F\u662F\u5BF9 <code>expr</code> \u5904\u7406\u5B57\u7B26\u4E32\u7684\u64CD\u4F5C\u7684\u8865\u8DB3\uFF08\u67E5\u770B\u6837\u4F8B 16-9\uFF09\u3002\u8FD9\u4E9B\u7279\u6B8A\u7684\u8868\u8FBE\u5F0F\u901A\u5E38\u517B\u6765\u89E3\u6790\u6587\u4EF6\u7684\u8DEF\u5F84\u540D\u3002</p><h3 id="\u53D8\u91CF\u957F\u5EA6-\u5220\u9664\u5B50\u4E32" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u957F\u5EA6-\u5220\u9664\u5B50\u4E32" aria-hidden="true">#</a> \u53D8\u91CF\u957F\u5EA6 / \u5220\u9664\u5B50\u4E32</h3><h4 id="var" tabindex="-1"><a class="header-anchor" href="#var" aria-hidden="true">#</a> <code>\${#var}</code></h4>`,8),D=s("\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF08"),S=n("code",null,"$var",-1),L=s(" \u4E2D\u5B57\u7B26\u7684\u4E2A\u6570\uFF09\u3002\u5BF9\u4EFB\u610F "),N={href:"http://tldp.org/LDP/abs/html/arrays.html#ARRAYREF",target:"_blank",rel:"noopener noreferrer"},B=s("\u6570\u7EC4"),F=s(" array\uFF0C"),H=n("code",null,"${#array}",-1),M=s(" \u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u957F\u5EA6\u3002"),O=p(`<blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> \u4EE5\u4E0B\u60C5\u51B5\u4F8B\u5916\uFF1A</p><ul><li><code>\${#*}</code> \u548C <code>\${#@}</code> \u8FD4\u56DE\u4F4D\u7F6E\u53C2\u6570\u7684\u4E2A\u6570\u3002</li><li>\u4EFB\u610F\u6570\u7EC4 array\uFF0C<code>\${#array[*]}</code> \u548C <code>\${#array[@]}</code> \u8FD4\u56DE\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u4E2A\u6570\u3002</li></ul></blockquote><p>\u6837\u4F8B 10-9. \u53D8\u91CF\u957F\u5EA6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># length.sh</span>

<span class="token assign-left variable">E_NO_ARGS</span><span class="token operator">=</span><span class="token number">65</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span>  <span class="token comment"># \u811A\u672C\u5FC5\u987B\u4F20\u5165\u53C2\u6570\u3002</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Please invoke this script with one or more command-line arguments.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NO_ARGS</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">var01</span><span class="token operator">=</span>abcdEFGH28ij
<span class="token builtin class-name">echo</span> <span class="token string">&quot;var01 = <span class="token variable">\${var01}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Length of var01 = <span class="token variable">\${<span class="token operator">#</span>var01}</span>&quot;</span>
<span class="token comment"># \u73B0\u5728\u6211\u4EEC\u5C1D\u8BD5\u52A0\u5165\u7A7A\u683C\u3002</span>
<span class="token assign-left variable">var02</span><span class="token operator">=</span><span class="token string">&quot;abcd EFGH28ij&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;var02 = <span class="token variable">\${var02}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Length of var02 = <span class="token variable">\${<span class="token operator">#</span>var02}</span>&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Number of command-line arguments passed to script = <span class="token variable">\${<span class="token operator">#</span>@}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Number of command-line arguments passed to script = <span class="token variable">\${<span class="token operator">#</span>*}</span>&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="var-pattern-var-pattern" tabindex="-1"><a class="header-anchor" href="#var-pattern-var-pattern" aria-hidden="true">#</a> <code>\${var#Pattern}, \${var##Pattern}</code></h4><p><code>\${var#Pattern}</code> \u5220\u9664 <code>$var</code> \u524D\u7F00\u90E8\u5206\u5339\u914D\u5230\u7684\u6700\u77ED\u957F\u5EA6\u7684 <code>$Pattern</code>\u3002</p><p><code>\${var##Pattern}</code> \u5220\u9664 <code>$var</code> \u524D\u7F00\u90E8\u5206\u5339\u914D\u5230\u7684\u6700\u957F\u957F\u5EA6\u7684 <code>$Pattern</code>\u3002</p>`,6),Z=s("\u6458\u81EA "),I={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#DAYSBETWEEN",target:"_blank",rel:"noopener noreferrer"},U=s("\u6837\u4F8B A-7"),X=s(" \u7684\u4F8B\u5B50\uFF1A"),V=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u51FD\u6570\u6458\u81EA\u6837\u4F8B &quot;day-between.sh&quot;\u3002</span>
<span class="token comment"># \u5220\u9664\u4F20\u5165\u7684\u53C2\u6570\u4E2D\u7684\u524D\u7F000\u3002</span>

strip_leading_zero <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#  \u5220\u9664\u4F20\u5165\u53C2\u6570\u4E2D\u53EF\u80FD\u5B58\u5728\u7684</span>
<span class="token punctuation">{</span>                     <span class="token comment">#+ \u524D\u7F000\u3002</span>
  <span class="token assign-left variable">return</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">#</span>0}</span>       <span class="token comment">#  &quot;1&quot; \u4EE3\u8868 &quot;$1&quot;\uFF0C\u5373\u4F20\u5165\u7684\u53C2\u6570\u3002</span>
<span class="token punctuation">}</span>                     <span class="token comment">#  \u4ECE &quot;$1&quot; \u4E2D\u5220\u9664 &quot;0&quot;\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0B\u9762\u662F\u7531 Manfred Schwarb \u63D0\u4F9B\u7684\u4E0A\u8FF0\u51FD\u6570\u7684\u6539\u8FDB\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>strip_leading_zero2 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u5220\u9664\u524D\u7F000\uFF0C</span>
<span class="token punctuation">{</span>                      <span class="token comment"># \u5426\u5219 Bash \u4F1A\u5C06\u5176\u89E3\u91CA\u4E3A8\u8FDB\u5236\u6570\u3002</span>
  <span class="token builtin class-name">shopt</span> -s extglob     <span class="token comment"># \u542F\u7528\u6269\u5C55\u901A\u914D\u7279\u6027\u3002</span>
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">##</span>+(0)}</span> <span class="token comment"># \u4F7F\u7528\u672C\u5730\u53D8\u91CF\uFF0C\u5339\u914D\u524D\u7F00\u4E2D\u6240\u6709\u76840\u3002</span>
  <span class="token builtin class-name">shopt</span> -u extglob     <span class="token comment"># \u7981\u7528\u6269\u5C55\u901A\u914D\u7279\u6027\u3002</span>
  <span class="token assign-left variable">_strip_leading_zero2</span><span class="token operator">=</span><span class="token variable">\${var<span class="token operator">:-</span>0}</span>
                       <span class="token comment"># \u5982\u679C\u8F93\u5165\u7684\u4E3A0\uFF0C\u90A3\u4E48\u8FD4\u56DE 0 \u800C\u4E0D\u662F &quot;&quot;\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53E6\u5916\u4E00\u4E2A\u6837\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> <span class="token environment constant">$PWD</span><span class="token variable">\`</span></span>        <span class="token comment"># \u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u76EE\u5F55\u540D\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">PWD</span><span class="token operator">##</span>*<span class="token operator">/</span>}</span>&quot;</span>           <span class="token comment"># \u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u76EE\u5F55\u540D\u3002</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span>          <span class="token comment"># \u811A\u672C\u540D\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$0</span>                     <span class="token comment"># \u811A\u672C\u540D\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${0<span class="token operator">##</span>*<span class="token operator">/</span>}</span>&quot;</span>             <span class="token comment"># \u811A\u672C\u540D\u3002</span>
<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">filename</span><span class="token operator">=</span>test.data
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${filename<span class="token operator">##</span>*.}</span>&quot;</span>      <span class="token comment"># data</span>
                            <span class="token comment"># \u6587\u4EF6\u6269\u5C55\u540D\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="var-pattern-var-pattern-1" tabindex="-1"><a class="header-anchor" href="#var-pattern-var-pattern-1" aria-hidden="true">#</a> <code>\${var%Pattern}, \${var%%Pattern}</code></h4><p><code>\${var%Pattern}</code> \u5220\u9664 <code>$var</code> \u540E\u7F00\u90E8\u5206\u5339\u914D\u5230\u7684\u6700\u77ED\u957F\u5EA6\u7684 <code>$Pattern</code>\u3002</p><p><code>\${var%%Pattern}</code> \u5220\u9664 <code>$var</code> \u540E\u7F00\u90E8\u5206\u5339\u914D\u5230\u7684\u6700\u957F\u957F\u5EA6\u7684 <code>$Pattern</code>\u3002</p>`,8),C=s("\u5728 Bash \u7684 "),G={href:"http://tldp.org/LDP/abs/html/bashver2.html#BASH2REF",target:"_blank",rel:"noopener noreferrer"},Y=s("\u7B2C\u4E8C\u4E2A\u7248\u672C"),j=s(" \u4E2D\u589E\u52A0\u4E86\u4E00\u4E9B\u989D\u5916\u7684\u9009\u62E9\u3002"),W=p(`<p>\u6837\u4F8B 10-10. \u53C2\u6570\u66FF\u6362\u4E2D\u7684\u6A21\u5F0F\u5339\u914D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># patt-matching.sh</span>

<span class="token comment"># \u4F7F\u7528 # ## % %% \u53C2\u6570\u66FF\u6362\u64CD\u4F5C\u7B26\u8FDB\u884C\u6A21\u5F0F\u5339\u914D</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span>abcd12345abc6789
<span class="token assign-left variable">pattern1</span><span class="token operator">=</span>a*c  <span class="token comment"># \u901A\u914D\u7B26 * \u53EF\u4EE5\u5339\u914D a \u4E0E c \u4E4B\u95F4\u7684\u4EFB\u610F\u5B57\u7B26</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;var1 = <span class="token variable">$var1</span>&quot;</span>           <span class="token comment"># abcd12345abc6789</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;var1 = <span class="token variable">\${var1}</span>&quot;</span>         <span class="token comment"># abcd12345abc6789</span>
                              <span class="token comment"># \uFF08\u53E6\u4E00\u79CD\u5F62\u5F0F\uFF09</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Number of characters in <span class="token variable">\${var1}</span> = <span class="token variable">\${<span class="token operator">#</span>var1}</span>&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;pattern1 = <span class="token variable">$pattern1</span>&quot;</span>   <span class="token comment"># a*c  (\u5339\u914D &#39;a&#39; \u4E0E &#39;c&#39; \u4E4B\u95F4\u7684\u4E00\u5207)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;--------------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\${var1#$pattern1}  =&#39;</span> <span class="token string">&quot;<span class="token variable">\${var1<span class="token operator">#</span>$pattern1}</span>&quot;</span>    <span class="token comment">#         d12345abc6789</span>
<span class="token comment"># \u5339\u914D\u5230\u9996\u90E8\u6700\u77ED\u76843\u4E2A\u5B57\u7B26                                   abcd12345abc6789</span>
<span class="token comment">#             ^                                           |-|</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\${var1##$pattern1} =&#39;</span> <span class="token string">&quot;<span class="token variable">\${var1<span class="token operator">##</span>$pattern1}</span>&quot;</span>   <span class="token comment">#                  6789</span>
<span class="token comment"># \u5339\u914D\u5230\u9996\u90E8\u6700\u957F\u768412\u4E2A\u5B57\u7B26                                  abcd12345abc6789</span>
<span class="token comment">#             ^                                           |----------|</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">pattern2</span><span class="token operator">=</span>b*9            <span class="token comment"># \u5339\u914D &#39;b&#39; \u4E0E &#39;9&#39; \u4E4B\u95F4\u7684\u4EFB\u610F\u5B57\u7B26</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;var1 = <span class="token variable">$var1</span>&quot;</span>     <span class="token comment"># \u4ECD\u65E7\u662F abcd12345abc6789</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;pattern2 = <span class="token variable">$pattern2</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;--------------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\${var1%pattern2}  =&#39;</span> <span class="token string">&quot;<span class="token variable">\${var1<span class="token operator">%</span>$pattern2}</span>&quot;</span>     <span class="token comment">#     abcd12345a</span>
<span class="token comment"># \u5339\u914D\u5230\u5C3E\u90E8\u6700\u77ED\u76846\u4E2A\u5B57\u7B26                                  abcd12345abc6789</span>
<span class="token comment">#             ^                                                    |----|</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;\${var1%%pattern2} =&#39;</span> <span class="token string">&quot;<span class="token variable">\${var1<span class="token operator">%%</span>$pattern2}</span>&quot;</span>    <span class="token comment">#     a</span>
<span class="token comment"># \u5339\u914D\u5230\u5C3E\u90E8\u6700\u957F\u768412\u4E2A\u5B57\u7B26                                 abcd12345abc6789</span>
<span class="token comment">#             ^                                           |-------------|</span>

<span class="token comment"># \u7262\u8BB0 # \u4E0E ## \u662F\u4ECE\u5B57\u7B26\u4E32\u5DE6\u4FA7\u5F00\u59CB\uFF0C</span>
<span class="token comment">#      % \u4E0E %% \u662F\u4ECE\u53F3\u4FA7\u5F00\u59CB\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u6837\u4F8B 10-11. \u66F4\u6539\u6587\u4EF6\u6269\u5C55\u540D\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># rfe.sh: \u66F4\u6539\u6587\u4EF6\u6269\u5C55\u540D\u3002</span>
<span class="token comment">#</span>
<span class="token comment">#         rfe old_extension new_extension</span>
<span class="token comment">#</span>
<span class="token comment"># \u5982\uFF1A</span>
<span class="token comment"># \u5C06\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709 *.gif \u6587\u4EF6\u91CD\u547D\u540D\u4E3A *.jpg\uFF0C</span>
<span class="token comment">#         rfe gif jpg</span>


<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">65</span>

<span class="token keyword">case</span> <span class="token variable">$#</span> <span class="token keyword">in</span>
  <span class="token number">0</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">)</span>             <span class="token comment"># \u7AD6\u7EBF | \u5728\u8FD9\u91CC\u8868\u793A\u903B\u8F91\u6216\u5173\u7CFB\u3002</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> old_file_suffix new_file_suffix&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>  <span class="token comment"># \u5982\u679C\u53EA\u67090\u4E2A\u62161\u4E2A\u53C2\u6570\uFF0C\u90A3\u4E48\u9000\u51FA\u811A\u672C\u3002</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>


<span class="token keyword">for</span> <span class="token for-or-select variable">filename</span> <span class="token keyword">in</span> *.<span class="token variable">$1</span>
<span class="token comment"># \u904D\u5386\u4EE5\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A\u540E\u7F00\u540D\u7684\u6587\u4EF6\u5217\u8868\u3002</span>
<span class="token keyword">do</span>
  <span class="token function">mv</span> <span class="token variable">$filename</span> <span class="token variable">\${filename<span class="token operator">%</span>$1}</span><span class="token variable">$2</span>
  <span class="token comment"># \u5220\u9664\u6587\u4EF6\u540E\u7F00\u540D\uFF0C\u589E\u52A0\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F5C\u4E3A\u540E\u7F00\u540D\u3002</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="\u53D8\u91CF\u6269\u5C55-\u66FF\u6362\u5B50\u4E32" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u6269\u5C55-\u66FF\u6362\u5B50\u4E32" aria-hidden="true">#</a> \u53D8\u91CF\u6269\u5C55 / \u66FF\u6362\u5B50\u4E32</h3><p>\u4E0B\u9762\u8FD9\u4E9B\u7ED3\u6784\u91C7\u7528\u81EA ksh\u3002</p><h4 id="var-pos" tabindex="-1"><a class="header-anchor" href="#var-pos" aria-hidden="true">#</a> <code>\${var:pos}</code></h4><p>\u6269\u5C55\u4E3A\u4ECE\u504F\u79FB\u91CF pos \u5904\u622A\u53D6\u7684\u53D8\u91CF var\u3002</p><h4 id="var-pos-len" tabindex="-1"><a class="header-anchor" href="#var-pos-len" aria-hidden="true">#</a> <code>\${var:pos:len}</code></h4><p>\u6269\u5C55\u4E3A\u4ECE\u504F\u79FB\u91CF pos \u5904\u622A\u53D6\u53D8\u91CF var \u6700\u5927\u957F\u5EA6\u4E3A len \u7684\u5B57\u7B26\u4E32\u3002</p><h4 id="var-pattern-replacement" tabindex="-1"><a class="header-anchor" href="#var-pattern-replacement" aria-hidden="true">#</a> <code>\${var/Pattern/Replacement}</code></h4><p>\u66FF\u6362 var \u4E2D\u7B2C\u4E00\u4E2A\u5339\u914D\u5230\u7684 Pattern \u4E3A Replacement\u3002</p><p>\u5982\u679C Replacement \u88AB\u7701\u7565\uFF0C\u90A3\u4E48\u5339\u914D\u5230\u7684\u7B2C\u4E00\u4E2A Pattern \u5C06\u88AB\u66FF\u6362\u4E3A\u7A7A\uFF0C\u5373\u5220\u9664\u3002</p><h4 id="var-pattern-replacement-1" tabindex="-1"><a class="header-anchor" href="#var-pattern-replacement-1" aria-hidden="true">#</a> <code>\${var//Pattern/Replacement}</code></h4><p>\u5168\u5C40\u66FF\u6362\u3002\u66FF\u6362 var \u4E2D\u6240\u6709\u5339\u914D\u5230\u7684 Pattern \u4E3A Replacement\u3002</p><p>\u8DDF\u4E0A\u9762\u4E00\u6837\uFF0C\u5982\u679C Replacement \u88AB\u7701\u7565\uFF0C\u90A3\u4E48\u5339\u914D\u5230\u7684\u6240\u6709 Pattern \u5C06\u88AB\u66FF\u6362\u4E3A\u7A7A\uFF0C\u5373\u5220\u9664\u3002</p><p>\u6837\u4F8B 10-12. \u4F7F\u7528\u6A21\u5F0F\u5339\u914D\u89E3\u6790\u4EFB\u610F\u5B57\u7B26\u4E32</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span>abcd-1234-defg
<span class="token builtin class-name">echo</span> <span class="token string">&quot;var1 = <span class="token variable">$var1</span>&quot;</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${var1<span class="token operator">#</span>*-*}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;var1 (with everything, up to and including first - stripped out) = <span class="token variable">$t</span>&quot;</span>
<span class="token comment">#  t=\${var1#*-} \u6548\u679C\u76F8\u540C\uFF0C</span>
<span class="token comment">#+ \u56E0\u4E3A # \u53EA\u5339\u914D\u6700\u77ED\u7684\u5B57\u7B26\u4E32\uFF0C</span>
<span class="token comment">#+ \u5E76\u4E14 * \u53EF\u4EE5\u4EFB\u610F\u5339\u914D\uFF0C\u5176\u4E2D\u4E5F\u5305\u62EC\u7A7A\u5B57\u7B26\u4E32\u3002</span>
<span class="token comment"># \uFF08\u611F\u8C22 Stephane Chazelas \u6307\u51FA\u8FD9\u4E00\u70B9\u3002\uFF09</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${var<span class="token operator">##</span>*-*}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;If var1 contains a <span class="token entity" title="\\&quot;">\\&quot;</span>-<span class="token entity" title="\\&quot;">\\&quot;</span>, returns empty string...   var1 = <span class="token variable">$t</span>&quot;</span>


<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${var1<span class="token operator">%</span>*-*}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;var1 (with everything from the last - on stripped out) = <span class="token variable">$t</span>&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># -------------------------------------------</span>
<span class="token assign-left variable">path_name</span><span class="token operator">=</span>/home/bozo/ideas/thoughts/for.today
<span class="token comment"># -------------------------------------------</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;path_name = <span class="token variable">$path_name</span>&quot;</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${path_name<span class="token operator">##</span><span class="token operator">/</span>*<span class="token operator">/</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;path_name, stripped of prefixes = <span class="token variable">$t</span>&quot;</span>
<span class="token comment"># \u5728\u8FD9\u91CC\u4E0E t=\`basename $path_name\` \u6548\u679C\u76F8\u540C\u3002</span>
<span class="token comment">#  t=\${path_name%/}; t=\${t##*/}  \u662F\u66F4\u52A0\u901A\u7528\u7684\u65B9\u6CD5\uFF0C</span>
<span class="token comment">#+ \u4F46\u6709\u65F6\u4ECD\u65E7\u4E5F\u4F1A\u51FA\u73B0\u95EE\u9898\u3002</span>
<span class="token comment">#  \u5982\u679C $path_name \u4EE5\u6362\u884C\u7ED3\u675F\uFF0C\u90A3\u4E48 \`basename $path_name\` \u5C06\u4F1A\u5931\u6548\uFF0C</span>
<span class="token comment">#+ \u4F46\u662F\u4E0A\u9762\u8FD9\u79CD\u8868\u8FBE\u5F0F\u5374\u53EF\u4EE5\u3002</span>
<span class="token comment"># \uFF08\u611F\u8C22 S.C.\uFF09</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${path_name<span class="token operator">%</span><span class="token operator">/</span>*.*}</span>
<span class="token comment"># \u540C t=\`dirname $path_name\` \u6548\u679C\u76F8\u540C\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;path_name, stripped of suffixes = <span class="token variable">$t</span>&quot;</span>
<span class="token comment"># \u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u5931\u6548\uFF0C\u6BD4\u5982 &quot;../&quot;, &quot;/foo////&quot;, # &quot;foo/&quot;, &quot;/&quot;\u3002</span>
<span class="token comment">#  \u5728\u5220\u9664\u540E\u7F00\u65F6\uFF0C\u5C24\u5176\u662F\u5F53\u6587\u4EF6\u540D\u6CA1\u6709\u540E\u7F00\uFF0C\u76EE\u5F55\u540D\u5374\u6709\u540E\u7F00\u65F6\uFF0C</span>
<span class="token comment">#+ \u4E8B\u60C5\u4F1A\u53D8\u7684\u975E\u5E38\u590D\u6742\u3002</span>
<span class="token comment"># \uFF08\u611F\u8C22 S.C.\uFF09</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${path_name<span class="token operator">:</span>11}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$path_name</span>, with first 11 chars stripped off = <span class="token variable">$t</span>&quot;</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${path_name<span class="token operator">:</span>11<span class="token operator">:</span>5}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$path_name</span>, with first 11 chars stripped off, length 5 = <span class="token variable">$t</span>&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${path_name<span class="token operator">/</span>bozo<span class="token operator">/</span>clown}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$path_name</span> with <span class="token entity" title="\\&quot;">\\&quot;</span>bozo<span class="token entity" title="\\&quot;">\\&quot;</span> replaced by <span class="token entity" title="\\&quot;">\\&quot;</span>clown<span class="token entity" title="\\&quot;">\\&quot;</span> = <span class="token variable">$t</span>&quot;</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${path_name<span class="token operator">/</span>today<span class="token operator">/</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$path_name</span> with <span class="token entity" title="\\&quot;">\\&quot;</span>today<span class="token entity" title="\\&quot;">\\&quot;</span> deleted = <span class="token variable">$t</span>&quot;</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${path_name<span class="token operator">/</span><span class="token operator">/</span>o<span class="token operator">/</span>O}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$path_name</span> with all o&#39;s capitalized = <span class="token variable">$t</span>&quot;</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">\${path_name<span class="token operator">/</span><span class="token operator">/</span>o<span class="token operator">/</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$path_name</span> with all o&#39;s deleted = <span class="token variable">$t</span>&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h4 id="var-pattern-replacement-2" tabindex="-1"><a class="header-anchor" href="#var-pattern-replacement-2" aria-hidden="true">#</a> <code>\${var/#Pattern/Replacement}</code></h4><p>\u66FF\u6362 var \u524D\u7F00\u90E8\u5206\u5339\u914D\u5230\u7684 Pattern \u4E3A Replacement\u3002</p><h4 id="var-pattern-replacement-3" tabindex="-1"><a class="header-anchor" href="#var-pattern-replacement-3" aria-hidden="true">#</a> <code>\${var/%Pattern/Replacement}</code></h4><p>\u66FF\u6362 var \u540E\u7F00\u90E8\u5206\u5339\u914D\u5230\u7684 Pattern \u4E3A Replacement\u3002</p><p>\u6837\u4F8B 10-13. \u5728\u5B57\u7B26\u4E32\u9996\u90E8\u6216\u5C3E\u90E8\u8FDB\u884C\u6A21\u5F0F\u5339\u914D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># var-match.sh:</span>
<span class="token comment"># \u6F14\u793A\u5728\u5B57\u7B26\u4E32\u9996\u90E8\u6216\u5C3E\u90E8\u8FDB\u884C\u6A21\u5F0F\u66FF\u6362\u3002</span>

<span class="token assign-left variable">v0</span><span class="token operator">=</span>abc1234zip1234abc    <span class="token comment"># \u521D\u59CB\u503C\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;v0 = <span class="token variable">$v0</span>&quot;</span>         <span class="token comment"># abc1234zip1234abc</span>
<span class="token builtin class-name">echo</span>

<span class="token comment"># \u5728\u5B57\u7B26\u4E32\u9996\u90E8\u8FDB\u884C\u5339\u914D</span>
<span class="token assign-left variable">v1</span><span class="token operator">=</span><span class="token variable">\${v0<span class="token operator">/</span><span class="token operator">#</span>abc<span class="token operator">/</span>ABCDEF}</span>    <span class="token comment"># abc1234zip123abc</span>
                        <span class="token comment"># |-|</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;v1 = <span class="token variable">$v1</span>&quot;</span>         <span class="token comment"># ABCDEF1234zip1234abc</span>
                        <span class="token comment"># |----|</span>
                        
<span class="token comment"># \u5728\u5B57\u7B26\u4E32\u5C3E\u90E8\u8FDB\u884C\u5339\u914D</span>
<span class="token assign-left variable">v2</span><span class="token operator">=</span><span class="token variable">\${v0<span class="token operator">/</span><span class="token operator">%</span>abc<span class="token operator">/</span>ABCDEF}</span>    <span class="token comment"># abc1234zip123abc</span>
                        <span class="token comment">#              |-|</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;v2 = <span class="token variable">$v2</span>&quot;</span>         <span class="token comment"># abc1234zip1234ABCDEF</span>
                        <span class="token comment">#               |----|</span>
                        
<span class="token builtin class-name">echo</span>

<span class="token comment">#  --------------------------------------------</span>
<span class="token comment">#  \u5FC5\u987B\u5728\u5B57\u7B26\u4E32\u7684\u6700\u5F00\u59CB\u6216\u8005\u6700\u672B\u5C3E\u7684\u5730\u65B9\u8FDB\u884C\u5339\u914D\uFF0C</span>
<span class="token comment">#+ \u5426\u5219\u5C06\u4E0D\u4F1A\u53D1\u751F\u66FF\u6362\u3002</span>
<span class="token comment">#  --------------------------------------------</span>
<span class="token assign-left variable">v3</span><span class="token operator">=</span><span class="token variable">\${v0<span class="token operator">/</span><span class="token operator">#</span>123<span class="token operator">/</span>000}</span>       <span class="token comment"># \u867D\u7136\u5339\u914D\u5230\u4E86\uFF0C\u4F46\u662F\u4E0D\u5728\u6700\u5F00\u59CB\u7684\u5730\u65B9\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;v3 = <span class="token variable">$v3</span>&quot;</span>         <span class="token comment"># abc1234zip1234abc</span>
                        <span class="token comment"># \u6CA1\u6709\u66FF\u6362\u3002</span>
<span class="token assign-left variable">v4</span><span class="token operator">=</span><span class="token variable">\${v0<span class="token operator">/</span><span class="token operator">%</span>123<span class="token operator">/</span>000}</span>       <span class="token comment"># \u867D\u7136\u5339\u914D\u5230\u4E86\uFF0C\u4F46\u662F\u4E0D\u5728\u6700\u672B\u5C3E\u7684\u5730\u65B9\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;v4 = <span class="token variable">$v4</span>&quot;</span>         <span class="token comment"># abc1234zip1234abc</span>
                        <span class="token comment"># \u6CA1\u6709\u66FF\u6362\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h4 id="varprefix-varprefix" tabindex="-1"><a class="header-anchor" href="#varprefix-varprefix" aria-hidden="true">#</a> <code>\${!varprefix*}, \${!varprefix@}</code></h4><p>\u5339\u914D\u5148\u524D\u58F0\u660E\u8FC7\u6240\u6709\u4EE5 varprefix \u4F5C\u4E3A\u53D8\u91CF\u540D\u524D\u7F00\u7684\u53D8\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD9\u662F\u5E26 * \u6216 @ \u7684\u95F4\u63A5\u5F15\u7528\u7684\u4E00\u79CD\u53D8\u6362\u5F62\u5F0F\u3002</span>
<span class="token comment"># \u5728 Bash 2.04 \u7248\u672C\u4E2D\u52A0\u5165\u4E86\u8FD9\u4E2A\u7279\u6027\u3002</span>

<span class="token assign-left variable">xyz23</span><span class="token operator">=</span>whatever
<span class="token assign-left variable">xyz23</span><span class="token operator">=</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">!</span>xyz*}</span>         <span class="token comment">#  \u6269\u5C55\u4E3A\u58F0\u660E\u53D8\u91CF\u4E2D\u4EE5 &quot;xyz&quot;</span>
<span class="token comment"># ^ ^   ^           + \u5F00\u5934\u53D8\u91CF\u540D\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>      <span class="token comment">#  a = xyz23 xyz24</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">!</span>xyz@}</span>         <span class="token comment">#  \u540C\u4E0A\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>      <span class="token comment">#  a = xyz23 xyz24</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;---&quot;</span>

<span class="token assign-left variable">abc23</span><span class="token operator">=</span>something_else
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">!</span>abc*}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>      <span class="token comment">#  b = abc23</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">!</span>b}</span>            <span class="token comment">#  \u8FD9\u662F\u6211\u4EEC\u719F\u6089\u7684\u95F4\u63A5\u5F15\u7528\u7684\u5F62\u5F0F\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$c</span>            <span class="token comment">#  something_else</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><hr class="footnotes-sep">`,28),K={class:"footnotes"},J={class:"footnotes-list"},Q={id:"footnote1",class:"footnote-item"},ss=s("\u5982\u679C\u5728\u975E\u4EA4\u4E92\u7684\u811A\u672C\u4E2D\uFF0C"),ns=n("code",null,"$parameter",-1),as=s(" \u4E3A\u7A7A\uFF0C\u90A3\u4E48\u7A0B\u5E8F\u5C06\u4F1A\u7EC8\u6B62\uFF0C\u5E76\u4E14\u8FD4\u56DE "),es={href:"http://tldp.org/LDP/abs/html/exitcodes.html#EXITCODESREF",target:"_blank",rel:"noopener noreferrer"},ps=s("\u9519\u8BEF\u7801 127"),ls=s("\uFF08\u610F\u4E3A\u201C\u627E\u4E0D\u5230\u547D\u4EE4\u201D\uFF09\u3002 "),ts=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function rs(os,cs){const a=t("ExternalLinkIcon");return c(),r(o,null,[b,n("p",null,[m,n("a",u,[k,e(a)]),h,n("a",d,[v,e(a)]),g,n("a",q,[$,e(a)]),f]),n("p",null,[_,n("a",x,[y,e(a)]),E]),A,n("p",null,[P,n("a",z,[w,e(a)]),R]),T,n("p",null,[D,S,L,n("a",N,[B,e(a)]),F,H,M]),O,n("p",null,[Z,n("a",I,[U,e(a)]),X]),V,n("p",null,[C,n("a",G,[Y,e(a)]),j]),W,n("section",K,[n("ol",J,[n("li",Q,[n("p",null,[ss,ns,as,n("a",es,[ps,e(a)]),ls,ts])])])])],64)}var bs=l(i,[["render",rs],["__file","10_2_parameter_substitution.html.vue"]]);export{bs as default};
