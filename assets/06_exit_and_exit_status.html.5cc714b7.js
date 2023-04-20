import{_ as l,r as p,c as o,a as n,b as e,F as c,e as t,d as s,o as r}from"./app.37ca1d6f.js";const i={},b=t(`<h1 id="\u7B2C\u516D\u7AE0-\u9000\u51FA\u4E0E\u9000\u51FA\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u516D\u7AE0-\u9000\u51FA\u4E0E\u9000\u51FA\u72B6\u6001" aria-hidden="true">#</a> \u7B2C\u516D\u7AE0 \u9000\u51FA\u4E0E\u9000\u51FA\u72B6\u6001</h1><blockquote><p>Bourne shell\u91CC\u5B58\u5728\u4E0D\u660E\u786E\u4E4B\u5904\uFF0C\u4F46\u4EBA\u4EEC\u4E5F\u4F1A\u4F7F\u7528\u5B83\u4EEC\u3002</p><p>\u2014\u2014 Chat Ramey</p></blockquote><p>\u8DDFC\u7A0B\u5E8F\u7C7B\u4F3C\uFF0C<code>exit</code> \u547D\u4EE4\u88AB\u7528\u6765\u7ED3\u675F\u811A\u672C\u3002\u540C\u65F6\uFF0C\u5B83\u4E5F\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u8FD4\u56DE\u503C\u53EF\u4EE5\u88AB\u4EA4\u7ED9\u7236\u8FDB\u7A0B\u3002</p><p>\u6BCF\u4E2A\u547D\u4EE4\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u9000\u51FA\u72B6\u6001\uFF08exit status\uFF09\uFF0C\u6709\u65F6\u4E5F\u53EB\u505A\u8FD4\u56DE\u72B6\u6001\uFF08return status\uFF09\u6216\u9000\u51FA\u7801\uFF08exit code\uFF09\u3002\u547D\u4EE4\u6267\u884C\u6210\u529F\u8FD4\u56DE0\uFF0C\u5982\u679C\u8FD4\u56DE\u4E00\u4E2A\u975E0\u503C\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u4F1A\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2A\u9519\u8BEF\u4EE3\u7801\u3002\u4E00\u4E2A\u8FD0\u884C\u72B6\u6001\u826F\u597D\u7684UNIX\u547D\u4EE4\u3001\u7A0B\u5E8F\u548C\u5DE5\u5177\u5728\u6B63\u5E38\u6267\u884C\u9000\u51FA\u540E\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A0\u7684\u9000\u51FA\u7801\uFF0C\u5F53\u7136\u4E5F\u6709\u4F8B\u5916\u3002</p><p>\u540C\u6837\u5730\uFF0C\u811A\u672C\u4E2D\u7684\u51FD\u6570\u548C\u811A\u672C\u672C\u8EAB\u4E5F\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u9000\u51FA\u72B6\u6001\u3002\u5728\u811A\u672C\u6216\u8005\u811A\u672C\u51FD\u6570\u4E2D\u6267\u884C\u7684\u6700\u540E\u7684\u547D\u4EE4\u4F1A\u51B3\u5B9A\u5B83\u4EEC\u7684\u9000\u51FA\u72B6\u6001\u3002\u5728\u811A\u672C\u4E2D\uFF0C<code>exit nnn</code> \u547D\u4EE4\u5C06\u4F1A\u628Annn\u9000\u51FA\u72B6\u6001\u7801\u4F20\u9012\u7ED9shell\uFF08nnn \u5FC5\u987B\u662F 0-255 \u4E4B\u95F4\u7684\u6574\u578B\u6570\uFF09\u3002</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> \u5F53\u4E00\u4E2A\u811A\u672C\u4EE5\u4E0D\u5E26\u53C2\u6570\u7684 <code>exit</code> \u6765\u7ED3\u675F\u65F6\uFF0C\u811A\u672C\u7684\u9000\u51FA\u72B6\u6001\u7531\u811A\u672C\u6700\u540E\u6267\u884C\u547D\u4EE4\u51B3\u5B9A\uFF08<code>exit</code> \u547D\u4EE4\u4E4B\u524D\uFF09\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

COMMAND_1

<span class="token punctuation">..</span>.

COMMAND_LAST

<span class="token comment"># \u5C06\u4EE5\u6700\u540E\u7684\u547D\u4EE4\u6765\u51B3\u5B9A\u9000\u51FA\u72B6\u6001</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><code>exit</code>\uFF0C<code>exit $?</code> \u4EE5\u53CA\u7701\u7565 <code>exit</code> \u6548\u679C\u7B49\u540C\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash </span>

COMMAND_1

<span class="token punctuation">..</span>.

COMMAND_LAST

<span class="token comment">#\u5C06\u4EE5\u6700\u540E\u7684\u547D\u4EE4\u6765\u51B3\u5B9A\u9000\u51FA\u72B6\u6001</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

COMMAND_1

<span class="token punctuation">..</span>.

COMMAND_LAST

<span class="token comment">#\u5C06\u4EE5\u6700\u540E\u7684\u547D\u4EE4\u6765\u51B3\u5B9A\u9000\u51FA\u72B6\u6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>$?</code> \u8BFB\u53D6\u4E0A\u4E00\u4E2A\u6267\u884C\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001\u3002\u5728\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\u540E\uFF0C<code>$?</code> \u7ED9\u51FA\u51FD\u6570\u6700\u540E\u6267\u884C\u7684\u90A3\u6761\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001\u3002\u8FD9\u5C31\u662FBash\u51FD\u6570\u7684&quot;\u8FD4\u56DE\u503C&quot;\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>`,11),m=s("\u5728"),u={href:"http://tldp.org/LDP/abs/html/special-chars.html#PIPEREF",target:"_blank",rel:"noopener noreferrer"},d=s("\u7BA1\u9053"),h=s("\u6267\u884C\u540E\uFF0C"),_=n("code",null,"$?",-1),k=s(" \u7ED9\u51FA\u6700\u540E\u6267\u884C\u7684\u90A3\u6761\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001\u3002"),g=t(`<p>\u5728\u811A\u672C\u7EC8\u6B62\u540E\uFF0C\u547D\u4EE4\u884C\u4E0B\u952E\u5165<code>$?</code>\u4F1A\u7ED9\u51FA\u811A\u672C\u7684\u9000\u51FA\u72B6\u6001\uFF0C\u5373\u5728\u811A\u672C\u4E2D\u6700\u540E\u4E00\u6761\u547D\u4EE4\u6267\u884C\u540E\u7684\u9000\u51FA\u72B6\u6001\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C0\u4E3A\u6210\u529F\uFF0C1-255\u4E3A\u5931\u8D25\u3002</p><p>\u6837\u4F8B 6-1. \u9000\u51FA\u4E0E\u9000\u51FA\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> hello
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>    <span class="token comment"># \u8FD4\u56DE\u503C\u4E3A0\uFF0C\u56E0\u4E3A\u6267\u884C\u6210\u529F\u3002</span>

lskdf      <span class="token comment"># \u4E0D\u8BA4\u8BC6\u7684\u547D\u4EE4\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>    <span class="token comment"># \u8FD4\u56DE\u975E0\u503C\uFF0C\u56E0\u4E3A\u5931\u8D25\u4E86\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">113</span>   <span class="token comment"># \u5C06\u8FD4\u56DE113\u7ED9shell</span>
           <span class="token comment"># \u4E3A\u4E86\u9A8C\u8BC1\u8FD9\u4E9B\uFF0C\u5728\u811A\u672C\u7ED3\u675F\u7684\u5730\u65B9\u4F7F\u7528\u201Cecho $?\u201D</span>

<span class="token comment">#  \u6309\u7167\u60EF\u4F8B\uFF0C&#39;exit 0&#39; \u610F\u5473\u7740\u6267\u884C\u6210\u529F\uFF0C</span>
<span class="token comment">#+ \u975E0\u610F\u5473\u7740\u9519\u8BEF\u6216\u8005\u5F02\u5E38\u60C5\u51B5\u3002</span>
<span class="token comment">#  \u67E5\u770B\u9644\u5F55\u7AE0\u8282\u201C\u9000\u51FA\u7801\u7684\u7279\u6B8A\u542B\u4E49\u201D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>$?</code> \u5BF9\u4E8E\u6D4B\u8BD5\u811A\u672C\u4E2D\u7684\u547D\u4EE4\u7684\u6267\u884C\u7ED3\u679C\u7279\u522B\u6709\u7528\uFF08\u67E5\u770B\u6837\u4F8B 16-35\u548C\u6837\u4F8B 16-20\uFF09\u3002</p>`,4),f=n("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"note",loading:"lazy"},null,-1),x=s(" \u903B\u8F91\u975E\u64CD\u4F5C\u7B26 "),v={href:"http://tldp.org/LDP/abs/html/special-chars.html#NOTREF",target:"_blank",rel:"noopener noreferrer"},q=s("!"),D=s(" \u5C06\u4F1A\u53CD\u8F6C\u6D4B\u8BD5\u6216\u547D\u4EE4\u7684\u7ED3\u679C\uFF0C\u5E76\u4E14\u8FD9\u5C06\u4F1A\u5F71\u54CD\u9000\u51FA\u72B6\u6001\u3002"),N=t(`<p>\u6837\u4F8B 6-2. \u5426\u5B9A\u4E00\u4E2A\u6761\u4EF6\u4F7F\u7528!</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token boolean">true</span>    <span class="token comment"># true \u662F shell \u5185\u5EFA\u547D\u4EE4\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;exit status of <span class="token entity" title="\\&quot;">\\&quot;</span>true<span class="token entity" title="\\&quot;">\\&quot;</span> = <span class="token variable">$?</span>&quot;</span>     <span class="token comment"># 0</span>

<span class="token operator">!</span> <span class="token boolean">true</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;exit status of <span class="token entity" title="\\&quot;">\\&quot;</span>! true<span class="token entity" title="\\&quot;">\\&quot;</span> = <span class="token variable">$?</span>&quot;</span>   <span class="token comment"># 1</span>
<span class="token comment"># \u6CE8\u610F\u5728\u547D\u4EE4\u4E4B\u95F4\u7684 &quot;!&quot; \u9700\u8981\u4E00\u4E2A\u7A7A\u683C\u3002</span>
<span class="token comment"># !true \u5C06\u5BFC\u81F4\u4E00\u4E2A&quot;command not found&quot;\u9519\u8BEF\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># \u5982\u679C\u4E00\u4E2A\u547D\u4EE4\u4EE5&#39;!&#39;\u5F00\u5934\uFF0C\u90A3\u4E48\u5C06\u8C03\u7528 Bash \u7684\u5386\u53F2\u673A\u5236\uFF0C\u663E\u793A\u8FD9\u4E2A\u547D\u4EE4\u88AB\u4F7F\u7528\u7684\u5386\u53F2\u3002</span>

<span class="token boolean">true</span>
<span class="token operator">!</span>true
<span class="token comment"># \u8FD9\u6B21\u5C31\u6CA1\u6709\u9519\u8BEF\u4E86\uFF0C\u4F46\u662F\u540C\u6837\u4E5F\u6CA1\u6709\u53CD\u8F6C\u3002</span>
<span class="token comment"># \u5B83\u4E0D\u8FC7\u662F\u91CD\u590D\u4E4B\u524D\u7684\u547D\u4EE4\uFF08true\uFF09\u3002</span>


<span class="token comment"># ============================================================ #</span>
<span class="token comment"># \u5728 _pipe_ \u524D\u4F7F\u7528 ! \u5C06\u6539\u53D8\u8FD4\u56DE\u7684\u9000\u51FA\u72B6\u6001\u3002</span>
<span class="token function">ls</span> <span class="token operator">|</span> bogus_command      <span class="token comment">#bash: bogus_command: command not found</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                 <span class="token comment">#127</span>
<span class="token operator">&gt;</span>
<span class="token operator">!</span> <span class="token function">ls</span> <span class="token operator">|</span> bogus_command    <span class="token comment">#bash: bogus_command:command not found</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                 <span class="token comment">#0</span>
<span class="token comment"># \u6CE8\u610F ! \u4E0D\u4F1A\u6539\u53D8\u7BA1\u9053\u7684\u6267\u884C\u3002</span>
<span class="token comment"># \u53EA\u6539\u53D8\u9000\u51FA\u72B6\u6001\u3002</span>
<span class="token comment">#============================================================  #</span>
<span class="token operator">&gt;</span>
<span class="token comment"># \u611F\u8C22 St\xE9phane Chazelas \u548C Kristopher Newsome\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,2),$=n("img",{src:"http://tldp.org/LDP/abs/images/caution.gif",alt:"caution",loading:"lazy"},null,-1),L=s(" \u67D0\u4E9B\u7279\u5B9A\u7684\u9000\u51FA\u7801\u5177\u6709\u4E00\u4E9B\u7279\u5B9A\u7684"),M={href:"http://tldp.org/LDP/abs/html/exitcodes.html#EXITCODESREF",target:"_blank",rel:"noopener noreferrer"},C=s("\u4FDD\u7559\u542B\u4E49"),E=s("\uFF0C\u7528\u6237\u4E0D\u5E94\u8BE5\u5728\u81EA\u5DF1\u7684\u811A\u672C\u4E2D\u91CD\u65B0\u5B9A\u4E49\u5B83\u4EEC\u3002"),A=n("hr",{class:"footnotes-sep"},null,-1),P={class:"footnotes"},y={class:"footnotes-list"},O={id:"footnote1",class:"footnote-item"},R=s("\u5728\u51FD\u6570\u6CA1\u6709\u7528"),T={href:"http://tldp.org/LDP/abs/html/complexfunct.html#RETURNREF",target:"_blank",rel:"noopener noreferrer"},B=s("return"),F=s("\u6765\u7ED3\u675F\u8FD9\u4E2A\u51FD\u6570\u7684\u60C5\u51B5\u4E0B\u3002 "),S=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function I(z,V){const a=p("ExternalLinkIcon");return r(),o(c,null,[b,n("p",null,[m,n("a",u,[d,e(a)]),h,_,k]),g,n("blockquote",null,[n("p",null,[f,x,n("a",v,[q,e(a)]),D])]),N,n("blockquote",null,[n("p",null,[$,L,n("a",M,[C,e(a)]),E])]),A,n("section",P,[n("ol",y,[n("li",O,[n("p",null,[R,n("a",T,[B,e(a)]),F,S])])])])],64)}var X=l(i,[["render",I],["__file","06_exit_and_exit_status.html.vue"]]);export{X as default};
