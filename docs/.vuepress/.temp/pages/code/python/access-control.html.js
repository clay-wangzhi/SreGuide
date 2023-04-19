export const data = {
  "key": "v-24848cfb",
  "path": "/code/python/access-control.html",
  "title": "9.2 访问控制和属性装饰器",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Python"
    ],
    "summary": "9.2 访问控制和属性装饰器 访问控制 私有（Private） 成员 在 Python 中，在类变量或实例变量前使用两个下划线的变量，称为私有成员，包括私有属性、私有方法。 在类的定义范围内，使用前置双下划线的标识符，在类外部不能直接访问。 私有成员本质 打开类字典和实例字典，一目了然，都被悄悄的改了名称，所以使用定义的名字就访问不了了。 名称都被前置了_类",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/python/access-control.html"
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
          "content": "9.2 访问控制和属性装饰器"
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
      "title": "访问控制",
      "slug": "访问控制",
      "children": []
    },
    {
      "level": 2,
      "title": "属性装饰器",
      "slug": "属性装饰器",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.14,
    "words": 942
  },
  "filePathRelative": "code/python/access-control.md"
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
