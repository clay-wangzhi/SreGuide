---
category: Python
tags:
  - 工作脚本
---

# python 实际工作中的实例

## 调用zabbixAPI批量添加web监控

起因：刚来一家公司，要求我添加web监控，800多个页面监控，手动一个个加，不得加死了，所以写了个python脚本，批量添加

脚本如下：

```python 
#!/usr/bin/env python3
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

结合下面的shell脚本运行，

shell脚本如下：

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

* arr_hostname为添加web监控的两个主机，我进行的是交叉互检

最后还需要一个list文件，list文件内容格式如下

```
csp-web-syndata http://192.168.100.15:8085/csp-web-syndata/shop/synShopInfo/111 3m 0
```

## 调用jenkinsAPI批量拷贝视图job

起因：一个视图下有好多job，新建一套微服务的job，完全可以用批量拷贝，然后改一些配置参数

脚本如下：

```python
#!/usr/bin/env python
# coding:utf-8

import jenkins
import sys

src_view = 'jxltz'
dest_view = 'jxyz'
old_branch = 'jxltz-csp-parent'
new_branch = 'jxyz-csp-parent'


def get_server_instance():
    jenkins_url = 'http://192.168.162.175:8080'
    server = jenkins.Jenkins(jenkins_url, username='admin', password='sdqc#2019#cqds')
    return server


def delete_job():
    server = get_server_instance()
    if server.view_exists(dest_view):
        server.delete_view(dest_view)
    else:
        print("view不存在")
    jobs = server.get_jobs()
    for job in jobs:
        if dest_view in job['name']:
            server.delete_job(job['name'])


def copy_job():
    server = get_server_instance()
    jobs = server.get_jobs(view_name=src_view)
    for job in jobs:
        job_name = job['name']
        newjob_name = job_name.replace(src_view, dest_view)
        if server.job_exists(newjob_name):
            print("job已存在")
        else:
            server.copy_job(job_name, newjob_name)
    configxml = server.get_view_config(src_view)
    newconfigxml = configxml.replace(src_view, dest_view)
    if server.view_exists(dest_view):
        print("view已存在")
    else:
        server.create_view(dest_view, newconfigxml)


def reconfig_job():
    server = get_server_instance()
    jobs = server.get_jobs(view_name=dest_view)
    for job in jobs:
        job_config = server.get_job_config(job['name'])
        new_job_config = job_config.replace(old_branch, new_branch)
        server.reconfig_job(job['name'], new_job_config)


def main():
    if sys.argv[1] == 'delete':
        delete_job()
    elif sys.argv[1] == 'copy':
        copy_job()
    elif sys.argv[1] == 'reconfig':
        reconfig_job()
    else:
        print("Usage: python %s delete|copy|reconfig" % sys.argv[0])


if __name__ == '__main__':
    main()
```

## 解析 nginx 配置文件生成 Excel 表格

起因：领导要求统计每个域名下有哪些项目，将域名，端口，后端ip地址统计到Excel表格中。

### 导入nginx配置文件

```
scp -r /etc/nginx 192.168.167.24:/etc/
```

### pip安装相关依赖模块

```
pip3 install xlrd xlwt xlutils
```

之前在github找到过一个相关的模块，之前用过，现在不用了，讲一下，它怎么导入，命令如下

```
pip3 install git+https://github.com/fatiherikli/nginxparser.git
```

### 编写python脚本

`cat nginx_excel.py`

```python
#!/usr/bin/python3
# coding:utf-8
import re
import os
import xlrd
import xlwt
from xlutils.copy import copy


# from nginx import NGINX

class Nginx:

    def __init__(self, conf_path):
        self.conf_path = conf_path
        self.backend = list()
        self.serverBlock = list()
        self.servers = list()
        self.tmp_conf = '/tmp/tmp_nginx.conf'
        self.all_conf = '/tmp/nginx.conf'
        self.merge_conf()
        self.parse_backend_ip()
        self.parse_server_block()

    def merge_conf(self):
        conf_dir = os.path.dirname(self.conf_path)
        if len(conf_dir) != 0:
            os.chdir(conf_dir)
        include_regex = '.*include.*'
        fm = open(self.tmp_conf, 'w+')
        with open(self.conf_path, 'r') as f:
            for line in f.readlines():
                r = re.findall(include_regex, line)
                if len(r) > 0:
                    include_line = r[0].split(" ")
                    include_path = include_line[5].split(";")[0]
                    if os.path.exists(include_path):
                        with open(include_path, 'r') as ff:
                            include_con = ff.read()
                            fm.write(include_con)
                else:
                    fm.write(line)
        fm.close()

        # 去掉注释行
        fm = open(self.tmp_conf, 'r')
        with open(self.all_conf, 'w+') as fp:
            for xx in fm.readlines():
                if len(re.findall('^\s*#', xx)) == 0:
                    fp.write(xx)
        fm.close()

        # 删除临时配置文件
        if os.path.exists(self.tmp_conf):
            os.remove(self.tmp_conf)

    def parse_backend_ip(self):
        with open(self.all_conf, 'r') as fp:
            alllines = fp.read()

            # 获取每个upstream块
            regex_1 = 'upstream\s+([^{ ]+)\s*{([^}]*)}'
            upstreams = re.findall(regex_1, alllines)

            for up in upstreams:
                # 获取后端的ip
                regex_2 = 'server\s+(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d{2,5})?)'
                backend = re.findall(regex_2, up[1])
                # 判断是否有后端的ip设置
                if len(backend) > 0:
                    pool_and_ip = {'poolname': up[0], 'ip': ' '.join(backend)}
                    self.backend.append(pool_and_ip)

    def parse_server_block(self):
        flag = False
        serverblock = ''
        num_of_quote = 0

        with open(self.all_conf, 'r') as fp:
            for line in fp.readlines():
                x = line.replace(' ', '')
                if x.startswith('server{'):
                    num_of_quote += 1
                    flag = True
                    serverblock += line
                    continue
                if flag and '{' in line:
                    num_of_quote += 1

                # 将proxy_pass的别名换成ip
                if flag and 'proxy_pass' in line:
                    r = re.findall('proxy_pass\s+https?://([^;/]*)[^;]*;', line)
                    if len(r) > 0:
                        for pool in self.backend:
                            if r[0] == pool['poolname']:
                                line = line.replace(r[0], pool['ip'])

                if flag and num_of_quote != 0:
                    serverblock += line

                if flag and '}' in line:
                    num_of_quote -= 1

                if flag and num_of_quote == 0:
                    self.serverBlock.append(serverblock)
                    flag = False
                    serverblock = ''
                    num_of_quote = 0

        for singleServer in self.serverBlock:
            # port和server_name均只有一个的情况下
            port = re.findall('listen\s*((?:\d|\s)*)[^;]*;', singleServer)[0]
            r = re.findall('server_name\s+([^;]*);', singleServer)

            if len(r) > 0:
                servername = r[0]
            else:
                continue

            # location可能不止一个
            locations = re.findall('location\s*[\^~\*=]{0,3}\s*([^{ ]*)\s*\{[^}]*proxy_pass\s+https?://([^;/]*)[^;]*;',
                                   singleServer)

            backend_list = list()
            backend_ip = ''

            if len(locations) > 0:
                for location in locations:
                    backend_path = location[0]
                    poolname = location[1]
                    # 如果不是ip的pool name，就取出后端对应的ip
                    if len(re.findall('\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}', poolname)) == 0:
                        for backend in self.backend:
                            if poolname == backend['poolname']:
                                backend_ip = backend['ip']
                                break
                    else:
                        backend_ip = poolname

                    backend_list.append({"backend_path": backend_path, "backend_ip": backend_ip})

            server = {
                'port': port,
                'server_name': servername,
                'backend': backend_list
            }

            self.servers.append(server)


class NginxExcel:

    def __init__(self, row, col):
        self.row = row
        self.col = col

    def read_from_txt(self, txt_filename, line):
        file_txt = open(txt_filename)
        lines = file_txt.readlines()
        strlist = lines[line].split(" ")
        self.project_name = strlist[0]
        self.domain = strlist[1]
        self.link = strlist[2]
        self.proxy_pass = strlist[3:]

    def write_to_excel(self, excel_filename):
        if os.path.exists(excel_filename):
            rb = xlrd.open_workbook(excel_filename)
            wb = copy(rb)
            sheet = wb.get_sheet(0)
        else:
            wb = xlwt.Workbook()
            sheet = wb.add_sheet('私有云')
            sheet.write(self.row, self.col, "项目名")
            self.col += 1
            sheet.write(self.row, self.col, "域名")
            self.col += 1
            sheet.write(self.row, self.col, "项目链接")
            self.col += 1
            sheet.write(self.row, self.col, "后端地址")
            self.row += 1
            self.col = 0

        sheet.write(self.row, self.col, self.project_name)
        self.col += 1
        sheet.write(self.row, self.col, self.domain)
        self.col += 1
        sheet.write(self.row, self.col, self.link)
        self.col += 1
        sheet.write(self.row, self.col, ", ".join(self.proxy_pass))
        self.row += 1
        self.col = 0
        wb.save(excel_filename)


def main():
    txt_filename = "私有云项目清单.txt"
    excel_filename = "私有云项目清单.xls"
    s = NginxExcel(0, 0)
    nginx = Nginx('/etc/nginx/nginx.conf')
    nginx_list = nginx.servers
    f = open(txt_filename, "w+")

    for server in nginx_list:
        for backend in server["backend"]:
            old_project_name = backend["backend_path"]
            new_project_name = re.sub(r'/', '', old_project_name)
            if server["port"] == "80":
                domain = "http://" + server["server_name"]
                link = domain + "/" + new_project_name + "/"
            elif server["port"] == "443":
                domain = "https://" + server["server_name"]
                link = domain + "/" + new_project_name + "/"
            else:
                domain = "http://" + server["server_name"]
                link = domain + ":" + server["port"] + "/" + new_project_name + "/"
            f.write("%s %s %s %s\n" % (new_project_name, domain, link, backend["backend_ip"]))

    f.close()

    f = open(txt_filename)
    lines = f.readlines()

    for line in range(len(lines)):
        s.read_from_txt(txt_filename, line)
        s.write_to_excel(excel_filename)

    f.close()


if __name__ == '__main__':
    main()
```

执行脚本，生成Excel表格

```
python3 nginx_excel.py
```

表格生成在`/etc/nginx`目录下



## 监控 activemq 集群状态并自动重启

起因：activemq集群，由于私有云底层网路问题，隔一段时间假死一次，集群依赖zookeeper集群，后续将集群方式改为了共享存储的方式

脚本如下

```python
#!/usr/bin/env python
# coding:utf-8

import time
import paramiko
import stomp

A_IP = "192.168.161.1"
B_IP = "192.168.161.2"
C_IP = "192.168.161.3"
USERNAME = "root"
PASSWROD = "*******"

list = []
now = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())


class MyParamiko:
    def __init__(self, hostip, username, password, port=22):
        self.hostip = hostip
        self.port = port
        self.username = username
        self.password = password
        self.obj = paramiko.SSHClient()
        self.obj.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        self.obj.connect(self.hostip, self.port, self.username, self.password)

    def run_cmd(self, cmd):
        stdin, stdout, stderr = self.obj.exec_command(cmd)
        return stdout.read()

    def close(self):
        self.obj.close()


def check_port():
    for ip in (A_IP, B_IP, C_IP):
        sshobj = MyParamiko(ip, USERNAME, PASSWROD)
        result = sshobj.run_cmd('netstat -ntpl | grep -c 61613')
        list.append(result.decode().strip('\n'))
        sshobj.close()
    print(list)


def activemq_listen(ip):
    class MyListener(object):
        def on_error(self, headers, message):
            print(now + ' received an error %s' % message)

        def on_message(self, headers, message):
            print(now + ' received a message %s' % message)
    conn = stomp.Connection([(ip, 61613)])
    conn.set_listener('', MyListener())
    conn.start()
    conn.connect('admin', 'admin')
    conn.subscribe(destination='/queue/clay.test.mqtest.v1', id=1, ack='auto')
    conn.send(body='clay test', destination='/queue/clay.test.mqtest.v1')
    time.sleep(2)
    conn.disconnect()


def activemq_restart(ip):
    sshobj = MyParamiko(ip, USERNAME, PASSWROD)
    cmd = "ps -ef | grep activemq | grep -v grep | awk '{print $2}'| xargs kill -9;" \
        "export JAVA_HOME=/opt/jdk1.8.0_144;" \
        "/opt/apache-activemq-5.15.9/bin/activemq start"
    result = sshobj.run_cmd(cmd)
    print(now + result)
    sshobj.close()


def activmq_monitor():
    if list == ['1', '0', '0']:
        print(now + " 第一台机器的61613端口处于监听状态，现在尝试往里面发送消息...")
        try:
            activemq_listen(A_IP)
        except stomp.exception.ConnectFailedException:
            print(now + " 发送信息失败，请重启Activemq进程...")
            activemq_restart(A_IP)
    elif list == ['0', '1', '0']:
        print(now + " 第二台机器的61613端口处于监听状态，现在尝试往里面发送消息...")
        try:
            activemq_listen(B_IP)
        except stomp.exception.ConnectFailedException:
            print(now + " 发送信息失败，请重启Activemq进程...")
            activemq_restart(B_IP)
    elif list == ['0', '0', '1']:
        print(now + " 第三台机器的61613端口处于监听状态，现在尝试往里面发送消息...")
        try:
            activemq_listen(C_IP)
        except stomp.exception.ConnectFailedException:
            print(now + " 发送信息失败，请重启Activemq进程...")
            activemq_restart(C_IP)
    else:
        print(now + " activemq的61613端口处于异常，现在重启这三台mq...")
        activemq_restart(A_IP)
        activemq_restart(B_IP)
        activemq_restart(C_IP)


if __name__ == "__main__":
    check_port()
    activmq_monitor()
    print()
```

创建计划任务

```
*/2 * * * * /usr/bin/python3 /root/activemq.py >> /var/log/activemq.log
```

