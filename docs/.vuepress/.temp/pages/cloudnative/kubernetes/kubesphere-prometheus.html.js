export const data = {
  "key": "v-bf1e8e2e",
  "path": "/cloudnative/kubernetes/kubesphere-prometheus.html",
  "title": "使用 kubesphere3.1.1 监控功能遇到的问题",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "使用 kubesphere3.1.1 监控功能遇到的问题 接入自定义 Prometheus\r\" :warning:\"\r\"\"\r\" * node-exporter 和 kube-state-metrics 两个组件的版本一定要 kubeSphere 吻合\"\r\"\"\r\" * 如果使用helm部署的， prometheus-rules.yaml 和 prometheu",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/kubesphere-prometheus.html"
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
          "content": "使用 kubesphere3.1.1 监控功能遇到的问题"
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
      "title": "接入自定义 Prometheus",
      "slug": "接入自定义-prometheus",
      "children": [
        {
          "level": 3,
          "title": "最小化部署kubesphere",
          "slug": "最小化部署kubesphere",
          "children": []
        },
        {
          "level": 3,
          "title": "将 KubeSphere 自定义组件安装至您的 Prometheus 堆栈",
          "slug": "将-kubesphere-自定义组件安装至您的-prometheus-堆栈",
          "children": []
        },
        {
          "level": 3,
          "title": "已知问题",
          "slug": "已知问题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "使用 kubesphere 自带监控 监控二进制部署的k8s",
      "slug": "使用-kubesphere-自带监控-监控二进制部署的k8s",
      "children": [
        {
          "level": 3,
          "title": "kubesphere监控外部etcd集群",
          "slug": "kubesphere监控外部etcd集群",
          "children": []
        },
        {
          "level": 3,
          "title": "kubesphere监控外部controller-manager和scheduler",
          "slug": "kubesphere监控外部controller-manager和scheduler",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "其他问题",
      "slug": "其他问题",
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
    "minutes": 6.81,
    "words": 2044
  },
  "filePathRelative": "cloudnative/kubernetes/kubesphere-prometheus.md"
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
