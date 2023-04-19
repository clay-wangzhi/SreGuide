export const data = {
  "key": "v-5a027c1c",
  "path": "/cloudnative/kubernetes/k8s-audit.html",
  "title": "k8s 开启审计日志",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "k8s 开启审计日志 一、背景 应安全规范，对 apiserver 核心组件，需要记录，\"谁在什么时候操作了什么\"; 方便故障排查; 二、操作步骤 apiserver 开启审计日志 在所有 master 节点执行 1. 备份 配置文件 2. 创建审计策略 vim /etc/kubernetes/audit/audit-policy.yaml 3. 修改api",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/k8s-audit.html"
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
          "content": "k8s 开启审计日志"
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
      "title": "一、背景",
      "slug": "一、背景",
      "children": []
    },
    {
      "level": 2,
      "title": "二、操作步骤",
      "slug": "二、操作步骤",
      "children": [
        {
          "level": 3,
          "title": "apiserver 开启审计日志",
          "slug": "apiserver-开启审计日志",
          "children": []
        },
        {
          "level": 3,
          "title": "使用 filebeat 收集审计日志到 elk 中",
          "slug": "使用-filebeat-收集审计日志到-elk-中",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 1.83,
    "words": 548
  },
  "filePathRelative": "cloudnative/kubernetes/k8s-audit.md"
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
