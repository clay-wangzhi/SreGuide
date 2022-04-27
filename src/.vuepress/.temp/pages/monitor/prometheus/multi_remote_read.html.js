export const data = {
  "key": "v-d3fe39f2",
  "path": "/monitor/prometheus/multi_remote_read.html",
  "title": "别再乱用 Prometheus 联邦了，分享一个 Prometheus 高可用新方案",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "监控"
    ],
    "tag": [
      "prometheus"
    ],
    "summary": "别再乱用 Prometheus 联邦了，分享一个 Prometheus 高可用新方案 \" 转载自：别再乱用 Prometheus 联邦了，分享一个 Prometheus 高可用新方案 ｜ 云原生实验室\" 前言 我看到很多人会这样使用联邦：联邦 prometheus 收集多个采集器的数据; 实在看不下下去了，很多小白还在乱用prometheus的联邦; 其实很",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/monitor/prometheus/multi_remote_read.html"
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
          "content": "别再乱用 Prometheus 联邦了，分享一个 Prometheus 高可用新方案"
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
          "content": "prometheus"
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
      "title": "前言",
      "slug": "前言",
      "children": []
    },
    {
      "level": 2,
      "title": "架构图",
      "slug": "架构图",
      "children": []
    },
    {
      "level": 2,
      "title": "联邦问题",
      "slug": "联邦问题",
      "children": []
    },
    {
      "level": 2,
      "title": "联邦使用样例",
      "slug": "联邦使用样例",
      "children": []
    },
    {
      "level": 2,
      "title": "看上面的样例配置怎么感觉是采集的配置呢",
      "slug": "看上面的样例配置怎么感觉是采集的配置呢",
      "children": []
    },
    {
      "level": 2,
      "title": "正确使用联邦的姿势",
      "slug": "正确使用联邦的姿势",
      "children": []
    },
    {
      "level": 2,
      "title": "默认 prometheus 不支持降采样",
      "slug": "默认-prometheus-不支持降采样",
      "children": []
    },
    {
      "level": 2,
      "title": "正确实现统一查询的姿势",
      "slug": "正确实现统一查询的姿势",
      "children": []
    },
    {
      "level": 2,
      "title": "multi_remote_read",
      "slug": "multi-remote-read",
      "children": []
    },
    {
      "level": 2,
      "title": "prometheus 可以 remote_read prometheus 自己",
      "slug": "prometheus-可以-remote-read-prometheus-自己",
      "children": []
    },
    {
      "level": 2,
      "title": "高可用方案",
      "slug": "高可用方案",
      "children": [
        {
          "level": 3,
          "title": "数据重复怎么办",
          "slug": "数据重复怎么办",
          "children": []
        },
        {
          "level": 3,
          "title": "这种方案的缺点",
          "slug": "这种方案的缺点",
          "children": []
        },
        {
          "level": 3,
          "title": "脚注",
          "slug": "脚注",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "createdTime": 1632119467000,
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
    "minutes": 6.16,
    "words": 1848
  },
  "filePathRelative": "monitor/prometheus/multi_remote_read.md"
}
