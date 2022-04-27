<template><h1 id="centos7-搭建openldap" tabindex="-1"><a class="header-anchor" href="#centos7-搭建openldap" aria-hidden="true">#</a> Centos7 搭建openldap</h1>
<p>环境：</p>
<ul>
<li>
<p>centos7.6</p>
</li>
<li>
<p>openldap 2.4.44</p>
</li>
<li>
<p>phpldapadmin 1.2.3</p>
</li>
</ul>
<h2 id="安装openldap" tabindex="-1"><a class="header-anchor" href="#安装openldap" aria-hidden="true">#</a> 安装openldap</h2>
<p>yum 安装相关包</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> -y openldap openldap-clients openldap-servers
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>复制一个默认配置到指定目录下,并授权，这一步一定要做，然后再启动服务，不然生产密码时会报错</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> /usr/share/openldap-servers/DB_CONFIG.example /var/lib/ldap/DB_CONFIG
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>授权给ldap用户,此用户yum安装时便会自动创建</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chown -R ldap. /var/lib/ldap/DB_CONFIG
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动&amp;加入开机自启</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl start slapd
systemctl <span class="token builtin class-name">enable</span> slapd
systemctl status slapd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="修改openldap配置" tabindex="-1"><a class="header-anchor" href="#修改openldap配置" aria-hidden="true">#</a> 修改openldap配置</h2>
<p>这里就是重点中的重点了，从openldap2.4.23版本开始，所有配置都保存在/etc/openldap/slapd.d目录下的cn=config文件夹内，不再使用slapd.conf作为配置文件。配置文件的后缀为 ldif，且每个配置文件都是通过命令自动生成的，任意打开一个配置文件，在开头都会有一行注释，说明此为自动生成的文件，请勿编辑，使用ldapmodify命令进行修改</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>AUTO-GENERATED FILE - DO NOT EDIT!! Use ldapmodify.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装openldap后，会有三个命令用于修改配置文件，分别为ldapadd, ldapmodify, ldapdelete，顾名思义就是添加，修改和删除。而需要修改或增加配置时，则需要先写一个ldif后缀的配置文件，然后通过命令将写的配置更新到slapd.d目录下的配置文件中去，完整的配置过程如下，跟着我做就可以了：</p>
<ol>
<li>生成管理员密码,记录下这个密码，后面需要用到</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># slappasswd -s 123456</span>
<span class="token punctuation">{</span>SSHA<span class="token punctuation">}</span>LSgYPTUW4zjGtIVtuZ8cRUqqFRv1tWpE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>密码目前只能是123456，设置其他的还是123456，不清楚原因目前</p>
</blockquote>
<p>新增修改密码文件,ldif为后缀，文件名随意，不要在/etc/openldap/slapd.d/目录下创建类似文件</p>
<p>生成的文件为需要通过命令去动态修改ldap现有配置，如下，我在家目录下，创建文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cd ~
# vim changepwd.ldif
dn: olcDatabase={0}config,cn=config
changetype: modify
add: olcRootPW
olcRootPW: {SSHA}LSgYPTUW4zjGtIVtuZ8cRUqqFRv1tWpE
# ldapadd -Y EXTERNAL -H ldapi:/// -f changepwd.ldif
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这里解释一下这个文件的内容：</p>
<ul>
<li>第一行执行配置文件，这里就表示指定为 cn=config/olcDatabase={0}config 文件。你到/etc/openldap/slapd.d/目录下就能找到此文件</li>
<li>第二行 changetype 指定类型为修改</li>
<li>第三行 add 表示添加 olcRootPW 配置项</li>
<li>第四行指定 olcRootPW 配置项的值</li>
</ul>
<p>在执行下面的命令前，你可以先查看原本的olcDatabase={0}config文件，里面是没有olcRootPW这个项的，执行命令后，你再看就会新增了olcRootPW项，而且内容是我们文件中指定的值加密后的字符串。</p>
<p>执行修改命令后，有如下输出则为正常：</p>
<p><img src="images/20190426144821449.png" alt="img" loading="lazy"></p>
<p>查看olcDatabase={0}config内容,新增了一个olcRootPW项。</p>
<p><img src="images/20190426145019794.png" alt="img" loading="lazy"></p>
<p>上面就是一个完整的修改配置的过程，切记不能直接修改/etc/openldap/slapd.d/目录下的配置。</p>
<ol start="2">
<li>我们需要向 LDAP 中导入一些基本的 Schema。</li>
</ol>
<p>这些 Schema 文件位于 /etc/openldap/schema/ 目录中，schema控制着条目拥有哪些对象类和属性，可以自行选择需要的进行导入。</p>
<p>依次执行下面的命令，导入基础的一些配置,我这里将所有的都导入一下，其中core.ldif是默认已经加载了的，不用导入。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/cosine.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/nis.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/inetorgperson.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/collective.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/corba.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/duaconf.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/dyngroup.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/java.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/misc.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/openldap.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/pmi.ldif
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/ppolicy.ldif
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>修改域名，新增changedomain.ldif, 这里我自定义的域名为 schengle.com，管理员用户账号为admin。</p>
<p>如果要修改，则修改文件中相应的dc=schengle,dc=com为自己的域名。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># vim changedomain.ldif
dn: olcDatabase={1}monitor,cn=config
changetype: modify
replace: olcAccess
olcAccess: {0}to * by dn.base="gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth" read by dn.base="cn=admin,dc=schengle,dc=com" read by * none

dn: olcDatabase={2}hdb,cn=config
changetype: modify
replace: olcSuffix
olcSuffix: dc=schengle,dc=com

dn: olcDatabase={2}hdb,cn=config
changetype: modify
replace: olcRootDN
olcRootDN: cn=admin,dc=schengle,dc=com

dn: olcDatabase={2}hdb,cn=config
changetype: modify
replace: olcRootPW
olcRootPW: {SSHA}UyPmWBn2MeDFMFlJmyLycGZkNV8Mr8n9

dn: olcDatabase={2}hdb,cn=config
changetype: modify
add: olcAccess
olcAccess: {0}to attrs=userPassword,shadowLastChange by dn="cn=admin,dc=schengle,dc=com" write by anonymous auth by self write by * none
olcAccess: {1}to dn.base="" by * read
olcAccess: {2}to * by dn="cn=admin,dc=schengle,dc=com" write by * read
# ldapmodify -Y EXTERNAL -H ldapi:/// -f changedomain.ldif
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>最后这里有5个修改，所以执行会输出5行表示成功。</p>
<p><img src="images/20190426161145765.png" alt="img" loading="lazy"></p>
<ol start="3">
<li>启用memberof功能</li>
</ol>
<p>新增add-memberof.ldif, 开启memberof支持并新增用户支持memberof配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># vim add-memberof.ldif
dn: cn=module{0},cn=config
cn: modulle{0}
objectClass: olcModuleList
objectclass: top
olcModuleload: memberof.la
olcModulePath: /usr/lib64/openldap

dn: olcOverlay={0}memberof,olcDatabase={2}hdb,cn=config
objectClass: olcConfig
objectClass: olcMemberOf
objectClass: olcOverlayConfig
objectClass: top
olcOverlay: memberof
olcMemberOfDangling: ignore
olcMemberOfRefInt: TRUE
olcMemberOfGroupOC: groupOfUniqueNames
olcMemberOfMemberAD: uniqueMember
olcMemberOfMemberOfAD: memberOf
# vim refint1.ldif
dn: cn=module{0},cn=config
add: olcmoduleload
olcmoduleload: refint
# vim refint2.ldif
dn: olcOverlay=refint,olcDatabase={2}hdb,cn=config
objectClass: olcConfig
objectClass: olcOverlayConfig
objectClass: olcRefintConfig
objectClass: top
olcOverlay: refint
olcRefintAttribute: memberof uniqueMember  manager owner
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>依次执行下面命令，加载配置，顺序不能错</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ldapadd -Q -Y EXTERNAL -H ldapi:/// -f add-memberof.ldif
ldapmodify -Q -Y EXTERNAL -H ldapi:/// -f refint1.ldif
ldapadd -Q -Y EXTERNAL -H ldapi:/// -f refint2.ldif
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4">
<li>创建组织和组织单元</li>
</ol>
<p>我们来创建一个叫做 schengle company 的组织，并在其下创建一个 admin 的组织角色（该组织角色内的用户具有管理整个 LDAP 的权限）和 People 和 Group 两个组织单元：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># vim base.ldif</span>
dn: <span class="token assign-left variable">dc</span><span class="token operator">=</span>schengle,dc<span class="token operator">=</span>com
objectClass: <span class="token function">top</span>
objectClass: dcObject
objectClass: organization
o: Schengle Company
dc: schengle
 
dn: <span class="token assign-left variable">cn</span><span class="token operator">=</span>admin,dc<span class="token operator">=</span>schengle,dc<span class="token operator">=</span>com
objectClass: organizationalRole
cn: admin
 
dn: <span class="token assign-left variable">ou</span><span class="token operator">=</span>People,dc<span class="token operator">=</span>schengle,dc<span class="token operator">=</span>com
objectClass: organizationalUnit
ou: People
 
dn: <span class="token assign-left variable">ou</span><span class="token operator">=</span>Group,dc<span class="token operator">=</span>schengle,dc<span class="token operator">=</span>com
objectClass: organizationalRole
cn: Group
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><blockquote>
<p>一共执行4次下面的命令，要不然会失败，每次只执行一段</p>
</blockquote>
<p>执行命令，添加配置, 这里要注意修改域名为自己配置的域名，然后需要输入上面我们生成的密码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ldapadd -x -D cn=admin,dc=schengle,dc=com -W -f base.ldif
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过以上的所有步骤，我们就设置好了一个 LDAP 目录树：其中基准 dc=schengle,dc=com 是该树的根节点，其下有一个管理域 cn=admin,dc=schengle,dc=com 和两个组织单元 ou=People,dc=schengle,dc=com 及 ou=Group,dc=schengle,dc=com。</p>
<h2 id="安装phpldapadmin" tabindex="-1"><a class="header-anchor" href="#安装phpldapadmin" aria-hidden="true">#</a> 安装phpldapadmin</h2>
<p>ldap装好后，下面安装web界面phpldapadmin。登录phpldapadmin界面</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># yum安装时，会自动安装apache和php的依赖。</span>
<span class="token comment"># 注意： phpldapadmin很多没更新了，只支持php5，如果你服务器的环境是php7，则会有问题，页面会有各种报错</span>
yum <span class="token function">install</span> -y phpldapadmin
 
<span class="token comment"># 修改apache的phpldapadmin配置文件</span>
<span class="token comment"># 修改如下内容，放开外网访问，这里只改了2.4版本的配置，因为centos7 默认安装的apache为2.4版本。所以只需要改2.4版本的配置就可以了</span>
<span class="token comment"># 如果不知道自己apache版本，执行 rpm -qa|grep httpd 查看apache版本</span>
 
<span class="token function">vim</span> /etc/httpd/conf.d/phpldapadmin.conf
-----------------------------------------------------------------
  <span class="token operator">&lt;</span>IfModule mod_authz_core.c<span class="token operator">></span>
    <span class="token comment"># Apache 2.4</span>
    Require all granted
  <span class="token operator">&lt;</span>/IfModule<span class="token operator">></span>
-----------------------------------------------------------------
 
 
<span class="token comment"># 修改配置用DN登录ldap</span>
<span class="token function">vim</span> /etc/phpldapadmin/config.php
-----------------------------------------------------------------
<span class="token comment"># 398行，默认是使用uid进行登录，我这里改为cn，也就是用户名</span>
<span class="token variable">$servers</span>-<span class="token operator">></span>setValue<span class="token punctuation">(</span>‘login’,‘attr’,‘dn’<span class="token punctuation">)</span><span class="token punctuation">;</span>
// <span class="token variable">$servers</span>-<span class="token operator">></span>setValue<span class="token punctuation">(</span>‘login’,‘attr’,‘uid’<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment"># 460行，关闭匿名登录，否则任何人都可以直接匿名登录查看所有人的信息</span>
<span class="token variable">$servers</span>-<span class="token operator">></span>setValue<span class="token punctuation">(</span><span class="token string">'login'</span>,<span class="token string">'anon_bind'</span>,false<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment"># 519行，设置用户属性的唯一性，这里我将cn,sn加上了，以确保用户名的唯一性</span>
<span class="token variable">$servers</span>-<span class="token operator">></span>setValue<span class="token punctuation">(</span><span class="token string">'unique'</span>,<span class="token string">'attrs'</span>,array<span class="token punctuation">(</span><span class="token string">'mail'</span>,<span class="token string">'uid'</span>,<span class="token string">'uidNumber'</span>,<span class="token string">'cn'</span>,<span class="token string">'sn'</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
-----------------------------------------------------------------
 
 
<span class="token comment"># 启动apache</span>
systemctl start httpd
systemctl <span class="token builtin class-name">enable</span> httpd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>登录phpldapadmin界面</p>
<p>上一步，启动了apache服务后，在浏览器上访问: http://ip/ldapadmin ，然后使用上面定义的用户，进行登录，如下：</p>
<p><img src="images/image-20191210175624957.png" alt="image-20191210175624957" loading="lazy">
OK，到此openldap和phpldapadmin 就安装完成了</p>
<blockquote>
<p>参考链接：</p>
<p>https://blog.csdn.net/weixin_41004350/article/details/89521170</p>
<p>openldap系列文章：</p>
<p>https://www.ilanni.com/?tag=openldap</p>
</blockquote>
</template>
