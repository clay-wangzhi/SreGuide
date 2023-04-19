1. 安装插件，找下载量大的下载

   * Jenkinsfile Support
   * Jenkins Pipeline Linter Connector

2. 设置，`ctrl+shift+p`,  打开`首选项：打开设置(json)`

   * 添加下面四行

     ```
         "jenkins.pipeline.linter.connector.url": "http://192.168.166.99:32001/jenkins/pipeline-model-converter/validate",
         "jenkins.pipeline.linter.connector.user": "admin",
         "jenkins.pipeline.linter.connector.pass": "admin",
         "jenkins.pipeline.linter.connector.crumbUrl": "http://192.168.166.99:32001/jenkins/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,%22:%22,//crumb))",
     ```

     