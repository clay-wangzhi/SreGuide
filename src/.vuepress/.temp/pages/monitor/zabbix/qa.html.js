export const data = {
  "key": "v-f875cf44",
  "path": "/monitor/zabbix/qa.html",
  "title": "6 常见问题",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "Zabbix"
    ],
    "summary": "6 常见问题 Zabbix客户端日志出现(Not all processes could be identified） 场景：因为使用了netstat -p参数。 权限问题，zabbix_agentd是zabbix用户启动的，默认不能执行netstat -p等命令，导致从服务器取到的自动发现脚本为空 (Not all processes could be i",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/zabbix/qa.html"
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
          "content": "6 常见问题"
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
      "title": "zabbix_server.log大量提示cannot sen list of active checks to \"IP\":host [Hostname] not found",
      "slug": "zabbix-server-log大量提示cannot-sen-list-of-active-checks-to-ip-host-hostname-not-found",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.89,
    "words": 267
  },
  "filePathRelative": "monitor/zabbix/qa.md"
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
