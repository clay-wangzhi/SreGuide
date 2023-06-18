const e=JSON.parse('{"key":"v-62745d7c","path":"/cloudnative/kubernetes/ops-books/lxcfs.html","title":"利用 LXCFS 提升容器资源可见性","lang":"zh-CN","frontmatter":{"category":"云原生","tag":["Kubernetes"],"description":"利用 LXCFS 提升容器资源可见性 背景 解决应用无法识别容器资源限制的问题 具体操作步骤 git clone https://github.com/clay-wangzhi/lxcfs-admission-webhook.git kubectl create ns sre cd lxcfs-admission-webhook kubectl apply -f deployment/lxcfs-daemonset.yaml ./deployment/install.sh # 为注入启用命名空间 kubectl label namespace xxx lxcfs-admission-webhook=enabled","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/kubernetes/ops-books/lxcfs.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"利用 LXCFS 提升容器资源可见性"}],["meta",{"property":"og:description","content":"利用 LXCFS 提升容器资源可见性 背景 解决应用无法识别容器资源限制的问题 具体操作步骤 git clone https://github.com/clay-wangzhi/lxcfs-admission-webhook.git kubectl create ns sre cd lxcfs-admission-webhook kubectl apply -f deployment/lxcfs-daemonset.yaml ./deployment/install.sh # 为注入启用命名空间 kubectl label namespace xxx lxcfs-admission-webhook=enabled"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T15:14:52.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:modified_time","content":"2023-06-18T15:14:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"利用 LXCFS 提升容器资源可见性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T15:14:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"具体操作步骤","slug":"具体操作步骤","link":"#具体操作步骤","children":[]}],"git":{"createdTime":1687101292000,"updatedTime":1687101292000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":0.27,"words":82},"filePathRelative":"cloudnative/kubernetes/ops-books/lxcfs.md","localizedDate":"2023年6月18日","excerpt":"<h1> 利用 LXCFS 提升容器资源可见性</h1>\\n<h2> 背景</h2>\\n<p>解决应用无法识别容器资源限制的问题</p>\\n<h2> 具体操作步骤</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> clone https://github.com/clay-wangzhi/lxcfs-admission-webhook.git\\nkubectl create ns sre\\n<span class=\\"token builtin class-name\\">cd</span> lxcfs-admission-webhook\\nkubectl apply <span class=\\"token parameter variable\\">-f</span> deployment/lxcfs-daemonset.yaml\\n./deployment/install.sh\\n<span class=\\"token comment\\"># 为注入启用命名空间</span>\\nkubectl label namespace xxx lxcfs-admission-webhook<span class=\\"token operator\\">=</span>enabled\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
