1. 下载

   ```
   cd /opt
   wget https://studygolang.com/dl/golang/go1.14.4.linux-amd64.tar.gz
   ```

2. 解压

   ```
   tar -xvf go1.14.4.linux-amd64.tar.gz  -C /usr/local/
   ```

3. 配置环境变量

   ```
   vi /etc/profile 
   
   # 最后一行添加
   export GOROOT=/usr/local/go 
   export GOPATH=$HOME/go 
   export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
   export GO111MODULE=auto
   export GOPROXY=https://goproxy.cn,direct
   
   source /etc/profile
   # 查看版本
   go version
   ```


4. 安装git

   ```
   yum -y install git
   ```

   