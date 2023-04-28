import{_ as l,r as t,c as o,b as s,a as e,F as c,e as p,d as n,o as r}from"./app.53755e41.js";const i={},b=p(`<h1 id="_11-1-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_11-1-\u5FAA\u73AF" aria-hidden="true">#</a> 11.1 \u5FAA\u73AF</h1><p>\u5FAA\u73AF\u662F\u5F53\u5FAA\u73AF\u63A7\u5236\u6761\u4EF6\u4E3A\u771F\u65F6\uFF0C\u4E00\u7CFB\u5217\u547D\u4EE4\u8FED\u4EE3<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>\u6267\u884C\u7684\u4EE3\u7801\u5757\u3002</p><h3 id="for-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#for-\u5FAA\u73AF" aria-hidden="true">#</a> for \u5FAA\u73AF</h3><p><code>for arg in [list]</code></p><p>\u8FD9\u662F shell \u4E2D\u6700\u57FA\u672C\u7684\u5FAA\u73AF\u7ED3\u6784\uFF0C\u5B83\u4E0EC\u8BED\u8A00\u5F62\u5F0F\u7684\u5FAA\u73AF\u6709\u7740\u660E\u663E\u7684\u4E0D\u540C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token punctuation">[</span>list<span class="token punctuation">]</span>
<span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> \u5728\u5FAA\u73AF\u7684\u8FC7\u7A0B\u4E2D\uFF0C<code>arg</code> \u4F1A\u4ECE <code>list</code> \u4E2D\u8FDE\u7EED\u83B7\u5F97\u6BCF\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var1</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$var2</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$var3</span>&quot;</span> <span class="token punctuation">..</span>. <span class="token string">&quot;<span class="token variable">$varN</span>&quot;</span>
<span class="token comment"># \u7B2C\u4E00\u6B21\u5FAA\u73AF\u4E2D\uFF0Carg = $var1</span>
<span class="token comment"># \u7B2C\u4E8C\u6B21\u5FAA\u73AF\u4E2D\uFF0Carg = $var2</span>
<span class="token comment"># \u7B2C\u4E09\u6B21\u5FAA\u73AF\u4E2D\uFF0Carg = $var3</span>
<span class="token comment"># ...</span>
<span class="token comment"># \u7B2C N \u6B21\u5FAA\u73AF\u4E2D\uFF0Carg = $varN</span>
<span class="token operator">&gt;</span>
<span class="token comment"># \u4E3A\u4E86\u9632\u6B62\u53EF\u80FD\u7684\u5B57\u7B26\u5206\u5272\u95EE\u9898\uFF0C[list] \u4E2D\u7684\u53C2\u6570\u90FD\u9700\u8981\u88AB\u5F15\u7528\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,8),u=n("\u53C2\u6570 list \u4E2D\u5141\u8BB8\u542B\u6709 "),m={href:"http://tldp.org/LDP/abs/html/special-chars.html#ASTERISKREF",target:"_blank",rel:"noopener noreferrer"},k=n("\u901A\u914D\u7B26"),d=n("\u3002"),h=p(`<p>\u5982\u679C <code>do</code> \u548C <code>for</code> \u5199\u5728\u540C\u4E00\u884C\u65F6\uFF0C\u9700\u8981\u5728 list \u4E4B\u540E\u52A0\u4E0A\u4E00\u4E2A\u5206\u53F7\u3002</p><p><code>for arg in [list] ; do</code></p><p>\u6837\u4F8B 11-1. \u7B80\u5355\u7684 for \u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u5217\u51FA\u592A\u9633\u7CFB\u7684\u6240\u6709\u884C\u661F\u3002</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">planet</span> <span class="token keyword">in</span> Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$planet</span>  <span class="token comment"># \u6BCF\u4E00\u884C\u8F93\u51FA\u4E00\u4E2A\u884C\u661F\u3002</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">planet</span> <span class="token keyword">in</span> <span class="token string">&quot;Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto&quot;</span>
    <span class="token comment"># \u6240\u6709\u7684\u884C\u661F\u90FD\u8F93\u51FA\u5728\u4E00\u884C\u4E0A\u3002</span>
    <span class="token comment"># \u6574\u4E2A &#39;list&#39; \u88AB\u5305\u88F9\u5728\u5F15\u53F7\u4E2D\u65F6\u662F\u4F5C\u4E3A\u4E00\u4E2A\u5355\u4E00\u7684\u53D8\u91CF\u3002</span>
    <span class="token comment"># \u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u7A7A\u683C\u4E5F\u662F\u53D8\u91CF\u7684\u4E00\u90E8\u5206\u3002</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$planet</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Whoops! Pluto is no longer a planet!&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,4),_=n("[list] \u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u4E2D\u90FD\u53EF\u80FD\u542B\u6709\u591A\u4E2A\u53C2\u6570\u3002\u8FD9\u5728\u5904\u7406\u53C2\u6570\u7EC4\u4E2D\u975E\u5E38\u6709\u7528\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528 "),g={href:"http://tldp.org/LDP/abs/html/internal.html#SETREF",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"set",-1),f=n(" \u547D\u4EE4\uFF08\u67E5\u770B "),q={href:"http://tldp.org/LDP/abs/html/internal.html#EX34",target:"_blank",rel:"noopener noreferrer"},w=n("\u6837\u4F8B 15-16"),y=n("\uFF09\u5F3A\u5236\u89E3\u6790 [list] \u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u5C06\u5143\u7D20\u7684\u6BCF\u4E00\u4E2A\u90E8\u5206\u5206\u914D\u7ED9\u4F4D\u7F6E\u53C2\u6570\u3002"),$=p(`<p>\u6837\u4F8B 11-2. <code>for</code> \u5FAA\u73AF [list] \u4E2D\u7684\u6BCF\u4E00\u4E2A\u53D8\u91CF\u6709\u4E24\u4E2A\u53C2\u6570\u7684\u60C5\u51B5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u8BA9\u884C\u661F\u518D\u8EBA\u6B21\u67AA\u3002</span>

<span class="token comment"># \u5C06\u6BCF\u4E2A\u884C\u661F\u4E0E\u5176\u5230\u592A\u9633\u7684\u8DDD\u79BB\u653E\u5728\u4E00\u8D77\u3002</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">planet</span> <span class="token keyword">in</span> <span class="token string">&quot;Mercury 36&quot;</span> <span class="token string">&quot;Venus 67&quot;</span> <span class="token string">&quot;Earth 93&quot;</span> <span class="token string">&quot;Mars 142&quot;</span> <span class="token string">&quot;Jupiter 483&quot;</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">set</span> -- <span class="token variable">$planet</span>  <span class="token comment">#  \u89E3\u6790\u53D8\u91CF &quot;planet&quot;</span>
                  <span class="token comment">#+ \u5E76\u5C06\u5176\u6BCF\u4E2A\u90E8\u5206\u8D4B\u503C\u7ED9\u4F4D\u7F6E\u53C2\u6570\u3002</span>
  <span class="token comment"># &quot;--&quot; \u9632\u6B62\u4E00\u4E9B\u6781\u7AEF\u60C5\u51B5\uFF0C\u6BD4\u5982 $planet \u4E3A\u7A7A\u6216\u8005\u4EE5\u7834\u6298\u53F7\u5F00\u5934\u3002</span>
  
  <span class="token comment"># \u56E0\u4E3A\u4F4D\u7F6E\u53C2\u6570\u4F1A\u88AB\u8986\u76D6\u6389\uFF0C\u56E0\u6B64\u9700\u8981\u5148\u4FDD\u5B58\u539F\u5148\u7684\u4F4D\u7F6E\u53C2\u6570\u3002</span>
  <span class="token comment"># \u4F60\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u6765\u4FDD\u5B58</span>
  <span class="token comment">#         original_params=(&quot;$@&quot;)</span>
  
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span>		<span class="token variable">$2</span>,000,000 miles from the sum&quot;</span>
  <span class="token comment">#-------\u4E24\u4E2A\u5236\u8868\u7B26---\u5C06\u540E\u9762\u7684\u4E00\u7CFB\u5217 0 \u8FDE\u5230\u53C2\u6570 $2 \u4E0A\u3002</span>
<span class="token keyword">done</span>

<span class="token comment"># \uFF08\u611F\u8C22 S.C. \u505A\u51FA\u7684\u989D\u5916\u6CE8\u91CA\u3002\uFF09</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u4E00\u4E2A\u5355\u4E00\u53D8\u91CF\u4E5F\u53EF\u4EE5\u6210\u4E3A <code>for</code> \u5FAA\u73AF\u4E2D\u7684 [list]\u3002</p><p>\u6837\u4F8B 11-3. \u6587\u4EF6\u4FE1\u606F\uFF1A\u67E5\u770B\u4E00\u4E2A\u5355\u4E00\u53D8\u91CF\u4E2D\u542B\u6709\u7684\u6587\u4EF6\u5217\u8868\u7684\u6587\u4EF6\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># fileinfo.sh</span>

<span class="token assign-left variable">FILES</span><span class="token operator">=</span><span class="token string">&quot;/usr/sbin/accept
/usr/sbin/pwck
/usr/sbin/chroot
/usr/bin/fakefile
/sbin/badblocks
/sbin/ypbind&quot;</span>     <span class="token comment"># \u4F60\u53EF\u80FD\u4F1A\u611F\u5174\u8DA3\u7684\u4E00\u7CFB\u5217\u6587\u4EF6\u3002</span>
                  <span class="token comment"># \u5305\u542B\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\uFF0C/usr/bin/fakefile\u3002</span>
                  
<span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$FILES</span>
<span class="token keyword">do</span>

  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -e <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span>       <span class="token comment"># \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5B58\u5728\u3002</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> does not exist.&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">continue</span>                <span class="token comment"># \u7EE7\u7EED\u5224\u65AD\u4E0B\u4E00\u4E2A\u6587\u4EF6\u3002</span>
  <span class="token keyword">fi</span>
  
  <span class="token function">ls</span> -l <span class="token variable">$file</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $8 &quot;         file size: &quot; $5 }&#39;</span>  <span class="token comment"># \u8F93\u51FA\u5176\u4E2D\u7684\u4E24\u4E2A\u57DF\u3002</span>
  whatis <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $file<span class="token variable">\`</span></span>   <span class="token comment"># \u6587\u4EF6\u4FE1\u606F\u3002</span>
  <span class="token comment"># \u811A\u672C\u6B63\u5E38\u8FD0\u884C\u9700\u8981\u6CE8\u610F\u63D0\u524D\u8BBE\u7F6E\u597D whatis \u7684\u6570\u636E\u3002</span>
  <span class="token comment"># \u4F7F\u7528 root \u6743\u9650\u8FD0\u884C /usr/bin/makewhatis \u53EF\u4EE5\u5B8C\u6210\u3002</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><code>for</code> \u5FAA\u73AF\u4E2D\u7684 [list] \u53EF\u4EE5\u662F\u4E00\u4E2A\u53C2\u6570\u3002</p><p>\u6837\u4F8B 11-4. \u64CD\u4F5C\u542B\u6709\u4E00\u7CFB\u5217\u6587\u4EF6\u7684\u53C2\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">&quot;*txt&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$filename</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Contents of <span class="token variable">$file</span>&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;---&quot;</span>
 <span class="token function">cat</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
 <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5982\u679C\u5728\u5339\u914D\u6587\u4EF6\u6269\u5C55\u540D\u7684 <code>for</code> \u5FAA\u73AF\u4E2D\u7684 [list] \u542B\u6709\u901A\u914D\u7B26\uFF08* \u548C ?\uFF09\uFF0C\u90A3\u4E48\u5C06\u4F1A\u8FDB\u884C\u6587\u4EF6\u540D\u6269\u5C55\u3002</p><p>\u6837\u4F8B 11-5. \u5728 <code>for</code> \u5FAA\u73AF\u4E2D\u64CD\u4F5C\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># list-glob.sh: \u901A\u8FC7\u6587\u4EF6\u540D\u6269\u5C55\u5728 for \u5FAA\u73AF\u4E2D\u4EA7\u751F [list]\u3002</span>
<span class="token comment"># \u901A\u914D = \u6587\u4EF6\u540D\u6269\u5C55\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> *
<span class="token comment">#           ^  Bash \u5728\u68C0\u6D4B\u5230\u901A\u914D\u8868\u8FBE\u5F0F\u65F6\uFF0C</span>
<span class="token comment">#+             \u4F1A\u8FDB\u884C\u6587\u4EF6\u540D\u6269\u5C55\u3002</span>
<span class="token keyword">do</span>
  <span class="token function">ls</span> -l <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>  <span class="token comment"># \u5217\u51FA $PWD\uFF08\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\uFF09\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u3002</span>
  <span class="token comment">#  \u56DE\u5FC6\u4E00\u4E0B\uFF0C\u901A\u914D\u7B26 &quot;*&quot; \u4F1A\u5339\u914D\u6240\u6709\u7684\u6587\u4EF6\u540D\uFF0C</span>
  <span class="token comment">#+ \u4F46\u662F\uFF0C\u5728\u6587\u4EF6\u540D\u6269\u5C55\u4E2D\uFF0C\u4ED6\u5C06\u4E0D\u4F1A\u5339\u914D\u4EE5\u70B9\u5F00\u5934\u7684\u6587\u4EF6\u3002</span>
  
  <span class="token comment">#  \u5982\u679C\u6CA1\u6709\u5339\u914D\u5230\u6587\u4EF6\uFF0C\u90A3\u4E48\u5B83\u5C06\u4F1A\u6269\u5C55\u4E3A\u5B83\u81EA\u8EAB\u3002</span>
  <span class="token comment">#  \u4E3A\u4E86\u9632\u6B62\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\uFF0C\u9700\u8981\u8BBE\u7F6E nullglob \u9009\u9879\u3002</span>
  <span class="token comment">#+    (shopt -s nullglob)\u3002</span>
  <span class="token comment">#  \u611F\u8C22 S.C.</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token punctuation">[</span>jx<span class="token punctuation">]</span>*
<span class="token keyword">do</span>
  <span class="token function">rm</span> -f <span class="token variable">$file</span>    <span class="token comment"># \u5220\u9664\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709\u4EE5 &quot;j&quot; \u6216 &quot;x&quot; \u5F00\u5934\u7684\u6587\u4EF6\u3002</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Removed file <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$file</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span><span class="token builtin class-name">.</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,11),E=n("\u5982\u679C\u5728 "),x=s("code",null,"for",-1),I=n(" \u5FAA\u73AF\u4E2D\u7701\u7565 "),S=s("code",null,"in [list]",-1),L=n(" \u90E8\u5206\uFF0C\u90A3\u4E48\u5FAA\u73AF\u5C06\u4F1A\u904D\u5386\u4F4D\u7F6E\u53C2\u6570\uFF08"),D=s("code",null,"$@",-1),R=n("\uFF09\u3002"),P={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#PRIMES",target:"_blank",rel:"noopener noreferrer"},F=n("\u6837\u4F8B A-15"),T=n(" \u4E2D\u4F7F\u7528\u5230\u4E86\u8FD9\u4E00\u70B9\u3002\u4E5F\u53EF\u4EE5\u67E5\u770B "),C={href:"http://tldp.org/LDP/abs/html/internal.html#REVPOSPARAMS",target:"_blank",rel:"noopener noreferrer"},O=n("\u6837\u4F8B 15-17"),A=n("\u3002"),N=p(`<p>\u6837\u4F8B 11-6. \u7F3A\u5C11 <code>in [list]</code> \u7684 <code>for</code> \u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># \u5C1D\u8BD5\u5728\u5E26\u53C2\u6570\u548C\u4E0D\u5E26\u53C2\u6570\u4E24\u79CD\u60C5\u51B5\u4E0B\u8C03\u7528\u8FD9\u4E2A\u811A\u672C\uFF0C\u89C2\u5BDF\u53D1\u751F\u4E86\u4EC0\u4E48\u3002</span>

<span class="token keyword">for</span> a
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#  \u7F3A\u5931 &#39;in list&#39; \u7684\u60C5\u51B5\u4E0B\uFF0C\u5FAA\u73AF\u4F1A\u904D\u5386 &#39;$@&#39;</span>
<span class="token comment">#+\uFF08\u547D\u4EE4\u884C\u53C2\u6570\u5217\u8868\uFF0C\u5305\u62EC\u7A7A\u683C\uFF09\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,2),M=n("\u53EF\u4EE5\u5728 "),B=s("code",null,"for",-1),U=n(" \u5FAA\u73AF\u4E2D\u4F7F\u7528 "),G={href:"http://tldp.org/LDP/abs/html/commandsub.html#COMMANDSUBREF",target:"_blank",rel:"noopener noreferrer"},V=n("\u547D\u4EE4\u4EE3\u6362"),W=n(" \u751F\u6210 [list]\u3002\u67E5\u770B "),z={href:"http://tldp.org/LDP/abs/html/extmisc.html#EX53",target:"_blank",rel:"noopener noreferrer"},J=n("\u6837\u4F8B 16-54"),K=n("\uFF0C"),X={href:"http://tldp.org/LDP/abs/html/loops1.html#SYMLINKS",target:"_blank",rel:"noopener noreferrer"},H=n("\u6837\u4F8B 11-11"),Y=n(" \u548C "),j={href:"http://tldp.org/LDP/abs/html/mathc.html#BASE",target:"_blank",rel:"noopener noreferrer"},Q=n("\u6837\u4F8B 16-48"),Z=n("\u3002"),nn=p(`<p>\u6837\u4F8B 11-7. \u5728 <code>for</code> \u5FAA\u73AF\u4E2D\u4F7F\u7528\u547D\u4EE4\u4EE3\u6362\u751F\u6210 [list]</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># for-loopcmd.sh: \u5E26\u547D\u4EE4\u4EE3\u6362\u6240\u751F\u6210 [list] \u7684 for \u5FAA\u73AF</span>

<span class="token assign-left variable">NUMBERS</span><span class="token operator">=</span><span class="token string">&quot;9 7 3 8 37.53&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">number</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $NUMBERS<span class="token variable">\`</span></span>  <span class="token comment"># for number in 9 7 3 8 37.53</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$number</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E0B\u9762\u662F\u4F7F\u7528\u547D\u4EE4\u4EE3\u6362\u751F\u6210 [list] \u7684\u66F4\u52A0\u590D\u6742\u7684\u4F8B\u5B50\u3002</p><p>\u6837\u4F8B 11-8. \u4E00\u79CD\u66FF\u4EE3 <code>grep</code> \u641C\u7D22\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u65B9\u6CD5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># bin-grep.sh: \u5728\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u5B9A\u4F4D\u5339\u914D\u7684\u5B57\u7B26\u4E32\u3002</span>

<span class="token comment"># \u4E00\u79CD\u66FF\u4EE3 \`grep\` \u641C\u7D22\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u65B9\u6CD5</span>
<span class="token comment"># \u4E0E &quot;grep -a&quot; \u7684\u6548\u679C\u7C7B\u4F3C</span>

<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">65</span>
<span class="token assign-left variable">E_NOFILE</span><span class="token operator">=</span><span class="token number">66</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -ne <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> search_string filename&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -f <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$2</span><span class="token entity" title="\\&quot;">\\&quot;</span> does not exist.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOFILE</span>
<span class="token keyword">fi</span>


<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\012">\\012</span>&#39;</span>       <span class="token comment"># \u6309\u7167 Anton Filippov \u7684\u610F\u89C1\u5E94\u8BE5\u662F</span>
                  <span class="token comment"># IFS=&quot;\\n&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">word</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> strings <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token variable">)</span></span>
<span class="token comment"># &quot;strings&quot; \u547D\u4EE4\u5217\u51FA\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u4E32\u3002</span>
<span class="token comment"># \u5C06\u7ED3\u679C\u901A\u8FC7\u7BA1\u9053\u8F93\u51FA\u5230 &quot;grep&quot; \u4E2D\uFF0C\u68C0\u67E5\u662F\u4E0D\u662F\u5339\u914D\u7684\u5B57\u7B26\u4E32\u3002</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$word</span>
<span class="token keyword">done</span>

<span class="token comment"># \u5C31\u50CF S.C. \u6307\u51FA\u7684\u90A3\u6837\uFF0C\u7B2C 23-30 \u884C\u53EF\u4EE5\u6362\u6210\u4E0B\u9762\u7684\u5F62\u5F0F\uFF1A</span>
<span class="token comment">#    strings &quot;$2&quot; | grep &quot;$1&quot; | tr -s &quot;$IFS&quot; &#39;[\\n*]&#39;</span>


<span class="token comment"># \u5C1D\u8BD5\u8FD0\u884C\u811A\u672C &quot;./bin-grep.sh mem /bin/ls&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u540C\u6837\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u547D\u4EE4\u4EE3\u6362\u751F\u6210 [list]\u3002</p><p>\u6837\u4F8B 11-9. \u5217\u51FA\u7CFB\u7EDF\u4E2D\u7684\u6240\u6709\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># userlist.sh</span>

<span class="token assign-left variable">PASSWORD_FILE</span><span class="token operator">=</span>/etc/passwd
<span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">1</span>           <span class="token comment"># \u7528\u6237\u6570\u91CF</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">name</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;BEGIN{fs=&quot;:&quot;}{print $1}&#39;</span> <span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$PASSWORD_FILE</span>&quot;</span> <span class="token variable">)</span></span>
<span class="token comment"># \u5206\u9694\u7B26 = :              ^^^^^^</span>
<span class="token comment"># \u8F93\u51FA\u7B2C\u4E00\u4E2A\u57DF                    ^^^^^^^^</span>
<span class="token comment"># \u8BFB\u53D6\u5BC6\u7801\u6587\u4EF6 /etc/passwd                    ^^^^^^^^^^^^^^^^^</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;USER #<span class="token variable">$n</span> = <span class="token variable">$name</span>&quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;n += 1&quot;</span>
<span class="token keyword">done</span>


<span class="token comment"># USER #1 = root</span>
<span class="token comment"># USER #2 = bin</span>
<span class="token comment"># USER #3 = daemon</span>
<span class="token comment"># ...</span>
<span class="token comment"># USER #33 = bozo</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment"># \u8BA8\u8BBA\uFF1A</span>
<span class="token comment"># -----</span>
<span class="token comment"># \u4E00\u4E2A\u666E\u901A\u7528\u6237\u662F\u5982\u4F55\u8BFB\u53D6 /etc/passwd \u6587\u4EF6\u7684\uFF1F</span>
<span class="token comment"># \u63D0\u793A\uFF1A\u68C0\u67E5 /etc/passwd \u7684\u6587\u4EF6\u6743\u9650\u3002</span>
<span class="token comment"># \u8FD9\u7B97\u4E0D\u7B97\u662F\u4E00\u4E2A\u5B89\u5168\u6F0F\u6D1E\uFF1F\u4E3A\u4EC0\u4E48\uFF1F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u53E6\u5916\u4E00\u4E2A\u5173\u4E8E [list] \u7684\u4F8B\u5B50\u4E5F\u6765\u81EA\u4E8E\u547D\u4EE4\u4EE3\u6362\u3002</p><p>\u6837\u4F8B 11-10. \u68C0\u67E5\u76EE\u5F55\u4E2D\u6240\u6709\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u539F\u4F5C\u8005</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># findstring.sh</span>
<span class="token comment"># \u5728\u6307\u5B9A\u76EE\u5F55\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u5BFB\u627E\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u3002</span>

<span class="token assign-left variable">directory</span><span class="token operator">=</span>/usr/bin
<span class="token assign-left variable">fstring</span><span class="token operator">=</span><span class="token string">&quot;Free Software Foundation&quot;</span>  <span class="token comment"># \u67E5\u770B\u54EA\u4E9B\u6587\u4EF6\u6765\u81EA\u4E8E FSF\u3002</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory -type f -name <span class="token string">&#39;*&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token variable">)</span></span>
<span class="token keyword">do</span>
  strings -f <span class="token variable">$file</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable">$fstring</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> -e <span class="token string">&quot;s%<span class="token variable">$driectory</span>%%&quot;</span>
  <span class="token comment">#  \u5728 &quot;sed&quot; \u8868\u8FBE\u5F0F\u4E2D\uFF0C\u4F60\u9700\u8981\u66FF\u6362\u6389 &quot;/&quot; \u5206\u9694\u7B26\uFF0C</span>
  <span class="token comment">#+ \u56E0\u4E3A &quot;/&quot; \u662F\u4E00\u4E2A\u4F1A\u88AB\u8FC7\u6EE4\u7684\u5B57\u7B26\u3002</span>
  <span class="token comment">#  \u5982\u679C\u4E0D\u505A\u66FF\u6362\uFF0C\u5C06\u4F1A\u4EA7\u751F\u4E00\u4E2A\u9519\u8BEF\u3002\uFF08\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B\u3002\uFF09</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment"># \u7B80\u5355\u7684\u7EC3\u4E60\uFF1A</span>
<span class="token comment"># ----------</span>
<span class="token comment"># \u4FEE\u6539\u811A\u672C\uFF0C\u4F7F\u5176\u53EF\u4EE5\u4ECE\u547D\u4EE4\u884C\u53C2\u6570\u4E2D\u83B7\u53D6 $directory \u548C $fstring\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,11),sn=n("\u6700\u540E\u4E00\u4E2A\u5173\u4E8E [list] \u548C\u547D\u4EE4\u4EE3\u6362\u7684\u4F8B\u5B50\uFF0C\u4F46\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u7684\u547D\u4EE4\u662F\u4E00\u4E2A"),an={href:"http://tldp.org/LDP/abs/html/functions.html#FUNCTIONREF",target:"_blank",rel:"noopener noreferrer"},en=n("\u51FD\u6570"),pn=n("\u3002"),ln=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">generate_list</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;one two three&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">word</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span>generate_list<span class="token variable">)</span></span>  <span class="token comment"># &quot;word&quot; \u83B7\u5F97\u51FD\u6570\u6267\u884C\u7684\u7ED3\u679C\u3002</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$word</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># one</span>
<span class="token comment"># two</span>
<span class="token comment"># three</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>for</code> \u5FAA\u73AF\u7684\u7ED3\u679C\u53EF\u4EE5\u901A\u8FC7\u7BA1\u9053\u5BFC\u5411\u81F3\u4E00\u4E2A\u6216\u591A\u4E2A\u547D\u4EE4\u4E2D\u3002</p><p>\u6837\u4F8B 11-11. \u5217\u51FA\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u7B26\u53F7\u94FE\u63A5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># symlinks.sh: \u5217\u51FA\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u7B26\u53F7\u94FE\u63A5\u3002</span>

<span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable">\${1-\`pwd\`}</span>
<span class="token comment"># \u5982\u679C\u6CA1\u6709\u7279\u522B\u6307\u5B9A\uFF0C\u7F3A\u7701\u76EE\u5F55\u4E3A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</span>
<span class="token comment"># \u7B49\u4EF7\u4E8E\u4E0B\u9762\u7684\u4EE3\u7801\u5757\u3002</span>
<span class="token comment"># ---------------------------------------------------</span>
<span class="token comment"># ARGS=1                 # \u53EA\u6709\u4E00\u4E2A\u547D\u4EE4\u884C\u53C2\u6570\u3002</span>
<span class="token comment">#</span>
<span class="token comment"># if [ $# -ne &quot;$ARGS&quot; ]  # \u5982\u679C\u4E0D\u662F\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u60C5\u51B5\u4E0B</span>
<span class="token comment"># then</span>
<span class="token comment">#   directory=\`pwd\`      # \u8BBE\u4E3A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</span>
<span class="token comment"># else</span>
<span class="token comment">#   directory=$1</span>
<span class="token comment"># fi</span>
<span class="token comment"># ---------------------------------------------------</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;symbolic links in directory <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$directory</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory -type <span class="token number">1</span> <span class="token variable">)</span></span>&quot;</span>   <span class="token comment"># -type 1 = \u7B26\u53F7\u94FE\u63A5</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span>                                  <span class="token comment"># \u5426\u5219\u6587\u4EF6\u987A\u5E8F\u4F1A\u662F\u4E71\u5E8F\u3002</span>
<span class="token comment">#  \u4E25\u683C\u7684\u6765\u8BF4\u8FD9\u91CC\u5E76\u4E0D\u9700\u8981\u4F7F\u7528\u5FAA\u73AF\uFF0C</span>
<span class="token comment">#+ \u56E0\u4E3A &quot;find&quot; \u547D\u4EE4\u7684\u8F93\u51FA\u7ED3\u679C\u5DF2\u7ECF\u88AB\u6269\u5C55\u6210\u4E00\u4E2A\u5355\u4E00\u5B57\u7B26\u4E32\u4E86\u3002</span>
<span class="token comment">#  \u7136\u800C\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u5927\u5BB6\u7406\u89E3\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u5FAA\u73AF\u7684\u65B9\u5F0F\u3002</span>

<span class="token comment">#  Dominik &#39;Aeneas&#39; Schnitzer \u6307\u51FA\uFF0C</span>
<span class="token comment">#+ \u4E0D\u5F15\u7528 $( find $directory -type 1 ) \u7684\u8BDD\uFF0C</span>
<span class="token comment">#  \u811A\u672C\u5C06\u5728\u6587\u4EF6\u540D\u5305\u542B\u7A7A\u683C\u65F6\u963B\u585E\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>


<span class="token comment"># --------------------------------------------------------</span>
<span class="token comment"># Jean Helou \u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u65B9\u6CD5\uFF1A</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;symbolic links in directory <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$directory</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token comment"># \u5907\u4EFD\u5F53\u524D\u7684\u5185\u90E8\u5B57\u6BB5\u5206\u9694\u7B26\u3002\u8C28\u614E\u6C38\u8FDC\u6CA1\u6709\u574F\u5904\u3002</span>
<span class="token assign-left variable">OLDIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> $directory -type <span class="token number">1</span> -printf <span class="token string">&quot;%p<span class="token environment constant">$IFS</span>&quot;</span><span class="token variable">)</span></span>
<span class="token keyword">do</span>     <span class="token comment">#                              ^^^^^^^^^^^^^^^^</span>
       <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
       <span class="token keyword">done</span><span class="token operator">|</span><span class="token function">sort</span>

<span class="token comment"># James &quot;Mike&quot; Conley \u5EFA\u8BAE\u5C06 Helou \u7684\u4EE3\u7801\u4FEE\u6539\u4E3A\uFF1A</span>

<span class="token assign-left variable">OLDIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&#39;&#39;</span> <span class="token comment"># \u7A7A\u7684\u5185\u90E8\u5B57\u6BB5\u5206\u9694\u7B26\u610F\u5473\u7740\u5C06\u4E0D\u4F1A\u5206\u9694\u4EFB\u4F55\u5B57\u7B26\u4E32</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory -type <span class="token number">1</span> <span class="token variable">)</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$file</span>
  <span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span>
  
<span class="token comment">#  \u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u5728\u76EE\u5F55\u540D\u5305\u542B\u5192\u53F7\uFF08\u524D\u4E00\u4E2A\u5141\u8BB8\u5305\u542B\u7A7A\u683C\uFF09</span>
<span class="token comment">#+ \u7684\u60C5\u51B5\u4E0B\u4ECD\u65E7\u6B63\u5E38\u5DE5\u4F5C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div>`,4),tn=n("\u53EA\u9700\u8981\u5BF9\u4E0A\u4E00\u4E2A\u6837\u4F8B\u505A\u4E00\u4E9B\u5C0F\u5C0F\u7684\u6539\u52A8\uFF0C\u5C31\u53EF\u4EE5\u628A\u5728\u6807\u51C6\u8F93\u51FA "),on=s("code",null,"stdout",-1),cn=n(" \u4E2D\u7684\u5FAA\u73AF "),rn={href:"http://tldp.org/LDP/abs/html/io-redirection.html#IOREDIRREF",target:"_blank",rel:"noopener noreferrer"},bn=n("\u91CD\u5B9A\u5411"),un=n(" \u5230\u6587\u4EF6\u4E2D\u3002"),mn=p(`<p>\u6837\u4F8B 11-12. \u5C06\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u7B26\u53F7\u94FE\u63A5\u4FDD\u5B58\u5230\u6587\u4EF6\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># symlinks.sh: \u5217\u51FA\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u7B26\u53F7\u94FE\u63A5\u3002</span>

<span class="token assign-left variable">OUTFILE</span><span class="token operator">=</span>symlinks.list

<span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable">\${1-\`pwd\`}</span>
<span class="token comment"># \u5982\u679C\u6CA1\u6709\u7279\u522B\u6307\u5B9A\uFF0C\u7F3A\u7701\u76EE\u5F55\u4E3A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</span>


<span class="token builtin class-name">echo</span> <span class="token string">&quot;symbolic links in directory <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$directory</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$OUTFILE</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------------&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$OUTFILE</span>&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span> <span class="token function">find</span> $directory -type <span class="token number">1</span> <span class="token variable">)</span></span>&quot;</span>    <span class="token comment"># -type 1 = \u7B26\u53F7\u94FE\u63A5</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$OUTFILE</span>&quot;</span>                     <span class="token comment"># \u5C06 stdout \u7684\u5FAA\u73AF\u7ED3\u679C</span>
<span class="token comment">#           ^^^^^^^^^^^^^                       \u91CD\u5B9A\u5411\u5230\u6587\u4EF6\u3002</span>

<span class="token comment"># echo &quot;Output file = $OUTFILE&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,2),kn=n("\u8FD8\u6709\u53E6\u5916\u4E00\u79CD\u770B\u8D77\u6765\u975E\u5E38\u50CFC\u8BED\u8A00\u4E2D\u5FAA\u73AF\u90A3\u6837\u7684\u8BED\u6CD5\u3002\u4F60\u9700\u8981\u4F7F\u7528\u5230 "),dn={href:"http://tldp.org/LDP/abs/html/dblparens.html#DBLPARENSREF",target:"_blank",rel:"noopener noreferrer"},hn=n("\u53CC\u5706\u62EC\u53F7"),_n=n(" \u8BED\u6CD5\u3002"),gn=p(`<p>\u6837\u4F8B 11-13. C\u8BED\u8A00\u98CE\u683C\u7684\u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u7528\u591A\u79CD\u65B9\u5F0F\u6570\u523010\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># \u57FA\u7840\u7248</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># \u4F7F\u7528 &quot;seq&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">10</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># \u4F7F\u7528\u5927\u62EC\u53F7\u6269\u5C55\u8BED\u6CD5</span>
<span class="token comment"># Bash 3+ \u7248\u672C\u6709\u6548\u3002</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># \u73B0\u5728\u7528\u7C7B\u4F3CC\u8BED\u8A00\u7684\u8BED\u6CD5\u518D\u5B9E\u73B0\u4E00\u6B21\u3002</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;=</span> LIMIT <span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">))</span></span>  <span class="token comment"># \u53CC\u5706\u62EC\u53F7\u8BED\u6CD5\uFF0C\u4E0D\u5E26 $ \u7684 LIMIT</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
<span class="token keyword">done</span>                           <span class="token comment"># \u4ECE ksh93 \u4E2D\u5B66\u4E60\u5230\u7684\u7279\u6027\u3002</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==========================================+</span>

<span class="token comment"># \u6211\u4EEC\u73B0\u5728\u4F7F\u7528C\u8BED\u8A00\u4E2D\u7684\u9017\u53F7\u8FD0\u7B97\u7B26\u6765\u4F7F\u5F97\u4E24\u4E2A\u53D8\u91CF\u540C\u65F6\u589E\u52A0\u3002</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;=</span> LIMIT <span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">,</span> b<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>  <span class="token comment"># \u9017\u53F7\u8FDE\u63A5\u64CD\u4F5C\u3002</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span>-<span class="token variable">$b</span> &quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div>`,2),vn=n("\u8FD8\u53EF\u4EE5\u67E5\u770B "),fn={href:"http://tldp.org/LDP/abs/html/arrays.html#QFUNCTION",target:"_blank",rel:"noopener noreferrer"},qn=n("\u6837\u4F8B 27-16"),wn=n("\uFF0C"),yn={href:"http://tldp.org/LDP/abs/html/arrays.html#TWODIM",target:"_blank",rel:"noopener noreferrer"},$n=n("\u6837\u4F8B 27-17"),En=n(" \u548C "),xn={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#COLLATZ",target:"_blank",rel:"noopener noreferrer"},In=n("\u6837\u4F8B A-6"),Sn=n("\u3002"),Ln=p(`<p>---</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u5C55\u793A\u5728\u771F\u5B9E\u73AF\u5883\u4E2D\u5E94\u7528\u7684\u5FAA\u73AF\u3002</p><p>\u6837\u4F8B 11-14. \u5728\u6279\u5904\u7406\u6A21\u5F0F\u4E0B\u4F7F\u7528 <code>efax</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u4F20\u771F\uFF08\u5FC5\u987B\u63D0\u524D\u5B89\u88C5\u4E86 &#39;efax&#39; \u6A21\u5757\uFF09\u3002</span>

<span class="token assign-left variable">EXPECTED_ARGS</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">85</span>
<span class="token assign-left variable">MODEM_PORT</span><span class="token operator">=</span><span class="token string">&quot;/dev/ttyS2&quot;</span>   <span class="token comment"># \u4F60\u7684\u7535\u8111\u53EF\u80FD\u4F1A\u4E0D\u4E00\u6837\u3002</span>
<span class="token comment">#                ^^^^^       PCMCIA \u8C03\u5236\u89E3\u8C03\u5361\u7F3A\u7701\u7AEF\u53E3\u3002</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -ne <span class="token variable">$EXPECTED_ARGS</span> <span class="token punctuation">]</span>
<span class="token comment"># \u68C0\u67E5\u662F\u4E0D\u662F\u4F20\u5165\u4E86\u9002\u5F53\u6570\u91CF\u7684\u547D\u4EE4\u884C\u53C2\u6570\u3002</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> phone# text-file&quot;</span>
   <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -f <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;File <span class="token variable">$2</span> is not a text file.&quot;</span>
  <span class="token comment">#     File \u4E0D\u662F\u4E00\u4E2A\u6B63\u5E38\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u4E0D\u5B58\u5728\u3002</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>


fax <span class="token function">make</span> <span class="token variable">$2</span>              <span class="token comment"># \u6839\u636E\u6587\u672C\u6587\u4EF6\u521B\u5EFA\u4F20\u771F\u683C\u5F0F\u6587\u4EF6\u3002</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> $2.0*<span class="token variable">)</span></span>  <span class="token comment"># \u8FDE\u63A5\u8F6C\u6362\u540E\u7684\u6587\u4EF6\u3002</span>
                         <span class="token comment"># \u5728\u53C2\u6570\u5217\u8868\u4E2D\u4F7F\u7528\u901A\u914D\u7B26\uFF08\u6587\u4EF6\u540D\u901A\u914D\uFF09\u3002</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">fil</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$fil</span> <span class="token variable">$file</span>&quot;</span>
<span class="token keyword">done</span>

efax -d <span class="token string">&quot;<span class="token variable">$MODEM_PORT</span>&quot;</span>  -t <span class="token string">&quot;T<span class="token variable">$1</span>&quot;</span> <span class="token variable">$fil</span>   <span class="token comment"># \u6700\u540E\u4F7F\u7528 efax\u3002</span>
<span class="token comment"># \u5982\u679C\u4E0A\u9762\u4E00\u884C\u6267\u884C\u5931\u8D25\uFF0C\u5C1D\u8BD5\u6DFB\u52A0 -o1\u3002</span>


<span class="token comment">#  S.C. \u6307\u51FA\uFF0C\u4E0A\u9762\u7684 for \u5FAA\u73AF\u53EF\u4EE5\u88AB\u538B\u7F29\u4E3A</span>
<span class="token comment">#     efax -d /dev/ttyS2 -o1 -t &quot;T$1&quot; $2.0*</span>
<span class="token comment">#+ \u4F46\u662F\u8FD9\u5E76\u4E0D\u662F\u4E00\u4E2A\u597D\u4E3B\u610F\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>   <span class="token comment"># efax \u540C\u65F6\u4E5F\u4F1A\u5C06\u8BCA\u65AD\u4FE1\u606F\u4F20\u9012\u7ED9\u6807\u51C6\u8F93\u51FA\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,4),Dn=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"note",loading:"lazy"},null,-1),Rn=n(),Pn={href:"http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF",target:"_blank",rel:"noopener noreferrer"},Fn=n("\u5173\u952E\u5B57"),Tn=n(),Cn=s("code",null,"do",-1),On=n(" \u548C "),An=s("code",null,"done",-1),Nn=n(" \u5708\u5B9A\u4E86 for \u5FAA\u73AF\u4EE3\u7801\u5757\u7684\u8303\u56F4\u3002\u4F46\u662F\u5728\u4E00\u4E9B\u7279\u6B8A\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u53EF\u4EE5\u88AB "),Mn={href:"http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF",target:"_blank",rel:"noopener noreferrer"},Bn=n("\u5927\u62EC\u53F7"),Un=n(" \u53D6\u4EE3\u3002"),Gn=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>n<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> n<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token comment"># \u6CA1\u6709 do\uFF01</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;* <span class="token variable">$n</span> *&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># \u6CA1\u6709 done\uFF01</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>
<span class="token comment"># \u8F93\u51FA\uFF1A</span>
<span class="token comment"># * 1 ** 2 ** 3 ** 4 ** 5 ** 6 ** 7 ** 8 ** 9 ** 10 *</span>
<span class="token comment"># \u5E76\u4E14 echo $? \u8FD4\u56DE 0\uFF0C\u56E0\u6B64 Bash \u5E76\u4E0D\u8BA4\u4E3A\u8FD9\u662F\u4E00\u4E2A\u9519\u8BEF\u3002</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>
<span class="token builtin class-name">echo</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>
<span class="token comment">#  \u4F46\u662F\u6CE8\u610F\u5728\u5178\u578B\u7684 for \u5FAA\u73AF for n in [list] ... \u4E2D\uFF0C</span>
<span class="token comment">#+ \u9700\u8981\u5728\u7ED3\u5C3E\u52A0\u4E00\u4E2A\u5206\u53F7\u3002</span>
<span class="token operator">&gt;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
<span class="token punctuation">{</span>  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$n</span> &quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">#               ^</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>
<span class="token comment"># \u611F\u8C22 Yongye \u6307\u51FA\u8FD9\u4E00\u70B9\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="while-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#while-\u5FAA\u73AF" aria-hidden="true">#</a> while \u5FAA\u73AF</h3>`,2),Vn=s("code",null,"while",-1),Wn=n(" \u5FAA\u73AF\u7ED3\u6784\u4F1A\u5728\u5FAA\u73AF\u9876\u90E8\u68C0\u6D4B\u5FAA\u73AF\u6761\u4EF6\uFF0C\u82E5\u5FAA\u73AF\u6761\u4EF6\u4E3A\u771F\uFF08 "),zn={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},Jn=n("\u9000\u51FA\u72B6\u6001"),Kn=n(" \u4E3A0\uFF09\u5219\u5FAA\u73AF\u6301\u7EED\u8FDB\u884C\u3002\u4E0E "),Xn={href:"http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1",target:"_blank",rel:"noopener noreferrer"},Hn=s("code",null,"for",-1),Yn=n(" \u5FAA\u73AF"),jn=n(" \u4E0D\u540C\u7684\u662F\uFF0C"),Qn=s("code",null,"while",-1),Zn=n(" \u5FAA\u73AF\u662F\u5728\u4E0D\u77E5\u9053\u5FAA\u73AF\u6B21\u6570\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u7684\u3002"),ns=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,1),ss=n("\u5728 "),as=s("code",null,"while",-1),es=n(" \u5FAA\u73AF\u7ED3\u6784\u4E2D\uFF0C\u4F60\u4E0D\u4EC5\u53EF\u4EE5\u4F7F\u7528\u50CF "),ps=s("code",null,"if/test",-1),ls=n(" \u4E2D\u90A3\u6837\u7684 "),ts={href:"http://tldp.org/LDP/abs/html/testconstructs.html#TESTCONSTRUCTS1",target:"_blank",rel:"noopener noreferrer"},os=n("\u62EC\u53F7\u7ED3\u6784"),cs=n("\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7528\u9014\u66F4\u5E7F\u6CDB\u7684 "),rs={href:"http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS",target:"_blank",rel:"noopener noreferrer"},is=n("\u53CC\u62EC\u53F7\u7ED3\u6784"),bs=n("\uFF08"),us=s("code",null,"while [[ condition ]]",-1),ms=n("\uFF09\u3002"),ks=s("p",null,[n("\u5C31\u50CF\u5728 "),s("code",null,"for"),n(" \u5FAA\u73AF\u4E2D\u90A3\u6837\uFF0C\u5C06 "),s("code",null,"do"),n(" \u548C\u5FAA\u73AF\u6761\u4EF6\u653E\u5728\u540C\u4E00\u884C\u65F6\u9700\u8981\u52A0\u4E00\u4E2A\u5206\u53F7\u3002")],-1),ds=s("p",null,[s("code",null,"while [ condition ] ; do")],-1),hs=n("\u5728 "),_s=s("code",null,"while",-1),gs=n(" \u5FAA\u73AF\u4E2D\uFF0C\u62EC\u53F7\u7ED3\u6784 "),vs={href:"http://tldp.org/LDP/abs/html/loops1.html#WHILENOBRACKETS",target:"_blank",rel:"noopener noreferrer"},fs=n("\u5E76\u4E0D\u662F\u5FC5\u987B\u5B58\u5728\u7684"),qs=n("\u3002\u6BD4\u5982\u8BF4 "),ws={href:"http://tldp.org/LDP/abs/html/internal.html#GETOPTSX",target:"_blank",rel:"noopener noreferrer"},ys=s("code",null,"getopts",-1),$s=n(" \u7ED3\u6784"),Es=n("\u3002"),xs=p(`<p>\u6837\u4F8B 11-15. \u7B80\u5355\u7684 <code>while</code> \u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var0</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var0</span>&quot;</span> -lt <span class="token string">&quot;<span class="token variable">$LIMIT</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token comment">#      ^                    ^</span>
<span class="token comment"># \u5FC5\u987B\u6709\u7A7A\u683C\uFF0C\u56E0\u4E3A\u8FD9\u662F\u6D4B\u8BD5\u7ED3\u6784</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$var0</span> &quot;</span>        <span class="token comment"># -n \u4E0D\u4F1A\u53E6\u8D77\u4E00\u884C</span>
  <span class="token comment">#             ^           \u7A7A\u683C\u7528\u6765\u5206\u5F00\u8F93\u51FA\u7684\u6570\u5B57\u3002</span>
  
  <span class="token assign-left variable">var0</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $var0 + <span class="token number">1</span><span class="token variable">\`</span></span>   <span class="token comment"># var0=$(($var0+1))  \u6548\u679C\u76F8\u540C\u3002</span>
                          <span class="token comment"># var0=$((var0 + 1)) \u6548\u679C\u76F8\u540C\u3002</span>
                          <span class="token comment"># let &quot;var0 += 1&quot;    \u6548\u679C\u76F8\u540C\u3002</span>
<span class="token keyword">done</span>                      <span class="token comment"># \u8FD8\u6709\u8BB8\u591A\u5176\u4ED6\u7684\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u8FBE\u5230\u76F8\u540C\u7684\u6548\u679C\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u6837\u4F8B 11-16. \u53E6\u4E00\u4E2A\u4F8B\u5B50</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span>
                               <span class="token comment"># \u7B49\u4EF7\u4E8E\uFF1A</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var1</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;end&quot;</span> <span class="token punctuation">]</span>     <span class="token comment"># while test &quot;$var1&quot; != &quot;end&quot;</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Input variable #1 (end to exit) &quot;</span>
  <span class="token builtin class-name">read</span> var1                    <span class="token comment"># \u4E0D\u662F &#39;read $var1&#39; \uFF08\u4E3A\u4EC0\u4E48\uFF1F\uFF09\u3002</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;variable #1 = <span class="token variable">$var1</span>&quot;</span>   <span class="token comment"># \u56E0\u4E3A\u5B58\u5728 &quot;#&quot;\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528\u5F15\u53F7\u3002</span>
  <span class="token comment"># \u5982\u679C\u8F93\u5165\u7684\u662F &quot;end&quot;\uFF0C\u4E5F\u5C06\u4F1A\u5728\u8FD9\u91CC\u8F93\u51FA\u3002</span>
  <span class="token comment"># \u5728\u7ED3\u675F\u672C\u8F6E\u5FAA\u73AF\u4E4B\u524D\u90FD\u4E0D\u4F1A\u518D\u6D4B\u8BD5\u5FAA\u73AF\u6761\u4EF6\u4E86\u3002</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4E00\u4E2A <code>while</code> \u5FAA\u73AF\u53EF\u4EE5\u6709\u591A\u4E2A\u6D4B\u8BD5\u6761\u4EF6\uFF0C\u4F46\u53EA\u6709\u6700\u540E\u7684\u90A3\u4E00\u4E2A\u6761\u4EF6\u51B3\u5B9A\u4E86\u5FAA\u73AF\u662F\u5426\u7EC8\u6B62\u3002\u8FD9\u662F\u4E00\u79CD\u4F60\u9700\u8981\u6CE8\u610F\u5230\u7684\u4E0D\u540C\u4E8E\u5176\u4ED6\u5FAA\u73AF\u7684\u8BED\u6CD5\u3002</p><p>\u6837\u4F8B 11-17. \u591A\u6761\u4EF6 <code>while</code> \u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span>unset
<span class="token assign-left variable">previous</span><span class="token operator">=</span><span class="token variable">$var1</span>

<span class="token keyword">while</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;previous-variable = <span class="token variable">$previous</span>&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token assign-left variable">previous</span><span class="token operator">=</span><span class="token variable">$var1</span>
      <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var1</span>&quot;</span> <span class="token operator">!=</span> end <span class="token punctuation">]</span> <span class="token comment"># \u8BB0\u5F55\u4E0B $var1 \u4E4B\u524D\u7684\u503C\u3002</span>
      <span class="token comment"># \u5728 while \u5FAA\u73AF\u4E2D\u67094\u4E2A\u6761\u4EF6\uFF0C\u4F46\u53EA\u6709\u6700\u540E\u7684\u90A3\u4E2A\u63A7\u5236\u5FAA\u73AF\u3002</span>
      <span class="token comment"># \u6700\u540E\u4E00\u4E2A\u6761\u4EF6\u7684\u9000\u51FA\u72B6\u6001\u624D\u4F1A\u88AB\u8BB0\u5F55\u3002</span>
<span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Input variable #1 (end to exit) &quot;</span>
  <span class="token builtin class-name">read</span> var1
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;variable #1 = <span class="token variable">$var1</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># \u731C\u731C\u8FD9\u662F\u600E\u6837\u5B9E\u73B0\u7684\u3002</span>
<span class="token comment"># \u8FD9\u662F\u4E00\u4E2A\u5F88\u5C0F\u7684\u6280\u5DE7\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,7),Is=n("\u5C31\u50CF "),Ss=s("code",null,"for",-1),Ls=n(" \u5FAA\u73AF\u4E00\u6837\uFF0C "),Ds=s("code",null,"while",-1),Rs=n(" \u5FAA\u73AF\u4E5F\u53EF\u4EE5\u4F7F\u7528\u53CC\u5706\u62EC\u53F7\u7ED3\u6784\u5199\u5F97\u50CFC\u8BED\u8A00\u90A3\u6837\uFF08\u4E5F\u53EF\u4EE5\u67E5\u770B"),Ps={href:"http://tldp.org/LDP/abs/html/dblparens.html#CVARS",target:"_blank",rel:"noopener noreferrer"},Fs=n("\u6837\u4F8B 8-5"),Ts=n("\uFF09\u3002"),Cs=p(`<p>\u6837\u4F8B 11-18. C\u8BED\u8A00\u98CE\u683C\u7684 <code>while</code> \u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># wh-loopc.sh: \u5728 &quot;while&quot; \u5FAA\u73AF\u4E2D\u8BA1\u6570\u523010\u3002</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>                 <span class="token comment"># \u5FAA\u73AF10\u6B21\u3002</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> -le <span class="token variable">$LIMIT</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;a+=1&quot;</span>
<span class="token keyword">done</span>                     <span class="token comment"># \u6CA1\u4EC0\u4E48\u597D\u5947\u602A\u7684\u5427\u3002</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># +==============================================+</span>

<span class="token comment"># \u73B0\u5728\u6211\u4EEC\u7528C\u8BED\u8A00\u98CE\u683C\u518D\u5199\u4E00\u6B21\u3002</span>

<span class="token variable"><span class="token punctuation">((</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">))</span></span>      <span class="token comment"># a=1</span>
<span class="token comment"># \u53CC\u5706\u62EC\u53F7\u7ED3\u6784\u5141\u8BB8\u50CFC\u8BED\u8A00\u4E00\u6837\u5728\u8D4B\u503C\u8BED\u53E5\u4E2D\u4F7F\u7528\u7A7A\u683C\u3002</span>

<span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">&lt;=</span> LIMIT <span class="token punctuation">))</span></span>   <span class="token comment">#  \u53CC\u5706\u62EC\u53F7\u7ED3\u6784\uFF0C</span>
<span class="token keyword">do</span>                       <span class="token comment">#+ \u5E76\u4E14\u6CA1\u6709\u4F7F\u7528 &quot;$&quot;\u3002</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>
  <span class="token variable"><span class="token punctuation">((</span>a <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">))</span></span>             <span class="token comment"># let &quot;a+=1&quot;</span>
  <span class="token comment"># \u662F\u7684\uFF0C\u5C31\u662F\u8FD9\u6837\u3002</span>
  <span class="token comment"># \u53CC\u5706\u62EC\u53F7\u7ED3\u6784\u5141\u8BB8\u50CFC\u8BED\u8A00\u4E00\u6837\u81EA\u589E\u4E00\u4E2A\u53D8\u91CF\u3002</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># \u8FD9\u53EF\u4EE5\u8BA9C\u548CJava\u7A0B\u5E8F\u733F\u611F\u89C9\u66F4\u52A0\u8212\u670D\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,2),Os=n("\u5728\u6D4B\u8BD5\u90E8\u5206\uFF0C"),As=s("code",null,"while",-1),Ns=n(" \u5FAA\u73AF\u53EF\u4EE5\u8C03\u7528 "),Ms={href:"http://tldp.org/LDP/abs/html/functions.html#FUNCTIONREF",target:"_blank",rel:"noopener noreferrer"},Bs=n("\u51FD\u6570"),Us=n("\u3002"),Gs=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token function-name function">condition</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token variable"><span class="token punctuation">((</span>t<span class="token operator">++</span><span class="token punctuation">))</span></span>
  
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$t</span> -lt <span class="token number">5</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">return</span> <span class="token number">0</span>  <span class="token comment"># true \u771F</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">return</span> <span class="token number">1</span>  <span class="token comment"># false \u5047</span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">while</span> condition
<span class="token comment">#     ^^^^^^^^^</span>
<span class="token comment">#     \u8C03\u7528\u51FD\u6570\u5FAA\u73AF\u56DB\u6B21\u3002</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Still going: t = <span class="token variable">$t</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># Still going: t = 1</span>
<span class="token comment"># Still going: t = 2</span>
<span class="token comment"># Still going: t = 3</span>
<span class="token comment"># Still going: t = 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,1),Vs=n("\u548C "),Ws={href:"http://tldp.org/LDP/abs/html/testconstructs.html#IFGREPREF",target:"_blank",rel:"noopener noreferrer"},zs=n("if \u6D4B\u8BD5"),Js=n(" \u7ED3\u6784\u4E00\u6837\uFF0C"),Ks=s("code",null,"while",-1),Xs=n(" \u5FAA\u73AF\u4E5F\u53EF\u4EE5\u7701\u7565\u62EC\u53F7\u3002"),Hs=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">while</span> condition
<span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,1),Ys=n("\u5728 "),js=s("code",null,"while",-1),Qs=n(" \u5FAA\u73AF\u4E2D\u7ED3\u5408 "),Zs={href:"http://tldp.org/LDP/abs/html/internal.html#READREF",target:"_blank",rel:"noopener noreferrer"},na=s("code",null,"read",-1),sa=n(" \u547D\u4EE4\uFF0C\u6211\u4EEC\u5C31\u5F97\u5230\u4E86\u4E00\u4E2A\u975E\u5E38\u6613\u4E8E\u4F7F\u7528\u7684 "),aa={href:"http://tldp.org/LDP/abs/html/internal.html#WHILEREADREF",target:"_blank",rel:"noopener noreferrer"},ea=s("code",null,"while read",-1),pa=n(" \u7ED3\u6784\u3002\u5B83\u53EF\u4EE5\u7528\u6765\u8BFB\u53D6\u548C\u89E3\u6790\u6587\u4EF6\u3002"),la=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token variable">$filename</span> <span class="token operator">|</span>    <span class="token comment"># \u4ECE\u6587\u4EF6\u83B7\u5F97\u8F93\u5165\u3002</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line    <span class="token comment"># \u53EA\u8981\u8FD8\u6709\u53EF\u4EE5\u8BFB\u5165\u7684\u884C\uFF0C\u5FAA\u73AF\u5C31\u7EE7\u7EED\u3002</span>
<span class="token keyword">do</span>
  <span class="token punctuation">..</span>.
<span class="token keyword">done</span>

<span class="token comment"># ==================== \u6458\u81EA\u6837\u4F8B\u811A\u672C &quot;sd.sh&quot; =================== #</span>

  <span class="token keyword">while</span> <span class="token builtin class-name">read</span> value   <span class="token comment"># \u4E00\u6B21\u8BFB\u5165\u4E00\u4E2A\u6570\u636E\u3002</span>
  <span class="token keyword">do</span>
    <span class="token assign-left variable">rt</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=<span class="token variable">$SC</span>; <span class="token variable">$rt</span> + <span class="token variable">$value</span>&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
    <span class="token variable"><span class="token punctuation">((</span> ct<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token keyword">done</span>
  
  <span class="token assign-left variable">am</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=<span class="token variable">$SC</span>; <span class="token variable">$rt</span> / <span class="token variable">$ct</span>&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
  
  <span class="token builtin class-name">echo</span> <span class="token variable">$am</span><span class="token punctuation">;</span> <span class="token builtin class-name">return</span> <span class="token variable">$ct</span>   <span class="token comment"># \u8FD9\u4E2A\u529F\u80FD\u201C\u8FD4\u56DE\u201D\u4E862\u4E2A\u503C\u3002</span>
  <span class="token comment"># \u6CE8\u610F\uFF1A\u8FD9\u4E2A\u6280\u5DE7\u5728 $ct &gt; 255 \u7684\u60C5\u51B5\u4E0B\u4F1A\u5931\u6548\u3002</span>
  <span class="token comment"># \u5982\u679C\u8981\u64CD\u4F5C\u66F4\u5927\u7684\u6570\u5B57\uFF0C\u6CE8\u91CA\u6389\u4E0A\u9762\u7684 &quot;return $ct&quot; \u5C31\u53EF\u4EE5\u4E86\u3002</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token string">&quot;<span class="token variable">$datafile</span>&quot;</span>   <span class="token comment"># \u4F20\u5165\u6570\u636E\u6587\u4EF6\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,1),ta=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"note",loading:"lazy"},null,-1),oa=n(" \u5728 "),ca=s("code",null,"while",-1),ra=n(" \u5FAA\u73AF\u540E\u9762\u53EF\u4EE5\u901A\u8FC7 < \u5C06\u6807\u51C6\u8F93\u5165 "),ia={href:"http://tldp.org/LDP/abs/html/redircb.html#REDIRREF",target:"_blank",rel:"noopener noreferrer"},ba=n("\u91CD\u5B9A\u4F4D\u5230\u6587\u4EF6"),ua=n(" \u4E2D\u3002 "),ma=s("code",null,"while",-1),ka=n(" \u5FAA\u73AF\u540C\u6837\u53EF\u4EE5 "),da={href:"http://tldp.org/LDP/abs/html/internal.html#READPIPEREF",target:"_blank",rel:"noopener noreferrer"},ha=n("\u901A\u8FC7\u7BA1\u9053"),_a=n(" \u4F20\u5165\u6807\u51C6\u8F93\u5165\u4E2D\u3002"),ga=p(`<h3 id="until" tabindex="-1"><a class="header-anchor" href="#until" aria-hidden="true">#</a> until</h3><p>\u4E0E <code>while</code> \u5FAA\u73AF\u76F8\u53CD\uFF0C<code>until</code> \u5FAA\u73AF\u6D4B\u8BD5\u5176\u9876\u90E8\u7684\u5FAA\u73AF\u6761\u4EF6\uFF0C\u76F4\u5230\u5176\u4E2D\u7684\u6761\u4EF6\u4E3A\u771F\u65F6\u505C\u6B62\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">until</span> <span class="token punctuation">[</span> condition-is-true <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  commands<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6CE8\u610F\u5230\uFF0C\u8DDF\u5176\u4ED6\u7684\u4E00\u4E9B\u7F16\u7A0B\u8BED\u8A00\u4E0D\u540C\uFF0C<code>until</code> \u5FAA\u73AF\u7684\u6D4B\u8BD5\u6761\u4EF6\u5728\u5FAA\u73AF\u9876\u90E8\u3002</p><p>\u5C31\u50CF\u5728 <code>for</code> \u5FAA\u73AF\u4E2D\u90A3\u6837\uFF0C\u5C06 <code>do</code> \u548C\u5FAA\u73AF\u6761\u4EF6\u653E\u5728\u540C\u4E00\u884C\u65F6\u9700\u8981\u52A0\u4E00\u4E2A\u5206\u53F7\u3002</p><p><code>until[ condition-is-true ] ; do</code></p><p>\u6837\u4F8B 11-19. <code>until</code> \u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">END_CONDITION</span><span class="token operator">=</span>end

<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">$END_CONDITION</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token comment"># \u5728\u5FAA\u73AF\u9876\u90E8\u6D4B\u8BD5\u6761\u4EF6\u3002</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Input variable #1 &quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;(<span class="token variable">$END_CONDITION</span> to exit)&quot;</span>
  <span class="token builtin class-name">read</span> var1
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;variable #1 = <span class="token variable">$var1</span>&quot;</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token comment">#                ---                   #</span>

<span class="token comment">#  \u5C31\u50CF &quot;for&quot; \u548C &quot;while&quot; \u5FAA\u73AF\u4E00\u6837\uFF0C</span>
<span class="token comment">#+ &quot;until&quot; \u5FAA\u73AF\u4E5F\u53EF\u4EE5\u5199\u7684\u50CFC\u8BED\u8A00\u4E00\u6837\u3002</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">until</span> <span class="token variable"><span class="token punctuation">((</span> var <span class="token operator">&gt;</span> LIMIT <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>  <span class="token comment"># ^^ ^     ^     ^^   \u6CA1\u6709\u65B9\u62EC\u53F7\uFF0C\u6CA1\u6709 $ \u524D\u7F00\u3002</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$var</span> &quot;</span>
  <span class="token variable"><span class="token punctuation">((</span> var<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">done</span>    <span class="token comment"># 0 1 2 3 4 5 6 7 8 9 10</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u5982\u4F55\u5728 <code>for</code>\uFF0C<code>while</code> \u548C <code>until</code> \u4E4B\u95F4\u505A\u51FA\u9009\u62E9\uFF1F\u6211\u4EEC\u77E5\u9053\u5728C\u8BED\u8A00\u4E2D\uFF0C\u5728\u5DF2\u77E5\u5FAA\u73AF\u6B21\u6570\u7684\u60C5\u51B5\u4E0B\u66F4\u52A0\u503E\u5411\u4E8E\u4F7F\u7528 <code>for</code> \u5FAA\u73AF\u3002\u4F46\u662F\u5728Bash\u4E2D\u60C5\u51B5\u53EF\u80FD\u66F4\u52A0\u590D\u6742\u4E00\u4E9B\u3002Bash\u4E2D\u7684 <code>for</code> \u5FAA\u73AF\u76F8\u6BD4\u8D77\u5176\u4ED6\u8BED\u8A00\u6765\u8BF4\uFF0C\u7ED3\u6784\u66F4\u52A0\u677E\u6563\uFF0C\u4F7F\u7528\u66F4\u52A0\u7075\u6D3B\u3002\u56E0\u6B64\u4F7F\u7528\u4F60\u8BA4\u4E3A\u6700\u7B80\u5355\u7684\u5C31\u597D\u3002</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>\u8FED\u4EE3\uFF1A\u91CD\u590D\u6267\u884C\u4E00\u4E2A\u6216\u4E00\u7EC4\u547D\u4EE4\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u4F7F\u7528<code>while</code>\u6216\u8005<code>until</code>\u8FDB\u884C\u63A7\u5236\u3002 <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,11);function va(fa,qa){const a=t("ExternalLinkIcon");return r(),o(c,null,[b,s("p",null,[u,s("a",m,[k,e(a)]),d]),h,s("p",null,[_,s("a",g,[v,e(a)]),f,s("a",q,[w,e(a)]),y]),$,s("p",null,[E,x,I,S,L,D,R,s("a",P,[F,e(a)]),T,s("a",C,[O,e(a)]),A]),N,s("p",null,[M,B,U,s("a",G,[V,e(a)]),W,s("a",z,[J,e(a)]),K,s("a",X,[H,e(a)]),Y,s("a",j,[Q,e(a)]),Z]),nn,s("p",null,[sn,s("a",an,[en,e(a)]),pn]),ln,s("p",null,[tn,on,cn,s("a",rn,[bn,e(a)]),un]),mn,s("p",null,[kn,s("a",dn,[hn,e(a)]),_n]),gn,s("p",null,[vn,s("a",fn,[qn,e(a)]),wn,s("a",yn,[$n,e(a)]),En,s("a",xn,[In,e(a)]),Sn]),Ln,s("blockquote",null,[s("p",null,[Dn,Rn,s("a",Pn,[Fn,e(a)]),Tn,Cn,On,An,Nn,s("a",Mn,[Bn,e(a)]),Un])]),Gn,s("p",null,[Vn,Wn,s("a",zn,[Jn,e(a)]),Kn,s("a",Xn,[Hn,Yn,e(a)]),jn,Qn,Zn]),ns,s("p",null,[ss,as,es,ps,ls,s("a",ts,[os,e(a)]),cs,s("a",rs,[is,e(a)]),bs,us,ms]),ks,ds,s("p",null,[hs,_s,gs,s("a",vs,[fs,e(a)]),qs,s("a",ws,[ys,$s,e(a)]),Es]),xs,s("p",null,[Is,Ss,Ls,Ds,Rs,s("a",Ps,[Fs,e(a)]),Ts]),Cs,s("p",null,[Os,As,Ns,s("a",Ms,[Bs,e(a)]),Us]),Gs,s("blockquote",null,[s("p",null,[Vs,s("a",Ws,[zs,e(a)]),Js,Ks,Xs])]),Hs,s("p",null,[Ys,js,Qs,s("a",Zs,[na,e(a)]),sa,s("a",aa,[ea,e(a)]),pa]),la,s("blockquote",null,[s("p",null,[ta,oa,ca,ra,s("a",ia,[ba,e(a)]),ua,ma,ka,s("a",da,[ha,e(a)]),_a])]),ga],64)}var ya=l(i,[["render",va],["__file","11_1_loops.html.vue"]]);export{ya as default};
