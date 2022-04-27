export const data = {
  "key": "v-7da870a3",
  "path": "/cloudnative/etcd/etcd-first.html",
  "title": "etcd 问题、调优、监控",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "etcd"
    ],
    "summary": "etcd 问题、调优、监控 \" 转载自：etcd 问题、调优、监控\" etcd 原理解析：读《etcd 技术内幕》这篇文章主要是原理性的内容，本文主要是实践角度，谈谈平时用到的一些操作和监控 高可用 etcd 是基于 raft算法的分布式键值数据库，生来就为集群化而设计的，由于Raft算法在做决策时需要超半数节点的投票，所以etcd集群一般推荐奇数节点，如3",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/etcd/etcd-first.html"
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
          "content": "etcd 问题、调优、监控"
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
          "content": "etcd"
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
      "title": "高可用",
      "slug": "高可用",
      "children": [
        {
          "level": 3,
          "title": "选主过程",
          "slug": "选主过程",
          "children": []
        },
        {
          "level": 3,
          "title": "必须是奇数节点吗",
          "slug": "必须是奇数节点吗",
          "children": []
        },
        {
          "level": 3,
          "title": "机器越多越好吗",
          "slug": "机器越多越好吗",
          "children": []
        },
        {
          "level": 3,
          "title": "脑裂问题",
          "slug": "脑裂问题",
          "children": []
        },
        {
          "level": 3,
          "title": "etcd 是强一致性吗",
          "slug": "etcd-是强一致性吗",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "部署",
      "slug": "部署",
      "children": [
        {
          "level": 3,
          "title": "生成证书",
          "slug": "生成证书",
          "children": []
        },
        {
          "level": 3,
          "title": "部署集群",
          "slug": "部署集群",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "etcdctl 命令",
      "slug": "etcdctl-命令",
      "children": []
    },
    {
      "level": 2,
      "title": "参数配置",
      "slug": "参数配置",
      "children": [
        {
          "level": 3,
          "title": "代理功能",
          "slug": "代理功能",
          "children": []
        },
        {
          "level": 3,
          "title": "成员配置",
          "slug": "成员配置",
          "children": []
        },
        {
          "level": 3,
          "title": "证书配置",
          "slug": "证书配置",
          "children": []
        },
        {
          "level": 3,
          "title": "集群配置",
          "slug": "集群配置",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "配置调优",
      "slug": "配置调优",
      "children": [
        {
          "level": 3,
          "title": "网络延迟",
          "slug": "网络延迟",
          "children": []
        },
        {
          "level": 3,
          "title": "心跳间隔",
          "slug": "心跳间隔",
          "children": []
        },
        {
          "level": 3,
          "title": "磁盘 IO",
          "slug": "磁盘-io",
          "children": []
        },
        {
          "level": 3,
          "title": "快照",
          "slug": "快照",
          "children": []
        },
        {
          "level": 3,
          "title": "客户端优化",
          "slug": "客户端优化",
          "children": []
        },
        {
          "level": 3,
          "title": "其他",
          "slug": "其他",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "压缩机制",
      "slug": "压缩机制",
      "children": []
    },
    {
      "level": 2,
      "title": "碎片整理",
      "slug": "碎片整理",
      "children": []
    },
    {
      "level": 2,
      "title": "存储空间",
      "slug": "存储空间",
      "children": []
    },
    {
      "level": 2,
      "title": "快照备份",
      "slug": "快照备份",
      "children": []
    },
    {
      "level": 2,
      "title": "learner 角色",
      "slug": "learner-角色",
      "children": []
    },
    {
      "level": 2,
      "title": "etcd client v3",
      "slug": "etcd-client-v3",
      "children": []
    },
    {
      "level": 2,
      "title": "问题排查",
      "slug": "问题排查",
      "children": [
        {
          "level": 3,
          "title": "一个节点宕机",
          "slug": "一个节点宕机",
          "children": []
        },
        {
          "level": 3,
          "title": "迁移数据",
          "slug": "迁移数据",
          "children": []
        },
        {
          "level": 3,
          "title": "failed to send out heartbeat on time",
          "slug": "failed-to-send-out-heartbeat-on-time",
          "children": []
        },
        {
          "level": 3,
          "title": "mvcc: database space exceeded",
          "slug": "mvcc-database-space-exceeded",
          "children": []
        },
        {
          "level": 3,
          "title": "endpoints问题",
          "slug": "endpoints问题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "监控",
      "slug": "监控",
      "children": []
    },
    {
      "level": 2,
      "title": "后记",
      "slug": "后记",
      "children": []
    },
    {
      "level": 2,
      "title": "参考",
      "slug": "参考",
      "children": []
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
    "minutes": 25.47,
    "words": 7640
  },
  "filePathRelative": "cloudnative/etcd/etcd-first.md"
}
