1. 下载rpm包

   ```
   wget http://mirrors.tuna.tsinghua.edu.cn/elasticstack/yum/elastic-7.x/7.8.0/filebeat-7.8.0-x86_64.rpm
   rpm -ivh filebeat-7.8.0-x86_64.rpm 
   ```

​	2. 修改启动项

centos7安装filebeat需要注意修改`/usr/lib/systemd/system/filebeat.service`

```
[Unit]
Description=Filebeat sends log files to Logstash or directly to Elasticsearch.
Documentation=https://www.elastic.co/products/beats/filebeat
Wants=network-online.target
After=network-online.target

[Service]

Environment="BEAT_LOG_OPTS"
Environment="BEAT_CONFIG_OPTS=-c /etc/filebeat/filebeat.yml"
Environment="BEAT_PATH_OPTS=-path.home /usr/share/filebeat -path.config /etc/filebeat -path.data /var/lib/filebeat -path.logs /var/log/filebeat"
ExecStart=/usr/share/filebeat/bin/filebeat $BEAT_LOG_OPTS $BEAT_CONFIG_OPTS $BEAT_PATH_OPTS
Restart=always

[Install]
WantedBy=multi-user.target
```

> 主要修改的地方为：
>
> * Environment="BEAT_LOG_OPTS=-e"  改为 Environment="BEAT_LOG_OPTS" 
> * ExecStart=/usr/share/filebeat/bin/filebeat $BEAT_LOG_OPTS $BEAT_CONFIG_OPTS $BEAT_PATH_OPTS 改为ExecStart=/usr/share/filebeat/bin/filebeat $BEAT_LOG_OPTS $BEAT_CONFIG_OPTS $BEAT_PATH_OPTS

3. 修改配置文件
4. 启动

> es 的index名称 只能为小写字母
>
> 主要index命名规范