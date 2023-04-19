---
category: 监控
tag:
  - Zabbix
---

# 7 用zabbix api批量添加web监控

python脚本如下：

`vim zabbix_agent.py`

```python
# ~*~ coding:utf-8 ~*~
from zabbix_api import ZabbixAPI
import sys
import json

ZABBIX_SREVER = "http://192.168.162.122"
USERNAME = "Admin"
PASSWORD = "zabbix"
#HOSTNAME = "sh_ylf_15"
#HOSTNAME = "h5_web_monitor"
HOSTNAME = sys.argv[4]
urlname = sys.argv[1]
url = sys.argv[2]
delay = sys.argv[3]


# 登录
def login(ZABBIX_SREVER, USERNAME, PASSWORD):
    zapi = ZabbixAPI(ZABBIX_SREVER)
    zapi.login(USERNAME, PASSWORD)
    return zapi


# 获取主机id
def gethostid(auth, HOSTNAME):
    json_obj = ZabbixAPI.json_obj(auth, 'host.get', params={"filter": {"host": HOSTNAME}})
    request = ZabbixAPI.do_request(auth, json_obj)

    if request['result']:
        return request['result'][0]['hostid']
    else:
        print("找不到该主机")
        sys.exit(1)


# 获取应用级id
def getapplicationid(auth, hostid):
    # try:
    #     json_obj = ZabbixAPI.json_obj(auth, 'application.create', params={"name": "Web监测","hostid": hostid})
    #     ZabbixAPI.do_request(auth, json_obj)
    # except Exception as e:
    #     print(e)
    json_obj = ZabbixAPI.json_obj(auth, 'application.get', params={"hostids": hostid})
    request = ZabbixAPI.do_request(auth, json_obj)
    for num in range(0, len(request['result'])):
        if request['result'][num]['name'] == 'Web':
            return request['result'][num]['applicationid']


# 增加web监控
def create_web_scenario(auth, urlname, url, hostid, applicationid, delay):
    json_obj = ZabbixAPI.json_obj(auth, 'httptest.get', params={"filter": {"name": urlname}})
    request = ZabbixAPI.do_request(auth, json_obj)
    if request['result']:
        print('该web监控已经添加过了')
    else:
        try:
            json_obj = ZabbixAPI.json_obj(auth, 'httptest.create',
                                          params={"name": urlname, "hostid": hostid, "applicationid": applicationid,
                                                  "delay": delay, "retries": '1', "steps": [
                                                  {'name': urlname, 'url': url, 'timeout': '10', 'status_codes': '200',
                                                   'no': '1'}]})
            ZabbixAPI.do_request(auth, json_obj)
        except Exception as e:
            print(e)
            sys.exit(1)


# 增加触发器
def create_trigger(auth, HOSTNAME, urlname, url):
    expression = "{" + "{0}:web.test.fail[{1}].avg(#3)".format(HOSTNAME, urlname) + "}" + ">=1"
    try:
        json_obj = ZabbixAPI.json_obj(auth, 'trigger.create',
                                      params={"description": "{0}访问失败".format(urlname), "expression": expression,
                                              "priority": 5, "url": url})
        ZabbixAPI.do_request(auth, json_obj)
    except Exception as e:
        print(e)
        sys.exit(1)

    expression = "{" + "{0}:web.test.rspcode[{1},{1}].last(0)".format(HOSTNAME, urlname) + "}" + "<>200"
    try:
        json_obj = ZabbixAPI.json_obj(auth, 'trigger.create',
                                      params={"description": "{0}访问异常".format(urlname), "expression": expression,
                                              "priority": 4, "url": url})
        ZabbixAPI.do_request(auth, json_obj)
    except Exception as e:
        print(e)
        sys.exit(1)


# 获取监控项id
def getitem(auth, hostid, urlname):
    json_obj = ZabbixAPI.json_obj(auth, 'item.get',
                                  params={"hostids": hostid, "webitems": "1",
                                          "filter": {"name": "Response code for step \"$2\" of scenario \"$1\".",
                                                     "key_": "web.test.rspcode[{0},{1}]".format(urlname, urlname)}})
    request = ZabbixAPI.do_request(auth, json_obj)
    return request["result"][0]["itemid"]


# 增加图形
def create_graph(auth, urlname, hostid):
    try:
        itemid = getitem(auth, hostid, urlname)
        json_obj = ZabbixAPI.json_obj(auth, 'graph.create',
                                      params={"name": "h5_{0}状态显示".format(urlname), "width": 900, "height": 200,
                                              "gitems": [{"itemid": itemid, "color": "008800"}]})
        ZabbixAPI.do_request(auth, json_obj)
    except Exception as e:
        print(e)
        sys.exit(1)


def main():
    auth = login(ZABBIX_SREVER, USERNAME, PASSWORD)
    hostid = gethostid(auth, HOSTNAME)
    applicationid = getapplicationid(auth, hostid)

    create_web_scenario(auth, urlname, url, hostid, applicationid, delay)
    create_trigger(auth, HOSTNAME, urlname, url)
    create_graph(auth, urlname, hostid)


if __name__ == '__main__':
    main()

# json_obj = ZabbixAPI.json_obj(auth, 'httptest.get', params={"applicationids": applicationid})
# request = ZabbixAPI.do_request(auth, json_obj)
# print(json.dumps(request, ensure_ascii=False, indent=4))

```

编写shell，调用python，打日志

`vim web_monitor.sh`

```shell
#!/bin/bash
export LANG="en_US.UTF-8"

arr_hostname=("192.168.165.115" "192.168.9.13")
len=${#arr_hostname[@]}
dir=$(cd $(dirname $0) && pwd)
tdir="$dir/tmp"

dt=`date "+%F %T"`

[ -f $tdir/code_error.txt ] && true >$tdir/code_error.txt

## i: 项目信息   j: url   k:时间间隔
while read i j k o;do
    if [[ ! x"$o" == x"" && $o -le $(($len-1)) ]];then
        curl -s -I "$j" > $tdir/curl.txt
        code=`grep 'HTTP/1.1' $tdir/curl.txt|awk '{print $2}'`
        #echo "$i $j $code" 

        if [ $code -eq 200 -o $code -eq 301 -o $code -eq 302 -o $code -eq 405 ];then
            python $dir/zabbix_agent.py $i $j $k ${arr_hostname[$o]}
            [ $? -eq 0 ] && echo "$dt $i $j $k $o create ok" >> $tdir/info || echo "$dt $i $j $k $o create fail" >>$tdir/info
        else
            echo "$i $j $k $o $code" >>$tdir/code_error.txt
            echo "$i $code"
        fi
    else
        echo "hostname参数传递错误"
        fi
done <$dir/list
```

`list`文件内容格式如下：

```
csp-web-syndata http://192.168.100.15:8085/csp-web-syndata/shop/synShopInfo/111 3m 0
```

>参考链接：https://cloud.tencent.com/developer/article/1157571
>
>https://www.zabbix.com/documentation/current/manual/api
>
>https://segmentfault.com/a/1190000014241994

