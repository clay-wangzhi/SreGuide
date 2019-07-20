## logstash安装注意

在 /etc/sysconfig/logstash中添加对JAVA_HOME的配置

```
# cat /etc/sysconfig/logstash 
JAVA_HOME=/opt/jdk1.8.0_144
# source /etc/sysconfig/logstash 
```

文件权限所属组是不是logstash







```
/usr/share/logstash/bin/logstash -e "input {stdin{}} output{stdout{codec=>rubydebug}}"
等价于：
/usr/share/logstash/bin/logstash -e ""
```