export const data = {
  "key": "v-049ef682",
  "path": "/code/python/python-thread-sync.html",
  "title": "10.2 线程同步",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Python"
    ],
    "summary": "10.2 线程同步 线程同步概念 线程同步，线程间协同，通过某种技术，让一个线程访问某些数据时，其他线程不能访问这些数据，直到该线程完成对数据的操作。 Event Event 事件，是线程间通信机制中最简单的实现，使用一个内部的标记 flag，通过 flag 的 True 或 False 的变化来进行操作。 名称 含义 ------------------ ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/python/python-thread-sync.html"
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
          "content": "10.2 线程同步"
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
      "title": "线程同步概念",
      "slug": "线程同步概念",
      "children": []
    },
    {
      "level": 2,
      "title": "Event",
      "slug": "event",
      "children": []
    },
    {
      "level": 2,
      "title": "Lock",
      "slug": "lock",
      "children": [
        {
          "level": 3,
          "title": "锁分析",
          "slug": "锁分析",
          "children": []
        },
        {
          "level": 3,
          "title": "上下文支持",
          "slug": "上下文支持",
          "children": []
        },
        {
          "level": 3,
          "title": "锁的应用场景",
          "slug": "锁的应用场景",
          "children": []
        },
        {
          "level": 3,
          "title": "非阻塞锁使用",
          "slug": "非阻塞锁使用",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Queue的线程安全",
      "slug": "queue的线程安全",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 7.6,
    "words": 2281
  },
  "filePathRelative": "code/python/python-thread-sync.md"
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
