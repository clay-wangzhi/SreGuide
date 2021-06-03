---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# 8 Jenkins 常见问题

## Jenkins报错Error cloning remote repo 'origin'

Jenkins配置了2个节点，但是只有master安装了git，很有可能任务被调到slave上执行所以报错

解决办法

- slave安装git
- 指定任务在master执行

## jenkins添加从节点失败

jenkins在添加从节点时
可以在启动方式中选择：Non verifying Verification Strategy

## Jenkins配置ldap错误导致无法登陆的问题

为了方便用户管理，通过ldap集中式认证，让Gitlab和Jenkins都接入，这样就省去每个系统都是要创建用户的麻烦了。上一篇[Jenkins整合ldap认证](https://www.58jb.com/html/121.html)的文章中有网友发邮件说了，配置不当导致Jenkins无法登陆，可能文章未能详细说明。

运维人员都会有这样的操作，修改任何配置文件前都会来一个备份。就是确保万一出错了可以回到之前的状态。所以建议就是Jenkins配置的问题，特别是这个登陆认证的配置，一搞错了就无法登陆。甚至无法正常访问到系统。
默认Centos7使用rpm安装的目录为：/var/lib/jenkins/

备份配置文件：config.xml

```
[root@jenkins ~]# cp /var/lib/jenkins/config.xml{,$(date +%F)}
[root@jenkins ~]# ls /var/lib/jenkins/config.xml
config.xml            config.xml2019-06-12
```

然后在config.xml配置文件中找到这段关于ldap认证的信息：

```
  <securityRealm class="hudson.security.LDAPSecurityRealm" plugin="ldap@1.20">
    <disableMailAddre***esolver>false</disableMailAddre***esolver>
    <configurations>
      <jenkins.security.plugins.ldap.LDAPConfiguration>
        <server>ldap://XXXXXX.com:389</server>
        <rootDN>dc=XXXXXX,dc=com</rootDN>
        <inhibitInferRootDN>false</inhibitInferRootDN>
        <userSearchBase></userSearchBase>
        <userSearch>uid={0}</userSearch>
        <groupMembershipStrategy class="jenkins.security.plugins.ldap.FromGroupSearchLDAPGroupMembershipStrategy">
          <filter>cn=jenkins</filter>
        </groupMembershipStrategy>
        <managerDN>uid=jarry,ou=People,dc=XXXXXX,dc=com</managerDN>
        <managerPasswordSecret>{AQAAABAAAAAQWfZrb7qoIjewuj3SK/z53/oRo86cW5wi/t07QeW/4mM=}</managerPasswordSecret>
        <displayNameAttributeName>uid</displayNameAttributeName>
        <mailAddressAttributeName>mail</mailAddressAttributeName>
        <ignoreIfUnavailable>false</ignoreIfUnavailable>
        <extraEnvVars class="linked-hash-map">
          <entry>
            <string></string>
            <string></string>
          </entry>
        </extraEnvVars>
      </jenkins.security.plugins.ldap.LDAPConfiguration>
    </configurations>
    <userIdStrategy class="jenkins.model.IdStrategy$CaseInsensitive"/>
    <groupIdStrategy class="jenkins.model.IdStrategy$CaseInsensitive"/>
    <disableRolePrefixing>true</disableRolePrefixing>
  </securityRealm>
```

上面的配置不当导致了无法通过ldap认证，而且导致jenkins也无法正常登陆了，可以把上面一段修改成以下样子：

```
   <securityRealm class="hudson.security.HudsonPrivateSecurityRealm">
     <disableSignup>false</disableSignup>
     <enableCaptcha>false</enableCaptcha>
   </securityRealm>
```



文章来源：https://www.58jb.com/html/jenkins_ldap_login_failure.html
