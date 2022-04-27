<template><h1 id="uri-search详解" tabindex="-1"><a class="header-anchor" href="#uri-search详解" aria-hidden="true">#</a> URI Search详解</h1>
<h2 id="通过uri-query实现搜索" tabindex="-1"><a class="header-anchor" href="#通过uri-query实现搜索" aria-hidden="true">#</a> 通过URI query实现搜索</h2>
<ul>
<li>q 指定查询语句，使用Query String Syntax</li>
<li>df 指定默认字段，不指定时会对所有字段进行查询</li>
<li>Sort排序 / from 和size用于分页</li>
<li>Profile 可以查看查询是如何被执行的</li>
</ul>
<h3 id="query-string-syntax" tabindex="-1"><a class="header-anchor" href="#query-string-syntax" aria-hidden="true">#</a> Query String Syntax</h3>
<ul>
<li>指定字段 v.s 泛查询
<ul>
<li>q=title:2012  /   q=2012</li>
</ul>
</li>
<li>Term v.s Phrase
<ul>
<li>Beautiful Mind 等效于 Beautiful OR Mind</li>
<li>&quot;Beautiful Mind&quot;等效于Beautiful AND Mind。Phrase查询，还要求前后顺序保持一致</li>
</ul>
</li>
<li>分组与引号
<ul>
<li>title:(Beautiful AND Mind)   - term查询要用&quot;()&quot;括起来</li>
<li>title=&quot;Beautiful Mind&quot; - phrase查询要用&quot;&quot;双引号</li>
</ul>
</li>
<li>布尔操作
<ul>
<li>AND 、OR、NOT或者 &amp;&amp; 、||、！
<ul>
<li>必须大写</li>
</ul>
</li>
</ul>
</li>
<li>分组
<ul>
<li>+ 表示must</li>
<li>- 表示must_not</li>
</ul>
</li>
<li>范围查询
<ul>
<li>区间表示：[]闭区间，{}开区间
<ul>
<li>year:{2018 TO 2019}</li>
<li>year:[* TO 2018]</li>
</ul>
</li>
</ul>
</li>
<li>算数符号
<ul>
<li>year:&gt;2010</li>
<li>year:(&gt;2010 &amp;&amp; &lt;=2018)</li>
<li>year:(+&gt;2010 -&lt;2018)</li>
</ul>
</li>
<li>通配符查询（通配符查询效率低，占用内存大，不建议使用。特别是放在最前面）
<ul>
<li>？代表1个字符，* 代表0或多个字符
<ul>
<li>title:mi?d</li>
<li>title:be*</li>
</ul>
</li>
</ul>
</li>
<li>正则表达
<ul>
<li>title:[bt]oy</li>
</ul>
</li>
<li>模糊匹配与近似查询
<ul>
<li>title:befutifl~1</li>
<li>title:&quot;lord rings&quot;~2
<ul>
<li>表示lord 和rings之间可以存在两个单词</li>
</ul>
</li>
</ul>
</li>
</ul>
</template>
