import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as t,a as e,b as n,d as s,e as l}from"./app-bdb4dd27.js";const u={},c=e("h1",{id:"_2-1-yum-安装-jenkins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-1-yum-安装-jenkins","aria-hidden":"true"},"#"),n(" 2.1 yum 安装 jenkins")],-1),o={href:"https://www.kancloud.cn/willseecloud/jenkins/1860531",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"yum安装jenkins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yum安装jenkins","aria-hidden":"true"},"#"),n(" yum安装jenkins")],-1),m=e("p",null,"官方文档：",-1),p=e("p",null,"https://pkg.jenkins.io/redhat-stable/",-1),k={href:"http://mirrors.jenkins-ci.org/%EF%BC%8C",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"可选择Jenkins长期支持版本或Jenkins每周版本进行安装。",-1),j=e("p",null,[e("strong",null,"长期支持版本")],-1),g={href:"https://www.jenkins.io/download/lts/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://pkg.jenkins.io/redhat-stable/",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"redhat-stable",-1),A=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
sudo yum upgrade -y
sudo yum install -y jenkins java-1.8.0-openjdk-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>每周发布版本</strong></p>`,2),_={href:"https://pkg.jenkins.io/redhat/",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"redhat",-1),E=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key
sudo yum upgrade
sudo yum install -y jenkins java-1.8.0-openjdk-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用国内rpm包安装</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y java-11-openjdk-devel
yum install -y https://mirrors.huaweicloud.com/jenkins/redhat-stable/jenkins-2.235.3-1.1.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改jenkins配置文件以自定义端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# cat /etc/sysconfig/jenkins | grep JENKINS_PORT
JENKINS_PORT=&quot;8080&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动jenkins服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl enable --now jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置update center</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export JENKINS_HOME=/var/lib/jenkins
mkdir $JENKINS_HOME/update-center-rootCAs
cat &gt; $JENKINS_HOME/update-center-rootCAs/jenkins-update-center-cn-root-ca.crt &lt;&lt;END
-----BEGIN CERTIFICATE-----
MIICcTCCAdoCCQD/jZ7AgrzJKTANBgkqhkiG9w0BAQsFADB9MQswCQYDVQQGEwJD
TjELMAkGA1UECAwCR0QxCzAJBgNVBAcMAlNaMQ4wDAYDVQQKDAV2aWhvbzEMMAoG
A1UECwwDZGV2MREwDwYDVQQDDAhkZW1vLmNvbTEjMCEGCSqGSIb3DQEJARYUYWRt
aW5AamVua2lucy16aC5jb20wHhcNMTkxMTA5MTA0MDA5WhcNMjIxMTA4MTA0MDA5
WjB9MQswCQYDVQQGEwJDTjELMAkGA1UECAwCR0QxCzAJBgNVBAcMAlNaMQ4wDAYD
VQQKDAV2aWhvbzEMMAoGA1UECwwDZGV2MREwDwYDVQQDDAhkZW1vLmNvbTEjMCEG
CSqGSIb3DQEJARYUYWRtaW5AamVua2lucy16aC5jb20wgZ8wDQYJKoZIhvcNAQEB
BQADgY0AMIGJAoGBAN+6jN8rCIjVkQ0Q7ZbJLk4IdcHor2WdskOQMhlbR0gOyb4g
RX+CorjDRjDm6mj2OohqlrtRxLGYxBnXFeQGU7wWjQHyfKDghtP51G/672lXFtzB
KXukHByHjtzrDxAutKTdolyBCuIDDGJmRk+LavIBY3/Lxh6f0ZQSeCSJYiyxAgMB
AAEwDQYJKoZIhvcNAQELBQADgYEAD92l26PoJcbl9GojK2L3pyOQjeeDm/vV9e3R
EgwGmoIQzlubM0mjxpCz1J73nesoAcuplTEps/46L7yoMjptCA3TU9FZAHNQ8dbz
a0vm4CF9841/FIk8tsLtwCT6ivkAi0lXGwhX0FK7FaAyU0nNeo/EPvDwzTim4XDK
9j1WGpE=
-----END CERTIFICATE-----
END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改update center地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp $JENKINS_HOME/hudson.model.UpdateCenter.xml $JENKINS_HOME/hudson.model.UpdateCenter.xml.back

sed -i &#39;s#https://updates.jenkins.io/update-center.json#https://mirrors.huaweicloud.com/jenkins/updates/update-center.json#g&#39; \\
  $JENKINS_HOME/hudson.model.UpdateCenter.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启jenkins服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl restart jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入初始化密码并进行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /var/lib/jenkins/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),y={href:"http://192.168.1.1:8080/",target:"_blank",rel:"noopener noreferrer"},N=l(`<h2 id="jenkins配置文件" tabindex="-1"><a class="header-anchor" href="#jenkins配置文件" aria-hidden="true">#</a> jenkins配置文件</h2><p>jenkins相关目录说明：</p><p>/usr/lib/jenkins/ jenkins安装目录，war包会放在这里。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ls /usr/lib/jenkins/
jenkins.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>/var/lib/jenkins/</p><p>默认的JENKINS_HOME，其中存储了关于构建服务器的配置信息、构建作业、构建产物、插件和其它有用的信息。 这个目录将会占用大量的磁盘空间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ll /var/lib/jenkins/
total 60
-rw-r--r-- 1 jenkins jenkins 1640 Aug  1 12:56 config.xml
-rw-r--r-- 1 jenkins jenkins  156 Aug  1 12:56 hudson.model.UpdateCenter.xml
-rw------- 1 jenkins jenkins 1712 Aug  1 12:56 identity.key.enc
-rw-r--r-- 1 jenkins jenkins    7 Aug  1 12:56 jenkins.install.UpgradeWizard.state
-rw-r--r-- 1 jenkins jenkins  171 Aug  1 12:56 jenkins.telemetry.Correlator.xml
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 jobs
drwxr-xr-x 3 jenkins jenkins 4096 Aug  1 12:56 logs
-rw-r--r-- 1 jenkins jenkins  907 Aug  1 12:56 nodeMonitors.xml
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 nodes
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 plugins
-rw-r--r-- 1 jenkins jenkins   64 Aug  1 12:56 secret.key
-rw-r--r-- 1 jenkins jenkins    0 Aug  1 12:56 secret.key.not-so-secret
drwx------ 4 jenkins jenkins 4096 Aug  1 12:56 secrets
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 updates
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 userContent
drwxr-xr-x 3 jenkins jenkins 4096 Aug  1 12:56 users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录文件说明：</p><ul><li>config.xml：jenkins 的核心配置文件</li><li>xml： 其它各种工具的配置信息</li></ul><p>fingerprints：跟踪人工操作的痕迹</p><ul><li>jobs：构建作业的配置细节，及构建产物和数据</li></ul><p>workspace：jenkins 对当前作业进行构建的地方， 包含 jenkins 检验过的源码、构建本身生成的所有文件</p><ul><li>builds：包含当前作业的构建历史</li><li>config.xml：存放当前作业的所有配置细节</li><li>nextBuildNumber：下一次构建的 number</li><li>lastStable：最后一个稳定构建的链接（成功的构建）</li><li>lastSuccessful：最近成功的构建链接（没有任何编译错误）</li><li>plugins：存放所有已安装的插件，更新 jenkins 不需要重新安装插件</li><li>users：当使用 jenkins 本地用户数据库时，用户信息会存放在这个目录下</li><li>updates：存放可用的插件更新</li><li>userContent：存放用户自己为 jenkins 服务器定制化的一些内容</li><li>war：存放扩展的 web 应用程序，当以单机应用程序的形式运行 jenkins 时，会把 web 应用程序解压到这个目录</li></ul><p>/var/log/jenkins/jenkins.log jenkins日志文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail -f /var/log/jenkins/jenkins.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>/etc/sysconfig/jenkins #配置文件，“端口”，“JENKINS_HOME”等都可以在这里配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /etc/sysconfig/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改内存限制，编辑/etc/sysconfig/jenkins</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/sysconfig/jenkins
JENKINS_JAVA_OPTIONS=&quot;-Xmx2048m -Djava.awt.headless=true&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function C(D,M){const i=r("ExternalLinkIcon");return a(),t("div",null,[c,e("blockquote",null,[e("p",null,[n("转载自： "),e("a",o,[n("yum安装jenkins | willseecloud | 看云"),s(i)])])]),v,m,p,e("p",null,[e("a",k,[n("http://mirrors.jenkins-ci.org/"),s(i)])]),b,j,e("p",null,[n("每12周从定期发布流中选择一个"),e("a",g,[n("LTS（长期支持）"),s(i)]),n("发布作为该时间段的稳定发布。可以从"),e("a",x,[h,s(i)]),n("yum存储库安装。")]),A,e("p",null,[n("每周都会产生一个新版本，以向用户和插件开发人员提供错误修复和功能。可以从"),e("a",_,[w,s(i)]),n("yum存储库安装。")]),E,e("p",null,[n("浏览器访问jenkins："),e("a",y,[n("http://192.168.1.1:8080"),s(i)])]),N])}const I=d(u,[["render",C],["__file","yum-install.html.vue"]]);export{I as default};
