# 第一部分 初见shell

Shell是一种命令解释器，它不仅分离了用户层与操作系统内核，更是一门强大的编程语言。我们称为shell编写的程序为脚本（script）。脚本是一种易于使用的工具，它能够将系统调用、工具软件、实用程序（utility）和已编译的二进制文件联系在一起构建程序。实际上，shell脚本可以调用所有的UNIX命令、实用程序以及工具软件。如果你觉得这还不够，使用像`test`命令和循环结构这样的shell内建命令能够让脚本更加灵活强大。Shell脚本特别适合完成系统管理任务和那些不需要复杂结构性语言实现的重复工作。

## 1 为什么使用shell编程

> 没有任何一种程序设计语言是完美的，甚至没有一个最好的语言。只有在特定环境下适合的语言。
>
> —— Herbert Mayer

## 2 和Sha-Bang（#!）一起出发

一个最简单的脚本其实就是将一连串系统命令存储在一个文件中。最起码，它能帮你省下重复输入这一连串命令的功夫。

样例：清理`/var/log`目录下的日志文件

```bash
#!/bin/bash
# Cleanup, version 3

LOG_DIR=/var/log
ROOT_UID=0     # UID为0的用户才拥有root权限。
LINES=50       # 默认保存messages日志文件行数。
E_XCD=86       # 无法切换工作目录的错误码。
E_NOTROOT=87   # 非root权限用户执行的错误码。
E_WRONGARGS=85 # 非数值格式的错误吗。


# 请使用root权限运行。
if [ "$UID" -ne "$ROOT_UID" ];then
  echo "Must be root to run this script."
  exit $E_NOTROOT
fi

case "$1" in
  "") lines=$LINES ;;
  *[!0-9]*) echo "Usage: bash `basename $0` lines-to-cleanup"; exit $E_WRONGARGS ;;
  *) lines=$1 ;;
esac

cd $LOG_DIR || {
  echo "Cannot change to necessary directory." >&2
  exit $E_XCD
}

tail -n $lines messages > mesg.temp # 保存messages日志文件最后一部分
mv mesg.temp messages               # 替换系统日志文件以达到清理目的

cat /dev/null > wtmp  #  ': > wtmp' 与 '> wtmp' 有同样的效果
echo "Log files cleaned up."
#  注意在/var/log目录下的其他日志文件不会被这个脚本清除

exit 0
#  返回0表示脚本运行成功
```

脚本起始行*sha-bang*（#!）告诉系统这个脚本文件需要使用指定的命令解释器来执行。

### 2.1 调用一个脚本

写完一个脚本以后，你可以通过`sh scriptname`或`bash scriptname`来调用它（不推荐使用`sh <scriptname`调用脚本，因为这会禁用脚本从标准输入（stdin）读入数据）。更方便的方式是使用`chmod`命令使脚本可以被直接执行。

执行命令：

`chmod +x scriptname`（给予所有用户读取/执行的权限）

当脚本的权限被设置好后，你就可以直接使用`./scriptname`进行调用测试了。如果脚本文件以sha-bang开头，那么它将自动调用指定的命令解释器运行脚本。

完成调试与测试后，你可能会将脚本文件移至`/usr/local/bin`（使用root权限）中，使脚本可以被所有用户调用。这时你可以直接在命令行中输入`scriptname [ENTER]`执行脚本。