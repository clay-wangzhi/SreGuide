export const data = {
  "key": "v-44c2064c",
  "path": "/code/shell/part2/05_2_escaping.html",
  "title": "5.2 转义",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "5.2 转义 转义是一种引用单字符的方法。通过在特殊字符前加上转义符 \\ 来告诉shell按照字面意思去解释这个字符。 \" 需要注意的是，在一些特定的命令和工具，比如 echo 和 sed 中，转义字符通常会起到相反的效果，即可能会使得那些字符产生特殊含义。\" 在 echo 与 sed 命令中，转义字符的特殊含义 \\n 换行（line feed）。 \\r 回",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part2/05_2_escaping.html"
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
          "content": "5.2 转义"
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
      "title": "\\n",
      "slug": "n",
      "children": []
    },
    {
      "level": 3,
      "title": "\\r",
      "slug": "r",
      "children": []
    },
    {
      "level": 3,
      "title": "\\t",
      "slug": "t",
      "children": []
    },
    {
      "level": 3,
      "title": "\\v",
      "slug": "v",
      "children": []
    },
    {
      "level": 3,
      "title": "\\b",
      "slug": "b",
      "children": []
    },
    {
      "level": 3,
      "title": "\\a",
      "slug": "a",
      "children": []
    },
    {
      "level": 3,
      "title": "\\0xx",
      "slug": "_0xx",
      "children": []
    },
    {
      "level": 3,
      "title": "\\\"",
      "slug": "",
      "children": []
    },
    {
      "level": 3,
      "title": "\\$",
      "slug": "-1",
      "children": []
    },
    {
      "level": 3,
      "title": "\\\\",
      "slug": "-2",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.29,
    "words": 1887
  },
  "filePathRelative": "code/shell/part2/05_2_escaping.md"
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
