import{_ as e,e as a}from"./app.ac0f71d5.js";const t={},o=a(`<h1 id="_6-\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_6-\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 6 \u5E38\u89C1\u95EE\u9898</h1><h1 id="zabbix\u5BA2\u6237\u7AEF\u65E5\u5FD7\u51FA\u73B0-not-all-processes-could-be-identified" tabindex="-1"><a class="header-anchor" href="#zabbix\u5BA2\u6237\u7AEF\u65E5\u5FD7\u51FA\u73B0-not-all-processes-could-be-identified" aria-hidden="true">#</a> Zabbix\u5BA2\u6237\u7AEF\u65E5\u5FD7\u51FA\u73B0(Not all processes could be identified\uFF09</h1><p>\u573A\u666F\uFF1A\u56E0\u4E3A\u4F7F\u7528\u4E86netstat -p\u53C2\u6570\u3002</p><p>\u6743\u9650\u95EE\u9898\uFF0Czabbix_agentd\u662Fzabbix\u7528\u6237\u542F\u52A8\u7684\uFF0C\u9ED8\u8BA4\u4E0D\u80FD\u6267\u884Cnetstat -p\u7B49\u547D\u4EE4\uFF0C\u5BFC\u81F4\u4ECE\u670D\u52A1\u5668\u53D6\u5230\u7684\u81EA\u52A8\u53D1\u73B0\u811A\u672C\u4E3A\u7A7A</p><p>(Not all processes could be identified, non-owned process info will not be shown, you would have to be root to see it all.) \u89E3\u51B3\u65B9\u6CD5 \uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +s /bin/netstat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>chmod +s \u662F\u4EC0\u4E48\u610F\u601D</p><blockquote><p>\u4E3A\u4E86\u65B9\u4FBF\u666E\u901A\u7528\u6237\u6267\u884C\u4E00\u4E9B\u7279\u6743\u547D\u4EE4\uFF0CSUID/SGID\u7A0B\u5E8F\u5141\u8BB8\u666E\u901A\u7528\u6237\u4EE5root\u8EAB\u4EFD\u6682\u65F6\u6267\u884C\u8BE5\u7A0B\u5E8F\uFF0C\u5E76\u5728\u6267\u884C\u7ED3\u675F\u540E\u518D\u6062\u590D\u8EAB\u4EFD\u3002</p></blockquote><h2 id="zabbix-server-log\u5927\u91CF\u63D0\u793Acannot-sen-list-of-active-checks-to-ip-host-hostname-not-found" tabindex="-1"><a class="header-anchor" href="#zabbix-server-log\u5927\u91CF\u63D0\u793Acannot-sen-list-of-active-checks-to-ip-host-hostname-not-found" aria-hidden="true">#</a> zabbix_server.log\u5927\u91CF\u63D0\u793Acannot sen list of active checks to &quot;IP&quot;:host [Hostname] not found</h2><p>zabbix server \u65E5\u5FD7\u5927\u91CF\u63D0\u793A\u4E0A\u56FE\u4FE1\u606F \u539F\u56E0\u662F zabbix_agent.conf\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u7684HostName\u4E0Ezabbix\u7684web\u754C\u9762\u914D\u7F6E\u7684\u4E0D\u540C\u5BFC\u81F4\u7684</p><p>zabbix_agent.conf\u91CC\u5C3D\u91CF\u4E0D\u4F7F\u7528HostnameItem=system.hostname\u6B64\u9879\u53BB\u81EA\u52A8\u83B7\u53D6\u4E3B\u673A\u540D</p><p>\u5C3D\u91CF\u4F7F\u7528HostName\u6307\u5B9A\u4E00\u4E2A\u4E3B\u673A\u540D\uFF0C\u7136\u540Eweb\u754C\u9762\u914D\u7F6E\u76F8\u540C\u5373\u53EF</p><p>\u6700\u540E\u91CD\u542F\u76F8\u5E94\u7684agent\u5373\u53EF</p>`,13);function s(n,i){return o}var r=e(t,[["render",s],["__file","qa.html.vue"]]);export{r as default};
