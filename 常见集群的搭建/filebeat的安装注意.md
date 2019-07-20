## filebeat的安装注意

```
# filebeat输出到kafka中时，需要指定topic
output.kafka:
  hosts: ["192.168.165.44:9092","192.168.165.45:9092","192.168.165.48:9092"]
  topic: 'credit'
```

> 1.注意yaml文件的格式需要对齐
>
> 2.注意注释掉默认的#output.elasticsearch:

filebeat.yml配置文件

改动地方

```
filebeat.inputs:

# Each - is an input. Most options can be set at the input level, so
# you can use different inputs for various configurations.
# Below are the input specific configurations.

- type: log

  # Change to true to enable this input configuration.
  enabled: true

  # Paths that should be crawled and fetched. Glob based paths.
  paths:
    - /var/log/aa.txt

# setup.kibana:
#output.elasticsearch:
  # Array of hosts to connect to.
  # hosts: ["localhost:9200"]

  # Optional protocol and basic auth credentials.
  #protocol: "https"
  #username: "elastic"

```

enabled 改为true

setup.kibana注释掉

output.elasticsearch:下面所有东西注释掉

