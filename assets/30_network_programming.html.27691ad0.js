import{_ as r,r as l,c as t,a as n,b as a,F as p,e as b,d as s,o as i}from"./app.741e01f1.js";const o={},c=b(`<h1 id="_30-\u7F51\u7EDC\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#_30-\u7F51\u7EDC\u7F16\u7A0B" aria-hidden="true">#</a> 30 \u7F51\u7EDC\u7F16\u7A0B</h1><blockquote class="blockquote-center">The Net&#39;s a cross between an elephant and a white elephant sale: it never forgets, and it&#39;s always crap.<br> \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0--Nemo</blockquote><p>Linux\u7CFB\u7EDF\u62E5\u6709\u4E00\u7CFB\u5217\u7684\u5DE5\u5177\uFF0C\u7528\u4E8E\u8BBF\u95EE\u3001\u64CD\u4F5C\u548C\u8C03\u89E3\u7F51\u7EDC\u8FDE\u63A5\u3002\u6211\u4EEC\u80FD\u591F\u628A\u5176\u4E2D\u7684\u4E00\u90E8\u5206\u5DE5\u5177\u6574\u5408\u5230\u811A\u672C\u4E2D -- \u8FD9\u4E9B\u811A\u672C\u80FD\u6269\u5C55\u6211\u4EEC\u5BF9\u7F51\u7EDC\u7684\u8BA4\u77E5\uFF0C\u6709\u7528\u7684\u811A\u672C\u8FD8\u80FD\u65B9\u4FBF\u7F51\u7EDC\u7BA1\u7406\u3002</p><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7B80\u5355\u7684CGI\u811A\u672C\uFF0C\u9610\u8FF0\u5982\u4F55\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u3002</p><p>\u4F8B\u5B50 30-1. \u6253\u5370\u670D\u52A1\u5668\u73AF\u5883</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# test-cgi.sh
# by Michael Zick
# Used with permission

# \u60A8\u5E94\u8BE5\u6839\u636E\u60A8\u7684\u60C5\u51B5\u4FEE\u6539\u76F8\u5E94\u7684Bash\u8DEF\u5F84
# \uFF08\u5728ISP\u7684\u670D\u52A1\u5668\u4E2D\uFF0CBash\u4E00\u822C\u4E0D\u4F1A\u653E\u5728\u6B63\u5E38\u7684\u4F4D\u7F6E\uFF09
# \u5176\u4ED6\u4F4D\u7F6E\uFF1A /usr/bin \u6216\u8005 /usr/local/bin
# \u751A\u81F3\u5E94\u8BE5\u5728sha-bang\u4E2D\u4E0D\u7528\u4EFB\u4F55\u8DEF\u5F84\u8FD0\u884C\u5B83

# \u53D6\u6D88\u901A\u914D\u7B26
set -f

# Http Header\uFF08\u8BD1\u8005\u6CE8\uFF1A\u6B64\u5934\u4FE1\u606F\u662F\u544A\u8BC9\u6D4F\u89C8\u5668\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u5185\u5BB9\u683C\u5F0F\uFF09
echo Content-type: text/plain
echo

echo CGI/1.0 test script report:
echo

echo environment settings:
set
echo

echo whereis bash?
whereis bash
echo


echo who are we?
echo \${BASH_VERSINFO[*]}
echo

echo argc is $#. argv is &quot;$*&quot;.
echo

# CGI/1.0 \u9884\u671F\u7684\u73AF\u5883\u53D8\u91CF\u3002

echo SERVER_SOFTWARE = $SERVER_SOFTWARE
echo SERVER_NAME = $SERVER_NAME
echo GATEWAY_INTERFACE = $GATEWAY_INTERFACE
echo SERVER_PROTOCOL = $SERVER_PROTOCOL
echo SERVER_PORT = $SERVER_PORT
echo REQUEST_METHOD = $REQUEST_METHOD
echo HTTP_ACCEPT = &quot;$HTTP_ACCEPT&quot;
echo PATH_INFO = &quot;$PATH_INFO&quot;
echo PATH_TRANSLATED = &quot;$PATH_TRANSLATED&quot;
echo SCRIPT_NAME = &quot;$SCRIPT_NAME&quot;
echo QUERY_STRING = &quot;$QUERY_STRING&quot;
echo REMOTE_HOST = $REMOTE_HOST
echo REMOTE_ADDR = $REMOTE_ADDR
echo REMOTE_USER = $REMOTE_USER
echo AUTH_TYPE = $AUTH_TYPE
echo CONTENT_TYPE = $CONTENT_TYPE
echo CONTENT_LENGTH = $CONTENT_LENGTH

exit 0

# \u5728\u8FD9\u91CC\uFF0C\u6587\u6863\u7ED9\u51FA\u4E00\u4E9B\u7B80\u77ED\u7684\u6307\u4EE4\u3002
:&lt;&lt;-&#39;_test_CGI_&#39;

1) \u5C06\u6B64\u6587\u6863\u653E\u5230http://domain.name/cgi-bin\u7684\u76EE\u5F55\u3002
2) \u7136\u540E\uFF0C\u8BBF\u95EEhttp://domain.name/cgi-bin/test-cgi.sh.

_test_CGI_
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><p>\u51FA\u4E8E\u5B89\u5168\u7684\u8003\u8651\uFF0C\u786E\u8BA4\u8FDE\u63A5\u8BA1\u7B97\u673A\u7684IP\u5730\u5740\u662F\u6709\u7528\u7684\u3002 \u4F8B\u5B50 30-2. IP\u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# ip-addresses.sh
# \u5217\u51FA\u60A8\u7684\u8BA1\u7B97\u673A\u6240\u8FDE\u63A5\u7684IP\u5730\u5740\u3002

#  \u53D7Greg Bledsoe\u7684ddos.sh\u811A\u672C\u6240\u542F\u53D1\uFF0C
#  Linux Journal\uFF0C2011\u5E743\u67089\u53F7\u3002
#    URL:
#  http://www.linuxjournal.com/content/back-dead-simple-bash-complex-ddos
#  Greg licensed his script under the GPL2,
#+ and as a derivative, this script is likewise GPL2.

connection_type=TCP      # \u4E5F\u53EF\u4EE5\u4F7F\u7528UDP
field=2           # Which field of the output we&#39;re interested in.
no_match=LISTEN   # \u8FC7\u6EE4\u51FA\u5305\u542B\u6B64\u5B57\u7B26\u4E32\u7684\u8BB0\u5F55\uFF0C\u4E3A\u4EC0\u4E48\uFF1F
lsof_args=-ni     # -i \u5217\u51FA\u4E92\u8054\u7F51\u76F8\u5173\u7684\u6587\u4EF6\u3002
                  # -n \u4F7F\u7528\u6570\u503CIP\u5730\u5740\u3002
		  # \u5982\u679C\u4E0D\u4F7F\u7528-n\u9009\u9879\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\u60C5\u51B5\uFF1F\u8BD5\u8BD5\u770B\u3002
router=&quot;[0-9][0-9][0-9][0-9][0-9]-&gt;&quot;
#       \u5220\u9664\u8DEF\u7531\u4FE1\u606F\u3002

lsof &quot;$lsof_args&quot; | grep $connection_type | grep -v &quot;$no_match&quot; |
      awk &#39;{print $9}&#39; | cut -d : -f $field | sort | uniq |
      sed s/&quot;^$router&quot;//

#  Bledsoe\u7684\u811A\u672C\u5C06\u8FC7\u6EE4\u51FA\u7684IP\u5730\u5740\u7ED3\u679C\u8D4B\u7ED9\u4E00\u4E2A\u53D8\u91CF\uFF08\u7C7B\u4F3C\u4E0A\u9762\u768419\u884C\u523022\u884C\uFF09\u3002
#  \u4ED6\u68C0\u67E5\u8FDE\u63A5\u5230\u4E00\u4E2AIP\u5730\u5740\u7684\u591A\u4E2A\u8FDE\u63A5\uFF0C
#  \u4F7F\u7528\uFF1A
#
#    iptables -I INPUT -s $ip -p tcp -j REJECT --reject-with tcp-reset
#
#  ... \u5728\u6BCF\u4E00\u6B21\u768460\u79D2\u5EF6\u8FDF\u5FAA\u73AF\u4E2D\uFF0C\u62D2\u7EDD\u6765\u81EADDOS\u653B\u51FB\u7684\u6570\u636E\u5305\u3002


#  \u7EC3\u4E60\uFF1A
#  --------
#  \u4F7F\u7528&#39;iptable&#39;\u547D\u4EE4\u6269\u5C55\u8FD9\u4E2A\u811A\u672C
#+ \u6765\u62D2\u7EDD\u4E00\u4E9B\u6765\u81EA\u5783\u573E\u90AE\u4EF6\u53D1\u9001\u8005\u7684IP\u57DF\u540D\u7684\u8FDE\u63A5\u8BF7\u6C42\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><hr><p>\u66F4\u591A\u7F51\u7EDC\u7F16\u7A0B\u7684\u4F8B\u5B50\uFF1A</p>`,10),m={href:"http://tldp.org/LDP/abs/html/devref1.html#NPREF",target:"_blank",rel:"noopener noreferrer"},u=s("Getting the time from nist.gov"),h={href:"http://tldp.org/LDP/abs/html/devref1.html#NW001",target:"_blank",rel:"noopener noreferrer"},_=s("Downloading a URL"),d={href:"http://tldp.org/LDP/abs/html/system.html#IPSCRIPT0",target:"_blank",rel:"noopener noreferrer"},E=s("A GRE tunnel"),T={href:"http://tldp.org/LDP/abs/html/communications.html#PING0",target:"_blank",rel:"noopener noreferrer"},g=s("Checking if an Internet server is up"),R={href:"http://tldp.org/LDP/abs/html/communications.html#ISSPAMMER",target:"_blank",rel:"noopener noreferrer"},P=s("\u4F8B\u5B50 16-41"),f={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#ISSPAMMER2",target:"_blank",rel:"noopener noreferrer"},S=s("\u4F8B\u5B50 A-28"),N={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#WHX",target:"_blank",rel:"noopener noreferrer"},A=s("\u4F8B\u5B50 A-29"),I={href:"http://tldp.org/LDP/abs/html/devref1.html#DEVTCP",target:"_blank",rel:"noopener noreferrer"},O=s("\u4F8B\u5B50 29-1"),C=s("\u66F4\u591A\u8D44\u6599\u8BF7\u770B"),L={href:"http://tldp.org/LDP/abs/html/system.html",target:"_blank",rel:"noopener noreferrer"},$=s("\u300ASystem and Administrative Commands\u300B"),k=s("\u7684\u7AE0\u8282"),D={href:"http://tldp.org/LDP/abs/html/system.html#NETWORKSYS1",target:"_blank",rel:"noopener noreferrer"},q=s("\u201C\u7F51\u7EDC\u547D\u4EE4\u201D"),v=s("\uFF0C\u4EE5\u53CA"),x={href:"http://tldp.org/LDP/abs/html/external.html",target:"_blank",rel:"noopener noreferrer"},w=s("\u300AExternal Filters, Programs and Commands\u300B"),G=s("\u7684\u7AE0\u8282"),H={href:"http://tldp.org/LDP/abs/html/communications.html",target:"_blank",rel:"noopener noreferrer"},M=s("\u201C\u901A\u4FE1\u547D\u4EE4\u201D"),V=s("\u3002");function U(F,y){const e=l("ExternalLinkIcon");return i(),t(p,null,[c,n("ul",null,[n("li",null,[n("a",m,[u,a(e)])]),n("li",null,[n("a",h,[_,a(e)])]),n("li",null,[n("a",d,[E,a(e)])]),n("li",null,[n("a",T,[g,a(e)])]),n("li",null,[n("a",R,[P,a(e)])]),n("li",null,[n("a",f,[S,a(e)])]),n("li",null,[n("a",N,[A,a(e)])]),n("li",null,[n("a",I,[O,a(e)])])]),n("p",null,[C,n("a",L,[$,a(e)]),k,n("a",D,[q,a(e)]),v,n("a",x,[w,a(e)]),G,n("a",H,[M,a(e)]),V])],64)}var B=r(o,[["render",U],["__file","30_network_programming.html.vue"]]);export{B as default};
