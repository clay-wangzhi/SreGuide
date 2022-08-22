import{_ as n,e as s}from"./app.200bae49.js";const a={},e=s(`<p>diff \u547D\u4EE4\u662F linux\u4E0A\u975E\u5E38\u91CD\u8981\u7684\u5DE5\u5177\uFF0C\u7528\u4E8E\u6BD4\u8F83\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u7279\u522B\u662F\u6BD4\u8F83\u4E24\u4E2A\u7248\u672C\u4E0D\u540C\u7684\u6587\u4EF6\u4EE5\u627E\u5230\u6539\u52A8\u7684\u5730\u65B9\u3002diff\u5728\u547D\u4EE4\u884C\u4E2D\u6253\u5370\u6BCF\u4E00\u4E2A\u884C\u7684\u6539\u52A8\u3002\u6700\u65B0\u7248\u672C\u7684diff\u8FD8\u652F\u6301\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002diff\u7A0B\u5E8F\u7684\u8F93\u51FA\u88AB\u79F0\u4E3A\u8865\u4E01 (patch)\uFF0C\u56E0\u4E3ALinux\u7CFB\u7EDF\u4E2D\u8FD8\u6709\u4E00\u4E2Apatch\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u6839\u636Ediff\u7684\u8F93\u51FA\u5C06a.c\u7684\u6587\u4EF6\u5185\u5BB9\u66F4\u65B0\u4E3Ab.c\u3002diff\u662Fsvn\u3001cvs\u3001git\u7B49\u7248\u672C\u63A7\u5236\u5DE5\u5177\u4E0D\u53EF\u6216\u7F3A\u7684\u4E00\u90E8\u5206\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>diff(\u9009\u9879)(\u53C2\u6570)</code></p><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-&lt;\u884C\u6570&gt;\uFF1A\u6307\u5B9A\u8981\u663E\u793A\u591A\u5C11\u884C\u7684\u6587\u672C\u3002\u6B64\u53C2\u6570\u5FC5\u987B\u4E0E-c\u6216-u\u53C2\u6570\u4E00\u5E76\u4F7F\u7528\uFF1B
-a\u6216\u2014\u2014text\uFF1Adiff\u9884\u8BBE\u53EA\u4F1A\u9010\u884C\u6BD4\u8F83\u6587\u672C\u6587\u4EF6\uFF1B
-b\u6216--ignore-space-change\uFF1A\u4E0D\u68C0\u67E5\u7A7A\u683C\u5B57\u7B26\u7684\u4E0D\u540C\uFF1B
-B\u6216--ignore-blank-lines\uFF1A\u4E0D\u68C0\u67E5\u7A7A\u767D\u884C\uFF1B
-c\uFF1A\u663E\u793A\u5168\u90E8\u5185\u5BB9\uFF0C\u5E76\u6807\u51FA\u4E0D\u540C\u4E4B\u5904\uFF1B
-C&lt;\u884C\u6570&gt;\u6216--context&lt;\u884C\u6570&gt;\uFF1A\u4E0E\u6267\u884C\u201C-c-&lt;\u884C\u6570&gt;\u201D\u6307\u4EE4\u76F8\u540C\uFF1B
-d\u6216\u2014\u2014minimal\uFF1A\u4F7F\u7528\u4E0D\u540C\u7684\u6F14\u7B97\u6CD5\uFF0C\u4EE5\u5C0F\u7684\u5355\u4F4D\u6765\u505A\u6BD4\u8F83\uFF1B
-D&lt;\u5DE8\u96C6\u540D\u79F0&gt;\u6216ifdef&lt;\u5DE8\u96C6\u540D\u79F0&gt;\uFF1A\u6B64\u53C2\u6570\u7684\u8F93\u51FA\u683C\u5F0F\u53EF\u7528\u4E8E\u524D\u7F6E\u5904\u7406\u5668\u5DE8\u96C6\uFF1B
-e\u6216\u2014\u2014ed\uFF1A\u6B64\u53C2\u6570\u7684\u8F93\u51FA\u683C\u5F0F\u53EF\u7528\u4E8Eed\u7684script\u6587\u4EF6\uFF1B
-f\u6216-forward-ed\uFF1A\u8F93\u51FA\u7684\u683C\u5F0F\u7C7B\u4F3Ced\u7684script\u6587\u4EF6\uFF0C\u4F46\u6309\u7167\u539F\u6765\u6587\u4EF6\u7684\u987A\u5E8F\u6765\u663E\u793A\u4E0D\u540C\u5904\uFF1B
-H\u6216--speed-large-files\uFF1A\u6BD4\u8F83\u5927\u6587\u4EF6\u65F6\uFF0C\u53EF\u52A0\u5FEB\u901F\u5EA6\uFF1B
-l&lt;\u5B57\u7B26\u6216\u5B57\u7B26\u4E32&gt;\u6216--ignore-matching-lines&lt;\u5B57\u7B26\u6216\u5B57\u7B26\u4E32&gt;\uFF1A\u82E5\u4E24\u4E2A\u6587\u4EF6\u5728\u67D0\u51E0\u884C\u6709\u6240\u4E0D\u540C\uFF0C\u800C\u4E4B\u9645\u822A\u540C\u65F6\u90FD\u5305\u542B\u4E86\u9009\u9879\u4E2D\u6307\u5B9A\u7684\u5B57\u7B26\u6216\u5B57\u7B26\u4E32\uFF0C\u5219\u4E0D\u663E\u793A\u8FD9\u4E24\u4E2A\u6587\u4EF6\u7684\u5DEE\u5F02\uFF1B
-i\u6216--ignore-case\uFF1A\u4E0D\u68C0\u67E5\u5927\u5C0F\u5199\u7684\u4E0D\u540C\uFF1B
-l\u6216\u2014\u2014paginate\uFF1A\u5C06\u7ED3\u679C\u4EA4\u7531pr\u7A0B\u5E8F\u6765\u5206\u9875\uFF1B
-n\u6216\u2014\u2014rcs\uFF1A\u5C06\u6BD4\u8F83\u7ED3\u679C\u4EE5RCS\u7684\u683C\u5F0F\u6765\u663E\u793A\uFF1B
-N\u6216--new-file\uFF1A\u5728\u6BD4\u8F83\u76EE\u5F55\u65F6\uFF0C\u82E5\u6587\u4EF6A\u4EC5\u51FA\u73B0\u5728\u67D0\u4E2A\u76EE\u5F55\u4E2D\uFF0C\u9884\u8BBE\u4F1A\u663E\u793A\uFF1AOnly in\u76EE\u5F55\uFF0C\u6587\u4EF6A \u82E5\u4F7F\u7528-N\u53C2\u6570\uFF0C\u5219diff\u4F1A\u5C06\u6587\u4EF6A \u4E0E\u4E00\u4E2A\u7A7A\u767D\u7684\u6587\u4EF6\u6BD4\u8F83\uFF1B
-p\uFF1A\u82E5\u6BD4\u8F83\u7684\u6587\u4EF6\u4E3AC\u8BED\u8A00\u7684\u7A0B\u5E8F\u7801\u6587\u4EF6\u65F6\uFF0C\u663E\u793A\u5DEE\u5F02\u6240\u5728\u7684\u51FD\u6570\u540D\u79F0\uFF1B
-P\u6216--unidirectional-new-file\uFF1A\u4E0E-N\u7C7B\u4F3C\uFF0C\u4F46\u53EA\u6709\u5F53\u7B2C\u4E8C\u4E2A\u76EE\u5F55\u5305\u542B\u4E86\u7B2C\u4E00\u4E2A\u76EE\u5F55\u6240\u6CA1\u6709\u7684\u6587\u4EF6\u65F6\uFF0C\u624D\u4F1A\u5C06\u8FD9\u4E2A\u6587\u4EF6\u4E0E\u7A7A\u767D\u7684\u6587\u4EF6\u505A\u6BD4\u8F83\uFF1B
-q\u6216--brief\uFF1A\u4EC5\u663E\u793A\u6709\u65E0\u5DEE\u5F02\uFF0C\u4E0D\u663E\u793A\u8BE6\u7EC6\u7684\u4FE1\u606F\uFF1B
-r\u6216\u2014\u2014recursive\uFF1A\u6BD4\u8F83\u5B50\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\uFF1B
-s\u6216--report-identical-files\uFF1A\u82E5\u6CA1\u6709\u53D1\u73B0\u4EFB\u4F55\u5DEE\u5F02\uFF0C\u4ECD\u7136\u663E\u793A\u4FE1\u606F\uFF1B
-S&lt;\u6587\u4EF6&gt;\u6216--starting-file&lt;\u6587\u4EF6&gt;\uFF1A\u5728\u6BD4\u8F83\u76EE\u5F55\u65F6\uFF0C\u4ECE\u6307\u5B9A\u7684\u6587\u4EF6\u5F00\u59CB\u6BD4\u8F83\uFF1B
-t\u6216--expand-tabs\uFF1A\u5728\u8F93\u51FA\u65F6\uFF0C\u5C06tab\u5B57\u7B26\u5C55\u5F00\uFF1B
-T\u6216--initial-tab\uFF1A\u5728\u6BCF\u884C\u524D\u9762\u52A0\u4E0Atab\u5B57\u7B26\u4EE5\u4FBF\u5BF9\u9F50\uFF1B
-u\uFF0C-U&lt;\u5217\u6570&gt;\u6216--unified=&lt;\u5217\u6570&gt;\uFF1A\u4EE5\u5408\u5E76\u7684\u65B9\u5F0F\u6765\u663E\u793A\u6587\u4EF6\u5185\u5BB9\u7684\u4E0D\u540C\uFF1B
-v\u6216\u2014\u2014version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\uFF1B
-w\u6216--ignore-all-space\uFF1A\u5FFD\u7565\u5168\u90E8\u7684\u7A7A\u683C\u5B57\u7B26\uFF1B
-W&lt;\u5BBD\u5EA6&gt;\u6216--width&lt;\u5BBD\u5EA6&gt;\uFF1A\u5728\u4F7F\u7528-y\u53C2\u6570\u65F6\uFF0C\u6307\u5B9A\u680F\u5BBD\uFF1B
-x&lt;\u6587\u4EF6\u540D\u6216\u76EE\u5F55&gt;\u6216--exclude&lt;\u6587\u4EF6\u540D\u6216\u76EE\u5F55&gt;\uFF1A\u4E0D\u6BD4\u8F83\u9009\u9879\u4E2D\u6240\u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
-X&lt;\u6587\u4EF6&gt;\u6216--exclude-from&lt;\u6587\u4EF6&gt;\uFF1B\u60A8\u53EF\u4EE5\u5C06\u6587\u4EF6\u6216\u76EE\u5F55\u7C7B\u578B\u5B58\u6210\u6587\u672C\u6587\u4EF6\uFF0C\u7136\u540E\u5728=&lt;\u6587\u4EF6&gt;\u4E2D\u6307\u5B9A\u6B64\u6587\u672C\u6587\u4EF6\uFF1B
-y\u6216--side-by-side\uFF1A\u4EE5\u5E76\u5217\u7684\u65B9\u5F0F\u663E\u793A\u6587\u4EF6\u7684\u5F02\u540C\u4E4B\u5904\uFF1B
--help\uFF1A\u663E\u793A\u5E2E\u52A9\uFF1B
--left-column\uFF1A\u5728\u4F7F\u7528-y\u53C2\u6570\u65F6\uFF0C\u82E5\u4E24\u4E2A\u6587\u4EF6\u67D0\u4E00\u884C\u5185\u5BB9\u76F8\u540C\uFF0C\u5219\u4EC5\u5728\u5DE6\u4FA7\u7684\u680F\u4F4D\u663E\u793A\u8BE5\u884C\u5185\u5BB9\uFF1B
--suppress-common-lines\uFF1A\u5728\u4F7F\u7528-y\u53C2\u6570\u65F6\uFF0C\u4EC5\u663E\u793A\u4E0D\u540C\u4E4B\u5904\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li>\u6587\u4EF61\uFF1A\u6307\u5B9A\u8981\u6BD4\u8F83\u7684\u7B2C\u4E00\u4E2A\u6587\u4EF6\uFF1B</li><li>\u6587\u4EF62\uFF1A\u6307\u5B9A\u8981\u6BD4\u8F83\u7684\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u3002</li></ul><h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><p>diff\u547D\u4EE4\u80FD\u6BD4\u8F83\u5355\u4E2A\u6587\u4EF6\u6216\u8005\u76EE\u5F55\u5185\u5BB9\u3002\u5982\u679C\u6307\u5B9A\u6BD4\u8F83\u7684\u662F\u6587\u4EF6\uFF0C\u5219\u53EA\u6709\u5F53\u8F93\u5165\u4E3A\u6587\u672C\u6587\u4EF6\u65F6\u624D\u6709\u6548\u3002\u4EE5\u9010\u884C\u7684\u65B9\u5F0F\uFF0C\u6BD4\u8F83\u6587\u672C\u6587\u4EF6\u7684\u5F02\u540C\u5904\u3002\u5982\u679C\u6307\u5B9A\u6BD4\u8F83\u7684\u662F\u76EE\u5F55\u7684\u65F6\u5019\uFF0Cdiff\u547D\u4EE4\u4F1A\u6BD4\u8F83\u4E24\u4E2A\u76EE\u5F55\u4E0B\u540D\u5B57\u76F8\u540C\u7684\u6587\u672C\u6587\u4EF6\u3002\u5217\u51FA\u4E0D\u540C\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u3001\u516C\u5171\u5B50\u76EE\u5F55\u548C\u53EA\u5728\u4E00\u4E2A\u76EE\u5F55\u51FA\u73B0\u7684\u6587\u4EF6\u3002</p><h2 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h2><p>1\uFF09\u6BD4\u8F83\u4E24\u4E2A\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># diff log2014.log log2013.log 
3c3
&lt; 2014-03
---
&gt; 2013-03
8c8
&lt; 2013-07
---
&gt; 2013-08
11,12d10
&lt; 2013-11
&lt; 2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u4E0A\u9762\u7684\u201C3c3\u201D\u548C\u201C8c8\u201D\u8868\u793Alog2014.log\u548Clog20143log\u6587\u4EF6\u57283\u884C\u548C\u7B2C8\u884C\u5185\u5BB9\u6709\u6240\u4E0D\u540C\uFF1B&quot;11,12d10&quot;\u8868\u793A\u7B2C\u4E00\u4E2A\u6587\u4EF6\u6BD4\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u591A\u4E86\u7B2C11\u548C12\u884C\u3002</p><p>diff \u7684normal \u663E\u793A\u683C\u5F0F\u6709\u4E09\u79CD\u63D0\u793A:</p><p>a - add</p><p>c - change</p><p>d - delete</p><p>2\uFF09\u5E76\u6392\u683C\u5F0F\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># diff log2014.log log2013.log  -y -W 50
2013-01                 2013-01
2013-02                 2013-02
2014-03               | 2013-03
2013-04                 2013-04
2013-05                 2013-05
2013-06                 2013-06
2013-07                 2013-07
2013-07               | 2013-08
2013-09                 2013-09
2013-10                 2013-10
2013-11               &lt;
2013-12               &lt;
# diff log2013.log log2014.log  -y -W 50
2013-01                 2013-01
2013-02                 2013-02
2013-03               | 2014-03
2013-04                 2013-04
2013-05                 2013-05
2013-06                 2013-06
2013-07                 2013-07
2013-08               | 2013-07
2013-09                 2013-09
                      &gt; 2013-11
                      &gt; 2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u201C|\u201D\u8868\u793A\u524D\u540E2\u4E2A\u6587\u4EF6\u5185\u5BB9\u6709\u4E0D\u540C</p><p>\u201C&lt;\u201D\u8868\u793A\u540E\u9762\u6587\u4EF6\u6BD4\u524D\u9762\u6587\u4EF6\u5C11\u4E861\u884C\u5185\u5BB9</p><p>\u201C&gt;\u201D\u8868\u793A\u540E\u9762\u6587\u4EF6\u6BD4\u524D\u9762\u6587\u4EF6\u591A\u4E861\u884C\u5185\u5BB9</p><p>3\uFF09\u4E0A\u4E0B\u6587\u8F93\u51FA\u683C\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># diff log2013.log log2014.log  -c
*** log2013.log 2012-12-07 16:36:26.000000000 +0800
--- log2014.log 2012-12-07 18:01:54.000000000 +0800
***************
*** 1,10 ****
  2013-01
  2013-02
! 2013-03
  2013-04
  2013-05
  2013-06
  2013-07
! 2013-08
  2013-09
  2013-10
--- 1,12 ----
  2013-01
  2013-02
! 2014-03
  2013-04
  2013-05
  2013-06
  2013-07
! 2013-07
  2013-09
  2013-10
+ 2013-11
+ 2013-12
# diff log2014.log log2013.log  -c
*** log2014.log 2012-12-07 18:01:54.000000000 +0800
--- log2013.log 2012-12-07 16:36:26.000000000 +0800
***************
*** 1,12 ****
  2013-01
  2013-02
! 2014-03
  2013-04
  2013-05
  2013-06
  2013-07
! 2013-07
  2013-09
  2013-10
- 2013-11
- 2013-12
--- 1,10 ----
  2013-01
  2013-02
! 2013-03
  2013-04
  2013-05
  2013-06
  2013-07
! 2013-08
  2013-09
  2013-10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u8FD9\u79CD\u65B9\u5F0F\u5728\u5F00\u5934\u4E24\u884C\u4F5C\u4E86\u6BD4\u8F83\u6587\u4EF6\u7684\u8BF4\u660E\uFF0C\u8FD9\u91CC\u6709\u4E09\u4E2D\u7279\u6B8A\u5B57\u7B26\uFF1A</p><p>\u201C\uFF0B\u201D \u6BD4\u8F83\u7684\u6587\u4EF6\u7684\u540E\u8005\u6BD4\u524D\u7740\u591A\u4E00\u884C</p><p>\u201C\uFF0D\u201D \u6BD4\u8F83\u7684\u6587\u4EF6\u7684\u540E\u8005\u6BD4\u524D\u7740\u5C11\u4E00\u884C</p><p>\u201C\uFF01\u201D \u6BD4\u8F83\u7684\u6587\u4EF6\u4E24\u8005\u6709\u5DEE\u522B\u7684\u884C</p><p>4\uFF09\u7EDF\u4E00\u683C\u5F0F\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># diff log2014.log log2013.log  -u
--- log2014.log 2012-12-07 18:01:54.000000000 +0800
+++ log2013.log 2012-12-07 16:36:26.000000000 +0800
@@ -1,12 +1,10 @@
 2013-01
 2013-02
-2014-03
+2013-03
 2013-04
 2013-05
 2013-06
 2013-07
-2013-07
+2013-08
 2013-09
 2013-10
-2013-11
-2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u5B83\u7684\u7B2C\u4E00\u90E8\u5206\uFF0C\u4E5F\u662F\u6587\u4EF6\u7684\u57FA\u672C\u4FE1\u606F\uFF1A</p><p>--- log2014.log 2012-12-07 18:01:54.000000000 +0800</p><p>+++ log2013.log 2012-12-07 16:36:26.000000000 +0800</p><p>&quot;---&quot;\u8868\u793A\u53D8\u52A8\u524D\u7684\u6587\u4EF6\uFF0C&quot;+++&quot;\u8868\u793A\u53D8\u52A8\u540E\u7684\u6587\u4EF6\u3002</p><p>\u7B2C\u4E8C\u90E8\u5206\uFF0C\u53D8\u52A8\u7684\u4F4D\u7F6E\u7528\u4E24\u4E2A@\u4F5C\u4E3A\u8D77\u9996\u548C\u7ED3\u675F\u3002</p><p>@@ -1,12 +1,10 @@</p><p>\u524D\u9762\u7684&quot;-1,12&quot;\u5206\u6210\u4E09\u4E2A\u90E8\u5206\uFF1A\u51CF\u53F7\u8868\u793A\u7B2C\u4E00\u4E2A\u6587\u4EF6\uFF08\u5373log2014.log\uFF09\uFF0C&quot;1&quot;\u8868\u793A\u7B2C1\u884C\uFF0C&quot;12&quot;\u8868\u793A\u8FDE\u7EED12\u884C\u3002\u5408\u5728\u4E00\u8D77\uFF0C\u5C31\u8868\u793A\u4E0B\u9762\u662F\u7B2C\u4E00\u4E2A\u6587\u4EF6\u4ECE\u7B2C1\u884C\u5F00\u59CB\u7684\u8FDE\u7EED12\u884C\u3002\u540C\u6837\u7684\uFF0C&quot;+1,10&quot;\u8868\u793A\u53D8\u52A8\u540E\uFF0C\u6210\u4E3A\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u4ECE\u7B2C1\u884C\u5F00\u59CB\u7684\u8FDE\u7EED10\u884C\u3002</p><p>5\uFF09\u6BD4\u8F83\u6587\u4EF6\u5939\u4E0D\u540C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># diff test3 test6
Only in test6: linklog.log
Only in test6: log2012.log
diff test3/log2013.log test6/log2013.log
1,10c1,3
&lt; 2013-01
&lt; 2013-02
&lt; 2013-03
&lt; 2013-04
&lt; 2013-05
&lt; 2013-06
&lt; 2013-07
&lt; 2013-08
&lt; 2013-09
&lt; 2013-10
---
&gt; hostnamebaidu=baidu.com
&gt; hostnamesina=sina.com
&gt; hostnames=true
diff test3/log2014.log test6/log2014.log
1,12d0
&lt; 2013-01
&lt; 2013-02
&lt; 2014-03
&lt; 2013-04
&lt; 2013-05
&lt; 2013-06
&lt; 2013-07
&lt; 2013-07
&lt; 2013-09
&lt; 2013-10
&lt; 2013-11
&lt; 2013-12
Only in test6: log2015.log
Only in test6: log2016.log
Only in test6: log2017.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>6\uFF09\u6BD4\u8F83\u4E24\u4E2A\u6587\u4EF6\u4E0D\u540C\uFF0C\u5E76\u751F\u4EA7\u8865\u4E01</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># diff -ruN log2013.log log2014.log &gt;patch.log
# ll
\u603B\u8BA1 12
-rw-r--r-- 2 root root  80 12-07 16:36 log2013.log
-rw-r--r-- 1 root root  96 12-07 18:01 log2014.log
-rw-r--r-- 1 root root 248 12-07 21:33 patch.log
# cat patch.log 
--- log2013.log 2012-12-07 16:36:26.000000000 +0800
+++ log2014.log 2012-12-07 18:01:54.000000000 +0800
@@ -1,10 +1,12 @@
 2013-01
 2013-02
-2013-03
+2014-03
 2013-04
 2013-05
 2013-06
 2013-07
-2013-08
+2013-07
 2013-09
 2013-10
+2013-11
+2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>7\uFF09\u6253\u8865\u4E01</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat log2013.log
2013-01
2013-02
2013-03
2013-04
2013-05
2013-06
2013-07
2013-08
2013-09
2013-10
# patch log2013.log patch.log 
patching file log2013.log
# cat log2013.log 
2013-01
2013-02
2014-03
2013-04
2013-05
2013-06
2013-07
2013-07
2013-09
2013-10
2013-11
2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>http://www.cnblogs.com/peida/archive/2012/12/12/2814048.html</p><p>http://man.linuxde.net/diff</p>`,50);function l(r,p){return e}var i=n(a,[["render",l],["__file","\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0835\uFF09-diff.html.vue"]]);export{i as default};
