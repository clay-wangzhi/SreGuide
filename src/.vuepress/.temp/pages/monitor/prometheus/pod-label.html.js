export const data = {
  "key": "v-32678264",
  "path": "/monitor/prometheus/pod-label.html",
  "title": "Prometheus迷雾 - 无法获取Pod的label",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "prometheus"
    ],
    "summary": "Prometheus迷雾 - 无法获取Pod的label \" 转载自：Prometheus迷雾 - 无法获取Pod的label 喜贵的云原生 简书\" 问题背景 Prometheus在抓取container的CPU/Mem等metric的时候，发现metric上没有带Pod的label，这导致一个问题，无法通过自定义的label查看其下的所有metric资源。",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/prometheus/pod-label.html"
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
          "content": "Prometheus迷雾 - 无法获取Pod的label"
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
          "content": "prometheus"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "问题背景",
      "slug": "问题背景",
      "children": []
    },
    {
      "level": 2,
      "title": "问题分析",
      "slug": "问题分析",
      "children": []
    },
    {
      "level": 2,
      "title": "影响范围",
      "slug": "影响范围",
      "children": []
    },
    {
      "level": 2,
      "title": "解决方案一：联表聚合（社区方案）",
      "slug": "解决方案一-联表聚合-社区方案",
      "children": []
    },
    {
      "level": 2,
      "title": "解决方案二：修改kubelet源码方案",
      "slug": "解决方案二-修改kubelet源码方案",
      "children": []
    },
    {
      "level": 2,
      "title": "解决方案三：阿里云 - 大数据",
      "slug": "解决方案三-阿里云-大数据",
      "children": []
    },
    {
      "level": 2,
      "title": "解决方案四：独立安装cAdvisor",
      "slug": "解决方案四-独立安装cadvisor",
      "children": []
    },
    {
      "level": 2,
      "title": "性能测试",
      "slug": "性能测试",
      "children": []
    },
    {
      "level": 2,
      "title": "方案对比",
      "slug": "方案对比",
      "children": []
    },
    {
      "level": 2,
      "title": "其他公司的实践",
      "slug": "其他公司的实践",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 7.42,
    "words": 2226
  },
  "filePathRelative": "monitor/prometheus/pod-label.md"
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
