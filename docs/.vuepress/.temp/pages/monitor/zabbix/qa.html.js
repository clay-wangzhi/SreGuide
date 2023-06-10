export const data = JSON.parse("{\"key\":\"v-f875cf44\",\"path\":\"/monitor/zabbix/qa.html\",\"title\":\"6 常见问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"监控\",\"tag\":[\"Zabbix\"],\"description\":\"6 常见问题 Zabbix客户端日志出现(Not all processes could be identified） 场景：因为使用了netstat -p参数。 权限问题，zabbix_agentd是zabbix用户启动的，默认不能执行netstat -p等命令，导致从服务器取到的自动发现脚本为空 (Not all processes could be identified, non-owned process info will not be shown, you would have to be root to see it all.) 解决方法 ：\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/monitor/zabbix/qa.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"6 常见问题\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"6 常见问题 Zabbix客户端日志出现(Not all processes could be identified） 场景：因为使用了netstat -p参数。 权限问题，zabbix_agentd是zabbix用户启动的，默认不能执行netstat -p等命令，导致从服务器取到的自动发现脚本为空 (Not all processes could be identified, non-owned process info will not be shown, you would have to be root to see it all.) 解决方法 ：\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Zabbix\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"6 常见问题\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"zabbix_server.log大量提示cannot sen list of active checks to \\\"IP\\\":host [Hostname] not found\",\"slug\":\"zabbix-server-log大量提示cannot-sen-list-of-active-checks-to-ip-host-hostname-not-found\",\"link\":\"#zabbix-server-log大量提示cannot-sen-list-of-active-checks-to-ip-host-hostname-not-found\",\"children\":[]}],\"readingTime\":{\"minutes\":0.9,\"words\":270},\"filePathRelative\":\"monitor/zabbix/qa.md\",\"excerpt\":\"<h1> 6 常见问题</h1>\\n<h1> Zabbix客户端日志出现(Not all processes could be identified）</h1>\\n<p>场景：因为使用了netstat -p参数。</p>\\n<p>权限问题，zabbix_agentd是zabbix用户启动的，默认不能执行netstat -p等命令，导致从服务器取到的自动发现脚本为空</p>\\n<p>(Not all processes could be identified, non-owned process info\\nwill not be shown, you would have to be root to see it all.)\\n解决方法 ：</p>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
