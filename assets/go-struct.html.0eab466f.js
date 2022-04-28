import{_ as s,r,c as l,a as n,b as i,F as p,d as e,e as t,o as b}from"./app.ab95b9c4.js";const c={},m=n("h1",{id:"go-struct\u8D85\u8BE6\u7EC6\u8BB2\u89E3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#go-struct\u8D85\u8BE6\u7EC6\u8BB2\u89E3","aria-hidden":"true"},"#"),e(" Go Struct\u8D85\u8BE6\u7EC6\u8BB2\u89E3")],-1),u=e("\u8F6C\u8F7D\u81EA\uFF1A"),d={href:"https://juejin.cn/post/6844903814168838151",target:"_blank",rel:"noopener noreferrer"},o=e("Go Struct\u8D85\u8BE6\u7EC6\u8BB2\u89E3 | \u7A0B\u5E8F\u5458\u8BFB\u4E66"),h=t(`<p>Go\u8BED\u8A00\u4E2D\u63D0\u4F9B\u4E86\u5BF9struct\u7684\u652F\u6301,<code>struct</code>,\u4E2D\u6587\u7FFB\u8BD1\u79F0\u4E3A<code>\u7ED3\u6784\u4F53</code>\uFF0C\u4E0E\u6570\u7EC4\u4E00\u6837\uFF0C\u5C5E\u4E8E\u590D\u5408\u7C7B\u578B\uFF0C\u5E76\u975E\u5F15\u7528\u7C7B\u578B\u3002</p><p>Go\u8BED\u8A00\u7684struct\uFF0C\u4E0EC\u8BED\u8A00\u4E2D\u7684struct\u6216\u5176\u4ED6\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684\u7C7B(class)\u7C7B\u4F3C\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u5B57\u6BB5(\u5C5E\u6027)\u548C\u65B9\u6CD5\uFF0C\u4F46\u4E5F\u6709\u5F88\u4E0D\u540C\u7684\u5730\u65B9\uFF0C\u9700\u8981\u6DF1\u5165\u5B66\u4E60\uFF0C\u624D\u80FD\u533A\u5206\u4ED6\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u3002</p><blockquote><p>\u6CE8\u610F\u590D\u5408\u7C7B\u578B\u4E0E\u5F15\u7528\u7C7B\u578B\u4E4B\u95F4\u7684\u533A\u522B\uFF0C\u8FD9\u5E94\u8BE5\u4E5F\u662F\u503C\u4F20\u9012\u548C\u5F15\u7528\u4F20\u9012\u7684\u533A\u522B\u5427\u3002</p></blockquote><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u4F7F\u7528struct\u5173\u952E\u5B57\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53,\u7ED3\u6784\u4F53\u4E2D\u7684\u6210\u5458\uFF0C\u79F0\u4E3A\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u6216\u5C5E\u6027\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Member struct {
    id          int
    name, email string
    gender, age int
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5305\u542B5\u4E2A\u5B57\u6BB5\u7684\u7ED3\u6784\u4F53\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u76F8\u540C\u7C7B\u578B<code>name</code>\u548C<code>email</code>\u3001<code>gender</code>\u548C<code>age</code>\u5728\u540C\u4E00\u884C\u4E2D\u5B9A\u4E49\uFF0C\u4F46\u6BD4\u8F83\u597D\u7684\u7F16\u7A0B\u4E60\u60EF\u662F\u6BCF\u4E00\u884C\u53EA\u5B9A\u4E49\u4E00\u4E2A\u5B57\u6BB5,\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Member struct {
    id     int
    name   string
    email  string
    gender int
    age    int
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F53\u7136\uFF0C\u7ED3\u6784\u4F53\u4E5F\u53EF\u4EE5\u4E0D\u5305\u542B\u4EFB\u4F55\u5B57\u6BB5\uFF0C\u79F0\u4E3A<code>\u7A7A\u7ED3\u6784\u4F53</code>\uFF0Cstruct{}\u8868\u793A\u4E00\u4E2A\u7A7A\u7684\u7ED3\u6784\u4F53\uFF0C\u6CE8\u610F\uFF0C\u76F4\u63A5\u5B9A\u4E49\u4E00\u4E2A\u7A7A\u7684\u7ED3\u6784\u4F53\u5E76\u6CA1\u6709\u610F\u4E49\uFF0C\u4F46\u5728\u5E76\u53D1\u7F16\u7A0B\u4E2D\uFF0Cchannel\u4E4B\u95F4\u7684\u901A\u8BAF\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2Astruct{}\u4F5C\u4E3A\u4FE1\u53F7\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ch := make(chan struct{})
ch &lt;- struct{}{}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86Member\u7ED3\u6784\u4F53\u7C7B\u578B\uFF0C\u63A5\u4E0B\u5C31\u53EF\u4EE5\u8FD9\u4E2A\u81EA\u5B9A\u4E49\u7684\u7C7B\u578B\u521B\u5EFA\u53D8\u91CF\u4E86\u3002</p><blockquote><p>\u76F4\u63A5\u5B9A\u4E49\u53D8\u91CF\uFF0C\u8FD9\u4E2A\u4F7F\u7528\u65B9\u5F0F\u5E76\u6CA1\u6709\u4E3A\u5B57\u6BB5\u8D4B\u521D\u59CB\u503C\uFF0C\u56E0\u6B64\u6240\u6709\u5B57\u6BB5\u90FD\u4F1A\u88AB\u81EA\u52A8\u8D4B\u4E88\u81EA\u5DF2\u7C7B\u578B\u7684\u96F6\u503C\uFF0C\u6BD4\u5982<code>name</code>\u7684\u503C\u4E3A\u7A7A\u5B57\u7B26\u4E32&quot;&quot;\uFF0Cage\u7684\u503C\u4E3A0\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var m1 Member//\u6240\u6709\u5B57\u6BB5\u5747\u4E3A\u7A7A\u503C

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u4F7F\u7528\u5B57\u9762\u91CF\u521B\u5EFA\u53D8\u91CF\uFF0C\u8FD9\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5728\u5927\u62EC\u53F7\u4E2D\u4E3A\u7ED3\u6784\u4F53\u7684\u6210\u5458\u8D4B\u521D\u59CB\u503C\uFF0C\u6709\u4E24\u79CD\u8D4B\u521D\u59CB\u503C\u7684\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F\u6309\u5B57\u6BB5\u5728\u7ED3\u6784\u4F53\u4E2D\u7684\u987A\u5E8F\u8D4B\u503C\uFF0C\u4E0B\u9762\u4EE3\u7801\u4E2D<code>m2</code>\u5C31\u662F\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u8981\u6C42\u6240\u6709\u7684\u5B57\u6BB5\u90FD\u5FC5\u987B\u8D4B\u503C\uFF0C\u56E0\u6B64\u5982\u679C\u5B57\u6BB5\u592A\u591A\uFF0C\u6BCF\u4E2A\u5B57\u6BB5\u90FD\u8981\u8D4B\u503C\uFF0C\u4F1A\u5F88\u7E41\u7410\uFF0C\u53E6\u4E00\u79CD\u5219\u4F7F\u7528\u5B57\u6BB5\u540D\u4E3A\u6307\u5B9A\u5B57\u6BB5\u8D4B\u503C\uFF0C\u5982\u4E0B\u9762\u4EE3\u7801\u4E2D\u53D8\u91CF<code>m3</code>\u7684\u521B\u5EFA\uFF0C\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u6CA1\u6709\u6307\u5B9A\u7684\u5B57\u6BB5\uFF0C\u5219\u4F7F\u7528\u8BE5\u5B57\u6BB5\u7C7B\u578B\u7684\u96F6\u503C\u4F5C\u4E3A\u521D\u59CB\u5316\u503C\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var m2 = Member{1,&quot;\u5C0F\u660E&quot;,&quot;xiaoming@163.com&quot;,1,18} // \u7B80\u77ED\u53D8\u91CF\u58F0\u660E\u65B9\u5F0F\uFF1Am2 := Member{1,&quot;\u5C0F\u660E&quot;,&quot;xiaoming@163.com&quot;,1,18}
var m3 = Member{id:2,&quot;name&quot;:&quot;\u5C0F\u7EA2&quot;}// \u7B80\u77ED\u53D8\u91CF\u58F0\u660E\u65B9\u5F0F\uFF1Am3 := Member{id:2,&quot;name&quot;:&quot;\u5C0F\u7EA2&quot;}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u8BBF\u95EE\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u5B57\u6BB5" aria-hidden="true">#</a> \u8BBF\u95EE\u5B57\u6BB5</h3><p>\u901A\u8FC7\u53D8\u91CF\u540D\uFF0C\u4F7F\u7528\u9017\u53F7<code>(.)</code>\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u7ED3\u6784\u4F53\u7C7B\u578B\u4E2D\u7684\u5B57\u6BB5\uFF0C\u6216\u4E3A\u5B57\u6BB5\u8D4B\u503C\uFF0C\u4E5F\u53EF\u4EE5\u5BF9\u5B57\u6BB5\u8FDB\u884C\u53D6\u5740(&amp;)\u64CD\u4F5C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fmt.Println(m2.name)//\u8F93\u51FA\uFF1A\u5C0F\u660E
m3.name = &quot;\u5C0F\u82B1&quot;
fmt.Println(m3.name)//\u8F93\u51FA\uFF1A\u5C0F\u82B1

age := &amp;m3.age
*age = 20
fmt.Println(m3.age)//20

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u6307\u9488\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u6307\u9488\u7ED3\u6784\u4F53</h3><p>\u7ED3\u6784\u4F53\u4E0E\u6570\u7EC4\u4E00\u6837\uFF0C\u90FD\u662F\u503C\u4F20\u9012\uFF0C\u6BD4\u5982\u5F53\u628A\u6570\u7EC4\u6216\u7ED3\u6784\u4F53\u4F5C\u4E3A\u5B9E\u53C2\u4F20\u7ED9\u51FD\u6570\u7684\u5F62\u53C2\u65F6\uFF0C\u4F1A\u590D\u5236\u4E00\u4E2A\u526F\u672C\uFF0C\u6240\u4EE5\u4E3A\u4E86\u63D0\u9AD8\u6027\u80FD\uFF0C\u4E00\u822C\u4E0D\u4F1A\u628A\u6570\u7EC4\u76F4\u63A5\u4F20\u9012\u7ED9\u51FD\u6570\uFF0C\u800C\u662F\u4F7F\u7528\u5207\u7247(\u5F15\u7528\u7C7B\u578B)\u4EE3\u66FF\uFF0C\u800C\u628A\u7ED3\u6784\u4F53\u4F20\u7ED9\u51FD\u6570\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>\u6307\u9488\u7ED3\u6784\u4F53</code>\u3002</p><p>\u6307\u9488\u7ED3\u6784\u4F53\uFF0C\u5373\u4E00\u4E2A\u6307\u5411\u7ED3\u6784\u4F53\u7684\u6307\u9488,\u58F0\u660E\u7ED3\u6784\u4F53\u53D8\u91CF\u65F6\uFF0C\u5728\u7ED3\u6784\u4F53\u7C7B\u578B\u524D\u52A0*\u53F7\uFF0C\u4FBF\u58F0\u660E\u4E00\u4E2A\u6307\u5411\u7ED3\u6784\u4F53\u7684\u6307\u9488\uFF0C\u5982\uFF1A</p><blockquote><p>\u6CE8\u610F\uFF0C\u6307\u9488\u7C7B\u578B\u4E3A\u5F15\u7528\u7C7B\u578B\uFF0C\u58F0\u660E\u7ED3\u6784\u4F53\u6307\u9488\u65F6\uFF0C\u5982\u679C\u672A\u521D\u59CB\u5316\uFF0C\u5219\u521D\u59CB\u503C\u4E3Anil,\u53EA\u6709\u521D\u59CB\u5316\u540E\uFF0C\u624D\u80FD\u8BBF\u95EE\u5B57\u6BB5\u6216\u4E3A\u5B57\u6BB5\u8D4B\u503C\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var m1 *Member
m1.name = &quot;\u5C0F\u660E&quot;//\u9519\u8BEF\u7528\u6CD5\uFF0C\u672A\u521D\u59CB\u5316,m1\u4E3Anil

m1 = &amp;Member{}
m1.name = &quot;\u5C0F\u660E&quot;//\u521D\u59CB\u5316\u540E\uFF0C\u7ED3\u6784\u4F53\u6307\u9488\u6307\u5411\u67D0\u4E2A\u7ED3\u6784\u4F53\u5730\u5740\uFF0C\u624D\u80FD\u8BBF\u95EE\u5B57\u6BB5\uFF0C\u4E3A\u5B57\u6BB5\u8D4B\u503C\u3002 


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53E6\u5916\uFF0C\u4F7F\u7528Go\u5185\u7F6Enew()\u51FD\u6570\uFF0C\u53EF\u4EE5\u5206\u914D\u5185\u5B58\u6765\u521D\u59CB\u5316\u7ED3\u6784\u4F11\uFF0C\u5E76\u8FD4\u56DE\u5206\u914D\u7684\u5185\u5B58\u6307\u9488\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u521D\u59CB\u5316\u4E86\uFF0C\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5B57\u6BB5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var m2 = new(Member)
m2.name = &quot;\u5C0F\u7EA2&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u5982\u679C\u5C06\u7ED3\u6784\u4F53\u8F6C\u7ED9\u51FD\u6570\uFF0C\u53EA\u662F\u590D\u5236\u7ED3\u6784\u4F53\u7684\u526F\u672C\uFF0C\u5982\u679C\u5728\u51FD\u6570\u5185\u4FEE\u6539\u7ED3\u6784\u4F53\u5B57\u6BB5\u503C\uFF0C\u5916\u9762\u7684\u7ED3\u6784\u4F53\u5E76\u4E0D\u4F1A\u53D7\u5F71\u54CD\uFF0C\u800C\u5982\u679C\u5C06\u7ED3\u6784\u4F53\u6307\u9488\u4F20\u7ED9\u51FD\u6570\uFF0C\u5219\u5728\u51FD\u6570\u4E2D\u4F7F\u7528\u6307\u9488\u5BF9\u7ED3\u6784\u4F53\u6240\u505A\u7684\u4FEE\u6539\uFF0C\u90FD\u4F1A\u5F71\u54CD\u5230\u6307\u9488\u6307\u5411\u7684\u7ED3\u6784\u4F53\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func main() {
    m1 := Member{}
    m2 := new(Member)
    Change(m1,m2)
    fmt.Println(m1,m2)
}

func Change(m1 Member,m2 *Member){
    m1.Name = &quot;\u5C0F\u660E&quot;
    m2.Name = &quot;\u5C0F\u7EA2&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u89C1\u6027" aria-hidden="true">#</a> \u53EF\u89C1\u6027</h2><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u7ED3\u6784\u4F53\u5B57\u6BB5\u540D\u9996\u5B57\u6BCD\u662F\u5C0F\u5199\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u8FD9\u4E9B\u5B57\u6BB5\u5728<code>\u5305\u5916\u4E0D\u53EF\u89C1</code>,\u56E0\u800C\u65E0\u6CD5\u5728\u5176\u4ED6\u5305\u4E2D\u88AB\u8BBF\u95EE\uFF0C\u53EA\u5141\u8BB8\u5305\u5185\u8BBF\u95EE\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5C06Member\u58F0\u660E\u5728member\u5305\u4E2D\uFF0C\u800C\u540E\u5728main\u5305\u4E2D\u521B\u5EFA\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4F46\u7531\u4E8E\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u5305\u5916\u4E0D\u53EF\u89C1\uFF0C\u56E0\u6B64\u65E0\u6CD5\u4E3A\u5B57\u6BB5\u8D4B\u521D\u59CB\u503C\uFF0C\u65E0\u6CD5\u6309\u5B57\u6BB5\u8FD8\u662F\u6309\u7D22\u5F15\u8D4B\u503C\uFF0C\u90FD\u4F1A\u5F15\u53D1panic\u9519\u8BEF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package member
type Member struct {
    id     int
    name   string
    email  string
    gender int
    age    int
}

package main

fun main(){
    var m = member.Member{1,&quot;\u5C0F\u660E&quot;,&quot;xiaoming@163.com&quot;,1,18}//\u4F1A\u5F15\u53D1panic\u9519\u8BEF
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u56E0\u6B64\uFF0C\u5982\u679C\u60F3\u5728\u4E00\u4E2A\u5305\u4E2D\u8BBF\u95EE\u53E6\u4E00\u4E2A\u5305\u4E2D\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\uFF0C\u5219\u5FC5\u987B\u662F\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u7684\u53D8\u91CF\uFF0C\u5373\u53EF\u5BFC\u51FA\u7684\u53D8\u91CF\uFF0C\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Member struct {
    Id     int
    Name   string
    Email  string
    Gender int
    Age    int
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> Tags</h2><p>\u5728\u5B9A\u4E49\u7ED3\u6784\u4F53\u5B57\u6BB5\u65F6\uFF0C\u9664\u5B57\u6BB5\u540D\u79F0\u548C\u6570\u636E\u7C7B\u578B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u53CD\u5F15\u53F7\u4E3A\u7ED3\u6784\u4F53\u5B57\u6BB5\u58F0\u660E\u5143\u4FE1\u606F\uFF0C\u8FD9\u79CD\u5143\u4FE1\u606F\u79F0\u4E3ATag\uFF0C\u7528\u4E8E\u7F16\u8BD1\u9636\u6BB5\u5173\u8054\u5230\u5B57\u6BB5\u5F53\u4E2D,\u5982\u6211\u4EEC\u5C06\u4E0A\u9762\u4F8B\u5B50\u4E2D\u7684\u7ED3\u6784\u4F53\u4FEE\u6539\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Member struct {
    Id     int    \`json:&quot;id,-&quot;\`
    Name   string \`json:&quot;name&quot;\`
    Email  string \`json:&quot;email&quot;\`
    Gender int    \`json:&quot;gender,&quot;\`
    Age    int    \`json:&quot;age&quot;\`
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u6F14\u793A\u7684\u662F\u4F7F\u7528encoding/json\u5305\u7F16\u7801\u6216\u89E3\u7801\u7ED3\u6784\u4F53\u65F6\u4F7F\u7528\u7684Tag\u4FE1\u606F\u3002</p><p>Tag\u7531\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\u7684\u4E00\u7CFB\u5217\u7528\u7A7A\u683C\u5206\u9694\u7684key:&quot;value&quot;\u952E\u503C\u5BF9\u7EC4\u6210\uFF0C\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Id int \`json:&quot;id&quot; gorm:&quot;AUTO_INCREMENT&quot;\`

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h2><p>\u4E0B\u9762\u603B\u7ED3\u51E0\u70B9\u7ED3\u6784\u4F53\u7684\u76F8\u5173\u7279\u6027\uFF1A</p><h3 id="\u503C\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u503C\u4F20\u9012" aria-hidden="true">#</a> \u503C\u4F20\u9012</h3><p>\u7ED3\u6784\u4F53\u4E0E\u6570\u7EC4\u4E00\u6837\uFF0C\u662F\u590D\u5408\u7C7B\u578B\uFF0C\u65E0\u8BBA\u662F\u4F5C\u4E3A\u5B9E\u53C2\u4F20\u9012\u7ED9\u51FD\u6570\u65F6\uFF0C\u8FD8\u662F\u8D4B\u503C\u7ED9\u5176\u4ED6\u53D8\u91CF\uFF0C\u90FD\u662F\u503C\u4F20\u9012\uFF0C\u5373\u590D\u4E00\u4E2A\u526F\u672C\u3002</p><h3 id="\u6CA1\u6709\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u6CA1\u6709\u7EE7\u627F" aria-hidden="true">#</a> \u6CA1\u6709\u7EE7\u627F</h3><p>Go\u8BED\u8A00\u662F\u652F\u6301\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\uFF0C\u4F46\u5374\u6CA1\u6709\u7EE7\u627F\u7684\u6982\u5FF5\uFF0C\u5728\u7ED3\u6784\u4F53\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC4\u5408\u5176\u4ED6\u7ED3\u6784\u4F53\u6765\u6784\u5EFA\u66F4\u590D\u6742\u7684\u7ED3\u6784\u4F53\u3002</p><h3 id="\u7ED3\u6784\u4F53\u4E0D\u80FD\u5305\u542B\u81EA\u5DF1" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u4E0D\u80FD\u5305\u542B\u81EA\u5DF1" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u4E0D\u80FD\u5305\u542B\u81EA\u5DF1</h3><p>\u4E00\u4E2A\u7ED3\u6784\u4F53\uFF0C\u5E76\u6CA1\u6709\u5305\u542B\u81EA\u8EAB\uFF0C\u6BD4\u5982Member\u4E2D\u7684\u5B57\u6BB5\u4E0D\u80FD\u662FMember\u7C7B\u578B\uFF0C\u4F46\u5374\u53EF\u80FD\u662F*Member\u3002</p><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><p>\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u5C06\u51FD\u6570\u7ED1\u5B9A\u5230\u5177\u4F53\u7684\u7C7B\u578B\u4E2D\uFF0C\u5219\u79F0\u8BE5\u51FD\u6570\u662F\u8BE5\u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u5176\u5B9A\u4E49\u7684\u65B9\u5F0F\u662F\u5728func\u4E0E\u51FD\u6570\u540D\u79F0\u4E4B\u95F4\u52A0\u4E0A\u5177\u4F53\u7C7B\u578B\u53D8\u91CF\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u53D8\u91CF\u79F0\u4E3A<code>\u65B9\u6CD5\u63A5\u6536\u5668</code>\uFF0C\u5982\uFF1A</p><blockquote><p>\u6CE8\u610F\uFF0C\u5E76\u4E0D\u662F\u53EA\u6709\u7ED3\u6784\u4F53\u624D\u80FD\u7ED1\u5B9A\u65B9\u6CD5\uFF0C\u4EFB\u4F55\u7C7B\u578B\u90FD\u53EF\u4EE5\u7ED1\u5B9A\u65B9\u6CD5\uFF0C\u53EA\u662F\u6211\u4EEC\u8FD9\u91CC\u4ECB\u7ECD\u5C06\u65B9\u6CD5\u7ED1\u5B9A\u5230\u7ED3\u6784\u4F53\u4E2D\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func setName(m Member,name string){//\u666E\u901A\u51FD\u6570
    m.Name = name
}

func (m Member)setName(name string){//\u7ED1\u5B9A\u5230Member\u7ED3\u6784\u4F53\u7684\u65B9\u6CD5
    m.Name = name
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0C\u901A\u8FC7<code>\u65B9\u6CD5\u63A5\u6536\u5668</code>\u53EF\u4EE5\u8BBF\u95EE\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\uFF0C\u8FD9\u7C7B\u4F3C\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684this\u5173\u952E\u8BCD\uFF0C\u4F46\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u53EA\u662F\u4E00\u4E2A\u53D8\u91CF\u540D\u800C\u5DF2\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4EFB\u610F\u547D\u540D<code>\u65B9\u6CD5\u63A5\u6536\u5668</code>\u3002</p><p>\u8C03\u7528\u7ED3\u6784\u4F53\u7684\u65B9\u6CD5\uFF0C\u4E0E\u8C03\u7528\u5B57\u6BB5\u4E00\u6837\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>m := Member{}
m.setName(&quot;\u5C0F\u660E&quot;)
fmt.Println(m.Name)//\u8F93\u51FA\u4E3A\u7A7A

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u5F88\u5947\u602A\uFF0C\u4E0D\u662F\u8C03\u7528setName()\u65B9\u6CD5\u8BBE\u7F6E\u4E86\u5B57\u6BB5Name\u7684\u503C\u4E86\u5417\uFF1F\u4E3A\u4EC0\u4E48\u8FD8\u662F\u8F93\u51FA\u4E3A\u7A7A\u5462\uFF1F</p><p>\u8FD9\u662F\u56E0\u4E3A\uFF0C\u7ED3\u6784\u4F53\u662F\u503C\u4F20\u9012\uFF0C\u5F53\u6211\u4EEC\u8C03\u7528setName\u65F6\uFF0C\u65B9\u6CD5\u63A5\u6536\u5668\u63A5\u6536\u5230\u662F\u53EA\u662F\u7ED3\u6784\u4F53\u53D8\u91CF\u7684\u4E00\u4E2A\u526F\u672C\uFF0C\u901A\u8FC7\u526F\u672C\u5BF9\u503C\u8FDB\u884C\u4FEE\u590D\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u8C03\u7528\u8005\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u65B9\u6CD5\u63A5\u6536\u5668\u5B9A\u4E49\u4E3A\u6307\u9488\u53D8\u91CF\uFF0C\u5C31\u53EF\u8FBE\u5230\u4FEE\u6539\u7ED3\u6784\u4F53\u7684\u76EE\u7684\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (m *Member)setName(name string){/\u5C06Member\u6539\u4E3A*Member
    m.Name = name
}

m := Member{}
m.setName(&quot;\u5C0F\u660E&quot;)
fmt.Println(m.Name)//\u5C0F\u660E

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u65B9\u6CD5\u548C\u5B57\u6BB5\u4E00\u6837\uFF0C\u5982\u679C\u9996\u5B57\u6BCD\u4E3A\u5C0F\u5199\uFF0C\u5219\u53EA\u5141\u8BB8\u5728\u5305\u5185\u53EF\u89C1\uFF0C\u5728\u5176\u4ED6\u5305\u4E2D\u662F\u65E0\u6CD5\u8BBF\u95EE\u7684\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u8981\u5728\u5176\u4ED6\u5305\u4E2D\u8BBF\u95EE<code>setName</code>,\u5219\u5E94\u8BE5\u5C06\u65B9\u6CD5\u540D\u6539\u4E3A<code>SetName</code>\u3002</p><h2 id="\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408" aria-hidden="true">#</a> \u7EC4\u5408</h2><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u7ED3\u6784\u4F53\u4E2D\u5E76\u6CA1\u6709\u7EE7\u627F\u7684\u6982\u5FF5\uFF0C\u5176\u5B9E\uFF0C\u5728Go\u8BED\u8A00\u4E2D\u4E5F\u6CA1\u6709\u7EE7\u627F\u7684\u6982\u5FF5\uFF0CGo\u8BED\u8A00\u7684\u7F16\u7A0B\u54F2\u5B66\u91CC\uFF0C\u63A8\u8350\u4F7F\u7528<code>\u7EC4\u5408</code>\u7684\u65B9\u5F0F\u6765\u8FBE\u5230\u4EE3\u7801\u590D\u7528\u6548\u679C\u3002</p><h3 id="\u4EC0\u4E48\u662F\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u7EC4\u5408" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u7EC4\u5408</h3><p>\u7EC4\u5408\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53\u4E2D\uFF0C\u5176\u5B57\u6BB5\u53EF\u4EE5\u662F\u5176\u4ED6\u7684\u7ED3\u6784\u4F53\uFF0C\u8FD9\u6837\uFF0C\u4E0D\u540C\u7684\u7ED3\u6784\u4F53\u5C31\u53EF\u4EE5\u5171\u7528\u76F8\u540C\u7684\u5B57\u6BB5\u3002</p><blockquote><p>\u6CE8\u610F\uFF0C\u5728\u8BB0\u5F97\u6211\u4EEC\u524D\u9762\u63D0\u8FC7\u7684\uFF0C\u7ED3\u6784\u4F53\u4E0D\u80FD\u5305\u542B\u81EA\u8EAB\uFF0C\u4F46\u53EF\u80FD\u5305\u542B\u6307\u5411\u81EA\u8EAB\u7684\u7ED3\u6784\u4F53\u6307\u9488\u3002</p></blockquote><p>\u4F8B\u5982\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3AAnimal\u8868\u793A\u52A8\u7269\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53\u8868\u793A\u732B\uFF0C\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Animal struct {
    Name   string  //\u540D\u79F0
    Color  string  //\u989C\u8272
    Height float32 //\u8EAB\u9AD8
    Weight float32 //\u4F53\u91CD
    Age    int     //\u5E74\u9F84
}
//\u5954\u8DD1
func (a Animal)Run() {
    fmt.Println(a.Name + &quot;is running&quot;)
}
//\u5403\u4E1C\u897F
func (a Animal)Eat() {
    fmt.Println(a.Name + &quot;is eating&quot;)
}

type Cat struct {
    a Animal
}

func main() {
    var c = Cat{
	    a: Animal{
            Name:   &quot;\u732B\u732B&quot;,
            Color:  &quot;\u6A59\u8272&quot;,
            Weight: 10,
            Height: 30,
            Age:    5,
        },
    }
    fmt.Println(c.a.Name)
    c.a.Run()
}


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u5B9A\u4E49Cat\u7ED3\u6784\u4F53\u65F6\uFF0C\u53EF\u4EE5\u628AAnimal\u7ED3\u6784\u4F53\u4F5C\u4E3ACat\u7684\u5B57\u6BB5\u3002</p><h3 id="\u533F\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u5B57\u6BB5" aria-hidden="true">#</a> \u533F\u540D\u5B57\u6BB5</h3><p>\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u770B\u5230\uFF0C\u628AAnimal\u7ED3\u6784\u4F53\u4F5C\u4E3ACat\u7684\u5B57\u6BB5\u65F6\uFF0C\u5176\u53D8\u91CF\u540D\u4E3Aa\uFF0C\u6240\u4EE5\u6211\u4EEC\u8BBF\u95EEAnimal\u7684\u65B9\u6CD5\u65F6\uFF0C\u8BED\u6CD5\u4E3A<code>c.a.Run()</code>,\u8FD9\u79CD\u901A\u8FC7\u53F6\u5B50\u5C5E\u6027\u8BBF\u95EE\u67D0\u4E2A\u5B57\u6BB5\u7C7B\u578B\u6240\u5E26\u7684\u65B9\u6CD5\u548C\u5B57\u6BB5\u7528\u6CD5\u975E\u5E38\u7E41\u7410\u3002</p><p>Go\u8BED\u8A00\u652F\u6301\u76F4\u63A5\u5C06\u7C7B\u578B\u4F5C\u4E3A\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\uFF0C\u800C\u4E0D\u9700\u8981\u53D6\u53D8\u91CF\u540D\uFF0C\u8FD9\u79CD\u5B57\u6BB5\u53EB<code>\u533F\u540D\u5B57\u6BB5</code>\uFF0C\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Lion struct {
	Animal //\u533F\u540D\u5B57\u6BB5
}

func main(){
    var lion = Lion{
        Animal{
            Name:  &quot;\u5C0F\u72EE\u5B50&quot;,
            Color: &quot;\u7070\u8272&quot;,
        },
    }
    lion.Run()
    fmt.Println(lion.Name)
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u901A\u8FC7\u4E0A\u9762\u4F8B\u5B50\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u901A\u8FC7\u533F\u540D\u5B57\u6BB5\u7EC4\u5408\u5176\u4ED6\u7C7B\u578B\uFF0C\u800C\u540E\u8BBF\u95EE\u533F\u540D\u5B57\u6BB5\u7C7B\u578B\u6240\u5E26\u7684\u65B9\u6CD5\u548C\u5B57\u6BB5\u65F6\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528\u53F6\u5B50\u5C5E\u6027\uFF0C\u975E\u5E38\u65B9\u4FBF\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u5728Go\u8BED\u8A00\u7F16\u7A0B\u4E2D\uFF0C\u7ED3\u6784\u4F53\u5927\u6982\u7B97\u662F\u4F7F\u7528\u5F97\u6700\u591A\u7684\u6570\u636E\u7C7B\u578B\u4E86\uFF0C\u901A\u8FC7\u5B9A\u4E49\u4E0D\u540C\u5B57\u6BB5\u548C\u65B9\u6CD5\u7684\u7ED3\u6784\u4F53\uFF0C\u62BD\u8C61\u7EC4\u5408\u4E0D\u540C\u7684\u7ED3\u6784\u4F53\uFF0C\u8FD9\u5927\u6982\u4FBF\u662FGo\u8BED\u8A00\u4E2D\u5BF9\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E86\u3002</p>`,74);function g(x,v){const a=r("ExternalLinkIcon");return b(),l(p,null,[m,n("blockquote",null,[n("p",null,[u,n("a",d,[o,i(a)])])]),h],64)}var f=s(c,[["render",g],["__file","go-struct.html.vue"]]);export{f as default};
