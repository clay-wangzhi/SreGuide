<template><h1 id="_4-7-pipeline-生产配置实例" tabindex="-1"><a class="header-anchor" href="#_4-7-pipeline-生产配置实例" aria-hidden="true">#</a> 4.7 pipeline 生产配置实例</h1>
<h2 id="pipeline配置java项目" tabindex="-1"><a class="header-anchor" href="#pipeline配置java项目" aria-hidden="true">#</a> pipeline配置java项目</h2>
<div class="language-groovy ext-groovy line-numbers-mode"><pre v-pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
    agent <span class="token punctuation">{</span> label <span class="token string">'slave'</span> <span class="token punctuation">}</span>
    options <span class="token punctuation">{</span>
        <span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">disableConcurrentBuilds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">buildDiscarder</span><span class="token punctuation">(</span>
            <span class="token function">logRotator</span><span class="token punctuation">(</span>
                numToKeepStr<span class="token punctuation">:</span> <span class="token string">'20'</span><span class="token punctuation">,</span>
                daysToKeepStr<span class="token punctuation">:</span> <span class="token string">'30'</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    parameters <span class="token punctuation">{</span>
        <span class="token function">choice</span><span class="token punctuation">(</span>
           name<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"DEPLOY_FLAG"</span></span><span class="token punctuation">,</span>
           choices<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'deploy'</span><span class="token punctuation">,</span> <span class="token string">'rollback'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
           description<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"发布/回滚"</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*=======================================常修改变量-start=======================================*/</span>
    environment <span class="token punctuation">{</span>
        gitUrl <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"git地址"</span></span>
        branchName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"分支名称"</span></span>
        gitlabCredentialsId <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"认证凭证"</span></span>
        projectRunDir <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"项目运行目录"</span></span>
        jobName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
        serviceName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"服务名称"</span></span>
        serviceType <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"jar"</span></span>
        runHosts <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"192.168.167.xx,192.168.167.xx"</span></span>
        rollbackVersion <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">""</span></span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Deploy'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                expression <span class="token punctuation">{</span> <span class="token keyword">return</span> params<span class="token punctuation">.</span>DEPLOY_FLAG <span class="token operator">==</span> <span class="token string">'deploy'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            stages <span class="token punctuation">{</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Pre Env'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps <span class="token punctuation">{</span>
                        echo <span class="token interpolation-string"><span class="token string">"======================================项目名称 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                        echo <span class="token interpolation-string"><span class="token string">"======================================项目 URL = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">gitUrl</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                        echo <span class="token interpolation-string"><span class="token string">"======================================项目分支 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">branchName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                        echo <span class="token interpolation-string"><span class="token string">"======================================当前编译版本号 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_NUMBER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Git Clone'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps <span class="token punctuation">{</span>
                        git branch<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">branchName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
                        credentialsId<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">gitlabCredentialsId</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
                        url<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">gitUrl</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Mvn Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps <span class="token punctuation">{</span>
                        <span class="token function">withMaven</span><span class="token punctuation">(</span>jdk<span class="token punctuation">:</span> <span class="token string">'jdk1.8'</span><span class="token punctuation">,</span> maven<span class="token punctuation">:</span> <span class="token string">'maven'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            sh <span class="token interpolation-string"><span class="token string">"mvn clean package -Dmaven.test.skip=true -U -f </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">serviceName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/pom.xml"</span></span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Ansible Deploy'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps<span class="token punctuation">{</span>
                        script <span class="token punctuation">{</span>
                            sleep <span class="token number">5</span>
                            <span class="token function">ansiColor</span><span class="token punctuation">(</span><span class="token string">'xterm'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                ansiblePlaybook colorized<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> extras<span class="token punctuation">:</span> <span class="token string">'-e "directory=${projectRunDir}" -e "job=${jobName}" -e "service=${serviceName}" -e "type=${serviceType}"'</span><span class="token punctuation">,</span> installation<span class="token punctuation">:</span> <span class="token string">'ansible'</span><span class="token punctuation">,</span> inventory<span class="token punctuation">:</span> <span class="token string">'/etc/ansible/hosts.yml'</span><span class="token punctuation">,</span> limit<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">runHosts</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span> playbook<span class="token punctuation">:</span> <span class="token string">'/etc/ansible/playbook/deploy-jenkins.yml'</span>                            
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>   
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Rollback'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                expression <span class="token punctuation">{</span> <span class="token keyword">return</span> params<span class="token punctuation">.</span>DEPLOY_FLAG <span class="token operator">==</span> <span class="token string">'rollback'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            steps<span class="token punctuation">{</span>
                script <span class="token punctuation">{</span>
                    rollbackVersion <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span>
                        message<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"请填写要回滚的版本"</span></span><span class="token punctuation">,</span>
                        parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                            <span class="token function">string</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span><span class="token string">'last_number'</span><span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">)</span>
                    sh <span class="token interpolation-string"><span class="token string">"""
                        echo "正在回滚至就近第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">rollbackVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">个版本"
                        ansible </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">runHosts</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -m shell -a "sh </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">projectRunDir</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/rollback.sh </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">rollbackVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">serviceName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"
                    """</span></span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    post <span class="token punctuation">{</span>
        always <span class="token punctuation">{</span>
            <span class="token function">deleteDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        success <span class="token punctuation">{</span>
            echo <span class="token string">'This task is successful!'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div><h2 id="pipeline-配置前端项目" tabindex="-1"><a class="header-anchor" href="#pipeline-配置前端项目" aria-hidden="true">#</a> pipeline 配置前端项目</h2>
<p>vue</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pipeline {
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br></div></div><p>这个jenkinsfile中有保存   制品，</p>
<p>需要注意的是：制品的保存时间，和jenkins丢弃旧的构建参数，相同</p>
<h3 id="局部变量的定义和传递" tabindex="-1"><a class="header-anchor" href="#局部变量的定义和传递" aria-hidden="true">#</a> 局部变量的定义和传递</h3>
<p>自定义变量（局部）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def username = 'Jenkins'
echo "Hello Mr.${username}"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>环境变量（局部）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>withEnv(['MYTOOL_HOME=/usr/local/mytool']){
    sh '$MYTOOL_HOME/bin/start'
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="exit-code-stdout-and-stderr-返回值和输出" tabindex="-1"><a class="header-anchor" href="#exit-code-stdout-and-stderr-返回值和输出" aria-hidden="true">#</a> exit code, stdout and stderr 返回值和输出</h3>
<p>其做法是，把stdout定向到一个文件，sh 配置 returnStatus: true，它的返回是一个0或非0的整数，然后从文件读取stdout的内容。stderr同理可得。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def status = sh(returnStatus: true, script: "git merge --no-edit $branches > merge_output.txt")
if (status != 0) {
  currentBuild.result = 'FAILED'
  def output = readFile('merge_output.txt').trim()
  slackSend channel: SLACK_CHANNEL, message: "&lt;${env.JOB_URL}|${env.JOB_NAME}> ran into an error merging the PR branches into the ${TARGET_BRANCH} branch:\n```\n${output}\n```\n&lt;${env.BUILD_URL}/console|See the full output>", color: 'warning', tokenCredentialId: 'slack-token'
  error 'Merge conflict'
}
sh 'rm merge_output.txt'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>
<p><a href="https://github.com/judasn/Linux-Tutorial/blob/master/markdown-file/Jenkins-Install-And-Settings.md" target="_blank" rel="noopener noreferrer">Jenkins 安装和配置| judasn/Linux-Tutorial | github<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/triThirty/article/details/91381502" target="_blank" rel="noopener noreferrer">jenkins pipeline 局部变量定义及传递 | triThirty | csdn<ExternalLinkIcon/></a></p>
<p><a href="https://www.cnblogs.com/pekkle/p/9882927.html" target="_blank" rel="noopener noreferrer">Jenkins pipeline 中获取 exit code, stdout and stderr 返回值和输出 | pekkle | 博客园<ExternalLinkIcon/></a></p>
</template>
