<template><h2 id="elasticsearch分词" tabindex="-1"><a class="header-anchor" href="#elasticsearch分词" aria-hidden="true">#</a> Elasticsearch分词</h2>
<h3 id="分词相关概念" tabindex="-1"><a class="header-anchor" href="#分词相关概念" aria-hidden="true">#</a> 分词相关概念</h3>
<ul>
<li>分词：是指将文本转换成一系列单词（term or token）,也可以叫做文本分析，在es里面称为Analysis。</li>
<li>分词器：是es中专门处理分词的组件，英文为Analyzer，它的组成如下：
<ul>
<li>Character Filters：针对原始文本进行处理，比如去除html特殊标记符</li>
<li>Tokenizer：将原始文本按照一定规则切分为单词</li>
<li>Token Filters：针对tokenizer处理完成的单词，再加工，比如转小写、删除或新增等处理</li>
</ul>
</li>
</ul>
<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>创建或更新文档时（Index Time），会对相应的文档进行分词处理</li>
<li>查询时（SearchTime），会对查询语句进行分词</li>
</ul>
<h4 id="索引时" tabindex="-1"><a class="header-anchor" href="#索引时" aria-hidden="true">#</a> 索引时</h4>
<ul>
<li>索引时分词是通过配置Index Mapping中每个字段的analyzer属性实现的，不指定分词时，默认使用standard，如下</li>
</ul>
<p><img src="images/index01.png" alt="" loading="lazy"></p>
<h4 id="查询时" tabindex="-1"><a class="header-anchor" href="#查询时" aria-hidden="true">#</a> 查询时</h4>
<ul>
<li>查时分词的指定方式有如下几种:
<ul>
<li>查询的时候通过analyzer指定分词器</li>
<li>通多index mapping设置search_analyzer实现</li>
</ul>
</li>
</ul>
<p><img src="images/chaxun01.png" alt="" loading="lazy"></p>
<h3 id="analyze-api" tabindex="-1"><a class="header-anchor" href="#analyze-api" aria-hidden="true">#</a> Analyze API</h3>
<ul>
<li>es提供了一个测试分词的api接口，方便验证分词效果，endpoint是_analyze
<ul>
<li>可以直接指定analyzer进行测试</li>
<li>可以直接指定索引中的字段进行测试</li>
<li>可以自定义分词器进行测试</li>
</ul>
</li>
</ul>
<p><img src="images/analyze01.png" alt="" loading="lazy"></p>
<p><img src="images/analyze02.png" alt="" loading="lazy"></p>
<p><img src="images/analyze03.png" alt="" loading="lazy"></p>
<h3 id="预定义的分词器" tabindex="-1"><a class="header-anchor" href="#预定义的分词器" aria-hidden="true">#</a> 预定义的分词器</h3>
<ul>
<li>
<p>es自带如下的分词器</p>
<ul>
<li>Standard</li>
<li>Simple</li>
<li>Whitespace</li>
<li>Stop</li>
<li>Keyword</li>
<li>Pattern</li>
<li>Language</li>
</ul>
</li>
</ul>
<h4 id="standard-analyzer" tabindex="-1"><a class="header-anchor" href="#standard-analyzer" aria-hidden="true">#</a> Standard Analyzer</h4>
<ul>
<li>默认分词器</li>
<li>其组成如图，特性为：
<ul>
<li>按词切分，支持多语言</li>
<li>小写处理</li>
</ul>
</li>
</ul>
<p><img src="images/yudingyi01.png" alt="" loading="lazy"></p>
<h4 id="simple-analyzer" tabindex="-1"><a class="header-anchor" href="#simple-analyzer" aria-hidden="true">#</a> Simple Analyzer</h4>
<ul>
<li>其组成如图，特性为：
<ul>
<li>按照非字母切分</li>
<li>小写处理</li>
</ul>
</li>
</ul>
<p><img src="images/yudingyi02.png" alt="" loading="lazy"></p>
<h4 id="whitespace-analyzer" tabindex="-1"><a class="header-anchor" href="#whitespace-analyzer" aria-hidden="true">#</a> Whitespace Analyzer</h4>
<ul>
<li>其组成如图，特性为：
<ul>
<li>按照空格切分</li>
</ul>
</li>
</ul>
<p><img src="images/yudingyi03.png" alt="" loading="lazy"></p>
<h4 id="stop-analyzer" tabindex="-1"><a class="header-anchor" href="#stop-analyzer" aria-hidden="true">#</a> Stop Analyzer</h4>
<ul>
<li>Stop Word 指预期助词等修饰性的词语，比如the、an、的、这等等</li>
<li>其组成如图，特性为：
<ul>
<li>相比Simple Analyzer多了Stop Word处理</li>
</ul>
</li>
</ul>
<p><img src="images/yudingyi04.png" alt="" loading="lazy"></p>
<h4 id="keyword-analyzer" tabindex="-1"><a class="header-anchor" href="#keyword-analyzer" aria-hidden="true">#</a> KeyWord Analyzer</h4>
<ul>
<li>其组成如图，特性为：
<ul>
<li>不分词，直接将输入作为一个单词输出</li>
</ul>
</li>
</ul>
<p><img src="images/yudingyi05.png" alt="" loading="lazy"></p>
<h4 id="pattern-analyzer" tabindex="-1"><a class="header-anchor" href="#pattern-analyzer" aria-hidden="true">#</a> Pattern Analyzer</h4>
<ul>
<li>其组成如图，特性为：
<ul>
<li>通过正则表达式自定义分割符</li>
<li>默认是\W+，即非字词的符号作为分隔符</li>
</ul>
</li>
</ul>
<p><img src="images/yudingyi06.png" alt="" loading="lazy"></p>
<h3 id="自定义分词" tabindex="-1"><a class="header-anchor" href="#自定义分词" aria-hidden="true">#</a> 自定义分词</h3>
<h4 id="tokernizer" tabindex="-1"><a class="header-anchor" href="#tokernizer" aria-hidden="true">#</a> Tokernizer</h4>
<ul>
<li>将原始文本按照一定规则切分为单词（term or token）</li>
<li>自带的如下：
<ul>
<li>standard 按照单词进行分割</li>
<li>letter按照非字符类进行分割</li>
<li>whitespace 按照空格进行分割</li>
<li>UAX URL Email按照standard分割，但不会分割邮箱和url</li>
<li>NGram和Edge NGram连词分割</li>
<li>Path Hierarchy按照文件路径进行切割</li>
</ul>
</li>
</ul>
<p><img src="images/zidingyi02.png" alt="" loading="lazy"></p>
<h4 id="character-filters" tabindex="-1"><a class="header-anchor" href="#character-filters" aria-hidden="true">#</a> Character Filters</h4>
<ul>
<li>在Tokenizer之前对原始文本进行处理，比如增加、删除或替换字符等</li>
<li>自带的如下：
<ul>
<li>HTML Strip 去除html标签和转换html实体</li>
<li>Mapping进行字符替换操作</li>
<li>Pattern Replace进行正则匹配替换</li>
</ul>
</li>
<li>会影响后续tokenizer解析的postion和offset信息</li>
</ul>
<p><img src="images/zidingyi01.png" alt="" loading="lazy"></p>
<h4 id="token-filters" tabindex="-1"><a class="header-anchor" href="#token-filters" aria-hidden="true">#</a> Token Filters</h4>
<ul>
<li>对于tokenizer输出的单词（term）进行增加、删除、修改等操作</li>
<li>自带的如下：
<ul>
<li>lowercase将所有term转换为小写</li>
<li>stop删除stop words</li>
<li>NGram和Edge NGram连词分割</li>
<li>Synonym添加近义词的term</li>
</ul>
</li>
</ul>
<p><img src="images/zidingyi03.png" alt="" loading="lazy"></p>
<h4 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h4>
<ul>
<li>自定义分词需要在索引的配置中设定，如下所示：</li>
</ul>
<p><img src="images/zidingyi04.png" alt="" loading="lazy"></p>
<p><img src="images/zidingyi05.png" alt="" loading="lazy"></p>
<h3 id="中文分词" tabindex="-1"><a class="header-anchor" href="#中文分词" aria-hidden="true">#</a> 中文分词</h3>
<ul>
<li>
<p>难点</p>
<ul>
<li>中文分词指的是将一个汉字序列切分成一个一个单独的词。在英文中，单词之间是以空格作为自然分界符，汉语中词没有一个形式上的分解符。</li>
<li>上下文不同，分词结果迥异，比如交叉歧义问题，比如下面两种分词都合理
<ul>
<li>乒乓球拍/卖/完了</li>
<li>乒乓球/拍卖/完了</li>
</ul>
</li>
</ul>
</li>
<li>
<p>常用分词系统</p>
<ul>
<li>IK
<ul>
<li>实现中英文单词的切分，支持ik_smart、ik_maxword等模式</li>
<li>可自定义词库，支持热更新分词词典</li>
</ul>
</li>
<li>jieba
<ul>
<li>python中最流行的分词系统，支持分词和词性标注</li>
<li>支持繁体分词、自定义词典、并行分词等</li>
</ul>
</li>
</ul>
</li>
<li>
<p>基于自然语言处理的分词系统</p>
<ul>
<li>Hanlp
<ul>
<li>由一系列模型与算法组成的Java工具包，目标是普及自然语言处理在生产环境中的应用</li>
</ul>
</li>
<li>THULAC
<ul>
<li>THU Lexical Analyzer for Chinese，由清华大学自然语言处理与社会人文计算实验室研制推出的一套中文词法分析工具包，具有中文分词和词性标注功能</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="分词使用建议" tabindex="-1"><a class="header-anchor" href="#分词使用建议" aria-hidden="true">#</a> 分词使用建议</h3>
<ul>
<li>明确字段是否需要分词，不需要分词的字段就将type设置为keyword，可以节省空间和提高写性能</li>
<li>善用_analyze API，查看文档的具体分词结果</li>
<li>动手测试</li>
</ul>
</template>
