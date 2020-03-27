## 变量优先级

这些变量定义的方法，它们的优先级如下：

1. 在命令行中定义的变量（即用`-e`或`--extra-vars`定义的变量）；
2. 在Inventory中定义的连接变量（比如：ansible_ssh_user）;
3. 大多数的其他变量（命令行转换、play中的变量、included的变量、role中的变量等）；
4. 在Inventory中定义的其他变量；
5. Facts变量；
6. “Role”默认变量，这个是默认的值，很容易丧失优先权。