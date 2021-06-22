---
categroy: Python
tags:
  - vscode
---

# 1.4 使用 vscode 打造 python 开发环境

## 1 软件准备

既然是在 VS Code 中进行 Python 环境配置，在配置之前需要安装好 Python 和 VS Code。

### 1.1 Python 安装

关于 Python 的安装，可以从 [Python 官网下载](https://www.python.org/downloads/release) Python 进行安装，也可以通过 `Anaconda` 来安装。

注意区分64位还是32位的。

安装python的时候，建议将python添加到path环境变量的复选框勾上。

`Anaconda` 是一个开源的 Python 发行版本，其包含了 `conda`、Python 等 100 多个科学包及其依赖项。

`Anaconda` 官方网站下载地址如下：

https://www.anaconda.com/products/individual

在 编写此文时，Anaconda 对应的 Python 版本是 Python 3.8，大家可以下载跟电脑系统对应的版本进行安装。

 ![image-20210622103707557](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210622103707557.png)

### 1.2 VS Code 安装

关于 VS Code 安装，在微软官方网站：https://code.visualstudio.com/ 提供免费下载，VS Code 支持 Windows , Linux , Mac OS 三种操作系统，建议去官方下载，不要在第三方软件下载网站下载，第三方软件下载站的猫腻太多了。

 ![image-20210622103815924](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210622103815924.png)

## 2 Python 环境配置

### 2.1 安装 Python 相关插件

**Python插件** 

在 VS Code 中配置 Python 环境，第一个要安装的插件，就是 `Python` 插件。

`Python` 插件的全称是 `Python extension for Visual Studio Code`，它是一个 Visual Studio Code 扩展，具有对 Python 语言的丰富支持（对于该语言的所有受支持版本：> = 3.6），包括诸如 IntelliSense，linting，调试，代码导航，代码格式，Jupyter Notebook 支持，重构，变量之类的功能资源管理器，测试资源管理器，代码段等等！



**代码补全插件 Pylance**

`Pylance` 是微软推出的一个快速而且功能丰富的Python语言扩展。`Pylance` 于 2020年7月发布，目前在 VS Code 市场中，安装量已有 60多万，足见其关注度。

`Pylance` 主要有如下特性：

- Docstrings
- 参数提示
- 自动导入
- 代码补全
- 代码诊断
- 引用和跳转
- 代码大纲
- 类型检查
- 支持多工作区
- 带有类型信息的签名帮助
- 兼容 IntelliCode 和 Jupyter notebook

需要运行 Python 程序时，可以在程序文件（`py文件`）里右键，选择 `Run Python File in Terminal` 来运行程序，或者 点击右上角的绿色三角形来运行程序。



**Jupyter Notebook 支持插件 Jupyter**

众所周知，python 代码，除了通常使用的 `.py` 文件外，对于数据科学而言, Jupyter Notebook 也是大家的重要选项，因此，VS Code 中也提供了 Jupyter Notebook 的支持插件，在 VS Code 扩展市场中的名称是 `Jupyter`

### 2.2 自动格式化代码配置

Yapf 是谷歌开源的一个用于格式化 Python 代码的工具，可以一键美化代码。支持两种规范：`PEP8` 和 `Google Style` 。

在 VS Code 中使用 `yapf` 需要先安装该工具，步骤如下：

**step 1：** 打开终端,输入 "pip install yapf", 安装 `yapf` ，如下：

```shell
pip install yapf
```

**step 2：** 在设置中设置使用 `yapf`，具体设置过程如下：

在 VS Code 左下角点击设置按钮，选择 “Settings”，如下：

 ![image-20210622111313843](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210622111313843.png)

在下面界面的右上角点击箭头所示，转到 `settings.json`

 ![image-20210622111420975](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210622111420975.png)

在 `settings.json` 里进行设置 "python.formatting.provider": "yapf"， 图示如下：

 ![image-20210622111528360](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210622111528360.png)

**step 3：** 完成上述设置后，就可以对代码格式进行自动格式化了，快捷键是 Alt+Shift+F 。

## 3 为项目运行时指定特定的python解释器

[详细配置](https://clay-wangzhi.com/code/python/python-virtualenv/#visual-studio-code)

## 4 vscode利用远程服务器环境调试项目

这个还是很好用的，可以不需要在windows服务器上安装python执行环境了。而且，python中的一些与系统操作相关的模块，windows上安装起来也非常麻烦。

**step 1：**按下快捷键Ctrl+Shift+X，进入插件管理页面，搜索并安装插件Remote Development

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1809823-20191118092715192-399355687.png)

**step 2：**windows上安装openssh客户端，这里提供一个使用powershell安装的方法

首先，以管理员身份打开powershell

然后，输入命令在线查询可获取的安装包 Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1809823-20191118094734763-1541493353.png)

最后，如果状态显示NotPresent的话，可以使用命令进行安装，命令为Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

提示：随着 Windows 10 2018 年 4 月更新的发布，OpenSSH 客户端已正式推出并在 Windows 10 中默认安装。

 

**step 3：**准备一台centos虚拟机或者ubuntu虚拟机，确保虚拟机上的ssh server服务已经开启，并允许远程连接。比如我准备的是centos7虚拟机，IP地址为192.168.247.133

**step 4：**按下快捷键ctrl+shift+p 搜索Remote-SSH:Settings，在打开的页面中，点击Edit in settings.json，在其中添加"remote.SSH.showLoginTerminal": true,如下图:

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1809823-20191118100720720-1004879806.png)

**step 5：**点击左下角的绿色图标，选择Remote-SSH：Connect to Host 然后点击 Configure SSH Hosts 然后选择点第一个config，默认应该是一个空白的文件，在其中添加如下的配置：

```
Host Centos7.5_python3
    HostName 192.168.247.133
    Port 22
    User root
```

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1809823-20191118101524704-1699733717.png)

备注：其中Host后面的名称，可以随便命名，HostName后面的IP地址是准备的虚拟机IP地址，Port后跟的是ssh server服务监听的端口号，默认是22，User后跟的是远程连接的用户名，我这里使用超级用户连接。

这里补充一点：

每次连接远程服务器，打开项目都要输入一次密码，是否很烦？如果有人觉得烦的话，可以先在本地windows系统和远程服务器之间做好ssh免密登陆，然后在上面这个config文件中，在User配置下一行（缩进和User要一致），添加IdentityFile C:\Users\...\.ssh\id_rsa即可，其中IdentityFile参数后面跟的是windows上的rsa私钥文件。

第六步：点击vscode左边栏的远程连接图标，如下：

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1809823-20191118101908730-1174731395.png)

第七步：点击配置后的远程虚拟机名称旁边的那个按钮，输入密码进行登陆到服务器上，如下：

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1809823-20191118102152158-767875613.png)

备注，如果vscode初次连接这台虚拟机的话，那么需要等待几分钟，因为vscode要做一些初始化工作。

第八步：连上虚拟机后，可以通过下图中标识的顺序打开远程服务器上的项目，当然每次打开项目都是需要再次输入密码的。这也是为了安全考虑。

在打开的项目中新建文件，删除文件，修改文件等操作，不需要再次输入密码。

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1809823-20191118103510878-1427529685.png)

第九步：运行项目或测试脚本的方法

感觉这个功能，在一定程度上，都可以代替secure crt或xshell远程连接工具和ftp上传下载客户端了。很强大。

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1809823-20191118104120944-788931545.png)

补充：

没有语法检查，代码自动提示和补全功能，开发真的是一个很难受的事情，那么怎么在远程服务器上使用这些功能呢？下面就是补全这一点的方法：

首先：按下快捷键Ctrl+Shift+X，进入插件管理页面，搜索python，然后，点击Install in SSH:Centos7.5_python3，如下图：

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1809823-20191118114031066-1405256168.png)

然后：在打开的项目中，生成launch.json和settings.json这两个配置文件，方法在最上面，和配置windows本地开发环境一样

## 参考链接

* https://www.cnblogs.com/DesignerA/p/11604200.html
* https://mp.weixin.qq.com/s/oOlPoCE0BKpmxADUXfCsQg