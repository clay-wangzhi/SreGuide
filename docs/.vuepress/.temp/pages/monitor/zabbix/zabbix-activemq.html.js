export const data = {
  "key": "v-baa733fa",
  "path": "/monitor/zabbix/zabbix-activemq.html",
  "title": "8 activemq监控",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "Zabbix"
    ],
    "summary": "8 activemq监控 \" zabbix旧版本可以用，新版本建议用官方模板\" 关闭被监控端的防火墙 activemq 防火墙的添加还是有问题，先把防火墙给关了，它好像是后续会再产生一个随机端口，进行数据的传输 zabbixproxy安装javagateway， 因为是基于JMX进行监控的 修改配置文件 配置./apache-activemq-5.11.1/",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/zabbix/zabbix-activemq.html"
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
          "content": "8 activemq监控"
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
          "content": "Zabbix"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "关闭被监控端的防火墙",
      "slug": "关闭被监控端的防火墙",
      "children": []
    },
    {
      "level": 2,
      "title": "zabbix_proxy安装java_gateway，",
      "slug": "zabbix-proxy安装java-gateway",
      "children": []
    },
    {
      "level": 2,
      "title": "修改配置文件",
      "slug": "修改配置文件",
      "children": []
    },
    {
      "level": 2,
      "title": "导入模板",
      "slug": "导入模板",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.82,
    "words": 245
  },
  "filePathRelative": "monitor/zabbix/zabbix-activemq.md"
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
