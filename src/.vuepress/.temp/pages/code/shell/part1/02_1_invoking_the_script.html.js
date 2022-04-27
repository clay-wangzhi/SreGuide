export const data = {
  "key": "v-ccb7dd70",
  "path": "/code/shell/part1/02_1_invoking_the_script.html",
  "title": "2.1 调用一个脚本",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "2.1 调用一个脚本 写完一个脚本以后，你可以通过sh scriptname或bash scriptname来调用它（不推荐使用sh <scriptname调用脚本，因为这会禁用脚本从标准输入（stdin）读入数据）。更方便的方式是使用chmod命令使脚本可以被直接执行。 执行命令： chmod 555 scriptname（给予所有用户读取/执行的权限） ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part1/02_1_invoking_the_script.html"
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
          "content": "2.1 调用一个脚本"
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
    "minutes": 0.85,
    "words": 256
  },
  "filePathRelative": "code/shell/part1/02_1_invoking_the_script.md"
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
