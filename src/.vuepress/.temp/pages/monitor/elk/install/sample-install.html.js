export const data = {
  "key": "v-a99caf98",
  "path": "/monitor/elk/install/sample-install.html",
  "title": "Elasticsearch的安装和简单配置",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "ELK"
    ],
    "summary": "Elasticsearch的安装和简单配置 安装 安装JAVA 运维Elasticsearch，需要安装并配置JDK，设置$JAVA_HOME; 各个版本对Java的依赖; Elasticsearch 5 需要Java8以上的版本; Elasticsearch 从6.5开始支持Java11; 7.0 开始，内置了Java环境; 安装Elasticsearch",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/install/sample-install.html"
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
          "content": "Elasticsearch的安装和简单配置"
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
      "title": "安装",
      "slug": "安装",
      "children": [
        {
          "level": 3,
          "title": "安装JAVA",
          "slug": "安装java",
          "children": []
        },
        {
          "level": 3,
          "title": "安装Elasticsearch",
          "slug": "安装elasticsearch",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "配置",
      "slug": "配置",
      "children": [
        {
          "level": 3,
          "title": "Elasticsearch的文件目录结构",
          "slug": "elasticsearch的文件目录结构",
          "children": []
        },
        {
          "level": 3,
          "title": "JVM配置",
          "slug": "jvm配置",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "运行",
      "slug": "运行",
      "children": [
        {
          "level": 3,
          "title": "运行单个实例",
          "slug": "运行单个实例",
          "children": []
        },
        {
          "level": 3,
          "title": "运行多个实例",
          "slug": "运行多个实例",
          "children": []
        },
        {
          "level": 3,
          "title": "安装与查看插件",
          "slug": "安装与查看插件",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 1.01,
    "words": 302
  },
  "filePathRelative": "monitor/elk/install/sample-install.md"
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
