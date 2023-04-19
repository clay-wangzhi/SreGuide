export const data = {
  "key": "v-754f0210",
  "path": "/basic/network/todo.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "计算机网络"
    ],
    "summary": "传输层 TCP 路径可达性测试 telnet、nc; 查看当前连接的传输速率 iftop; 查看丢包和乱序等的统计 netstat -s; ss -s; 网络层 查看网络路径状况 traceroute; traceroute 也有一个明显的不足：它不能对这个路径做连续多次的探测 mtr; 查看路由表 route -n; netstat -r; ip rout",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/basic/network/todo.html"
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
      "title": "传输层",
      "slug": "传输层",
      "children": []
    },
    {
      "level": 2,
      "title": "网络层",
      "slug": "网络层",
      "children": []
    },
    {
      "level": 2,
      "title": "数据链路层和物理层",
      "slug": "数据链路层和物理层",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.5,
    "words": 151
  },
  "filePathRelative": "basic/network/todo.md"
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
