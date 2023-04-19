export const data = {
  "key": "v-219cbae0",
  "path": "/db/redis/redis-slave.html",
  "title": "centos7安装redis-5.0.0主从",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Redis"
    ],
    "summary": "centos7安装redis-5.0.0主从 下载redis-5.0.0安装包 从官网下载安装包 编译安装 安装gcc依赖 编辑配置文件 主服务器 vim conf/redis.conf增加以下内容 bind 中的IP地址为服务器IP地址 从服务器 和主服务器操作相同 改变redis.conf中bind地址 打开replicaof并改为主服务器地址即可 启动",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/redis/redis-slave.html"
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
          "content": "centos7安装redis-5.0.0主从"
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
      "title": "下载redis-5.0.0安装包",
      "slug": "下载redis-5-0-0安装包",
      "children": []
    },
    {
      "level": 2,
      "title": "编译安装",
      "slug": "编译安装",
      "children": []
    },
    {
      "level": 2,
      "title": "编辑配置文件",
      "slug": "编辑配置文件",
      "children": [
        {
          "level": 3,
          "title": "主服务器",
          "slug": "主服务器",
          "children": []
        },
        {
          "level": 3,
          "title": "从服务器",
          "slug": "从服务器",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "启动服务",
      "slug": "启动服务",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 2.88,
    "words": 864
  },
  "filePathRelative": "db/redis/redis-slave.md"
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
