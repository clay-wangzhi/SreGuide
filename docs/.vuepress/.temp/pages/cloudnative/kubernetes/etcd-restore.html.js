export const data = {
  "key": "v-ec89bf0a",
  "path": "/cloudnative/kubernetes/etcd-restore.html",
  "title": "etcd 备份恢复",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "etcd 备份恢复 etcd 备份 1. 创建备份脚本/opt/etcd_backup.sh 2. 添加cron定时任务 crontab -e etcd 恢复 1. 创建备份目录 2. 停止所有 Master 上 kube-apiserver 服务 3. 停止集群中所有 etcd 服务 4. 移除所有 etcd 存储目录下数据，不同环境下，存储目录可能不一样",
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
          "content": "etcd 备份恢复"
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
      "level": 3,
      "title": "etcd 备份",
      "slug": "etcd-备份",
      "children": []
    },
    {
      "level": 3,
      "title": "etcd 恢复",
      "slug": "etcd-恢复",
      "children": []
    },
    {
      "level": 2,
      "title": "总结",
      "slug": "总结",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.97,
    "words": 590
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
