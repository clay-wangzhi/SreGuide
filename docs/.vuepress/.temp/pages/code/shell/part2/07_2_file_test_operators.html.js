export const data = {
  "key": "v-57207c61",
  "path": "/code/shell/part2/07_2_file_test_operators.html",
  "title": "7.2 文件测试操作",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "7.2 文件测试操作 下列每一个运算符在满足其下条件时，返回的结果为真。 -e 检测文件是否存在 -a 检测文件是否存在 等价于 -e。不推荐使用，已被弃用[^1]。 -f 文件是常规文件(regular file)，而非目录或 设备文件 -s 文件大小不为0 -d 文件是一个目录 -b 文件是一个 块设备 -c 文件是一个 字符设备 -p 文件是一个 管道",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part2/07_2_file_test_operators.html"
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
          "content": "7.2 文件测试操作"
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
          "property": "article:author",
          "content": "LinuxStory"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Bash"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "-e",
      "slug": "e",
      "children": []
    },
    {
      "level": 3,
      "title": "-a",
      "slug": "a",
      "children": []
    },
    {
      "level": 3,
      "title": "-f",
      "slug": "f",
      "children": []
    },
    {
      "level": 3,
      "title": "-s",
      "slug": "s",
      "children": []
    },
    {
      "level": 3,
      "title": "-d",
      "slug": "d",
      "children": []
    },
    {
      "level": 3,
      "title": "-b",
      "slug": "b",
      "children": []
    },
    {
      "level": 3,
      "title": "-c",
      "slug": "c",
      "children": []
    },
    {
      "level": 3,
      "title": "-p",
      "slug": "p",
      "children": []
    },
    {
      "level": 3,
      "title": "-h",
      "slug": "h",
      "children": []
    },
    {
      "level": 3,
      "title": "-L",
      "slug": "l",
      "children": []
    },
    {
      "level": 3,
      "title": "-S",
      "slug": "s-1",
      "children": []
    },
    {
      "level": 3,
      "title": "-t",
      "slug": "t",
      "children": []
    },
    {
      "level": 3,
      "title": "-r",
      "slug": "r",
      "children": []
    },
    {
      "level": 3,
      "title": "-w",
      "slug": "w",
      "children": []
    },
    {
      "level": 3,
      "title": "-x",
      "slug": "x",
      "children": []
    },
    {
      "level": 3,
      "title": "-g",
      "slug": "g",
      "children": []
    },
    {
      "level": 3,
      "title": "-u",
      "slug": "u",
      "children": []
    },
    {
      "level": 3,
      "title": "-k",
      "slug": "k",
      "children": []
    },
    {
      "level": 3,
      "title": "-O",
      "slug": "o",
      "children": []
    },
    {
      "level": 3,
      "title": "-G",
      "slug": "g-1",
      "children": []
    },
    {
      "level": 3,
      "title": "-N",
      "slug": "n",
      "children": []
    },
    {
      "level": 3,
      "title": "f1 -nt f2",
      "slug": "f1-nt-f2",
      "children": []
    },
    {
      "level": 3,
      "title": "f1 -ot f2",
      "slug": "f1-ot-f2",
      "children": []
    },
    {
      "level": 3,
      "title": "f1 -ef f2",
      "slug": "f1-ef-f2",
      "children": []
    },
    {
      "level": 3,
      "title": "!",
      "slug": "",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 4.75,
    "words": 1425
  },
  "filePathRelative": "code/shell/part2/07_2_file_test_operators.md"
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
