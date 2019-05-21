
安装命令

go get github.com/gomodule/redigo/redis

安装完成后，回到家目录创建test.go,把下面代码复制到test.go里面，编译执行test.go，之后在redis中查找到键c1值为hello，说明安装成功

package main

import ( "github.com/gomodule/redigo/redis")

func main(){

 conn,\_ := redis.Dial("tcp", ":6379")

 defer conn.Close()

 conn.Do("set", "c1", "hello")

}
