export const data = {
  "key": "v-805e1314",
  "path": "/cloudnative/kubernetes/cordon-drain-delete.html",
  "title": "Node节点禁止调度（平滑维护）方式 - cordon，drain，delete",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "Node节点禁止调度（平滑维护）方式 - cordon，drain，delete \" 转载自：Node节点禁止调度（平滑维护）方式- cordon，drain，delete\" cordon、drain和delete三个命令都会使node停止被调度，后期创建的pod不会继续被调度到该节点上，但操作的暴力程度却不一样。 一、cordon 停止调度（不可调度，临时",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/cordon-drain-delete.html"
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
          "content": "Node节点禁止调度（平滑维护）方式 - cordon，drain，delete"
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
          "content": "Kubernetes"
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
      "title": "一、cordon 停止调度（不可调度，临时从K8S集群隔离）",
      "slug": "一、cordon-停止调度-不可调度-临时从k8s集群隔离",
      "children": []
    },
    {
      "level": 2,
      "title": "二、drain 驱逐节点（先不可调度，然后排干）",
      "slug": "二、drain-驱逐节点-先不可调度-然后排干",
      "children": []
    },
    {
      "level": 2,
      "title": "三、delete 删除节点",
      "slug": "三、delete-删除节点",
      "children": []
    },
    {
      "level": 2,
      "title": "四、Node节点平滑维护",
      "slug": "四、node节点平滑维护",
      "children": []
    }
  ],
  "git": {
    "createdTime": 1637854614000,
    "updatedTime": 1651073580000,
    "contributors": [
      {
        "name": "clay-wangzhi",
        "email": "clay.wangzhi@gmail.com",
        "commits": 3
      }
    ]
  },
  "readingTime": {
    "minutes": 5.24,
    "words": 1573
  },
  "filePathRelative": "cloudnative/kubernetes/cordon-drain-delete.md"
}
