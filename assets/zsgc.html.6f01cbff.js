import{_ as e,r as l,c as p,a as s,b as t,F as o,e as r,d as n,o as i}from"./app.89bc646c.js";const b={},c=r(`<h1 id="\u521B\u5EFA\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664" aria-hidden="true">#</a> \u521B\u5EFA\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664</h1><h3 id="touch\u547D\u4EE4-\u521B\u5EFA\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#touch\u547D\u4EE4-\u521B\u5EFA\u6587\u4EF6" aria-hidden="true">#</a> touch\u547D\u4EE4\uFF08\u521B\u5EFA\u6587\u4EF6\uFF09</h3><p>linux\u7684touch\u547D\u4EE4\u4E0D\u5E38\u7528\uFF0C\u4E00\u822C\u5728\u4F7F\u7528make\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u7528\u5230\uFF0C\u7528\u6765\u4FEE\u6539\u6587\u4EF6\u65F6\u95F4\u6233\uFF0C\u6216\u8005\u65B0\u5EFA\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\u3002</p><h4 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>touch(\u9009\u9879)(\u53C2\u6570)</code></p><p>\u9009\u9879</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-a\uFF1A\u6216--time=atime\u6216--time=access\u6216--time=use  \u53EA\u66F4\u6539\u5B58\u53D6\u65F6\u95F4\uFF1B
-c\uFF1A\u6216--no-create  \u4E0D\u5EFA\u7ACB\u4EFB\u4F55\u6587\u4EF6\uFF1B
-d\uFF1A&lt;\u65F6\u95F4\u65E5\u671F&gt; \u4F7F\u7528\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\uFF0C\u800C\u975E\u73B0\u5728\u7684\u65F6\u95F4\uFF1B
-f\uFF1A\u6B64\u53C2\u6570\u5C06\u5FFD\u7565\u4E0D\u4E88\u5904\u7406\uFF0C\u4EC5\u8D1F\u8D23\u89E3\u51B3BSD\u7248\u672Ctouch\u6307\u4EE4\u7684\u517C\u5BB9\u6027\u95EE\u9898\uFF1B
-m\uFF1A\u6216--time=mtime\u6216--time=modify  \u53EA\u66F4\u8BE5\u53D8\u52A8\u65F6\u95F4\uFF1B
-r\uFF1A&lt;\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55&gt;  \u628A\u6307\u5B9A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u65E5\u671F\u65F6\u95F4\uFF0C\u7EDF\u7EDF\u8BBE\u6210\u548C\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u65E5\u671F\u65F6\u95F4\u76F8\u540C\uFF1B
-t\uFF1A&lt;\u65E5\u671F\u65F6\u95F4&gt;  \u4F7F\u7528\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\uFF0C\u800C\u975E\u73B0\u5728\u7684\u65F6\u95F4\uFF1B
--help\uFF1A\u5728\u7EBF\u5E2E\u52A9\uFF1B
--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h4><p>touch\u547D\u4EE4\u53C2\u6570\u53EF\u66F4\u6539\u6587\u6863\u6216\u76EE\u5F55\u7684\u65E5\u671F\u65F6\u95F4\uFF0C\u5305\u62EC\u5B58\u53D6\u65F6\u95F4\u548C\u66F4\u6539\u65F6\u95F4\u3002</p><h4 id="\u5E38\u7528\u8303\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09\u521B\u5EFA\u4E0D\u5B58\u5728\u7684\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># touch log2012.log log2013.log
# ll
-rw-r--r-- 1 root root    0 10-28 16:01 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679Clog2014.log\u4E0D\u5B58\u5728\uFF0C\u5219\u4E0D\u521B\u5EFA\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># touch -c log2014.log
# ll
-rw-r--r-- 1 root root    0 10-28 16:01 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>2\uFF09\u66F4\u65B0log.log\u7684\u65F6\u95F4\u548Clog2012.log\u65F6\u95F4\u6233\u76F8\u540C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
-rw-r--r-- 1 root root    0 10-28 16:01 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
# touch -r log.log log2012.log 
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>3\uFF09\u8BBE\u5B9A\u6587\u4EF6\u7684\u65F6\u95F4\u6233</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
-rw-r--r-- 1 root root    0 10-28 14:48 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
# touch -t 201211142234.50 log.log
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log2012.log
-rw-r--r-- 1 root root    0 10-28 16:01 log2013.log
-rw-r--r-- 1 root root    0 2012-11-14 log.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>-t time \u4F7F\u7528\u6307\u5B9A\u7684\u65F6\u95F4\u503C time \u4F5C\u4E3A\u6307\u5B9A\u6587\u4EF6\u76F8\u5E94\u65F6\u95F4\u6233\u8BB0\u7684\u65B0\u503C\uFF0E\u6B64\u5904\u7684 time\u89C4\u5B9A\u4E3A\u5982\u4E0B\u5F62\u5F0F\u7684\u5341\u8FDB\u5236\u6570:</p><p>[[CC]YY]MMDDhhmm[.SS]</p><p>\u8FD9\u91CC\uFF0CCC\u4E3A\u5E74\u6570\u4E2D\u7684\u524D\u4E24\u4F4D\uFF0C\u5373\u201D\u4E16\u7EAA\u6570\u201D\uFF1BYY\u4E3A\u5E74\u6570\u7684\u540E\u4E24\u4F4D\uFF0C\u5373\u67D0\u4E16\u7EAA\u4E2D\u7684\u5E74\u6570\uFF0E\u5982\u679C\u4E0D\u7ED9\u51FACC\u7684\u503C\uFF0C\u5219touch \u5C06\u628A\u5E74\u6570CCYY\u9650\u5B9A\u57281969--2068\u4E4B\u5185\uFF0EMM\u4E3A\u6708\u6570\uFF0CDD\u4E3A\u5929\u5C06\u628A\u5E74\u6570CCYY\u9650\u5B9A\u57281969--2068\u4E4B\u5185\uFF0EMM\u4E3A\u6708\u6570\uFF0CDD\u4E3A\u5929\u6570\uFF0Chh \u4E3A\u5C0F\u65F6\u6570(\u51E0\u70B9)\uFF0Cmm\u4E3A\u5206\u949F\u6570\uFF0CSS\u4E3A\u79D2\u6570\uFF0E\u6B64\u5904\u79D2\u7684\u8BBE\u5B9A\u8303\u56F4\u662F0--61\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5904\u7406\u95F0\u79D2\uFF0E\u8FD9\u4E9B\u6570\u5B57\u7EC4\u6210\u7684\u65F6\u95F4\u662F\u73AF\u5883\u53D8\u91CFTZ\u6307\u5B9A\u7684\u65F6\u533A\u4E2D\u7684\u4E00\u4E2A\u65F6 \u95F4\uFF0E\u7531\u4E8E\u7CFB\u7EDF\u7684\u9650\u5236\uFF0C\u65E9\u4E8E1970\u5E741\u67081\u65E5\u7684\u65F6\u95F4\u662F\u9519\u8BEF\u7684\u3002</p><p>4\uFF09\u540C\u65F6\u521B\u5EFA\u591A\u4E2A\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">touch</span> file<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">20</span><span class="token punctuation">}</span>
<span class="token function">touch</span> /home/<span class="token punctuation">{</span>aa,bb<span class="token punctuation">}</span>
//<span class="token punctuation">{</span><span class="token punctuation">}</span>\u91CC\u9762\u4E3A\u96C6\u5408
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="mkdir\u547D\u4EE4-\u521B\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#mkdir\u547D\u4EE4-\u521B\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> mkdir\u547D\u4EE4\uFF08\u521B\u5EFA\u76EE\u5F55\uFF09</h3>`,25),u=n("mkdir\u547D\u4EE4\u7528\u6765\u521B\u5EFA\u76EE\u5F55\u3002\u8BE5\u547D\u4EE4\u521B\u5EFA\u7531"),d={href:"http://man.linuxde.net/dirname",target:"_blank",rel:"noopener noreferrer"},m=n("dirname"),x=n("\u547D\u540D\u7684\u76EE\u5F55\u3002\u5982\u679C\u5728\u76EE\u5F55\u540D\u7684\u524D\u9762\u6CA1\u6709\u52A0\u4EFB\u4F55\u8DEF\u5F84\u540D\uFF0C\u5219\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u7531dirname\u6307\u5B9A\u7684\u76EE\u5F55\uFF1B\u5982\u679C\u7ED9\u51FA\u4E86\u4E00\u4E2A\u5DF2\u7ECF\u5B58\u5728\u7684\u8DEF\u5F84\uFF0C\u5C06\u4F1A\u5728\u8BE5\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u6307\u5B9A\u7684\u76EE\u5F55\u3002\u5728\u521B\u5EFA\u76EE\u5F55\u65F6\uFF0C\u5E94\u4FDD\u8BC1\u65B0\u5EFA\u7684\u76EE\u5F55\u4E0E\u5B83\u6240\u5728\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u6CA1\u6709\u91CD\u540D\u3002"),g=r(`<h4 id="\u8BED\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-1" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>cd (\u9009\u9879) (\u53C2\u6570)</code></p><h4 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-Z\uFF1A\u8BBE\u7F6E\u5B89\u5168\u4E0A\u4E0B\u6587\uFF0C\u5F53\u4F7F\u7528SELinux\u65F6\u6709\u6548\uFF1B
-m&lt;\u76EE\u6807\u5C5E\u6027&gt;\u6216--mode&lt;\u76EE\u6807\u5C5E\u6027&gt;\u5EFA\u7ACB\u76EE\u5F55\u7684\u540C\u65F6\u8BBE\u7F6E\u76EE\u5F55\u7684\u6743\u9650\uFF1B
-p\u6216--parents \u82E5\u6240\u8981\u5EFA\u7ACB\u76EE\u5F55\u7684\u4E0A\u5C42\u76EE\u5F55\u76EE\u524D\u5C1A\u672A\u5EFA\u7ACB\uFF0C\u5219\u4F1A\u4E00\u5E76\u5EFA\u7ACB\u4E0A\u5C42\u76EE\u5F55\uFF1B
-v, --verbose  \u6BCF\u6B21\u521B\u5EFA\u65B0\u76EE\u5F55\u90FD\u663E\u793A\u4FE1\u606F
--version \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u5E38\u7528\u8303\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B-1" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09\u521B\u5EFA\u4E00\u4E2A\u7A7A\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir test1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2\uFF09\u9012\u5F52\u521B\u5EFA\u591A\u4E2A\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p test2/test22
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3\uFF09\u521B\u5EFA\u6743\u9650\u4E3A777\u7684\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -m 777 test3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4\uFF09\u4E00\u4E2A\u547D\u4EE4\u521B\u5EFA\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#mkdir -vp scf/{lib/,bin/,doc/{info,product},logs/{info,product},service/deploy/{info,product}}
mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/lib\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/bin\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/doc\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/doc/info\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/doc/product\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/logs\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/logs/info\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/logs/product\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/service\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/service/deploy\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/service/deploy/info\u201D

mkdir: \u5DF2\u521B\u5EFA\u76EE\u5F55 \u201Cscf/service/deploy/product\u201D

# tree scf/

scf/

|-- bin

|-- doc

|   |-- info

|   \`-- product

|-- lib

|-- logs

|   |-- info

|   \`-- product

\`-- service

   	 	\`-- deploy

  	    	|-- info

        	\`-- product


12 directories, 0 files

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h3 id="cp\u547D\u4EE4-\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#cp\u547D\u4EE4-\u590D\u5236" aria-hidden="true">#</a> cp\u547D\u4EE4\uFF08\u590D\u5236\uFF09</h3><p>cp\u547D\u4EE4\u7528\u6765\u590D\u5236\u6587\u4EF6\u6216\u8005\u76EE\u5F55\uFF0C\u662FLinux\u7CFB\u7EDF\u4E2D\u6700\u5E38\u7528\u7684\u547D\u4EE4\u4E4B\u4E00\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0Cshell\u4F1A\u8BBE\u7F6E\u4E00\u4E2A\u522B\u540D\uFF0C\u5728\u547D\u4EE4\u884C\u4E0B\u590D\u5236\u6587\u4EF6\u65F6\uFF0C\u5982\u679C\u76EE\u6807\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5C31\u4F1A\u8BE2\u95EE\u662F\u5426\u8986\u76D6\uFF0C\u4E0D\u7BA1\u4F60\u662F\u5426\u4F7F\u7528-i\u53C2\u6570\u3002\u4F46\u662F\u5982\u679C\u662F\u5728shell\u811A\u672C\u4E2D\u6267\u884Ccp\u65F6\uFF0C\u6CA1\u6709-i\u53C2\u6570\u65F6\u4E0D\u4F1A\u8BE2\u95EE\u662F\u5426\u8986\u76D6\u3002\u8FD9\u8BF4\u660E\u547D\u4EE4\u884C\u548Cshell\u811A\u672C\u7684\u6267\u884C\u65B9\u5F0F\u6709\u4E9B\u4E0D\u540C\u3002</p><h4 id="\u8BED\u6CD5-2" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-2" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>cp(\u9009\u9879)(\u53C2\u6570)</code></p><h4 id="\u9009\u9879-1" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-1" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-a\uFF1A\u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u540C\u65F6\u6307\u5B9A&quot;-dpR&quot;\u53C2\u6570\u76F8\u540C\uFF1B
-d\uFF1A\u5F53\u590D\u5236\u7B26\u53F7\u8FDE\u63A5\u65F6\uFF0C\u628A\u76EE\u6807\u6587\u4EF6\u6216\u76EE\u5F55\u4E5F\u5EFA\u7ACB\u4E3A\u7B26\u53F7\u8FDE\u63A5\uFF0C\u5E76\u6307\u5411\u4E0E\u6E90\u6587\u4EF6\u6216\u76EE\u5F55\u8FDE\u63A5\u7684\u539F\u59CB\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
-f\uFF1A\u5F3A\u884C\u590D\u5236\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u4E0D\u8BBA\u76EE\u6807\u6587\u4EF6\u6216\u76EE\u5F55\u662F\u5426\u5DF2\u5B58\u5728\uFF1B
-i\uFF1A\u8986\u76D6\u65E2\u6709\u6587\u4EF6\u4E4B\u524D\u5148\u8BE2\u95EE\u7528\u6237\uFF1B
-l\uFF1A\u5BF9\u6E90\u6587\u4EF6\u5EFA\u7ACB\u786C\u8FDE\u63A5\uFF0C\u800C\u975E\u590D\u5236\u6587\u4EF6\uFF1B
-p\uFF1A\u4FDD\u7559\u6E90\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u5C5E\u6027\uFF1B
-R/r\uFF1A\u9012\u5F52\u5904\u7406\uFF0C\u5C06\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4E0E\u5B50\u76EE\u5F55\u4E00\u5E76\u5904\u7406\uFF1B
-s\uFF1A\u5BF9\u6E90\u6587\u4EF6\u5EFA\u7ACB\u7B26\u53F7\u8FDE\u63A5\uFF0C\u800C\u975E\u590D\u5236\u6587\u4EF6\uFF1B
-u\uFF1A\u4F7F\u7528\u8FD9\u9879\u53C2\u6570\u540E\u53EA\u4F1A\u5728\u6E90\u6587\u4EF6\u7684\u66F4\u6539\u65F6\u95F4\u8F83\u76EE\u6807\u6587\u4EF6\u66F4\u65B0\u65F6\u6216\u662F\u540D\u79F0\u76F8\u4E92\u5BF9\u5E94\u7684\u76EE\u6807\u6587\u4EF6\u5E76\u4E0D\u5B58\u5728\u65F6\uFF0C\u624D\u590D\u5236\u6587\u4EF6\uFF1B
-S\uFF1A\u5728\u5907\u4EFD\u6587\u4EF6\u65F6\uFF0C\u7528\u6307\u5B9A\u7684\u540E\u7F00\u201CSUFFIX\u201D\u4EE3\u66FF\u6587\u4EF6\u7684\u9ED8\u8BA4\u540E\u7F00\uFF1B
-b\uFF1A\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u6587\u4EF6\u76EE\u6807\u524D\u5C06\u76EE\u6807\u6587\u4EF6\u5907\u4EFD\uFF1B
-v\uFF1A\u8BE6\u7EC6\u663E\u793A\u547D\u4EE4\u6267\u884C\u7684\u64CD\u4F5C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h4><ul><li>\u6E90\u6587\u4EF6\uFF1A\u5236\u5B9A\u6E90\u6587\u4EF6\u5217\u8868\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Ccp\u547D\u4EE4\u4E0D\u80FD\u590D\u5236\u76EE\u5F55\uFF0C\u5982\u679C\u8981\u590D\u5236\u76EE\u5F55\uFF0C\u5219\u5FC5\u987B\u4F7F\u7528<code>-R</code>\u9009\u9879\uFF1B</li><li>\u76EE\u6807\u6587\u4EF6\uFF1A\u6307\u5B9A\u76EE\u6807\u6587\u4EF6\u3002\u5F53\u201C\u6E90\u6587\u4EF6\u201D\u4E3A\u591A\u4E2A\u6587\u4EF6\u65F6\uFF0C\u8981\u6C42\u201C\u76EE\u6807\u6587\u4EF6\u201D\u4E3A\u6307\u5B9A\u7684\u76EE\u5F55\u3002</li></ul><h4 id="\u5E38\u7528\u8303\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B-2" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09\u590D\u5236\u5355\u4E2A\u6587\u4EF6\u5230\u76EE\u6807\u76EE\u5F55\uFF0C\u6587\u4EF6\u5728\u76EE\u6807\u6587\u4EF6\u4E2D\u4E0D\u5B58\u5728</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cp log.log test5
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxr-xr-x 2 root root 4096 10-28 14:53 test5
# cd test5
# ll
-rw-r--r-- 1 root root 0 10-28 14:46 log5-1.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-2.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-3.log
-rw-r--r-- 1 root root 0 10-28 14:53 log.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u5728\u6CA1\u6709\u5E26-a\u53C2\u6570\u65F6\uFF0C\u4E24\u4E2A\u6587\u4EF6\u7684\u65F6\u95F4\u662F\u4E0D\u4E00\u6837\u7684\u3002\u5728\u5E26\u4E86-a\u53C2\u6570\u65F6\uFF0C\u4E24\u4E2A\u6587\u4EF6\u7684\u65F6\u95F4\u662F\u4E00\u81F4\u7684\u3002</p><p>2\uFF09\u76EE\u6807\u6587\u4EF6\u5B58\u5728\u65F6\uFF0C\u4F1A\u8BE2\u95EE\u662F\u5426\u8986\u76D6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cp log.log test5
cp\uFF1A\u662F\u5426\u8986\u76D6\u201Ctest5/log.log\u201D? n
# cp -a log.log test5
cp\uFF1A\u662F\u5426\u8986\u76D6\u201Ctest5/log.log\u201D? y
# cd test5/
# ll
-rw-r--r-- 1 root root 0 10-28 14:46 log5-1.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-2.log
-rw-r--r-- 1 root root 0 10-28 14:46 log5-3.log
-rw-r--r-- 1 root root 0 10-28 14:48 log.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u76EE\u6807\u6587\u4EF6\u5B58\u5728\u65F6\uFF0C\u4F1A\u8BE2\u95EE\u662F\u5426\u8986\u76D6\u3002\u8FD9\u662F\u56E0\u4E3Acp\u662Fcp -i\u7684\u522B\u540D\u3002\u76EE\u6807\u6587\u4EF6\u5B58\u5728\u65F6\uFF0C\u5373\u4F7F\u52A0\u4E86-f\u6807\u5FD7\uFF0C\u4E5F\u8FD8\u4F1A\u8BE2\u95EE\u662F\u5426\u8986\u76D6\u3002</p><p>3\uFF09\u590D\u5236\u6574\u4E2A\u76EE\u5F55</p><p>\u76EE\u6807\u76EE\u5F55\u5B58\u5728\u65F6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#cp -a test3 test5 
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxr-xr-x 3 root root 4096 10-28 15:11 test5
# cd test5/
# ll
-rw-r--r-- 1 root root    0 10-28 14:46 log5-1.log
-rw-r--r-- 1 root root    0 10-28 14:46 log5-2.log
-rw-r--r-- 1 root root    0 10-28 14:46 log5-3.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u76EE\u6807\u76EE\u5F55\u4E0D\u5B58\u5728\u65F6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cp -a test3 test4
# ll
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxrwxrwx 2 root root 4096 10-28 14:47 test4
drwxr-xr-x 3 root root 4096 10-28 15:11 test5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u6CE8\u610F\u76EE\u6807\u76EE\u5F55\u5B58\u5728\u4E0E\u5426\u7ED3\u679C\u662F\u4E0D\u4E00\u6837\u7684\u3002\u76EE\u6807\u76EE\u5F55\u5B58\u5728\u65F6\uFF0C\u6574\u4E2A\u6E90\u76EE\u5F55\u88AB\u590D\u5236\u5230\u76EE\u6807\u76EE\u5F55\u91CC\u9762\u3002</p><p>4\uFF09\u590D\u5236\u7684 log.log \u5EFA\u7ACB\u4E00\u4E2A\u94FE\u63A5\u5230 log_link.log</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cp -s log.log log_link.log
# ll
lrwxrwxrwx 1 root root    7 10-28 15:18 log_link.log -&gt; log.log
-rw-r--r-- 1 root root    0 10-28 14:48 log.log
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxrwxrwx 2 root root 4096 10-28 14:47 test4
drwxr-xr-x 3 root root 4096 10-28 15:11 test5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u90A3\u4E2A log_link.log \u662F\u7531 -s \u7684\u53C2\u6570\u9020\u6210\u7684\uFF0C\u5EFA\u7ACB\u7684\u662F\u4E00\u4E2A\u300E\u5FEB\u6377\u65B9\u5F0F\u300F\uFF0C\u6240\u4EE5\u60A8\u4F1A\u770B\u5230\u5728\u6587\u4EF6\u7684\u6700\u53F3\u8FB9\uFF0C\u4F1A\u663E\u793A\u8FD9\u4E2A\u6587\u4EF6\u662F\u300E\u8FDE\u7ED3\u300F\u5230\u54EA\u91CC\u53BB\u7684\uFF01</p><p>5\uFF09\u5C06\u6587\u4EF6file\u590D\u5236\u5230\u76EE\u5F55<code>/usr/men/tmp</code>\u4E0B\uFF0C\u5E76\u6539\u540D\u4E3Afile1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp file /usr/men/tmp/file1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>6\uFF09\u5C06\u76EE\u5F55<code>/usr/men</code>\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u53CA\u5176\u5B50\u76EE\u5F55\u590D\u5236\u5230\u76EE\u5F55<code>/usr/zh</code>\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp -i /usr/men m*.c /usr/zh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6211\u4EEC\u5728Linux\u4E0B\u4F7F\u7528cp\u547D\u4EE4\u590D\u5236\u6587\u4EF6\u65F6\u5019\uFF0C\u6709\u65F6\u5019\u4F1A\u9700\u8981\u8986\u76D6\u4E00\u4E9B\u540C\u540D\u6587\u4EF6\uFF0C\u8986\u76D6\u6587\u4EF6\u7684\u65F6\u5019\u90FD\u4F1A\u6709\u63D0\u793A\uFF1A\u9700\u8981\u4E0D\u505C\u7684\u6309Y\u6765\u786E\u5B9A\u6267\u884C\u8986\u76D6\u3002\u6587\u4EF6\u6570\u91CF\u4E0D\u591A\u8FD8\u597D\uFF0C\u4F46\u662F\u8981\u662F\u51E0\u767E\u4E2A\u4F30\u8BA1\u6309Y\u90FD\u8981\u5410\u8840\u4E86\uFF0C\u4E8E\u662F\u6298\u817E\u6765\u534A\u5929\u603B\u7ED3\u4E86\u4E00\u4E2A\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp aaa/* /bbb
\u590D\u5236\u76EE\u5F55aaa\u4E0B\u6240\u6709\u5230/bbb\u76EE\u5F55\u4E0B\uFF0C\u8FD9\u65F6\u5982\u679C/bbb\u76EE\u5F55\u4E0B\u6709\u548Caaa\u540C\u540D\u7684\u6587\u4EF6\uFF0C\u9700\u8981\u6309Y\u6765\u786E\u8BA4\u5E76\u4E14\u4F1A\u7565\u8FC7aaa\u76EE\u5F55\u4E0B\u7684\u5B50\u76EE\u5F55\u3002

cp -r aaa/* /bbb
\u8FD9\u6B21\u4F9D\u7136\u9700\u8981\u6309Y\u6765\u786E\u8BA4\u64CD\u4F5C\uFF0C\u4F46\u662F\u6CA1\u6709\u5FFD\u7565\u5B50\u76EE\u5F55\u3002

cp -r -a aaa/* /bbb
\u4F9D\u7136\u9700\u8981\u6309Y\u6765\u786E\u8BA4\u64CD\u4F5C\uFF0C\u5E76\u4E14\u628Aaaa\u76EE\u5F55\u4EE5\u53CA\u5B50\u76EE\u5F55\u548C\u6587\u4EF6\u5C5E\u6027\u4E5F\u4F20\u9012\u5230\u4E86/bbb\u3002

\\cp -r -a aaa/* /bbb
\u6210\u529F\uFF0C\u6CA1\u6709\u63D0\u793A\u6309Y\u3001\u4F20\u9012\u4E86\u76EE\u5F55\u5C5E\u6027\u3001\u6CA1\u6709\u7565\u8FC7\u76EE\u5F55\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="mv\u547D\u4EE4-\u79FB\u52A8" tabindex="-1"><a class="header-anchor" href="#mv\u547D\u4EE4-\u79FB\u52A8" aria-hidden="true">#</a> mv\u547D\u4EE4\uFF08\u79FB\u52A8\uFF09</h3><p><strong>mv\u547D\u4EE4</strong>\u7528\u6765\u5BF9\u6587\u4EF6\u6216\u76EE\u5F55\u91CD\u65B0\u547D\u540D\uFF0C\u6216\u8005\u5C06\u6587\u4EF6\u4ECE\u4E00\u4E2A\u76EE\u5F55\u79FB\u5230\u53E6\u4E00\u4E2A\u76EE\u5F55\u4E2D\u3002source\u8868\u793A\u6E90\u6587\u4EF6\u6216\u76EE\u5F55\uFF0Ctarget\u8868\u793A\u76EE\u6807\u6587\u4EF6\u6216\u76EE\u5F55\u3002\u5982\u679C\u5C06\u4E00\u4E2A\u6587\u4EF6\u79FB\u5230\u4E00\u4E2A\u5DF2\u7ECF\u5B58\u5728\u7684\u76EE\u6807\u6587\u4EF6\u4E2D\uFF0C\u5219\u76EE\u6807\u6587\u4EF6\u7684\u5185\u5BB9\u5C06\u88AB\u8986\u76D6\u3002</p><p>mv\u547D\u4EE4\u53EF\u4EE5\u7528\u6765\u5C06\u6E90\u6587\u4EF6\u79FB\u81F3\u4E00\u4E2A\u76EE\u6807\u6587\u4EF6\u4E2D\uFF0C\u6216\u5C06\u4E00\u7EC4\u6587\u4EF6\u79FB\u81F3\u4E00\u4E2A\u76EE\u6807\u76EE\u5F55\u4E2D\u3002\u6E90\u6587\u4EF6\u88AB\u79FB\u81F3\u76EE\u6807\u6587\u4EF6\u6709\u4E24\u79CD\u4E0D\u540C\u7684\u7ED3\u679C\uFF1A</p><ol><li>\u5982\u679C\u76EE\u6807\u6587\u4EF6\u662F\u5230\u67D0\u4E00\u76EE\u5F55\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u6E90\u6587\u4EF6\u4F1A\u88AB\u79FB\u5230\u6B64\u76EE\u5F55\u4E0B\uFF0C\u4E14\u6587\u4EF6\u540D\u4E0D\u53D8\u3002</li><li>\u5982\u679C\u76EE\u6807\u6587\u4EF6\u4E0D\u662F\u76EE\u5F55\u6587\u4EF6\uFF0C\u5219\u6E90\u6587\u4EF6\u540D\uFF08\u53EA\u80FD\u6709\u4E00\u4E2A\uFF09\u4F1A\u53D8\u4E3A\u6B64\u76EE\u6807\u6587\u4EF6\u540D\uFF0C\u5E76\u8986\u76D6\u5DF1\u5B58\u5728\u7684\u540C\u540D\u6587\u4EF6\u3002\u5982\u679C\u6E90\u6587\u4EF6\u548C\u76EE\u6807\u6587\u4EF6\u5728\u540C\u4E00\u4E2A\u76EE\u5F55\u4E0B\uFF0Cmv\u7684\u4F5C\u7528\u5C31\u662F\u6539\u6587\u4EF6\u540D\u3002\u5F53\u76EE\u6807\u6587\u4EF6\u662F\u76EE\u5F55\u6587\u4EF6\u65F6\uFF0C\u6E90\u6587\u4EF6\u6216\u76EE\u5F55\u53C2\u6570\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u5219\u6240\u6709\u7684\u6E90\u6587\u4EF6\u90FD\u4F1A\u88AB\u79FB\u81F3\u76EE\u6807\u6587\u4EF6\u4E2D\u3002\u6240\u6709\u79FB\u5230\u8BE5\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u90FD\u5C06\u4FDD\u7559\u4EE5\u524D\u7684\u6587\u4EF6\u540D\u3002</li></ol><p>\u6CE8\u610F\u4E8B\u9879\uFF1Amv\u4E0Ecp\u7684\u7ED3\u679C\u4E0D\u540C\uFF0Cmv\u597D\u50CF\u6587\u4EF6\u201C\u642C\u5BB6\u201D\uFF0C\u6587\u4EF6\u4E2A\u6570\u5E76\u672A\u589E\u52A0\u3002\u800Ccp\u5BF9\u6587\u4EF6\u8FDB\u884C\u590D\u5236\uFF0C\u6587\u4EF6\u4E2A\u6570\u589E\u52A0\u4E86\u3002</p><h4 id="\u8BED\u6CD5-3" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-3" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>mv(\u9009\u9879)(\u53C2\u6570)</code></p><h4 id="\u9009\u9879-2" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-2" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--backup=&lt;\u5907\u4EFD\u6A21\u5F0F&gt;\uFF1A\u82E5\u9700\u8986\u76D6\u6587\u4EF6\uFF0C\u5219\u8986\u76D6\u524D\u5148\u884C\u5907\u4EFD\uFF1B
-b\uFF1A\u5F53\u6587\u4EF6\u5B58\u5728\u65F6\uFF0C\u8986\u76D6\u524D\uFF0C\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A\u5907\u4EFD\uFF1B
-f\uFF1A\u82E5\u76EE\u6807\u6587\u4EF6\u6216\u76EE\u5F55\u4E0E\u73B0\u6709\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u91CD\u590D\uFF0C\u5219\u76F4\u63A5\u8986\u76D6\u73B0\u6709\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
-i\uFF1A\u4EA4\u4E92\u5F0F\u64CD\u4F5C\uFF0C\u8986\u76D6\u524D\u5148\u884C\u8BE2\u95EE\u7528\u6237\uFF0C\u5982\u679C\u6E90\u6587\u4EF6\u4E0E\u76EE\u6807\u6587\u4EF6\u6216\u76EE\u6807\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u540C\u540D\uFF0C\u5219\u8BE2\u95EE\u7528\u6237\u662F\u5426\u8986\u76D6\u76EE\u6807\u6587\u4EF6\u3002\u7528\u6237\u8F93\u5165\u201Dy\u201D\uFF0C\u8868\u793A\u5C06\u8986\u76D6\u76EE\u6807\u6587\u4EF6\uFF1B\u8F93\u5165\u201Dn\u201D\uFF0C\u8868\u793A\u53D6\u6D88\u5BF9\u6E90\u6587\u4EF6\u7684\u79FB\u52A8\u3002\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u8BEF\u5C06\u6587\u4EF6\u8986\u76D6\u3002
--strip-trailing-slashes\uFF1A\u5220\u9664\u6E90\u6587\u4EF6\u4E2D\u7684\u659C\u6760\u201C/\u201D\uFF1B
-S&lt;\u540E\u7F00&gt;\uFF1A\u4E3A\u5907\u4EFD\u6587\u4EF6\u6307\u5B9A\u540E\u7F00\uFF0C\u800C\u4E0D\u4F7F\u7528\u9ED8\u8BA4\u7684\u540E\u7F00\uFF1B
-t:--target-directory=&lt;\u76EE\u5F55&gt;,\u6307\u5B9A\u6E90\u6587\u4EF6\u8981\u79FB\u52A8\u5230\u76EE\u6807\u76EE\u5F55\uFF1B
-u\uFF1A\u5F53\u6E90\u6587\u4EF6\u6BD4\u76EE\u6807\u6587\u4EF6\u65B0\u6216\u8005\u76EE\u6807\u6587\u4EF6\u4E0D\u5B58\u5728\u65F6\uFF0C\u624D\u6267\u884C\u79FB\u52A8\u64CD\u4F5C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="\u53C2\u6570-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-1" aria-hidden="true">#</a> \u53C2\u6570</h4><ul><li>\u6E90\u6587\u4EF6\uFF1A\u6E90\u6587\u4EF6\u5217\u8868\u3002</li><li>\u76EE\u6807\u6587\u4EF6\uFF1A\u5982\u679C\u201C\u76EE\u6807\u6587\u4EF6\u201D\u662F\u6587\u4EF6\u540D\u5219\u5728\u79FB\u52A8\u6587\u4EF6\u7684\u540C\u65F6\uFF0C\u5C06\u5176\u6539\u540D\u4E3A\u201C\u76EE\u6807\u6587\u4EF6\u201D\uFF1B\u5982\u679C\u201C\u76EE\u6807\u6587\u4EF6\u201D\u662F\u76EE\u5F55\u540D\u5219\u5C06\u6E90\u6587\u4EF6\u79FB\u52A8\u5230\u201C\u76EE\u6807\u6587\u4EF6\u201D\u4E0B\u3002</li></ul><h4 id="\u5E38\u7528\u8303\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B-3" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09\u6587\u4EF6\u6539\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 20drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
-rw-r--r-- 1 root root   16 10-28 06:04 test.log
# mv test.log test1.txt
# ll
\u603B\u8BA1 20drwxr-xr-x 6 root root 4096 10-27 01:58 scf
-rw-r--r-- 1 root root   16 10-28 06:04 test1.txt
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>2\uFF09\u79FB\u52A8\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 20drwxr-xr-x 6 root root 4096 10-27 01:58 scf
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# mv test1.txt test3
# ll
\u603B\u8BA1 16drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 06:09 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# cd test3
# ll
\u603B\u8BA1 4
-rw-r--r-- 1 root root 29 10-28 06:05 test1.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>3\uFF09\u5C06\u6587\u4EF6log1.txt,log2.txt,log3.txt\u79FB\u52A8\u5230\u76EE\u5F55test3\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 28
-rw-r--r-- 1 root root    8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root   12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log3.txt
drwxrwxrwx 2 root root 4096 10-28 06:09 test3
# mv log1.txt log2.txt log3.txt test3
# ll
\u603B\u8BA1 16drwxrwxrwx 2 root root 4096 10-28 06:18 test3
# cd test3/
# ll
\u603B\u8BA1 16
-rw-r--r-- 1 root root  8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root 12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
-rw-r--r-- 1 root root 29 10-28 06:05 test1.txt
# ll
\u603B\u8BA1 20
-rw-r--r-- 1 root root    8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root   12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log3.txt
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
# mv -t /opt/soft/test/test4/ log1.txt log2.txt 	log3.txt 
]# cd ..
# cd test4/
# ll
\u603B\u8BA1 12
-rw-r--r-- 1 root root  8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root 12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>4\uFF09\u5C06\u6587\u4EF6file1\u6539\u540D\u4E3Afile2\uFF0C\u5982\u679Cfile2\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u8BE2\u95EE\u662F\u5426\u8986\u76D6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 12
-rw-r--r-- 1 root root  8 10-28 06:15 log1.txt
-rw-r--r-- 1 root root 12 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
# cat log1.txt 
odfdfs
# cat log2.txt 
ererwerwer
# mv -i log1.txt log2.txt 
mv\uFF1A\u662F\u5426\u8986\u76D6\u201Clog2.txt\u201D? y
# cat log2.txt 
odfdfs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>5\uFF09\u5C06\u6587\u4EF6file1\u6539\u540D\u4E3Afile2\uFF0C\u5373\u4F7Ffile2\u5B58\u5728\uFF0C\u4E5F\u662F\u76F4\u63A5\u8986\u76D6\u6389</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 8
-rw-r--r-- 1 root root  8 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
# cat log2.txt 
odfdfs
# cat log3
cat: log3: \u6CA1\u6709\u90A3\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55
# ll
\u603B\u8BA1 8
-rw-r--r-- 1 root root  8 10-28 06:15 log2.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log3.txt
# cat log2.txt 
odfdfs
# cat log3.txt 
dfosdfsdfdss
# mv -f log3.txt log2.txt 
# cat log2.txt 
dfosdfsdfdss
# ll
\u603B\u8BA1 4
-rw-r--r-- 1 root root 13 10-28 06:16 log2.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>log3.txt\u7684\u5185\u5BB9\u76F4\u63A5\u8986\u76D6\u4E86log2.txt\u5185\u5BB9\uFF0C-f \u8FD9\u662F\u4E2A\u5371\u9669\u7684\u9009\u9879\uFF0C\u4F7F\u7528\u7684\u65F6\u5019\u4E00\u5B9A\u8981\u4FDD\u6301\u5934\u8111\u6E05\u6670\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u6700\u597D\u4E0D\u7528\u52A0\u4E0A\u5B83\u3002</p><p>6\uFF09\u76EE\u5F55\u7684\u79FB\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ll
-rw-r--r-- 1 root root 13 10-28 06:16 log2.txt
# ll
-rw-r--r-- 1 root root 13 10-28 06:16 log2.txt
# cd ..
# ll
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 3 root root 4096 10-28 06:24 test3
drwxr-xr-x 2 root root 4096 10-28 06:48 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# cd test3
# ll
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
# cd ..
# mv test4 test3
# ll
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 4 root root 4096 10-28 06:54 test3
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# cd test3/
# ll
drwxr-xr-x 2 root root 4096 10-28 06:21 log
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-28 06:48 test4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u5982\u679C\u76EE\u5F55dir2\u4E0D\u5B58\u5728\uFF0C\u5C06\u76EE\u5F55dir1\u6539\u540D\u4E3Adir2\uFF1B\u5426\u5219\uFF0C\u5C06dir1\u79FB\u52A8\u5230dir2\u4E2D\u3002</p><p>7\uFF09\u79FB\u52A8\u5F53\u524D\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u5230\u4E0A\u4E00\u7EA7\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
-rw-r--r-- 1 root root 25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root 13 10-28 06:16 log2.txt
# mv * ../
# ll
# cd ..
# ll
-rw-r--r-- 1 root root   25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-28 07:02 test4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>8\uFF09\u628A\u5F53\u524D\u76EE\u5F55\u7684\u4E00\u4E2A\u5B50\u76EE\u5F55\u91CC\u7684\u6587\u4EF6\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u5B50\u76EE\u5F55\u91CC</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 4 root root 4096 10-28 07:02 test3
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
# cd test3
# ll
-rw-r--r-- 1 root root   25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-28 07:02 test4
# cd ..
# mv test3/*.txt test5
# cd test5
# ll
-rw-r--r-- 1 root root   25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-25 17:56 test5-1
# 	cd ..
# cd test3/
# ll
drwxr-xr-x 2 root root 4096 10-28 06:21 logs
drwxr-xr-x 2 root root 4096 10-28 07:02 test4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>9\uFF09\u6587\u4EF6\u88AB\u8986\u76D6\u524D\u505A\u7B80\u5355\u5907\u4EFD\uFF0C\u524D\u9762\u52A0\u53C2\u6570-b</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
-rw-r--r-- 1 root root   25 10-28 07:02 log1.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-25 17:56 test5-1
# mv log1.txt -b log2.txt
mv\uFF1A\u662F\u5426\u8986\u76D6\u201Clog2.txt\u201D? y
# ll
-rw-r--r-- 1 root root   25 10-28 07:02 log2.txt
-rw-r--r-- 1 root root   13 10-28 06:16 log2.txt~
-rw-r--r-- 1 root root   29 10-28 06:05 test1.txt
drwxr-xr-x 2 root root 4096 10-25 17:56 test5-1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>-b \u4E0D\u63A5\u53D7\u53C2\u6570\uFF0Cmv\u4F1A\u53BB\u8BFB\u53D6\u73AF\u5883\u53D8\u91CFVERSION_CONTROL\u6765\u4F5C\u4E3A\u5907\u4EFD\u7B56\u7565\u3002</p><p>--backup\u8BE5\u9009\u9879\u6307\u5B9A\u5982\u679C\u76EE\u6807\u6587\u4EF6\u5B58\u5728\u65F6\u7684\u52A8\u4F5C\uFF0C\u5171\u6709\u56DB\u79CD\u5907\u4EFD\u7B56\u7565\uFF1A</p><p>1.CONTROL=none\u6216off : \u4E0D\u5907\u4EFD\u3002</p><p>2.CONTROL=numbered\u6216t\uFF1A\u6570\u5B57\u7F16\u53F7\u7684\u5907\u4EFD</p><p>3.CONTROL=existing\u6216nil\uFF1A\u5982\u679C\u5B58\u5728\u4EE5\u6570\u5B57\u7F16\u53F7\u7684\u5907\u4EFD\uFF0C\u5219\u7EE7\u7EED\u7F16\u53F7\u5907\u4EFDm+1...n\uFF1A</p><p>\u6267\u884Cmv\u64CD\u4F5C\u524D\u5DF2\u5B58\u5728\u4EE5\u6570\u5B57\u7F16\u53F7\u7684\u6587\u4EF6log2.txt.<sub>1</sub>\uFF0C\u90A3\u4E48\u518D\u6B21\u6267\u884C\u5C06\u4EA7\u751Flog2.txt<sub>2</sub>\uFF0C\u4EE5\u6B21\u7C7B\u63A8\u3002\u5982\u679C\u4E4B\u524D\u6CA1\u6709\u4EE5\u6570\u5B57\u7F16\u53F7\u7684\u6587\u4EF6\uFF0C\u5219\u4F7F\u7528\u4E0B\u9762\u8BB2\u5230\u7684\u7B80\u5355\u5907\u4EFD\u3002</p><p>4.CONTROL=simple\u6216never\uFF1A\u4F7F\u7528\u7B80\u5355\u5907\u4EFD\uFF1A\u5728\u88AB\u8986\u76D6\u524D\u8FDB\u884C\u4E86\u7B80\u5355\u5907\u4EFD\uFF0C\u7B80\u5355\u5907\u4EFD\u53EA\u80FD\u6709\u4E00\u4EFD\uFF0C\u518D\u6B21\u88AB\u8986\u76D6\u65F6\uFF0C\u7B80\u5355\u5907\u4EFD\u4E5F\u4F1A\u88AB\u8986\u76D6\u3002</p><h3 id="rm\u547D\u4EE4-\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#rm\u547D\u4EE4-\u5220\u9664" aria-hidden="true">#</a> rm\u547D\u4EE4\uFF08\u5220\u9664\uFF09</h3><p>rm\u547D\u4EE4\u53EF\u4EE5\u5220\u9664\u4E00\u4E2A\u76EE\u5F55\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u67D0\u4E2A\u76EE\u5F55\u53CA\u5176\u4E0B\u5C5E\u7684\u6240\u6709\u6587\u4EF6\u53CA\u5176\u5B50\u76EE\u5F55\u5747\u5220\u9664\u6389\u3002\u5BF9\u4E8E\u94FE\u63A5\u6587\u4EF6\uFF0C\u53EA\u662F\u5220\u9664\u6574\u4E2A\u94FE\u63A5\u6587\u4EF6\uFF0C\u800C\u539F\u6709\u6587\u4EF6\u4FDD\u6301\u4E0D\u53D8\u3002</p><p>rm\u662F\u4E00\u4E2A\u5371\u9669\u7684\u547D\u4EE4\uFF0C\u4F7F\u7528\u7684\u65F6\u5019\u8981\u7279\u522B\u5F53\u5FC3\uFF0C\u5C24\u5176\u5BF9\u4E8E\u65B0\u624B\uFF0C\u5426\u5219\u6574\u4E2A\u7CFB\u7EDF\u5C31\u4F1A\u6BC1\u5728\u8FD9\u4E2A\u547D\u4EE4\uFF08\u6BD4\u5982\u5728/\uFF08\u6839\u76EE\u5F55\uFF09\u4E0B\u6267\u884Crm * -rf\uFF09\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u5728\u6267\u884Crm\u4E4B\u524D\u6700\u597D\u5148\u786E\u8BA4\u4E00\u4E0B\u5728\u54EA\u4E2A\u76EE\u5F55\uFF0C\u5230\u5E95\u8981\u5220\u9664\u4EC0\u4E48\u4E1C\u897F\uFF0C\u64CD\u4F5C\u65F6\u4FDD\u6301\u9AD8\u5EA6\u6E05\u9192\u7684\u5934\u8111\u3002</p><h4 id="\u8BED\u6CD5-4" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-4" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>rm (\u9009\u9879)(\u53C2\u6570)</code></p><h4 id="\u9009\u9879-3" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-3" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-d\uFF1A\u76F4\u63A5\u628A\u6B32\u5220\u9664\u7684\u76EE\u5F55\u7684\u786C\u8FDE\u63A5\u6570\u636E\u5220\u9664\u62100\uFF0C\u5220\u9664\u8BE5\u76EE\u5F55\uFF1B
-f\uFF1A\u5F3A\u5236\u5220\u9664\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B
-i\uFF1A\u5220\u9664\u5DF2\u6709\u6587\u4EF6\u6216\u76EE\u5F55\u4E4B\u524D\u5148\u8BE2\u95EE\u7528\u6237\uFF1B
-r\u6216-R\uFF1A\u9012\u5F52\u5904\u7406\uFF0C\u5C06\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4E0E\u5B50\u76EE\u5F55\u4E00\u5E76\u5904\u7406\uFF1B
--preserve-root\uFF1A\u4E0D\u5BF9\u6839\u76EE\u5F55\u8FDB\u884C\u9012\u5F52\u64CD\u4F5C\uFF1B
-v\uFF1A\u663E\u793A\u6307\u4EE4\u7684\u8BE6\u7EC6\u6267\u884C\u8FC7\u7A0B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="\u53C2\u6570-2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-2" aria-hidden="true">#</a> \u53C2\u6570</h4><p>\u6587\u4EF6\uFF1A\u6307\u5B9A\u88AB\u5220\u9664\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u5982\u679C\u53C2\u6570\u4E2D\u542B\u6709\u76EE\u5F55\uFF0C\u5219\u5FC5\u987B\u52A0\u4E0A<code>-r</code>\u6216\u8005<code>-R</code>\u9009\u9879\u3002</p><h4 id="\u5E38\u7528\u8303\u4F8B-4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B-4" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09\u5220\u9664\u6587\u4EF6file\uFF0C\u7CFB\u7EDF\u4F1A\u5148\u8BE2\u95EE\u662F\u5426\u5220\u9664\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># rm log.log 
rm\uFF1A\u662F\u5426\u5220\u9664 \u4E00\u822C\u6587\u4EF6 \u201Clog.log\u201D? y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8F93\u5165rm log.log\u547D\u4EE4\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u8BE2\u95EE\u662F\u5426\u5220\u9664\uFF0C\u8F93\u5165y\u540E\u5C31\u4F1A\u5220\u9664\u6587\u4EF6\uFF0C\u4E0D\u60F3\u5220\u9664\u5219\u6570\u636En\u3002</p><p>2\uFF09\u5F3A\u884C\u5220\u9664file\uFF0C\u7CFB\u7EDF\u4E0D\u518D\u63D0\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -f log1.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3\uFF09\u5220\u9664\u4EFB\u4F55.log\u6587\u4EF6\uFF1B\u5220\u9664\u524D\u9010\u4E00\u8BE2\u95EE\u786E\u8BA4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -i *.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4\uFF09\u5C06 test1\u5B50\u76EE\u5F55\u53CA\u5B50\u76EE\u5F55\u4E2D\u6240\u6709\u6863\u6848\u5220\u9664</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -r test1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="rmdir\u547D\u4EE4-\u5220\u9664\u7A7A\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#rmdir\u547D\u4EE4-\u5220\u9664\u7A7A\u76EE\u5F55" aria-hidden="true">#</a> rmdir\u547D\u4EE4\uFF08\u5220\u9664\u7A7A\u76EE\u5F55\uFF09</h3><p>rmdir\u547D\u4EE4\u3002rmdir\u662F\u5E38\u7528\u7684\u547D\u4EE4\uFF0C\u8BE5\u547D\u4EE4\u7684\u529F\u80FD\u662F\u5220\u9664\u7A7A\u76EE\u5F55\uFF0C\u4E00\u4E2A\u76EE\u5F55\u88AB\u5220\u9664\u4E4B\u524D\u5FC5\u987B\u662F\u7A7A\u7684\u3002\uFF08\u6CE8\u610F\uFF0Crm - r dir\u547D\u4EE4\u53EF\u4EE3\u66FFrmdir\uFF0C\u4F46\u662F\u6709\u5F88\u5927\u5371\u9669\u6027\u3002\uFF09\u5220\u9664\u67D0\u76EE\u5F55\u65F6\u4E5F\u5FC5\u987B\u5177\u6709\u5BF9\u7236\u76EE\u5F55\u7684\u5199\u6743\u9650\u3002</p><h4 id="\u8BED\u6CD5-5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-5" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>rmdir(\u9009\u9879)(\u53C2\u6570)</code></p><h4 id="\u9009\u9879-4" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-4" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-p\u6216--parents\uFF1A\u5220\u9664\u6307\u5B9A\u76EE\u5F55\u540E\uFF0C\u82E5\u8BE5\u76EE\u5F55\u7684\u4E0A\u5C42\u76EE\u5F55\u5DF2\u53D8\u6210\u7A7A\u76EE\u5F55\uFF0C\u5219\u5C06\u5176\u4E00\u5E76\u5220\u9664\uFF1B
--ignore-fail-on-non-empty\uFF1A\u6B64\u9009\u9879\u4F7Frmdir\u547D\u4EE4\u5FFD\u7565\u7531\u4E8E\u5220\u9664\u975E\u7A7A\u76EE\u5F55\u65F6\u5BFC\u81F4\u7684\u9519\u8BEF\u4FE1\u606F\uFF1B
-v\u6216-verboes\uFF1A\u663E\u793A\u547D\u4EE4\u7684\u8BE6\u7EC6\u6267\u884C\u8FC7\u7A0B\uFF1B
--help\uFF1A\u663E\u793A\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\uFF1B
--version\uFF1A\u663E\u793A\u547D\u4EE4\u7684\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u53C2\u6570-3" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-3" aria-hidden="true">#</a> \u53C2\u6570</h4><p>\u76EE\u5F55\u5217\u8868\uFF1A\u8981\u5220\u9664\u7684\u7A7A\u76EE\u5F55\u5217\u8868\u3002\u5F53\u5220\u9664\u591A\u4E2A\u7A7A\u76EE\u5F55\u65F6\uFF0C\u76EE\u5F55\u540D\u4E4B\u95F4\u4F7F\u7528\u7A7A\u683C\u9694\u5F00\u3002</p><h4 id="\u5E38\u7528\u8303\u4F8B-5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B-5" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09rmdir \u4E0D\u80FD\u5220\u9664\u975E\u7A7A\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># tree
.
|-- bin
|-- doc
|   |-- info
|   \`-- product
|-- lib
|-- logs
|   |-- info
|   \`-- product
\`-- service
    \`-- deploy
        |-- info
        \`-- product
12 directories, 0 files
# rmdir doc
rmdir: doc: \u76EE\u5F55\u975E\u7A7A
# rmdir doc/info
# rmdir doc/product
# tree
.
|-- bin
|-- doc
|-- lib
|-- logs
|   |-- info
|   \`-- product
\`-- service
    \`-- deploy
        |-- info
        \`-- product
10 directories, 0 files
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>2\uFF09rmdir -p \u5F53\u5B50\u76EE\u5F55\u88AB\u5220\u9664\u540E\u4F7F\u5B83\u4E5F\u6210\u4E3A\u7A7A\u76EE\u5F55\u7684\u8BDD\uFF0C\u5219\u987A\u4FBF\u4E00\u5E76\u5220\u9664</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># tree
.
|-- bin
|-- doc
|-- lib
|-- logs
|   \`-- product
\`-- service
    \`-- deploy
        |-- info
        \`-- product
10 directories, 0 files
# rmdir -p logs
rmdir: logs: \u76EE\u5F55\u975E\u7A7A
# tree
.
|-- bin
|-- doc
|-- lib
|-- logs
|   \`-- product
\`-- service
    \`-- deploy
        |-- info
        \`-- product
9 directories, 0 files
# rmdir -p logs/product
# tree
.
|-- bin
|-- doc
|-- lib
\`-- service
\`-- deploy
        |-- info
        \`-- product
7 directories, 0 files
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,121);function h(v,w){const a=l("ExternalLinkIcon");return i(),p(o,null,[c,s("p",null,[u,s("a",d,[m,t(a)]),x]),g],64)}var k=e(b,[["render",h],["__file","zsgc.html.vue"]]);export{k as default};
