import{_ as n,e as s}from"./app.37ca1d6f.js";const a={},e=s(`<h1 id="_24-3-\u4E0D\u4F7F\u7528\u5C40\u90E8\u53D8\u91CF\u7684\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#_24-3-\u4E0D\u4F7F\u7528\u5C40\u90E8\u53D8\u91CF\u7684\u9012\u5F52" aria-hidden="true">#</a> 24.3 \u4E0D\u4F7F\u7528\u5C40\u90E8\u53D8\u91CF\u7684\u9012\u5F52</h1><p>\u5373\u4F7F\u4E0D\u9002\u7528\u5C40\u90E8\u53D8\u91CF\uFF0C\u51FD\u6570\u4E5F\u53EF\u4EE5\u9012\u5F52\u7684\u8C03\u7528\u81EA\u8EAB\u3002</p><h2 id="\u6590\u6CE2\u90A3\u5951\u5E8F\u5217" tabindex="-1"><a class="header-anchor" href="#\u6590\u6CE2\u90A3\u5951\u5E8F\u5217" aria-hidden="true">#</a> \u6590\u6CE2\u90A3\u5951\u5E8F\u5217</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# fibo.sh : \u6590\u6CE2\u90A3\u5951\u5E8F\u5217 (\u9012\u5F52)
# \u4F5C\u8005: M. Cooper
# License: GPL3

# ----------\u7B97\u6CD5--------------
# Fibo(0) = 0
# Fibo(1) = 1
# else
#   Fibo(j) = Fibo(j-1) + Fibo(j-2)
# ---------------------------------

MAXTERM=15       # \u8981\u4EA7\u751F\u7684\u8BA1\u7B97\u6B21\u6570\u3002
MINIDX=2         # \u5982\u679C\u4E0B\u6807\u5C0F\u4E8E2\uFF0C\u90A3\u4E48 Fibo(idx) = idx.

Fibonacci ()
{
    idx=$1   # \u4E0D\u9700\u8981\u662F\u5C40\u90E8\u53D8\u91CF\uFF0C\u4E3A\u4EC0\u4E48\uFF1F
    if [ &quot;$idx&quot; -lt &quot;$MINIDX&quot; ]
    then
        echo &quot;$idx&quot;  # \u524D\u4E24\u4E2A\u4E0B\u6807\u662F0\u548C1 ... \u4ECE\u4E0A\u9762\u7684\u7B97\u6CD5\u53EF\u4EE5\u770B\u51FA\u6765\u3002
    else
        (( --idx ))  # j-1
        term1=$( Fibonacci $idx )   #  Fibo(j-1)
        (( --idx ))  # j-2
        term2=$( Fibonacci $idx )   #  Fibo(j-2)
        echo $(( term1 + term2 ))
    fi
    #  \u4E00\u4E2A\u4E11\u964B\u7684\u5B9E\u73B0
    #  C\u8BED\u8A00\u91CC\uFF0C\u4E00\u4E2A\u66F4\u52A0\u4F18\u96C5\u7684\u6590\u6CE2\u90A3\u5951\u9012\u5F52\u5B9E\u73B0
    #+ \u662F\u4E00\u4E2A\u7B80\u5355\u7684\u53EA\u9700\u89817-10\u4EE3\u7801\u7684\u7B97\u6CD5\u7FFB\u8BD1\u3002
}

for i in $(seq 0 $MAXTERM)
do  # \u8BA1\u7B97 $MAXTERM+1 \u6B21.
    FIBO=$(Fibonacci $i)
    echo -n &quot;$FIBO &quot;
done
# 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
# \u8981\u82B1\u8D39\u4E00\u6BB5\u65F6\u95F4\uFF0C\u4E0D\u662F\u4E48\uFF1F \u4E00\u4E2A\u9012\u5F52\u811A\u672C\u662F\u6709\u4E9B\u6162\u7684\u3002

echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u4F8B\u5B50 24-17. \u6C49\u8BFA\u5854</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#! /bin/bash
#
# \u6C49\u8BFA\u5854
# Bash script
# Copyright (C) 2000 Amit Singh. All Rights Reserved.
# http://hanoi.kernelthread.com
#
# \u5728 Bash version 2.05b.0(13)-release\u4E0B\u901A\u8FC7\u6D4B\u8BD5.
# \u540C\u6837\u5728Bash3.x\u7248\u672C\u4E0B\u5DE5\u4F5C\u6B63\u5E38\u3002
#
#  \u5728 &quot;Advanced Bash Scripting Guide&quot; \u4E00\u4E66\u4E2D\u4F7F\u7528
#+ \u7ECF\u8FC7\u4E86\u811A\u672C\u4F5C\u8005\u7684\u8BB8\u53EF\u3002
#  ABS\u7684\u4F5C\u8005\u5BF9\u811A\u672C\u8FDB\u884C\u4E86\u8F7B\u5FAE\u7684\u4FEE\u6539\u548C\u6CE8\u91CA\u3002
#=================================================================#
#  \u6C49\u8BFA\u5854\u662F\u7531Edouard Lucas,\u63D0\u51FA\u7684\u6570\u5B66\u8C1C\u9898\uFF0C 
#+  \u4ED6\u662F19\u4E16\u7EAA\u7684\u6CD5\u56FD\u6570\u5B66\u5BB6\u3002
#
# \u6709\u4E09\u4E2A\u76F4\u7ACB\u7684\u67F1\u5B50\u7AD6\u5728\u5730\u9762\u4E0A\u3002
# \u7B2C\u4E00\u4E2A\u67F1\u5B50\u4E0A\u6709\u4E00\u7EC4\u76D8\u5B50\u5957\u5728\u4E0A\u9762\u3002
# \u8FD9\u4E9B\u76D8\u5B50\u662F\u5E73\u7684\uFF0C\u4E2D\u95F4\u6709\u5B54\uFF0C
#+ \u53EF\u4EE5\u5957\u5728\u67F1\u5B50\u4E0A\u9762\u3002
# \u8FD9\u4E9B\u76D8\u5B50\u7684\u76F4\u5F84\u4E0D\u540C\uFF0C\u5B83\u4EEC\u4ECE\u4E0B\u800C\u4E0A\uFF0C 
#+ \u6309\u7167\u5C3A\u5BF8\u9012\u51CF\u7684\u987A\u5E8F\u6446\u653E\u3002
# \u4E5F\u5C31\u662F\u8BF4\uFF0C\u6700\u5C0F\u7684\u5728\u6700\u4E0A\u8FB9\uFF0C\u6700\u5927\u7684\u5728\u6700\u4E0B\u9762\u3002
#
# \u73B0\u5728\u7684\u4EFB\u52A1\u662F\u8981\u628A\u8FD9\u7EC4\u76D8\u5B50  
#+ \u4ECE\u4E00\u4E2A\u67F1\u5B50\u4E0A\u5168\u90E8\u642C\u5230\u53E6\u4E00\u4E2A\u67F1\u5B50\u4E0A 
# \u4F60\u6BCF\u6B21\u53EA\u80FD\u5C06\u4E00\u4E2A\u76D8\u5B50\u4ECE\u4E00\u4E2A\u67F1\u5B50\u79FB\u5230\u53E6\u4E00\u4E2A\u67F1\u5B50\u4E0A\u3002
# \u4F60\u4E5F\u53EF\u4EE5\u628A\u76D8\u5B50\u4ECE\u5176\u4ED6\u7684\u67F1\u5B50\u4E0A\u79FB\u56DE\u5230\u539F\u6765\u7684\u67F1\u5B50\u4E0A\u3002
# \u4F60\u53EA\u80FD\u628A\u5C0F\u7684\u76D8\u5B50\u653E\u5230\u5927\u7684\u76D8\u5B50\u4E0A\u3002
#+ \u53CD\u8FC7\u6765\u5C31\u4E0D\u884C\u3002
# \u5207\u8BB0\uFF0C\u7EDD\u5BF9\u4E0D\u80FD\u628A\u5927\u76D8\u5B50\u653E\u5230\u5C0F\u76D8\u5B50\u7684\u4E0A\u9762\u3002
# \u5982\u679C\u76D8\u5B50\u7684\u6570\u91CF\u6BD4\u8F83\u5C11\uFF0C\u90A3\u4E48\u79FB\u4E0D\u4E86\u51E0\u6B21\u5C31\u80FD\u5B8C\u6210\u3002
#+ \u4F46\u662F\u968F\u7740\u76D8\u5B50\u6570\u91CF\u7684\u589E\u52A0\uFF0C
#+ \u79FB\u52A8\u6B21\u6570\u51E0\u4E4E\u6210\u500D\u7684\u589E\u957F\uFF0C
#+ \u800C\u4E14\u79FB\u52A8\u7684\u201C\u7B56\u7565\u201D\u4E5F\u4F1A\u53D8\u5F97\u8D8A\u6765\u8D8A\u590D\u6742\u3002
#
# \u60F3\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u7684\u8BDD\uFF0C\u8BF7\u8BBF\u95EEhttp://hanoi.kernelthread.com
#+ \u6216\u8005 pp. 186-92 of _The Armchair Universe_ by A.K. Dewdney.
#
#
#           ...             ...         ...
#           | |             | |         | |
#          _|_|_            | |         | |
#         |_____|           | |         | |
#        |_______|          | |         | |
#       |_________|         | |         | |
#      |___________|        | |         | |
#     |             |       | |         | |
# .--------------------------------------------------------------. 
# |**************************************************************| 
#            #1              #2          #3
# #=================================================================#

E_NOPARAM=66  # \u6CA1\u6709\u53C2\u6570\u4F20\u7ED9\u811A\u672C\u3002
E_BADPARAM=67 # \u4F20\u7ED9\u811A\u672C\u7684\u76D8\u5B50\u4E2A\u6570\u4E0D\u7B26\u5408\u8981\u6C42\u3002
Moves=        # \u4FDD\u5B58\u79FB\u52A8\u6B21\u6570\u7684\u5168\u5C40\u53D8\u91CF\u3002
              # \u8FD9\u91CC\u4FEE\u6539\u4E86\u539F\u6765\u7684\u811A\u672C\u3002

dohanoi() {   # \u9012\u5F52\u51FD\u6570
    case $1 in
    0)
        ;;
    *)
        dohanoi &quot;$(($1-1))&quot; $2 $4 $3
        echo move $2 &quot;--&gt;&quot; $3
        ((Moves++))          # \u8FD9\u91CC\u4FEE\u6539\u4E86\u539F\u6765\u7684\u811A\u672C\u3002
        dohanoi &quot;$(($1-1))&quot; $4 $3 $2
        ;;
    esac 
}

case $# in
    1) case $(($1&gt;0)) in     # \u81F3\u5C11\u8981\u6709\u4E00\u4E2A\u76D8\u5B50
        1)  # Nested case statement.
            dohanoi $1 1 3 2
            echo &quot;Total moves = $Moves&quot;     # 2^n - 1, where n = # of disks.
            exit 0;
            ;; 
        *)    
            echo &quot;$0: illegal value for number of disks&quot;;
            exit $E_BADPARAM;
            ;;
        esac ;;
    *)
        echo &quot;usage: $0 N&quot;
        echo &quot;       Where \\&quot;N\\&quot; is the number of disks.&quot;
        exit $E_NOPARAM;
        ;;
    esac

# \u7EC3\u4E60:
# ---------
# 1) \u8FD9\u4E2A\u4F4D\u7F6E\u4EE5\u4E0B\u7684\u4EE3\u7801\u4F1A\u4E0D\u4F1A\u6267\u884C\uFF1F 
#    \u4E3A\u4EC0\u4E48\u4E0D(\u5BB9\u6613)
# 2) \u89E3\u91CA\u4E00\u4E0B\u8FD9\u4E2A &quot;dohanoi&quot; \u51FD\u6570\u7684\u8FD0\u884C\u539F\u7406.
#    (\u6BD4\u8F83\u96BE \u53EF\u4EE5\u53C2\u8003\u4E0A\u9762\u7684Dewdney \u7684\u5F15\u7528)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div>`,6);function r(l,b){return e}var i=n(a,[["render",r],["__file","24_3_recursion_without_local_variables.html.vue"]]);export{i as default};
