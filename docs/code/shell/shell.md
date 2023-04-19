# Shell

 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/shell.png" style="zoom:50%;" />

## 青铜

### 什么时候使用shell

* 自动化常用命令
* 执行系统管理和故障排除
* 创建简单的应用程序
* 处理文本或文件



### 什么是 Sha-bang

脚本起始行 Sha-bang：系统这个脚本文件需要使用指定的命令解释器来执行`#!/bin/bash` 或 `#!/usr/bin/env bash`



### shell 脚本如何调用

* bash 或 sh  脚本名称
* 给脚本加执行权限 `chmod +x 脚本名称`，然后`./脚本名称` 执行



### shell 是什么语言类型

shell是解释型、弱类型、面向过程的语言
过程式：以指令为中心，数据服务于指令，shell脚本程序提供了编程能力，解释执行



## 白银

### if 判断

#### 文件测试

```bash
-e：检测文件是否存在
-f：检测是否为常规文件，非目录等
-s：文件大小不为0
-d：文件是一个目录
-l：文件是一个符号链接
-r：该文件对执行测试的用户可读
-w：该文件对执行测试的用户可写
-x：该文件可被执行测试的用户所执行
```



#### 整数比较

```bash
-eq：等于
-ne：不等于
-gt：大于
-ge：大于等于
-lt：小于
-le：小于等于
```



#### 字符串比较

```bash
=：等于
==：和等号同义
!=：不等于
-z：字符串为空，即字符串长度为0
-n：字符串非空（null）
```



#### 复合比较

```bash
-a：逻辑与
-o：逻辑或
```



### 变量

#### 变量赋值

> :warning:  用 `=` 机型变量赋值，注意在其前后没有空白符



#### 内建变量

```bash
$IFS：内部字段分隔符，默认为空白符
$PS2：次要提示符，当需要额外输入时出现的提示符，默认显示为 >
$PS3：三级提示符，显示在 select 循环中
$PS4：四级提示符，当使用 -x [verbose trace] 选项 调用脚本时显示的提示符。默认显示为 +
$PWD：工作目录
```



#### 位置参数

```bash
$0：代表脚本名称
$1：代表第一个参数
$2：代表第二个参数
依次类推
$9 之后的参数必须被包含在大括号之中：${10}，${11}
$#：命令行参数或是位置参数的个数
$*：将所有的位置参数整合，视作一个单词，该参数必须是被引用的状态，"$*"
$@：该参数等同于 $*，但其中每个参数都是独立的被引用的字符串，该参数必须是被引用的状态，"$@"
```



#### 特殊参数

```bash
$?：命令、函数或脚本自身的退出状态
		0：表示执行成功
		非0：错误退出
$$：脚本自身的进程 ID
$!：运行在后台的最后一个任务的进程 ID
$_：该变量被设置为上一个执行命令的最后一个参数
```



### 逻辑处理

#### if

```bash
if [ condition ]; then
  command(s)...
elif [ condition ]; then
  command(s)...
else:
  command(s)...
fi
```



#### for

```bash
for arg in [list]; do
  command(s)...
done
```



> 循环控制
> 	break [N]：提前结束第N层整个循环，最内层为第1层
> 	continue [N]：提前结束第N层的本轮循环，而直接进入下一轮判断；最内层为第1层



#### while

```bash
while [ condition ]; do
  command(s)...
done
```



#### util

```bash
util [ condition-is-true ]; do
  command(s)...
done
```



#### case

```bash
case "$variable" in
  "$condition1" )
    command...
  ;;
  "$condition2" )
    command...
  ;;
esac
```



#### select

```bash
select variable [in list]
do
 command...
 break
done
```



#### 函数

```bash
# 方式一
function function_name {
  command...
}

# 方式二
function_name() { 
  command...
}

# 方式三
function function_name() { 
  command...
}
```



## 黄金

### 字符串处理

#### ${}

```bash
字符串处理
	字符串长度：${#string}
	起始部分字符串匹配长度
		expr match "$string" '$substring'
		expr "$string" : '$substring'
	索引：expr index $string $substring
	截取字符串
		${string:position}：在 $string 中截取自 $position 起的字符串
		${string:position:length}：在 $string 中截取自 $position 起，长度为 $length 的字符串
	删除子串
		${string#substring}：删除从 $string 起始部分起，匹配到的最短的 $substring
		${string##substring}：删除从 $string 起始部分起，匹配到的最长的 $substring
	子串替换
		${string/substring/replacement}：替换匹配到的第一个 $substring 为 $replacement
		${string//substring/replacement}：替换匹配到的所有 $substring 为 $replacement
		${string/#substring/replacement}：替换 $string 中最前端匹配到的 $substring 为 $replacement
		${string/%substring/replacement}：替换 $string 中最末端匹配到的 $substring 为 $replacement
```



#### awk



#### sed



### 命令替换

```bash
# 方式一 推荐
$(command)

# 方式二
`command`
```



### 嵌入文档

```bash
# <<- 会抑制tab 但空格不会影响
cat > $Newfile <<-EOF
	strings...
EOF
```



### I/O 重定向

```bash
特定的文件描述符
	0：stdin（标准输入，键盘）
	1：stdout（标准输出， 屏幕）
	2：stderr（标准错误，屏幕上输出的错误信息）
	3-9：附件的文件描述符
```

```bash
常见重定向例子
	清空了文件
		:> filename
		> filename
	重定向标准输出或标准错误到一个文件
		COMMAND_OUTPUT >> filename
		1>filename：以覆盖的方式将 标准输出 重定向到文件 "filename"
		1>>filename： 以追加的方式将 标准输出 重定向到文件 "filename"
		2>filename：以覆盖的方式将 标准错误 重定向到文件 "filename"
		2>>filename：以追加的方式将 标准错误 重定向到文件 "filename"
		&>filename：以覆盖的方式将 标准错误 和 标准输出 同时重定向到文件 "filename"
		>filename 2>&1 ：以覆盖的方式将 标准错误 和 标准输出 同时重定向到文件 "filename"
在 bash 4 中才有这个新功能
		M>N（M如果不设置默认为 1）：文件描述符 "M" 重定向到文件 "N"
		M>&N（M如果不设置默认为 1）： 文件描述符 "M" 重定向到文件描述符 "N"
```

```bash
使用 exec
	exec < filename：重定向了 标准输入 到一个文件，所有 标准输入 都来自该文件而不是默认来源(通常是键盘输入)
	exec >filename：重定向 标准输出 到指定文件
	exec N > filename：影响整个脚本或当前 shell
	常用例子：在脚本中将标准输出和标准错误重定向到指定文件
exec 1>"$LOGFILE"
exec 2>&1
```



### 选项

```bash
# 方式一
set 命令
	启用某个选项
		set -o option-name
		set -option-abbrev
	禁用某个选项
		set +o option-name
		set +option-abbrev
	常用选项
    当脚本发生第一个错误时, 就退出脚本
      set -e
      set -o errexit	
		如果尝试使用了未定义的变量, 就会输出一个错误消息, 然后强制退出
      set -u
      set -o nounset
# 方式二
在脚本头部, #!的后边直接指定选项
例如：#!/bin/bash -x

# 方式三
从命令行中打开脚本的选项
例如：bash -x script-name # 打印完整命令
     bash -n script-name # 做语法检查
```