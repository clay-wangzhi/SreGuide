export const data = {
  "key": "v-049a4574",
  "path": "/build/centos7-shadowsocks.html",
  "title": "centos7下搭建shadowsocks",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "常见服务的搭建"
    ],
    "tag": [
      "shadowsocks"
    ],
    "summary": "centos7下搭建shadowsocks 安装pip 由于安装的是python 版本的 shadowsocks，所以首先安装pip 安装shadowsocks 创建配置文件 创建文件所在目录:/etc 配置文件内容： 启动shadowsocks 启动成功即可通过ss客户端使用。 在window端可以在控制台通过以下命令查看端口是否打开 配置自启动 新建启动",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/build/centos7-shadowsocks.html"
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
          "content": "centos7下搭建shadowsocks"
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
          "content": "shadowsocks"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "安装pip",
      "slug": "安装pip",
      "children": []
    },
    {
      "level": 3,
      "title": "安装shadowsocks",
      "slug": "安装shadowsocks",
      "children": []
    },
    {
      "level": 3,
      "title": "创建配置文件",
      "slug": "创建配置文件",
      "children": []
    },
    {
      "level": 3,
      "title": "启动shadowsocks",
      "slug": "启动shadowsocks",
      "children": []
    },
    {
      "level": 3,
      "title": "配置自启动",
      "slug": "配置自启动",
      "children": []
    },
    {
      "level": 3,
      "title": "firewalld防火墙",
      "slug": "firewalld防火墙",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.61,
    "words": 483
  },
  "filePathRelative": "build/centos7-shadowsocks.md"
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
