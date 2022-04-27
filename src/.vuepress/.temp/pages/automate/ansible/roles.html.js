export const data = {
  "key": "v-29e89195",
  "path": "/automate/ansible/roles.html",
  "title": "4.6 巧用Roles",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "4.6 巧用Roles 1 如何重用Playbook 不能站在巨人肩膀上的编程语言不是好语言，支持重用机制会节省重复的调研工作上浪费大量的时间，当然也会提高可维护性。 Playbook支持两种重用机制，一种是重用静态Playbook脚本，另外一种是类似于编程语言中函数的机制。\rinclude语句 - 重用静态的Playbook脚本，使用起来简单、直接。; \r",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/roles.html"
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
          "content": "4.6 巧用Roles"
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
      "title": "1 如何重用Playbook",
      "slug": "_1-如何重用playbook",
      "children": []
    },
    {
      "level": 2,
      "title": "2 roles目录结构",
      "slug": "_2-roles目录结构",
      "children": []
    },
    {
      "level": 2,
      "title": "3 组织 task",
      "slug": "_3-组织-task",
      "children": []
    },
    {
      "level": 2,
      "title": "4 组织handler",
      "slug": "_4-组织handler",
      "children": []
    },
    {
      "level": 2,
      "title": "5 组织变量",
      "slug": "_5-组织变量",
      "children": [
        {
          "level": 3,
          "title": "5.1 vars_files",
          "slug": "_5-1-vars-files",
          "children": []
        },
        {
          "level": 3,
          "title": "5.2 include_vars",
          "slug": "_5-2-include-vars",
          "children": []
        },
        {
          "level": 3,
          "title": "5.3 --extra-vars选项",
          "slug": "_5-3-extra-vars选项",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6 组织playbook文件",
      "slug": "_6-组织playbook文件",
      "children": []
    },
    {
      "level": 2,
      "title": "7 playbook 调用",
      "slug": "_7-playbook-调用",
      "children": []
    },
    {
      "level": 2,
      "title": "8 playbook解析、动态加载和静态加载",
      "slug": "_8-playbook解析、动态加载和静态加载",
      "children": []
    },
    {
      "level": 2,
      "title": "9 Ansible Galaxy和Collection",
      "slug": "_9-ansible-galaxy和collection",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 19.3,
    "words": 5791
  },
  "filePathRelative": "automate/ansible/roles.md"
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
