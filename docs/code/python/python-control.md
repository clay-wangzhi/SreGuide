---
category: Python
---

# 2.2 程序控制

* 顺序
  * 按照先后顺序一条条执行
    例如，先洗手，再吃饭，再洗碗
* 分支
  * 根据不同的情况判断，条件满足执行某条件下的语句
    例如，先洗手，如果饭没有做好，玩游戏；如果饭做好了，就吃饭；如果饭都没有做，叫外卖
* 循环
  * 条件满足就反复执行，不满足就不执行或不再执行
    例如，先洗手，看饭好了没有，没有好，一会来看一次是否好了，一会儿来看一次，直到饭
    好了，才可是吃饭。这里循环的条件是饭没有好，饭没有好，就循环的来看饭好了没有

## 单分支

```python
if condition:
    代码块
    

if 1<2: # if True:
    print('1 less than 2') # 代码块
```

* condition 必须是一个 bool 类型，这个地方有一个隐式转换 bool(condition) ，相当于 False 等价
* if 语句这行最后，会有一个冒号，冒号之后如果有多条语句的代码块，需要另起一行，并缩进
  * if、for、def、class等关键字后面都可以跟代码块
  * 这些关键后面，如果有一条语句，也可以跟在这一行后面。例如 `if 1>2: pass`

## 多分支

```python
if condition1:
    代码块1
elif condition2:
    代码块2
elif condition3:
    代码块3
......
else:
    代码块
    

   
a = 5
if a<0:
    print('negative')
elif a==0: # 相当于 a >= 0
    print('zero')
else: # 相当于 a > 0
    print('positive')
```

* 多分支结构，只要有一个分支被执行，其他分支都不会被执行
* 前一个条件被测试过，下一个条件相当于隐含着这个条件

```python
# 嵌套
a = 5
if a == 0:
    print('zero')
else:
    if a < 0:
    print('negative')
else:
    print('positive')
```

## while 循环

while循环多用于死循环，或者不明确知道循环次数的场景

```python
while cond:
    block

    
while True: # 死循环
    pass

a = 10
while a: # 条件满足则进入循环
    print(a)
    a -= 1
```

## for 语句

```python
for element in iterable:
    block
   
for i in range(0, 10):
    print(i)
```

| 内建函数 | 函数签名                                    | 说明                                                         |
| -------- | ------------------------------------------- | ------------------------------------------------------------ |
| range    | range(stop)<br />range(start, stop, [step]) | 返回惰性的对象<br/>可以生成一个序列，遍历它就可以得到这个序列的一个个元素<br/>前包后不包 |

## continue

跳过当前循环的当次循环，继续下一次循环

```python
for i in range(0, 10):
    if i % 2 != 0: continue
    print(i)
```

## break

结束当前循环

```python
# 计算1000以内的被7整除的前20个正整数
count = 0
for i in range(7, 1000, 7):
	print(i)
	count += 1
	if count >= 20:
		print(count)
		break
```

总结

* continue 和 break 是循环的控制语句，只影响当前循环，包括 while、for 循环
* 如果循环嵌套， continue 和 break 也只影响语句所在的那一层循环
* continue 和 break 只影响循环，所以`if cond: break`不是跳出 if，而是终止 if 外的 break 所在的循环
* 分支和循环结构可以嵌套使用，可以嵌套多层

## else 字句

如果循环正常结束，else子句会被执行，即使是可迭代对象没有什么元素可迭代

```python
for i in range(0): # 可迭代对象没有迭代
    pass
else:
    print('ok')
    
for i in range(0, 10):
    break
else:
    print('ok')
    
for i in range(0, 10):
    continue
else:
    print('ok')
```

有上例可知，一般情况下，循环正常执行，只要当前循环不是被break打断的，就可以执行else子句。
哪怕是range(0)也可以执行else子句。

## 三元表达式

在Python中，也有类似C语言的三目运算符构成的表达式，但python中的三元表达式不支持复杂的语句

```python
真值表达式 if 条件表达式 else 假值表达式
```

三元表达式比较适合简化非常简单的if-else语句

```python
# 判断用户的输入的值，如果为空，输出"empty"，否则输出该值

value = input('>>>')
if value:
    print(value)
else:
    print('empty')
   
value = input('>>>')
print(value if value else 'empty')
```

