export const data = {
  "key": "v-3e5b7b84",
  "path": "/category/categorya/",
  "title": "CategoryA 分类",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "CategoryA 分类",
    "blog": {
      "type": "category",
      "name": "CategoryA",
      "key": "category"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/category/categorya/"
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
          "content": "CategoryA 分类"
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
