export const data = JSON.parse("{\"key\":\"v-ccb7dd70\",\"path\":\"/code/shell/part1/02_1_invoking_the_script.html\",\"title\":\"2.1 调用一个脚本\",\"lang\":\"zh-CN\",\"frontmatter\":{\"author\":\"LinuxStory\",\"category\":\"Linux\",\"tag\":[\"Bash\"],\"description\":\"2.1 调用一个脚本 写完一个脚本以后，你可以通过sh scriptname或bash scriptname来调用它（不推荐使用sh &lt;scriptname调用脚本，因为这会禁用脚本从标准输入（stdin）读入数据）。更方便的方式是使用chmod命令使脚本可以被直接执行。 执行命令： chmod 555 scriptname（给予所有用户读取/执行的权限） 或 chmod +rx scriptname（给予所有用户读取/执行的权限）\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/code/shell/part1/02_1_invoking_the_script.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"2.1 调用一个脚本\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"2.1 调用一个脚本 写完一个脚本以后，你可以通过sh scriptname或bash scriptname来调用它（不推荐使用sh &lt;scriptname调用脚本，因为这会禁用脚本从标准输入（stdin）读入数据）。更方便的方式是使用chmod命令使脚本可以被直接执行。 执行命令： chmod 555 scriptname（给予所有用户读取/执行的权限） 或 chmod +rx scriptname（给予所有用户读取/执行的权限）\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"LinuxStory\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Bash\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"2.1 调用一个脚本\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"LinuxStory\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.87,\"words\":262},\"filePathRelative\":\"code/shell/part1/02_1_invoking_the_script.md\",\"excerpt\":\"<h1> 2.1 调用一个脚本</h1>\\n<p>写完一个脚本以后，你可以通过<code>sh scriptname</code>或<code>bash scriptname</code>来调用它（不推荐使用<code>sh &lt;scriptname</code>调用脚本，因为这会禁用脚本从标准输入（stdin）读入数据）。更方便的方式是使用<code>chmod</code>命令使脚本可以被直接执行。</p>\\n<p>执行命令：</p>\\n<p><code>chmod 555 scriptname</code>（给予所有用户读取/执行的权限）</p>\\n<p>或</p>\\n<p><code>chmod +rx scriptname</code>（给予所有用户读取/执行的权限）</p>\",\"copyright\":{\"author\":\"LinuxStory\"},\"autoDesc\":true}")

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
