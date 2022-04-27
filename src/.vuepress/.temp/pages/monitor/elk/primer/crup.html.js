export const data = {
  "key": "v-2174d5ac",
  "path": "/monitor/elk/primer/crup.html",
  "title": "文档的基本操作CRUP与批量操作",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "ELK"
    ],
    "summary": "文档的基本操作CRUP与批量操作 文档的CRUD Type名，约定都用_doc; Create - 如果ID已经存在，会失败; Index - 如果ID不存在，创建新的文档。否则，先删除现有的文档，再创建现有的文档，再创建新的文档，版本会增加; Update - 文档必须已经存在，更新只会对相应字段做增量修改; Create一个文档 支持自动生产文档id和指",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/primer/crup.html"
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
          "content": "文档的基本操作CRUP与批量操作"
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
          "content": "ELK"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "文档的CRUD",
      "slug": "文档的crud",
      "children": [
        {
          "level": 3,
          "title": "Create一个文档",
          "slug": "create一个文档",
          "children": []
        },
        {
          "level": 3,
          "title": "Get一个文档",
          "slug": "get一个文档",
          "children": []
        },
        {
          "level": 3,
          "title": "Index 文档",
          "slug": "index-文档",
          "children": []
        },
        {
          "level": 3,
          "title": "Update文档",
          "slug": "update文档",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "API的批量操作",
      "slug": "api的批量操作",
      "children": [
        {
          "level": 3,
          "title": "Bulk API",
          "slug": "bulk-api",
          "children": []
        },
        {
          "level": 3,
          "title": "批量读取 - mget",
          "slug": "批量读取-mget",
          "children": []
        },
        {
          "level": 3,
          "title": "批量查询 - msearch",
          "slug": "批量查询-msearch",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "常见的错误返回",
      "slug": "常见的错误返回",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.81,
    "words": 542
  },
  "filePathRelative": "monitor/elk/primer/crup.md"
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
