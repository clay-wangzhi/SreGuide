import{_ as p,r as l,c as o,a as n,b as e,F as t,e as c,d as s,o as r}from"./app.f4c852e1.js";const b={},i=c(`<h1 id="_11-3-\u5FAA\u73AF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_11-3-\u5FAA\u73AF\u63A7\u5236" aria-hidden="true">#</a> 11.3 \u5FAA\u73AF\u63A7\u5236</h1><blockquote><p>Tournez cent tours, tournez mille tours,</p><p>Tournez souvent et tournez toujours . . .</p><p>\u2014\u2014\u4FDD\u5C14\xB7\u9B4F\u5C14\u4F26\uFF0C\u300A\u6728\u9A6C\u300B</p></blockquote><p>\u672C\u8282\u4ECB\u7ECD\u4E24\u4E2A\u4F1A\u5F71\u54CD\u5FAA\u73AF\u884C\u4E3A\u7684\u547D\u4EE4\u3002</p><h3 id="break-continue" tabindex="-1"><a class="header-anchor" href="#break-continue" aria-hidden="true">#</a> break, continue</h3><p><code>break</code> \u548C <code>continue</code> \u547D\u4EE4<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>\u7684\u4F5C\u7528\u548C\u5728\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684\u4F5C\u7528\u4E00\u6837\u3002<code>break</code> \u7528\u6765\u4E2D\u6B62\uFF08\u8DF3\u51FA\uFF09\u5FAA\u73AF\uFF0C\u800C <code>continue</code> \u5219\u662F\u7565\u8FC7\u672A\u6267\u884C\u7684\u5FAA\u73AF\u90E8\u5206\uFF0C\u76F4\u63A5\u8FDB\u884C\u4E0B\u4E00\u6B21\u5FAA\u73AF\u3002</p><p>\u6837\u4F8B 11-21. \u5FAA\u73AF\u4E2D <code>break</code> \u4E0E <code>continue</code> \u7684\u4F5C\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">19</span>  <span class="token comment"># \u5FAA\u73AF\u4E0A\u754C</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Printing Numbers 1 through 20 (but not 3 and 11).&quot;</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> -le <span class="token string">&quot;<span class="token variable">$LIMIT</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$a<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
 
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> -eq <span class="token number">3</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> -eq <span class="token number">11</span> <span class="token punctuation">]</span>  <span class="token comment"># \u9664\u4E86 3 \u548C 11\u3002</span>
 <span class="token keyword">then</span>
   <span class="token builtin class-name">continue</span>      <span class="token comment"># \u7565\u8FC7\u672C\u6B21\u5FAA\u73AF\u7684\u5269\u4F59\u90E8\u5206\u3002</span>
 <span class="token keyword">fi</span>
 
 <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span> &quot;</span>   <span class="token comment"># \u5F53 a \u7B49\u4E8E 3 \u548C 11 \u65F6\uFF0C\u5C06\u4E0D\u4F1A\u6267\u884C\u8FD9\u6761\u8BED\u53E5\u3002</span>
<span class="token keyword">done</span>

<span class="token comment"># \u601D\u8003\uFF1A</span>
<span class="token comment"># \u4E3A\u4EC0\u4E48\u5FAA\u73AF\u4E0D\u4F1A\u8F93\u51FA\u523020\uFF1F</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> Printing Numbers <span class="token number">1</span> through <span class="token number">20</span>, but something happens after <span class="token number">2</span>.

<span class="token comment">##################################################################</span>

<span class="token comment"># \u7528 &#39;break&#39; \u4EE3\u66FF\u4E86 &#39;continue&#39;\u3002</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> -le <span class="token string">&quot;<span class="token variable">$LIMIT</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$a<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
 
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> -gt <span class="token number">2</span> <span class="token punctuation">]</span>
 <span class="token keyword">then</span>
   <span class="token builtin class-name">break</span>  <span class="token comment"># \u4E2D\u6B62\u5FAA\u73AF\u3002</span>
 <span class="token keyword">fi</span>
 
 <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p><code>break</code> \u547D\u4EE4\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\u3002\u666E\u901A\u7684 <code>break</code> \u547D\u4EE4\u4EC5\u4EC5\u8DF3\u51FA\u5176\u6240\u5728\u7684\u90A3\u5C42\u5FAA\u73AF\uFF0C\u800C <code>break N</code> \u547D\u4EE4\u5219\u53EF\u4EE5\u8DF3\u51FA\u5176\u4E0A N \u5C42\u7684\u5FAA\u73AF\u3002</p><p>\u6837\u4F8B 11-22. \u8DF3\u51FA\u591A\u5C42\u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># break-levels.sh: \u8DF3\u51FA\u5FAA\u73AF.</span>

<span class="token comment"># &quot;break N&quot; \u8DF3\u51FA N \u5C42\u5FAA\u73AF\u3002</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">outerloop</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Group <span class="token variable">$outerloop</span>:   &quot;</span>

  <span class="token comment"># ------------------------------------------</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">innerloop</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$innerloop</span> &quot;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$innerloop</span>&quot;</span> -eq <span class="token number">3</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
      <span class="token builtin class-name">break</span>  <span class="token comment"># \u5C1D\u8BD5\u4E00\u4E0B break 2 \u770B\u770B\u4F1A\u53D1\u751F\u4EC0\u4E48\u3002</span>
             <span class="token comment"># \uFF08\u5B83\u540C\u65F6\u4E2D\u6B62\u4E86\u5185\u5C42\u548C\u5916\u5C42\u5FAA\u73AF\u3002\uFF09</span>
    <span class="token keyword">fi</span>
  <span class="token keyword">done</span>
  <span class="token comment"># ------------------------------------------</span>

  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u4E0E <code>break</code> \u7C7B\u4F3C\uFF0C<code>continue</code> \u4E5F\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\u3002\u666E\u901A\u7684 <code>continue</code> \u547D\u4EE4\u4EC5\u4EC5\u5F71\u54CD\u5176\u6240\u5728\u7684\u90A3\u5C42\u5FAA\u73AF\uFF0C\u800C <code>continue N</code> \u547D\u4EE4\u5219\u53EF\u4EE5\u5F71\u54CD\u5176\u4E0A N \u5C42\u7684\u5FAA\u73AF\u3002</p><p>\u6837\u4F8B 11-23. <code>continue</code> \u5F71\u54CD\u5916\u5C42\u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># &quot;continue N&quot; \u547D\u4EE4\u53EF\u4EE5\u5F71\u54CD\u5176\u4E0A N \u5C42\u5FAA\u73AF\u3002</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">outer</span> <span class="token keyword">in</span> I II III IV V           <span class="token comment"># \u5916\u5C42\u5FAA\u73AF</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Group <span class="token variable">$outer</span>: &quot;</span>
  
  <span class="token comment"># --------------------------------------------------------------------</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">inner</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>  <span class="token comment"># \u5185\u5C42\u5FAA\u73AF</span>
  <span class="token keyword">do</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$inner</span>&quot;</span> -eq <span class="token number">7</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;<span class="token variable">$outer</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;III&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token keyword">then</span>
      <span class="token builtin class-name">continue</span> <span class="token number">2</span>  <span class="token comment"># \u5F71\u54CD\u4E24\u5C42\u5FAA\u73AF\uFF0C\u5305\u62EC\u201C\u5916\u5C42\u5FAA\u73AF\u201D\u3002</span>
                  <span class="token comment"># \u5C06\u5176\u66FF\u6362\u4E3A\u666E\u901A\u7684 &quot;continue&quot;\uFF0C\u90A3\u4E48\u53EA\u4F1A\u5F71\u54CD\u5185\u5C42\u5FAA\u73AF\u3002</span>
    <span class="token keyword">fi</span>
    
    <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$inner</span> &quot;</span>  <span class="token comment"># 7 8 9 10 \u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728 &quot;Group III.&quot;\u4E2D\u3002</span>
  <span class="token keyword">done</span>
  <span class="token comment"># --------------------------------------------------------------------</span>

<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># \u601D\u8003\uFF1A</span>
<span class="token comment"># \u60F3\u4E00\u4E2A &quot;continue N&quot; \u5728\u811A\u672C\u4E2D\u7684\u5B9E\u9645\u5E94\u7528\u60C5\u51B5\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u6837\u4F8B 11-24. \u771F\u5B9E\u73AF\u5883\u4E2D\u7684 <code>continue N</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Albert Reiner \u4E3E\u51FA\u4E86\u4E00\u4E2A\u5982\u4F55\u4F7F\u7528 &quot;continue N&quot; \u7684\u4F8B\u5B50\uFF1A</span>
<span class="token comment"># ---------------------------------------------------</span>

<span class="token comment">#  \u5982\u679C\u6211\u6709\u8BB8\u591A\u4EFB\u52A1\u9700\u8981\u8FD0\u884C\uFF0C\u5E76\u4E14\u8FD0\u884C\u6240\u9700\u8981\u7684\u6570\u636E\u90FD\u4EE5\u6587\u4EF6\u7684\u5F62</span>
<span class="token comment">#+ \u5F0F\u5B58\u5728\u6587\u4EF6\u5939\u4E2D\u3002\u73B0\u5728\u6709\u591A\u53F0\u8BBE\u5907\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF0C\u6211\u60F3\u5C06\u4EFB</span>
<span class="token comment">#+ \u52A1\u5206\u914D\u7ED9\u8FD9\u4E9B\u4E0D\u540C\u7684\u8BBE\u5907\u6765\u5B8C\u6210\u3002</span>
<span class="token comment">#  \u90A3\u4E48\u6211\u901A\u5E38\u4F1A\u5728\u6BCF\u53F0\u8BBE\u5907\u4E0A\u6267\u884C\u4E0B\u9762\u7684\u4EE3\u7801\uFF1A</span>

<span class="token keyword">while</span> true:
<span class="token keyword">do</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> .iso.*
  <span class="token keyword">do</span>
    <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$n</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;.iso.opts&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
    <span class="token assign-left variable">beta</span><span class="token operator">=</span><span class="token variable">\${n<span class="token operator">#</span>.iso.}</span>
    <span class="token punctuation">[</span> -r .Iso.<span class="token variable">$beta</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
    <span class="token punctuation">[</span> -r .lock.<span class="token variable">$beta</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sleep</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
    lockfile -r0 .lock.<span class="token variable">$beta</span> <span class="token operator">||</span> <span class="token builtin class-name">continue</span>
    <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$beta</span>: &quot;</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>
    run-isotherm <span class="token variable">$beta</span>
    <span class="token function">date</span>
    <span class="token function">ls</span> -alF .Iso.<span class="token variable">$beta</span>
    <span class="token punctuation">[</span> -r .Iso.<span class="token variable">$beta</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -rf .lock.<span class="token variable">$beta</span>
    <span class="token builtin class-name">continue</span> <span class="token number">2</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">break</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># \u8FD9\u4E2A\u811A\u672C\u4E2D\u51FA\u73B0\u7684 sleep N \u53EA\u9488\u5BF9\u8FD9\u4E2A\u811A\u672C\uFF0C\u901A\u5E38\u7684\u5F62\u5F0F\u662F\uFF1A</span>

<span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">job</span> <span class="token keyword">in</span> <span class="token punctuation">{</span>pattern<span class="token punctuation">}</span>
  <span class="token keyword">do</span>
    <span class="token punctuation">{</span>job already <span class="token keyword">done</span> or running<span class="token punctuation">}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
    <span class="token punctuation">{</span>mark job as running, <span class="token keyword">do</span> job, mark job as done<span class="token punctuation">}</span>
    <span class="token builtin class-name">continue</span> <span class="token number">2</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">break</span>        <span class="token comment"># \u6216\u8005\u4F7F\u7528\u7C7B\u4F3C \`sleep 600\` \u8FD9\u6837\u7684\u8BED\u53E5\u6765\u9632\u6B62\u811A\u672C\u7ED3\u675F\u3002</span>
<span class="token keyword">done</span>

<span class="token comment">#  \u8FD9\u6837\u505A\u53EF\u4EE5\u4FDD\u8BC1\u811A\u672C\u53EA\u4F1A\u5728\u6CA1\u6709\u4EFB\u52A1\u65F6\uFF08\u5305\u62EC\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u6DFB\u52A0\u7684\u4EFB\u52A1\uFF09</span>
<span class="token comment">#+ \u624D\u4F1A\u505C\u6B62\u3002\u5408\u7406\u4F7F\u7528\u6587\u4EF6\u9501\u4FDD\u8BC1\u591A\u53F0\u8BBE\u5907\u53EF\u4EE5\u65E0\u91CD\u590D\u7684\u5E76\u884C\u6267\u884C\u4EFB\u52A1\uFF08\u8FD9</span>
<span class="token comment">#+ \u5728\u6211\u7684\u8BBE\u5907\u4E0A\u901A\u5E38\u4F1A\u6D88\u8017\u597D\u51E0\u4E2A\u5C0F\u65F6\uFF0C\u6240\u4EE5\u6211\u60F3\u907F\u514D\u91CD\u590D\u8BA1\u7B97\uFF09\u3002\u5E76\u4E14\uFF0C</span>
<span class="token comment">#+ \u56E0\u4E3A\u6BCF\u6B21\u603B\u662F\u4ECE\u5934\u5F00\u59CB\u641C\u7D22\u6587\u4EF6\uFF0C\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7\u6587\u4EF6\u540D\u51B3\u5B9A\u6267\u884C\u7684\u5148\u540E</span>
<span class="token comment">#+ \u987A\u5E8F\u3002\u5F53\u7136\uFF0C\u4F60\u53EF\u4EE5\u4E0D\u4F7F\u7528 &#39;continue 2&#39; \u6765\u5B8C\u6210\u8FD9\u4E9B\uFF0C\u4F46\u662F\u4F60\u5FC5\u987B</span>
<span class="token comment">#+ \u6DFB\u52A0\u4EE3\u7801\u53BB\u68C0\u6D4B\u67D0\u9879\u4EFB\u52A1\u662F\u5426\u5B8C\u6210\uFF08\u4EE5\u6B64\u5224\u65AD\u662F\u5426\u53EF\u4EE5\u6267\u884C\u4E0B\u4E00\u9879\u4EFB\u52A1\u6216</span>
<span class="token comment">#+ \u7EC8\u6B62\u3001\u4F11\u7720\u4E00\u6BB5\u65F6\u95F4\u518D\u6267\u884C\u4E0B\u4E00\u9879\u4EFB\u52A1\uFF09\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> <code>continue N</code> \u7ED3\u6784\u4E0D\u6613\u7406\u89E3\u5E76\u4E14\u53EF\u80FD\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\u6709\u6B67\u4E49\uFF0C\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</p></blockquote><hr class="footnotes-sep">`,17),u={class:"footnotes"},k={class:"footnotes-list"},m={id:"footnote1",class:"footnote-item"},d=s("\u8FD9\u4E24\u4E2A\u547D\u4EE4\u662F "),h={href:"http://tldp.org/LDP/abs/html/internal.html#BUILTINREF",target:"_blank",rel:"noopener noreferrer"},f=s("\u5185\u5EFA\u547D\u4EE4"),v=s("\uFF0C\u800C\u53E6\u5916\u7684\u5FAA\u73AF\u547D\u4EE4\uFF0C\u5982 "),g={href:"http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"while",-1),q=s(" \u548C "),w={href:"http://tldp.org/LDP/abs/html/testbranch.html#CASEESAC1",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"case",-1),$=s(" \u5219\u662F "),I={href:"http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF",target:"_blank",rel:"noopener noreferrer"},N=s("\u5173\u952E\u8BCD"),x=s("\u3002 "),L=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function E(P,T){const a=l("ExternalLinkIcon");return r(),o(t,null,[i,n("section",u,[n("ol",k,[n("li",m,[n("p",null,[d,n("a",h,[f,e(a)]),v,n("a",g,[_,e(a)]),q,n("a",w,[y,e(a)]),$,n("a",I,[N,e(a)]),x,L])])])])],64)}var D=p(b,[["render",E],["__file","11_3_loop_control.html.vue"]]);export{D as default};
