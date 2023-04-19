export const data = {
  "key": "v-60fff667",
  "path": "/build/activemq-install.html",
  "title": "activemq5.15.9集群搭建步骤",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "常见服务的搭建"
    ],
    "tag": [
      "activemq"
    ],
    "summary": "activemq5.15.9集群搭建步骤 下载解压软件 修改主机名 三台主机三分别操作\r\" 注意主机名的设置，不能带下划线，否则会报错\" 修改配置文件 修改以下文件\r\" brokaerName三台主机名称必须一致\" 注释掉``这一行 新增下面内容 directory=\"${activemq.data}/leveldb\" 集群方式 replicas=\"3\" 集",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/build/activemq-install.html"
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
          "content": "activemq5.15.9集群搭建步骤"
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
          "content": "activemq"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "下载解压软件",
      "slug": "下载解压软件",
      "children": []
    },
    {
      "level": 3,
      "title": "修改主机名",
      "slug": "修改主机名",
      "children": []
    },
    {
      "level": 3,
      "title": "修改配置文件",
      "slug": "修改配置文件",
      "children": []
    },
    {
      "level": 3,
      "title": "开放防火墙端口",
      "slug": "开放防火墙端口",
      "children": []
    },
    {
      "level": 3,
      "title": "启动&停止",
      "slug": "启动-停止",
      "children": []
    },
    {
      "level": 3,
      "title": "验证ActiveMQ集群高可用",
      "slug": "验证activemq集群高可用",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 2.01,
    "words": 603
  },
  "filePathRelative": "build/activemq-install.md"
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
