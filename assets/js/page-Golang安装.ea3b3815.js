(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{980:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"golang-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#golang-安装"}},[s._v("#")]),s._v(" Golang 安装")]),s._v(" "),e("h2",{attrs:{id:"windows-安装-go"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-安装-go"}},[s._v("#")]),s._v(" Windows 安装 go")]),s._v(" "),e("ol",[e("li",[s._v("在Go中文网进行Go最新版安装包的下载， https://studygolang.com/dl")]),s._v(" "),e("li",[s._v("将安装包下载好后直接一步到位next即可")]),s._v(" "),e("li",[s._v("在控制台输入"),e("code",[s._v("go version")]),s._v("，如果显示了版本号，即代表安装成功")]),s._v(" "),e("li",[s._v("修改"),e("code",[s._v("go env")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("go env -w GO111MODULE=on")]),s._v("   // 打开GoMOD")]),s._v(" "),e("li",[e("code",[s._v("go env -w GOPROXY=https://goproxy.cn,direct")]),s._v("  //配置代理，感谢七牛云")])])])]),s._v(" "),e("h2",{attrs:{id:"linux-安装-go"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-go"}},[s._v("#")]),s._v(" Linux 安装 go")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("下载")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /opt\nwget https://studygolang.com/dl/golang/go1.17.6.linux-amd64.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("解压")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tar -xvf go1.17.6.linux-amd64.tar.gz  -C /usr/local/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("配置环境变")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi /etc/profile \n\n# 最后一行添加\nexport GOROOT=/usr/local/go \nexport GOPATH=/usr/local/gopath\nexport PATH=$PATH:$GOROOT/bin:$GOPATH/bin\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.cn,direct\n\nsource /etc/profile\n# 查看版本\ngo version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("go 命令自动补全")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("go get -u github.com/posener/complete/gocomplete\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令会下载到 $GOPATH/bin 目录下")]),s._v("\ngocomplete -install\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"mac-安装-go"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-安装-go"}},[s._v("#")]),s._v(" Mac 安装 go")]),s._v(" "),e("ol",[e("li",[s._v("下载go安装包")])]),s._v(" "),e("p",[s._v("官网下载go安装包： https://golang.google.cn/dl/")]),s._v(" "),e("p",[s._v("下载go二进制包"),e("code",[s._v("go1.16.2.darwin-amd64.tar.gz")])]),s._v(" "),e("div",{staticClass:"language-none line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget -c https://golang.google.cn/dl/go1.16.2.darwin-amd64.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("安装go")])]),s._v(" "),e("p",[s._v("安装目录： "),e("code",[s._v("/usr/local/go")])]),s._v(" "),e("div",{staticClass:"language-none line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo tar -xzvf go1.16.2.darwin-amd64.tar.gz -C /usr/local\ncd /usr/local/go\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("查看go的安装目录:")]),s._v(" "),e("div",{staticClass:"language-none line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /usr/local/go\nls\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("配置环境变量")])]),s._v(" "),e("p",[s._v("编辑"),e("code",[s._v("~/.bash_profile")]),s._v("文件：")]),s._v(" "),e("div",{staticClass:"language-none line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim ~/.bash_profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("追加以下内容：")]),s._v(" "),e("div",{staticClass:"language-none line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export GOROOT=/usr/local/go\nexport PATH=$PATH:$GOROOT/bin\nexport GOPATH=$HOME/go\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.cn\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("注意， "),e("code",[s._v("GOPATH")]),s._v("配置为你的工作区目录")]),s._v(" "),e("p",[s._v("编辑"),e("code",[s._v("~/.zshrc")]),s._v("文件：")]),s._v(" "),e("div",{staticClass:"language-none line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim ~/.zshrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("追加以下内容：")]),s._v(" "),e("div",{staticClass:"language-none line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("source ~/.bash_profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使终端对以上配置的环境变量生效：")]),s._v(" "),e("div",{staticClass:"language-none line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("source ~/.zshrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"vscode-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vscode-配置"}},[s._v("#")]),s._v(" Vscode 配置")]),s._v(" "),e("p",[s._v("安装 "),e("code",[s._v("go")]),s._v(" 插件")]),s._v(" "),e("p",[s._v("打开命令面板，输入"),e("code",[s._v("go:install")]),s._v(" ,全选安装")])])}),[],!1,null,null,null);a.default=t.exports}}]);