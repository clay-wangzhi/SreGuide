import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as l}from"./app-1a5afd71.js";const s={},d=l(`<h1 id="zset-类型" tabindex="-1"><a class="header-anchor" href="#zset-类型" aria-hidden="true">#</a> zset 类型</h1><ul><li>sorted set，有序集合</li><li>元素为string类型</li><li>元素具有唯⼀性，不重复</li><li>每个元素都会关联⼀个double类型的score，表示权重，通过权重将元素从⼩到⼤排序</li><li>说明：没有修改操作</li></ul><p>增加</p><ul><li>添加</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zadd key score1 member1 score2 member2 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例1：向键&#39;a4&#39;的集合中添加元素&#39;lisi&#39;、&#39;wangwu&#39;、&#39;zhaoliu&#39;、&#39;zhangsan&#39;，权重分别为4、5、6、3</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zadd a4 4 lisi 5 wangwu 6 zhaoliu 3 zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取</p><ul><li>返回指定范围内的元素</li><li>start、stop为元素的下标索引</li><li>索引从左侧开始，第⼀个元素为0</li><li>索引可以是负数，表示从尾部开始计数，如-1表示最后⼀个元素</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zrange key start stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例2：获取键&#39;a4&#39;的集合中所有元素</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zrange a4 0 -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回score值在min和max之间的成员</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zrangebyscore key min max
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例3：获取键&#39;a4&#39;的集合中权限值在5和6之间的成员</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zrangebyscore a4 5 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回成员member的score值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zscore key member
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例4：获取键&#39;a4&#39;的集合中元素&#39;zhangsan&#39;的权重</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zscore a4 zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除</p><ul><li>删除指定元素</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zrem key member1 member2 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例5：删除集合&#39;a4&#39;中元素&#39;zhangsan&#39;</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zrem a4 zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除权重在指定范围的元素</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zremrangebyscore key min max
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例6：删除集合&#39;a4&#39;中权限在5、6之间的元素</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zremrangebyscore a4 5 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),n=[d];function t(r,u){return a(),i("div",null,n)}const v=e(s,[["render",t],["__file","zset.html.vue"]]);export{v as default};
