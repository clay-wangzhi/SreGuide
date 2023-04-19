export const data = {
  "key": "v-59890366",
  "path": "/cloudnative/kubernetes/todo.html",
  "title": "Todo",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "Todo 污点与容忍 3、Daemonset 调度问题\r\" :warning: 系统会自动添加 node.kubernetes.io/unschedulable：NoSchedule 容忍度到 DaemonSet Pods。在调度 DaemonSet Pod 时，默认调度器会忽略 unschedulable 节点。\"\r\"\"\r\" \" 4、设置允许Pod调度到M",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/todo.html"
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
          "content": "Todo"
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
      "title": "污点与容忍",
      "slug": "污点与容忍",
      "children": [
        {
          "level": 3,
          "title": "3、Daemonset 调度问题",
          "slug": "_3、daemonset-调度问题",
          "children": []
        },
        {
          "level": 3,
          "title": "4、设置允许Pod调度到Master节点",
          "slug": "_4、设置允许pod调度到master节点",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 0.53,
    "words": 160
  },
  "filePathRelative": "cloudnative/kubernetes/todo.md"
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
