export const data = {
  "key": "v-93b857ba",
  "path": "/automate/ansible/optimize.html",
  "title": "6 Ansible使用优化",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "6 Ansible使用优化 1 加大forks的值 默认forks=5，即最多5个Ansible工作进程。即便是只有6个目标节点，对于\"效率\"常挂嘴边的21世纪IT人来说，这么一点数量的工作进程，也显然是杯水车薪。 对于Ansible来说，它的的大多数任务都是分派给目标节点去执行的，所以控制端通常比较闲暇。换句话说，控制端在浪费宝贵的资源。因此，如果没有其它",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/optimize.html"
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
          "content": "6 Ansible使用优化"
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
      "title": "1 加大forks的值",
      "slug": "_1-加大forks的值",
      "children": []
    },
    {
      "level": 2,
      "title": "2 修改执行策略",
      "slug": "_2-修改执行策略",
      "children": []
    },
    {
      "level": 2,
      "title": "3 使Ansible异步执行任务",
      "slug": "_3-使ansible异步执行任务",
      "children": [
        {
          "level": 3,
          "title": "3.1 async和poll指令",
          "slug": "_3-1-async和poll指令",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 等待异步任务",
          "slug": "_3-2-等待异步任务",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 何时使用异步任务",
          "slug": "_3-3-何时使用异步任务",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 controlpresist 持久化socket",
      "slug": "_4-controlpresist-持久化socket",
      "children": []
    },
    {
      "level": 2,
      "title": "5 开启SSH长连接",
      "slug": "_5-开启ssh长连接",
      "children": []
    },
    {
      "level": 2,
      "title": "6 关闭gather_facts",
      "slug": "_6-关闭gather-facts",
      "children": []
    },
    {
      "level": 2,
      "title": "7 开启pipeling",
      "slug": "_7-开启pipeling",
      "children": []
    },
    {
      "level": 2,
      "title": "8 Shell层次上的优化：将任务分开执行",
      "slug": "_8-shell层次上的优化-将任务分开执行",
      "children": []
    },
    {
      "level": 2,
      "title": "9 第三方策略插件：Mitogen for Ansible",
      "slug": "_9-第三方策略插件-mitogen-for-ansible",
      "children": []
    },
    {
      "level": 2,
      "title": "10 优化常规配置",
      "slug": "_10-优化常规配置",
      "children": []
    },
    {
      "level": 2,
      "title": "11 其他优化项",
      "slug": "_11-其他优化项",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 8.48,
    "words": 2544
  },
  "filePathRelative": "automate/ansible/optimize.md"
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
