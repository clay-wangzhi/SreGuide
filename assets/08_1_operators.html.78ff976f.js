import{_ as l,r as i,c as p,a as n,b as r,F as t,e as s,d as a,o as b}from"./app.37ca1d6f.js";const c={},u=s(`<h1 id="_8-1-\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_8-1-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 8.1 \u8FD0\u7B97\u7B26</h1><h2 id="\u8D4B\u503C\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8D4B\u503C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8D4B\u503C\u8FD0\u7B97\u7B26</h2><p><em>\u53D8\u91CF\u8D4B\u503C</em>\uFF0C\u521D\u59CB\u5316\u6216\u6539\u53D8\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\u3002</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> =</h3><p>\u7B49\u53F7<code>=</code>\u8D4B\u503C\u8FD0\u7B97\u7B26\uFF0C\u65E2\u53EF\u7528\u4E8E\u7B97\u672F\u8D4B\u503C\uFF0C\u4E5F\u53EF\u7528\u4E8E\u5B57\u7B26\u4E32\u8D4B\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var=27
category=minerals  # &quot;=&quot;\u5DE6\u53F3\u4E0D\u5141\u8BB8\u6709\u7A7A\u683C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6),o=n("img",{src:"http://tldp.org/LDP/abs/images/caution.gif",alt:"caution",loading:"lazy"},null,-1),d=a(" \u6CE8\u610F\uFF0C\u4E0D\u8981\u6DF7\u6DC6"),m=n("code",null,"=",-1),h=a("\u8D4B\u503C\u8FD0\u7B97\u7B26\u4E0E"),q=n("code",null,"=",-1),f={href:"http://tldp.org/LDP/abs/html/comparison-ops.html#EQUALSIGNREF",target:"_blank",rel:"noopener noreferrer"},x=a("\u6D4B\u8BD5\u64CD\u4F5C\u7B26"),g=a("\u3002"),$=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#   =   \u4F5C\u4E3A\u6D4B\u8BD5\u64CD\u4F5C\u7B26

if [ &quot;$string1&quot; = &quot;$string2&quot; ]
then
   command
fi

#  [ &quot;X$string1&quot; = &quot;X$string2&quot; ] \u8FD9\u6837\u5199\u662F\u5B89\u5168\u7684,
#  \u8FD9\u6837\u5199\u53EF\u4EE5\u907F\u514D\u4EFB\u610F\u4E00\u4E2A\u53D8\u91CF\u4E3A\u7A7A\u65F6\u7684\u62A5\u9519\u3002
#  (\u53D8\u91CF\u524D\u52A0\u7684&quot;X&quot;\u5B57\u7B26\u89C4\u907F\u4E86\u53D8\u91CF\u4E3A\u7A7A\u7684\u60C5\u51B5)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u7B97\u672F\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u7B97\u672F\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u7B97\u672F\u8FD0\u7B97\u7B26</h2><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> +</h3><p>\u52A0</p><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> -</h3><p>\u51CF</p><h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> *</h3><p>\u4E58</p><h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> /</h3><p>\u9664</p><h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-hidden="true">#</a> **</h3><p>\u5E42\u8FD0\u7B97</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Bash, 2.02\u7248\u672C\uFF0C\u63A8\u51FA\u4E86&quot;**&quot;\u5E42\u8FD0\u7B97\u64CD\u4F5C\u7B26\u3002

let &quot;z=5**3&quot;    # 5 * 5 * 5
echo &quot;z = $z&quot;   # z = 125
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> %</h3><p>\u53D6\u4F59(\u8FD4\u56DE\u6574\u6570\u9664\u6CD5\u7684\u4F59\u6570)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash$ expr 5 % 3
2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>5/3=1\uFF0C\u4F592 \u53D6\u4F59\u8FD0\u7B97\u7B26\u7ECF\u5E38\u88AB\u7528\u4E8E\u751F\u6210\u4E00\u5B9A\u8303\u56F4\u5185\u7684\u6570( \u6848\u4F8B9-11, \u6848\u4F8B9-15)\uFF0C\u4EE5\u53CA\u683C\u5F0F\u5316\u7A0B\u5E8F\u8F93\u51FA(\u6848\u4F8B 27-16\uFF0C\u6848\u4F8B A-6)\u3002 \u53D6\u4F59\u8FD0\u7B97\u7B26\u8FD8\u53EF\u4EE5\u7528\u6765\u4EA7\u751F\u7D20\u6570\uFF08\u6848\u4F8BA-15\uFF09\uFF0C\u53D6\u4F59\u7684\u51FA\u73B0\u5927\u5927\u6269\u5C55\u4E86\u6574\u6570\u7684\u7B97\u672F\u8FD0\u7B97\u3002</p><p><strong>\u6837\u4F8B 8-1. \u6700\u5927\u516C\u7EA6\u6570</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# gcd.sh: \u6700\u5927\u516C\u7EA6\u6570
#         \u4F7F\u7528\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5

#  \u4E24\u4E2A\u6574\u6570\u7684\u6700\u5927\u516C\u7EA6\u6570\uFF08gcd\uFF09
#  \u662F\u4E24\u6570\u80FD\u540C\u65F6\u6574\u9664\u7684\u6700\u5927\u6570

#  \u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5\u4F7F\u7528\u8F97\u8F6C\u76F8\u9664\u6CD5
#    In each pass,
#       dividend &lt;---  divisor
#       divisor  &lt;---  remainder
#    until remainder = 0.
#    The gcd = dividend, on the final pass.
#
#  \u5173\u4E8E\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5\u66F4\u8BE6\u7EC6\u7684\u8BA8\u8BBA\uFF0C\u53EF\u4EE5\u67E5\u770B:
#  Jim Loy&#39;s site, http://www.jimloy.com/number/euclids.htm.


# ------------------------------------------------------
# \u53C2\u6570\u68C0\u67E5
ARGS=2
E_BADARGS=85

if [ $# -ne &quot;$ARGS&quot; ]
then
  echo &quot;Usage: \`basename $0\` first-number second-number&quot;
  exit $E_BADARGS
fi
# ------------------------------------------------------


gcd ()
{

  dividend=$1             #  \u968F\u610F\u8D4B\u503C\uFF0C
  divisor=$2              #  \u4E24\u6570\u8C01\u5927\u8C01\u5C0F\u662F\u65E0\u5173\u7D27\u8981\u7684\uFF0C
                          #  \u4E3A\u4EC0\u4E48?

  remainder=1             #  \u5982\u679C\u5728\u6D4B\u8BD5\u62EC\u53F7\u91CC\u4F7F\u7528\u4E86\u4E00\u4E2A\u672A\u521D\u59CB\u5316\u7684\u53D8\u91CF\uFF0C
                          #  \u4F1A\u62A5\u9519\u7684\u3002

  until [ &quot;$remainder&quot; -eq 0 ]
  do    #  ^^^^^^^^^^  \u8BE5\u53D8\u91CF\u5FC5\u987B\u5728\u4F7F\u7528\u524D\u521D\u59CB\u5316\uFF01
    let &quot;remainder = $dividend % $divisor&quot;
    dividend=$divisor     # \u5BF9\u88AB\u9664\u6570\uFF0C\u9664\u6570\u91CD\u65B0\u8D4B\u503C
    divisor=$remainder
  done                    # \u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5

}                         # \u6700\u540E\u7684 $dividend \u5C31\u662F\u6700\u5927\u516C\u7EA6\u6570\uFF08gcd\uFF09


gcd $1 $2

echo; echo &quot;GCD of $1 and $2 = $dividend&quot;; echo


# \u7EC3\u4E60 :
# ---------
# 1) \u68C0\u67E5\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u4FDD\u8BC1\u5176\u4E3A\u6574\u6570\uFF0C
#+   \u5982\u679C\u6709\u9519\u8BEF\uFF0C\u6355\u6349\u9519\u8BEF\u5E76\u5728\u811A\u672C\u9000\u51FA\u524D\u6253\u5370\u51FA\u9002\u5F53\u7684\u9519\u8BEF\u4FE1\u606F\u3002
# 2) \u4F7F\u7528\u672C\u5730\u53D8\u91CF(local variables)\u91CD\u5199gcd()\u51FD\u6570\u3002

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7" aria-hidden="true">#</a> +=</h3><p>\u52A0\u7B49 \uFF08\u52A0\u4E0A\u4E00\u4E2A\u6570\uFF09<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup><code>let &quot;var += 5&quot;</code> \u7684\u7ED3\u679C\u662F<code>var</code>\u53D8\u91CF\u7684\u503C\u589E\u52A0\u4E865\u3002</p><h3 id="-8" tabindex="-1"><a class="header-anchor" href="#-8" aria-hidden="true">#</a> -=</h3><p>\u51CF\u7B49 \uFF08\u51CF\u53BB\u4E00\u4E2A\u6570\uFF09</p><h3 id="-9" tabindex="-1"><a class="header-anchor" href="#-9" aria-hidden="true">#</a> *=</h3><p>\u4E58\u7B49 \uFF08\u4E58\u4EE5\u4E00\u4E2A\u6570\uFF09 <code>let &quot;var *= 4&quot;</code> \u7684\u7ED3\u679C\u662F<code>var</code>\u53D8\u91CF\u7684\u503C\u4E58\u4E864\u3002</p><h3 id="-10" tabindex="-1"><a class="header-anchor" href="#-10" aria-hidden="true">#</a> /=</h3><p>\u9664\u7B49 \uFF08\u9664\u4EE5\u4E00\u4E2A\u6570\uFF09</p><h3 id="-11" tabindex="-1"><a class="header-anchor" href="#-11" aria-hidden="true">#</a> %=</h3><p>\u4F59\u7B49 \uFF08\u53D6\u4F59\u8D4B\u503C\uFF09</p><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u7B97\u672F\u8FD0\u7B97\u7B26\u5E38\u7528\u4E8E<code>expr</code>\u6216<code>let</code>\u8868\u8FBE\u5F0F\u4E2D\u3002</p><p><strong>\u6837\u4F8B 8-2. \u4F7F\u7528\u7B97\u672F\u8FD0\u7B97\u7B26</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u4F7F\u53D8\u91CF\u81EA\u589E1\uFF0C10\u79CD\u4E0D\u540C\u7684\u65B9\u6CD5\u5B9E\u73B0

n=1; echo -n &quot;$n &quot;

let &quot;n = $n + 1&quot;   # \u53EF\u4EE5\u4F7F\u7528 let &quot;n = n + 1&quot;
echo -n &quot;$n &quot;


: $((n = $n + 1))
#  &quot;:&quot; \u662F\u5FC5\u8981\u7684\uFF0C\u4E0D\u52A0\u7684\u8BDD\uFF0Cbash\u4F1A\u5C06
#+ &quot;$((n = $n + 1))&quot;\u770B\u505A\u4E00\u6761\u547D\u4EE4\u3002
echo -n &quot;$n &quot;

(( n = n + 1 ))
#  \u66F4\u7B80\u6D01\u7684\u5199\u6CD5\u3002
#  \u611F\u8C22 David Lombard\u6307\u51FA\u3002
echo -n &quot;$n &quot;

n=$(($n + 1))
echo -n &quot;$n &quot;

: $[ n = $n + 1 ]
#  &quot;:&quot; \u662F\u5FC5\u8981\u7684\uFF0C\u4E0D\u52A0\u7684\u8BDD\uFF0Cbash\u4F1A\u5C06
#+ &quot;$[ n = $n + 1 ]&quot;\u770B\u505A\u4E00\u6761\u547D\u4EE4\u3002
#  \u5373\u4F7F&quot;n&quot;\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u662F\u53EF\u884C\u7684\u3002
echo -n &quot;$n &quot;

n=$[ $n + 1 ]
#  \u5373\u4F7F&quot;n&quot;\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u662F\u53EF\u884C\u7684\u3002
#* \u4E0D\u8981\u7528\u8FD9\u79CD\u5199\u6CD5\uFF0C\u5B83\u5DF2\u88AB\u5E9F\u5F03\u4E14\u4E0D\u5177\u6709\u517C\u5BB9\u6027\u3002
#  \u611F\u8C22 Stephane Chazelas.
echo -n &quot;$n &quot;

# \u4F7F\u7528C\u98CE\u683C\u7684\u81EA\u589E\u8FD0\u7B97\u7B26\u4E5F\u662F\u53EF\u4EE5\u7684
# \u611F\u8C22 Frank Wang \u6307\u51FA\u3002

let &quot;n++&quot;          # let &quot;++n&quot; \u53EF\u884C
echo -n &quot;$n &quot;

(( n++ ))          # (( ++n ))  \u53EF\u884C
echo -n &quot;$n &quot;

: $(( n++ ))       # : $(( ++n )) \u53EF\u884C
echo -n &quot;$n &quot;

: $[ n++ ]         # : $[ ++n ] \u53EF\u884C
echo -n &quot;$n &quot;

echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>\u5728\u65E9\u671F\u7684Bash\u7248\u672C\u4E2D\uFF0C\u6574\u578B\u53D8\u91CF\u662F\u5E26\u7B26\u53F7\u7684\u957F\u6574\u578B\u6570\uFF0832-bit\uFF09\uFF0C\u53D6\u503C\u8303\u56F4\u4ECE -2147483648 \u5230 2147483647\u3002\u5982\u679C\u7B97\u672F\u64CD\u4F5C\u8D85\u51FA\u4E86\u6574\u6570\u7684\u53D6\u503C\u8303\u56F4\uFF0C\u7ED3\u679C\u4F1A\u4E0D\u51C6\u786E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo $BASH_VERSION   # Bash 1.14\u7248\u672C

a=2147483646
echo &quot;a = $a&quot;        # a = 2147483646
let &quot;a+=1&quot;           # \u81EA\u589E &quot;a&quot;.
echo &quot;a = $a&quot;        # a = 2147483647
let &quot;a+=1&quot;           # \u518D\u6B21\u81EA\u589E&quot;a&quot;\uFF0C\u8D85\u51FA\u53D6\u503C\u8303\u56F4\u3002
echo &quot;a = $a&quot;        # a = -2147483648
                     #      \u9519\u8BEF\uFF1A\u8D85\u51FA\u8303\u56F4\uFF0C
                     #+     \u6700\u5DE6\u8FB9\u7684\u7B26\u53F7\u4F4D\u88AB\u91CD\u7F6E\uFF0C
                     #+     \u7ED3\u679C\u53D8\u8D1F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Bash\u7248\u672C &gt;= 2.05b, Bash\u652F\u6301\u4E8664-bit\u6574\u578B\u6570\u3002</p><blockquote><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution" loading="lazy"> \u6CE8\u610F\uFF0CBash\u5E76\u4E0D\u652F\u6301\u6D6E\u70B9\u8FD0\u7B97\uFF0CBash\u4F1A\u5C06\u5E26\u5C0F\u6570\u70B9\u7684\u6570\u770B\u505A\u5B57\u7B26\u4E32\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a=1.5

let &quot;b = $a + 1.3&quot;  # \u62A5\u9519
# t2.sh: let: b = 1.5 + 1.3: syntax error in expression
#                            (error token is &quot;.5 + 1.3&quot;)

echo &quot;b = $b&quot;       # b=1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,38),v=a("\u5982\u679C\u4F60\u60F3\u5728\u811A\u672C\u4E2D\u4F7F\u7528\u6D6E\u70B9\u6570\u8FD0\u7B97\uFF0C\u501F\u52A9"),_={href:"http://tldp.org/LDP/abs/html/mathc.html#BCREF",target:"_blank",rel:"noopener noreferrer"},k=a("bc"),A=a("\u6216\u5916\u90E8\u6570\u5B66\u51FD\u6570\u5E93\u5427\u3002"),B=s(`<h2 id="\u4F4D\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u8FD0\u7B97" aria-hidden="true">#</a> \u4F4D\u8FD0\u7B97</h2><p>\u4F4D\u8FD0\u7B97\u5F88\u5C11\u51FA\u73B0\u5728shell\u811A\u672C\u4E2D\uFF0C\u5728bash\u4E2D\u52A0\u5165\u4F4D\u8FD0\u7B97\u7684\u521D\u8877\u4F3C\u4E4E\u662F\u4E3A\u4E86\u64CD\u63A7\u548C\u68C0\u6D4B\u6765\u81EA<code>ports</code>\u6216<code>sockets</code>\u7684\u6570\u636E\u3002\u4F4D\u8FD0\u7B97\u5728\u7F16\u8BD1\u578B\u8BED\u8A00\u4E2D\u80FD\u53D1\u6325\u66F4\u5927\u7684\u4F5C\u7528\uFF0C\u6BD4\u5982C/C++\uFF0C\u4F4D\u8FD0\u7B97\u63D0\u4F9B\u4E86\u76F4\u63A5\u8BBF\u95EE\u7CFB\u7EDF\u786C\u4EF6\u7684\u80FD\u529B\u3002\u7136\u800C\uFF0C\u806A\u660E\u7684vladz\u5728\u4ED6\u7684base64.sh(\u6848\u4F8B A-54)\u811A\u672C\u4E2D\u4E5F\u7528\u5230\u4E86\u4F4D\u8FD0\u7B97\u3002 \u4E0B\u9762\u4ECB\u7ECD\u4F4D\u8FD0\u7B97\u7B26\u3002</p><h3 id="-12" tabindex="-1"><a class="header-anchor" href="#-12" aria-hidden="true">#</a> &lt;&lt;</h3><p>\u5DE6\u79FB\u8FD0\u7B97\u7B26(\u5DE6\u79FB1\u4F4D\u76F8\u5F53\u4E8E\u4E582)</p><h3 id="-13" tabindex="-1"><a class="header-anchor" href="#-13" aria-hidden="true">#</a> &lt;&lt;=</h3><p>\u5DE6\u79FB\u8D4B\u503C</p><p><code>let &quot;var &lt;&lt;= 2&quot;</code> \u7684\u7ED3\u679C\u662Fvar\u53D8\u91CF\u7684\u503C\u5411\u5DE6\u79FB\u4E862\u4F4D(\u4E58\u4EE54)</p><h3 id="-14" tabindex="-1"><a class="header-anchor" href="#-14" aria-hidden="true">#</a> &gt;&gt;</h3><p>\u53F3\u79FB\u8FD0\u7B97\u7B26(\u53F3\u79FB1\u4F4D\u76F8\u5F53\u4E8E\u96642)</p><h3 id="-15" tabindex="-1"><a class="header-anchor" href="#-15" aria-hidden="true">#</a> &gt;&gt;=</h3><p>\u53F3\u79FB\u8D4B\u503C</p><h3 id="-16" tabindex="-1"><a class="header-anchor" href="#-16" aria-hidden="true">#</a> &amp;</h3><p>\u6309\u4F4D\u4E0E\uFF08AND\uFF09</p><h3 id="-17" tabindex="-1"><a class="header-anchor" href="#-17" aria-hidden="true">#</a> &amp;=</h3><p>\u6309\u4F4D\u4E0E\u7B49\uFF08AND-equal\uFF09</p><h3 id="-18" tabindex="-1"><a class="header-anchor" href="#-18" aria-hidden="true">#</a> |</h3><p>\u6309\u4F4D\u6216\uFF08OR\uFF09</p><h3 id="-19" tabindex="-1"><a class="header-anchor" href="#-19" aria-hidden="true">#</a> |=</h3><p>\u6309\u4F4D\u6216\u7B49\uFF08OR-equal\uFF09</p><h3 id="-20" tabindex="-1"><a class="header-anchor" href="#-20" aria-hidden="true">#</a> ~</h3><p>\u6309\u4F4D\u53D6\u53CD</p><h3 id="-21" tabindex="-1"><a class="header-anchor" href="#-21" aria-hidden="true">#</a> ^</h3><p>\u6309\u4F4D\u5F02\u6216\uFF08XOR\uFF09</p><h3 id="-22" tabindex="-1"><a class="header-anchor" href="#-22" aria-hidden="true">#</a> ^=</h3><p>\u6309\u4F4D\u5F02\u6216\u7B49\uFF08XOR-equal\uFF09</p><h2 id="\u903B\u8F91-\u5E03\u5C14-\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91-\u5E03\u5C14-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u903B\u8F91(\u5E03\u5C14)\u8FD0\u7B97\u7B26</h2><h3 id="-23" tabindex="-1"><a class="header-anchor" href="#-23" aria-hidden="true">#</a> !</h3><p>\u975E(NOT)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if [ ! -f $FILENAME ]
then
  ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="-24" tabindex="-1"><a class="header-anchor" href="#-24" aria-hidden="true">#</a> &amp;&amp;</h3><p>\u4E0E(AND)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if [ $condition1 ] &amp;&amp; [ $condition2 ]
#  \u7B49\u540C\u4E8E:  if [ $condition1 -a $condition2 ]
#  \u8FD4\u56DEtrue\u5982\u679C condition1 \u548C condition2 \u540C\u65F6\u4E3A\u771F...

if [[ $condition1 &amp;&amp; $condition2 ]]    # \u53EF\u884C
#  \u6CE8\u610F\uFF0C&amp;&amp; \u8FD0\u7B97\u7B26\u4E0D\u80FD\u7528\u5728[ ... ]\u7ED3\u6784\u91CC\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> &amp;&amp;\u4E5F\u53EF\u4EE5\u88AB\u7528\u5728<code>list</code>\u7ED3\u6784\u4E2D\u8FDE\u63A5\u547D\u4EE4\u3002</p></blockquote><h3 id="-25" tabindex="-1"><a class="header-anchor" href="#-25" aria-hidden="true">#</a> ||</h3><p>\u6216(OR)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if [ $condition1 ] || [ $condition2 ]

#  \u7B49\u540C\u4E8E:  if [ $condition1 -a $condition2 ]
#  \u8FD4\u56DEtrue\u5982\u679C condition1 \u548C condition2 \u4EFB\u610F\u4E00\u4E2A\u4E3A\u771F...

if [[ $condition1 || $condition2 ]]    # \u53EF\u884C
#  \u6CE8\u610F\uFF0C|| \u8FD0\u7B97\u7B26\u4E0D\u80FD\u7528\u5728[ ... ]\u7ED3\u6784\u91CC\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u5C0F\u7ED3-1" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3-1" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p><strong>\u6837\u4F8B 8-3. \u5728\u6761\u4EF6\u6D4B\u8BD5\u4E2D\u4F7F\u7528 &amp;&amp; \u548C ||</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

a=24
b=47

if [ &quot;$a&quot; -eq 24 ] &amp;&amp; [ &quot;$b&quot; -eq 47 ]
then
  echo &quot;Test #1 succeeds.&quot;
else
  echo &quot;Test #1 fails.&quot;
fi

#  \u9519\u8BEF:   if [ &quot;$a&quot; -eq 24 &amp;&amp; &quot;$b&quot; -eq 47 ]
#          \u8FD9\u6837\u5199\u7684\u8BDD\uFF0Cbash\u4F1A\u5148\u6267\u884C&#39;[ &quot;$a&quot; -eq 24&#39;
#          \u7136\u540E\u5C31\u627E\u4E0D\u5230\u53F3\u62EC\u53F7&#39;]&#39;\u4E86...
#
#  \u6CE8\u610F:  if [[ $a -eq 24 &amp;&amp; $b -eq 24 ]]  \u8FD9\u6837\u5199\u662F\u53EF\u4EE5\u7684
#  \u53CC\u65B9\u62EC\u53F7\u6D4B\u8BD5\u7ED3\u6784\u6BD4\u5355\u65B9\u62EC\u53F7\u66F4\u52A0\u7075\u6D3B\u3002
#  (\u53CC\u65B9\u62EC\u53F7\u4E2D\u7684&quot;&amp;&amp;&quot;\u4E0E\u5355\u65B9\u62EC\u53F7\u4E2D\u7684&quot;&amp;&amp;&quot;\u610F\u4E49\u4E0D\u540C)
#  \u611F\u8C22 Stephane Chazelas \u6307\u51FA\u3002


if [ &quot;$a&quot; -eq 98 ] || [ &quot;$b&quot; -eq 47 ]
then
  echo &quot;Test #2 succeeds.&quot;
else
  echo &quot;Test #2 fails.&quot;
fi


#  \u4F7F\u7528 -a \u548C -o \u9009\u9879\u4E5F\u5177\u6709\u540C\u6837\u7684\u6548\u679C\u3002
#  \u611F\u8C22 Patrick Callahan \u6307\u51FA\u3002


if [ &quot;$a&quot; -eq 24 -a &quot;$b&quot; -eq 47 ]
then
  echo &quot;Test #3 succeeds.&quot;
else
  echo &quot;Test #3 fails.&quot;
fi


if [ &quot;$a&quot; -eq 98 -o &quot;$b&quot; -eq 47 ]
then
  echo &quot;Test #4 succeeds.&quot;
else
  echo &quot;Test #4 fails.&quot;
fi


a=rhino
b=crocodile
if [ &quot;$a&quot; = rhino ] &amp;&amp; [ &quot;$b&quot; = crocodile ]
then
  echo &quot;Test #5 succeeds.&quot;
else
  echo &quot;Test #5 fails.&quot;
fi

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p><code>&amp;&amp;</code>\u548C<code>||</code>\u8FD0\u7B97\u7B26\u4E5F\u53EF\u4EE5\u7528\u5728\u7B97\u672F\u8FD0\u7B97\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash$ echo $(( 1 &amp;&amp; 2 )) $((3 &amp;&amp; 0)) $((4 || 0)) $((0 || 0))
1 0 1 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5176\u4ED6\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u5176\u4ED6\u8FD0\u7B97\u7B26</h2><h3 id="-26" tabindex="-1"><a class="header-anchor" href="#-26" aria-hidden="true">#</a> ,</h3><p>\u9017\u53F7\u8FD0\u7B97\u7B26 \u9017\u53F7\u8FD0\u7B97\u7B26\u7528\u4E8E\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u7B97\u672F\u64CD\u4F5C\uFF0C\u6240\u6709\u7684\u64CD\u4F5C\u4F1A\u88AB\u4F9D\u6B21\u6C42\u503C\uFF08\u53EF\u80FD\u4F1A\u6709\u526F\u4F5C\u7528\uFF09\u3002<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let &quot;t1 = ((5 + 3, 7 - 1, 15 - 4))&quot;
echo &quot;t1 = $t1&quot;           ^^^^^^  # t1 = 11
# \u8FD9\u91CC\u7684t1 \u88AB\u8D4B\u503C\u4E8611\uFF0C\u4E3A\u4EC0\u4E48\uFF1F

let &quot;t2 = ((a = 9, 15 / 3))&quot;      # \u5BF9&quot;a&quot;\u8D4B\u503C\u5E76\u5BF9&quot;t2&quot;\u6C42\u503C\u3002
echo &quot;t2 = $t2    a = $a&quot;         # t2 = 5    a = 9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u9017\u53F7\u8FD0\u7B97\u7B26\u5E38\u88AB\u7528\u5728<code>for</code>\u5FAA\u73AF\u4E2D\u3002\u53C2\u770B\u6848\u4F8B 11-13\u3002</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>\u53D6\u51B3\u4E0E\u4E0D\u540C\u7684\u4E0A\u4E0B\u6587\uFF0C+= \u4E5F\u53EF\u80FD\u4F5C\u4E3A\u5B57\u7B26\u4E32\u8FDE\u63A5\u7B26\u3002\u5B83\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\u3002 <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="footnote2" class="footnote-item"><p>\u526F\u4F5C\u7528\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u9884\u6599\u4E4B\u5916\u7684\u7ED3\u679C\u3002 <a href="#footnote-ref2" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,48);function T(D,R){const e=i("ExternalLinkIcon");return b(),p(t,null,[u,n("blockquote",null,[n("p",null,[o,d,m,h,q,n("a",f,[x,r(e)]),g])]),$,n("p",null,[v,n("a",_,[k,r(e)]),A]),B],64)}var L=l(c,[["render",T],["__file","08_1_operators.html.vue"]]);export{L as default};
