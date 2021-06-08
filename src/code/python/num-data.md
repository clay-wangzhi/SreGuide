---
category: Python
---

# 2.3.1 数值型

* int、float、complex、bool  都是class，1、5.0、2+3j 都是对象即实例
* int：python3 的 int 就是长整型，且没有大小限制，受限于内存区域的大小
* float：由整数部分和小数部分组成。支持十进制和科学计数法表示。C 的双精度型实现
* complex：有实数和虚数部分组成，实数和虚数部分都是浮点数，3+4.2J
* bool：int 的子类，仅有2个实例 True、False 对应1和0，可以和整数直接运算

## 整数

math模块的 floor()、ceil() 函数；内建函数 int()、round()；运算符 //

```python
# 整除
print(3//2, 5//2, 7//2)
print(-3//2, -5//2, -7//2)
print(7//2, 7//-2, -7//2, -(7//2))
# int
print('int ------------')
print(int(1.4), int(1.5), int(1.6))
print(int(-1.4), int(-1.5), int(-1.6))
# ceil floor
print('ceil floor ------------')
import math
print(math.floor(2.5), math.floor(-2.5))
print(math.ceil(2.5), math.ceil(-2.5))
# round
print('round ------------')
print(round(1.4), round(-1.4), round(-1.6), round(1.6))
print(round(2.4), round(-2.4), round(2.6), round(2.6))
print('round .5 ---------')
print(round(0.5), round(1.5), round(2.5), round(3.5))
print(round(-0.5), round(-1.5), round(-2.5), round(-3.5))
```

* round() 四舍六入五取偶
* math.floor()  向下取整
* math.ceil()向上取整
* int() 取整数部分
* // 整除且向下取整

## 常用数值处理函数

* min()、max()
* pow(x,y) 等于 x\**y
* math.sqrt() 等于 x ** 0.5
* 进制函数，返回值是字符串
  * bin()、oct()、hex()
* math模块
  * math.pi π
  * math.e 自如常数
  * math模块中还有对数函数、三角函数等

## 随机数

random模块

* randint(a, b) 返回[a, b]之间的整数
* randrange ([start,] stop [,step]) 从指定范围内，按指定基数递增的集合中获取一个随机数，基数缺省值为1。 random.randrange(1,7,2)
* choice(seq) 从非空序列的元素中随机挑选一个元素，比如random.choice(range(10))，从0到9中
  随机挑选一个整数。random.choice([1,3,5,7])
* 3.6开始提供choices，一次从样本中随机选择几个，可重复选择，可以指定权重
* random.shuffle(list) ->None 就地打乱列表元素
* sample(population, k) 从样本空间或总体（序列或者集合类型）中随机取出k个不同的元素，返回
  一个新的列表
  * random.sample(['a', 'b', 'c', 'd'], 2)
  * random.sample(['a', 'a'], 2) 
  * 每次从样本空间采样，在这一次中不可以重复抽取同一个元素

```python
import random
for i in range(10):
    print(random.randint(1, 5))
print('-' * 30)

for i in range(10):
	print(random.randrange(1, 5))
print('-' * 30)

x = [1, 2, 3, 4, 5]
for i in range(10):
	print(random.choice(x))
print('-' * 30)

# 观察下面的0和1的比例
for i in range(10):
	print(random.choices([0, 1], k=6))
print('-' * 30)

for i in range(10):
	print(random.choices([0, 1], [10, 1], k=6)) # 10比1权重
print('-' * 30)

x = [1, 2, 3, 4, 5]
# 采样
for i in range(5):
	print(random.sample(x, 5)) # k能不能是6, 不能
```
