export const data = {
  "key": "v-c137e9d6",
  "path": "/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/rsync+inotify%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%90%8C%E6%AD%A5.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "由于我的jenkins和ansible没有安装在一台主机上，所以，现在利用rsync+inotify实现jenkins的工作目录，同步到ansible主机上 环境如下： inotify-master IP :192.168.162.175 inotify-slave IP:192.168.162.119 1 inotify slave部署 1.1 安装rsy",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/rsync+inotify%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%90%8C%E6%AD%A5.html"
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
      "title": "1 inotify slave部署",
      "slug": "_1-inotify-slave部署",
      "children": [
        {
          "level": 3,
          "title": "1.1 安装rsync",
          "slug": "_1-1-安装rsync",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2  添加用户和模块目录，并更改用户和组",
          "slug": "_1-2-添加用户和模块目录-并更改用户和组",
          "children": []
        },
        {
          "level": 3,
          "title": "1.3 修改配置文件/etc/rsyncd.conf",
          "slug": "_1-3-修改配置文件-etc-rsyncd-conf",
          "children": []
        },
        {
          "level": 3,
          "title": "1.4 配置虚拟用户的密码文件",
          "slug": "_1-4-配置虚拟用户的密码文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2 inotify master部署",
      "slug": "_2-inotify-master部署",
      "children": [
        {
          "level": 3,
          "title": "2.1 安装inotify 3.14",
          "slug": "_2-1-安装inotify-3-14",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 创建rsync服务的密码文件",
          "slug": "_2-2-创建rsync服务的密码文件",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 编写执行脚本",
          "slug": "_2-3-编写执行脚本",
          "children": []
        },
        {
          "level": 3,
          "title": "2.4 将脚本加入后台执行",
          "slug": "_2-4-将脚本加入后台执行",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 1.29,
    "words": 386
  },
  "filePathRelative": "other/23 未分类/rsync+inotify实现实时同步.md"
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
