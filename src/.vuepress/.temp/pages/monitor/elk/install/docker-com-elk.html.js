export const data = {
  "key": "v-0262463e",
  "path": "/monitor/elk/install/docker-com-elk.html",
  "title": "容器部署ELK7.10",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "ELK"
    ],
    "summary": "容器部署ELK7.10 \" 转载自 YP小站\" 一、elk架构简介 首先 logstash 具有日志采集、过滤、筛选等功能，功能完善但同时体量也会比较大，消耗系统资源自然也多。filebeat作为一个轻量级日志采集工具，虽然没有过滤筛选功能，但是仅仅部署在应用服务器作为我们采集日志的工具可以是说最好的选择。但我们有些时候可能又需要logstash的过滤筛选功",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/install/docker-com-elk.html"
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
          "content": "容器部署ELK7.10"
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
      "title": "一、elk架构简介",
      "slug": "一、elk架构简介",
      "children": []
    },
    {
      "level": 2,
      "title": "二、环境",
      "slug": "二、环境",
      "children": []
    },
    {
      "level": 2,
      "title": "三、系统参数优化",
      "slug": "三、系统参数优化",
      "children": []
    },
    {
      "level": 2,
      "title": "四、部署 docker 和 docker-compose",
      "slug": "四、部署-docker-和-docker-compose",
      "children": [
        {
          "level": 3,
          "title": "部署 docker",
          "slug": "部署-docker",
          "children": []
        },
        {
          "level": 3,
          "title": "部署 docker-compose",
          "slug": "部署-docker-compose",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "五、部署 ES",
      "slug": "五、部署-es",
      "children": [
        {
          "level": 3,
          "title": "es-master1 操作",
          "slug": "es-master1-操作",
          "children": []
        },
        {
          "level": 3,
          "title": "es-master2 操作",
          "slug": "es-master2-操作",
          "children": []
        },
        {
          "level": 3,
          "title": "es-master3 操作",
          "slug": "es-master3-操作",
          "children": []
        },
        {
          "level": 3,
          "title": "es-data1 操作",
          "slug": "es-data1-操作",
          "children": []
        },
        {
          "level": 3,
          "title": "es-data2 操作",
          "slug": "es-data2-操作",
          "children": []
        },
        {
          "level": 3,
          "title": "设置 es 访问账号",
          "slug": "设置-es-访问账号",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "六、部署 Kibana",
      "slug": "六、部署-kibana",
      "children": [
        {
          "level": 3,
          "title": "logstash3 操作",
          "slug": "logstash3-操作",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "七、部署 Zookeeper",
      "slug": "七、部署-zookeeper",
      "children": [
        {
          "level": 3,
          "title": "logstash1 操作",
          "slug": "logstash1-操作",
          "children": []
        },
        {
          "level": 3,
          "title": "logstash2 操作",
          "slug": "logstash2-操作",
          "children": []
        },
        {
          "level": 3,
          "title": "logstash3 操作",
          "slug": "logstash3-操作-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "八、部署 Kafka",
      "slug": "八、部署-kafka",
      "children": [
        {
          "level": 3,
          "title": "logstash1 操作",
          "slug": "logstash1-操作-1",
          "children": []
        },
        {
          "level": 3,
          "title": "logstash2 操作",
          "slug": "logstash2-操作-1",
          "children": []
        },
        {
          "level": 3,
          "title": "logstash3 操作",
          "slug": "logstash3-操作-2",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "九、部署 logstash",
      "slug": "九、部署-logstash",
      "children": [
        {
          "level": 3,
          "title": "logstash1 操作",
          "slug": "logstash1-操作-2",
          "children": []
        },
        {
          "level": 3,
          "title": "logstash2 操作",
          "slug": "logstash2-操作-2",
          "children": []
        },
        {
          "level": 3,
          "title": "logstash3 操作",
          "slug": "logstash3-操作-3",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "十、部署 filebeat",
      "slug": "十、部署-filebeat",
      "children": []
    },
    {
      "level": 2,
      "title": "十一、部署 curator，定时清理es索引",
      "slug": "十一、部署-curator-定时清理es索引",
      "children": [
        {
          "level": 3,
          "title": "logstash3 机器操作",
          "slug": "logstash3-机器操作",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "十二、参考链接",
      "slug": "十二、参考链接",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 15.66,
    "words": 4697
  },
  "filePathRelative": "monitor/elk/install/docker-com-elk.md"
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
