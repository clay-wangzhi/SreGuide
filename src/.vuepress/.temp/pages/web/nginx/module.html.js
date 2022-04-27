export const data = {
  "key": "v-179a7ba4",
  "path": "/web/nginx/module.html",
  "title": "3.5 nginx常用模块",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "web中间件"
    ],
    "tag": [
      "Nginx"
    ],
    "summary": "3.5 nginx常用模块 1 Module ngxhttpgzip_module 该ngxhttpgzip_module模块是一个使用“gzip”方法压缩响应的过滤器。这通常有助于将传输数据的大小减少一半甚至更多。\r\" 使用SSL / TLS协议时，压缩的响应可能会受到 BREACH攻击。\" 在实际的应用中我们发现压缩的比率往往在 3 到 10 倍，也就是",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/web/nginx/module.html"
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
          "content": "3.5 nginx常用模块"
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
      "title": "1 Module ngx_http_gzip_module",
      "slug": "_1-module-ngx-http-gzip-module",
      "children": [
        {
          "level": 3,
          "title": "1.1 Example Configuration",
          "slug": "_1-1-example-configuration",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2 Directives",
          "slug": "_1-2-directives",
          "children": []
        },
        {
          "level": 3,
          "title": "1.3 常见问题",
          "slug": "_1-3-常见问题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2 Module ngx_http_log_module",
      "slug": "_2-module-ngx-http-log-module",
      "children": [
        {
          "level": 3,
          "title": "2.1 Example Configuration",
          "slug": "_2-1-example-configuration",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 access_log指令",
          "slug": "_2-2-access-log指令",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 log_format指令",
          "slug": "_2-3-log-format指令",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 Rewrite模块",
      "slug": "_3-rewrite模块",
      "children": [
        {
          "level": 3,
          "title": "3.1 return指令",
          "slug": "_3-1-return指令",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 rewrite指令",
          "slug": "_3-2-rewrite指令",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 if指令",
          "slug": "_3-3-if指令",
          "children": []
        },
        {
          "level": 3,
          "title": "3.4 rewrite_log指令",
          "slug": "_3-4-rewrite-log指令",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 realip模块",
      "slug": "_4-realip模块",
      "children": [
        {
          "level": 3,
          "title": "4.1 Directives",
          "slug": "_4-1-directives",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "5 limit_conn模块",
      "slug": "_5-limit-conn模块",
      "children": [
        {
          "level": 3,
          "title": "5.1 指令",
          "slug": "_5-1-指令",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6 limit_req模块",
      "slug": "_6-limit-req模块",
      "children": [
        {
          "level": 3,
          "title": "6.1 指令",
          "slug": "_6-1-指令",
          "children": []
        },
        {
          "level": 3,
          "title": "6.2 Example",
          "slug": "_6-2-example",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 9.49,
    "words": 2846
  },
  "filePathRelative": "web/nginx/module.md"
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
