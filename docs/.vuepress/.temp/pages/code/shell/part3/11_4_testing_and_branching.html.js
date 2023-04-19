export const data = {
  "key": "v-8d45377a",
  "path": "/code/shell/part3/11_4_testing_and_branching.html",
  "title": "11.4 测试与分支",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "11.4 测试与分支 case 和 select 结构并不属于循环结构，因为它们并没有反复执行代码块。但是和循环结构相似的是，它们会根据代码块顶部或尾部的条件控制程序流。 下面介绍两种在代码块中控制程序流的方法： case (in) / esac 在 shell 脚本中，case 模拟了 C/C++ 语言中的 switch，可以根据条件跳转到其中一个分支。其",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part3/11_4_testing_and_branching.html"
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
          "content": "11.4 测试与分支"
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
      "title": "case (in) / esac",
      "slug": "case-in-esac",
      "children": []
    },
    {
      "level": 3,
      "title": "select",
      "slug": "select",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.46,
    "words": 1939
  },
  "filePathRelative": "code/shell/part3/11_4_testing_and_branching.md"
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
