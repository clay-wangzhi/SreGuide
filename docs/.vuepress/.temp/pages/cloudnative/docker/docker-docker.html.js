export const data = {
  "key": "v-87f9ec82",
  "path": "/cloudnative/docker/docker-docker.html",
  "title": "如何在Docker容器中运行Docker [3种方法]",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Docker"
    ],
    "summary": "如何在Docker容器中运行Docker [3种方法] \" 转载自：如何在Docker容器中运行Docker 3种方法\" 在本博客中，我将向您介绍在docker中运行docker所需的三种不同方法。 Docker In Docker的用处 1. dockerIndocker的一个潜在用处是CI管道，在代码成功构建后，您需要在其中构建docker镜像并将其推送",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/docker/docker-docker.html"
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
          "content": "如何在Docker容器中运行Docker [3种方法]"
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
          "content": "Docker"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Docker In Docker的用处",
      "slug": "docker-in-docker的用处",
      "children": []
    },
    {
      "level": 2,
      "title": "在Docker容器中运行Docker",
      "slug": "在docker容器中运行docker",
      "children": [
        {
          "level": 3,
          "title": "方法1：使用[/var/run/docker.sock]的Docker中运行Docker",
          "slug": "方法1-使用-var-run-docker-sock-的docker中运行docker",
          "children": []
        },
        {
          "level": 3,
          "title": "方法2：Docker In Docker",
          "slug": "方法2-docker-in-docker",
          "children": []
        },
        {
          "level": 3,
          "title": "方法3：使用Sysbox运行时的Docker中的Docker",
          "slug": "方法3-使用sysbox运行时的docker中的docker",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "关键注意事项",
      "slug": "关键注意事项",
      "children": []
    },
    {
      "level": 2,
      "title": "常见问题",
      "slug": "常见问题",
      "children": [
        {
          "level": 3,
          "title": "在Docker中运行Docker安全吗？",
          "slug": "在docker中运行docker安全吗",
          "children": []
        },
        {
          "level": 3,
          "title": "如何在Jenkins中的docker中运行docker？",
          "slug": "如何在jenkins中的docker中运行docker",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 5.32,
    "words": 1596
  },
  "filePathRelative": "cloudnative/docker/docker-docker.md"
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
