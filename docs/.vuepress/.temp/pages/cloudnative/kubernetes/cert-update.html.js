export const data = JSON.parse("{\"key\":\"v-6fcbadd8\",\"path\":\"/cloudnative/kubernetes/cert-update.html\",\"title\":\"使用 kubeadm 手动更新证书\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"云原生\",\"tag\":[\"Kubernetes\"],\"description\":\"使用 kubeadm 手动更新证书 背景：K8S 各个组件需要与 api-server 进行通信，通信使用的证书都存放在 /etc/kubernetes/pki 路径下，kubeadm 生成的证书默认有效为 1 年，因此需要定时更新证书，否则证书到期会导致整个集群不可用。 自动更新证书，Kubenetes 在升级控制面板相关组件时会主动更新证书，因此如果保证 Kubernetes 能够定期（一年以内）升级的话，证书会自动更新。 环境说明：k8s 1.18.10 以下步骤，在所有 master 节点执行 具体操作步骤 1）检查证书是否过期，以下两个命令均可\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/cloudnative/kubernetes/cert-update.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"使用 kubeadm 手动更新证书\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"使用 kubeadm 手动更新证书 背景：K8S 各个组件需要与 api-server 进行通信，通信使用的证书都存放在 /etc/kubernetes/pki 路径下，kubeadm 生成的证书默认有效为 1 年，因此需要定时更新证书，否则证书到期会导致整个集群不可用。 自动更新证书，Kubenetes 在升级控制面板相关组件时会主动更新证书，因此如果保证 Kubernetes 能够定期（一年以内）升级的话，证书会自动更新。 环境说明：k8s 1.18.10 以下步骤，在所有 master 节点执行 具体操作步骤 1）检查证书是否过期，以下两个命令均可\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Kubernetes\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"使用 kubeadm 手动更新证书\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.04,\"words\":313},\"filePathRelative\":\"cloudnative/kubernetes/cert-update.md\",\"excerpt\":\"<h1> 使用 kubeadm 手动更新证书</h1>\\n<p>背景：K8S 各个组件需要与 api-server 进行通信，通信使用的证书都存放在 /etc/kubernetes/pki 路径下，kubeadm 生成的证书默认有效为 1 年，因此需要定时更新证书，否则证书到期会导致整个集群不可用。\\n自动更新证书，Kubenetes 在升级控制面板相关组件时会主动更新证书，因此如果保证 Kubernetes 能够定期（一年以内）升级的话，证书会自动更新。</p>\\n<p>环境说明：k8s 1.18.10</p>\\n<p>以下步骤，在所有 master 节点执行</p>\\n<p>具体操作步骤\\n1）检查证书是否过期，以下两个命令均可</p>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

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
