export const data = {
  "key": "v-65d6284a",
  "path": "/automate/ansible/advanced-playbook.html",
  "title": "4.4 Playbook高级用法",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "4.4 Playbook高级用法 1 本地执行 默认情况下，Ansible使用ssh去连接远程主机，但实际上它提供了多种插件来丰富连接方式：smart、ssh、paramiko、local、docker、winrm，默认为smart。 smart表示智能选择ssh和paramiko(paramiko是Python的一个ssh协议模块)，当Ansible端安装",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/advanced-playbook.html"
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
          "content": "4.4 Playbook高级用法"
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
      "title": "1 本地执行",
      "slug": "_1-本地执行",
      "children": []
    },
    {
      "level": 2,
      "title": "2 任务委托",
      "slug": "_2-任务委托",
      "children": []
    },
    {
      "level": 2,
      "title": "3 任务暂停",
      "slug": "_3-任务暂停",
      "children": []
    },
    {
      "level": 2,
      "title": "4 滚动执行",
      "slug": "_4-滚动执行",
      "children": []
    },
    {
      "level": 2,
      "title": "5 只执行一次",
      "slug": "_5-只执行一次",
      "children": []
    },
    {
      "level": 2,
      "title": "6 设置环境变量",
      "slug": "_6-设置环境变量",
      "children": []
    },
    {
      "level": 2,
      "title": "7 交互式提示",
      "slug": "_7-交互式提示",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 7.97,
    "words": 2390
  },
  "filePathRelative": "automate/ansible/advanced-playbook.md"
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
