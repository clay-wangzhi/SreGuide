<template><h1 id="_7-5-牛刀小试" tabindex="-1"><a class="header-anchor" href="#_7-5-牛刀小试" aria-hidden="true">#</a> 7.5 牛刀小试</h1>
<p>系统文件 <code>xinitrc</code> 可以用来启动软件 X Server。该文件包含了许多 <code>if/then</code> 测试结构。下面的代码摘录自较早版本的 <code>xinitrc</code>（大约在 Red Hat 7.1 版本）。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> -f <span class="token environment constant">$HOME</span>/.Xclients <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">exec</span> <span class="token environment constant">$HOME</span>/.Xclients
<span class="token keyword">elif</span> <span class="token punctuation">[</span> -f /etc/X11/xinit/Xclients <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">exec</span> /etc/X11/xinit/Xclients
<span class="token keyword">else</span>
    <span class="token comment"># 安全分支。尽管程序不会执行这个分支。</span>
    <span class="token comment"># （我们在 Xclients 中也提供了相同的机制）增强程序可靠性。</span>
    xclock -geometry 100x100-5+5 <span class="token operator">&amp;</span>
    xterm -geometry 80x50-50+150 <span class="token operator">&amp;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> -f /usr/bin/netscape -a -f /usr/share/doc/HTML/index.html <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            netscape /usr/share/doc/HTML/index.html
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>试着解释代码片段中的条件测试结构, 然后试着在 /etc/X11/xinit/xinitrc 查看最新版本，并且分析其中的 if/then 条件测试结构。为了更好的进行分析，你可能需要继续阅读后面章节中对 <a href="http://tldp.org/LDP/abs/html/textproc.html#GREPREF" target="_blank" rel="noopener noreferrer"><code>grep</code><ExternalLinkIcon/></a>，<a href="http://tldp.org/LDP/abs/html/sedawk.html#SEDREF" target="_blank" rel="noopener noreferrer"><code>sed</code><ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/regexp.html#REGEXREF" target="_blank" rel="noopener noreferrer">正则表达式<ExternalLinkIcon/></a> 的讨论。</p>
</template>
