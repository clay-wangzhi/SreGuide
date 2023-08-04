import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,a as i}from"./app-08ceb845.js";const a={},l=i(`<h1 id="_1-初识nginx" tabindex="-1"><a class="header-anchor" href="#_1-初识nginx" aria-hidden="true">#</a> 1. 初识Nginx</h1><h2 id="_1-nginx的三个主要应用场景" tabindex="-1"><a class="header-anchor" href="#_1-nginx的三个主要应用场景" aria-hidden="true">#</a> 1 Nginx的三个主要应用场景</h2><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200102212417067.png" alt=""></p><p>三个主要应用场景为：</p><ul><li>静态资源服务（通过本地文件系统提供服务）</li><li>反向代理服务</li><li>API服务（OpenRestydeng ）</li></ul><h3 id="_1-1-反向代理服务" tabindex="-1"><a class="header-anchor" href="#_1-1-反向代理服务" aria-hidden="true">#</a> 1.1 反向代理服务</h3><h4 id="_1-1-1-负载均衡" tabindex="-1"><a class="header-anchor" href="#_1-1-1-负载均衡" aria-hidden="true">#</a> 1.1.1 负载均衡</h4><p>负载均衡，一般包含两方面的含义。</p><ul><li><p>一方面是，将单一的重负载分担到多个网络节点上做并行处理，每个节点处理结束后将结构汇总返回给用户，这样可以大幅提高网络系统的处理能力；</p></li><li><p>第二个方面的含义是，将大量的前段并发访问或数据流量分担到多个后端网络节点上分别处理，这样可以有效减少前端用户等待响应的时间。</p></li></ul><p>Web服务器、FTP服务器、企业关键应用服务器等关键应用服务器等网络应用方面谈到的负载均衡问题，基本隶属于后一方面的含义。</p><p>因此，Nginx服务器的负载均衡主要是对大量前端访问和流量进行分流，以保证前端用户访问效率。可以说，在绝大多数的Nginx应用中，都会或多或少涉及它的负载均衡服务。</p><h5 id="复制均衡策略" tabindex="-1"><a class="header-anchor" href="#复制均衡策略" aria-hidden="true">#</a> 复制均衡策略</h5><p>即内置策略和扩展策略。</p><ol><li><p>内置策略主要包括轮询、加权轮询和IP hash三种；</p></li><li><p>扩展策略主要通过第三方模块实现，种类比较丰富，常见的有url hash、fair等。</p></li></ol><blockquote><p>在默认情况下，内置策略会被编译进Nginx内核，使用时只需要在Nginx服务器配置中设置相关参数即可；</p><p>扩展策略不会编译进Nginx内核，需要手动将第三方模块编译到Nginx内核。</p></blockquote><p><strong>轮询</strong></p><p>轮询策略比较简单，就是将前端请求按顺序（时间顺序或者排列次序）逐一分配到不同的后端节点上，对于出现问题的后端节点自动排除。</p><p><strong>加权轮询</strong></p><p>加权轮询策略，顾名思义，就是在基本的轮询策略上考虑各后端节点接受请求的权重，指定各后端节点被轮询到的几率。</p><p>加权轮询策略主要用于后端节点不均的情况。根据后端节点性能的实际情况，我们可以在Nginx服务器的配置文件中调整权值，使得整个网络对前端请求达到最佳的响应能力。</p><p><strong>IP hash</strong></p><p><code>IP hash</code>策略，是将前端的访问<code>IP</code>进行<code>hash</code>操作，然后根据<code>hash</code>结果将请求分配给不同的后端节点。</p><p>事实上，这种策略可以看作是一种特殊的轮询策略。</p><p>通过Nginx的实现，每个前端访问IP会固定访问一个后端节点。这样做的好处是避免考虑前端用户的session在后端多个节点上共享的问题。</p><p><strong>url hash</strong></p><p>扩展策略中的<code>url hash</code>在形式上和<code>IP hash</code>相近，不同之处在于，<code>IP hash</code>策略是对前端访问IP进行了hash操作，而<code>url hash</code>策略是对前端请求的<code>url</code>进行了<code>hash</code>操作。<code>url hash</code>策略的优点在于，如果后端有缓存服务器，它能够高缓存效率，同时也解决了<code>session</code>的问题；但其缺点是，如果后端节点出现异常，它不能自动排除该节点。后端节点出现异常会导致Nginx服务器返回503错误。</p><p><strong>fair</strong></p><p>扩展的第三方模块<code>fair</code>则是从另一个角度来实现Nginx服务器负载均衡策略的。该模块将前端请求转发到一个最近负载最小的后台节点。Nginx通过后端节点对请求的响应时间来判断负载情况。响应时间短的节点负载相对就轻。得出判断结果后，Nginx就将前端请求转发到选中的负载最轻的节点。</p><p><strong>least_conn</strong></p><p>最少连接</p><h4 id="_1-1-2-web缓存" tabindex="-1"><a class="header-anchor" href="#_1-1-2-web缓存" aria-hidden="true">#</a> 1.1.2 Web缓存</h4><p>Squid在Web服务器领域中是一款相当流行的开源代理服务器和Web缓存服务器。作为网页服务器的前置缓存服务器，在很多优秀的站点中，它被用以缓存前端请求，从而提高Web服务器的性能；而且，它还可以缓存万维网、域名系统或者其他网络搜索等，为一个集体提供网路资源共享服务。</p><p>Nginx服务器从0.7.48版本开始，也支持了和Squid类似的缓存功能。</p><p>Nginx服务器的Web缓存服务主要由Proxy_Cache相关指令集和FastCGI_Cache相关指令集构成。</p><p>其中，Proxy_Cache主要用于在Nginx服务器提供反向代理服务时，对后端源服务器的返回内容进行URL缓存；</p><p>FastCGI_Cache主要用于对FastCGI的动态程序进行缓存。</p><p>另外还有一款常用的第三方模块ngx_cache_purge也是Nginx服务器Web缓存功能中经常用到的。它主要用于清除Nginx服务器上指定的URL缓存。</p><p>到Nginx 0.8.32版本，Proxy_Cache和FastCGI_Cache两部分的功能已经比较完善，再配合第三方的ngx_cache_purge模块，Nginx服务器已经具备了Squid所拥有的Web缓存加速功能和清除指定URL缓存的功能；</p><p>同时，Nginx服务器对多核CPU的调度比Squid更胜一筹，性能高于Squid，而在反向代理、负载均衡等其他方面，Nginx也不逊于Squid。这使得Nginx服务器可以同时作为负载均衡服务器和Web缓存服务器来使用，基本可以取代Squid。</p><h2 id="_2-nginx的优点" tabindex="-1"><a class="header-anchor" href="#_2-nginx的优点" aria-hidden="true">#</a> 2 Nginx的优点</h2><p><strong>nginx的优点</strong></p><ul><li><p>轻量级，同样起web服务比apache占用更少内存及资源；</p></li><li><p>Nginx 异步非阻塞的方式处理高并发请求，能保持低资源、低消耗、高性能；</p></li><li><p>高度模块化设计，编写模块相对简单，生态圈强大。</p></li><li><p>核心优点：高并发、高性能、高可扩展、高可靠性、热部署、BSD许可证。</p></li></ul><p><strong>Nginx为什么性能高、占用内存少？</strong></p><ul><li>Nginx采用多进程模式，对每个worker进程来说，独立的进程不需要加锁，互不影响；</li><li>一个进程退出后，其他进程继续工作，服务不会中断，master进程则很快启动新的worker进程；</li><li>worker进程异常退出肯定是程序有bug导致，但也只会影响当前worker上的请求，不会影响到其他进程的请求，降低风险；</li><li>Nginx采用异步非阻塞的方式去处理请求，更加高效。</li></ul><h2 id="_3-nginx的组成" tabindex="-1"><a class="header-anchor" href="#_3-nginx的组成" aria-hidden="true">#</a> 3 Nginx的组成</h2><ol><li>Nginx二进制可执行文件 <ul><li>由各模块源码编译出的一个文件</li></ul></li><li><code>nginx.conf</code>配置文件 <ul><li>控制<code>nginx</code>的行为</li></ul></li><li><code>access.log</code>访问日志 <ul><li>记录每一条http请求信息</li></ul></li><li><code>error.log</code>错误日志 <ul><li>定位问题</li></ul></li></ol><h2 id="_4-编译安装nginx" tabindex="-1"><a class="header-anchor" href="#_4-编译安装nginx" aria-hidden="true">#</a> 4 编译安装Nginx</h2><h3 id="_4-1-下载nginx" tabindex="-1"><a class="header-anchor" href="#_4-1-下载nginx" aria-hidden="true">#</a> 4.1 下载Nginx</h3><blockquote><p>nginx下载地址：http://nginx.org/download/</p><p>在官网找最新稳定版使用：http://nginx.org/en/download.html</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
wget http://nginx.org/download/nginx-1.16.1.tar.gz
tar -xvf nginx-1.16.1.tar.gz
cd nginx-1.16.1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-介绍各目录" tabindex="-1"><a class="header-anchor" href="#_4-2-介绍各目录" aria-hidden="true">#</a> 4.2 介绍各目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ls</span>
auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  <span class="token function">man</span>  README  src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>auto：包含了很多会在执行configure进行编译配置时调用的检测代码。</p></li><li><p>CHANGES：Nginx的版本更新细节记录。英文版。</p></li><li><p>CHANGES.ru：Nginx的版本更新细节记录。俄文版。</p></li><li><p>conf：Nginx提供的一些默认配置文件。</p></li><li><p>configure：根据系统环境设定Nginx编译选项的执行脚本。</p></li><li><p>contrib：网友贡献的一些有用脚本（对我来说，里面的vim设置很有用，README中有使用方法）。</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>把contrib/vim下的文件移入~/.vim目录下，让vim识别nginx的配置文件节点；
cp -r contrib/vim/* ~/.vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>html：提供了两个默认html页面，比如index.html的Welcome to nginx!。</p></li><li><p>LICENSE：声明的Nginx源码许可协议。</p></li><li><p>man：Nginx的Man手册，本文文件，可直接用vi或记事本打开。</p></li><li><p>README：读我文件，内容很简单，通告一下官网地址。</p></li><li><p>src：Nginx源码，分门别类，比如实现事件的event等，很清晰。</p></li></ul><h3 id="_4-3-configure" tabindex="-1"><a class="header-anchor" href="#_4-3-configure" aria-hidden="true">#</a> 4.3 Configure</h3><p>先安装相关依赖</p><blockquote><p>gzip模块需要zlib库</p><p>rewrite模块需要pcre库</p><p>ssl功能需要openssl库</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install gcc gcc-c++ make zlib-devel pcre-devel openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后运行<code>configure</code>文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ./configure --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>--prefix ：指定安装目录</li><li>--with：新增模块</li><li>--without：删除默认模块</li></ul><p>运行期中与路径相关的各种参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--prefix=PATH                        #指向安装目录
--sbin-path=PATH                     #指向（执行）程序文件（nginx）
--conf-path=PATH                     #指向配置文件（nginx.conf）
--error-log-path=PATH                #指向错误日志目录
--http-log-path=PATH                 #指定访问日志目录
--pid-path=PATH                      #指向pid文件（nginx.pid）
--lock-path=PATH                     #指向lock文件（nginx.lock）（安装文件锁定，防止安装文件被别人利用，或自己误操作。）
--builddir=PATH                      #指向编译目录
--http-client-body-temp-path=PATH    #设定http客户端请求临时文件路径
--http-proxy-temp-path=PATH          #设定http代理临时文件路径
--http-fastcgi-temp-path=PATH        #设定http fastcgi临时文件路径
--http-uwsgi-temp-path=PATH          #设定http uwsgi临时文件路径
--http-scgi-temp-path=PATH           #设定http scgi临时文件路径

--user=USER                          #指定程序运行时的非特权用户
--group=USER                         #指定程序运行时的非特权用户组

--with-rtsig_module                  #启用rtsig模块支持（实时信号）
--with-file-aio                      #启用file aio支持（一种APL文件传输格式）
--with-ipv6                          #启用ipv6支持
--with-select_module                 #启用select模块支持（一种轮询模式,不推荐在高载环境下使用）禁用：--without-select_module
--with-poll_module                   #启用poll模块支持（功能与select相同，与select特性相同，为一种轮询模式,不推荐在高载环境下使用）
--with-http_ssl_module               #启用支持https请求，需已安装openssl
--with-http_realip_module            #启用ngx_http_realip_module支持（这个模块允许从请求标头更改客户端的IP地址值，默认为关）
--with-http_addition_module          #启用ngx_http_addition_module支持（作为一个输出过滤器，支持不完全缓冲，分部分响应请求）
--with-http_xslt_module              #启用ngx_http_xslt_module支持（过滤转换XML请求）
--with-http_image_filter_module      #启用支持传输JPEG/GIF/PNG 图片过滤，默认为不启用，gd库要用到
--with-http_sub_module               #启用ngx_http_sub_module支持（允许用一些其他文本替换nginx响应中的一些文本）
--with-http_dav_module               #启用ngx_http_dav_module支持（增加PUT,DELETE,MKCOL：创建集合,COPY和MOVE方法）
--with-http_flv_module               #启用ngx_http_flv_module支持（提供寻求内存使用基于时间的偏移量文件）
--with-http_gzip_static_module       #启用ngx_http_gzip_static_module支持（在线实时压缩输出数据流）
--with-http_random_index_module      #启用ngx_http_random_index_module支持（从目录中随机挑选一个目录索引）
--with-http_secure_link_module       #启用ngx_http_secure_link_module支持（计算和检查要求所需的安全链接网址）
--with-http_degradation_module       #启用ngx_http_degradation_module支持（允许在内存不足的情况下返回204或444码）
--with-http_stub_status_module       #启用ngx_http_stub_status_module支持（获取nginx自上次启动以来的工作状态）
--with-http_perl_module              #启用ngx_http_perl_module支持（该模块使nginx可以直接使用perl或通过ssi调用perl）

--with-mail                          #启用POP3/IMAP4/SMTP代理模块支持
--with-mail_ssl_module               #启用ngx_mail_ssl_module支持
--add-module=                        #启用外部模块支持
--with-cpu-opt=                      #指定编译的CPU，可用的值为: pentium,opteron, amd64, sparc32, sparc64, ppc64等
--with-pcre                          #启用pcre库（默认会自动去找rpm包安装的pcre库文件以及模块）
--with-pcre=                         #指向pcre库文件目录（如果是源码安装就需要指定，rpm包安装就不需要指定了）
--with-pcre-opt=                     #在编译时为pcre库设置附加参数
--with-perl_modules_path=            #设定perl模块路径
--with-perl=                         #设定perl库文件路径
--with-debug                         #启用debug日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装额外的echo模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
git clone https://github.com/openresty/echo-nginx-module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure \\
--prefix=/etc/nginx \\
--sbin-path=/usr/sbin/nginx \\
--conf-path=/etc/nginx/nginx.conf \\
--error-log-path=/var/log/nginx/error.log \\
--http-log-path=/var/log/nginx/access.log \\
--pid-path=/var/run/nginx.pid \\
--lock-path=/var/run/nginx.lock \\
--http-client-body-temp-path=/var/cache/nginx/client_temp \\
--http-proxy-temp-path=/var/cache/nginx/proxy_temp \\
--http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \\
--http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \\
--http-scgi-temp-path=/var/cache/nginx/scgi_temp \\
--user=nginx \\
--group=nginx \\
--with-compat \\
--with-file-aio \\
--with-threads \\
--with-http_addition_module \\
--with-http_auth_request_module \\
--with-http_dav_module \\
--with-http_flv_module \\
--with-http_gunzip_module \\
--with-http_gzip_static_module \\
--with-http_mp4_module \\
--with-http_random_index_module \\
--with-http_realip_module \\
--with-http_secure_link_module \\
--with-http_slice_module \\
--with-http_ssl_module \\
--with-http_stub_status_module \\
--with-http_sub_module \\
--with-http_v2_module \\
--with-pcre \\
--with-mail \\
--with-mail_ssl_module \\
--with-stream \\
--with-stream_realip_module \\
--with-stream_ssl_module \\
--with-stream_ssl_preread_module \\
--with-cc-opt=&#39;-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic -fPIC&#39; \\
--with-ld-opt=&#39;-Wl,-z,relro -Wl,-z,now -pie&#39; \\
--add-module=/opt/echo-nginx-module

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完后，会生成<code>objs</code>目录</p><p>目录下的关键文件<code>ngx_modules.c</code>，它决定了我们编译nginx时，哪些模块会被编译进nginx</p><h3 id="_4-4-中间件介绍" tabindex="-1"><a class="header-anchor" href="#_4-4-中间件介绍" aria-hidden="true">#</a> 4.4 中间件介绍</h3><p>中间件放在<code>objs/src</code>目下</p><h3 id="_4-5-编译" tabindex="-1"><a class="header-anchor" href="#_4-5-编译" aria-hidden="true">#</a> 4.5 编译</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make -j 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>-j 参数，指定编译时的CPU数量，可加快编译速度</li></ul><p>执行完后，在<code>objs</code>目录下生成二进制可执行文件</p><blockquote><p>注意：如何这时，我们是升级nginx，现在就不需要<code>make install</code>了</p></blockquote><h3 id="_4-6-安装" tabindex="-1"><a class="header-anchor" href="#_4-6-安装" aria-hidden="true">#</a> 4.6 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完成后，会在<code>--prefix</code>目录下生成四个目录，我这里是<code>/home/clay</code>目录下</p><ul><li>conf： 配置文件目录</li><li>html：默认的静态页面存放目录</li><li>logs：默认access和error log存放目录</li><li>sbin：二进制可执行文件<code>nginx</code>存放目录</li></ul><blockquote><p>安装nginx，个人还是推荐yum源安装（里面自动包含了日志切割等）</p><p>可以yum源安装完成之后，再定制化模块，二次编译</p></blockquote><h2 id="_5-nginx配置语法" tabindex="-1"><a class="header-anchor" href="#_5-nginx配置语法" aria-hidden="true">#</a> 5 Nginx配置语法</h2><ol><li>配置文件由指令与指令块构成</li><li>每条指令以<code>;</code>分号结尾，指令与参数见以空格符号分隔</li><li>指令块以<code>{ }</code>大括号将多条指令组织在一起</li><li><code>include</code>语句允许组合多个配置文件以提升可维护性</li><li>使用<code>#</code>符号添加注释，提高可读性</li><li>使用<code>$</code>符号，使用变量</li><li>部分指令的参数支持正则表达式</li></ol><p><strong>Example</strong></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span> mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">upstream</span> thwp</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:8080</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> http2</span><span class="token punctuation">;</span>
        <span class="token comment"># Nginx配置语法</span>
        <span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> ~* \\.(gif|jpg|jpeg)$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">proxy_cache</span> my_cache</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">3m</span></span><span class="token punctuation">;</span>proxy_cache_key $host$uri$is_args$args<span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_cache_valid</span> <span class="token number">200</span> <span class="token number">304</span> <span class="token number">302</span> <span class="token number">1d</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://thwp</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-配置参数" tabindex="-1"><a class="header-anchor" href="#_5-1-配置参数" aria-hidden="true">#</a> 5.1 配置参数</h3><h4 id="_5-1-1-时间单位" tabindex="-1"><a class="header-anchor" href="#_5-1-1-时间单位" aria-hidden="true">#</a> 5.1.1 时间单位</h4><ul><li>ms：milliseconds</li><li>s：seconds</li><li>m：minutes</li><li>h：hours</li><li>d：days</li><li>w：weeks</li><li>M：months，30 days</li><li>y：years，365 days</li></ul><h4 id="_5-1-2-空间单位" tabindex="-1"><a class="header-anchor" href="#_5-1-2-空间单位" aria-hidden="true">#</a> 5.1.2 空间单位</h4><ul><li>b/B：bytes</li><li>k/K：kilobytes</li><li>m/M：megabytes</li><li>g/G：gifabytes</li></ul><h2 id="_6-nginx配置文件结构" tabindex="-1"><a class="header-anchor" href="#_6-nginx配置文件结构" aria-hidden="true">#</a> 6 Nginx配置文件结构</h2><p>nginx配置文件如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> nginx</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span> auto</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/error.log</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span> /run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">include</span> /usr/share/nginx/modules/\\*.conf</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
                      <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/access.log  main</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">sendfile</span>            <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span>          <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nodelay</span>         <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>   <span class="token number">65</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">types_hash_max_size</span> <span class="token number">2048</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span>             /etc/nginx/mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>        application/octet-stream</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/\\*.conf</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span> default_server</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">listen</span>       [::]:80 default_server</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  _</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">root</span>         /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">include</span> /etc/nginx/default.d/\\*.conf</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">404</span> /404.html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">location</span> = /40x.html</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-1-基本结构" tabindex="-1"><a class="header-anchor" href="#_6-1-基本结构" aria-hidden="true">#</a> 6.1 基本结构</h3><ol><li>全局块</li><li><code>events</code>块</li><li><code>http</code>块</li></ol><p>在http块中，又包含http全局块、多个server块。</p><p>每个server块中，可以包含server全局块和多个location块。</p><p>在同一配置块中嵌套的配置块，各个之间不存在次序关系。</p><p>配置文件支持大量可配置的指令，绝大多数指令不是特定属于某一个块的。同一个指令放在不同层级的块中，其作用域也不同，一般情况下，高一级块中的指令可以作用域自身所在的块和此块包含的所有低层级块。如果某个指令在两个不同层级的块中同时出现，则采用“就近原则”，即以较低层级块中的配置为准。</p><h3 id="_6-2-全局块" tabindex="-1"><a class="header-anchor" href="#_6-2-全局块" aria-hidden="true">#</a> 6.2 全局块</h3><p>通常包括配置运行Nginx服务器的用户（组）、允许生成的worker process数、Nginx进程PID存放路径、日志的存放路径和类型以及配置文件引入等。</p><h3 id="_6-3-events块" tabindex="-1"><a class="header-anchor" href="#_6-3-events块" aria-hidden="true">#</a> 6.3 events块</h3><p>events块涉及的指令主要影响Nginx服务器与用户的网络连接。常用到的设置包括是否开启对多worker process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个worker process可以同时支持的最大连接数等。</p><p>这一部分的指令对Nginx服务器的性能影响较大，在实际配置中应该根据实际情况灵活调整。</p><h3 id="_6-4-http块" tabindex="-1"><a class="header-anchor" href="#_6-4-http块" aria-hidden="true">#</a> 6.4 http块</h3><p>http块是Nginx服务器配置中重要部分，代理、缓存和日志定义等绝大多数的功能和第三方模块可以放在这个模块中。</p><ul><li>http</li><li>upstream</li><li>server</li><li>location</li></ul><h3 id="_6-5-server块" tabindex="-1"><a class="header-anchor" href="#_6-5-server块" aria-hidden="true">#</a> 6.5 server块</h3><p>server块和“虚拟主机”的概念密切联系。为了加深相关配置的理解，在介绍server块之前，简单了解一下虚拟主机的相关内容。</p><p>虚拟主机，又称虚拟服务器、主机空间或网页空间，它是一种技术。该技术是为了节省互联网服务器硬件成本而出现的。这里的“主机”或“空间”是由实体的服务器延伸而来，硬件系统可以基于服务器群，或者单个服务器等。对外表现为多个服务器，从而充分利用服务器硬件资源。从用户角度看，一台虚拟主机和一台独立的硬件主机是完全一样的。</p><p>在使用Nginx服务器提供Web服务是，利用虚拟主机的技术就可以避免为每一个要运行的网站提供单独的Nginx服务器，也无需为每个网站对应运行一组Nginx进程。虚拟主机技术使得Nginx服务器可以在同一台服务器上只运行一组Nginx进程，就可以运行多个网站。</p><p>和http块相同，server块也可以包含自己的全局块，同时可以包含多个location块。在server全局块中，最常见的两个配置项是本虚拟主机的监听配置和本虚拟主机的名称或IP配置。</p><h3 id="_6-6-location块" tabindex="-1"><a class="header-anchor" href="#_6-6-location块" aria-hidden="true">#</a> 6.6 location块</h3><p>每个server块中可以包含多个location块。从严格意义上说，location其实是server块的一个指令，只是由于其在整个Nginx配置文档中起着重要的作用，而且Nginx服务器在许多功能上的灵活性往往在location指令的配置中体现出来。</p><h2 id="_7-nginx命令行" tabindex="-1"><a class="header-anchor" href="#_7-nginx命令行" aria-hidden="true">#</a> 7 Nginx命令行</h2><ol><li>格式：<code>nginx -s reload</code></li><li>帮助：<code>-?</code> <code>-h</code></li><li>使用指定的配置位置：<code>-c</code></li><li>指定配置指令：<code>-g</code></li><li>指定运行目录：<code>-p</code></li><li>发送信号：<code>-s</code><ul><li>立刻停止服务：<code>stop</code></li><li>优雅的停止服务：<code>quit</code></li><li>重载配置文件：<code>reload</code></li><li>重新开始记录日志文件：<code>reopen</code></li></ul></li><li>测试配置文件是否有语法错误：<code>-t</code> <code>-T</code></li><li>打印<code>nginx</code>的版本信息、编译信息：<code>-v</code> <code>-V</code></li></ol><h3 id="_7-1-重载配置文件" tabindex="-1"><a class="header-anchor" href="#_7-1-重载配置文件" aria-hidden="true">#</a> 7.1 重载配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-2-热部署" tabindex="-1"><a class="header-anchor" href="#_7-2-热部署" aria-hidden="true">#</a> 7.2 热部署</h3><p>只是更换二进制文件</p><ol><li>备份旧的nginx文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /home/clay/sbin/
cp nginx nginx.old
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2）将新的编译好的二进制文件，替换掉现在正在运行的二进制文件</p><p>首先重新编译出一个<code>nginx</code>二进制可执行文件，<code>./configure</code>然后<code>make</code>，千万不要<code>make install</code>，执行那<code>make</code>就可以了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/nginx-1.16.1/
cp -f objs/nginx /home/clay/sbin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3）给master进程发送<code>USR2</code>信号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ps -ef|grep nginx
root      6159 57006  0 11:18 pts/0    00:00:00 grep --color=auto nginx
root     63076     1  0 09:46 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody   63103 63076  0 09:46 ?        00:00:00 nginx: worker process
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># kill -USR2 63076
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ps -ef|grep nginx
root      6216 63076  0 11:19 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody    6217  6216  0 11:19 ?        00:00:00 nginx: worker process
root      6225 57006  0 11:19 pts/0    00:00:00 grep --color=auto nginx
root     63076     1  0 09:46 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody   63103 63076  0 09:46 ?        00:00:00 nginx: worker process
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># netstat -nplt| grep 80
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      6216/nginx: master  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4）关闭旧的woker进程，<code>kill -WINCH</code>旧的master进程号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># kill -WINCH 63076
# ps -ef|grep nginx
root      6216 63076  0 11:19 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody    6217  6216  0 11:19 ?        00:00:00 nginx: worker process
root      6842 57006  0 11:28 pts/0    00:00:00 grep --color=auto nginx
root     63076     1  0 09:46 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5）关闭旧的master进程，<code>kill -QUIT</code>旧的master进程号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># kill -QUIT 63076
# ps -ef|grep nginx
root      6216     1  0 11:19 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody    6217  6216  0 11:19 ?        00:00:00 nginx: worker process
root      6947 57006  0 11:30 pts/0    00:00:00 grep --color=auto nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-切割日志文件" tabindex="-1"><a class="header-anchor" href="#_7-3-切割日志文件" aria-hidden="true">#</a> 7.3 切割日志文件</h3><p>1）mv掉原来的日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv access.log access.log.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）重新打开日志文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s reopen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>简单说明一下：</strong></p><p>1、在没有执行kill -USR1 <code>cat \${pid_path}</code>之前，即便已经对文件执行了mv命令也只是改变了文件的名称，nginx还是会向新命名的文件” access.log.20161024”中照常写入日志数据。原因在于linux系统中，内核是根据文件描述符来找文件的</p><p>2、USR1是自定义信号，也就是进程编写者自己确定收到这个信号该干什么。而在nginx中它自己编写了代码当接到USR1信号的时候让nginx重新打开日志文件（重新打开的日志就是配置文件中设置的位置和名称）。</p>`,140),d=[l];function t(c,r){return e(),s("div",null,d)}const u=n(a,[["render",t],["__file","first.html.vue"]]);export{u as default};
