export const data = {
  "key": "v-1aa05a8f",
  "path": "/linux/basic/logrotate.html",
  "title": "日志logrotate",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Linux"
    ],
    "summary": "日志logrotate logrotate简介 日志是Linux系统中最重要的部分之一，通过日志可以知道系统中正在发生什么或者发生过什么，极大的方便了系统管理，常见的linux发行版中都自带了logrotate程序来管理系统日志，当然logrotate也可以用来管理软件日志。使用logrotate有以下几点好处： 1.大多数系统自带，不用安装 2.配置简单，",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/linux/basic/logrotate.html"
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
          "content": "日志logrotate"
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
      "title": "logrotate简介",
      "slug": "logrotate简介",
      "children": []
    },
    {
      "level": 2,
      "title": "配置文件",
      "slug": "配置文件",
      "children": []
    },
    {
      "level": 2,
      "title": "切割介绍",
      "slug": "切割介绍",
      "children": [
        {
          "level": 3,
          "title": "其他重要参数说明",
          "slug": "其他重要参数说明",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "logrotate日志切割轮询",
      "slug": "logrotate日志切割轮询",
      "children": []
    },
    {
      "level": 2,
      "title": "nginx日志配置",
      "slug": "nginx日志配置",
      "children": []
    },
    {
      "level": 2,
      "title": "tomcat日志配置",
      "slug": "tomcat日志配置",
      "children": []
    },
    {
      "level": 2,
      "title": "解决logrotate无法自动轮询日志的办法",
      "slug": "解决logrotate无法自动轮询日志的办法",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 7.15,
    "words": 2145
  },
  "filePathRelative": "linux/basic/logrotate.md"
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
