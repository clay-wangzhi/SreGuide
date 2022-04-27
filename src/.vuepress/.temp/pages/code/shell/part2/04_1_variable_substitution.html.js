export const data = {
  "key": "v-95c6342c",
  "path": "/code/shell/part2/04_1_variable_substitution.html",
  "title": "4.1 变量替换",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "4.1 变量替换 变量名是其所指向值的一个占位符（placeholder）。引用变量值的过程我们称之为变量替换（variable substitution）。 $ 接下来我们仔细区分一下变量名与变量值。如果变量名是 variable1， 那么 $variable1 就是对变量值的引用。[^1] 变量仅仅在声明时、赋值时、被删除时（unset）、被导出时（ex",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part2/04_1_variable_substitution.html"
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
          "content": "4.1 变量替换"
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
      "title": "$",
      "slug": "",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.54,
    "words": 1061
  },
  "filePathRelative": "code/shell/part2/04_1_variable_substitution.md"
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
