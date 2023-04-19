export const data = {
  "key": "v-765b1b97",
  "path": "/code/shell/part3/09_1_internal_variables.html",
  "title": "9.1 内部变量",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "LinuxStory",
    "category": [
      "Linux"
    ],
    "tag": [
      "Bash"
    ],
    "summary": "9.1 内部变量 内建变量 影响 Bash 脚本行为的变量。 $BASH Bash程序的路径。 $BASH_ENV 这个环境变量会指向一个 Bash 启动文件，该文件在脚本被调用时会被读取。 $BASH_SUBSHELL 该变量用于提示所处的 subshell 层级。这是在 Bash version 3 中被引入的新特性。 具体用法可以参考 样例21-1。 ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/code/shell/part3/09_1_internal_variables.html"
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
          "content": "9.1 内部变量"
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
      "level": 2,
      "title": "内建变量",
      "slug": "内建变量",
      "children": [
        {
          "level": 3,
          "title": "$BASH",
          "slug": "bash",
          "children": []
        },
        {
          "level": 3,
          "title": "$BASH_ENV",
          "slug": "bash-env",
          "children": []
        },
        {
          "level": 3,
          "title": "$BASH_SUBSHELL",
          "slug": "bash-subshell",
          "children": []
        },
        {
          "level": 3,
          "title": "$BASHPID",
          "slug": "bashpid",
          "children": []
        },
        {
          "level": 3,
          "title": "$BASH_VERSINFO[n]",
          "slug": "bash-versinfo-n",
          "children": []
        },
        {
          "level": 3,
          "title": "$BASH_VERSION",
          "slug": "bash-version",
          "children": []
        },
        {
          "level": 3,
          "title": "$CDPATH",
          "slug": "cdpath",
          "children": []
        },
        {
          "level": 3,
          "title": "$DIRSTACK",
          "slug": "dirstack",
          "children": []
        },
        {
          "level": 3,
          "title": "$EDITOR",
          "slug": "editor",
          "children": []
        },
        {
          "level": 3,
          "title": "$EUID",
          "slug": "euid",
          "children": []
        },
        {
          "level": 3,
          "title": "$FUNCNAME",
          "slug": "funcname",
          "children": []
        },
        {
          "level": 3,
          "title": "$GLOBIGNORE",
          "slug": "globignore",
          "children": []
        },
        {
          "level": 3,
          "title": "$GROUPS",
          "slug": "groups",
          "children": []
        },
        {
          "level": 3,
          "title": "$HOME",
          "slug": "home",
          "children": []
        },
        {
          "level": 3,
          "title": "$HOMENAME",
          "slug": "homename",
          "children": []
        },
        {
          "level": 3,
          "title": "$HOSTTYPE",
          "slug": "hosttype",
          "children": []
        },
        {
          "level": 3,
          "title": "$IFS",
          "slug": "ifs",
          "children": []
        },
        {
          "level": 3,
          "title": "$IGNOREEOF",
          "slug": "ignoreeof",
          "children": []
        },
        {
          "level": 3,
          "title": "$LC_COLLATE",
          "slug": "lc-collate",
          "children": []
        },
        {
          "level": 3,
          "title": "$LC_CTYPE",
          "slug": "lc-ctype",
          "children": []
        },
        {
          "level": 3,
          "title": "$LINENO",
          "slug": "lineno",
          "children": []
        },
        {
          "level": 3,
          "title": "$MACHTYPE",
          "slug": "machtype",
          "children": []
        },
        {
          "level": 3,
          "title": "$OLDPWD",
          "slug": "oldpwd",
          "children": []
        },
        {
          "level": 3,
          "title": "$OSTYPE",
          "slug": "ostype",
          "children": []
        },
        {
          "level": 3,
          "title": "$PATH",
          "slug": "path",
          "children": []
        },
        {
          "level": 3,
          "title": "$PIPESTATUS",
          "slug": "pipestatus",
          "children": []
        },
        {
          "level": 3,
          "title": "$PPID",
          "slug": "ppid",
          "children": []
        },
        {
          "level": 3,
          "title": "$PROMPT_COMMAND",
          "slug": "prompt-command",
          "children": []
        },
        {
          "level": 3,
          "title": "$PS1",
          "slug": "ps1",
          "children": []
        },
        {
          "level": 3,
          "title": "$PS2",
          "slug": "ps2",
          "children": []
        },
        {
          "level": 3,
          "title": "$PS3",
          "slug": "ps3",
          "children": []
        },
        {
          "level": 3,
          "title": "$PS4",
          "slug": "ps4",
          "children": []
        },
        {
          "level": 3,
          "title": "$PWD",
          "slug": "pwd",
          "children": []
        },
        {
          "level": 3,
          "title": "$REPLY",
          "slug": "reply",
          "children": []
        },
        {
          "level": 3,
          "title": "$SECONDS",
          "slug": "seconds",
          "children": []
        },
        {
          "level": 3,
          "title": "$SHELLOPTS",
          "slug": "shellopts",
          "children": []
        },
        {
          "level": 3,
          "title": "$SHLVL",
          "slug": "shlvl",
          "children": []
        },
        {
          "level": 3,
          "title": "$TMOUT",
          "slug": "tmout",
          "children": []
        },
        {
          "level": 3,
          "title": "$UID",
          "slug": "uid",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "位置参数",
      "slug": "位置参数",
      "children": [
        {
          "level": 3,
          "title": "$0, $1, $2 等",
          "slug": "_0-1-2-等",
          "children": []
        },
        {
          "level": 3,
          "title": "$#",
          "slug": "",
          "children": []
        },
        {
          "level": 3,
          "title": "$*",
          "slug": "-1",
          "children": []
        },
        {
          "level": 3,
          "title": "$@",
          "slug": "-2",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "其他特殊参数",
      "slug": "其他特殊参数",
      "children": [
        {
          "level": 3,
          "title": "$-",
          "slug": "-3",
          "children": []
        },
        {
          "level": 3,
          "title": "$!",
          "slug": "-4",
          "children": []
        },
        {
          "level": 3,
          "title": "$_",
          "slug": "-5",
          "children": []
        },
        {
          "level": 3,
          "title": "$?",
          "slug": "-6",
          "children": []
        },
        {
          "level": 3,
          "title": "$$",
          "slug": "-7",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "注记",
      "slug": "注记",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 22.45,
    "words": 6734
  },
  "filePathRelative": "code/shell/part3/09_1_internal_variables.md"
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
