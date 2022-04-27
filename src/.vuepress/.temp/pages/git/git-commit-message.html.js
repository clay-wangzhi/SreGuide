export const data = {
  "key": "v-191529b7",
  "path": "/git/git-commit-message.html",
  "title": "Commit message 和 Change log 编写指南",
  "lang": "zh-CN",
  "frontmatter": {
    "tag": [
      "Git"
    ],
    "summary": "Commit message 和 Change log 编写指南 Git 每次提交代码，都要写 Commit message（提交说明），否则就不允许提交。\r\" \" 上面代码的-m参数，就是用来指定 commit mesage 的。 如果一行不够，可以只执行git commit，就会跳出文本编辑器，让你写多行。\r\" \" 但是，一般来说，commit mess",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/git/git-commit-message.html"
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
          "content": "Commit message 和 Change log 编写指南"
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
          "content": "Git"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、Commit message 的作用",
      "slug": "一、commit-message-的作用",
      "children": []
    },
    {
      "level": 2,
      "title": "二、Commit message 的格式",
      "slug": "二、commit-message-的格式",
      "children": [
        {
          "level": 3,
          "title": "2.1 Header",
          "slug": "_2-1-header",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 Body",
          "slug": "_2-2-body",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 Footer",
          "slug": "_2-3-footer",
          "children": []
        },
        {
          "level": 3,
          "title": "2.4 Revert",
          "slug": "_2-4-revert",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "三、Commitizen",
      "slug": "三、commitizen",
      "children": []
    },
    {
      "level": 2,
      "title": "四、validate-commit-msg",
      "slug": "四、validate-commit-msg",
      "children": []
    },
    {
      "level": 2,
      "title": "五、生成 Change log",
      "slug": "五、生成-change-log",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 5.65,
    "words": 1696
  },
  "filePathRelative": "git/git-commit-message.md"
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
