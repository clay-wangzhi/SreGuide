import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as a}from"./app-d870e103.js";const d={},l=a(`<h1 id="golang-安装" tabindex="-1"><a class="header-anchor" href="#golang-安装" aria-hidden="true">#</a> Golang 安装</h1><h2 id="windows-安装-go" tabindex="-1"><a class="header-anchor" href="#windows-安装-go" aria-hidden="true">#</a> Windows 安装 go</h2><ol><li>在Go中文网进行Go最新版安装包的下载， https://studygolang.com/dl</li><li>将安装包下载好后直接一步到位next即可</li><li>在控制台输入<code>go version</code>，如果显示了版本号，即代表安装成功</li><li>修改<code>go env</code><ul><li><code>go env -w GO111MODULE=on</code> // 打开GoMOD</li><li><code>go env -w GOPROXY=https://goproxy.cn,direct</code> //配置代理，感谢七牛云</li></ul></li></ol><h2 id="linux-安装-go" tabindex="-1"><a class="header-anchor" href="#linux-安装-go" aria-hidden="true">#</a> Linux 安装 go</h2><ol><li><p>下载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
wget https://studygolang.com/dl/golang/go1.17.6.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解压</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -xvf go1.17.6.linux-amd64.tar.gz  -C /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置环境变</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/profile 

# 最后一行添加
export GOROOT=/usr/local/go 
export GOPATH=/usr/local/gopath
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct

source /etc/profile
# 查看版本
go version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>go 命令自动补全</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> github.com/posener/complete/gocomplete
<span class="token comment"># 命令会下载到 $GOPATH/bin 目录下</span>
gocomplete <span class="token parameter variable">-install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="mac-安装-go" tabindex="-1"><a class="header-anchor" href="#mac-安装-go" aria-hidden="true">#</a> Mac 安装 go</h2><ol><li>下载go安装包</li></ol><p>官网下载go安装包： https://golang.google.cn/dl/</p><p>下载go二进制包<code>go1.16.2.darwin-amd64.tar.gz</code></p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>wget -c https://golang.google.cn/dl/go1.16.2.darwin-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>安装go</li></ol><p>安装目录： <code>/usr/local/go</code></p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>sudo tar -xzvf go1.16.2.darwin-amd64.tar.gz -C /usr/local
cd /usr/local/go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看go的安装目录:</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>cd /usr/local/go
ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>配置环境变量</li></ol><p>编辑<code>~/.bash_profile</code>文件：</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>vim ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>追加以下内容：</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin
export GOPATH=$HOME/go
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意， <code>GOPATH</code>配置为你的工作区目录</p><p>编辑<code>~/.zshrc</code>文件：</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>vim ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>追加以下内容：</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>source ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使终端对以上配置的环境变量生效：</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>source ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置" aria-hidden="true">#</a> Vscode 配置</h2><p>安装 <code>go</code> 插件</p><p>打开命令面板，输入<code>go:install</code> ,全选安装</p>`,30),s=[l];function o(r,c){return n(),i("div",null,s)}const u=e(d,[["render",o],["__file","go-install.html.vue"]]);export{u as default};
