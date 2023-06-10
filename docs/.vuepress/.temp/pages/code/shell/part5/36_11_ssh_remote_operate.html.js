export const data = JSON.parse("{\"key\":\"v-719f9d3f\",\"path\":\"/code/shell/part5/36_11_ssh_remote_operate.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"author\":\"LinuxStory\",\"category\":\"Linux\",\"tag\":[\"Bash\"],\"description\":\"sh远程脚本 expect非交互式 #!/usr/bin/expect set timeout 30 spawn ssh -l username 192.168.1.1 expect \\\"password:\\\" send \\\"ispass\\\\r\\\" interact\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/code/shell/part5/36_11_ssh_remote_operate.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"sh远程脚本 expect非交互式 #!/usr/bin/expect set timeout 30 spawn ssh -l username 192.168.1.1 expect \\\"password:\\\" send \\\"ispass\\\\r\\\" interact\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"LinuxStory\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Bash\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"LinuxStory\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":2.02,\"words\":607},\"filePathRelative\":\"code/shell/part5/36_11_ssh_remote_operate.md\",\"excerpt\":\"<p>sh远程脚本\\nexpect非交互式</p>\\n<div class=\\\"language-text line-numbers-mode\\\" data-ext=\\\"text\\\"><pre class=\\\"language-text\\\"><code>#!/usr/bin/expect  \\nset timeout 30  \\nspawn ssh -l username 192.168.1.1  \\nexpect \\\"password:\\\"  \\nsend \\\"ispass\\\\r\\\"  \\ninteract  \\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"author\":\"LinuxStory\"},\"autoDesc\":true}")

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
