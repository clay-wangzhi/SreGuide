<template><h1 id="_6-nginx的常见问题" tabindex="-1"><a class="header-anchor" href="#_6-nginx的常见问题" aria-hidden="true">#</a> 6. nginx的常见问题</h1>
<h2 id="nginx前面有多个反向代理时-proxy的正确设置" tabindex="-1"><a class="header-anchor" href="#nginx前面有多个反向代理时-proxy的正确设置" aria-hidden="true">#</a> nginx前面有多个反向代理时，proxy的正确设置</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#proxy_redirect off;
#proxy_set_header Host $host
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注释掉这两行，让它使用默认配置</p>
<h2 id="nginx解决跨域问题" tabindex="-1"><a class="header-anchor" href="#nginx解决跨域问题" aria-hidden="true">#</a> nginx解决跨域问题</h2>
<p>在nginx.conf中编辑</p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
            //允许cros跨域访问
            <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">'Access-Control-Allow-Origin'</span> <span class="token string">'*'</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="从http跳转到https" tabindex="-1"><a class="header-anchor" href="#从http跳转到https" aria-hidden="true">#</a> 从http跳转到https</h2>
<p>项目前期使用http，后期为了安全方面的考虑，启用了https。
项目架构：前端使用nginx作为多个tomcat实例的反向代理和负载均衡。
实际上只需要在nginx上启用https即可，使客户端与nginx之后使用https方式通信，而nginx与tomcat之间依然以http方式通信。</p>
<p>现在需要将之前客户端所有的http请求全部都自动重定向为https，只需要在nginx上添加相应配置即可。</p>
<h3 id="使用rewrite指令" tabindex="-1"><a class="header-anchor" href="#使用rewrite指令" aria-hidden="true">#</a> 使用rewrite指令</h3>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> domain.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^(.*) https://<span class="token variable">$server_name</span><span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> domain.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span>     /etc/nginx/ssl/domain.com.crt</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/nginx/ssl/domain.com.crt</span><span class="token punctuation">;</span>
    <span class="token comment"># other</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>如果此时nginx作为Tomcat的前端反向代理的话，需要将相应配置放在配置ssl的server块中。</p>
<h3 id="使用return指令" tabindex="-1"><a class="header-anchor" href="#使用return指令" aria-hidden="true">#</a> 使用return指令</h3>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> domain.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> domain.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span>     /etc/nginx/ssl/domain.com.crt</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/nginx/ssl/domain.com.crt</span><span class="token punctuation">;</span>
    <span class="token comment"># other</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>如果此时nginx作为Tomcat的前端反向代理的话，需要将相应配置放在配置ssl的server块中。</p>
<h3 id="使用error-page指令" tabindex="-1"><a class="header-anchor" href="#使用error-page指令" aria-hidden="true">#</a> 使用error_page指令</h3>
<p>只允许HTTP来访问时，用HTTP访问会让Nginx报497错误，然后利用error_page将链接重定向至HTTPS上。</p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> domain.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span>     /etc/nginx/ssl/domain.com.crt</span><span class="token punctuation">;</span> 
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/nginx/ssl/domain.com.crt</span><span class="token punctuation">;</span>
    <span class="token comment"># other</span>
    <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">497</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>使用error_page指令时，将http和https的监听配置写在同一个server块中，对应的其他配置也需要在该server配置块中完成。</p>
<p>需要注意的是，此时需要将<code>error_page</code>指令语句写在最后，否则不能生效。</p>
<h2 id="nginx出现403的原因" tabindex="-1"><a class="header-anchor" href="#nginx出现403的原因" aria-hidden="true">#</a> nginx出现403的原因</h2>
<h3 id="缺少index-html" tabindex="-1"><a class="header-anchor" href="#缺少index-html" aria-hidden="true">#</a> 缺少index.html</h3>
<p>缺少index.html或者index.php文件，就是配置文件中index index.html index.htm这行中的指定的文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {  
      listen       80;  
      server_name  localhost;  
      index  index.php index.html;  
      root  /data/www/;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果在/data/www/下面没有index.php,index.html的时候，直接文件，会报403 forbidden。</p>
<h3 id="权限问题" tabindex="-1"><a class="header-anchor" href="#权限问题" aria-hidden="true">#</a> 权限问题</h3>
<p>1）查看nginx的启动用户</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ps aux | grep "nginx: worker process" | grep -v "grep" | awk '{ print $1 }'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>index</code>文件的权限，<code>nginx</code>启动用户要有读的权限，<code>index</code>所在的目录要有可以访问目录内容的权限（递归都要有，每一级）</p>
<p>如果nginx没有web目录的操作权限，也会出现403错误。上一级目录权限，有读的权限就行，不必要改为777</p>
<p>解决办法：修改web目录的读写权限，或者是把nginx的启动用户改成目录的所属用户，重启Nginx即可解决</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chmod -R 777 /data
chmod -R 777 /data/www/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="selinux设置问题" tabindex="-1"><a class="header-anchor" href="#selinux设置问题" aria-hidden="true">#</a> SELinux设置问题</h3>
<p>设置为：<code>SELINUX=disabled</code></p>
<h2 id="通过nginx实现蓝绿发布" tabindex="-1"><a class="header-anchor" href="#通过nginx实现蓝绿发布" aria-hidden="true">#</a> 通过nginx实现蓝绿发布</h2>
<p>样例</p>
<p><code>nginx.conf</code>通过两个子配置文件来实现</p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code>include conf.d/v1.conf
<span class="token comment">#include conf.d/v2.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>v1.conf</code></p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> app_v1</span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">server</span> 192.168.1.2:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.3:8080</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">upstream</span> app_v2</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.3:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.4:8080</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$group</span> <span class="token string">"app_v1"</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://<span class="token variable">$group</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>v2.conf</code></p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> app_v1</span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">server</span> 192.168.1.2:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.3:8080</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">upstream</span> app_v2</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.3:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.4:8080</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$group</span> <span class="token string">"app_v2"</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://<span class="token variable">$group</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>有的时候还是结合cookie进行使用</p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_cookie</span> ~* <span class="token string">"version=V1"</span>)</span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">set</span> <span class="token variable">$group</span> app_v1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="nginx-allow-多个ip-ipv4的网段表示方法解析" tabindex="-1"><a class="header-anchor" href="#nginx-allow-多个ip-ipv4的网段表示方法解析" aria-hidden="true">#</a> nginx allow 多个ip &amp; ipv4的网段表示方法解析</h2>
<p>单看<a href="http://www.ttlsa.com/nginx/" target="_blank" rel="noopener noreferrer">nginx<ExternalLinkIcon/></a>模块名<code>ngx_http_access_module</code>,很多人一定很陌生，但是deny和allow相比没一个人不知道的，实际上deny和allow指令属于ngx_http_access_module.我们想控制某个uri或者一个路径不让人访问，在nginx就得靠它了。</p>
<p>nginx的访问控制模块语法很简单，至少比apache好理解，apache的allow和deny的顺序让很多初学者抓头.好了具体看下这个插件的使用方法吧。</p>
<h3 id="_1、安装模块" tabindex="-1"><a class="header-anchor" href="#_1、安装模块" aria-hidden="true">#</a> 1、安装模块</h3>
<p>这个模块内置在了nginx中，除非你安装中使用了--without-http_access_module。如果你还没安装过nginx，那么请参考下ttlsa之前写的<a href="http://www.ttlsa.com/html/1548.html" target="_blank" rel="noopener noreferrer">nginx安装<ExternalLinkIcon/></a>.</p>
<h3 id="_2、指令" tabindex="-1"><a class="header-anchor" href="#_2、指令" aria-hidden="true">#</a> 2、指令</h3>
<p>allow
语法:    allow address | CIDR | unix: | all;
默认值:    —
配置段:    http, server, location, limit_except</p>
<p>允许某个ip或者一个ip段访问.如果指定unix:,那将允许socket的访问.注意：unix在1.5.1中新加入的功能，如果你的版本比这个低，请不要使用这个方法。</p>
<p>deny
语法:    deny address | CIDR | unix: | all;
默认值:    —
配置段:    http, server, location, limit_except</p>
<p>禁止某个ip或者一个ip段访问.如果指定unix:,那将禁止socket的访问.注意：unix在1.5.1中新加入的功能，如果你的版本比这个低，请不要使用这个方法。</p>
<h3 id="_3-allow、deny实例" tabindex="-1"><a class="header-anchor" href="#_3-allow、deny实例" aria-hidden="true">#</a> 3. allow、deny实例</h3>
<p>location / {
deny 192.168.1.1;
allow 192.168.1.0/24;
allow 10.1.1.0/16;
allow 2001:0db8::/32;
deny all;
}</p>
<p>从上到下的顺序，类似iptables。匹配到了便跳出。如上的例子先禁止了192.16.1.1，接下来允许了3个网段，其中包含了一个ipv6，最后未匹配的IP全部禁止访问. 在实际生产环境中，我们也会使用nginx 的geo模块配合使用，有兴趣的请参考ttlsa相关文章<a href="http://www.ttlsa.com/html/3203.html" target="_blank" rel="noopener noreferrer">nginx geo使用方法<ExternalLinkIcon/></a>.</p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<p>nginx访问控制模块要数nginx里面最简单的指令，只要记住你想禁止谁访问就deny加上IP，想允许则加上allow ip，想禁止或者允许所有，那么allow all或者deny all即可.</p>
<p>但是具体的配置出现很多问题</p>
<p>简单一点举例说明：
ip段：10.0.0.1-10.0.0.255        的表示方法：10.0.0.0/24
ip段：10.0.0.1-10.0.255.255     的表示方法：10.0.0.0/16
ip段：10.0.0.1-10.255.255.255    的表示方法：10.0.0.0/8</p>
<p>利用主机数来计算</p>
<p>1)将主机数目转化为二进制来表示</p>
<p>2)如果主机数小于或等于254（注意去掉保留的两个IP地址），则取得该主机的二进制位数，为 N，这里肯定 N&lt;8。如果大于254，则 N&gt;8，这就是说主机地址将占据不止8位。</p>
<p>3)使用255.255.255.255来将该类IP地址的主机地址位数全部置1，然后从后向前的将N位全部置为 0，即为子网掩码值。</p>
<p>如欲将B类IP地址168.195.0.0划分成若干子网，每个子网内有主机700台：</p>
<ol>
<li>700=1010111100</li>
<li>该二进制为十位数，N = 10</li>
<li>将该B类地址的子网掩码255.255.0.0的主机地址全部置 1，得到255.255.255.255 然后再从后向前将后 10位置0,即为： 11111111.11111111.11111100.00000000 即255.255.252.0。这就是该欲划分成主机为700台的B类IP地址 168.195.0.0的子网掩码。</li>
</ol>
<p>二进制表（表1）</p>
<p>0  0  0  0   0  0  0 0</p>
<p>128 64 32 16  8  4   2 1</p>
<p>CIDR值（表2）</p>
<p>子网掩码           CIDR值</p>
<p>255.0.0.0           /8</p>
<p>255.128.0.0          /9</p>
<p>255.192.0.0          /10</p>
<p>255.224.0.0          /11</p>
<p>255.240.0.0          /12</p>
<p>255.248.0.0          /13</p>
<p>255.252.0.0          /14</p>
<p>255.254.0.0          /15</p>
<p>255.255.0.0          /16</p>
<p>255.255.128.0        /17</p>
<p>255.255.192.0        /18</p>
<p>255.255.224.0        /19</p>
<p>255.255.240.0        /20</p>
<p>255.255.248.0        /21</p>
<p>255.255.252.0        /22</p>
<p>255.255.254.0        /23</p>
<p>255.255.255.0        /24</p>
<p>255.255.255.128       /25</p>
<p>255.255.255.192       /26</p>
<p>255.255.255.224       /27</p>
<p>255.255.255.240       /28</p>
<p>255.255.255.248       /29</p>
<p>255.255.255.252       /30</p>
</template>
