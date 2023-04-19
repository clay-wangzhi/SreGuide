export const data = {
  "key": "v-1496f6a7",
  "path": "/automate/jenkins/docker-install-jenkins.html",
  "title": "2.4 使用docker安装jenkins",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Jenkins"
    ],
    "summary": "2.4 使用docker安装jenkins 安装配置docker 1. 更换yum源，如果本来就是国内源，无需更换 2. 安装配置Docker 使用官方脚本安装 Docker 加载br_netfilter 设置下系统内核参数\r\" ⚠️ 慎用sysctl --system命令，如果参数在不同文件中设置，会有优先级问题，目前看来/etc/sysctl.conf的",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/jenkins/docker-install-jenkins.html"
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
          "content": "2.4 使用docker安装jenkins"
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
          "content": "Jenkins"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装配置docker",
      "slug": "安装配置docker",
      "children": []
    },
    {
      "level": 2,
      "title": "安装配置nginx",
      "slug": "安装配置nginx",
      "children": []
    },
    {
      "level": 2,
      "title": "安装配置jenkins",
      "slug": "安装配置jenkins",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 2.29,
    "words": 688
  },
  "filePathRelative": "automate/jenkins/docker-install-jenkins.md"
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
