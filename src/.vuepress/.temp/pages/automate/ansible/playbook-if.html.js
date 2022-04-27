export const data = {
  "key": "v-47206ac5",
  "path": "/automate/ansible/playbook-if.html",
  "title": "4.3 Playbook条件语句",
  "lang": "zh-CN",
  "frontmatter": {
    "date": "2020-03-20T00:00:00.000Z",
    "category": [
      "自动化工具"
    ],
    "tag": [
      "Ansible"
    ],
    "summary": "4.3 Playbook条件语句 1 简介 在有的时候play的结果依赖于变量、fact或者是前一个任务的执行结果，或者有的时候，我们会基于上一个task执行返回的结果而决定如何执行后续的task。这个时候就需要用到条件判断。 条件语句在Ansible中的使用场景：\r在目标主机上定义了一个硬限制，比如目标主机的最小内存必须达到多少，才能执行该task; \r捕",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/automate/ansible/playbook-if.html"
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
          "content": "4.3 Playbook条件语句"
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
          "content": "Ansible"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-03-20T00:00:00.000Z"
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
      "title": "1 简介",
      "slug": "_1-简介",
      "children": []
    },
    {
      "level": 2,
      "title": "2 when关键字",
      "slug": "_2-when关键字",
      "children": [
        {
          "level": 3,
          "title": "2.1 when基本使用",
          "slug": "_2-1-when基本使用",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2  比较运算符",
          "slug": "_2-2-比较运算符",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3 逻辑运算符",
          "slug": "_2-3-逻辑运算符",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3 条件判断与tests",
      "slug": "_3-条件判断与tests",
      "children": [
        {
          "level": 3,
          "title": "3.1 判断变量",
          "slug": "_3-1-判断变量",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 判断执行结果",
          "slug": "_3-2-判断执行结果",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 判断路径",
          "slug": "_3-3-判断路径",
          "children": []
        },
        {
          "level": 3,
          "title": "3.4 判断字符串",
          "slug": "_3-4-判断字符串",
          "children": []
        },
        {
          "level": 3,
          "title": "3.5 判断整除",
          "slug": "_3-5-判断整除",
          "children": []
        },
        {
          "level": 3,
          "title": "3.6 其他tests",
          "slug": "_3-6-其他tests",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4 条件判断与block",
      "slug": "_4-条件判断与block",
      "children": [
        {
          "level": 3,
          "title": "4.1 block",
          "slug": "_4-1-block",
          "children": []
        },
        {
          "level": 3,
          "title": "4.2 rescue",
          "slug": "_4-2-rescue",
          "children": []
        },
        {
          "level": 3,
          "title": "4.3 always",
          "slug": "_4-3-always",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "5 条件判断与错误处理",
      "slug": "_5-条件判断与错误处理",
      "children": [
        {
          "level": 3,
          "title": "5.1 fail模块",
          "slug": "_5-1-fail模块",
          "children": []
        },
        {
          "level": 3,
          "title": "5.2 failed_when",
          "slug": "_5-2-failed-when",
          "children": []
        },
        {
          "level": 3,
          "title": "5.3 changed_when",
          "slug": "_5-3-changed-when",
          "children": []
        },
        {
          "level": 3,
          "title": "5.4 断言：assert模块",
          "slug": "_5-4-断言-assert模块",
          "children": []
        },
        {
          "level": 3,
          "title": "5.5 any_errors_fatal",
          "slug": "_5-5-any-errors-fatal",
          "children": []
        },
        {
          "level": 3,
          "title": "5.6 max_fail_percentage",
          "slug": "_5-6-max-fail-percentage",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6 在循环语句中使用条件语句",
      "slug": "_6-在循环语句中使用条件语句",
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
    "minutes": 12.03,
    "words": 3610
  },
  "filePathRelative": "automate/ansible/playbook-if.md"
}
