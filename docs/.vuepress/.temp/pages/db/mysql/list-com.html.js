export const data = {
  "key": "v-06da267c",
  "path": "/db/mysql/list-com.html",
  "title": "2 列表类型和数据完整性",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "MySQL"
    ],
    "summary": "2 列表类型和数据完整性 1 数据类型 1.1 值类型 1.1.1 整型 类型 字节 范围 :-------: :--: :--------------: tinyint 1 -128~127 smallint 2 -32768~32767 mediumint 3 -8388608~8388607 int 4 -2^31^~2^31^-1 bigint 8 ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/mysql/list-com.html"
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
          "content": "2 列表类型和数据完整性"
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
      "title": "1 数据类型",
      "slug": "_1-数据类型",
      "children": [
        {
          "level": 3,
          "title": "1.1 值类型",
          "slug": "_1-1-值类型",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2 字符型",
          "slug": "_1-2-字符型",
          "children": []
        },
        {
          "level": 3,
          "title": "1.3 枚举（enum）",
          "slug": "_1-3-枚举-enum",
          "children": []
        },
        {
          "level": 3,
          "title": "1.4 集合（set）",
          "slug": "_1-4-集合-set",
          "children": []
        },
        {
          "level": 3,
          "title": "1.5 日期类型",
          "slug": "_1-5-日期类型",
          "children": []
        },
        {
          "level": 3,
          "title": "1.6 boolean",
          "slug": "_1-6-boolean",
          "children": []
        },
        {
          "level": 3,
          "title": "1.7 关于数据类型的思考题",
          "slug": "_1-7-关于数据类型的思考题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2 列属性",
      "slug": "_2-列属性",
      "children": [
        {
          "level": 3,
          "title": "2.1 是否为空(null | not null)",
          "slug": "_2-1-是否为空-null-not-null",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 默认值（default）",
          "slug": "_2-2-默认值-default",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 自动增长（auto_increment）",
          "slug": "_2-3-自动增长-auto-increment",
          "children": []
        },
        {
          "level": 3,
          "title": "2.4 主键（primary key）",
          "slug": "_2-4-主键-primary-key",
          "children": []
        },
        {
          "level": 3,
          "title": "2.5 唯一键",
          "slug": "_2-5-唯一键",
          "children": []
        },
        {
          "level": 3,
          "title": "2.6 备注（comment）",
          "slug": "_2-6-备注-comment",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 SQL注释",
      "slug": "_3-sql注释",
      "children": []
    },
    {
      "level": 2,
      "title": "4 数据完整性介绍",
      "slug": "_4-数据完整性介绍",
      "children": [
        {
          "level": 3,
          "title": "4.1 保证实体完整性",
          "slug": "_4-1-保证实体完整性",
          "children": []
        },
        {
          "level": 3,
          "title": "4.2 保证域完整性",
          "slug": "_4-2-保证域完整性",
          "children": []
        },
        {
          "level": 3,
          "title": "4.3 保证引用完整性",
          "slug": "_4-3-保证引用完整性",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "5 外键操作",
      "slug": "_5-外键操作",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 16.32,
    "words": 4896
  },
  "filePathRelative": "db/mysql/list-com.md"
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
