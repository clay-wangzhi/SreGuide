export const data = {
  "key": "v-07fad500",
  "path": "/basic/linux/basic/process.html",
  "title": "进程管理",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Linux"
    ],
    "summary": "进程管理 静态查看进程 ps ps命令用于报告当前系统的进程状态。可以搭配kill指令随时中断、删除不必要的程序。ps命令是最基本同时也是非常强大的进程查看命令，使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等，总之大部分信息都是可以通过执行该命令得到的。 1. 运行(正在运行或在运行队列中等待) ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/basic/linux/basic/process.html"
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
          "content": "进程管理"
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
      "title": "静态查看进程 ps",
      "slug": "静态查看进程-ps",
      "children": [
        {
          "level": 3,
          "title": "语法",
          "slug": "语法",
          "children": []
        },
        {
          "level": 3,
          "title": "选项",
          "slug": "选项",
          "children": []
        },
        {
          "level": 3,
          "title": "常用范例",
          "slug": "常用范例",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "查看指定进程的PID(pgrep、pidof)",
      "slug": "查看指定进程的pid-pgrep、pidof",
      "children": []
    },
    {
      "level": 2,
      "title": "动态查看进程top",
      "slug": "动态查看进程top",
      "children": [
        {
          "level": 3,
          "title": "选项",
          "slug": "选项-1",
          "children": []
        },
        {
          "level": 3,
          "title": "功能",
          "slug": "功能",
          "children": []
        },
        {
          "level": 3,
          "title": "常用实例",
          "slug": "常用实例",
          "children": []
        },
        {
          "level": 3,
          "title": "top交互命令",
          "slug": "top交互命令",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "信号控制进程kill",
      "slug": "信号控制进程kill",
      "children": [
        {
          "level": 3,
          "title": "选项",
          "slug": "选项-2",
          "children": []
        },
        {
          "level": 3,
          "title": "参数",
          "slug": "参数",
          "children": []
        },
        {
          "level": 3,
          "title": "功能",
          "slug": "功能-1",
          "children": []
        },
        {
          "level": 3,
          "title": "常用实例",
          "slug": "常用实例-1",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 19.82,
    "words": 5947
  },
  "filePathRelative": "basic/linux/basic/process.md"
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
