由于Activemq集群的特殊性，经常出现Activemq集群假死的情况。为了保证集群的正常运行，就需要我们监控集群的运行情况。

要监控Activemq集群的运行情况，我们就可以通过stomp协议的相关客户端来实现。

## `stomp.py`安装

在此我们使用的是stomp协议的python客户端，来实现集群的监控。

支持stomp协议的python客户端，我们使用的是stomp.py这个软件来实现，而stomp.py我们可以在github上来获得。

stomp.py除了可以连接activemq，还可以连接rabbitmq。

stomp.py仓库的github地址为：

https://github.com/jasonrbriggs/stomp.py.git

**安装stomp**

```
git clone https://github.com/jasonrbriggs/stomp.py.git
cd stomp.py
python setup.py install
```

## 监控脚本

```python
#!/usr/bin/env python
# coding:utf-8

import time
import paramiko
import stomp

A_IP = "192.168.165.32"
B_IP = "192.168.165.33"
C_IP = "192.168.165.34"
USERNAME = "root"
PASSWROD = "sdqc#2019#cqds"

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



