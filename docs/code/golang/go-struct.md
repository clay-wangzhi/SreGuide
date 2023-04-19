---
category: Golang
---

# Go Struct超详细讲解

> 转载自：[Go Struct超详细讲解 | 程序员读书](https://juejin.cn/post/6844903814168838151)

Go语言中提供了对struct的支持,`struct`,中文翻译称为`结构体`，与数组一样，属于复合类型，并非引用类型。

Go语言的struct，与C语言中的struct或其他面向对象编程语言中的类(class)类似，可以定义字段(属性)和方法，但也有很不同的地方，需要深入学习，才能区分他们之间的区别。

> 注意复合类型与引用类型之间的区别，这应该也是值传递和引用传递的区别吧。

## 定义

使用struct关键字可以定义一个结构体,结构体中的成员，称为结构体的字段或属性。

```
type Member struct {
    id          int
    name, email string
    gender, age int
}

```

上面的代码中，我们定义了一个包含5个字段的结构体，可以看到，相同类型`name`和`email`、`gender`和`age`在同一行中定义，但比较好的编程习惯是每一行只定义一个字段,如：

```
type Member struct {
    id     int
    name   string
    email  string
    gender int
    age    int
}

```

当然，结构体也可以不包含任何字段，称为`空结构体`，struct{}表示一个空的结构体，注意，直接定义一个空的结构体并没有意义，但在并发编程中，channel之间的通讯，可以使用一个struct{}作为信号量。

```
ch := make(chan struct{})
ch <- struct{}{}

```

## 使用

上面的例子中，我们定义了Member结构体类型，接下就可以这个自定义的类型创建变量了。

> 直接定义变量，这个使用方式并没有为字段赋初始值，因此所有字段都会被自动赋予自已类型的零值，比如`name`的值为空字符串""，age的值为0。

```
var m1 Member//所有字段均为空值

```

> 使用字面量创建变量，这种使用方式，可以在大括号中为结构体的成员赋初始值，有两种赋初始值的方式，一种是按字段在结构体中的顺序赋值，下面代码中`m2`就是使用这种方式，这种方式要求所有的字段都必须赋值，因此如果字段太多，每个字段都要赋值，会很繁琐，另一种则使用字段名为指定字段赋值，如下面代码中变量`m3`的创建，使用这种方式，对于其他没有指定的字段，则使用该字段类型的零值作为初始化值。

```
var m2 = Member{1,"小明","xiaoming@163.com",1,18} // 简短变量声明方式：m2 := Member{1,"小明","xiaoming@163.com",1,18}
var m3 = Member{id:2,"name":"小红"}// 简短变量声明方式：m3 := Member{id:2,"name":"小红"}

```

### 访问字段

通过变量名，使用逗号`(.)`，可以访问结构体类型中的字段，或为字段赋值，也可以对字段进行取址(&)操作。

```
fmt.Println(m2.name)//输出：小明
m3.name = "小花"
fmt.Println(m3.name)//输出：小花

age := &m3.age
*age = 20
fmt.Println(m3.age)//20

```

### 指针结构体

结构体与数组一样，都是值传递，比如当把数组或结构体作为实参传给函数的形参时，会复制一个副本，所以为了提高性能，一般不会把数组直接传递给函数，而是使用切片(引用类型)代替，而把结构体传给函数时，可以使用`指针结构体`。

指针结构体，即一个指向结构体的指针,声明结构体变量时，在结构体类型前加*号，便声明一个指向结构体的指针，如：

> 注意，指针类型为引用类型，声明结构体指针时，如果未初始化，则初始值为nil,只有初始化后，才能访问字段或为字段赋值。

```
var m1 *Member
m1.name = "小明"//错误用法，未初始化,m1为nil

m1 = &Member{}
m1.name = "小明"//初始化后，结构体指针指向某个结构体地址，才能访问字段，为字段赋值。 


```

另外，使用Go内置new()函数，可以分配内存来初始化结构休，并返回分配的内存指针，因为已经初始化了，所以可以直接访问字段。

```
var m2 = new(Member)
m2.name = "小红"

```

我们知道，如果将结构体转给函数，只是复制结构体的副本，如果在函数内修改结构体字段值，外面的结构体并不会受影响，而如果将结构体指针传给函数，则在函数中使用指针对结构体所做的修改，都会影响到指针指向的结构体。

```
func main() {
    m1 := Member{}
    m2 := new(Member)
    Change(m1,m2)
    fmt.Println(m1,m2)
}

func Change(m1 Member,m2 *Member){
    m1.Name = "小明"
    m2.Name = "小红"
}

```

## 可见性

上面的例子中，我们定义结构体字段名首字母是小写的，这意味着这些字段在`包外不可见`,因而无法在其他包中被访问，只允许包内访问。

下面的例子中，我们将Member声明在member包中，而后在main包中创建一个变量，但由于结构体的字段包外不可见，因此无法为字段赋初始值，无法按字段还是按索引赋值，都会引发panic错误。

```
package member
type Member struct {
    id     int
    name   string
    email  string
    gender int
    age    int
}

package main

fun main(){
    var m = member.Member{1,"小明","xiaoming@163.com",1,18}//会引发panic错误
}

```

因此，如果想在一个包中访问另一个包中结构体的字段，则必须是大写字母开头的变量，即可导出的变量，如：

```
type Member struct {
    Id     int
    Name   string
    Email  string
    Gender int
    Age    int
}

```

## Tags

在定义结构体字段时，除字段名称和数据类型外，还可以使用反引号为结构体字段声明元信息，这种元信息称为Tag，用于编译阶段关联到字段当中,如我们将上面例子中的结构体修改为：

```
type Member struct {
    Id     int    `json:"id,-"`
    Name   string `json:"name"`
    Email  string `json:"email"`
    Gender int    `json:"gender,"`
    Age    int    `json:"age"`
}

```

上面例子演示的是使用encoding/json包编码或解码结构体时使用的Tag信息。

Tag由反引号括起来的一系列用空格分隔的key:"value"键值对组成，如：

```
Id int `json:"id" gorm:"AUTO_INCREMENT"`

```

## 特性

下面总结几点结构体的相关特性：

### 值传递

结构体与数组一样，是复合类型，无论是作为实参传递给函数时，还是赋值给其他变量，都是值传递，即复一个副本。

### 没有继承

Go语言是支持面向对象编程的，但却没有继承的概念，在结构体中，可以通过组合其他结构体来构建更复杂的结构体。

### 结构体不能包含自己

一个结构体，并没有包含自身，比如Member中的字段不能是Member类型，但却可能是*Member。

## 方法

在Go语言中，将函数绑定到具体的类型中，则称该函数是该类型的方法，其定义的方式是在func与函数名称之间加上具体类型变量，这个类型变量称为`方法接收器`，如：

> 注意，并不是只有结构体才能绑定方法，任何类型都可以绑定方法，只是我们这里介绍将方法绑定到结构体中。

```
func setName(m Member,name string){//普通函数
    m.Name = name
}

func (m Member)setName(name string){//绑定到Member结构体的方法
    m.Name = name
}

```

从上面的例子中，我们可以看出，通过`方法接收器`可以访问结构体的字段，这类似其他编程语言中的this关键词，但在Go语言中，只是一个变量名而已，我们可以任意命名`方法接收器`。

调用结构体的方法，与调用字段一样：

```
m := Member{}
m.setName("小明")
fmt.Println(m.Name)//输出为空

```

上面的代码中，我们会很奇怪，不是调用setName()方法设置了字段Name的值了吗？为什么还是输出为空呢？

这是因为，结构体是值传递，当我们调用setName时，方法接收器接收到是只是结构体变量的一个副本，通过副本对值进行修复，并不会影响调用者，因此，我们可以将方法接收器定义为指针变量，就可达到修改结构体的目的了。

```
func (m *Member)setName(name string){/将Member改为*Member
    m.Name = name
}

m := Member{}
m.setName("小明")
fmt.Println(m.Name)//小明

```

方法和字段一样，如果首字母为小写，则只允许在包内可见，在其他包中是无法访问的，因此，如果要在其他包中访问`setName`,则应该将方法名改为`SetName`。

## 组合

我们知道，结构体中并没有继承的概念，其实，在Go语言中也没有继承的概念，Go语言的编程哲学里，推荐使用`组合`的方式来达到代码复用效果。

### 什么是组合

组合，可以理解为定义一个结构体中，其字段可以是其他的结构体，这样，不同的结构体就可以共用相同的字段。

> 注意，在记得我们前面提过的，结构体不能包含自身，但可能包含指向自身的结构体指针。

例如，我们定义了一个名为Animal表示动物，如果我们想定义一个结构体表示猫，如：

```
type Animal struct {
    Name   string  //名称
    Color  string  //颜色
    Height float32 //身高
    Weight float32 //体重
    Age    int     //年龄
}
//奔跑
func (a Animal)Run() {
    fmt.Println(a.Name + "is running")
}
//吃东西
func (a Animal)Eat() {
    fmt.Println(a.Name + "is eating")
}

type Cat struct {
    a Animal
}

func main() {
    var c = Cat{
	    a: Animal{
            Name:   "猫猫",
            Color:  "橙色",
            Weight: 10,
            Height: 30,
            Age:    5,
        },
    }
    fmt.Println(c.a.Name)
    c.a.Run()
}


```

可以看到，我们定义Cat结构体时，可以把Animal结构体作为Cat的字段。

### 匿名字段

上面的例子，我们看到，把Animal结构体作为Cat的字段时，其变量名为a，所以我们访问Animal的方法时，语法为`c.a.Run()`,这种通过叶子属性访问某个字段类型所带的方法和字段用法非常繁琐。

Go语言支持直接将类型作为结构体的字段，而不需要取变量名，这种字段叫`匿名字段`，如：

```
type Lion struct {
	Animal //匿名字段
}

func main(){
    var lion = Lion{
        Animal{
            Name:  "小狮子",
            Color: "灰色",
        },
    }
    lion.Run()
    fmt.Println(lion.Name)
}

```

通过上面例子，可以看到，通过匿名字段组合其他类型，而后访问匿名字段类型所带的方法和字段时，不需要使用叶子属性，非常方便。

## 小结

在Go语言编程中，结构体大概算是使用得最多的数据类型了，通过定义不同字段和方法的结构体，抽象组合不同的结构体，这大概便是Go语言中对面向对象编程了。