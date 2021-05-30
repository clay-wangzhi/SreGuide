---
tag: 写作排版
---

# IT 博客写作工作

## 写作前

### trello

官网地址:https://trello.com/

这是一款任务管理工具，类似于敏捷开发中看板，我们可以快速管理任务。

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1419561-20200403080637678-850065086.jpg)

日常工作我只要想到一个 **idea**，就会第一时间先记录到 **idea** 列表中。这里千万不要高估自己的记忆力，如果想到了，感觉记录下来。以前上午灵光一现想到一个 **idea**，准备晚上写一下，然后晚上就想不起来。。。

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1419561-20200403080637826-836232793.jpg)

前期准备时，可以将收集到的资料，素材，全部放到具体卡片中。

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1419561-20200403080637970-706620287.jpg)

当我们开始写作后，拖动到下一个列表，完成之后，再拖到下一个列表，这样写作任务非常清晰。

**trello** 十分强大，这里只是用了小功能，感兴趣的同学可以深入研究一下。

## 写作中

### typora+PicGo+码云

**markdown 编辑器**：typora，下载地址：https://typora.io/

**图床工具**：PicGo，下载地址：https://github.com/Molunerfinn/PicGo/releases

就是自动把本地图片转换成链接的一款工具，网络上有很多图床工具，就目前使用种类而言，**PicGo** 算得上一款比较优秀的图床工具。

> 这边使用`PicGo+码云`来实现markdown图床，也可以使用Github，不过考虑网络问题选择码云。

* 安装成功界面

![image-20200730102149683](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200730102149683.png)



- 找到底下插件设置，使用码云需要另外安装插件，搜索gitee安装插件，有两个插件都可以用

> 注意：安装`gitee-uploader 1.1.2`插件，必须要先安装`node.js`才能安装插件，我这里安装的是`gitee 2.0.2`

![image-20200730102308996](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200730102308996.png)

* 建立gitee码云图床库，就是在码云新建一个仓库，步骤：

![image-20200323195546145](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200323195546145.png)

- 接下来配置PicGO，安装Gitee插件成功，就会出现Gitee图床栏目：

```
url：https://getee.com
owner：写你的码云用户名
repo：仓库名称
token：填入码云的私人令牌
path：路径，一般写上img
message：可以不用写
```

![image-20200730102607452](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200730102607452.png)

* 设置PicGo开机自启

![image-20200716205307568](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200716205307568.png)

* 配置Typora，点击 文件，偏好设置，选择图像，设置PicGo二进制文件的路径：

![image-20200323201738802](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200323201738802.png)

- Typora使用下面这个url跟PicGo连接的，所以PicGo的设置也要对应，默认一般就是。

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/ipicgo.png)

![image-20200323204010678](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/ipcigo2.png)

- 不过PicGo的Server监听端口会经常变动（比如电脑重启后）,就需要修改不然Typora图片也会上传失败。

### 代码图片生成器

官网地址:https://carbon.now.sh/

生成比较精美的代码图片，不用担心一些网站不支持代码格式。

![1419561-20200403080639617-2113865405](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1419561-20200403080639617-2113865405.jpg)

另外 **carbon** 还有 IDEA，vscode 等插件，安装之后，可以快速使用。

## 写作后

写作完成之后，我们需要将文章发布到微信公众号以及其他博客平台。

### 微信公众号

由于之前文章采用 **markdown** 写作，而微信公众号编辑器不支持渲染 **markdown**，这就导致我们需要自己排版。虽然排版我们可以使用 **135 编辑器**，**壹伴插件**等完成，不过还是很麻烦。

追求方便的同学可以使用自动排版 **markdown** 的网站，里面支持样式也是比较简洁好看。

官网地址：

http://md.aclickall.com/

https://mdnice.com/

![1419561-20200403080640489-1946118352](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1419561-20200403080640489-1946118352.jpg)

![1419561-20200403080640732-64891255](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1419561-20200403080640732-64891255.jpg)

### 其他博客平台

目前个人还会把文章分发到掘金，博客园，**segmentfault** 等，这些平台都支持 **markdown**,可以直接将 **markdown** 直接复制过去。不过分发平台较多，一个个发还是比较麻烦。

下面推荐两个工具，自动分发文章到各个博客网站。

官网地址：

https://openwrite.cn/

https://github.com/ystcode/BlogHelper

 **openwrite**，该平台目前采用会员机制，年付会员 **99** 元。免费版可以使用 **BlogHelper** 。

## 参考文章

* https://www.cnblogs.com/goodAndyxublog/p/12624282.html
* https://www.cnblogs.com/qtzd/p/12554902.html
