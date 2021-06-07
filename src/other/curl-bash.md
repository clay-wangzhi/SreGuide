---
tag: 奇技淫巧
date: 2020-07-27
---

# curl方式执行shell脚本时如何传参

有时候shell脚本可以放在http页面上，不用download，可以直接执行。

通常我们可以用curl的方式执行http页面上的shell脚本。 一般方式是：

```
curl ftp://192.168.166.21:/system_optimize.sh | bash
```

这样脚本就可以在本地机器上执行了。

但是需要传入参数的脚本。我们可以用下面的方式传入shell参数

- -s方式

```
curl -s ftp://192.168.166.21:/system_optimize.sh | bash -s arg1 arg2
```

- < 方式

```
bash <(curl -s ftp://192.168.166.21:/system_optimize.sh) arg1 arg2
```

> 注意 <( 之间不要有空格！！！

- 若参数中带有`-`，则可使用长选项`--`解决

```
curl -s ftp://192.168.166.21:/system_optimize.sh | bash -s -- arg1 arg2
```

- 若参数为”-p arg -d arg”,则可使用以下命令执行

```
curl -s ftp://192.168.166.21:/system_optimize.sh | bash -s -- -p arg1 -d arg2
```

- 不止是curl的输入，其他方式的输入也满足。可以通过以下例子深入理解下

```
echo 'i=1; for a in $@; do echo "$i = $a"; i=$((i+1)); done' | bash -s -- -a1 -a2 -
```

##  Bash选项

Bash选项

| 缩写           | 名称                                                         | 作用                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| -B             | brace expansion                                              | 开启[大括号展开]()(默认 setting = on)                        |
| +B             | brace expansion                                              | 关闭大括号展开                                               |
| -C             | noclobber                                                    | 防止重定向时覆盖文件(可能会被>\|覆盖)                        |
| -D             | (none)                                                       | 列出用双引号引用起来的, 以$为前缀的字符串, 但是不执行脚本中的命令 |
| -a             | all export                                                   | export(导出)所有定义过的变量                                 |
| -b             | notify                                                       | 当后台运行的作业终止时, 给出通知(脚本中并不常见)             |
| -c ...         | (none)                                                       | 从...中读取命令                                              |
| checkjobs      | (none)                                                       | 通知有活跃shell[任务](http://tldp.org/LDP/abs/html/x9644.html#JOBSREF)的用户退出。[Bash 4](http://tldp.org/LDP/abs/html/bashver4.html#BASH4REF)版本中引入，仍然处于"实验"阶段. 用法:shopt -s checkjobs .(注意：可能会hang！ |
| -e             | errexit                                                      | 当脚本发生第一个错误时, 就退出脚本, 换种说法就是, 当一个命令返回非零值时, 就退出脚本(除了[until](http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF)或[while loops](http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF), [if-tests](http://tldp.org/LDP/abs/html/testconstructs.html#TESTCONSTRUCTS1), [list constructs](http://tldp.org/LDP/abs/html/list-cons.html#LCONS1)) |
| -f             | noglob                                                       | 禁用文件名扩展(就是禁用globbing)                             |
| globstar       | [globbing star-match](http://tldp.org/LDP/abs/html/bashver4.html#GLOBSTARREF) | 打开[globbling](http://tldp.org/LDP/abs/html/globbingref.html)操作符(Bash [4+](http://tldp.org/LDP/abs/html/bashver4.html#BASH4REF)). 使用方法：shopt -s globstar |
| -i             | interactive                                                  | 让脚本以交互模式运行                                         |
| -n             | noexec                                                       | 从脚本中读取命令, 但是不执行它们(做语法检查)                 |
| -o Option-Name | (none)                                                       | 调用Option-Name选项                                          |
| -o posix       | POSIX                                                        | 修改Bash或被调用脚本的行为, 使其符合[POSIX](http://tldp.org/LDP/abs/html/sha-bang.html#POSIX2REF)标准. |
| -o pipefail    | pipe failure                                                 | 创建一个管道去返回最后一条命令的[退出状态码](http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF)，这个返回值是一个非0的返回值 |
| -p             | privileged                                                   | 以"suid"身份来运行脚本(小心!)                                |
| -r             | restricted                                                   | 以受限模式来运行脚本(参考 [22](http://tldp.org/LDP/abs/html/restricted-sh.html)). |
| -s             | stdin                                                        | 从stdin 中读取命令                                           |
| -t             | (none)                                                       | 执行完第一个命令之后, 就退出                                 |
| -u             | nounset                                                      | 如果尝试使用了未定义的变量, 就会输出一个错误消息, 然后强制退出 |
| -v             | verbose                                                      | 在执行每个命令之前, 把每个命令打印到stdout上                 |
| -x             | xtrace                                                       | 与-v选项类似, 但是会打印完整命令                             |
| -              | (none)                                                       | 选项结束标志. 后面的参数为[位置参数](http://tldp.org/LDP/abs/html/internalvariables.html#POSPARAMREF). |
| --             | (none)                                                       | unset(释放)位置参数. 如果指定了参数列表(-- arg1 arg2), 那么位置 参数将会依次设置到参数列表中. |

重点是后面的"-"和"--"，理解一下