import{_ as n,e as s}from"./app.e53fe3a5.js";const a={},e=s(`<h1 id="_3-nginx\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-nginx\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3" aria-hidden="true">#</a> 3. nginx\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3</h1><p>\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> nginx</span><span class="token punctuation">;</span>
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
    <span class="token comment">#\u652F\u6301ssi\u5305\u542B\u6587\u4EF6</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h2 id="_1-\u6837\u4F8B\u6587\u4EF6\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#_1-\u6837\u4F8B\u6587\u4EF6\u89E3\u91CA" aria-hidden="true">#</a> 1 \u6837\u4F8B\u6587\u4EF6\u89E3\u91CA</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># \u5F15\u5165\u6587\u4EF6 mime.types\uFF0C\u662F\u4E00\u4E2A\u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u6587\u4EF6\u7C7B\u578B\u7684\u6620\u5C04\u8868</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token comment"># \u6307\u5B9A\u9ED8\u8BA4MIME\u7C7B\u578B\u4E3A\u4E8C\u8FDB\u5236\u5B57\u8282\u6D41(\u5373\u4E0B\u8F7D\u6587\u4EF6)  </span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
    <span class="token comment"># \u5B9A\u4E49\u8F93\u51FA\u65E5\u5FD7\u7684\u683C\u5F0F</span>
    <span class="token comment"># 1.$remote_addr \u4E0E$http_x_forwarded_for(\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668) \u7528\u4EE5\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7684ip\u5730\u5740\uFF1B</span>
    <span class="token comment"># 2.$remote_user \uFF1A\u7528\u6765\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7528\u6237\u540D\u79F0\uFF1B</span>
    <span class="token comment"># 3.$time_local \uFF1A\u7528\u6765\u8BB0\u5F55\u8BBF\u95EE\u65F6\u95F4\u4E0E\u65F6\u533A\uFF1B</span>
    <span class="token comment"># 4.$request  \uFF1A\u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u7684url\u4E0Ehttp\u534F\u8BAE</span>
    <span class="token comment"># 5.$status \uFF1A\u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u72B6\u6001\uFF1B </span>
    <span class="token comment"># 6.$body_bytes_sent \uFF1A\u8BB0\u5F55\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u6587\u4EF6\u4E3B\u4F53\u5185\u5BB9\u5927\u5C0F\uFF1B</span>
    <span class="token comment"># 7.$http_referer \uFF1A\u7528\u6765\u8BB0\u5F55\u4ECE\u90A3\u4E2A\u9875\u9762\u94FE\u63A5\u8BBF\u95EE\u8FC7\u6765\u7684\uFF1B</span>
    <span class="token comment"># 8.$http_user_agent \uFF1A\u8BB0\u5F55\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u7684\u76F8\u5173\u4FE1\u606F</span>
    <span class="token comment"># 9.$request_time \uFF1A\u6574\u4E2A\u8BF7\u6C42\u7684\u603B\u65F6\u95F4</span>
    <span class="token comment"># 10.$host\u53D8\u91CF\u7684\u503C\u6309\u7167\u5982\u4E0B\u4F18\u5148\u7EA7\u83B7\u5F97\uFF1A\u8BF7\u6C42\u884C\u4E2D\u7684host.\u8BF7\u6C42\u5934\u4E2D\u7684Host\u5934\u90E8.\u4E0E\u4E00\u6761\u8BF7\u6C42\u5339\u914D\u7684server name.</span>
    <span class="token comment"># 11.$upstream_addr \uFF1A\u540E\u53F0upstream\u7684\u5730\u5740\uFF0C\u5373\u771F\u6B63\u63D0\u4F9B\u670D\u52A1\u7684\u4E3B\u673A\u5730\u5740\uFF0C\u598210.10.10.100:80</span>
    <span class="token comment"># 12.$upstream_response_time \uFF1A\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\uFF0Cupstream\u54CD\u5E94\u65F6\u95F4    </span>
    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
                      <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">log_format</span>  prod <span class="token string">&#39;<span class="token variable">$remote_addr|</span><span class="token variable">$remote_user|[</span><span class="token variable">$time_local]|</span><span class="token variable">$request</span>|&#39;</span>
                     <span class="token string">&#39;<span class="token variable">$status</span>|<span class="token variable">$body_bytes_sent|</span><span class="token variable">$http_referer|</span>&#39;</span>
                     <span class="token string">&#39;<span class="token variable">$http_user_agent|</span><span class="token variable">$request_time|</span><span class="token variable">$host</span>|<span class="token variable">$upstream_addr|</span><span class="token variable">$upstream_response_time</span>&#39;</span></span><span class="token punctuation">;</span>
    
    <span class="token comment"># \u6307\u5B9Aaccess_log\u7684\u5B58\u653E\u8DEF\u5F84\u3001\u683C\u5F0F\u548C\u7F13\u5B58\u5927\u5C0F</span>
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/access.log  prod</span><span class="token punctuation">;</span>
    
    <span class="token comment"># \u6307\u5B9A\u7F16\u7801\u683C\u5F0F\uFF0C\u82E5\u7F51\u9875\u683C\u5F0F\u4E0E\u6B64\u4E0D\u540C\uFF0C\u5C06\u88AB\u81EA\u52A8\u8F6C\u7801</span>
    <span class="token directive"><span class="token keyword">charset</span>  utf-8</span><span class="token punctuation">;</span>
    <span class="token comment"># \u5141\u8BB8nginx\u4F7F\u7528error_page\u5904\u7406\u9519\u8BEF\u4FE1\u606F\uFF0C\u4F20\u90124xx\u548C5xx\u9519\u8BEF\u4FE1\u606F\u5230\u5BA2\u6237\u7AEF</span>
    <span class="token directive"><span class="token keyword">fastcgi_intercept_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">server_names_hash_bucket_size</span> <span class="token number">256</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_header_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">large_client_header_buffers</span> <span class="token number">4</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
    
    <span class="token comment">#\u5B9A\u4E49\u767D\u540D\u5355ip\u5217\u8868\u53D8\u91CF</span>
	<span class="token directive"><span class="token keyword">geo</span> <span class="token variable">$whiteip_list</span></span> <span class="token punctuation">{</span>     
    	<span class="token directive"><span class="token keyword">default</span> <span class="token number">1</span></span><span class="token punctuation">;</span>
    	<span class="token directive"><span class="token keyword">127.0.0.1</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
    	<span class="token directive"><span class="token keyword">192.168.0.167</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
    	<span class="token directive"><span class="token keyword">192.168.0.48</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">#\u7528map\u6307\u4EE4\u6620\u5C04\u5C06\u767D\u540D\u5355\u5217\u8868\u4E2D\u5BA2\u6237\u7AEF\u8BF7\u6C42ip\u4E3A\u7A7A\u4E32 </span>
	<span class="token directive"><span class="token keyword">map</span> <span class="token variable">$whiteip_list</span> <span class="token variable">$limit</span></span> <span class="token punctuation">{</span>
    	<span class="token directive"><span class="token keyword">1</span> <span class="token variable">$binary_remote_addr</span></span><span class="token punctuation">;</span>
    	<span class="token directive"><span class="token keyword">0</span> <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    

	<span class="token comment">#\u5F53\u67D0\u4E2AIP\u8BBF\u95EEexample.com\u8FD9\u4E2A\u57DF\u540D\u65F6\uFF0C\u6B64IP\u5F97\u5E76\u53D1\u8FDE\u63A5\u8D85\u8FC710\uFF0C\u5219\u4F1A\u62A5503\uFF08Service Temporarily Unavailable\uFF09\uFF0C</span>
	<span class="token comment">#\u8868\u793A\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u6B64\u65F6\u4F1A\u8FD4\u56DE\u7ED9\u7528\u6237\u6211\u4EEC\u4E8B\u5148\u5B9A\u4E49\u597D\u9519\u8BEF\u9875\u9762\u3002\u7531\u201Climit_conn conn_ip 10;\u201D\u5B9E\u73B0\u3002</span>
	<span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$limit</span> zone=conn_ip:10m</span><span class="token punctuation">;</span>
	<span class="token comment">#\u5F53\u8BBF\u95EEexample.com\u8FD9\u4E2A\u57DF\u540D\u7684\u8FDE\u63A5\u603B\u6570\u8D85\u8FC71000\u65F6\uFF0C\u540C\u6837\u4F1A\u62A5503\uFF0C\u8FD4\u56DE\u5B9A\u4E49\u597D\u7684\u9519\u8BEF\u9875\u9762\u3002</span>
	<span class="token comment">#\u7531\u201Climit_conn conn_server 1000;\u201D\u5B9E\u73B0</span>
	<span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$limit</span> zone=conn_server:10m</span><span class="token punctuation">;</span>
	<span class="token comment">#\u5F53\u8FBE\u5230\u6700\u5927\u9650\u5236\u8FDE\u63A5\u6570\u540E\uFF0C\u8BB0\u5F55\u65E5\u5FD7\u7684\u7B49\u7EA7</span>
	<span class="token directive"><span class="token keyword">limit_conn_log_level</span> info</span><span class="token punctuation">;</span>  <span class="token comment">#[info | notice | warn | error(\u9ED8\u8BA4)]</span>
	<span class="token comment">#\u5F53\u8D85\u8FC7\u9650\u5236\u65F6\uFF0C\u8FD4\u56DE\u7684\u72B6\u6001\u7801\uFF08\u9ED8\u8BA4\u662F503\uFF09\uFF0Ccode\u503C\u53EA\u80FD\u8BBE\u7F6E\u5728400\u5230599\u4E4B\u95F4</span>
	<span class="token directive"><span class="token keyword">limit_conn_status</span> <span class="token number">503</span></span><span class="token punctuation">;</span>

	<span class="token comment">#\u5229\u7528\u4EE4\u724C\u6876\u539F\u7406\uFF0C\u6765\u9650\u5236\u7528\u6237\u7684\u8FDE\u63A5\u9891\u7387</span>
	<span class="token comment">#rate\u6BCF\u4E2AIP\u5E73\u5747\u5904\u7406\u7684\u8BF7\u6C42\u9891\u7387\u4E3A\u6BCF\u79D2\u4E00\u6B21\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u7F6E\u6210\u6BCF\u79D2\u5904\u7406\u8BF7\u6C42\u6570\u6216\u8005\u6BCF\u5206\u949F\u5904\u7406\u8BF7\u6C42\u6570\uFF0C\u4F46\u5FC5\u987B\u662F\u6574\u6570\u3002</span>
	<span class="token comment">#\u6240\u4EE5\u5982\u679C\u4F60\u9700\u8981\u6307\u5B9A\u6BCF\u79D2\u5904\u7406\u5C11\u4E8E1\u4E2A\u7684\u8BF7\u6C42\uFF0C2\u79D2\u5904\u7406\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u4F7F\u7528 \u201C30r/m\u201D\u3002</span>
	<span class="token directive"><span class="token keyword">limit_req_zone</span>  <span class="token variable">$limit</span> zone=req_ip:10m rate=10r/s</span><span class="token punctuation">;</span>

    <span class="token comment"># \u7528\u6237\u8BA4\u8BC1</span>
    <span class="token comment"># yum install httpd-tools               #\u9002\u7528centos</span>
    <span class="token comment"># sudo apt-get install apache2-utils    #\u9002\u7528ubuntu</span>
    <span class="token comment"># \u751F\u6210\u7528\u6237\u5BC6\u7801\u6587\u4EF6</span>
    <span class="token comment"># htpasswd -c /data/.htpasswd user1 </span>
    <span class="token directive"><span class="token keyword">auth_basic</span>  <span class="token string">&quot;User Login&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">auth_basic_user_file</span>  /data/.htpasswd</span><span class="token punctuation">;</span>

    <span class="token comment"># \u9690\u85CFnginx\u7248\u672C\u53F7</span>
    <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
     <span class="token comment"># sendfile \u6307\u4EE4\u7528\u4E8E\u6307\u5B9A Nginx \u662F\u5426\u8C03\u7528Linux \u7684 sendfile \u51FD\u6570\uFF08zero copy \u65B9\u5F0F\uFF09\u6765\u8F93\u51FA\u6587\u4EF6\uFF0C\u63D0\u9AD8\u6587\u4EF6\u4F20\u8F93\u6548\u7387 </span>
    <span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u544A\u8BC9nginx\u5728\u4E00\u4E2A\u6570\u636E\u5305\u91CC\u53D1\u9001\u6240\u6709\u5934\u6587\u4EF6\uFF0C\u800C\u4E0D\u4E00\u4E2A\u63A5\u4E00\u4E2A\u7684\u53D1\u9001\u3002\u5C31\u662F\u8BF4\u6570\u636E\u5305\u4E0D\u4F1A\u9A6C\u4E0A\u4F20\u9001\u51FA\u53BB\uFF0C\u7B49\u5230\u6570\u636E\u5305\u6700\u5927\u65F6\uFF0C\u4E00\u6B21\u6027\u7684\u4F20\u8F93\u51FA\u53BB\uFF0C\u8FD9\u6837\u6709\u52A9\u4E8E\u89E3\u51B3\u7F51\u7EDC\u5835\u585E\u3002</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u4E0D\u7F13\u5B58data-sends\uFF08\u5173\u95ED Nagle \u7B97\u6CD5\uFF09\uFF0C\u8FD9\u4E2A\u80FD\u591F\u63D0\u9AD8\u9AD8\u9891\u53D1\u9001\u5C0F\u6570\u636E\u62A5\u6587\u7684\u5B9E\u65F6\u6027</span>
    <span class="token directive"><span class="token keyword">tcp_nodelay</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#\u652F\u6301ssi\u5305\u542B\u6587\u4EF6</span>
    <span class="token directive"><span class="token keyword">ssi</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssi_silent_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token comment">#   ssi_types text/html;</span>
    
    <span class="token comment"># \u542F\u7528\u76EE\u5F55\u6D4F\u89C8</span>
    <span class="token comment"># autoindex on;</span>
    <span class="token comment"># \u663E\u793A\u51FA\u6587\u4EF6\u7684\u786E\u5207\uFF0F\u5927\u6982\u5927\u5C0F\uFF1Aon\u786E\u5207\u5927\u5C0F\uFF0C\u5355\u4F4D\u662Fbytes\uFF1Boff\u5927\u6982\u5927\u5C0F\uFF0C\u5355\u4F4D\u662FkB\u6216\u8005MB\u6216\u8005GB</span>
    <span class="token comment"># autoindex_exact_size off;</span>
    <span class="token comment"># off\u663E\u793A\u7684\u6587\u4EF6\u65F6\u95F4\u4E3AGMT\u65F6\u95F4\uFF0Con\u663E\u793A\u7684\u6587\u4EF6\u65F6\u95F4\u4E3A\u6587\u4EF6\u7684\u670D\u52A1\u5668\u65F6\u95F4</span>
    <span class="token comment"># autoindex_localtime on; </span>

     <span class="token comment"># \u6307\u5B9A\u5BA2\u6237\u7AEF\u8FDE\u63A5\u4FDD\u6301\u6D3B\u52A8\u7684\u8D85\u65F6\u65F6\u95F4\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09\uFF0C\u8D85\u8FC7\u65F6\u95F4\uFF0C\u670D\u52A1\u5668\u4F1A\u5173\u95ED\u8FDE\u63A5,\u592A\u77ED\u6216\u8005\u592A\u957F\u90FD\u4E0D\u4E00\u5B9A\u5408\u9002\uFF0C\u5F53\u7136\uFF0C\u6700\u597D\u662F\u6839\u636E\u4E1A\u52A1\u81EA\u8EAB\u7684\u60C5\u51B5\u6765\u52A8\u6001\u5730\u8C03\u6574\u8BE5\u53C2\u6570</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u4E00\u4E2A\u5B8C\u6574\u7684 request header \u7684\u8D85\u65F6\u65F6\u95F4\u3002\u5982\u679C\u5BA2\u6237\u7AEF\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u6CA1\u6709\u53D1\u9001\u4E00\u4E2A\u5B8C\u6574\u7684 request header\uFF0CNginx \u8FD4\u56DE HTTP 408\uFF08Request Timed Out\uFF09\u3002</span>
    <span class="token directive"><span class="token keyword">client_header_timeout</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u6307\u5B9A\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u5EFA\u7ACB\u8FDE\u63A5\u540E\u53D1\u9001 request body \u7684\u8D85\u65F6\u65F6\u95F4\u3002\u5982\u679C\u5BA2\u6237\u7AEF\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u6CA1\u6709\u53D1\u9001\u4EFB\u4F55\u5185\u5BB9\uFF0CNginx \u8FD4\u56DE HTTP 408\uFF08Request Timed Out\uFF09\u3002</span>
    <span class="token directive"><span class="token keyword">client_body_timeout</span> <span class="token number">20</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u5BA2\u6237\u7AEF\u8BF7\u6C42\u5355\u4E2A\u6587\u4EF6\u7684\u6700\u5927\u5B57\u8282\u6570,\u8FD9\u4E2A\u53C2\u6570\u7684\u8BBE\u7F6E\u9650\u5236\u4E86\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F\u3002</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">200m</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u5F53\u5BA2\u6237\u7AEF\u4EE5POST\u65B9\u6CD5\u63D0\u4EA4\u4E00\u4E9B\u6570\u636E\u5230\u670D\u52A1\u7AEF\u65F6\uFF0C\u4F1A\u5148\u5199\u5165\u5230client_body_buffer\u4E2D\uFF0C\u5982\u679Cbuffer\u5199\u6EE1\u4F1A\u5199\u5230\u4E34\u65F6\u6587\u4EF6\u91CC\uFF0C\u5EFA\u8BAE\u8C03\u6574\u4E3A128k</span>
    <span class="token directive"><span class="token keyword">client_body_buffer_size</span>  <span class="token number">128k</span></span><span class="token punctuation">;</span>
    

    <span class="token comment">#\u5229\u7528\u4EE4\u724C\u6876\u539F\u7406\uFF0C\u6765\u9650\u5236\u7528\u6237\u7684\u8FDE\u63A5\u9891\u7387</span>
	<span class="token comment">#rate\u6BCF\u4E2AIP\u5E73\u5747\u5904\u7406\u7684\u8BF7\u6C42\u9891\u7387\u4E3A\u6BCF\u79D2\u4E00\u6B21\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u7F6E\u6210\u6BCF\u79D2\u5904\u7406\u8BF7\u6C42\u6570\u6216\u8005\u6BCF\u5206\u949F\u5904\u7406\u8BF7\u6C42\u6570\uFF0C\u4F46\u5FC5\u987B\u662F\u6574\u6570\u3002</span>
	<span class="token comment">#\u6240\u4EE5\u5982\u679C\u4F60\u9700\u8981\u6307\u5B9A\u6BCF\u79D2\u5904\u7406\u5C11\u4E8E1\u4E2A\u7684\u8BF7\u6C42\uFF0C2\u79D2\u5904\u7406\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u4F7F\u7528 \u201C30r/m\u201D\u3002</span>
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

    <span class="token comment">#FastCGI\u76F8\u5173\u53C2\u6570\u662F\u4E3A\u4E86\u6539\u5584\u7F51\u7AD9\u7684\u6027\u80FD\uFF1A\u51CF\u5C11\u8D44\u6E90\u5360\u7528\uFF0C\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u3002</span>
    <span class="token directive"><span class="token keyword">fastcgi_connect_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_send_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_read_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_buffer_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_temp_file_write_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

    <span class="token comment"># include /etc/nginx/proxy.conf;</span>
    <span class="token comment">#\u53CD\u5411\u4EE3\u7406</span>
    <span class="token comment"># nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)</span>
	<span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4(\u4EE3\u7406\u63A5\u6536\u8D85\u65F6)</span>
	<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4(\u4EE3\u7406\u53D1\u9001\u8D85\u65F6)</span>
	<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span>
	<span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
    <span class="token comment"># proxy_buffers\u7F13\u51B2\u533A</span>
	<span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09</span>
	<span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20</span>
    <span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
    
    
    <span class="token comment">#\u53CD\u5411\u4EE3\u7406\u7F13\u5B58\u76EE\u5F55</span>
    <span class="token directive"><span class="token keyword">proxy_cache_path</span> /data/proxy/cache levels=1:2 keys_zone=cache_one:500m inactive=1d max_size=1g</span><span class="token punctuation">;</span>
    <span class="token comment">#levels=1:2 \u8BBE\u7F6E\u76EE\u5F55\u6DF1\u5EA6\uFF0C\u7B2C\u4E00\u5C42\u76EE\u5F55\u662F1\u4E2A\u5B57\u7B26\uFF0C\u7B2C2\u5C42\u662F2\u4E2A\u5B57\u7B26</span>
    <span class="token comment">#keys_zone:\u8BBE\u7F6Eweb\u7F13\u5B58\u540D\u79F0\u548C\u5185\u5B58\u7F13\u5B58\u7A7A\u95F4\u5927\u5C0F</span>
    <span class="token comment">#inactive:\u81EA\u52A8\u6E05\u9664\u7F13\u5B58\u6587\u4EF6\u65F6\u95F4\u3002</span>
    <span class="token comment">#max_size:\u786C\u76D8\u7A7A\u95F4\u6700\u5927\u53EF\u4F7F\u7528\u503C\u3002</span>
    <span class="token comment">#\u6307\u5B9A\u4E34\u65F6\u7F13\u5B58\u6587\u4EF6\u7684\u5B58\u50A8\u8DEF\u5F84(\u8DEF\u5F84\u9700\u548C\u4E0A\u9762\u8DEF\u5F84\u5728\u540C\u4E00\u5206\u533A)</span>
    <span class="token directive"><span class="token keyword">proxy_temp_path</span> /data/proxy/temp

    <span class="token comment"># include /etc/nginx/backend.conf;  </span>
    <span class="token comment"># \u8D1F\u8F7D\u5747\u8861\u670D\u52A1\u5668\u6C60</span>
    upstream my_server_pool</span> <span class="token punctuation">{</span>
        <span class="token comment">#\u8C03\u5EA6\u7B97\u6CD5</span>
        <span class="token comment">#1.\u8F6E\u5FAA\uFF08\u9ED8\u8BA4\uFF09\uFF08weight\u8F6E\u5FAA\u6743\u503C\uFF09</span>
        <span class="token comment">#2.ip_hash\uFF1A\u6839\u636E\u6BCF\u4E2A\u8BF7\u6C42\u8BBF\u95EEIP\u7684hash\u7ED3\u679C\u5206\u914D\u3002\uFF08\u4F1A\u8BDD\u4FDD\u6301\uFF09</span>
        <span class="token comment">#3.fair:\u6839\u636E\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4\u6700\u77ED\u8BF7\u6C42\u3002\uFF08upstream_fair\u6A21\u5757\uFF09</span>
        <span class="token comment">#4.url_hash:\u6839\u636E\u8BBF\u95EE\u7684url\u7684hash\u7ED3\u679C\u5206\u914D\u3002\uFF08\u9700hash\u8F6F\u4EF6\u5305\uFF09</span>
        <span class="token comment">#\u53C2\u6570\uFF1A</span>
        <span class="token comment">#down\uFF1A\u8868\u793A\u4E0D\u53C2\u4E0E\u8D1F\u8F7D\u5747\u8861</span>
        <span class="token comment">#backup:\u5907\u4EFD\u670D\u52A1\u5668</span>
        <span class="token comment">#max_fails:\u5141\u8BB8\u6700\u5927\u8BF7\u6C42\u9519\u8BEF\u6B21\u6570</span>
        <span class="token comment">#fail_timeout:\u8BF7\u6C42\u5931\u8D25\u540E\u6682\u505C\u670D\u52A1\u65F6\u95F4\u3002</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.109:80 weight=1 max_fails=2 fail_timeout=30</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.108:80 weight=2 max_fails=2 fail_timeout=30</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># \u6307\u660E\u5305\u542B\u8FDB\u6765\u7684\u5176\u4ED6\u914D\u7F6E\u6587\u4EF6</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/h5.conf</span><span class="token punctuation">;</span>
    <span class="token comment"># \u865A\u62DF\u4E3B\u673A\u5B9A\u4E49</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment"># \u76D1\u542C\u7AEF\u53E3</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span> 
        <span class="token comment">#listen     443;</span>
        <span class="token comment"># \u8BBF\u95EE\u57DF\u540D</span>
        <span class="token directive"><span class="token keyword">server_name</span>  example.com</span><span class="token punctuation">;</span>

        <span class="token comment"># \u7F16\u7801\u683C\u5F0F\uFF0C\u82E5\u7F51\u9875\u683C\u5F0F\u4E0E\u6B64\u4E0D\u540C\uFF0C\u5C06\u88AB\u81EA\u52A8\u8F6C\u7801</span>
        <span class="token comment">#charset utf-8;</span>

        <span class="token comment"># \u865A\u62DF\u4E3B\u673A\u8BBF\u95EE\u65E5\u5FD7\u5B9A\u4E49</span>
        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token comment"># \u7533\u8BF7\u7684\u8BC1\u4E66zip\u5305\u4E2D\u4E00\u822C\u542B\u6709\u5982\u4E0B\u4E09\u4E2A\u6587\u4EF6\uFF1A</span>
        <span class="token comment"># SSL \u51ED\u8BC1(\u4F8B\u5982: ssl_certificate.crt,\u6216\u79F0\u6700\u7EC8\u5B9E\u4F53\u51ED\u8BC1, \u516C\u94A5\u51ED\u8BC1\u6216\u8EAB\u4EFD\u9A8C\u8BC1\u51ED\u8BC1)</span>
        <span class="token comment"># \u4E2D\u7EE7CA\u51ED\u8BC1(\u4F8B\u5982: IntermediateCA.crt, \u6216\u79F0\u4FE1\u4EFB\u94FE\u51ED\u8BC1\u6216SSL\u51ED\u8BC1\u7684\u7B7E\u540D\u8005/\u53D1\u884C\u4EBA)</span>
        <span class="token comment"># \u79C1\u94A5\u6587\u4EF6(\u4F8B\u5982: private.key, \u751F\u6210\u51ED\u8BC1\u7B7E\u7AE0\u8981\u6C42(CSR)\u7684\u65F6\u5019\u5EFA\u7ACB\u7684)</span>
        <span class="token comment">#</span>
        <span class="token comment"># nginx\u7684\u914D\u7F6E\u7279\u6B8A\u5730\u65B9: \u9700\u8981\u5408\u5E76SSL\u51ED\u8BC1\u548C\u4E2D\u7EE7CA\u51ED\u8BC1, \u5373:</span>
        <span class="token comment">#   cat ssl_certificate.crt IntermediateCA.crt &gt;&gt; your_domain_name.crt</span>
        <span class="token comment"># \u6CE8\u610F\uFF1A-----END CERTIFICATE----------BEGIN CERTIFICATE-----\u9700\u8981\u8C03\u6574\u4E3A\uFF1A</span>
        <span class="token comment">#   -----END CERTIFICATE-----</span>
        <span class="token comment">#   -----BEGIN CERTIFICATE-----</span>
        <span class="token comment"># \u5426\u5219\u542F\u52A8\u65F6\u51FA\u9519\uFF0C\u5373SSL: error:0906D066:PEM routines:PEM_read_bio:bad end line</span>
        <span class="token comment">#</span>
        <span class="token directive"><span class="token keyword">ssl</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>  
        <span class="token comment">#\u865A\u62DF\u4E3B\u673A\u7684\u8BC1\u4E66\u6587\u4EF6  </span>
        <span class="token directive"><span class="token keyword">ssl_certificate</span> /etc/ssl/your_domain_name.crt</span><span class="token punctuation">;</span> <span class="token comment">#\u5408\u5E76SSL\u51ED\u8BC1\u548C\u4E2D\u7EE7CA\u51ED\u8BC1\u7684\u6587\u4EF6</span>
        <span class="token comment">#\u865A\u62DF\u4E3B\u673A\u79C1\u94A5\u6587\u4EF6  </span>
        <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/ssl/your_domain_name.key</span><span class="token punctuation">;</span> <span class="token comment">#\u79C1\u94A5\u6587\u4EF6</span>
        <span class="token comment"># \u652F\u6301ssl\u534F\u8BAE\u7248\u672C</span>
        <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1 TLSv1.1 TLSv1.2</span><span class="token punctuation">;</span>
        <span class="token comment"># \u5BA2\u6237\u7AEF\u4E00\u4FA7\u7684\u8FDE\u63A5\u53EF\u4EE5\u590D\u7528ssl session cache\u4E2D\u7F13\u5B58 \u7684ssl\u53C2\u6570\u7684\u6709\u6548\u65F6\u957F\uFF1B</span>
		<span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">5m</span></span><span class="token punctuation">;</span>
        <span class="token comment"># \u6307\u5B9A\u652F\u6301\u52A0\u5BC6\u7B97\u6CD5\uFF1B</span>
        <span class="token directive"><span class="token keyword">ssl_ciphers</span> AESGCM:ALL:!DH:!EXPORT:!RC4:+HIGH:!MEDIUM:!LOW:!aNULL:!eNULL</span><span class="token punctuation">;</span>
        <span class="token comment"># \u670D\u52A1\u7AEF\u503E\u5411\u4F7F\u7528\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF1B</span>
   		<span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>



        <span class="token comment"># \u5339\u914DURL</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token comment"># \u5B9A\u4E49\u9ED8\u8BA4\u7F51\u7AD9\u6839\u76EE\u5F55\u4F4D\u7F6E</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token comment"># \u5B9A\u4E49\u9996\u9875\u7D22\u5F15\u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u6309\u4EE5\u4E0B\u987A\u5E8F\u5339\u914D</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm index.php</span><span class="token punctuation">;</span>

            <span class="token comment">#\u53CD\u5411\u4EE3\u7406\u7F13\u5B58\u8BBE\u7F6E\u547D\u4EE4(proxy_cache zone|off,\u9ED8\u8BA4\u5173\u95ED\u6240\u4EE5\u8981\u8BBE\u7F6E)</span>
            <span class="token directive"><span class="token keyword">proxy_cache</span> cache_one</span><span class="token punctuation">;</span>
            <span class="token comment">#\u5BF9\u4E0D\u540C\u7684\u72B6\u6001\u7801\u7F13\u5B58\u4E0D\u540C\u65F6\u95F4</span>
            <span class="token directive"><span class="token keyword">proxy_cache_valid</span> <span class="token number">200</span> <span class="token number">304</span> <span class="token number">12h</span></span><span class="token punctuation">;</span>
            <span class="token comment">#\u8BBE\u7F6E\u4EE5\u4EC0\u4E48\u6837\u53C2\u6570\u83B7\u53D6\u7F13\u5B58\u6587\u4EF6\u540D</span>
            <span class="token directive"><span class="token keyword">proxy_cache_key</span> <span class="token variable">$host</span><span class="token variable">$uri</span><span class="token variable">$is_args</span><span class="token variable">$args</span></span><span class="token punctuation">;</span>
            <span class="token comment">#\u540E7\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7X-Forwarded-For\u83B7\u53D6\u7528\u6237\u771F\u5B9EIP</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span> 
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
            <span class="token comment">#nginx\u53CD\u5411\u4EE3\u7406\u9690\u85CF\u54CD\u5E94\u5934\uFF0C\u591A\u4E2A\u4EE3\u7406\u60C5\u51B5\u4E0B\u4E5F\u53EF\u4EE5\u5199\u5230http\u6BB5\u91CC\u9762</span>
            <span class="token directive"><span class="token keyword">proxy_hide_header</span> X-Application-Context</span><span class="token punctuation">;</span>
            <span class="token comment">#\u4EE3\u7406\u8BBE\u7F6E</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span>   http://my_server_pool</span><span class="token punctuation">;</span> 
            <span class="token comment">#\u6587\u4EF6\u8FC7\u671F\u65F6\u95F4\u63A7\u5236</span>
            <span class="token directive"><span class="token keyword">expires</span>    <span class="token number">1d</span></span><span class="token punctuation">;</span>

            <span class="token comment">#\u9650\u5236\u67D0\u4E2AIP\u6765\u6E90\u7684\u8FDE\u63A5\u5E76\u53D1\u6570\uFF0C\u6B64\u5904\u4E3A10\u4E2A</span>
            <span class="token directive"><span class="token keyword">limit_conn</span> conn_ip <span class="token number">10</span></span><span class="token punctuation">;</span>
            <span class="token comment">#\u9650\u5236\u67D0\u4E2A\u865A\u62DF\u670D\u52A1\u5668\u7684\u603B\u8FDE\u63A5\u6570\uFF0C\u6B64\u5904\u4E3A1000\u4E2A</span>
            <span class="token directive"><span class="token keyword">limit_conn</span> conn_server <span class="token number">1000</span></span><span class="token punctuation">;</span>
            <span class="token comment">#\u9650\u5236\u5E26\u5BBD, \u6BCF\u4E2A\u8FDE\u63A5\u53EA\u5141\u8BB8\u6700\u59275kb/s\u7684\u901F\u5EA6\u8FDB\u884C\u4E0B\u8F7D</span>
            <span class="token directive"><span class="token keyword">limit_rate</span> <span class="token number">5k</span></span><span class="token punctuation">;</span>

            <span class="token comment">#burst=5\u8FD9\u4E2A\u914D\u7F6E\u7684\u610F\u601D\u662F\u8BBE\u7F6E\u4E00\u4E2A\u5927\u5C0F\u4E3A5\u7684\u7F13\u51B2\u533A\uFF0C\u5F53\u6709\u5927\u91CF\u8BF7\u6C42\uFF08\u7206\u53D1\uFF09\u8FC7\u6765\u65F6\uFF0C</span>
            <span class="token comment">#\u8D85\u8FC7\u4E86\u8BBF\u95EE\u9891\u6B21\u9650\u5236\u7684\u8BF7\u6C42\u53EF\u4EE5\u5148\u653E\u5230\u8FD9\u4E2A\u7F13\u51B2\u533A\u5185\uFF0C\u5982\u679C\u6B64\u7F13\u51B2\u533A\u4E5F\u6EE1\u4E86\u5219\u4F1A\u8FD4\u56DE503</span>
            <span class="token comment">#nodelay \u5982\u679C\u8BBE\u7F6E\u6B64\u53C2\u6570\uFF0C\u8D85\u8FC7\u8BBF\u95EE\u9891\u6B21\u800C\u4E14\u7F13\u51B2\u533A\u4E5F\u6EE1\u4E86\u7684\u65F6\u5019\u5C31\u4F1A\u76F4\u63A5\u8FD4\u56DE503\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219\u6240\u6709\u8BF7\u6C42\u4F1A\u7B49\u5F85\u6392\u961F</span>
            <span class="token directive"><span class="token keyword">limit_req</span> zone=req_ip burst=5</span><span class="token punctuation">;</span>
            <span class="token comment">#limit_req zone=req_ip burst=5 nodelay;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> /download</span> <span class="token punctuation">{</span>
            <span class="token comment">#\u9650\u5236IP\u8BBF\u95EE</span>
            <span class="token directive"><span class="token keyword">deny</span> 192.168.0.2\uFF1B
            allow 192.168.0.0/24</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">allow</span> 192.168.1.1</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#\u9759\u6001\u6587\u4EF6\uFF0Cnginx\u81EA\u5DF1\u5904\u7406</span>
        <span class="token directive"><span class="token keyword">location</span> ~ ^/(images|javascript|js|css|flash|media|static)/</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>  <span class="token comment">#\u5173\u95EDaccess_log\uFF0C\u5373\u4E0D\u8BB0\u5F55\u8BBF\u95EE\u65E5\u5FD7</span>
            <span class="token comment">#\u8FC7\u671F30\u5929\uFF0C\u9759\u6001\u6587\u4EF6\u4E0D\u600E\u4E48\u66F4\u65B0\uFF0C\u8FC7\u671F\u53EF\u4EE5\u8BBE\u5927\u4E00\u70B9\uFF0C</span>
            <span class="token comment">#\u5982\u679C\u9891\u7E41\u66F4\u65B0\uFF0C\u5219\u53EF\u4EE5\u8BBE\u7F6E\u5F97\u5C0F\u4E00\u70B9\u3002</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">30d</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># \u53D1\u751F 404 \u9519\u8BEF\u65F6\u8FD4\u56DE 404.html\u9875\u9762</span>
        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        <span class="token comment"># \u53D1\u751F 50x \u9519\u8BEF\u65F6\u4F7F\u7528 50x.html</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># \u5C06 PHP \u811A\u672C\u8BF7\u6C42\u5168\u90E8\u8F6C\u53D1\u7ED9 FastCGI\uFF08127.0.0.1:9000\uFF09\u5904\u7406</span>
        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">fastcgi_pass</span>   127.0.0.1:9000</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">fastcgi_index</span>  index.php</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">fastcgi_param</span>  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
            <span class="token comment"># \u5F15\u5165\u6587\u4EF6\uFF0Cfastcgi\u7684\u9ED8\u8BA4\u914D\u7F6E\u53C2\u6570</span>
            <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br></div></div><h2 id="_2-\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> 2 \u5168\u5C40\u53D8\u91CF</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$args \uFF1A #\u8FD9\u4E2A\u53D8\u91CF\u7B49\u4E8E\u8BF7\u6C42\u884C\u4E2D\u7684\u53C2\u6570\uFF0C\u540C$query_string
$content_length \uFF1A \u8BF7\u6C42\u5934\u4E2D\u7684Content-length\u5B57\u6BB5\u3002
$content_type \uFF1A \u8BF7\u6C42\u5934\u4E2D\u7684Content-Type\u5B57\u6BB5\u3002
$document_root \uFF1A \u5F53\u524D\u8BF7\u6C42\u5728root\u6307\u4EE4\u4E2D\u6307\u5B9A\u7684\u503C\u3002
$host \uFF1A \u8BF7\u6C42\u4E3B\u673A\u5934\u5B57\u6BB5\uFF0C\u5426\u5219\u4E3A\u670D\u52A1\u5668\u540D\u79F0\u3002
$http_user_agent \uFF1A \u5BA2\u6237\u7AEFagent\u4FE1\u606F
$http_cookie \uFF1A \u5BA2\u6237\u7AEFcookie\u4FE1\u606F
$limit_rate \uFF1A \u8FD9\u4E2A\u53D8\u91CF\u53EF\u4EE5\u9650\u5236\u8FDE\u63A5\u901F\u7387\u3002
$request_method \uFF1A \u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u52A8\u4F5C\uFF0C\u901A\u5E38\u4E3AGET\u6216POST\u3002
$remote_addr \uFF1A \u5BA2\u6237\u7AEF\u7684IP\u5730\u5740\u3002
$remote_port \uFF1A \u5BA2\u6237\u7AEF\u7684\u7AEF\u53E3\u3002
$remote_user \uFF1A \u5DF2\u7ECF\u7ECF\u8FC7Auth Basic Module\u9A8C\u8BC1\u7684\u7528\u6237\u540D\u3002
$request_filename \uFF1A \u5F53\u524D\u8BF7\u6C42\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u7531root\u6216alias\u6307\u4EE4\u4E0EURI\u8BF7\u6C42\u751F\u6210\u3002
$scheme \uFF1A HTTP\u65B9\u6CD5\uFF08\u5982http\uFF0Chttps\uFF09\u3002
$server_protocol \uFF1A \u8BF7\u6C42\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u901A\u5E38\u662FHTTP/1.0\u6216HTTP/1.1\u3002
$server_addr \uFF1A \u670D\u52A1\u5668\u5730\u5740\uFF0C\u5728\u5B8C\u6210\u4E00\u6B21\u7CFB\u7EDF\u8C03\u7528\u540E\u53EF\u4EE5\u786E\u5B9A\u8FD9\u4E2A\u503C\u3002
$server_name \uFF1A \u670D\u52A1\u5668\u540D\u79F0\u3002
$server_port \uFF1A \u8BF7\u6C42\u5230\u8FBE\u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7\u3002
$request_uri \uFF1A \u5305\u542B\u8BF7\u6C42\u53C2\u6570\u7684\u539F\u59CBURI\uFF0C\u4E0D\u5305\u542B\u4E3B\u673A\u540D\uFF0C\u5982\uFF1A\u201D/foo/bar.php?arg=baz\u201D\u3002
$uri \uFF1A \u4E0D\u5E26\u8BF7\u6C42\u53C2\u6570\u7684\u5F53\u524DURI\uFF0C$uri\u4E0D\u5305\u542B\u4E3B\u673A\u540D\uFF0C\u5982\u201D/foo/bar.html\u201D\u3002
$document_uri \uFF1A \u4E0E$uri\u76F8\u540C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>https://jasonhzy.github.io/2017/09/03/nginx/</p><p>https://blog.csdn.net/tzy233/article/details/79780444</p><p>https://blog.csdn.net/Powerful_Fy/article/details/102845921</p><p>https://www.linuxidc.com/Linux/2018-01/150100.htm</p><p>https://www.jianshu.com/p/73e2cd39722c</p><p>https://www.cnblogs.com/my_life/articles/7070805.html</p><p>https://www.jianshu.com/nb/27610173</p><p>http://nginx.org/en/docs/http/ngx_http_core_module.html#variables</p><p>http://nginx.org/en/docs/</p></blockquote>`,8);function p(t,c){return e}var o=n(a,[["render",p],["__file","config.html.vue"]]);export{o as default};
