## 设置中文
后续补充
## 解决乱码问题
网上下载中文楷体（smikai.ttf），然后拷贝到zabbix的字体目录下
```
cp /opt/simkai.ttf /usr/share/zabbix/fonts/
vim /usr/share/zabbix/include/defines.inc.php 
define('ZBX_GRAPH_FONT_NAME', 'simkai');
define('ZBX_FONT_NAME', 'simkai');
```
改完，刷新页面，问题解决！
