
安装：

go get github.com/gitstliu/go-redis-cluster

示例代码

func (this\*ClusterController)Get(){

cluster, \_ := redis.NewCluster(

 &redis.Options{

  StartNodes: \[\]string{"192.168.110.37:7000", "192.168.110.37:7001", "192.168.110.37:7002","192.168.110.38:7003","192.168.110.38:7004","192.168.110.38:7005"},

  ConnTimeout: 50 \* time.Millisecond,

  ReadTimeout: 50 \* time.Millisecond,

  WriteTimeout: 50 \* time.Millisecond,

  KeepAlive: 16,

  AliveTime: 60 \* time.Second,

 })

cluster.Do("set","name","itheima")

name,\_ := redis.String(cluster.Do("get","name"))

beego.Info(name)

this.Ctx.WriteString("集群创建成功")

}