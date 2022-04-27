export const data = {
  "key": "v-160e6fcf",
  "path": "/code/shell/part2/04_4_special_variable_types.html",
  "title": "4.4 特殊的变量类型",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "4.4 特殊的变量类型 局部变量 仅在代码块或函数中才可见的变量（参考函数章节的局部变量部分）。 环境变量 会影响用户及shell行为的变量。 \" 一般情况下，每一个进程都有自己的“环境”（environment），也就是一组该进程可以访问到的变量。从这个意义上来说，shell表现出与其他进程一样的行为。\" \" \" \" 每当shell启动时，都会创建出与其环",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part2/04_4_special_variable_types.html"
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
          "content": "4.4 特殊的变量类型"
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
      "level": 3,
      "title": "局部变量",
      "slug": "局部变量",
      "children": []
    },
    {
      "level": 3,
      "title": "环境变量",
      "slug": "环境变量",
      "children": []
    },
    {
      "level": 3,
      "title": "位置参数",
      "slug": "位置参数",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.58,
    "words": 1975
  },
  "filePathRelative": "code/shell/part2/04_4_special_variable_types.md"
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
