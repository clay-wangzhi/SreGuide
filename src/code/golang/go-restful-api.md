---
category: Golang
---

# Go语言：RESTful API 服务，急速入门

> 转载自：[Go语言：RESTful API 服务，急速入门](https://segmentfault.com/a/1190000040414777)

## RESTful API

EST即表述性状态传递（英文：Representational State Transfer，简称REST），它是一种针对网络应用的设计和开发方式，可以降低开发的复杂性，提高系统的可伸缩性。(引用自百度百科)。

### HTTP Method

1. 早在 HTTP 0.9 版本中，只有一个GET方法，该方法是一个幂等方法，用于获取服务器上的资源；
2. HTTP 1.0 版本中又增加了HEAD和POST方法，其中常用的是 POST 方法，一般用于给服务端提交一个资源。
3. HTTP1.1 版本的时，又增加了几个方法。总共加起来有9个。
   它们的作用：
4. **GET** 方法可请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据。
5. **HEAD** 方法用于请求一个与 GET 请求的响应相同的响应，但没有响应体。
6. **POST** 方法用于将实体提交到指定的资源，通常导致服务器上的状态变化或副作用。
7. **PUT** 方法用于请求有效载荷替换目标资源的所有当前表示。
8. **DELETE** 方法用于删除指定的资源。
9. **CONNECT** 方法用于建立一个到由目标资源标识的服务器的隧道。
10. **OPTIONS** 方法用于描述目标资源的通信选项。
11. **TRACE** 方法用于沿着到目标资源的路径执行一个消息环回测试。
12. **PATCH** 方法用于对资源应用部分修改。

在 RESTful API 中，使用的主要是以下五种 HTTP 方法：

- GET，表示读取服务器上的资源；
- POST，表示在服务器上创建资源；
- PUT，表示更新或者替换服务器上的资源；
- DELETE，表示删除服务器上的资源；
- PATCH，表示更新 / 修改资源的一部分。

## 一个简单的 RESTful API

Golang 提供了内置的 net/http 包，用来处理这些 HTTP 请求，可以比较方便地开发一个 HTTP 服务。

示例：

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/users",handleUsers)
    http.ListenAndServe(":8080", nil)
}
func handleUsers(w http.ResponseWriter, r *http.Request){
    fmt.Fprintln(w,"ID:1,Name:张三")
    fmt.Fprintln(w,"ID:2,Name:李四")
    fmt.Fprintln(w,"ID:3,Name:王五")
}
```

运行程序后，在浏览器中输入 [http://localhost:8080/users](https://link.segmentfault.com/?enc=eXUFTZJjnrB5MYLXlKNrIw%3D%3D.pFy3cR5mNYn%2F17MXueahLVublC%2FDtJpTCFnLUkUpSL8%3D), 就可以看到如下内容信息：

```go
ID:1,Name:张三
ID:2,Name:李四
ID:3,Name:王五
```

示例中，不光可以用 GET 能进行访问，POST、PUT等也可以，接下来对示例进行改进，使它使它符合 RESTful API 的规范：

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/users",handleUsers)
    http.ListenAndServe(":8080", nil)
}
func handleUsers(w http.ResponseWriter, r *http.Request){
    switch r.Method {
    case "GET":
        w.WriteHeader(http.StatusOK)
        fmt.Fprintln(w,"ID:1,Name:张三")
        fmt.Fprintln(w,"ID:2,Name:李四")
        fmt.Fprintln(w,"ID:3,Name:王五")
    default:
        w.WriteHeader(http.StatusNotFound)
        fmt.Fprintln(w,"not found")
    }
}
```

我们在 handleUsers 函数中增加了只在使用 GET 方法时，才获得所有用户的信息，其他情况返回 not found。

## RESTful JSON API

在项目接口中，数据大多数情况下会使用 json 格式来传输，再次对示例进行改造，使它返回 json 格式的内容：

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/users",handleUsers)
    http.ListenAndServe(":8080", nil)
}
//数据源，模拟MySQL中的数据
var users = []User{
    {ID: 1,Name: "张三"},
    {ID: 2,Name: "李四"},
    {ID: 3,Name: "王五"},
}
func handleUsers(w http.ResponseWriter, r *http.Request){
    switch r.Method {
    case "GET":
        users,err:=json.Marshal(users)
        if err!=nil {
            w.WriteHeader(http.StatusInternalServerError)
            fmt.Fprint(w,"{\"message\": \""+err.Error()+"\"}")
        }else {
            w.WriteHeader(http.StatusOK)
            w.Write(users)
        }
    default:
        w.WriteHeader(http.StatusNotFound)
        fmt.Fprint(w,"{\"message\": \"not found\"}")
    }
}
//用户
type User struct {
    ID int
    Name string
}
```

运行结果：

```go
[{"ID":1,"Name":"张三"},{"ID":2,"Name":"李四"},{"ID":3,"Name":"王五"}]
```

这次，我们新建了一个 User 结构体，使用 users 这个切片存储所有的用户，然后在 handleUsers 函数中把它转化为一个 JSON 数组返回。

## Gin 框架

上面我们使用的是 Go 语言自带的 net/http 包，写法比较简单，但是它也有许多不足之处：

- 不能单独地对请求方法（POST、GET 等）注册特定的处理函数；
- 不支持 Path 变量参数；
- 不能自动对 Path 进行校准；
- 性能一般，扩展性不足；
- ……

基于以上的不足，我们可以使用其它的 Golang Web 框架，例如今天要介绍的 Gin 框架。

### 引入 Gin 框架

Gin 框架是一个在 Github 上开源的 Web 框架，它封装了很多 Web 开发需要的功能，而且性能也非常高，可以很容易地写出 RESTful API。
Gin 框架其实是一个模块，采用 Go Mod 的方法引入即可：

1. 下载安装 Gin 框架
   `go get -u github.com/gin-gonic/gin`
2. 在 Go 语言代码中导入使用
   `import "github.com/gin-gonic/gin"`

### 使用 Gin 框架

我们使用 Gin 框架来重写上面的示例：

```go
package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()
    r.GET("/users", listUser)
    r.Run(":8080")
}
func listUser(c *gin.Context) {
    c.JSON(200, users)
}

//数据源，模拟MySQL中的数据
var users = []User{
    {ID: 1, Name: "张三"},
    {ID: 2, Name: "李四"},
    {ID: 3, Name: "王五"},
}

//用户
type User struct {
    ID   int
    Name string
}
```

对比 net/http 包，Gin 框架的代码非常简单，通过 GET 方法就可以创建一个只处理 HTTP GET 方法的服务，且使用 c.JSON 方法便可输出 JSON 格式的数据。
通过 Run 方法启动 HTTP 服务，监听 8080 端口。运行这个 Gin 示例，在浏览器中输入 [http://localhost:8080/users](https://link.segmentfault.com/?enc=BzzzanQIusJ9k3IwfDNCYg%3D%3D.4mlkPSmFvjiJFfnjmQKIHT67VPZjCK1RtPDM3cqzBLI%3D)，可以看到和通过 net/http 包实现的效果是一样的。

### 获取一个用户

获取一个用户的信息，我们使用 GET 方法，设计的 URL 格式为 ：
`http://localhost:8080/users/1`
url中的数字1为用户id，我们通过id来获取一个指定的用户：

```go
func main() {
   //省略其它没有改动过的代码
   r.GET("/users/:id", getUser)
}
func getUser(c *gin.Context) {
   id := c.Param("id")
   var user User
   found := false
   //类似于数据库的SQL查询
   for _, u := range users {
      if strings.EqualFold(id, strconv.Itoa(u.ID)) {
         user = u
         found = true
         break
      }
   }
   if found {
      c.JSON(200, user)
   } else {
      c.JSON(404, gin.H{
         "message": "用户不存在",
      })
   }
}
```

在 Gin 框架中，路径中使用冒号表示 Path 路径参数，比如示例中的 :id，然后通过 c.Param("id") 获取需要查询用户的 ID 值。
运行示例，访问地址 `http://localhost:8080/users/1` ，便可以获取 ID 为1 的用户：
`{"ID":1,"Name":"张三"}`

### 新增一个用户

新增一个用户的 URL 格式为：
`http://localhost:8080/users`
向这个 URL 发送数据，就可以新增一个用户.

```go
func main() {
   //省略其它没有改动过的代码
   r.POST("/users", createUser)
}
func createUser(c *gin.Context) {
   name := c.DefaultPostForm("name", "")
   if name != "" {
      u := User{ID: len(users) + 1, Name: name}
      users = append(users, u)
      c.JSON(http.StatusCreated,u)
   } else {
      c.JSON(http.StatusOK, gin.H{
         "message": "请输入用户名称",
      })
   }
}
```

新增用户的逻辑是获取客户端上传的 name 值，然后生成一个 User 用户，最后把它存储到 users 集合中。
我们使用 curl 命令发送一个新增用户请求：

```go
curl -X POST -d 'name=无尘' http://localhost:8080/users
{"ID":4,"Name":"无尘"}
```

可以看到，新增用户成功，且返回了新增的用户及分配的 ID。