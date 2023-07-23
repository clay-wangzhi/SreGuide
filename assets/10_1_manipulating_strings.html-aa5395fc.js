import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as p,b as n,d as s,e,a as i}from"./app-679550bc.js";const o={},r=n("h1",{id:"_10-1-字符串处理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-1-字符串处理","aria-hidden":"true"},"#"),s(" 10.1 字符串处理")],-1),d={href:"http://tldp.org/LDP/abs/html/parameter-substitution.html#PARAMSUBREF",target:"_blank",rel:"noopener noreferrer"},v={href:"http://tldp.org/LDP/abs/html/moreadv.html#EXPRREF",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"expr",-1),b=i(`<h3 id="字符串长度" tabindex="-1"><a class="header-anchor" href="#字符串长度" aria-hidden="true">#</a> 字符串长度</h3><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> <code>\${#string}</code></h4><h4 id="expr-length-string" tabindex="-1"><a class="header-anchor" href="#expr-length-string" aria-hidden="true">#</a> <code>expr length $string</code></h4><p>上面两个表达式等价于C语言中的 <code>strlen()</code> 函数。</p><h4 id="expr-string" tabindex="-1"><a class="header-anchor" href="#expr-string" aria-hidden="true">#</a> <code>expr &quot;$string&quot; : &#39;.*&#39;</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc

<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>stringZ}</span>                 <span class="token comment"># 15</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> length $stringz<span class="token variable">\`</span></span>      <span class="token comment"># 15</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;.*&#39;</span><span class="token variable">\`</span></span>    <span class="token comment"># 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 10-1. 在文本的段落之间插入空行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># paragraph-space.sh</span>
<span class="token comment"># 版本 2.1，发布日期 2012年7月29日</span>

<span class="token comment"># 在无空行的文本文件的段落之间插入空行。</span>
<span class="token comment"># 像这样使用: $0 &lt;FILENAME</span>

<span class="token assign-left variable">MINLEN</span><span class="token operator">=</span><span class="token number">60</span>        <span class="token comment"># 可以试试修改这个值。它用来做判断。</span>
<span class="token comment">#  假设一行的字符数小于 $MINLEN，并且以句点结束段落。</span>
<span class="token comment">#+ 结尾部分有练习！</span>

<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line  <span class="token comment"># 当文件有许多行的时候</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span>   <span class="token comment"># 输出行本身。</span>
  
  <span class="token assign-left variable">len</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>line}</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$len</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token string">&quot;<span class="token variable">$MINLEN</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span> <span class="token operator">=~</span> <span class="token punctuation">[</span>*<span class="token punctuation">{</span><span class="token punctuation">\\</span>.<span class="token punctuation">}</span><span class="token punctuation">]</span>$ <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment"># if [[ &quot;$len&quot; -lt &quot;$MINLEN&quot; &amp;&amp; &quot;$line&quot; =~ \\[*\\.\\] ]]</span>
<span class="token comment"># 新版Bash将不能正常运行前一个版本的脚本。Ouch！</span>
<span class="token comment"># 感谢 Halim Srama 指出这点，并且给出了修正版本。</span>
    <span class="token keyword">then</span> <span class="token builtin class-name">echo</span>    <span class="token comment">#  在该行以句点结束时，</span>
  <span class="token keyword">fi</span>             <span class="token comment">#+ 增加一行空行。</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span>

<span class="token comment"># 练习：</span>
<span class="token comment"># -----</span>
<span class="token comment">#  1) 该脚本通常会在文件的最后插入一个空行。</span>
<span class="token comment">#+    尝试解决这个问题。</span>
<span class="token comment">#  2) 在第17行仅仅考虑到了以句点作为句子终止的情况。</span>
<span class="token comment">#+    修改以满足其他的终止符，例如 ?, ! 和 &quot;。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="起始部分字符串匹配长度" tabindex="-1"><a class="header-anchor" href="#起始部分字符串匹配长度" aria-hidden="true">#</a> 起始部分字符串匹配长度</h3><h4 id="expr-match-string-substring" tabindex="-1"><a class="header-anchor" href="#expr-match-string-substring" aria-hidden="true">#</a> <code>expr match &quot;$string&quot; &#39;$substring&#39;</code></h4>`,10),u=n("code",null,"$substring",-1),k={href:"http://tldp.org/LDP/abs/html/regexp.html#REGEXREF",target:"_blank",rel:"noopener noreferrer"},g=i(`<h4 id="expr-string-substring" tabindex="-1"><a class="header-anchor" href="#expr-string-substring" aria-hidden="true">#</a> <code>expr &quot;$string&quot; : &#39;$substring&#39;</code></h4><p>其中，<code>$substring</code> 是一个正则表达式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       |------|</span>
<span class="token comment">#       12345678</span>

<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> match <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token string">&#39;abc[A-Z]*.2&#39;</span><span class="token variable">\`</span></span>   <span class="token comment"># 8</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;abc[A-Z]*.2&#39;</span><span class="token variable">\`</span></span>       <span class="token comment"># 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><h4 id="expr-index-string-substring" tabindex="-1"><a class="header-anchor" href="#expr-index-string-substring" aria-hidden="true">#</a> <code>expr index $string $substring</code></h4><p>返回在 <code>$string</code> 中第一个出现的 <code>$substring</code> 字符所在的位置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       123456 ...</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> C12<span class="token variable">\`</span></span>             <span class="token comment"># 6</span>
                                             <span class="token comment"># C 的位置。</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> 1c<span class="token variable">\`</span></span>              <span class="token comment"># 3</span>
<span class="token comment"># &#39;c&#39; (第三号位) 较 &#39;1&#39; 出现的更早。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>几乎等价于C语言中的 <code>strchr()</code>。</p><h3 id="截取字符串-字符串分片" tabindex="-1"><a class="header-anchor" href="#截取字符串-字符串分片" aria-hidden="true">#</a> 截取字符串（字符串分片）</h3><h4 id="string-position" tabindex="-1"><a class="header-anchor" href="#string-position" aria-hidden="true">#</a> <code>\${string:position}</code></h4><p>在 <code>$string</code> 中截取自 <code>$position</code> 起的字符串。</p>`,11),h=n("code",null,"$string",-1),$=n("code",null,"$position",-1),f={href:"http://tldp.org/LDP/abs/html/internalvariables.html#POSPARAMREF",target:"_blank",rel:"noopener noreferrer"},q=n("a",{href:"%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E5%90%8C%E6%97%B6%E9%80%82%E7%94%A8%E4%BA%8E%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0%E5%92%8C%E4%BC%A0%E5%85%A5%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%E3%80%82"},"^1",-1),x=i(`<h4 id="string-position-length" tabindex="-1"><a class="header-anchor" href="#string-position-length" aria-hidden="true">#</a> <code>\${string:position:length}</code></h4><p>在 <code>$string</code> 中截取自 <code>$position</code> 起，长度为 <code>$length</code> 的字符串。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       0123456789.....</span>
<span class="token comment">#       索引位置从0开始。</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span>0}</span>                            <span class="token comment"># abcABC123ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span>1}</span>                            <span class="token comment"># bcABC123ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span>7}</span>                            <span class="token comment"># 23ABCabc</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringz<span class="token operator">:</span>7<span class="token operator">:</span>3}</span>                          <span class="token comment"># 23A</span>
                                             <span class="token comment"># 三个字符的子字符串。</span>
                                             
                                             

<span class="token comment"># 从右至左进行截取可行么？</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:-</span>4}</span>                           <span class="token comment"># abcABC123ABCabc</span>
<span class="token comment"># \${parameter:-default} 将会得到整个字符串。</span>
<span class="token comment"># 但是……</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span>(-4)}</span>                         <span class="token comment"># Cabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span> -4}</span>                          <span class="token comment"># Cabc</span>
<span class="token comment"># 现在可以了。</span>
<span class="token comment"># 括号或者增加空格都可以&quot;转义&quot;位置参数。</span>

<span class="token comment"># 感谢 Dan Jacobson 指出这些。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，参数 <code>position</code> 与 <code>length</code> 可以传入一个变量而不一定需要传入常量。</p><p>样例 10-2. 产生一个8个字符的随机字符串</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># rand-string.sh</span>
<span class="token comment"># 产生一个8个字符的随机字符串。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment">#  如果在命令行中已经传入了参数，</span>
<span class="token keyword">then</span>            <span class="token comment">#+ 那么就以它作为起始字符串。</span>
  <span class="token assign-left variable">str0</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
<span class="token keyword">else</span>            <span class="token comment">#  否则，就将脚本的进程标识符PID作为起始字符串。</span>
  <span class="token assign-left variable">str0</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$$</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">POS</span><span class="token operator">=</span><span class="token number">2</span>  <span class="token comment"># 从字符串的第二位开始。</span>
<span class="token assign-left variable">LEN</span><span class="token operator">=</span><span class="token number">8</span>  <span class="token comment"># 截取八个字符。</span>

<span class="token assign-left variable">str1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$str0</span>&quot;</span> <span class="token operator">|</span> md5sum <span class="token operator">|</span> md5sum <span class="token variable">)</span></span>
<span class="token comment">#                      ^^^^^^   ^^^^^^</span>
<span class="token comment"># 将字符串通过管道计算两次 md5 来进行两次混淆。</span>

<span class="token assign-left variable">randstring</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${str1<span class="token operator">:</span>$POS<span class="token operator">:</span>$LEN}</span>&quot;</span>
<span class="token comment">#                  ^^^^ ^^^^</span>
<span class="token comment"># 允许传入参数</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$randstring</span>&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment"># bozo$ ./rand-string.sh my-password</span>
<span class="token comment"># 1bdd88c4</span>

<span class="token comment"># 不过不建议将其作为一种能够抵抗黑客的生成密码的方法。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果参数 <code>$string</code> 是 &quot;*&quot; 或者 &quot;@&quot;，那么将会截取自 <code>$position</code> 起，最大个数为 <code>$length</code> 的位置参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">\${*<span class="token operator">:</span>2}</span>          <span class="token comment"># 输出第二个及之后的所有位置参数。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${@<span class="token operator">:</span>2}</span>          <span class="token comment"># 同上。</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${*<span class="token operator">:</span>2<span class="token operator">:</span>3}</span>        <span class="token comment"># 从第二个位置参数起，输出三个位置参数。 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="expr-substr-string-position-length" tabindex="-1"><a class="header-anchor" href="#expr-substr-string-position-length" aria-hidden="true">#</a> <code>expr substr $string $position $length</code></h4><p>在 <code>$string</code> 中截取自 <code>$position</code> 起，长度为 <code>$length</code> 的字符串。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       123456789......</span>
<span class="token comment">#       索引位置从1开始。</span>

<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> substr $stringZ <span class="token number">1</span> <span class="token number">2</span><span class="token variable">\`</span></span>              <span class="token comment"># ab</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> substr $stringZ <span class="token number">4</span> <span class="token number">3</span><span class="token variable">\`</span></span>              <span class="token comment"># ABC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="expr-match-string-substring-1" tabindex="-1"><a class="header-anchor" href="#expr-match-string-substring-1" aria-hidden="true">#</a> <code>expr match &quot;$string&quot; &#39;\\($substring\\)&#39;</code></h4>`,12),A=n("code",null,"$string",-1),_=n("code",null,"$position",-1),B=n("code",null,"$substring",-1),C={href:"http://tldp.org/LDP/abs/html/regexp.html#REGEXREF",target:"_blank",rel:"noopener noreferrer"},E=i(`<h4 id="expr-string-substring-1" tabindex="-1"><a class="header-anchor" href="#expr-string-substring-1" aria-hidden="true">#</a> <code>expr &quot;$string&quot; : &#39;\\($substring\\)&#39;</code></h4><p>在 <code>$string</code> 中截取自 <code>$position</code> 起的字符串，其中 <code>$substring</code> 是正则表达式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       =======</span>

<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> match <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token string">&#39;\\(.[b-c]*[A-Z]..[0-9]\\)&#39;</span><span class="token variable">\`</span></span>   <span class="token comment"># abcABC1</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;\\(.[b-c]*[A-Z]..[0-9]\\)&#39;</span><span class="token variable">\`</span></span>       <span class="token comment"># abcABC1</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;\\(.......\\)&#39;</span><span class="token variable">\`</span></span>                   <span class="token comment"># abcABC1</span>
<span class="token comment"># 上面所有的形式都给出了相同的结果。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="expr-match-string-substring-2" tabindex="-1"><a class="header-anchor" href="#expr-match-string-substring-2" aria-hidden="true">#</a> <code>expr match &quot;$string&quot; &#39;.*\\($substring\\)&#39;</code></h4><p>从 <code>$string</code> 结尾部分截取 <code>$substring</code> 字符串，其中 <code>$substring</code> 是正则表达式。</p><h4 id="expr-string-substring-2" tabindex="-1"><a class="header-anchor" href="#expr-string-substring-2" aria-hidden="true">#</a> <code>expr &quot;$string&quot; : &#39;.*\\($substring\\)&#39;</code></h4><p>从 <code>$string</code> 结尾部分截取 <code>$substring</code> 字符串，其中 <code>$substring</code> 是正则表达式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#                ======</span>

<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> match <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token string">&#39;.*\\([A-C][A-C][A-C][a-c]*\\)&#39;</span><span class="token variable">\`</span></span>    <span class="token comment"># ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;.*\\(......\\)&#39;</span><span class="token variable">\`</span></span>                       <span class="token comment"># ABCabc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除子串" tabindex="-1"><a class="header-anchor" href="#删除子串" aria-hidden="true">#</a> 删除子串</h3><h4 id="string-substring" tabindex="-1"><a class="header-anchor" href="#string-substring" aria-hidden="true">#</a> <code>\${string#substring}</code></h4><p>删除从 <code>$string</code> 起始部分起，匹配到的最短的 <code>$substring</code>。</p><h4 id="string-substring-1" tabindex="-1"><a class="header-anchor" href="#string-substring-1" aria-hidden="true">#</a> <code>\${string##substring}</code></h4><p>删除从 <code>$string</code> 起始部分起，匹配到的最长的 <code>$substring</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       |----|          最长</span>
<span class="token comment">#       |----------|    最短</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">#</span>a*C}</span>      <span class="token comment"># 123ABCabc</span>
<span class="token comment"># 删除 &#39;a&#39; 与 &#39;c&#39; 之间最短的匹配。</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">##</span>a*C}</span>     <span class="token comment"># abc</span>
<span class="token comment"># 删除 &#39;a&#39; 与 &#39;c&#39; 之间最长的匹配。</span>



<span class="token comment"># 你可以使用变量代替 substring。</span>

<span class="token assign-left variable">X</span><span class="token operator">=</span><span class="token string">&#39;a*C&#39;</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">#</span>$X}</span>      <span class="token comment"># 123ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">##</span>$X}</span>     <span class="token comment"># abc</span>
                        <span class="token comment"># 同上。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string-substring-2" tabindex="-1"><a class="header-anchor" href="#string-substring-2" aria-hidden="true">#</a> <code>\${string%substring}</code></h4><p>删除从 <code>$string</code> 结尾部分起，匹配到的最短的 <code>$substring</code>。</p><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将当前目录下所有后缀名为 &quot;TXT&quot; 的文件改为 &quot;txt&quot; 后缀。</span>
<span class="token comment"># 例如 &quot;file1.TXT&quot; 改为 &quot;file1.txt&quot;。</span>

<span class="token assign-left variable">SUFF</span><span class="token operator">=</span>TXT
<span class="token assign-left variable">suff</span><span class="token operator">=</span>txt

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> *.$SUFF<span class="token variable">)</span></span>
<span class="token keyword">do</span>
  <span class="token function">mv</span> <span class="token parameter variable">-f</span> <span class="token variable">$i</span> <span class="token variable"><span class="token variable">$(</span>i%.$SUFF<span class="token variable">)</span></span><span class="token builtin class-name">.</span><span class="token variable">$suff</span>
  <span class="token comment">#  除了从变量 $i 右侧匹配到的最短的字符串之外，</span>
  <span class="token comment">#+ 其他一切都保持不变。</span>
<span class="token keyword">done</span> <span class="token comment">### 如果需要，循环可以压缩成一行的形式。</span>

<span class="token comment"># 感谢 Rory Winston。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string-substring-3" tabindex="-1"><a class="header-anchor" href="#string-substring-3" aria-hidden="true">#</a> <code>\${string%%substring}</code></h4><p>删除从 <code>$string</code> 结尾部分起，匹配到的最长的 <code>$substring</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#                    ||     最短</span>
<span class="token comment">#        |------------|     最长</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">%</span>b*c}</span>      <span class="token comment"># abcABC123ABCa</span>
<span class="token comment"># 从结尾处删除 &#39;b&#39; 与 &#39;c&#39; 之间最短的匹配。</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">%%</span>b*c}</span>     <span class="token comment"># a</span>
<span class="token comment"># 从结尾处删除 &#39;b&#39; 与 &#39;c&#39; 之间最长的匹配。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个操作对生成文件名非常有帮助。</p><p>样例 10-3. 改变图像文件的格式及文件名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#  cvt.sh:</span>
<span class="token comment">#  将目录下所有的 MacPaint 文件转换为 &quot;pbm&quot; 格式。</span>

<span class="token comment">#  使用由 Brian Henderson (bryanh@giraffe-data.com) 维护的</span>
<span class="token comment">#+ &quot;netpbm&quot; 包下的 &quot;macptobpm&quot; 二进制工具。</span>
<span class="token comment">#  Netpbm 是大多数 Linux 发行版的标准组成部分。</span>

<span class="token assign-left variable">OPERATION</span><span class="token operator">=</span>macptopbm
<span class="token assign-left variable">SUFFIX</span><span class="token operator">=</span>pbm          <span class="token comment"># 新的文件名后缀。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable">$1</span>      <span class="token comment"># 如果已经通过脚本参数传入了目录名的情况……</span>
<span class="token keyword">else</span>
  <span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token environment constant">$PWD</span>    <span class="token comment"># 否则就使用当前工作目录。</span>
<span class="token keyword">fi</span>

<span class="token comment">#  假设目标目录下的所有 MacPaint 图像文件都拥有</span>
<span class="token comment">#+ &quot;.mac&quot; 的文件后缀名。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$directory</span>/*    <span class="token comment"># 文件名匹配。</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable">\${file<span class="token operator">%</span>.*c}</span>      <span class="token comment">#  从文件名中删除 &quot;.mac&quot; 后缀</span>
                            <span class="token comment">#+ (&#39;.*c&#39; 匹配 &#39;.&#39; 与 &#39;c&#39; 之间的</span>
                            <span class="token comment">#  所有字符，包括其本身)。</span>
  <span class="token variable">$OPERATION</span> <span class="token variable">$file</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$filename</span>.<span class="token variable">$SUFFIX</span>&quot;</span>
                            <span class="token comment"># 将转换结果重定向到新的文件。</span>
  <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$file</span>               <span class="token comment"># 在转换后删除原文件。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$filename</span>.<span class="token variable">$SUFFIX</span>&quot;</span>  <span class="token comment"># 将记录输出到 stdout 中。</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># 练习：</span>
<span class="token comment"># -----</span>
<span class="token comment"># 这个脚本会将当前工作目录下的所有文件进行转换。</span>
<span class="token comment"># 修改脚本，使得它仅转换 &quot;.mac&quot; 后缀的文件。</span>



<span class="token comment"># *** 还可以使用另外一种方法。 *** #</span>

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># 将图像批处理转换成不同的格式。</span>
<span class="token comment"># 假设已经安装了 imagemagick。（在大部分 Linux 发行版中都有）</span>

<span class="token assign-left variable">INFMT</span><span class="token operator">=</span>png   <span class="token comment"># 可以是 tif, jpg, gif 等等。</span>
<span class="token assign-left variable">OUTFMT</span><span class="token operator">=</span>pdf  <span class="token comment"># 可以是 tif, jpg, gif, pdf 等等。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">pic</span> <span class="token keyword">in</span> *<span class="token string">&quot;<span class="token variable">$INFMT</span>&quot;</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">p2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token string">&quot;<span class="token variable">$pic</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> s/<span class="token punctuation">\\</span>.$INFMT//<span class="token variable">)</span></span>
  <span class="token comment"># echo $p2</span>
  convert <span class="token string">&quot;<span class="token variable">$pic</span>&quot;</span> <span class="token variable">$p2</span><span class="token builtin class-name">.</span><span class="token variable">$OUTFMT</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 10-4. 将流音频格式转换成 ogg 格式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># ra2ogg.sh: 将流音频文件 (*.ra) 转换成 ogg 格式。</span>

<span class="token comment"># 使用 &quot;mplayer&quot; 媒体播放器程序：</span>
<span class="token comment">#      http://www.mplayerhq.hu/homepage</span>
<span class="token comment"># 使用 &quot;ogg&quot; 库与 &quot;oggenc&quot;：</span>
<span class="token comment">#      http://www.xiph.org/</span>
<span class="token comment">#</span>
<span class="token comment"># 脚本同时需要安装一些解码器，例如 sipr.so 等等一些。</span>
<span class="token comment"># 这些解码器可以在 compat-libstdc++ 包中找到。</span>


<span class="token assign-left variable">OFILEPREF</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">%%</span>ra}</span>      <span class="token comment"># 删除 &quot;ra&quot; 后缀。</span>
<span class="token assign-left variable">OFILESUFF</span><span class="token operator">=</span>wav           <span class="token comment"># wav 文件后缀。</span>
<span class="token assign-left variable">OUTFILE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$OFILEPREF</span>&quot;</span>&quot;<span class="token variable">$OFILESUFF</span><span class="token string">&quot;
E_NOARGS=85

if [ -z &quot;</span><span class="token variable">$1</span><span class="token string">&quot; ]          # 必须指定一个文件进行转换。
then
  echo &quot;</span>Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token string">&quot;
  exit <span class="token variable">$E_NOAGRS</span>
fi


######################################################
mplayer &quot;</span><span class="token variable">$1</span><span class="token string">&quot; -ao pcm:file=<span class="token variable">$OUTFILE</span>
oggenc &quot;</span><span class="token variable">$OUTFILE</span><span class="token string">&quot;  # 由 oggenc 自动加上正确的文件后缀名。
######################################################

rm &quot;</span><span class="token variable">$OUTFILE</span><span class="token string">&quot;      # 立即删除 *.wav 文件。
                   # 如果你仍需保留原文件，注释掉上面这一行即可。
                   
exit <span class="token variable">$?</span>

#  注意：
#  -----
#  在网站上，点击一个 *.ram 的流媒体音频文件
#+ 通常只会下载到 *.ra 音频文件的 URL。
#  你可以使用 &quot;</span><span class="token function">wget</span><span class="token string">&quot; 或者类似的工具下载 *.ra 文件本身。


#  练习：
#  -----
#  这个脚本仅仅转换 *.ra 文件。
#  修改脚本增加适应性，使其可以转换 *.ram 或其他文件格式。
#
#  如果你非常有热情，你可以扩展这个脚本使其
#+ 可以自动下载并且转换流媒体音频文件。
#  给定一个 URL，自动下载流媒体音频文件 (使用 &quot;</span>wget&quot;<span class="token punctuation">)</span>，
<span class="token comment">#+ 然后转换它。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),Z={href:"http://tldp.org/LDP/abs/html/extmisc.html#GETOPTY",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"getopt",-1),w=i(`<p>样例 10-5. 模拟 <code>getopt</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># getopt-simple.sh</span>
<span class="token comment"># 作者: Chris Morgan</span>
<span class="token comment"># 允许在高级脚本编程指南中使用。</span>


<span class="token function-name function">getopt_simple</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;getopt_simple()&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameters are &#39;<span class="token variable">$*</span>&#39;&quot;</span>
    <span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
    <span class="token keyword">do</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Processing parameter of: &#39;<span class="token variable">$1</span>&#39;&quot;</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${1<span class="token operator">:</span>0<span class="token operator">:</span>1}</span> <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">]</span>
      <span class="token keyword">then</span>
          <span class="token assign-left variable">tmp</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">:</span>1}</span>               <span class="token comment"># 删除开头的 &#39;/&#39;</span>
          <span class="token assign-left variable">parameter</span><span class="token operator">=</span><span class="token variable">\${tmp<span class="token operator">%%</span>=*}</span>     <span class="token comment"># 取出名称。</span>
          <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable">\${tmp<span class="token operator">##</span>*=}</span>         <span class="token comment"># 取出值。</span>
          <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter: &#39;<span class="token variable">$parameter</span>&#39;, value: &#39;<span class="token variable">$value</span>&#39;&quot;</span>
          <span class="token builtin class-name">eval</span> <span class="token variable">$parameter</span><span class="token operator">=</span><span class="token variable">$value</span>
      <span class="token keyword">fi</span>
      <span class="token builtin class-name">shift</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment"># 将所有参数传递给 getopt_simple()。</span>
getopt_simple <span class="token variable">$*</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;test is &#39;<span class="token variable">$test</span>&#39;&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;test2 is &#39;<span class="token variable">$test2</span>&#39;&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>  <span class="token comment"># 可以查看该脚本的修改版 UseGetOpt.sh。</span>

---

<span class="token function">sh</span> getopt_example.sh /test<span class="token operator">=</span>value1 /test2<span class="token operator">=</span>value2

Parameters are <span class="token string">&#39;/test=value1 /test2=value2&#39;</span>
Processing parameter of: <span class="token string">&#39;/test=value1&#39;</span>
Parameter: <span class="token string">&#39;test&#39;</span>, value: <span class="token string">&#39;value1&#39;</span>
Processing parameter of: <span class="token string">&#39;/test2=value2&#39;</span>
Parameter: <span class="token string">&#39;test2&#39;</span>, value: <span class="token string">&#39;value2&#39;</span>
<span class="token builtin class-name">test</span> is <span class="token string">&#39;value1&#39;</span>
test2 is <span class="token string">&#39;value2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子串替换" tabindex="-1"><a class="header-anchor" href="#子串替换" aria-hidden="true">#</a> 子串替换</h3><h4 id="string-substring-replacement" tabindex="-1"><a class="header-anchor" href="#string-substring-replacement" aria-hidden="true">#</a> <code>\${string/substring/replacement}</code></h4><p>替换匹配到的第一个 <code>$substring</code> 为 <code>$replacement</code>。[^2]</p><h4 id="string-substring-replacement-1" tabindex="-1"><a class="header-anchor" href="#string-substring-replacement-1" aria-hidden="true">#</a> <code>\${string//substring/replacement}</code></h4><p>替换匹配到的所有 <code>$substring</code> 为 <code>$replacement</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span>abc<span class="token operator">/</span>xyz}</span>       <span class="token comment"># xyzABC123ABCabc</span>
                              <span class="token comment"># 将匹配到的第一个 &#39;abc&#39; 替换为 &#39;xyz&#39;。</span>
                              
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">/</span>abc<span class="token operator">/</span>xyz}</span>      <span class="token comment"># xyzABC123ABCxyz</span>
                              <span class="token comment"># 将匹配到的所有 &#39;abc&#39; 替换为 &#39;xyz&#39;。</span>
                              
<span class="token builtin class-name">echo</span>  ---------------
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span>               <span class="token comment"># abcABC123ABCabc</span>
<span class="token builtin class-name">echo</span>  ---------------
                              <span class="token comment"># 字符串本身并不会被修改！</span>
                              
<span class="token comment"># 匹配以及替换的字符串可以是参数么？</span>
<span class="token assign-left variable">match</span><span class="token operator">=</span>abc
<span class="token assign-left variable">repl</span><span class="token operator">=</span>000
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span>$match<span class="token operator">/</span>$repl}</span>  <span class="token comment"># 000ABC123ABCabc</span>
<span class="token comment">#              ^      ^         ^^^</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">/</span>$match<span class="token operator">/</span>$repl}</span> <span class="token comment"># 000ABC123ABC000</span>
<span class="token comment"># Yes!          ^      ^        ^^^         ^^^</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 如果没有给定 $replacement 字符串会怎样？</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span>abc}</span>           <span class="token comment"># ABC123ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">/</span>abc}</span>          <span class="token comment"># ABC123ABC</span>
<span class="token comment"># 仅仅是将其删除而已。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string-substring-replacement-2" tabindex="-1"><a class="header-anchor" href="#string-substring-replacement-2" aria-hidden="true">#</a> <code>\${string/#substring/replacement}</code></h4><p>替换 <code>$string</code> 中最前端匹配到的 <code>$substring</code> 为 <code>$replacement</code>。</p><h4 id="string-substring-replacement-3" tabindex="-1"><a class="header-anchor" href="#string-substring-replacement-3" aria-hidden="true">#</a> <code>\${string/%substring/replacement}</code></h4><p>替换 <code>$string</code> 中最末端匹配到的 <code>$substring</code> 为 <code>$replacement</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">#</span>abc<span class="token operator">/</span>XYZ}</span>          <span class="token comment"># XYZABC123ABCabc</span>
                                  <span class="token comment"># 将前端的 &#39;abc&#39; 替换为 &#39;XYZ&#39;</span>
                                  
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">%</span>abc<span class="token operator">/</span>XYZ}</span>          <span class="token comment"># abcABC123ABCXYZ</span>
                                  <span class="token comment"># 将末端的 &#39;abc&#39; 替换为 &#39;XYZ&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[^2]: 注意根据使用时上下文的不同，<code>$substring</code> 和 <code>$replacement</code> 可以是文本字符串也可以是变量。可以参考第一个样例。</p>`,14);function F(P,L){const a=t("ExternalLinkIcon");return c(),p("div",null,[r,n("p",null,[s("Bash 支持的字符串操作数量达到了一个惊人的数目。但可惜的是，这些操作工具缺乏一个统一的核心。他们中的一些是"),n("a",d,[s("参数代换"),e(a)]),s("的子集，另外一些则是 UNIX 下 "),n("a",v,[m,e(a)]),s(" 函数的子集。这将会导致语法前后不一致或者功能上出现重叠，更不用说那些可能导致的混乱了。")]),b,n("p",null,[s("其中，"),u,s(" 是一个"),n("a",k,[s("正则表达式"),e(a)]),s("。")]),g,n("p",null,[s("如果参数 "),h,s(' 是 "*" 或者 "@"，那么将会截取自 '),$,s(" 起的"),n("a",f,[s("位置参数"),e(a)]),s("。"),q]),x,n("p",null,[s("在 "),A,s(" 中截取自 "),_,s(" 起的字符串，其中 "),B,s(" 是"),n("a",C,[s("正则表达式"),e(a)]),s("。")]),E,n("p",null,[s("下面是使用字符串截取结构对 "),n("a",Z,[y,e(a)]),s(" 的一个简单模拟。")]),w])}const O=l(o,[["render",F],["__file","10_1_manipulating_strings.html.vue"]]);export{O as default};
