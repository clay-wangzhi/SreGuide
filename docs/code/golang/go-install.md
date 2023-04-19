---
category: Golang
---

# Golang 安装

## Windows 安装 go

1. 在Go中文网进行Go最新版安装包的下载， https://studygolang.com/dl
2. 将安装包下载好后直接一步到位next即可
3. 在控制台输入`go version`，如果显示了版本号，即代表安装成功
4. 修改`go env`
   * `go env -w GO111MODULE=on`   // 打开GoMOD
   * `go env -w GOPROXY=https://goproxy.cn,direct`  //配置代理，感谢七牛云

## Linux 安装 go

1. 下载

   ```
   cd /opt
   wget https://studygolang.com/dl/golang/go1.17.6.linux-amd64.tar.gz
   ```

2. 解压

   ```
   tar -xvf go1.17.6.linux-amd64.tar.gz  -C /usr/local/
   ```

3. 配置环境变

   ```
   vi /etc/profile 
   
   # 最后一行添加
   export GOROOT=/usr/local/go 
   export GOPATH=/usr/local/gopath
   export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
   export GO111MODULE=on
   export GOPROXY=https://goproxy.cn,direct
   
   source /etc/profile
   # 查看版本
   go version
   ```

4. go 命令自动补全

   ```bash
   go get -u github.com/posener/complete/gocomplete
   # 命令会下载到 $GOPATH/bin 目录下
   gocomplete -install
   ```

## Mac 安装 go

1. 下载go安装包

官网下载go安装包： https://golang.google.cn/dl/

下载go二进制包`go1.16.2.darwin-amd64.tar.gz`

```none
wget -c https://golang.google.cn/dl/go1.16.2.darwin-amd64.tar.gz
```

2. 安装go

安装目录： `/usr/local/go`

```none
sudo tar -xzvf go1.16.2.darwin-amd64.tar.gz -C /usr/local
cd /usr/local/go
```

查看go的安装目录:

```none
cd /usr/local/go
ls
```

3. 配置环境变量

编辑`~/.bash_profile`文件：

```none
vim ~/.bash_profile
```

追加以下内容：

```none
export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin
export GOPATH=$HOME/go
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
```

注意， `GOPATH`配置为你的工作区目录

编辑`~/.zshrc`文件：

```none
vim ~/.zshrc
```

追加以下内容：

```none
source ~/.bash_profile
```

使终端对以上配置的环境变量生效：

```none
source ~/.zshrc
```

## Vscode 配置

安装 `go` 插件

打开命令面板，输入`go:install` ,全选安装

