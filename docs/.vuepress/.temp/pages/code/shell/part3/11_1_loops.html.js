export const data = {
  "key": "v-755f1380",
  "path": "/code/shell/part3/11_1_loops.html",
  "title": "11.1 循环",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "11.1 循环 循环是当循环控制条件为真时，一系列命令迭代[^1]执行的代码块。 for 循环 for arg in [list] 这是 shell 中最基本的循环结构，它与C语言形式的循环有着明显的不同。 \" 在循环的过程中，arg 会从 list 中连续获得每一个变量的值。\" 参数 list 中允许含有 通配符。 如果 do 和 for 写在同一行时，需",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part3/11_1_loops.html"
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
          "content": "11.1 循环"
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
      "title": "for 循环",
      "slug": "for-循环",
      "children": []
    },
    {
      "level": 3,
      "title": "while 循环",
      "slug": "while-循环",
      "children": []
    },
    {
      "level": 3,
      "title": "until",
      "slug": "until",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 15.51,
    "words": 4653
  },
  "filePathRelative": "code/shell/part3/11_1_loops.md"
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
