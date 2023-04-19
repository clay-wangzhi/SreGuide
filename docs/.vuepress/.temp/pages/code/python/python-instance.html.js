export const data = {
  "key": "v-1941575d",
  "path": "/code/python/python-instance.html",
  "title": "python 实际工作中的实例",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Python"
    ],
    "tag": [
      "工作脚本"
    ],
    "summary": "python 实际工作中的实例 让 windows 压测机 解析内网进行压测，避免占用外网带宽 1）生成 hosts 解析文件，将解析文件分成 N 份，解析到不同的 内网ip cat syncxxxhosts.py 2）将 压测机 分为 N 组，生成 ansible 动态 Inventory cat get_hosts.py 3）编写 playbook , ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/python/python-instance.html"
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
          "content": "python 实际工作中的实例"
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
          "content": "工作脚本"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "让 windows 压测机 解析内网进行压测，避免占用外网带宽",
      "slug": "让-windows-压测机-解析内网进行压测-避免占用外网带宽",
      "children": []
    },
    {
      "level": 2,
      "title": "调用 alibabacloud_alidns 去操作 阿里云 dns 解析",
      "slug": "调用-alibabacloud-alidns-去操作-阿里云-dns-解析",
      "children": []
    },
    {
      "level": 2,
      "title": "调用zabbixAPI批量添加web监控",
      "slug": "调用zabbixapi批量添加web监控",
      "children": []
    },
    {
      "level": 2,
      "title": "调用jenkinsAPI批量拷贝视图job",
      "slug": "调用jenkinsapi批量拷贝视图job",
      "children": []
    },
    {
      "level": 2,
      "title": "解析 nginx 配置文件生成 Excel 表格",
      "slug": "解析-nginx-配置文件生成-excel-表格",
      "children": [
        {
          "level": 3,
          "title": "导入nginx配置文件",
          "slug": "导入nginx配置文件",
          "children": []
        },
        {
          "level": 3,
          "title": "pip安装相关依赖模块",
          "slug": "pip安装相关依赖模块",
          "children": []
        },
        {
          "level": 3,
          "title": "编写python脚本",
          "slug": "编写python脚本",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "监控 activemq 集群状态并自动重启",
      "slug": "监控-activemq-集群状态并自动重启",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 14.56,
    "words": 4369
  },
  "filePathRelative": "code/python/python-instance.md"
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
