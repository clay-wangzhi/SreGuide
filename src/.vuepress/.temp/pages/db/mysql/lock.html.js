export const data = {
  "key": "v-a02396ee",
  "path": "/db/mysql/lock.html",
  "title": "12 MySQL锁等待",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "MySQL"
    ],
    "summary": "12 MySQL锁等待 1 锁等待模拟 创建数据库 创建表 插入数据 取消自动提交 则当执行语句commit或者rollback执行提交事务或者回滚 更新第一条插入的数据 新开一个终端，也更新第一条数据 2 监控锁状态 2.1 查看有无锁等待 Innodbrowlockcurrentwaits 表示当前所等待的数量; Innodbrowlock_waits ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/mysql/lock.html"
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
          "content": "12 MySQL锁等待"
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
      "title": "1 锁等待模拟",
      "slug": "_1-锁等待模拟",
      "children": []
    },
    {
      "level": 2,
      "title": "2 监控锁状态",
      "slug": "_2-监控锁状态",
      "children": [
        {
          "level": 3,
          "title": "2.1 查看有无锁等待",
          "slug": "_2-1-查看有无锁等待",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 查看哪个事务在等待（被阻塞了）",
          "slug": "_2-2-查看哪个事务在等待-被阻塞了",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 查看索源",
          "slug": "_2-3-查看索源",
          "children": []
        },
        {
          "level": 3,
          "title": "2.4 找到锁源的SQL语句",
          "slug": "_2-4-找到锁源的sql语句",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 杀掉进程",
      "slug": "_3-杀掉进程",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.71,
    "words": 514
  },
  "filePathRelative": "db/mysql/lock.md"
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
