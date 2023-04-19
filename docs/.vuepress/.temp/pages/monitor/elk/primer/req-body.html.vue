<template><h1 id="request-body和query-dsl简介" tabindex="-1"><a class="header-anchor" href="#request-body和query-dsl简介" aria-hidden="true">#</a> Request Body和Query DSL简介</h1>
<h2 id="request-body-search" tabindex="-1"><a class="header-anchor" href="#request-body-search" aria-hidden="true">#</a> Request Body Search</h2>
<ul>
<li>将查询语句通过HTTP Request Body发送给Elasticsearch</li>
<li>Query DSL</li>
</ul>
<p>举例</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568169039971.png" alt="" loading="lazy"></p>
<h3 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h3>
<ul>
<li>From从0开始，默认返回10个结果</li>
<li>获取靠后的翻页成本较高</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568169125069.png" alt="" loading="lazy"></p>
<h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3>
<ul>
<li>最好在&quot;数字型&quot;与&quot;日期型&quot;字段上排序
<ul>
<li>因为对于多值类型或分析过的字段排序，系统会选一个值，无法得知该值</li>
</ul>
</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568170207936.png" alt="" loading="lazy"></p>
<h3 id="source-filtering" tabindex="-1"><a class="header-anchor" href="#source-filtering" aria-hidden="true">#</a> _source filtering</h3>
<ul>
<li>如果_source没有存储，那就只返回匹配的文档的元数据</li>
<li>_source支持使用通配符_source[&quot;name*&quot;,&quot;desc*&quot;]</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568191600446.png" alt="" loading="lazy"></p>
<h3 id="脚本字段" tabindex="-1"><a class="header-anchor" href="#脚本字段" aria-hidden="true">#</a> 脚本字段</h3>
<ul>
<li>用例：订单中有不同的汇率，需要结合汇率对，订单价格进行排序</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568191768549.png" alt="" loading="lazy"></p>
<h3 id="使用查询表达式-match" tabindex="-1"><a class="header-anchor" href="#使用查询表达式-match" aria-hidden="true">#</a> 使用查询表达式 - Match</h3>
<ul>
<li>默认使用term类型，或的关系</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568191830422.png" alt="" loading="lazy"></p>
<ul>
<li>可以指定操作类型为AND</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568191867781.png" alt="" loading="lazy"></p>
<h3 id="短语搜索-match-phrase" tabindex="-1"><a class="header-anchor" href="#短语搜索-match-phrase" aria-hidden="true">#</a> 短语搜索 - Match Phrase</h3>
<ul>
<li>slop参数表示，允许各个单词之间插入的单词个数</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568192076860.png" alt="" loading="lazy"></p>
</template>
