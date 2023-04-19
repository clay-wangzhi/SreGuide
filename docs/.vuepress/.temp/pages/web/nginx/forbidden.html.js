export const data = {
  "key": "v-8002e92e",
  "path": "/web/nginx/forbidden.html",
  "title": "6.1 Nginx出现403 forbidden的三种原因",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "web中间件"
    ],
    "tag": [
      "Nginx"
    ],
    "summary": "6.1 Nginx出现403 forbidden的三种原因 引起nginx 403 forbidden通常是三种情况：一是缺少主页文件，二是权限问题，三是SELinux状态。 缺少主页文件 如果在/clay/clay1/clay2/下面没有index.php或index.html的时候，直接文件，会报403 forbidden。\r\" 当index文件问ind",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/web/nginx/forbidden.html"
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
          "content": "6.1 Nginx出现403 forbidden的三种原因"
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
      "title": "缺少主页文件",
      "slug": "缺少主页文件",
      "children": []
    },
    {
      "level": 2,
      "title": "权限问题",
      "slug": "权限问题",
      "children": []
    },
    {
      "level": 2,
      "title": "SELinux为开启状态(enabled)",
      "slug": "selinux为开启状态-enabled",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.99,
    "words": 297
  },
  "filePathRelative": "web/nginx/forbidden.md"
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
