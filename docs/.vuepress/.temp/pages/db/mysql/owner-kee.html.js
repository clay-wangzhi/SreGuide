export const data = {
  "key": "v-0bf9122d",
  "path": "/db/mysql/owner-kee.html",
  "title": "9 主主和keepalived",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "MySQL"
    ],
    "summary": "9 主主和keepalived keepalived简介 keepalived是vrrp协议的实现，原生设计目的是为了高可用ipvs服务，keepalived能够配置文件中的定义生成ipvs规则，并能够对各RS的健康状态进行检测；通过共用的虚拟IP地址对外提供服务；每个热备组内同一时刻只有一台主服务器提供服务，其他服务器处于冗余状态，若当前在线的服务器宕机，",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/mysql/owner-kee.html"
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
          "content": "9 主主和keepalived"
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
      "title": "keepalived简介",
      "slug": "keepalived简介",
      "children": []
    },
    {
      "level": 2,
      "title": "keepalived组件",
      "slug": "keepalived组件",
      "children": []
    },
    {
      "level": 2,
      "title": "mysql主主搭建",
      "slug": "mysql主主搭建",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 2.16,
    "words": 648
  },
  "filePathRelative": "db/mysql/owner-kee.md"
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
