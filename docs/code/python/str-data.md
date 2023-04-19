---
category: Python
---

# 2.3.2 字符串 str

* 一个个字符组成的有序的序列，是字符的集合
* 使用单引号、双引号、三引号引住的字符序列
* 字符串是不可变对象，是字面常量

Python3 起，字符串都是 Unicode 类型

## 初始化

```
s1 = 'string'
s2 = "string2"
s3 = '''this's a "String" '''
s4 = 'hello \n magedu.com'
s5 = r"hello \n magedu.com"
s6 = 'c:\windows\nt'
s7 = R"c:\windows\nt"
s8 = 'c:\windows\\nt'
name = 'tom'; age = 20 # python代码写在一行，使用分号隔开，不推荐
s9 = f'{name}, {age}' # 3.6支持f前缀
sql = """select * from user where name='tom' """
```

r前缀：所有字符都是本来的意思，没有转义
f前缀：3.6开始，使用变量插值

## 索引

字符串是序列，支持下标访问。但不可变，不可以修改元素。

```python
sql = "select * from user where name='tom'"
print(sql[4]) # 字符串'c'
sql[4] = 'o' # 不可以
```

## 连接

\+加号

* 将2个字符串连接起来
* 返回一个新的字符串

join方法

* sep.join(iterable)
* 使用指定字符串作为分隔符，将可迭代对象中字符串使用这个分隔符拼接起来
* 可迭代对象必须是字符串
* 返回一个新的字符串

```python
x = 'ab'
x = x + 'cd'
print(','.join(x))
print('\t'.join(x))
print('\n'.join(x))
print('-'.join(range(5))) # 可以吗 不可以，可迭代对象必须是字符串
```

## 字符查找

find、rfind、index、rindex

后续补充

## 分割

* split(sep=None, maxsplit=-1) -> list of strings
  * 从左至右
  * sep 指定分割字符串，缺省的情况下空白字符串作为分隔符
  * maxsplit 指定分割的次数，-1 表示遍历整个字符串
  * 立即返回列表
* rsplit(sep=None, maxsplit=-1) -> list of strings
  * 从右向左开始切，但是输出的字符串字符不会反
  * sep 指定分割字符串，缺省的情况下空白字符串作为分隔符
  * maxsplit 指定分割的次数，-1 表示遍历整个字符串
  * 立即返回列表
* splitlines([keepends]) -> list of strings
  * 按照行来切分字符串
  * keepends 指的是是否保留行分隔符
  * 行分隔符包括\n、\r\n、\r等

```python
s = ','.join('abcd')
print(s.split(','))
print(s.split())
print(s.split(',', 2))  # ['a', 'b', 'c,d']

s1 = '\na b \tc\nd\n' # 注意下面3个切割的区别
print(s1.split())
print(s1.split(' '))
print(s1.split('\n'))
print(s1.split('b'))
print(s1.splitlines())
```

* partition(sep) -> (head, sep, tail)
  * 从左至右，遇到分隔符就把字符串分割成两部分，返回头、分隔符、尾三部分的三元组
  * 如果没有找到分隔符，就返回头、2个空元素的三元组
  * sep 分割字符串，必须指定
* rpartition(sep) -> (head, sep, tail)
  * 从右至左，遇到分隔符就把字符串分割成两部分，返回头、分隔符、尾三部分的三元组
  * 如果没有找到分隔符，就返回2个空元素和尾的三元组

```python
s = ','.join('abcd')
print(s.partition(','))
print(s.partition('.'))
print(s.rpartition(','))
print(s.rpartition('.'))
```

## 替换

* replace(old, new[, count]) -> str
  * 字符串中找到匹配替换为新子串，返回新字符串
  * count表示替换几次，不指定就是全部替换

```python
s = ','.join('abcd')
print(s.replace(',', ' '))
print(s.replace(',', ' ', 2))
s1 = 'www.baidu.edu'
print(s1.replace('w', 'a'))
print(s1.replace('ww', 'a'))
print(s1.replace('www', 'a'))
```

## 移除

* strip([chars]) -> str
  * 在字符串两端去除指定的字符集chars中的所有字符
  * 如果chars没有指定，去除两端的空白字符
* lstrip([chars]) -> str ，从左开始
* rstrip([chars]) -> str，从右开始

```python
s = '\t\r\na b c,d\ne\n\t'
print(s.strip())
print('-' * 30)
print(s.strip('\t\n'))
print('-' * 30)
print(s.strip('\t\ne\r'))
```

首尾判断

* endswith(suffix[, start[, end]]) -> bool
  * 在指定的区间[start, end)，字符串是否是suffix结尾
* startswith(prefix[, start[, end]]) -> bool
  * 在指定的区间[start, end)，字符串是否是prefix开头

```python
s = "www.baidu.edu"
print(s.startswith('ww'))
print(s.startswith('i', 6))
print(s.startswith('e', 9))
print(s.startswith('edu', 10))
print(s.endswith('edu'))
```

## 其他函数

* upper()大写
* lower()小写
* swapcase() 交换大小写
* isalnum() -> bool 是否是字母和数字组成
* isalpha() 是否是字母
* isdecimal() 是否只包含十进制数字
* isdigit() 是否全部数字(0~9)
* isidentifier() 是不是字母和下划线开头，其他都是字母、数字、下划线
* islower() 是否都是小写
* isupper() 是否全部大写
* isspace() 是否只包含空白字符

## 格式化

简单的使用+或者 join 也可以拼接字符串，但是需要先转换数据到字符串后才能拼接。

**C 风格 printf-style**

* 占位符：使用%和格式字符，例如%s、%d
* 修饰符：在占位符中还可以插入修饰符，例如%03d
* format % values
  * format 是格式字符串，values 是被格式的值
  * 格式字符串和被格式的值之间使用%
  * values只能是一个对象，可以是一个值，可以是一个元素个数和占位符数目相等的元组，也可以是一个字典

```python
print("I am %5d" % (20,))
print('I like %s.' % 'Python')
print("%3.2f%% 0x%x %#X" % (89.7654, 10, 256)) # 宽度为3，小数点后2位
print("I am %-5d" % (20,))
print("%(host)s.%(domain)s" % {'domain':'baidu.com', 'host':'www'}) # 靠名字对应
```

**format函数**

Python2.5 之后，字符串类型提供了 format 函数，功能更加强大，鼓励使用。
"{} {xxx}".format(*args, **kwargs) -> str

* args是可变的位置参数
* kwargs是可变关键字参数，写作a=100
* 使用花括号作为占位符
* {}表示按照顺序匹配位置参数，{n}表示取位置参数索引为n的值
* {xxx}表示在关键字参数中搜索名称一致的
* {{}} 表示打印花括号

```python
# 位置对应
print("{}:{}".format('127.0.0.1', 8080))
# 位置或关键字对应
print("{server} {1}:{0}".format(8080, '127.0.0.1', server='Web Server Info: '))
# 访问元素
print("{0[0]}.{0[1]}".format(('baidu', 'com')))
# 进制
print("{0:d} {0:b} {0:o} {0:x} {0:#X}".format(31))
```

```python
# 浮点数
print("{}".format(3**0.5)) # 1.7320508075688772
print("{:f}".format(3**0.5)) # 1.732051，精度默认6
print("{:10f}".format(3**0.5)) # 右对齐，宽度10
print("{:2}".format(102.231)) # 宽度为2数字
print("{:2}".format(1)) # 宽度为2数字
print("{:.2}".format(3**0.5)) # 1.7 2个数字
print("{:.2f}".format(3**0.5)) # 1.73 小数点后2位
print("{:3.2f}".format(3**0.5)) # 1.73 宽度为3，小数点后2位
print("{:20.3f}".format(0.2745)) # 0.275
print("{:3.3%}".format(1/3)) # 33.333%
# 注意宽度可以被撑破
```

```python
# 对齐
print("{}*{}={}".format(5, 6, 5*6))
print("{}*{}={:2}".format(5, 6, 5*6))
print("{1}*{0}={2:3}".format(5, 6, 5*6)) # 6*5= 30
print("{1}*{0}={2:0>3}".format(5, 6, 5*6))
print("{}*{}={:#<3}".format(4, 5, 20)) # 4*5=20#
print("{:#^7}".format('*' * 3)) # ##***##
```

