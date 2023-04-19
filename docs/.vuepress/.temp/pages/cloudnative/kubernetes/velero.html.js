export const data = {
  "key": "v-62d595a7",
  "path": "/cloudnative/kubernetes/velero.html",
  "title": "velero 备份恢复",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "velero 备份恢复 方案制定 1. 物理备份：etcd 备份，保存某一个时刻的快照，快捷方便。 2. 逻辑备份：velero 备份 ，允许用户自己选择备份的内容，比如单个 namespace、指定资源类型等 物理备份的优点是速度快，无论是备份还是回恢复，但缺点是元数据不可读，只能全部恢复。而逻辑备份正好相反，因此两者可以结合使用，既能快，又能有细粒度控制",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/velero.html"
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
          "content": "velero 备份恢复"
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
      "title": "方案制定",
      "slug": "方案制定",
      "children": []
    },
    {
      "level": 2,
      "title": "备份信息",
      "slug": "备份信息",
      "children": []
    },
    {
      "level": 2,
      "title": "velero 备份恢复操作步骤",
      "slug": "velero-备份恢复操作步骤",
      "children": [
        {
          "level": 3,
          "title": "velero 备份",
          "slug": "velero-备份",
          "children": []
        },
        {
          "level": 3,
          "title": "velero 恢复",
          "slug": "velero-恢复",
          "children": []
        },
        {
          "level": 3,
          "title": "其他",
          "slug": "其他",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 2.1,
    "words": 630
  },
  "filePathRelative": "cloudnative/kubernetes/velero.md"
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
