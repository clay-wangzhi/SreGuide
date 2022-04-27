export const data = {
  "key": "v-5dd0a05d",
  "path": "/monitor/elk/bak/install/05_filebeat.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "1. 下载rpm包 ​\t2. 修改启动项 ​\tcentos7安装filebeat需要注意修改/usr/lib/systemd/system/filebeat.service\r\" 主要修改的地方为：\"\r\"\"\r\" * Environment=\"BEATLOGOPTS=-e\" 改为 Environment=\"BEATLOGOPTS\" \"\r\" * ExecStart",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/bak/install/05_filebeat.html"
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
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.57,
    "words": 171
  },
  "filePathRelative": "monitor/elk/bak/install/05_filebeat.md"
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
