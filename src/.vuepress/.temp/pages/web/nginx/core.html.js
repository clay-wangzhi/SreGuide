export const data = {
  "key": "v-702e3c11",
  "path": "/web/nginx/core.html",
  "title": "4. 内核参数优化",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "web中间件"
    ],
    "tag": [
      "Nginx"
    ],
    "summary": "4. 内核参数优化 linux内核参数优化（网络模块） 在Linux下调整内核参数，可以直接编辑配置文件/etc/sysctl.conf，然后执行sysctl -p命令生效 文件内容如下：\rnet.core.somaxconn = 262144; web应用中listen函数的backlog默认会给我们内核参数的net.core.somaxconn限制到12",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/web/nginx/core.html"
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
          "content": "4. 内核参数优化"
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
          "property": "og:updated_time",
          "content": "2022-04-27T15:33:00.000Z"
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
          "content": "Nginx"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-03-20T00:00:00.000Z"
        }
      ],
      [
        "meta",
        {
          "property": "article:modified_time",
          "content": "2022-04-27T15:33:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "linux内核参数优化（网络模块）",
      "slug": "linux内核参数优化-网络模块",
      "children": []
    }
  ],
  "git": {
    "createdTime": 1632041649000,
    "updatedTime": 1651073580000,
    "contributors": [
      {
        "name": "clay-wangzhi",
        "email": "clay.wangzhi@gmail.com",
        "commits": 2
      }
    ]
  },
  "readingTime": {
    "minutes": 5.95,
    "words": 1784
  },
  "filePathRelative": "web/nginx/core.md"
}
