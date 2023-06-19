import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-345dc2e7.js";const i={},t=e(`<h1 id="_3-nginx配置文件详解" tabindex="-1"><a class="header-anchor" href="#_3-nginx配置文件详解" aria-hidden="true">#</a> 3. nginx配置文件详解</h1><p>配置文件详解</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> nginx</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">8</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_cpu_affinity</span> auto</span><span class="token punctuation">;</span>
<span class="token comment">#worker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000 10000000;</span>
<span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log  error</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span>        /var/run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_rlimit_nofile</span> <span class="token number">65535</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">20480</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">log_format</span>  prod <span class="token string">&#39;<span class="token variable">$remote_addr|</span><span class="token variable">$remote_user|[</span><span class="token variable">$time_local]|</span><span class="token variable">$request</span>|&#39;</span>
                     <span class="token string">&#39;<span class="token variable">$status</span>|<span class="token variable">$body_bytes_sent|</span><span class="token variable">$http_referer|</span>&#39;</span>
                     <span class="token string">&#39;<span class="token variable">$http_user_agent|</span><span class="token variable">$request_time|</span><span class="token variable">$host</span>|<span class="token variable">$upstream_addr|</span><span class="token variable">$upstream_response_time</span>&#39;</span></span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/access.log  prod</span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">charset</span>  utf-8</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_intercept_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_names_hash_bucket_size</span> <span class="token number">256</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_header_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">large_client_header_buffers</span> <span class="token number">4</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nodelay</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#支持ssi包含文件</span>
    <span class="token directive"><span class="token keyword">ssi</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssi_silent_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token comment">#   ssi_types text/html;</span>

    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_header_timeout</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_body_timeout</span> <span class="token number">20</span></span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">200m</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_body_buffer_size</span>  <span class="token number">128k</span></span><span class="token punctuation">;</span>

    <span class="token comment"># include /etc/nginx/gzip.conf;</span>
    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">4</span> <span class="token number">8k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">6</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_disable</span> <span class="token string">&quot;MSIE [1-6]\\.&quot;</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_http_version</span> 1.1</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1000</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_proxied</span> any</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_types</span> text/plain text/css application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json image/jpeg image/gif image/png image/jpg</span><span class="token punctuation">;</span>
    

    <span class="token comment"># include /etc/nginx/proxy.conf;</span>
    <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
    
    
    <span class="token comment"># include /etc/nginx/backend.conf;</span>
    <span class="token directive"><span class="token keyword">upstream</span> my_server_pool</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.109:80 weight=1 max_fails=2 fail_timeout=30</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.108:80 weight=2 max_fails=2 fail_timeout=30</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/h5.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-样例文件解释" tabindex="-1"><a class="header-anchor" href="#_1-样例文件解释" aria-hidden="true">#</a> 1 样例文件解释</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 引入文件 mime.types，是一个文件扩展名与文件类型的映射表</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token comment"># 指定默认MIME类型为二进制字节流(即下载文件)  </span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
    <span class="token comment"># 定义输出日志的格式</span>
    <span class="token comment"># 1.$remote_addr 与$http_x_forwarded_for(反向代理服务器) 用以记录客户端的ip地址；</span>
    <span class="token comment"># 2.$remote_user ：用来记录客户端用户名称；</span>
    <span class="token comment"># 3.$time_local ：用来记录访问时间与时区；</span>
    <span class="token comment"># 4.$request  ：用来记录请求的url与http协议</span>
    <span class="token comment"># 5.$status ：用来记录请求状态； </span>
    <span class="token comment"># 6.$body_bytes_sent ：记录发送给客户端文件主体内容大小；</span>
    <span class="token comment"># 7.$http_referer ：用来记录从那个页面链接访问过来的；</span>
    <span class="token comment"># 8.$http_user_agent ：记录客户端浏览器的相关信息</span>
    <span class="token comment"># 9.$request_time ：整个请求的总时间</span>
    <span class="token comment"># 10.$host变量的值按照如下优先级获得：请求行中的host.请求头中的Host头部.与一条请求匹配的server name.</span>
    <span class="token comment"># 11.$upstream_addr ：后台upstream的地址，即真正提供服务的主机地址，如10.10.10.100:80</span>
    <span class="token comment"># 12.$upstream_response_time ：请求过程中，upstream响应时间    </span>
    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
                      <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">log_format</span>  prod <span class="token string">&#39;<span class="token variable">$remote_addr|</span><span class="token variable">$remote_user|[</span><span class="token variable">$time_local]|</span><span class="token variable">$request</span>|&#39;</span>
                     <span class="token string">&#39;<span class="token variable">$status</span>|<span class="token variable">$body_bytes_sent|</span><span class="token variable">$http_referer|</span>&#39;</span>
                     <span class="token string">&#39;<span class="token variable">$http_user_agent|</span><span class="token variable">$request_time|</span><span class="token variable">$host</span>|<span class="token variable">$upstream_addr|</span><span class="token variable">$upstream_response_time</span>&#39;</span></span><span class="token punctuation">;</span>
    
    <span class="token comment"># 指定access_log的存放路径、格式和缓存大小</span>
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/access.log  prod</span><span class="token punctuation">;</span>
    
    <span class="token comment"># 指定编码格式，若网页格式与此不同，将被自动转码</span>
    <span class="token directive"><span class="token keyword">charset</span>  utf-8</span><span class="token punctuation">;</span>
    <span class="token comment"># 允许nginx使用error_page处理错误信息，传递4xx和5xx错误信息到客户端</span>
    <span class="token directive"><span class="token keyword">fastcgi_intercept_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">server_names_hash_bucket_size</span> <span class="token number">256</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_header_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">large_client_header_buffers</span> <span class="token number">4</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
    
    <span class="token comment">#定义白名单ip列表变量</span>
	<span class="token directive"><span class="token keyword">geo</span> <span class="token variable">$whiteip_list</span></span> <span class="token punctuation">{</span>     
    	<span class="token directive"><span class="token keyword">default</span> <span class="token number">1</span></span><span class="token punctuation">;</span>
    	<span class="token directive"><span class="token keyword">127.0.0.1</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
    	<span class="token directive"><span class="token keyword">192.168.0.167</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
    	<span class="token directive"><span class="token keyword">192.168.0.48</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">#用map指令映射将白名单列表中客户端请求ip为空串 </span>
	<span class="token directive"><span class="token keyword">map</span> <span class="token variable">$whiteip_list</span> <span class="token variable">$limit</span></span> <span class="token punctuation">{</span>
    	<span class="token directive"><span class="token keyword">1</span> <span class="token variable">$binary_remote_addr</span></span><span class="token punctuation">;</span>
    	<span class="token directive"><span class="token keyword">0</span> <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    

	<span class="token comment">#当某个IP访问example.com这个域名时，此IP得并发连接超过10，则会报503（Service Temporarily Unavailable），</span>
	<span class="token comment">#表示服务暂时不可用，此时会返回给用户我们事先定义好错误页面。由“limit_conn conn_ip 10;”实现。</span>
	<span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$limit</span> zone=conn_ip:10m</span><span class="token punctuation">;</span>
	<span class="token comment">#当访问example.com这个域名的连接总数超过1000时，同样会报503，返回定义好的错误页面。</span>
	<span class="token comment">#由“limit_conn conn_server 1000;”实现</span>
	<span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$limit</span> zone=conn_server:10m</span><span class="token punctuation">;</span>
	<span class="token comment">#当达到最大限制连接数后，记录日志的等级</span>
	<span class="token directive"><span class="token keyword">limit_conn_log_level</span> info</span><span class="token punctuation">;</span>  <span class="token comment">#[info | notice | warn | error(默认)]</span>
	<span class="token comment">#当超过限制时，返回的状态码（默认是503），code值只能设置在400到599之间</span>
	<span class="token directive"><span class="token keyword">limit_conn_status</span> <span class="token number">503</span></span><span class="token punctuation">;</span>

	<span class="token comment">#利用令牌桶原理，来限制用户的连接频率</span>
	<span class="token comment">#rate每个IP平均处理的请求频率为每秒一次，此值可以设置成每秒处理请求数或者每分钟处理请求数，但必须是整数。</span>
	<span class="token comment">#所以如果你需要指定每秒处理少于1个的请求，2秒处理一个请求，可以使用 “30r/m”。</span>
	<span class="token directive"><span class="token keyword">limit_req_zone</span>  <span class="token variable">$limit</span> zone=req_ip:10m rate=10r/s</span><span class="token punctuation">;</span>

    <span class="token comment"># 用户认证</span>
    <span class="token comment"># yum install httpd-tools               #适用centos</span>
    <span class="token comment"># sudo apt-get install apache2-utils    #适用ubuntu</span>
    <span class="token comment"># 生成用户密码文件</span>
    <span class="token comment"># htpasswd -c /data/.htpasswd user1 </span>
    <span class="token directive"><span class="token keyword">auth_basic</span>  <span class="token string">&quot;User Login&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">auth_basic_user_file</span>  /data/.htpasswd</span><span class="token punctuation">;</span>

    <span class="token comment"># 隐藏nginx版本号</span>
    <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
     <span class="token comment"># sendfile 指令用于指定 Nginx 是否调用Linux 的 sendfile 函数（zero copy 方式）来输出文件，提高文件传输效率 </span>
    <span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 告诉nginx在一个数据包里发送所有头文件，而不一个接一个的发送。就是说数据包不会马上传送出去，等到数据包最大时，一次性的传输出去，这样有助于解决网络堵塞。</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 不缓存data-sends（关闭 Nagle 算法），这个能够提高高频发送小数据报文的实时性</span>
    <span class="token directive"><span class="token keyword">tcp_nodelay</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#支持ssi包含文件</span>
    <span class="token directive"><span class="token keyword">ssi</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssi_silent_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token comment">#   ssi_types text/html;</span>
    
    <span class="token comment"># 启用目录浏览</span>
    <span class="token comment"># autoindex on;</span>
    <span class="token comment"># 显示出文件的确切／大概大小：on确切大小，单位是bytes；off大概大小，单位是kB或者MB或者GB</span>
    <span class="token comment"># autoindex_exact_size off;</span>
    <span class="token comment"># off显示的文件时间为GMT时间，on显示的文件时间为文件的服务器时间</span>
    <span class="token comment"># autoindex_localtime on; </span>

     <span class="token comment"># 指定客户端连接保持活动的超时时间（单位：秒），超过时间，服务器会关闭连接,太短或者太长都不一定合适，当然，最好是根据业务自身的情况来动态地调整该参数</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 客户端向服务端发送一个完整的 request header 的超时时间。如果客户端在指定时间内没有发送一个完整的 request header，Nginx 返回 HTTP 408（Request Timed Out）。</span>
    <span class="token directive"><span class="token keyword">client_header_timeout</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 指定客户端与服务端建立连接后发送 request body 的超时时间。如果客户端在指定时间内没有发送任何内容，Nginx 返回 HTTP 408（Request Timed Out）。</span>
    <span class="token directive"><span class="token keyword">client_body_timeout</span> <span class="token number">20</span></span><span class="token punctuation">;</span>

    <span class="token comment"># 客户端请求单个文件的最大字节数,这个参数的设置限制了上传文件的大小。</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">200m</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 当客户端以POST方法提交一些数据到服务端时，会先写入到client_body_buffer中，如果buffer写满会写到临时文件里，建议调整为128k</span>
    <span class="token directive"><span class="token keyword">client_body_buffer_size</span>  <span class="token number">128k</span></span><span class="token punctuation">;</span>
    

    <span class="token comment">#利用令牌桶原理，来限制用户的连接频率</span>
	<span class="token comment">#rate每个IP平均处理的请求频率为每秒一次，此值可以设置成每秒处理请求数或者每分钟处理请求数，但必须是整数。</span>
	<span class="token comment">#所以如果你需要指定每秒处理少于1个的请求，2秒处理一个请求，可以使用 “30r/m”。</span>
    <span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=10000r/s</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$binary_remote_addr</span> zone=addr:10m</span><span class="token punctuation">;</span>
    
    <span class="token comment"># include /etc/nginx/gzip.conf;</span>
    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">4</span> <span class="token number">8k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">6</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_disable</span> <span class="token string">&quot;MSIE [1-6]\\.&quot;</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_http_version</span> 1.1</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1000</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_proxied</span> any</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_types</span> text/plain text/css application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json image/jpeg image/gif image/png image/jpg</span><span class="token punctuation">;</span>

    <span class="token comment">#FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。</span>
    <span class="token directive"><span class="token keyword">fastcgi_connect_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_send_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_read_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_buffer_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_temp_file_write_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

    <span class="token comment"># include /etc/nginx/proxy.conf;</span>
    <span class="token comment">#反向代理</span>
    <span class="token comment"># nginx跟后端服务器连接超时时间(代理连接超时)</span>
	<span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 连接成功后，后端服务器响应时间(代理接收超时)</span>
	<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 后端服务器数据回传时间(代理发送超时)</span>
	<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 设置代理服务器（nginx）保存用户头信息的缓冲区大小</span>
	<span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
    <span class="token comment"># proxy_buffers缓冲区</span>
	<span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 高负荷下缓冲大小（proxy_buffers*2）</span>
	<span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 设定缓存文件夹大小，大于这个值，将从upstream服务器传</span>
    <span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
    
    
    <span class="token comment">#反向代理缓存目录</span>
    <span class="token directive"><span class="token keyword">proxy_cache_path</span> /data/proxy/cache levels=1:2 keys_zone=cache_one:500m inactive=1d max_size=1g</span><span class="token punctuation">;</span>
    <span class="token comment">#levels=1:2 设置目录深度，第一层目录是1个字符，第2层是2个字符</span>
    <span class="token comment">#keys_zone:设置web缓存名称和内存缓存空间大小</span>
    <span class="token comment">#inactive:自动清除缓存文件时间。</span>
    <span class="token comment">#max_size:硬盘空间最大可使用值。</span>
    <span class="token comment">#指定临时缓存文件的存储路径(路径需和上面路径在同一分区)</span>
    <span class="token directive"><span class="token keyword">proxy_temp_path</span> /data/proxy/temp

    <span class="token comment"># include /etc/nginx/backend.conf;  </span>
    <span class="token comment"># 负载均衡服务器池</span>
    upstream my_server_pool</span> <span class="token punctuation">{</span>
        <span class="token comment">#调度算法</span>
        <span class="token comment">#1.轮循（默认）（weight轮循权值）</span>
        <span class="token comment">#2.ip_hash：根据每个请求访问IP的hash结果分配。（会话保持）</span>
        <span class="token comment">#3.fair:根据后端服务器响应时间最短请求。（upstream_fair模块）</span>
        <span class="token comment">#4.url_hash:根据访问的url的hash结果分配。（需hash软件包）</span>
        <span class="token comment">#参数：</span>
        <span class="token comment">#down：表示不参与负载均衡</span>
        <span class="token comment">#backup:备份服务器</span>
        <span class="token comment">#max_fails:允许最大请求错误次数</span>
        <span class="token comment">#fail_timeout:请求失败后暂停服务时间。</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.109:80 weight=1 max_fails=2 fail_timeout=30</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.108:80 weight=2 max_fails=2 fail_timeout=30</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># 指明包含进来的其他配置文件</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/h5.conf</span><span class="token punctuation">;</span>
    <span class="token comment"># 虚拟主机定义</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment"># 监听端口</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span> 
        <span class="token comment">#listen     443;</span>
        <span class="token comment"># 访问域名</span>
        <span class="token directive"><span class="token keyword">server_name</span>  example.com</span><span class="token punctuation">;</span>

        <span class="token comment"># 编码格式，若网页格式与此不同，将被自动转码</span>
        <span class="token comment">#charset utf-8;</span>

        <span class="token comment"># 虚拟主机访问日志定义</span>
        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token comment"># 申请的证书zip包中一般含有如下三个文件：</span>
        <span class="token comment"># SSL 凭证(例如: ssl_certificate.crt,或称最终实体凭证, 公钥凭证或身份验证凭证)</span>
        <span class="token comment"># 中继CA凭证(例如: IntermediateCA.crt, 或称信任链凭证或SSL凭证的签名者/发行人)</span>
        <span class="token comment"># 私钥文件(例如: private.key, 生成凭证签章要求(CSR)的时候建立的)</span>
        <span class="token comment">#</span>
        <span class="token comment"># nginx的配置特殊地方: 需要合并SSL凭证和中继CA凭证, 即:</span>
        <span class="token comment">#   cat ssl_certificate.crt IntermediateCA.crt &gt;&gt; your_domain_name.crt</span>
        <span class="token comment"># 注意：-----END CERTIFICATE----------BEGIN CERTIFICATE-----需要调整为：</span>
        <span class="token comment">#   -----END CERTIFICATE-----</span>
        <span class="token comment">#   -----BEGIN CERTIFICATE-----</span>
        <span class="token comment"># 否则启动时出错，即SSL: error:0906D066:PEM routines:PEM_read_bio:bad end line</span>
        <span class="token comment">#</span>
        <span class="token directive"><span class="token keyword">ssl</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>  
        <span class="token comment">#虚拟主机的证书文件  </span>
        <span class="token directive"><span class="token keyword">ssl_certificate</span> /etc/ssl/your_domain_name.crt</span><span class="token punctuation">;</span> <span class="token comment">#合并SSL凭证和中继CA凭证的文件</span>
        <span class="token comment">#虚拟主机私钥文件  </span>
        <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/ssl/your_domain_name.key</span><span class="token punctuation">;</span> <span class="token comment">#私钥文件</span>
        <span class="token comment"># 支持ssl协议版本</span>
        <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1 TLSv1.1 TLSv1.2</span><span class="token punctuation">;</span>
        <span class="token comment"># 客户端一侧的连接可以复用ssl session cache中缓存 的ssl参数的有效时长；</span>
		<span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">5m</span></span><span class="token punctuation">;</span>
        <span class="token comment"># 指定支持加密算法；</span>
        <span class="token directive"><span class="token keyword">ssl_ciphers</span> AESGCM:ALL:!DH:!EXPORT:!RC4:+HIGH:!MEDIUM:!LOW:!aNULL:!eNULL</span><span class="token punctuation">;</span>
        <span class="token comment"># 服务端倾向使用的加密算法；</span>
   		<span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>



        <span class="token comment"># 匹配URL</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token comment"># 定义默认网站根目录位置</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token comment"># 定义首页索引文件的名称，按以下顺序匹配</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm index.php</span><span class="token punctuation">;</span>

            <span class="token comment">#反向代理缓存设置命令(proxy_cache zone|off,默认关闭所以要设置)</span>
            <span class="token directive"><span class="token keyword">proxy_cache</span> cache_one</span><span class="token punctuation">;</span>
            <span class="token comment">#对不同的状态码缓存不同时间</span>
            <span class="token directive"><span class="token keyword">proxy_cache_valid</span> <span class="token number">200</span> <span class="token number">304</span> <span class="token number">12h</span></span><span class="token punctuation">;</span>
            <span class="token comment">#设置以什么样参数获取缓存文件名</span>
            <span class="token directive"><span class="token keyword">proxy_cache_key</span> <span class="token variable">$host</span><span class="token variable">$uri</span><span class="token variable">$is_args</span><span class="token variable">$args</span></span><span class="token punctuation">;</span>
            <span class="token comment">#后7端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span> 
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
            <span class="token comment">#nginx反向代理隐藏响应头，多个代理情况下也可以写到http段里面</span>
            <span class="token directive"><span class="token keyword">proxy_hide_header</span> X-Application-Context</span><span class="token punctuation">;</span>
            <span class="token comment">#代理设置</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span>   http://my_server_pool</span><span class="token punctuation">;</span> 
            <span class="token comment">#文件过期时间控制</span>
            <span class="token directive"><span class="token keyword">expires</span>    <span class="token number">1d</span></span><span class="token punctuation">;</span>

            <span class="token comment">#限制某个IP来源的连接并发数，此处为10个</span>
            <span class="token directive"><span class="token keyword">limit_conn</span> conn_ip <span class="token number">10</span></span><span class="token punctuation">;</span>
            <span class="token comment">#限制某个虚拟服务器的总连接数，此处为1000个</span>
            <span class="token directive"><span class="token keyword">limit_conn</span> conn_server <span class="token number">1000</span></span><span class="token punctuation">;</span>
            <span class="token comment">#限制带宽, 每个连接只允许最大5kb/s的速度进行下载</span>
            <span class="token directive"><span class="token keyword">limit_rate</span> <span class="token number">5k</span></span><span class="token punctuation">;</span>

            <span class="token comment">#burst=5这个配置的意思是设置一个大小为5的缓冲区，当有大量请求（爆发）过来时，</span>
            <span class="token comment">#超过了访问频次限制的请求可以先放到这个缓冲区内，如果此缓冲区也满了则会返回503</span>
            <span class="token comment">#nodelay 如果设置此参数，超过访问频次而且缓冲区也满了的时候就会直接返回503，如果没有设置，则所有请求会等待排队</span>
            <span class="token directive"><span class="token keyword">limit_req</span> zone=req_ip burst=5</span><span class="token punctuation">;</span>
            <span class="token comment">#limit_req zone=req_ip burst=5 nodelay;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> /download</span> <span class="token punctuation">{</span>
            <span class="token comment">#限制IP访问</span>
            <span class="token directive"><span class="token keyword">deny</span> 192.168.0.2；
            allow 192.168.0.0/24</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">allow</span> 192.168.1.1</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#静态文件，nginx自己处理</span>
        <span class="token directive"><span class="token keyword">location</span> ~ ^/(images|javascript|js|css|flash|media|static)/</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>  <span class="token comment">#关闭access_log，即不记录访问日志</span>
            <span class="token comment">#过期30天，静态文件不怎么更新，过期可以设大一点，</span>
            <span class="token comment">#如果频繁更新，则可以设置得小一点。</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">30d</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># 发生 404 错误时返回 404.html页面</span>
        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        <span class="token comment"># 发生 50x 错误时使用 50x.html</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># 将 PHP 脚本请求全部转发给 FastCGI（127.0.0.1:9000）处理</span>
        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">fastcgi_pass</span>   127.0.0.1:9000</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">fastcgi_index</span>  index.php</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">fastcgi_param</span>  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
            <span class="token comment"># 引入文件，fastcgi的默认配置参数</span>
            <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-全局变量" tabindex="-1"><a class="header-anchor" href="#_2-全局变量" aria-hidden="true">#</a> 2 全局变量</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$args ： #这个变量等于请求行中的参数，同$query_string
$content_length ： 请求头中的Content-length字段。
$content_type ： 请求头中的Content-Type字段。
$document_root ： 当前请求在root指令中指定的值。
$host ： 请求主机头字段，否则为服务器名称。
$http_user_agent ： 客户端agent信息
$http_cookie ： 客户端cookie信息
$limit_rate ： 这个变量可以限制连接速率。
$request_method ： 客户端请求的动作，通常为GET或POST。
$remote_addr ： 客户端的IP地址。
$remote_port ： 客户端的端口。
$remote_user ： 已经经过Auth Basic Module验证的用户名。
$request_filename ： 当前请求的文件路径，由root或alias指令与URI请求生成。
$scheme ： HTTP方法（如http，https）。
$server_protocol ： 请求使用的协议，通常是HTTP/1.0或HTTP/1.1。
$server_addr ： 服务器地址，在完成一次系统调用后可以确定这个值。
$server_name ： 服务器名称。
$server_port ： 请求到达服务器的端口号。
$request_uri ： 包含请求参数的原始URI，不包含主机名，如：”/foo/bar.php?arg=baz”。
$uri ： 不带请求参数的当前URI，$uri不包含主机名，如”/foo/bar.html”。
$document_uri ： 与$uri相同。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考链接：</p><p>https://jasonhzy.github.io/2017/09/03/nginx/</p><p>https://blog.csdn.net/tzy233/article/details/79780444</p><p>https://blog.csdn.net/Powerful_Fy/article/details/102845921</p><p>https://www.linuxidc.com/Linux/2018-01/150100.htm</p><p>https://www.jianshu.com/p/73e2cd39722c</p><p>https://www.cnblogs.com/my_life/articles/7070805.html</p><p>https://www.jianshu.com/nb/27610173</p><p>http://nginx.org/en/docs/http/ngx_http_core_module.html#variables</p><p>http://nginx.org/en/docs/</p></blockquote>`,8),p=[t];function c(l,o){return s(),a("div",null,p)}const v=n(i,[["render",c],["__file","config.html.vue"]]);export{v as default};
