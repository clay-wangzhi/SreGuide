export const data = {
  "key": "v-0c5f5f9c",
  "path": "/code/python/python-socketserver.html",
  "title": "11.1 SocketServer",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Python"
    ],
    "summary": "11.1 SocketServer socket 编程过于底层，编程虽然有套路，但是想要写出健壮的代码还是比较困难的，所以很多语言都对 socket 底层 API 进行封装，Python 的封装就是 socketserver 模块。它是网络服务编程框架，便于企业级快速开发。 类的继承关系 SocketServer简化了网络服务器的编写。 它有4个同步类： T",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/python/python-socketserver.html"
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
          "content": "11.1 SocketServer"
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
      "title": "类的继承关系",
      "slug": "类的继承关系",
      "children": []
    },
    {
      "level": 2,
      "title": "编程接口",
      "slug": "编程接口",
      "children": []
    },
    {
      "level": 2,
      "title": "实现 EchoServer",
      "slug": "实现-echoserver",
      "children": []
    },
    {
      "level": 2,
      "title": "总结",
      "slug": "总结",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 4.17,
    "words": 1250
  },
  "filePathRelative": "code/python/python-socketserver.md"
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
