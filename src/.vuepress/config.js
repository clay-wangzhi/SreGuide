const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./config/navbar");
// const sideBarConfig = require("./config/sideBar");

module.exports = config({
  title: "IT外卖小哥",
  description: "当你发现自己的才华撑不起野心时，就请安静下来学习吧！",

  dest: "./dist",
  locales: {
    "/": {
      // 设置需要的语言
      lang: "zh-CN",
    },
  },

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],


  themeConfig: {
    baseLang: 'zh-CN',
    logo: "/lufei.jpg",
    hostname: "https://clay-wangzhi.com",

    author: "Clay",
    repo: "https://github.com/clay-wangzhi/wiki",
	  docsBranch: "master",
    docsDir: "src",

    pageInfo: [
      'time',
      'author',
      'visitor',
      'reading-time',
      'word',
      'category',
      'tag',
    ],

    nav: navBarConfig.zh,
    // sidebar: sideBarConfig.zh,
    sidebar: {
      "/code/shell/": [
        "",
        {
          title: "第一部分 初见shell",
          path: "part1/",
          collapsable: false,
          children: ["part1/01_shell_programming",
            {
              title: "第二章 和Sha-Bang（#!）一起出发",
              path: "part1/02_starting_off_with_a_sha_bang",
              collapsable: false,
              children: ["part1/02_1_invoking_the_script", "part1/02_2_preliminary_exercises"],
            },
          ],
        },
        {
          title: "第二部分 shell基础",
          path: "part2/",
          collapsable: false,
          children: ["part2/03_special_characters",
            {
              title: "第四章 变量与参数",
              path: "part2/04_introduction_to_variables_and_parameters",
              collapsable: false,
              children: ["part2/04_1_variable_substitution", "part2/04_2_variable_assignment", "part2/04_3_bash_variables_are_untyped", "part2/04_4_special_variable_types",],
            },
            {
              title: "第五章 引用",
              path: "part2/05_quoting",
              collapsable: false,
              children: ["part2/05_1_quoting_variables", "part2/05_2_escaping",],
            },
            "part2/06_exit_and_exit_status",
            {
              title: "第七章 测试",
              path: "part2/07_tests",
              collapsable: false,
              children: ["part2/07_1_test_constructs", "part2/07_2_file_test_operators", "part2/07_3_other_comparison_operators", "part2/07_4_nested_if_then_condition_tests", "part2/07_5_testing_your_knowledge_of_tests",],
            },
            {
              title: "第八章 运算符相关话题",
              path: "part2/08_operations_and_related_topics",
              collapsable: false,
              children: ["part2/08_1_operators", "part2/08_2_numerical_constants", "part2/08_3_the_double_parentheses_construct", "part2/08_4_operator_precedence",],
            },
          ]
        },
        {
          title: "第三部分 shell进阶",
          path: "part3/",
          collapsable: false,
          children: [
            {
              title: "第九章 换个角度看变量",
              path: "part3/09_another_look_at_variables",
              collapsable: false,
              children: ["part3/09_1_internal_variables", "part3/09_2_typing_variables_declare_or_typeset", "part3/09_2_1_another_use_for_declare", "part3/09_3_random_generate_random_integer",],
            },
            {
              title: "第十章 变量处理",
              path: "part3/10_manipulating_variables",
              collapsable: false,
              children: ["part3/10_1_manipulating_strings", "part3/10_1_1_manipulating_strings_using_awk", "part3/10_1_2_further_reference", "part3/10_2_parameter_substitution",],
            },
            {
              title: "第十一章 循环与分支",
              path: "part3/11_loops_and_branches",
              collapsable: false,
              children: ["part3/11_1_loops", "part3/11_2_nested_loops", "part3/11_3_loop_control", "part3/11_4_testing_and_branching",],
            },
            "part3/12_command_substitution", "part3/13_arithmetic_expansion",
          ]
        },
        "part4-command",
        {
          title: "第五部分 高级话题",
          path: "part5/",
          collapsable: false,
          children: [
            {
              title: "18 正则表达式",
              path: "part5/18_regular_expressions",
              collapsable: false,
              children: ["part5/18_1_a_brief_introduction_to_regular_expressions", "part5/18_2_globbing", "part5/18_3_regular_expression_comparison_table",],
            },
            "part5/19_here_documents",
            {
              title: "20 I/O 重定向",
              path: "part5/20_io_redirection",
              collapsable: false,
              children: ["part5/20_1_use_exec", "part5/20_2_redirecting_code_blocks", "part5/20_3_applications",],
            },
            "part5/21_subshells", "part5/22_Restricted_Shells", "part5/23_Process_Substitution",
            {
              title: "24 函数",
              path: "part5/24_functions",
              collapsable: false,
              children: ["part5/24_1_complex_functions_and_function_complexities", "part5/24_2_local_variables", "part5/24_3_recursion_without_local_variables",],
            },
            "part5/25_aliases",
            "part5/26_List_Constructs", "part5/27_arrays", "part5/30_network_programming", "part5/33_options", "part5/34_Gotchas", "part5/36_miscellany", "part5/36_5_colorizing_scripts",
          ]
        },
        "part6",
      ],
      "/automate/ansible/": [
        "",
        "first",
        "inventory",
        {
          title: "3 Ansible Ad-hoc命令集",
          path: "ad-hoc/",
          collapsable: false,
          children: ["lineinfile",]
        },
        {
          title: "4 Ansible Playbook",
          path: "playbook/",
          collapsable: false,
          children: ["dir-handler", "playbook-for", "playbook-if", "advanced-playbook", "playbook-tags", "roles", "file-jinja2", "yaml",]
        },
        {
          title: "5 Ansible变量",
          path: "var/",
          collapsable: false,
          children: ["custom", "fact", "magic", "lookup", "vault",]
        },
        "optimize",
        "qa",
      ],
      "/web/nginx/": [
        "",
        "framework",
        {
          title: "3. nginx配置文件详解",
          path: "config/",
          collapsable: false,
          children: ["global-events", "http", "server", "location", "module",]
        },
        "core",
        "status",
        {
          title: "6. nginx常见问题",
          path: "qa/",
          collapsable: false,
          children: ["forbidden",]
        },
      ],
      "/code/python/": [
        "",
        "python-basic-grammar.md",
        "python-linear-data-structure.md",
        "python-ha-tables-analytic-expre.md",
        "python-function.md",
        "python-decorator.md",
        "python-dir-file-pro.md",
        "python-serialize.md",
        "python-exception.md",
        "python-oo-package.md",
        "python-oo-inher-pol.md",
        "python-magic.md",
        "python-thread.md",
        "python-thread-sync.md",
        "python-gil-multiprocessing.md",
        "python-tcp-pg.md",
        "python-socketserver.md",
        "python-io-model.md",
        "python-instance",
      ],
      "/monitor/zabbix/": [
        "",
        "zabbix-ans",
        "zabbix-media",
        "zabbix-mysql",
        "zabbix-redis",
        "qa",
        "zabbix-api-web",
        "zabbix-activemq",
        "zabbix-zookeeper",
        "todolist",
      ],
      "/db/mysql/": [
        "",
        "list-com",
        "des-select",
        "view-func",
        "stro",
        "user-contr",
        "back",
        "ab-copy",
        "owner-kee",
        "read-write",
        "jiagou",
        "lock",
        "qa",
        "bin-log",
      ],
      "/linux/basic/": [
        "",
        {
          title: "文件管理",
          collapsable: false,
          children: ["file/file-type","file/file-detail", "file/zsgc", "file/cat", "file/zip",]
        },
        "ugo",
        "crontab",
        "user",
        "process",
        "i-o",
        "rpm",
        "inter",
        "logrotate",
        "limit",
        "common-kno",
      ],
      "/db/redis/": [
        "",
        "redis-slave",
        "server-client",
        {
          title: "数据库操作",
          collapsable: false,
          children: ["operate/string", "operate/key", "operate/hash", "operate/list", "operate/set", "operate/zset", ]
        },
        "redis-dump",
        "ruby-update",
        "qa",
      ],
      "/monitor/elk/": [
        "",
        {
          title: "概述",
          collapsable: false,
          children: ["summarize/develop","summarize/scene",]
        },
        {
          title: "安装上手",
          collapsable: false,
          children: ["install/sample-install","install/quick-browse", "install/docker-elk", "install/ansible-elk", "install/docker-com-elk",]
        },
        {
          title: "Elasticsearch入门",
          collapsable: false,
          children: ["primer/basic", "primer/crup", "primer/inverted-index", "primer/participle", "primer/search-api", "primer/search-api-de", "primer/req-body",]
        },
      ],
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Email: "mailto:clay_wangzhi@163.com",
      },
    },

    footer: {
      display: true,
      content: "",
    },

    comment: {
      type: "valine",
      appId: "9WtpTAylwFHKYQgg3JOQpHnl-gzGzoHsz",
      appKey: "7yiwm2Pegp8r6uwfaPBbjqI4",
    },

    copyright: true,

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
