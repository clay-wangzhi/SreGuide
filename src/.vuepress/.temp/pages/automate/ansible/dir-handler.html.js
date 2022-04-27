export const data = {
  "key": "v-9f51c0b0",
  "path": "/automate/ansible/dir-handler.html",
  "title": "4.1 Playbook的结构及handler用法",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "4.1 Playbook的结构及handler用法 1 playbook的结构说明 playbook是由一个或多个\"play\"组成的列表。play的主要功能就是对一组主机应用play中定义好的task。从根本上来讲一个task就是对ansible一个module的调用。而将多个play按照一定的顺序组织到一个playbook中，我们称之为编排。 playbo",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/dir-handler.html"
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
          "content": "4.1 Playbook的结构及handler用法"
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
      "title": "1 playbook的结构说明",
      "slug": "_1-playbook的结构说明",
      "children": []
    },
    {
      "level": 2,
      "title": "2 Target section",
      "slug": "_2-target-section",
      "children": [
        {
          "level": 3,
          "title": "2.1 Playbook中的远程用户",
          "slug": "_2-1-playbook中的远程用户",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 Playbook中的hosts",
          "slug": "_2-2-playbook中的hosts",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 Variable section",
      "slug": "_3-variable-section",
      "children": []
    },
    {
      "level": 2,
      "title": "4 Task section",
      "slug": "_4-task-section",
      "children": []
    },
    {
      "level": 2,
      "title": "5 Handler section",
      "slug": "_5-handler-section",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.98,
    "words": 1194
  },
  "filePathRelative": "automate/ansible/dir-handler.md"
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
