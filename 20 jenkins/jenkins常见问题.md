## Jenkins报错Error cloning remote repo 'origin'

Jenkins配置了2个节点，但是只有master安装了git，很有可能任务被调到slave上执行所以报错

### 解决办法

- slave安装git
- 指定任务在master执行

## jenkins添加从节点失败

jenkins在添加从节点时
可以在启动方式中选择：Non verifying Verification Strategy