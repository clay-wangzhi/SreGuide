ssh第一次连接的时候一般会提示输入yes 进行确认为将key字符串加入到 ~/.ssh/known_hosts 文件中。

而本机的~/.ssh/known_hosts文件中并有fingerprint key串

解决方法：在ansible.cfg文件中更改下面的参数：

#host_key_checking = False 将#号去掉即可