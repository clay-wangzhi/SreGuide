export const data = {
  "key": "v-eeddae12",
  "path": "/db/redis/redis-sentinel.html",
  "title": "Redis 6.x 哨兵安装配置",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "Redis"
    ],
    "summary": "Redis 6.x 哨兵安装配置 1 升级 gcc centos7 默认的 gcc 默认是4.8.5,版本小于 5.3 无法编译,需要先安装gcc新版才能编译 2 用 ansible 安装 redis 哨兵 下载role Example Playbook cat /etc/ansible/playbooks/redis_sentinel.yml 安装 参考链",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/redis/redis-sentinel.html"
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
          "content": "Redis 6.x 哨兵安装配置"
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
      "title": "1 升级 gcc",
      "slug": "_1-升级-gcc",
      "children": []
    },
    {
      "level": 2,
      "title": "2 用 ansible 安装 redis 哨兵",
      "slug": "_2-用-ansible-安装-redis-哨兵",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.74,
    "words": 223
  },
  "filePathRelative": "db/redis/redis-sentinel.md"
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
