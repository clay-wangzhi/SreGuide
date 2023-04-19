---
category: Redis
---

# 服务器端和客户端命令

## 服务器端

服务器端的命令为redis-server
可以使⽤help查看帮助⽂档
```
redis-server --help
```
推荐使⽤服务的⽅式管理redis服务
启动
```
sudo service redis start
```
停⽌
```
sudo service redis stop
```
重启 
```
sudo service redis restart
```
个人习惯
```
ps -aux|grep redis //查看redis服务器进程
sudo kill -9 pid //杀死redis服务器
sudo redis-server /etc/redis/redis.conf //指定加载的配置文件
```
## 客户端
客户端的命令为redis-cli
可以使⽤help查看帮助⽂档
```
redis-cli --help
```
连接redis
```
redis-cli
```
运⾏测试命令
```
ping //返回PONG
```
切换数据库
数据库没有名称，默认有16个，通过0-15来标识，连接redis默认选择第一个数据库

```
select n
```
