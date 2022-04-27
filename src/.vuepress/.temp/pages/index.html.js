export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "主页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "主页",
    "heroImage": "/Kubernetes.svg",
    "heroText": "Keep Learning",
    "heroFullScreen": true,
    "tagline": "个人笔记，包涵 云原生、监控、自动化运维、Nginx 等相关知识点",
    "actions": [
      {
        "text": "开始阅读",
        "link": "/zh/guide/",
        "type": "primary"
      },
      {
        "text": "配置 🛠",
        "link": "/zh/config/"
      }
    ],
    "projects": [
      {
        "icon": "project",
        "name": "项目名称",
        "desc": "项目详细描述",
        "link": "https://你的项目链接"
      },
      {
        "icon": "link",
        "name": "链接名称",
        "desc": "链接详细描述",
        "link": "https://链接地址"
      },
      {
        "icon": "book",
        "name": "书籍名称",
        "desc": "书籍详细描述",
        "link": "https://你的书籍链接"
      },
      {
        "icon": "article",
        "name": "文章名称",
        "desc": "文章详细描述",
        "link": "https://你的文章链接"
      },
      {
        "icon": "friend",
        "name": "伙伴名称",
        "desc": "伙伴详细介绍",
        "link": "https://你的伙伴链接"
      },
      {
        "icon": "/logo.svg",
        "name": "自定义项目",
        "desc": "自定义详细介绍",
        "link": "https://你的自定义链接"
      }
    ],
    "footer": "<a href=\"http://beian.miit.gov.cn/\" target=\"_blank\">备案号:冀ICP备2021007336号</a>",
    "summary": "这是一个博客主页。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/"
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
          "content": "主页"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
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
  "headers": [],
  "readingTime": {
    "minutes": 0.17,
    "words": 50
  },
  "filePathRelative": "README.md"
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
