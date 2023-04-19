export const data = {
  "key": "v-890930f8",
  "path": "/cloudnative/kubernetes/kubeasz-install-k8s.html",
  "title": "使用 kubeasz 安装 kubernetes",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "使用 kubeasz 安装 kubernetes\r\" github 地址：https://github.com/easzlab/kubeasz\" 项目致力于提供快速部署高可用k8s集群的工具, 同时也努力成为k8s实践、使用的参考书；基于二进制方式部署和利用ansible-playbook实现自动化；既提供一键安装脚本, 也可以根据安装指南分步执行安装各个组",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/kubeasz-install-k8s.html"
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
          "content": "使用 kubeasz 安装 kubernetes"
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
      "title": "集群规划和基础参数设定",
      "slug": "集群规划和基础参数设定",
      "children": []
    },
    {
      "level": 2,
      "title": "部署步骤",
      "slug": "部署步骤",
      "children": [
        {
          "level": 3,
          "title": "1. 在部署节点安装ansible及准备ssh免密登陆",
          "slug": "_1-在部署节点安装ansible及准备ssh免密登陆",
          "children": []
        },
        {
          "level": 3,
          "title": "2. 在部署节点编排k8s安装",
          "slug": "_2-在部署节点编排k8s安装",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 2.26,
    "words": 677
  },
  "filePathRelative": "cloudnative/kubernetes/kubeasz-install-k8s.md"
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
