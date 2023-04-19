export const data = {
  "key": "v-54b30fc6",
  "path": "/automate/jenkins/userandpermissions.html",
  "title": "3.1 Jenkins用户权限管理",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Jenkins"
    ],
    "summary": "3.1 Jenkins用户权限管理\r\" 转载自：Jenkins用户权限管理 | 泽阳\" Jenkins默认使用的是自带的数据库管理用户，支持同步LDAP、Github等认证集成。关于用户与权限管理是Jenkins比较弱的一点，当大规模授权的时候建议使用API接口授权，否则当你打开web页面授权时，会很乱加载缓慢，最终导致保存失败权限丢失。 用户管理\r配置用户",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/jenkins/userandpermissions.html"
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
          "content": "3.1 Jenkins用户权限管理"
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
          "content": "Jenkins"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "用户管理",
      "slug": "用户管理",
      "children": [
        {
          "level": 3,
          "title": "查看用户",
          "slug": "查看用户",
          "children": []
        },
        {
          "level": 3,
          "title": "新建用户",
          "slug": "新建用户",
          "children": []
        },
        {
          "level": 3,
          "title": "删除用户",
          "slug": "删除用户",
          "children": []
        },
        {
          "level": 3,
          "title": "更新用户",
          "slug": "更新用户",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "权限管理",
      "slug": "权限管理",
      "children": [
        {
          "level": 3,
          "title": "管理权限",
          "slug": "管理权限",
          "children": []
        },
        {
          "level": 3,
          "title": "全局权限",
          "slug": "全局权限",
          "children": []
        },
        {
          "level": 3,
          "title": "项目权限",
          "slug": "项目权限",
          "children": []
        },
        {
          "level": 3,
          "title": "权限授权",
          "slug": "权限授权",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 1.66,
    "words": 498
  },
  "filePathRelative": "automate/jenkins/userandpermissions.md"
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
