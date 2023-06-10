<template><div><h1 id="python-实际工作中的实例" tabindex="-1"><a class="header-anchor" href="#python-实际工作中的实例" aria-hidden="true">#</a> python 实际工作中的实例</h1>
<h2 id="让-windows-压测机-解析内网进行压测-避免占用外网带宽" tabindex="-1"><a class="header-anchor" href="#让-windows-压测机-解析内网进行压测-避免占用外网带宽" aria-hidden="true">#</a> 让 windows 压测机 解析内网进行压测，避免占用外网带宽</h2>
<p>1）生成 hosts 解析文件，将解析文件分成 N 份，解析到不同的 内网ip</p>
<p><code v-pre>cat sync_xxx_hosts.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> json

<span class="token keyword">def</span> <span class="token function">get_hosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 调用 api 获取所有 nginx 主机 ip 地址</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
            url<span class="token operator">=</span><span class="token string">"https://xxx/api/v1/appid/xxx/hosts"</span><span class="token punctuation">,</span>
            headers<span class="token operator">=</span><span class="token punctuation">{</span>
                <span class="token string">"Authorization"</span><span class="token punctuation">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token string">"Content-Type"</span><span class="token punctuation">:</span> <span class="token string">"application/json; charset=utf-8"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'data'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'assets'</span><span class="token punctuation">]</span>
        hosts <span class="token operator">=</span> <span class="token punctuation">[</span>host<span class="token punctuation">[</span><span class="token string">'ip'</span><span class="token punctuation">]</span> <span class="token keyword">for</span> host <span class="token keyword">in</span> result<span class="token punctuation">]</span>
        <span class="token keyword">return</span> hosts

    <span class="token keyword">except</span> requests<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span>RequestException<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'HTTP Request failed'</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">send_request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 调用 api 获取域名列表</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
            url<span class="token operator">=</span>
            <span class="token string">"xxx"</span><span class="token punctuation">,</span>
            headers<span class="token operator">=</span><span class="token punctuation">{</span>
                <span class="token string">"Authorization"</span><span class="token punctuation">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token string">"Content-Type"</span><span class="token punctuation">:</span> <span class="token string">"application/json; charset=utf-8"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'data'</span><span class="token punctuation">]</span>
        prod_domain_list <span class="token operator">=</span> <span class="token punctuation">[</span>
            domain<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token keyword">for</span> domain <span class="token keyword">in</span> result
            <span class="token keyword">if</span> domain<span class="token punctuation">[</span><span class="token string">'lbcluster'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span>
        <span class="token punctuation">]</span>
        ext_website_domain_list <span class="token operator">=</span> <span class="token punctuation">[</span>
            domain<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token keyword">for</span> domain <span class="token keyword">in</span> result
            <span class="token keyword">if</span> domain<span class="token punctuation">[</span><span class="token string">'lbcluster'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">9</span>
        <span class="token punctuation">]</span>
        <span class="token comment"># 通过域名获取不到的 域名列表，和nginx地址</span>
        xx_domain_list <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">'xxx.xxx.xx'</span>
        <span class="token punctuation">]</span>
        ext_website_hosts <span class="token operator">=</span> get_hosts<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            filename <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f'/etc/ansible/files/hosts</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">'</span></span>
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                <span class="token keyword">for</span> xx_domain <span class="token keyword">in</span> xx_domain_list<span class="token punctuation">:</span>
                    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">'IP地址 '</span> <span class="token operator">+</span> bi_domain <span class="token operator">+</span> <span class="token string">'\n'</span><span class="token punctuation">)</span>
                <span class="token keyword">for</span> domain <span class="token keyword">in</span> prod_domain_list<span class="token punctuation">:</span>
                    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">'IP地址 '</span> <span class="token operator">+</span> domain <span class="token operator">+</span> <span class="token string">'\n'</span><span class="token punctuation">)</span>
                <span class="token keyword">for</span> domain <span class="token keyword">in</span> ext_website_domain_list<span class="token punctuation">:</span>
                    host <span class="token operator">=</span> ext_website_hosts<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>host <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> domain <span class="token operator">+</span> <span class="token string">'\n'</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> requests<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span>RequestException<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'HTTP Request failed'</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    send_request<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）将 压测机 分为 N 组，生成 ansible 动态 Inventory</p>
<p><code v-pre>cat get_hosts.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> json
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> math

<span class="token comment"># 将一个列表分为 n 组</span>
<span class="token keyword">def</span> <span class="token function">chunks</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>ceil<span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">float</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">:</span>i <span class="token operator">+</span> n<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">send_request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 压测机的 appid 列表</span>
    appids <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'xxx'</span><span class="token punctuation">,</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span> <span class="token string">'xxx'</span><span class="token punctuation">]</span>
    hosts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> appid <span class="token keyword">in</span> appids<span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token comment"># 获取 appid 下 的主机列表</span>
            response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
                url<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f'https://xxx.xx.xx/api/v1/appid/</span><span class="token interpolation"><span class="token punctuation">{</span>appid<span class="token punctuation">}</span></span><span class="token string">/hosts'</span></span><span class="token punctuation">,</span>
                headers<span class="token operator">=</span><span class="token punctuation">{</span>
                    <span class="token string">"Authorization"</span><span class="token punctuation">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                    <span class="token string">"Content-Type"</span><span class="token punctuation">:</span> <span class="token string">"application/json; charset=utf-8"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            result <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'data'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'assets'</span><span class="token punctuation">]</span>
            hosts <span class="token operator">=</span> hosts <span class="token operator">+</span> <span class="token punctuation">[</span>host<span class="token punctuation">[</span><span class="token string">'ip'</span><span class="token punctuation">]</span> <span class="token keyword">for</span> host <span class="token keyword">in</span> result<span class="token punctuation">]</span>
        <span class="token keyword">except</span> requests<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span>RequestException<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'HTTP Request failed'</span><span class="token punctuation">)</span>
    chunks_hosts <span class="token operator">=</span> chunks<span class="token punctuation">(</span>hosts<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> chunks_hosts



<span class="token keyword">def</span> <span class="token function">group</span><span class="token punctuation">(</span>hosts<span class="token punctuation">)</span><span class="token punctuation">:</span>
    hostdata <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">'all'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"hosts"</span><span class="token punctuation">:</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>hosts<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">'vars'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'ansible_ssh_port'</span><span class="token punctuation">:</span> <span class="token number">5985</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_connection'</span><span class="token punctuation">:</span> <span class="token string">'winrm'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_user'</span><span class="token punctuation">:</span> <span class="token string">'administrator'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_pass'</span><span class="token punctuation">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_server_cert_validation'</span><span class="token punctuation">:</span> <span class="token string">'ignore'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_transport'</span><span class="token punctuation">:</span> <span class="token string">'ntlm'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'group0'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"hosts"</span><span class="token punctuation">:</span> hosts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string">'vars'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'ansible_ssh_port'</span><span class="token punctuation">:</span> <span class="token number">5985</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_connection'</span><span class="token punctuation">:</span> <span class="token string">'winrm'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_user'</span><span class="token punctuation">:</span> <span class="token string">'administrator'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_pass'</span><span class="token punctuation">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_server_cert_validation'</span><span class="token punctuation">:</span> <span class="token string">'ignore'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_transport'</span><span class="token punctuation">:</span> <span class="token string">'ntlm'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'group1'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"hosts"</span><span class="token punctuation">:</span> hosts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string">'vars'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'ansible_ssh_port'</span><span class="token punctuation">:</span> <span class="token number">5985</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_connection'</span><span class="token punctuation">:</span> <span class="token string">'winrm'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_user'</span><span class="token punctuation">:</span> <span class="token string">'administrator'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_pass'</span><span class="token punctuation">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_server_cert_validation'</span><span class="token punctuation">:</span> <span class="token string">'ignore'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_transport'</span><span class="token punctuation">:</span> <span class="token string">'ntlm'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'group2'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"hosts"</span><span class="token punctuation">:</span> hosts<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string">'vars'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'ansible_ssh_port'</span><span class="token punctuation">:</span> <span class="token number">5985</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_connection'</span><span class="token punctuation">:</span> <span class="token string">'winrm'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_user'</span><span class="token punctuation">:</span> <span class="token string">'administrator'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_pass'</span><span class="token punctuation">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_server_cert_validation'</span><span class="token punctuation">:</span> <span class="token string">'ignore'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_transport'</span><span class="token punctuation">:</span> <span class="token string">'ntlm'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'group3'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"hosts"</span><span class="token punctuation">:</span> hosts<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string">'vars'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'ansible_ssh_port'</span><span class="token punctuation">:</span> <span class="token number">5985</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_connection'</span><span class="token punctuation">:</span> <span class="token string">'winrm'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_user'</span><span class="token punctuation">:</span> <span class="token string">'administrator'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_pass'</span><span class="token punctuation">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_server_cert_validation'</span><span class="token punctuation">:</span> <span class="token string">'ignore'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_transport'</span><span class="token punctuation">:</span> <span class="token string">'ntlm'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'group4'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"hosts"</span><span class="token punctuation">:</span> hosts<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string">'vars'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'ansible_ssh_port'</span><span class="token punctuation">:</span> <span class="token number">5985</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_connection'</span><span class="token punctuation">:</span> <span class="token string">'winrm'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_user'</span><span class="token punctuation">:</span> <span class="token string">'administrator'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_pass'</span><span class="token punctuation">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_server_cert_validation'</span><span class="token punctuation">:</span> <span class="token string">'ignore'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_transport'</span><span class="token punctuation">:</span> <span class="token string">'ntlm'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'group5'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"hosts"</span><span class="token punctuation">:</span> hosts<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string">'vars'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'ansible_ssh_port'</span><span class="token punctuation">:</span> <span class="token number">5985</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_connection'</span><span class="token punctuation">:</span> <span class="token string">'winrm'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_user'</span><span class="token punctuation">:</span> <span class="token string">'administrator'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_pass'</span><span class="token punctuation">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_server_cert_validation'</span><span class="token punctuation">:</span> <span class="token string">'ignore'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_transport'</span><span class="token punctuation">:</span> <span class="token string">'ntlm'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'group6'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"hosts"</span><span class="token punctuation">:</span> hosts<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string">'vars'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'ansible_ssh_port'</span><span class="token punctuation">:</span> <span class="token number">5985</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_connection'</span><span class="token punctuation">:</span> <span class="token string">'winrm'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_user'</span><span class="token punctuation">:</span> <span class="token string">'administrator'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_pass'</span><span class="token punctuation">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_server_cert_validation'</span><span class="token punctuation">:</span> <span class="token string">'ignore'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_transport'</span><span class="token punctuation">:</span> <span class="token string">'ntlm'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'group7'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">"hosts"</span><span class="token punctuation">:</span> hosts<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string">'vars'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'ansible_ssh_port'</span><span class="token punctuation">:</span> <span class="token number">5985</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_connection'</span><span class="token punctuation">:</span> <span class="token string">'winrm'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_user'</span><span class="token punctuation">:</span> <span class="token string">'administrator'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_ssh_pass'</span><span class="token punctuation">:</span> <span class="token string">'xxx'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_server_cert_validation'</span><span class="token punctuation">:</span> <span class="token string">'ignore'</span><span class="token punctuation">,</span>
                <span class="token string">'ansible_winrm_transport'</span><span class="token punctuation">:</span> <span class="token string">'ntlm'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>hostdata<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">host</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">:</span>
    host_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>host_dict<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'--list'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        hosts <span class="token operator">=</span> send_request<span class="token punctuation">(</span><span class="token punctuation">)</span>
        group<span class="token punctuation">(</span>hosts<span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span> <span class="token keyword">and</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"--host"</span><span class="token punctuation">:</span>
        host<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Usage: %s --list or --host &lt;hostname>"</span> <span class="token operator">%</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）编写 playbook , sync_win_hosts.yml</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> group0
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 同步hosts 文件到 windows 主机
    <span class="token key atrule">win_copy</span><span class="token punctuation">:</span>
      <span class="token key atrule">src</span><span class="token punctuation">:</span> /etc/ansible/files/hosts0
      <span class="token key atrule">dest</span><span class="token punctuation">:</span> C<span class="token punctuation">:</span>\Windows\System32\drivers\etc\hosts

<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> group1
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 同步hosts 文件到 windows 主机
    <span class="token key atrule">win_copy</span><span class="token punctuation">:</span>
      <span class="token key atrule">src</span><span class="token punctuation">:</span> /etc/ansible/files/hosts1
      <span class="token key atrule">dest</span><span class="token punctuation">:</span> C<span class="token punctuation">:</span>\Windows\System32\drivers\etc\hosts

<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> group2
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 同步hosts 文件到 windows 主机
    <span class="token key atrule">win_copy</span><span class="token punctuation">:</span>
      <span class="token key atrule">src</span><span class="token punctuation">:</span> /etc/ansible/files/hosts2
      <span class="token key atrule">dest</span><span class="token punctuation">:</span> C<span class="token punctuation">:</span>\Windows\System32\drivers\etc\hosts
<span class="token comment"># ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）添加计划任务，crontab -e</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 同步 hosts 到 压测机</span>
*/5 * * * * /home//code/xxx/sync_xxx_hosts.py <span class="token operator">></span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
* * * * * /usr/local/bin/ansible-playbook <span class="token parameter variable">-i</span> /home/code/ansible/get_hosts.py /etc/ansible/sync_win_hosts.yml <span class="token operator">></span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用-alibabacloud-alidns-去操作-阿里云-dns-解析" tabindex="-1"><a class="header-anchor" href="#调用-alibabacloud-alidns-去操作-阿里云-dns-解析" aria-hidden="true">#</a> 调用 alibabacloud_alidns 去操作 阿里云 dns 解析</h2>
<p>官网下载 样例， 添加 参数解析即可</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#!/home/clay/alibabacloud_alidns/bin/python</span>

<span class="token keyword">import</span> os
<span class="token keyword">import</span> argparse
<span class="token keyword">import</span> json

<span class="token keyword">from</span> Tea<span class="token punctuation">.</span>core <span class="token keyword">import</span> TeaCore
<span class="token keyword">from</span> alibabacloud_alidns20150109 <span class="token keyword">import</span> client
<span class="token keyword">from</span> alibabacloud_alidns20150109<span class="token punctuation">.</span>client <span class="token keyword">import</span> Client <span class="token keyword">as</span> DNSClient
<span class="token keyword">from</span> alibabacloud_tea_openapi <span class="token keyword">import</span> models <span class="token keyword">as</span> open_api_models
<span class="token keyword">from</span> alibabacloud_alidns20150109 <span class="token keyword">import</span> models <span class="token keyword">as</span> dns_models
<span class="token keyword">from</span> alibabacloud_tea_console<span class="token punctuation">.</span>client <span class="token keyword">import</span> Client <span class="token keyword">as</span> ConsoleClient
<span class="token keyword">from</span> alibabacloud_tea_util<span class="token punctuation">.</span>client <span class="token keyword">import</span> Client <span class="token keyword">as</span> UtilClient


<span class="token keyword">def</span> <span class="token function">get_dns_client</span><span class="token punctuation">(</span>
    access_key_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    access_key_secret<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> DNSClient<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    Init 初始化客户端
    @param access_key_id:
    @param access_key_secret:
    @return: Client
    @throws Exception
    """</span>
    config <span class="token operator">=</span> open_api_models<span class="token punctuation">.</span>Config<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 传AccessKey ID入config</span>
    config<span class="token punctuation">.</span>access_key_id <span class="token operator">=</span> access_key_id
    config<span class="token punctuation">.</span>access_key_secret <span class="token operator">=</span> access_key_secret
    config<span class="token punctuation">.</span>region_id <span class="token operator">=</span> <span class="token string">'cn-qingdao'</span>
    <span class="token keyword">return</span> DNSClient<span class="token punctuation">(</span>config<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">describe_domain_records</span><span class="token punctuation">(</span>
    client<span class="token punctuation">:</span> DNSClient<span class="token punctuation">,</span>
    domain_name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    DescribeDomainRecords 查询域名解析记录
    @param client:          客户端
    @param domain_name:      域名名称
    @throws Exception
    """</span>
    req <span class="token operator">=</span> dns_models<span class="token punctuation">.</span>DescribeDomainRecordsRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>domain_name <span class="token operator">=</span> domain_name
    req<span class="token punctuation">.</span>page_size <span class="token operator">=</span> <span class="token number">500</span>
    <span class="token comment"># req.type = "CNAME"</span>
    ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'查询域名(</span><span class="token interpolation"><span class="token punctuation">{</span>domain_name<span class="token punctuation">}</span></span><span class="token string">)的解析记录(json)↓'</span></span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> client<span class="token punctuation">.</span>describe_domain_records<span class="token punctuation">(</span>req<span class="token punctuation">)</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>UtilClient<span class="token punctuation">.</span>to_jsonstring<span class="token punctuation">(</span>TeaCore<span class="token punctuation">.</span>to_map<span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">add_domain_record</span><span class="token punctuation">(</span>
    client<span class="token punctuation">:</span> DNSClient<span class="token punctuation">,</span>
    domain_name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    rr<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    record_type<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    value<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    AddDomainRecord  添加域名解析记录
    @param client:            客户端
    @param domain_name:        域名名称
    @param rr:                主机记录
    @param record_type:              记录类型(A/NS/MX/TXT/CNAME/SRV/AAAA/CAA/REDIRECT_URL/FORWARD_URL)
    @param value:             记录值
    @throws Exception
    """</span>
    req <span class="token operator">=</span> dns_models<span class="token punctuation">.</span>AddDomainRecordRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>domain_name <span class="token operator">=</span> domain_name
    req<span class="token punctuation">.</span>rr <span class="token operator">=</span> rr
    req<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">=</span> record_type
    req<span class="token punctuation">.</span>value <span class="token operator">=</span> value
    req<span class="token punctuation">.</span>ttl <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> client<span class="token punctuation">.</span>add_domain_record<span class="token punctuation">(</span>req<span class="token punctuation">)</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'添加域名解析记录的结果(json)↓'</span></span><span class="token punctuation">)</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>UtilClient<span class="token punctuation">.</span>to_jsonstring<span class="token punctuation">(</span>TeaCore<span class="token punctuation">.</span>to_map<span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>error<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_domain_record_id_by_rr</span><span class="token punctuation">(</span>
    client<span class="token punctuation">:</span> DNSClient<span class="token punctuation">,</span>
    domain_name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    rr<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    DescribeDomainRecords 查询域名解析的record_id
    @param client:          客户端
    @param domain_name:      域名名称
    param rr:                主机记录
    @throws Exception
    """</span>
    req <span class="token operator">=</span> dns_models<span class="token punctuation">.</span>DescribeDomainRecordsRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>domain_name <span class="token operator">=</span> domain_name
    req<span class="token punctuation">.</span>rrkey_word <span class="token operator">=</span> rr
    req<span class="token punctuation">.</span>page_size <span class="token operator">=</span> <span class="token number">500</span>
    ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'查询域名(</span><span class="token interpolation"><span class="token punctuation">{</span>domain_name<span class="token punctuation">}</span></span><span class="token string">)的解析的record_id(json)↓'</span></span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> client<span class="token punctuation">.</span>describe_domain_records<span class="token punctuation">(</span>req<span class="token punctuation">)</span>
        strinfo <span class="token operator">=</span> UtilClient<span class="token punctuation">.</span>to_jsonstring<span class="token punctuation">(</span>TeaCore<span class="token punctuation">.</span>to_map<span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span>
        dictinfo <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>strinfo<span class="token punctuation">)</span>
        records <span class="token operator">=</span> dictinfo<span class="token punctuation">[</span><span class="token string">'body'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'DomainRecords'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'Record'</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> record <span class="token keyword">in</span> records<span class="token punctuation">:</span>
            <span class="token keyword">if</span> record<span class="token punctuation">[</span><span class="token string">'RR'</span><span class="token punctuation">]</span> <span class="token operator">==</span> rr<span class="token punctuation">:</span>
                <span class="token keyword">return</span> record<span class="token punctuation">[</span><span class="token string">'RecordId'</span><span class="token punctuation">]</span>
        <span class="token comment"># return dictinfo['body']['DomainRecords']['Record'][0]['RecordId']</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>error<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_domain_by_rr</span><span class="token punctuation">(</span>
    client<span class="token punctuation">:</span> DNSClient<span class="token punctuation">,</span>
    domain_name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    rr<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    DescribeDomainRecords 查询域名解析的record_id
    @param client:          客户端
    @param domain_name:      域名名称
    param rr:                主机记录
    @throws Exception
    """</span>
    req <span class="token operator">=</span> dns_models<span class="token punctuation">.</span>DescribeDomainRecordsRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>domain_name <span class="token operator">=</span> domain_name
    req<span class="token punctuation">.</span>rrkey_word <span class="token operator">=</span> rr
    req<span class="token punctuation">.</span>page_size <span class="token operator">=</span> <span class="token number">500</span>
    ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'查询域名(</span><span class="token interpolation"><span class="token punctuation">{</span>domain_name<span class="token punctuation">}</span></span><span class="token string">)的解析的record_id(json)↓'</span></span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> client<span class="token punctuation">.</span>describe_domain_records<span class="token punctuation">(</span>req<span class="token punctuation">)</span>
        strinfo <span class="token operator">=</span> UtilClient<span class="token punctuation">.</span>to_jsonstring<span class="token punctuation">(</span>TeaCore<span class="token punctuation">.</span>to_map<span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span>
        dictinfo <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>strinfo<span class="token punctuation">)</span>
        records <span class="token operator">=</span> dictinfo<span class="token punctuation">[</span><span class="token string">'body'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'DomainRecords'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'Record'</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> record <span class="token keyword">in</span> records<span class="token punctuation">:</span>
            <span class="token keyword">if</span> record<span class="token punctuation">[</span><span class="token string">'RR'</span><span class="token punctuation">]</span> <span class="token operator">==</span> rr<span class="token punctuation">:</span>
                <span class="token keyword">if</span> record<span class="token punctuation">[</span><span class="token string">'Type'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"CNAME"</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"\033[31m</span><span class="token interpolation"><span class="token punctuation">{</span>record<span class="token punctuation">[</span><span class="token string">'RR'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>record<span class="token punctuation">[</span><span class="token string">'Type'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>record<span class="token punctuation">[</span><span class="token string">'Value'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">\033[0m"</span></span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> <span class="token string">"cnameexists"</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"\033[31m</span><span class="token interpolation"><span class="token punctuation">{</span>record<span class="token punctuation">[</span><span class="token string">'RR'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>record<span class="token punctuation">[</span><span class="token string">'Type'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>record<span class="token punctuation">[</span><span class="token string">'Value'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">\033[0m"</span></span><span class="token punctuation">)</span>
                <span class="token keyword">break</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">"notexists"</span>
        <span class="token comment"># if dictinfo['body']['DomainRecords']['Record'][0]['Type'] == "CNAME":</span>
        <span class="token comment">#    print(f"\033[31m 解析记录已存在, 为 {dictinfo['body']['DomainRecords']['Record'][0]}\033[0m")</span>
        <span class="token comment"># #    print(f"\033[32m 开始禁用\033[0m")</span>
        <span class="token comment">#    print(f"\033[32m 开始删除\033[0m")</span>
        <span class="token comment">#    return "cnameexists"</span>
        <span class="token comment"># else:</span>
        <span class="token comment">#     print(f"\033[31m 解析记录已存在, 为 {dictinfo['body']['DomainRecords']['Record'][0]}\033[0m")</span>
    <span class="token keyword">except</span> Exception<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">"notexists"</span>

<span class="token keyword">def</span> <span class="token function">update_domain_record</span><span class="token punctuation">(</span>
    client<span class="token punctuation">:</span> DNSClient<span class="token punctuation">,</span>
    record_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    rr<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    record_type<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    value<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    UpdateDomainRecord  更新域名解析记录
    @param client:          客户端
    @param record_id:        解析记录ID
    @param rr:              主机记录
    @param record_type:            记录类型(A/NS/MX/TXT/CNAME/SRV/AAAA/CAA/REDIRECT_URL/FORWARD_URL)
    @param value:           记录值
    @throws Exception
    """</span>
    req <span class="token operator">=</span> dns_models<span class="token punctuation">.</span>UpdateDomainRecordRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>record_id <span class="token operator">=</span> record_id
    req<span class="token punctuation">.</span>rr <span class="token operator">=</span> rr
    req<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">=</span> record_type
    req<span class="token punctuation">.</span>value <span class="token operator">=</span> value
    ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'更新域名解析记录的结果(json)↓'</span></span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> client<span class="token punctuation">.</span>update_domain_record<span class="token punctuation">(</span>req<span class="token punctuation">)</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>UtilClient<span class="token punctuation">.</span>to_jsonstring<span class="token punctuation">(</span>TeaCore<span class="token punctuation">.</span>to_map<span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>error<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">set_domain_record_status</span><span class="token punctuation">(</span>
    client<span class="token punctuation">:</span> DNSClient<span class="token punctuation">,</span>
    record_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    status<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    SetDomainRecordStatus  设置域名解析状态
    @param client:      客户端
    @param record_id:    解析记录ID
    @param status:      解析状态(ENABLE/DISABLE)
    @throws Exception
    """</span>
    req <span class="token operator">=</span> dns_models<span class="token punctuation">.</span>SetDomainRecordStatusRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>record_id <span class="token operator">=</span> record_id
    req<span class="token punctuation">.</span>status <span class="token operator">=</span> status
    ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'设置域名解析状态的结果(json)↓'</span></span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> client<span class="token punctuation">.</span>set_domain_record_status<span class="token punctuation">(</span>req<span class="token punctuation">)</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>UtilClient<span class="token punctuation">.</span>to_jsonstring<span class="token punctuation">(</span>TeaCore<span class="token punctuation">.</span>to_map<span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>error<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">delete_domain_record</span><span class="token punctuation">(</span>
    client<span class="token punctuation">:</span> DNSClient<span class="token punctuation">,</span>
    record_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    DeleteDomainRecord  删除域名解析记录
    @param client:         客户端
    @param record_id:       解析记录ID
    @throws Exception
    """</span>
    req <span class="token operator">=</span> dns_models<span class="token punctuation">.</span>DeleteDomainRecordRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>record_id <span class="token operator">=</span> record_id
    ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'删除域名解析记录的结(json)↓'</span></span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        resp <span class="token operator">=</span> client<span class="token punctuation">.</span>delete_domain_record<span class="token punctuation">(</span>req<span class="token punctuation">)</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>UtilClient<span class="token punctuation">.</span>to_jsonstring<span class="token punctuation">(</span>TeaCore<span class="token punctuation">.</span>to_map<span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> error<span class="token punctuation">:</span>
        ConsoleClient<span class="token punctuation">.</span>log<span class="token punctuation">(</span>error<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    parser <span class="token operator">=</span> argparse<span class="token punctuation">.</span>ArgumentParser<span class="token punctuation">(</span>
        description<span class="token operator">=</span><span class="token triple-quoted-string string">"""
        Aliyun DNS control tools;

        Example: \r\n

        %(prog)s create xxx.xxx
        """</span>
    <span class="token punctuation">)</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span>
        <span class="token string">'action'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span>
        <span class="token comment"># choices=("status", "create", "update", "enable", "disable", "delete"),</span>
        choices<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">"status"</span><span class="token punctuation">,</span> <span class="token string">"create"</span><span class="token punctuation">,</span> <span class="token string">"update"</span><span class="token punctuation">,</span> <span class="token string">"enable"</span><span class="token punctuation">,</span> <span class="token string">"disable"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">"Action to run"</span>
    <span class="token punctuation">)</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span>
        <span class="token string">"domain_name"</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token string">'xxx.xx'</span><span class="token punctuation">,</span> nargs<span class="token operator">=</span><span class="token string">"?"</span><span class="token punctuation">,</span>
        choices<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">"xxx.xx"</span><span class="token punctuation">,</span> <span class="token string">"xxx.xx"</span><span class="token punctuation">,</span> <span class="token string">"xxx.xx"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">"The domain to management"</span>
    <span class="token punctuation">)</span>

    args <span class="token operator">=</span> parser<span class="token punctuation">.</span>parse_args<span class="token punctuation">(</span><span class="token punctuation">)</span>
    action <span class="token operator">=</span> args<span class="token punctuation">.</span>action
    domain_name <span class="token operator">=</span> args<span class="token punctuation">.</span>domain_name

    <span class="token keyword">if</span> domain_name <span class="token operator">==</span> <span class="token string">'xxx.xxx'</span><span class="token punctuation">:</span>
        access_key_id <span class="token operator">=</span> <span class="token string">'xxx'</span>
        access_key_secret <span class="token operator">=</span> <span class="token string">'xxx'</span>
    <span class="token keyword">elif</span> domain_name <span class="token operator">==</span> <span class="token string">'xxx.xx'</span><span class="token punctuation">:</span>
        access_key_id <span class="token operator">=</span> <span class="token string">'xxx'</span>
        access_key_secret <span class="token operator">=</span> <span class="token string">'xxx'</span>
    <span class="token keyword">elif</span> domain_name <span class="token operator">==</span> <span class="token string">'xxx.xx'</span><span class="token punctuation">:</span>
        <span class="token comment"># clay 认证</span>
        access_key_id <span class="token operator">=</span> <span class="token string">'xxx'</span>
        access_key_secret <span class="token operator">=</span> <span class="token string">'xx'</span>


    <span class="token comment"># 初始化客户端</span>
    client <span class="token operator">=</span> get_dns_client<span class="token punctuation">(</span>access_key_id<span class="token punctuation">,</span> access_key_secret<span class="token punctuation">)</span>

    <span class="token keyword">if</span> action <span class="token operator">==</span> <span class="token string">"create"</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'list.txt'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
                args <span class="token operator">=</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
                result <span class="token operator">=</span> get_domain_by_rr<span class="token punctuation">(</span>client<span class="token punctuation">,</span> domain_name<span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> result <span class="token operator">==</span> <span class="token string">"notexists"</span><span class="token punctuation">:</span>
                    add_domain_record<span class="token punctuation">(</span>client<span class="token punctuation">,</span> domain_name<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span>
                <span class="token keyword">elif</span> result <span class="token operator">==</span> <span class="token string">"cnameexists"</span><span class="token punctuation">:</span>
                    record_id <span class="token operator">=</span> get_domain_record_id_by_rr<span class="token punctuation">(</span>client<span class="token punctuation">,</span> domain_name<span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                    <span class="token comment"># set_domain_record_status(client, record_id, 'DISABLE')</span>
                    delete_domain_record<span class="token punctuation">(</span>client<span class="token punctuation">,</span> record_id<span class="token punctuation">)</span>
                    add_domain_record<span class="token punctuation">(</span>client<span class="token punctuation">,</span> domain_name<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span>
        os<span class="token punctuation">.</span>_exit<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> action <span class="token operator">==</span> <span class="token string">"update"</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'list.txt'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
                args <span class="token operator">=</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
                record_id <span class="token operator">=</span> get_domain_record_id_by_rr<span class="token punctuation">(</span>client<span class="token punctuation">,</span> domain_name<span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                update_domain_record<span class="token punctuation">(</span>client<span class="token punctuation">,</span> record_id<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span>
    <span class="token keyword">elif</span> action <span class="token operator">==</span> <span class="token string">"enable"</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'list.txt'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
                args <span class="token operator">=</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
                record_id <span class="token operator">=</span> get_domain_record_id_by_rr<span class="token punctuation">(</span>client<span class="token punctuation">,</span> domain_name<span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                set_domain_record_status<span class="token punctuation">(</span>client<span class="token punctuation">,</span> record_id<span class="token punctuation">,</span> <span class="token string">'ENABLE'</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> action <span class="token operator">==</span> <span class="token string">"disable"</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'list.txt'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
                args <span class="token operator">=</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
                record_id <span class="token operator">=</span> get_domain_record_id_by_rr<span class="token punctuation">(</span>client<span class="token punctuation">,</span> domain_name<span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                set_domain_record_status<span class="token punctuation">(</span>client<span class="token punctuation">,</span> record_id<span class="token punctuation">,</span> <span class="token string">'DISABLE'</span><span class="token punctuation">)</span>
    <span class="token comment"># elif action == "delete":</span>
    <span class="token comment">#     with open('list.txt') as f:</span>
    <span class="token comment">#         for line in f:</span>
    <span class="token comment">#             args = line.split(' ')</span>
    <span class="token comment">#             record_id = get_domain_record_id_by_rr(client, domain_name, args[0])</span>
    <span class="token comment">#             delete_domain_record(client, record_id)</span>
    <span class="token keyword">elif</span> action <span class="token operator">==</span> <span class="token string">"status"</span><span class="token punctuation">:</span>
        describe_domain_records<span class="token punctuation">(</span>client<span class="token punctuation">,</span> domain_name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用zabbixapi批量添加web监控" tabindex="-1"><a class="header-anchor" href="#调用zabbixapi批量添加web监控" aria-hidden="true">#</a> 调用zabbixAPI批量添加web监控</h2>
<p>起因：刚来一家公司，要求我添加web监控，800多个页面监控，手动一个个加，不得加死了，所以写了个python脚本，批量添加</p>
<p>脚本如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># ~*~ coding:utf-8 ~*~</span>
<span class="token keyword">from</span> zabbix_api <span class="token keyword">import</span> ZabbixAPI
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> json

ZABBIX_SREVER <span class="token operator">=</span> <span class="token string">"http://192.168.162.122"</span>
USERNAME <span class="token operator">=</span> <span class="token string">"Admin"</span>
PASSWORD <span class="token operator">=</span> <span class="token string">"zabbix"</span>
<span class="token comment">#HOSTNAME = "sh_ylf_15"</span>
<span class="token comment">#HOSTNAME = "h5_web_monitor"</span>
HOSTNAME <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
urlname <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
url <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
delay <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>


<span class="token comment"># 登录</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>ZABBIX_SREVER<span class="token punctuation">,</span> USERNAME<span class="token punctuation">,</span> PASSWORD<span class="token punctuation">)</span><span class="token punctuation">:</span>
    zapi <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">(</span>ZABBIX_SREVER<span class="token punctuation">)</span>
    zapi<span class="token punctuation">.</span>login<span class="token punctuation">(</span>USERNAME<span class="token punctuation">,</span> PASSWORD<span class="token punctuation">)</span>
    <span class="token keyword">return</span> zapi


<span class="token comment"># 获取主机id</span>
<span class="token keyword">def</span> <span class="token function">gethostid</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> HOSTNAME<span class="token punctuation">)</span><span class="token punctuation">:</span>
    json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'host.get'</span><span class="token punctuation">,</span> params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"filter"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"host"</span><span class="token punctuation">:</span> HOSTNAME<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    request <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>

    <span class="token keyword">if</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'hostid'</span><span class="token punctuation">]</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"找不到该主机"</span><span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token comment"># 获取应用级id</span>
<span class="token keyword">def</span> <span class="token function">getapplicationid</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> hostid<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># try:</span>
    <span class="token comment">#     json_obj = ZabbixAPI.json_obj(auth, 'application.create', params={"name": "Web监测","hostid": hostid})</span>
    <span class="token comment">#     ZabbixAPI.do_request(auth, json_obj)</span>
    <span class="token comment"># except Exception as e:</span>
    <span class="token comment">#     print(e)</span>
    json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'application.get'</span><span class="token punctuation">,</span> params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"hostids"</span><span class="token punctuation">:</span> hostid<span class="token punctuation">}</span><span class="token punctuation">)</span>
    request <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">for</span> num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'Web'</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'applicationid'</span><span class="token punctuation">]</span>


<span class="token comment"># 增加web监控</span>
<span class="token keyword">def</span> <span class="token function">create_web_scenario</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> url<span class="token punctuation">,</span> hostid<span class="token punctuation">,</span> applicationid<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">:</span>
    json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'httptest.get'</span><span class="token punctuation">,</span> params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"filter"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> urlname<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    request <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">if</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'该web监控已经添加过了'</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'httptest.create'</span><span class="token punctuation">,</span>
                                          params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> urlname<span class="token punctuation">,</span> <span class="token string">"hostid"</span><span class="token punctuation">:</span> hostid<span class="token punctuation">,</span> <span class="token string">"applicationid"</span><span class="token punctuation">:</span> applicationid<span class="token punctuation">,</span>
                                                  <span class="token string">"delay"</span><span class="token punctuation">:</span> delay<span class="token punctuation">,</span> <span class="token string">"retries"</span><span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">"steps"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                                                  <span class="token punctuation">{</span><span class="token string">'name'</span><span class="token punctuation">:</span> urlname<span class="token punctuation">,</span> <span class="token string">'url'</span><span class="token punctuation">:</span> url<span class="token punctuation">,</span> <span class="token string">'timeout'</span><span class="token punctuation">:</span> <span class="token string">'10'</span><span class="token punctuation">,</span> <span class="token string">'status_codes'</span><span class="token punctuation">:</span> <span class="token string">'200'</span><span class="token punctuation">,</span>
                                                   <span class="token string">'no'</span><span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
            sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token comment"># 增加触发器</span>
<span class="token keyword">def</span> <span class="token function">create_trigger</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> HOSTNAME<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    expression <span class="token operator">=</span> <span class="token string">"{"</span> <span class="token operator">+</span> <span class="token string">"{0}:web.test.fail[{1}].avg(#3)"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>HOSTNAME<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"}"</span> <span class="token operator">+</span> <span class="token string">">=1"</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'trigger.create'</span><span class="token punctuation">,</span>
                                      params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"description"</span><span class="token punctuation">:</span> <span class="token string">"{0}访问失败"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>urlname<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"expression"</span><span class="token punctuation">:</span> expression<span class="token punctuation">,</span>
                                              <span class="token string">"priority"</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"url"</span><span class="token punctuation">:</span> url<span class="token punctuation">}</span><span class="token punctuation">)</span>
        ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    expression <span class="token operator">=</span> <span class="token string">"{"</span> <span class="token operator">+</span> <span class="token string">"{0}:web.test.rspcode[{1},{1}].last(0)"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>HOSTNAME<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"}"</span> <span class="token operator">+</span> <span class="token string">"&lt;>200"</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'trigger.create'</span><span class="token punctuation">,</span>
                                      params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"description"</span><span class="token punctuation">:</span> <span class="token string">"{0}访问异常"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>urlname<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"expression"</span><span class="token punctuation">:</span> expression<span class="token punctuation">,</span>
                                              <span class="token string">"priority"</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">"url"</span><span class="token punctuation">:</span> url<span class="token punctuation">}</span><span class="token punctuation">)</span>
        ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token comment"># 获取监控项id</span>
<span class="token keyword">def</span> <span class="token function">getitem</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> hostid<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'item.get'</span><span class="token punctuation">,</span>
                                  params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"hostids"</span><span class="token punctuation">:</span> hostid<span class="token punctuation">,</span> <span class="token string">"webitems"</span><span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                                          <span class="token string">"filter"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"Response code for step \"$2\" of scenario \"$1\"."</span><span class="token punctuation">,</span>
                                                     <span class="token string">"key_"</span><span class="token punctuation">:</span> <span class="token string">"web.test.rspcode[{0},{1}]"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>urlname<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    request <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> request<span class="token punctuation">[</span><span class="token string">"result"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"itemid"</span><span class="token punctuation">]</span>


<span class="token comment"># 增加图形</span>
<span class="token keyword">def</span> <span class="token function">create_graph</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> hostid<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        itemid <span class="token operator">=</span> getitem<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> hostid<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span>
        json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'graph.create'</span><span class="token punctuation">,</span>
                                      params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"h5_{0}状态显示"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>urlname<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"width"</span><span class="token punctuation">:</span> <span class="token number">900</span><span class="token punctuation">,</span> <span class="token string">"height"</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                                              <span class="token string">"gitems"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"itemid"</span><span class="token punctuation">:</span> itemid<span class="token punctuation">,</span> <span class="token string">"color"</span><span class="token punctuation">:</span> <span class="token string">"008800"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    auth <span class="token operator">=</span> login<span class="token punctuation">(</span>ZABBIX_SREVER<span class="token punctuation">,</span> USERNAME<span class="token punctuation">,</span> PASSWORD<span class="token punctuation">)</span>
    hostid <span class="token operator">=</span> gethostid<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> HOSTNAME<span class="token punctuation">)</span>
    applicationid <span class="token operator">=</span> getapplicationid<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> hostid<span class="token punctuation">)</span>

    create_web_scenario<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> url<span class="token punctuation">,</span> hostid<span class="token punctuation">,</span> applicationid<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    create_trigger<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> HOSTNAME<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    create_graph<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> hostid<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># json_obj = ZabbixAPI.json_obj(auth, 'httptest.get', params={"applicationids": applicationid})</span>
<span class="token comment"># request = ZabbixAPI.do_request(auth, json_obj)</span>
<span class="token comment"># print(json.dumps(request, ensure_ascii=False, indent=4))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合下面的shell脚本运行，</p>
<p>shell脚本如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">"en_US.UTF-8"</span>

<span class="token assign-left variable">arr_hostname</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">"192.168.165.115"</span> <span class="token string">"192.168.9.13"</span><span class="token punctuation">)</span>
<span class="token assign-left variable">len</span><span class="token operator">=</span><span class="token variable">${<span class="token operator">#</span>arr_hostname<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token assign-left variable">tdir</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$dir</span>/tmp"</span>

<span class="token assign-left variable">dt</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">date</span> <span class="token string">"+%F %T"</span><span class="token variable">`</span></span>

<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$tdir</span>/code_error.txt <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token operator">></span><span class="token variable">$tdir</span>/code_error.txt

<span class="token comment">## i: 项目信息   j: url   k:时间间隔</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> i j k o<span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> x<span class="token string">"<span class="token variable">$o</span>"</span> <span class="token operator">==</span> x<span class="token string">""</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$o</span> <span class="token parameter variable">-le</span> <span class="token variable"><span class="token variable">$((</span>$len<span class="token operator">-</span><span class="token number">1</span><span class="token variable">))</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-I</span> <span class="token string">"<span class="token variable">$j</span>"</span> <span class="token operator">></span> <span class="token variable">$tdir</span>/curl.txt
        <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">grep</span> <span class="token string">'HTTP/1.1'</span> $tdir/curl.txt<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{print $2}'</span><span class="token variable">`</span></span>
        <span class="token comment">#echo "$i $j $code" </span>

        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$code</span> <span class="token parameter variable">-eq</span> <span class="token number">200</span> <span class="token parameter variable">-o</span> <span class="token variable">$code</span> <span class="token parameter variable">-eq</span> <span class="token number">301</span> <span class="token parameter variable">-o</span> <span class="token variable">$code</span> <span class="token parameter variable">-eq</span> <span class="token number">302</span> <span class="token parameter variable">-o</span> <span class="token variable">$code</span> <span class="token parameter variable">-eq</span> <span class="token number">405</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            python <span class="token variable">$dir</span>/zabbix_agent.py <span class="token variable">$i</span> <span class="token variable">$j</span> <span class="token variable">$k</span> <span class="token variable">${arr_hostname<span class="token punctuation">[</span>$o<span class="token punctuation">]</span>}</span>
            <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$dt</span> <span class="token variable">$i</span> <span class="token variable">$j</span> <span class="token variable">$k</span> <span class="token variable">$o</span> create ok"</span> <span class="token operator">>></span> <span class="token variable">$tdir</span>/info <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$dt</span> <span class="token variable">$i</span> <span class="token variable">$j</span> <span class="token variable">$k</span> <span class="token variable">$o</span> create fail"</span> <span class="token operator">>></span><span class="token variable">$tdir</span>/info
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$i</span> <span class="token variable">$j</span> <span class="token variable">$k</span> <span class="token variable">$o</span> <span class="token variable">$code</span>"</span> <span class="token operator">>></span><span class="token variable">$tdir</span>/code_error.txt
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$i</span> <span class="token variable">$code</span>"</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"hostname参数传递错误"</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span><span class="token variable">$dir</span>/list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>arr_hostname为添加web监控的两个主机，我进行的是交叉互检</li>
</ul>
<p>最后还需要一个list文件，list文件内容格式如下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>csp-web-syndata http://192.168.100.15:8085/csp-web-syndata/shop/synShopInfo/111 3m 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="调用jenkinsapi批量拷贝视图job" tabindex="-1"><a class="header-anchor" href="#调用jenkinsapi批量拷贝视图job" aria-hidden="true">#</a> 调用jenkinsAPI批量拷贝视图job</h2>
<p>起因：一个视图下有好多job，新建一套微服务的job，完全可以用批量拷贝，然后改一些配置参数</p>
<p>脚本如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># coding:utf-8</span>

<span class="token keyword">import</span> jenkins
<span class="token keyword">import</span> sys

src_view <span class="token operator">=</span> <span class="token string">'jxltz'</span>
dest_view <span class="token operator">=</span> <span class="token string">'jxyz'</span>
old_branch <span class="token operator">=</span> <span class="token string">'jxltz-csp-parent'</span>
new_branch <span class="token operator">=</span> <span class="token string">'jxyz-csp-parent'</span>


<span class="token keyword">def</span> <span class="token function">get_server_instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    jenkins_url <span class="token operator">=</span> <span class="token string">'http://192.168.162.175:8080'</span>
    server <span class="token operator">=</span> jenkins<span class="token punctuation">.</span>Jenkins<span class="token punctuation">(</span>jenkins_url<span class="token punctuation">,</span> username<span class="token operator">=</span><span class="token string">'admin'</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">'xxx'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> server


<span class="token keyword">def</span> <span class="token function">delete_job</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    server <span class="token operator">=</span> get_server_instance<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> server<span class="token punctuation">.</span>view_exists<span class="token punctuation">(</span>dest_view<span class="token punctuation">)</span><span class="token punctuation">:</span>
        server<span class="token punctuation">.</span>delete_view<span class="token punctuation">(</span>dest_view<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"view不存在"</span><span class="token punctuation">)</span>
    jobs <span class="token operator">=</span> server<span class="token punctuation">.</span>get_jobs<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> job <span class="token keyword">in</span> jobs<span class="token punctuation">:</span>
        <span class="token keyword">if</span> dest_view <span class="token keyword">in</span> job<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            server<span class="token punctuation">.</span>delete_job<span class="token punctuation">(</span>job<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">copy_job</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    server <span class="token operator">=</span> get_server_instance<span class="token punctuation">(</span><span class="token punctuation">)</span>
    jobs <span class="token operator">=</span> server<span class="token punctuation">.</span>get_jobs<span class="token punctuation">(</span>view_name<span class="token operator">=</span>src_view<span class="token punctuation">)</span>
    <span class="token keyword">for</span> job <span class="token keyword">in</span> jobs<span class="token punctuation">:</span>
        job_name <span class="token operator">=</span> job<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span>
        newjob_name <span class="token operator">=</span> job_name<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>src_view<span class="token punctuation">,</span> dest_view<span class="token punctuation">)</span>
        <span class="token keyword">if</span> server<span class="token punctuation">.</span>job_exists<span class="token punctuation">(</span>newjob_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"job已存在"</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            server<span class="token punctuation">.</span>copy_job<span class="token punctuation">(</span>job_name<span class="token punctuation">,</span> newjob_name<span class="token punctuation">)</span>
    configxml <span class="token operator">=</span> server<span class="token punctuation">.</span>get_view_config<span class="token punctuation">(</span>src_view<span class="token punctuation">)</span>
    newconfigxml <span class="token operator">=</span> configxml<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>src_view<span class="token punctuation">,</span> dest_view<span class="token punctuation">)</span>
    <span class="token keyword">if</span> server<span class="token punctuation">.</span>view_exists<span class="token punctuation">(</span>dest_view<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"view已存在"</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        server<span class="token punctuation">.</span>create_view<span class="token punctuation">(</span>dest_view<span class="token punctuation">,</span> newconfigxml<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">reconfig_job</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    server <span class="token operator">=</span> get_server_instance<span class="token punctuation">(</span><span class="token punctuation">)</span>
    jobs <span class="token operator">=</span> server<span class="token punctuation">.</span>get_jobs<span class="token punctuation">(</span>view_name<span class="token operator">=</span>dest_view<span class="token punctuation">)</span>
    <span class="token keyword">for</span> job <span class="token keyword">in</span> jobs<span class="token punctuation">:</span>
        job_config <span class="token operator">=</span> server<span class="token punctuation">.</span>get_job_config<span class="token punctuation">(</span>job<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        new_job_config <span class="token operator">=</span> job_config<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>old_branch<span class="token punctuation">,</span> new_branch<span class="token punctuation">)</span>
        server<span class="token punctuation">.</span>reconfig_job<span class="token punctuation">(</span>job<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> new_job_config<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'delete'</span><span class="token punctuation">:</span>
        delete_job<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'copy'</span><span class="token punctuation">:</span>
        copy_job<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'reconfig'</span><span class="token punctuation">:</span>
        reconfig_job<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Usage: python %s delete|copy|reconfig"</span> <span class="token operator">%</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析-nginx-配置文件生成-excel-表格" tabindex="-1"><a class="header-anchor" href="#解析-nginx-配置文件生成-excel-表格" aria-hidden="true">#</a> 解析 nginx 配置文件生成 Excel 表格</h2>
<p>起因：领导要求统计每个域名下有哪些项目，将域名，端口，后端ip地址统计到Excel表格中。</p>
<h3 id="导入nginx配置文件" tabindex="-1"><a class="header-anchor" href="#导入nginx配置文件" aria-hidden="true">#</a> 导入nginx配置文件</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>scp -r /etc/nginx 192.168.167.24:/etc/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pip安装相关依赖模块" tabindex="-1"><a class="header-anchor" href="#pip安装相关依赖模块" aria-hidden="true">#</a> pip安装相关依赖模块</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pip3 install xlrd xlwt xlutils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之前在github找到过一个相关的模块，之前用过，现在不用了，讲一下，它怎么导入，命令如下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pip3 install git+https://github.com/fatiherikli/nginxparser.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编写python脚本" tabindex="-1"><a class="header-anchor" href="#编写python脚本" aria-hidden="true">#</a> 编写python脚本</h3>
<p><code v-pre>cat nginx_excel.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#!/usr/bin/python3</span>
<span class="token comment"># coding:utf-8</span>
<span class="token keyword">import</span> re
<span class="token keyword">import</span> os
<span class="token keyword">import</span> xlrd
<span class="token keyword">import</span> xlwt
<span class="token keyword">from</span> xlutils<span class="token punctuation">.</span>copy <span class="token keyword">import</span> copy


<span class="token comment"># from nginx import NGINX</span>

<span class="token keyword">class</span> <span class="token class-name">Nginx</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> conf_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>conf_path <span class="token operator">=</span> conf_path
        self<span class="token punctuation">.</span>backend <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>serverBlock <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>servers <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>tmp_conf <span class="token operator">=</span> <span class="token string">'/tmp/tmp_nginx.conf'</span>
        self<span class="token punctuation">.</span>all_conf <span class="token operator">=</span> <span class="token string">'/tmp/nginx.conf'</span>
        self<span class="token punctuation">.</span>merge_conf<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>parse_backend_ip<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>parse_server_block<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">merge_conf</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        conf_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>self<span class="token punctuation">.</span>conf_path<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>conf_dir<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span>conf_dir<span class="token punctuation">)</span>
        include_regex <span class="token operator">=</span> <span class="token string">'.*include.*'</span>
        fm <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>tmp_conf<span class="token punctuation">,</span> <span class="token string">'w+'</span><span class="token punctuation">)</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>conf_path<span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                r <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>include_regex<span class="token punctuation">,</span> line<span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
                    include_line <span class="token operator">=</span> r<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>
                    include_path <span class="token operator">=</span> include_line<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">";"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                    <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>include_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
                        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>include_path<span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> ff<span class="token punctuation">:</span>
                            include_con <span class="token operator">=</span> ff<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
                            fm<span class="token punctuation">.</span>write<span class="token punctuation">(</span>include_con<span class="token punctuation">)</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    fm<span class="token punctuation">.</span>write<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        fm<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 去掉注释行</span>
        fm <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>tmp_conf<span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>all_conf<span class="token punctuation">,</span> <span class="token string">'w+'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fp<span class="token punctuation">:</span>
            <span class="token keyword">for</span> xx <span class="token keyword">in</span> fm<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'^\s*#'</span><span class="token punctuation">,</span> xx<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    fp<span class="token punctuation">.</span>write<span class="token punctuation">(</span>xx<span class="token punctuation">)</span>
        fm<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 删除临时配置文件</span>
        <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>self<span class="token punctuation">.</span>tmp_conf<span class="token punctuation">)</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>self<span class="token punctuation">.</span>tmp_conf<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">parse_backend_ip</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>all_conf<span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fp<span class="token punctuation">:</span>
            alllines <span class="token operator">=</span> fp<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token comment"># 获取每个upstream块</span>
            regex_1 <span class="token operator">=</span> <span class="token string">'upstream\s+([^{ ]+)\s*{([^}]*)}'</span>
            upstreams <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_1<span class="token punctuation">,</span> alllines<span class="token punctuation">)</span>

            <span class="token keyword">for</span> up <span class="token keyword">in</span> upstreams<span class="token punctuation">:</span>
                <span class="token comment"># 获取后端的ip</span>
                regex_2 <span class="token operator">=</span> <span class="token string">'server\s+(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d{2,5})?)'</span>
                backend <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>regex_2<span class="token punctuation">,</span> up<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token comment"># 判断是否有后端的ip设置</span>
                <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>backend<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
                    pool_and_ip <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'poolname'</span><span class="token punctuation">:</span> up<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'ip'</span><span class="token punctuation">:</span> <span class="token string">' '</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>backend<span class="token punctuation">)</span><span class="token punctuation">}</span>
                    self<span class="token punctuation">.</span>backend<span class="token punctuation">.</span>append<span class="token punctuation">(</span>pool_and_ip<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">parse_server_block</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        flag <span class="token operator">=</span> <span class="token boolean">False</span>
        serverblock <span class="token operator">=</span> <span class="token string">''</span>
        num_of_quote <span class="token operator">=</span> <span class="token number">0</span>

        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>all_conf<span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fp<span class="token punctuation">:</span>
            <span class="token keyword">for</span> line <span class="token keyword">in</span> fp<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                x <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> x<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">'server{'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    num_of_quote <span class="token operator">+=</span> <span class="token number">1</span>
                    flag <span class="token operator">=</span> <span class="token boolean">True</span>
                    serverblock <span class="token operator">+=</span> line
                    <span class="token keyword">continue</span>
                <span class="token keyword">if</span> flag <span class="token keyword">and</span> <span class="token string">'{'</span> <span class="token keyword">in</span> line<span class="token punctuation">:</span>
                    num_of_quote <span class="token operator">+=</span> <span class="token number">1</span>

                <span class="token comment"># 将proxy_pass的别名换成ip</span>
                <span class="token keyword">if</span> flag <span class="token keyword">and</span> <span class="token string">'proxy_pass'</span> <span class="token keyword">in</span> line<span class="token punctuation">:</span>
                    r <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'proxy_pass\s+https?://([^;/]*)[^;]*;'</span><span class="token punctuation">,</span> line<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
                        <span class="token keyword">for</span> pool <span class="token keyword">in</span> self<span class="token punctuation">.</span>backend<span class="token punctuation">:</span>
                            <span class="token keyword">if</span> r<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> pool<span class="token punctuation">[</span><span class="token string">'poolname'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                                line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>r<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pool<span class="token punctuation">[</span><span class="token string">'ip'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

                <span class="token keyword">if</span> flag <span class="token keyword">and</span> num_of_quote <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    serverblock <span class="token operator">+=</span> line

                <span class="token keyword">if</span> flag <span class="token keyword">and</span> <span class="token string">'}'</span> <span class="token keyword">in</span> line<span class="token punctuation">:</span>
                    num_of_quote <span class="token operator">-=</span> <span class="token number">1</span>

                <span class="token keyword">if</span> flag <span class="token keyword">and</span> num_of_quote <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    self<span class="token punctuation">.</span>serverBlock<span class="token punctuation">.</span>append<span class="token punctuation">(</span>serverblock<span class="token punctuation">)</span>
                    flag <span class="token operator">=</span> <span class="token boolean">False</span>
                    serverblock <span class="token operator">=</span> <span class="token string">''</span>
                    num_of_quote <span class="token operator">=</span> <span class="token number">0</span>

        <span class="token keyword">for</span> singleServer <span class="token keyword">in</span> self<span class="token punctuation">.</span>serverBlock<span class="token punctuation">:</span>
            <span class="token comment"># port和server_name均只有一个的情况下</span>
            port <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'listen\s*((?:\d|\s)*)[^;]*;'</span><span class="token punctuation">,</span> singleServer<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            r <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'server_name\s+([^;]*);'</span><span class="token punctuation">,</span> singleServer<span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
                servername <span class="token operator">=</span> r<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">continue</span>

            <span class="token comment"># location可能不止一个</span>
            locations <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'location\s*[\^~\*=]{0,3}\s*([^{ ]*)\s*\{[^}]*proxy_pass\s+https?://([^;/]*)[^;]*;'</span><span class="token punctuation">,</span>
                                   singleServer<span class="token punctuation">)</span>

            backend_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            backend_ip <span class="token operator">=</span> <span class="token string">''</span>

            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>locations<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">for</span> location <span class="token keyword">in</span> locations<span class="token punctuation">:</span>
                    backend_path <span class="token operator">=</span> location<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                    poolname <span class="token operator">=</span> location<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
                    <span class="token comment"># 如果不是ip的pool name，就取出后端对应的ip</span>
                    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}'</span><span class="token punctuation">,</span> poolname<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                        <span class="token keyword">for</span> backend <span class="token keyword">in</span> self<span class="token punctuation">.</span>backend<span class="token punctuation">:</span>
                            <span class="token keyword">if</span> poolname <span class="token operator">==</span> backend<span class="token punctuation">[</span><span class="token string">'poolname'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                                backend_ip <span class="token operator">=</span> backend<span class="token punctuation">[</span><span class="token string">'ip'</span><span class="token punctuation">]</span>
                                <span class="token keyword">break</span>
                    <span class="token keyword">else</span><span class="token punctuation">:</span>
                        backend_ip <span class="token operator">=</span> poolname

                    backend_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"backend_path"</span><span class="token punctuation">:</span> backend_path<span class="token punctuation">,</span> <span class="token string">"backend_ip"</span><span class="token punctuation">:</span> backend_ip<span class="token punctuation">}</span><span class="token punctuation">)</span>

            server <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token string">'port'</span><span class="token punctuation">:</span> port<span class="token punctuation">,</span>
                <span class="token string">'server_name'</span><span class="token punctuation">:</span> servername<span class="token punctuation">,</span>
                <span class="token string">'backend'</span><span class="token punctuation">:</span> backend_list
            <span class="token punctuation">}</span>

            self<span class="token punctuation">.</span>servers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>server<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">NginxExcel</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>row <span class="token operator">=</span> row
        self<span class="token punctuation">.</span>col <span class="token operator">=</span> col

    <span class="token keyword">def</span> <span class="token function">read_from_txt</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> txt_filename<span class="token punctuation">,</span> line<span class="token punctuation">)</span><span class="token punctuation">:</span>
        file_txt <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>txt_filename<span class="token punctuation">)</span>
        lines <span class="token operator">=</span> file_txt<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
        strlist <span class="token operator">=</span> lines<span class="token punctuation">[</span>line<span class="token punctuation">]</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>project_name <span class="token operator">=</span> strlist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>domain <span class="token operator">=</span> strlist<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>link <span class="token operator">=</span> strlist<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>proxy_pass <span class="token operator">=</span> strlist<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">write_to_excel</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> excel_filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>excel_filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
            rb <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span>excel_filename<span class="token punctuation">)</span>
            wb <span class="token operator">=</span> copy<span class="token punctuation">(</span>rb<span class="token punctuation">)</span>
            sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>get_sheet<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            wb <span class="token operator">=</span> xlwt<span class="token punctuation">.</span>Workbook<span class="token punctuation">(</span><span class="token punctuation">)</span>
            sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>add_sheet<span class="token punctuation">(</span><span class="token string">'私有云'</span><span class="token punctuation">)</span>
            sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>self<span class="token punctuation">.</span>row<span class="token punctuation">,</span> self<span class="token punctuation">.</span>col<span class="token punctuation">,</span> <span class="token string">"项目名"</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>col <span class="token operator">+=</span> <span class="token number">1</span>
            sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>self<span class="token punctuation">.</span>row<span class="token punctuation">,</span> self<span class="token punctuation">.</span>col<span class="token punctuation">,</span> <span class="token string">"域名"</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>col <span class="token operator">+=</span> <span class="token number">1</span>
            sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>self<span class="token punctuation">.</span>row<span class="token punctuation">,</span> self<span class="token punctuation">.</span>col<span class="token punctuation">,</span> <span class="token string">"项目链接"</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>col <span class="token operator">+=</span> <span class="token number">1</span>
            sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>self<span class="token punctuation">.</span>row<span class="token punctuation">,</span> self<span class="token punctuation">.</span>col<span class="token punctuation">,</span> <span class="token string">"后端地址"</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>row <span class="token operator">+=</span> <span class="token number">1</span>
            self<span class="token punctuation">.</span>col <span class="token operator">=</span> <span class="token number">0</span>

        sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>self<span class="token punctuation">.</span>row<span class="token punctuation">,</span> self<span class="token punctuation">.</span>col<span class="token punctuation">,</span> self<span class="token punctuation">.</span>project_name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>col <span class="token operator">+=</span> <span class="token number">1</span>
        sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>self<span class="token punctuation">.</span>row<span class="token punctuation">,</span> self<span class="token punctuation">.</span>col<span class="token punctuation">,</span> self<span class="token punctuation">.</span>domain<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>col <span class="token operator">+=</span> <span class="token number">1</span>
        sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>self<span class="token punctuation">.</span>row<span class="token punctuation">,</span> self<span class="token punctuation">.</span>col<span class="token punctuation">,</span> self<span class="token punctuation">.</span>link<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>col <span class="token operator">+=</span> <span class="token number">1</span>
        sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>self<span class="token punctuation">.</span>row<span class="token punctuation">,</span> self<span class="token punctuation">.</span>col<span class="token punctuation">,</span> <span class="token string">", "</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>self<span class="token punctuation">.</span>proxy_pass<span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>row <span class="token operator">+=</span> <span class="token number">1</span>
        self<span class="token punctuation">.</span>col <span class="token operator">=</span> <span class="token number">0</span>
        wb<span class="token punctuation">.</span>save<span class="token punctuation">(</span>excel_filename<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    txt_filename <span class="token operator">=</span> <span class="token string">"私有云项目清单.txt"</span>
    excel_filename <span class="token operator">=</span> <span class="token string">"私有云项目清单.xls"</span>
    s <span class="token operator">=</span> NginxExcel<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    nginx <span class="token operator">=</span> Nginx<span class="token punctuation">(</span><span class="token string">'/etc/nginx/nginx.conf'</span><span class="token punctuation">)</span>
    nginx_list <span class="token operator">=</span> nginx<span class="token punctuation">.</span>servers
    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>txt_filename<span class="token punctuation">,</span> <span class="token string">"w+"</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> server <span class="token keyword">in</span> nginx_list<span class="token punctuation">:</span>
        <span class="token keyword">for</span> backend <span class="token keyword">in</span> server<span class="token punctuation">[</span><span class="token string">"backend"</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            old_project_name <span class="token operator">=</span> backend<span class="token punctuation">[</span><span class="token string">"backend_path"</span><span class="token punctuation">]</span>
            new_project_name <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r'/'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> old_project_name<span class="token punctuation">)</span>
            <span class="token keyword">if</span> server<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"80"</span><span class="token punctuation">:</span>
                domain <span class="token operator">=</span> <span class="token string">"http://"</span> <span class="token operator">+</span> server<span class="token punctuation">[</span><span class="token string">"server_name"</span><span class="token punctuation">]</span>
                link <span class="token operator">=</span> domain <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> new_project_name <span class="token operator">+</span> <span class="token string">"/"</span>
            <span class="token keyword">elif</span> server<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"443"</span><span class="token punctuation">:</span>
                domain <span class="token operator">=</span> <span class="token string">"https://"</span> <span class="token operator">+</span> server<span class="token punctuation">[</span><span class="token string">"server_name"</span><span class="token punctuation">]</span>
                link <span class="token operator">=</span> domain <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> new_project_name <span class="token operator">+</span> <span class="token string">"/"</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                domain <span class="token operator">=</span> <span class="token string">"http://"</span> <span class="token operator">+</span> server<span class="token punctuation">[</span><span class="token string">"server_name"</span><span class="token punctuation">]</span>
                link <span class="token operator">=</span> domain <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> server<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> new_project_name <span class="token operator">+</span> <span class="token string">"/"</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">"%s %s %s %s\n"</span> <span class="token operator">%</span> <span class="token punctuation">(</span>new_project_name<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> link<span class="token punctuation">,</span> backend<span class="token punctuation">[</span><span class="token string">"backend_ip"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>txt_filename<span class="token punctuation">)</span>
    lines <span class="token operator">=</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> line <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>lines<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        s<span class="token punctuation">.</span>read_from_txt<span class="token punctuation">(</span>txt_filename<span class="token punctuation">,</span> line<span class="token punctuation">)</span>
        s<span class="token punctuation">.</span>write_to_excel<span class="token punctuation">(</span>excel_filename<span class="token punctuation">)</span>

    f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行脚本，生成Excel表格</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>python3 nginx_excel.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表格生成在<code v-pre>/etc/nginx</code>目录下</p>
<h2 id="监控-activemq-集群状态并自动重启" tabindex="-1"><a class="header-anchor" href="#监控-activemq-集群状态并自动重启" aria-hidden="true">#</a> 监控 activemq 集群状态并自动重启</h2>
<p>起因：activemq集群，由于私有云底层网路问题，隔一段时间假死一次，集群依赖zookeeper集群，后续将集群方式改为了共享存储的方式</p>
<p>要监控Activemq集群的运行情况，我们就可以通过stomp协议的相关客户端来实现。</p>
<p><strong><code v-pre>stomp.py</code>安装</strong></p>
<p>在此我们使用的是stomp协议的python客户端，来实现集群的监控。</p>
<p>支持stomp协议的python客户端，我们使用的是stomp.py这个软件来实现，而stomp.py我们可以在github上来获得。</p>
<p>stomp.py除了可以连接activemq，还可以连接rabbitmq。</p>
<p>stomp.py仓库的github地址为：</p>
<p>https://github.com/jasonrbriggs/stomp.py.git</p>
<p><strong>安装stomp</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git clone https://github.com/jasonrbriggs/stomp.py.git
cd stomp.py
python setup.py install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本如下</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># coding:utf-8</span>

<span class="token keyword">import</span> time
<span class="token keyword">import</span> paramiko
<span class="token keyword">import</span> stomp

A_IP <span class="token operator">=</span> <span class="token string">"192.168.161.1"</span>
B_IP <span class="token operator">=</span> <span class="token string">"192.168.161.2"</span>
C_IP <span class="token operator">=</span> <span class="token string">"192.168.161.3"</span>
USERNAME <span class="token operator">=</span> <span class="token string">"root"</span>
PASSWROD <span class="token operator">=</span> <span class="token string">"*******"</span>

<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
now <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">"%Y-%m-%d %H:%M:%S"</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">MyParamiko</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> hostip<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>hostip <span class="token operator">=</span> hostip
        self<span class="token punctuation">.</span>port <span class="token operator">=</span> port
        self<span class="token punctuation">.</span>username <span class="token operator">=</span> username
        self<span class="token punctuation">.</span>password <span class="token operator">=</span> password
        self<span class="token punctuation">.</span>obj <span class="token operator">=</span> paramiko<span class="token punctuation">.</span>SSHClient<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>set_missing_host_key_policy<span class="token punctuation">(</span>paramiko<span class="token punctuation">.</span>AutoAddPolicy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>hostip<span class="token punctuation">,</span> self<span class="token punctuation">.</span>port<span class="token punctuation">,</span> self<span class="token punctuation">.</span>username<span class="token punctuation">,</span> self<span class="token punctuation">.</span>password<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run_cmd</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cmd<span class="token punctuation">)</span><span class="token punctuation">:</span>
        stdin<span class="token punctuation">,</span> stdout<span class="token punctuation">,</span> stderr <span class="token operator">=</span> self<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>exec_command<span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>
        <span class="token keyword">return</span> stdout<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">close</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">check_port</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> ip <span class="token keyword">in</span> <span class="token punctuation">(</span>A_IP<span class="token punctuation">,</span> B_IP<span class="token punctuation">,</span> C_IP<span class="token punctuation">)</span><span class="token punctuation">:</span>
        sshobj <span class="token operator">=</span> MyParamiko<span class="token punctuation">(</span>ip<span class="token punctuation">,</span> USERNAME<span class="token punctuation">,</span> PASSWROD<span class="token punctuation">)</span>
        result <span class="token operator">=</span> sshobj<span class="token punctuation">.</span>run_cmd<span class="token punctuation">(</span><span class="token string">'netstat -ntpl | grep -c 61613'</span><span class="token punctuation">)</span>
        <span class="token builtin">list</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>result<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">'\n'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        sshobj<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">activemq_listen</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">MyListener</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">on_error</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> <span class="token string">' received an error %s'</span> <span class="token operator">%</span> message<span class="token punctuation">)</span>

        <span class="token keyword">def</span> <span class="token function">on_message</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> <span class="token string">' received a message %s'</span> <span class="token operator">%</span> message<span class="token punctuation">)</span>
    conn <span class="token operator">=</span> stomp<span class="token punctuation">.</span>Connection<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span>ip<span class="token punctuation">,</span> <span class="token number">61613</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>set_listener<span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> MyListener<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">'admin'</span><span class="token punctuation">,</span> <span class="token string">'admin'</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>subscribe<span class="token punctuation">(</span>destination<span class="token operator">=</span><span class="token string">'/queue/clay.test.mqtest.v1'</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> ack<span class="token operator">=</span><span class="token string">'auto'</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span>body<span class="token operator">=</span><span class="token string">'clay test'</span><span class="token punctuation">,</span> destination<span class="token operator">=</span><span class="token string">'/queue/clay.test.mqtest.v1'</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>disconnect<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">activemq_restart</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">:</span>
    sshobj <span class="token operator">=</span> MyParamiko<span class="token punctuation">(</span>ip<span class="token punctuation">,</span> USERNAME<span class="token punctuation">,</span> PASSWROD<span class="token punctuation">)</span>
    cmd <span class="token operator">=</span> <span class="token string">"ps -ef | grep activemq | grep -v grep | awk '{print $2}'| xargs kill -9;"</span> \
        <span class="token string">"export JAVA_HOME=/opt/jdk1.8.0_144;"</span> \
        <span class="token string">"/opt/apache-activemq-5.15.9/bin/activemq start"</span>
    result <span class="token operator">=</span> sshobj<span class="token punctuation">.</span>run_cmd<span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> result<span class="token punctuation">)</span>
    sshobj<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">activmq_monitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">list</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> <span class="token string">" 第一台机器的61613端口处于监听状态，现在尝试往里面发送消息..."</span><span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            activemq_listen<span class="token punctuation">(</span>A_IP<span class="token punctuation">)</span>
        <span class="token keyword">except</span> stomp<span class="token punctuation">.</span>exception<span class="token punctuation">.</span>ConnectFailedException<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> <span class="token string">" 发送信息失败，请重启Activemq进程..."</span><span class="token punctuation">)</span>
            activemq_restart<span class="token punctuation">(</span>A_IP<span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token builtin">list</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> <span class="token string">" 第二台机器的61613端口处于监听状态，现在尝试往里面发送消息..."</span><span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            activemq_listen<span class="token punctuation">(</span>B_IP<span class="token punctuation">)</span>
        <span class="token keyword">except</span> stomp<span class="token punctuation">.</span>exception<span class="token punctuation">.</span>ConnectFailedException<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> <span class="token string">" 发送信息失败，请重启Activemq进程..."</span><span class="token punctuation">)</span>
            activemq_restart<span class="token punctuation">(</span>B_IP<span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token builtin">list</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> <span class="token string">" 第三台机器的61613端口处于监听状态，现在尝试往里面发送消息..."</span><span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            activemq_listen<span class="token punctuation">(</span>C_IP<span class="token punctuation">)</span>
        <span class="token keyword">except</span> stomp<span class="token punctuation">.</span>exception<span class="token punctuation">.</span>ConnectFailedException<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> <span class="token string">" 发送信息失败，请重启Activemq进程..."</span><span class="token punctuation">)</span>
            activemq_restart<span class="token punctuation">(</span>C_IP<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>now <span class="token operator">+</span> <span class="token string">" activemq的61613端口处于异常，现在重启这三台mq..."</span><span class="token punctuation">)</span>
        activemq_restart<span class="token punctuation">(</span>A_IP<span class="token punctuation">)</span>
        activemq_restart<span class="token punctuation">(</span>B_IP<span class="token punctuation">)</span>
        activemq_restart<span class="token punctuation">(</span>C_IP<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    check_port<span class="token punctuation">(</span><span class="token punctuation">)</span>
    activmq_monitor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建计划任务</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>*/2 * * * * /usr/bin/python3 /root/activemq.py >> /var/log/activemq.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


