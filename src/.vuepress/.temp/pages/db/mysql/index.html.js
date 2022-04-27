export const data = {
  "key": "v-248713a5",
  "path": "/db/mysql/",
  "title": "1 MySQL基本操作",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "MySQL"
    ],
    "summary": "1 MySQL基本操作 1 数据库相关概念 1.1 什么是数据？ ​\t\t数据（data）是事实或观察的结果，是对客观事物的逻辑归纳，是用于表示客观事物的未经加工的原始素材。数据是信息的表现形式和载体，可以是符号、文字、数字、语音、图像、视频等。数据和信息是不可分离的，数据是信息的表达，信息是数据的内涵。数据本身没有意义，数据只有对实体行为产生影响才成为信息。",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/db/mysql/"
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
          "content": "1 MySQL基本操作"
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
          "content": "2021-09-19T08:54:09.000Z"
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
          "property": "article:modified_time",
          "content": "2021-09-19T08:54:09.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1 数据库相关概念",
      "slug": "_1-数据库相关概念",
      "children": [
        {
          "level": 3,
          "title": "1.1 什么是数据？",
          "slug": "_1-1-什么是数据",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2 什么是数据库？",
          "slug": "_1-2-什么是数据库",
          "children": []
        },
        {
          "level": 3,
          "title": "1.3 什么是数据库管理系统（DBMS）？",
          "slug": "_1-3-什么是数据库管理系统-dbms",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2 数据库的发展史",
      "slug": "_2-数据库的发展史",
      "children": [
        {
          "level": 3,
          "title": "2.1 萌芽阶段：文件系统",
          "slug": "_2-1-萌芽阶段-文件系统",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2  第一代数据库：层次模型、网状模型",
          "slug": "_2-2-第一代数据库-层次模型、网状模型",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 第二代数据库：关系型数据库",
          "slug": "_2-3-第二代数据库-关系型数据库",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 数据库的分类",
      "slug": "_3-数据库的分类",
      "children": [
        {
          "level": 3,
          "title": "3.1 关系型数据库",
          "slug": "_3-1-关系型数据库",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 非关系型数据库",
          "slug": "_3-2-非关系型数据库",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 Mysql的安装",
      "slug": "_4-mysql的安装",
      "children": []
    },
    {
      "level": 2,
      "title": "5 连接服务器",
      "slug": "_5-连接服务器",
      "children": []
    },
    {
      "level": 2,
      "title": "6 SQL介绍",
      "slug": "_6-sql介绍",
      "children": [
        {
          "level": 3,
          "title": "6.1 SQL是什么",
          "slug": "_6-1-sql是什么",
          "children": []
        },
        {
          "level": 3,
          "title": "6.2 SQL的分类",
          "slug": "_6-2-sql的分类",
          "children": []
        },
        {
          "level": 3,
          "title": "6.3 注意事项",
          "slug": "_6-3-注意事项",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "7 数据库操作",
      "slug": "_7-数据库操作",
      "children": [
        {
          "level": 3,
          "title": "7.1 增",
          "slug": "_7-1-增",
          "children": []
        },
        {
          "level": 3,
          "title": "7.2 删",
          "slug": "_7-2-删",
          "children": []
        },
        {
          "level": 3,
          "title": "7.3 改",
          "slug": "_7-3-改",
          "children": []
        },
        {
          "level": 3,
          "title": "7.4 查",
          "slug": "_7-4-查",
          "children": []
        },
        {
          "level": 3,
          "title": "7.5 选择数据库",
          "slug": "_7-5-选择数据库",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "8 表操作",
      "slug": "_8-表操作",
      "children": [
        {
          "level": 3,
          "title": "8.1 增",
          "slug": "_8-1-增",
          "children": []
        },
        {
          "level": 3,
          "title": "8.2 删",
          "slug": "_8-2-删",
          "children": []
        },
        {
          "level": 3,
          "title": "8.3 改",
          "slug": "_8-3-改",
          "children": []
        },
        {
          "level": 3,
          "title": "8.4 查",
          "slug": "_8-4-查",
          "children": []
        },
        {
          "level": 3,
          "title": "8.5 复制表",
          "slug": "_8-5-复制表",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "9 数据操作",
      "slug": "_9-数据操作",
      "children": [
        {
          "level": 3,
          "title": "9.1 增",
          "slug": "_9-1-增",
          "children": []
        },
        {
          "level": 3,
          "title": "9.2 删",
          "slug": "_9-2-删",
          "children": []
        },
        {
          "level": 3,
          "title": "9.3 改",
          "slug": "_9-3-改",
          "children": []
        },
        {
          "level": 3,
          "title": "9.4 查",
          "slug": "_9-4-查",
          "children": []
        },
        {
          "level": 3,
          "title": "9.5 清空表数据",
          "slug": "_9-5-清空表数据",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "10 数据表的文件介绍",
      "slug": "_10-数据表的文件介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "11 字符集",
      "slug": "_11-字符集",
      "children": []
    },
    {
      "level": 2,
      "title": "12 思维导图",
      "slug": "_12-思维导图",
      "children": []
    }
  ],
  "git": {
    "createdTime": 1632041649000,
    "updatedTime": 1632041649000,
    "contributors": [
      {
        "name": "clay-wangzhi",
        "email": "clay.wangzhi@gmail.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 7.12,
    "words": 2137
  },
  "filePathRelative": "db/mysql/readme.md"
}
