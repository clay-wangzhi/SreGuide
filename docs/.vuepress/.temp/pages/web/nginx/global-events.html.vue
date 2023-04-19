<template><h1 id="_3-1-nginx全局块和events块配置" tabindex="-1"><a class="header-anchor" href="#_3-1-nginx全局块和events块配置" aria-hidden="true">#</a> 3.1 nginx全局块和events块配置</h1>
<h2 id="_1-example" tabindex="-1"><a class="header-anchor" href="#_1-example" aria-hidden="true">#</a> 1 example</h2>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token comment"># 运行Nginx进程的用户</span>
<span class="token directive"><span class="token keyword">user</span> nginx</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">8</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_cpu_affinity</span> auto</span><span class="token punctuation">;</span>

<span class="token comment"># 定义存储某类型的全局错误的日志位置</span>
<span class="token comment"># nginx日志分为很多级别 [debug | info | notice | warn | error | crit | alert | emerg]</span>
<span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log  error</span><span class="token punctuation">;</span>
<span class="token comment"># 指定进程ID（pid）存放的路径 </span>
<span class="token directive"><span class="token keyword">pid</span>        /var/run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token comment"># 一个nginx进程打开的最多文件描述符数目，理论值应该是系统的最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n的值保持一致。</span>
<span class="token directive"><span class="token keyword">worker_rlimit_nofile</span> <span class="token number">65535</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 使用epoll的I/O模型，用这个模型来高效处理异步事件</span>
    <span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
    <span class="token comment"># 每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为worker_processes*worker_connections。</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">20480</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_2-配置cpu参数" tabindex="-1"><a class="header-anchor" href="#_2-配置cpu参数" aria-hidden="true">#</a> 2 配置CPU参数</h2>
<p>Nginx默认没有开启利用多核cpu，我们可以通过增加worker_cpu_affinity配置参数来充分利用多核cpu的性能。cpu是任务处理，计算最关键的资源，cpu核越多，性能就越好。</p>
<h3 id="_2-1-nginx-worker-processes" tabindex="-1"><a class="header-anchor" href="#_2-1-nginx-worker-processes" aria-hidden="true">#</a> 2.1 nginx worker_processes</h3>
<p>worker_processes最多开启8个，8个以上性能就不会再提升了，而且稳定性会变的更低，因此8个进程够用了；</p>
<h3 id="_2-2-nginx-worker-cpu-affinity" tabindex="-1"><a class="header-anchor" href="#_2-2-nginx-worker-cpu-affinity" aria-hidden="true">#</a> 2.2 nginx worker_cpu_affinity</h3>
<p>cpu有多少个核？就有几位数，1代表内核开启，0代表内核关闭；</p>
<p>例如：我有一个服务器是最低配，8核CPU，nginx配置信息则如下：</p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span> <span class="token number">8</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_cpu_affinity</span> <span class="token number">00000001</span> <span class="token number">00000010</span> <span class="token number">00000100</span> <span class="token number">00001000</span> <span class="token number">00010000</span> <span class="token number">00100000</span> <span class="token number">01000000</span> <span class="token number">10000000</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面的配置表示：8核CPU，开启8个进程。</p>
<blockquote>
<p>我其实把<code>nginx worker_cpu_affinity</code>参数通常设置为<code>auto</code></p>
</blockquote>
<h3 id="_2-3-实例" tabindex="-1"><a class="header-anchor" href="#_2-3-实例" aria-hidden="true">#</a> 2.3 实例</h3>
<p><strong>2核CPU，开启2个进程</strong></p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span> <span class="token number">2</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_cpu_affinity</span> <span class="token number">01</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>2核CPU，开启4进程</strong></p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span> <span class="token number">4</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_cpu_affinity</span> <span class="token number">01</span> <span class="token number">10</span> <span class="token number">01</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>2核CPU，开启8进程</strong></p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span> <span class="token number">8</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_cpu_affinity</span> <span class="token number">01</span> <span class="token number">10</span> <span class="token number">01</span> <span class="token number">10</span> <span class="token number">01</span> <span class="token number">10</span> <span class="token number">01</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>8核CPU，开启2进程</strong></p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span> <span class="token number">2</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_cpu_affinity</span> <span class="token number">10101010</span> <span class="token number">01010101</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>10101010表示开启了第2,4,6,8内核，01010101表示开始了1,3,5,7内核；</p>
<p>如果多个CPU内核的利用率都相差不多，证明nginx己经成功的利用了多核CPU。</p>
<p>测试结束后，CPU内核的负载应该都同时降低。</p>
</blockquote>
</template>
