export const data = {
  "key": "v-81126a72",
  "path": "/code/shell/part5/24_1_complex_functions_and_function_complexities.html",
  "title": "24.1 复杂函数和函数复杂性",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "24.1 复杂函数和函数复杂性 函数可以处理传递给它的参数，并且能返回它的退出状态码给脚本，以便后续处理。 函数通过位置来引用传递过来的参数（就好像它们是位置参数），例如，$1, $2，等等。 例子 24-2. 带参数的函数 也可以使用shift命令来处理传递给函数的参数（请参考例子 33-18. 但是，传递给脚本的命令行参数怎么办？在函数内部，可以看见这些",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part5/24_1_complex_functions_and_function_complexities.html"
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
          "content": "24.1 复杂函数和函数复杂性"
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
      "title": "退出与返回码",
      "slug": "退出与返回码",
      "children": [
        {
          "level": 3,
          "title": "退出状态码",
          "slug": "退出状态码",
          "children": []
        },
        {
          "level": 3,
          "title": "return",
          "slug": "return",
          "children": []
        },
        {
          "level": 3,
          "title": "echo",
          "slug": "echo",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 11.48,
    "words": 3445
  },
  "filePathRelative": "code/shell/part5/24_1_complex_functions_and_function_complexities.md"
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
