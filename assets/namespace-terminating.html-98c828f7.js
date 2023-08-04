const e=JSON.parse('{"key":"v-9a233d44","path":"/cloudnative/troubleshooting/namespace-terminating.html","title":"如何更新Terminating状态的命名空间","lang":"zh-CN","frontmatter":{"category":"云原生","tag":["Kubernetes"],"description":"如何更新Terminating状态的命名空间 Kubernetes中namespace有两种常见的状态，即Active和Terminating状态，其中Terminating状态一般会比较少见，当对应的命名空间下还存在运行的资源，但该命名空间被删除时才会出现所谓的Terminating状态，这种情况下只要等待Kubernetes本身将命名空间下的资源回收后，该命名空间将会被系统自动删除。 但是在某些情况下，即使命名空间下没有运行的资源，但依然无法删除Terminating状态的命名空间的情况，它会一直卡在Terminating状态下。 解决这个问题的步骤为：","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/troubleshooting/namespace-terminating.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"如何更新Terminating状态的命名空间"}],["meta",{"property":"og:description","content":"如何更新Terminating状态的命名空间 Kubernetes中namespace有两种常见的状态，即Active和Terminating状态，其中Terminating状态一般会比较少见，当对应的命名空间下还存在运行的资源，但该命名空间被删除时才会出现所谓的Terminating状态，这种情况下只要等待Kubernetes本身将命名空间下的资源回收后，该命名空间将会被系统自动删除。 但是在某些情况下，即使命名空间下没有运行的资源，但依然无法删除Terminating状态的命名空间的情况，它会一直卡在Terminating状态下。 解决这个问题的步骤为："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-04T10:28:48.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:modified_time","content":"2023-08-04T10:28:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何更新Terminating状态的命名空间\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-04T10:28:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[],"git":{"createdTime":1691144928000,"updatedTime":1691144928000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":2.46,"words":738},"filePathRelative":"cloudnative/troubleshooting/namespace-terminating.md","localizedDate":"2023年8月4日","excerpt":"<h1> 如何更新Terminating状态的命名空间</h1>\\n<p>Kubernetes中namespace有两种常见的状态，即Active和Terminating状态，其中Terminating状态一般会比较少见，当对应的命名空间下还存在运行的资源，但该命名空间被删除时才会出现所谓的Terminating状态，这种情况下只要等待Kubernetes本身将命名空间下的资源回收后，该命名空间将会被系统自动删除。</p>\\n<p>但是在某些情况下，即使命名空间下没有运行的资源，但依然无法删除Terminating状态的命名空间的情况，它会一直卡在Terminating状态下。</p>\\n<p>解决这个问题的步骤为：</p>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
