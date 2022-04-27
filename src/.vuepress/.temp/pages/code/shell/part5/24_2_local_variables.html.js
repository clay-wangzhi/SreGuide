export const data = {
  "key": "v-66790dab",
  "path": "/code/shell/part5/24_2_local_variables.html",
  "title": "24.2 局部变量",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "24.2 局部变量 怎样使一个变量变成“局部”变量？ 局部变量 如果变量用local来声明，那么它就只能够在该变量被声明的代码块中可见。 这个代码块就是局部范围。 在一个函数中，一个局部变量只有在函数代码中才有意义.[1] 例子 24-12. 局部变量的可见范围 在函数被调用之前，所有在函数中声明的变量，在函数外部都是不可见的，当然也包括那些被明确声明为lo",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part5/24_2_local_variables.html"
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
          "content": "24.2 局部变量"
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
          "property": "article:author",
          "content": "LinuxStory"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Bash"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "24.2.1 局部变量和递归",
      "slug": "_24-2-1-局部变量和递归",
      "children": []
    },
    {
      "level": 2,
      "title": "注释",
      "slug": "注释",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 5.45,
    "words": 1634
  },
  "filePathRelative": "code/shell/part5/24_2_local_variables.md"
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
