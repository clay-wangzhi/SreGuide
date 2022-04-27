export const data = {
  "key": "v-5c0dc3f1",
  "path": "/db/redis/operate/key.html",
  "title": "键命令",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Redis"
    ],
    "summary": "键命令 查找键; 参数⽀持正则表达式 判断键是否存在，; 如果存在返回1，不存在返回0 查看键对应的value的类型; 删除键; 设置过期时间; 以秒为单位，如果没有指定过期时间则⼀直存在，直到使⽤DEL移除 查看有效时间; 以秒为单位",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/redis/operate/key.html"
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
          "content": "键命令"
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
  "headers": [],
  "readingTime": {
    "minutes": 0.35,
    "words": 104
  },
  "filePathRelative": "db/redis/operate/key.md"
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
