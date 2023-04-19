export const data = {
  "key": "v-1b65cd68",
  "path": "/code/shell/part2/07_5_testing_your_knowledge_of_tests.html",
  "title": "7.5 牛刀小试",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "7.5 牛刀小试 系统文件 xinitrc 可以用来启动软件 X Server。该文件包含了许多 if/then 测试结构。下面的代码摘录自较早版本的 xinitrc（大约在 Red Hat 7.1 版本）。 试着解释代码片段中的条件测试结构, 然后试着在 /etc/X11/xinit/xinitrc 查看最新版本，并且分析其中的 if/then 条件测试结",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part2/07_5_testing_your_knowledge_of_tests.html"
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
          "content": "7.5 牛刀小试"
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
    "minutes": 0.83,
    "words": 249
  },
  "filePathRelative": "code/shell/part2/07_5_testing_your_knowledge_of_tests.md"
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
