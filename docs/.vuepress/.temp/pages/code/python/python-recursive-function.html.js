export const data = {
  "key": "v-13fe8742",
  "path": "/code/python/python-recursive-function.html",
  "title": "4.4 递归函数",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Python"
    ],
    "summary": "4.4 递归函数 简介 在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。 举个例子，我们来计算阶乘n! = 1 x 2 x 3 x ... x n，用函数fact(n)表示，可以看出： 所以，fact(n)可以表示为n x fact(n-1)，只有n=1时需要特殊处理。 于是，fact(n)用递归的方式写出来就是： 上面就",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/python/python-recursive-function.html"
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
          "content": "4.4 递归函数"
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
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "简介",
      "slug": "简介",
      "children": []
    },
    {
      "level": 2,
      "title": "输出斐波那契数列",
      "slug": "输出斐波那契数列",
      "children": []
    },
    {
      "level": 2,
      "title": "小结",
      "slug": "小结",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.28,
    "words": 985
  },
  "filePathRelative": "code/python/python-recursive-function.md"
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
