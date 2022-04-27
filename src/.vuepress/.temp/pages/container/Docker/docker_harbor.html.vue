<template><h1 id="harbor-搭建" tabindex="-1"><a class="header-anchor" href="#harbor-搭建" aria-hidden="true">#</a> Harbor 搭建</h1>
<h1 id="harbor创建" tabindex="-1"><a class="header-anchor" href="#harbor创建" aria-hidden="true">#</a> Harbor创建</h1>
<h2 id="安装依赖软件" tabindex="-1"><a class="header-anchor" href="#安装依赖软件" aria-hidden="true">#</a> 安装依赖软件</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install openssl
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps" aria-hidden="true">#</a> Installation Steps</h2>
<p>1）Offline installer:</p>
<p>从github上下载官方最新包，然后上传到服务器上</p>
<p>2）解压</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar xvf harbor-offline-installer-&lt;version>.tgz  -C /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3）修改配置文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cd /usr/local/harbor
# vim harbor.yml
# 将hostname改为对应的本机地址（not localhost or 127.0.0.1）
# 修改harbor_admin_password管理用户密码，只能在这里改，改后不可再改
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>hostname一定要用域名</p>
</blockquote>
<p>4）安装启动</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="configuring-harbor-with-https-access" tabindex="-1"><a class="header-anchor" href="#configuring-harbor-with-https-access" aria-hidden="true">#</a> Configuring Harbor with HTTPS Access</h1>
<h2 id="getting-certificate-authority" tabindex="-1"><a class="header-anchor" href="#getting-certificate-authority" aria-hidden="true">#</a> Getting Certificate Authority</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># hostnamectl set-hostname sdqcharbor.com
# echo "本机地址 sdqcharbor.com" >> /etc/hosts
# mkdir -p /opt/certs
# cd /opt/certs
# openssl genrsa -out ca.key 4096
# openssl req -x509 -new -nodes -sha512 -days 3650 \
  -subj "/CN=sdqcharbor.com" \
  -key ca.key \
  -out ca.crt

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="getting-server-certificate" tabindex="-1"><a class="header-anchor" href="#getting-server-certificate" aria-hidden="true">#</a> Getting Server Certificate</h2>
<p><strong>1) Create your own Private Key:</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>openssl genrsa -out sdqcharbor.com.key 4096
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>2) Generate a Certificate Signing Request:</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>openssl req -sha512 -new \
  -subj "/CN=sdqcharbor.com" \
  -key sdqcharbor.com.key \
  -out sdqcharbor.com.csr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>3) Generate the certificate of your registry host:</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat > v3.ext &lt;&lt;-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth 
subjectAltName = @alt_names

[alt_names]
DNS.1=sdqcharbor.com
DNS.2=192.168.162.45
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>openssl x509 -req -sha512 -days 3650     -extfile v3.ext     -CA ca.crt -CAkey ca.key -CAcreateserial     -in sdqcharbor.com.csr     -out sdqcharbor.com.crt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="configuration-and-installation" tabindex="-1"><a class="header-anchor" href="#configuration-and-installation" aria-hidden="true">#</a> Configuration and Installation</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir /data/cert
cp sdqcharbor.com.crt /data/cert/
cp sdqcharbor.com.key /data/cert/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>2) Configure Server Certificate, Key and CA for Docker</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>openssl x509 -inform PEM -in sdqcharbor.com.crt -out sdqcharbor.com.cert
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Delpoy .com.cert<code>, </code>yourdomain.com.key<code>, and </code>ca.crt` for Docker:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir /etc/docker/certs.d/sdqcharbor.com
cp sdqcharbor.com.cert sdqcharbor.com.key ca.crt /etc/docker/certs.d/sdqcharbor.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>3) Configure Harbor</strong></p>
<p>vim /usr/local/harbor/harbor.yml</p>
<p>修改为以下内容</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hostname: sdqcharbor.com
https:
  certificate: /data/cert/sdqcharbor.com.crt
  private_key: /data/cert/sdqcharbor.com.key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If Harbor is already running, stop and remove the existing instance. Your image data remain in the file system</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker-compose down -v
rm -rf /data/database/
rm -rf /data/registry/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>编辑docker中配置文件，<code>daemon.json</code>，去掉<code>&quot;insecure-registries&quot;: [&quot;sdqcharbor.com&quot;]</code>这一行</p>
<p>重启docker</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>预编译</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./prepare
docker-compose -f ./docker-compose.yml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>登录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker login sdqcharbor.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上传镜像</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker tag centos:latest sdqcharbor.com/library/centos:latest
docker push sdqcharbor.com/library/centos:latest 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>
<blockquote>
<p><a href="https://goharbor.io/docs/1.10/install-config/download-installer/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
</blockquote>
</template>
