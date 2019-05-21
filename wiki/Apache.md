web服务器
    apache(http)
    http:hypertext tranport protocol 超文本传输协议
    html:标记语言 hypertext mark language 超文本标记语言
    url:统一资源定位
    uri:统一资源标识
    url是uri的子集


    安装包:httpd-2.2.15-39.el6.centos.x86_64.rpm
          httpd-manual-2.2.15-39.el6.centos.noarch.rpm  官方文档
    配置文件:/etc/httpd/conf/httpd.conf
	    /etc/httpd/conf.d/
    端口:80 443
    数据目录:/var/www/html
    日志:/var/log/httpd/
    启动服务:service httpd restart

    测试页面:
    <html>
	    <head>
		    <title>welcome</title>
	    </head>
	    <body>
		    <h1>hello</h1>
		    <p>abc</p>
		    <img src="test.jpg">
		    <h2>world</h2>
		    <p>123</p>	
	    </body>
    </html>

    测试:
    [root@www html]# cat index.html 
    <html>
	    <head>
		    <title>welcome</title>
	    </head>
	    <body>
		    <h1>A dog</h1>
		    <img src="dog.jpg">
		    <h2>fengjing</h2>
		    <img src="timg.jpg">
	    </body>
    </html>


    进程模式和线程模式如何切换?
    配置vim /etc/sysconfig/httpd
    线程模式:
    HTTPD=/usr/sbin/httpd.worker
    进程模式:
    HTTPD=/usr/sbin/httpd


    发布目录:
    将目录存放到/var/www/html下即可

    别名功能:
    vim /etc/httpd/conf/httpd
    alias /down /var/ftp
    <Directory "/var/ftp">
            Options indexes
    </Directory>


    基于用户家目录发布页面(个人主页)
    <IfModule mod_userdir.c>
	    # UserDir disabled
	    UserDir public_html
    </IfModule>

    [root@www html]# useradd robin
    [root@www html]# useradd zorro

    [root@www html]# mkdir /home/robin/public_html
    [root@www html]# mkdir /home/zorro/public_html

    [root@www html]# echo "robin's HOME" >> /home/robin/public_html/index.html
    [root@www html]# echo "zorro's HOME" >> /home/zorro/public_html/index.html

    [root@www html]# chmod 755 /home/robin/
    [root@www html]# chmod 755 /home/zorro/

    [root@www html]# service httpd restart

    测试:
    http://172.16.20.1/~robin
    http://172.16.20.1/~zorro


    命令行访问web服务:
    [root@www html]# elinks http://172.16.20.1
    [root@www html]# elinks --dump http://172.16.20.1
    [root@www tmp]# wget http://172.16.20.1/package/acl-2.2.49-6.el6.x86_64.rpm
    [root@www tmp]# wget ftp://172.16.20.1/biji.txt


    访问控制
    alias /down /var/ftp
    <Directory "/var/ftp">
            Options indexes
            order deny,allow
            allow from 172.16.20.0/24
            deny from 192.168.1.0/24
    </Directory>

    如果规则不冲突,依次匹配规则
    如果规则冲突,从后往前读order表,后边第一个优先

    alias /down /var/ftp
    <Directory "/var/ftp">
            Options indexes
            order deny,allow
            allow from 172.16.20.1/32
            deny from 172.16.20.0/24
    </Directory>

    验证登录
    http://172.16.20.1/manual/index.html  apache文档

    alias /down /var/ftp
    <Directory "/var/ftp">
            Options indexes
            #order deny,allow
            #allow from 172.16.20.1/32
            #deny from 172.16.20.0/24
            AuthType Basic
            AuthName "welcome"
            AuthBasicProvider file
            AuthUserFile /etc/httpd/conf/userfile
            Require user king
	    # Require valid-user  所有帐号都是有效帐号
    </Directory>

    [root@www manual]# htpasswd -c -b /etc/httpd/conf/userfile king 123
    [root@www manual]# htpasswd -b /etc/httpd/conf/userfile superman 123

    [root@www manual]# service httpd restart

    CGI脚本
    [root@www cgi-bin]# touch cgi.sh
    [root@www cgi-bin]# chmod +x cgi.sh
    [root@www cgi-bin]# cat cgi.sh
    #!/bin/bash
    echo -e "Content-type: text/html\n"
    date
    uname -a

    [root@www cgi-bin]# cat cgi.sh 
    #!/bin/bash
    echo -e "Content-type: text/html\n"
    for i in {1..100}
    do
	    echo $i
	    sleep 1
    done



    [root@www cgi-bin]# cat cgi.sh 
    #!/bin/bash
    echo -e "Content-type: text/html\n"
    for i in `cat /etc/passwd`
    do
	    echo "输出用户信息: "
	    echo $i
	    echo "<br>"
	    sleep 1
    done


    [root@www cgi-bin]# cat cgi.sh 
    #!/bin/bash
    echo -e "Content-type: text/html\n"
    for i in `awk -F: '{print $1}' /etc/passwd`
    do
	    echo "用户名: "
	    echo $i
	    echo "<br>"
	    sleep 1
    done

    虚拟主机
    基于域名的虚拟主机
    [root@www ~]# vim /etc/httpd/conf/httpd.conf
    NameVirtualHost *:80
    <VirtualHost *:80>
        DocumentRoot /srv/baidu
        ServerName www.baidu.com
    </VirtualHost>
    <VirtualHost *:80>
        DocumentRoot /srv/google
        ServerName www.google.com
    </VirtualHost>
    <VirtualHost *:80>
        DocumentRoot /srv/sogo
        ServerName www.sogo.com
    </VirtualHost>

    [root@www ~]# mkdir -p /srv/baidu
    [root@www ~]# mkdir /srv/google
    [root@www ~]# mkdir /srv/sogo

    [root@www ~]# echo "baidu" >> /srv/baidu/index.html
    [root@www ~]# echo "google" >> /srv/google/index.html
    [root@www ~]# echo "sogo" >> /srv/sogo/index.html

    客户端:
    [root@www tmp]# vim /etc/hosts
    192.168.1.254	www.baidu.com
    192.168.1.254	www.google.com
    192.168.1.254	www.sogo.com

    测试:
    http://www.baidu.com
    http://www.google.com
    http://www.sogo.com

    基于ip的虚拟主机
    [root@www ~]# vim /etc/httpd/conf/httpd.conf
    <VirtualHost 172.16.20.1:80>
        DocumentRoot /srv/baidu
        ServerName www.baidu.com
    </VirtualHost>
    <VirtualHost 10.10.10.1:80>
        DocumentRoot /srv/google
        ServerName www.google.com
    </VirtualHost>


    [root@www ~]# mkdir /srv/baidu
    [root@www ~]# mkdir /srv/google


    [root@www ~]# echo "baidu" >> /srv/baidu/index.html
    [root@www ~]# echo "google" >> /srv/google/index.html


    客户端:
    [root@www tmp]# vim /etc/hosts
    172.16.20.1	www.baidu.com
    10.10.10.1	www.google.com


    测试:
    http://www.baidu.com
    http://www.google.com