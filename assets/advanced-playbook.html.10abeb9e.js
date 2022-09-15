import{_ as n,e as s}from"./app.99236824.js";const a={},e=s(`<h1 id="_4-4-playbook\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-4-playbook\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> 4.4 Playbook\u9AD8\u7EA7\u7528\u6CD5</h1><h2 id="_1-\u672C\u5730\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_1-\u672C\u5730\u6267\u884C" aria-hidden="true">#</a> 1 \u672C\u5730\u6267\u884C</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CAnsible\u4F7F\u7528ssh\u53BB\u8FDE\u63A5\u8FDC\u7A0B\u4E3B\u673A\uFF0C\u4F46\u5B9E\u9645\u4E0A\u5B83\u63D0\u4F9B\u4E86\u591A\u79CD\u63D2\u4EF6\u6765\u4E30\u5BCC\u8FDE\u63A5\u65B9\u5F0F\uFF1Asmart\u3001ssh\u3001paramiko\u3001local\u3001docker\u3001winrm\uFF0C\u9ED8\u8BA4\u4E3Asmart\u3002</p><p>smart\u8868\u793A\u667A\u80FD\u9009\u62E9ssh\u548Cparamiko(paramiko\u662FPython\u7684\u4E00\u4E2Assh\u534F\u8BAE\u6A21\u5757)\uFF0C\u5F53Ansible\u7AEF\u5B89\u88C5\u7684ssh\u652F\u6301ControlPersist(\u5373\u6301\u4E45\u8FDE\u63A5)\u65F6\u81EA\u52A8\u4F7F\u7528ssh\uFF0C\u5426\u5219\u4F7F\u7528paramiko\u3002local\u548Cdocker\u662F\u975E\u57FA\u4E8Essh\u8FDE\u63A5\u7684\u65B9\u5F0F\uFF0Cwinrm\u662F\u8FDE\u63A5Windows\u7684\u63D2\u4EF6\u3002</p><p>\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u9009\u9879\u4E2D\u4F7F\u7528-c\u6216--connection\u9009\u9879\u6765\u6307\u5B9A\u8FDE\u63A5\u65B9\u5F0F\uFF1A</p><p>\u5982\u679C\u5E0C\u671B\u5728\u63A7\u5236\u4E3B\u673A\u672C\u5730\u8FD0\u884C\u4E00\u4E2A\u7279\u5B9A\u7684\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u4F7F\u7528local_action\u8BED\u53E5\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u9700\u8981\u914D\u7F6E\u7684\u8FDC\u7A0B\u4E3B\u673A\u521A\u521A\u542F\u52A8\uFF0C\u5982\u679C\u6211\u4EEC\u76F4\u63A5\u8FD0\u884Cplaybook\uFF0C\u53EF\u80FD\u4F1A\u56E0\u4E3Asshd\u670D\u52A1\u5C1A\u672A\u5F00\u59CB\u76D1\u542C\u800C\u5BFC\u81F4\u5931\u8D25\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u63A7\u5236\u4E3B\u673A\u4E0A\u4F7F\u7528\u5982\u4E0B\u793A\u4F8B\u6765\u7B49\u5F85\u88AB\u63A7\u7AEFsshd\u7AEF\u53E3\u76D1\u542C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: wait for ssh server to be running
  wait_for
      port: 22 
      host: &quot;{{ inventory_hostname }}&quot; 
      search_regex: OpenSSH
  connection: local
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6B64\u5916\uFF0Cinventory\u4E2D\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8FDE\u63A5\u7684\u884C\u4E3A\u53D8\u91CFansible_connection\u6307\u5B9A\u8FDE\u63A5\u7C7B\u578B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>192.168.100.101 ansible_connection=&quot;smart&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-\u4EFB\u52A1\u59D4\u6258" tabindex="-1"><a class="header-anchor" href="#_2-\u4EFB\u52A1\u59D4\u6258" aria-hidden="true">#</a> 2 \u4EFB\u52A1\u59D4\u6258</h2><p>\u5728\u6709\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u8FD0\u884C\u4E0E\u9009\u5B9A\u7684\u4E3B\u673A\u6216\u4E3B\u673A\u7EC4\u76F8\u5173\u8054\u7684task\uFF0C\u4F46\u662F\u8FD9\u4E2Atask\u53C8\u4E0D\u9700\u8981\u5728\u9009\u5B9A\u7684\u4E3B\u673A\u6216\u4E3B\u673A\u7EC4\u4E0A\u6267\u884C\uFF0C\u800C\u9700\u8981\u5728\u53E6\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u6267\u884C\u3002</p><p>\u8FD9\u79CD\u7279\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A</p><ul><li>\u5728\u544A\u8B66\u7CFB\u7EDF\u4E2D\u542F\u7528\u57FA\u4E8E\u4E3B\u673A\u7684\u544A\u8B66</li><li>\u5411\u8D1F\u8F7D\u5747\u8861\u5668\u4E2D\u6DFB\u52A0\u6216\u79FB\u9664\u4E00\u53F0\u4E3B\u673A</li><li>\u5728dns\u4E0A\u6DFB\u52A0\u6216\u4FEE\u6539\u9488\u5BF9\u67D0\u4E2A\u4E3B\u673A\u7684\u89E3\u6790</li><li>\u5728\u5B58\u50A8\u8282\u70B9\u4E0A\u521B\u5EFA\u4E00\u4E2A\u5B58\u50A8\u4EE5\u7528\u4E8E\u4E3B\u673A\u6302\u8F7D</li><li>\u4F7F\u7528\u4E00\u4E2A\u5916\u90E8\u7A0B\u5E8F\u6765\u68C0\u6D4B\u4E3B\u673A\u4E0A\u7684\u670D\u52A1\u662F\u5426\u6B63\u5E38</li></ul><p>\u53EF\u4EE5\u4F7F\u7528delegate_to\u8BED\u53E5\u6765\u5728\u53E6\u4E00\u53F0\u4E3B\u673A\u4E0A\u8FD0\u884Ctask\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: enable alerts for web servers
  hosts: webservers
  tasks:
    - name: enable alerts
      nagios: action=enable_alerts service=web host=&quot;{{ inventory_hostname }}&quot;
      delegate_to: nagios.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>\u5982\u679Cdelegate_to: 127.0.0.1\u7684\u65F6\u5019\uFF0C\u7B49\u4EF7\u4E8Econnection: local</p><p>\u663E\u7136connection: local\u548Cdelegate_to: localhost\u5728\u529F\u80FD\u4E0A\u662F\u7B49\u4EF7\u7684\u3002\u5F53\u7136\uFF0Cconnection\u53EF\u4EE5\u5B9A\u4E49\u5728play\u7EA7\u522B\u6216task\u7EA7\u522B\u4E0A\uFF0C\u800Cdelegate_to\u53EA\u80FD\u5B9A\u4E49\u5728task\u7EA7\u522B\u4E0A\u3002</p></blockquote><h2 id="_3-\u4EFB\u52A1\u6682\u505C" tabindex="-1"><a class="header-anchor" href="#_3-\u4EFB\u52A1\u6682\u505C" aria-hidden="true">#</a> 3 \u4EFB\u52A1\u6682\u505C</h2><p>\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E9B\u4EFB\u52A1\u7684\u8FD0\u884C\u9700\u8981\u7B49\u5F85\u4E00\u4E9B\u72B6\u6001\u7684\u6062\u590D\uFF0C\u6BD4\u5982\u67D0\u4E00\u53F0\u4E3B\u673A\u6216\u8005\u5E94\u7528\u521A\u521A\u91CD\u542F\uFF0C\u6211\u4EEC\u9700\u8981\u9700\u8981\u7B49\u5F85\u5B83\u4E0A\u9762\u7684\u67D0\u4E2A\u7AEF\u53E3\u5F00\u542F\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u5C06\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1\u6682\u505C\uFF0C\u76F4\u5230\u5176\u72B6\u6001\u6EE1\u8DB3\u8981\u6C42\u3002</p><p>Ansible\u63D0\u4F9B\u4E86wait_for\u6A21\u5757\u4EE5\u5B9E\u73B0\u4EFB\u52A1\u6682\u505C\u7684\u9700\u6C42</p><p>wait_for\u6A21\u5757\u5E38\u7528\u53C2\u6570\uFF1A</p><ul><li>connect_timeout\uFF1A\u5728\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\u4E4B\u524D\u7B49\u5F85\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4</li><li>delay\uFF1A\u7B49\u5F85\u4E00\u4E2A\u7AEF\u53E3\u6216\u8005\u6587\u4EF6\u6216\u8005\u8FDE\u63A5\u5230\u6307\u5B9A\u7684\u72B6\u6001\u65F6\uFF0C\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4\u4E3A300\u79D2\uFF0C\u5728\u8FD9\u7B49\u5F85\u7684300s\u7684\u65F6\u95F4\u91CC\uFF0Cwait_for\u6A21\u5757\u4F1A\u4E00\u76F4\u8F6E\u8BE2\u6307\u5B9A\u7684\u5BF9\u8C61\u662F\u5426\u5230\u8FBE\u6307\u5B9A\u7684\u72B6\u6001\uFF0Cdelay\u5373\u4E3A\u591A\u957F\u65F6\u95F4\u8F6E\u8BE2\u4E00\u6B21\u72B6\u6001\u3002</li><li>host\uFF1Await_for\u6A21\u5757\u7B49\u5F85\u7684\u4E3B\u673A\u7684\u5730\u5740\uFF0C\u9ED8\u8BA4\u4E3A127.0.0.1</li><li>port\uFF1Await_for\u6A21\u5757\u5F85\u5F85\u7684\u4E3B\u673A\u7684\u7AEF\u53E3</li><li>path\uFF1A\u6587\u4EF6\u8DEF\u5F84\uFF0C\u53EA\u6709\u5F53\u8FD9\u4E2A\u6587\u4EF6\u5B58\u5728\u65F6\uFF0C\u4E0B\u4E00\u4EFB\u52A1\u624D\u5F00\u59CB\u6267\u884C\uFF0C\u5373\u7B49\u5F85\u8BE5\u6587\u4EF6\u521B\u5EFA\u5B8C\u6210</li><li>state\uFF1A\u7B49\u5F85\u7684\u72B6\u6001\uFF0C\u5373\u7B49\u5F85\u7684\u6587\u4EF6\u6216\u7AEF\u53E3\u6216\u8005\u8FDE\u63A5\u72B6\u6001\u8FBE\u5230\u6307\u5B9A\u7684\u72B6\u6001\u65F6\uFF0C\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u5F00\u59CB\u6267\u884C\u3002\u5F53\u7B49\u7684\u5BF9\u8C61\u4E3A\u7AEF\u53E3\u65F6\uFF0C\u72B6\u6001\u6709started\uFF0Cstoped\uFF0C\u5373\u7AEF\u53E3\u5DF2\u7ECF\u76D1\u542C\u6216\u8005\u7AEF\u53E3\u5DF2\u7ECF\u5173\u95ED\uFF1B\u5F53\u7B49\u5F85\u7684\u5BF9\u8C61\u4E3A\u6587\u4EF6\u65F6\uFF0C\u72B6\u6001\u6709present\u6216\u8005started\uFF0Cabsent\uFF0C\u5373\u6587\u4EF6\u5DF2\u521B\u5EFA\u6216\u8005\u5220\u9664\uFF1B\u5F53\u7B49\u5F85\u7684\u5BF9\u8C61\u4E3A\u4E00\u4E2A\u8FDE\u63A5\u65F6\uFF0C\u72B6\u6001\u6709drained\uFF0C\u5373\u8FDE\u63A5\u5DF2\u5EFA\u7ACB\u3002\u9ED8\u8BA4\u4E3Astarted</li><li>timeout\uFF1Await_for\u7684\u7B49\u5F85\u7684\u8D85\u65F6\u65F6\u95F4,\u9ED8\u8BA4\u4E3A300\u79D2</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u7B49\u5F858080\u7AEF\u53E3\u5DF2\u6B63\u5E38\u76D1\u542C\uFF0C\u624D\u5F00\u59CB\u4E0B\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u76F4\u5230\u8D85\u65F6
- wait_for: 
    port: 8080 
    state: started  
    
#\u7B49\u5F858000\u7AEF\u53E3\u6B63\u5E38\u76D1\u542C\uFF0C\u6BCF\u969410s\u68C0\u67E5\u4E00\u6B21\uFF0C\u76F4\u81F3\u7B49\u5F85\u8D85\u65F6
- wait_for: 
    port: 8000 
    delay: 10 
    
#\u7B49\u5F858000\u7AEF\u53E3\u76F4\u81F3\u6709\u8FDE\u63A5\u5EFA\u7ACB
- wait_for: 
    host: 0.0.0.0 
    port: 8000 
    delay: 10 
    state: drained
    
#\u7B49\u5F858000\u7AEF\u53E3\u6709\u8FDE\u63A5\u5EFA\u7ACB\uFF0C\u5982\u679C\u8FDE\u63A5\u6765\u81EA10.2.1.2\u6216\u800510.2.1.3\uFF0C\u5219\u5FFD\u7565\u3002
- wait_for: 
    host: 0.0.0.0 
    port: 8000 
    state: drained 
    exclude_hosts: 10.2.1.2,10.2.1.3 
    
#\u7B49\u5F85/tmp/foo\u6587\u4EF6\u5DF2\u521B\u5EFA    
- wait_for: 
    path: /tmp/foo 

#\u7B49\u5F85/tmp/foo\u6587\u4EF6\u5DF2\u521B\u5EFA\uFF0C\u800C\u4E14\u8BE5\u6587\u4EF6\u4E2D\u9700\u8981\u5305\u542Bcompleted\u5B57\u7B26\u4E32    
- wait_for: 
    path: /tmp/foo 
    search_regex: completed 

#\u7B49\u5F85/var/lock/file.lock\u88AB\u5220\u9664    
- wait_for: 
    path: /var/lock/file.lock 
    state: absent 
    
#\u7B49\u5F85\u6307\u5B9A\u7684\u8FDB\u7A0B\u88AB\u9500\u6BC1
- wait_for: 
    path: /proc/3466/status 
    state: absent 
    
#\u7B49\u5F85openssh\u542F\u52A8\uFF0C10s\u68C0\u67E5\u4E00\u6B21
- wait_for: 
    port: 22 
    host: &quot;{{ ansible_ssh_host | default(inventory_hostname) }}&quot; search_regex: OpenSSH 
    delay: 10 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="_4-\u6EDA\u52A8\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_4-\u6EDA\u52A8\u6267\u884C" aria-hidden="true">#</a> 4 \u6EDA\u52A8\u6267\u884C</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cansible\u4F1A\u5E76\u884C\u7684\u5728\u6240\u6709\u9009\u5B9A\u7684\u4E3B\u673A\u6216\u4E3B\u673A\u7EC4\u4E0A\u6267\u884C\u6BCF\u4E00\u4E2Atask\uFF0C\u4F46\u6709\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u5E0C\u671B\u80FD\u591F\u9010\u53F0\u8FD0\u884C\u3002\u6700\u5178\u578B\u7684\u4F8B\u5B50\u5C31\u662F\u5BF9\u8D1F\u8F7D\u5747\u8861\u5668\u540E\u9762\u7684\u5E94\u7528\u670D\u52A1\u5668\u8FDB\u884C\u66F4\u65B0\u65F6\u3002\u901A\u5E38\u6765\u8BB2\uFF0C\u6211\u4EEC\u4F1A\u5C06\u5E94\u7528\u670D\u52A1\u5668\u9010\u53F0\u4ECE\u8D1F\u8F7D\u5747\u8861\u5668\u4E0A\u6458\u9664\uFF0C\u66F4\u65B0\uFF0C\u7136\u540E\u518D\u6DFB\u52A0\u56DE\u53BB\u3002\u6211\u4EEC\u53EF\u4EE5\u5728play\u4E2D\u4F7F\u7528serial\u8BED\u53E5\u6765\u544A\u8BC9ansible\u9650\u5236\u5E76\u884C\u6267\u884Cplay\u7684\u4E3B\u673A\u6570\u91CF\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5728amazon EC2\u7684\u8D1F\u8F7D\u5747\u8861\u5668\u4E2D\u79FB\u9664\u4E3B\u673A\uFF0C\u66F4\u65B0\u8F6F\u4EF6\u5305\uFF0C\u518D\u6DFB\u52A0\u56DE\u8D1F\u8F7D\u5747\u8861\u7684\u914D\u7F6E\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: upgrade pkgs on servers behind load balancer
  hosts: myhosts
  serial: 1
  tasks:
    - name: get the ec2 instance id and elastic load balancer id
      ec2_facts:

    - name: take the host out of the elastic load balancer id
      local_action: ec2_elb
      args:
        instance_id: &quot;{{ ansible_ec2_instance_id }}&quot;
        state: absent

    - name: upgrade pkgs
      apt: 
          update_cache: yes 
          upgrade: yes

    - name: put the host back n the elastic load balancer
      local_action: ec2_elb
      args:
        instance_id: &quot;{{ ansible_ec2_instance_id }}&quot;
        state: present
        ec2_elbs: &quot;{{ items }}&quot;
      with_items: ec2_elbs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5728\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0Cserial\u7684\u503C\u4E3A1\uFF0C\u5373\u8868\u793A\u5728\u67D0\u4E00\u4E2A\u65F6\u95F4\u6BB5\u5185\uFF0Cplay\u53EA\u5728\u4E00\u53F0\u4E3B\u673A\u4E0A\u6267\u884C\u3002\u5982\u679C\u4E3A2\uFF0C\u5219\u540C\u65F6\u67092\u53F0\u4E3B\u673A\u8FD0\u884Cplay\u3002</p><p>\u4E00\u822C\u6765\u8BB2\uFF0C\u5F53task\u5931\u8D25\u65F6\uFF0Cansible\u4F1A\u505C\u6B62\u6267\u884C\u5931\u8D25\u7684\u90A3\u53F0\u4E3B\u673A\u4E0A\u7684\u4EFB\u52A1\uFF0C\u4F46\u662F\u7EE7\u7EED\u5BF9\u5176\u4ED6 \u4E3B\u673A\u6267\u884C\u3002\u5728\u8D1F\u8F7D\u5747\u8861\u7684\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u66F4\u5E0C\u671Bansible\u5728\u6240\u6709\u4E3B\u673A\u6267\u884C\u5931\u8D25\u4E4B\u524D\u5C31\u8BA9play\u505C\u6B62\uFF0C\u5426\u5219\u5F88\u53EF\u80FD\u4F1A\u9762\u4E34\u6240\u6709\u4E3B\u673A\u90FD\u4ECE\u8D1F\u8F7D\u5747\u8861\u5668\u4E0A\u6458\u9664\u5E76\u4E14\u90FD\u6267\u884C\u5931\u8D25\u5BFC\u81F4\u670D\u52A1\u4E0D\u53EF\u7528\u7684\u573A\u666F\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528serial\u8BED\u53E5\u914D\u5408max_fail_percentage\u8BED\u53E5\u4F7F\u7528\u3002<code>max_fail_percentage</code>\u8868\u793A\u5F53\u6700\u5927\u5931\u8D25\u4E3B\u673A\u7684\u6BD4\u4F8B\u8FBE\u5230\u591A\u5C11\u65F6\uFF0Cansible\u5C31\u8BA9\u6574\u4E2Aplay\u5931\u8D25\u3002\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: upgrade pkgs on fservers behind load balancer
  hosts: myhosts
  serial: 1
  max_fail_percentage: 25
  tasks:
    ......
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5047\u5982\u8D1F\u8F7D\u5747\u8861\u540E\u9762\u67094\u53F0\u4E3B\u673A\uFF0C\u5E76\u4E14\u6709\u4E00\u53F0\u4E3B\u673A\u6267\u884C\u5931\u8D25\uFF0C\u8FD9\u65F6ansible\u8FD8\u4F1A\u7EE7\u7EED\u8FD0\u884C\uFF0C\u8981\u8BA9Play\u505C\u6B62\u8FD0\u884C\uFF0C\u5219\u5FC5\u987B\u8D85\u8FC725%\uFF0C\u6240\u4EE5\u5982\u679C\u60F3\u4E00\u53F0\u5931\u8D25\u5C31\u505C\u6B62\u6267\u884C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06max_fail_percentage\u7684\u503C\u8BBE\u4E3A24\u3002\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u53EA\u8981\u6709\u6267\u884C\u5931\u8D25\uFF0C\u5C31\u653E\u5F03\u6267\u884C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06max_fail_percentage\u7684\u503C\u8BBE\u4E3A0\u3002</p><h2 id="_5-\u53EA\u6267\u884C\u4E00\u6B21" tabindex="-1"><a class="header-anchor" href="#_5-\u53EA\u6267\u884C\u4E00\u6B21" aria-hidden="true">#</a> 5 \u53EA\u6267\u884C\u4E00\u6B21</h2><p>\u67D0\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u67D0\u4E2Atask\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u5373\u4F7F\u5B83\u88AB\u7ED1\u5B9A\u5230\u4E86\u591A\u4E2A\u4E3B\u673A\u4E0A\u3002\u4F8B\u5982\u5728\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u5668\u540E\u9762\u6709\u591A\u53F0\u5E94\u7528\u670D\u52A1\u5668\uFF0C\u6211\u4EEC\u5E0C\u671B\u6267\u884C\u4E00\u4E2A\u6570\u636E\u5E93\u8FC1\u79FB\uFF0C\u53EA\u9700\u8981\u5728\u4E00\u4E2A\u5E94\u7528\u670D\u52A1\u5668\u4E0A\u6267\u884C\u64CD\u4F5C\u5373\u53EF\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528run_once\u8BED\u53E5\u6765\u5904\u7406\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: run the database migrateions
  command: /opt/run_migrateions
  run_once: true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u4E0Elocal_action\u914D\u5408\u4F7F\u7528\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: run the task locally, only once
  command: /opt/my-custom-command
  connection: local
  run_once: true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u4E0Edelegate_to\u914D\u5408\u4F7F\u7528\uFF0C\u8BA9\u8FD9\u4E2A\u53EA\u6267\u884C\u4E00\u6B21\u7684\u4EFB\u52A1\u5728\u6307\u5B9A\u7684\u673A\u5668\u4E0A\u8FD0\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: run the task locally, only once
  command: /opt/my-custom-command
  run_once: true
  delegate_to: app.a1-61-105.dev.unp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_6-\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_6-\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> 6 \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</h2><p>\u6211\u4EEC\u5728\u547D\u4EE4\u884C\u4E0B\u6267\u884C\u67D0\u4E9B\u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u53EF\u80FD\u4F1A\u9700\u8981\u4F9D\u8D56\u73AF\u5883\u53D8\u91CF\u3002\u6BD4\u5982\u5728\u5B89\u88C5\u67D0\u4E9B\u5305\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u9700\u8981\u901A\u8FC7\u4EE3\u7406\u624D\u80FD\u5B8C\u6210\u5B8C\u88C5\u3002\u6216\u8005\u67D0\u4E2A\u811A\u672C\u53EF\u80FD\u9700\u8981\u8C03\u7528\u67D0\u4E2A\u73AF\u5883\u53D8\u91CF\u624D\u80FD\u5B8C\u6210\u8FD0\u884C\u3002</p><p>ansible \u652F\u6301\u901A\u8FC7<code>environment</code>\u5173\u952E\u5B57\u6765\u5B9A\u4E49\u4E00\u4E9B\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u5728\u5982\u4E0B\u573A\u666F\u4E2D\u53EF\u80FD\u9700\u8981\u7528\u5230\u73AF\u5883\u53D8\u91CF\uFF1A</p><ul><li>\u8FD0\u884Cshell\u7684\u65F6\u5019\uFF0C\u9700\u8981\u8BBE\u7F6Epath\u53D8\u91CF</li><li>\u9700\u8981\u52A0\u8F7D\u4E00\u4E9B\u5E93\uFF0C\u8FD9\u4E9B\u5E93\u4E0D\u5728\u7CFB\u7EDF\u7684\u6807\u51C6\u5E93\u8DEF\u5F84\u5F53\u4E2D</li></ul><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
- name: upload a remote file to aws s3
  hosts: test
  tasks:
    - name: install pip
      yum:
        name: python-pip
        state: installed
    
    - name: install the aws tools
      pip:
        name: awscli
        state: present
    
    - name upload file to s3
      shell aws s3 put-object --bucket=my-test-bucket --key={{ ansible_hostname }}/fstab --body=/etc/fstab --region=eu-west-1
      environment:
        AWS_ACCESS_KEY_ID: xxxxxx
        AWS_SECRET_ACCESS_KEY: xxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4E8B\u5B9E\u4E0A\uFF0Cenvironment\u4E5F\u53EF\u4EE5\u5B58\u50A8\u5728\u53D8\u91CF\u5F53\u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: all
  remote_user: root
  vars:
    proxy_env:
      http_proxy: http://proxy.example.com:8080
      https_proxy: http://proxy.bos.example.com:8080
  tasks:
    - apt: name=cobbler state=installed
      environment: proxy_env
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_7-\u4EA4\u4E92\u5F0F\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#_7-\u4EA4\u4E92\u5F0F\u63D0\u793A" aria-hidden="true">#</a> 7 \u4EA4\u4E92\u5F0F\u63D0\u793A</h2><p>\u5728\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0Cansible\u4EFB\u52A1\u8FD0\u884C\u7684\u8FC7\u7A0B\u4E2D\u9700\u8981\u7528\u6237\u8F93\u5165\u4E00\u4E9B\u6570\u636E\uFF0C\u8FD9\u4E9B\u6570\u636E\u8981\u4E48\u6BD4\u8F83\u79D8\u5BC6\u4E0D\u65B9\u4FBF\uFF0C\u6216\u8005\u6570\u636E\u662F\u52A8\u6001\u7684\uFF0C\u4E0D\u540C\u7684\u7528\u6237\u6709\u4E0D\u540C\u7684\u9700\u6C42\uFF0C\u6BD4\u5982\u8F93\u5165\u7528\u6237\u81EA\u5DF1\u7684\u8D26\u6237\u548C\u5BC6\u7801\u6216\u8005\u8F93\u5165\u4E0D\u540C\u7684\u7248\u672C\u53F7\u4F1A\u89E6\u53D1\u4E0D\u540C\u7684\u540E\u7EED\u64CD\u4F5C\u7B49\u3002ansible\u7684vars_prompt\u5173\u952E\u5B57\u5C31\u662F\u7528\u6765\u5904\u7406\u4E0A\u8FF0\u8FD9\u79CD\u4E0E\u7528\u6237\u4EA4\u4E92\u7684\u60C5\u51B5\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> - hosts: all
   remote_user: root
   vars_prompt:
      - name: share_user
        prompt: &quot;what is your network username?&quot;
        private: yes
 
      - name: share_pass
        prompt: &quot;what is your network password&quot;
        private: yes
        
    tasks:
      - debug:
          var: share_user
      - debug:
          var: share_pass
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>vars_prompt\u5E38\u7528\u9009\u9879\u8BF4\u660E\uFF1A</p><ul><li>private: \u9ED8\u8BA4\u4E3Ayes\uFF0C\u8868\u793A\u7528\u6237\u8F93\u5165\u7684\u503C\u5728\u547D\u4EE4\u884C\u4E0D\u53EF\u89C1</li><li>default\uFF1A\u5B9A\u4E49\u9ED8\u8BA4\u503C\uFF0C\u5F53\u7528\u6237\u672A\u8F93\u5165\u65F6\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C</li><li>confirm\uFF1A\u5982\u679C\u8BBE\u7F6E\u4E3Ayes\uFF0C\u5219\u4F1A\u8981\u6C42\u7528\u6237\u8F93\u5165\u4E24\u6B21\uFF0C\u9002\u5408\u8F93\u5165\u5BC6\u7801\u7684\u60C5\u51B5</li></ul>`,54);function l(r,p){return e}var t=n(a,[["render",l],["__file","advanced-playbook.html.vue"]]);export{t as default};
