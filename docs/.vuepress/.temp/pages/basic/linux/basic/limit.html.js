export const data = {
  "key": "v-6cf4ecb4",
  "path": "/basic/linux/basic/limit.html",
  "title": "/etc/security/limits.conf 详解与配置",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Linux"
    ],
    "summary": "/etc/security/limits.conf 详解与配置 一、 /etc/security/limits.conf 详解 /etc/security/limits.conf 文件实际是 Linux PAM（插入式认证模块，Pluggable Authentication Modules）中 pam_limits.so 的配置文件，而且只针对于单个会话。",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/basic/linux/basic/limit.html"
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
          "content": "/etc/security/limits.conf 详解与配置"
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
      "title": "一、 /etc/security/limits.conf 详解",
      "slug": "一、-etc-security-limits-conf-详解",
      "children": [
        {
          "level": 3,
          "title": "/etc/security/limits.conf 配置解析",
          "slug": "etc-security-limits-conf-配置解析",
          "children": []
        },
        {
          "level": 3,
          "title": "/etc/security/limits.d/目录",
          "slug": "etc-security-limits-d-目录",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "二、 ulimit 如何配置",
      "slug": "二、-ulimit-如何配置",
      "children": [
        {
          "level": 3,
          "title": "配置注意事项",
          "slug": "配置注意事项",
          "children": []
        },
        {
          "level": 3,
          "title": "基础配置",
          "slug": "基础配置",
          "children": []
        },
        {
          "level": 3,
          "title": "注意覆盖点的问题。",
          "slug": "注意覆盖点的问题。",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "三、ulimit 配置后生效",
      "slug": "三、ulimit-配置后生效",
      "children": [
        {
          "level": 3,
          "title": "临时配置",
          "slug": "临时配置",
          "children": []
        },
        {
          "level": 3,
          "title": "永久配置",
          "slug": "永久配置",
          "children": []
        },
        {
          "level": 3,
          "title": "配置不生效的问题",
          "slug": "配置不生效的问题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "四、ulimit 常用命令",
      "slug": "四、ulimit-常用命令",
      "children": [
        {
          "level": 3,
          "title": "查看配置",
          "slug": "查看配置",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 7.34,
    "words": 2201
  },
  "filePathRelative": "basic/linux/basic/limit.md"
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
