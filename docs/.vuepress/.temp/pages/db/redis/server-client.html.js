export const data = {
  "key": "v-9b126160",
  "path": "/db/redis/server-client.html",
  "title": "服务器端和客户端命令",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Redis"
    ],
    "summary": "服务器端和客户端命令 服务器端 服务器端的命令为redis-server 可以使⽤help查看帮助⽂档 推荐使⽤服务的⽅式管理redis服务 启动 停⽌ 重启 个人习惯 客户端 客户端的命令为redis-cli 可以使⽤help查看帮助⽂档 连接redis 运⾏测试命令 切换数据库 数据库没有名称，默认有16个，通过0-15来标识，连接redis默认选择第一",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/redis/server-client.html"
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
          "content": "服务器端和客户端命令"
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
      "title": "服务器端",
      "slug": "服务器端",
      "children": []
    },
    {
      "level": 2,
      "title": "客户端",
      "slug": "客户端",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.61,
    "words": 183
  },
  "filePathRelative": "db/redis/server-client.md"
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
