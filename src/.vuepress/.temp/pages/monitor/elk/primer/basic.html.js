export const data = {
  "key": "v-557d432e",
  "path": "/monitor/elk/primer/basic.html",
  "title": "基本概念",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "ELK"
    ],
    "summary": "基本概念 Index索引; Type类型; Document文档; Node节点; shard分片; 文档（Document） Elasticsearch是面向文档的，文档时所有可搜索数据的最小单位; 日志文件中的日志项; 一本电影的具体信息/一张唱片的详细信息; MP3播放器里的一首歌/一篇PDF文档中的具体内容; 文档会被序列化成JSON格式，保存在El",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/primer/basic.html"
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
          "content": "基本概念"
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
      "title": "文档（Document）",
      "slug": "文档-document",
      "children": [
        {
          "level": 3,
          "title": "JSON文档",
          "slug": "json文档",
          "children": []
        },
        {
          "level": 3,
          "title": "文档的元数据",
          "slug": "文档的元数据",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "索引（Index）",
      "slug": "索引-index",
      "children": [
        {
          "level": 3,
          "title": "索引的不通语意",
          "slug": "索引的不通语意",
          "children": []
        },
        {
          "level": 3,
          "title": "Type",
          "slug": "type",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "与关系型数据库的类比",
      "slug": "与关系型数据库的类比",
      "children": []
    },
    {
      "level": 2,
      "title": "分布式相关概念",
      "slug": "分布式相关概念",
      "children": [
        {
          "level": 3,
          "title": "可用性和扩展性",
          "slug": "可用性和扩展性",
          "children": []
        },
        {
          "level": 3,
          "title": "Elasticsearch的分布式",
          "slug": "elasticsearch的分布式",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "节点（Node）",
      "slug": "节点-node",
      "children": [
        {
          "level": 3,
          "title": "Master-eligible nodes 和 Masternode",
          "slug": "master-eligible-nodes-和-masternode",
          "children": []
        },
        {
          "level": 3,
          "title": "Data node & Coordinating Node",
          "slug": "data-node-coordinating-node",
          "children": []
        },
        {
          "level": 3,
          "title": "其他的节点类型",
          "slug": "其他的节点类型",
          "children": []
        },
        {
          "level": 3,
          "title": "配置节点类型",
          "slug": "配置节点类型",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "分片（Shard）",
      "slug": "分片-shard",
      "children": [
        {
          "level": 3,
          "title": "分片的设定",
          "slug": "分片的设定",
          "children": []
        },
        {
          "level": 3,
          "title": "查看集群的健康状况",
          "slug": "查看集群的健康状况",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 5.72,
    "words": 1716
  },
  "filePathRelative": "monitor/elk/primer/basic.md"
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
