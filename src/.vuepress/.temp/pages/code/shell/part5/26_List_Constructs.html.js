export const data = {
  "key": "v-418229bc",
  "path": "/code/shell/part5/26_List_Constructs.html",
  "title": "26. 列表结构",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "26. 列表结构 and 列表 和 or 列表 结构提供了连续执行若干命令的方法，可以有效地替换复杂的嵌套 if/then ，甚至 case 语句。 链接多个命令 and 列表 只要前一个命令返回 true（即 0），每一个命令就依次执行。当第一个 false（即 非0）返回时，命令链条即终止（第一个返回 false 的命令是最后一个执行的）。 在YongY",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part5/26_List_Constructs.html"
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
          "content": "26. 列表结构"
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
      "title": "链接多个命令",
      "slug": "链接多个命令",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 4.33,
    "words": 1299
  },
  "filePathRelative": "code/shell/part5/26_List_Constructs.md"
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
