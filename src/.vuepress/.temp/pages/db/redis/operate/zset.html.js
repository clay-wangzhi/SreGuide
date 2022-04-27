export const data = {
  "key": "v-5384c60c",
  "path": "/db/redis/operate/zset.html",
  "title": "zset 类型",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Redis"
    ],
    "summary": "zset 类型 sorted set，有序集合; 元素为string类型; 元素具有唯⼀性，不重复; 每个元素都会关联⼀个double类型的score，表示权重，通过权重将元素从⼩到⼤排序; 说明：没有修改操作; 增加 添加; 例1：向键'a4'的集合中添加元素'lisi'、'wangwu'、'zhaoliu'、'zhangsan'，权重分别为4、5、6、3",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/redis/operate/zset.html"
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
          "content": "zset 类型"
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
    "minutes": 1.09,
    "words": 328
  },
  "filePathRelative": "db/redis/operate/zset.md"
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
