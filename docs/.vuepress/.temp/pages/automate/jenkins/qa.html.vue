<template><h1 id="_8-jenkins-常见问题" tabindex="-1"><a class="header-anchor" href="#_8-jenkins-常见问题" aria-hidden="true">#</a> 8 Jenkins 常见问题</h1>
<h2 id="jenkins报错error-cloning-remote-repo-origin" tabindex="-1"><a class="header-anchor" href="#jenkins报错error-cloning-remote-repo-origin" aria-hidden="true">#</a> Jenkins报错Error cloning remote repo 'origin'</h2>
<p>Jenkins配置了2个节点，但是只有master安装了git，很有可能任务被调到slave上执行所以报错</p>
<p>解决办法</p>
<ul>
<li>slave安装git</li>
<li>指定任务在master执行</li>
</ul>
<h2 id="jenkins添加从节点失败" tabindex="-1"><a class="header-anchor" href="#jenkins添加从节点失败" aria-hidden="true">#</a> jenkins添加从节点失败</h2>
<p>jenkins在添加从节点时
可以在启动方式中选择：Non verifying Verification Strategy</p>
<h2 id="jenkins配置ldap错误导致无法登陆的问题" tabindex="-1"><a class="header-anchor" href="#jenkins配置ldap错误导致无法登陆的问题" aria-hidden="true">#</a> Jenkins配置ldap错误导致无法登陆的问题</h2>
<p>为了方便用户管理，通过ldap集中式认证，让Gitlab和Jenkins都接入，这样就省去每个系统都是要创建用户的麻烦了。上一篇<a href="https://www.58jb.com/html/121.html" target="_blank" rel="noopener noreferrer">Jenkins整合ldap认证<ExternalLinkIcon/></a>的文章中有网友发邮件说了，配置不当导致Jenkins无法登陆，可能文章未能详细说明。</p>
<p>运维人员都会有这样的操作，修改任何配置文件前都会来一个备份。就是确保万一出错了可以回到之前的状态。所以建议就是Jenkins配置的问题，特别是这个登陆认证的配置，一搞错了就无法登陆。甚至无法正常访问到系统。
默认Centos7使用rpm安装的目录为：/var/lib/jenkins/</p>
<p>备份配置文件：config.xml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@jenkins ~]# cp /var/lib/jenkins/config.xml{,$(date +%F)}
[root@jenkins ~]# ls /var/lib/jenkins/config.xml
config.xml            config.xml2019-06-12
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>然后在config.xml配置文件中找到这段关于ldap认证的信息：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  &lt;securityRealm class="hudson.security.LDAPSecurityRealm" plugin="ldap@1.20">
    &lt;disableMailAddre***esolver>false&lt;/disableMailAddre***esolver>
    &lt;configurations>
      &lt;jenkins.security.plugins.ldap.LDAPConfiguration>
        &lt;server>ldap://XXXXXX.com:389&lt;/server>
        &lt;rootDN>dc=XXXXXX,dc=com&lt;/rootDN>
        &lt;inhibitInferRootDN>false&lt;/inhibitInferRootDN>
        &lt;userSearchBase>&lt;/userSearchBase>
        &lt;userSearch>uid={0}&lt;/userSearch>
        &lt;groupMembershipStrategy class="jenkins.security.plugins.ldap.FromGroupSearchLDAPGroupMembershipStrategy">
          &lt;filter>cn=jenkins&lt;/filter>
        &lt;/groupMembershipStrategy>
        &lt;managerDN>uid=jarry,ou=People,dc=XXXXXX,dc=com&lt;/managerDN>
        &lt;managerPasswordSecret>{AQAAABAAAAAQWfZrb7qoIjewuj3SK/z53/oRo86cW5wi/t07QeW/4mM=}&lt;/managerPasswordSecret>
        &lt;displayNameAttributeName>uid&lt;/displayNameAttributeName>
        &lt;mailAddressAttributeName>mail&lt;/mailAddressAttributeName>
        &lt;ignoreIfUnavailable>false&lt;/ignoreIfUnavailable>
        &lt;extraEnvVars class="linked-hash-map">
          &lt;entry>
            &lt;string>&lt;/string>
            &lt;string>&lt;/string>
          &lt;/entry>
        &lt;/extraEnvVars>
      &lt;/jenkins.security.plugins.ldap.LDAPConfiguration>
    &lt;/configurations>
    &lt;userIdStrategy class="jenkins.model.IdStrategy$CaseInsensitive"/>
    &lt;groupIdStrategy class="jenkins.model.IdStrategy$CaseInsensitive"/>
    &lt;disableRolePrefixing>true&lt;/disableRolePrefixing>
  &lt;/securityRealm>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>上面的配置不当导致了无法通过ldap认证，而且导致jenkins也无法正常登陆了，可以把上面一段修改成以下样子：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   &lt;securityRealm class="hudson.security.HudsonPrivateSecurityRealm">
     &lt;disableSignup>false&lt;/disableSignup>
     &lt;enableCaptcha>false&lt;/enableCaptcha>
   &lt;/securityRealm>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>文章来源：https://www.58jb.com/html/jenkins_ldap_login_failure.html</p>
</template>
