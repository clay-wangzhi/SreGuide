export const data = {
  "key": "v-aa1d0454",
  "path": "/automate/ansible/inventory.html",
  "title": "2 Ansible Inventory配置详解",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "2 Ansible Inventory配置详解 在使用Ansible来批量管理主机的时候，通常我们需要先定义要管理哪些主机或者主机组，而这个用于管理主机与主机组的文件就叫做Inventory，也叫主机清单。 Ansible Inventory 是包含静态 Inventory 和动态 Inventory 两部分的，静态 Inventory 指的是在文件中指定的",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/inventory.html"
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
          "content": "2 Ansible Inventory配置详解"
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
      "title": "1 inventory文件路径",
      "slug": "_1-inventory文件路径",
      "children": []
    },
    {
      "level": 2,
      "title": "2 静态Inventory",
      "slug": "_2-静态inventory",
      "children": [
        {
          "level": 3,
          "title": "2.1 定义主机和组",
          "slug": "_2-1-定义主机和组",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 选择主机与组(hosts指令)",
          "slug": "_2-2-选择主机与组-hosts指令",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 动态Inventory",
      "slug": "_3-动态inventory",
      "children": [
        {
          "level": 3,
          "title": "3.1 脚本规约",
          "slug": "_3-1-脚本规约",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 脚本实现",
          "slug": "_3-2-脚本实现",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 结合CMDB动态获取",
          "slug": "_3-3-结合cmdb动态获取",
          "children": []
        },
        {
          "level": 3,
          "title": "3.4 使用",
          "slug": "_3-4-使用",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 临时添加节点：add_host模块",
      "slug": "_4-临时添加节点-add-host模块",
      "children": []
    },
    {
      "level": 2,
      "title": "5 group_by运行时临时设置主机组",
      "slug": "_5-group-by运行时临时设置主机组",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 12.17,
    "words": 3651
  },
  "filePathRelative": "automate/ansible/inventory.md"
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
