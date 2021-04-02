由于我的`jenkins`和`ansible`没有安装在一台主机上，所以，现在利用`rsync+inotify`实现`jenkins`的工作目录，同步到`ansible`主机上

环境如下：

inotify-master IP :192.168.162.175

inotify-slave IP:192.168.162.119

## 1 inotify slave部署

### 1.1 安装rsync

```
yum install rsync –y
```

### 1.2  添加用户和模块目录，并更改用户和组

```
useradd rsync –s /sbin/nologin –M
mkdir -p /var/lib/jenkins/workspace
chown rsync.rsync /var/lib/jenkins/workspace
```

### 1.3 修改配置文件`/etc/rsyncd.conf`

内容如下：

```
# egrep -v "^#|^$" /etc/rsyncd.conf
uid = rsync
gid = rsync
use chroot = no
max connections = 200
timeout = 300
fake super = yes 
pid file = /var/run/rsyncd.pid
lock file = /var/run/rsync.lock
log file = /var/log/rsyncd.log
ignore errors
read only = false
list = false
hosts allow = 192.168.162.0/24
auth users = rsync_backup
secrets file = /etc/rsync.password
[jenkinsbackup]
comment = "jenkinsbackup dir by clay"
path = /var/lib/jenkins/workspace
```

### 1.4 配置虚拟用户的密码文件

```
# cat rsync.password 
rsync_backup:clay123
# chmod 600 /etc/rsync.password 
# rsync --daemon
```

## 2 inotify master部署

### 2.1 安装inotify 3.14

```
# cd /opt
# wget http://github.com/downloads/rvoicilas/inotify-tools/inotify-tools-3.14.tar.gz
# tar zxf inotify-tools-3.14.tar.gz
# cd inotify-tools-3.14
# ./configure --prefix=/usr/local/inotify
# make && sudo make install
```

### 2.2 创建rsync服务的密码文件

```
# cat /etc/rsync.password 
clay123
# chmod 600 /etc/rsync.password
```

### 2.3 编写执行脚本

`vim /usr/local/inotify.sh`

```
#!/bin/bash
HOST=192.168.162.119
SRC=/var/lib/jenkins/workspace
DEST=jenkinsbackup
USER=rsync_backup
RSYNC_PASSFILE=/etc/rsync.password
INOTIFY_HMOE=/usr/local/inotify

if [ ! -e "${SRC}" ] \
  || [ ! -e "${RSYNC_PASSFILE}" ] \
  || [ ! -e "${INOTIFY_HMOE}/bin/inotifywait" ] \
  || [ ! -e "/usr/bin/rsync" ]; then
  echo "Check File and Folder"
  exit 1
fi

${INOTIFY_HMOE}/bin/inotifywait -mrq --timefmt '%d/%m/%y %H:%M' \
  --format '%T %w%f' -e close_write,delete,create,attrib ${SRC} \
  | while read file; do
  cd ${SRC}
  rsync -aruz -R --delete ./  --timeout=100 ${USER}@${HOST}::${DEST} \
    --password-file=${RSYNC_PASSFILE} >/dev/null 2>&1
done
exit 0
```

### 2.4 将脚本加入后台执行

```
# sh inotify.sh &
```

>主要参考链接：https://www.cnblogs.com/jefflee168/p/6795201.html
>
> 补充链接：https://www.cnblogs.com/clsn/p/7707822.html