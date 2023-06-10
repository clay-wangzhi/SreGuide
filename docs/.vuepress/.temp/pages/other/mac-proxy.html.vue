<template><div><h1 id="macos配置终端走socks5代理" tabindex="-1"><a class="header-anchor" href="#macos配置终端走socks5代理" aria-hidden="true">#</a> macOS配置终端走socks5代理</h1>
<blockquote>
<p>转载自：<a href="https://zhuanlan.zhihu.com/p/269878724" target="_blank" rel="noopener noreferrer">macOS配置终端走socks5代理<ExternalLinkIcon/></a></p>
</blockquote>
<p>在<code v-pre>~/.bash_profile</code> 中添加如下内容（如果是是zsh用户那么配置文件为~/.zshrc）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 为终端设置代理</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">proxy</span><span class="token operator">=</span><span class="token string">'export all_proxy=socks5://127.0.0.1:1080'</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">unproxy</span><span class="token operator">=</span><span class="token string">'unset all_proxy'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完成之后需要使用<code v-pre>source ~/.bash_profile</code></p>
<p>其中，1080为端口号，需要和自己的代理软件的设置保持一致。</p>
<p>这样在终端中使用proxy命令就可以打开代理，使用unproxy就可以关闭代理。</p>
</div></template>


