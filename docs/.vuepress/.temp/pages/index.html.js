export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "主页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "主页",
    "heroImage": "/Kubernetes.svg",
    "heroText": "Keep Learning",
    "heroFullScreen": true,
    "tagline": "个人笔记，包涵 云原生、可观测性、自动化运维、Nginx 等相关知识点",
    "actions": [
      {
        "text": "运维面试",
        "link": "/zh/guide/",
        "type": "default"
      },
      {
        "text": "运维知识体系",
        "link": "/zh/config/",
        "type": "primary"
      }
    ],
    "footer": "<a href=\"http://beian.miit.gov.cn/\" target=\"_blank\">备案号:冀ICP备2021007336号</a>",
    "summary": "目录 运维学习路线 :+1:; 运维知识体系 :+1:; 云原生; 基础知识; 操作系统学习笔记; 计算机网络学习笔记; Linux 运维学习笔记; 编程语言; 高级 Bash 脚本编程指南; Python 学习笔记; Golang 学习笔记; 前端学习笔记; 监控工具; Prometheus 学习笔记; Grafana; ELK 学习笔记; Zabbix ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/"
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
          "content": "主页"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
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
      "title": "目录",
      "slug": "目录",
      "children": []
    },
    {
      "level": 2,
      "title": "运维学习路线",
      "slug": "运维学习路线",
      "children": []
    },
    {
      "level": 2,
      "title": "运维知识体系",
      "slug": "运维知识体系",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.76,
    "words": 227
  },
  "filePathRelative": "README.md"
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
