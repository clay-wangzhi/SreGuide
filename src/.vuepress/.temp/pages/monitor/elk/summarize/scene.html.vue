<template><h1 id="elastic-stack-家族成员及其应用场景" tabindex="-1"><a class="header-anchor" href="#elastic-stack-家族成员及其应用场景" aria-hidden="true">#</a> Elastic Stack 家族成员及其应用场景</h1>
<h2 id="elastic-stack-生态圈" tabindex="-1"><a class="header-anchor" href="#elastic-stack-生态圈" aria-hidden="true">#</a> Elastic Stack 生态圈</h2>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567739481410.png" alt="" loading="lazy"></p>
<h3 id="logstash-数据处理管道" tabindex="-1"><a class="header-anchor" href="#logstash-数据处理管道" aria-hidden="true">#</a> Logstash： 数据处理管道</h3>
<ul>
<li>
<p>开源的服务端数据处理管道，支持从不同来源采集数据，转换数据，并将数据发送到不通的存储库中</p>
</li>
<li>
<p>发展</p>
<ul>
<li>Logstash诞生于2009年，最初用来做日志的采集与处理</li>
<li>2013年被Elasticsearch收购</li>
</ul>
</li>
<li>
<p>特性</p>
<ul>
<li>实时解析和转换数据
<ul>
<li>从IP地址破译出地理坐标</li>
<li>将PII数据匿名化，完全排除敏感字段</li>
</ul>
</li>
<li>可扩展 - 200多个插件（日志/数据库/Acsigh/Netflow）</li>
<li>可靠性安全
<ul>
<li>logstash会通过持久化队列来保证至少将运行中的事件送达一次</li>
<li>数据传输加密</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567739654345.png" alt="" loading="lazy"></p>
<h3 id="kibana-可视化分析利器" tabindex="-1"><a class="header-anchor" href="#kibana-可视化分析利器" aria-hidden="true">#</a> Kibana：可视化分析利器</h3>
<ul>
<li>Kibana名字的含义：Kiwifruit + Banana</li>
<li>数据可视化工具，帮助用户解开对数据的任何疑问</li>
<li>基于logstash的工具，2013年加入Elastic公司</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567739969747.png" alt="" loading="lazy"></p>
<h3 id="beats-轻量级的数据采集器" tabindex="-1"><a class="header-anchor" href="#beats-轻量级的数据采集器" aria-hidden="true">#</a> Beats：轻量级的数据采集器</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567740031729.png" alt="" loading="lazy"></p>
<h3 id="x-pack-商业化套件" tabindex="-1"><a class="header-anchor" href="#x-pack-商业化套件" aria-hidden="true">#</a> X-pack：商业化套件</h3>
<ul>
<li>6.3之前的版本，X-pack以插件方式安装</li>
<li>X-pack开源之后，ElasticSearch &amp; Kibana支持OSS版和Basic两种版本
<ul>
<li>部分X-pack功能支持免费使用，6.8和7.1开始，Security功能免费</li>
</ul>
</li>
<li>OSS，Basic，黄金级，白金级</li>
</ul>
<h2 id="elk应用场景" tabindex="-1"><a class="header-anchor" href="#elk应用场景" aria-hidden="true">#</a> ELK应用场景</h2>
<ul>
<li>网站搜索/垂直搜索/代码搜索</li>
<li>日志管理与分析/安全指标监控/应用性能监控/WEB支取舆情分</li>
</ul>
<h3 id="日志的重要性" tabindex="-1"><a class="header-anchor" href="#日志的重要性" aria-hidden="true">#</a> 日志的重要性</h3>
<ul>
<li>为什么重要
<ul>
<li>运维：医生给病人看病，日志就是病人对自己的陈述</li>
<li>恶意攻击，恶意注册，刷单，恶意密码猜测</li>
</ul>
</li>
<li>挑战
<ul>
<li>关注点很多，任何一个点都有可能引起问题</li>
<li>日志分散在很多机器，出了问题时，才发现日志被删了</li>
<li>很多运维人员是消防员，哪里有问题去哪里</li>
</ul>
</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567740850711.png" alt="" loading="lazy"></p>
<h3 id="日志管理流程" tabindex="-1"><a class="header-anchor" href="#日志管理流程" aria-hidden="true">#</a> 日志管理流程</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567740876961.png" alt="" loading="lazy"></p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567740904642.png" alt="" loading="lazy"></p>
</template>
