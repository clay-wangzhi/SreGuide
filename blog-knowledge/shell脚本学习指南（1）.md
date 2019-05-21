---
title: Shell脚本学习指南读后笔记
tag: Shell
---

这两天在看Shell脚本学习指南这本书，我把本书中有一些参考性的例子，写到这篇博客了，以便后续查阅！

<!--more-->

### 例1

```bash
$ cat > nusers				#建立文件，使用cat复制终端的输入
who | wc -l					#程序的内容
^D						    #Ctrl-D表示end-of-file
$ chmod +x nusers			 #让文件拥有执行的权限
$ ./nusers					#执行测试
	6					    #输出我们要的结果
```

### 例2

```bash
#!/bin/bash
#单词出现频率过滤器

tr -cs A-Za-z\' '\n' |					#将非字母字符置换成换行符号
	tr A-Z a-z |					   #所有大写字母转换为小写
		sort |						   #由小而大排序单词
			uniq -c |				   #去除重复，并显示其计数
				sort -k1,1nr -k2 |		#计数由大到小排序后，再按照单词由小到大排序
					sed ${1:-25}q		#显示前n行（默认为25）  
```







