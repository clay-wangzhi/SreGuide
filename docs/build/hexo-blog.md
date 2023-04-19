---
title: hexo(next)+github博客的搭建
tag: 博客
category: 常见服务的搭建
date: 2016-06-06 14:00:00
copyright: true
---

​	本文主要讲解博客的搭建过程，next主题优化，next配置文件详解等。![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/blogchongjianfengmian.jpg)

<!--more-->

## hexo+github的搭建过程2

### 准备安装软件

**依次安装**

* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/)

### 配置和使用github

#### 注册github

访问[github.com](https://github.com/)右上角singnup

uername 最好都用小写，因为最后建立的博客地址是：[http://username.github.io](https://link.zhihu.com/?target=http%3A//username.github.io)；邮箱十分重要，GitHub 上很多通知都是通过邮箱的。

#### 创建Repository

Repository 名字应该是[http://username.github.io](https://link.zhihu.com/?target=http%3A//username.github.io)。

其他的可以选择添加一些描述也可以选择默认什么也不添加 ，点击creat repository

#### 配置SSH keys

运行git bash

```bash
$ ssh-keygen -t rsa -C "邮件地址@youremail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/your_user_directory/.ssh/id_rsa):<回车就好>
```

【提示1】这里的邮箱地址，输入注册 Github 的邮箱地址；

【提示2】「-C」的是大写的「C」

然后系统会要你输入密码：

```bash
Enter passphrase (empty for no passphrase):<设置密码>
Enter same passphrase again:<再次输入密码>
```

在回车中会提示你输入一个密码，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入。这个设置是防止别人往你的项目里提交内容。

注意：输入密码的时候没有输入痕迹的，不要以为什么也没有输入。

#### 添加SSH Key到GitHub

在本地文件夹找到id_rsa.pub文件，.ssh文件夹里记事本打开这个文件复制全部内容到github相应位。

**测试**

打开git bash，输入以下代码

```bash
$ ssh -T git@github.com
```

如何返回值中有successfully字段代表配置成功了。

#### 设置用户信息

打开git bash，完善个人信息

```bash
$ git config --global user.name "user" //输入注册时的username
$ git config --global user.email  "email" //填写注册邮箱
```

### 搭建hexo博客

利用npm命令安装hexo

```
$ npm install -g hexo
```

* **创建独立博客项目文件夹**

安装完成后，关掉前面那个 Git Bash 窗口。在本地创建一个与 Repository 中博客项目同名的文件夹（如E:\username.github.io）在文件夹上点击鼠标右键，选择 Git bash here；

【提示】在进行博客搭建工作时，每次使用命令都要在E:\username.github.io目录下。

执行下面的指令，Hexo 就会自动在 E:\username.github.io文件夹建立独立博客所需要的所有文件啦！

```bash
$ hexo init
```

* **安装依赖包**

```bash
$ npm install
```

* **确保git部署**

```bash
$ npm install hexo-deployer-git --save
```

* **本地查看**

现在已经搭建好本地的 Hexo 博客了，执行完下面的命令就可以到浏览器输入 localhost:4000 查看到啦

```bash
$ hexo g
$ hexo s
```

hexo g 每次进行相应改动都要hexo g 生成一下

hexo s 启动服务预览

执行完 hexo init 命令后会给一个默认的主题：landscape

你可以到官网找你喜欢的主题进行下载 [hexo themes](https://hexo.io/themes/) [知乎：有哪些好看的 Hexo 主题？](https://www.zhihu.com/question/24422335/answer/46357100)

找到它所在的 Github Repository （怎么找，我喜欢的那个，恰好博主放了他的github地址）

找到之后通过git命令下载

在主题的repository点击clone 复制一下那个地址

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

## next主题使用及优化

### 启用主题

与所有 Hexo 主题启用的模式一样。 当 克隆/下载 完成后，打开 站点配置文件， 找到 `theme` 字段，并将其值更改为 `next`。

启用 NexT 主题

```yaml
theme: next
```

到此，NexT 主题安装完成。下一步我们将验证主题是否正确启用。在切换主题之后、验证之前， 我们最好使用 `hexo clean` 来清除 Hexo 的缓存。

### 选择 Scheme

Scheme 是 NexT 提供的一种特性，借助于 Scheme，NexT 为你提供多种不同的外观。同时，几乎所有的配置都可以 在 Scheme 之间共用。目前 NexT 支持三种 Scheme，他们是：

- Muse - 默认 Scheme，这是 NexT 最初的版本，黑白主调，大量留白
- Mist - Muse 的紧凑版本，整洁有序的单栏外观
- Pisces - 双栏 Scheme，小家碧玉似的清新

Scheme 的切换通过更改 主题配置文件，搜索 scheme 关键字。 你会看到有三行 scheme 的配置，将你需用启用的 scheme 前面注释 `#` 去除即可。

选择 Pisces Scheme

```yaml
#scheme: Muse
#scheme: Mist
scheme: Pisces
```

### 设置 语言

编辑 站点配置文件， 将 `language` 设置成你所需要的语言。建议明确设置你所需要的语言，例如选用简体中文，配置如下：

```yaml
language: zh-CN
```

### Local Search

添加百度/谷歌/本地 自定义站点内容搜索

1. 安装 `hexo-generator-searchdb`，在站点的根目录下执行以下命令：

```bash
$ npm install hexo-generator-searchdb --save
```

2. 编辑 站点配置文件，新增以下内容到任意位置：

```yaml
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```

3. 编辑 主题配置文件，启用本地搜索功能：

```yaml
# Local search
local_search:
  enable: true
```



## 文章模块的美化

### 文章内代码美化

- 行内代码
  在主题目录下，将`source/css/_custom/custom.styl`文件修改如下：

```CSS
//行内代码样式
code {
    color: #ff7600;
    background: #fbf7f8;
    border: 1px solid #d6d6d6;
    padding:1px 4px;
    word-break: break-all;
    border-radius:4px;
}
```

- 区块代码
  在主题目录下，修改`config.yml`文件：

```yaml
#   样式可选： normal | night | night eighties | night blue | night bright
highlight_theme: night
```

### 文章结束语

* **添加模块文件 **

在主题目录下`layout/_macro`中新建 `passage-end-tag.swig`文件,并添加以下内容：

```CSS
<div>
    {% if not is_index %}
        <div style="text-align:center;color: #ccc;font-size:14px;">
              -------------本文结束<i class="fa fa-paw"></i>感谢您的阅读-------------
        </div>
    {% endif %}
</div>
```

* **导入模板文件**

在`layout/_macro/post.swig`文件中，找到：

```CSS
{#####################}
{### END POST BODY ###}
{#####################}
```

在上面代码之前添加：

```CSS
<div>
      {% if not is_index %}
          {% include 'passage-end-tag.swig' %}
      {% endif %}
</div>

```

- **配置**
  在主题配置文件中添加：

```yaml
# 文章末尾添加“本文结束”标记
passage_end_tag:
  enabled: true
```

### 增强文章底部版权信息

- 增加文章md文件的头部信息中添加`copyright: true`时，添加版权声明
- 增加文章标题、发布时间、更新时间等信息

在目录 `next/layout/_macro/下`添加 `my-copyright.swig`：

```CSS
{% if page.copyright %}
<div class="my_post_copyright">
  <script src="//cdn.bootcss.com/clipboard.js/1.5.10/clipboard.min.js"></script>
  
  <!-- JS库 sweetalert 可修改路径 -->
  <script src="https://cdn.bootcss.com/jquery/2.0.0/jquery.min.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <p><span>本文标题:</span><a href="{{ url_for(page.path) }}">{{ page.title }}</a></p>
  <p><span>文章作者:</span><a href="/" title="访问 {{ theme.author }} 的个人博客">{{ theme.author }}</a></p>
  <p><span>发布时间:</span>{{ page.date.format("YYYY年MM月DD日 - HH:MM") }}</p>
  <p><span>最后更新:</span>{{ page.updated.format("YYYY年MM月DD日 - HH:MM") }}</p>
  <p><span>原始链接:</span><a href="{{ url_for(page.path) }}" title="{{ page.title }}">{{ page.permalink }}</a>
    <span class="copy-path"  title="点击复制文章链接"><i class="fa fa-clipboard" data-clipboard-text="{{ page.permalink }}"  aria-label="复制成功！"></i></span>
  </p>
  <p><span>许可协议:</span><i class="fa fa-creative-commons"></i> <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" title="Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)">署名-非商业性使用-禁止演绎 4.0 国际</a> 转载请保留原文链接及作者。</p>  
</div>
<script> 
    var clipboard = new Clipboard('.fa-clipboard');
    $(".fa-clipboard").click(function(){
      clipboard.on('success', function(){
        swal({   
          title: "",   
          text: '复制成功',
          icon: "success", 
          showConfirmButton: true
          });
	});
    });  
</script>
{% endif %}
```

在目录`next/source/css/_common/components/post/`下添加`my-post-copyright.styl`：

```CSS
.my_post_copyright {
  width: 85%;
  max-width: 45em;
  margin: 2.8em auto 0;
  padding: 0.5em 1.0em;
  border: 1px solid #d3d3d3;
  font-size: 0.93rem;
  line-height: 1.6em;
  word-break: break-all;
  background: rgba(255,255,255,0.4);
}
.my_post_copyright p{margin:0;}
.my_post_copyright span {
  display: inline-block;
  width: 5.2em;
  color: #b5b5b5;
  font-weight: bold;
}
.my_post_copyright .raw {
  margin-left: 1em;
  width: 5em;
}
.my_post_copyright a {
  color: #808080;
  border-bottom:0;
}
.my_post_copyright a:hover {
  color: #a3d2a3;
  text-decoration: underline;
}
.my_post_copyright:hover .fa-clipboard {
  color: #000;
}
.my_post_copyright .post-url:hover {
  font-weight: normal;
}
.my_post_copyright .copy-path {
  margin-left: 1em;
  width: 1em;
  +mobile(){display:none;}
}
.my_post_copyright .copy-path:hover {
  color: #808080;
  cursor: pointer;
}
```

修改`next/layout/_macro/post.swig`，在代码

```CSS
{#####################}
{### END POST BODY ###}
{#####################}
```

之前添加增加如下代码：

```CSS
<div>
      {% if not is_index %}
        {% include 'my-copyright.swig' %}
      {% endif %}
</div>
```

修改`next/source/css/_common/components/post/post.styl`文件，在最后一行增加代码：

```CSS
@import "my-post-copyright"
```

保存重新生成即可。

## 遇到的问题

`LaTeX-incompatible input and strict mode is set to 'warn': Unicode text character`

产生的原因：而在 Markdown 语法中，**两个 \$ 符号是数学符号和公式**的使用。要想使用单个 \$，要加个转义字符 `\`。

## 参考

> [技术小白搭建hexo+github博客](https://zhuanlan.zhihu.com/p/32957389)
>
> [next最新版主题下载使用](https://github.com/theme-next/hexo-theme-next)
>
> [next主题官方文档](https://theme-next.iissnan.com)
>
> [next主题个性化教程](http://shenzekun.cn/hexo%E7%9A%84next%E4%B8%BB%E9%A2%98%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B.html)
>
> [next主题配置文件详解](https://iassas.com/archives/d6a90b9.html)
>
> [NexT v6.0+ 背景动画Canvas_nest设置无效的解决方案](https://blog.csdn.net/weixin_39345384/article/details/80544660)
>
> [给Hexo搭建的博客增加百度谷歌搜索引擎验证](http://zhuxin.tech/2017/10/20/%E7%BB%99%20Hexo%20%E6%90%AD%E5%BB%BA%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%A2%9E%E5%8A%A0%E7%99%BE%E5%BA%A6%E8%B0%B7%E6%AD%8C%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E9%AA%8C%E8%AF%81/)
>
> [添加文章字数和读取文章的时间](https://github.com/theme-next/hexo-symbols-count-time)
>
> [hexo + next主题高级配置](https://www.jianshu.com/p/344cf061598d)