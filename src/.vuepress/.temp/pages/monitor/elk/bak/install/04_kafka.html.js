export const data = {
  "key": "v-1edc345e",
  "path": "/monitor/elk/bak/install/04_kafka.html",
  "title": "一、 Kafka中几个重要概念介绍",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "\" 转载自：消息中间件—Kafka数据存储（一）| 癫狂侠 \" 摘要：消息存储对于每一款消息队列都非常重要，那么Kafka在这方面是如何来设计做到高效的呢？ Kafka这款分布式消息队列使用文件系统和操作系统的页缓存（page cache）分别存储和缓存消息，摒弃了Java的堆缓存机制，同时将随机写操作改为顺序写，再结合Zero-Copy的特性极大地改善了I",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/bak/install/04_kafka.html"
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
          "content": "一、 Kafka中几个重要概念介绍"
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
      "title": "2.1Kafka中分区/副本的日志文件存储分析",
      "slug": "_2-1kafka中分区-副本的日志文件存储分析",
      "children": []
    },
    {
      "level": 2,
      "title": "2.2Kafka中日志索引和数据文件的存储结构",
      "slug": "_2-2kafka中日志索引和数据文件的存储结构",
      "children": [
        {
          "level": 3,
          "title": "1.日志数据文件",
          "slug": "_1-日志数据文件",
          "children": []
        },
        {
          "level": 3,
          "title": "2.偏移量索引文件",
          "slug": "_2-偏移量索引文件",
          "children": []
        },
        {
          "level": 3,
          "title": "3.时间戳索引文件",
          "slug": "_3-时间戳索引文件",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 15.05,
    "words": 4516
  },
  "filePathRelative": "monitor/elk/bak/install/04_kafka.md"
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
