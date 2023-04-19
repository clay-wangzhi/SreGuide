<template><h1 id="search-api概览" tabindex="-1"><a class="header-anchor" href="#search-api概览" aria-hidden="true">#</a> Search API概览</h1>
<h2 id="search-api" tabindex="-1"><a class="header-anchor" href="#search-api" aria-hidden="true">#</a> Search API</h2>
<ul>
<li>URI Search
<ul>
<li>在URL中使用查询参数</li>
</ul>
</li>
<li>Request Body Search
<ul>
<li>使用Elasticsearch提供的，基于JSON格式的更加完备的Query Domain Specific Language （DSL）</li>
</ul>
</li>
</ul>
<h3 id="指定查询的索引" tabindex="-1"><a class="header-anchor" href="#指定查询的索引" aria-hidden="true">#</a> 指定查询的索引</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568097742808.png" alt="" loading="lazy"></p>
<h3 id="uri查询" tabindex="-1"><a class="header-anchor" href="#uri查询" aria-hidden="true">#</a> URI查询</h3>
<ul>
<li>使用&quot;q&quot;，指定查询字符串</li>
<li>&quot;query string syntax&quot;，KV键值对</li>
</ul>
<p>举例</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568097928424.png" alt="" loading="lazy"></p>
<h3 id="request-body" tabindex="-1"><a class="header-anchor" href="#request-body" aria-hidden="true">#</a> Request Body</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568098031540.png" alt="" loading="lazy"></p>
<h3 id="搜索response字段说明" tabindex="-1"><a class="header-anchor" href="#搜索response字段说明" aria-hidden="true">#</a> 搜索Response字段说明</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568098178099.png" alt="" loading="lazy"></p>
<h2 id="衡量相关性" tabindex="-1"><a class="header-anchor" href="#衡量相关性" aria-hidden="true">#</a> 衡量相关性</h2>
<ul>
<li>Information Retrieval（检索）
<ul>
<li>Rrecision（查准率） - 尽可能返回较少的无关文档</li>
<li>Recall （查全率）- 尽量返回较多的相关文档</li>
<li>Ranking - 是否能够按照相关度进行排序</li>
</ul>
</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568098803331.png" alt="" loading="lazy"></p>
</template>
