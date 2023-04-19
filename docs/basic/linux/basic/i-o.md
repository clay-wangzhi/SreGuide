---
category: Linux
---
# 管道及I/O重定向

## 标准输入、标准输出、标准错误

### 输出重定向
输出重定向（覆盖）
```
date > a.txt
```
输出重定向（追加）
```
date 1>> a.txt
```
错误输出重定向
```
ls /home/ /aa >> a.txt 2>b.txt
```
正确和错误都输入到相同位置
```
ls /home/ /aa &> a.txt 
ls /home/ /aa > a.txt 2>&1 
```
重定向到空设备/dev/null
```
ls /home/ /aa &> /dev/null
```
### 输入重定向
```
grep 'root' < /etc/passwd
```
```
mysql -uroot -p123 < aa.sql
```
### 总和应用
```
cat > a.txt <<EOF
> 11
> 22
> EOF
```

