export const data = {
  "key": "v-36f16a4d",
  "path": "/db/mysql/back.html",
  "title": "7 备份恢复",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "MySQL"
    ],
    "summary": "7 备份恢复 对于任何数据库来说，备份都是非常重要的 数据库复制不能取代备份的作用 比如我们由于误操作，在主数据库上删除了一些数据，由于主从复制的时间很短，在发现时，从数据库上的数据可能也已经被删除了， 我们不能使用从数据库上的数据来恢复主数据库上的数据，只能通过备份进行误删除数据的恢复 1 备份的分类 1.1 按备份的结果来分 1.1.1 逻辑备份 其备份",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/mysql/back.html"
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
          "content": "7 备份恢复"
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
      "title": "1 备份的分类",
      "slug": "_1-备份的分类",
      "children": [
        {
          "level": 3,
          "title": "1.1 按备份的结果来分",
          "slug": "_1-1-按备份的结果来分",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2 按备份的数据库的内容来分",
          "slug": "_1-2-按备份的数据库的内容来分",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2 使用mysqldump进行备份",
      "slug": "_2-使用mysqldump进行备份",
      "children": [
        {
          "level": 3,
          "title": "2.1 常用语法",
          "slug": "_2-1-常用语法",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 常用参数",
          "slug": "_2-2-常用参数",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 演示",
          "slug": "_2-3-演示",
          "children": []
        },
        {
          "level": 3,
          "title": "2.4 定义备份脚本",
          "slug": "_2-4-定义备份脚本",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 如何恢复mysqldump备份的数据库",
      "slug": "_3-如何恢复mysqldump备份的数据库",
      "children": [
        {
          "level": 3,
          "title": "3.1 方法一",
          "slug": "_3-1-方法一",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 方法二",
          "slug": "_3-2-方法二",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 演示：",
          "slug": "_3-3-演示",
          "children": []
        },
        {
          "level": 3,
          "title": "3.4 如何进行指定时间点的恢复",
          "slug": "_3-4-如何进行指定时间点的恢复",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 实时二进制日志备份",
      "slug": "_4-实时二进制日志备份",
      "children": []
    },
    {
      "level": 2,
      "title": "5 xtrabackup",
      "slug": "_5-xtrabackup",
      "children": [
        {
          "level": 3,
          "title": "5.1 xtrabackup介绍",
          "slug": "_5-1-xtrabackup介绍",
          "children": []
        },
        {
          "level": 3,
          "title": "5.2 安装xtrabackup",
          "slug": "_5-2-安装xtrabackup",
          "children": []
        },
        {
          "level": 3,
          "title": "5.3 利用innobackupex 进行全备",
          "slug": "_5-3-利用innobackupex-进行全备",
          "children": []
        },
        {
          "level": 3,
          "title": "5.4 利用innobackupex 进行全备的恢复",
          "slug": "_5-4-利用innobackupex-进行全备的恢复",
          "children": []
        },
        {
          "level": 3,
          "title": "5.5 利用innobackupex 进行增量备份",
          "slug": "_5-5-利用innobackupex-进行增量备份",
          "children": []
        },
        {
          "level": 3,
          "title": "5.6 利用innobackupex 进行增量恢复",
          "slug": "_5-6-利用innobackupex-进行增量恢复",
          "children": []
        },
        {
          "level": 3,
          "title": "5.7 备份压缩和流",
          "slug": "_5-7-备份压缩和流",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 27.49,
    "words": 8248
  },
  "filePathRelative": "db/mysql/back.md"
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
