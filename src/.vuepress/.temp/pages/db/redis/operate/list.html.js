export const data = {
  "key": "v-df69f078",
  "path": "/db/redis/operate/list.html",
  "title": "list类型",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Redis"
    ],
    "summary": "list类型 列表的元素类型为string; 按照插⼊顺序排序; 增加 在左侧插⼊数据; 在右侧插⼊数据; 在指定元素的前或后插⼊新元素; 获取 返回列表⾥指定范围内的元素; start、stop为元素的下标索引; 索引从左侧开始，第⼀个元素为0; 索引可以是负数，表示从尾部开始计数，如-1表示最后⼀个元素; 设置指定索引位置的元素值 索引从左侧开始，第⼀个",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/redis/operate/list.html"
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
          "content": "list类型"
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
      "title": "增加",
      "slug": "增加",
      "children": []
    },
    {
      "level": 2,
      "title": "获取",
      "slug": "获取",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.08,
    "words": 323
  },
  "filePathRelative": "db/redis/operate/list.md"
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
