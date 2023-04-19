export const data = {
  "key": "v-1497ef65",
  "path": "/cloudnative/docker/docker-proxy.html",
  "title": "Docker 设置代理",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Docker"
    ],
    "summary": "Docker 设置代理\r\" 起因：由于有些国外的镜像拉取不下来，所以设置翻墙代理，下载成功后，再导出docker save xx:tar -o xx.tar，传输到需要的节点导入docker load -i xx.tar\"\r\" 其中 socks5 中的地址，是我本地启动的代理服务地址\" 参考链接： Docker设置代理",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/docker/docker-proxy.html"
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
          "content": "Docker 设置代理"
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
          "content": "Docker"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.49,
    "words": 148
  },
  "filePathRelative": "cloudnative/docker/docker-proxy.md"
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
