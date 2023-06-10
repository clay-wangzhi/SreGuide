export const data = JSON.parse("{\"key\":\"v-baa733fa\",\"path\":\"/monitor/zabbix/zabbix-activemq.html\",\"title\":\"8 activemq监控\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"监控\",\"tag\":[\"Zabbix\"],\"description\":\"8 activemq监控 zabbix旧版本可以用，新版本建议用官方模板 关闭被监控端的防火墙 activemq 防火墙的添加还是有问题，先把防火墙给关了，它好像是后续会再产生一个随机端口，进行数据的传输 zabbix_proxy安装java_gateway， 因为是基于JMX进行监控的 修改配置文件 配置./apache-activemq-5.11.1/conf/activemq.xml\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/monitor/zabbix/zabbix-activemq.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"8 activemq监控\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"8 activemq监控 zabbix旧版本可以用，新版本建议用官方模板 关闭被监控端的防火墙 activemq 防火墙的添加还是有问题，先把防火墙给关了，它好像是后续会再产生一个随机端口，进行数据的传输 zabbix_proxy安装java_gateway， 因为是基于JMX进行监控的 修改配置文件 配置./apache-activemq-5.11.1/conf/activemq.xml\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Zabbix\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"8 activemq监控\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"关闭被监控端的防火墙\",\"slug\":\"关闭被监控端的防火墙\",\"link\":\"#关闭被监控端的防火墙\",\"children\":[]},{\"level\":2,\"title\":\"zabbix_proxy安装java_gateway，\",\"slug\":\"zabbix-proxy安装java-gateway\",\"link\":\"#zabbix-proxy安装java-gateway\",\"children\":[]},{\"level\":2,\"title\":\"修改配置文件\",\"slug\":\"修改配置文件\",\"link\":\"#修改配置文件\",\"children\":[]},{\"level\":2,\"title\":\"导入模板\",\"slug\":\"导入模板\",\"link\":\"#导入模板\",\"children\":[]}],\"readingTime\":{\"minutes\":0.81,\"words\":243},\"filePathRelative\":\"monitor/zabbix/zabbix-activemq.md\",\"excerpt\":\"<h1> 8 activemq监控</h1>\\n<blockquote>\\n<p>zabbix旧版本可以用，新版本建议用官方模板</p>\\n</blockquote>\\n<h2> 关闭被监控端的防火墙</h2>\\n<p>activemq  防火墙的添加还是有问题，先把防火墙给关了，它好像是后续会再产生一个随机端口，进行数据的传输</p>\\n<h2> zabbix_proxy安装java_gateway，</h2>\\n<p>因为是基于JMX进行监控的</p>\\n<h2> 修改配置文件</h2>\\n<p>配置<code>./apache-activemq-5.11.1/conf/activemq.xml</code></p>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

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
