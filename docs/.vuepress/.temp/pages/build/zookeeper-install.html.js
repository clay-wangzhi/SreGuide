export const data = {
  "key": "v-5210fd8e",
  "path": "/build/zookeeper-install.html",
  "title": "zookeeper3.4.14集群搭建步骤",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "常见服务的搭建"
    ],
    "tag": [
      "zookeeper"
    ],
    "summary": "zookeeper3.4.14集群搭建步骤 下载解压 修改相关配置 生产myid文件（三台主机分别执行） 修改zoo.cfg文件 修改/zkEnv.sh文件 找到 ZOOLOGDIR=\".\" 一行，换成如下 修改防火墙规则 启动集群 通过nc方式验证 通过四字命令srvr方式验证",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/build/zookeeper-install.html"
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
          "content": "zookeeper3.4.14集群搭建步骤"
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
          "content": "zookeeper"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "下载解压",
      "slug": "下载解压",
      "children": []
    },
    {
      "level": 3,
      "title": "修改相关配置",
      "slug": "修改相关配置",
      "children": []
    },
    {
      "level": 3,
      "title": "修改防火墙规则",
      "slug": "修改防火墙规则",
      "children": []
    },
    {
      "level": 3,
      "title": "启动集群",
      "slug": "启动集群",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.29,
    "words": 386
  },
  "filePathRelative": "build/zookeeper-install.md"
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
