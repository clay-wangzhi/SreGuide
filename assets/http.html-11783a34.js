import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-b4984da4.js";const i={},t=e(`<h1 id="_3-2-nginxhttp块配置" tabindex="-1"><a class="header-anchor" href="#_3-2-nginxhttp块配置" aria-hidden="true">#</a> 3.2 nginxHTTP块配置</h1><h2 id="_1-配置块的嵌套" tabindex="-1"><a class="header-anchor" href="#_1-配置块的嵌套" aria-hidden="true">#</a> 1 配置块的嵌套</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">upstream</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">split_clients</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">map</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">geo</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">if</span> ()</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span></span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">limit_except</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span></span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">location</span></span> <span class="token punctuation">{</span>
                
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-指令的合并" tabindex="-1"><a class="header-anchor" href="#_2-指令的合并" aria-hidden="true">#</a> 2 指令的合并</h2><ul><li>值指令：存储配置项的值 <ul><li>可以合并</li><li>示例：root，access_log，gzip</li></ul></li><li>动作类指令：指定行为 <ul><li>不可以合并</li><li>示例：rewrite，proxy_pass</li><li>生效阶段：server_rewrite阶段，rewrite阶段，content阶段</li></ul></li></ul><p><strong>存储值的指令继承规则：向上覆盖</strong></p><ul><li>子配置不存在时，直接使用父配置块</li><li>子配置存在时，直接覆盖父配置块</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">8080</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">root</span> /home/geek/nginx/html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">access_log</span> logs/geek.access.log main</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /test</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /home/geek/nginx/test</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">access_log</span> logs/access.test.log main</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /dlib</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> dlib/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-http请求处理时的11个阶段" tabindex="-1"><a class="header-anchor" href="#_3-http请求处理时的11个阶段" aria-hidden="true">#</a> 3 HTTP请求处理时的11个阶段</h2><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317095602291.png" alt=""></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317095641772.png" alt=""></p><h2 id="_4-正则表达式" tabindex="-1"><a class="header-anchor" href="#_4-正则表达式" aria-hidden="true">#</a> 4 正则表达式</h2><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317093833697.png" alt=""></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317094000335.png" alt=""></p><h2 id="_5-提取用户真实ip" tabindex="-1"><a class="header-anchor" href="#_5-提取用户真实ip" aria-hidden="true">#</a> 5 提取用户真实ip</h2><p>如何拿到真实的用户ip地址？</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317095930682.png" alt=""></p><p>拿到真实用户ip后如何使用？</p><p>基于变量：如binary_remote_addr、remote_addr这样的变量，其值就为真实的IP！这样做连接限制（limit_conn模块）才有意义！</p><p><strong>步骤</strong></p><ol><li><p>安装realip模块</p><p>realip是Nginx内置模块，需要在编译Nginx时加上<code>--with-http_realip_module</code>参数来启用它。</p></li><li><p>配置语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set_real_ip_from 192.168.1.0/24; #真实服务器上一级代理的IP地址或者IP段,可以写多行。
set_real_ip_from 192.168.2.1;
real_ip_header X-Forwarded-For;  #从哪个header头检索出要的IP地址。
real_ip_recursive on; #递归的去除所配置中的可信IP。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里详细讲下<code>real_ip_recursive</code>的用途：递归的去除所配置中的可信IP，排除set_real_ip_from里面出现的IP。如果出现了未出现这些IP段的IP，那么这个IP将被认为是用户的IP。</p></li><li><p>配置实例</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> html/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">set_real_ip_from</span> 192.168.1.0/24</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">set_real_ip_from</span> 192.168.2.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">real_ip_header</span> X-Forwarded-For</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">real_ip_recursive</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_6-定义404错误页面" tabindex="-1"><a class="header-anchor" href="#_6-定义404错误页面" aria-hidden="true">#</a> 6 定义404错误页面</h2><h3 id="_6-1-nginx自己的错误页面" tabindex="-1"><a class="header-anchor" href="#_6-1-nginx自己的错误页面" aria-hidden="true">#</a> 6.1 Nginx自己的错误页面</h3><p>Nginx访问一个静态的html 页面，当这个页面没有的时候，Nginx抛出404，那么如何返回给客户端404呢？</p><p>看下面的配置，这种情况下不需要修改任何参数，就能实现这个功能。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> www.test.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">root</span> /var/www/test</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
    <span class="token comment"># 定义错误页面码，如果出现相应的错误页面码，转发到那里。</span>
    <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">404</span> <span class="token number">403</span> <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /404.html</span><span class="token punctuation">;</span>
    <span class="token comment"># 承接上面的location</span>
    <span class="token directive"><span class="token keyword">location</span> = /404.html</span> <span class="token punctuation">{</span>
        <span class="token comment"># 放错误页面的目录路径。</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-反向代理的错误页面" tabindex="-1"><a class="header-anchor" href="#_6-2-反向代理的错误页面" aria-hidden="true">#</a> 6.2 反向代理的错误页面</h3><p>如果后台Tomcat处理报错抛出404，想把这个状态叫Nginx反馈给客户端或者重定向到某个连接，配置如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> www</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.201:8080 weight=20 max_fails=2 fail_timeout=30s
        ip_hash</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> www.test.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">root</span> /var/www/test</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">if($request_uri</span> ~* <span class="token string">&#39;^/$&#39;</span>)</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">rewrite</span> .* http://www.test2.com/index.html redirect</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment"># 关键参数：这个变量开启后，我们才能自定义错误页面，当后端返回404，nginx拦截错误，定义错误页面</span>
        <span class="token directive"><span class="token keyword">proxy_intercept_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://www</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> HOST <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">404</span> /404.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /404.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-nginx解析php代码的错误页面" tabindex="-1"><a class="header-anchor" href="#_6-3-nginx解析php代码的错误页面" aria-hidden="true">#</a> 6.3 Nginx解析php代码的错误页面</h3><p>如果后端是php解析的，需要加一个变量</p><p>在http段中加一个变量</p><p><code>fastcgi_intercept_errors on</code>就可以了。</p><blockquote><p>参考链接：</p><p>https://www.hi-linux.com/posts/53006.html</p><p>https://blog.csdn.net/lijunwyf/article/details/79611003</p></blockquote>`,34),p=[t];function l(c,o){return s(),a("div",null,p)}const u=n(i,[["render",l],["__file","http.html.vue"]]);export{u as default};
