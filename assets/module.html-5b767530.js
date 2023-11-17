import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as o,b as e,d as n,e as a,a as i}from"./app-a087e768.js";const c={},r=e("h1",{id:"_3-5-nginx常用模块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-5-nginx常用模块","aria-hidden":"true"},"#"),n(" 3.5 nginx常用模块")],-1),d=e("h2",{id:"_1-module-ngx-http-gzip-module",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-module-ngx-http-gzip-module","aria-hidden":"true"},"#"),n(" 1 Module ngx_http_gzip_module")],-1),u=e("p",null,[n("该"),e("code",null,"ngx_http_gzip_module"),n("模块是一个使用“gzip”方法压缩响应的过滤器。这通常有助于将传输数据的大小减少一半甚至更多。")],-1),v={href:"https://en.wikipedia.org/wiki/BREACH",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>在实际的应用中我们发现压缩的比率往往在 3 到 10 倍，也就是本来 50k 大小的页面，采用压缩后实际传输的内容大小只有 5 至 15k 大小，这可以大大节省服务器的网络带宽，同时如果应用程序的响应足够快时，网站的速度瓶颈就转到了网络的传输速度上，因此内容压缩后就可以大大的提升页面的浏览速度。</p><h3 id="_1-1-example-configuration" tabindex="-1"><a class="header-anchor" href="#_1-1-example-configuration" aria-hidden="true">#</a> 1.1 Example Configuration</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip on;
gzip_buffers 4 8k;
gzip_comp_level 6;
gzip_disable &quot;MSIE [1-6]\\.&quot;;
gzip_http_version 1.1;
gzip_min_length 1000;
gzip_proxied any;
gzip_vary on;
gzip_types text/plain text/css application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json image/jpeg image/gif image/png image/jpg;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-directives" tabindex="-1"><a class="header-anchor" href="#_1-2-directives" aria-hidden="true">#</a> 1.2 Directives</h3><p><strong>gzip</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	gzip on | off;
Default: gzip off;
Context:	http, server, location, if in location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用或禁用gzipping响应。</p><p><strong>gzip_buffers</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	gzip_buffers number size;
Default: gzip_buffers 32 4k|16 8k;
Context:	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置用于压缩响应的缓冲区<code>*number*</code>和<code>*size*</code>。默认情况下，缓冲区大小等于一个内存页面。这是4K或8K，具体取决于平台。</p><p><strong>gzip_comp_level</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	gzip_comp_level level;
Default: gzip_comp_level 1;
Context:	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置<code>level</code>响应的gzip压缩。可接受的值范围为1到9。</p><p>推荐6压缩级别(级别越高,压的越小,越浪费CPU计算资源)</p><p><strong>gzip_disable</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	gzip_disable regex ...;
Default: —
Context:	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对具有与任何指定正则表达式匹配的“User-Agent”标头字段的请求禁用gzipping响应。</p><p>特殊掩码“ <code>msie6</code>”（0.7.12）对应于正则表达式“ <code>MSIE [4-6]\\.</code>”，但效果更快。</p><p><strong>gzip_http_version</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	gzip_http_version 1.0 | 1.1;
Default: gzip_http_version 1.1;
Context:	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置压缩响应所需的最低HTTP请求版本。</p><p>99.99%的浏览器基本上都支持gzip解压了，所以可以不用设这个值,保持系统默认即可。</p><p><strong>gzip_min_length</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	gzip_min_length length;
Default: gzip_min_length 20;
Context:	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置将被gzip压缩的响应的最小长度。长度仅由“Content-Length”响应头字段确定。</p><p><strong>gzip_proxied</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	gzip_proxied off | expired | no-cache | no-store | private | no_last_modified | no_etag | auth | any ...;
Default: gzip_proxied off;
Context:	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据请求和响应启用或禁用对代理请求的响应的gzipping。请求被代理的事实由“Via”请求头字段的存在确定。该指令接受多个参数：</p><ul><li><code>off</code>：禁用所有代理请求的压缩，忽略其他参数;</li><li><code>expired</code>：如果响应头包含“Expires”字段，其值为禁用缓存，则启用压缩;</li><li><code>no-cache</code>：如果响应头包含带有“ <code>no-cache</code>”参数的“Cache-Control”字段，则启用压缩;</li><li><code>no-store</code>：如果响应头包含带有“ <code>no-store</code>”参数的“Cache-Control”字段，则启用压缩;</li><li><code>private</code>：如果响应头包含带有“ <code>private</code>”参数的“Cache-Control”字段，则启用压缩;</li><li><code>no_last_modified</code>：如果响应头不包含“Last-Modified”字段，则启用压缩;</li><li><code>no_etag</code>：如果响应头不包含“ETag”字段，则启用压缩;</li><li><code>auth</code>：如果请求标头包含“授权”字段，则启用压缩;</li><li><code>any</code>：为所有代理请求启用压缩。</li></ul><p><strong>gzip_types</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	gzip_types mime-type ...;
Default:	gzip_types text/html;
Context:	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了“ <code>text/html</code>” 之外，还允许对指定的MIME类型进行gzipping响应。特殊值“ <code>*</code>”匹配任何MIME类型。</p><blockquote><p>图片类型的文件压缩比例很小，可以不忽略不计，所以图片不建议压缩</p></blockquote><p><strong>gzip_vary</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	gzip_vary on | off;
Default:	gzip_vary off;
Context:	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),k={href:"http://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip",target:"_blank",rel:"noopener noreferrer"},g={href:"http://nginx.org/en/docs/http/ngx_http_gzip_static_module.html#gzip_static",target:"_blank",rel:"noopener noreferrer"},b={href:"http://nginx.org/en/docs/http/ngx_http_gunzip_module.html#gunzip",target:"_blank",rel:"noopener noreferrer"},h=i(`<h3 id="_1-3-常见问题" tabindex="-1"><a class="header-anchor" href="#_1-3-常见问题" aria-hidden="true">#</a> 1.3 常见问题</h3><p><strong>调用接口时，返回json乱码的问题</strong></p><p>原因：</p><p>gzip是nginx的压缩格式。（gzip是浏览器可接受的压缩格式） 但是我们调用接口并没有通过浏览器。所以没有办法对返回的结果进行解压。</p><p>解决办法：</p><ul><li>在响应的<code>location</code>中关闭gzip</li><li>或者让后端改代码，增加判断，然后用gzip流的方式进行解压读取</li></ul><h2 id="_2-module-ngx-http-log-module" tabindex="-1"><a class="header-anchor" href="#_2-module-ngx-http-log-module" aria-hidden="true">#</a> 2 Module ngx_http_log_module</h2><h3 id="_2-1-example-configuration" tabindex="-1"><a class="header-anchor" href="#_2-1-example-configuration" aria-hidden="true">#</a> 2.1 Example Configuration</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">log_format</span> compression <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &#39;</span>
                       <span class="token string">&#39;&quot;<span class="token variable">$request</span>&quot; <span class="token variable">$status</span> <span class="token variable">$bytes_sent</span> &#39;</span>
                       <span class="token string">&#39;&quot;<span class="token variable">$http_referer</span>&quot; &quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$gzip_ratio</span>&quot;&#39;</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">access_log</span> /spool/logs/nginx-access.log compression buffer=32k</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-access-log指令" tabindex="-1"><a class="header-anchor" href="#_2-2-access-log指令" aria-hidden="true">#</a> 2.2 access_log指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	access_log path [format [buffer=size] [gzip[=level]] [flush=time] [if=condition]];
		access_log off;
Default:	access_log logs/access.log combined;
Context:	http, server, location, if in location, limit_except
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-log-format指令" tabindex="-1"><a class="header-anchor" href="#_2-3-log-format指令" aria-hidden="true">#</a> 2.3 log_format指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	log_format name [escape=default|json|none] string ...;
Default:	log_format combined &quot;...&quot;;
Context:	http
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-rewrite模块" tabindex="-1"><a class="header-anchor" href="#_3-rewrite模块" aria-hidden="true">#</a> 3 Rewrite模块</h2><h3 id="_3-1-return指令" tabindex="-1"><a class="header-anchor" href="#_3-1-return指令" aria-hidden="true">#</a> 3.1 return指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	return code [text];
		return code URL;
		return URL;
Default:	—
Context:	server, location, if
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回状态码</strong></p><ul><li>nginx自定义 <ul><li>444：关闭连接</li></ul></li><li>HTTP1.0标准 <ul><li>301：http1.0永久重定向</li><li>302：临时重定向，禁止被缓存</li></ul></li><li>HTTP1.1标准 <ul><li>303：临时重定向，允许改变方法，禁止被缓存</li><li>307：临时重定向，不允许改变方式，禁止被缓存</li><li>308：永久重定向，不允许改变方法</li></ul></li></ul><p><strong>示例</strong></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server_name</span> wiki.clay-wangzhi.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">8080</span></span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">root</span> html/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_page</span> 404/403.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">404</span> <span class="token string">&quot;find nothing!&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>return指令与errror_page</strong></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200320195040345.png" alt=""></p><h3 id="_3-2-rewrite指令" tabindex="-1"><a class="header-anchor" href="#_3-2-rewrite指令" aria-hidden="true">#</a> 3.2 rewrite指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	rewrite regex replacement [flag];
Default:	—
Context:	server, location, if
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>功能</strong></p><ul><li><p>将regex指定的url替换成replacement这个新的url</p><p>可以使用正则表达式及变量提取</p></li><li><p>当replacement以http://或者https://或者$schema开头，则直接返回302重定向</p></li><li><p>替换后的url根据flag指定的方式进行处理</p><p>如果在同一级配置块中存在多个rewrite规则，那么会自下而下逐个检查；被某条件规则替换完成后，会重新一轮的替换检查，因此，隐含有循环机制；[flag]所表示的标志位用于控制此循环机制；</p><ul><li><p>last：</p><ul><li>浏览器地址栏URL地址不变</li><li>用replacement这个URI进行新的location匹配，重写完成后停止对当前URI在当前location中后续的其它重写操作，而后对新的URI启动新一轮重写检查；提前重启新一轮循环；</li></ul></li><li><p>beak：</p><ul><li>浏览器地址栏URL地址不变</li><li>break指令停止当前脚本指令的执行，等价于独立的break指令,重写完成后停止对当前URI在当前location中后续的其它重写操作，而后直接跳转至重写规则配置块之后的其它配置；结束循环；</li></ul></li><li><p>redirect：</p><ul><li>浏览器地址会显示跳转后的URL地址</li><li>返回302临时重定向，</li></ul></li><li><p>permanent：</p><ul><li>浏览器地址会显示跳转后的URL地址</li><li>返回301永久重定向</li></ul></li></ul></li></ul><blockquote><p>功能一句话概括为：使用nginx提供的全局变量或自己设置的变量，结合正则表达式和标志位实现url重写以及重定向。</p></blockquote><p><strong>示例1</strong></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>        <span class="token directive"><span class="token keyword">root</span> html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /first</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">rewrite</span> /first(.*) /second<span class="token variable">$1</span> last</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;first!&#39;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> /second</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">rewrite</span> /second(.*) /third<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;second!&#39;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> /third</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;third!&#39;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问/first/1.txt的结果为：<code>html/third/1.txt</code>的内容</p><p>访问/second/1.txt的结果为：<code>html/third/1.txt</code>的内容</p><p>访问/third/1.txt的结果为：<code>third</code>的内容</p><p><strong>示例</strong>2</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># http://www.test.com/test/abc/1.html ⇒ http://www.test.com/ccc/bbb/2.html</span>
<span class="token directive"><span class="token keyword">location</span> /test</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> .* /ccc/bbb/2.html permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># http://www.test.com/2015/ccc/bbb/2.html ==&gt; http://www.test.com/2014/ccc/bbb/2.html</span>
<span class="token directive"><span class="token keyword">location</span> /2015</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^/2015/(.*)$ /2014/<span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># http://www.test.com/2015/ccc/bbb/2.html  ==&gt; http://jd.com/index.php</span>
<span class="token directive"><span class="token keyword">location</span> /2015</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$host</span> ~* test.com)</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">rewrite</span> .* http://www.jd.com/index.php permanent</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># http://www.test.com/kkk/1.html ==&gt; http://jd.com/kkk/1.html</span>
<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$host</span> ~* test.com)</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">rewrite</span> .* http://www.jd.com/<span class="token variable">$request_uri</span> permanent</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 有时候在访问一个二级子目录时会出现目录后的/无法补齐，如：</span>
<span class="token comment">#  elinks --dump www.test.com/www  无法访问</span>
<span class="token comment">#  elinks --dump www.test.com/www/可以访问 </span>
<span class="token directive"><span class="token keyword">if</span> (-d <span class="token variable">$request_filename</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^(.*)([^/])$ http://<span class="token variable">$host</span><span class="token variable">$1</span><span class="token variable">$2</span>/ permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># ^/(.*)([^/])$表示以/符号开始并紧跟着任何字符，同时不是以/为结束的字符串，在我的url中，(.*)表示的ww，([^/])表示的w</span>

<span class="token comment"># http://www.test.com/login/robin.html     ==&gt;  http://www.test.com/reg/login.php?user=robin</span>
<span class="token directive"><span class="token keyword">location</span> /login</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^/login/(.*)\\.html$ /reg/login.php?user=<span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># http://www.test.com/uplook/10-10-10.html  ==&gt;  http://www.test.com/uplook/10/10/10.html </span>
<span class="token directive"><span class="token keyword">location</span> /uplook</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^/uplook/([0-9]+)-([0-9]+)-([0-9]+)\\.html$ /uplook/<span class="token variable">$1</span>/<span class="token variable">$2</span>/<span class="token variable">$3</span>.html permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># set 指令是用于定义一个变量，并且赋值。应用于server,location,if环境。</span>
<span class="token comment"># http://robin.test.com ==&gt; http://www.test.com/robin</span>
<span class="token comment"># http://zorro.test.com ==&gt; http://www.test.com/zorro</span>
<span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$host</span> ~* <span class="token string">&quot;^www.test.com$&quot;</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">break</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$host</span> ~* <span class="token string">&quot;^(.*)\\.test\\.com$&quot;</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$user</span> <span class="token variable">$1</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">rewrite</span> .* http://www.test.com/<span class="token variable">$user</span> permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>last 一般写在server和if中，而break一般使用在location中</p></blockquote><h3 id="_3-3-if指令" tabindex="-1"><a class="header-anchor" href="#_3-3-if指令" aria-hidden="true">#</a> 3.3 if指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	if (condition) { ... }
Default:	—
Context:	server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>规则：条件condition为真，则执行大括号内的指令；遵循值指令的继承规则</p><p><strong>if指令的条件表达式</strong></p><ul><li>检查变量为空或者值是否为0，直接使用 <ul><li>当表达式只是一个变量时，如果值为空或任何以 0 开头的字符串都会当做 false</li></ul></li><li>将变量与字符串做匹配，使用=或者!=</li><li>将变量与正则表达式做匹配 <ul><li>大小写敏感，~或者!~</li><li>大小写不敏感，~*或者!~*</li></ul></li><li>检查文件是否存在，使用-f或者!-f</li><li>检查目录是否存在，使用-d或者!-d</li><li>检查文件、目录、软连接是否存在，使用-e或者!-e</li><li>检查是否为可执行文件，使用-x或者!-x</li></ul><p><strong>示例</strong></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_user_agent</span> ~ MSIE)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^(.*)$ /msie/<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_cookie</span> ~* <span class="token string">&quot;id=([^;]+)(?:;|$)&quot;</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$id</span> <span class="token variable">$1</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$repuest_method</span> = POST)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">405</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$slow</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">limit_rate</span> <span class="token number">10k</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$invalid_referer</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-rewrite-log指令" tabindex="-1"><a class="header-anchor" href="#_3-4-rewrite-log指令" aria-hidden="true">#</a> 3.4 rewrite_log指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax: rewrite_log on | off;
Default:    rewrite_log off;
Context:    http, server, location, if
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-realip模块" tabindex="-1"><a class="header-anchor" href="#_4-realip模块" aria-hidden="true">#</a> 4 realip模块</h2><ul><li>默认不会编译进Nginx，通过<code>--with-http_reaip_module</code>启用功能</li><li>功能：修改客户端地址</li><li>指令：set_real_ip_from、real_ip_header、real_ip_recursive</li><li>变量：reaip_remote_addr、reaip_remote_port</li></ul><h3 id="_4-1-directives" tabindex="-1"><a class="header-anchor" href="#_4-1-directives" aria-hidden="true">#</a> 4.1 Directives</h3><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317100631841.png" alt=""></p><h2 id="_5-limit-conn模块" tabindex="-1"><a class="header-anchor" href="#_5-limit-conn模块" aria-hidden="true">#</a> 5 limit_conn模块</h2><p>生效阶段：NGX_HTTP_PREACCESS_PHASE阶段</p><p>生效范围：全部worker进程（基于共享内存），进入preaccess阶段前不生效，限制的有效性取决于key的设计：依赖postread阶段的realip模块取到真实ip</p><h3 id="_5-1-指令" tabindex="-1"><a class="header-anchor" href="#_5-1-指令" aria-hidden="true">#</a> 5.1 指令</h3><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200321202747188.png" alt=""></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200321202819297.png" alt=""></p><h2 id="_6-limit-req模块" tabindex="-1"><a class="header-anchor" href="#_6-limit-req模块" aria-hidden="true">#</a> 6 limit_req模块</h2><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200323104235892.png" alt=""></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200323104251827.png" alt=""></p><h3 id="_6-1-指令" tabindex="-1"><a class="header-anchor" href="#_6-1-指令" aria-hidden="true">#</a> 6.1 指令</h3><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200323104336149.png" alt=""></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200323104534992.png" alt=""></p><p>限制发生时向客户端返回的错误码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax:	limit_req_status code;
Default:	limit_req_status 503;
Context:	http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>limit_req 与 limit_conn 配置同时生效时， limit_req有效</p></blockquote><h3 id="_6-2-example" tabindex="-1"><a class="header-anchor" href="#_6-2-example" aria-hidden="true">#</a> 6.2 Example</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">geo</span> <span class="token variable">$limit</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">default</span> <span class="token number">1</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">10.0.0.0/8</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">192.168.0.0/64</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token directive"><span class="token keyword">map</span> <span class="token variable">$limit</span> <span class="token variable">$limit_key</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">0</span> <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">1</span> <span class="token variable">$binary_remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$limit_key</span> zone=req_zone:10m rate=5r/s</span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">limit_req</span> zone=req_zone burst=10 nodelay</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子同时使用了geo和map指令。geo块将给在白名单中的IP地址对应的$limit变量分配一个值0，给其它不在白名单中的分配一个值1。然后我们使用一个映射将这些值转为key，如下：</p><p>如果<code>$limit</code>变量的值是0，<code>$limit_key</code>变量将被赋值为空字符串</p><p>如果<code>$limit</code>变量的值是1，<code>$limit_key</code>变量将被赋值为客户端二进制形式的IP地址</p><p>两个指令配合使用，白名单内IP地址的$limit_key变量被赋值为空字符串，不在白名单内的被赋值为客户端的IP地址。当limit_req_zone后的第一个参数是空字符串时，不会应用“流量限制”，所以白名单内的IP地址(10.0.0.0/8和192.168.0.0/24 网段内)不会被限制。其它所有IP地址都会被限制到每秒5个请求。</p><p>limit_req指令将限制应用到**/**的location块，允许在配置的限制上最多超过10个数据包的突发，并且不会延迟转发。</p><blockquote><p>参考链接：</p><p>https://www.jianshu.com/p/bbb51f727d46</p></blockquote>`,71);function _(x,w){const s=l("ExternalLinkIcon");return p(),o("div",null,[r,d,u,e("blockquote",null,[e("p",null,[n("使用SSL / TLS协议时，压缩的响应可能会受到 "),e("a",v,[n("BREACH"),a(s)]),n("攻击。")])]),m,e("p",null,[n("如果指令"),e("a",k,[n("gzip"),a(s)]),n("， "),e("a",g,[n("gzip_static"),a(s)]),n("或"),e("a",b,[n("gunzip"),a(s)]),n(" 处于活动状态， 则启用或禁用插入“Vary：Accept-Encoding”响应头字段 。")]),h])}const z=t(c,[["render",_],["__file","module.html.vue"]]);export{z as default};
