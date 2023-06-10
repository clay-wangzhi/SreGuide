export const data = JSON.parse("{\"key\":\"v-5d30fe45\",\"path\":\"/code/shell/part5/33_options.html\",\"title\":\"33 选项\",\"lang\":\"zh-CN\",\"frontmatter\":{\"author\":\"LinuxStory\",\"category\":\"Linux\",\"tag\":[\"Bash\"],\"description\":\"33 选项 选项用来更改shell和脚本的行为. set命令用来打开脚本中的选项. 你可以在脚本中任何你想让选项生效的地方插入set -o option-name, 或者使用更简单的形式, set -option-abbrev. 这两种形式是等价的. #!/bin/bash set -o verbose # # 打印出所有执行前的命令.\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/code/shell/part5/33_options.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"33 选项\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"33 选项 选项用来更改shell和脚本的行为. set命令用来打开脚本中的选项. 你可以在脚本中任何你想让选项生效的地方插入set -o option-name, 或者使用更简单的形式, set -option-abbrev. 这两种形式是等价的. #!/bin/bash set -o verbose # # 打印出所有执行前的命令.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"LinuxStory\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Bash\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"33 选项\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"LinuxStory\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Bash 选项表\",\"slug\":\"bash-选项表\",\"link\":\"#bash-选项表\",\"children\":[]}],\"readingTime\":{\"minutes\":3.3,\"words\":989},\"filePathRelative\":\"code/shell/part5/33_options.md\",\"excerpt\":\"<h1> 33 选项</h1>\\n<p>选项用来更改shell和脚本的行为.</p>\\n<p><a href=\\\"http://tldp.org/LDP/abs/html/internal.html#SETREF\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">set</a>命令用来打开脚本中的选项. 你可以在脚本中任何你想让选项生效的地方插入<strong>set -o option-name</strong>, 或者使用更简单的形式, <strong>set -option-abbrev</strong>. 这两种形式是等价的.</p>\\n<div class=\\\"language-text line-numbers-mode\\\" data-ext=\\\"text\\\"><pre class=\\\"language-text\\\"><code>#!/bin/bash\\n\\nset -o verbose\\n# # 打印出所有执行前的命令.\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"author\":\"LinuxStory\"},\"autoDesc\":true}")

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
