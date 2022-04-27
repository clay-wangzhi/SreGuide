export const data = {
  "key": "v-d1ce3044",
  "path": "/code/shell/part6.html",
  "title": "第六部分 Google Shell 风格指南",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "Google",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash",
      "风格"
    ],
    "summary": "第六部分 Google Shell 风格指南 1 背景 1.1 使用哪一种Shell\r\" Bash是唯一被允许执行的shell脚本语言。\" 可执行文件必须以#!/bin/bash和最小数量的标志开始。请使set来设置shell的选项，使得用bash 调用你的脚本时不会破坏其功能。 限制所有的可执行shell脚本为bash使得我们安装在所有计算机中的shell",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part6.html"
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
          "content": "第六部分 Google Shell 风格指南"
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
          "property": "article:author",
          "content": "Google"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Bash"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "风格"
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
      "title": "1 背景",
      "slug": "_1-背景",
      "children": [
        {
          "level": 3,
          "title": "1.1 使用哪一种Shell",
          "slug": "_1-1-使用哪一种shell",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2 什么时候使用Shell",
          "slug": "_1-2-什么时候使用shell",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2 Shell文件和解释器调用",
      "slug": "_2-shell文件和解释器调用",
      "children": [
        {
          "level": 3,
          "title": "2.1 文件扩展名",
          "slug": "_2-1-文件扩展名",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 SUID/SGID",
          "slug": "_2-2-suid-sgid",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 环境",
      "slug": "_3-环境",
      "children": [
        {
          "level": 3,
          "title": "3.1 STDOUT vs STDERR",
          "slug": "_3-1-stdout-vs-stderr",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 注释",
      "slug": "_4-注释",
      "children": [
        {
          "level": 3,
          "title": "4.1 文件头",
          "slug": "_4-1-文件头",
          "children": []
        },
        {
          "level": 3,
          "title": "4.2 功能注释",
          "slug": "_4-2-功能注释",
          "children": []
        },
        {
          "level": 3,
          "title": "4.3 实现部分的注释",
          "slug": "_4-3-实现部分的注释",
          "children": []
        },
        {
          "level": 3,
          "title": "4.4 TODO注释",
          "slug": "_4-4-todo注释",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "5 格式",
      "slug": "_5-格式",
      "children": [
        {
          "level": 3,
          "title": "5.1 缩进",
          "slug": "_5-1-缩进",
          "children": []
        },
        {
          "level": 3,
          "title": "5.2 行的长度和长字符串",
          "slug": "_5-2-行的长度和长字符串",
          "children": []
        },
        {
          "level": 3,
          "title": "5.3 管道",
          "slug": "_5-3-管道",
          "children": []
        },
        {
          "level": 3,
          "title": "5.4 循环",
          "slug": "_5-4-循环",
          "children": []
        },
        {
          "level": 3,
          "title": "5.5 case语句",
          "slug": "_5-5-case语句",
          "children": []
        },
        {
          "level": 3,
          "title": "5.6 变量扩展",
          "slug": "_5-6-变量扩展",
          "children": []
        },
        {
          "level": 3,
          "title": "5.7 引用",
          "slug": "_5-7-引用",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6 特性及错误",
      "slug": "_6-特性及错误",
      "children": [
        {
          "level": 3,
          "title": "6.1 命令替换",
          "slug": "_6-1-命令替换",
          "children": []
        },
        {
          "level": 3,
          "title": "6.2 test, [和[[",
          "slug": "_6-2-test-和",
          "children": []
        },
        {
          "level": 3,
          "title": "6.3 测试字符串",
          "slug": "_6-3-测试字符串",
          "children": []
        },
        {
          "level": 3,
          "title": "6.4 文件名的通配符扩展",
          "slug": "_6-4-文件名的通配符扩展",
          "children": []
        },
        {
          "level": 3,
          "title": "6.5 Eval",
          "slug": "_6-5-eval",
          "children": []
        },
        {
          "level": 3,
          "title": "6.6 管道导向while循环",
          "slug": "_6-6-管道导向while循环",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "7 命名约定",
      "slug": "_7-命名约定",
      "children": [
        {
          "level": 3,
          "title": "7.1 函数名",
          "slug": "_7-1-函数名",
          "children": []
        },
        {
          "level": 3,
          "title": "7.2 变量名",
          "slug": "_7-2-变量名",
          "children": []
        },
        {
          "level": 3,
          "title": "7.3 常量和环境变量名",
          "slug": "_7-3-常量和环境变量名",
          "children": []
        },
        {
          "level": 3,
          "title": "7.4 源文件名",
          "slug": "_7-4-源文件名",
          "children": []
        },
        {
          "level": 3,
          "title": "7.5 只读变量",
          "slug": "_7-5-只读变量",
          "children": []
        },
        {
          "level": 3,
          "title": "7.6 使用本地变量",
          "slug": "_7-6-使用本地变量",
          "children": []
        },
        {
          "level": 3,
          "title": "7.7 函数位置",
          "slug": "_7-7-函数位置",
          "children": []
        },
        {
          "level": 3,
          "title": "7.8 主函数main",
          "slug": "_7-8-主函数main",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "8 调用命令",
      "slug": "_8-调用命令",
      "children": [
        {
          "level": 3,
          "title": "8.1 检查返回值",
          "slug": "_8-1-检查返回值",
          "children": []
        },
        {
          "level": 3,
          "title": "8.2 内建命令和外部命令",
          "slug": "_8-2-内建命令和外部命令",
          "children": []
        }
      ]
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
    "minutes": 16.65,
    "words": 4996
  },
  "filePathRelative": "code/shell/part6.md"
}
