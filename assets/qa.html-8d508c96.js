const e=JSON.parse('{"key":"v-72ca315d","path":"/db/redis/qa.html","title":"redis面试题","lang":"zh-CN","frontmatter":{"category":"Redis","description":"redis面试题 todo: 添加小林coding的redis相关问题，缓存，穿透，雪崩等 Redis是什么 Redis（Remote Dictionary Server）是C语言开发的一个开源的（遵从BSD协议）高性能键值对（key-value）的内存数据库，可以用作数据库、缓存、消息中间件。它是一种NoSQL（not-only sql，泛指非关系型数据库）的数据库。 Reidis作为一个内存数据库： 性能优秀，数据在内存中，读写速度非常快，支持并发10W QPS 单进程单线程，是线程安全的，采用IO多路复用机制 丰富的数据类型，支持字符串（strings）、散列（hashes）、列表（lists）、集合（sets）、有序集合（sorted sets） 支持数据持久化，可以将内存中数据保存在磁盘中，重启时加载 主从复制，哨兵，集群 可以用作分布式锁 可以作为消息中间件使用，支持发布订阅","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/db/redis/qa.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"redis面试题"}],["meta",{"property":"og:description","content":"redis面试题 todo: 添加小林coding的redis相关问题，缓存，穿透，雪崩等 Redis是什么 Redis（Remote Dictionary Server）是C语言开发的一个开源的（遵从BSD协议）高性能键值对（key-value）的内存数据库，可以用作数据库、缓存、消息中间件。它是一种NoSQL（not-only sql，泛指非关系型数据库）的数据库。 Reidis作为一个内存数据库： 性能优秀，数据在内存中，读写速度非常快，支持并发10W QPS 单进程单线程，是线程安全的，采用IO多路复用机制 丰富的数据类型，支持字符串（strings）、散列（hashes）、列表（lists）、集合（sets）、有序集合（sorted sets） 支持数据持久化，可以将内存中数据保存在磁盘中，重启时加载 主从复制，哨兵，集群 可以用作分布式锁 可以作为消息中间件使用，支持发布订阅"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redis面试题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"Redis是什么","slug":"redis是什么","link":"#redis是什么","children":[]},{"level":2,"title":"五种类型","slug":"五种类型","link":"#五种类型","children":[]},{"level":2,"title":"为什么单线程的redis这么快","slug":"为什么单线程的redis这么快","link":"#为什么单线程的redis这么快","children":[]},{"level":2,"title":"Redis相比memcached有哪些优势","slug":"redis相比memcached有哪些优势","link":"#redis相比memcached有哪些优势","children":[]},{"level":2,"title":"Redis的淘汰策略","slug":"redis的淘汰策略","link":"#redis的淘汰策略","children":[]},{"level":2,"title":"Redis提供了哪几种持久化方式","slug":"redis提供了哪几种持久化方式","link":"#redis提供了哪几种持久化方式","children":[]},{"level":2,"title":"如何选择合适的持久化方式","slug":"如何选择合适的持久化方式","link":"#如何选择合适的持久化方式","children":[]},{"level":2,"title":"主从复制简介及过程","slug":"主从复制简介及过程","link":"#主从复制简介及过程","children":[]},{"level":2,"title":"数据同步的过程","slug":"数据同步的过程","link":"#数据同步的过程","children":[]},{"level":2,"title":"全量复制和部分复制的过程","slug":"全量复制和部分复制的过程","link":"#全量复制和部分复制的过程","children":[]},{"level":2,"title":"Redis有哪几种数据淘汰策略","slug":"redis有哪几种数据淘汰策略","link":"#redis有哪几种数据淘汰策略","children":[]},{"level":2,"title":"为什么Redis需要把所有数据放到内存中","slug":"为什么redis需要把所有数据放到内存中","link":"#为什么redis需要把所有数据放到内存中","children":[]},{"level":2,"title":"哨兵有哪些功能","slug":"哨兵有哪些功能","link":"#哨兵有哪些功能","children":[]},{"level":2,"title":"Redis如何设置密码及验证密码","slug":"redis如何设置密码及验证密码","link":"#redis如何设置密码及验证密码","children":[]},{"level":2,"title":"Redis哈希槽的概念","slug":"redis哈希槽的概念","link":"#redis哈希槽的概念","children":[]},{"level":2,"title":"Redis集群之间是如何复制的","slug":"redis集群之间是如何复制的","link":"#redis集群之间是如何复制的","children":[]},{"level":2,"title":"Redis集群如何选择数据库","slug":"redis集群如何选择数据库","link":"#redis集群如何选择数据库","children":[]}],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":11.61,"words":3484},"filePathRelative":"db/redis/qa.md","localizedDate":"2023年4月19日","excerpt":"<h1> redis面试题</h1>\\n<blockquote>\\n<p>todo: 添加小林coding的redis相关问题，缓存，穿透，雪崩等</p>\\n</blockquote>\\n<h2> Redis是什么</h2>\\n<p>Redis（Remote Dictionary Server）是C语言开发的一个开源的（遵从BSD协议）高性能键值对（key-value）的内存数据库，可以用作数据库、缓存、消息中间件。它是一种NoSQL（not-only sql，泛指非关系型数据库）的数据库。</p>\\n<p>Reidis作为一个内存数据库：</p>\\n<ul>\\n<li>性能优秀，数据在内存中，读写速度非常快，支持并发10W QPS</li>\\n<li>单进程单线程，是线程安全的，采用IO多路复用机制</li>\\n<li>丰富的数据类型，支持字符串（strings）、散列（hashes）、列表（lists）、集合（sets）、有序集合（sorted sets）</li>\\n<li>支持数据持久化，可以将内存中数据保存在磁盘中，重启时加载</li>\\n<li>主从复制，哨兵，集群</li>\\n<li>可以用作分布式锁</li>\\n<li>可以作为消息中间件使用，支持发布订阅</li>\\n</ul>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
