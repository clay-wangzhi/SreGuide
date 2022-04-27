export const data = {
  "key": "v-69c431cc",
  "path": "/linux/qa/du-df-diff.html",
  "title": "Linux，du、df统计的硬盘使用情况不一致问题",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Linux"
    ],
    "tag": [
      "常见问题"
    ],
    "summary": "Linux，du、df统计的硬盘使用情况不一致问题 在运维Linux服务器时，会碰到需要查看硬盘空间的情况，这时候，通常会使用df -lh命令来检查每个挂载了文件系统的硬盘的总量和已使用量，或者，可以使用du -sh [directory]命令来统计某个目录下所有文件的空间占用。 在使用df、du命令时，常常会遇到统计的硬盘使用情况不一致的问题。比如du统计",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/linux/qa/du-df-diff.html"
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
          "content": "Linux，du、df统计的硬盘使用情况不一致问题"
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
          "property": "article:tag",
          "content": "常见问题"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "预留空间",
      "slug": "预留空间",
      "children": []
    },
    {
      "level": 2,
      "title": "幻影文件（phantom file）",
      "slug": "幻影文件-phantom-file",
      "children": []
    },
    {
      "level": 2,
      "title": "未统计到的文件",
      "slug": "未统计到的文件",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 2.44,
    "words": 733
  },
  "filePathRelative": "linux/qa/du-df-diff.md"
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
