export const data = {
  "key": "v-a659ac38",
  "path": "/cloudnative/kubernetes/ingress-nginx.html",
  "title": "ingress-nginx 安装配置",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "ingress-nginx 安装配置 对外暴露集群服务 前面我们学习了在 Kubernetes 集群内部使用 kube-dns 实现服务发现的功能，那么我们部署在 Kubernetes 集群中的应用如何暴露给外部的用户使用呢？我们知道可以使用 NodePort 和 LoadBlancer 类型的 Service 可以把应用暴露给外部用户使用，除此之外，Kub",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/ingress-nginx.html"
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
          "content": "ingress-nginx 安装配置"
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
      "title": "安装",
      "slug": "安装",
      "children": [
        {
          "level": 3,
          "title": "安装 helm",
          "slug": "安装-helm",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Ingress-demo",
      "slug": "ingress-demo",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.88,
    "words": 2065
  },
  "filePathRelative": "cloudnative/kubernetes/ingress-nginx.md"
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
