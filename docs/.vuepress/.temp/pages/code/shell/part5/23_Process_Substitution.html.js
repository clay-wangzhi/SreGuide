export const data = {
  "key": "v-0f5fa4fa",
  "path": "/code/shell/part5/23_Process_Substitution.html",
  "title": "第二十三章. 进程替换",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "第二十三章. 进程替换 用管道 将一个命令的 输送到另一个命令的 是个强大的技术。但是如果你需要用管道输送多个命令的 怎么办？这时候 进程替换 就派上用场了。 进程替换 把一个（或多个）进程 的输出送到另一个进程的 。 样板 命令列表要用括号括起来 进程替换使用 文件发送括号内进程的结果到另一个进程。[1] \"\"与括号之间没有空格，加上空格或报错。 Bash",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part5/23_Process_Substitution.html"
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
          "content": "第二十三章. 进程替换"
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
    "minutes": 5.33,
    "words": 1598
  },
  "filePathRelative": "code/shell/part5/23_Process_Substitution.md"
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
