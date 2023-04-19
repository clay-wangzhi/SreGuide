export const data = {
  "key": "v-1369b331",
  "path": "/cloudnative/kubernetes/numa.html",
  "title": "CPU 绑核",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "CPU 绑核 背景：算法集群，跑的应用为CPU 密集型应用，k8s 原来的 CPU调度算法为 CFS（基于时间片的），会产生限流，从而影响性能，影响 响应时间，所有改为 CPU 绑核 内核启动 NUMA 修改 /etc/default/grub 中numa=off 改为numa=on 重新生成grub.cfg 重启检验 k8s 绑核配置步骤 前提条件 k8s",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/numa.html"
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
          "content": "CPU 绑核"
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
      "title": "内核启动 NUMA",
      "slug": "内核启动-numa",
      "children": []
    },
    {
      "level": 2,
      "title": "k8s 绑核配置步骤",
      "slug": "k8s-绑核配置步骤",
      "children": []
    },
    {
      "level": 2,
      "title": "验证 pod 是否绑核成功",
      "slug": "验证-pod-是否绑核成功",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.09,
    "words": 328
  },
  "filePathRelative": "cloudnative/kubernetes/numa.md"
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
