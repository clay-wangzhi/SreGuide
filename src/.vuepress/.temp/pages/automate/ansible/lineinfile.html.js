export const data = {
  "key": "v-0ed3932b",
  "path": "/automate/ansible/lineinfile.html",
  "title": "3.2 Ansible lineinfile模块详解",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "3.2 Ansible lineinfile模块详解 1 简介 之所以专门说一说这个模块，是因为lineinfile在实际使用中非常有用。 lineinfile模块用于在源文件中插入、删除、替换行，和sed命令的功能类似，也支持正则表达式匹配和替换。 实际上，在大多数时候，我们在linux上的操作，就是针对文件的操作，通过配置管理工具对配置文件作统一的配置修",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/lineinfile.html"
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
          "content": "3.2 Ansible lineinfile模块详解"
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
      "title": "2 修改匹配行",
      "slug": "_2-修改匹配行",
      "children": []
    },
    {
      "level": 2,
      "title": "3 在匹配行前或后添加内容",
      "slug": "_3-在匹配行前或后添加内容",
      "children": [
        {
          "level": 3,
          "title": "3.1 在匹配行前添加",
          "slug": "_3-1-在匹配行前添加",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 在匹配行后添加",
          "slug": "_3-2-在匹配行后添加",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 修改文件内容及权限",
      "slug": "_4-修改文件内容及权限",
      "children": []
    },
    {
      "level": 2,
      "title": "5 删除行内容",
      "slug": "_5-删除行内容",
      "children": []
    },
    {
      "level": 2,
      "title": "6 文件存在则添加一行内容",
      "slug": "_6-文件存在则添加一行内容",
      "children": []
    },
    {
      "level": 2,
      "title": "7 如果有匹配的行则修改该行，如果不匹配则添加",
      "slug": "_7-如果有匹配的行则修改该行-如果不匹配则添加",
      "children": []
    },
    {
      "level": 2,
      "title": "8 参数backrefs，backup说明",
      "slug": "_8-参数backrefs-backup说明",
      "children": []
    },
    {
      "level": 2,
      "title": "9 使用validate验证文件是否正确修改",
      "slug": "_9-使用validate验证文件是否正确修改",
      "children": []
    },
    {
      "level": 2,
      "title": "10 regexp和insertXXX结合",
      "slug": "_10-regexp和insertxxx结合",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 4.42,
    "words": 1326
  },
  "filePathRelative": "automate/ansible/lineinfile.md"
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
