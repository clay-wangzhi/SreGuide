export const data = {
  "key": "v-80859ef8",
  "path": "/web/nginx/framework.html",
  "title": "2. nginx架构基础",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "web中间件"
    ],
    "tag": [
      "Nginx"
    ],
    "summary": "2. nginx架构基础 1 Nginx请求处理流程 2 Nginx进程结构 3 Nginx进程管理：信号 3.1 Master进程\r监控worker进程; \rCHLD; \r管理worker进程; \r接收信号; \rTERM，INT; \rQUIT; \rHUP; \rUSR1; \rUSR2; \rWINCH; 3.2 Worker进程\r接收信号; \rTERM，INT",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/web/nginx/framework.html"
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
          "content": "2. nginx架构基础"
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
          "content": "Nginx"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-03-20T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1 Nginx请求处理流程",
      "slug": "_1-nginx请求处理流程",
      "children": []
    },
    {
      "level": 2,
      "title": "2 Nginx进程结构",
      "slug": "_2-nginx进程结构",
      "children": []
    },
    {
      "level": 2,
      "title": "3 Nginx进程管理：信号",
      "slug": "_3-nginx进程管理-信号",
      "children": [
        {
          "level": 3,
          "title": "3.1 Master进程",
          "slug": "_3-1-master进程",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 Worker进程",
          "slug": "_3-2-worker进程",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 nginx命令行",
          "slug": "_3-3-nginx命令行",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 reload 流程",
      "slug": "_4-reload-流程",
      "children": []
    },
    {
      "level": 2,
      "title": "5 热升级流程",
      "slug": "_5-热升级流程",
      "children": []
    },
    {
      "level": 2,
      "title": "6 worker进程：优雅的关闭",
      "slug": "_6-worker进程-优雅的关闭",
      "children": []
    },
    {
      "level": 2,
      "title": "7 网络相关",
      "slug": "_7-网络相关",
      "children": [
        {
          "level": 3,
          "title": "7.1 网络传输",
          "slug": "_7-1-网络传输",
          "children": []
        },
        {
          "level": 3,
          "title": "7.2 TCP流与报文",
          "slug": "_7-2-tcp流与报文",
          "children": []
        },
        {
          "level": 3,
          "title": "7.3 TCP协议与非阻塞接口",
          "slug": "_7-3-tcp协议与非阻塞接口",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "8 Nginx事件循环",
      "slug": "_8-nginx事件循环",
      "children": [
        {
          "level": 3,
          "title": "8.1 epoll",
          "slug": "_8-1-epoll",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "9 模块分类",
      "slug": "_9-模块分类",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.86,
    "words": 559
  },
  "filePathRelative": "web/nginx/framework.md"
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
