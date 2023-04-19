export const data = {
  "key": "v-51198775",
  "path": "/basic/linux/qa/mysql-max-con.html",
  "title": "mysql最大连接数的改变",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Linux"
    ],
    "tag": [
      "常见问题"
    ],
    "summary": "mysql最大连接数的改变 在使用MySQL数据库的时候，经常会遇到这么一个问题，就是“Can not connect to MySQL server. Too many connections”-mysql 1040错误，这是因为访问MySQL且还未释放的连接数目已经达到MySQL的上限。通常，mysql的最大连接数默认是100, 最大可以达到16384。",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/basic/linux/qa/mysql-max-con.html"
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
          "content": "mysql最大连接数的改变"
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
          "content": "常见问题"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "命令行修改",
      "slug": "命令行修改",
      "children": []
    },
    {
      "level": 3,
      "title": "修改配置文件",
      "slug": "修改配置文件",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.98,
    "words": 294
  },
  "filePathRelative": "basic/linux/qa/mysql-max-con.md"
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
