export const data = {
  "key": "v-0698c03c",
  "path": "/code/shell/part2/08_3_the_double_parentheses_construct.html",
  "title": "8.3 双圆括号结构",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "8.3 双圆括号结构 与let命令类似，(( ... )) 结构允许对算术表达式的扩展和求值。它是let命令的简化形式。例如，a=$(( 5 + 3 )) 会将变量a赋值成 5 + 3，也就是8。在Bash中，双圆括号结构也允许以C风格的方式操作变量。例如，(( var++ ))。 样例 8-5. 以C风格的方式操作变量 还可以参看 样例 11-13 与 样",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part2/08_3_the_double_parentheses_construct.html"
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
          "content": "8.3 双圆括号结构"
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
  "headers": [],
  "readingTime": {
    "minutes": 1.4,
    "words": 419
  },
  "filePathRelative": "code/shell/part2/08_3_the_double_parentheses_construct.md"
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
