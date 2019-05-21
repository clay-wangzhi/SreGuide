---
title: awk（3）-快速入门（下）
tag: awk
categories: Linux
date: 2018-07-27 18:26:00
copyright: true
---

Awk 是一种使用方便且表现力很强的编程语言, 它可以应用在多种不同的计算与数据处理任务中.

<!--more-->

## 流程控制语句

Awk 提供了用于决策的 if-else 语句, 以及循环语句, 所有的这些都来源于 C 语言. 它们只能用
在动作 (Action) 里.

### If-Else  语句

下面这个程序计算每小时工资多于 $6.00 的雇员的总报酬与平均报酬. 在计算平均数时, 它用到了
if 语句, 避免用 0 作除数.
$2 > 6 { n = n + 1; pay = pay + $2 * $3 }
END { if (n > 0)
print n, "employees, total pay is", pay,
"average pay is", pay/n
else
print "no employees are paid more than $6/hour"
}
emp.data 的输出是:
no employees are paid more than $6/hour

在 if-else 语句里, if 后面的条件被求值, 如果条件为真, 第一个 print 语句执行, 否则是第二个.

print 语句被执行. 注意到, 在逗号后面断行, 我们可以将一个长语句延续到下一行.

### While 语句

一个 while 含有一个条件判断与一个循环体. 当条件为真时, 循环体执行. 下面这个程序展示
了一笔钱在一个特定的利率下, 其价值如何随着投资时间的增长而增加, 价值计算的公式是 value =
amount(1 + rate) years .

\#interest1 - compute compound interest

\#input: amount rate years

\#output: compounded value at the end of each year

{ i = 1
while (i <= $3) {
printf("\t%.2f\n", $1 * (1 + $2) ^ i)
i = i + 1
}
}
while 后面被括号包围起来的表达式是条件判断; 循环体是跟在条件判断后面的, 被花括号包围起来的
的两条语句. printf 格式控制字符串里的 \t 表示一个制表符; ^ 是指数运算符. 从井号 (#) 开始, 直到
行末的文本是 释 注释 (comment), 注释会被 awk 忽略, 但有助于其他人读懂程序.
读者可以键入三个数, 看一下不同的本金, 利率和时间会产生怎样的结果. 举个例子, 这个交易展示
了 $1000 在 6% 与 12% 的利率下, 在 5 年的时间里如何升值:
$ awk -f interest1
1000 .06 5
1060.00
1123.60
1191.02
1262.48
1338.23
1000 .12 5
1120.00
1254.40
1404.93
1573.52
1762.34

### For 语句

大多数循环都包括初始化, 测试, 增值, 而 for 语句将这三者压缩成一行. 这里是前一个计算投资回
报的程序, 不过这次用 for 循环:

\# interest2 - compute compound interest

\# input: amount rate years

\#output: compounded value at the end of each year

{ for (i = 1; i <= $3; i = i + 1)
printf("\t%.2f\n", \$1 * (1 + $2) ^ i)
}

## 数组

Awk 提供了数组, 用来存储一组相关的值. 虽然数组给予了 awk 非常可观的力量, 但是我们在这里只展示一个简单的例子. 下面这个程序按行逆序显示输入数据. 第一个动作将输入行放入数组 line的下一个元素中; 也就是说, 第一行放入 line[1], 第二行放入 line[2], 依次类推. END 动作用一个while 循环, 从数组的最后一个元素开始打印, 一直打印到第一个元素为止:

# reverse - print input in reverse order by line
{ line[NR] = $0 } # remember each input line
END { i = NR # print lines in reverse order
while (i > 0) {
print line[i]
i = i - 1
}
}
用 emp.data 作输入, 输出是
Susie 4.25 18
Mary 5.50 22
Mark 5.00 20
Kathy 4.00 10
Dan 3.75 0
Beth 4.00 0

这是用 for 循环实现的等价的程序: 17

\# reverse - print input in reverse order by line

{ line[NR] = $0 } # remember each input line
END { for (i = NR; i > 0; i = i - 1)

print line[i]
}

## 实用“一行”手册

虽然 awk 可以写出非常复杂的程序, 但是许多实用的程序并不比我们目前为止看到的复杂多少. 这
里有一些小程序集合, 对读者应该会有一些参考价值. 大多数是我们已经讨论过的程序的变形.

1. 输入行的总行数
  END { print NR }

2. 打印第 10 行
  NR == 10

3. 打印每一个输入行的最后一个字段
  { print $NF }

4. 打印最后一行的最后一个字段
  { field = $NF }
  END { print field }

5. 打印字段数多于 4 个的输入行
  NF > 4

6. 打印最后一个字段值大于 4 的输入行
  $NF > 4

7.  打印所有输入行的字段数的总和
  { nf = nf + NF }
  END { print nf }

8. 打印包含 Beth 的行的数量

  /Beth/ { nlines = nlines + 1 }
  END { print nlines }

9. 打印具有最大值的第一个字段, 以及包含它的行 (假设 $1 总是 正的) 

   $1 > max { max = $1; maxline = $0 }
   END { print max, maxline }


10. 打印至少包含一个字段的行
  NF > 0
11. 打印长度超过 80 个字符的行
   length($0) > 80
12. 在每一行的前面加上它的字段数
   { print NF, $0 }
13. 打印每一行的第 1 与第 2 个字段, 但顺序相反
   { print \$2, $1 }
14. 交换每一行的第 1 与第 2 个字段, 并打印该行
   { temp = \$1; \$1 = \$2; $2 = temp; print }
15. 将每一行的第一个字段用行号代替
   { $1 = NR; print }
16. 打印删除了第 2 个字段后的行
   { $2 = ""; print }
17. 将每一行的字段按逆序打印
   { for (i = NF; i > 0; i = i - 1) printf("%s ", $i)
   printf("\n")
   }
18. 打印每一行的所有字段值之和
   { sum = 0
   for (i = 1; i <= NF; i = i + 1) sum = sum + $i
   print sum
   }
19. 将所有行的所有字段值累加起来
   { for (i = 1; i <= NF; i = i + 1) sum = sum + $i }
   END { print sum }
20. 将每一行的每一个字段用它的绝对值替换
   { for (i = 1; i <= NF; i = i + 1) if (\$i < 0) \$i = -$i
   print
   }





注：The AWK Programming Language学习笔记







