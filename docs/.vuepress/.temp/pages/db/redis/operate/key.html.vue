<template><h1 id="键命令" tabindex="-1"><a class="header-anchor" href="#键命令" aria-hidden="true">#</a> 键命令</h1>
<ul>
<li>查找键
参数⽀持正则表达式</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>keys pattern
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>判断键是否存在，
如果存在返回1，不存在返回0</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>exists key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>查看键对应的value的类型</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>删除键</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>del key1 key2 ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>设置过期时间</li>
</ul>
<p>以秒为单位，如果没有指定过期时间则⼀直存在，直到使⽤DEL移除</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>expire key seconds
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>查看有效时间</li>
</ul>
<p>以秒为单位</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ttl key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
