---
tags:
  - openldap
---

# Centos7 搭建openldap

环境：

* centos7.6

* openldap 2.4.44

* phpldapadmin 1.2.3

## 安装openldap

yum 安装相关包

```shell
yum install -y openldap openldap-clients openldap-servers
```

复制一个默认配置到指定目录下,并授权，这一步一定要做，然后再启动服务，不然生产密码时会报错

```shell
cp /usr/share/openldap-servers/DB_CONFIG.example /var/lib/ldap/DB_CONFIG
```

授权给ldap用户,此用户yum安装时便会自动创建

```
chown -R ldap. /var/lib/ldap/DB_CONFIG
```

启动&加入开机自启
```shell
systemctl start slapd
systemctl enable slapd
systemctl status slapd
```

##  修改openldap配置

 这里就是重点中的重点了，从openldap2.4.23版本开始，所有配置都保存在/etc/openldap/slapd.d目录下的cn=config文件夹内，不再使用slapd.conf作为配置文件。配置文件的后缀为 ldif，且每个配置文件都是通过命令自动生成的，任意打开一个配置文件，在开头都会有一行注释，说明此为自动生成的文件，请勿编辑，使用ldapmodify命令进行修改

```
AUTO-GENERATED FILE - DO NOT EDIT!! Use ldapmodify.
```

 安装openldap后，会有三个命令用于修改配置文件，分别为ldapadd, ldapmodify, ldapdelete，顾名思义就是添加，修改和删除。而需要修改或增加配置时，则需要先写一个ldif后缀的配置文件，然后通过命令将写的配置更新到slapd.d目录下的配置文件中去，完整的配置过程如下，跟着我做就可以了：

1. 生成管理员密码,记录下这个密码，后面需要用到

```shell
# slappasswd -s 123456
{SSHA}LSgYPTUW4zjGtIVtuZ8cRUqqFRv1tWpE
```

> 密码目前只能是123456，设置其他的还是123456，不清楚原因目前

新增修改密码文件,ldif为后缀，文件名随意，不要在/etc/openldap/slapd.d/目录下创建类似文件

 生成的文件为需要通过命令去动态修改ldap现有配置，如下，我在家目录下，创建文件

```
# cd ~
# vim changepwd.ldif
dn: olcDatabase={0}config,cn=config
changetype: modify
add: olcRootPW
olcRootPW: {SSHA}LSgYPTUW4zjGtIVtuZ8cRUqqFRv1tWpE
# ldapadd -Y EXTERNAL -H ldapi:/// -f changepwd.ldif
```

这里解释一下这个文件的内容：

* 第一行执行配置文件，这里就表示指定为 cn=config/olcDatabase={0}config 文件。你到/etc/openldap/slapd.d/目录下就能找到此文件
* 第二行 changetype 指定类型为修改
* 第三行 add 表示添加 olcRootPW 配置项
* 第四行指定 olcRootPW 配置项的值

在执行下面的命令前，你可以先查看原本的olcDatabase={0}config文件，里面是没有olcRootPW这个项的，执行命令后，你再看就会新增了olcRootPW项，而且内容是我们文件中指定的值加密后的字符串。

执行修改命令后，有如下输出则为正常：

![img](images/20190426144821449.png)

查看olcDatabase={0}config内容,新增了一个olcRootPW项。

![img](images/20190426145019794.png)

上面就是一个完整的修改配置的过程，切记不能直接修改/etc/openldap/slapd.d/目录下的配置。

2. 我们需要向 LDAP 中导入一些基本的 Schema。

这些 Schema 文件位于 /etc/openldap/schema/ 目录中，schema控制着条目拥有哪些对象类和属性，可以自行选择需要的进行导入。

依次执行下面的命令，导入基础的一些配置,我这里将所有的都导入一下，其中core.ldif是默认已经加载了的，不用导入。



```shell
ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/cosine.ldif
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
```

修改域名，新增changedomain.ldif, 这里我自定义的域名为 schengle.com，管理员用户账号为admin。

如果要修改，则修改文件中相应的dc=schengle,dc=com为自己的域名。

```
# vim changedomain.ldif
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
```

最后这里有5个修改，所以执行会输出5行表示成功。

![img](images/20190426161145765.png)

3. 启用memberof功能

 新增add-memberof.ldif, 开启memberof支持并新增用户支持memberof配置

```
# vim add-memberof.ldif
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
```

 依次执行下面命令，加载配置，顺序不能错

```
ldapadd -Q -Y EXTERNAL -H ldapi:/// -f add-memberof.ldif
ldapmodify -Q -Y EXTERNAL -H ldapi:/// -f refint1.ldif
ldapadd -Q -Y EXTERNAL -H ldapi:/// -f refint2.ldif
```

4. 创建组织和组织单元

我们来创建一个叫做 schengle company 的组织，并在其下创建一个 admin 的组织角色（该组织角色内的用户具有管理整个 LDAP 的权限）和 People 和 Group 两个组织单元：

```shell
# vim base.ldif
dn: dc=schengle,dc=com
objectClass: top
objectClass: dcObject
objectClass: organization
o: Schengle Company
dc: schengle
 
dn: cn=admin,dc=schengle,dc=com
objectClass: organizationalRole
cn: admin
 
dn: ou=People,dc=schengle,dc=com
objectClass: organizationalUnit
ou: People
 
dn: ou=Group,dc=schengle,dc=com
objectClass: organizationalRole
cn: Group
```

>一共执行4次下面的命令，要不然会失败，每次只执行一段

执行命令，添加配置, 这里要注意修改域名为自己配置的域名，然后需要输入上面我们生成的密码

```
ldapadd -x -D cn=admin,dc=schengle,dc=com -W -f base.ldif
```

通过以上的所有步骤，我们就设置好了一个 LDAP 目录树：其中基准 dc=schengle,dc=com 是该树的根节点，其下有一个管理域 cn=admin,dc=schengle,dc=com 和两个组织单元 ou=People,dc=schengle,dc=com 及 ou=Group,dc=schengle,dc=com。

## 安装phpldapadmin

  ldap装好后，下面安装web界面phpldapadmin。登录phpldapadmin界面

```shell
# yum安装时，会自动安装apache和php的依赖。
# 注意： phpldapadmin很多没更新了，只支持php5，如果你服务器的环境是php7，则会有问题，页面会有各种报错
yum install -y phpldapadmin
 
# 修改apache的phpldapadmin配置文件
# 修改如下内容，放开外网访问，这里只改了2.4版本的配置，因为centos7 默认安装的apache为2.4版本。所以只需要改2.4版本的配置就可以了
# 如果不知道自己apache版本，执行 rpm -qa|grep httpd 查看apache版本
 
vim /etc/httpd/conf.d/phpldapadmin.conf
-----------------------------------------------------------------
  <IfModule mod_authz_core.c>
    # Apache 2.4
    Require all granted
  </IfModule>
-----------------------------------------------------------------
 
 
# 修改配置用DN登录ldap
vim /etc/phpldapadmin/config.php
-----------------------------------------------------------------
# 398行，默认是使用uid进行登录，我这里改为cn，也就是用户名
$servers->setValue(‘login’,‘attr’,‘dn’);
// $servers->setValue(‘login’,‘attr’,‘uid’);
 
# 460行，关闭匿名登录，否则任何人都可以直接匿名登录查看所有人的信息
$servers->setValue('login','anon_bind',false);
 
# 519行，设置用户属性的唯一性，这里我将cn,sn加上了，以确保用户名的唯一性
$servers->setValue('unique','attrs',array('mail','uid','uidNumber','cn','sn'));
-----------------------------------------------------------------
 
 
# 启动apache
systemctl start httpd
systemctl enable httpd
```

登录phpldapadmin界面

上一步，启动了apache服务后，在浏览器上访问: http://ip/ldapadmin ，然后使用上面定义的用户，进行登录，如下：

![image-20191210175624957](images/image-20191210175624957.png)
OK，到此openldap和phpldapadmin 就安装完成了

>参考链接：
>
>https://blog.csdn.net/weixin_41004350/article/details/89521170
>
>openldap系列文章：
>
>https://www.ilanni.com/?tag=openldap