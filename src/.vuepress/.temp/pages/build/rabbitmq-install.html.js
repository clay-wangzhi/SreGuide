export const data = {
  "key": "v-9e4f7a5a",
  "path": "/build/rabbitmq-install.html",
  "title": "centos7安装rabbitmq-3.7.9",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "常见服务的搭建"
    ],
    "tag": [
      "rabbitmq"
    ],
    "summary": "centos7安装rabbitmq-3.7.9 安装方式：rpm包安装 系统版本: centos7.x 安装erlang 安装erlang-rpm包，该包经过RabbitMQ官方处理，去掉了一些无用的依赖，只保存运行RabbitMQ所需要的Erlang模块。 这里下载的版本为21.2 下载完后上传到服务器上，安装 安装rabbitmq 从官网下载rpm包并上",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/build/rabbitmq-install.html"
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
          "content": "centos7安装rabbitmq-3.7.9"
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
          "content": "rabbitmq"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装erlang",
      "slug": "安装erlang",
      "children": []
    },
    {
      "level": 2,
      "title": "安装rabbitmq",
      "slug": "安装rabbitmq",
      "children": []
    },
    {
      "level": 2,
      "title": "启动rabbitmq",
      "slug": "启动rabbitmq",
      "children": []
    },
    {
      "level": 2,
      "title": "配置rabbitmq",
      "slug": "配置rabbitmq",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.02,
    "words": 305
  },
  "filePathRelative": "build/rabbitmq-install.md"
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
