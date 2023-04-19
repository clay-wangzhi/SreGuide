export const data = {
  "key": "v-daf345c2",
  "path": "/cloudnative/kubernetes/docker-harbor-ha.html",
  "title": "Harbor 高可用搭建(docker-compose)",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "harbor"
    ],
    "summary": "Harbor 高可用搭建(docker-compose) Harbor简介 Harbor是一个用于存储和分发Docker镜像的企业级Registry服务器，通过添加一些企业必需的功能特性，例如安全、标识和管理等，扩展了开源Docker Distribution。 作为一个企业级私有Registry服务器，Harbor提供了更好的性能和安全。 提升用户使用Re",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/docker-harbor-ha.html"
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
          "content": "Harbor 高可用搭建(docker-compose)"
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
          "content": "harbor"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Harbor简介",
      "slug": "harbor简介",
      "children": []
    },
    {
      "level": 2,
      "title": "高可用架构：双主复制",
      "slug": "高可用架构-双主复制",
      "children": [
        {
          "level": 3,
          "title": "主从同步",
          "slug": "主从同步",
          "children": []
        },
        {
          "level": 3,
          "title": "双主复制说明",
          "slug": "双主复制说明",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "高可用架构：多实例共享后端存储",
      "slug": "高可用架构-多实例共享后端存储",
      "children": [
        {
          "level": 3,
          "title": "方案说明",
          "slug": "方案说明",
          "children": []
        },
        {
          "level": 3,
          "title": "环境说明",
          "slug": "环境说明",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "多实例共享后端存储 部署",
      "slug": "多实例共享后端存储-部署",
      "children": [
        {
          "level": 3,
          "title": "安装Docker和Docker Compose",
          "slug": "安装docker和docker-compose",
          "children": []
        },
        {
          "level": 3,
          "title": "NFS",
          "slug": "nfs",
          "children": []
        },
        {
          "level": 3,
          "title": "PostgreSQL",
          "slug": "postgresql",
          "children": []
        },
        {
          "level": 3,
          "title": "Redis",
          "slug": "redis",
          "children": []
        },
        {
          "level": 3,
          "title": "Harbor",
          "slug": "harbor",
          "children": []
        },
        {
          "level": 3,
          "title": "Nginx",
          "slug": "nginx",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "参考文章",
      "slug": "参考文章",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 9.81,
    "words": 2943
  },
  "filePathRelative": "cloudnative/kubernetes/docker-harbor-ha.md"
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
