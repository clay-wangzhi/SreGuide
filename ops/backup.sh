#!/bin/bash
[ -d "bak/`date +%Y%m%d`" ] || mkdir -p bak/`date +%Y%m%d`
read -p "请输入要备份的项目名称：" Project
cp -r webapps/$Project bak/`date +%Y%m%d`/$Project`date +%H%M%S`
[ $? -eq 0 ] && echo -e "\033[32m 备份完成 \033[0m" || echo -e "\033[31m 备份失败 \033[0m"
