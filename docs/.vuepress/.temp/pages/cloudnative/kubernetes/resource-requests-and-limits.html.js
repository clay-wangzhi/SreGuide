export const data = {
  "key": "v-ae3b9898",
  "path": "/cloudnative/kubernetes/resource-requests-and-limits.html",
  "title": "Kubernetes 资源请求和限制",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "Kubernetes 资源请求和限制\r\" 转载自：\" 资源调度是 Kubernetes 的核心功能之一。Kubernetes 调度程序确保容器获得足够的资源以正确执行。此过程由调度策略控制。在深入研究调度程序的工作原理之前，我们确保我们了解 Kubernetes 集群内部资源定义，分配和限制的基本结构。 资源类型 Kubernetes 只有两个内置的可管理资",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/resource-requests-and-limits.html"
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
          "content": "Kubernetes 资源请求和限制"
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
      "title": "资源类型",
      "slug": "资源类型",
      "children": []
    },
    {
      "level": 2,
      "title": "资源请求和限制",
      "slug": "资源请求和限制",
      "children": []
    },
    {
      "level": 2,
      "title": "定义 CPU 请求和限制",
      "slug": "定义-cpu-请求和限制",
      "children": [
        {
          "level": 3,
          "title": "不同云提供商的 CPU 单元",
          "slug": "不同云提供商的-cpu-单元",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "定义内存请求和限制",
      "slug": "定义内存请求和限制",
      "children": []
    },
    {
      "level": 2,
      "title": "请求和限制配置示例",
      "slug": "请求和限制配置示例",
      "children": []
    },
    {
      "level": 2,
      "title": "命名空间设定请求和限制",
      "slug": "命名空间设定请求和限制",
      "children": [
        {
          "level": 3,
          "title": "资源配额（ResourceQuotas）",
          "slug": "资源配额-resourcequotas",
          "children": []
        },
        {
          "level": 3,
          "title": "限制范围（LimitRanges）",
          "slug": "限制范围-limitranges",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Kubernetes Pod 的生命周期",
      "slug": "kubernetes-pod-的生命周期",
      "children": []
    },
    {
      "level": 2,
      "title": "如果 Kubernetes 进入过量使用状态怎么办？",
      "slug": "如果-kubernetes-进入过量使用状态怎么办",
      "children": []
    },
    {
      "level": 2,
      "title": "TODO",
      "slug": "todo",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 7.84,
    "words": 2353
  },
  "filePathRelative": "cloudnative/kubernetes/resource-requests-and-limits.md"
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
