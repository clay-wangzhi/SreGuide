export const data = {
  "key": "v-0b896180",
  "path": "/automate/ansible/vault.html",
  "title": "5.5 使用vault配置加密",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "5.5 使用vault配置加密 1 简介 在使用ansible的过程中，不可避免的会存储一些敏感信息，比如在变量文件中存储帐号密码信息等。 ansible通过ansible-vault命令行工具来提供对敏感文件的加密和解密。 ansible-vault可以创建、加密、解密和查看文件。其可以加密任何ansible使用的文件，包括inventory文件，play",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/vault.html"
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
          "content": "5.5 使用vault配置加密"
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
      "title": "1 简介",
      "slug": "_1-简介",
      "children": []
    },
    {
      "level": 2,
      "title": "2 Ansible-vault常用操作",
      "slug": "_2-ansible-vault常用操作",
      "children": []
    },
    {
      "level": 2,
      "title": "3 Ansible-vault配置示例",
      "slug": "_3-ansible-vault配置示例",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.04,
    "words": 312
  },
  "filePathRelative": "automate/ansible/vault.md"
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
