export const data = {
  "key": "v-6d90a948",
  "path": "/code/python/python-thread.html",
  "title": "10.2 多线程",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Python"
    ],
    "summary": "10.2 多线程 线程的状态 就绪（Ready）：线程能够运行，但在等待被调度。可能线程刚刚创建启动，或刚刚从阻塞中恢复，或者被其他线程抢占; 运行（Running）：线程正在运行; 阻塞（Blocked）：线程等待外部事件发生而无法运行，如 I/O 操作; 终止（Terminated）：线程完成，或退出，或被取消; Python的线程开发 Python 的",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/python/python-thread.html"
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
          "content": "10.2 多线程"
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
      "title": "线程的状态",
      "slug": "线程的状态",
      "children": []
    },
    {
      "level": 2,
      "title": "Python的线程开发",
      "slug": "python的线程开发",
      "children": [
        {
          "level": 3,
          "title": "Thread类",
          "slug": "thread类",
          "children": []
        },
        {
          "level": 3,
          "title": "线程启动",
          "slug": "线程启动",
          "children": []
        },
        {
          "level": 3,
          "title": "线程退出",
          "slug": "线程退出",
          "children": []
        },
        {
          "level": 3,
          "title": "线程的传参",
          "slug": "线程的传参",
          "children": []
        },
        {
          "level": 3,
          "title": "threading 的属性和方法",
          "slug": "threading-的属性和方法",
          "children": []
        },
        {
          "level": 3,
          "title": "Thread 实例的属性和方法",
          "slug": "thread-实例的属性和方法",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "多线程",
      "slug": "多线程",
      "children": []
    },
    {
      "level": 2,
      "title": "线程安全",
      "slug": "线程安全",
      "children": []
    },
    {
      "level": 2,
      "title": "deamon 线程",
      "slug": "deamon-线程",
      "children": []
    },
    {
      "level": 2,
      "title": "join 方法",
      "slug": "join-方法",
      "children": []
    },
    {
      "level": 2,
      "title": "daemon线程应用场景",
      "slug": "daemon线程应用场景",
      "children": []
    },
    {
      "level": 2,
      "title": "threading.local 类",
      "slug": "threading-local-类",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 11.8,
    "words": 3540
  },
  "filePathRelative": "code/python/python-thread.md"
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
