export const data = {
  "key": "v-4ff82ad9",
  "path": "/linux/basic/user.html",
  "title": "用户管理",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Linux"
    ],
    "summary": "用户管理 查看当前登录的用户信息： 系统约定： RHEL6 uid: 0 \t 特权用户 uid: 1~499 \t 系统用户 uid: 500+ \t 普通用户 给普通用户提权 1.su 2.添加用户至sudoers",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/linux/basic/user.html"
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
          "content": "用户管理"
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
      "title": "给普通用户提权",
      "slug": "给普通用户提权",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.27,
    "words": 81
  },
  "filePathRelative": "linux/basic/user.md"
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
