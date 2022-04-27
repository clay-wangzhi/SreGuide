<template><h2 id="nginx升级加固ssl-tls协议信息泄露漏洞-cve-2016-2183-和http服务器的缺省banner漏洞" tabindex="-1"><a class="header-anchor" href="#nginx升级加固ssl-tls协议信息泄露漏洞-cve-2016-2183-和http服务器的缺省banner漏洞" aria-hidden="true">#</a> Nginx升级加固SSL/TLS协议信息泄露漏洞(CVE-2016-2183)和HTTP服务器的缺省banner漏洞</h2>
<blockquote>
<p>⚠️ 注意：要根据实际情况进行修改，这只是大体的思路</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /tmp
wget  https://www.openssl.org/source/openssl-1.1.0k.tar.gz
tar zxvf openssl-1.1.0k.tar.gz -C /usr/local

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 打开nginx源文件下的/usr/local/src/nginx-1.9.9/auto/lib/openssl/conf文件：
vi /root/nginx-1.14.2/auto/lib/openssl/conf
# 找到以下代码,差不多三四十行
CORE_INCS="$CORE_INCS $OPENSSL/.openssl/include"
CORE_DEPS="$CORE_DEPS $OPENSSL/.openssl/include/openssl/ssl.h"
CORE_LIBS="$CORE_LIBS $OPENSSL/.openssl/lib/libssl.a"
CORE_LIBS="$CORE_LIBS $OPENSSL/.openssl/lib/libcrypto.a"
CORE_LIBS="$CORE_LIBS $NGX_LIBDL"
# 修改成以下代码
CORE_INCS="$CORE_INCS $OPENSSL/include"
CORE_DEPS="$CORE_DEPS $OPENSSL/include/openssl/ssl.h"
CORE_LIBS="$CORE_LIBS $OPENSSL/lib/libssl.a"
CORE_LIBS="$CORE_LIBS $OPENSSL/lib/libcrypto.a"
CORE_LIBS="$CORE_LIBS $NGX_LIBDL"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /usr/local/openssl-1.1.0k/
mkdir lib
cp libssl.a libcrypto.a lib

./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-openssl=/usr/local/openssl-1.1.0k
make -j 8
cd /usr/local/nginx/sbin/
cp nginx nginx.bak
cd /opt/nginx-1.16.1
cp -f objs/nginx /usr/local/nginx/sbin/

ps -ef|grep nginx
kill -USR2 `master 进程号`
#关闭旧的woker进程，kill -WINCH旧的master进程号
kill -WINCH `master 进程号`
#关闭旧的master进程
kill -QUIT `master 进程号`

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="nginx缺省banner修改" tabindex="-1"><a class="header-anchor" href="#nginx缺省banner修改" aria-hidden="true">#</a> Nginx缺省banner修改</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@Test ~]# vim nginx-1.19.1/src/http/ngx_http_header_filter_module.c 

需要修改：

static u_char ngx_http_server_string[] = "Server: nginx" CRLF;
static u_char ngx_http_server_full_string[] = "Server: " NGINX_VER CRLF;
static u_char ngx_http_server_build_string[] = "Server: " NGINX_VER_BUILD CRLF;

修改成：

static u_char ngx_http_server_string[] = "Server: unknow" CRLF;
static u_char ngx_http_server_full_string[] = "Server: unknow"  CRLF;
static u_char ngx_http_server_build_string[] = "Server: unknow"  CRLF;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>然后重新编译，热升级nginx</p>
</template>
