<template><h1 id="管道及i-o重定向" tabindex="-1"><a class="header-anchor" href="#管道及i-o重定向" aria-hidden="true">#</a> 管道及I/O重定向</h1>
<h2 id="标准输入、标准输出、标准错误" tabindex="-1"><a class="header-anchor" href="#标准输入、标准输出、标准错误" aria-hidden="true">#</a> 标准输入、标准输出、标准错误</h2>
<h3 id="输出重定向" tabindex="-1"><a class="header-anchor" href="#输出重定向" aria-hidden="true">#</a> 输出重定向</h3>
<p>输出重定向（覆盖）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>date > a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出重定向（追加）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>date 1>> a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>错误输出重定向</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ls /home/ /aa >> a.txt 2>b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>正确和错误都输入到相同位置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ls /home/ /aa &amp;> a.txt 
ls /home/ /aa > a.txt 2>&amp;1 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>重定向到空设备/dev/null</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ls /home/ /aa &amp;> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="输入重定向" tabindex="-1"><a class="header-anchor" href="#输入重定向" aria-hidden="true">#</a> 输入重定向</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>grep 'root' &lt; /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -uroot -p123 &lt; aa.sql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="总和应用" tabindex="-1"><a class="header-anchor" href="#总和应用" aria-hidden="true">#</a> 总和应用</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat > a.txt &lt;&lt;EOF
> 11
> 22
> EOF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
