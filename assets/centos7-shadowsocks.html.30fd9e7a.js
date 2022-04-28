import{_ as s,e}from"./app.250f2715.js";const n={},a=e(`<h1 id="centos7\u4E0B\u642D\u5EFAshadowsocks" tabindex="-1"><a class="header-anchor" href="#centos7\u4E0B\u642D\u5EFAshadowsocks" aria-hidden="true">#</a> centos7\u4E0B\u642D\u5EFAshadowsocks</h1><h3 id="\u5B89\u88C5pip" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5pip" aria-hidden="true">#</a> \u5B89\u88C5pip</h3><p>\u7531\u4E8E\u5B89\u88C5\u7684\u662Fpython \u7248\u672C\u7684 shadowsocks\uFF0C\u6240\u4EE5\u9996\u5148\u5B89\u88C5pip</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ curl &quot;https://bootstrap.pypa.io/get-pip.py&quot; -o &quot;get-pip.py&quot;
$ python get-pip.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5B89\u88C5shadowsocks" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5shadowsocks" aria-hidden="true">#</a> \u5B89\u88C5shadowsocks</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pip install --upgrade pip
$ pip install shadowsocks
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</h3><p>\u521B\u5EFA\u6587\u4EF6\u6240\u5728\u76EE\u5F55:/etc</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u521B\u5EFA\u6587\u4EF6\u547D\u4EE4,
$ vi /etc/shadowsocks.json
#\u82E5\u8FDB\u5165\u4E86etc\u76EE\u5F55
$ vi shadowsocks.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5355\u7AEF\u53E3\uFF1A
 {
 &quot;server&quot;:&quot;0.0.0.0&quot;,            --\u670D\u52A1\u5668IP\uFF0C\u76F4\u63A5\u75280.0.0.0\u4E5F\u53EF
 &quot;server_port&quot;:8888,            --\u7AEF\u53E3\u7AEF\u53E3
 &quot;local_address&quot;: &quot;127.0.0.1&quot;,  --\u672C\u5730\u5730\u5740\uFF0C\u53EF\u7701\u7565
 &quot;local_port&quot;:1080,             --\u672C\u5730\u7AEF\u53E3\uFF0C\u53EF\u7701\u7565
 &quot;password&quot;:&quot;password&quot;,         --\u5BC6\u7801
 &quot;timeout&quot;:300,                 --\u8D85\u65F6\u65F6\u95F4\uFF0C\u53EF\u7701\u7565
 &quot;method&quot;:&quot;aes-256-cfb&quot;,        --\u52A0\u5BC6\u7B56\u7565\uFF0C\u6709\u591A\u91CD\u7B56\u7565\uFF0C\u5177\u4F53\u81EA\u67E5
}
\u591A\u7AEF\u53E3\uFF1A
{
    &quot;server&quot;:&quot;0.0.0.0&quot;,
    &quot;local_address&quot;:&quot;127.0.0.1&quot;,
    &quot;local_port&quot;:1080,
    &quot;port_password&quot;:{           --\u6BCF\u4E2A\u7AEF\u53E3\u5BF9\u5E94\u4E00\u4E2A\u5BC6\u7801
        &quot;1111&quot;:&quot;password1&quot;,
        &quot;1112&quot;:&quot;password2&quot;,
        &quot;1113&quot;:&quot;password3&quot;
    },
    &quot;timeout&quot;:300,
    &quot;method&quot;:&quot;aes-256-cfb&quot;,
    &quot;fast_open&quot;:false
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="\u542F\u52A8shadowsocks" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8shadowsocks" aria-hidden="true">#</a> \u542F\u52A8shadowsocks</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u542F\u52A8
ssserver -c /etc/shadowsocks.json -d start
#\u505C\u6B62
ssserver -c /etc/shadowsocks.json -d stop
#\u91CD\u542F
ssserver -c /etc/shadowsocks.json -d restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u542F\u52A8\u6210\u529F\u5373\u53EF\u901A\u8FC7ss\u5BA2\u6237\u7AEF\u4F7F\u7528\u3002 \u5728window\u7AEF\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u7AEF\u53E3\u662F\u5426\u6253\u5F00</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>telnet {ip} {potr}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6E\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u914D\u7F6E\u81EA\u542F\u52A8</h3><p>\u65B0\u5EFA\u542F\u52A8\u811A\u672C\u6587\u4EF6/etc/systemd/system/shadowsocks.service\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
Description=Shadowsocks

[Service]
TimeoutStartSec=0
ExecStart=/usr/bin/ssserver -c /etc/shadowsocks.json

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u6CE8\u518C\uFF0C\u542F\u52A8\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ systemctl enable shadowsocks
$ systemctl start shadowsocks
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u542F\u52A8\u540E\u53EF\u4EE5\u67E5\u770B\u670D\u52A1\u72B6\u6001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ systemctl status shadowsocks -l
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u82E5\u542F\u52A8\u6210\u529F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u25CF shadowsocks.service - Shadowsocks
   Loaded: loaded (/etc/systemd/system/shadowsocks.service; enabled; vendor preset: disabled)
   Active: active (running) since Sun 2017-08-13 18:03:41 CST; 1h 29min ago
 Main PID: 9567 (ssserver)
   CGroup: /system.slice/shadowsocks.service
           \u2514\u25009567 /usr/bin/python2 /usr/bin/ssserver -c /etc/shadowsocks.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="firewalld\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#firewalld\u9632\u706B\u5899" aria-hidden="true">#</a> firewalld\u9632\u706B\u5899</h3><p>centos7\u7528\u7684firewalld\uFF0C\u82E5\u4E0D\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4SS\u65E0\u6CD5\u4F7F\u7528 \u8FD9\u90E8\u5206\u89C4\u5219\u53EF\u4EE5\u901A\u8FC7\u963F\u91CC\u4E91\u5B89\u5168\u7EC4\u6DFB\u52A0\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u4EE3\u7801\u6DFB\u52A0\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\u76F4\u63A5\u6DFB\u52A0\u89C4\u5219\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5F00\u653E\u7AEF\u53E3
$ firewall-cmd --permanent --add-port=18381-18385/tcp 
# \u4FEE\u6539\u89C4\u5219\u540E\u9700\u8981\u91CD\u542F
$ firewall-cmd --reload 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8F6C\u8F7D\u94FE\u63A5\uFF1Ahttps://segmentfault.com/a/1190000010639190</p>`,28);function r(t,l){return a}var p=s(n,[["render",r],["__file","centos7-shadowsocks.html.vue"]]);export{p as default};
