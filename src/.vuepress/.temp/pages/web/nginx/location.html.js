export const data = {
  "key": "v-8f79538a",
  "path": "/web/nginx/location.html",
  "title": "3.4 nginxLOCATION块配置",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "web中间件"
    ],
    "tag": [
      "Nginx"
    ],
    "summary": "3.4 nginxLOCATION块配置 nginx中location的匹配模式有以下几种：\r精确匹配：以=开头，只有完全匹配才能生效，例子location = /uri; \r非正则匹配：以^~开头，^表示非、~表示正则，例子location ^~ /uri; \r正则匹配：; \r以~开头，表示区分大小写的正则匹配，例子location ~ pattern; ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/web/nginx/location.html"
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
          "content": "3.4 nginxLOCATION块配置"
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
      "title": "1 匹配模式优先级",
      "slug": "_1-匹配模式优先级",
      "children": []
    },
    {
      "level": 2,
      "title": "2 路径替换",
      "slug": "_2-路径替换",
      "children": []
    },
    {
      "level": 2,
      "title": "3 root和alias的使用",
      "slug": "_3-root和alias的使用",
      "children": [
        {
          "level": 3,
          "title": "3.1 最基本的区别",
          "slug": "_3-1-最基本的区别",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 try_files指令",
      "slug": "_4-try-files指令",
      "children": []
    },
    {
      "level": 2,
      "title": "5 stub_status",
      "slug": "_5-stub-status",
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
    "minutes": 6.32,
    "words": 1897
  },
  "filePathRelative": "web/nginx/location.md"
}
