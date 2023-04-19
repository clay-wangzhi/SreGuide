export const data = {
  "key": "v-528061dd",
  "path": "/db/mysql/des-select.html",
  "title": "3 数据库设计与查询语句",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "MySQL"
    ],
    "summary": "3 数据库设计与查询语句 1 数据库基本概念 1、关系：两个表的公共字段 2、行：也称记录，也称实体 3、列：也称字段，也称属性 4、数据冗余：相同的数据存储在不同的地方 5、数据完整性：正确性+准确性=数据完整性 思考：学生的年龄是整型，输入1000岁，正确性和准确性如何？ 答：正确的，但不准确的 思考：年龄是整形的，收入了字符串，正确性和准确性如何？ 答",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/mysql/des-select.html"
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
          "content": "3 数据库设计与查询语句"
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
      "title": "1  数据库基本概念",
      "slug": "_1-数据库基本概念",
      "children": []
    },
    {
      "level": 2,
      "title": "2  实体和实体之间的关系",
      "slug": "_2-实体和实体之间的关系",
      "children": [
        {
          "level": 3,
          "title": "2.1 一对多 1：N",
          "slug": "_2-1-一对多-1-n",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 一对一（1:1）",
          "slug": "_2-2-一对一-1-1",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 多对多（N：M）",
          "slug": "_2-3-多对多-n-m",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 数据库设计的步骤",
      "slug": "_3-数据库设计的步骤",
      "children": [
        {
          "level": 3,
          "title": "3.1 数据库设计具体步骤",
          "slug": "_3-1-数据库设计具体步骤",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 绘制E-R图",
          "slug": "_3-2-绘制e-r图",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 将E-R图转成表",
          "slug": "_3-3-将e-r图转成表",
          "children": []
        },
        {
          "level": 3,
          "title": "3.4 例题",
          "slug": "_3-4-例题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 数据规范化",
      "slug": "_4-数据规范化",
      "children": [
        {
          "level": 3,
          "title": "4.1 第一范式：确保每列原子性",
          "slug": "_4-1-第一范式-确保每列原子性",
          "children": []
        },
        {
          "level": 3,
          "title": "4.2 第二范式：非键字段必须依赖于键字段",
          "slug": "_4-2-第二范式-非键字段必须依赖于键字段",
          "children": []
        },
        {
          "level": 3,
          "title": "4.3 第三范式：消除传递依赖",
          "slug": "_4-3-第三范式-消除传递依赖",
          "children": []
        },
        {
          "level": 3,
          "title": "4.4 数据库设计的例题",
          "slug": "_4-4-数据库设计的例题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "5 查询语句",
      "slug": "_5-查询语句",
      "children": [
        {
          "level": 3,
          "title": "5.1 字段表达式",
          "slug": "_5-1-字段表达式",
          "children": []
        },
        {
          "level": 3,
          "title": "5.2 from子句",
          "slug": "_5-2-from子句",
          "children": []
        },
        {
          "level": 3,
          "title": "5.3 dual表",
          "slug": "_5-3-dual表",
          "children": []
        },
        {
          "level": 3,
          "title": "5.4 where子句",
          "slug": "_5-4-where子句",
          "children": []
        },
        {
          "level": 3,
          "title": "5.5  in | not in",
          "slug": "_5-5-in-not-in",
          "children": []
        },
        {
          "level": 3,
          "title": "5.6  between…and|not between…and",
          "slug": "_5-6-between-and-not-between-and",
          "children": []
        },
        {
          "level": 3,
          "title": "5.7 is null | is not null",
          "slug": "_5-7-is-null-is-not-null",
          "children": []
        },
        {
          "level": 3,
          "title": "5.8 聚合函数",
          "slug": "_5-8-聚合函数",
          "children": []
        },
        {
          "level": 3,
          "title": "5.9 通配符",
          "slug": "_5-9-通配符",
          "children": []
        },
        {
          "level": 3,
          "title": "5.10 模糊查询（like）",
          "slug": "_5-10-模糊查询-like",
          "children": []
        },
        {
          "level": 3,
          "title": "5.11 order by排序",
          "slug": "_5-11-order-by排序",
          "children": []
        },
        {
          "level": 3,
          "title": "5.12 group by 【分组查询】",
          "slug": "_5-12-group-by-【分组查询】",
          "children": []
        },
        {
          "level": 3,
          "title": "5.13 having条件",
          "slug": "_5-13-having条件",
          "children": []
        },
        {
          "level": 3,
          "title": "5.14 limit",
          "slug": "_5-14-limit",
          "children": []
        },
        {
          "level": 3,
          "title": "5.15 查询语句中的选项",
          "slug": "_5-15-查询语句中的选项",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6 union（联合）",
      "slug": "_6-union-联合",
      "children": [
        {
          "level": 3,
          "title": "6.1 union的使用",
          "slug": "_6-1-union的使用",
          "children": []
        },
        {
          "level": 3,
          "title": "6.2 union的选项",
          "slug": "_6-2-union的选项",
          "children": []
        },
        {
          "level": 3,
          "title": "6.3 union的注意事项",
          "slug": "_6-3-union的注意事项",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "7 多表查询分类",
      "slug": "_7-多表查询分类",
      "children": [
        {
          "level": 3,
          "title": "7.1 内连接【inner join】",
          "slug": "_7-1-内连接【inner-join】",
          "children": []
        },
        {
          "level": 3,
          "title": "7.2 左外连接【left join】",
          "slug": "_7-2-左外连接【left-join】",
          "children": []
        },
        {
          "level": 3,
          "title": "7.3 右外连接【right join】",
          "slug": "_7-3-右外连接【right-join】",
          "children": []
        },
        {
          "level": 3,
          "title": "7.4 交叉连接【cross join】",
          "slug": "_7-4-交叉连接【cross-join】",
          "children": []
        },
        {
          "level": 3,
          "title": "7.5 自然连接【natural】",
          "slug": "_7-5-自然连接【natural】",
          "children": []
        },
        {
          "level": 3,
          "title": "7.6 using()",
          "slug": "_7-6-using",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "8 子查询",
      "slug": "_8-子查询",
      "children": [
        {
          "level": 3,
          "title": "8.1 例题",
          "slug": "_8-1-例题",
          "children": []
        },
        {
          "level": 3,
          "title": "8.2 in|not in子查询",
          "slug": "_8-2-in-not-in子查询",
          "children": []
        },
        {
          "level": 3,
          "title": "8.3 exists和not exists",
          "slug": "_8-3-exists和not-exists",
          "children": []
        },
        {
          "level": 3,
          "title": "8.4 子查询分类",
          "slug": "_8-4-子查询分类",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "9  补充技术",
      "slug": "_9-补充技术",
      "children": [
        {
          "level": 3,
          "title": "9.1  insert…select…",
          "slug": "_9-1-insert-select",
          "children": []
        },
        {
          "level": 3,
          "title": "9.2 on duplicate key update",
          "slug": "_9-2-on-duplicate-key-update",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 23.15,
    "words": 6946
  },
  "filePathRelative": "db/mysql/des-select.md"
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
