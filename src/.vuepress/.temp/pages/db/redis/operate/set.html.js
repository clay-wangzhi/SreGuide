export const data = {
  "key": "v-dae22064",
  "path": "/db/redis/operate/set.html",
  "title": "set 类型",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Redis"
    ],
    "summary": "set 类型 ⽆序集合; 元素为string类型; 元素具有唯⼀性，不重复; 说明：对于集合没有修改操作; 增加 添加元素; 例1：向键'a3'的集合中添加元素'zhangsan'、'lisi'、'wangwu'; 获取 返回所有的元素; 例2：获取键'a3'的集合中所有元素; 删除 删除指定元素; 例3：删除键'a3'的集合中元素'wangwu';",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/redis/operate/set.html"
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
          "content": "set 类型"
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
    "minutes": 0.4,
    "words": 119
  },
  "filePathRelative": "db/redis/operate/set.md"
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
