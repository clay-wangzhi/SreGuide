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

