## cat,head,tail命令
1.求/etc/passwd文件第20行内容
```
cat -n /etc/passwd | head -20 | tail -1
```
## rev,tac命令
rev左右颠倒
tac上下颠倒

## find命令
详见博客

## 计划任务crond和crontab
*/10 * * * * 脚本|命令

## &命令
当在前台运行某个作业时，终端被该作业占据；而在后台运行作业时，它不会占据终端。

## nohup命令
如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用 n o h u p命令。该命令可以在你退出帐户之后继续运行相应的进程。 No up就是不挂起的意思( no hang up)。 
该命令的一般形式为： 
```
nohup command &
```

## shell的通配符
\* ? [...] [!...] [a-z] [0-9] [!a12d]
{..}

##echo命令
-e 使转义符生效 如:  解释\t \n含义
-n 不换行输出
字颜色：30-37
```
echo -e "\033[30m 黑色字 \033[0m"
echo -e "\033[31m 红色字 \033[0m"
echo -e "\033[32m 绿色字 \033[0m"
echo -e "\033[33m 黄色字 \033[0m"
echo -e "\033[33m 蓝色字 \033[0m"
echo -e "\033[35m 天蓝色 \033[0m"
echo -e "\033[37m 白色字 \033[0m"
```
字背景颜色范围：40—–47 
```
echo -e “\033[40;37m 黑底白字 \033[0m” 
echo -e “\033[41;37m 红底白字 \033[0m” 
echo -e “\033[42;37m 绿底白字 \033[0m” 
echo -e “\033[43;37m 黄底白字 \033[0m” 
echo -e “\033[44;37m 蓝底白字 \033[0m” 
echo -e “\033[45;37m 紫底白字 \033[0m” 
echo -e “\033[46;37m 天蓝底白字 \033[0m” 
echo -e “\033[47;30m 白底黑字 \033[0m”
```

## printf命令
格式化输出
```
printf "%s, %s, %d\n" hello world 123
```

## read命令
可以使用r e a d语句从键盘或文件的某一行文本中读入信息，并将其赋给一个变量。如果只指定了一个变量，那么 r e a d将会把所有的输入赋给该变量，直至遇到第一个文件结束符或回 车。
如:
赋值
```
$read name
hello
$echo $name
hello
```

赋多值
```
$read firestname lastname
clay wangzhi
$echo $firstname $lastname
clay wangzhi
```

交互式:
```
$read -p "input a num:" var
input a num: 123
$echo $var
123
```

## |管道命令
管道(Pipe)实际是用于进程间通信的一段共享内存. 创建管道的进程称为管道服务器，连接到一个管道的进程为管道客户机
管道命令的两个作用:
1.管道两边产生两个子进程
2.前一个进程的标准输出和后一个进程的标准输入 

## 重定向(文件描述符)
文件描述符:进程连接到文件时,获得的一个标记.当进程操作文件时,首先
打开文件 获得打开文件的一个状态,给它一个标记 成为文件描述符
0标准输入
1标准输出
2标准错误输出

\> >> 定向符(重定向) >覆盖  >>追加
1> 标准正确输出,文件存在则覆盖,不存在则创建
1>> 标准正确输出,文件存在则追加,不存在则创建
2> 标准错误输出,文件存在则覆盖,不存在则创建
2>> 标准错误输出,文件存在则追加,不存在则创建
&> 标准正确和标准错误输出,文件存在则覆盖,不存在则创建
```
cat < /dev/sda > /dev/null 测试改变文件描述符
 ```
```
ls >cleanup.out 2>&1
```
在上面的例子中，我们将 ls命令的输出重定向到 c l e a n u p . o u t文件中，而且其错误也 被重定向到相同的文件中。
2>&1 标准错误输出定向到标准正确输出


< 输入重定向 后边跟的是文件
<< here document 后边跟的是一个文本
如下
```
cat > x.txt << EOF 
> sdfsadlkf
> asdfsadhf
> asfdhkasfd
> EOF  ------------直到遇到EOF结束
 ```

```fdisk /dev/sda <<EOF
> n
> 
> +200M
> w
> EOF
```
 
```
$cat >x.txt <<<aaa
$cat x.txt
aaa
```
## sort命令
```
$cat a.txt
2
4
3
21
90
78
45
23
2
3
5
1
$sort a.txt 
1
2
2
21
23
3
3
4
45
5
78
90
$sort -n a.txt 
1
2
2
3
3
4
5
21
23
45
78
90
$sort -n -r a.txt //按完整数字降序排序
90
78
45
23
21
5
4
3
3
2
2
1
$sort -u a.txt //去掉重复值
1
2
21
23
3
4
45
5
78
90
$sort -t: -k3nr /etc/passwd
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
bb:x:1002:1003::/home/bb:/bin/sh
aa:x:1001:1001::/home/aa:/bin/sh
clay:x:1000:1000:,,,:/home/clay:/bin/bash
pollinate:x:110:1::/var/cache/pollinate:/bin/false
sshd:x:109:65534::/run/sshd:/usr/sbin/nologin
landscape:x:108:112::/var/lib/landscape:/usr/sbin/nologin
dnsmasq:x:107:65534:dnsmasq,,,:/var/lib/misc:/usr/sbin/nologin
uuidd:x:106:110::/run/uuidd:/usr/sbin/nologin
lxd:x:105:65534::/var/lib/lxd/:/bin/false
_apt:x:104:65534::/nonexistent:/usr/sbin/nologin
messagebus:x:103:107::/nonexistent:/usr/sbin/nologin
syslog:x:102:106::/home/syslog:/usr/sbin/nologin
systemd-resolve:x:101:103:systemd Resolver,,,:/run/systemd/resolve:/usr/sbin/nologin
systemd-network:x:100:102:systemd Network Management,,,:/run/systemd/netif:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
games:x:5:60:games:/usr/games:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
sys:x:3:3:sys:/dev:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
root:x:0:0:root:/root:/bin/bash
```
## uniq命令
默认去掉连续的重复值
```
$cat a.txt 
2
4
3
21
21
90
78
45
23
2
3
5
1
$uniq a.txt
2
4
3
21
90
78
45
23
2
3
5
1
$uniq -u a.txt  //显示未重复的值
2
4
3
90
78
45
23
2
3
5
1
$sort -n a.txt | uniq -u //排序去重
1
4
5
23
45
78
90
$sort -n a.txt | uniq -d  //显示重复值
2
3
21
$sort -n a.txt | uniq -d -c //统计重复的次数      2 2
      2 3
      2 21
```
## grep 命令
详见博客

## cut命令
```
$cat a.txt 
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
$cut -c 1 a.txt 
r
b
d
a
l
$cut -c 1,3,5 a.txt 
ro:
bnx
deo
amx
l::
$cut -d: -f 1,3,5 a.txt
$cut -d: -f 1-5 a.txt
$cut -d'x' -f 1 a.txt
```

后续补充
## tr命令
## wc命令
## basename命令
## split命令
## join命令
## paste命令
## eval命令
## date命令
## logger命令
## bc命令

