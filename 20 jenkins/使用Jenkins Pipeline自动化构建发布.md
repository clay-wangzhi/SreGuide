## 前端项目

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



