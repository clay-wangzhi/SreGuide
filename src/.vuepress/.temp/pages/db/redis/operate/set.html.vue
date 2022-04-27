<template><h1 id="set-类型" tabindex="-1"><a class="header-anchor" href="#set-类型" aria-hidden="true">#</a> set 类型</h1>
<ul>
<li>⽆序集合</li>
<li>元素为string类型</li>
<li>元素具有唯⼀性，不重复</li>
<li>说明：对于集合没有修改操作</li>
</ul>
<p>增加</p>
<ul>
<li>添加元素</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sadd key member1 member2 ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>例1：向键'a3'的集合中添加元素'zhangsan'、'lisi'、'wangwu'</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sadd a3 zhangsan sili wangwu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>获取</p>
<ul>
<li>返回所有的元素</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>smembers key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>例2：获取键'a3'的集合中所有元素</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>smembers a3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>删除</p>
<ul>
<li>删除指定元素</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>srem key value
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>例3：删除键'a3'的集合中元素'wangwu'</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>srem a3 wangwu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
