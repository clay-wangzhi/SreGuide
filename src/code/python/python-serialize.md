---
category: Python
---
# 7.2 序列化和反序列化

## csv

### csv 文件简介

参看 RFC 4180
http://www.ietf.org/rfc/rfc4180.txt

逗号分隔值Comma-Separated Values。
CSV 是一个被行分隔符、列分隔符划分成行和列的文本文件。
CSV 不指定字符编码。

行分隔符为\r\n，最后一行可以没有换行符
列分隔符常为逗号或者制表符。
每一行称为一条记录record

字段可以使用双引号括起来，也可以不使用。如果字段中出现了双引号、逗号、换行符必须使用双引号
括起来。如果字段的值是双引号，使用两个双引号表示一个转义。

表头可选，和字段列对齐就行了。

### csv 模块

`reader(csvfile, dialect='excel', **fmtparams)`
返回reader对象，是一个行**迭代器**。

默认使用excel方言，如下：

* delimiter 列分隔符,逗号
* lineterminator 行分隔符\r\n
* quotechar 字段的引用符号，缺省为 " 双引号
* 双引号的处理
  * doublequote 双引号的处理，默认为True。如果碰到数据中有双引号，而quotechar也是双引号，True则使用2个双引号表示，False表示使用转义字符将作为双引号的前缀
  * escapechar 一个转义字符，默认为None
  * writer = csv.writer(f, doublequote=False, escapechar='@') 遇到双引号，则必须提供转义字符
* quoting 指定双引号的规则
  * QUOTE_ALL 所有字段
  * QUOTE_MINIMAL特殊字符字段，Excel方言使用该规则
  * QUOTE_NONNUMERIC非数字字段
  * QUOTE_NONE都不使用引号。

`writer(csvfile, dialect='excel', **fmtparams)`
返回DictWriter的实例。
主要方法有writerow、writerows。

`writerow(iterable)`

```python
import csv
rows = [
    ('id', 'name', 'age', 'comment'),
    [1, 'tom', 20, 'tom'],
    (2, 'jerry', 18, 'jerry'),
    (3, 'justin', 22, 'just\t"in'),
    "abcdefgh",
    ((1,), 2, [3])
]

# newline=''，表示写入时，不要做\n的替换，那么输出就是\r\n
with open('o:/test.csv', 'w+', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(rows[0])
    writer.writerows(rows[1:])
    
# newline=''，表示读取时，也不做\n的替换
with open('o:/test.csv', encoding='utf-8', newline='') as f:
    reader = csv.reader(f) # 行迭代器
    print(next(reader))
    print(next(reader))
    for line in reader:
        print(line)
```

## ini 文件处理

略

## 序列化和反序列化

### 为什么要序列化

内存中的字典、列表、集合以及各种对象，如何保存到一个文件中？

如果是自己定义的类的实例，如何保存到一个文件中？

如何从文件中读取数据，并让它们在内存中再次恢复成自己对应的类的实例？

要设计一套协议，按照某种规则，把内存中数据保存到文件中。文件是一个字节序列，所以必须把数据转换成字节序列，输出到文件。这就是序列化。

反之，从文件的字节序列恢复到内存并且还是原来的类型，就是反序列化。

### 定义

serialization 序列化
将内存中对象存储下来，把它变成一个个字节。-> 二进制

deserialization 反序列化
将文件的一个个字节恢复成内存中对象。<- 二进制

序列化保存到文件就是持久化。
可以将数据序列化后持久化，或者网络传输；也可以将从文件中或者网络接收到的字节序列反序列化。

Python 提供了pickle 库。

### pickle

Python中的序列化、反序列化模块。

| 函数  | 说明                               |
| ----- | ---------------------------------- |
| dumps | 对象序列化为bytes对象              |
| dump  | 对象序列化到文件对象，就是存入文件 |
| loads | 从bytes对象反序列化                |
| load  | 对象反序列化，从文件读取数据       |

```python
import pickle

filename = 'o:/ser'

# 序列化后看到什么
i = 99
c = 'c'
l = list('123')
d = {'a':127, 'b':'abc', 'c':[1,2,3]}

# 序列化
with open(filename, 'wb') as f:
    pickle.dump(i, f)
    pickle.dump(c, f)
    pickle.dump(l, f)
    pickle.dump(d, f)

# 反序列化
with open(filename, 'rb') as f:
    print(f.read(), f.seek(0))
    for i in range(4):
        x = pickle.load(f)
        print(x, type(x))
```

### 序列化应用

一般来说，本地序列化的情况，应用较少。大多数场景都应用在网络传输中。
将数据序列化后通过网络传输到远程节点，远程服务器上的服务将接收到的数据反序列化后，就可以使用了。
但是，要注意一点，远程接收端，反序列化时必须有对应的数据类型，否则就会报错。尤其是自定义
类，必须远程得有一致的定义。

现在，大多数项目，都不是单机的，也不是单服务的，需要多个程序之间配合。需要通过网络将数据传送到其他节点上去，这就需要大量的序列化、反序列化过程。

但是，问题是，Python程序之间可以都用pickle解决序列化、反序列化，如果是跨平台、跨语言、跨协议pickle就不太适合了，就需要公共的协议。例如XML、Json、Protocol Buffer、msgpack等。

不同的协议，效率不同、学习曲线不同，适用不同场景，要根据不同的情况分析选型。

## Json

SON(JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式。它基于 ECMAScript
1999年ES3 的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。
http://json.org/
https://www.json.org/json-zh.html

### Json的数据类型

**值**

双引号引起来的字符串、数值、true和false、null、对象、数组，这些都是值

**字符串**

由双引号包围起来的任意字符的组合，可以有转义字符。

**数值**
有正负，有整数、浮点数。

**对象**
无序的键值对的集合
格式: {key1:value1, ... ,keyn:valulen}
key必须是一个字符串，需要双引号包围这个字符串。
value可以是任意合法的值。

**数组**

有序的值的集合
格式：[val1,...,valn]

实例

```
{
  "person": [
    {
      "name": "tom",
      "age": 18
    },
    {
      "name": "jerry",
      "age": 16
    }
  ],
  "total": 2
}
```

### json 模块

**python 与json**

Python支持少量内建数据类型到Json类型的转换。

| Python 类型 | Json 类型 |
| ----------- | --------- |
| True        | true      |
| False       | false     |
| None        | null      |
| str         | string    |
| int         | integer   |
| float       | float     |
| list        | array     |
| dict        | object    |

**常用方法**

| Python 类型 | Json 类型                 |
| ----------- | ------------------------- |
| dumps       | json 编码                 |
| dump        | json 编码并存入文件       |
| loads       | json 解码                 |
| load        | json 解码，从文件读取数据 |

```python
import json

d = {'name':'Tom', 'age':20, 'interest':('music', 'movie'), 'class':['python']}
j = json.dumps(d)
print(j, type(j)) # 请注意引号、括号的变化，注意数据类型的变化

d1 = json.loads(j)
print(d1)
print(id(d), id(d1))
```

一般 json 编码的数据很少落地，数据都是通过网络传输。传输的时候，要考虑压缩它。

本质上来说它就是个文本，就是个字符串。

json 很简单，几乎编程语言都支持 json，所以应用范围十分广泛。