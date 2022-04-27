export const data = {
  "key": "v-30b54790",
  "path": "/automate/jenkins/dingding-plugin.html",
  "title": "4.5 共享库之钉钉消息推送",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Jenkins"
    ],
    "summary": "4.5 共享库之钉钉消息推送 起因：执行完流水线后进行一定程度的消息推送，所以选择钉钉进行jenkins构建结构的消息推送 下载配置相关依赖插件 相关环境：\rJenkins 2.277.3，安装文档见上篇; \rDingTalk 插件 2.4.3; \rbuild user vars plugin 插件 1.7; 1. 在Jenkins中安装钉钉插件DingTa",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/jenkins/dingding-plugin.html"
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
          "content": "4.5 共享库之钉钉消息推送"
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
      "title": "下载配置相关依赖插件",
      "slug": "下载配置相关依赖插件",
      "children": []
    },
    {
      "level": 2,
      "title": "创建配置共享库",
      "slug": "创建配置共享库",
      "children": [
        {
          "level": 3,
          "title": "编写Groovy脚本",
          "slug": "编写groovy脚本",
          "children": []
        },
        {
          "level": 3,
          "title": "在 Jenkins 中配置将共享库",
          "slug": "在-jenkins-中配置将共享库",
          "children": []
        },
        {
          "level": 3,
          "title": "在流水线中导入共享库",
          "slug": "在流水线中导入共享库",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "遇到的问题",
      "slug": "遇到的问题",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 2.56,
    "words": 768
  },
  "filePathRelative": "automate/jenkins/dingding-plugin.md"
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
