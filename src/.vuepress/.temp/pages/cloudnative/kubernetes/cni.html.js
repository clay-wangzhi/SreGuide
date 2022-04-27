export const data = {
  "key": "v-16624cc8",
  "path": "/cloudnative/kubernetes/cni.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "CNI 是什么 首先我们介绍一下什么是 CNI，它的全称是 Container Network Interface，即容器网络的 API 接口。 它是 K8s 中标准的一个调用网络实现的接口。Kubelet 通过这个标准的 API 来调用不同的网络插件以实现不同的网络配置方式，实现了这个接口的就是 CNI 插件，它实现了一系列的 CNI API 接口。常见的",
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
      "title": "哪个 CNI 插件适合我",
      "slug": "哪个-cni-插件适合我",
      "children": []
    },
    {
      "level": 2,
      "title": "常用网络术语",
      "slug": "常用网络术语",
      "children": []
    },
    {
      "level": 2,
      "title": "Flannel",
      "slug": "flannel",
      "children": [
        {
          "level": 3,
          "title": "Flannel 数据转发模式之 UDP",
          "slug": "flannel-数据转发模式之-udp",
          "children": []
        },
        {
          "level": 3,
          "title": "Flannel 数据转发模式之 VXLAN",
          "slug": "flannel-数据转发模式之-vxlan",
          "children": []
        },
        {
          "level": 3,
          "title": "Flannel 数据转发模式之 Host-gw",
          "slug": "flannel-数据转发模式之-host-gw",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "calico 为什么效率比 flannel 高",
      "slug": "calico-为什么效率比-flannel-高",
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
    "minutes": 6.7,
    "words": 2011
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
