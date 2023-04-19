export const data = {
  "key": "v-d54a4614",
  "path": "/code/shell/part5/20_1_use_exec.html",
  "title": "20.1 使用 exec",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "20.1 使用 exec 一个 exec < filename 命令重定向了 标准输入 到一个文件。自此所有 标准输入 都来自该文件而不是默认来源(通常是键盘输入)。在使用 sed 和 awk 时候这种方式可以逐行读文件并逐行解析。 样例 20-1. 使用 exec 重定向 标准输入 同理, exec >filename 重定向 标准输出 到指定文件. 他将",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part5/20_1_use_exec.html"
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
          "content": "20.1 使用 exec"
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
    "minutes": 3.17,
    "words": 952
  },
  "filePathRelative": "code/shell/part5/20_1_use_exec.md"
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
