---
category: 自动化工具
tags:
  - Jenkins
---

# pipeline 生产配置实例

## pipeline配置java项目

```groovy
pipeline {
    agent { label 'slave' }
    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(
            logRotator(
                numToKeepStr: '20',
                daysToKeepStr: '30',
            )
        )
    }
    parameters {
        choice(
           name: "DEPLOY_FLAG",
           choices: ['deploy', 'rollback'],
           description: "发布/回滚"
        )
    }
    /*=======================================常修改变量-start=======================================*/
    environment {
        gitUrl = "git地址"
        branchName = "分支名称"
        gitlabCredentialsId = "认证凭证"
        projectRunDir = "项目运行目录"
        jobName = "${env.JOB_NAME}"
        serviceName = "服务名称"
        serviceType = "jar"
        runHosts = "192.168.167.xx,192.168.167.xx"
        rollbackVersion = ""
    }
    stages {
        stage('Deploy'){
            when {
                expression { return params.DEPLOY_FLAG == 'deploy' }
            }
            stages {
                stage('Pre Env') {
                    steps {
                        echo "======================================项目名称 = ${env.JOB_NAME}"
                        echo "======================================项目 URL = ${gitUrl}"
                        echo "======================================项目分支 = ${branchName}"
                        echo "======================================当前编译版本号 = ${env.BUILD_NUMBER}"
                    }
                }
                stage('Git Clone') {
                    steps {
                        git branch: "${branchName}",
                        credentialsId: "${gitlabCredentialsId}",
                        url: "${gitUrl}"
                    }
                }
                stage('Mvn Build') {
                    steps {
                        withMaven(jdk: 'jdk1.8', maven: 'maven') {
                            sh "mvn clean package -Dmaven.test.skip=true -U -f ${serviceName}/pom.xml"
                        }
                    }
                }
                stage('Ansible Deploy') {
                    steps{
                        script {
                            sleep 5
                            ansiColor('xterm') {
                                ansiblePlaybook colorized: true, extras: '-e "directory=${projectRunDir}" -e "job=${jobName}" -e "service=${serviceName}" -e "type=${serviceType}"', installation: 'ansible', inventory: '/etc/ansible/hosts.yml', limit: "${runHosts}", playbook: '/etc/ansible/playbook/deploy-jenkins.yml'                            
                            }
                        }
                    }
                }
            }   
        }
        stage('Rollback') {
            when {
                expression { return params.DEPLOY_FLAG == 'rollback' }
            }
            steps{
                script {
                    rollbackVersion = input(
                        message: "请填写要回滚的版本",
                        parameters: [
                            string(name:'last_number')
                        ]
                    )
                    sh """
                        echo "正在回滚至就近第${rollbackVersion}个版本"
                        ansible ${runHosts} -m shell -a "sh ${projectRunDir}/rollback.sh ${rollbackVersion} ${serviceName}"
                    """
                }
            }
        }
    }
    post {
        always {
            deleteDir()
        }
        success {
            echo 'This task is successful!'
        }
    }
}
```

## pipeline 配置前端项目

vue

```
pipeline {
    agent { label 'master'}

    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(
            logRotator(
                numToKeepStr: '20',
                daysToKeepStr: '30',
            )
        )
    }

    parameters {
        choice(
           name: "DEPLOY_FLAG",
           choices: ['deploy', 'rollback'],
           description: "发布/回滚"
        )
    }

    /*=======================================常修改变量-start=======================================*/

    environment {
        gitUrl = "http://gitlab.schengle.com/driving-frontend/h5.git"
        branchName = "master"
        gitlabCredentialsId = "437c69b5-a874-4da6-8fe1-61e0275fdf0d"
        projectBuildDir = "build"
        projectBuildPath = "${env.WORKSPACE}/${projectBuildDir}/"
        nginxIp = "192.168.16.141"
        nginxHtmlRoot = "/tmp/${env.JOB_NAME}"
        owner = "font"
        group = "font"
        backupRootDir = "/opt/backup"
        backupJob = "${backupRootDir}/${env.JOB_NAME}"
        backupDir = "${backupJob}/${env.BUILD_NUMBER}"
        rollbackVersion = ""
    }

    /*=======================================常修改变量-end=======================================*/

    stages {
        stage('Deploy') {
            when {
                expression { return params.DEPLOY_FLAG == 'deploy' }
            }
            stages {
                stage('Pre Env') {
                    steps {
                        echo "======================================项目名称 = ${env.JOB_NAME}"
                        echo "======================================项目 URL = ${gitUrl}"
                        echo "======================================项目分支 = ${branchName}"
                        echo "======================================当前编译版本号 = ${env.BUILD_NUMBER}"
                        echo "======================================项目 Build 文件夹路径 = ${projectBuildPath}"
                        echo "======================================项目 Nginx 的 ROOT 路径 = ${nginxHtmlRoot}"
                    }
                }

                stage('Git Clone') {
                    steps {
                        git branch: "${branchName}",
                        credentialsId: "${gitlabCredentialsId}",
                        url: "${gitUrl}"
                    } 
                }

                stage('NPM Install') {
                    steps {
                        nodejs('nodejs') {
                            sh "npm install"
                        }
                    }
                }

                stage('NPM Build') {
                    steps {
                        nodejs('nodejs') {
                            sh "npm run build"
                        }
                    }
                }

                stage('Backup') {
                    agent { label 'ansible'}
                    steps {
                        script {
                            try {
                                isItBackupToday = sh (returnStatus: true, script:'ansible ${nginxIp} -m shell -a "ls -l --time-style=+%D ${backupJob} | grep $(date +%D)"')
                                if (isItBackupToday !=0){
                                    try {
                                        sh 'ansible ${nginxIp} -m file -a "path=${backupDir} state=directory owner=${owner} group=${group}"'
                                        sh 'ansible ${nginxIp} -m shell -a "cp -a ${nginxHtmlRoot}/* ${backupDir}"'
                                    }
                                    catch (exc) {
                                        echo 'Something failed!'
                                    }  
                                }
                            }
                            catch (exc) {
                                echo 'Something failed!'
                            }                             
                        }
                    }
                }

                stage('Nginx Deploy') {
                    agent { label 'ansible'}
                    steps {
                        sh 'ansible ${nginxIp} -m synchronize -a "src=${projectBuildPath} dest=${nginxHtmlRoot} delete=yes"'
                        sh 'ansible ${nginxIp} -m file -a "path=${nginxHtmlRoot} owner=${owner} group=${group} recurse=yes"'
                    }
                }

                stage('Tar Build') {
                    steps {
                        sh "tar -zcf  ${env.JOB_NAME}.tar.gz ${projectBuildDir}"
                    }
                }

                stage('Archive Artifacts') {
                    steps {
                        archiveArtifacts "${env.JOB_NAME}.tar.gz"
                    }
                }
            }
        }

        stage('Rollback') {
            when {
                expression { return params.DEPLOY_FLAG == 'rollback' }
            }
            agent { label 'ansible'}
            steps{
                script {
                    sh 'ansible ${nginxIp} -m shell -a "ls -l  ${backupJob}" | grep -v "CHANGED"'
                    rollbackVersion = input(
                        message: "请填写要回滚的版本",
                        parameters: [
                            string(name:'BUILD_NUMBER')
                        ]
                    )
                    sh 'ansible ${nginxIp} -m file -a "path=${nginxHtmlRoot} state=absent"'
                    sh 'ansible ${nginxIp} -m file -a "path=${nginxHtmlRoot} state=directory owner=${owner} group=${group}"'                    
                    withEnv(["rollbackVersion=${rollbackVersion}"]){
                        sh 'ansible ${nginxIp} -m shell -a "cp -a  ${backupJob}/${rollbackVersion}/* ${nginxHtmlRoot}"'
                    }
                }
            }
        }
    }
}
```

这个jenkinsfile中有保存   制品，

需要注意的是：制品的保存时间，和jenkins丢弃旧的构建参数，相同

### 局部变量的定义和传递

自定义变量（局部）

```
def username = 'Jenkins'
echo "Hello Mr.${username}"
```

环境变量（局部）

```
withEnv(['MYTOOL_HOME=/usr/local/mytool']){
    sh '$MYTOOL_HOME/bin/start'
}
```

### exit code, stdout and stderr 返回值和输出

其做法是，把stdout定向到一个文件，sh 配置 returnStatus: true，它的返回是一个0或非0的整数，然后从文件读取stdout的内容。stderr同理可得。

```
def status = sh(returnStatus: true, script: "git merge --no-edit $branches > merge_output.txt")
if (status != 0) {
  currentBuild.result = 'FAILED'
  def output = readFile('merge_output.txt').trim()
  slackSend channel: SLACK_CHANNEL, message: "<${env.JOB_URL}|${env.JOB_NAME}> ran into an error merging the PR branches into the ${TARGET_BRANCH} branch:\n```\n${output}\n```\n<${env.BUILD_URL}/console|See the full output>", color: 'warning', tokenCredentialId: 'slack-token'
  error 'Merge conflict'
}
sh 'rm merge_output.txt'
```



## 参考链接

[jenkins pipeline 局部变量定义及传递 | triThirty | csdn](https://blog.csdn.net/triThirty/article/details/91381502)

[Jenkins pipeline 中获取 exit code, stdout and stderr 返回值和输出 | pekkle | 博客园](https://www.cnblogs.com/pekkle/p/9882927.html)