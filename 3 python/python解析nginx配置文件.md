## 导入nginx配置文件

```
scp -r /etc/nginx 192.168.167.24:/etc/
```

## pip安装相关依赖模块

```
pip3 install xlrd xlwt xlutils
```

之前在github找到过一个相关的模块，之前用过，现在不用了，讲一下，它怎么导入，命令如下

```
pip3 install git+https://github.com/fatiherikli/nginxparser.git
```

## 编写python脚本

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