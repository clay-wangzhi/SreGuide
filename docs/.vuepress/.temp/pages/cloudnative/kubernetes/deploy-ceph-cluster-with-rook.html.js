export const data = {
  "key": "v-399e5546",
  "path": "/cloudnative/kubernetes/deploy-ceph-cluster-with-rook.html",
  "title": "使用 Rook 快速搭建 Ceph 集群",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "使用 Rook 快速搭建 Ceph 集群 在容器世界中，无状态是一个核心原则，然而我们始终需要保存数据，并提供给他人进行访问。所以就需要一个方案用于保持数据，以备重启之需。 在 Kubernetes 中，PVC 是管理有状态应用的一个推荐方案。有了 PVC 的帮助，Pod 可以申请并连接到存储卷，这些存储卷在 Pod 生命周期结束之后，还能独立存在。 PVC",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/deploy-ceph-cluster-with-rook.html"
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
          "content": "使用 Rook 快速搭建 Ceph 集群"
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
      "title": "Ceph & Rook 简介",
      "slug": "ceph-rook-简介",
      "children": [
        {
          "level": 3,
          "title": "Ceph 是什么",
          "slug": "ceph-是什么",
          "children": []
        },
        {
          "level": 3,
          "title": "Rook 是什么",
          "slug": "rook-是什么",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "在 Kubernetes 上部署 Rook",
      "slug": "在-kubernetes-上部署-rook",
      "children": [
        {
          "level": 3,
          "title": "前提条件",
          "slug": "前提条件",
          "children": []
        },
        {
          "level": 3,
          "title": "安装",
          "slug": "安装",
          "children": []
        },
        {
          "level": 3,
          "title": "Rook 工具箱 & dashboard",
          "slug": "rook-工具箱-dashboard",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "问题",
      "slug": "问题",
      "children": []
    },
    {
      "level": 2,
      "title": "参考链接",
      "slug": "参考链接",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 8.43,
    "words": 2529
  },
  "filePathRelative": "cloudnative/kubernetes/deploy-ceph-cluster-with-rook.md"
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
