export const data = {
  "key": "v-b121e484",
  "path": "/web/tomcat/dead.html",
  "title": "tomcat假死现象",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-08T00:00:00.000Z",
    "category": [
      "web中间件"
    ],
    "tag": [
      "Tomcat"
    ],
    "summary": "tomcat假死现象 1 背景 1.1 编写目的 为了方便大家以后发现进程假死的时候能够正常的分析并且第一时间保留现场快照。 1.2编写背景 最近服务器发现tomcat的应用会偶尔出现无法访问的情况。经过一段时间的观察最近又发现有台tomcat的应用出 现了无法访问情况。简单描述下该台tomcat当时具体的表现：客户端请求没有响应，查看服务器端tomcat的",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/web/tomcat/dead.html"
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
          "content": "tomcat假死现象"
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
          "content": "Tomcat"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-03-08T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1.1 编写目的",
      "slug": "_1-1-编写目的",
      "children": []
    },
    {
      "level": 2,
      "title": "1.2编写背景",
      "slug": "_1-2编写背景",
      "children": []
    },
    {
      "level": 2,
      "title": "2.1检查nginx的网络情况",
      "slug": "_2-1检查nginx的网络情况",
      "children": []
    },
    {
      "level": 2,
      "title": "2.2检查tomcat 的网络情况",
      "slug": "_2-2检查tomcat-的网络情况",
      "children": []
    },
    {
      "level": 2,
      "title": "3.1为什么会发生内存泄漏",
      "slug": "_3-1为什么会发生内存泄漏",
      "children": []
    },
    {
      "level": 2,
      "title": "3.2快速定位问题",
      "slug": "_3-2快速定位问题",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.83,
    "words": 2048
  },
  "filePathRelative": "web/tomcat/dead.md"
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
