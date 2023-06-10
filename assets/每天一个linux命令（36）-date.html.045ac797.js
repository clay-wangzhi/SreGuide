import{_ as n,e}from"./app.e7d2e5c5.js";const a={},s=e(`<p>\u5728linux\u73AF\u5883\u4E2D\uFF0C\u4E0D\u7BA1\u662F\u7F16\u7A0B\u8FD8\u662F\u5176\u4ED6\u7EF4\u62A4\uFF0C\u65F6\u95F4\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\uFF0C\u4E5F\u7ECF\u5E38\u4F1A\u7528\u5230\u65F6\u95F4\u7684\u8FD0\u7B97\uFF0C\u719F\u7EC3\u8FD0\u7528date\u547D\u4EE4\u6765\u8868\u793A\u81EA\u5DF1\u60F3\u8981\u8868\u793A\u7684\u65F6\u95F4\uFF0C\u80AF\u5B9A\u53EF\u4EE5\u7ED9\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5E26\u6765\u8BF8\u591A\u65B9\u4FBF\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>date(\u9009\u9879)(\u53C2\u6570)</code></p><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-d&lt;\u5B57\u7B26\u4E32&gt;\uFF1A\u663E\u793A\u5B57\u7B26\u4E32\u6240\u6307\u7684\u65E5\u671F\u4E0E\u65F6\u95F4\u3002\u5B57\u7B26\u4E32\u524D\u540E\u5FC5\u987B\u52A0\u4E0A\u53CC\u5F15\u53F7\uFF1B
-s&lt;\u5B57\u7B26\u4E32&gt;\uFF1A\u6839\u636E\u5B57\u7B26\u4E32\u6765\u8BBE\u7F6E\u65E5\u671F\u4E0E\u65F6\u95F4\u3002\u5B57\u7B26\u4E32\u524D\u540E\u5FC5\u987B\u52A0\u4E0A\u53CC\u5F15\u53F7\uFF1B
-u\uFF1A\u663E\u793AGMT\uFF1B
--help\uFF1A\u5728\u7EBF\u5E2E\u52A9\uFF1B
--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>&lt;+\u65F6\u95F4\u65E5\u671F\u683C\u5F0F&gt;\uFF1A\u6307\u5B9A\u663E\u793A\u65F6\u4F7F\u7528\u7684\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u3002</p><h2 id="\u65E5\u671F\u683C\u5F0F\u5B57\u7B26\u4E32\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u683C\u5F0F\u5B57\u7B26\u4E32\u5217\u8868" aria-hidden="true">#</a> \u65E5\u671F\u683C\u5F0F\u5B57\u7B26\u4E32\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>%H \u5C0F\u65F6\uFF0C24\u5C0F\u65F6\u5236\uFF0800~23\uFF09
%I \u5C0F\u65F6\uFF0C12\u5C0F\u65F6\u5236\uFF0801~12\uFF09
%k \u5C0F\u65F6\uFF0C24\u5C0F\u65F6\u5236\uFF080~23\uFF09
%l \u5C0F\u65F6\uFF0C12\u5C0F\u65F6\u5236\uFF081~12\uFF09
%M \u5206\u949F\uFF0800~59\uFF09
%p \u663E\u793A\u51FAAM\u6216PM
%r \u663E\u793A\u65F6\u95F4\uFF0C12\u5C0F\u65F6\u5236\uFF08hh:mm:ss %p\uFF09
%s \u4ECE1970\u5E741\u67081\u65E500:00:00\u5230\u76EE\u524D\u7ECF\u5386\u7684\u79D2\u6570
%S \u663E\u793A\u79D2\uFF0800~59\uFF09
%T \u663E\u793A\u65F6\u95F4\uFF0C24\u5C0F\u65F6\u5236\uFF08hh:mm:ss\uFF09
%X \u663E\u793A\u65F6\u95F4\u7684\u683C\u5F0F\uFF08%H:%M:%S\uFF09
%Z \u663E\u793A\u65F6\u533A\uFF0C\u65E5\u671F\u57DF\uFF08CST\uFF09
%a \u661F\u671F\u7684\u7B80\u79F0\uFF08Sun~Sat\uFF09
%A \u661F\u671F\u7684\u5168\u79F0\uFF08Sunday~Saturday\uFF09
%h,%b \u6708\u7684\u7B80\u79F0\uFF08Jan~Dec\uFF09
%B \u6708\u7684\u5168\u79F0\uFF08January~December\uFF09
%c \u65E5\u671F\u548C\u65F6\u95F4\uFF08Tue Nov 20 14:12:58 2012\uFF09
%d \u4E00\u4E2A\u6708\u7684\u7B2C\u51E0\u5929\uFF0801~31\uFF09
%x,%D \u65E5\u671F\uFF08mm/dd/yy\uFF09
%j \u4E00\u5E74\u7684\u7B2C\u51E0\u5929\uFF08001~366\uFF09
%m \u6708\u4EFD\uFF0801~12\uFF09
%w \u4E00\u4E2A\u661F\u671F\u7684\u7B2C\u51E0\u5929\uFF080\u4EE3\u8868\u661F\u671F\u5929\uFF09
%W \u4E00\u5E74\u7684\u7B2C\u51E0\u4E2A\u661F\u671F\uFF0800~53\uFF0C\u661F\u671F\u4E00\u4E3A\u7B2C\u4E00\u5929\uFF09
%y \u5E74\u7684\u6700\u540E\u4E24\u4E2A\u6570\u5B57\uFF081999\u5219\u662F99\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h2><p>1\uFF09\u683C\u5F0F\u5316\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#date +&quot;%Y-%m-%d&quot;
2018-03-29
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2\uFF09\u8F93\u51FA\u6628\u5929\u65E5\u671F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#date -d &quot;1 day ago&quot; +&quot;%Y-%m-%d&quot;
2018-03-28
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>3\uFF092\u79D2\u540E\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#date -d &quot;2 second&quot; +&quot;%Y-%m-%d %H:%M:%S&quot; 
2018-03-29 10:08:37
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>4\uFF09apache\u683C\u5F0F\u8F6C\u6362\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>date -d &quot;Dec 5, 2009 12:00:37 AM&quot; +&quot;%Y-%m-%d %H:%M.%S&quot;
2009-12-05 00:00.37
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>5\uFF09\u683C\u5F0F\u8F6C\u6362\u540E\u65F6\u95F4\u6E38\u8D70\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>date -d &quot;Dec 5, 2009 12:00:37 AM 2 year ago&quot; +&quot;%Y-%m-%d %H:%M.%S&quot;
2007-12-05 00:00.37
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>6\uFF09\u52A0\u51CF\u64CD\u4F5C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>date +%Y%m%d                   //\u663E\u793A\u524D\u5929\u5E74\u6708\u65E5
date -d &quot;+1 day&quot; +%Y%m%d       //\u663E\u793A\u524D\u4E00\u5929\u7684\u65E5\u671F
date -d &quot;-1 day&quot; +%Y%m%d       //\u663E\u793A\u540E\u4E00\u5929\u7684\u65E5\u671F
date -d &quot;-1 month&quot; +%Y%m%d     //\u663E\u793A\u4E0A\u4E00\u6708\u7684\u65E5\u671F
date -d &quot;+1 month&quot; +%Y%m%d     //\u663E\u793A\u4E0B\u4E00\u6708\u7684\u65E5\u671F
date -d &quot;-1 year&quot; +%Y%m%d      //\u663E\u793A\u524D\u4E00\u5E74\u7684\u65E5\u671F
date -d &quot;+1 year&quot; +%Y%m%d      //\u663E\u793A\u4E0B\u4E00\u5E74\u7684\u65E5\u671F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>7\uFF09\u8BBE\u5B9A\u65F6\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>date -s                        //\u8BBE\u7F6E\u5F53\u524D\u65F6\u95F4\uFF0C\u53EA\u6709root\u6743\u9650\u624D\u80FD\u8BBE\u7F6E\uFF0C\u5176\u4ED6\u53EA\u80FD\u67E5\u770B
date -s 20120523               //\u8BBE\u7F6E\u621020120523\uFF0C\u8FD9\u6837\u4F1A\u628A\u5177\u4F53\u65F6\u95F4\u8BBE\u7F6E\u6210\u7A7A00:00:00
date -s 01:01:01               //\u8BBE\u7F6E\u5177\u4F53\u65F6\u95F4\uFF0C\u4E0D\u4F1A\u5BF9\u65E5\u671F\u505A\u66F4\u6539
date -s &quot;01:01:01 2012-05-23&quot;  //\u8FD9\u6837\u53EF\u4EE5\u8BBE\u7F6E\u5168\u90E8\u65F6\u95F4
date -s &quot;01:01:01 20120523&quot;    //\u8FD9\u6837\u53EF\u4EE5\u8BBE\u7F6E\u5168\u90E8\u65F6\u95F4
date -s &quot;2012-05-23 01:01:01&quot;  //\u8FD9\u6837\u53EF\u4EE5\u8BBE\u7F6E\u5168\u90E8\u65F6\u95F4
date -s &quot;20120523 01:01:01&quot;    //\u8FD9\u6837\u53EF\u4EE5\u8BBE\u7F6E\u5168\u90E8\u65F6\u95F4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>8\uFF09\u6709\u65F6\u9700\u8981\u68C0\u67E5\u4E00\u7EC4\u547D\u4EE4\u82B1\u8D39\u7684\u65F6\u95F4\uFF0C\u4E3E\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

start=$(date +%s)
nmap man.linuxde.net &amp;&gt; /dev/null

end=$(date +%s)
difference=$(( end - start ))
echo $difference seconds.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>http://man.linuxde.net/date</p><p>http://www.cnblogs.com/peida/archive/2012/12/13/2815687.html</p>`,29);function r(l,t){return s}var p=n(a,[["render",r],["__file","\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0836\uFF09-date.html.vue"]]);export{p as default};
