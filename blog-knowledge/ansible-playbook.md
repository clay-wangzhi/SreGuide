---
title: palybook快速入门
tag: Ansible
abbrlink: 8dba6a75
date: 2017-09-12 21:00:00
---

Ansible使用YAML语法描述配置文件，YAML语法以简洁明了、结构清晰著称。

Ansible的任务配置文件被称为Playbook，我们可以称之为“剧本”。每一个剧本（Playbook）中都包含一系列的任务，这每个任务在Ansible中又被称为“喜剧（play）”。一个剧本（Playbook）中包含多出戏剧（play），这很容易理解。

<!--more-->

## Playbook语法简介

Playbook采用YAML语法编写，YAML不是一种标记语言。该语言在被开发时，它的意思其实是：Yet Another Markup Language（仍是一种标记语言）。结合Ansible中要用到的YAML语法点，我们对YAML语法简洁地总结如下。

### 多行缩进

数据结构可以用类似大纲的缩排方式呈现，结构通过缩进来表示，连续的项目通过减号“-”来表示，map结构里面的key/value对用冒号“：”来分隔。格式如下代码所示：

house:

family:

name:  Doe

parents:

​    \- John

​    \- Jane

children:

​    \- Paul

​    \- mark

address:

number: 43

注意：

1）字符串不一定要用双引号标识；

2）在缩排中空白字符的数目并不重要，只要相同阶层的元素左侧对齐就可以了（不过不能使用Tab字符）；

3）允许在文件中加入选择性的空行，以增加可读性；

4）选择性的符号“...”可以用来表示档案结尾（在利用串流的通信中，这非常有用，可以在不关闭串流的情况下，发送结束信号）。

### 单行缩写





















