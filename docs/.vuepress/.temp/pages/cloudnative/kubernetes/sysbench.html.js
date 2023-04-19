export const data = {
  "key": "v-07f61cc9",
  "path": "/cloudnative/kubernetes/sysbench.html",
  "title": "性能压测指标及方法",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "性能压测指标及方法 一、基础性能测试 CPU 性能 Super_Pi 在计算性能测试中，我们使用linux下的bc计算器程序通过反正切函数计算5000位圆周率的cpu耗时来对主机进行测试。 CPU调度延时 sysbench 素数计算 内存性能 内存带宽(stream) Stream测试是内存测试中业界公认的内存带宽性能测试基准工具 内存时延(mlc) 官网下",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/sysbench.html"
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
          "content": "性能压测指标及方法"
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
          "content": "Kubernetes"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、基础性能测试",
      "slug": "一、基础性能测试",
      "children": [
        {
          "level": 3,
          "title": "CPU 性能",
          "slug": "cpu-性能",
          "children": []
        },
        {
          "level": 3,
          "title": "内存性能",
          "slug": "内存性能",
          "children": []
        },
        {
          "level": 3,
          "title": "磁盘 I/O 性能",
          "slug": "磁盘-i-o-性能",
          "children": []
        },
        {
          "level": 3,
          "title": "文件 I/O 性能",
          "slug": "文件-i-o-性能",
          "children": []
        },
        {
          "level": 3,
          "title": "网络性能",
          "slug": "网络性能",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "二、应用性能测试",
      "slug": "二、应用性能测试",
      "children": [
        {
          "level": 3,
          "title": "1、Nginx",
          "slug": "_1、nginx",
          "children": []
        },
        {
          "level": 3,
          "title": "2、MySQL",
          "slug": "_2、mysql",
          "children": []
        },
        {
          "level": 3,
          "title": "3、Redis",
          "slug": "_3、redis",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "三、压测脚本",
      "slug": "三、压测脚本",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.07,
    "words": 1822
  },
  "filePathRelative": "cloudnative/kubernetes/sysbench.md"
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
