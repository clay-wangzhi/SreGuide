export const data = {
  "key": "v-00a035a9",
  "path": "/cloudnative/kubernetes/delete-rancher-causing-node-disappear.html",
  "title": "卸载 rancher 导致 node 被清空",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "卸载 rancher 导致 node 被清空 问题描述 集群的节点突然全都不见了 (kubectl get node 为空)，导致集群瘫痪，但实际上节点对应的宿主机都还在。因为集群没开审计，所以也不太好查 node 是被什么删除的。 快速恢复 由于当时没有排查出来问题，当时批量重启了服务器，自动拉起 kubelet 重新注册 node，故障恢复。其实只是 k",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/delete-rancher-causing-node-disappear.html"
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
          "content": "卸载 rancher 导致 node 被清空"
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
      "title": "问题描述",
      "slug": "问题描述",
      "children": []
    },
    {
      "level": 2,
      "title": "快速恢复",
      "slug": "快速恢复",
      "children": []
    },
    {
      "level": 2,
      "title": "根因分析（5 why）",
      "slug": "根因分析-5-why",
      "children": []
    },
    {
      "level": 2,
      "title": "教训",
      "slug": "教训",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.19,
    "words": 357
  },
  "filePathRelative": "cloudnative/kubernetes/delete-rancher-causing-node-disappear.md"
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
