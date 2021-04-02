## playbook的语法：YAML

ansible的playbook采用yaml语法，它以非常简洁的方式实现了json格式的事件描述。

yaml之于json就像markdown之于html一样，极度简化了json的书写。

YAML文件后缀通常为.yaml或.yml。

YAML在不少工具里都使用，学习它是"一次学习、终生受益"的，所以很有必要把yaml的语法格式做个梳理，系统性地去学一学。

**YAML的基本语法规则如下：**

(1).使用缩进表示层级关系

(2).缩进时不允许使用Tab键，只允许使用空格

(3).缩进的空格数目不重要，只要相同层级的元素左对齐即可

(4).yaml文件以"---"作为文档的开始，以表明这是一个yaml文件

> 即使没有使用`---`开头，也不会有什么影响

(5).# 表示注释，从这个字符一直到行尾，都会被解析器忽略

(6).字符串不用加引号，但在可能产生歧义时，需加引号(单双引号皆可)，比如引用变量时

(7).布尔值非常灵活，不分区大小写的true/false、yes/no、on/off、y/n、0和1都允许

**YAML支持三种数据结构：**

(1).对象：key/value格式，也称为哈希结构、字典结构或关联数组

(2).数组：也称为列表

(3).标量(scalars)：单个值

可以去找一些在线YAML转换JSON网站，比如 [http://yaml-online-parser.appspot.com](http://yaml-online-parser.appspot.com/) 通过在线转换可以验证或查看自己所写的YAML是否出错以及哪里出错。

### 对象

一组键值对，使用冒号隔开key和value。注意，冒号后必须至少一个空格。

```
name: clay
```

等价于json：

```
{
	"name": "clay"
}
```

### 数组

```
---
- Shell
- Perl
- Python
```

等价于json：

```
["Shell","Perl","Python"]
```

也可以使用行内数组(内联语法)的写法：

```
---
["Shell","Perl","Python"]
```

再例如：

```
---
- lang1: Shell
- lang2: Perl
- lang3: Python
```

等价于json：

```
[
    {"lang1": "Shell"},
    {"lang2": "Perl"},
    {"lang3": "Python"}
]
```

将对象和数组混合：

```
---
languages:
  - Shell
  - Perl
  - Python
```

等价于json：

```
{
	"languages": ["Shell","Perl","Python"]
}
```

### 字典

```
---
person1:
  name: clay
  age: 18
  gender: male

person2:
  name: wangchi
  age: 19
  gender: female
```

等价于json：

```
{
  "person2": {
    "gender": "female",
    "age": 19,
    "name": "clay"
  },
  "person1": {
    "gender": "male",
    "age": 18,
    "name": "wangchi"
  }
}
```

也可以使用行内对象的写法：

```
---
person1: {name: clay, age: 18, gender: male}
```

### 复合结构

```
---
- person1:
  name: clay
  age: 18
  langs:
    - Perl
    - Ruby
    - Shell

- person2:
  name: xiaofanggao
  age: 19
  langs:
    - Python
    - Javascript
```

等价于json：

```
[
    {
        "langs": [
        "Perl",
        "Ruby",
        "Shell"
        ],
        "person1": null,
        "age": 18,
        "name": "clay"
    },
    {
        "person2": null,
        "age": 19,
        "langs": [
        "Python",
        "Javascript"
        ],
        "name": "xiaofanggao"
    }
]
```

### 字符串续行

字符串可以写成多行，从第二行开始，必须至少有一个单空格缩进。换行符会被转为空格。

```
str: hello
  world
  hello world
```

等价于json：

```
{
  "str": "hello world hello world"
}
```

也可以使用 > 换行，它类似于上面的多层缩进写法。此外，还可以使用|在换行时保留换行符。

```
that: >
  Foo
  Bar
this: |
  Foo
  Bar
```

等价于json：

```
{'that': 'Foo Bar', 'this': 'Foo\nBar\n'}
```

> 参考链接：
>
> https://blog.51cto.com/cloumn/blog/1543