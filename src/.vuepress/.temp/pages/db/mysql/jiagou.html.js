export const data = {
  "key": "v-426b1ca9",
  "path": "/db/mysql/jiagou.html",
  "title": "11 MySQL逻辑架构",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "MySQL"
    ],
    "summary": "11 MySQL逻辑架构 mysql架构 mysql架构分为三层： 1. 服务层：为客户请求做连接处理、授权认证、安全等 2. 核心层：查询解析，分析，优化，缓存，所有内建函数；存储过程，触发器，视图等 3. 存储引擎层：存储和提取数据以及事务处理 服务层 ​ 核心层 ​ 存储引擎层 ​ 总图 ​",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/mysql/jiagou.html"
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
          "content": "11 MySQL逻辑架构"
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
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "mysql架构",
      "slug": "mysql架构",
      "children": [
        {
          "level": 3,
          "title": "服务层",
          "slug": "服务层",
          "children": []
        },
        {
          "level": 3,
          "title": "核心层",
          "slug": "核心层",
          "children": []
        },
        {
          "level": 3,
          "title": "存储引擎层",
          "slug": "存储引擎层",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "总图",
      "slug": "总图",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.38,
    "words": 113
  },
  "filePathRelative": "db/mysql/jiagou.md"
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
