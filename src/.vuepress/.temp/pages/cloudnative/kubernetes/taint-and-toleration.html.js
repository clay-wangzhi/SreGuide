export const data = {
  "key": "v-7795d718",
  "path": "/cloudnative/kubernetes/taint-and-toleration.html",
  "title": "Kubernetes 污点 Taint 和容忍 Toleration",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "Kubernetes 污点 Taint 和容忍 Toleration\r\" 转载自：Kubernetes 污点 Taint 和容忍 Toleration | 超级小豆丁\" 参考地址：kubernetes 官方文档 Taint And Toleration 一、介绍 ​ 在 Kubernetes 中，节点亲和性 NodeAffinity 是 Pod 上定义的一种",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/taint-and-toleration.html"
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
          "content": "Kubernetes 污点 Taint 和容忍 Toleration"
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
      "title": "一、介绍",
      "slug": "一、介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "二、污点 taints",
      "slug": "二、污点-taints",
      "children": [
        {
          "level": 3,
          "title": "1、查看污点",
          "slug": "_1、查看污点",
          "children": []
        },
        {
          "level": 3,
          "title": "2、设置污点",
          "slug": "_2、设置污点",
          "children": []
        },
        {
          "level": 3,
          "title": "3、删除污点",
          "slug": "_3、删除污点",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "三、容忍 tolerations",
      "slug": "三、容忍-tolerations",
      "children": [
        {
          "level": 3,
          "title": "1、Pod 设置容忍",
          "slug": "_1、pod-设置容忍",
          "children": []
        },
        {
          "level": 3,
          "title": "2、Node 和 Pod 对于污点与容忍基本概念",
          "slug": "_2、node-和-pod-对于污点与容忍基本概念",
          "children": []
        },
        {
          "level": 3,
          "title": "3、Deployment 中设置容忍",
          "slug": "_3、deployment-中设置容忍",
          "children": []
        },
        {
          "level": 3,
          "title": "4、设置容忍时间",
          "slug": "_4、设置容忍时间",
          "children": []
        },
        {
          "level": 3,
          "title": "5、容忍示例",
          "slug": "_5、容忍示例",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "四、其它",
      "slug": "四、其它",
      "children": [
        {
          "level": 3,
          "title": "1、污点驱逐",
          "slug": "_1、污点驱逐",
          "children": []
        },
        {
          "level": 3,
          "title": "2、设置节点失效后 Pod 转移前等待时间",
          "slug": "_2、设置节点失效后-pod-转移前等待时间",
          "children": []
        },
        {
          "level": 3,
          "title": "3、Daemonset 调度问题",
          "slug": "_3、daemonset-调度问题",
          "children": []
        },
        {
          "level": 3,
          "title": "4、设置允许Pod调度到Master节点",
          "slug": "_4、设置允许pod调度到master节点",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 9.17,
    "words": 2752
  },
  "filePathRelative": "cloudnative/kubernetes/taint-and-toleration.md"
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
