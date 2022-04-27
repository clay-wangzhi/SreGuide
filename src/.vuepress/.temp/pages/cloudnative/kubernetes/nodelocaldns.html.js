export const data = {
  "key": "v-b976b9e8",
  "path": "/cloudnative/kubernetes/nodelocaldns.html",
  "title": "Coredns+Nodelocaldns cache解决Coredns域名解析延迟",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "Coredns+Nodelocaldns cache解决Coredns域名解析延迟 \" 转载自：Coredns+Nodelocaldns cache解决Coredns域名解析延迟\" 目前18.6版本和之前的coredns都会出现超时5s的情况，那么为什么会出现coredns超时的情况发生？ 背景 在Kubernetes中，Pod访问DNS服务器（kube-d",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/nodelocaldns.html"
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
          "content": "Coredns+Nodelocaldns cache解决Coredns域名解析延迟"
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
      "title": "背景",
      "slug": "背景",
      "children": []
    },
    {
      "level": 2,
      "title": "服务是如何工作的？",
      "slug": "服务是如何工作的",
      "children": []
    },
    {
      "level": 2,
      "title": "Linux内核中的DNAT",
      "slug": "linux内核中的dnat",
      "children": []
    },
    {
      "level": 2,
      "title": "问题",
      "slug": "问题",
      "children": []
    },
    {
      "level": 2,
      "title": "缓解措施",
      "slug": "缓解措施",
      "children": []
    },
    {
      "level": 2,
      "title": "意见建议",
      "slug": "意见建议",
      "children": []
    },
    {
      "level": 2,
      "title": "内核修复",
      "slug": "内核修复",
      "children": []
    },
    {
      "level": 2,
      "title": "解决方案如下：",
      "slug": "解决方案如下",
      "children": [
        {
          "level": 3,
          "title": "在 Kubernetes 集群中使用 NodeLocal DNSCache",
          "slug": "在-kubernetes-集群中使用-nodelocal-dnscache",
          "children": []
        },
        {
          "level": 3,
          "title": "在集群中运行 NodeLocal DNSCache 有如下几个好处：",
          "slug": "在集群中运行-nodelocal-dnscache-有如下几个好处",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 17.43,
    "words": 5228
  },
  "filePathRelative": "cloudnative/kubernetes/nodelocaldns.md"
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
