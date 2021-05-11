module.exports = [
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
];
