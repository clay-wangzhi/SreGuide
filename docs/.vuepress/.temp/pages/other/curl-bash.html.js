export const data = {
  "key": "v-8d980508",
  "path": "/other/curl-bash.html",
  "title": "curl方式执行shell脚本时如何传参",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "奇技淫巧"
    ],
    "date": "2020-07-27T00:00:00.000Z",
    "summary": "curl方式执行shell脚本时如何传参 有时候shell脚本可以放在http页面上，不用download，可以直接执行。 通常我们可以用curl的方式执行http页面上的shell脚本。 一般方式是： 这样脚本就可以在本地机器上执行了。 但是需要传入参数的脚本。我们可以用下面的方式传入shell参数\r-s方式; \r< 方式; \r\" 注意 <( 之间不要有空",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/other/curl-bash.html"
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
          "content": "curl方式执行shell脚本时如何传参"
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
          "content": "奇技淫巧"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-07-27T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Bash选项",
      "slug": "bash选项",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.03,
    "words": 910
  },
  "filePathRelative": "other/curl-bash.md"
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
