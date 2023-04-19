export const data = {
  "key": "v-47537fdc",
  "path": "/code/golang/dir.html",
  "title": "目录结构设计",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "目录结构设计 \" 转载自：极客时间|孔令飞\" 遵循一个好的目录规范，把代码目录设计得可维护、可扩展，甚至比文档规范、Commit 规范来得更加重要。 要求 命名清晰; 功能明确; 全面性：目录结构应该尽可能全面地包含研发过程中需要的功能，例如文档、脚本、源码管理、API 实现、工具、第三方包、测试、编译产物等。; 可预测性：项目规模一定是从小到大的，所以一个",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/golang/dir.html"
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
          "content": "目录结构设计"
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
      "title": "要求",
      "slug": "要求",
      "children": []
    },
    {
      "level": 2,
      "title": "目录结构",
      "slug": "目录结构",
      "children": [
        {
          "level": 3,
          "title": "平铺式目录结构",
          "slug": "平铺式目录结构",
          "children": []
        },
        {
          "level": 3,
          "title": "结构化目录结构",
          "slug": "结构化目录结构",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "项目目录（结构化）",
      "slug": "项目目录-结构化",
      "children": [
        {
          "level": 3,
          "title": "Go 应用：主要存放后端代码",
          "slug": "go-应用-主要存放后端代码",
          "children": []
        },
        {
          "level": 3,
          "title": "Go 应用：主要存放测试相关的文件和代码",
          "slug": "go-应用-主要存放测试相关的文件和代码",
          "children": []
        },
        {
          "level": 3,
          "title": "Go 应用：存放跟应用部署相关的文件",
          "slug": "go-应用-存放跟应用部署相关的文件",
          "children": []
        },
        {
          "level": 3,
          "title": "项目管理：存放用来管理 Go 项目的各类文件",
          "slug": "项目管理-存放用来管理-go-项目的各类文件",
          "children": []
        },
        {
          "level": 3,
          "title": "文档：主要存放项目的各类文档",
          "slug": "文档-主要存放项目的各类文档",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 7.21,
    "words": 2163
  },
  "filePathRelative": "code/golang/dir.md"
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
