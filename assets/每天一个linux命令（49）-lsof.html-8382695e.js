const e=JSON.parse('{"key":"v-a27ac06c","path":"/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8849%EF%BC%89-lsof.html","title":"每天一个linux命令（49）-lsof","lang":"zh-CN","frontmatter":{"title":"每天一个linux命令（49）-lsof","tag":"linux常用命令","category":"Linux","date":"2018-07-27T19:20:00.000Z","copyright":true,"description":"lsof（list open files）是一个列出当前系统打开文件的工具。在linux环境下，任何事物都以文件的形式存在，通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件。所以如传输控制协议 (TCP) 和用户数据报协议 (UDP) 套接字等，系统在后台都为该应用程序分配了一个文件描述符，无论这个文件的本质如何，该文件描述符为应用程序与基础操作系统之间的交互提供了通用接口。因为应用程序打开文件的描述符列表提供了大量关于这个应用程序本身的信息，因此通过lsof工具能够查看这个列表对系统监测以及排错将是很有帮助的。 语法 lsof(选项)","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8849%EF%BC%89-lsof.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"每天一个linux命令（49）-lsof"}],["meta",{"property":"og:description","content":"lsof（list open files）是一个列出当前系统打开文件的工具。在linux环境下，任何事物都以文件的形式存在，通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件。所以如传输控制协议 (TCP) 和用户数据报协议 (UDP) 套接字等，系统在后台都为该应用程序分配了一个文件描述符，无论这个文件的本质如何，该文件描述符为应用程序与基础操作系统之间的交互提供了通用接口。因为应用程序打开文件的描述符列表提供了大量关于这个应用程序本身的信息，因此通过lsof工具能够查看这个列表对系统监测以及排错将是很有帮助的。 语法 lsof(选项)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"linux常用命令"}],["meta",{"property":"article:published_time","content":"2018-07-27T19:20:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"每天一个linux命令（49）-lsof\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-27T19:20:00.000Z\\",\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"命令功能","slug":"命令功能","link":"#命令功能","children":[]},{"level":2,"title":"常用实例","slug":"常用实例","link":"#常用实例","children":[]}],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":7.16,"words":2147},"filePathRelative":"other/待整理/linux命令/每天一个linux命令（49）-lsof.md","localizedDate":"2018年7月27日","excerpt":"<p>lsof（list open files）是一个列出当前系统打开文件的工具。在linux环境下，任何事物都以文件的形式存在，通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件。所以如传输控制协议 (TCP) 和用户数据报协议 (UDP) 套接字等，系统在后台都为该应用程序分配了一个文件描述符，无论这个文件的本质如何，该文件描述符为应用程序与基础操作系统之间的交互提供了通用接口。因为应用程序打开文件的描述符列表提供了大量关于这个应用程序本身的信息，因此通过lsof工具能够查看这个列表对系统监测以及排错将是很有帮助的。</p>\\n<!--more-->\\n<h2> 语法</h2>\\n<p><code>lsof(选项)</code></p>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
