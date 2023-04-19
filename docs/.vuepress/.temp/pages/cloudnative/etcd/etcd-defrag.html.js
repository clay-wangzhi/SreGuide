export const data = {
  "key": "v-5257418c",
  "path": "/cloudnative/etcd/etcd-defrag.html",
  "title": "ETCD 磁盘空间爆满解决方案",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "etcd"
    ],
    "summary": "ETCD 磁盘空间爆满解决方案 \" etcd默认的空间配额限制为2G，超出空间配额限制就会影响服务，所以需要定期清理\" 查看集群状态 查看ETCD集群报警情况 输出为： \" 此处 alarm 提示 NOSPACE，需要升级 ETCD 集群的空间（默认为2G的磁盘使用空间），或者压缩老数据，升级空间后，需要使用 etcd命令，取消此报警信息，否则集群依旧无法使",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/etcd/etcd-defrag.html"
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
          "content": "ETCD 磁盘空间爆满解决方案"
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
          "content": "etcd"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "查看集群状态",
      "slug": "查看集群状态",
      "children": []
    },
    {
      "level": 2,
      "title": "增加etcd的容量",
      "slug": "增加etcd的容量",
      "children": []
    },
    {
      "level": 2,
      "title": "压缩老数据",
      "slug": "压缩老数据",
      "children": []
    },
    {
      "level": 2,
      "title": "解除告警",
      "slug": "解除告警",
      "children": []
    },
    {
      "level": 2,
      "title": "验证可以添加新数据",
      "slug": "验证可以添加新数据",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.66,
    "words": 499
  },
  "filePathRelative": "cloudnative/etcd/etcd-defrag.md"
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
