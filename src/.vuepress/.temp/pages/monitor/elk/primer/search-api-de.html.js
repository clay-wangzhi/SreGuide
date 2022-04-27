export const data = {
  "key": "v-b5e49b3a",
  "path": "/monitor/elk/primer/search-api-de.html",
  "title": "URI Search详解",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "ELK"
    ],
    "summary": "URI Search详解 通过URI query实现搜索 q 指定查询语句，使用Query String Syntax; df 指定默认字段，不指定时会对所有字段进行查询; Sort排序 / from 和size用于分页; Profile 可以查看查询是如何被执行的; Query String Syntax 指定字段 v.s 泛查询; q=title:201",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/primer/search-api-de.html"
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
          "content": "URI Search详解"
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
          "content": "ELK"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "通过URI query实现搜索",
      "slug": "通过uri-query实现搜索",
      "children": [
        {
          "level": 3,
          "title": "Query String Syntax",
          "slug": "query-string-syntax",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 0.96,
    "words": 288
  },
  "filePathRelative": "monitor/elk/primer/search-api-de.md"
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
