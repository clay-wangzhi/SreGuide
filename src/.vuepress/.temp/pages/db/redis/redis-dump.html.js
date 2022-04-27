export const data = {
  "key": "v-a01d2bb2",
  "path": "/db/redis/redis-dump.html",
  "title": "redis-dump方式导入导出数据",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Redis"
    ],
    "summary": "redis-dump方式导入导出数据 安装redis-dump工具 安装ruby（略）,详见上一章节 数据导出 示例 数据导入 示例 导入本机的6379端口，没有密码时，可以写成下面这样 如果报错，请使用-n选项，使用请参考官方，请谨慎使用！ -n （以二进制形式导入）",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/redis/redis-dump.html"
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
          "content": "redis-dump方式导入导出数据"
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
      "level": 3,
      "title": "安装redis-dump工具",
      "slug": "安装redis-dump工具",
      "children": []
    },
    {
      "level": 3,
      "title": "数据导出",
      "slug": "数据导出",
      "children": []
    },
    {
      "level": 3,
      "title": "数据导入",
      "slug": "数据导入",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.4,
    "words": 121
  },
  "filePathRelative": "db/redis/redis-dump.md"
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
