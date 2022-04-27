export const data = {
  "key": "v-7eca6a15",
  "path": "/monitor/elk/install/docker-elk.html",
  "title": "在Docker容器中运行Elasticsearch，Kibana和Cerebro",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "ELK"
    ],
    "summary": "在Docker容器中运行Elasticsearch，Kibana和Cerebro Elastic Stack 与Docker 容器 Elastic官方提供Docker Image; 如果安装定制的插件，可以写Dockerfile，将官方Image设为Base Image; 2018年12月加入CNCF，提供helm; 2019年5月，7.1版本发布，同时发布",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/install/docker-elk.html"
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
          "content": "在Docker容器中运行Elasticsearch，Kibana和Cerebro"
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
      "title": "Elastic Stack 与Docker 容器",
      "slug": "elastic-stack-与docker-容器",
      "children": []
    },
    {
      "level": 2,
      "title": "编写dockerfile",
      "slug": "编写dockerfile",
      "children": []
    },
    {
      "level": 2,
      "title": "启动/关闭",
      "slug": "启动-关闭",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.9,
    "words": 271
  },
  "filePathRelative": "monitor/elk/install/docker-elk.md"
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
