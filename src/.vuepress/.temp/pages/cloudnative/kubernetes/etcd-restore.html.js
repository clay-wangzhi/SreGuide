export const data = {
  "key": "v-ec89bf0a",
  "path": "/cloudnative/kubernetes/etcd-restore.html",
  "title": "通过备份 Etcd 来完美恢复 Kubernetes 中的误删数据",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "通过备份 Etcd 来完美恢复 Kubernetes 中的误删数据 \" 转载自：Etcd备份数据如何做到完美恢复Kubernetes中误删数据呢\" 误删或者机器宕机，会导致etcd数据的丢失或某个节点的etcd数据异常时，请不要慌，认真看完此文，绝对有收获。当误删时，如何恢复数据，这个操作需求在实际环境当中是不可避免的。以下描述删除两个namespace下的",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/etcd-restore.html"
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
          "content": "通过备份 Etcd 来完美恢复 Kubernetes 中的误删数据"
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
      "title": "1 操作环境信息",
      "slug": "_1-操作环境信息",
      "children": []
    },
    {
      "level": 2,
      "title": "2 前提条件",
      "slug": "_2-前提条件",
      "children": []
    },
    {
      "level": 2,
      "title": "3 数据环境的模拟",
      "slug": "_3-数据环境的模拟",
      "children": [
        {
          "level": 3,
          "title": "3.1 新建 test namespace，在该ns下创建pod，创建成功之后，此时这些数据已存在etcd中。",
          "slug": "_3-1-新建-test-namespace-在该ns下创建pod-创建成功之后-此时这些数据已存在etcd中。",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 在default namespace 创建pod，如下所示，创建成功之后，此时这些数据已存在etcd中",
          "slug": "_3-2-在default-namespace-创建pod-如下所示-创建成功之后-此时这些数据已存在etcd中",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 在某目录下已存放包含上述产生数据的etcd快照",
          "slug": "_3-3-在某目录下已存放包含上述产生数据的etcd快照",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 模拟数据的删除",
      "slug": "_4-模拟数据的删除",
      "children": []
    },
    {
      "level": 2,
      "title": "5 数据的恢复",
      "slug": "_5-数据的恢复",
      "children": [
        {
          "level": 3,
          "title": "5.1 准备工作",
          "slug": "_5-1-准备工作",
          "children": []
        },
        {
          "level": 3,
          "title": "5.2 恢复备份",
          "slug": "_5-2-恢复备份",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6 总结",
      "slug": "_6-总结",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.18,
    "words": 1855
  },
  "filePathRelative": "cloudnative/kubernetes/etcd-restore.md"
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
