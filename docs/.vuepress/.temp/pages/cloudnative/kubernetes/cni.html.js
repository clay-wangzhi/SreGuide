export const data = {
  "key": "v-16624cc8",
  "path": "/cloudnative/kubernetes/cni.html",
  "title": "CNI",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "\" 转载自： 理解CNI和CNI插件 | 阿里云原生\" CNI CNI 是什么 CNI，它的全称是 Container Network Interface，即容器网络的 API 接口。 它是 K8s 中标准的一个调用网络实现的接口。Kubelet 通过这个标准的 API 来调用不同的网络插件以实现不同的网络配置方式。 k8s 中如何使用CNI K8s 通过 ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/cni.html"
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
          "content": "CNI"
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
      "title": "CNI 是什么",
      "slug": "cni-是什么",
      "children": []
    },
    {
      "level": 2,
      "title": "k8s 中如何使用CNI",
      "slug": "k8s-中如何使用cni",
      "children": []
    },
    {
      "level": 2,
      "title": "哪个 CNI 插件适合我",
      "slug": "哪个-cni-插件适合我",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 2.63,
    "words": 789
  },
  "filePathRelative": "cloudnative/kubernetes/cni.md"
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
