---
category: 监控
tags:
  - Zabbix
---

# 使用zabbix-agent2自定义插件获取https证书过期时间

> 转载自: [公众号运维开发故事 | wanger](https://mp.weixin.qq.com/s/Sw0WubPH7luEY_kaVsoPkg)

## 需求

对经常维护网站的人来说，要经常跟https的证书打交道。一般https证书的有效期是一年，证书一旦过期，公司的损失会非常大。去年网易邮箱因为https证书忘记续期，导致大量用户无法正常使用邮箱就是个典型案例。什么时候想起来才去手动查一下也不现实，最好的方法是把过期时间监控起来，距离一定期限自动发送通知。

可以使用Zabbix或者Prometheus的ssl_exporter来进行监控，在Zabbix4.4版本以前可以使用自定义脚本的方式，在Zabbix4.4之后出现了zabbix-agent2，除了官方自带的插件也可以通过自定义插件的方式来满足我们的监控需求。本文介绍如何使用zabbix-agent2自定义插件来实现获取https证书过期时间的需求。

## zabbix-agent2自定义https_expire插件

之前介绍过如何[使用自定义插件来实现对mqtt的监控](https://mp.weixin.qq.com/s?__biz=MzI3NTQ1ODEyMQ==&mid=2247489848&idx=2&sn=7be7f66ba2c4dcc1e9c2c410dffea6d1&scene=21#wechat_redirect)，只不过当时使用的Watcher接口来将新数据主动push给server端，这次将通过实现Exporter接口来采集数据，再次提供官方文档和Zabbix认证专家米宏翻译的[官方博文](https://mp.weixin.qq.com/s?__biz=MzI3NTQ1ODEyMQ==&mid=2247485564&idx=2&sn=e736e1c8f2dbb444bc0b9fbf786b75d5&scene=21#wechat_redirect)。

这里我再介绍一下自定义插件的一些标准规范 

１.　插件必须导入`zabbix.com/pkg/plugin`软件包。

```
import "zabbix.com/pkg/plugin"
```

2.　插件必须定义结构并嵌入该`plugin.Base`结构。

```
type Plugin struct {
    plugin.Base
}
var impl Plugin
```

 3.　一个插件必须实现一个或多个插件接口。

```
func (p *Plugin) Export(key string, params []string, ctx plugin.ContextProvider) (result interface{}, err error) {
    if len(params) > 0 {
        p.Debugf("received %d parameters while expected none", len(params))
        return nil, errors.New("Too many parameters")
    }
    return time.Now().Format(time.RFC3339)
}
```

4.　插件必须在初始化期间注册自己。

```
func init() {
    plugin.RegisterMetrics(&impl, "Time", "system.time", "Returns time string in RFC 3999 format.")
}
```

ssl_expire代码不多，插件由尼古拉·拖拉基斯基·王二编写，完整代码可以去github查看

```
func (p *Plugin) Configure(global *plugin.GlobalOptions, options interface{}) {
 if err = conf.Unmarshal(options, &p.options); err != nil {
  p.Errf("cannot unmarshal configuration options: %s", err)
 }

 if p.options.Timeout == 0 {
  p.options.Timeout = global.Timeout
 }
 p.client = newClient(p.options.Timeout)

}

func (p *Plugin) Validate(options interface{}) error {

 return conf.Unmarshal(options, &opts)
}

func checkParamnums(params []string) error {
 if len(params) > paramnums {
  err:=errors.New("Too many parameters.")
  return zbxerr.ErrorTooFewParameters.Wrap(err)
 } else if len(params) ==0 {
  err:=errors.New("Missing URL parameters.")
  return zbxerr.ErrorTooFewParameters.Wrap(err)
 }
 return nil
}

func checkParams(params []string) (string, error) {
 if strings.HasPrefix(params[0], "http://") {
  errorsting:=fmt.Sprintf("Target is using http scheme: %s", params[0])
  err:=errors.New(errorsting)
  return "",zbxerr.ErrorInvalidParams.Wrap(err)
 }

 if !strings.HasPrefix(params[0], "https://") {
  params[0] = "https://" + params[0]
 }
 return string(params[0]),nil
}
func (cli *client) Query(url string) (int64, error) {
 resp, err := cli.client.Get(url)
 if err != nil {
  impl.Debugf("cannot fetch data: %s", err)
  err:=errors.New("cannot fetch data")
  return 0, zbxerr.ErrorCannotFetchData.Wrap(err)
 }
 defer resp.Body.Close()
 certInfo:=resp.TLS.PeerCertificates[0]
 expiredays:=(certInfo.NotAfter.Unix()-time.Now().Unix())/60/60/24
 return expiredays,nil
}

// Export implements the Exporter interface.
func (p *Plugin) Export(key string, params []string, ctx plugin.ContextProvider) (interface{}, error) {
 if err = checkParamnums(params); err != nil {
  return nil, err
 }
 urls,err:= checkParams(params)
 if err!= nil {
  return nil,err
 }
 body, err := p.client.Query(urls)
 if err!=nil{
  return nil, err
 }
 return body,nil

}
func init() {
 plugin.RegisterMetrics(&impl, pluginName,
  "https_expire", "Returns the number of days between the HTTPS certificate expiration time and the current date.")
}
```

## 下载zabbix agent2源码并将自定义插件编译

```
yum install golang
git clone https://git.zabbix.com/scm/zbx/zabbix.git --depth 1 zabbix-agent2
cd zabbix-agent2
git submodule add https://github.com/cxf210/ssl_expire.git src/go/plugins/https_expire
```

## 导入https_expire插件

```
vi src/go/plugins/plugins_linux.go
```

添加最后一行

```
        _ "zabbix.com/plugins/ceph"
        _ "zabbix.com/plugins/docker"
        _ "zabbix.com/plugins/kernel"
        _ "zabbix.com/plugins/log"
        _ "zabbix.com/plugins/memcached"
        _ "zabbix.com/plugins/modbus"
        _ "zabbix.com/plugins/mqtt"
        _ "zabbix.com/plugins/mysql"
        _ "zabbix.com/plugins/net/netif"
        _ "zabbix.com/plugins/net/tcp"
        ...
        _ "zabbix.com/plugins/https_expire"
```

## 编译安装zabbix agent2

```
yum install automake autoconf pcre* -y
./bootstrap.sh 
pushd . 
cd src/go/ 
go mod vendor 
popd 
./configure --enable-agent2 --enable-static 
make install
```

## 编辑配置文件

这里我调整了日志级别，方便前台调试 可选参数 Plugins.Https_expire.Timeout = 5

```
egrep -v "^$|^#" conf/zabbix_agent2.conf  
LogType=console
LogFile=/tmp/zabbix_agent2.log
DebugLevel=4
Server=172.17.0.5
Plugins.Https_expire.Timeout=5
Hostname=node2
ControlSocket=/tmp/agent.sock
```

## 启动Zabbix_agent2

```
cd /root/zabbix_agent/src/go/bin
zabbix_agent2 -c conf/zabbix_agent2.conf
```

![图片](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent21.png)

## Zabbix创建监控项

键值示例如下

```
https_expire["www.xyzabbix.cn"]
```

或

```
https_expire["https://www.xyzabbix.cn"]
```

![图片](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent22.png)



查看最新数据，这个证书还有四十天过期

![图片](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent23.png)

我是用的阿里云ssl证书，可以看到确实离过期时间还有四十天，今天是2021.3.7

![图片](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent24.png)



可以创建一个触发器，在还有一个月的时候发送报警通知。

![图片](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent25.png)