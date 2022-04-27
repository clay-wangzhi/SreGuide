<template><h1 id="高级-bash-脚本编程指南" tabindex="-1"><a class="header-anchor" href="#高级-bash-脚本编程指南" aria-hidden="true">#</a> 高级 Bash 脚本编程指南</h1>
<blockquote>
<p>本教程内容转载自：https://github.com/LinuxStory/Advanced-Bash-Scripting-Guide-in-Chinese</p>
<p>感谢开源翻译！！！</p>
</blockquote>
<p><a href="https://gitter.im/Advanced-Bash-Scripting-Guide-in-Chinese/" target="_blank" rel="noopener noreferrer"><img src="https://badges.gitter.im/gitterHQ/gitter.png" alt="Gitter chat" loading="lazy"><ExternalLinkIcon/></a></p>
<p>《高级Bash脚本编程指南》Revision 10中文版</p>
<h2 id="知识体系" tabindex="-1"><a class="header-anchor" href="#知识体系" aria-hidden="true">#</a> 知识体系</h2>
<p><img src="shell-com-know.png" alt="" loading="lazy"></p>
<p><a href="https://clay-wangzhi.com/advanced-bash.png" target="_blank" rel="noopener noreferrer">详细的核心知识点 复习思维导图<ExternalLinkIcon/></a></p>
<h2 id="原著及早期翻译作品" tabindex="-1"><a class="header-anchor" href="#原著及早期翻译作品" aria-hidden="true">#</a> 原著及早期翻译作品</h2>
<h3 id="原著" tabindex="-1"><a class="header-anchor" href="#原著" aria-hidden="true">#</a> 原著</h3>
<ul>
<li>原著链接：http://tldp.org/LDP/abs/html/</li>
<li>原作：Mendel Cooper</li>
<li>原著版本：Revision 10, 10 Mar 2014</li>
</ul>
<h3 id="译著" tabindex="-1"><a class="header-anchor" href="#译著" aria-hidden="true">#</a> 译著</h3>
<ul>
<li>早期译著连接：http://www.linuxsir.org/bbs/thread256887.html</li>
<li>译者：杨春敏 黄毅</li>
<li>译著版本：Revision 3.7, 23 Oct 2005</li>
<li>最新 Revision 10 由 Linux Story 社区的 imcmy 同学发起并组织翻译</li>
<li>Linux Story 通告地址 ：http://www.linuxstory.org/asdvanced-bash-scripting-guide-in-chinese/</li>
</ul>
<h2 id="翻译作品" tabindex="-1"><a class="header-anchor" href="#翻译作品" aria-hidden="true">#</a> 翻译作品</h2>
<p>翻译作品放在<a href="https://linuxstory.gitbook.io/advanced-bash-scripting-guide-in-chinese/" target="_blank" rel="noopener noreferrer">GitBook<ExternalLinkIcon/></a>上，欢迎指正！</p>
<h2 id="翻译进度" tabindex="-1"><a class="header-anchor" href="#翻译进度" aria-hidden="true">#</a> 翻译进度</h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-0"><label class="task-list-item-label" for="task-item-0"> 第一部分 初见Shell[@imcmy][@zihengcat]</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-1"><label class="task-list-item-label" for="task-item-1"> 1\. 为什么使用shell编程[@imcmy][@zihengcat]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-2"><label class="task-list-item-label" for="task-item-2"> 2\. Sha-Bang（#!）一起出发[@imcmy][@zihengcat]</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-3"><label class="task-list-item-label" for="task-item-3"> 第二部分 Shell基础[@imcmy][@zihengcat]</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-4"><label class="task-list-item-label" for="task-item-4"> 3\. 特殊字符[@imcmy][@zihengcat]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-5"><label class="task-list-item-label" for="task-item-5"> 4\. 变量与参数[@imcmy][@zihengcat]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-6"><label class="task-list-item-label" for="task-item-6"> 5\. 引用[@mr253727942][@zihengcat]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-7"><label class="task-list-item-label" for="task-item-7"> 6\. 退出与退出状态[@samita2030][@zihengcat]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-8"><label class="task-list-item-label" for="task-item-8"> 7\. 测试[@imcmy][@zihengcat]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-9"><label class="task-list-item-label" for="task-item-9"> 8\. 运算符相关话题[@samita2030][@zihengcat]</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-10"><label class="task-list-item-label" for="task-item-10"> 第三部分 Shell进阶[@imcmy]</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-11"><label class="task-list-item-label" for="task-item-11"> 9\. 换个角度看变量[@imcmy]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-12"><label class="task-list-item-label" for="task-item-12"> 10\. 变量处理[@imcmy]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-13"><label class="task-list-item-label" for="task-item-13"> 11\. 循环与分支[@imcmy]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-14"><label class="task-list-item-label" for="task-item-14"> 12\. 命令替换[@imcmy]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-15"><label class="task-list-item-label" for="task-item-15"> 13\. 算术扩展[@imcmy]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-16"><label class="task-list-item-label" for="task-item-16"> 14\. 休息时间[@imcmy]</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-17"><label class="task-list-item-label" for="task-item-17"> 第四部分. 命令[@imcmy]</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-18"><label class="task-list-item-label" for="task-item-18"> 15\. 内建命令[@imcmy]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-19"><label class="task-list-item-label" for="task-item-19"> 16\. 外部过滤器，程序与命令[@hsupu]</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-20"><label class="task-list-item-label" for="task-item-20"> 16.1 基本命令[@hsupu]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-21"><label class="task-list-item-label" for="task-item-21"> 16.2 复杂命令</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-22"><label class="task-list-item-label" for="task-item-22"> 16.3 时间与日期命令</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-23"><label class="task-list-item-label" for="task-item-23"> 16.4 文本处理命令</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-24"><label class="task-list-item-label" for="task-item-24"> 16.5 文件与归档命令</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-25"><label class="task-list-item-label" for="task-item-25"> 16.6 通信命令</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-26"><label class="task-list-item-label" for="task-item-26"> 16.7 终端控制命令</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-27"><label class="task-list-item-label" for="task-item-27"> 16.8 数学命令</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-28"><label class="task-list-item-label" for="task-item-28"> 16.9 杂项命令</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-29"><label class="task-list-item-label" for="task-item-29"> 17\. 系统与高级命令</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-30"><label class="task-list-item-label" for="task-item-30"> 第五章. 高级话题</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-31"><label class="task-list-item-label" for="task-item-31"> 18\. 正则表达式[@Zjie]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-32"><label class="task-list-item-label" for="task-item-32"> 19\. 嵌入文档[@mingmings]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-33"><label class="task-list-item-label" for="task-item-33"> 20\. I/O 重定向[@mingmings]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-34"><label class="task-list-item-label" for="task-item-34"> 21\. Subshells[@ysun90]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-35"><label class="task-list-item-label" for="task-item-35"> 22\. 限制模式的Shell[@panblack]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-36"><label class="task-list-item-label" for="task-item-36"> 23\. 进程替换[@panblack]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-37"><label class="task-list-item-label" for="task-item-37"> 24\. 函数[@zy416548283]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-38"><label class="task-list-item-label" for="task-item-38"> 25\. 别名[@mingmings]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-39"><label class="task-list-item-label" for="task-item-39"> 26\. 列表结构[@panblack]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-40"><label class="task-list-item-label" for="task-item-40"> 27\. 数组[@zy416548283]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-41"><label class="task-list-item-label" for="task-item-41"> 28\. 间接引用[@plutonji]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-42"> 29. <code>/dev</code> 和 <code>/proc</code><label class="task-list-item-label" for="task-item-42"> 29\. `/dev` 和 `/proc`[@plutonji]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-43"><label class="task-list-item-label" for="task-item-43"> 30\. 网络编程[@Zjie]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-44"><label class="task-list-item-label" for="task-item-44"> 31\. Of Zeros and Nulls</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-45"><label class="task-list-item-label" for="task-item-45"> 32\. 调试[@wuqichao]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-46"><label class="task-list-item-label" for="task-item-46"> 33\. 选项[@zy416548283]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-47"><label class="task-list-item-label" for="task-item-47"> 34\. 陷阱[@liuburn]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-48"><label class="task-list-item-label" for="task-item-48"> 35\. Scripting With Style</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-49"><label class="task-list-item-label" for="task-item-49"> 36\. 杂项[@richard-ma]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-50"><label class="task-list-item-label" for="task-item-50"> 37\. Bash, versions 2, 3, and 4</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-51"><label class="task-list-item-label" for="task-item-51"> 38\. 后记[@zy416548283]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-52"><label class="task-list-item-label" for="task-item-52"> Bibliography</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-53"><label class="task-list-item-label" for="task-item-53"> 附录</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-54"><label class="task-list-item-label" for="task-item-54"> A\. Contributed Scripts</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-55"><label class="task-list-item-label" for="task-item-55"> B\. Reference Cards</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-56"><label class="task-list-item-label" for="task-item-56"> C\. A Sed and Awk Micro-Primer[@wuqichao]</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-57"><label class="task-list-item-label" for="task-item-57"> C.1 Sed[@wuqichao]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-58"><label class="task-list-item-label" for="task-item-58"> C.2 Awk[@wuqichao]</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-59"><label class="task-list-item-label" for="task-item-59"> D\. Parsing and Managing Pathnames</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-60"><label class="task-list-item-label" for="task-item-60"> E\. 带有特殊意义的退出代码[@ShadowRZ]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-61"><label class="task-list-item-label" for="task-item-61"> F\. I/O 与 I/O 重定向详细介绍[@ShadowRZ]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-62"><label class="task-list-item-label" for="task-item-62"> G\. Command-Line Options</label>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-63"><label class="task-list-item-label" for="task-item-63"> G.1 Standard Command-Line Options</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-64"><label class="task-list-item-label" for="task-item-64"> G.2 Bash Command-Line Options</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-65"><label class="task-list-item-label" for="task-item-65"> H\. 重要文件[@ShadowRZ]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-66"><label class="task-list-item-label" for="task-item-66"> I\. Important System Directories</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-67"><label class="task-list-item-label" for="task-item-67"> J\. An Introduction to Programmable Completion</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-68"><label class="task-list-item-label" for="task-item-68"> K\. Localization</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-69"><label class="task-list-item-label" for="task-item-69"> L\. History Commands</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-70"><label class="task-list-item-label" for="task-item-70"> M\. 示例 ~/.bashrc 与 ~/.bash_profile[@ShadowRZ]</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-71"><label class="task-list-item-label" for="task-item-71"> N\. Converting DOS Batch Files to Shell Scripts</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-72"><label class="task-list-item-label" for="task-item-72"> O\. Exercises</label>
<ul>
<li>O.1 Analyzing Scripts</li>
<li>O.2 Writing Scripts</li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-73"><label class="task-list-item-label" for="task-item-73"> P\. Revision History</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-74"><label class="task-list-item-label" for="task-item-74"> Q\. Download and Mirror Sites</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-75"><label class="task-list-item-label" for="task-item-75"> R\. To Do List</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-76"><label class="task-list-item-label" for="task-item-76"> S\. Copyright</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" id="task-item-77"><label class="task-list-item-label" for="task-item-77"> T\. ASCII 表[@ShadowRZ]</label></li>
</ul>
</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-78"><label class="task-list-item-label" for="task-item-78"> Index</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-79"><label class="task-list-item-label" for="task-item-79"> List of Tables</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox"  disabled="disabled" id="task-item-80"><label class="task-list-item-label" for="task-item-80"> List of Examples</label></li>
</ul>
<h2 id="翻译校审流程" tabindex="-1"><a class="header-anchor" href="#翻译校审流程" aria-hidden="true">#</a> 翻译校审流程</h2>
<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<ol>
<li>首先fork项目</li>
<li>把fork过去的项目clone到本地</li>
<li>命令行下运行 <code>git checkout -b dev</code> 创建一个新分支</li>
<li>运行 <code>git remote add upstream https://github.com/LinuxStory/Advanced-Bash-Scripting-Guide-in-Chinese.git</code> 添加远端库</li>
<li>运行 <code>git remote update</code>更新</li>
<li>运行 <code>git fetch upstream master</code> 拉取更新到本地</li>
<li>运行 <code>git rebase upstream/master</code> 将更新合并到你的分支</li>
</ol>
<p>初始化只需要做一遍，之后请在dev分支进行修改。</p>
<p>如果修改过程中项目有更新，请重复5、6、7步。</p>
<h3 id="翻译校审流程-1" tabindex="-1"><a class="header-anchor" href="#翻译校审流程-1" aria-hidden="true">#</a> 翻译校审流程</h3>
<ol>
<li>
<p>保证在dev分支中</p>
</li>
<li>
<p>打开README.md，在翻译进度后加上你自己的github名</p>
<blockquote>
<p>1. Shell Programming! [@翻译人][@校审人]</p>
</blockquote>
</li>
<li>
<p>本地提交修改，写明提交信息</p>
</li>
<li>
<p>push到你fork的项目中，然后登录GitHub</p>
</li>
<li>
<p>在你fork的项目的首页可以看到一个 <code>pull request</code> 按钮，点击它，填写说明信息，然后提交即可</p>
<blockquote>
<p>为了不重复工作，请等待我们确认了你的pull request(即你的名字出现在项目中时)，再进行翻译校审工作</p>
</blockquote>
</li>
<li>
<p>进行翻译校审，重复3-5步提交翻译校审的作品</p>
</li>
</ol>
<blockquote>
<p>新手可以参阅针对github小白的<a href="https://github.com/LinuxStory/Advanced-Bash-Scripting-Guide-in-Chinese/wiki/%E7%BF%BB%E8%AF%91%E6%B5%81%E7%A8%8B%E8%AF%A6%E8%A7%A3" target="_blank" rel="noopener noreferrer">《翻译流程详解》<ExternalLinkIcon/></a>,妹子写的呦～</p>
</blockquote>
<h2 id="翻译校审建议" tabindex="-1"><a class="header-anchor" href="#翻译校审建议" aria-hidden="true">#</a> 翻译校审建议</h2>
<ol>
<li>使用markdown进行翻译校审，文件名必须使用英文</li>
<li>翻译校审后的文档请放到source文件夹下的对应章节中，然后pull request即可</li>
<li>有任何问题随时欢迎发issue</li>
<li>术语尽量保证和已翻译的一致，也可以查询<a href="https://www.microsoft.com/zh-cn/language/search" target="_blank" rel="noopener noreferrer">微软术语搜索<ExternalLinkIcon/></a>或<a href="https://github.com/LCTT/TranslateProject/blob/master/Dict.md" target="_blank" rel="noopener noreferrer">Linux中国术语词典<ExternalLinkIcon/></a></li>
<li>你可以将你认为是术语的词汇加入术语表<code>TERM.md</code>中</li>
</ol>
<h2 id="样式规范" tabindex="-1"><a class="header-anchor" href="#样式规范" aria-hidden="true">#</a> 样式规范</h2>
<p>根据原文中不同的注释类型，可以使用 <code>&gt;</code> 或下列html代码进行注释。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{% hint style="info" %}
Hello world
{% endhint %}
​```

所有的脚注footnote都需使用html代码进行注释。

## 关于版权

根据原著作者的要求，翻译成果属于公有领域(CC0)，翻译参与人员及原著作者Mendel Cooper享有署名权

翻译参与人员（按名称排序）：

- @chuchingkai
- @hsupu
- @imcmy
- @liuburn
- @mingmings
- @mr253727942
- @panblack
- @plutonji
- @richard-ma
- @samita2030
- @ShadowRZ
- @wuqichao
- @ysun90
- @zhaozq
- @zihengcat
- @Zjie
- @zy416548283
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></template>
