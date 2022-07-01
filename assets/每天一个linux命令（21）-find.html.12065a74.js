import{_ as n,e as r}from"./app.d503eb7b.js";const s={},a=r(`<p>\u5728\u4F7F\u7528 find\u547D\u4EE4\u7684-exec\u9009\u9879\u5904\u7406\u5339\u914D\u5230\u7684\u6587\u4EF6\u65F6\uFF0C find\u547D\u4EE4\u5C06\u6240\u6709\u5339\u914D\u5230\u7684\u6587\u4EF6\u4E00\u8D77\u4F20\u9012\u7ED9exec\u6267\u884C\u3002\u4F46\u6709\u4E9B\u7CFB\u7EDF\u5BF9\u80FD\u591F\u4F20\u9012\u7ED9exec\u7684\u547D\u4EE4\u957F\u5EA6\u6709\u9650\u5236\uFF0C\u8FD9\u6837\u5728find\u547D\u4EE4\u8FD0\u884C\u51E0\u5206\u949F\u4E4B\u540E\uFF0C\u5C31\u4F1A\u51FA\u73B0\u6EA2\u51FA\u9519\u8BEF\u3002\u9519\u8BEF\u4FE1\u606F\u901A\u5E38\u662F\u201C\u53C2\u6570\u5217\u592A\u957F\u201D\u6216\u201C\u53C2\u6570\u5217\u6EA2\u51FA\u201D\u3002\u8FD9\u5C31\u662Fxargs\u547D\u4EE4\u7684\u7528\u5904\u6240\u5728\uFF0C\u7279\u522B\u662F\u4E0Efind\u547D\u4EE4\u4E00\u8D77\u4F7F\u7528\u3002</p><p>find\u547D\u4EE4\u628A\u5339\u914D\u5230\u7684\u6587\u4EF6\u4F20\u9012\u7ED9xargs\u547D\u4EE4\uFF0C\u800Cxargs\u547D\u4EE4\u6BCF\u6B21\u53EA\u83B7\u53D6\u4E00\u90E8\u5206\u6587\u4EF6\u800C\u4E0D\u662F\u5168\u90E8\uFF0C\u4E0D\u50CF-exec\u9009\u9879\u90A3\u6837\u3002\u8FD9\u6837\u5B83\u53EF\u4EE5\u5148\u5904\u7406\u6700\u5148\u83B7\u53D6\u7684\u4E00\u90E8\u5206\u6587\u4EF6\uFF0C\u7136\u540E\u662F\u4E0B\u4E00\u6279\uFF0C\u5E76\u5982\u6B64\u7EE7\u7EED\u4E0B\u53BB\u3002</p><p>\u5728\u6709\u4E9B\u7CFB\u7EDF\u4E2D\uFF0C\u4F7F\u7528-exec\u9009\u9879\u4F1A\u4E3A\u5904\u7406\u6BCF\u4E00\u4E2A\u5339\u914D\u5230\u7684\u6587\u4EF6\u800C\u53D1\u8D77\u4E00\u4E2A\u76F8\u5E94\u7684\u8FDB\u7A0B\uFF0C\u5E76\u975E\u5C06\u5339\u914D\u5230\u7684\u6587\u4EF6\u5168\u90E8\u4F5C\u4E3A\u53C2\u6570\u4E00\u6B21\u6267\u884C\uFF1B\u8FD9\u6837\u5728\u6709\u4E9B\u60C5\u51B5\u4E0B\u5C31\u4F1A\u51FA\u73B0\u8FDB\u7A0B\u8FC7\u591A\uFF0C\u7CFB\u7EDF\u6027\u80FD\u4E0B\u964D\u7684\u95EE\u9898\uFF0C\u56E0\u800C\u6548\u7387\u4E0D\u9AD8\uFF1B \u800C\u4F7F\u7528xargs\u547D\u4EE4\u5219\u53EA\u6709\u4E00\u4E2A\u8FDB\u7A0B\u3002\u53E6\u5916\uFF0C\u5728\u4F7F\u7528xargs\u547D\u4EE4\u65F6\uFF0C\u7A76\u7ADF\u662F\u4E00\u6B21\u83B7\u53D6\u6240\u6709\u7684\u53C2\u6570\uFF0C\u8FD8\u662F\u5206\u6279\u53D6\u5F97\u53C2\u6570\uFF0C\u4EE5\u53CA\u6BCF\u4E00\u6B21\u83B7\u53D6\u53C2\u6570\u7684\u6570\u76EE\u90FD\u4F1A\u6839\u636E\u8BE5\u547D\u4EE4\u7684\u9009\u9879\u53CA\u7CFB\u7EDF\u5185\u6838\u4E2D\u76F8\u5E94\u7684\u53EF\u8C03\u53C2\u6570\u6765\u786E\u5B9A\u3002</p><p>\u4F7F\u7528\u5B9E\u4F8B\uFF1A</p><p>1\uFF09 \u67E5\u627E\u7CFB\u7EDF\u4E2D\u7684\u6BCF\u4E00\u4E2A\u666E\u901A\u6587\u4EF6\uFF0C\u7136\u540E\u4F7F\u7528xargs\u547D\u4EE4\u6765\u6D4B\u8BD5\u5B83\u4EEC\u5206\u522B\u5C5E\u4E8E\u54EA\u7C7B\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#ll
\u603B\u8BA1 312
-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxrwx 2 root root   4096 11-12 19:32 test3
drwxrwxrwx 2 root root   4096 11-12 19:32 test4
# find . -type f -print | xargs file
./log2014.log: empty
./log2013.log: empty
./log2012.log: ASCII text
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>2\uFF09\u5728\u6574\u4E2A\u7CFB\u7EDF\u4E2D\u67E5\u627E\u5185\u5B58\u4FE1\u606F\u8F6C\u50A8\u6587\u4EF6(core dump) \uFF0C\u7136\u540E\u628A\u7ED3\u679C\u4FDD\u5B58\u5230/tmp/core.log \u6587\u4EF6\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># find / -name &quot;core&quot; -print | xargs echo &quot;&quot; &gt;/tmp/core.log
# cd /tmp
# ll
\u603B\u8BA1 16
-rw-r--r-- 1 root root 1524 11-12 22:29 core.log
drwx------ 2 root root 4096 11-12 22:24 ssh-TzcZDx1766
drwx------ 2 root root 4096 11-12 22:28 ssh-ykiRPk1815
drwx------ 2 root root 4096 11-03 07:11 vmware-root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>3\uFF09\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u67E5\u627E\u6240\u6709\u7528\u6237\u5177\u6709\u8BFB\u3001\u5199\u548C\u6267\u884C\u6743\u9650\u7684\u6587\u4EF6\uFF0C\u5E76\u6536\u56DE\u76F8\u5E94\u7684\u5199\u6743\u9650</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 312
-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxrwx 2 root root   4096 11-12 19:32 test3
drwxrwxrwx 2 root root   4096 11-12 19:32 test4
# find . -perm -7 -print | xargs chmod o-w
# ll
\u603B\u8BA1 312
-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-12 19:32 test3
drwxrwxr-x 2 root root   4096 11-12 19:32 test4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u6267\u884C\u547D\u4EE4\u540E\uFF0C\u6587\u4EF6\u5939scf\u3001test3\u548Ctest4\u7684\u6743\u9650\u90FD\u53D1\u751F\u6539\u53D8</p><p>4\uFF09\u7528grep\u547D\u4EE4\u5728\u6240\u6709\u7684\u666E\u901A\u6587\u4EF6\u4E2D\u641C\u7D22hostname\u8FD9\u4E2A\u8BCD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># find . -type f -print | xargs grep &quot;hostname&quot;
./log2013.log:hostnamebaidu=baidu.com
./log2013.log:hostnamesina=sina.com
./log2013.log:hostnames=true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>5\uFF09\u7528grep\u547D\u4EE4\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u666E\u901A\u6587\u4EF6\u4E2D\u641C\u7D22hostnames\u8FD9\u4E2A\u8BCD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># find . -name \\* -type f -print | xargs grep &quot;hostnames&quot;
./log2013.log:hostnamesina=sina.com
./log2013.log:hostnames=true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u6CE8\u610F\uFF0C\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C \\\u7528\u6765\u53D6\u6D88find\u547D\u4EE4\u4E2D\u7684*\u5728shell\u4E2D\u7684\u7279\u6B8A\u542B\u4E49\u3002</p><p>6\uFF09\u4F7F\u7528xargs\u6267\u884Cmv</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 316
-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log
-rw-r--r-- 1 root root     61 11-12 22:44 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-12 22:54 test3
drwxrwxr-x 2 root root   4096 11-12 19:32 test4
# cd test4/
# ll
\u603B\u8BA1 0[root@localhost test4]# cd ..
# find . -name &quot;*.log&quot; | xargs -i mv {} test4
# ll
\u603B\u8BA1 12drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxr-x 2 root root 4096 11-13 05:50 test3
drwxrwxr-x 2 root root 4096 11-13 05:50 test4
# cd test4/
# ll
\u603B\u8BA1 304
-rw-r--r-- 1 root root 302108 11-12 22:54 log2012.log
-rw-r--r-- 1 root root     61 11-12 22:54 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:54 log2014.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>7\uFF09find\u540E\u6267\u884Cxargs\u63D0\u793Axargs: argument line too long\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#find . -type f -atime +0 -print0 | xargs -0 -l1 -t rm -f
rm -f 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>-l1\u662F\u4E00\u6B21\u5904\u7406\u4E00\u4E2A\uFF1B-t\u662F\u5904\u7406\u4E4B\u524D\u6253\u5370\u51FA\u547D\u4EE4</p><p>8\uFF09\u4F7F\u7528-i\u53C2\u6570\u9ED8\u8BA4\u7684\u524D\u9762\u8F93\u51FA\u7528{}\u4EE3\u66FF\uFF0C-I\u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u5176\u4ED6\u4EE3\u66FF\u5B57\u7B26\uFF0C\u5982\u4F8B\u5B50\u4E2D\u7684[]</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 12drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxr-x 2 root root 4096 11-13 05:50 test3
drwxrwxr-x 2 root root 4096 11-13 05:50 test4
# cd test4
# find . -name &quot;file&quot; | xargs -I [] cp [] ..
# ll
\u603B\u8BA1 304
-rw-r--r-- 1 root root 302108 11-12 22:54 log2012.log
-rw-r--r-- 1 root root     61 11-12 22:54 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:54 log2014.log
# cd ..
# ll
\u603B\u8BA1 316
-rw-r--r-- 1 root root 302108 11-13 06:03 log2012.log
-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log
-rw-r--r-- 1 root root      0 11-13 06:03 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-13 05:50 test3
drwxrwxr-x 2 root root   4096 11-13 05:50 test4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u4F7F\u7528-i\u53C2\u6570\u9ED8\u8BA4\u7684\u524D\u9762\u8F93\u51FA\u7528{}\u4EE3\u66FF\uFF0C-I\u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u5176\u4ED6\u4EE3\u66FF\u5B57\u7B26\uFF0C\u5982\u4F8B\u5B50\u4E2D\u7684[]</p><p>9\uFF09xargs\u7684-p\u53C2\u6570\u7684\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 0
-rw-r--r-- 1 root root 0 11-13 06:06 log2015.log
# cd ..
# ll
\u603B\u8BA1 316
-rw-r--r-- 1 root root 302108 11-13 06:03 log2012.log
-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log
-rw-r--r-- 1 root root      0 11-13 06:03 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-13 06:06 test3
drwxrwxr-x 2 root root   4096 11-13 05:50 test4
# cd test3
#  find . -name &quot;*.log&quot; | xargs -p -i mv {} ..
mv ./log2015.log .. ?...y
# ll
\u603B\u8BA1 0
# cd ..
# ll
\u603B\u8BA1 316
-rw-r--r-- 1 root root 302108 11-13 06:03 log2012.log
-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log
-rw-r--r-- 1 root root      0 11-13 06:03 log2014.log
-rw-r--r-- 1 root root      0 11-13 06:06 log2015.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-13 06:08 test3
drwxrwxr-x 2 root root   4096 11-13 05:50 test4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>-p\u53C2\u6570\u4F1A\u63D0\u793A\u8BA9\u4F60\u786E\u8BA4\u662F\u5426\u6267\u884C\u540E\u9762\u7684\u547D\u4EE4,y\u6267\u884C\uFF0Cn\u4E0D\u6267\u884C\u3002</p><p>\u8F6C\u8F7D\u94FE\u63A5\uFF1A</p><p>http://www.cnblogs.com/peida/archive/2012/11/15/2770888.html</p>`,34);function e(l,o){return a}var t=n(s,[["render",e],["__file","\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0821\uFF09-find.html.vue"]]);export{t as default};
