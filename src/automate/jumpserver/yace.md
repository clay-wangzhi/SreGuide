---
category: 自动化工具
tag:
  - jumpserver
---

## 控制资产登录时间

创建 修改 登录时间的脚步 `jump.sh`

```bash
#!/bin/bash

#pro-jumpserver
username="root"
passwd="xxx"
host="localhost"
dbname="jumpserver"

date1=`date +%Y-%m-%d`
date2=`date +%Y-%m-%d --date="+1 day"`
date_start="$date1 12:00:00"
date_expired="$date2 00:00:00"
NAME="xx-xx;xx-xx"

OLDIFS=$IFS
IFS=$';'

for name in $NAME
do
docker exec -i jms_mysql mysql -u$username -h$host -p$passwd $dbname -e "update perms_assetpermission set date_start=STR_TO_DATE('$date_start','%Y-%m-%d %H:%i:%s') where name='$name';"
docker exec -i jms_mysql mysql -u$username -h$host -p$passwd $dbname -e "update perms_assetpermission set date_expired=STR_TO_DATE('$date_expired','%Y-%m-%d %H:%i:%s') where name='$name';"
done
```

> Tips: 通过计划任务执行脚本 使用 docker exec -i ，不要分配 tty, -it
>
> 思考：直接修改数据库 合适，还是调用 api 修改 合适

