export const data = {
  "key": "v-6783a462",
  "path": "/automate/ansible/custom.html",
  "title": "5.1 自定义变量",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "5.1 自定义变量 简单说明 ansible支持变量，用于存储会在整个项目中重复使用到的一些值。以简化项目的创建与维护，降低出错的机率。 变量的定义：\r变量名应该由字母、数字下划数组成; \r变量名必须以字母开头; \ransible内置关键字不能作为变量名; 1. 在Inventory中定义变量 1.1. 定义主机变量 1.1.1. 内置主机变量 所谓内置变量",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/custom.html"
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
          "content": "5.1 自定义变量"
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
          "content": "Ansible"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-03-20T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1.1. 定义主机变量",
      "slug": "_1-1-定义主机变量",
      "children": [
        {
          "level": 3,
          "title": "1.1.1. 内置主机变量",
          "slug": "_1-1-1-内置主机变量",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "1.2. 定义主机组变量",
      "slug": "_1-2-定义主机组变量",
      "children": []
    },
    {
      "level": 2,
      "title": "2.1. 变量的定义方式",
      "slug": "_2-1-变量的定义方式",
      "children": [
        {
          "level": 3,
          "title": "2.1.1. 通过vars关键字定义",
          "slug": "_2-1-1-通过vars关键字定义",
          "children": []
        },
        {
          "level": 3,
          "title": "2.1.2. 通过vars_files关键字引入变量文件",
          "slug": "_2-1-2-通过vars-files关键字引入变量文件",
          "children": []
        },
        {
          "level": 3,
          "title": "2.1.3. 在playbook中通过host_vars和group_vars目录定义变量",
          "slug": "_2-1-3-在playbook中通过host-vars和group-vars目录定义变量",
          "children": []
        },
        {
          "level": 3,
          "title": "2.1.4. 注册变量",
          "slug": "_2-1-4-注册变量",
          "children": []
        },
        {
          "level": 3,
          "title": "2.1.5. 通过命令行设置变量",
          "slug": "_2-1-5-通过命令行设置变量",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2.2 使用与调试变量",
      "slug": "_2-2-使用与调试变量",
      "children": [
        {
          "level": 3,
          "title": "2.2.1. 变量的引用",
          "slug": "_2-2-1-变量的引用",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2.2. 变量的调试输出",
          "slug": "_2-2-2-变量的调试输出",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 6.58,
    "words": 1973
  },
  "filePathRelative": "automate/ansible/custom.md"
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
