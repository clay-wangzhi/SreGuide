import{_ as l,r as t,c as r,a as s,b as e,F as c,d as n,e as p,o}from"./app.37ca1d6f.js";const i={},b=s("h1",{id:"_10-1-\u5B57\u7B26\u4E32\u5904\u7406",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_10-1-\u5B57\u7B26\u4E32\u5904\u7406","aria-hidden":"true"},"#"),n(" 10.1 \u5B57\u7B26\u4E32\u5904\u7406")],-1),m=n("Bash \u652F\u6301\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C\u6570\u91CF\u8FBE\u5230\u4E86\u4E00\u4E2A\u60CA\u4EBA\u7684\u6570\u76EE\u3002\u4F46\u53EF\u60DC\u7684\u662F\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u5DE5\u5177\u7F3A\u4E4F\u4E00\u4E2A\u7EDF\u4E00\u7684\u6838\u5FC3\u3002\u4ED6\u4EEC\u4E2D\u7684\u4E00\u4E9B\u662F"),u={href:"http://tldp.org/LDP/abs/html/parameter-substitution.html#PARAMSUBREF",target:"_blank",rel:"noopener noreferrer"},k=n("\u53C2\u6570\u4EE3\u6362"),d=n("\u7684\u5B50\u96C6\uFF0C\u53E6\u5916\u4E00\u4E9B\u5219\u662F UNIX \u4E0B "),g={href:"http://tldp.org/LDP/abs/html/moreadv.html#EXPRREF",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"expr",-1),v=n(" \u51FD\u6570\u7684\u5B50\u96C6\u3002\u8FD9\u5C06\u4F1A\u5BFC\u81F4\u8BED\u6CD5\u524D\u540E\u4E0D\u4E00\u81F4\u6216\u8005\u529F\u80FD\u4E0A\u51FA\u73B0\u91CD\u53E0\uFF0C\u66F4\u4E0D\u7528\u8BF4\u90A3\u4E9B\u53EF\u80FD\u5BFC\u81F4\u7684\u6DF7\u4E71\u4E86\u3002"),$=p(`<h3 id="\u5B57\u7B26\u4E32\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u957F\u5EA6" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u957F\u5EA6</h3><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> <code>\${#string}</code></h4><h4 id="expr-length-string" tabindex="-1"><a class="header-anchor" href="#expr-length-string" aria-hidden="true">#</a> <code>expr length $string</code></h4><p>\u4E0A\u9762\u4E24\u4E2A\u8868\u8FBE\u5F0F\u7B49\u4EF7\u4E8EC\u8BED\u8A00\u4E2D\u7684 <code>strlen()</code> \u51FD\u6570\u3002</p><h4 id="expr-string" tabindex="-1"><a class="header-anchor" href="#expr-string" aria-hidden="true">#</a> <code>expr &quot;$string&quot; : &#39;.*&#39;</code></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc

<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>stringZ}</span>                 <span class="token comment"># 15</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> length $stringz<span class="token variable">\`</span></span>      <span class="token comment"># 15</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;.*&#39;</span><span class="token variable">\`</span></span>    <span class="token comment"># 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6837\u4F8B 10-1. \u5728\u6587\u672C\u7684\u6BB5\u843D\u4E4B\u95F4\u63D2\u5165\u7A7A\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># paragraph-space.sh</span>
<span class="token comment"># \u7248\u672C 2.1\uFF0C\u53D1\u5E03\u65E5\u671F 2012\u5E747\u670829\u65E5</span>

<span class="token comment"># \u5728\u65E0\u7A7A\u884C\u7684\u6587\u672C\u6587\u4EF6\u7684\u6BB5\u843D\u4E4B\u95F4\u63D2\u5165\u7A7A\u884C\u3002</span>
<span class="token comment"># \u50CF\u8FD9\u6837\u4F7F\u7528: $0 &lt;FILENAME</span>

<span class="token assign-left variable">MINLEN</span><span class="token operator">=</span><span class="token number">60</span>        <span class="token comment"># \u53EF\u4EE5\u8BD5\u8BD5\u4FEE\u6539\u8FD9\u4E2A\u503C\u3002\u5B83\u7528\u6765\u505A\u5224\u65AD\u3002</span>
<span class="token comment">#  \u5047\u8BBE\u4E00\u884C\u7684\u5B57\u7B26\u6570\u5C0F\u4E8E $MINLEN\uFF0C\u5E76\u4E14\u4EE5\u53E5\u70B9\u7ED3\u675F\u6BB5\u843D\u3002</span>
<span class="token comment">#+ \u7ED3\u5C3E\u90E8\u5206\u6709\u7EC3\u4E60\uFF01</span>

<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line  <span class="token comment"># \u5F53\u6587\u4EF6\u6709\u8BB8\u591A\u884C\u7684\u65F6\u5019</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span>   <span class="token comment"># \u8F93\u51FA\u884C\u672C\u8EAB\u3002</span>
  
  <span class="token assign-left variable">len</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>line}</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$len</span>&quot;</span> -lt <span class="token string">&quot;<span class="token variable">$MINLEN</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span> <span class="token operator">=~</span> <span class="token punctuation">[</span>*<span class="token punctuation">{</span><span class="token punctuation">\\</span>.<span class="token punctuation">}</span><span class="token punctuation">]</span>$ <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment"># if [[ &quot;$len&quot; -lt &quot;$MINLEN&quot; &amp;&amp; &quot;$line&quot; =~ \\[*\\.\\] ]]</span>
<span class="token comment"># \u65B0\u7248Bash\u5C06\u4E0D\u80FD\u6B63\u5E38\u8FD0\u884C\u524D\u4E00\u4E2A\u7248\u672C\u7684\u811A\u672C\u3002Ouch\uFF01</span>
<span class="token comment"># \u611F\u8C22 Halim Srama \u6307\u51FA\u8FD9\u70B9\uFF0C\u5E76\u4E14\u7ED9\u51FA\u4E86\u4FEE\u6B63\u7248\u672C\u3002</span>
    <span class="token keyword">then</span> <span class="token builtin class-name">echo</span>    <span class="token comment">#  \u5728\u8BE5\u884C\u4EE5\u53E5\u70B9\u7ED3\u675F\u65F6\uFF0C</span>
  <span class="token keyword">fi</span>             <span class="token comment">#+ \u589E\u52A0\u4E00\u884C\u7A7A\u884C\u3002</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span>

<span class="token comment"># \u7EC3\u4E60\uFF1A</span>
<span class="token comment"># -----</span>
<span class="token comment">#  1) \u8BE5\u811A\u672C\u901A\u5E38\u4F1A\u5728\u6587\u4EF6\u7684\u6700\u540E\u63D2\u5165\u4E00\u4E2A\u7A7A\u884C\u3002</span>
<span class="token comment">#+    \u5C1D\u8BD5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</span>
<span class="token comment">#  2) \u5728\u7B2C17\u884C\u4EC5\u4EC5\u8003\u8651\u5230\u4E86\u4EE5\u53E5\u70B9\u4F5C\u4E3A\u53E5\u5B50\u7EC8\u6B62\u7684\u60C5\u51B5\u3002</span>
<span class="token comment">#+    \u4FEE\u6539\u4EE5\u6EE1\u8DB3\u5176\u4ED6\u7684\u7EC8\u6B62\u7B26\uFF0C\u4F8B\u5982 ?, ! \u548C &quot;\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="\u8D77\u59CB\u90E8\u5206\u5B57\u7B26\u4E32\u5339\u914D\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u8D77\u59CB\u90E8\u5206\u5B57\u7B26\u4E32\u5339\u914D\u957F\u5EA6" aria-hidden="true">#</a> \u8D77\u59CB\u90E8\u5206\u5B57\u7B26\u4E32\u5339\u914D\u957F\u5EA6</h3><h4 id="expr-match-string-substring" tabindex="-1"><a class="header-anchor" href="#expr-match-string-substring" aria-hidden="true">#</a> <code>expr match &quot;$string&quot; &#39;$substring&#39;</code></h4>`,10),f=n("\u5176\u4E2D\uFF0C"),q=s("code",null,"$substring",-1),x=n(" \u662F\u4E00\u4E2A"),_={href:"http://tldp.org/LDP/abs/html/regexp.html#REGEXREF",target:"_blank",rel:"noopener noreferrer"},A=n("\u6B63\u5219\u8868\u8FBE\u5F0F"),C=n("\u3002"),B=p(`<h4 id="expr-string-substring" tabindex="-1"><a class="header-anchor" href="#expr-string-substring" aria-hidden="true">#</a> <code>expr &quot;$string&quot; : &#39;$substring&#39;</code></h4><p>\u5176\u4E2D\uFF0C<code>$substring</code> \u662F\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       |------|</span>
<span class="token comment">#       12345678</span>

<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> match <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token string">&#39;abc[A-Z]*.2&#39;</span><span class="token variable">\`</span></span>   <span class="token comment"># 8</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;abc[A-Z]*.2&#39;</span><span class="token variable">\`</span></span>       <span class="token comment"># 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15" aria-hidden="true">#</a> \u7D22\u5F15</h3><h4 id="expr-index-string-substring" tabindex="-1"><a class="header-anchor" href="#expr-index-string-substring" aria-hidden="true">#</a> <code>expr index $string $substring</code></h4><p>\u8FD4\u56DE\u5728 <code>$string</code> \u4E2D\u7B2C\u4E00\u4E2A\u51FA\u73B0\u7684 <code>$substring</code> \u5B57\u7B26\u6240\u5728\u7684\u4F4D\u7F6E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       123456 ...</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> C12<span class="token variable">\`</span></span>             <span class="token comment"># 6</span>
                                             <span class="token comment"># C \u7684\u4F4D\u7F6E\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> 1c<span class="token variable">\`</span></span>              <span class="token comment"># 3</span>
<span class="token comment"># &#39;c&#39; (\u7B2C\u4E09\u53F7\u4F4D) \u8F83 &#39;1&#39; \u51FA\u73B0\u7684\u66F4\u65E9\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u51E0\u4E4E\u7B49\u4EF7\u4E8EC\u8BED\u8A00\u4E2D\u7684 <code>strchr()</code>\u3002</p><h3 id="\u622A\u53D6\u5B57\u7B26\u4E32-\u5B57\u7B26\u4E32\u5206\u7247" tabindex="-1"><a class="header-anchor" href="#\u622A\u53D6\u5B57\u7B26\u4E32-\u5B57\u7B26\u4E32\u5206\u7247" aria-hidden="true">#</a> \u622A\u53D6\u5B57\u7B26\u4E32\uFF08\u5B57\u7B26\u4E32\u5206\u7247\uFF09</h3><h4 id="string-position" tabindex="-1"><a class="header-anchor" href="#string-position" aria-hidden="true">#</a> <code>\${string:position}</code></h4><p>\u5728 <code>$string</code> \u4E2D\u622A\u53D6\u81EA <code>$position</code> \u8D77\u7684\u5B57\u7B26\u4E32\u3002</p>`,11),Z=n("\u5982\u679C\u53C2\u6570 "),y=s("code",null,"$string",-1),w=n(' \u662F "*" \u6216\u8005 "@"\uFF0C\u90A3\u4E48\u5C06\u4F1A\u622A\u53D6\u81EA '),F=s("code",null,"$position",-1),E=n(" \u8D77\u7684"),P={href:"http://tldp.org/LDP/abs/html/internalvariables.html#POSPARAMREF",target:"_blank",rel:"noopener noreferrer"},L=n("\u4F4D\u7F6E\u53C2\u6570"),I=n("\u3002"),N=s("sup",{class:"footnote-ref"},[s("a",{href:"#footnote1"},"[1]"),s("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),O=p(`<h4 id="string-position-length" tabindex="-1"><a class="header-anchor" href="#string-position-length" aria-hidden="true">#</a> <code>\${string:position:length}</code></h4><p>\u5728 <code>$string</code> \u4E2D\u622A\u53D6\u81EA <code>$position</code> \u8D77\uFF0C\u957F\u5EA6\u4E3A <code>$length</code> \u7684\u5B57\u7B26\u4E32\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       0123456789.....</span>
<span class="token comment">#       \u7D22\u5F15\u4F4D\u7F6E\u4ECE0\u5F00\u59CB\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span>0}</span>                            <span class="token comment"># abcABC123ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span>1}</span>                            <span class="token comment"># bcABC123ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span>7}</span>                            <span class="token comment"># 23ABCabc</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringz<span class="token operator">:</span>7<span class="token operator">:</span>3}</span>                          <span class="token comment"># 23A</span>
                                             <span class="token comment"># \u4E09\u4E2A\u5B57\u7B26\u7684\u5B50\u5B57\u7B26\u4E32\u3002</span>
                                             
                                             

<span class="token comment"># \u4ECE\u53F3\u81F3\u5DE6\u8FDB\u884C\u622A\u53D6\u53EF\u884C\u4E48\uFF1F</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:-</span>4}</span>                           <span class="token comment"># abcABC123ABCabc</span>
<span class="token comment"># \${parameter:-default} \u5C06\u4F1A\u5F97\u5230\u6574\u4E2A\u5B57\u7B26\u4E32\u3002</span>
<span class="token comment"># \u4F46\u662F\u2026\u2026</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span>(-4)}</span>                         <span class="token comment"># Cabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">:</span> -4}</span>                          <span class="token comment"># Cabc</span>
<span class="token comment"># \u73B0\u5728\u53EF\u4EE5\u4E86\u3002</span>
<span class="token comment"># \u62EC\u53F7\u6216\u8005\u589E\u52A0\u7A7A\u683C\u90FD\u53EF\u4EE5&quot;\u8F6C\u4E49&quot;\u4F4D\u7F6E\u53C2\u6570\u3002</span>

<span class="token comment"># \u611F\u8C22 Dan Jacobson \u6307\u51FA\u8FD9\u4E9B\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u5176\u4E2D\uFF0C\u53C2\u6570 <code>position</code> \u4E0E <code>length</code> \u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u53D8\u91CF\u800C\u4E0D\u4E00\u5B9A\u9700\u8981\u4F20\u5165\u5E38\u91CF\u3002</p><p>\u6837\u4F8B 10-2. \u4EA7\u751F\u4E00\u4E2A8\u4E2A\u5B57\u7B26\u7684\u968F\u673A\u5B57\u7B26\u4E32</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># rand-string.sh</span>
<span class="token comment"># \u4EA7\u751F\u4E00\u4E2A8\u4E2A\u5B57\u7B26\u7684\u968F\u673A\u5B57\u7B26\u4E32\u3002</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment">#  \u5982\u679C\u5728\u547D\u4EE4\u884C\u4E2D\u5DF2\u7ECF\u4F20\u5165\u4E86\u53C2\u6570\uFF0C</span>
<span class="token keyword">then</span>            <span class="token comment">#+ \u90A3\u4E48\u5C31\u4EE5\u5B83\u4F5C\u4E3A\u8D77\u59CB\u5B57\u7B26\u4E32\u3002</span>
  <span class="token assign-left variable">str0</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
<span class="token keyword">else</span>            <span class="token comment">#  \u5426\u5219\uFF0C\u5C31\u5C06\u811A\u672C\u7684\u8FDB\u7A0B\u6807\u8BC6\u7B26PID\u4F5C\u4E3A\u8D77\u59CB\u5B57\u7B26\u4E32\u3002</span>
  <span class="token assign-left variable">str0</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$$</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">POS</span><span class="token operator">=</span><span class="token number">2</span>  <span class="token comment"># \u4ECE\u5B57\u7B26\u4E32\u7684\u7B2C\u4E8C\u4F4D\u5F00\u59CB\u3002</span>
<span class="token assign-left variable">LEN</span><span class="token operator">=</span><span class="token number">8</span>  <span class="token comment"># \u622A\u53D6\u516B\u4E2A\u5B57\u7B26\u3002</span>

<span class="token assign-left variable">str1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$str0</span>&quot;</span> <span class="token operator">|</span> md5sum <span class="token operator">|</span> md5sum <span class="token variable">)</span></span>
<span class="token comment">#                      ^^^^^^   ^^^^^^</span>
<span class="token comment"># \u5C06\u5B57\u7B26\u4E32\u901A\u8FC7\u7BA1\u9053\u8BA1\u7B97\u4E24\u6B21 md5 \u6765\u8FDB\u884C\u4E24\u6B21\u6DF7\u6DC6\u3002</span>

<span class="token assign-left variable">randstring</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${str1<span class="token operator">:</span>$POS<span class="token operator">:</span>$LEN}</span>&quot;</span>
<span class="token comment">#                  ^^^^ ^^^^</span>
<span class="token comment"># \u5141\u8BB8\u4F20\u5165\u53C2\u6570</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$randstring</span>&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment"># bozo$ ./rand-string.sh my-password</span>
<span class="token comment"># 1bdd88c4</span>

<span class="token comment"># \u4E0D\u8FC7\u4E0D\u5EFA\u8BAE\u5C06\u5176\u4F5C\u4E3A\u4E00\u79CD\u80FD\u591F\u62B5\u6297\u9ED1\u5BA2\u7684\u751F\u6210\u5BC6\u7801\u7684\u65B9\u6CD5\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u5982\u679C\u53C2\u6570 <code>$string</code> \u662F &quot;*&quot; \u6216\u8005 &quot;@&quot;\uFF0C\u90A3\u4E48\u5C06\u4F1A\u622A\u53D6\u81EA <code>$position</code> \u8D77\uFF0C\u6700\u5927\u4E2A\u6570\u4E3A <code>$length</code> \u7684\u4F4D\u7F6E\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">\${*<span class="token operator">:</span>2}</span>          <span class="token comment"># \u8F93\u51FA\u7B2C\u4E8C\u4E2A\u53CA\u4E4B\u540E\u7684\u6240\u6709\u4F4D\u7F6E\u53C2\u6570\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${@<span class="token operator">:</span>2}</span>          <span class="token comment"># \u540C\u4E0A\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${*<span class="token operator">:</span>2<span class="token operator">:</span>3}</span>        <span class="token comment"># \u4ECE\u7B2C\u4E8C\u4E2A\u4F4D\u7F6E\u53C2\u6570\u8D77\uFF0C\u8F93\u51FA\u4E09\u4E2A\u4F4D\u7F6E\u53C2\u6570\u3002 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="expr-substr-string-position-length" tabindex="-1"><a class="header-anchor" href="#expr-substr-string-position-length" aria-hidden="true">#</a> <code>expr substr $string $position $length</code></h4><p>\u5728 <code>$string</code> \u4E2D\u622A\u53D6\u81EA <code>$position</code> \u8D77\uFF0C\u957F\u5EA6\u4E3A <code>$length</code> \u7684\u5B57\u7B26\u4E32\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       123456789......</span>
<span class="token comment">#       \u7D22\u5F15\u4F4D\u7F6E\u4ECE1\u5F00\u59CB\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> substr $stringZ <span class="token number">1</span> <span class="token number">2</span><span class="token variable">\`</span></span>              <span class="token comment"># ab</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> substr $stringZ <span class="token number">4</span> <span class="token number">3</span><span class="token variable">\`</span></span>              <span class="token comment"># ABC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="expr-match-string-substring-1" tabindex="-1"><a class="header-anchor" href="#expr-match-string-substring-1" aria-hidden="true">#</a> <code>expr match &quot;$string&quot; &#39;\\($substring\\)&#39;</code></h4>`,12),T=n("\u5728 "),U=s("code",null,"$string",-1),R=n(" \u4E2D\u622A\u53D6\u81EA "),X=s("code",null,"$position",-1),S=n(" \u8D77\u7684\u5B57\u7B26\u4E32\uFF0C\u5176\u4E2D "),M=s("code",null,"$substring",-1),z=n(" \u662F"),D={href:"http://tldp.org/LDP/abs/html/regexp.html#REGEXREF",target:"_blank",rel:"noopener noreferrer"},Y=n("\u6B63\u5219\u8868\u8FBE\u5F0F"),G=n("\u3002"),V=p(`<h4 id="expr-string-substring-1" tabindex="-1"><a class="header-anchor" href="#expr-string-substring-1" aria-hidden="true">#</a> <code>expr &quot;$string&quot; : &#39;\\($substring\\)&#39;</code></h4><p>\u5728 <code>$string</code> \u4E2D\u622A\u53D6\u81EA <code>$position</code> \u8D77\u7684\u5B57\u7B26\u4E32\uFF0C\u5176\u4E2D <code>$substring</code> \u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       =======</span>

<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> match <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token string">&#39;\\(.[b-c]*[A-Z]..[0-9]\\)&#39;</span><span class="token variable">\`</span></span>   <span class="token comment"># abcABC1</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;\\(.[b-c]*[A-Z]..[0-9]\\)&#39;</span><span class="token variable">\`</span></span>       <span class="token comment"># abcABC1</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;\\(.......\\)&#39;</span><span class="token variable">\`</span></span>                   <span class="token comment"># abcABC1</span>
<span class="token comment"># \u4E0A\u9762\u6240\u6709\u7684\u5F62\u5F0F\u90FD\u7ED9\u51FA\u4E86\u76F8\u540C\u7684\u7ED3\u679C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="expr-match-string-substring-2" tabindex="-1"><a class="header-anchor" href="#expr-match-string-substring-2" aria-hidden="true">#</a> <code>expr match &quot;$string&quot; &#39;.*\\($substring\\)&#39;</code></h4><p>\u4ECE <code>$string</code> \u7ED3\u5C3E\u90E8\u5206\u622A\u53D6 <code>$substring</code> \u5B57\u7B26\u4E32\uFF0C\u5176\u4E2D <code>$substring</code> \u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p><h4 id="expr-string-substring-2" tabindex="-1"><a class="header-anchor" href="#expr-string-substring-2" aria-hidden="true">#</a> <code>expr &quot;$string&quot; : &#39;.*\\($substring\\)&#39;</code></h4><p>\u4ECE <code>$string</code> \u7ED3\u5C3E\u90E8\u5206\u622A\u53D6 <code>$substring</code> \u5B57\u7B26\u4E32\uFF0C\u5176\u4E2D <code>$substring</code> \u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#                ======</span>

<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> match <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token string">&#39;.*\\([A-C][A-C][A-C][a-c]*\\)&#39;</span><span class="token variable">\`</span></span>    <span class="token comment"># ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;.*\\(......\\)&#39;</span><span class="token variable">\`</span></span>                       <span class="token comment"># ABCabc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5220\u9664\u5B50\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5B50\u4E32" aria-hidden="true">#</a> \u5220\u9664\u5B50\u4E32</h3><h4 id="string-substring" tabindex="-1"><a class="header-anchor" href="#string-substring" aria-hidden="true">#</a> <code>\${string#substring}</code></h4><p>\u5220\u9664\u4ECE <code>$string</code> \u8D77\u59CB\u90E8\u5206\u8D77\uFF0C\u5339\u914D\u5230\u7684\u6700\u77ED\u7684 <code>$substring</code>\u3002</p><h4 id="string-substring-1" tabindex="-1"><a class="header-anchor" href="#string-substring-1" aria-hidden="true">#</a> <code>\${string##substring}</code></h4><p>\u5220\u9664\u4ECE <code>$string</code> \u8D77\u59CB\u90E8\u5206\u8D77\uFF0C\u5339\u914D\u5230\u7684\u6700\u957F\u7684 <code>$substring</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#       |----|          \u6700\u957F</span>
<span class="token comment">#       |----------|    \u6700\u77ED</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">#</span>a*C}</span>      <span class="token comment"># 123ABCabc</span>
<span class="token comment"># \u5220\u9664 &#39;a&#39; \u4E0E &#39;c&#39; \u4E4B\u95F4\u6700\u77ED\u7684\u5339\u914D\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">##</span>a*C}</span>     <span class="token comment"># abc</span>
<span class="token comment"># \u5220\u9664 &#39;a&#39; \u4E0E &#39;c&#39; \u4E4B\u95F4\u6700\u957F\u7684\u5339\u914D\u3002</span>



<span class="token comment"># \u4F60\u53EF\u4EE5\u4F7F\u7528\u53D8\u91CF\u4EE3\u66FF substring\u3002</span>

<span class="token assign-left variable">X</span><span class="token operator">=</span><span class="token string">&#39;a*C&#39;</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">#</span>$X}</span>      <span class="token comment"># 123ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">##</span>$X}</span>     <span class="token comment"># abc</span>
                        <span class="token comment"># \u540C\u4E0A\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="string-substring-2" tabindex="-1"><a class="header-anchor" href="#string-substring-2" aria-hidden="true">#</a> <code>\${string%substring}</code></h4><p>\u5220\u9664\u4ECE <code>$string</code> \u7ED3\u5C3E\u90E8\u5206\u8D77\uFF0C\u5339\u914D\u5230\u7684\u6700\u77ED\u7684 <code>$substring</code>\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709\u540E\u7F00\u540D\u4E3A &quot;TXT&quot; \u7684\u6587\u4EF6\u6539\u4E3A &quot;txt&quot; \u540E\u7F00\u3002</span>
<span class="token comment"># \u4F8B\u5982 &quot;file1.TXT&quot; \u6539\u4E3A &quot;file1.txt&quot;\u3002</span>

<span class="token assign-left variable">SUFF</span><span class="token operator">=</span>TXT
<span class="token assign-left variable">suff</span><span class="token operator">=</span>txt

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> *.$SUFF<span class="token variable">)</span></span>
<span class="token keyword">do</span>
  <span class="token function">mv</span> -f <span class="token variable">$i</span> <span class="token variable"><span class="token variable">$(</span>i%.$SUFF<span class="token variable">)</span></span><span class="token builtin class-name">.</span><span class="token variable">$suff</span>
  <span class="token comment">#  \u9664\u4E86\u4ECE\u53D8\u91CF $i \u53F3\u4FA7\u5339\u914D\u5230\u7684\u6700\u77ED\u7684\u5B57\u7B26\u4E32\u4E4B\u5916\uFF0C</span>
  <span class="token comment">#+ \u5176\u4ED6\u4E00\u5207\u90FD\u4FDD\u6301\u4E0D\u53D8\u3002</span>
<span class="token keyword">done</span> <span class="token comment">### \u5982\u679C\u9700\u8981\uFF0C\u5FAA\u73AF\u53EF\u4EE5\u538B\u7F29\u6210\u4E00\u884C\u7684\u5F62\u5F0F\u3002</span>

<span class="token comment"># \u611F\u8C22 Rory Winston\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="string-substring-3" tabindex="-1"><a class="header-anchor" href="#string-substring-3" aria-hidden="true">#</a> <code>\${string%%substring}</code></h4><p>\u5220\u9664\u4ECE <code>$string</code> \u7ED3\u5C3E\u90E8\u5206\u8D77\uFF0C\u5339\u914D\u5230\u7684\u6700\u957F\u7684 <code>$substring</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc
<span class="token comment">#                    ||     \u6700\u77ED</span>
<span class="token comment">#        |------------|     \u6700\u957F</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">%</span>b*c}</span>      <span class="token comment"># abcABC123ABCa</span>
<span class="token comment"># \u4ECE\u7ED3\u5C3E\u5904\u5220\u9664 &#39;b&#39; \u4E0E &#39;c&#39; \u4E4B\u95F4\u6700\u77ED\u7684\u5339\u914D\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">%%</span>b*c}</span>     <span class="token comment"># a</span>
<span class="token comment"># \u4ECE\u7ED3\u5C3E\u5904\u5220\u9664 &#39;b&#39; \u4E0E &#39;c&#39; \u4E4B\u95F4\u6700\u957F\u7684\u5339\u914D\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u4E2A\u64CD\u4F5C\u5BF9\u751F\u6210\u6587\u4EF6\u540D\u975E\u5E38\u6709\u5E2E\u52A9\u3002</p><p>\u6837\u4F8B 10-3. \u6539\u53D8\u56FE\u50CF\u6587\u4EF6\u7684\u683C\u5F0F\u53CA\u6587\u4EF6\u540D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#  cvt.sh:</span>
<span class="token comment">#  \u5C06\u76EE\u5F55\u4E0B\u6240\u6709\u7684 MacPaint \u6587\u4EF6\u8F6C\u6362\u4E3A &quot;pbm&quot; \u683C\u5F0F\u3002</span>

<span class="token comment">#  \u4F7F\u7528\u7531 Brian Henderson (bryanh@giraffe-data.com) \u7EF4\u62A4\u7684</span>
<span class="token comment">#+ &quot;netpbm&quot; \u5305\u4E0B\u7684 &quot;macptobpm&quot; \u4E8C\u8FDB\u5236\u5DE5\u5177\u3002</span>
<span class="token comment">#  Netpbm \u662F\u5927\u591A\u6570 Linux \u53D1\u884C\u7248\u7684\u6807\u51C6\u7EC4\u6210\u90E8\u5206\u3002</span>

<span class="token assign-left variable">OPERATION</span><span class="token operator">=</span>macptopbm
<span class="token assign-left variable">SUFFIX</span><span class="token operator">=</span>pbm          <span class="token comment"># \u65B0\u7684\u6587\u4EF6\u540D\u540E\u7F00\u3002</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable">$1</span>      <span class="token comment"># \u5982\u679C\u5DF2\u7ECF\u901A\u8FC7\u811A\u672C\u53C2\u6570\u4F20\u5165\u4E86\u76EE\u5F55\u540D\u7684\u60C5\u51B5\u2026\u2026</span>
<span class="token keyword">else</span>
  <span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token environment constant">$PWD</span>    <span class="token comment"># \u5426\u5219\u5C31\u4F7F\u7528\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</span>
<span class="token keyword">fi</span>

<span class="token comment">#  \u5047\u8BBE\u76EE\u6807\u76EE\u5F55\u4E0B\u7684\u6240\u6709 MacPaint \u56FE\u50CF\u6587\u4EF6\u90FD\u62E5\u6709</span>
<span class="token comment">#+ &quot;.mac&quot; \u7684\u6587\u4EF6\u540E\u7F00\u540D\u3002</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$directory</span>/*    <span class="token comment"># \u6587\u4EF6\u540D\u5339\u914D\u3002</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable">\${file<span class="token operator">%</span>.*c}</span>      <span class="token comment">#  \u4ECE\u6587\u4EF6\u540D\u4E2D\u5220\u9664 &quot;.mac&quot; \u540E\u7F00</span>
                            <span class="token comment">#+ (&#39;.*c&#39; \u5339\u914D &#39;.&#39; \u4E0E &#39;c&#39; \u4E4B\u95F4\u7684</span>
                            <span class="token comment">#  \u6240\u6709\u5B57\u7B26\uFF0C\u5305\u62EC\u5176\u672C\u8EAB)\u3002</span>
  <span class="token variable">$OPERATION</span> <span class="token variable">$file</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$filename</span>.<span class="token variable">$SUFFIX</span>&quot;</span>
                            <span class="token comment"># \u5C06\u8F6C\u6362\u7ED3\u679C\u91CD\u5B9A\u5411\u5230\u65B0\u7684\u6587\u4EF6\u3002</span>
  <span class="token function">rm</span> -f <span class="token variable">$file</span>               <span class="token comment"># \u5728\u8F6C\u6362\u540E\u5220\u9664\u539F\u6587\u4EF6\u3002</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$filename</span>.<span class="token variable">$SUFFIX</span>&quot;</span>  <span class="token comment"># \u5C06\u8BB0\u5F55\u8F93\u51FA\u5230 stdout \u4E2D\u3002</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># \u7EC3\u4E60\uFF1A</span>
<span class="token comment"># -----</span>
<span class="token comment"># \u8FD9\u4E2A\u811A\u672C\u4F1A\u5C06\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u8FDB\u884C\u8F6C\u6362\u3002</span>
<span class="token comment"># \u4FEE\u6539\u811A\u672C\uFF0C\u4F7F\u5F97\u5B83\u4EC5\u8F6C\u6362 &quot;.mac&quot; \u540E\u7F00\u7684\u6587\u4EF6\u3002</span>



<span class="token comment"># *** \u8FD8\u53EF\u4EE5\u4F7F\u7528\u53E6\u5916\u4E00\u79CD\u65B9\u6CD5\u3002 *** #</span>

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># \u5C06\u56FE\u50CF\u6279\u5904\u7406\u8F6C\u6362\u6210\u4E0D\u540C\u7684\u683C\u5F0F\u3002</span>
<span class="token comment"># \u5047\u8BBE\u5DF2\u7ECF\u5B89\u88C5\u4E86 imagemagick\u3002\uFF08\u5728\u5927\u90E8\u5206 Linux \u53D1\u884C\u7248\u4E2D\u90FD\u6709\uFF09</span>

<span class="token assign-left variable">INFMT</span><span class="token operator">=</span>png   <span class="token comment"># \u53EF\u4EE5\u662F tif, jpg, gif \u7B49\u7B49\u3002</span>
<span class="token assign-left variable">OUTFMT</span><span class="token operator">=</span>pdf  <span class="token comment"># \u53EF\u4EE5\u662F tif, jpg, gif, pdf \u7B49\u7B49\u3002</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">pic</span> <span class="token keyword">in</span> *<span class="token string">&quot;<span class="token variable">$INFMT</span>&quot;</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">p2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token string">&quot;<span class="token variable">$pic</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> -e s/<span class="token punctuation">\\</span>.$INFMT//<span class="token variable">)</span></span>
  <span class="token comment"># echo $p2</span>
  convert <span class="token string">&quot;<span class="token variable">$pic</span>&quot;</span> <span class="token variable">$p2</span><span class="token builtin class-name">.</span><span class="token variable">$OUTFMT</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>\u6837\u4F8B 10-4. \u5C06\u6D41\u97F3\u9891\u683C\u5F0F\u8F6C\u6362\u6210 ogg \u683C\u5F0F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># ra2ogg.sh: \u5C06\u6D41\u97F3\u9891\u6587\u4EF6 (*.ra) \u8F6C\u6362\u6210 ogg \u683C\u5F0F\u3002</span>

<span class="token comment"># \u4F7F\u7528 &quot;mplayer&quot; \u5A92\u4F53\u64AD\u653E\u5668\u7A0B\u5E8F\uFF1A</span>
<span class="token comment">#      http://www.mplayerhq.hu/homepage</span>
<span class="token comment"># \u4F7F\u7528 &quot;ogg&quot; \u5E93\u4E0E &quot;oggenc&quot;\uFF1A</span>
<span class="token comment">#      http://www.xiph.org/</span>
<span class="token comment">#</span>
<span class="token comment"># \u811A\u672C\u540C\u65F6\u9700\u8981\u5B89\u88C5\u4E00\u4E9B\u89E3\u7801\u5668\uFF0C\u4F8B\u5982 sipr.so \u7B49\u7B49\u4E00\u4E9B\u3002</span>
<span class="token comment"># \u8FD9\u4E9B\u89E3\u7801\u5668\u53EF\u4EE5\u5728 compat-libstdc++ \u5305\u4E2D\u627E\u5230\u3002</span>


<span class="token assign-left variable">OFILEPREF</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">%%</span>ra}</span>      <span class="token comment"># \u5220\u9664 &quot;ra&quot; \u540E\u7F00\u3002</span>
<span class="token assign-left variable">OFILESUFF</span><span class="token operator">=</span>wav           <span class="token comment"># wav \u6587\u4EF6\u540E\u7F00\u3002</span>
<span class="token assign-left variable">OUTFILE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$OFILEPREF</span>&quot;</span>&quot;<span class="token variable">$OFILESUFF</span><span class="token string">&quot;
E_NOARGS=85

if [ -z &quot;</span><span class="token variable">$1</span><span class="token string">&quot; ]          # \u5FC5\u987B\u6307\u5B9A\u4E00\u4E2A\u6587\u4EF6\u8FDB\u884C\u8F6C\u6362\u3002
then
  echo &quot;</span>Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token string">&quot;
  exit <span class="token variable">$E_NOAGRS</span>
fi


######################################################
mplayer &quot;</span><span class="token variable">$1</span><span class="token string">&quot; -ao pcm:file=<span class="token variable">$OUTFILE</span>
oggenc &quot;</span><span class="token variable">$OUTFILE</span><span class="token string">&quot;  # \u7531 oggenc \u81EA\u52A8\u52A0\u4E0A\u6B63\u786E\u7684\u6587\u4EF6\u540E\u7F00\u540D\u3002
######################################################

rm &quot;</span><span class="token variable">$OUTFILE</span><span class="token string">&quot;      # \u7ACB\u5373\u5220\u9664 *.wav \u6587\u4EF6\u3002
                   # \u5982\u679C\u4F60\u4ECD\u9700\u4FDD\u7559\u539F\u6587\u4EF6\uFF0C\u6CE8\u91CA\u6389\u4E0A\u9762\u8FD9\u4E00\u884C\u5373\u53EF\u3002
                   
exit <span class="token variable">$?</span>

#  \u6CE8\u610F\uFF1A
#  -----
#  \u5728\u7F51\u7AD9\u4E0A\uFF0C\u70B9\u51FB\u4E00\u4E2A *.ram \u7684\u6D41\u5A92\u4F53\u97F3\u9891\u6587\u4EF6
#+ \u901A\u5E38\u53EA\u4F1A\u4E0B\u8F7D\u5230 *.ra \u97F3\u9891\u6587\u4EF6\u7684 URL\u3002
#  \u4F60\u53EF\u4EE5\u4F7F\u7528 &quot;</span><span class="token function">wget</span><span class="token string">&quot; \u6216\u8005\u7C7B\u4F3C\u7684\u5DE5\u5177\u4E0B\u8F7D *.ra \u6587\u4EF6\u672C\u8EAB\u3002


#  \u7EC3\u4E60\uFF1A
#  -----
#  \u8FD9\u4E2A\u811A\u672C\u4EC5\u4EC5\u8F6C\u6362 *.ra \u6587\u4EF6\u3002
#  \u4FEE\u6539\u811A\u672C\u589E\u52A0\u9002\u5E94\u6027\uFF0C\u4F7F\u5176\u53EF\u4EE5\u8F6C\u6362 *.ram \u6216\u5176\u4ED6\u6587\u4EF6\u683C\u5F0F\u3002
#
#  \u5982\u679C\u4F60\u975E\u5E38\u6709\u70ED\u60C5\uFF0C\u4F60\u53EF\u4EE5\u6269\u5C55\u8FD9\u4E2A\u811A\u672C\u4F7F\u5176
#+ \u53EF\u4EE5\u81EA\u52A8\u4E0B\u8F7D\u5E76\u4E14\u8F6C\u6362\u6D41\u5A92\u4F53\u97F3\u9891\u6587\u4EF6\u3002
#  \u7ED9\u5B9A\u4E00\u4E2A URL\uFF0C\u81EA\u52A8\u4E0B\u8F7D\u6D41\u5A92\u4F53\u97F3\u9891\u6587\u4EF6 (\u4F7F\u7528 &quot;</span>wget&quot;<span class="token punctuation">)</span>\uFF0C
<span class="token comment">#+ \u7136\u540E\u8F6C\u6362\u5B83\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,26),j=n("\u4E0B\u9762\u662F\u4F7F\u7528\u5B57\u7B26\u4E32\u622A\u53D6\u7ED3\u6784\u5BF9 "),H={href:"http://tldp.org/LDP/abs/html/extmisc.html#GETOPTY",target:"_blank",rel:"noopener noreferrer"},W=s("code",null,"getopt",-1),J=n(" \u7684\u4E00\u4E2A\u7B80\u5355\u6A21\u62DF\u3002"),K=p(`<p>\u6837\u4F8B 10-5. \u6A21\u62DF <code>getopt</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># getopt-simple.sh</span>
<span class="token comment"># \u4F5C\u8005: Chris Morgan</span>
<span class="token comment"># \u5141\u8BB8\u5728\u9AD8\u7EA7\u811A\u672C\u7F16\u7A0B\u6307\u5357\u4E2D\u4F7F\u7528\u3002</span>


<span class="token function-name function">getopt_simple</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;getopt_simple()&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameters are &#39;<span class="token variable">$*</span>&#39;&quot;</span>
    <span class="token keyword">until</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
    <span class="token keyword">do</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Processing parameter of: &#39;<span class="token variable">$1</span>&#39;&quot;</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${1<span class="token operator">:</span>0<span class="token operator">:</span>1}</span> <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">]</span>
      <span class="token keyword">then</span>
          <span class="token assign-left variable">tmp</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">:</span>1}</span>               <span class="token comment"># \u5220\u9664\u5F00\u5934\u7684 &#39;/&#39;</span>
          <span class="token assign-left variable">parameter</span><span class="token operator">=</span><span class="token variable">\${tmp<span class="token operator">%%</span>=*}</span>     <span class="token comment"># \u53D6\u51FA\u540D\u79F0\u3002</span>
          <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable">\${tmp<span class="token operator">##</span>*=}</span>         <span class="token comment"># \u53D6\u51FA\u503C\u3002</span>
          <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter: &#39;<span class="token variable">$parameter</span>&#39;, value: &#39;<span class="token variable">$value</span>&#39;&quot;</span>
          <span class="token builtin class-name">eval</span> <span class="token variable">$parameter</span><span class="token operator">=</span><span class="token variable">$value</span>
      <span class="token keyword">fi</span>
      <span class="token builtin class-name">shift</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u5C06\u6240\u6709\u53C2\u6570\u4F20\u9012\u7ED9 getopt_simple()\u3002</span>
getopt_simple <span class="token variable">$*</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;test is &#39;<span class="token variable">$test</span>&#39;&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;test2 is &#39;<span class="token variable">$test2</span>&#39;&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>  <span class="token comment"># \u53EF\u4EE5\u67E5\u770B\u8BE5\u811A\u672C\u7684\u4FEE\u6539\u7248 UseGetOpt.sh\u3002</span>

---

<span class="token function">sh</span> getopt_example.sh /test<span class="token operator">=</span>value1 /test2<span class="token operator">=</span>value2

Parameters are <span class="token string">&#39;/test=value1 /test2=value2&#39;</span>
Processing parameter of: <span class="token string">&#39;/test=value1&#39;</span>
Parameter: <span class="token string">&#39;test&#39;</span>, value: <span class="token string">&#39;value1&#39;</span>
Processing parameter of: <span class="token string">&#39;/test2=value2&#39;</span>
Parameter: <span class="token string">&#39;test2&#39;</span>, value: <span class="token string">&#39;value2&#39;</span>
<span class="token builtin class-name">test</span> is <span class="token string">&#39;value1&#39;</span>
test2 is <span class="token string">&#39;value2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="\u5B50\u4E32\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u5B50\u4E32\u66FF\u6362" aria-hidden="true">#</a> \u5B50\u4E32\u66FF\u6362</h3><h4 id="string-substring-replacement" tabindex="-1"><a class="header-anchor" href="#string-substring-replacement" aria-hidden="true">#</a> <code>\${string/substring/replacement}</code></h4><p>\u66FF\u6362\u5339\u914D\u5230\u7684\u7B2C\u4E00\u4E2A <code>$substring</code> \u4E3A <code>$replacement</code>\u3002<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><h4 id="string-substring-replacement-1" tabindex="-1"><a class="header-anchor" href="#string-substring-replacement-1" aria-hidden="true">#</a> <code>\${string//substring/replacement}</code></h4><p>\u66FF\u6362\u5339\u914D\u5230\u7684\u6240\u6709 <code>$substring</code> \u4E3A <code>$replacement</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span>abc<span class="token operator">/</span>xyz}</span>       <span class="token comment"># xyzABC123ABCabc</span>
                              <span class="token comment"># \u5C06\u5339\u914D\u5230\u7684\u7B2C\u4E00\u4E2A &#39;abc&#39; \u66FF\u6362\u4E3A &#39;xyz&#39;\u3002</span>
                              
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">/</span>abc<span class="token operator">/</span>xyz}</span>      <span class="token comment"># xyzABC123ABCxyz</span>
                              <span class="token comment"># \u5C06\u5339\u914D\u5230\u7684\u6240\u6709 &#39;abc&#39; \u66FF\u6362\u4E3A &#39;xyz&#39;\u3002</span>
                              
<span class="token builtin class-name">echo</span>  ---------------
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$stringZ</span>&quot;</span>               <span class="token comment"># abcABC123ABCabc</span>
<span class="token builtin class-name">echo</span>  ---------------
                              <span class="token comment"># \u5B57\u7B26\u4E32\u672C\u8EAB\u5E76\u4E0D\u4F1A\u88AB\u4FEE\u6539\uFF01</span>
                              
<span class="token comment"># \u5339\u914D\u4EE5\u53CA\u66FF\u6362\u7684\u5B57\u7B26\u4E32\u53EF\u4EE5\u662F\u53C2\u6570\u4E48\uFF1F</span>
<span class="token assign-left variable">match</span><span class="token operator">=</span>abc
<span class="token assign-left variable">repl</span><span class="token operator">=</span>000
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span>$match<span class="token operator">/</span>$repl}</span>  <span class="token comment"># 000ABC123ABCabc</span>
<span class="token comment">#              ^      ^         ^^^</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">/</span>$match<span class="token operator">/</span>$repl}</span> <span class="token comment"># 000ABC123ABC000</span>
<span class="token comment"># Yes!          ^      ^        ^^^         ^^^</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># \u5982\u679C\u6CA1\u6709\u7ED9\u5B9A $replacement \u5B57\u7B26\u4E32\u4F1A\u600E\u6837\uFF1F</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span>abc}</span>           <span class="token comment"># ABC123ABCabc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">/</span>abc}</span>          <span class="token comment"># ABC123ABC</span>
<span class="token comment"># \u4EC5\u4EC5\u662F\u5C06\u5176\u5220\u9664\u800C\u5DF2\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="string-substring-replacement-2" tabindex="-1"><a class="header-anchor" href="#string-substring-replacement-2" aria-hidden="true">#</a> <code>\${string/#substring/replacement}</code></h4><p>\u66FF\u6362 <code>$string</code> \u4E2D\u6700\u524D\u7AEF\u5339\u914D\u5230\u7684 <code>$substring</code> \u4E3A <code>$replacement</code>\u3002</p><h4 id="string-substring-replacement-3" tabindex="-1"><a class="header-anchor" href="#string-substring-replacement-3" aria-hidden="true">#</a> <code>\${string/%substring/replacement}</code></h4><p>\u66FF\u6362 <code>$string</code> \u4E2D\u6700\u672B\u7AEF\u5339\u914D\u5230\u7684 <code>$substring</code> \u4E3A <code>$replacement</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">stringZ</span><span class="token operator">=</span>abcABC123ABCabc

<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">#</span>abc<span class="token operator">/</span>XYZ}</span>          <span class="token comment"># XYZABC123ABCabc</span>
                                  <span class="token comment"># \u5C06\u524D\u7AEF\u7684 &#39;abc&#39; \u66FF\u6362\u4E3A &#39;XYZ&#39;</span>
                                  
<span class="token builtin class-name">echo</span> <span class="token variable">\${stringZ<span class="token operator">/</span><span class="token operator">%</span>abc<span class="token operator">/</span>XYZ}</span>          <span class="token comment"># abcABC123ABCXYZ</span>
                                  <span class="token comment"># \u5C06\u672B\u7AEF\u7684 &#39;abc&#39; \u66FF\u6362\u4E3A &#39;XYZ&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>\u8FD9\u79CD\u60C5\u51B5\u540C\u65F6\u9002\u7528\u4E8E\u547D\u4EE4\u884C\u53C2\u6570\u548C\u4F20\u5165\u51FD\u6570\u7684\u53C2\u6570\u3002 <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="footnote2" class="footnote-item"><p>\u6CE8\u610F\u6839\u636E\u4F7F\u7528\u65F6\u4E0A\u4E0B\u6587\u7684\u4E0D\u540C\uFF0C<code>$substring</code> \u548C <code>$replacement</code> \u53EF\u4EE5\u662F\u6587\u672C\u5B57\u7B26\u4E32\u4E5F\u53EF\u4EE5\u662F\u53D8\u91CF\u3002\u53EF\u4EE5\u53C2\u8003\u7B2C\u4E00\u4E2A\u6837\u4F8B\u3002 <a href="#footnote-ref2" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,15);function Q(ss,ns){const a=t("ExternalLinkIcon");return o(),r(c,null,[b,s("p",null,[m,s("a",u,[k,e(a)]),d,s("a",g,[h,e(a)]),v]),$,s("p",null,[f,q,x,s("a",_,[A,e(a)]),C]),B,s("p",null,[Z,y,w,F,E,s("a",P,[L,e(a)]),I,N]),O,s("p",null,[T,U,R,X,S,M,z,s("a",D,[Y,e(a)]),G]),V,s("p",null,[j,s("a",H,[W,e(a)]),J]),K],64)}var es=l(i,[["render",Q],["__file","10_1_manipulating_strings.html.vue"]]);export{es as default};
