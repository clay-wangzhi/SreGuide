export const data = {
  "key": "v-2c479559",
  "path": "/openldap/Centos7%20%E6%90%AD%E5%BB%BAopenldap.html",
  "title": "Centos7 搭建openldap",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "openldap"
    ],
    "summary": "Centos7 搭建openldap 环境：\rcentos7.6; \ropenldap 2.4.44; \rphpldapadmin 1.2.3; 安装openldap yum 安装相关包 复制一个默认配置到指定目录下,并授权，这一步一定要做，然后再启动服务，不然生产密码时会报错 授权给ldap用户,此用户yum安装时便会自动创建 启动&加入开机自启 修改op",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/openldap/Centos7%20%E6%90%AD%E5%BB%BAopenldap.html"
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
          "content": "Centos7 搭建openldap"
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
          "content": "openldap"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装openldap",
      "slug": "安装openldap",
      "children": []
    },
    {
      "level": 2,
      "title": "修改openldap配置",
      "slug": "修改openldap配置",
      "children": []
    },
    {
      "level": 2,
      "title": "安装phpldapadmin",
      "slug": "安装phpldapadmin",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 6.5,
    "words": 1949
  },
  "filePathRelative": "openldap/Centos7 搭建openldap.md"
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
