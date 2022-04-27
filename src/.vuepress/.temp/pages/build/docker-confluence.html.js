export const data = {
  "key": "v-0762666e",
  "path": "/build/docker-confluence.html",
  "title": "基于docker搭建confluence",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "常见服务的搭建"
    ],
    "tag": [
      "confluence"
    ],
    "summary": "基于docker搭建confluence 系统版本：centos7 安装docker 1. yum安装docker 2. 开启镜像加速 由于国内网络问题拉取 Docker 镜像会十分缓慢，所以可以添加网易镜像地址：http://hub-mirror.c.163.com 加速。 将其中的内容替换为如下，当然你可以添加其它镜像地址。 3. 启动docker 安装",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/build/docker-confluence.html"
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
          "content": "基于docker搭建confluence"
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
          "content": "confluence"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装docker",
      "slug": "安装docker",
      "children": []
    },
    {
      "level": 2,
      "title": "安装数据库PostgreSQL",
      "slug": "安装数据库postgresql",
      "children": []
    },
    {
      "level": 2,
      "title": "安装wiki Confluence",
      "slug": "安装wiki-confluence",
      "children": []
    },
    {
      "level": 2,
      "title": "破解 wiki Confluence",
      "slug": "破解-wiki-confluence",
      "children": []
    },
    {
      "level": 2,
      "title": "解决慢时长gc的问题",
      "slug": "解决慢时长gc的问题",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.22,
    "words": 967
  },
  "filePathRelative": "build/docker-confluence.md"
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
