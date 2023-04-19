export const data = {
  "key": "v-3f18b850",
  "path": "/code/python/python-io-model.html",
  "title": "17 IO 模型",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Python"
    ],
    "summary": "17 IO 模型 重要概念 同步、异步 函数或方法被调用的时候，调用者是否得到最终结果的。 直接得到最终结果结果的，就是同步调用； 不直接得到最终结果的，就是异步调用。 阻塞、非阻塞 函数或方法调用的时候，是否立刻返回。 立即返回就是非阻塞调用； 不立即返回就是阻塞调用。 区别 同步、异步，与阻塞、非阻塞不相关。 同步、异步强调的是，是否得到（最终的）结果；",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/python/python-io-model.html"
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
          "content": "17 IO 模型"
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
      "title": "重要概念",
      "slug": "重要概念",
      "children": [
        {
          "level": 3,
          "title": "同步、异步",
          "slug": "同步、异步",
          "children": []
        },
        {
          "level": 3,
          "title": "阻塞、非阻塞",
          "slug": "阻塞、非阻塞",
          "children": []
        },
        {
          "level": 3,
          "title": "区别",
          "slug": "区别",
          "children": []
        },
        {
          "level": 3,
          "title": "联系",
          "slug": "联系",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "IO两个阶段",
      "slug": "io两个阶段",
      "children": []
    },
    {
      "level": 2,
      "title": "同步 IO 模型",
      "slug": "同步-io-模型",
      "children": [
        {
          "level": 3,
          "title": "阻塞 IO",
          "slug": "阻塞-io",
          "children": []
        },
        {
          "level": 3,
          "title": "非阻塞 IO",
          "slug": "非阻塞-io",
          "children": []
        },
        {
          "level": 3,
          "title": "IO多路复用",
          "slug": "io多路复用",
          "children": []
        },
        {
          "level": 3,
          "title": "信号驱动IO",
          "slug": "信号驱动io",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "异步 IO",
      "slug": "异步-io",
      "children": []
    },
    {
      "level": 2,
      "title": "Python 中 IO多路复用",
      "slug": "python-中-io多路复用",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 9.02,
    "words": 2706
  },
  "filePathRelative": "code/python/python-io-model.md"
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
