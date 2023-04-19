export const data = {
  "key": "v-3623fc05",
  "path": "/basic/linux/qa/curl-https.html",
  "title": "证书相关问题",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Linux"
    ],
    "tag": [
      "常见问题"
    ],
    "summary": "证书相关问题 curl https报错: curl: (35) SSL connect error 原因：curl默认支持https是nss，而不是openssl，需要换成openss 源码编译curl 转载自： ca证书过期导致请求错误 1）查看一下时间date 2） 系统 curl 命令不通的时候 更新一下 证书 3）更新一下java里面的cacerts",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/basic/linux/qa/curl-https.html"
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
          "content": "证书相关问题"
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
          "content": "常见问题"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "curl https报错: curl: (35) SSL connect error",
      "slug": "curl-https报错-curl-35-ssl-connect-error",
      "children": []
    },
    {
      "level": 2,
      "title": "ca证书过期导致请求错误",
      "slug": "ca证书过期导致请求错误",
      "children": []
    },
    {
      "level": 2,
      "title": "老交叉根过期",
      "slug": "老交叉根过期",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.62,
    "words": 187
  },
  "filePathRelative": "basic/linux/qa/curl-https.md"
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
