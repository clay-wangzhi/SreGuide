## FTP协议简介
* FTP是TCP/IP协议组中的协议之一，是英文File Transfer Protocol（文本传输协议）的缩写。
* 该协议是Internet文件传送的基础，它由一系列规格说明文档组成，目标是提高文件的共享性，提供非直接使用远程计算机，使存储介质对用户透明和可靠高效地传送数据。
* 简单的说，FTP就是完成两台计算机之间的拷贝，从远程计算机拷贝到自己的计算机上，称之为“下载（download）”文件。若将文件从自己计算机中拷贝至远程计算机上，则称之为“上传（upload）”文件。
* 在TCP/IP协议中，FTP标准命令TCP端口号为21，Port方式数据端口为20。
* 由于FTP的文件传输是明文方式，具有一定危险性，所以就诞生了一种更加安全的传输方式vsftp。

## ftp基于tcp协议，C/S架构 
Server: 
```
wu-ftpd， proftpd ，pureftp，vsftpd:（Very Secure ftpd），IIS，ServU
```
Client:
```
GUI（图形界面）： flashfxp，cuteftp，filezilla(开源)， gftp(Linux)
CLI（命令行）：ftp， lftp，wget， lftpget
```
## FTP两种模式
两种数据传输模式：主动模式，被动模式
1）被动模式：服务器端只开21和大于1024随机端口
    服务器和客户端会协商好一个端口，然后客户端从这个端口读数据

2）主动模式: 服务器端打开21和20端口
    客户端和服务端通过20号端口传输数据
```
lftp -d FTP_SERVER_IP //查看FTP协议命令 debug
```

被动模式测试
```
# nc 192.168.0.99 21 
	220 (vsFTPd 2.0.5)
	USER ftp
	331 Please specify the password.
	PASS fdjklfds
	230 Login successful.
	LIST
	425 Use PORT or PASV first.
	PASV
	227 Entering Passive Mode (192,168,0,99,247,209)	//服务器在该端口上等着客户端
	LIST
	150 Here comes the directory listing.
	226 Directory send OK.
```
```
# echo $[247*256+209]
	63441
# nc 192.168.0.99 63441
	drwxr-xr-x    3 0        0            4096 Oct 23 05:53 mysql
	drwxr-xr-x    2 0        0            4096 Oct 17 12:02 pub
	-rwxr-xr-x    1 0         0            25088 Sep 28 12:15 实验.doc
```
	主动模式测试：　服务器端只开21和20端口
```
# nc -l 192.168.0.40 12345
	drwxr-xr-x    3 0        0            4096 Oct 23 05:53 mysql
	drwxr-xr-x    2 0        0            4096 Oct 17 12:02 pub
	-rwxr-xr-x    1 0        0           25088 Sep 28 12:15 实验.doc
```
```
# nc 192.168.0.99 21
	220 (vsFTPd 2.0.5)
	USER ftp
	331 Please specify the password.
	PASS fdjklfds
	230 Login successful.
	PORT 192,168,0,40,48,57		// 12345/256，商48，余57  客户端在该端口上等着服务器
	200 PORT command successful. Consider using PASV.
	LIST
	150 Here comes the directory listing.
	226 Directory send OK.
```	
## FTP客户端命令
```
# lftp -e 'cd pub; get downfile; quit' 192.168.2.51
# wget ftp://192.168.2.51/pub/downfile -O /tmp/myfile
# wget http://192.168.2.251/downfile1
```

## FTP命令
```
命令 描述 
ABOR 中断数据连接程序 
ACCT <account> 系统特权帐号 
ALLO <bytes> 为服务器上的文件存储器分配字节 
APPE <filename> 添加文件到服务器同名文件 
CDUP <dir path> 改变服务器上的父目录 
CWD <dir path> 改变服务器上的工作目录 
DELE <filename> 删除服务器上的指定文件 
HELP <command> 返回指定命令信息 
LIST <name> 如果是文件名列出文件信息，如果是目录则列出文件列表 
MODE <mode> 传输模式（S=流模式，B=块模式，C=压缩模式） 
MKD <directory> 在服务器上建立指定目录 
NLST <directory> 列出指定目录内容 
NOOP 无动作，除了来自服务器上的承认 
PASS <password> 系统登录密码 
PASV 请求服务器等待数据连接				//被动
PORT <address> IP 地址和两字节的端口 ID       	//主动
PWD 显示当前工作目录 
QUIT 从 FTP 服务器上退出登录 
REIN 重新初始化登录状态连接 
REST <offset> 由特定偏移量重启文件传递 
RETR <filename> 从服务器上找回（复制）文件 
RMD <directory> 在服务器上删除指定目录 
RNFR <old path> 对旧路径重命名 
RNTO <new path> 对新路径重命名 
SITE <params> 由服务器提供的站点特殊参数 
SMNT <pathname> 挂载指定文件结构 
STAT <directory> 在当前程序或目录上返回信息 
STOR <filename> 储存（复制）文件到服务器上 
STOU <filename> 储存文件到服务器名称上 
STRU <type> 数据结构（F=文件，R=记录，P=页面） 
SYST 返回服务器使用的操作系统 
TYPE <data type> 数据类型（A=ASCII，E=EBCDIC，I=binary） 
USER <username>> 系统登录的用户名 
```
## FTP响应码
响应代码 解释说明 
110 新文件指示器上的重启标记 
120 服务器准备就绪的时间（分钟数） 
125 打开数据连接，开始传输 
150 打开连接 
200 成功 
202 命令没有执行 
211 系统状态回复 
212 目录状态回复 
213 文件状态回复 
214 帮助信息回复 
215 系统类型回复 
220 服务就绪 
221 退出网络 
225 打开数据连接 
226 结束数据连接 
227 进入被动模式（IP 地址、ID 端口） 
230 登录因特网 
250 文件行为完成 
257 路径名建立 
331 要求密码 
332 要求帐号 
350 文件行为暂停 
421 服务关闭 
425 无法打开数据连接 
426 结束连接 
450 文件不可用 
451 遇到本地错误 
452 磁盘空间不足 
500 无效命令 
501 错误参数 
502 命令没有执行 
503 错误指令序列 
504 无效命令参数 
530 未登录网络 
532 存储文件需要帐号 
550 文件不可用 
551 不知道的页类型 
552 超过存储分配 
553 文件名不允许 