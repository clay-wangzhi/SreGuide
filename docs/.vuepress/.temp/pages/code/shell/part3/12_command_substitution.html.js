export const data = {
  "key": "v-b6223f7e",
  "path": "/code/shell/part3/12_command_substitution.html",
  "title": "第十二章 命令替换",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "第十二章 命令替换 命令替换重新指定一个[^1]或多个命令的输出。其实就是将命令的输出导到另外一个地方[^2]。 命令替换的通常形式是（ ... ），即用反引号引用命令。 命令的输出可以作为另一个命令的参数，也可以赋值给一个变量。甚至在 for 循环中可以用输出产生参数表。 \" 命令替换本质上是调用了一个 子进程 来执行。\" \" 命令替换有可能会出现 字符分",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part3/12_command_substitution.html"
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
          "content": "第十二章 命令替换"
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
    "minutes": 7.33,
    "words": 2198
  },
  "filePathRelative": "code/shell/part3/12_command_substitution.md"
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
