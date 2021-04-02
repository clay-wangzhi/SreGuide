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

```bash
 ansible logstash -m shell -a "export JAVA_HOME=/opt/jdk1.8.0_144;rpm -ivh /opt/logstash-7.7.1.rpm"
ansible logstash -m shell -a 'echo "JAVA_HOME=/opt/jdk1.8.0_144" > /etc/sysconfig/logstash '
 ansible logstash -m shell -a 'sed -i "s#1g#4g#g" /etc/logstash/jvm.options'
ansible logstash -m shell -a "systemctl enable logstash;systemctl start logstash"

```

