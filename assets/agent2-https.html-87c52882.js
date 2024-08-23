import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as l,a as e,b as i,d as a,e as d}from"./app-ff59e76a.js";const u={},c=e("h1",{id:"使用zabbix-agent2自定义插件获取https证书过期时间",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用zabbix-agent2自定义插件获取https证书过期时间","aria-hidden":"true"},"#"),i(" 使用zabbix-agent2自定义插件获取https证书过期时间")],-1),o={href:"https://mp.weixin.qq.com/s/Sw0WubPH7luEY_kaVsoPkg",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"需求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#需求","aria-hidden":"true"},"#"),i(" 需求")],-1),m=e("p",null,"对经常维护网站的人来说，要经常跟https的证书打交道。一般https证书的有效期是一年，证书一旦过期，公司的损失会非常大。去年网易邮箱因为https证书忘记续期，导致大量用户无法正常使用邮箱就是个典型案例。什么时候想起来才去手动查一下也不现实，最好的方法是把过期时间监控起来，距离一定期限自动发送通知。",-1),b=e("p",null,"可以使用Zabbix或者Prometheus的ssl_exporter来进行监控，在Zabbix4.4版本以前可以使用自定义脚本的方式，在Zabbix4.4之后出现了zabbix-agent2，除了官方自带的插件也可以通过自定义插件的方式来满足我们的监控需求。本文介绍如何使用zabbix-agent2自定义插件来实现获取https证书过期时间的需求。",-1),p=e("h2",{id:"zabbix-agent2自定义https-expire插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#zabbix-agent2自定义https-expire插件","aria-hidden":"true"},"#"),i(" zabbix-agent2自定义https_expire插件")],-1),g={href:"https://mp.weixin.qq.com/s?__biz=MzI3NTQ1ODEyMQ==&mid=2247489848&idx=2&sn=7be7f66ba2c4dcc1e9c2c410dffea6d1&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mp.weixin.qq.com/s?__biz=MzI3NTQ1ODEyMQ==&mid=2247485564&idx=2&sn=e736e1c8f2dbb444bc0b9fbf786b75d5&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},h=d(`<p>这里我再介绍一下自定义插件的一些标准规范</p><p>１.　插件必须导入<code>zabbix.com/pkg/plugin</code>软件包。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &quot;zabbix.com/pkg/plugin&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.　插件必须定义结构并嵌入该<code>plugin.Base</code>结构。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Plugin struct {
    plugin.Base
}
var impl Plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.　一个插件必须实现一个或多个插件接口。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func (p *Plugin) Export(key string, params []string, ctx plugin.ContextProvider) (result interface{}, err error) {
    if len(params) &gt; 0 {
        p.Debugf(&quot;received %d parameters while expected none&quot;, len(params))
        return nil, errors.New(&quot;Too many parameters&quot;)
    }
    return time.Now().Format(time.RFC3339)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.　插件必须在初始化期间注册自己。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func init() {
    plugin.RegisterMetrics(&amp;impl, &quot;Time&quot;, &quot;system.time&quot;, &quot;Returns time string in RFC 3999 format.&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ssl_expire代码不多，插件由尼古拉·拖拉基斯基·王二编写，完整代码可以去github查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func (p *Plugin) Configure(global *plugin.GlobalOptions, options interface{}) {
 if err = conf.Unmarshal(options, &amp;p.options); err != nil {
  p.Errf(&quot;cannot unmarshal configuration options: %s&quot;, err)
 }

 if p.options.Timeout == 0 {
  p.options.Timeout = global.Timeout
 }
 p.client = newClient(p.options.Timeout)

}

func (p *Plugin) Validate(options interface{}) error {

 return conf.Unmarshal(options, &amp;opts)
}

func checkParamnums(params []string) error {
 if len(params) &gt; paramnums {
  err:=errors.New(&quot;Too many parameters.&quot;)
  return zbxerr.ErrorTooFewParameters.Wrap(err)
 } else if len(params) ==0 {
  err:=errors.New(&quot;Missing URL parameters.&quot;)
  return zbxerr.ErrorTooFewParameters.Wrap(err)
 }
 return nil
}

func checkParams(params []string) (string, error) {
 if strings.HasPrefix(params[0], &quot;http://&quot;) {
  errorsting:=fmt.Sprintf(&quot;Target is using http scheme: %s&quot;, params[0])
  err:=errors.New(errorsting)
  return &quot;&quot;,zbxerr.ErrorInvalidParams.Wrap(err)
 }

 if !strings.HasPrefix(params[0], &quot;https://&quot;) {
  params[0] = &quot;https://&quot; + params[0]
 }
 return string(params[0]),nil
}
func (cli *client) Query(url string) (int64, error) {
 resp, err := cli.client.Get(url)
 if err != nil {
  impl.Debugf(&quot;cannot fetch data: %s&quot;, err)
  err:=errors.New(&quot;cannot fetch data&quot;)
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
 plugin.RegisterMetrics(&amp;impl, pluginName,
  &quot;https_expire&quot;, &quot;Returns the number of days between the HTTPS certificate expiration time and the current date.&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载zabbix-agent2源码并将自定义插件编译" tabindex="-1"><a class="header-anchor" href="#下载zabbix-agent2源码并将自定义插件编译" aria-hidden="true">#</a> 下载zabbix agent2源码并将自定义插件编译</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install golang
git clone https://git.zabbix.com/scm/zbx/zabbix.git --depth 1 zabbix-agent2
cd zabbix-agent2
git submodule add https://github.com/cxf210/ssl_expire.git src/go/plugins/https_expire
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入https-expire插件" tabindex="-1"><a class="header-anchor" href="#导入https-expire插件" aria-hidden="true">#</a> 导入https_expire插件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi src/go/plugins/plugins_linux.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加最后一行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        _ &quot;zabbix.com/plugins/ceph&quot;
        _ &quot;zabbix.com/plugins/docker&quot;
        _ &quot;zabbix.com/plugins/kernel&quot;
        _ &quot;zabbix.com/plugins/log&quot;
        _ &quot;zabbix.com/plugins/memcached&quot;
        _ &quot;zabbix.com/plugins/modbus&quot;
        _ &quot;zabbix.com/plugins/mqtt&quot;
        _ &quot;zabbix.com/plugins/mysql&quot;
        _ &quot;zabbix.com/plugins/net/netif&quot;
        _ &quot;zabbix.com/plugins/net/tcp&quot;
        ...
        _ &quot;zabbix.com/plugins/https_expire&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译安装zabbix-agent2" tabindex="-1"><a class="header-anchor" href="#编译安装zabbix-agent2" aria-hidden="true">#</a> 编译安装zabbix agent2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install automake autoconf pcre* -y
./bootstrap.sh 
pushd . 
cd src/go/ 
go mod vendor 
popd 
./configure --enable-agent2 --enable-static 
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑配置文件" tabindex="-1"><a class="header-anchor" href="#编辑配置文件" aria-hidden="true">#</a> 编辑配置文件</h2><p>这里我调整了日志级别，方便前台调试 可选参数 Plugins.Https_expire.Timeout = 5</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>egrep -v &quot;^$|^#&quot; conf/zabbix_agent2.conf  
LogType=console
LogFile=/tmp/zabbix_agent2.log
DebugLevel=4
Server=172.17.0.5
Plugins.Https_expire.Timeout=5
Hostname=node2
ControlSocket=/tmp/agent.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动zabbix-agent2" tabindex="-1"><a class="header-anchor" href="#启动zabbix-agent2" aria-hidden="true">#</a> 启动Zabbix_agent2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /root/zabbix_agent/src/go/bin
zabbix_agent2 -c conf/zabbix_agent2.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent21.png" alt="图片"></p><h2 id="zabbix创建监控项" tabindex="-1"><a class="header-anchor" href="#zabbix创建监控项" aria-hidden="true">#</a> Zabbix创建监控项</h2><p>键值示例如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https_expire[&quot;www.xyzabbix.cn&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https_expire[&quot;https://www.xyzabbix.cn&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent22.png" alt="图片"></p><p>查看最新数据，这个证书还有四十天过期</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent23.png" alt="图片"></p><p>我是用的阿里云ssl证书，可以看到确实离过期时间还有四十天，今天是2021.3.7</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent24.png" alt="图片"></p><p>可以创建一个触发器，在还有一个月的时候发送报警通知。</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/agent25.png" alt="图片"></p>`,37);function f(q,_){const n=r("ExternalLinkIcon");return t(),l("div",null,[c,e("blockquote",null,[e("p",null,[i("转载自: "),e("a",o,[i("公众号运维开发故事 | wanger"),a(n)])])]),v,m,b,p,e("p",null,[i("之前介绍过如何"),e("a",g,[i("使用自定义插件来实现对mqtt的监控"),a(n)]),i("，只不过当时使用的Watcher接口来将新数据主动push给server端，这次将通过实现Exporter接口来采集数据，再次提供官方文档和Zabbix认证专家米宏翻译的"),e("a",x,[i("官方博文"),a(n)]),i("。")]),h])}const y=s(u,[["render",f],["__file","agent2-https.html.vue"]]);export{y as default};
