const e=JSON.parse('{"key":"v-866492da","path":"/cloudnative/archive-discarded/docker-harbor-ha.html","title":"Harbor 高可用搭建(docker-compose)","lang":"zh-CN","frontmatter":{"order":4,"category":"云原生","tag":["harbor"],"description":"Harbor 高可用搭建(docker-compose) Harbor简介 Harbor是一个用于存储和分发Docker镜像的企业级Registry服务器，通过添加一些企业必需的功能特性，例如安全、标识和管理等，扩展了开源Docker Distribution。 作为一个企业级私有Registry服务器，Harbor提供了更好的性能和安全。","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/archive-discarded/docker-harbor-ha.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"Harbor 高可用搭建(docker-compose)"}],["meta",{"property":"og:description","content":"Harbor 高可用搭建(docker-compose) Harbor简介 Harbor是一个用于存储和分发Docker镜像的企业级Registry服务器，通过添加一些企业必需的功能特性，例如安全、标识和管理等，扩展了开源Docker Distribution。 作为一个企业级私有Registry服务器，Harbor提供了更好的性能和安全。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-03T16:18:47.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"harbor"}],["meta",{"property":"article:modified_time","content":"2023-08-03T16:18:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Harbor 高可用搭建(docker-compose)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-03T16:18:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"Harbor简介","slug":"harbor简介","link":"#harbor简介","children":[]},{"level":2,"title":"高可用架构：双主复制","slug":"高可用架构-双主复制","link":"#高可用架构-双主复制","children":[{"level":3,"title":"主从同步","slug":"主从同步","link":"#主从同步","children":[]},{"level":3,"title":"双主复制说明","slug":"双主复制说明","link":"#双主复制说明","children":[]}]},{"level":2,"title":"高可用架构：多实例共享后端存储","slug":"高可用架构-多实例共享后端存储","link":"#高可用架构-多实例共享后端存储","children":[{"level":3,"title":"方案说明","slug":"方案说明","link":"#方案说明","children":[]},{"level":3,"title":"环境说明","slug":"环境说明","link":"#环境说明","children":[]}]},{"level":2,"title":"多实例共享后端存储 部署","slug":"多实例共享后端存储-部署","link":"#多实例共享后端存储-部署","children":[{"level":3,"title":"安装Docker和Docker Compose","slug":"安装docker和docker-compose","link":"#安装docker和docker-compose","children":[]},{"level":3,"title":"NFS","slug":"nfs","link":"#nfs","children":[]},{"level":3,"title":"PostgreSQL","slug":"postgresql","link":"#postgresql","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"Harbor","slug":"harbor","link":"#harbor","children":[]},{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1691079527000,"updatedTime":1691079527000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":9.38,"words":2813},"filePathRelative":"cloudnative/archive-discarded/docker-harbor-ha.md","localizedDate":"2023年8月3日","excerpt":"<h1> Harbor 高可用搭建(docker-compose)</h1>\\n<h2> Harbor简介</h2>\\n<p><a href=\\"https://goharbor.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Harbor</a>是一个用于存储和分发<code>Docker镜像</code>的企业级<code>Registry</code>服务器，通过添加一些企业必需的功能特性，例如安全、标识和管理等，扩展了开源Docker Distribution。</p>\\n<p>作为一个企业级私有Registry服务器，Harbor提供了更好的性能和安全。</p>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
