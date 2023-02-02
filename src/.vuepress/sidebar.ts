import { defineSidebarConfig } from "vuepress-theme-hope";

export const sidebarConfig = defineSidebarConfig({
  "/linux/basic/": [
    {
      text: "Linux 学习笔记",
      icon: "linux",
      link: "",
      collapsable: false,
      children: [
        {
          text: "文件管理",
          collapsable: false,
          children: ["file/file-type", "file/file-detail", "file/zsgc", "file/cat", "file/zip",]
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
      ]
    },
  ],
  "/basic/": [
    {
      text: "操作系统学习笔记",
      icon: "caozuoxitong",
      prefix: "system",
      link: "",
      collapsable: true,
      children: ["ssh-key"]
    },
    {
      text: "计算机网络学习笔记",
      icon: "wangluo",
      prefix: "network",
      link: "",
      collapsable: true,
      children: ["tcp-three-four.md", "kernel-para-opt",]
    },
  ],
  "/web/": [
    {
      text: "Nginx",
      icon: "nginx",
      prefix: "nginx",
      link: "",
      collapsable: false,
      children: [
        "",
        "first",
        "framework",
        {
          text: "3. nginx配置文件详解",
          link: "config/",
          collapsable: false,
          children: ["global-events", "http", "server", "location", "module",]
        },
        "core",
        "status",
        "qa",
      ]
    },
    {
      text: "Tomcat",
      icon: "tomcat",
      prefix: "tomcat",
      link: "",
      collapsable: false,
      children: ["", "prd", "dead", "cache", "danger", "status",]
    },
  ],
  "/code/": [
    {
      text: "高级 Bash 脚本编程指南",
      icon: "shell",
      prefix: "shell",
      link: "",
      collapsable: true,
      children: [
        {
          text: "第一部分 初见shell",
          collapsable: false,
          children: ["part1/01_shell_programming",
            {
              text: "第二章 和Sha-Bang（#!）一起出发",
              link: "part1/02_starting_off_with_a_sha_bang",
              collapsable: false,
              children: ["part1/02_1_invoking_the_script", "part1/02_2_preliminary_exercises"],
            },
          ],
        },
        {
          text: "第二部分 shell基础",
          link: "part2/",
          collapsable: false,
          children: ["part2/03_special_characters",
            {
              text: "第四章 变量与参数",
              link: "part2/04_introduction_to_variables_and_parameters",
              collapsable: false,
              children: ["part2/04_1_variable_substitution", "part2/04_2_variable_assignment", "part2/04_3_bash_variables_are_untyped", "part2/04_4_special_variable_types",],
            },
            {
              text: "第五章 引用",
              link: "part2/05_quoting",
              collapsable: false,
              children: ["part2/05_1_quoting_variables", "part2/05_2_escaping",],
            },
            "part2/06_exit_and_exit_status",
            {
              text: "第七章 测试",
              link: "part2/07_tests",
              collapsable: false,
              children: ["part2/07_1_test_constructs", "part2/07_2_file_test_operators", "part2/07_3_other_comparison_operators", "part2/07_4_nested_if_then_condition_tests", "part2/07_5_testing_your_knowledge_of_tests",],
            },
            {
              text: "第八章 运算符相关话题",
              link: "part2/08_operations_and_related_topics",
              collapsable: false,
              children: ["part2/08_1_operators", "part2/08_2_numerical_constants", "part2/08_3_the_double_parentheses_construct", "part2/08_4_operator_precedence",],
            },
          ]
        },
        {
          text: "第三部分 shell进阶",
          link: "part3/",
          collapsable: false,
          children: [
            {
              text: "第九章 换个角度看变量",
              link: "part3/09_another_look_at_variables",
              collapsable: false,
              children: ["part3/09_1_internal_variables", "part3/09_2_typing_variables_declare_or_typeset", "part3/09_2_1_another_use_for_declare", "part3/09_3_random_generate_random_integer",],
            },
            {
              text: "第十章 变量处理",
              link: "part3/10_manipulating_variables",
              collapsable: false,
              children: ["part3/10_1_manipulating_strings", "part3/10_1_1_manipulating_strings_using_awk", "part3/10_1_2_further_reference", "part3/10_2_parameter_substitution",],
            },
            {
              text: "第十一章 循环与分支",
              link: "part3/11_loops_and_branches",
              collapsable: false,
              children: ["part3/11_1_loops", "part3/11_2_nested_loops", "part3/11_3_loop_control", "part3/11_4_testing_and_branching",],
            },
            "part3/12_command_substitution", "part3/13_arithmetic_expansion",
          ]
        },
        "part4-command",
        {
          text: "第五部分 高级话题",
          link: "part5/",
          collapsable: false,
          children: [
            {
              text: "18 正则表达式",
              link: "part5/18_regular_expressions",
              collapsable: false,
              children: ["part5/18_1_a_brief_introduction_to_regular_expressions", "part5/18_2_globbing", "part5/18_3_regular_expression_comparison_table",],
            },
            "part5/19_here_documents",
            {
              text: "20 I/O 重定向",
              link: "part5/20_io_redirection",
              collapsable: false,
              children: ["part5/20_1_use_exec", "part5/20_2_redirecting_code_blocks", "part5/20_3_applications",],
            },
            "part5/21_subshells", "part5/22_Restricted_Shells", "part5/23_Process_Substitution",
            {
              text: "24 函数",
              link: "part5/24_functions",
              collapsable: false,
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
      collapsable: true,
      children: [
        {
          text: "1 Python 简介",
          collapsable: false,
          children: ["first", "codeSpecification", "python-virtualenv", "vscode-python", "python-pip"]
        },
        {
          text: "2 Python 基础",
          collapsable: false,
          children: ["python-basic-grammar", "python-control",
            {
              text: "2.3 Python数据类型",
              link: "type-of-data",
              collapsable: false,
              children: ["num-data", "str-data", "bytearray-data", "list-tuple-data", "set-dict-data"],
            },
          ]
        },
        {
          text: "3 高级特性",
          collapsable: false,
          children: ["python-linear-data-structure", "python-analytic-expre", "python-generator", "python-iterator"]
        },
        {
          text: "4 函数",
          collapsable: false,
          children: ["python-function", "function-parameter", "action-scope", "python-recursive-function"]
        },
        {
          text: "5 函数式编程",
          link: "func-prog",
          collapsable: false,
          children: ["high-func", "python-return-function", "lambda", "python-decorator", "python-partial-function"]
        },
        {
          text: "6 模块",
          link: "python-module",
          collapsable: false,
          children: ["python-module-install", "python-setup"]
        },
        {
          text: "7 IO编程",
          collapsable: false,
          children: ["python-dir-file-pro", "python-serialize"]
        },
        {
          text: "8 异常、调试和测试",
          collapsable: false,
          children: ["python-exception"]
        },
        {
          text: "9 面向对象编程",
          link: "python-oop",
          collapsable: false,
          children: ["python-oo-package", "access-control", "python-oo-inher-pol"]
        },
        {
          text: "10 进程和线程",
          link: "process-thread",
          collapsable: false,
          children: ["python-gil-multiprocessing", "python-thread", "python-thread-sync"]
        },
        {
          text: "11 网络编程",
          collapsable: false,
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
      collapsable: true,
      children: ["go-restful-api", "go-fmt", "go-specification", "go-struct", "go-install", "dir"]
    },
    {
      text: "前端学习笔记",
      icon: "vue",
      link: "frontend/readme.md",
    }
  ],
  "/automate/": [
    {
      text: "Jenkins",
      icon: "jenkins",
      prefix: "jenkins/",
      link: "",
      collapsable: false,
      children: [
        "",
        {
          text: "1 Jenkins 简介",
          collapsable: false,
          children: ["cicd", "first"]
        },
        {
          text: "2 安装 Jenkins",
          collapsable: false,
          children: ["yum-install", "war-install", "ansible-install", "docker-install-jenkins"]
        },
        {
          text: "3 使用 Jenkins",
          collapsable: false,
          children: ["userandpermissions", "api"]
        },
        {
          text: "4 流水线核心语法",
          collapsable: false,
          children: ["start-jenkinsfile", "pipelinesyntax", "groovy-simple-tutorial", "jenkins-shared-library", "dingding-plugin", "pipeline-dev-tools", "pipeline-example", "validate-jenkinsfile"]
        },
        {
          text: "5 流水线集成篇",
          collapsable: false,
          children: ["build-tools", "user-auth"]
        },
        {
          text: "6 管理 jenkins",
          collapsable: false,
          children: ["restart",]
        },
        {
          text: "7 日常维护",
          collapsable: false,
          children: ["migrate-job",]
        },
        "qa"
      ],
    },
    {
      text: "Ansible",
      icon: "ansible",
      prefix: "ansible/",
      collapsable: false,
      children: [
        "",
        "first",
        "inventory",
        {
          text: "3 Ansible Ad-hoc命令集",
          collapsable: false,
          children: ["ad-hoc", "lineinfile"]
        },
        {
          text: "4 Ansible Playbook",
          collapsable: false,
          link: "playbook",
          children: ["dir-handler", "playbook-for", "playbook-if", "advanced-playbook", "playbook-tags", "roles", "jinja2", "yaml",]
        },
        {
          text: "5 Ansible变量",
          link: "var",
          collapsable: false,
          children: ["custom", "fact", "magic", "lookup", "vault",]
        },
        "optimize",
        "qa",
        {
          text: "8 综合项目",
          collapsable: false,
          children: ["ansible-k8s",]
        },
      ]
    },
  ],
  "/cloudnative/": [
    {
      text: "kubernetes",
      icon: "kubernetes",
      prefix: "kubernetes/",
      link: "",
      collapsable: false,
      children: [
        "",
        {
          text: "集群搭建",
          collapsable: false,
          children: ["k8s-install",]
        },
        {
          text: "常见应用安装配置",
          collapsable: false,
          children: ["harbor", "docker-harbor-ha", "rancher-install", "helm"]
        },
        {
          text: "容器运行时",
          collapsable: false,
          children: ["k8s-gpu", "kata"]
        },
        {
          text: "存储",
          collapsable: false,
          children: ["longhorn", "deploy-ceph-cluster-with-rook"]
        },
        {
          text: "服务发现与路由",
          collapsable: false,
          children: ["ingress-nginx",]
        },
        {
          text: "集群网络",
          collapsable: false,
          children: ["cni", "calico"]
        },
        {
          text: "监控告警",
          collapsable: false,
          children: ["kube-prometheus-stack",]
        },
        {
          text: "实用技巧",
          collapsable: false,
          // children: ["",]
        },
        {
          text: "运维手册",
          collapsable: false,
          children: ["etcd-backup-restore", "velero", "k8s-audit", "kernel-upgrade", "cert-update", "k8s-allocatable", "lxcfs"]
        },
        {
          text: "最佳实践",
          collapsable: false,
          children: ["kube-reserved", "sysbench", "numa"]
        },
        {
          text: "集群排障",
          collapsable: false,
          children: ["namespace-terminating", "delete-rancher-causing-node-disappear", "lvs-health-check", "apiserver-tls"]
        },
        "recommend",
        {
          text: "附录",
          collapsable: false,
          children: ["kubectl-cheatsheet",]
        },
      ],
    },
  ]
});
