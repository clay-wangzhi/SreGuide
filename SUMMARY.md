# Summary

* [Introduction](README.md)

## 1 Linux
* [1.1 linux简介](1 Linux/1.1 linux简介.md)
* 1.2 文件管理
    * [1.2.1 查看文件类型](1 Linux/1.2 文件管理/1.2.1 查看文件类型.md)
    * [1.2.2 查看文件详细属性](1 Linux/1.2 文件管理/1.2.2 查看文件详细属性.md)
    * [1.2.3 创建、复制、移动、删除](1 Linux/1.2 文件管理/1.2.3 zsgc.md)
    * [1.2.4 查看文件内容](1 Linux/1.2 文件管理/1.2.4 查看文件内容.md)
    * [1.2.5 打包、压缩](1 Linux/1.2 文件管理/1.2.5 打包压缩.md)
* [1.3 计划任务](1 Linux/1.3 计划任务.md)
* [1.4 用户管理](1 Linux/1.4 用户管理.md)
* [1.5 进程管理](1 Linux/1.5 进程管理.md)
* [1.6 管道及I/O重定向](1 Linux/1.6 管道及I-O重定向.md)
* [1.7 软件包管理](1 Linux/1.7 软件包管理.md)
* [1.8 网络管理](1 Linux/1.8 网络管理.md)
* [1.9 日志logrotate](1 Linux/1.9 日志logrotate.md)

## 2 Shell
* [第一部分 初见shell](2 shell/part1/part1.md)
    * [1. 为什么使用shell编程](2 shell/part1/01_shell_programming.md)
    * [2. 和Sha-Bang(#!)一起出发](2 shell/part1/02_starting_off_with_a_sha_bang.md)
        * [2.1 调用一个脚本](2 shell/part1/02_1_invoking_the_script.md)
        * [2.2 牛刀小试](2 shell/part1/02_2_preliminary_exercises.md)
* [第二部分 shell基础](2 shell/part2/part2.md)
    * [3. 特殊字符](2 shell/part2/03_special_characters.md)
    * [4. 变量与参数](2 shell/part2/04_introduction_to_variables_and_parameters.md)
        * [4.1 变量替换](2 shell/part2/04_1_variable_substitution.md)
        * [4.2 变量赋值](2 shell/part2/04_2_variable_assignment.md)
        * [4.3 Bash弱类型变量](2 shell/part2/04_3_bash_variables_are_untyped.md)
        * [4.4 特殊变量类型](2 shell/part2/04_4_special_variable_types.md)
    * [5. 引用](2 shell/part2/05_quoting.md)
        * [5.1 引用变量](2 shell/part2/05_1_quoting_variables.md)
        * [5.2 转义](2 shell/part2/05_2_escaping.md)
    * [6. 退出与退出状态](2 shell/part2/06_exit_and_exit_status.md)
    * [7. 测试](2 shell/part2/07_tests.md)
        * [7.1 测试结构](2 shell/part2/07_1_test_constructs.md)
        * [7.2 文件测试操作](2 shell/part2/07_2_file_test_operators.md)
        * [7.3 其他比较操作](2 shell/part2/07_3_other_comparison_operators.md)
        * [7.4 嵌套 if/then 条件测试](2 shell/part2/07_4_nested_if_then_condition_tests.md)
        * [7.5 牛刀小试](2 shell/part2/07_5_testing_your_knowledge_of_tests.md)
    * [8. 运算符相关话题](2 shell/part2/08_operations_and_related_topics.md)
        * [8.1 运算符](2 shell/part2/08_1_operators.md)
        * [8.2 数字常量](2 shell/part2/08_2_numerical_constants.md)
        * [8.3 双圆括号结构](2 shell/part2/08_3_the_double_parentheses_construct.md)
        * [8.4 运算符优先级](2 shell/part2/08_4_operator_precedence.md)
* [第三部分 shell进阶](2 shell/part3/part3.md)
    * [9. 换个角度看变量](2 shell/part3/09_another_look_at_variables.md)
        * [9.1 内部变量](2 shell/part3/09_1_internal_variables.md)
        * [9.2 变量类型标注：declare 与 typeset](2 shell/part3/09_2_typing_variables_declare_or_typeset.md)
            * [9.2.1 declare 的另类用法](2 shell/part3/09_2_1_another_use_for_declare.md)
        * [9.3 $RANDOM：生成随机数](2 shell/part3/09_3_random_generate_random_integer.md)
    * [10. 变量处理](2 shell/part3/10_manipulating_variables.md)
        * [10.1 字符串处理](2 shell/part3/10_1_manipulating_strings.md)
            * [10.1.1 使用 awk 处理字符串](2 shell/part3/10_1_1_manipulating_strings_using_awk.md)
            * [10.1.2 参考资料](2 shell/part3/10_1_2_further_reference.md)
        * [10.2 参数替换](2 shell/part3/10_2_parameter_substitution.md)
    * [11. 循环与分支](2 shell/part3/11_loops_and_branches.md)
        * [11.1 循环](2 shell/part3/11_1_loops.md)
        * [11.2 嵌套循环](2 shell/part3/11_2_nested_loops.md)
        * [11.3 循环控制](2 shell/part3/11_3_loop_control.md)
        * [11.4 测试与分支](2 shell/part3/11_4_testing_and_branching.md)
    * [12. 命令替换](2 shell/part3/12_command_substitution.md)
    * [13. 算术扩展](2 shell/part3/13_arithmetic_expansion.md)
* [第四部分 命令](2 shell/part4/part4.md)
* [第五部分 高级话题](2 shell/part5/part5.md)
    * [18.正则表达式](2 shell/part5/18_regular_expressions.md)
        * [18.1正则表达式简介](2 shell/part5/18_1_a_brief_introduction_to_regular_expressions.md)
        * [18.2文件名替换](2 shell/part5/18_2_globbing.md)
        * [18.3 正则表达式对照表](2 shell/part5/18_3_regular_expression_comparison_table.md)
    * [19. 嵌入文档](2 shell/part5/19_here_documents.md)
    * [20. I/O 重定向](2 shell/part5/20_io_redirection.md)
        * [20.1 使用 exec](2 shell/part5/20_1_use_exec.md)
        * [20.2 重定向代码块](2 shell/part5/20_2_redirecting_code_blocks.md)
        * [20.3 应用程序](2 shell/part5/20_3_applications.md)
    * [21. 子shell](2 shell/part5/21_subshells.md)
    * [22. 限制模式的Shell](2 shell/part5/22_Restricted_Shells.md)
    * [23. 进程替换](2 shell/part5/23_Process_Substitution.md)
    * [24. 函数](2 shell/part5/24_functions.md)
        * [24.1 复杂函数和函数复杂性](2 shell/part5/24_1_complex_functions_and_function_complexities.md)
        * [24.2 局部变量](2 shell/part5/24_2_local_variables.md)
        * [24.3 不适用局部变量的递归](2 shell/part5/24_3_recursion_without_local_variables.md)
    * [25. 别名](2 shell/part5/25_aliases.md)
    * [26. 列表结构](2 shell/part5/26_List_Constructs.md)
    * [27. 数组](2 shell/part5/27_arrays.md)
    * [30. 网络编程](2 shell/part5/30_network_programming.md)
    * [33. 选项](2 shell/part5/33_options.md)
    * [34. 陷阱](2 shell/part5/34_Gotchas.md)
    * [36. 其他](2 shell/part5/36_miscellany.md)
        * [36.5 有颜色的脚本](2 shell/part5/36_5_colorizing_scripts.md)
        * [36.11 ssh远程操作](2 shell/part5/36_11_ssh_remote_operate.md)
* [第六部分 Google Shell 风格指南](2 shell/part6/part6.md)

## 3 Python
* [3.1 简介](3 python/3.1 简介.md)
* [3.2 数据类型](3 python/3.2 数据类型.md)
* [python subprocess模块的使用](3 python/python subprocess模块的使用.md)
* [python解析nginx配置文件](3 python/python解析nginx配置文件.md)
* [python调用jenkinsAPI批量拷贝视图job](3 python/python调用jenkinsAPI批量拷贝视图job.md)
* [python调用zabbixAPI批量添加web监控](3 python/python调用zabbixAPI批量添加web监控.md)

## 4 Golang
* [4.1 程序结构](4 golang/4.1 程序结构.md)
* 4.2 数据类型
    * 4.2.1 基础数据类型
    * 4.2.2 复合数据类型
* 4.3 函数

## 5 Docker
* [5.1 初识docker](5 docker/5.1 初识docker.md)
* [5.2 使用镜像](5 docker/5.2 使用镜像.md)
* [5.3 docker安装](5 docker/5.3 docker安装.md)
* [5.4 docker-compose安装](5 docker/5.4 docker-compose安装.md)
* [5.5 harbor创建](5 docker/5.5 harbor创建.md)
* [5.6 harbor添加https认证](5 docker/5.6 harbor添加https认证.md)

## 6 Kubernetes
* 6.1 集群的安装
    * [6.1.1 kubeadm安装集群](6 kubernetes/6.1 集群的安装/6.1.1 使用kubeadm工具快速安装kubernetes集群.md)
    * [6.1.2 二进制安装集群](6 kubernetes/6.1 集群的安装/6.1.2 以二进制文件方式安装kubernetes集群.md)

## 7 Nginx
* [7.1 gzip模块](7 nginx/7.1 gzip.md)
* [7.2 状态码](7 nginx/7.2 状态码.md)
* [7.3 常见nginx常用模块和模块的使用示例](7 nginx/7.3 常见nginx常用模块和模块的使用示例.md)
* [初识Nginx](7 nginx/初识Nginx.md)
* [nginx架构基础](7 nginx/nginx架构基础.md)

## 8 Tomcat
* [8.1 tomcat简介](8 tomcat/8.1 tomcat简介.md)
* [生产环境中的tomcat配置](8 tomcat/生产环境中的tomcat配置.md)
* [tomcat假死现象](8 tomcat/tomcat假死现象.md)
* [Tomcat 错误代号及状态码](8 tomcat/Tomcat 错误代号及状态码.md)
* [tomcat注意事项](8 tomcat/tomcat注意事项.md)

## 9 Elasticsearch
* 9.1 概述
    * [9.1.1 Elasticsearch 简介及其发展历史](9 elasticsearch/9.1 概述/9.1.1 Elasticsearch 简介及其发展历史.md)
    * [9.1.2 Elastic Stack 家族成员及其应用场景](9 elasticsearch/9.1 概述/9.1.2 Elastic Stack 家族成员及其应用场景.md)
* 9.2 安装上手
    * [9.2.1 Elasticsearch的安装和简单配置](9 elasticsearch/9.2 安装上手/9.2.1 Elasticsearch的安装和简单配置.md)
    * [9.2.2 Kibana的安装和界面快速浏览](9 elasticsearch/9.2 安装上手/9.2.2 Kibana的安装和界面快速浏览.md)
    * [9.2.3 在Docker容器中运行Elasticsearch，Kibana和Cerebro](9 elasticsearch/9.2 安装上手/9.2.3 在Docker容器中运行Elasticsearch，Kibana和Cerebro.md)
* 9.3 Elasticsearch入门
    * [9.3.1 基本概念](9 elasticsearch/9.3 Elasticsearch入门/9.3.1 基本概念.md)
    * [9.3.2 文档的基本操作CRUP与批量操作](9 elasticsearch/9.3 Elasticsearch入门/9.3.2 文档的基本操作CRUP与批量操作.md)
    * [9.3.3 倒排索引入门](9 elasticsearch/9.3 Elasticsearch入门/9.3.3 倒排索引入门.md)
    * [9.3.4 通过分析器进行分词](9 elasticsearch/9.3 Elasticsearch入门/9.3.4 通过分析器进行分词.md)
    * [9.3.5 Search API概览](9 elasticsearch/9.3 Elasticsearch入门/9.3.5 Search API概览.md)
    * [9.3.6 URI Search详解](9 elasticsearch/9.3 Elasticsearch入门/9.3.6 URI Search详解.md)
    * [9.3.7 Request Body和Query DSL简介](9 elasticsearch/9.3 Elasticsearch入门/9.3.7 Request Body和Query DSL简介.md)

## 10 Zabbix
* [10.1 zabbix4.4新功能](10 zabbix/10.1 zabbix4.4新功能.md)
* [10.2 zabbix借助ansible安装](10 zabbix/10.2 zabbix借助ansible安装.md)
* [10.3 zabbix添加报警媒介](10 zabbix/10.3 zabbix添加报警媒介.md)
* [10.4 MySQL监控模块](10 zabbix/10.4 MySQL监控模块.md)
* [10.5 Redis监控模块](10 zabbix/10.5 Redis监控模块.md)
* [10.6 常见问题](10 zabbix/10.6 常见问题.md)
* [10.7 用zabbix api批量添加web监控](10 zabbix/10.7 用zabbix api批量添加web监控.md)

## 11 消息中间件
* [11.1 activemq集群](11 消息中间件/11.1 activemq5.15.9集群搭建步骤.md)
* [11.2 rabbitmq](11 消息中间件/11.2 centos7安装rabbitmq-3.7.9.md)

## 12 常见集群的搭建
* [12.1 keepalived和heartbeat对比](12 常见集群的搭建/12.1 keepalived和heartbeat对比.md)
* [12.2 zookeeper集群](12 常见集群的搭建/12.2 zookeeper3.4.14集群搭建步骤.md)
* [12.3 fastdfs](12 常见集群的搭建/12.3 分布式FastDfs+nginx缓存高可用集群构建.md)
* [12.4 rocketmq集群的搭建](12 常见集群的搭建/12.4 rocketmq集群的搭建.md)

## 13 常见服务的搭建
* [13.1 shadowsocks](13 常见服务的搭建/13.1 centos7下搭建shadowsocks.md)
* [13.2 jdk](13 常见服务的搭建/13.2 centos下配置jdk的环境变量.md)
* [13.3 python3.6](13 常见服务的搭建/13.3 安装python3-6.md)
* [13.4 新建博客方法](13 常见服务的搭建/13.4 新建博客方法.md)
* [13.5 confluence](13 常见服务的搭建/13.5 基于docker搭建confluence.md)

## 14 Markdown
* [14.1 让Markdown写作更简单Typora完全使用指南](14 markdown/14.1 让Markdown写作更简单Typora完全使用指南.md)

## 15 Ansible
* [15.1 Ansible简介](15 ansible/15.1 ansible简介.md)
* [ansible使用优化](15 ansible/ansible使用优化.md)

## 16 Mysql
* [16.1 MySQL基本操作](16 MySQL/16.1 MySQL基本操作.md)
* [16.2 列表类型和数据完整性](16 MySQL/16.2 列表类型和数据完整性.md)
* [16.3 数据库设计与查询语句](16 MySQL/16.3 数据库设计与查询语句.md)
* [16.4 视图、事务、索引、函数](16 MySQL/16.4 视图、事务、索引、函数.md)
* [16.5 MySQL存储引擎](16 MySQL/16.5 MySQL存储引擎.md)
* [16.6 用户权限和访问控制](16 MySQL/16.6 用户权限和访问控制.md)
* [16.7 备份恢复](16 MySQL/16.7 备份恢复.md)
* [16.8 AB复制](16 MySQL/16.8 MySQLAB复制.md)
* [16.9 主主和keepalived](16 MySQL/16.9 MySQL的主主和keepalived.md)
* [16.10 读写分离和Amoeba](16 MySQL/16.10 Mysql读写分离和Amoeba.md)
* [16.11 MySQL逻辑架构](16 MySQL/16.11 MySQL逻辑架构.md)
* [16.12 MySQL锁等待](16 MySQL/16.12 MySQL锁等待.md)
* [16.13 MySQL常见问题](16 MySQL/16.13 MySQL常见问题.md)

## 17 Redis
* [17.1 安装](17 Redis/17.1 安装.md)
* [17.2 配置](17 Redis/17.2 配置.md)
* [17.3 服务器端和客户端命令](17 Redis/17.3 服务器端和客户端命令.md)
* 17.4 数据库操作
    * [17.4.1 string类型](17 Redis/17.4 数据库操作/17.4.1 string类型.md)
    * [17.4.2 键命令](17 Redis/17.4 数据库操作/17.4.2 键命令.md)
    * [17.4.3 hash类型](17 Redis/17.4 数据库操作/17.4.3 hash类型.md)
    * [17.4.4 list类型](17 Redis/17.4 数据库操作/17.4.4 list类型.md)
    * [17.4.5 set类型](17 Redis/17.4 数据库操作/17.4.5 set类型.md)
    * [17.4.6 zset类型](17 Redis/17.4 数据库操作/17.4.6 zset类型.md)
* [17.5 centos7安装redis-5.0.0主从](17 Redis/17.5 centos7安装redis-5.0.0主从.md)
* [17.6 redis5.0.4集群搭建步骤](17 Redis/17.6 redis5.0.4集群搭建步骤.md)
* [17.7 centos7安装升级ruby](17 Redis/17.7 centos7安装升级ruby.md)
* [17.8 redis-dump方式导入导出数据](17 Redis/17.8 redis-dump方式导入导出数据.md)
* [redis面试题](17 Redis/redis面试题.md)

## 18 HTML
* [18.1 html入门](18 HTML/18.1 html入门.md)

## 19 CSS
* [19.1 列表、div、span](19 CSS/19.1 列表、div、span.md)
* [19.2 整体感知、常见属性、选择器](19 CSS/19.2 整体感知、常见属性、选择器.md)
* [19.3 css性质、盒模型、标准文档流、浮动](19 CSS/19.3 css性质、盒模型、标准文档流、浮动.md)
* [19.4 行高和字号、超链接美化、background](19 CSS/19.4 行高和字号、超链接美化、background.md)
* [19.5 相对定位、绝对定位、固定定位、z-index](19 CSS/19.5 相对定位、绝对定位、固定定位、z-index.md)

## 20 jenkins
* [20.1 jenkins的安装配置](20 jenkins/20.1 jenkins的安装配置.md)
* [20.2 Jenkins Job迁移](20 jenkins/20.2 Jenkins Job迁移.md)
* [Jenkins常见问题](20 jenkins/jenkins常见问题.md)
* [Jenkins关闭和重启的实现方式](20 jenkins/Jenkins关闭和重启的实现方式.md)
* [使用Jenkins Pipeline自动化构建发布](20 jenkins/使用Jenkins Pipeline自动化构建发布.md)

## 21 vim
* [vim设置参数以方便YAML语句录入](21 vim/vim设置参数以方便YAML语句录入.md)

## 22 网络
* [TCP协议三次握手四次挥手](22 网络/TCP协议三次握手四次挥手.md)
* [ip地址](22 网络/ip地址.md)

## 23 未分类
* [DEV SIT UAT PET SIM PRD PROD常见环境英文缩写含义](23 未分类/DEV SIT UAT PET SIM PRD PROD常见环境英文缩写含义.md)
* [调优](23 未分类/调优.md)

## 24 常见问题
* [centos时区](24 常见问题/centos时区.md)
* [curl https报错](24 常见问题/curl https报错.md)
* [du-df磁盘使用不一致](24 常见问题/du-df磁盘使用不一致.md)
* [linux下增加交换分区](24 常见问题/linux下增加交换分区.md)
* [mysql最大连接数](24 常见问题/mysql最大连接数.md)

## 25 openldap
* [Centos7 搭建openldap](25 openldap/Centos7 搭建openldap.md)
* [phpldapadmin操作指导](25 openldap/phpldapadmin操作指导.md)

## 26 gitlab
* [gitlab备份迁移升级&集成openldap](26 gitlab/gitlab备份迁移升级&集成openldap.md)

## 27 监控体系
* [聊头监控体系](27 监控体系/聊头监控体系.md)

