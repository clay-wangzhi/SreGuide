export const data = {
  "key": "v-01406aac",
  "path": "/monitor/zabbix/zabbix-redis.html",
  "title": "5 Redis监控模块",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "Zabbix"
    ],
    "summary": "5 Redis监控模块 \" zabbix旧版本可以用，新版本建议用官方模板\" 模板导入 打开“配置”-->“模板”-->\"导入\" 导入zaxredis文件夹下的redistemplatesforzbx_3.4.xml文件 配置文件导入 将zaxredis文件夹下的userparameterredis.conf文件上传到redis服务器的/etc/zabbix",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/zabbix/zabbix-redis.html"
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
          "content": "5 Redis监控模块"
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
      "title": "模板导入",
      "slug": "模板导入",
      "children": []
    },
    {
      "level": 2,
      "title": "配置文件导入",
      "slug": "配置文件导入",
      "children": []
    },
    {
      "level": 2,
      "title": "增加ss命令权限",
      "slug": "增加ss命令权限",
      "children": []
    },
    {
      "level": 2,
      "title": "重启zabbix客户端",
      "slug": "重启zabbix客户端",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.54,
    "words": 161
  },
  "filePathRelative": "monitor/zabbix/zabbix-redis.md"
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
