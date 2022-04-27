export const data = {
  "key": "v-51aecb92",
  "path": "/web/nginx/first.html",
  "title": "1. 初识Nginx",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "web中间件"
    ],
    "tag": [
      "Nginx"
    ],
    "summary": "1. 初识Nginx 1 Nginx的三个主要应用场景 三个主要应用场景为：\r静态资源服务（通过本地文件系统提供服务）; \r反向代理服务; \rAPI服务（OpenRestydeng ）; 1.1 反向代理服务 1.1.1 负载均衡 负载均衡，一般包含两方面的含义。\r一方面是，将单一的重负载分担到多个网络节点上做并行处理，每个节点处理结束后将结构汇总返回给用户",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/web/nginx/first.html"
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
          "content": "1. 初识Nginx"
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
      "title": "1 Nginx的三个主要应用场景",
      "slug": "_1-nginx的三个主要应用场景",
      "children": [
        {
          "level": 3,
          "title": "1.1 反向代理服务",
          "slug": "_1-1-反向代理服务",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2 Nginx的优点",
      "slug": "_2-nginx的优点",
      "children": []
    },
    {
      "level": 2,
      "title": "3 Nginx的组成",
      "slug": "_3-nginx的组成",
      "children": []
    },
    {
      "level": 2,
      "title": "4 编译安装Nginx",
      "slug": "_4-编译安装nginx",
      "children": [
        {
          "level": 3,
          "title": "4.1 下载Nginx",
          "slug": "_4-1-下载nginx",
          "children": []
        },
        {
          "level": 3,
          "title": "4.2 介绍各目录",
          "slug": "_4-2-介绍各目录",
          "children": []
        },
        {
          "level": 3,
          "title": "4.3 Configure",
          "slug": "_4-3-configure",
          "children": []
        },
        {
          "level": 3,
          "title": "4.4 中间件介绍",
          "slug": "_4-4-中间件介绍",
          "children": []
        },
        {
          "level": 3,
          "title": "4.5 编译",
          "slug": "_4-5-编译",
          "children": []
        },
        {
          "level": 3,
          "title": "4.6 安装",
          "slug": "_4-6-安装",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "5 Nginx配置语法",
      "slug": "_5-nginx配置语法",
      "children": [
        {
          "level": 3,
          "title": "5.1 配置参数",
          "slug": "_5-1-配置参数",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6 Nginx配置文件结构",
      "slug": "_6-nginx配置文件结构",
      "children": [
        {
          "level": 3,
          "title": "6.1 基本结构",
          "slug": "_6-1-基本结构",
          "children": []
        },
        {
          "level": 3,
          "title": "6.2 全局块",
          "slug": "_6-2-全局块",
          "children": []
        },
        {
          "level": 3,
          "title": "6.3 events块",
          "slug": "_6-3-events块",
          "children": []
        },
        {
          "level": 3,
          "title": "6.4 http块",
          "slug": "_6-4-http块",
          "children": []
        },
        {
          "level": 3,
          "title": "6.5 server块",
          "slug": "_6-5-server块",
          "children": []
        },
        {
          "level": 3,
          "title": "6.6 location块",
          "slug": "_6-6-location块",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "7 Nginx命令行",
      "slug": "_7-nginx命令行",
      "children": [
        {
          "level": 3,
          "title": "7.1 重载配置文件",
          "slug": "_7-1-重载配置文件",
          "children": []
        },
        {
          "level": 3,
          "title": "7.2  热部署",
          "slug": "_7-2-热部署",
          "children": []
        },
        {
          "level": 3,
          "title": "7.3 切割日志文件",
          "slug": "_7-3-切割日志文件",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 17.68,
    "words": 5304
  },
  "filePathRelative": "web/nginx/first.md"
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
