import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as a,c as r,a as n,b as e,d,e as i}from"./app-10bfa633.js";const o={},c=i('<h1 id="_8-jenkins-常见问题" tabindex="-1"><a class="header-anchor" href="#_8-jenkins-常见问题" aria-hidden="true">#</a> 8 Jenkins 常见问题</h1><h2 id="jenkins报错error-cloning-remote-repo-origin" tabindex="-1"><a class="header-anchor" href="#jenkins报错error-cloning-remote-repo-origin" aria-hidden="true">#</a> Jenkins报错Error cloning remote repo &#39;origin&#39;</h2><p>Jenkins配置了2个节点，但是只有master安装了git，很有可能任务被调到slave上执行所以报错</p><p>解决办法</p><ul><li>slave安装git</li><li>指定任务在master执行</li></ul><h2 id="jenkins添加从节点失败" tabindex="-1"><a class="header-anchor" href="#jenkins添加从节点失败" aria-hidden="true">#</a> jenkins添加从节点失败</h2><p>jenkins在添加从节点时 可以在启动方式中选择：Non verifying Verification Strategy</p><h2 id="jenkins配置ldap错误导致无法登陆的问题" tabindex="-1"><a class="header-anchor" href="#jenkins配置ldap错误导致无法登陆的问题" aria-hidden="true">#</a> Jenkins配置ldap错误导致无法登陆的问题</h2>',8),u={href:"https://www.58jb.com/html/121.html",target:"_blank",rel:"noopener noreferrer"},g=i(`<p>运维人员都会有这样的操作，修改任何配置文件前都会来一个备份。就是确保万一出错了可以回到之前的状态。所以建议就是Jenkins配置的问题，特别是这个登陆认证的配置，一搞错了就无法登陆。甚至无法正常访问到系统。 默认Centos7使用rpm安装的目录为：/var/lib/jenkins/</p><p>备份配置文件：config.xml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@jenkins ~]# cp /var/lib/jenkins/config.xml{,$(date +%F)}
[root@jenkins ~]# ls /var/lib/jenkins/config.xml
config.xml            config.xml2019-06-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在config.xml配置文件中找到这段关于ldap认证的信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;securityRealm class=&quot;hudson.security.LDAPSecurityRealm&quot; plugin=&quot;ldap@1.20&quot;&gt;
    &lt;disableMailAddre***esolver&gt;false&lt;/disableMailAddre***esolver&gt;
    &lt;configurations&gt;
      &lt;jenkins.security.plugins.ldap.LDAPConfiguration&gt;
        &lt;server&gt;ldap://XXXXXX.com:389&lt;/server&gt;
        &lt;rootDN&gt;dc=XXXXXX,dc=com&lt;/rootDN&gt;
        &lt;inhibitInferRootDN&gt;false&lt;/inhibitInferRootDN&gt;
        &lt;userSearchBase&gt;&lt;/userSearchBase&gt;
        &lt;userSearch&gt;uid={0}&lt;/userSearch&gt;
        &lt;groupMembershipStrategy class=&quot;jenkins.security.plugins.ldap.FromGroupSearchLDAPGroupMembershipStrategy&quot;&gt;
          &lt;filter&gt;cn=jenkins&lt;/filter&gt;
        &lt;/groupMembershipStrategy&gt;
        &lt;managerDN&gt;uid=jarry,ou=People,dc=XXXXXX,dc=com&lt;/managerDN&gt;
        &lt;managerPasswordSecret&gt;{AQAAABAAAAAQWfZrb7qoIjewuj3SK/z53/oRo86cW5wi/t07QeW/4mM=}&lt;/managerPasswordSecret&gt;
        &lt;displayNameAttributeName&gt;uid&lt;/displayNameAttributeName&gt;
        &lt;mailAddressAttributeName&gt;mail&lt;/mailAddressAttributeName&gt;
        &lt;ignoreIfUnavailable&gt;false&lt;/ignoreIfUnavailable&gt;
        &lt;extraEnvVars class=&quot;linked-hash-map&quot;&gt;
          &lt;entry&gt;
            &lt;string&gt;&lt;/string&gt;
            &lt;string&gt;&lt;/string&gt;
          &lt;/entry&gt;
        &lt;/extraEnvVars&gt;
      &lt;/jenkins.security.plugins.ldap.LDAPConfiguration&gt;
    &lt;/configurations&gt;
    &lt;userIdStrategy class=&quot;jenkins.model.IdStrategy$CaseInsensitive&quot;/&gt;
    &lt;groupIdStrategy class=&quot;jenkins.model.IdStrategy$CaseInsensitive&quot;/&gt;
    &lt;disableRolePrefixing&gt;true&lt;/disableRolePrefixing&gt;
  &lt;/securityRealm&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的配置不当导致了无法通过ldap认证，而且导致jenkins也无法正常登陆了，可以把上面一段修改成以下样子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &lt;securityRealm class=&quot;hudson.security.HudsonPrivateSecurityRealm&quot;&gt;
     &lt;disableSignup&gt;false&lt;/disableSignup&gt;
     &lt;enableCaptcha&gt;false&lt;/enableCaptcha&gt;
   &lt;/securityRealm&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文章来源：https://www.58jb.com/html/jenkins_ldap_login_failure.html</p>`,8);function v(m,b){const t=s("ExternalLinkIcon");return a(),r("div",null,[c,n("p",null,[e("为了方便用户管理，通过ldap集中式认证，让Gitlab和Jenkins都接入，这样就省去每个系统都是要创建用户的麻烦了。上一篇"),n("a",u,[e("Jenkins整合ldap认证"),d(t)]),e("的文章中有网友发邮件说了，配置不当导致Jenkins无法登陆，可能文章未能详细说明。")]),g])}const f=l(o,[["render",v],["__file","qa.html.vue"]]);export{f as default};
