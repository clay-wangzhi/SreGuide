---
title: Linux账户密码过期安全策略设置
tag: linux安全
abbrlink: 2cec9567
date: 2017-09-04 21:00:00
---

在Linux系统管理中，有时候需要设置账号密码复杂度（长度）、密码过期策略等，这个主要是由/etc/login.defs参数文件中的一些参数控制的的。它主要用于用户账号限制，里面的参数主要有下面一些：

<!--more-->

**/etc/login.defs:**

```
# Password aging controls:
#
#       PASS_MAX_DAYS   Maximum number of days a password may be used.
#       PASS_MIN_DAYS   Minimum number of days allowed between password changes.
#       PASS_MIN_LEN    Minimum acceptable password length.
#       PASS_WARN_AGE   Number of days warning given before a password expires.

PASS_MAX_DAYS 60      #密码最大有效期，此处参数PASS_MAX_DAYS为60，表示60天后，密码会过期。99999表示永不过期。
PASS_MIN_DAYS 0      #两次修改密码的最小间隔时间，0表示可以随时修改账号密码
PASS_MIN_LEN  8      #密码最小长度，对于root无效
PASS_WARN_AGE 7      #密码过期前多少天开始提示

#
# Min/max values for automatic uid selection in useradd
#
UID_MIN                   500
UID_MAX                 60000

UID_MIN    #用户ID的最小值
UID_MAX    #用户ID的最大值

#
# Min/max values for automatic gid selection in groupadd
#
GID_MIN                   500
GID_MAX                 60000

GID_MIN    #组ID最小值
GID_MAX    #组ID最大值

#
# If defined, this command is run when removing a user.
# It should remove any at/cron/print jobs etc. owned by
# the user to be removed (passed as the first argument).
#
#USERDEL_CMD    /usr/sbin/userdel_local

USERDEL_CMD    #默认注释状态，如果定义了该变量，表示当删除一个user时，应删除/打印/ cron的工作等所拥有的用户被删除（作为第一个参数传递）。

#
# If useradd should create home directories for users by default
# On RH systems, we do. This option is overridden with the -m flag on
# useradd command line.
#
CREATE_HOME     yes

CREATE_HOME  #表示是否创建用户home目录。

# The permission mask is initialized to this value. If not specified, 
# the permission mask will be initialized to 022.
UMASK           077

UMASK     #权限掩码初始化值

# This enables userdel to remove user groups if no members exist.
#
USERGROUPS_ENAB yes

USERGROUPS_ENAB   #该参数启用，表示userdel删除用户时，如果该用户用户组如果没有成员存在，则会删除该用户组

# Use MD5 or DES to encrypt password? Red Hat use MD5 by default.
MD5_CRYPT_ENAB yes

ENCRYPT_METHOD MD5   

ENCRYPT_METHOD  #表示用户密码加密方式，此处表示用MD5加密密码
```

修改了 /etc/login.defs下参数时，会立即生效，但是它只对修改后创建的用户生效。例如修改了PASS_MAX_DAYS参数等后，我们新建一个用户test。

![](/images/anquan1.png)

```
# useradd test
# cat /etc/shadow | grep test
test:!!:16971:0:60:7:::
# cat /etc/passwd | grep test
test:x:501:501::/home/test:/bin/bash
# chage -l test
Last password change                                    : Jun 19, 2016
Password expires                                        : Aug 18, 2016
Password inactive                                       : never
Account expires                                         : never
Minimum number of days between password change          : 0
Maximum number of days between password change          : 60
Number of days of warning before password expires       : 7
```

因为CREATE_HOME为yes，所以创建用户test后，就会默认在/home目录下创建test目录，这个可以在添加用户的规则文件/etc/default/useradd里面查看或修改

```
# cat /etc/default/useradd
# useradd defaults file
GROUP=100
HOME=/home        #把用户的主目录建在/home中
INACTIVE=-1       #是否启用帐号过期停权，-1表示不启用
EXPIRE=           #帐号终止日期，不设置表示不启用；
SHELL=/bin/bash   #所用SHELL的类型；
SKEL=/etc/skel    #默认添加用户的目录默认文件存放位置；也就是说，当我们用adduser添加用户时，用户家目录下的文件，都是从这个目录中复制过去的
CREATE_MAIL_SPOOL=yes
```

如果此时，假如用户test有特殊需求，要求这个账号的密码永不过期，此时就可以使用chage命令来处理（关于chage命令，此处不做展开）

```
# chage -l test
Last password change                                    : Jun 19, 2016
Password expires                                        : Aug 18, 2016
Password inactive                                       : never
Account expires                                         : never
Minimum number of days between password change          : 0
Maximum number of days between password change          : 60
Number of days of warning before password expires       : 7
You have new mail in /var/spool/mail/root
# chage -M 99999 test
# chage -l test
Last password change                                    : Jun 19, 2016
Password expires                                        : never
Password inactive                                       : never
Account expires                                         : never
Minimum number of days between password change          : 0
Maximum number of days between password change          : 99999
Number of days of warning before password expires       : 7
```

如上所示/etc/login.defs只是控制了账号的最小长度以及控制密码的有效期等，那么Linux是如何实现对用户的密码的复杂度的检查的呢？其实系统对密码的控制是有两部分组成： 

1 cracklib 

2 /etc/login.defs 

pam_cracklib.so 才是控制密码复杂度的关键文件/lib/security/pam_cracklib.so， Redhat公司专门开发了cracklib这个安装包来判断密码的复杂度。如果你想查看pam_cracklib的一些参数，那么就使用下面命令 

```
# man pam_cracklib
其中一些常见的参数为

retry=N
改变输入密码的次数，默认值是1。就是说，如果用户输入的密码强度不够就退出。可以使用这个选项设置输入的次数，以免一切都从头再来
              Prompt user at most N times before returning with error. The
              default is 1
minlen=N
新密码最低可接受的长度

              The minimum acceptable size for the new password (plus one if
              credits are not disabled which is the default). In addition to the
              number of characters in the new password, credit (of +1 in length)
              is given for each different kind of character (other, upper, lower
              and digit). The default for this parameter is 9 which is good for a
              old style UNIX password all of the same type of character but may
              be too low to exploit the added security of a md5 system. Note that
              there is a pair of length limits in Cracklib itself, a "way too
              short" limit of 4 which is hard coded in and a defined limit (6)
              that will be checked without reference to minlen. If you want to
              allow passwords as short as 5 characters you should not use this
              module.
difok=N
默认值为10。这个参数设置允许的新、旧密码相同字符的个数。不过，如果新密码中1/2的字符和旧密码不同，则新密码被接受
              This argument will change the default of 5 for the number of
              characters in the new password that must not be present in the old
              password. In addition, if 1/2 of the characters in the new password
              are different then the new password will be accepted anyway.
              
dcredit=N
限制新密码中至少有多少个数字

              (N >= 0) This is the maximum credit for having digits in the new
              password. If you have less than or N digits, each digit will count
              +1 towards meeting the current minlen value. The default for
              dcredit is 1 which is the recommended value for minlen less than
              10.
              
              (N < 0) This is the minimum number of digits that must be met for a
              new password.
              
ucredit=N
限制新密码中至少有多少个大写字符。

lcredit=N
限制新密码中至少有多少个小写字符。
```

例如在/etc/pam.d/system-auth 在password使用pam_cracklib.so设置的最后附加dcredit=3 ucredit=2 

```
password    requisite     pam_cracklib.so try_first_pass retry=3 dcredit=3 ucredit=2
password    sufficient    pam_unix.so md5 shadow nullok try_first_pass use_authtok
password    required      pam_deny.so
```

此时如果你新建用户的密码不符合密码复杂度，就会出现BAD PASSWORD: it is based on a dictionary word提示。

```
# passwd ttt
Changing password for user ttt.
New UNIX password: 
BAD PASSWORD: it is based on a dictionary word
```

转载链接：

http://www.cnblogs.com/kerrycode/p/5600525.html