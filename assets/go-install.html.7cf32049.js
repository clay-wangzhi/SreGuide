import{_ as e,e as n}from"./app.ac0f71d5.js";const a={},s=n(`<h1 id="golang-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#golang-\u5B89\u88C5" aria-hidden="true">#</a> Golang \u5B89\u88C5</h1><h2 id="windows-\u5B89\u88C5-go" tabindex="-1"><a class="header-anchor" href="#windows-\u5B89\u88C5-go" aria-hidden="true">#</a> Windows \u5B89\u88C5 go</h2><ol><li>\u5728Go\u4E2D\u6587\u7F51\u8FDB\u884CGo\u6700\u65B0\u7248\u5B89\u88C5\u5305\u7684\u4E0B\u8F7D\uFF0C https://studygolang.com/dl</li><li>\u5C06\u5B89\u88C5\u5305\u4E0B\u8F7D\u597D\u540E\u76F4\u63A5\u4E00\u6B65\u5230\u4F4Dnext\u5373\u53EF</li><li>\u5728\u63A7\u5236\u53F0\u8F93\u5165<code>go version</code>\uFF0C\u5982\u679C\u663E\u793A\u4E86\u7248\u672C\u53F7\uFF0C\u5373\u4EE3\u8868\u5B89\u88C5\u6210\u529F</li><li>\u4FEE\u6539<code>go env</code><ul><li><code>go env -w GO111MODULE=on</code> // \u6253\u5F00GoMOD</li><li><code>go env -w GOPROXY=https://goproxy.cn,direct</code> //\u914D\u7F6E\u4EE3\u7406\uFF0C\u611F\u8C22\u4E03\u725B\u4E91</li></ul></li></ol><h2 id="linux-\u5B89\u88C5-go" tabindex="-1"><a class="header-anchor" href="#linux-\u5B89\u88C5-go" aria-hidden="true">#</a> Linux \u5B89\u88C5 go</h2><ol><li><p>\u4E0B\u8F7D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt
wget https://studygolang.com/dl/golang/go1.17.6.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u89E3\u538B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -xvf go1.17.6.linux-amd64.tar.gz  -C /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u914D\u7F6E\u73AF\u5883\u53D8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /etc/profile 

# \u6700\u540E\u4E00\u884C\u6DFB\u52A0
export GOROOT=/usr/local/go 
export GOPATH=/usr/local/gopath
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct

source /etc/profile
# \u67E5\u770B\u7248\u672C
go version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p>go \u547D\u4EE4\u81EA\u52A8\u8865\u5168</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get -u github.com/posener/complete/gocomplete
<span class="token comment"># \u547D\u4EE4\u4F1A\u4E0B\u8F7D\u5230 $GOPATH/bin \u76EE\u5F55\u4E0B</span>
gocomplete -install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><h2 id="mac-\u5B89\u88C5-go" tabindex="-1"><a class="header-anchor" href="#mac-\u5B89\u88C5-go" aria-hidden="true">#</a> Mac \u5B89\u88C5 go</h2><ol><li>\u4E0B\u8F7Dgo\u5B89\u88C5\u5305</li></ol><p>\u5B98\u7F51\u4E0B\u8F7Dgo\u5B89\u88C5\u5305\uFF1A https://golang.google.cn/dl/</p><p>\u4E0B\u8F7Dgo\u4E8C\u8FDB\u5236\u5305<code>go1.16.2.darwin-amd64.tar.gz</code></p><div class="language-none ext-none line-numbers-mode"><pre class="language-none"><code>wget -c https://golang.google.cn/dl/go1.16.2.darwin-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5B89\u88C5go</li></ol><p>\u5B89\u88C5\u76EE\u5F55\uFF1A <code>/usr/local/go</code></p><div class="language-none ext-none line-numbers-mode"><pre class="language-none"><code>sudo tar -xzvf go1.16.2.darwin-amd64.tar.gz -C /usr/local
cd /usr/local/go
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u67E5\u770Bgo\u7684\u5B89\u88C5\u76EE\u5F55:</p><div class="language-none ext-none line-numbers-mode"><pre class="language-none"><code>cd /usr/local/go
ls
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</li></ol><p>\u7F16\u8F91<code>~/.bash_profile</code>\u6587\u4EF6\uFF1A</p><div class="language-none ext-none line-numbers-mode"><pre class="language-none"><code>vim ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FFD\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-none ext-none line-numbers-mode"><pre class="language-none"><code>export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin
export GOPATH=$HOME/go
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6CE8\u610F\uFF0C <code>GOPATH</code>\u914D\u7F6E\u4E3A\u4F60\u7684\u5DE5\u4F5C\u533A\u76EE\u5F55</p><p>\u7F16\u8F91<code>~/.zshrc</code>\u6587\u4EF6\uFF1A</p><div class="language-none ext-none line-numbers-mode"><pre class="language-none"><code>vim ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FFD\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-none ext-none line-numbers-mode"><pre class="language-none"><code>source ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7EC8\u7AEF\u5BF9\u4EE5\u4E0A\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u751F\u6548\uFF1A</p><div class="language-none ext-none line-numbers-mode"><pre class="language-none"><code>source ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="vscode-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vscode-\u914D\u7F6E" aria-hidden="true">#</a> Vscode \u914D\u7F6E</h2><p>\u5B89\u88C5 <code>go</code> \u63D2\u4EF6</p><p>\u6253\u5F00\u547D\u4EE4\u9762\u677F\uFF0C\u8F93\u5165<code>go:install</code> ,\u5168\u9009\u5B89\u88C5</p>`,30);function l(r,o){return s}var d=e(a,[["render",l],["__file","go-install.html.vue"]]);export{d as default};
