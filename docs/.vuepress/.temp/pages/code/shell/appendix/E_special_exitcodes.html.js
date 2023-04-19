export const data = {
  "key": "v-dd604362",
  "path": "/code/shell/appendix/E_special_exitcodes.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "退出代码 表意 示例 | 注释 -------- ---- ---- |------ 1 通用错误 let \"var1 = 1/0\" | 其他错误，如除以零错误及其他无权限操作。 2 (据 Bash 文档) 误用 Shell builtins empty_function() {} | 缺失关键词或指令，或权限问题 (及 diff 在二进制文件比较时的返回值",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/appendix/E_special_exitcodes.html"
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
    "minutes": 1.7,
    "words": 509
  },
  "filePathRelative": "code/shell/appendix/E_special_exitcodes.md"
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
