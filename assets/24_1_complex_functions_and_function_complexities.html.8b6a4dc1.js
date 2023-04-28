import{_ as l,r as p,c as b,b as s,a,F as t,d as n,e as r,o as u}from"./app.53755e41.js";const i={},c=s("h1",{id:"_24-1-\u590D\u6742\u51FD\u6570\u548C\u51FD\u6570\u590D\u6742\u6027",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_24-1-\u590D\u6742\u51FD\u6570\u548C\u51FD\u6570\u590D\u6742\u6027","aria-hidden":"true"},"#"),n(" 24.1 \u590D\u6742\u51FD\u6570\u548C\u51FD\u6570\u590D\u6742\u6027")],-1),o=n("\u51FD\u6570\u53EF\u4EE5\u5904\u7406\u4F20\u9012\u7ED9\u5B83\u7684\u53C2\u6570\uFF0C\u5E76\u4E14\u80FD\u8FD4\u56DE\u5B83\u7684"),m={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},h=n("\u9000\u51FA\u72B6\u6001\u7801"),d=n("\u7ED9\u811A\u672C\uFF0C\u4EE5\u4FBF\u540E\u7EED\u5904\u7406\u3002"),_=s("div",{class:"language-text ext-text line-numbers-mode"},[s("pre",{class:"language-text"},[s("code",null,`function_name $arg1 $arg2
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),q=n("\u51FD\u6570\u901A\u8FC7\u4F4D\u7F6E\u6765\u5F15\u7528\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\uFF08\u5C31\u597D\u50CF\u5B83\u4EEC\u662F"),g={href:"http://tldp.org/LDP/abs/html/internalvariables.html#POSPARAMREF",target:"_blank",rel:"noopener noreferrer"},f=n("\u4F4D\u7F6E\u53C2\u6570"),$=n("\uFF09\uFF0C\u4F8B\u5982\uFF0C$1, $2\uFF0C\u7B49\u7B49\u3002"),x=r(`<p>\u4F8B\u5B50 24-2. \u5E26\u53C2\u6570\u7684\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u51FD\u6570\u548C\u53C2\u6570

DEFAULT=default                 # \u9ED8\u8BA4\u53C2\u6570\u503C\u3002D

func2 () {
    if [ -z &quot;$1&quot; ]              # \u7B2C\u4E00\u4E2A\u53C2\u6570\u957F\u5EA6\u662F\u5426\u4E3A\u96F6\uFF1F
    then
        echo &quot;-Parameter #1 is zero length.-&quot;  # \u6216\u8005\u6CA1\u6709\u53C2\u6570\u4F20\u9012\u8FDB\u6765\u3002
    else
        echo &quot;-Parameter #1 is \\&quot;$1\\&quot;.-&quot;
    fi

    variable=\${1-$DEFAULT}
    echo &quot;variable = $variable&quot;     #  \u8FD9\u91CC\u7684\u53C2\u6570\u66FF\u6362
                                    #+ \u8868\u793A\u4EC0\u4E48\uFF1F
                                    #  ---------------------------
                                    #  \u4E3A\u4E86\u533A\u5206\u6CA1\u6709\u53C2\u6570\u7684\u60C5\u51B5
                                    #+ \u548C\u53EA\u6709\u4E00\u4E2Anull\u53C2\u6570\u7684\u60C5\u51B5\u3002

    if [ &quot;$2&quot; ]
    then
        echo &quot;-Parameter #2 is \\&quot;$2\\&quot;.-&quot;
    fi

    return 0
}

echo

echo &quot;Nothing passed.&quot;
func2                          # \u4E0D\u5E26\u53C2\u6570\u8C03\u7528
echo


echo &quot;Zero-length parameter passed.&quot;
func2 &quot;&quot;                        # \u4F7F\u75280\u957F\u5EA6\u7684\u53C2\u6570\u8FDB\u884C\u8C03\u7528
echo

echo &quot;Null parameter passed.&quot;
func2 &quot;$uninitialized_param&quot;    # \u4F7F\u7528\u672A\u521D\u59CB\u5316\u7684\u53C2\u6570\u8FDB\u884C\u8C03\u7528
echo


echo &quot;One parameter passed.&quot;
func2 first           # \u5E26\u4E00\u4E2A\u53C2\u6570\u7684\u8C03\u7528
echo

echo &quot;Two parameters passed.&quot;
func2 first second    # \u5E26\u4E24\u4E2A\u53C2\u6570\u7684\u8C03\u7528
echo

echo &quot;\\&quot;\\&quot; \\&quot;second\\&quot; passed.&quot;
func2 &quot;&quot; second       # \u7B2C\u4E00\u4E2A\u8C03\u7528\u53C2\u6570\u4E3A0\u957F\u5EA6\u53C2\u6570\uFF0C
echo                  # \u7B2C\u4E8C\u4E2A\u662FASCII\u7801\u7684\u5B57\u7B26\u4E32\u53C2\u6570\u3002

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,2),v=s("img",{src:"http://tldp.org/LDP/abs/images/caution.gif",alt:"notice",loading:"lazy"},null,-1),E=n(" \u4E5F\u53EF\u4EE5\u4F7F\u7528"),R={href:"http://tldp.org/LDP/abs/html/othertypesv.html#SHIFTREF",target:"_blank",rel:"noopener noreferrer"},A=n("shift"),T=n("\u547D\u4EE4\u6765\u5904\u7406\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u53C2\u6570\uFF08\u8BF7\u53C2\u8003"),k={href:"http://tldp.org/LDP/abs/html/assortedtips.html#MULTIPLICATION",target:"_blank",rel:"noopener noreferrer"},L=n("\u4F8B\u5B50 33-18"),P=n(". \u4F46\u662F\uFF0C\u4F20\u9012\u7ED9\u811A\u672C\u7684\u547D\u4EE4\u884C\u53C2\u6570\u600E\u4E48\u529E\uFF1F\u5728\u51FD\u6570\u5185\u90E8\uFF0C\u53EF\u4EE5\u770B\u89C1\u8FD9\u4E9B\u547D\u4EE4\u884C\u53C2\u6570\u4E48\uFF1F\u597D\uFF0C\u73B0\u5728\u8BA9\u6211\u4EEC\u5F04\u6E05\u695A\u8FD9\u4E2A\u56F0\u60D1\u3002"),D=r(`<p>\u4F8B\u5B50 34-3. \u51FD\u6570\u4EE5\u53CA\u4F20\u9012\u7ED9\u811A\u672C\u7684\u547D\u4EE4\u884C\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# func-cmdlinearg.sh
#  \u5E26\u4E00\u4E2A\u547D\u4EE4\u884C\u53C2\u6570\u6765\u6267\u884C\u8FD9\u4E2A\u811A\u672C\uFF0C
#+ \u7C7B\u4F3C\u4E8E $0 arg1.


func ()
{
    echo &quot;$1&quot;   # \u663E\u793A\u4F20\u9012\u7ED9\u8FD9\u4E2A\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002
}               # \u547D\u4EE4\u884C\u53C2\u6570\u53EF\u4EE5\u4E48\uFF1F

echo &quot;First call to function: no arg passed.&quot;
echo &quot;See if command-line arg is seen.&quot;
func
# \u4E0D! \u6CA1\u6709\u89C1\u5230\u547D\u4EE4\u884C\u53C2\u6570.

echo &quot;============================================================&quot;
echo
echo &quot;Second call to function: command-line arg passed explicitly.&quot;

func $1
# \u73B0\u5728\uFF0C\u89C1\u5230\u547D\u4EE4\u884C\u53C2\u6570\u4E86\uFF01

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u548C\u5176\u5B83\u7684\u7F16\u7A0B\u8BED\u8A00\u76F8\u6BD4\uFF0Cshell\u811A\u672C\u4E00\u822C\u53EA\u4F1A\u4F20\u503C\u7ED9\u51FD\u6570\u3002\u5982\u679C\u628A\u53D8\u91CF\u540D\uFF08\u4E8B\u5B9E\u4E0A\u5C31\u662F\u6307\u9488\uFF09\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u8BDD\uFF0C\u90A3\u5C06\u88AB\u89E3\u91CA\u4E3A\u5B57\u9762\u542B\u4E49\uFF0C\u4E5F\u5C31\u662F\u88AB\u770B\u505A\u5B57\u7B26\u4E32\u3002 \u51FD\u6570\u53EA\u4F1A\u4EE5\u5B57\u9762\u542B\u4E49\u6765\u89E3\u91CA\u51FD\u6570\u53C2\u6570\u3002</p>`,3),w={href:"http://tldp.org/LDP/abs/html/ivr.html#IVRREF",target:"_blank",rel:"noopener noreferrer"},S=n("\u53D8\u91CF\u7684\u95F4\u63A5\u5F15\u7528"),F=n("\uFF08\u8BF7\u53C2\u8003"),I={href:"http://tldp.org/LDP/abs/html/bashver2.html#EX78",target:"_blank",rel:"noopener noreferrer"},N=n("\u4F8B\u5B50 37-2"),U=n("\uFF09\u63D0\u4F9B\u4E86\u4E00\u79CD\u7B28\u62D9\u7684\u673A\u5236\uFF0C\u6765\u5C06\u53D8\u91CF\u6307\u9488\u4F20\u9012\u7ED9\u51FD\u6570\u3002"),y=r(`<p>\u4F8B\u5B50 24-4. \u5C06\u4E00\u4E2A\u95F4\u63A5\u5F15\u7528\u4F20\u9012\u7ED9\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# ind-func.sh: \u5C06\u4E00\u4E2A\u95F4\u63A5\u5F15\u7528\u4F20\u9012\u7ED9\u51FD\u6570\u3002

echo_var ()
{
    echo &quot;$1&quot;
}

message=Hello
Hello=Goodbye

echo_var &quot;$message&quot;         # Hello
# \u73B0\u5728\uFF0C\u8BA9\u6211\u4EEC\u4F20\u9012\u4E00\u4E2A\u95F4\u63A5\u5F15\u7528\u7ED9\u51FD\u6570\u3002
echo_var &quot;\${!message}&quot;     # Goodbye
echo &quot;-------------&quot;

# \u5982\u679C\u6211\u4EEC\u6539\u53D8\u201Chello\u201D\u7684\u503C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F
Hello=&quot;Hello, again!&quot;
echo_var &quot;$message&quot;        # Hello
echo_var &quot;\${!message}&quot;     # Hello, again!

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u63A5\u4E0B\u6765\u7684\u4E00\u4E2A\u903B\u8F91\u95EE\u9898\u5C31\u662F\uFF0C\u5C06\u53C2\u6570\u4F20\u9012\u7ED9\u51FD\u6570\u4E4B\u540E\uFF0C\u53C2\u6570\u80FD\u5426\u88AB\u89E3\u9664\u5F15\u7528\u3002</p><p>\u4F8B\u5B50 24-5. \u5BF9\u4E00\u4E2A\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u53C2\u6570\u8FDB\u884C\u89E3\u9664\u5F15\u7528\u7684\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# dereference.sh
# \u5BF9\u4E00\u4E2A\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u53C2\u6570\u8FDB\u884C\u89E3\u9664\u5F15\u7528\u7684\u64CD\u4F5C\u3002
# \u6B64\u811A\u672C\u7531Bruce W. Clare\u7F16\u5199.

dereference ()
{
    y=\\$&quot;$1&quot;   # \u53D8\u91CF\u540D\uFF08\u800C\u4E0D\u662F\u503C\uFF09.
    echo $y    # $Junk

    x=\`eval &quot;expr \\&quot;$y\\&quot; &quot;\`
    echo $1=$x
    eval &quot;$1=\\&quot;Some Different Text \\&quot;&quot;  # \u8D4B\u65B0\u503C.
}

Junk=&quot;Some Text&quot;
echo $Junk &quot;before&quot;         # Some Text before

dereference Junk
echo $Junk &quot;after&quot;          # Some Different Text after

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u4F8B\u5B50 24-6. \u518D\u6765\u4E00\u6B21\uFF0C\u5BF9\u4E00\u4E2A\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u53C2\u6570\u8FDB\u884C\u89E3\u9664\u5F15\u7528\u7684\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# ref-params.sh: \u89E3\u9664\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u53C2\u6570\u5F15\u7528\u3002
#                (\u590D\u6742\u7684\u4F8B\u5B50C)

ITERATIONS=3  # \u53D6\u5F97\u8F93\u5165\u7684\u6B21\u6570\u3002
icount=1

my_read () {
    #  \u7528my_read varname\u8FD9\u79CD\u5F62\u5F0F\u6765\u8C03\u7528,
    #+ \u5C06\u4E4B\u524D\u7528\u62EC\u53F7\u62EC\u8D77\u7684\u503C\u4F5C\u4E3A\u9ED8\u8BA4\u503C\u8F93\u51FA,
    #+ \u7136\u540E\u8981\u6C42\u8F93\u5165\u4E00\u4E2A\u65B0\u503C.

    local local_var

    echo -n &quot;Enter a value &quot;
    eval &#39;echo -n &quot;[$&#39;$1&#39;] &quot;&#39;  #  \u4E4B\u524D\u7684\u503C.
# eval echo -n &quot;[\\$$1] &quot;     #  \u66F4\u5BB9\u6613\u7406\u89E3,
                             #+ \u4F46\u4F1A\u4E22\u5931\u7528\u6237\u5728\u5C3E\u90E8\u8F93\u5165\u7684\u7A7A\u683C\u3002
    read local_var
    [ -n &quot;$local_var&quot; ] &amp;&amp; eval $1=\\$local_var

    # &quot;\u4E0E\u5217\u8868&quot;: \u5982\u679C &quot;local_var&quot; \u7684\u6D4B\u8BD5\u7ED3\u679C\u4E3Atrue\uFF0C\u5219\u628A\u53D8\u91CF&quot;$1&quot;\u7684\u503C\u8D4B\u7ED9\u5B83\u3002
}

echo

while [ &quot;$icount&quot; -le &quot;$ITERATIONS&quot; ]
do
    my_read var
    echo &quot;Entry #$icount = $var&quot;
    let &quot;icount += 1&quot;
    echo
done

# \u611F\u8C22Stephane Chazelas \u63D0\u4F9B\u8FD9\u4E2A\u4F8B\u5B50\u3002

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="\u9000\u51FA\u4E0E\u8FD4\u56DE\u7801" tabindex="-1"><a class="header-anchor" href="#\u9000\u51FA\u4E0E\u8FD4\u56DE\u7801" aria-hidden="true">#</a> \u9000\u51FA\u4E0E\u8FD4\u56DE\u7801</h2><h3 id="\u9000\u51FA\u72B6\u6001\u7801" tabindex="-1"><a class="header-anchor" href="#\u9000\u51FA\u72B6\u6001\u7801" aria-hidden="true">#</a> \u9000\u51FA\u72B6\u6001\u7801</h3>`,9),O=n("\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u88AB\u79F0\u4E3A\u9000\u51FA\u72B6\u6001\u7801\u3002\u8FD9\u548C\u4E00\u6761\u547D\u4EE4\u8FD4\u56DE\u7684"),V={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},C=n("\u9000\u51FA\u72B6\u6001\u7801"),X=n("\u7C7B\u4F3C\u3002\u9000\u51FA\u72B6\u6001\u7801\u53EF\u4EE5\u7531"),M=s("strong",null,"return",-1),G=n(" \u547D\u4EE4\u660E\u786E\u6307\u5B9A\uFF0C\u4E5F\u53EF\u4EE5\u7531\u51FD\u6570\u4E2D\u6700\u540E\u4E00\u6761\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001\u7801\u6765\u6307\u5B9A\uFF08\u5982\u679C\u6210\u529F\uFF0C\u5219\u8FD4\u56DE0\uFF0C\u5426\u5219\u8FD4\u56DE\u975E0\u503C\uFF09\u3002\u53EF\u4EE5\u5728\u811A\u672C\u4E2D\u4F7F\u7528"),z={href:"http://tldp.org/LDP/abs/html/internalvariables.html#XSTATVARREF",target:"_blank",rel:"noopener noreferrer"},B=n("$?"),H=n("\u6765\u5F15\u7528"),Q={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},J=n("\u9000\u51FA\u72B6\u6001\u7801"),W=n("\u3002 \u56E0\u4E3A\u6709\u4E86\u8FD9\u79CD\u673A\u5236\uFF0C\u6240\u4EE5\u811A\u672C\u51FD\u6570\u4E5F\u53EF\u4EE5\u50CFC\u51FD\u6570\u4E00\u6837\u6709\u201C\u8FD4\u56DE\u503C\u201D\u3002"),Y=s("h3",{id:"return",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#return","aria-hidden":"true"},"#"),n(" return")],-1),K=n("\u7EC8\u6B62\u4E00\u4E2A\u51FD\u6570\u3002\u4E00\u4E2Areturn\u547D\u4EE4"),Z={href:"http://tldp.org/LDP/abs/html/complexfunct.html#FTN.AEN18474",target:"_blank",rel:"noopener noreferrer"},j=n("1"),nn=n(" \u53EF\u9009\u7684\u5141\u8BB8\u5E26\u4E00\u4E2A\u6574\u5F62\u53C2\u6570\uFF0C\u8FD9\u4E2A\u6574\u5F62\u53C2\u6570\u5C06\u4F5C\u4E3A\u51FD\u6570\u7684\u201C\u9000\u51FA\u72B6\u6001\u7801\u201D\u8FD4\u56DE\u7ED9\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u7684\u811A\u672C\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8BC1\u4E66\u4E5F\u88AB\u8D4B\u503C\u7ED9\u53D8\u91CF"),sn={href:"http://tldp.org/LDP/abs/html/internalvariables.html#XSTATVARREF",target:"_blank",rel:"noopener noreferrer"},en=n("$?"),an=n("."),rn=r(`<p>\u4F8B\u5B50 24-7. \u53D6\u4E24\u4E2A\u6570\u4E2D\u7684\u6700\u5927\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# max.sh: \u53D6\u4E24\u4E2AMaximum of two integers.
E_PARAM_ERR=250    # \u5982\u679C\u4F20\u7ED9\u51FD\u6570\u7684\u53C2\u6570\u5C11\u4E8E\u4E24\u4E2A\u65F6\uFF0C\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u503C\u3002
EQUAL=251          # \u5982\u679C\u4E24\u4E2A\u53C2\u6570\u76F8\u7B49\u65F6\uFF0C\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u503C\u3002
#  \u4EFB\u610F\u8D85\u51FA\u8303\u56F4\u7684
#+ \u53C2\u6570\u503C\u90FD\u53EF\u80FD\u4F20\u9012\u5230\u51FD\u6570\u4E2D\u3002

max2 ()             # \u8FD4\u56DE\u4E24\u4E2A\u6570\u4E2D\u7684\u6700\u5927\u503C\u3002
{                   # \u6CE8\u610F\uFF1A\u53C2\u4E0E\u6BD4\u8F83\u7684\u6570\u5FC5\u987B\u5C0F\u4E8E250.
    if [ -z &quot;$2&quot; ]
    then
        return $E_PARAM_ERR
    fi

    if [ &quot;$1&quot; -eq &quot;$2&quot; ]
    then
        return $EQUAL
    else
        if [ &quot;$1&quot; -gt &quot;$2&quot; ]
        then
            return $1
        else
            return $2
        fi
    fi
}

max2 33 34
return_val=$?

if [ &quot;$return_val&quot; -eq $E_PARAM_ERR ]
then
    echo &quot;Need to pass two parameters to the function.&quot;
elif [ &quot;$return_val&quot; -eq $EQUAL ]
then
    echo &quot;The two numbers are equal.&quot;
else
    echo &quot;The larger of the two numbers is $return_val.&quot;
fi

exit 0
#  \u7EC3\u4E60 (easy):
\uFFFC#  ---------------
#  \u628A\u8FD9\u4E2A\u811A\u672C\u8F6C\u5316\u4E3A\u4EA4\u4E92\u811A\u672C\uFF0C
#+ \u4E5F\u5C31\u662F\uFF0C\u4FEE\u6539\u8FD9\u4E2A\u811A\u672C\uFF0C\u8BA9\u5176\u8981\u6C42\u8C03\u7528\u8005\u8F93\u51652\u4E2A\u6570\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/tip.gif" alt="info" loading="lazy"> \u4E3A\u4E86\u8BA9\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u5B57\u7B26\u4E32\u6216\u8005\u662F\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u5728\u51FD\u6570\u5916\u53EF\u89C1\u7684\u4E13\u7528\u5168\u5C40\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>count_lines_in_etc_passwd()
{
    [[ -r /etc/passwd ]] &amp;&amp; REPLY=$(echo $(wc -l &lt; /etc/passwd))
    #  \u5982\u679C /etc/passwd \u53EF\u8BFB\uFF0C\u8BA9 REPLY \u7B49\u4E8E \u6587\u4EF6\u7684\u884C\u6570.
    #  \u8FD9\u6837\u5C31\u53EF\u4EE5\u540C\u65F6\u8FD4\u56DE\u53C2\u6570\u503C\u4E0E\u72B6\u6001\u4FE1\u606F\u3002
    #  &#39;echo&#39; \u770B\u4E0A\u53BB\u6CA1\u4EC0\u4E48\u7528\uFF0C\u53EF\u662F...
    #+ \u5B83\u7684\u4F5C\u7528\u662F\u5220\u9664\u8F93\u51FA\u4E2D\u7684\u591A\u4F59\u7A7A\u767D\u7B26\u3002
}

if count_lines_in_etc_passwd
then
    echo &quot;There are $REPLY lines in /etc/passwd.&quot;
else
    echo &quot;Cannot count lines in /etc/passwd.&quot;
fi

# \u611F\u8C22, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u4F8B\u5B50 24-8. \u5C06\u963F\u62C9\u4F2F\u6570\u5B57\u8F6C\u5316\u4E3A\u7F57\u9A6C\u6570\u5B57</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u5C06\u963F\u62C9\u4F2F\u6570\u5B57\u8F6C\u5316\u4E3A\u7F57\u9A6C\u6570\u5B57\u3002
# \u8303\u56F4\uFF1A0 - 200
# \u6BD4\u8F83\u7C97\u7CD9\uFF0C\u4F46\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u3002
# \u6269\u5C55\u8303\u56F4, \u5E76\u4E14\u5B8C\u5584\u8FD9\u4E2A\u811A\u672C, \u4F5C\u4E3A\u7EC3\u4E60.
# \u7528\u6CD5: roman number-to-convert

LIMIT=200
E_ARG_ERR=65
E_OUT_OF_RANGE=66

if [ -z &quot;$1&quot; ]
then
    echo &quot;Usage: \`basename $0\` number-to-convert&quot;
exit $E_ARG_ERR
fi

num=$1
if [ &quot;$num&quot; -gt $LIMIT ]
then
    echo &quot;Out of range!&quot;
    exit $E_OUT_OF_RANGE
fi

to_roman ()             # \u5728\u7B2C\u4E00\u6B21\u8C03\u7528\u51FD\u6570\u524D\u5FC5\u987B\u5148\u5B9A\u4E49\u5B83\u3002
{
    number=$1
    factor=$2
    rchar=$3
    let &quot;remainder = number - factor&quot;
    while [ &quot;$remainder&quot; -ge 0 ]
    do
        echo -n $rchar
        let &quot;number -= factor&quot;
        let &quot;remainder = number - factor&quot;
    done

    return $number
        # \u7EC3\u4E60:
        # ---------
        # 1) \u89E3\u91CA\u8FD9\u4E2A\u51FD\u6570\u5982\u4F55\u5DE5\u4F5C
        #    \u63D0\u793A: \u4F9D\u9760\u4E0D\u65AD\u7684\u9664\uFF0C\u6765\u5206\u5272\u6570\u5B57\u3002
        # 2) \u6269\u5C55\u51FD\u6570\u7684\u8303\u56F4\uFF1A
        #    \u63D0\u793A: \u4F7F\u7528echo\u548Csubstitution\u547D\u4EE4.
}

to_roman $num 100 C
num=$?
to_roman $num 90 LXXXX
num=$?
to_roman $num 50 L
num=$?
to_roman $num 40 XL
num=$?
to_roman $num 10 X
num=$?
to_roman $num 9 IX
num=$?
to_roman $num 5 V
num=$?
to_roman $num 4 IV
num=$?
to_roman $num 1 I
# \u6210\u529F\u8C03\u7528\u4E86\u8F6C\u6362\u51FD\u6570\u3002
# \u8FD9\u771F\u7684\u662F\u5FC5\u987B\u7684\u4E48\uFF1F \u8FD9\u4E2A\u53EF\u4EE5\u7B80\u5316\u4E48\uFF1F

echo

exit 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div>`,6),ln=n("\u4E5F\u53EF\u4EE5\u53C2\u89C1"),pn={href:"http://tldp.org/LDP/abs/html/testbranch.html#ISALPHA",target:"_blank",rel:"noopener noreferrer"},bn=n("\u4F8B\u5B50 11-29"),tn=s("img",{src:"http://tldp.org/LDP/abs/images/caution.gif",alt:"notice",loading:"lazy"},null,-1),un=n(" \u51FD\u6570\u6240\u80FD\u8FD4\u56DE\u6700\u5927\u7684\u6B63\u6574\u6570\u662F255. return\u547D\u4EE4\u548C"),cn={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},on=n("\u9000\u51FA\u72B6\u6001\u7801"),mn=n("\u7684\u6982\u5FF5\u7D27\u5BC6\u8054\u7CFB\u5728\u4E00\u8D77\uFF0C\u5E76\u4E14\u9000\u51FA\u72B6\u6001\u7801\u7684\u503C\u53D7\u6B64\u9650\u5236\u3002 \u5E78\u8FD0\u7684\u662F\uFF0C\u5982\u679C\u60F3\u8BA9\u51FD\u6570\u8FD4\u56DE\u5927\u6574\u6570\u7684\u8BDD\uFF0C\u6709\u597D\u591A\u79CD\u4E0D\u540C\u7684"),hn={href:"http://tldp.org/LDP/abs/html/assortedtips.html#RVT",target:"_blank",rel:"noopener noreferrer"},dn=n("\u53D8\u901A\u65B9\u6CD5"),_n=n(" \u80FD\u591F\u5E94\u5BF9\u8FD9\u4E2A\u60C5\u51B5\u3002"),qn=r(`<p>\u4F8B\u5B5024-9. \u6D4B\u8BD5\u51FD\u6570\u6700\u5927\u7684\u8FD4\u56DE\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# return-test.sh
# \u51FD\u6570\u6240\u80FD\u8FD4\u56DE\u7684\u6700\u5927\u6B63\u6574\u6570\u4E3A255.

return_test ()         # \u4F20\u7ED9\u51FD\u6570\u4EC0\u4E48\u503C\uFF0C\u5C31\u8FD4\u56DE\u4EC0\u4E48\u503C\u3002
{
    return $1
}

return_test 27          # o.k.
echo $?                 # \u8FD4\u56DE27.

return_test 255         # Still o.k.
echo $?                 # \u8FD4\u56DE 255.

return_test 257         # \u9519\u8BEF!
echo $?                 # \u8FD4\u56DE 1 (\u5BF9\u5E94\u5404\u79CD\u9519\u8BEF\u7684\u8FD4\u56DE\u7801).

# =========================================================
return_test -151896    # \u80FD\u8FD4\u56DE\u4E00\u4E2A\u5927\u8D1F\u6570\u4E48?
echo $?                # \u80FD\u5426\u8FD4\u56DE -151896?
                        # \u4E0D\u884C! \u8FD4\u56DE\u7684\u662F 168.

#  Bash 2.05b \u4E4B\u524D\u7684\u7248\u672C
#+ \u5141\u8BB8\u8FD4\u56DE\u5927\u8D1F\u6570\u3002
#  \u8FD9\u53EF\u80FD\u662F\u4E2A\u6709\u7528\u7684\u7279\u6027\u3002
#  Bash\u4E4B\u540E\u7684\u65B0\u7248\u672C\u4FEE\u6B63\u4E86\u8FD9\u4E2A\u6F0F\u6D1E\u3002
#  \u8FD9\u53EF\u80FD\u4F1A\u5F71\u54CD\u4EE5\u524D\u6240\u7F16\u5199\u7684\u811A\u672C\u3002
#  \u4E00\u5B9A\u8981\u5C0F\u5FC3!
# =========================================================

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u5982\u679C\u4F60\u60F3\u83B7\u5F97\u5927\u6574\u6570\u201C\u8FD4\u56DE\u503C\u201D\u7684\u8BDD\uFF0C\u7B80\u5355\u7684\u65B9\u6CD5\u5C31\u662F\u5C06\u201C\u8981\u8FD4\u56DE\u7684\u503C\u201D\u4FDD\u5B58\u5230\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Return_Val=   # \u7528\u4E8E\u4FDD\u5B58\u51FD\u6570\u7279\u5927\u8FD4\u56DE\u503C\u7684\u5168\u5C40\u53D8\u91CF\u3002

alt_return_test ()
{
    fvar=$1
    Return_Val=$fvar
    return   # \u8FD4\u56DE 0 (\u6210\u529F).
}

alt_return_test 1
echo $?             #0
echo &quot;return value = $Return_Val&quot;            #1

alt_return_test 256
echo &quot;return value = $Return_Val&quot;           # 256

alt_return_test 257
echo &quot;return value = $Return_Val&quot;           # 257

alt_return_test 25701
echo &quot;return value = $Return_Val&quot;           #25701
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,4),gn=n('\u4E00\u79CD\u66F4\u4F18\u96C5\u7684\u505A\u6CD5\u662F\u5728\u51FD\u6570\u4E2D\u4F7F\u7528echo\u547D\u4EE4\u5C06"\u8FD4\u56DE\u503C\u8F93\u51FA\u5230stdout\u201C\uFF0C\u7136\u540E\u7528'),fn={href:"http://tldp.org/LDP/abs/html/commandsub.html#COMMANDSUBREF",target:"_blank",rel:"noopener noreferrer"},$n=n("\u547D\u4EE4\u66FF\u6362"),xn=n("\u6765\u6355\u6349\u6B64\u503C\u3002\u8BF7\u53C2\u8003"),vn={href:"http://tldp.org/LDP/abs/html/assortedtips.html",target:"_blank",rel:"noopener noreferrer"},En=n("36.7\u5C0F\u8282"),Rn=n(" \u4E2D"),An={href:"http://tldp.org/LDP/abs/html/assortedtips.html#RVT",target:"_blank",rel:"noopener noreferrer"},Tn=n("\u5173\u4E8E\u8FD9\u79CD\u7528\u6CD5\u7684\u8BA8\u8BBA"),kn=n("\u3002"),Ln=r(`<p>\u4F8B\u5B50 24-10. \u6BD4\u8F83\u4E24\u4E2A\u5927\u6574\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# max2.sh: \u53D6\u4E24\u4E2A\u5927\u6574\u6570\u4E2D\u7684\u6700\u5927\u503C\u3002

#  \u8FD9\u662F\u524D\u4E00\u4E2A\u4F8B\u5B50 &quot;max.sh&quot; \u7684\u4FEE\u6539\u7248,
#+ \u8FD9\u4E2A\u7248\u672C\u53EF\u4EE5\u6BD4\u8F83\u4E24\u4E2A\u5927\u6574\u6570\u3002

EQUAL=0             # \u5982\u679C\u4E24\u4E2A\u503C\u76F8\u7B49\uFF0C\u90A3\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u503C\u3002
E_PARAM_ERR=-99999  # \u6CA1\u6709\u8DB3\u591F\u591A\u7684\u53C2\u6570\uFF0C\u90A3\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u503C\u3002
#           ^^^^^^    \u4EFB\u610F\u8D85\u51FA\u8303\u56F4\u7684\u53C2\u6570\u90FD\u53EF\u4EE5\u4F20\u9012\u8FDB\u6765\u3002

max2 ()             # &quot;\u8FD4\u56DE&quot; \u4E24\u4E2A\u6574\u6570\u4E2D\u6700\u5927\u7684\u90A3\u4E2A\u3002
{
    if [ -z &quot;$2&quot; ]
    then
        echo $E_PARAM_ERR
        return
    fi

    if [ &quot;$1&quot; -eq &quot;$2&quot; ]
    then
        echo $EQUAL
        return
    else
        if [ &quot;$1&quot; -gt &quot;$2&quot; ]
        then
            retval=$1
        else
            retval=$2
        fi
    fi

    echo $retval            # \u8F93\u51FA (\u5230 stdout), \u800C\u6CA1\u6709\u7528\u8FD4\u56DE\u503C\u3002
                            # \u4E3A\u4EC0\u4E48?
}


return_val=$(max2 33001 33997)
#            ^^^^             \u51FD\u6570\u540D
#                 ^^^^^ ^^^^^ \u4F20\u9012\u8FDB\u6765\u7684\u53C2\u6570
#  \u8FD9\u5176\u5B9E\u662F\u547D\u4EE4\u66FF\u6362\u7684\u4E00\u79CD\u5F62\u5F0F\uFF1A
#+ \u53EF\u4EE5\u628A\u51FD\u6570\u770B\u4F5C\u4E00\u4E2A\u547D\u4EE4\uFF0C
#+ \u7136\u540E\u628A\u51FD\u6570\u7684stdout\u8D4B\u503C\u7ED9\u53D8\u91CF\u201Creturn_val&quot;.


# ========================= OUTPUT ========================
if [ &quot;$return_val&quot; -eq &quot;$E_PARAM_ERR&quot; ]
then
    echo &quot;Error in parameters passed to comparison function!&quot;
elif [ &quot;$return_val&quot; -eq &quot;$EQUAL&quot; ]
then
    echo &quot;The two numbers are equal.&quot;
else
    echo &quot;The larger of the two numbers is $return_val.&quot;
fi
# =========================================================

exit 0

#  \u7EC3\u4E60:
#  ---------
#  1) \u627E\u5230\u4E00\u79CD\u66F4\u4F18\u96C5\u7684\u65B9\u6CD5\uFF0C
#+    \u53BB\u6D4B\u8BD5\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u53C2\u6570\u3002
#  2) \u7B80\u5316\u201D\u8F93\u51FA\u201C\u6BB5\u7684if/then\u7ED3\u6784\u3002
#  3) \u91CD\u5199\u8FD9\u4E2A\u811A\u672C\uFF0C\u4F7F\u5176\u80FD\u591F\u4ECE\u547D\u4EE4\u884C\u53C2\u6570\u4E2D\u83B7\u5F97\u8F93\u5165\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div>`,2),Pn=n("\u8FD9\u662F\u53E6\u4E00\u4E2A\u80FD\u591F\u6355\u6349\u51FD\u6570\u201D\u8FD4\u56DE\u503C\u201C\u7684\u4F8B\u5B50\u3002\u8981\u60F3\u641E\u660E\u767D\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u9700\u8981\u4E00\u4E9B"),Dn={href:"http://tldp.org/LDP/abs/html/awk.html#AWKREF",target:"_blank",rel:"noopener noreferrer"},wn=n("awk"),Sn=n("\u7684\u77E5\u8BC6\u3002"),Fn=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>month_length ()  # \u628A\u6708\u4EFD\u4F5C\u4E3A\u53C2\u6570\u3002
{                # \u8FD4\u56DE\u8BE5\u6708\u5305\u542B\u7684\u5929\u6570\u3002
    monthD=&quot;31 28 31 30 31 30 31 31 30 31 30 31&quot;  # \u4F5C\u4E3A\u5C40\u90E8\u53D8\u91CF\u58F0\u660E\uFF1F
    echo &quot;$monthD&quot; | awk &#39;{ print $&#39;&quot;\${1}&quot;&#39; }&#39;    # \u5C0F\u6280\u5DE7.
#                             ^^^^^^^^^
# \u4F20\u9012\u7ED9\u51FD\u6570\u7684\u53C2\u6570  ($1 -- \u6708\u4EFD), \u7136\u540E\u4F20\u7ED9 awk.
# Awk \u628A\u53C2\u6570\u89E3\u91CA\u4E3A&quot;print $1 . . . print $12&quot; (\u8FD9\u4F9D\u8D56\u4E8E\u6708\u4EFD\u53F7)
# \u8FD9\u662F\u4E00\u4E2A\u6A21\u677F\uFF0C\u7528\u4E8E\u5C06\u53C2\u6570\u4F20\u9012\u7ED9\u5185\u5D4Cawk\u7684\u811A\u672C\uFF1A
#                                 $&#39;&quot;\${script_parameter}&quot;&#39;
#    \u8FD9\u91CC\u662F\u4E00\u4E2A\u7B80\u5355\u7684awk\u7ED3\u6784\uFF1A
#    echo $monthD | awk -v month=$1 &#39;{print $(month)}&#39;
#    \u4F7F\u7528awk\u7684-v\u9009\u9879\uFF0C\u53EF\u4EE5\u628A\u4E00\u4E2A\u53D8\u91CF\u503C\u8D4B\u7ED9
#+   awk\u7A0B\u5E8F\u5757\u7684\u6267\u884C\u4F53\u3002
#    \u611F\u8C22 Rich.
#  \u9700\u8981\u505A\u4E00\u4E9B\u9519\u8BEF\u68C0\u67E5\uFF0C\u6765\u4FDD\u8BC1\u6708\u4EFD\u597D\u6B63\u786E\uFF0C\u5728\u8303\u56F4\uFF081-12\uFF09\u4E4B\u95F4\uFF0C 
#+ \u522B\u5FD8\u4E86\u68C0\u67E5\u95F0\u5E74\u7684\u4E8C\u6708\u3002
}
# ----------------------------------------------
# \u7528\u4F8B\uFF1A
month=4        # \u4EE5\u56DB\u6708\u4E3A\u4F8B\u3002
days_in=$(month_length $month)
echo $days_in  # 30
# ----------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,1),In=n("\u4E5F\u8BF7\u53C2\u8003"),Nn={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#DAYSBETWEEN",target:"_blank",rel:"noopener noreferrer"},Un=n("\u4F8B\u5B50 A-7"),yn=n(" \u548C"),On={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#STDDEV",target:"_blank",rel:"noopener noreferrer"},Vn=n("\u4F8B\u5B50A-37"),Cn=n("."),Xn=s("p",null,[n("\u7EC3\u4E60:\u4F7F\u7528\u76EE\u524D\u6211\u4EEC\u5DF2\u7ECF\u5B66\u5230\u7684\u77E5\u8BC6\uFF0C\u6765\u6269\u5C55\u4E4B\u524D\u7684\u4F8B\u5B50 "),s("a",{href:""},"\u5C06\u963F\u62C9\u4F2F\u6570\u5B57\u8F6C\u5316\u4E3A\u7F57\u9A6C\u6570\u5B57"),n("\uFF0C\u8BA9\u5B83\u80FD\u591F\u63A5\u53D7\u4EFB\u610F\u5927\u7684\u8F93\u5165\u3002")],-1),Mn=n("\u91CD\u5B9A\u5411 \u91CD\u5B9A\u5411\u51FD\u6570\u7684stdin \u51FD\u6570\u672C\u8D28\u4E0A\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A"),Gn={href:"http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF",target:"_blank",rel:"noopener noreferrer"},zn=n("\u4EE3\u7801\u5757"),Bn=n(",\u8FD9\u5C31\u610F\u5473\u7740\u5B83\u7684stdin\u53EF\u4EE5\u88AB\u91CD\u5B9A\u5411\uFF08\u6BD4\u5982"),Hn={href:"http://tldp.org/LDP/abs/html/special-chars.html#EX8",target:"_blank",rel:"noopener noreferrer"},Qn=n("\u4F8B\u5B503-1"),Jn=n(")\u3002"),Wn=r(`<p>\u4F8B\u5B50 24-11. \u4ECEusername\u4E2D\u53D6\u5F97\u7528\u6237\u7684\u771F\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# realname.sh
#
# \u4F9D\u9760username\uFF0C\u4ECE/etc/passwd \u4E2D\u83B7\u5F97\u201C\u771F\u540D\u201D.


ARGCOUNT=1       # \u9700\u8981\u4E00\u4E2A\u53C2\u6570.
E_WRONGARGS=85

file=/etc/passwd
pattern=$1

if [ $# -ne &quot;$ARGCOUNT&quot; ]
then
    echo &quot;Usage: \`basename $0\` USERNAME&quot;
    exit $E_WRONGARGS
fi

file_excerpt ()    # \u6309\u7167\u8981\u6C42\u7684\u6A21\u5F0F\u6765\u626B\u63CF\u6587\u4EF6,
{                  #+ \u7136\u540E\u6253\u5370\u6587\u4EF6\u7684\u76F8\u5173\u90E8\u5206\u3002
    while read line  # &quot;while&quot; \u5E76\u4E0D\u4E00\u5B9A\u975E\u5F97\u6709 [ \u6761\u4EF6 ] \u4E0D\u53EF\u3002
    do
        echo &quot;$line&quot; | grep $1 | awk -F&quot;:&quot; &#39;{ print $5 }&#39;
        # awk\u7528&quot;:&quot; \u4F5C\u4E3A\u754C\u5B9A\u7B26\u3002
    done
    } &lt;$file  # \u91CD\u5B9A\u5411\u5230\u51FD\u6570\u7684stdin\u3002

file_excerpt $pattern
# \u662F\u7684\uFF0C\u6574\u4E2A\u811A\u672C\u5176\u5B9E\u53EF\u4EE5\u88AB\u7F29\u51CF\u4E3A
#       grep PATTERN /etc/passwd | awk -F&quot;:&quot; &#39;{ print $5 }&#39;
# or
#       awk -F: &#39;/PATTERN/ {print $5}&#39;
# or
#       awk -F: &#39;($1 == &quot;username&quot;) { print $5 }&#39; # \u4ECEusername\u4E2D\u83B7\u53D6\u771F\u540D
# \u4F46\u662F\uFF0C\u8FD9\u4E9B\u8D77\u4E0D\u5230\u793A\u4F8B\u7684\u4F5C\u7528\u3002

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u8FD8\u6709\u4E00\u4E2A\u529E\u6CD5\uFF0C\u6216\u8BB8\u80FD\u591F\u66F4\u597D\u7684\u7406\u89E3\u91CD\u5B9A\u5411\u51FD\u6570\u7684stdin\u3002 \u5B83\u5728\u51FD\u6570\u5185\u6DFB\u52A0\u4E86\u4E00\u5BF9\u5927\u62EC\u53F7\uFF0C\u5E76\u4E14\u5C06\u91CD\u5B9A\u5411stdin\u7684\u884C\u4E3A\u653E\u5728\u8FD9\u5BF9\u6DFB\u52A0\u7684\u5927\u62EC\u53F7\u4E0A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7528\u4E0B\u9762\u7684\u65B9\u6CD5\u6765\u4EE3\u66FF\u5B83:
Function ()
{
    ...
} &lt; file

# \u8BD5\u8BD5\u8FD9\u4E2A:
Function ()
{
    { 
        ...
    } &lt; file 
}

# \u540C\u6837\u7684,

Function ()  # \u6CA1\u95EE\u9898.
{
    {
        echo $*
    } | tr a b 
}

Function ()  # \u4E0D\u884C.
{
    echo $*
} | tr a b   # \u8FD9\u513F\u7684\u5185\u5D4C\u4EE3\u7801\u5757\u662F\u88AB\u5F3A\u5236\u7684\u3002
# \u611F\u8C22, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,4),Yn=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"extra",loading:"lazy"},null,-1),Kn=n(" Emmanuel Rouat\u7684 "),Zn={href:"http://tldp.org/LDP/abs/html/sample-bashrc.html",target:"_blank",rel:"noopener noreferrer"},jn=n("sample bash"),ns=n(" \u6587\u4EF6\u5305\u542B\u4E86\u4E00\u4E9B\u5F88\u6709\u6307\u5BFC\u6027\u610F\u4E49\u7684\u51FD\u6570\u4F8B\u5B50\u3002"),ss=s("h3",{id:"echo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#echo","aria-hidden":"true"},"#"),n(" echo")],-1),es=s("p",null,[n("shell\u4E2D\u51FD\u6570\u8FD4\u56DE\u503C\uFF0C\u4E2A\u4EBA\u89C9\u5F97\u53EF\u4EE5\u7528"),s("code",null,"echo")],-1);function as(rs,ls){const e=p("ExternalLinkIcon");return u(),b(t,null,[c,s("p",null,[o,s("a",m,[h,a(e)]),d]),_,s("p",null,[q,s("a",g,[f,a(e)]),$]),x,s("p",null,[v,E,s("a",R,[A,a(e)]),T,s("a",k,[L,a(e)]),P]),D,s("p",null,[s("a",w,[S,a(e)]),F,s("a",I,[N,a(e)]),U]),y,s("p",null,[O,s("a",V,[C,a(e)]),X,M,G,s("a",z,[B,a(e)]),H,s("a",Q,[J,a(e)]),W]),Y,s("p",null,[K,s("a",Z,[j,a(e)]),nn,s("a",sn,[en,a(e)]),an]),rn,s("p",null,[ln,s("a",pn,[bn,a(e)])]),s("p",null,[tn,un,s("a",cn,[on,a(e)]),mn,s("a",hn,[dn,a(e)]),_n]),qn,s("p",null,[gn,s("a",fn,[$n,a(e)]),xn,s("a",vn,[En,a(e)]),Rn,s("a",An,[Tn,a(e)]),kn]),Ln,s("p",null,[Pn,s("a",Dn,[wn,a(e)]),Sn]),Fn,s("p",null,[In,s("a",Nn,[Un,a(e)]),yn,s("a",On,[Vn,a(e)]),Cn]),Xn,s("p",null,[Mn,s("a",Gn,[zn,a(e)]),Bn,s("a",Hn,[Qn,a(e)]),Jn]),Wn,s("p",null,[Yn,Kn,s("a",Zn,[jn,a(e)]),ns]),ss,es],64)}var bs=l(i,[["render",as],["__file","24_1_complex_functions_and_function_complexities.html.vue"]]);export{bs as default};
