export const data = {
  "key": "v-2762ae00",
  "path": "/web/nginx/qa.html",
  "title": "6. nginx的常见问题",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "web中间件"
    ],
    "tag": [
      "Nginx"
    ],
    "summary": "6. nginx的常见问题 nginx前面有多个反向代理时，proxy的正确设置 注释掉这两行，让它使用默认配置 nginx解决跨域问题 在nginx.conf中编辑 从http跳转到https 项目前期使用http，后期为了安全方面的考虑，启用了https。 项目架构：前端使用nginx作为多个tomcat实例的反向代理和负载均衡。 实际上只需要在ngin",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/web/nginx/qa.html"
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
          "content": "6. nginx的常见问题"
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
      "title": "nginx前面有多个反向代理时，proxy的正确设置",
      "slug": "nginx前面有多个反向代理时-proxy的正确设置",
      "children": []
    },
    {
      "level": 2,
      "title": "nginx解决跨域问题",
      "slug": "nginx解决跨域问题",
      "children": []
    },
    {
      "level": 2,
      "title": "从http跳转到https",
      "slug": "从http跳转到https",
      "children": [
        {
          "level": 3,
          "title": "使用rewrite指令",
          "slug": "使用rewrite指令",
          "children": []
        },
        {
          "level": 3,
          "title": "使用return指令",
          "slug": "使用return指令",
          "children": []
        },
        {
          "level": 3,
          "title": "使用error_page指令",
          "slug": "使用error-page指令",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "nginx出现403的原因",
      "slug": "nginx出现403的原因",
      "children": [
        {
          "level": 3,
          "title": "缺少index.html",
          "slug": "缺少index-html",
          "children": []
        },
        {
          "level": 3,
          "title": "权限问题",
          "slug": "权限问题",
          "children": []
        },
        {
          "level": 3,
          "title": "SELinux设置问题",
          "slug": "selinux设置问题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "通过nginx实现蓝绿发布",
      "slug": "通过nginx实现蓝绿发布",
      "children": []
    },
    {
      "level": 2,
      "title": "nginx allow 多个ip & ipv4的网段表示方法解析",
      "slug": "nginx-allow-多个ip-ipv4的网段表示方法解析",
      "children": [
        {
          "level": 3,
          "title": "1、安装模块",
          "slug": "_1、安装模块",
          "children": []
        },
        {
          "level": 3,
          "title": "2、指令",
          "slug": "_2、指令",
          "children": []
        },
        {
          "level": 3,
          "title": "3. allow、deny实例",
          "slug": "_3-allow、deny实例",
          "children": []
        },
        {
          "level": 3,
          "title": "",
          "slug": "",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 5.81,
    "words": 1744
  },
  "filePathRelative": "web/nginx/qa.md"
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
