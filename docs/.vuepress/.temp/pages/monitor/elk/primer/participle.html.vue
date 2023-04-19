<template><h1 id="通过分析器进行分词" tabindex="-1"><a class="header-anchor" href="#通过分析器进行分词" aria-hidden="true">#</a> 通过分析器进行分词</h1>
<h2 id="analysis" tabindex="-1"><a class="header-anchor" href="#analysis" aria-hidden="true">#</a> Analysis</h2>
<h3 id="analysis与analyzer" tabindex="-1"><a class="header-anchor" href="#analysis与analyzer" aria-hidden="true">#</a> Analysis与Analyzer</h3>
<ul>
<li>Analysis - 文本分析是把全文本转换一系列单词（term/token）的过程，也叫分词</li>
<li>Analysis是通过Analyzer来实现的
<ul>
<li>可使用Elasticsearch内置的分析器/或者按需定制化分析器</li>
</ul>
</li>
<li>除了在数据写入时转换词条，匹配Query语句时候也需要用相同的分析器对查询语句进行分析</li>
</ul>
<h3 id="analyzer的组成" tabindex="-1"><a class="header-anchor" href="#analyzer的组成" aria-hidden="true">#</a> Analyzer的组成</h3>
<ul>
<li>分词器是专门处理分词的组件，Analyzer由三部分组成
<ul>
<li>Character Filters（针对原始文本处理，例如去除html）/ Tokenizer（按照规则切分为单词）/ Token Filter（将切分的单词进行加工，小写，删除stopwords，增加同义词）</li>
</ul>
</li>
</ul>
<p>举例</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568094953293.png" alt="" loading="lazy"></p>
<h2 id="elasticsearch的内置分词器" tabindex="-1"><a class="header-anchor" href="#elasticsearch的内置分词器" aria-hidden="true">#</a> Elasticsearch的内置分词器</h2>
<ul>
<li>Standard Analyzer - 默认分词器，按词切分，小写处理</li>
<li>Simple Analyzer - 按照非字母切分（符号被过滤），小写处理</li>
<li>Stop Analyzer - 小写处理，停用词过滤（the ，a，is）</li>
<li>Whitespace Analyzer - 按照空格切分，不转小写</li>
<li>Keyword Analyzer - 不分词，直接将输入当做输出</li>
<li>Patter Analyzer - 正则表达式，默认\W+（非字符分隔）</li>
<li>Language - 提供了30多种常见语言的分词器</li>
<li>Customer Analyzer  - 自定义分词器</li>
</ul>
<h3 id="使用-analyzer-api" tabindex="-1"><a class="header-anchor" href="#使用-analyzer-api" aria-hidden="true">#</a> 使用_analyzer API</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568095742575.png" alt="" loading="lazy"></p>
<h2 id="中文分词" tabindex="-1"><a class="header-anchor" href="#中文分词" aria-hidden="true">#</a> 中文分词</h2>
<h3 id="分文分词的难点" tabindex="-1"><a class="header-anchor" href="#分文分词的难点" aria-hidden="true">#</a> 分文分词的难点</h3>
<ul>
<li>中文句子，切分成一个一个词（不是一个个字）</li>
<li>英文中，单词有自然的空格作为分隔</li>
<li>一句中文，在不同的上下文，有不同的理解
<ul>
<li>这个苹果，不大好吃 / 这个苹果，不大，好吃！</li>
</ul>
</li>
</ul>
<h3 id="icu-analyzer" tabindex="-1"><a class="header-anchor" href="#icu-analyzer" aria-hidden="true">#</a> ICU Analyzer</h3>
<ul>
<li>需要安装plugin
<ul>
<li>Elasticsearch-plugin install analysis-icu</li>
</ul>
</li>
<li>提供了Unicode的支持，更好的支持亚洲语言</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568096106355.png" alt="" loading="lazy"></p>
<p>举例</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568096123515.png" alt="" loading="lazy"></p>
<h3 id="常用的中文分词器" tabindex="-1"><a class="header-anchor" href="#常用的中文分词器" aria-hidden="true">#</a> 常用的中文分词器</h3>
<ul>
<li>IK
<ul>
<li>支持自定义词库，支持热更新分词字典</li>
<li>https://github.com/medcl/elasticsearch-analysis-ik</li>
</ul>
</li>
<li>THUlAC
<ul>
<li>THU Lexucal Analyzer for Chinese，清华大学自然语言处理和社会人文计算实验室的一套中文分词器</li>
<li>https://github.com/microbun/elasticsearch-thulac-plugin</li>
</ul>
</li>
</ul>
</template>
