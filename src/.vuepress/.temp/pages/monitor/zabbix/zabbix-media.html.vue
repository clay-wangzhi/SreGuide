<template><h1 id="_3-zabbix添加报警媒介" tabindex="-1"><a class="header-anchor" href="#_3-zabbix添加报警媒介" aria-hidden="true">#</a> 3 zabbix添加报警媒介</h1>
<h2 id="zabbix添加报警媒介" tabindex="-1"><a class="header-anchor" href="#zabbix添加报警媒介" aria-hidden="true">#</a> zabbix添加报警媒介</h2>
<p>进入zabbix-web，点击Administrator--&gt;Media types--&gt;Create Media type</p>
<h3 id="添加email报警" tabindex="-1"><a class="header-anchor" href="#添加email报警" aria-hidden="true">#</a> 添加Email报警</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200115103058976.png" alt="" loading="lazy"></p>
<h3 id="添加钉钉报警" tabindex="-1"><a class="header-anchor" href="#添加钉钉报警" aria-hidden="true">#</a> 添加钉钉报警</h3>
<p>推荐文章</p>
<p><a href="https://mp.weixin.qq.com/s/MazDZsJlXtkZc_xICLKt7Q" target="_blank" rel="noopener noreferrer">Zabbix使用JavaScript配置Webhook发送告警通知<ExternalLinkIcon/></a></p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200115103302741.png" alt="image-20200115103302741" loading="lazy"></p>
<p>图中Script内容如下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    Zabbix<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'dingding webhook script value='</span><span class="token operator">+</span>value<span class="token punctuation">)</span>
 
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'tags'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'endpoint'</span><span class="token operator">:</span> <span class="token string">'ding'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    params <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
    req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CurlHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    fields <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    resp<span class="token punctuation">;</span>
 
    req<span class="token punctuation">.</span><span class="token function">AddHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type: application/json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    fields<span class="token punctuation">.</span>msgtype <span class="token operator">=</span> params<span class="token punctuation">.</span>msgtype<span class="token punctuation">;</span>
    fields<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"content"</span><span class="token operator">:</span>params<span class="token punctuation">.</span>content
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    resp <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">'https://oapi.dingtalk.com/robot/send?access_token=1163d78d7b8a324d2f5b284414da8e93560008689744495ab4ad3eae14bdd642'</span><span class="token punctuation">,</span>
        <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>fields<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">Status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">201</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token string">'Response code: '</span><span class="token operator">+</span>req<span class="token punctuation">.</span><span class="token function">Status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    resp <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    result<span class="token punctuation">.</span>tags<span class="token punctuation">.</span>issue_id <span class="token operator">=</span> resp<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    result<span class="token punctuation">.</span>tags<span class="token punctuation">.</span>issue_key <span class="token operator">=</span> resp<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Zabbix<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'jira issue creation failed json : '</span><span class="token operator">+</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">"fields"</span><span class="token operator">:</span> fields<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Zabbix<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'jira issue creation failed : '</span><span class="token operator">+</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><blockquote>
<p>参考官方文档：https://www.zabbix.com/documentation/current/manual/config/notifications/media/webhook</p>
</blockquote>
<p>添加完告警媒介，就可以给用户Administrator用户，添加这两个报警媒介了。</p>
</template>
