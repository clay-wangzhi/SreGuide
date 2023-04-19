import{_ as n,e as s}from"./app.958f2970.js";const a={},e=s(`<h1 id="_36-4-\u9012\u5F52-\u53EF\u4EE5\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_36-4-\u9012\u5F52-\u53EF\u4EE5\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C" aria-hidden="true">#</a> 36.4 \u9012\u5F52\uFF1A\u53EF\u4EE5\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C</h1><p>\u811A\u672C\u53EF\u4EE5\u9012\u5F52\u7684\u8C03\u7528\u81EA\u5DF1\u5417\uFF1F\u7B54\u6848\u662F\u80AF\u5B9A\u7684\u3002</p><h2 id="example-36-10-\u53EF\u4EE5\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C-\u4F46\u6CA1\u4EC0\u4E48\u5B9E\u9645\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#example-36-10-\u53EF\u4EE5\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C-\u4F46\u6CA1\u4EC0\u4E48\u5B9E\u9645\u7528\u9014" aria-hidden="true">#</a> Example 36-10. \u53EF\u4EE5\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C\uFF08\u4F46\u6CA1\u4EC0\u4E48\u5B9E\u9645\u7528\u9014\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# recurse.sh

# \u811A\u672C\u53EF\u4EE5\u8C03\u7528\u81EA\u5DF1\u5417\uFF1F
# \u5176\u5B9E\u662F\u53EF\u4EE5\u7684\u3002\u4F46\u8FD9\u6837\u6709\u4EC0\u4E48\u5B9E\u9645\u7528\u9014\u5417\uFF1F
# \uFF08\u8BF7\u5F80\u4E0B\u770B\uFF09

RANGE=10
MAXVAL=9

i=$RANDOM
let &quot;i %= $RANGE&quot;  # \u57280\u5230$RANGE - 1\u7684\u8303\u56F4\u5185\u4EA7\u751F\u4E00\u4E2A\u968F\u673A\u6570

if [ &quot;$i&quot; -lt &quot;$MAXVAL&quot; ]
then
    echo &quot;i = $i&quot;
    ./$0           # \u811A\u672C\u8FDB\u884C\u9012\u5F52\u8C03\u7528\uFF08\u8C03\u7528\u81EA\u5DF1\uFF09
fi                 # \u6BCF\u6B21\u88AB\u8C03\u7528\u7684\u811A\u672C\u505A\u540C\u6837\u7684\u4E8B\u60C5\uFF0C\u76F4\u5230$i\u548C$MAXVAL\u76F8\u7B49\u3002 

# \u5982\u679C\u4F7F\u7528\u201Cwhile\u201D\u5FAA\u73AF\u4EE3\u66FF\u201Cif/then\u201D\u8BED\u53E5\u4F1A\u51FA\u95EE\u9898\u3002\u8BF7\u8BD5\u7740\u89E3\u91CA\u4E3A\u4EC0\u4E48\u3002

exit 0

# \u7B14\u8BB0:
# ----
# \u8FD9\u4E2A\u811A\u672C\u6587\u4EF6\u5FC5\u987B\u6709\u53EF\u6267\u884C\u6743\u9650\u3002
# \u5373\u4F7F\u4F7F\u7528\u201Csh\u201D\u547D\u4EE4\u8C03\u7528\uFF0C\u8FD9\u811A\u672C\u4E5F\u53EF\u4EE5\u6267\u884C\u3002
# \u8BF7\u89E3\u91CA\u539F\u56E0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="example-36-11-\u4E00\u4E2A\u6709\u70B9\u7528\u7684\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#example-36-11-\u4E00\u4E2A\u6709\u70B9\u7528\u7684\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C" aria-hidden="true">#</a> Example 36-11. \u4E00\u4E2A\u6709\u70B9\u7528\u7684\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# pb.sh: phone book

# \u7528\u4E8E\u6743\u9650\u7BA1\u7406\u7684\u811A\u672C\uFF0C\u7531Rick Boivie\u7F16\u5199\u3002
# ABS\u4F5C\u8005\u7A0D\u6709\u4FEE\u6539

MINARGS=1     # \u9700\u8981\u81F3\u5C11\u4E00\u4E2A\u53C2\u6570
DATAFILE=./phonebook
              # \u5F53\u524D\u76EE\u5F55\u4E0B\u5FC5\u987B\u5B58\u5728\u540D\u4E3A\u201Cphonebook\u201D\u7684\u6570\u636E\u6587\u4EF6
PROGNAME=$0
E_NOARGS=70   # \u6CA1\u6709\u9519\u8BEF

if [ $# -lt $MINARGS ]; then
    echo &quot;Usage: &quot;$PROGNAME&quot; data-to-look-up&quot;
    exit $E_NOARGS
fi      

if [ $# -eq $MINARGS ]; then
    grep $1 &quot;$DATAFILE&quot;
    # \u5982\u679C$DATAFILE\u6CA1\u6709\u5339\u914D\u5219&#39;grep&#39;\u547D\u4EE4\u4F1A\u62A5\u9519\u3002
else
    ( shift; &quot;$PROGNAME&quot; $* ) | grep $1
    # \u811A\u672C\u7684\u9012\u5F52\u8C03\u7528
fi
exit 0        # \u811A\u672C\u7ED3\u675F 

# \u4E0B\u9762\u662F\u4E00\u4E9B\u6587\u4EF6\u5185\u5BB9

# ------------------------------------------------------------------------
\u4E00\u4E2A\u7B80\u5355\u7684&quot;phonebook&quot;\u6570\u636E\u6587\u4EF6:

John Doe        1555 Main St., Baltimore, MD 21228          (410) 222-3333
Mary Moe        9899 Jones Blvd., Warren, NH 03787          (603) 898-3232
Richard Roe     856 E. 7th St., New York, NY 10009          (212) 333-4567
Sam Roe         956 E. 8th St., New York, NY 10009          (212) 444-5678
Zoe Zenobia     4481 N. Baker St., San Francisco, SF 94338  (415) 501-1631
# ------------------------------------------------------------------------

$bash pb.sh Roe
Richard Roe     856 E. 7th St., New York, NY 10009          (212) 333-4567
Sam Roe         956 E. 8th St., New York, NY 10009          (212) 444-5678

$bash pb.sh Roe Sam
Sam Roe         956 E. 8th St., New York, NY 10009          (212) 444-5678

# \u5F53\u5BF9\u811A\u672C\u4F20\u5165\u591A\u4E8E\u4E00\u4E2A\u53C2\u6570\u65F6\uFF0C\u811A\u672C\u53EA\u663E\u793A\u5305\u542B\u6240\u6709\u53C2\u6570\u7684\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="example-36-12-\u53E6\u4E00\u4E2A\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#example-36-12-\u53E6\u4E00\u4E2A\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C" aria-hidden="true">#</a> Example 36-12. \u53E6\u4E00\u4E2A\u8C03\u7528\u81EA\u5DF1\u7684\u811A\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# usrmnt.sh, \u7531Anthony Richardson\u7F16\u5199
# \u5728ABS Guide\u4E2D\u7528\u4E8E\u6743\u9650\u7BA1\u7406

# usage:       usrmnt.sh
# description: \u60F3\u4F7F\u7528\u6302\u8F7D\u8BBE\u5907\u64CD\u4F5C\u7684\u7528\u6237\uFF0C\u5728/etc/sudoers\u6587\u4EF6\u4E2D\u5FC5\u987B\u5C5E\u4E8EMNTUSERS\u7EC4\u3002

# ----------------------------------------------------------
# \u8FD9\u4E2A\u811A\u672C\u4F1A\u8FD4\u56DE\u52A0\u4E86sudo\u547D\u4EE4\u7684\u81EA\u8EAB\u3002
# \u5982\u679C\u4E00\u4E2A\u6709\u6743\u9650\u7684\u7528\u6237\uFF0C\u5219\u53EA\u9700\u8981\u8F93\u5165\uFF1A
#   usermount /dev/fd0 /mnt/floppy
# \u800C\u4E0D\u9700\u8981\u4F7F\u7528\u4E0B\u9762\u7684\u65B9\u6CD5\uFF1A
#   sudo usermount /dev/fd0 /mnt/floppy

# \u6211\u5BF9\u4E8E\u6240\u6709\u9700\u8981sudo\u7684\u811A\u672C\u90FD\u4F7F\u7528\u4E86\u8FD9\u4E2A\u6280\u672F\uFF0C\u56E0\u4E3A\u6211\u53D1\u73B0\u8FD9\u8BA9\u6211\u611F\u89C9\u975E\u5E38\u8212\u670D\u3002
# ----------------------------------------------------------

# \u5982\u679CSUDO_COMMAND\u53D8\u91CF\u6CA1\u6709\u88AB\u8BBE\u7F6E\uFF0C\u90A3\u8BC1\u660E\u6CA1\u6709\u4F7F\u7528sudo\u547D\u4EE4\u8FD0\u884C\u3002\u8FD9\u9700\u8981
# \u518D\u91CD\u65B0\u8FD0\u884C\u8FD9\u4E2A\u811A\u672C\uFF0C\u540C\u65F6\u4F20\u9012\u7528\u6237\u7684ID\u548C\u7EC4ID...

if [ -z &quot;$SUDO_COMMAND&quot; ]
then
    mntusr=$(id -u) grpusr=$(id -g) sudo $0 $* # \u8BD1\u6CE8\uFF1A\u811A\u672C\u8C03\u7528\u81EA\u5DF1\uFF0C\u5E76\u4E14\u4F20\u9012\u53C2\u6570
    exit 0
fi

# \u5982\u679C\u4F7F\u7528\u4E86sudo\u8FD0\u884C\uFF0C\u5C31\u4E0D\u4F1A\u5361\u5728\u8FD9\u91CC\u4E86\u3002
/bin/mount $* -o uid=$mntusr,gid=$grpusr

exit 0

# \u9644\u52A0\u8BF4\u660E\uFF1A
# -------------------------------------------------

# 1) Linux\u7CFB\u7EDF\u5141\u8BB8/etc/fstab\u6587\u4EF6\u4E2D\u5217\u51FA\u7684\u7528\u6237\u6302\u5728\u79FB\u52A8\u5B58\u50A8\u8BBE\u5907\u3002\u4F46\u5728\u670D\u52A1\u5668\u4E0A\uFF0C\u6211\u559C\u6B22\u8BA9\u66F4\u5C11\u7684\u4EBA\u8BBF\u95EE\u79FB\u52A8\u5B58\u50A8\u3002\u6211\u53D1\u73B0\u4F7F\u7528sudo\u53EF\u4EE5\u5E2E\u6211\u505A\u5230\u3002

# 2) \u6211\u8FD8\u53D1\u73B0\u4F7F\u7528sudo\u6BD4\u7528\u7EC4\u6743\u9650\u6765\u5B9E\u73B0\u8BA9\u4EBA\u611F\u89C9\u66F4\u52A0\u8212\u670D\u3002

# 3) \u8FD9\u79CD\u65B9\u6CD5\u53EF\u4EE5\u7ED9\u4EFB\u4F55\u6709\u6743\u9650\u7684\u4EBA\u4F7F\u7528mount\u547D\u4EE4\uFF0C\u6240\u4EE5\u8981\u5C0F\u5FC3\u5904\u7406\u3002
#    \u4F60\u4E5F\u53EF\u4EE5\u5C06\u8FD9\u79CD\u6280\u672F\u7528\u5230\u6BD4\u5982mntfloppy\uFF0Cmntcdrom\u548Cmntsamba\u7B49\u811A\u672C\u4E0A\u6765\u5B9E\u73B0\u66F4\u4F18\u96C5\u7684\u6302\u8F7D\u7BA1\u7406\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u8FC7\u591A\u5C42\u6B21\u7684\u9012\u5F52\u8C03\u7528\u4F1A\u5BFC\u81F4\u811A\u672C\u7684\u6808\u7A7A\u95F4\u6EA2\u51FA\uFF0C\u5F15\u8D77\u6BB5\u9519\u8BEF\uFF08segfault\uFF09\u3002</p>`,9);function r(l,p){return e}var i=n(a,[["render",r],["__file","36_4_recursion_a_script_calling_itself.html.vue"]]);export{i as default};
