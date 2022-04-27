<template><ol>
<li>
<p>安装插件，找下载量大的下载</p>
<ul>
<li>Jenkinsfile Support</li>
<li>Jenkins Pipeline Linter Connector</li>
</ul>
</li>
<li>
<p>设置，<code>ctrl+shift+p</code>,  打开<code>首选项：打开设置(json)</code></p>
<ul>
<li>
<p>添加下面四行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    "jenkins.pipeline.linter.connector.url": "http://192.168.166.99:32001/jenkins/pipeline-model-converter/validate",
    "jenkins.pipeline.linter.connector.user": "admin",
    "jenkins.pipeline.linter.connector.pass": "admin",
    "jenkins.pipeline.linter.connector.crumbUrl": "http://192.168.166.99:32001/jenkins/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,%22:%22,//crumb))",
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
</li>
</ol>
</template>
