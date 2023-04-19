export const data = {
  "key": "v-484552dc",
  "path": "/tag/markdown/",
  "title": "markdown 标签",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "markdown 标签",
    "blog": {
      "type": "category",
      "name": "markdown",
      "key": "tag"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/tag/markdown/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "IT 外卖小哥"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "markdown 标签"
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
  "headers": [],
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
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
