import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as o,a as n,b as a,d as e,e as p}from"./app-970b2c74.js";const c={},u=p(`<h1 id="_4-7-pipeline-生产配置实例" tabindex="-1"><a class="header-anchor" href="#_4-7-pipeline-生产配置实例" aria-hidden="true">#</a> 4.7 pipeline 生产配置实例</h1><h2 id="pipeline配置java项目" tabindex="-1"><a class="header-anchor" href="#pipeline配置java项目" aria-hidden="true">#</a> pipeline配置java项目</h2><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
    agent <span class="token punctuation">{</span> label <span class="token string">&#39;slave&#39;</span> <span class="token punctuation">}</span>
    options <span class="token punctuation">{</span>
        <span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">disableConcurrentBuilds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">buildDiscarder</span><span class="token punctuation">(</span>
            <span class="token function">logRotator</span><span class="token punctuation">(</span>
                numToKeepStr<span class="token punctuation">:</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span>
                daysToKeepStr<span class="token punctuation">:</span> <span class="token string">&#39;30&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    parameters <span class="token punctuation">{</span>
        <span class="token function">choice</span><span class="token punctuation">(</span>
           name<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;DEPLOY_FLAG&quot;</span></span><span class="token punctuation">,</span>
           choices<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;deploy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rollback&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
           description<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;发布/回滚&quot;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*=======================================常修改变量-start=======================================*/</span>
    environment <span class="token punctuation">{</span>
        gitUrl <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;git地址&quot;</span></span>
        branchName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;分支名称&quot;</span></span>
        gitlabCredentialsId <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;认证凭证&quot;</span></span>
        projectRunDir <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;项目运行目录&quot;</span></span>
        jobName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
        serviceName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;服务名称&quot;</span></span>
        serviceType <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;jar&quot;</span></span>
        runHosts <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;192.168.167.xx,192.168.167.xx&quot;</span></span>
        rollbackVersion <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;&quot;</span></span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Deploy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                expression <span class="token punctuation">{</span> <span class="token keyword">return</span> params<span class="token punctuation">.</span>DEPLOY_FLAG <span class="token operator">==</span> <span class="token string">&#39;deploy&#39;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            stages <span class="token punctuation">{</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Pre Env&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps <span class="token punctuation">{</span>
                        echo <span class="token interpolation-string"><span class="token string">&quot;======================================项目名称 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
                        echo <span class="token interpolation-string"><span class="token string">&quot;======================================项目 URL = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">gitUrl</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
                        echo <span class="token interpolation-string"><span class="token string">&quot;======================================项目分支 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">branchName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
                        echo <span class="token interpolation-string"><span class="token string">&quot;======================================当前编译版本号 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_NUMBER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Git Clone&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps <span class="token punctuation">{</span>
                        git branch<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">branchName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
                        credentialsId<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">gitlabCredentialsId</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
                        url<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">gitUrl</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Mvn Build&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps <span class="token punctuation">{</span>
                        <span class="token function">withMaven</span><span class="token punctuation">(</span>jdk<span class="token punctuation">:</span> <span class="token string">&#39;jdk1.8&#39;</span><span class="token punctuation">,</span> maven<span class="token punctuation">:</span> <span class="token string">&#39;maven&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            sh <span class="token interpolation-string"><span class="token string">&quot;mvn clean package -Dmaven.test.skip=true -U -f </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">serviceName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/pom.xml&quot;</span></span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Ansible Deploy&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps<span class="token punctuation">{</span>
                        script <span class="token punctuation">{</span>
                            sleep <span class="token number">5</span>
                            <span class="token function">ansiColor</span><span class="token punctuation">(</span><span class="token string">&#39;xterm&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                ansiblePlaybook colorized<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> extras<span class="token punctuation">:</span> <span class="token string">&#39;-e &quot;directory=\${projectRunDir}&quot; -e &quot;job=\${jobName}&quot; -e &quot;service=\${serviceName}&quot; -e &quot;type=\${serviceType}&quot;&#39;</span><span class="token punctuation">,</span> installation<span class="token punctuation">:</span> <span class="token string">&#39;ansible&#39;</span><span class="token punctuation">,</span> inventory<span class="token punctuation">:</span> <span class="token string">&#39;/etc/ansible/hosts.yml&#39;</span><span class="token punctuation">,</span> limit<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">runHosts</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> playbook<span class="token punctuation">:</span> <span class="token string">&#39;/etc/ansible/playbook/deploy-jenkins.yml&#39;</span>                            
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>   
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Rollback&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                expression <span class="token punctuation">{</span> <span class="token keyword">return</span> params<span class="token punctuation">.</span>DEPLOY_FLAG <span class="token operator">==</span> <span class="token string">&#39;rollback&#39;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            steps<span class="token punctuation">{</span>
                script <span class="token punctuation">{</span>
                    rollbackVersion <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span>
                        message<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;请填写要回滚的版本&quot;</span></span><span class="token punctuation">,</span>
                        parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                            <span class="token function">string</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span><span class="token string">&#39;last_number&#39;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">)</span>
                    sh <span class="token interpolation-string"><span class="token string">&quot;&quot;&quot;
                        echo &quot;正在回滚至就近第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">rollbackVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">个版本&quot;
                        ansible </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">runHosts</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -m shell -a &quot;sh </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">projectRunDir</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/rollback.sh </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">rollbackVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">serviceName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;
                    &quot;&quot;&quot;</span></span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    post <span class="token punctuation">{</span>
        always <span class="token punctuation">{</span>
            <span class="token function">deleteDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        success <span class="token punctuation">{</span>
            echo <span class="token string">&#39;This task is successful!&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pipeline-配置前端项目" tabindex="-1"><a class="header-anchor" href="#pipeline-配置前端项目" aria-hidden="true">#</a> pipeline 配置前端项目</h2><p>vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
    agent { label &#39;master&#39;}

    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(
            logRotator(
                numToKeepStr: &#39;20&#39;,
                daysToKeepStr: &#39;30&#39;,
            )
        )
    }

    parameters {
        choice(
           name: &quot;DEPLOY_FLAG&quot;,
           choices: [&#39;deploy&#39;, &#39;rollback&#39;],
           description: &quot;发布/回滚&quot;
        )
    }

    /*=======================================常修改变量-start=======================================*/

    environment {
        gitUrl = &quot;http://gitlab.schengle.com/driving-frontend/h5.git&quot;
        branchName = &quot;master&quot;
        gitlabCredentialsId = &quot;437c69b5-a874-4da6-8fe1-61e0275fdf0d&quot;
        projectBuildDir = &quot;build&quot;
        projectBuildPath = &quot;\${env.WORKSPACE}/\${projectBuildDir}/&quot;
        nginxIp = &quot;192.168.16.141&quot;
        nginxHtmlRoot = &quot;/tmp/\${env.JOB_NAME}&quot;
        owner = &quot;font&quot;
        group = &quot;font&quot;
        backupRootDir = &quot;/opt/backup&quot;
        backupJob = &quot;\${backupRootDir}/\${env.JOB_NAME}&quot;
        backupDir = &quot;\${backupJob}/\${env.BUILD_NUMBER}&quot;
        rollbackVersion = &quot;&quot;
    }

    /*=======================================常修改变量-end=======================================*/

    stages {
        stage(&#39;Deploy&#39;) {
            when {
                expression { return params.DEPLOY_FLAG == &#39;deploy&#39; }
            }
            stages {
                stage(&#39;Pre Env&#39;) {
                    steps {
                        echo &quot;======================================项目名称 = \${env.JOB_NAME}&quot;
                        echo &quot;======================================项目 URL = \${gitUrl}&quot;
                        echo &quot;======================================项目分支 = \${branchName}&quot;
                        echo &quot;======================================当前编译版本号 = \${env.BUILD_NUMBER}&quot;
                        echo &quot;======================================项目 Build 文件夹路径 = \${projectBuildPath}&quot;
                        echo &quot;======================================项目 Nginx 的 ROOT 路径 = \${nginxHtmlRoot}&quot;
                    }
                }

                stage(&#39;Git Clone&#39;) {
                    steps {
                        git branch: &quot;\${branchName}&quot;,
                        credentialsId: &quot;\${gitlabCredentialsId}&quot;,
                        url: &quot;\${gitUrl}&quot;
                    } 
                }

                stage(&#39;NPM Install&#39;) {
                    steps {
                        nodejs(&#39;nodejs&#39;) {
                            sh &quot;npm install&quot;
                        }
                    }
                }

                stage(&#39;NPM Build&#39;) {
                    steps {
                        nodejs(&#39;nodejs&#39;) {
                            sh &quot;npm run build&quot;
                        }
                    }
                }

                stage(&#39;Backup&#39;) {
                    agent { label &#39;ansible&#39;}
                    steps {
                        script {
                            try {
                                isItBackupToday = sh (returnStatus: true, script:&#39;ansible \${nginxIp} -m shell -a &quot;ls -l --time-style=+%D \${backupJob} | grep $(date +%D)&quot;&#39;)
                                if (isItBackupToday !=0){
                                    try {
                                        sh &#39;ansible \${nginxIp} -m file -a &quot;path=\${backupDir} state=directory owner=\${owner} group=\${group}&quot;&#39;
                                        sh &#39;ansible \${nginxIp} -m shell -a &quot;cp -a \${nginxHtmlRoot}/* \${backupDir}&quot;&#39;
                                    }
                                    catch (exc) {
                                        echo &#39;Something failed!&#39;
                                    }  
                                }
                            }
                            catch (exc) {
                                echo &#39;Something failed!&#39;
                            }                             
                        }
                    }
                }

                stage(&#39;Nginx Deploy&#39;) {
                    agent { label &#39;ansible&#39;}
                    steps {
                        sh &#39;ansible \${nginxIp} -m synchronize -a &quot;src=\${projectBuildPath} dest=\${nginxHtmlRoot} delete=yes&quot;&#39;
                        sh &#39;ansible \${nginxIp} -m file -a &quot;path=\${nginxHtmlRoot} owner=\${owner} group=\${group} recurse=yes&quot;&#39;
                    }
                }

                stage(&#39;Tar Build&#39;) {
                    steps {
                        sh &quot;tar -zcf  \${env.JOB_NAME}.tar.gz \${projectBuildDir}&quot;
                    }
                }

                stage(&#39;Archive Artifacts&#39;) {
                    steps {
                        archiveArtifacts &quot;\${env.JOB_NAME}.tar.gz&quot;
                    }
                }
            }
        }

        stage(&#39;Rollback&#39;) {
            when {
                expression { return params.DEPLOY_FLAG == &#39;rollback&#39; }
            }
            agent { label &#39;ansible&#39;}
            steps{
                script {
                    sh &#39;ansible \${nginxIp} -m shell -a &quot;ls -l  \${backupJob}&quot; | grep -v &quot;CHANGED&quot;&#39;
                    rollbackVersion = input(
                        message: &quot;请填写要回滚的版本&quot;,
                        parameters: [
                            string(name:&#39;BUILD_NUMBER&#39;)
                        ]
                    )
                    sh &#39;ansible \${nginxIp} -m file -a &quot;path=\${nginxHtmlRoot} state=absent&quot;&#39;
                    sh &#39;ansible \${nginxIp} -m file -a &quot;path=\${nginxHtmlRoot} state=directory owner=\${owner} group=\${group}&quot;&#39;                    
                    withEnv([&quot;rollbackVersion=\${rollbackVersion}&quot;]){
                        sh &#39;ansible \${nginxIp} -m shell -a &quot;cp -a  \${backupJob}/\${rollbackVersion}/* \${nginxHtmlRoot}&quot;&#39;
                    }
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个jenkinsfile中有保存 制品，</p><p>需要注意的是：制品的保存时间，和jenkins丢弃旧的构建参数，相同</p><h3 id="局部变量的定义和传递" tabindex="-1"><a class="header-anchor" href="#局部变量的定义和传递" aria-hidden="true">#</a> 局部变量的定义和传递</h3><p>自定义变量（局部）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def username = &#39;Jenkins&#39;
echo &quot;Hello Mr.\${username}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>环境变量（局部）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>withEnv([&#39;MYTOOL_HOME=/usr/local/mytool&#39;]){
    sh &#39;$MYTOOL_HOME/bin/start&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exit-code-stdout-and-stderr-返回值和输出" tabindex="-1"><a class="header-anchor" href="#exit-code-stdout-and-stderr-返回值和输出" aria-hidden="true">#</a> exit code, stdout and stderr 返回值和输出</h3><p>其做法是，把stdout定向到一个文件，sh 配置 returnStatus: true，它的返回是一个0或非0的整数，然后从文件读取stdout的内容。stderr同理可得。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def status = sh(returnStatus: true, script: &quot;git merge --no-edit $branches &gt; merge_output.txt&quot;)
if (status != 0) {
  currentBuild.result = &#39;FAILED&#39;
  def output = readFile(&#39;merge_output.txt&#39;).trim()
  slackSend channel: SLACK_CHANNEL, message: &quot;&lt;\${env.JOB_URL}|\${env.JOB_NAME}&gt; ran into an error merging the PR branches into the \${TARGET_BRANCH} branch:\\n\`\`\`\\n\${output}\\n\`\`\`\\n&lt;\${env.BUILD_URL}/console|See the full output&gt;&quot;, color: &#39;warning&#39;, tokenCredentialId: &#39;slack-token&#39;
  error &#39;Merge conflict&#39;
}
sh &#39;rm merge_output.txt&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,17),r={href:"https://github.com/judasn/Linux-Tutorial/blob/master/markdown-file/Jenkins-Install-And-Settings.md",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/triThirty/article/details/91381502",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/pekkle/p/9882927.html",target:"_blank",rel:"noopener noreferrer"};function m(b,k){const s=t("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[n("a",r,[a("Jenkins 安装和配置| judasn/Linux-Tutorial | github"),e(s)])]),n("p",null,[n("a",d,[a("jenkins pipeline 局部变量定义及传递 | triThirty | csdn"),e(s)])]),n("p",null,[n("a",v,[a("Jenkins pipeline 中获取 exit code, stdout and stderr 返回值和输出 | pekkle | 博客园"),e(s)])])])}const h=i(c,[["render",m],["__file","pipeline-example.html.vue"]]);export{h as default};
