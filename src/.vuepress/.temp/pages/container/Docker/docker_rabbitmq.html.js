export const data = {
  "key": "v-b7534df8",
  "path": "/container/Docker/docker_rabbitmq.html",
  "title": "docker 安装rabbitmq集群",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "常见服务的搭建"
    ],
    "tag": [
      "docker",
      "rabbitmq"
    ],
    "summary": "docker 安装rabbitmq集群 RabbitMQ 高可用集群架构 将两个 RabbitMQ 磁盘节点和一个 RabbitMQ 内存节点组成一个内建集群，之所以要用两个磁盘节点是防止，唯一的磁盘节点挂掉后，不能重建队列，交换器。用 HAProxy 作为 RabbitMQ 集群的负载均衡。为了防止 HAProxy 单点故障，用 Keepalived 将两",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/container/Docker/docker_rabbitmq.html"
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
          "content": "docker 安装rabbitmq集群"
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
          "content": "docker"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "rabbitmq"
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
      "title": "RabbitMQ 高可用集群架构",
      "slug": "rabbitmq-高可用集群架构",
      "children": []
    },
    {
      "level": 2,
      "title": "服务器规划",
      "slug": "服务器规划",
      "children": []
    },
    {
      "level": 2,
      "title": "准备工作",
      "slug": "准备工作",
      "children": [
        {
          "level": 3,
          "title": "安装Docker和Docker Compose",
          "slug": "安装docker和docker-compose",
          "children": []
        },
        {
          "level": 3,
          "title": "下载rabbitmq和haproxy镜像",
          "slug": "下载rabbitmq和haproxy镜像",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "部署rabbitmq集群",
      "slug": "部署rabbitmq集群",
      "children": [
        {
          "level": 3,
          "title": "部署192.168.125.26节点",
          "slug": "部署192-168-125-26节点",
          "children": []
        },
        {
          "level": 3,
          "title": "部署192.168.125.190节点",
          "slug": "部署192-168-125-190节点",
          "children": []
        },
        {
          "level": 3,
          "title": "部署192.168.125.176节点",
          "slug": "部署192-168-125-176节点",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "HaProxy 负载均衡",
      "slug": "haproxy-负载均衡",
      "children": []
    },
    {
      "level": 2,
      "title": "使用 Keepalived 给 HAProxy 做主备",
      "slug": "使用-keepalived-给-haproxy-做主备",
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
    "minutes": 6.59,
    "words": 1977
  },
  "filePathRelative": "container/Docker/docker_rabbitmq.md"
}
