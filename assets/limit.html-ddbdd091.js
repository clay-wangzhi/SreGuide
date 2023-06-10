const t=JSON.parse('{"key":"v-6cf4ecb4","path":"/basic/linux/basic/limit.html","title":"/etc/security/limits.conf 详解与配置","lang":"zh-CN","frontmatter":{"category":"Linux","description":"/etc/security/limits.conf 详解与配置 一、 /etc/security/limits.conf 详解 /etc/security/limits.conf 文件实际是 Linux PAM（插入式认证模块，Pluggable Authentication Modules）中 pam_limits.so 的配置文件，而且只针对于单个会话。 该设置不会影响系统服务的资源限制。还要注意 /etc/security/limits.d/ 的这个目录，","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/basic/linux/basic/limit.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"/etc/security/limits.conf 详解与配置"}],["meta",{"property":"og:description","content":"/etc/security/limits.conf 详解与配置 一、 /etc/security/limits.conf 详解 /etc/security/limits.conf 文件实际是 Linux PAM（插入式认证模块，Pluggable Authentication Modules）中 pam_limits.so 的配置文件，而且只针对于单个会话。 该设置不会影响系统服务的资源限制。还要注意 /etc/security/limits.d/ 的这个目录，"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"/etc/security/limits.conf 详解与配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"一、 /etc/security/limits.conf 详解","slug":"一、-etc-security-limits-conf-详解","link":"#一、-etc-security-limits-conf-详解","children":[{"level":3,"title":"/etc/security/limits.conf 配置解析","slug":"etc-security-limits-conf-配置解析","link":"#etc-security-limits-conf-配置解析","children":[]},{"level":3,"title":"/etc/security/limits.d/目录","slug":"etc-security-limits-d-目录","link":"#etc-security-limits-d-目录","children":[]}]},{"level":2,"title":"二、 ulimit 如何配置","slug":"二、-ulimit-如何配置","link":"#二、-ulimit-如何配置","children":[{"level":3,"title":"配置注意事项","slug":"配置注意事项","link":"#配置注意事项","children":[]},{"level":3,"title":"基础配置","slug":"基础配置","link":"#基础配置","children":[]},{"level":3,"title":"注意覆盖点的问题。","slug":"注意覆盖点的问题。","link":"#注意覆盖点的问题。","children":[]}]},{"level":2,"title":"三、ulimit 配置后生效","slug":"三、ulimit-配置后生效","link":"#三、ulimit-配置后生效","children":[{"level":3,"title":"临时配置","slug":"临时配置","link":"#临时配置","children":[]},{"level":3,"title":"永久配置","slug":"永久配置","link":"#永久配置","children":[]},{"level":3,"title":"配置不生效的问题","slug":"配置不生效的问题","link":"#配置不生效的问题","children":[]}]},{"level":2,"title":"四、ulimit 常用命令","slug":"四、ulimit-常用命令","link":"#四、ulimit-常用命令","children":[{"level":3,"title":"查看配置","slug":"查看配置","link":"#查看配置","children":[]}]}],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":7.06,"words":2118},"filePathRelative":"basic/linux/basic/limit.md","localizedDate":"2023年4月19日","excerpt":"<h1> /etc/security/limits.conf 详解与配置</h1>\\n<h2> 一、 /etc/security/limits.conf 详解</h2>\\n<p><code>/etc/security/limits.conf</code> 文件实际是 Linux PAM（插入式认证模块，Pluggable Authentication Modules）中 <code>pam_limits.so</code> 的配置文件，而且只针对于单个会话。 该设置不会影响系统服务的资源限制。还要注意 <code>/etc/security/limits.d/</code> 的这个目录，</p>\\n","copyright":{"author":"Clay"},"autoDesc":true}');export{t as data};
