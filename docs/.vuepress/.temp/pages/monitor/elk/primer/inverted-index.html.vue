<template><h1 id="倒排索引入门" tabindex="-1"><a class="header-anchor" href="#倒排索引入门" aria-hidden="true">#</a> 倒排索引入门</h1>
<h2 id="正排与倒排索引" tabindex="-1"><a class="header-anchor" href="#正排与倒排索引" aria-hidden="true">#</a> 正排与倒排索引</h2>
<ul>
<li>在一本书的开始，有一个目录 - 正排</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568083459813.png" alt="" loading="lazy"></p>
<ul>
<li>在一本书的最后，有一个索引页 - 倒排</li>
</ul>
<p>根据关键词查看内容所在页</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568083528241.png" alt="" loading="lazy"></p>
<h3 id="图书和索引引擎的类比" tabindex="-1"><a class="header-anchor" href="#图书和索引引擎的类比" aria-hidden="true">#</a> 图书和索引引擎的类比</h3>
<ul>
<li>图书
<ul>
<li>正排索引 - 目录页</li>
<li>倒排索引 - 索引页</li>
</ul>
</li>
<li>索引引擎
<ul>
<li>正排索引 - 文档id到文档内容和单词的关联</li>
<li>倒排索引 - 单词到文档id的关联</li>
</ul>
</li>
</ul>
<h3 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568084661010.png" alt="" loading="lazy"></p>
<h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2>
<h3 id="倒排索引的核心组成" tabindex="-1"><a class="header-anchor" href="#倒排索引的核心组成" aria-hidden="true">#</a> 倒排索引的核心组成</h3>
<ul>
<li>
<p>倒排索引包含两个部分</p>
<ul>
<li>单词词典（Term Dictionary）,记录所有文档的单词，记录单词到倒排列表的关联关系
<ul>
<li>单词词典一般比较大，可以通过B + 树或哈希拉链法实现，以满足高性能的插入与查询</li>
</ul>
</li>
<li>倒排列表（Posting List）,记录了单词对应的文档组合，由倒排索引项组成
<ul>
<li>倒排索引项（Posting）
<ul>
<li>文档ID</li>
<li>词频 TF - 该单词在文档中出现的次数，用户相关性评分</li>
<li>位置（Position）- 单词在文档中分词的位置。用于语句搜索（phrase query）</li>
<li>偏移（Offset）- 记录单词的开始结束位置，实现高亮显示</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="举例-1" tabindex="-1"><a class="header-anchor" href="#举例-1" aria-hidden="true">#</a> 举例</h3>
<p>Elasticsearch的在文档内容的索引</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568085534232.png" alt="" loading="lazy"></p>
<h3 id="elasticsearch的倒排索引" tabindex="-1"><a class="header-anchor" href="#elasticsearch的倒排索引" aria-hidden="true">#</a> Elasticsearch的倒排索引</h3>
<ul>
<li>Elasticsearch的JSON文档中的每个字段，都有自己的倒排索引</li>
<li>可以指定对某些字段不做索引
<ul>
<li>优点：节省存储空间</li>
<li>缺点： 字段无法被搜索</li>
</ul>
</li>
</ul>
</template>
