# 2.2 war 包安装 jenkins

> 转载自：[war包安装jenkins | willseecloud | 看云](https://www.kancloud.cn/willseecloud/jenkins/1860603)

## war 包安装 jenkins

参考：https://www.jenkins.io/doc/pipeline/tour/getting-started/

要求：java8或java11

下载jenkins

```
wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
wget https://mirrors.huaweicloud.com/jenkins/war/2.250/jenkins.war
```

运行jenkins

```
java -jar jenkins.war --httpPort=8080
```

浏览器访问jenkins

```
http://localhost:8080
```

## tomcat运行jenkins

Tomcat 和 Jenkins 都是用 Java 语言开发的，因此，我们首先需要安装 Java 的运行环境（JRE，Java Runtime Environment）。

首先下载 Tomcat 和 Jenkins：

```
# 下载Tomcat并解压
wget https://mirror.bit.edu.cn/apache/tomcat/tomcat-7/v7.0.105/bin/apache-tomcat-7.0.105.tar.gz
tar xzvf apache-tomcat-7.0.105.tar.gz

# 下载jenkins并放入Tomcat中
wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/war/2.256/jenkins.war
mv jenkins.war apache-tomcat-7.0.105/webapps
# 下载Tomcat并解压
```

进入 Tomcat 的根目录下启动

```
# 启动
./bin/catalina.sh start
# 停止
./bin/catalina.sh stop
```

Tomcat 默认的端口是 8080，如果你安装在本地的话，可以通过下面的方式来访问：

```
http://localhost:8080/jenkins/
```

如果你的 Jenkins 是首次启动访问的话，根据网络情况所等待的时间长短是不相同的。因为此时 Jenkins 需要从更新中心下载插件信息。当插件信息下载成功后，你需要输入初始 Token（初始密码）才可以进入到配置初始化界面。

Token（初始密码）的值会保存在该文件中：

```
~/.jenkins/secrets/initialAdminPassword
```