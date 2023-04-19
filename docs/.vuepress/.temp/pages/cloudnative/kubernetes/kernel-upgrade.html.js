export const data = {
  "key": "v-af7321c0",
  "path": "/cloudnative/kubernetes/kernel-upgrade.html",
  "title": "内核版本升级",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "内核版本升级 背景 k8s 目前使用的内核 版本为：4.9.220，存在以下bug： CPU 限流; https://github.com/fho/docker-samba-loop; moby/moby#5618; coreos/bugs#254; 无法支持 calico eBPF; 现升级版本为：kernel-lt 5.4.196 具体操作步骤 \" :w",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/kernel-upgrade.html"
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
          "content": "内核版本升级"
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
      "title": "背景",
      "slug": "背景",
      "children": []
    },
    {
      "level": 2,
      "title": "具体操作步骤",
      "slug": "具体操作步骤",
      "children": []
    },
    {
      "level": 2,
      "title": "Node节点平滑维护",
      "slug": "node节点平滑维护",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.73,
    "words": 519
  },
  "filePathRelative": "cloudnative/kubernetes/kernel-upgrade.md"
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
