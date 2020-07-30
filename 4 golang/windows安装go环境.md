1. 在Go中文网进行Go最新版安装包的下载， https://studygolang.com/dl
2. 将安装包下载好后直接一步到位next即可
3. 在控制台输入`go version`，如果显示了版本号，即代表安装成功
4. 修改`go env`
   * `go env -w GO111MODULE=on`   // 打开GoMOD
   * `go env -w GOPROXY=https://goproxy.cn,direct`  //配置代理，感谢七牛云