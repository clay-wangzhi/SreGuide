import{_ as e,r as t,c as l,a as n,b as a,F as o,e as r,d as p,o as i}from"./app.74a0cff7.js";const c={},u=r(`<h1 id="_4-7-pipeline-\u751F\u4EA7\u914D\u7F6E\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-7-pipeline-\u751F\u4EA7\u914D\u7F6E\u5B9E\u4F8B" aria-hidden="true">#</a> 4.7 pipeline \u751F\u4EA7\u914D\u7F6E\u5B9E\u4F8B</h1><h2 id="pipeline\u914D\u7F6Ejava\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#pipeline\u914D\u7F6Ejava\u9879\u76EE" aria-hidden="true">#</a> pipeline\u914D\u7F6Ejava\u9879\u76EE</h2><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
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
           description<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;\u53D1\u5E03/\u56DE\u6EDA&quot;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*=======================================\u5E38\u4FEE\u6539\u53D8\u91CF-start=======================================*/</span>
    environment <span class="token punctuation">{</span>
        gitUrl <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;git\u5730\u5740&quot;</span></span>
        branchName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;\u5206\u652F\u540D\u79F0&quot;</span></span>
        gitlabCredentialsId <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;\u8BA4\u8BC1\u51ED\u8BC1&quot;</span></span>
        projectRunDir <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;\u9879\u76EE\u8FD0\u884C\u76EE\u5F55&quot;</span></span>
        jobName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
        serviceName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;\u670D\u52A1\u540D\u79F0&quot;</span></span>
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
                        echo <span class="token interpolation-string"><span class="token string">&quot;======================================\u9879\u76EE\u540D\u79F0 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
                        echo <span class="token interpolation-string"><span class="token string">&quot;======================================\u9879\u76EE URL = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">gitUrl</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
                        echo <span class="token interpolation-string"><span class="token string">&quot;======================================\u9879\u76EE\u5206\u652F = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">branchName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
                        echo <span class="token interpolation-string"><span class="token string">&quot;======================================\u5F53\u524D\u7F16\u8BD1\u7248\u672C\u53F7 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_NUMBER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
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
                        message<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;\u8BF7\u586B\u5199\u8981\u56DE\u6EDA\u7684\u7248\u672C&quot;</span></span><span class="token punctuation">,</span>
                        parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                            <span class="token function">string</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span><span class="token string">&#39;last_number&#39;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">)</span>
                    sh <span class="token interpolation-string"><span class="token string">&quot;&quot;&quot;
                        echo &quot;\u6B63\u5728\u56DE\u6EDA\u81F3\u5C31\u8FD1\u7B2C</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">rollbackVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u4E2A\u7248\u672C&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div><h2 id="pipeline-\u914D\u7F6E\u524D\u7AEF\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#pipeline-\u914D\u7F6E\u524D\u7AEF\u9879\u76EE" aria-hidden="true">#</a> pipeline \u914D\u7F6E\u524D\u7AEF\u9879\u76EE</h2><p>vue</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pipeline {
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
           description: &quot;\u53D1\u5E03/\u56DE\u6EDA&quot;
        )
    }

    /*=======================================\u5E38\u4FEE\u6539\u53D8\u91CF-start=======================================*/

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

    /*=======================================\u5E38\u4FEE\u6539\u53D8\u91CF-end=======================================*/

    stages {
        stage(&#39;Deploy&#39;) {
            when {
                expression { return params.DEPLOY_FLAG == &#39;deploy&#39; }
            }
            stages {
                stage(&#39;Pre Env&#39;) {
                    steps {
                        echo &quot;======================================\u9879\u76EE\u540D\u79F0 = \${env.JOB_NAME}&quot;
                        echo &quot;======================================\u9879\u76EE URL = \${gitUrl}&quot;
                        echo &quot;======================================\u9879\u76EE\u5206\u652F = \${branchName}&quot;
                        echo &quot;======================================\u5F53\u524D\u7F16\u8BD1\u7248\u672C\u53F7 = \${env.BUILD_NUMBER}&quot;
                        echo &quot;======================================\u9879\u76EE Build \u6587\u4EF6\u5939\u8DEF\u5F84 = \${projectBuildPath}&quot;
                        echo &quot;======================================\u9879\u76EE Nginx \u7684 ROOT \u8DEF\u5F84 = \${nginxHtmlRoot}&quot;
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
                        message: &quot;\u8BF7\u586B\u5199\u8981\u56DE\u6EDA\u7684\u7248\u672C&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br></div></div><p>\u8FD9\u4E2Ajenkinsfile\u4E2D\u6709\u4FDD\u5B58 \u5236\u54C1\uFF0C</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A\u5236\u54C1\u7684\u4FDD\u5B58\u65F6\u95F4\uFF0C\u548Cjenkins\u4E22\u5F03\u65E7\u7684\u6784\u5EFA\u53C2\u6570\uFF0C\u76F8\u540C</p><h3 id="\u5C40\u90E8\u53D8\u91CF\u7684\u5B9A\u4E49\u548C\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u53D8\u91CF\u7684\u5B9A\u4E49\u548C\u4F20\u9012" aria-hidden="true">#</a> \u5C40\u90E8\u53D8\u91CF\u7684\u5B9A\u4E49\u548C\u4F20\u9012</h3><p>\u81EA\u5B9A\u4E49\u53D8\u91CF\uFF08\u5C40\u90E8\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def username = &#39;Jenkins&#39;
echo &quot;Hello Mr.\${username}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u73AF\u5883\u53D8\u91CF\uFF08\u5C40\u90E8\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>withEnv([&#39;MYTOOL_HOME=/usr/local/mytool&#39;]){
    sh &#39;$MYTOOL_HOME/bin/start&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="exit-code-stdout-and-stderr-\u8FD4\u56DE\u503C\u548C\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#exit-code-stdout-and-stderr-\u8FD4\u56DE\u503C\u548C\u8F93\u51FA" aria-hidden="true">#</a> exit code, stdout and stderr \u8FD4\u56DE\u503C\u548C\u8F93\u51FA</h3><p>\u5176\u505A\u6CD5\u662F\uFF0C\u628Astdout\u5B9A\u5411\u5230\u4E00\u4E2A\u6587\u4EF6\uFF0Csh \u914D\u7F6E returnStatus: true\uFF0C\u5B83\u7684\u8FD4\u56DE\u662F\u4E00\u4E2A0\u6216\u975E0\u7684\u6574\u6570\uFF0C\u7136\u540E\u4ECE\u6587\u4EF6\u8BFB\u53D6stdout\u7684\u5185\u5BB9\u3002stderr\u540C\u7406\u53EF\u5F97\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def status = sh(returnStatus: true, script: &quot;git merge --no-edit $branches &gt; merge_output.txt&quot;)
if (status != 0) {
  currentBuild.result = &#39;FAILED&#39;
  def output = readFile(&#39;merge_output.txt&#39;).trim()
  slackSend channel: SLACK_CHANNEL, message: &quot;&lt;\${env.JOB_URL}|\${env.JOB_NAME}&gt; ran into an error merging the PR branches into the \${TARGET_BRANCH} branch:\\n\`\`\`\\n\${output}\\n\`\`\`\\n&lt;\${env.BUILD_URL}/console|See the full output&gt;&quot;, color: &#39;warning&#39;, tokenCredentialId: &#39;slack-token&#39;
  error &#39;Merge conflict&#39;
}
sh &#39;rm merge_output.txt&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,17),b={href:"https://github.com/judasn/Linux-Tutorial/blob/master/markdown-file/Jenkins-Install-And-Settings.md",target:"_blank",rel:"noopener noreferrer"},m=p("Jenkins \u5B89\u88C5\u548C\u914D\u7F6E| judasn/Linux-Tutorial | github"),k={href:"https://blog.csdn.net/triThirty/article/details/91381502",target:"_blank",rel:"noopener noreferrer"},g=p("jenkins pipeline \u5C40\u90E8\u53D8\u91CF\u5B9A\u4E49\u53CA\u4F20\u9012 | triThirty | csdn"),d={href:"https://www.cnblogs.com/pekkle/p/9882927.html",target:"_blank",rel:"noopener noreferrer"},h=p("Jenkins pipeline \u4E2D\u83B7\u53D6 exit code, stdout and stderr \u8FD4\u56DE\u503C\u548C\u8F93\u51FA | pekkle | \u535A\u5BA2\u56ED");function q(x,$){const s=t("ExternalLinkIcon");return i(),l(o,null,[u,n("p",null,[n("a",b,[m,a(s)])]),n("p",null,[n("a",k,[g,a(s)])]),n("p",null,[n("a",d,[h,a(s)])])],64)}var f=e(c,[["render",q],["__file","pipeline-example.html.vue"]]);export{f as default};
