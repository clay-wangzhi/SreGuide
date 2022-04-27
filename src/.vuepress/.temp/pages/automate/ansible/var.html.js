export const data = {
  "key": "v-cdb6e4aa",
  "path": "/automate/ansible/var.html",
  "title": "5 Ansible变量",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "5 Ansible变量 变量优先级 这些变量定义的方法，它们的优先级如下： 1. 在命令行中定义的变量（即用-e或--extra-vars定义的变量）； 2. 在Inventory中定义的连接变量（比如：ansiblesshuser）; 3. 大多数的其他变量（命令行转换、play中的变量、included的变量、role中的变量等）； 4. 在Invent",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/var.html"
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
          "content": "5 Ansible变量"
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
          "content": "Ansible"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-03-20T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "变量优先级",
      "slug": "变量优先级",
      "children": []
    },
    {
      "level": 2,
      "title": "变量作用域",
      "slug": "变量作用域",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.28,
    "words": 384
  },
  "filePathRelative": "automate/ansible/var.md"
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
