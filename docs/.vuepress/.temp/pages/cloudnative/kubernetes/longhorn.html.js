export const data = {
  "key": "v-5ad137cd",
  "path": "/cloudnative/kubernetes/longhorn.html",
  "title": "Longorn 安装配置",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "Longorn 安装配置 安装配置 功能测试 备份恢复 通过 Longhorn UI 进行配置，我这里使用 腾讯云的 COS 进行备份 首先要 在 rancher 上配置 secret 然后在 longhorn UI 的 settings 页面配置 Backup Target \" :warning: 注意格式，及得在 COS 上提前创建好目录\" 校验是否创建",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/longhorn.html"
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
          "content": "Longorn 安装配置"
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
      "title": "安装配置",
      "slug": "安装配置",
      "children": []
    },
    {
      "level": 2,
      "title": "功能测试",
      "slug": "功能测试",
      "children": [
        {
          "level": 3,
          "title": "备份恢复",
          "slug": "备份恢复",
          "children": []
        },
        {
          "level": 3,
          "title": "其他功能",
          "slug": "其他功能",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 1.28,
    "words": 383
  },
  "filePathRelative": "cloudnative/kubernetes/longhorn.md"
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
