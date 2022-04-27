export const data = {
  "key": "v-4d7b907e",
  "path": "/other/mac-proxy.html",
  "title": "macOS配置终端走socks5代理",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "Mac"
    ],
    "summary": "macOS配置终端走socks5代理 \" 转载自：macOS配置终端走socks5代理\" 在~/.bash_profile 中添加如下内容（如果是是zsh用户那么配置文件为~/.zshrc）： 修改完成之后需要使用source ~/.bash_profile 其中，1080为端口号，需要和自己的代理软件的设置保持一致。 这样在终端中使用proxy命令就可以打",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/other/mac-proxy.html"
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
          "content": "macOS配置终端走socks5代理"
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
          "content": "Mac"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.44,
    "words": 132
  },
  "filePathRelative": "other/mac-proxy.md"
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
