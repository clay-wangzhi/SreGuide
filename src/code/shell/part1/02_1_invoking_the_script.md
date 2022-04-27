---
author: LinuxStory
category: Linux
tag:
  - Bash
---
# 2.1 调用一个脚本

写完一个脚本以后，你可以通过`sh scriptname`或`bash scriptname`来调用它（不推荐使用`sh <scriptname`调用脚本，因为这会禁用脚本从标准输入（stdin）读入数据）。更方便的方式是使用`chmod`命令使脚本可以被直接执行。

执行命令：

`chmod 555 scriptname`（给予所有用户读取/执行的权限）

或

`chmod +rx scriptname`（给予所有用户读取/执行的权限）

`chmod u+rx scriptname`（仅给予脚本所有者读取/执行的权限）

当脚本的权限被设置好后，你就可以直接使用`./scriptname`[^3]进行调用测试了。如果脚本文件以sha-bang开头，那么它将自动调用指定的命令解释器运行脚本。

完成调试与测试后，你可能会将脚本文件移至`/usr/local/bin`（使用root权限）中，使脚本可以被所有用户调用。这时你可以直接在命令行中输入`scriptname [ENTER]`执行脚本。
