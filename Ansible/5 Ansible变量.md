## 变量优先级

这些变量定义的方法，它们的优先级如下：

1. 在命令行中定义的变量（即用`-e`或`--extra-vars`定义的变量）；
2. 在Inventory中定义的连接变量（比如：ansible_ssh_user）;
3. 大多数的其他变量（命令行转换、play中的变量、included的变量、role中的变量等）；
4. 在Inventory中定义的其他变量；
5. Facts变量；
6. “Role”默认变量，这个是默认的值，很容易丧失优先权。

## 变量作用域

Ansible中变量主要有五种作用域概念：

(1).全局作用域：Ansible配置文件、环境变量、命令行选项-e,--extra-vars设置的变量都是全局变量

(2).Play作用域：整个Play中都有效的变量，vars_files、vars_prompt、play级别的vars以及Role的变量，它们都是play级别的变量

(3).主机变量：绑定在各主机上的变量，各种方式定义的inventory变量、Facts信息变量(这个就划分在这吧)、set_fact、register、include_vars都是主机变量

(4).任务变量：只在当前任务中生效的变量，task级别的vars定义的变量属于任务变量

(5).block变量：只在当前block内生效，block级别的vars定义的变量属于block变量

最后还有预定义特殊变量未分类，这些变量由Ansible自身内部维护，有些是全局变量，有些是play变量，有些是主机变量，所以不方便对它们分类。