export const data = {
  "key": "v-9baa27c2",
  "path": "/monitor/zabbix/zabbix-ans.html",
  "title": "2 zabbix借助ansible安装",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "Zabbix"
    ],
    "summary": "2 zabbix借助ansible安装 zabbix-server安装 1. 下载roles 2. 编写playbook vim new-zabbix-server.yml 3. 安装zabbix-server 4. 优化 优化磁盘，去除atime 5. 注意事项 zabbix-web，筛选历史问题时，记得选择时间范围 zabbix-proxy安装 1. 下",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/zabbix/zabbix-ans.html"
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
          "content": "2 zabbix借助ansible安装"
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
      "title": "zabbix-server安装",
      "slug": "zabbix-server安装",
      "children": []
    },
    {
      "level": 2,
      "title": "zabbix-proxy安装",
      "slug": "zabbix-proxy安装",
      "children": []
    },
    {
      "level": 2,
      "title": "zabbix-agent安装",
      "slug": "zabbix-agent安装",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.36,
    "words": 1009
  },
  "filePathRelative": "monitor/zabbix/zabbix-ans.md"
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
