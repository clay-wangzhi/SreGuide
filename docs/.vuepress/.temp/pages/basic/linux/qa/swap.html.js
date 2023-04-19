export const data = {
  "key": "v-213dba9c",
  "path": "/basic/linux/qa/swap.html",
  "title": "linux下如何增加swap交换分区",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Linux"
    ],
    "tag": [
      "常见问题"
    ],
    "summary": "linux下如何增加swap交换分区 swap即交换分区，类似于windows虚拟内存功能，就是在硬盘上分配出一块空间作为虚拟内存来使用. 通常swap都是在装系统硬盘分区时设定，这里只是探讨一下系统已经安装好后，扩展swap分区的方法.下面我们来将下如何在安装好的linux下增加swap交换分区. 可以有两种方法来增加swap分区，一种是将新的分区来作为s",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/basic/linux/qa/swap.html"
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
          "content": "linux下如何增加swap交换分区"
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
      "title": "新分区扩展swap",
      "slug": "新分区扩展swap",
      "children": []
    },
    {
      "level": 2,
      "title": "大文件扩展swap",
      "slug": "大文件扩展swap",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.88,
    "words": 265
  },
  "filePathRelative": "basic/linux/qa/swap.md"
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
