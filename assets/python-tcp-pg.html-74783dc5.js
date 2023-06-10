const e=JSON.parse('{"key":"v-361a70e2","path":"/code/python/python-tcp-pg.html","title":"11.2 TCP 编程","lang":"zh-CN","frontmatter":{"category":"Python","description":"11.2 TCP 编程 Socket介绍 Socket 套接字。Socket是一种通用的网络编程接口，和网络层次没有一一对应的关系。 Python 中标准库中提供了 socket 模块。socket 模块中也提供了 socket 类，实现了对底层接口的封装， socket 模块是非常底层的接口库。 socke类定义为 socket(self, family=AF_INET, type=SOCK_STREAM, proto=0, fileno=None)","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/python/python-tcp-pg.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"11.2 TCP 编程"}],["meta",{"property":"og:description","content":"11.2 TCP 编程 Socket介绍 Socket 套接字。Socket是一种通用的网络编程接口，和网络层次没有一一对应的关系。 Python 中标准库中提供了 socket 模块。socket 模块中也提供了 socket 类，实现了对底层接口的封装， socket 模块是非常底层的接口库。 socke类定义为 socket(self, family=AF_INET, type=SOCK_STREAM, proto=0, fileno=None)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"11.2 TCP 编程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"Socket介绍","slug":"socket介绍","link":"#socket介绍","children":[]},{"level":2,"title":"TCP 编程","slug":"tcp-编程","link":"#tcp-编程","children":[{"level":3,"title":"服务器端编程步骤","slug":"服务器端编程步骤","link":"#服务器端编程步骤","children":[]},{"level":3,"title":"socket 初识","slug":"socket-初识","link":"#socket-初识","children":[]},{"level":3,"title":"实战——写一个群聊程序","slug":"实战——写一个群聊程序","link":"#实战——写一个群聊程序","children":[]},{"level":3,"title":"MakeFile","slug":"makefile","link":"#makefile","children":[]},{"level":3,"title":"TCP客户端编程","slug":"tcp客户端编程","link":"#tcp客户端编程","children":[]}]}],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":13,"words":3899},"filePathRelative":"code/python/python-tcp-pg.md","localizedDate":"2023年4月19日","excerpt":"<h1> 11.2 TCP 编程</h1>\\n<h2> Socket介绍</h2>\\n<p><strong>Socket 套接字</strong>。Socket是一种通用的网络编程接口，和网络层次没有一一对应的关系。</p>\\n<p>Python 中标准库中提供了 socket 模块。socket 模块中也提供了 socket 类，实现了对底层接口的封装，\\nsocket 模块是非常底层的接口库。</p>\\n<p>socke类定义为</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>socket<span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> family<span class=\\"token operator\\">=</span>AF_INET<span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">type</span><span class=\\"token operator\\">=</span>SOCK_STREAM<span class=\\"token punctuation\\">,</span> proto<span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> fileno<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
