export const data = {
  "key": "v-34f80d94",
  "path": "/db/mysql/stro.html",
  "title": "5 MySQL存储引擎",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "MySQL"
    ],
    "summary": "5 MySQL存储引擎 存储引擎简介 ​\t\tMySQL中的数据用各种不同的技术存储在文件(或者内存)中。这些技术中的每一种技术都使用不同的存储机制、索引技巧、锁定水平并且最终提供广泛的不同的功能和能力。通过选择不同的技术，你能够获得额外的速度或者功能，从而改善你的应用的整体功能。 ​\t\t例如，如果你在研究大量的临时数据，你也许需要使用内存存储引擎。内存存储引",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/mysql/stro.html"
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
          "content": "5 MySQL存储引擎"
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
      "title": "存储引擎简介",
      "slug": "存储引擎简介",
      "children": []
    },
    {
      "level": 2,
      "title": "常用的存储引擎及其特点",
      "slug": "常用的存储引擎及其特点",
      "children": [
        {
          "level": 3,
          "title": "MyISAM存储引擎",
          "slug": "myisam存储引擎",
          "children": []
        },
        {
          "level": 3,
          "title": "InnoDB存储引擎",
          "slug": "innodb存储引擎",
          "children": []
        },
        {
          "level": 3,
          "title": "MEMORY存储引擎",
          "slug": "memory存储引擎",
          "children": []
        },
        {
          "level": 3,
          "title": "ARCHIVE存储引擎",
          "slug": "archive存储引擎",
          "children": []
        },
        {
          "level": 3,
          "title": "CSV存储引擎",
          "slug": "csv存储引擎",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "MyISAM和InnoDB的主要区别",
      "slug": "myisam和innodb的主要区别",
      "children": []
    },
    {
      "level": 2,
      "title": "如何选择合适的存储引擎",
      "slug": "如何选择合适的存储引擎",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 5.45,
    "words": 1634
  },
  "filePathRelative": "db/mysql/stro.md"
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
