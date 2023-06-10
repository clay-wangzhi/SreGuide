export const data = JSON.parse("{\"key\":\"v-9c2214f8\",\"path\":\"/db/mysql/qa.html\",\"title\":\"13 MySQL常见问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"MySQL\",\"description\":\"13 MySQL常见问题 主库异常，从库手动切换为主库方案 1.登录从服务器，确认从服务器已经完成所有同步操作： mysql&gt; stop slave io_thread mysql&gt; show processlist 直到看到状态都为：xxx has read all relay log 表示更新都执行完毕\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/db/mysql/qa.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"13 MySQL常见问题\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"13 MySQL常见问题 主库异常，从库手动切换为主库方案 1.登录从服务器，确认从服务器已经完成所有同步操作： mysql&gt; stop slave io_thread mysql&gt; show processlist 直到看到状态都为：xxx has read all relay log 表示更新都执行完毕\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"13 MySQL常见问题\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"主库异常，从库手动切换为主库方案\",\"slug\":\"主库异常-从库手动切换为主库方案\",\"link\":\"#主库异常-从库手动切换为主库方案\",\"children\":[]},{\"level\":2,\"title\":\"mysql DNS反解：skip-name-resolve\",\"slug\":\"mysql-dns反解-skip-name-resolve\",\"link\":\"#mysql-dns反解-skip-name-resolve\",\"children\":[]},{\"level\":2,\"title\":\"一键安装mysql脚本\",\"slug\":\"一键安装mysql脚本\",\"link\":\"#一键安装mysql脚本\",\"children\":[]}],\"readingTime\":{\"minutes\":3.47,\"words\":1040},\"filePathRelative\":\"db/mysql/qa.md\",\"excerpt\":\"<h1> 13 MySQL常见问题</h1>\\n<h2> 主库异常，从库手动切换为主库方案</h2>\\n<p>1.登录从服务器，确认从服务器已经完成所有同步操作：</p>\\n<div class=\\\"language-text line-numbers-mode\\\" data-ext=\\\"text\\\"><pre class=\\\"language-text\\\"><code>mysql&gt; stop slave io_thread  \\nmysql&gt; show processlist \\n直到看到状态都为：xxx has read all relay log 表示更新都执行完毕\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

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
