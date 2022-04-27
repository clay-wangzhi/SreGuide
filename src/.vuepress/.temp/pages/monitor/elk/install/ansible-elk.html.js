export const data = {
  "key": "v-67e2ac92",
  "path": "/monitor/elk/install/ansible-elk.html",
  "title": "elk借助安装ansible",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "ELK"
    ],
    "summary": "elk借助安装ansible ansible配置 安装 Elasticsearch \" 执行playbook前，首先要进行数据磁盘的挂载，挂载到数据目录，es数据节点磁盘占用很大\" 配置Node间SSL 注意：这里是指配置ES集群节点间transport的SSL认证，对于ES节点的HTTP API接口并没有配置，所以通过API访问ES时不需要提供证书。 参考",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/install/ansible-elk.html"
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
          "content": "elk借助安装ansible"
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
      "title": "ansible配置",
      "slug": "ansible配置",
      "children": []
    },
    {
      "level": 2,
      "title": "安装 Elasticsearch",
      "slug": "安装-elasticsearch",
      "children": []
    },
    {
      "level": 2,
      "title": "安装 Kibana",
      "slug": "安装-kibana",
      "children": []
    },
    {
      "level": 2,
      "title": "安装 logstash",
      "slug": "安装-logstash",
      "children": []
    },
    {
      "level": 2,
      "title": "安装 kafka",
      "slug": "安装-kafka",
      "children": []
    },
    {
      "level": 2,
      "title": "安装 filebeat",
      "slug": "安装-filebeat",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 5.27,
    "words": 1581
  },
  "filePathRelative": "monitor/elk/install/ansible-elk.md"
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
