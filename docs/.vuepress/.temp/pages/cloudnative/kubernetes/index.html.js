export const data = {
  "key": "v-1f0f80e6",
  "path": "/cloudnative/kubernetes/",
  "title": "Kubernetes 学习笔记",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "icon": "kubernetes",
    "tag": [
      "Kubernetes"
    ],
    "summary": "Kubernetes 学习笔记 Summary\r集群搭建; \r使用 ansible 快速搭建 k8s 集群; \r常见应用安装配置; \rharbor 安装配置(k8s); \rharbor 高可用安装(docker-compose); \rrancher 安装配置; \rhelm 安装配置; \r容器运行时; \rGPU 适配; \rKata Container; \r存储",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/"
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
          "content": "Kubernetes 学习笔记"
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
      "level": 2,
      "title": "Summary",
      "slug": "summary",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.77,
    "words": 532
  },
  "filePathRelative": "cloudnative/kubernetes/readme.md"
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
