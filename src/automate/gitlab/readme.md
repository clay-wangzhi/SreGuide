---
date: 2019-12-20
category: 自动化工具
tag:
  - Gitlab
---

# gitlab备份迁移升级&集成openldap

## gitlab安装

### 安装相关依赖

```shell
yum install -y curl policycoreutils-python openssh-server
yum install postfix
systemctl enable postfix
systemctl start postfix
```

### 镜像切换

切换为国内的清华源

```shell
# cat gitlab_gitlab-ce.repo 
[gitlab_gitlab-ce]
name=gitlab_gitlab-ce
baseurl=https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/
repo_gpgcheck=0
gpgcheck=0
enabled=1
```

由于不同版本号的备份文件不能相互使用，下载旧gitlab中的对应的版本

```shell
yum -y install gitlab-ce-11.5.1
```

### 配置使用

安装完成之后，可以在`/etc/gitblab/gitlab.rb`中按照需求修改配置，
主要需要修改`external_url`，改成自己使用的 url 地址。
执行命令配置生效：

```
gitlab-ctl reconfigure
gitlab-ctl restart
```

## gitlab备份&恢复

Gitlab 成功运行起来之后，最终的事情就是定期的备份，遇到问题后的还原。

### 备份配置

默认 Gitlab 的备份文件会创建在`/var/opt/gitlab/backups`文件夹中，格式为`时间戳_日期_版本号_gitlab_backup.tar`，例如：`1515031353_2018_01_04_10.3.2_gitlab_backup.tar`。
 修改备份文件夹，需要修改配置文件`/etc/gitlab/gitlab.rb`中的：

```bash
gitlab_rails['backup_path'] = '/your_wish/backups'
```

然后`gitlabctl-reconfigure`生效。

### 手动备份

命令：`gitlab-backup create`

 For GitLab 12.1 and earlier, use `gitlab-rake gitlab:backup:create`.
会在命令执行的时间点，在你配置的文件夹或者默认文件夹创建一个备份文件。

### 自动备份

```shell
0 2 * * * /opt/gitlab/bin/gitlab-backup create CRON=1
```

>**Note** For GitLab 12.1 and earlier, use `gitlab-rake gitlab:backup:create`.

### 备份恢复

First make sure your backup tar file is in the backup directory described in the `gitlab.rb` configuration `gitlab_rails['backup_path']`. The default is `/var/opt/gitlab/backups`. It needs to be owned by the `git` user.

```
cp 11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar /var/opt/gitlab/backups/
chown git.git /var/opt/gitlab/backups/11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar
```

Stop the processes that are connected to the database. Leave the rest of GitLab running:

```shell
gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq
# Verify
gitlab-ctl status
```

Next, restore the backup, specifying the timestamp of the backup you wish to restore:

```shell
# This command will overwrite the contents of your GitLab database!
gitlab-backup restore BACKUP=1493107454_2018_04_25_10.6.4-ce
```

> **Note** For GitLab 12.1 and earlier, use `gitlab-rake gitlab:backup:restore`.

> **Warning:** `gitlab-rake gitlab:backup:restore` does not set the right file system permissions on your Registry directory. This is a [known issue](https://gitlab.com/gitlab-org/gitlab-foss/issues/62759). On GitLab 12.2 or newer, you can use `gitlab-backup restore` to avoid this issue.

Next, restore `/etc/gitlab/gitlab-secrets.json` if necessary as mentioned above.

Reconfigure, restart and check GitLab:

```shell
gitlab-ctl reconfigure
gitlab-ctl restart
gitlab-rake gitlab:check SANITIZE=true
```

If there is a GitLab version mismatch between your backup tar file and the installed version of GitLab, the restore command will abort with an error. Install the [correct GitLab version](https://packages.gitlab.com/gitlab/) and try again.

## gitlab升级

It is considered safe to jump between patch versions and minor versions within one major version. For example, it is safe to:

- Upgrade the patch version:
  - `8.9.0` -> `8.9.7`
  - `8.9.0` -> `8.9.1`
  - `8.9.2` -> `8.9.6`
  - `9.5.5` -> `9.5.9`
  - `10.6.3` -> `10.6.6`
  - `11.11.1` -> `11.11.8`
  - `12.0.4` -> `12.0.9`
- Upgrade the minor version:
  - `8.9.4` -> `8.12.3`
  - `9.2.3` -> `9.5.5`
  - `10.6.6` -> `10.8.7`
  - `11.3.4` -> `11.11.8`

Upgrading the major version requires more attention. We cannot guarantee that upgrading between major versions will be seamless. As previously mentioned, major versions are reserved for backwards incompatible changes. We recommend that you first upgrade to the latest available minor version within your major version. By doing this, you can address any deprecation messages that could change behavior in the next major release. To ensure background migrations are successful, increment by one minor version during the version jump before installing newer releases.

For example: `11.11.x` -> `12.0.x` Please see the table below for some examples:

| Latest stable version | Your version | Recommended upgrade path                                 | Note                                                         |
| :-------------------- | :----------- | :------------------------------------------------------- | :----------------------------------------------------------- |
| 9.4.5                 | 8.13.4       | `8.13.4` -> `8.17.7` -> `9.4.5`                          | `8.17.7` is the last version in version `8`                  |
| 10.1.4                | 8.13.4       | `8.13.4 -> 8.17.7 -> 9.5.10 -> 10.1.4`                   | `8.17.7` is the last version in version `8`, `9.5.10` is the last version in version `9` |
| 11.3.4                | 8.13.4       | `8.13.4` -> `8.17.7` -> `9.5.10` -> `10.8.7` -> `11.3.4` | `8.17.7` is the last version in version `8`, `9.5.10` is the last version in version `9`, `10.8.7` is the last version in version `10` |
| 12.5.8                | 11.3.4       | `11.3.4` -> `11.11.8` -> `12.0.9` -> `12.5.8`            | `11.11.8` is the last version in version `11`                |

我的升级路线为：表格中最后一个

每次升级直接`yum -y install gitlab-ce-版本号`就可以了

例如

```shell
yum -y install gitlab-ce-11.11.8
```

每升级一次，重载一下配置，重启一下gitlab

```shell
gitlab-ctl reconfigure
gitlab-ctl restart
```

## gitlab集成openldap

### Setting up LDAP sign-in

If you have an LDAP directory service such as Active Directory, you can configure GitLab so that your users can sign in with their LDAP credentials. Add the following to `/etc/gitlab/gitlab.rb`, edited for your server.

For GitLab Community Edition:

以下是我ldap的配置

```shell
### LDAP Settings
###! Docs: https://docs.gitlab.com/omnibus/settings/ldap.html
###! **Be careful not to break the indentation in the ldap_servers block. It is
###!   in yaml format and the spaces must be retained. Using tabs will not work.**

gitlab_rails['ldap_enabled'] = true
gitlab_rails['prevent_ldap_sign_in'] = false
gitlab_rails['ldap_servers'] = YAML.load <<-EOS
main:
  label: 'LDAP'
  host: '192.168.x.x'
  port: 389
  uid: 'cn'
  encryption: 'plain'
  bind_dn: 'cn=admin,dc=xxx,dc=com'
  password: 'xxx'
  smartcard_auth: false
  active_directory: true
  allow_username_or_email_login: true
  lowercase_usernames: false
  base: 'ou=People,dc=xxx,dc=com'
  user_filter: ''
EOS
```

```shell
gitlab-ctl reconfigure
gitlab-ctl restart
```



> 参考文章：
>
> https://www.jianshu.com/p/d29c332bcf53
>
> https://docs.gitlab.com/ee/raketasks/backup_restore.html#restore-for-omnibus-gitlab-installations
>
> https://www.jianshu.com/p/6361cba123a8
>
> https://docs.gitlab.com/ee/policy/maintenance.html#upgrade-recommendations
>
> https://docs.gitlab.com/omnibus/settings/ldap.html
>
> https://www.jianshu.com/p/083cf462fed4
