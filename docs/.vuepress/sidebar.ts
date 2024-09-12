import { sidebar } from "vuepress-theme-hope";

export const sidebarConfig = sidebar({
  "/roadmap": ["", "ops"],
  "/": [
    {
      text: "摘要",
      icon: "summary",
      link: "summary"
    },
    {
      text: "云原生",
      icon: "kubernetes",
      prefix: "cloudnative/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "DevOps",
      icon: "devops",
      prefix: "devops/",
      collapsible: true,
      children: [
        {
          text: "Jenkins",
          icon: "jenkins",
          prefix: "jenkins/",
          link: "",
          collapsible: true,
          children: [
            "",
            {
              text: "1 Jenkins 简介",
              collapsible: true,
              children: ["cicd", "first"]
            },
            {
              text: "2 安装 Jenkins",
              collapsible: true,
              children: ["yum-install", "war-install", "ansible-install", "docker-install-jenkins"]
            },
            {
              text: "3 使用 Jenkins",
              collapsible: true,
              children: ["userandpermissions", "api"]
            },
            {
              text: "4 流水线核心语法",
              collapsible: true,
              children: ["start-jenkinsfile", "pipelinesyntax", "groovy-simple-tutorial", "jenkins-shared-library", "dingding-plugin", "pipeline-dev-tools", "pipeline-example", "validate-jenkinsfile"]
            },
            {
              text: "5 流水线集成篇",
              collapsible: true,
              children: ["build-tools", "user-auth"]
            },
            {
              text: "6 管理 jenkins",
              collapsible: true,
              children: ["restart",]
            },
            {
              text: "7 日常维护",
              collapsible: true,
              children: ["migrate-job",]
            },
            "qa"
          ],
        },
        {
          text: "Ansible",
          icon: "ansible",
          prefix: "ansible/",
          collapsible: true,
          children: [
            "",
            "first",
            "inventory",
            {
              text: "3 Ansible Ad-hoc命令集",
              collapsible: true,
              children: ["ad-hoc", "lineinfile"]
            },
            {
              text: "4 Ansible Playbook",
              collapsible: true,
              link: "playbook",
              children: ["dir-handler", "playbook-for", "playbook-if", "advanced-playbook", "playbook-tags", "roles", "jinja2", "yaml",]
            },
            {
              text: "5 Ansible变量",
              link: "var",
              collapsible: true,
              children: ["custom", "fact", "magic", "lookup", "vault",]
            },
            "optimize",
            "qa",
            {
              text: "8 综合项目",
              collapsible: true,
              children: ["ansible-k8s",]
            },
          ]
        },
      ]
    },
    {
      text: "计算机基础",
      icon: "jichu",
      prefix: "basic/",
      collapsible: true,
      children: [
        {
          text: "操作系统学习笔记",
          icon: "caozuoxitong",
          prefix: "system",
          link: "",
          collapsible: true,
          children: ["ssh-key"]
        },
        {
          text: "计算机网络学习笔记",
          icon: "wangluo",
          prefix: "network",
          link: "",
          collapsible: true,
          children: ["tcp-three-four.md", "kernel-para-opt",]
        },
        {
          text: "Linux 学习笔记",
          icon: "linux",
          link: "",
          prefix: "linux/basic",
          collapsible: true,
          children: [
            {
              text: "文件管理",
              collapsible: true,
              children: ["file/file-type", "file/file-detail", "file/zsgc", "file/cat", "file/zip",]
            },
            "ugo",
            "crontab",
            "user",
            "process",
            "i-o",
            "rpm",
            "inter",
            "limit",
            "common-kno",
          ]
        },
      ]
    },
    {
      text: "编程语言",
      icon: "code",
      prefix: "code/",
      collapsible: true,
      children: [
        {
          text: "高级 Bash 脚本编程指南",
          icon: "shell",
          prefix: "shell",
          link: "",
          collapsible: true,
          children: [
            {
              text: "第一部分 初见shell",
              collapsible: true,
              children: ["part1/01_shell_programming",
                {
                  text: "第二章 和Sha-Bang（#!）一起出发",
                  link: "part1/02_starting_off_with_a_sha_bang",
                  collapsible: true,
                  children: ["part1/02_1_invoking_the_script", "part1/02_2_preliminary_exercises"],
                },
              ],
            },
            {
              text: "第二部分 shell基础",
              link: "part2/",
              collapsible: true,
              children: ["part2/03_special_characters",
                {
                  text: "第四章 变量与参数",
                  link: "part2/04_introduction_to_variables_and_parameters",
                  collapsible: true,
                  children: ["part2/04_1_variable_substitution", "part2/04_2_variable_assignment", "part2/04_3_bash_variables_are_untyped", "part2/04_4_special_variable_types",],
                },
                {
                  text: "第五章 引用",
                  link: "part2/05_quoting",
                  collapsible: true,
                  children: ["part2/05_1_quoting_variables", "part2/05_2_escaping",],
                },
                "part2/06_exit_and_exit_status",
                {
                  text: "第七章 测试",
                  link: "part2/07_tests",
                  collapsible: true,
                  children: ["part2/07_1_test_constructs", "part2/07_2_file_test_operators", "part2/07_3_other_comparison_operators", "part2/07_4_nested_if_then_condition_tests", "part2/07_5_testing_your_knowledge_of_tests",],
                },
                {
                  text: "第八章 运算符相关话题",
                  link: "part2/08_operations_and_related_topics",
                  collapsible: true,
                  children: ["part2/08_1_operators", "part2/08_2_numerical_constants", "part2/08_3_the_double_parentheses_construct", "part2/08_4_operator_precedence",],
                },
              ]
            },
            {
              text: "第三部分 shell进阶",
              link: "part3/",
              collapsible: true,
              children: [
                {
                  text: "第九章 换个角度看变量",
                  link: "part3/09_another_look_at_variables",
                  collapsible: true,
                  children: ["part3/09_1_internal_variables", "part3/09_2_typing_variables_declare_or_typeset", "part3/09_2_1_another_use_for_declare", "part3/09_3_random_generate_random_integer",],
                },
                {
                  text: "第十章 变量处理",
                  link: "part3/10_manipulating_variables",
                  collapsible: true,
                  children: ["part3/10_1_manipulating_strings", "part3/10_1_1_manipulating_strings_using_awk", "part3/10_1_2_further_reference", "part3/10_2_parameter_substitution",],
                },
                {
                  text: "第十一章 循环与分支",
                  link: "part3/11_loops_and_branches",
                  collapsible: true,
                  children: ["part3/11_1_loops", "part3/11_2_nested_loops", "part3/11_3_loop_control", "part3/11_4_testing_and_branching",],
                },
                "part3/12_command_substitution", "part3/13_arithmetic_expansion",
              ]
            },
            "part4-command",
            {
              text: "第五部分 高级话题",
              link: "part5/",
              collapsible: true,
              children: [
                {
                  text: "18 正则表达式",
                  link: "part5/18_regular_expressions",
                  collapsible: true,
                  children: ["part5/18_1_a_brief_introduction_to_regular_expressions", "part5/18_2_globbing", "part5/18_3_regular_expression_comparison_table",],
                },
                "part5/19_here_documents",
                {
                  text: "20 I/O 重定向",
                  link: "part5/20_io_redirection",
                  collapsible: true,
                  children: ["part5/20_1_use_exec", "part5/20_2_redirecting_code_blocks", "part5/20_3_applications",],
                },
                "part5/21_subshells", "part5/22_Restricted_Shells", "part5/23_Process_Substitution",
                {
                  text: "24 函数",
                  link: "part5/24_functions",
                  collapsible: true,
                  children: ["part5/24_1_complex_functions_and_function_complexities", "part5/24_2_local_variables", "part5/24_3_recursion_without_local_variables",],
                },
                "part5/25_aliases",
                "part5/26_List_Constructs", "part5/27_arrays", "part5/30_network_programming", "part5/33_options", "part5/34_Gotchas", "part5/36_miscellany", "part5/36_5_colorizing_scripts",
              ]
            },
            "part6"
          ]
        },
        {
          text: "Python 学习笔记",
          icon: "python",
          prefix: "python",
          link: "",
          collapsible: true,
          children: [
            {
              text: "1 Python 简介",
              collapsible: true,
              children: ["first", "codeSpecification", "python-virtualenv", "vscode-python", "python-pip"]
            },
            {
              text: "2 Python 基础",
              collapsible: true,
              children: ["python-basic-grammar", "python-control",
                {
                  text: "2.3 Python数据类型",
                  link: "type-of-data",
                  collapsible: true,
                  children: ["num-data", "str-data", "bytearray-data", "list-tuple-data", "set-dict-data"],
                },
              ]
            },
            {
              text: "3 高级特性",
              collapsible: true,
              children: ["python-linear-data-structure", "python-analytic-expre", "python-generator", "python-iterator"]
            },
            {
              text: "4 函数",
              collapsible: true,
              children: ["python-function", "function-parameter", "action-scope", "python-recursive-function"]
            },
            {
              text: "5 函数式编程",
              link: "func-prog",
              collapsible: true,
              children: ["high-func", "python-return-function", "lambda", "python-decorator", "python-partial-function"]
            },
            {
              text: "6 模块",
              link: "python-module",
              collapsible: true,
              children: ["python-module-install", "python-setup"]
            },
            {
              text: "7 IO编程",
              collapsible: true,
              children: ["python-dir-file-pro", "python-serialize"]
            },
            {
              text: "8 异常、调试和测试",
              collapsible: true,
              children: ["python-exception"]
            },
            {
              text: "9 面向对象编程",
              link: "python-oop",
              collapsible: true,
              children: ["python-oo-package", "access-control", "python-oo-inher-pol"]
            },
            {
              text: "10 进程和线程",
              link: "process-thread",
              collapsible: true,
              children: ["python-gil-multiprocessing", "python-thread", "python-thread-sync"]
            },
            {
              text: "11 网络编程",
              collapsible: true,
              children: ["python-socketserver", "python-tcp-pg"]
            },
            "python-magic.md",
            "python-io-model.md",
            "python-instance",
          ]
        },
        {
          text: "Go 学习笔记",
          icon: "golang",
          prefix: "golang",
          link: "",
          collapsible: true,
          children: ["go-restful-api", "go-fmt", "go-specification", "go-struct", "go-install", "dir"]
        },
        {
          text: "前端学习笔记",
          icon: "vue",
          link: "frontend/readme.md",
        }
      ]
    },
    {
      text: "负载均衡",
      icon: "webkuangjia",
      prefix: "web/",
      children: "structure",
      collapsible: true,
    },
  ],
});
