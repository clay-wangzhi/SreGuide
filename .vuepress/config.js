const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "IT外卖小哥",
  description: "当你发现自己的才华撑不起野心时，就请安静下来学习吧！",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],


  themeConfig: {
    baseLang: 'zh-CN',
    logo: "/lufei.jpg",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "Clay",
    repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
    
    pageInfo: [
	  'time',
      'author',
      'visitor',
      'reading-time',
      'word',
	  'category',
	  'tag',
    ],



    nav: [
      { text: "博客主页", link: "/", icon: "home" },
	  {
        text: "推荐教程",
        icon: "software",
        items: [
        { text: "Shell", icon: "shell", link: "/code/shell/" },
		],
	  },
	  {
        text: "学习笔记",
        icon: "code",
        items: [
		{ text: "容器",
          items: [
          { text: "Kubernetes", icon: "kubernetes", link: "/container/kubernetes/" },
          ],
        },
        { text: "编程语言",
          items: [
          { text: "Python", icon: "python", link: "/code/python/" },
          { text: "Golang", icon: "go", link: "/code/golang/" },
          ],
        },
		{ text: "web中间件",
          items: [
          { text: "Nginx", icon: "nginx", link: "/web/nginx/" },
          ],
        },
        { text: "自动化工具",
          items: [
          { text: "Ansible", icon: "ansible", link: "/automate/ansible/" },
          ],
        },
        { text: "监控工具",
          items: [
          { text: "ELK", icon: "elastic", link: "/monitor/elk/" },
          ],
        },
		{ text: "数据库",
          items: [
          { text: "MySQL", icon: "mysql", link: "/db/mysql/" },
          ],
        },
        ],
      },
    ],
    sidebar: {
        "/code/shell/": [
        "",
        {
          title: "第一部分 初见shell",
          path: "part1/",
          collapsable: false,
          children: ["01_shell_programming", "02_starting_off_with_a_sha_bang", "02_1_invoking_the_script", "02_2_preliminary_exercises",]
        },
        {
          title: "第二部分 shell基础",
          path: "part2/",
          collapsable: true,
          children: ["03_special_characters", "04_introduction_to_variables_and_parameters", "04_1_variable_substitution", "04_2_variable_assignment", "04_3_bash_variables_are_untyped", "04_4_special_variable_types",
		    "05_quoting", "05_1_quoting_variables", "05_2_escaping", "06_exit_and_exit_status", "07_tests", "07_1_test_constructs", "07_2_file_test_operators", "07_3_other_comparison_operators", "07_4_nested_if_then_condition_tests", "07_5_testing_your_knowledge_of_tests", "08_operations_and_related_topics", "08_1_operators",
		    "08_2_numerical_constants", "08_3_the_double_parentheses_construct", "08_4_operator_precedence",
		  ]
        },
		{
          title: "第三部分 shell进阶",
          path: "part3/",
          collapsable: true,
          children: ["09_another_look_at_variables", "09_1_internal_variables", "09_2_typing_variables_declare_or_typeset", "09_2_1_another_use_for_declare", "09_3_random_generate_random_integer", "10_manipulating_variables",
		  	"10_1_manipulating_strings", "10_1_1_manipulating_strings_using_awk", "10_1_2_further_reference", "10_2_parameter_substitution", "11_loops_and_branches", "11_1_loops", "11_2_nested_loops", "11_3_loop_control", "11_4_testing_and_branching", "12_command_substitution", "13_arithmetic_expansion",
		  ]
        },
		"part4/readme",
		{
          title: "第五部分 高级话题",
          path: "part5/",
          collapsable: true,
          children: ["18_regular_expressions", "18_1_a_brief_introduction_to_regular_expressions", "18_2_globbing", "18_3_regular_expression_comparison_table", "19_here_documents", "20_io_redirection",
		  	"20_1_use_exec", "20_2_redirecting_code_blocks", "20_3_applications", "21_subshells", "22_Restricted_Shells", "23_Process_Substitution", "24_functions", "24_1_complex_functions_and_function_complexities", "24_2_local_variables", "24_3_recursion_without_local_variables", "25_aliases",
		    "26_List_Constructs", "27_arrays", "30_network_programming", "33_options", "34_Gotchas", "36_miscellany", "36_5_colorizing_scripts", "36_11_ssh_remote_operate", 
		  ]
        },
		"part6/readme",
      ],		
      "/automate/ansible/": [
        "",
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
