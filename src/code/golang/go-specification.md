---
category: Golang
---

# Go中的命名规范

> 转载自：[Go中的命名规范](https://www.cnblogs.com/rickiyang/p/11074174.html)

## 1.命名规范

### 1.1 Go是一门区分大小写的语言。

命名规则涉及变量、常量、全局函数、结构、接口、方法等的命名。 Go语言从语法层面进行了以下限定：任何需要对外暴露的名字必须以大写字母开头，不需要对外暴露的则应该以小写字母开头。

1. 当命名（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Analysize，那么使用这种形式的标识符的对象就**可以被外部包的代码所使用**（客户端程序需要先导入这个包），这被称为导出（像面向对象语言中的 public）；
2. **命名如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的**（像面向对象语言中的 private ）

### 1.2 包名称

保持package的名字和目录保持一致，尽量采取有意义的包名，简短，有意义，尽量和标准库不要冲突。包名应该为**小写**单词，不要使用下划线或者混合大小写。

```go
package domain
package main
```

### 1.3 文件命名

尽量采取有意义的文件名，简短，有意义，应该为**小写**单词，使用**下划线**分隔各个单词。

```go
approve_service.go
```

### 1.4 结构体命名

- 采用驼峰命名法，首字母根据访问控制大写或者小写

- struct 申明和初始化格式采用多行，例如下面：

  ```go
  type MainConfig struct {
      Port string `json:"port"`
      Address string `json:"address"`
  }
  config := MainConfig{"1234", "123.221.134"}
  ```

### 1.5 接口命名

- 命名规则基本和上面的结构体类型

- 单个函数的结构名以 “er” 作为后缀，例如 Reader , Writer 。

  ```go
  type Reader interface {
          Read(p []byte) (n int, err error)
  }
  ```

### 1.6 变量命名

和结构体类似，变量名称一般遵循驼峰法，首字母根据访问控制原则大写或者小写，但遇到特有名词时，需要遵循以下规则：

- 如果变量为私有，且特有名词为首个单词，则使用小写，如 appService
- 若变量类型为 bool 类型，则名称应以 Has, Is, Can 或 Allow 开头

```go
var isExist bool
var hasConflict bool
var canManage bool
var allowGitHook bool
```

### 1.7常量命名

常量均需使用全部大写字母组成，并使用下划线分词

```
const APP_URL = "https://www.baidu.com"
```

如果是枚举类型的常量，需要先创建相应类型：

```
type Scheme string

const (
    HTTP  Scheme = "http"
    HTTPS Scheme = "https"
)
```

## 2. 错误处理

- 错误处理的原则就是不能丢弃任何有返回err的调用，不要使用 _ 丢弃，必须全部处理。接收到错误，要么返回err，或者使用log记录下来
- 尽早return：一旦有错误发生，马上返回
- 尽量不要使用panic，除非你知道你在做什么
- 错误描述如果是英文必须为小写，不需要标点结尾
- 采用独立的错误流进行处理

```go
// 错误写法
if err != nil {
    // error handling
} else {
    // normal code
}

// 正确写法
if err != nil {
    // error handling
    return // or continue, etc.
}
// normal code
```

## 3. 单元测试

单元测试文件名命名规范为 example_test.go 测试用例的函数名称必须以 Test 开头，例如：TestExample 每个重要的函数都要首先编写测试用例，测试用例和正规代码一起提交方便进行回归测试 。