export const data = JSON.parse("{\"key\":\"v-76fb0a5e\",\"path\":\"/cloudnative/kubernetes/kube-reserved.html\",\"title\":\"k8s node 配置资源预留\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"云原生\",\"tag\":[\"Kubernetes\"],\"description\":\"k8s node 配置资源预留 背景 如果某些pod 没有设置资源限制，导致 node 节点 负载过高，进而导入 kubelet 和 apiserver 的心跳出现问题，节点就会 Not Ready Not Ready 的 节点 开始驱逐应用，当没有资源限制的应用跑到其他 节点，其他节点也会产生连锁反应，load 高，心跳失败，Not Ready，进而导致整个集群的雪崩 所以现在设置资源预留：防止 某些 pod 将 cpu 跑满，进而 kubelet 和 apiserver 心跳失败，出现 Not Ready 现象\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/cloudnative/kubernetes/kube-reserved.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"k8s node 配置资源预留\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"k8s node 配置资源预留 背景 如果某些pod 没有设置资源限制，导致 node 节点 负载过高，进而导入 kubelet 和 apiserver 的心跳出现问题，节点就会 Not Ready Not Ready 的 节点 开始驱逐应用，当没有资源限制的应用跑到其他 节点，其他节点也会产生连锁反应，load 高，心跳失败，Not Ready，进而导致整个集群的雪崩 所以现在设置资源预留：防止 某些 pod 将 cpu 跑满，进而 kubelet 和 apiserver 心跳失败，出现 Not Ready 现象\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Kubernetes\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"k8s node 配置资源预留\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"背景\",\"slug\":\"背景\",\"link\":\"#背景\",\"children\":[]},{\"level\":2,\"title\":\"具体操作步骤\",\"slug\":\"具体操作步骤\",\"link\":\"#具体操作步骤\",\"children\":[]}],\"readingTime\":{\"minutes\":0.79,\"words\":237},\"filePathRelative\":\"cloudnative/kubernetes/kube-reserved.md\",\"excerpt\":\"<h1> k8s node 配置资源预留</h1>\\n<h2> 背景</h2>\\n<p>如果某些pod 没有设置资源限制，导致 node 节点 负载过高，进而导入 kubelet 和 apiserver 的心跳出现问题，节点就会 Not Ready</p>\\n<p>Not Ready 的 节点 开始驱逐应用，当没有资源限制的应用跑到其他 节点，其他节点也会产生连锁反应，load 高，心跳失败，Not Ready，进而导致整个集群的雪崩</p>\\n<p>所以现在设置资源预留：防止 某些 pod 将 cpu 跑满，进而 kubelet 和 apiserver 心跳失败，出现 Not Ready 现象</p>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
