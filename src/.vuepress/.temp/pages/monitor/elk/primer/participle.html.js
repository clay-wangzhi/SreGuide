export const data = {
  "key": "v-4b23de69",
  "path": "/monitor/elk/primer/participle.html",
  "title": "通过分析器进行分词",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "ELK"
    ],
    "summary": "通过分析器进行分词 Analysis Analysis与Analyzer Analysis - 文本分析是把全文本转换一系列单词（term/token）的过程，也叫分词; Analysis是通过Analyzer来实现的; 可使用Elasticsearch内置的分析器/或者按需定制化分析器; 除了在数据写入时转换词条，匹配Query语句时候也需要用相同的分析器",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/elk/primer/participle.html"
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
          "content": "通过分析器进行分词"
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
          "content": "ELK"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Analysis",
      "slug": "analysis",
      "children": [
        {
          "level": 3,
          "title": "Analysis与Analyzer",
          "slug": "analysis与analyzer",
          "children": []
        },
        {
          "level": 3,
          "title": "Analyzer的组成",
          "slug": "analyzer的组成",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Elasticsearch的内置分词器",
      "slug": "elasticsearch的内置分词器",
      "children": [
        {
          "level": 3,
          "title": "使用_analyzer API",
          "slug": "使用-analyzer-api",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "中文分词",
      "slug": "中文分词",
      "children": [
        {
          "level": 3,
          "title": "分文分词的难点",
          "slug": "分文分词的难点",
          "children": []
        },
        {
          "level": 3,
          "title": "ICU Analyzer",
          "slug": "icu-analyzer",
          "children": []
        },
        {
          "level": 3,
          "title": "常用的中文分词器",
          "slug": "常用的中文分词器",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 1.72,
    "words": 515
  },
  "filePathRelative": "monitor/elk/primer/participle.md"
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
