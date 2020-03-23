* ansible添加redis缓存的话，会缓存时间，切记！！！

* ansible中debug: msg="{{mysql_replication_master}}"

  这个很好用，注意格式，=号左右没有空格，{{}}号左右没有空格，

* --tags选项注意，我测试目前只能再main.yml文件中选中

* vars_files playbook中使用无效啊，引用不上，vars_files默认搜索当前路径，如果文件不在当前目录，需要指出绝对路径。