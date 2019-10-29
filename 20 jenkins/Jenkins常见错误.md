Jenkins报错Error cloning remote repo 'origin'

Jenkins配置了2个节点，但是只有master安装了git，很有可能任务被调到slave上执行所以报错

### 解决办法

- slave安装git
- 指定任务在master执行