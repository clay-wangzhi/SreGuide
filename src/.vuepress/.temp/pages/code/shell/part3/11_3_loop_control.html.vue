<template><h1 id="_11-3-循环控制" tabindex="-1"><a class="header-anchor" href="#_11-3-循环控制" aria-hidden="true">#</a> 11.3 循环控制</h1>
<blockquote>
<p>Tournez cent tours, tournez mille tours,</p>
<p>Tournez souvent et tournez toujours . . .</p>
<p>——保尔·魏尔伦，《木马》</p>
</blockquote>
<p>本节介绍两个会影响循环行为的命令。</p>
<h3 id="break-continue" tabindex="-1"><a class="header-anchor" href="#break-continue" aria-hidden="true">#</a> break, continue</h3>
<p><code>break</code> 和 <code>continue</code> 命令<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>的作用和在其他编程语言中的作用一样。<code>break</code> 用来中止（跳出）循环，而 <code>continue</code> 则是略过未执行的循环部分，直接进行下一次循环。</p>
<p>样例 11-21. 循环中 <code>break</code> 与 <code>continue</code> 的作用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">LIMIT</span><span class="token operator">=</span><span class="token number">19</span>  <span class="token comment"># 循环上界</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Printing Numbers 1 through 20 (but not 3 and 11)."</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> -le <span class="token string">"<span class="token variable">$LIMIT</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$a<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
 
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> -eq <span class="token number">3</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> -eq <span class="token number">11</span> <span class="token punctuation">]</span>  <span class="token comment"># 除了 3 和 11。</span>
 <span class="token keyword">then</span>
   <span class="token builtin class-name">continue</span>      <span class="token comment"># 略过本次循环的剩余部分。</span>
 <span class="token keyword">fi</span>
 
 <span class="token builtin class-name">echo</span> -n <span class="token string">"<span class="token variable">$a</span> "</span>   <span class="token comment"># 当 a 等于 3 和 11 时，将不会执行这条语句。</span>
<span class="token keyword">done</span>

<span class="token comment"># 思考：</span>
<span class="token comment"># 为什么循环不会输出到20？</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> Printing Numbers <span class="token number">1</span> through <span class="token number">20</span>, but something happens after <span class="token number">2</span>.

<span class="token comment">##################################################################</span>

<span class="token comment"># 用 'break' 代替了 'continue'。</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> -le <span class="token string">"<span class="token variable">$LIMIT</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$a<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
 
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> -gt <span class="token number">2</span> <span class="token punctuation">]</span>
 <span class="token keyword">then</span>
   <span class="token builtin class-name">break</span>  <span class="token comment"># 中止循环。</span>
 <span class="token keyword">fi</span>
 
 <span class="token builtin class-name">echo</span> -n <span class="token string">"<span class="token variable">$a</span>"</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p><code>break</code> 命令接受一个参数。普通的 <code>break</code> 命令仅仅跳出其所在的那层循环，而 <code>break N</code> 命令则可以跳出其上 N 层的循环。</p>
<p>样例 11-22. 跳出多层循环</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># break-levels.sh: 跳出循环.</span>

<span class="token comment"># "break N" 跳出 N 层循环。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">outerloop</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">"Group <span class="token variable">$outerloop</span>:   "</span>

  <span class="token comment"># ------------------------------------------</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">innerloop</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> -n <span class="token string">"<span class="token variable">$innerloop</span> "</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$innerloop</span>"</span> -eq <span class="token number">3</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
      <span class="token builtin class-name">break</span>  <span class="token comment"># 尝试一下 break 2 看看会发生什么。</span>
             <span class="token comment"># （它同时中止了内层和外层循环。）</span>
    <span class="token keyword">fi</span>
  <span class="token keyword">done</span>
  <span class="token comment"># ------------------------------------------</span>

  <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>与 <code>break</code> 类似，<code>continue</code> 也接受一个参数。普通的 <code>continue</code> 命令仅仅影响其所在的那层循环，而 <code>continue N</code> 命令则可以影响其上 N 层的循环。</p>
<p>样例 11-23. <code>continue</code> 影响外层循环</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># "continue N" 命令可以影响其上 N 层循环。</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">outer</span> <span class="token keyword">in</span> I II III IV V           <span class="token comment"># 外层循环</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> -n <span class="token string">"Group <span class="token variable">$outer</span>: "</span>
  
  <span class="token comment"># --------------------------------------------------------------------</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">inner</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>  <span class="token comment"># 内层循环</span>
  <span class="token keyword">do</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$inner</span>"</span> -eq <span class="token number">7</span> <span class="token operator">&amp;&amp;</span> <span class="token string">"<span class="token variable">$outer</span>"</span> <span class="token operator">=</span> <span class="token string">"III"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token keyword">then</span>
      <span class="token builtin class-name">continue</span> <span class="token number">2</span>  <span class="token comment"># 影响两层循环，包括“外层循环”。</span>
                  <span class="token comment"># 将其替换为普通的 "continue"，那么只会影响内层循环。</span>
    <span class="token keyword">fi</span>
    
    <span class="token builtin class-name">echo</span> -n <span class="token string">"<span class="token variable">$inner</span> "</span>  <span class="token comment"># 7 8 9 10 将不会出现在 "Group III."中。</span>
  <span class="token keyword">done</span>
  <span class="token comment"># --------------------------------------------------------------------</span>

<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># 思考：</span>
<span class="token comment"># 想一个 "continue N" 在脚本中的实际应用情况。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>样例 11-24. 真实环境中的 <code>continue N</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Albert Reiner 举出了一个如何使用 "continue N" 的例子：</span>
<span class="token comment"># ---------------------------------------------------</span>

<span class="token comment">#  如果我有许多任务需要运行，并且运行所需要的数据都以文件的形</span>
<span class="token comment">#+ 式存在文件夹中。现在有多台设备可以访问这个文件夹，我想将任</span>
<span class="token comment">#+ 务分配给这些不同的设备来完成。</span>
<span class="token comment">#  那么我通常会在每台设备上执行下面的代码：</span>

<span class="token keyword">while</span> true:
<span class="token keyword">do</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> .iso.*
  <span class="token keyword">do</span>
    <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$n</span>"</span> <span class="token operator">=</span> <span class="token string">".iso.opts"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
    <span class="token assign-left variable">beta</span><span class="token operator">=</span><span class="token variable">${n<span class="token operator">#</span>.iso.}</span>
    <span class="token punctuation">[</span> -r .Iso.<span class="token variable">$beta</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
    <span class="token punctuation">[</span> -r .lock.<span class="token variable">$beta</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sleep</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
    lockfile -r0 .lock.<span class="token variable">$beta</span> <span class="token operator">||</span> <span class="token builtin class-name">continue</span>
    <span class="token builtin class-name">echo</span> -n <span class="token string">"<span class="token variable">$beta</span>: "</span> <span class="token variable"><span class="token variable">`</span><span class="token function">date</span><span class="token variable">`</span></span>
    run-isotherm <span class="token variable">$beta</span>
    <span class="token function">date</span>
    <span class="token function">ls</span> -alF .Iso.<span class="token variable">$beta</span>
    <span class="token punctuation">[</span> -r .Iso.<span class="token variable">$beta</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -rf .lock.<span class="token variable">$beta</span>
    <span class="token builtin class-name">continue</span> <span class="token number">2</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">break</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># 这个脚本中出现的 sleep N 只针对这个脚本，通常的形式是：</span>

<span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">job</span> <span class="token keyword">in</span> <span class="token punctuation">{</span>pattern<span class="token punctuation">}</span>
  <span class="token keyword">do</span>
    <span class="token punctuation">{</span>job already <span class="token keyword">done</span> or running<span class="token punctuation">}</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">continue</span>
    <span class="token punctuation">{</span>mark job as running, <span class="token keyword">do</span> job, mark job as done<span class="token punctuation">}</span>
    <span class="token builtin class-name">continue</span> <span class="token number">2</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">break</span>        <span class="token comment"># 或者使用类似 `sleep 600` 这样的语句来防止脚本结束。</span>
<span class="token keyword">done</span>

<span class="token comment">#  这样做可以保证脚本只会在没有任务时（包括在运行过程中添加的任务）</span>
<span class="token comment">#+ 才会停止。合理使用文件锁保证多台设备可以无重复的并行执行任务（这</span>
<span class="token comment">#+ 在我的设备上通常会消耗好几个小时，所以我想避免重复计算）。并且，</span>
<span class="token comment">#+ 因为每次总是从头开始搜索文件，因此可以通过文件名决定执行的先后</span>
<span class="token comment">#+ 顺序。当然，你可以不使用 'continue 2' 来完成这些，但是你必须</span>
<span class="token comment">#+ 添加代码去检测某项任务是否完成（以此判断是否可以执行下一项任务或</span>
<span class="token comment">#+ 终止、休眠一段时间再执行下一项任务）。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> <code>continue N</code> 结构不易理解并且可能在一些情况下有歧义，因此不建议使用。</p>
</blockquote>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>这两个命令是 <a href="http://tldp.org/LDP/abs/html/internal.html#BUILTINREF" target="_blank" rel="noopener noreferrer">内建命令<ExternalLinkIcon/></a>，而另外的循环命令，如 <a href="http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF" target="_blank" rel="noopener noreferrer"><code>while</code><ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/testbranch.html#CASEESAC1" target="_blank" rel="noopener noreferrer"><code>case</code><ExternalLinkIcon/></a> 则是 <a href="http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF" target="_blank" rel="noopener noreferrer">关键词<ExternalLinkIcon/></a>。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
