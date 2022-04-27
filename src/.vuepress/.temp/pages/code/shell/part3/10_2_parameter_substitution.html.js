export const data = {
  "key": "v-6f0ebce0",
  "path": "/code/shell/part3/10_2_parameter_substitution.html",
  "title": "10.2 参数替换",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "10.2 参数替换 参数替换用来处理或扩展变量。 ${parameter} 等同于 $parameter，是变量 parameter 的值。在一些特定的环境下，只允许使用不易混淆的 ${parameter} 形式。 可以用于连接变量与字符串。 ${parameter-default}, ${parameter:-default} 在没有设置变量的情况下使用缺",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part3/10_2_parameter_substitution.html"
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
          "content": "10.2 参数替换"
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
      "title": "${parameter}",
      "slug": "parameter",
      "children": []
    },
    {
      "level": 3,
      "title": "${parameter-default}, ${parameter:-default}",
      "slug": "parameter-default-parameter-default",
      "children": []
    },
    {
      "level": 3,
      "title": "${parameter=default}, ${parameter:=default}",
      "slug": "parameter-default-parameter-default-1",
      "children": []
    },
    {
      "level": 3,
      "title": "${parameter+alt_value}, ${parameter:+alt_value}",
      "slug": "parameter-alt-value-parameter-alt-value",
      "children": []
    },
    {
      "level": 3,
      "title": "${parameter?err_msg}, ${parameter:?err_msg}",
      "slug": "parameter-err-msg-parameter-err-msg",
      "children": []
    },
    {
      "level": 3,
      "title": "变量长度 / 删除子串",
      "slug": "变量长度-删除子串",
      "children": []
    },
    {
      "level": 3,
      "title": "变量扩展 / 替换子串",
      "slug": "变量扩展-替换子串",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 10.4,
    "words": 3119
  },
  "filePathRelative": "code/shell/part3/10_2_parameter_substitution.md"
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
