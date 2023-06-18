const n=JSON.parse('{"key":"v-420f5692","path":"/cloudnative/kubernetes/csi/longhorn.html","title":"Longorn 安装配置","lang":"zh-CN","frontmatter":{"order":2,"category":"云原生","tag":["Kubernetes"],"description":"Longorn 安装配置 安装配置 # 检查相关依赖，如果没有，安装官方文档进行安装 curl -sSfL https://raw.githubusercontent.com/longhorn/longhorn/v1.3.0/scripts/environment_check.sh | bash # helm 安装 helm repo add longhorn https://charts.longhorn.io helm pull longhorn/longhorn --version 1.3.0 tar -xvf longhorn-1.3.0.tgz cd longhorn/ helm install longhorn --namespace longhorn-system --create-namespace ./","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/kubernetes/csi/longhorn.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"Longorn 安装配置"}],["meta",{"property":"og:description","content":"Longorn 安装配置 安装配置 # 检查相关依赖，如果没有，安装官方文档进行安装 curl -sSfL https://raw.githubusercontent.com/longhorn/longhorn/v1.3.0/scripts/environment_check.sh | bash # helm 安装 helm repo add longhorn https://charts.longhorn.io helm pull longhorn/longhorn --version 1.3.0 tar -xvf longhorn-1.3.0.tgz cd longhorn/ helm install longhorn --namespace longhorn-system --create-namespace ./"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T15:14:52.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:modified_time","content":"2023-06-18T15:14:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Longorn 安装配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T15:14:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"安装配置","slug":"安装配置","link":"#安装配置","children":[]},{"level":2,"title":"功能测试","slug":"功能测试","link":"#功能测试","children":[{"level":3,"title":"备份恢复","slug":"备份恢复","link":"#备份恢复","children":[]},{"level":3,"title":"其他功能","slug":"其他功能","link":"#其他功能","children":[]}]}],"git":{"createdTime":1687101292000,"updatedTime":1687101292000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":1.2,"words":359},"filePathRelative":"cloudnative/kubernetes/csi/longhorn.md","localizedDate":"2023年6月18日","excerpt":"<h1> Longorn 安装配置</h1>\\n<h2> 安装配置</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 检查相关依赖，如果没有，安装官方文档进行安装</span>\\n<span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-sSfL</span> https://raw.githubusercontent.com/longhorn/longhorn/v1.3.0/scripts/environment_check.sh <span class=\\"token operator\\">|</span> <span class=\\"token function\\">bash</span>\\n<span class=\\"token comment\\"># helm 安装</span>\\nhelm repo <span class=\\"token function\\">add</span> longhorn https://charts.longhorn.io\\nhelm pull longhorn/longhorn <span class=\\"token parameter variable\\">--version</span> <span class=\\"token number\\">1.3</span>.0\\n<span class=\\"token function\\">tar</span> <span class=\\"token parameter variable\\">-xvf</span> longhorn-1.3.0.tgz\\n<span class=\\"token builtin class-name\\">cd</span> longhorn/\\nhelm <span class=\\"token function\\">install</span> longhorn <span class=\\"token parameter variable\\">--namespace</span> longhorn-system --create-namespace ./\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"Clay"},"autoDesc":true}');export{n as data};
