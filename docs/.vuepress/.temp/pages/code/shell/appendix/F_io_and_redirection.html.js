export const data = {
  "key": "v-089d1297",
  "path": "/code/shell/appendix/F_io_and_redirection.html",
  "title": "附录 F. I/O 与 I/O 重定向详细介绍",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "附录 F. I/O 与 I/O 重定向详细介绍 一个指令会预期前三个文件描述符可用。第一个， fd 0 (标准输入， stdin) 用于读取。其他两个 (fd 1, stdout 和 fd 2, stderr) 用于写入。 每个指令都关联着一个 stdin, stdout 和 stderr 。ls 2>&1 意味着临时将 ls 的 stderr 连接到与 S",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/appendix/F_io_and_redirection.html"
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
          "content": "附录 F. I/O 与 I/O 重定向详细介绍"
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
      "title": "练习",
      "slug": "练习",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 2.54,
    "words": 761
  },
  "filePathRelative": "code/shell/appendix/F_io_and_redirection.md"
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
