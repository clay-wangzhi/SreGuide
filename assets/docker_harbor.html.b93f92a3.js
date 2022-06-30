import{_ as n,r as s,c as r,a as e,b as t,F as i,e as c,d as l,o as d}from"./app.c279a5c9.js";const o={},p=c(`<h1 id="harbor-\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#harbor-\u642D\u5EFA" aria-hidden="true">#</a> Harbor \u642D\u5EFA</h1><h1 id="harbor\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#harbor\u521B\u5EFA" aria-hidden="true">#</a> Harbor\u521B\u5EFA</h1><h2 id="\u5B89\u88C5\u4F9D\u8D56\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56\u8F6F\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56\u8F6F\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install openssl
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps" aria-hidden="true">#</a> Installation Steps</h2><p>1\uFF09Offline installer:</p><p>\u4ECEgithub\u4E0A\u4E0B\u8F7D\u5B98\u65B9\u6700\u65B0\u5305\uFF0C\u7136\u540E\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E0A</p><p>2\uFF09\u89E3\u538B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar xvf harbor-offline-installer-&lt;version&gt;.tgz  -C /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3\uFF09\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/local/harbor
# vim harbor.yml
# \u5C06hostname\u6539\u4E3A\u5BF9\u5E94\u7684\u672C\u673A\u5730\u5740\uFF08not localhost or 127.0.0.1\uFF09
# \u4FEE\u6539harbor_admin_password\u7BA1\u7406\u7528\u6237\u5BC6\u7801\uFF0C\u53EA\u80FD\u5728\u8FD9\u91CC\u6539\uFF0C\u6539\u540E\u4E0D\u53EF\u518D\u6539
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>hostname\u4E00\u5B9A\u8981\u7528\u57DF\u540D</p></blockquote><p>4\uFF09\u5B89\u88C5\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="configuring-harbor-with-https-access" tabindex="-1"><a class="header-anchor" href="#configuring-harbor-with-https-access" aria-hidden="true">#</a> Configuring Harbor with HTTPS Access</h1><h2 id="getting-certificate-authority" tabindex="-1"><a class="header-anchor" href="#getting-certificate-authority" aria-hidden="true">#</a> Getting Certificate Authority</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># hostnamectl set-hostname sdqcharbor.com
# echo &quot;\u672C\u673A\u5730\u5740 sdqcharbor.com&quot; &gt;&gt; /etc/hosts
# mkdir -p /opt/certs
# cd /opt/certs
# openssl genrsa -out ca.key 4096
# openssl req -x509 -new -nodes -sha512 -days 3650 \\
  -subj &quot;/CN=sdqcharbor.com&quot; \\
  -key ca.key \\
  -out ca.crt

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="getting-server-certificate" tabindex="-1"><a class="header-anchor" href="#getting-server-certificate" aria-hidden="true">#</a> Getting Server Certificate</h2><p><strong>1) Create your own Private Key:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>openssl genrsa -out sdqcharbor.com.key 4096
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>2) Generate a Certificate Signing Request:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>openssl req -sha512 -new \\
  -subj &quot;/CN=sdqcharbor.com&quot; \\
  -key sdqcharbor.com.key \\
  -out sdqcharbor.com.csr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>3) Generate the certificate of your registry host:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; v3.ext &lt;&lt;-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth 
subjectAltName = @alt_names

[alt_names]
DNS.1=sdqcharbor.com
DNS.2=192.168.162.45
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>openssl x509 -req -sha512 -days 3650     -extfile v3.ext     -CA ca.crt -CAkey ca.key -CAcreateserial     -in sdqcharbor.com.csr     -out sdqcharbor.com.crt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="configuration-and-installation" tabindex="-1"><a class="header-anchor" href="#configuration-and-installation" aria-hidden="true">#</a> Configuration and Installation</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /data/cert
cp sdqcharbor.com.crt /data/cert/
cp sdqcharbor.com.key /data/cert/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>2) Configure Server Certificate, Key and CA for Docker</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>openssl x509 -inform PEM -in sdqcharbor.com.crt -out sdqcharbor.com.cert
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Delpoy .com.cert<code>, </code>yourdomain.com.key<code>, and </code>ca.crt\` for Docker:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /etc/docker/certs.d/sdqcharbor.com
cp sdqcharbor.com.cert sdqcharbor.com.key ca.crt /etc/docker/certs.d/sdqcharbor.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>3) Configure Harbor</strong></p><p>vim /usr/local/harbor/harbor.yml</p><p>\u4FEE\u6539\u4E3A\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hostname: sdqcharbor.com
https:
  certificate: /data/cert/sdqcharbor.com.crt
  private_key: /data/cert/sdqcharbor.com.key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If Harbor is already running, stop and remove the existing instance. Your image data remain in the file system</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose down -v
rm -rf /data/database/
rm -rf /data/registry/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7F16\u8F91docker\u4E2D\u914D\u7F6E\u6587\u4EF6\uFF0C<code>daemon.json</code>\uFF0C\u53BB\u6389<code>&quot;insecure-registries&quot;: [&quot;sdqcharbor.com&quot;]</code>\u8FD9\u4E00\u884C</p><p>\u91CD\u542Fdocker</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u9884\u7F16\u8BD1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./prepare
docker-compose -f ./docker-compose.yml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u767B\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker login sdqcharbor.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u4F20\u955C\u50CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker tag centos:latest sdqcharbor.com/library/centos:latest
docker push sdqcharbor.com/library/centos:latest 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h1>`,47),u={href:"https://goharbor.io/docs/1.10/install-config/download-installer/",target:"_blank",rel:"noopener noreferrer"},b=l("\u5B98\u65B9\u6587\u6863");function m(h,g){const a=s("ExternalLinkIcon");return d(),r(i,null,[p,e("blockquote",null,[e("p",null,[e("a",u,[b,t(a)])])])],64)}var v=n(o,[["render",m],["__file","docker_harbor.html.vue"]]);export{v as default};
