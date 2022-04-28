import{_ as n,e as s}from"./app.250f2715.js";const e={},a=s(`<h2 id="nginx\u5347\u7EA7\u52A0\u56FAssl-tls\u534F\u8BAE\u4FE1\u606F\u6CC4\u9732\u6F0F\u6D1E-cve-2016-2183-\u548Chttp\u670D\u52A1\u5668\u7684\u7F3A\u7701banner\u6F0F\u6D1E" tabindex="-1"><a class="header-anchor" href="#nginx\u5347\u7EA7\u52A0\u56FAssl-tls\u534F\u8BAE\u4FE1\u606F\u6CC4\u9732\u6F0F\u6D1E-cve-2016-2183-\u548Chttp\u670D\u52A1\u5668\u7684\u7F3A\u7701banner\u6F0F\u6D1E" aria-hidden="true">#</a> Nginx\u5347\u7EA7\u52A0\u56FASSL/TLS\u534F\u8BAE\u4FE1\u606F\u6CC4\u9732\u6F0F\u6D1E(CVE-2016-2183)\u548CHTTP\u670D\u52A1\u5668\u7684\u7F3A\u7701banner\u6F0F\u6D1E</h2><blockquote><p>\u26A0\uFE0F \u6CE8\u610F\uFF1A\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF0C\u8FD9\u53EA\u662F\u5927\u4F53\u7684\u601D\u8DEF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /tmp
wget  https://www.openssl.org/source/openssl-1.1.0k.tar.gz
tar zxvf openssl-1.1.0k.tar.gz -C /usr/local

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6253\u5F00nginx\u6E90\u6587\u4EF6\u4E0B\u7684/usr/local/src/nginx-1.9.9/auto/lib/openssl/conf\u6587\u4EF6\uFF1A
vi /root/nginx-1.14.2/auto/lib/openssl/conf
# \u627E\u5230\u4EE5\u4E0B\u4EE3\u7801,\u5DEE\u4E0D\u591A\u4E09\u56DB\u5341\u884C
CORE_INCS=&quot;$CORE_INCS $OPENSSL/.openssl/include&quot;
CORE_DEPS=&quot;$CORE_DEPS $OPENSSL/.openssl/include/openssl/ssl.h&quot;
CORE_LIBS=&quot;$CORE_LIBS $OPENSSL/.openssl/lib/libssl.a&quot;
CORE_LIBS=&quot;$CORE_LIBS $OPENSSL/.openssl/lib/libcrypto.a&quot;
CORE_LIBS=&quot;$CORE_LIBS $NGX_LIBDL&quot;
# \u4FEE\u6539\u6210\u4EE5\u4E0B\u4EE3\u7801
CORE_INCS=&quot;$CORE_INCS $OPENSSL/include&quot;
CORE_DEPS=&quot;$CORE_DEPS $OPENSSL/include/openssl/ssl.h&quot;
CORE_LIBS=&quot;$CORE_LIBS $OPENSSL/lib/libssl.a&quot;
CORE_LIBS=&quot;$CORE_LIBS $OPENSSL/lib/libcrypto.a&quot;
CORE_LIBS=&quot;$CORE_LIBS $NGX_LIBDL&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/openssl-1.1.0k/
mkdir lib
cp libssl.a libcrypto.a lib

./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-openssl=/usr/local/openssl-1.1.0k
make -j 8
cd /usr/local/nginx/sbin/
cp nginx nginx.bak
cd /opt/nginx-1.16.1
cp -f objs/nginx /usr/local/nginx/sbin/

ps -ef|grep nginx
kill -USR2 \`master \u8FDB\u7A0B\u53F7\`
#\u5173\u95ED\u65E7\u7684woker\u8FDB\u7A0B\uFF0Ckill -WINCH\u65E7\u7684master\u8FDB\u7A0B\u53F7
kill -WINCH \`master \u8FDB\u7A0B\u53F7\`
#\u5173\u95ED\u65E7\u7684master\u8FDB\u7A0B
kill -QUIT \`master \u8FDB\u7A0B\u53F7\`

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="nginx\u7F3A\u7701banner\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#nginx\u7F3A\u7701banner\u4FEE\u6539" aria-hidden="true">#</a> Nginx\u7F3A\u7701banner\u4FEE\u6539</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@Test ~]# vim nginx-1.19.1/src/http/ngx_http_header_filter_module.c 

\u9700\u8981\u4FEE\u6539\uFF1A

static u_char ngx_http_server_string[] = &quot;Server: nginx&quot; CRLF;
static u_char ngx_http_server_full_string[] = &quot;Server: &quot; NGINX_VER CRLF;
static u_char ngx_http_server_build_string[] = &quot;Server: &quot; NGINX_VER_BUILD CRLF;

\u4FEE\u6539\u6210\uFF1A

static u_char ngx_http_server_string[] = &quot;Server: unknow&quot; CRLF;
static u_char ngx_http_server_full_string[] = &quot;Server: unknow&quot;  CRLF;
static u_char ngx_http_server_build_string[] = &quot;Server: unknow&quot;  CRLF;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u7136\u540E\u91CD\u65B0\u7F16\u8BD1\uFF0C\u70ED\u5347\u7EA7nginx</p>`,8);function r(l,i){return a}var p=n(e,[["render",r],["__file","nginx\u6F0F\u6D1E\u4FEE\u590D.html.vue"]]);export{p as default};
