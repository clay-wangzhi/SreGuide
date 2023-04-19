<template><h1 id="centos7下搭建shadowsocks" tabindex="-1"><a class="header-anchor" href="#centos7下搭建shadowsocks" aria-hidden="true">#</a> centos7下搭建shadowsocks</h1>
<h3 id="安装pip" tabindex="-1"><a class="header-anchor" href="#安装pip" aria-hidden="true">#</a> 安装pip</h3>
<p>由于安装的是python 版本的 shadowsocks，所以首先安装pip</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
$ python get-pip.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="安装shadowsocks" tabindex="-1"><a class="header-anchor" href="#安装shadowsocks" aria-hidden="true">#</a> 安装shadowsocks</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ pip install --upgrade pip
$ pip install shadowsocks
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h3>
<p>创建文件所在目录:/etc</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#创建文件命令,
$ vi /etc/shadowsocks.json
#若进入了etc目录
$ vi shadowsocks.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>配置文件内容：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>单端口：
 {
 "server":"0.0.0.0",            --服务器IP，直接用0.0.0.0也可
 "server_port":8888,            --端口端口
 "local_address": "127.0.0.1",  --本地地址，可省略
 "local_port":1080,             --本地端口，可省略
 "password":"password",         --密码
 "timeout":300,                 --超时时间，可省略
 "method":"aes-256-cfb",        --加密策略，有多重策略，具体自查
}
多端口：
{
    "server":"0.0.0.0",
    "local_address":"127.0.0.1",
    "local_port":1080,
    "port_password":{           --每个端口对应一个密码
        "1111":"password1",
        "1112":"password2",
        "1113":"password3"
    },
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open":false
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="启动shadowsocks" tabindex="-1"><a class="header-anchor" href="#启动shadowsocks" aria-hidden="true">#</a> 启动shadowsocks</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#启动
ssserver -c /etc/shadowsocks.json -d start
#停止
ssserver -c /etc/shadowsocks.json -d stop
#重启
ssserver -c /etc/shadowsocks.json -d restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>启动成功即可通过ss客户端使用。
在window端可以在控制台通过以下命令查看端口是否打开</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>telnet {ip} {potr}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="配置自启动" tabindex="-1"><a class="header-anchor" href="#配置自启动" aria-hidden="true">#</a> 配置自启动</h3>
<p>新建启动脚本文件/etc/systemd/system/shadowsocks.service，内容如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Unit]
Description=Shadowsocks

[Service]
TimeoutStartSec=0
ExecStart=/usr/bin/ssserver -c /etc/shadowsocks.json

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>通过以下命令注册，启动服务</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ systemctl enable shadowsocks
$ systemctl start shadowsocks
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>启动后可以查看服务状态</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ systemctl status shadowsocks -l
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>若启动成功：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>● shadowsocks.service - Shadowsocks
   Loaded: loaded (/etc/systemd/system/shadowsocks.service; enabled; vendor preset: disabled)
   Active: active (running) since Sun 2017-08-13 18:03:41 CST; 1h 29min ago
 Main PID: 9567 (ssserver)
   CGroup: /system.slice/shadowsocks.service
           └─9567 /usr/bin/python2 /usr/bin/ssserver -c /etc/shadowsocks.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="firewalld防火墙" tabindex="-1"><a class="header-anchor" href="#firewalld防火墙" aria-hidden="true">#</a> firewalld防火墙</h3>
<p>centos7用的firewalld，若不进行设置，可能会导致SS无法使用
这部分规则可以通过阿里云安全组添加，也可以直接通过代码添加，这里介绍直接添加规则方法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 开放端口
$ firewall-cmd --permanent --add-port=18381-18385/tcp 
# 修改规则后需要重启
$ firewall-cmd --reload 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>转载链接：https://segmentfault.com/a/1190000010639190</p>
</template>
