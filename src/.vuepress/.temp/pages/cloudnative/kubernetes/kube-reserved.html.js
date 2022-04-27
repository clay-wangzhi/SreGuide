export const data = {
  "key": "v-76fb0a5e",
  "path": "/cloudnative/kubernetes/kube-reserved.html",
  "title": "kubelet 配置资源预留的姿势",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "kubelet 配置资源预留的姿势 \" 转载自：k8s 技术圈 | 阳明\" Kubernetes 的节点可以按照节点的资源容量进行调度，默认情况下 Pod 能够使用节点全部可用容量。这样就会造成一个问题，因为节点自己通常运行了不少驱动 OS 和 Kubernetes 的系统守护进程。除非为这些系统守护进程留出资源，否则它们将与 Pod 争夺资源并导致节点资源",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/kube-reserved.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "SRE运维进阶之路"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "kubelet 配置资源预留的姿势"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Kubernetes"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Node Allocatable",
      "slug": "node-allocatable",
      "children": []
    },
    {
      "level": 3,
      "title": "配置资源预留",
      "slug": "配置资源预留",
      "children": []
    },
    {
      "level": 3,
      "title": "Eviction 与 OOM",
      "slug": "eviction-与-oom",
      "children": []
    },
    {
      "level": 3,
      "title": "可分配约束",
      "slug": "可分配约束",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.99,
    "words": 2098
  },
  "filePathRelative": "cloudnative/kubernetes/kube-reserved.md"
}

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
