export const data = {
  "key": "v-0af65a54",
  "path": "/cloudnative/kubernetes/helm-prometheus-operator.html",
  "title": "使用 Helm 和 Operator 快速部署 Prometheus",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "使用 Helm 和 Operator 快速部署 Prometheus 随着heapster项目停止更新并慢慢被metrics-server取代，集群监控这项任务也将最终转移。prometheus的监控理念、数据结构设计其实相当精简，包括其非常灵活的查询语言；但是对于初学者来说，想要在k8s集群中实践搭建一套相对可用的部署却比较麻烦，由此还产生了不少专门的项目",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/helm-prometheus-operator.html"
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
          "content": "使用 Helm 和 Operator 快速部署 Prometheus"
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
      "title": "安装 Helm",
      "slug": "安装-helm",
      "children": []
    },
    {
      "level": 2,
      "title": "准备",
      "slug": "准备",
      "children": []
    },
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": []
    },
    {
      "level": 2,
      "title": "验证安装",
      "slug": "验证安装",
      "children": []
    },
    {
      "level": 2,
      "title": "管理",
      "slug": "管理",
      "children": []
    },
    {
      "level": 2,
      "title": "管理操作",
      "slug": "管理操作",
      "children": []
    },
    {
      "level": 2,
      "title": "增加钉钉告警",
      "slug": "增加钉钉告警",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 4.11,
    "words": 1233
  },
  "filePathRelative": "cloudnative/kubernetes/helm-prometheus-operator.md"
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
