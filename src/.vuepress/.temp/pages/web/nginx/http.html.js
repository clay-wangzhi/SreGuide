export const data = {
  "key": "v-4d07e670",
  "path": "/web/nginx/http.html",
  "title": "3.2 nginxHTTP块配置",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "web中间件"
    ],
    "tag": [
      "Nginx"
    ],
    "summary": "3.2 nginxHTTP块配置 1 配置块的嵌套 2 指令的合并\r值指令：存储配置项的值; \r可以合并; \r示例：root，access_log，gzip; \r动作类指令：指定行为; \r不可以合并; \r示例：rewrite，proxy_pass; \r生效阶段：server_rewrite阶段，rewrite阶段，content阶段; 存储值的指令继承规则：",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/web/nginx/http.html"
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
          "content": "3.2 nginxHTTP块配置"
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
      "title": "1 配置块的嵌套",
      "slug": "_1-配置块的嵌套",
      "children": []
    },
    {
      "level": 2,
      "title": "2 指令的合并",
      "slug": "_2-指令的合并",
      "children": []
    },
    {
      "level": 2,
      "title": "3 HTTP请求处理时的11个阶段",
      "slug": "_3-http请求处理时的11个阶段",
      "children": []
    },
    {
      "level": 2,
      "title": "4 正则表达式",
      "slug": "_4-正则表达式",
      "children": []
    },
    {
      "level": 2,
      "title": "5 提取用户真实ip",
      "slug": "_5-提取用户真实ip",
      "children": []
    },
    {
      "level": 2,
      "title": "6 定义404错误页面",
      "slug": "_6-定义404错误页面",
      "children": [
        {
          "level": 3,
          "title": "6.1 Nginx自己的错误页面",
          "slug": "_6-1-nginx自己的错误页面",
          "children": []
        },
        {
          "level": 3,
          "title": "6.2 反向代理的错误页面",
          "slug": "_6-2-反向代理的错误页面",
          "children": []
        },
        {
          "level": 3,
          "title": "6.3 Nginx解析php代码的错误页面",
          "slug": "_6-3-nginx解析php代码的错误页面",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 2.75,
    "words": 825
  },
  "filePathRelative": "web/nginx/http.md"
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
