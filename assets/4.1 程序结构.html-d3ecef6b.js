import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a as d}from"./app-2878b4b3.js";const a={},t=d(`<h2 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h2><p>命名规则：</p><p>1）可以使用字母 数字 下划线</p><p>2）不允许使用数字开头</p><p>3）不允许使用系统关键字</p><p>4）区分大小写</p><p>5）见名知意</p><p>函数命名规则：</p><p>1）包本身的名字一般总是小写字母开头</p><p>2）可以被外部访问的包是大写字母开头</p><p>作用域命名规则： 1）局部变量一般用<code>i</code>这类的短名字</p><p>2）全局变量的名字一般较长，更有意义</p><p>命名习惯：</p><p>1）推荐使用驼峰式命名。</p><h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h2><p>Go语言主要有四种类型的声明语句：</p><p>1） var 变量</p><p>2） const 常量</p><p>3） type 类型</p><p>4） func 函数实体</p><p><strong>一个函数的声明由一个函数名字、参数列表（由函数的调用者提供参数变量的具体值）、一个可选的返回值列表和包含函数定义的函数体组成。</strong></p><p>如果函数没有返回值，那么返回值列表是省略的。</p><p>执行函数从函数的第一个语句开始，依次顺序执行直到遇到renturn返回语句，如果没有返回语句则是执行到函数末尾，然后返回到函数调用者。</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>变量声明的一般语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var 变量名字 类型 = 表达式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中“类型”或“= 表达式”两个部分可以省略其中的一个。</p><p>如果省略的是类型信息，那么将根据初始化表达式来推导变量的类型信息。</p><p>如果初始化表达式被省略，那么将用零值初始化该变量。</p><table><thead><tr><th>数据类型</th><th>零值</th></tr></thead><tbody><tr><td>数值</td><td>0</td></tr><tr><td>布尔</td><td>false</td></tr><tr><td>字符串</td><td>空字符串</td></tr><tr><td>接口</td><td>nil</td></tr><tr><td>引用</td><td>nil</td></tr><tr><td>slice/map/chan</td><td>nil</td></tr><tr><td>数组/结构</td><td>每个元素或字段的零值</td></tr></tbody></table><h3 id="简短变量声明-自动推导类型" tabindex="-1"><a class="header-anchor" href="#简短变量声明-自动推导类型" aria-hidden="true">#</a> 简短变量声明（自动推导类型）</h3><p>简短变量声明被广泛用于大部分的局部变量的声明和初始化。</p><p>var形式的声明语句往往是用于需要显式指定变量类型地方，或者因为变量稍后会被重新赋值而初始值无关紧要的地方。</p><p>声明方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>名字 := 表达式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h3><p>一个指针的值是另一个变量的地址。</p><p>一个指针对应变量在内存中的存储位置。</p><p>并不是每一个值都会有一个内存地址，但是对于每一个变量必然有对应的内存地址。</p><p>通过指针，我们可以直接读或更新对应变量的值，而不需要知道该变量的名字（如果变量有名字的话）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x := 1
p := &amp;x // p, of type *int, points to x
fmt.Println(*p) // &quot;1&quot;
*p = 2 // equivalent to x = 2
fmt.Println(x) // &quot;2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量有时候被称为可寻址的值。即使变量由表达式临时生成，那么表达式也必须能接受&amp;取地址操作。</p><p>任何类型的指针的零值都是nil。</p><h3 id="new函数" tabindex="-1"><a class="header-anchor" href="#new函数" aria-hidden="true">#</a> new函数</h3><p>表达式new(T)将创建一个T类型的匿名变量，初始化为T类型的零值，然后返回变量地址，返回的指针类型为*T。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p := new(int) // p, *int 类型, 指向匿名的 int 变量
fmt.Println(*p) // &quot;0&quot;
*p = 2 // 设置 int 匿名变量的值为 2
fmt.Println(*p) // &quot;2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赋值" tabindex="-1"><a class="header-anchor" href="#赋值" aria-hidden="true">#</a> 赋值</h2><p>使用赋值语句可以更新一个变量的值，最简单的赋值语句是将要被赋值的变量放在=的左边，新值的表达式放在=的右边。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x = 1 // 命令变量的赋值
*p = true // 通过指针间接赋值
person.name = &quot;bob&quot; // 结构体字段赋值
count[x] = count[x] * scale // 数组、slice或map的元素赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元组赋值-多重赋值" tabindex="-1"><a class="header-anchor" href="#元组赋值-多重赋值" aria-hidden="true">#</a> 元组赋值（多重赋值）</h3><p>元组赋值是另一种形式的赋值语句，它允许同时更新多个变量的值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x, y = y, x
a[i], a[j] = a[j], a[i]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：计算两个整数值的的最大公约数（GCD）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func gcd(x, y int) int {
for y != 0 {
x, y = y, x%y
}
return x
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：计算斐波纳契数列（Fibonacci）的第N个数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func fib(n int) int {
x, y := 0, 1
for i := 0; i &lt; n; i++ {
x, y = y, x+y
}
return x
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有些表达式会产生多个值，比如调用一个有多个返回值的函数。当这样一个函数调用出现在元组赋值右边的表达式中时（译注：右边不能再有其它表达式），左边变量的数目必须和右边一致。</p><p>如果<code>map查找</code>、<code>类型断言</code>或<code>通道接收</code>出现在赋值语句的右边，它们都可能会产生两个结果，有一个额外的布尔结果表示操作是否成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v, ok = m[key] // map lookup
v, ok = x.(T) // type assertion
v, ok = &lt;-ch // channel receive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>译注：map查找）、类型断言或通道接收出现在赋值语句的右边时，并不一定是产生两个结果，也可能只产生一个结果。对于值产生一个结果的情形，map查找失败时会返回零值，类型断言失败时会发送运行时panic异常，通道接收失败时会返回零值（阻塞不算是失败）。例如下面的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>v = m[key] // map查找，失败时返回零值
v = x.(T) // type断言，失败时panic异常
v = &lt;-ch // 管道接收，失败时返回零值（阻塞不算是失败）
_, ok = m[key] // map返回2个值
_, ok = mm[&quot;&quot;], false // map返回1个值
_ = mm[&quot;&quot;] // map返回1个值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和变量声明一样，我们可以用下划线空白标识符_来丢弃不需要的值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>_, err = io.Copy(dst, src) // 丢弃字节数
_, ok = x.(T) // 只检测类型，忽略具体值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><p>变量或表达式的类型定义了对应存储值的属性特征，例如数值在内存的存储大小（或者是元素的bit个数），它们在内部是如何表达的，是否支持一些操作符，以及它们自己关联的方法集等。</p><p>在任何程序中都会存在一些变量有着相同的内部结构，但是却表示完全不同的概念。例如，一个int类型的变量可以用来表示一个循环的迭代索引、或者一个时间戳、或者一个文件描述符、或者一个月份；一个float64类型的变量可以用来表示每秒移动几米的速度、或者是不同温度单位下的温度；一个字符串可以用来表示一个密码或者一个颜色的名称。</p><p>一个类型声明语句创建了一个新的类型名称，和现有类型具有相同的底层结构。新命名的类型提供了一个方法，用来分隔不同概念的类型，这样即使它们底层类型相同也是不兼容的。</p><p>类型声明方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type 类型名字 底层类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>类型声明语句一般出现在包一级，因此如果新创建的类型名字的首字符大写，则在外部包也可以使用</strong>。</p><h2 id="包和文件" tabindex="-1"><a class="header-anchor" href="#包和文件" aria-hidden="true">#</a> 包和文件</h2><p>Go语言中的包和其他语言的库或模块的概念类似，目的都是为了支持模块化、封装、单独编译和代码重用。</p><p>每个包都对应一个独立的名字空间。</p><p>例如，在image包中的Decode函数和在unicode/utf16包中的 Decode函数是不同的。</p><p>要在外部引用该函数，必须显式使用image.Decode或utf16.Decode形式访问。</p><p><strong>包级别的常量名都是以大写字母开头</strong>。</p><h3 id="导入包" tabindex="-1"><a class="header-anchor" href="#导入包" aria-hidden="true">#</a> 导入包</h3><p>除了包的导入路径，每个包还有一个包名，包名一般是短小的名字（并不要求包名是唯一的），包名在包的声明处指定。按照惯例，一个包的名字和包的导入路径的最后一个字段相同，例如gopl.io/ch2/tempconv包的名字一般是tempconv。 导入语句将导入的包绑定到一个短小的名字，然后通过该短小的名字就可以引用包中导出的全部内容。</p><h3 id="包的初始化" tabindex="-1"><a class="header-anchor" href="#包的初始化" aria-hidden="true">#</a> 包的初始化</h3><p>包的初始化首先是解决包级变量的依赖顺序，然后安照包级变量声明出现的顺序依次初始化：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = b + c // a 第三个初始化, 为 3
var b = f() // b 第二个初始化, 为 2, 通过调用 f (依赖c)
var c = 1 // c 第一个初始化, 为 1
func f() int { return c + 1 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于在包级别声明的变量，如果有初始化表达式则用表达式初始化，还有一些没有初始化表达式的，例如某些表格数据初始化并不是一个简单的赋值过程。在这种情况下，我们可以用一个特殊的init初始化函数来简化初始化工作。每个文件都可以包含多个<code>init初始化函数</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func init() { /* ... */ }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以这种方式，可以确保在main函数执行之前，所有依然的包都已经完成初始化工 作了。</p><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><p>一个声明语句将程序中的实体和一个名字关联，比如一个函数或一个变量。声明语句的作用域是指源代码中可以有效使用这个名字的范围。</p><p>不要将作用域和生命周期混为一谈。</p><p>声明语句的作用域对应的是一个源代码的文本区域；它是一个<strong>编译时的属性</strong>。</p><p>一个变量的生命周期是指程序运行时变量存在的有效时间段，在此时间区域内它可以被程序的其他部分引用；是一个<strong>运行时的概念</strong>。</p><p>语法块是由花括弧所包含的一系列语句，就像函数体或循环体花括弧对应的语法块那样。语法块内部声明的名字是无法被外部语法块访问的。语法决定了内部声明的名字的作用域范围。</p><p>有一个语法块为整个源代码，称为全局语法块；</p><p>然后是每个包的包语法决；每个for、if和switch语句的语法决；</p><p>每个switch或select的分支也有独立的语法决；当然也包括显式书写的语法块（花括弧包含的语句）。</p><p>对于内置的类型、函数和常量，比如int、len和true等是在全局作用域的，因此可以在整个程序中直接使用。</p><p>控制流标号，就是break、continue或goto语句后面跟着的那种标号，则是函数级的作用域。</p><p>下面的代码有三个不同的变量x，因为它们是定义在不同的词法域（这个例子只是为了演示作用域规则，但不是好的编程风格）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func main() {
x := &quot;hello!&quot;
for i := 0; i &lt; len(x); i++ {
x := x[i]
if x != &#39;!&#39; {
x := x + &#39;A&#39; - &#39;a&#39;
fmt.Printf(&quot;%c&quot;, x) // &quot;HELLO&quot; (one letter per iteration)
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如上面例子所示，并不是所有的词法域都显式地对应到由花括弧包含的语句；还有一些隐含的规则。</p><p>上面的for语句创建了两个词法域：花括弧包含的是显式的部分是for的循环体部分词法域，另外一个隐式的部分则是循环的初始化部分，比如用于迭代变量i的初始化。</p><p>隐式的词法域部分的作用域还包含条件测试部分和循环后的迭代部分（i++），当然也包含循环体词法域。 下面的例子同样有三个不同的x变量，每个声明在不同的词法域，一个在函数体词法域，一个在for隐式的初始化词法域，一个在for循环体词法域；只有两个块是显式创建的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func main() {
x := &quot;hello&quot;
for _, x := range x {
x := x + &#39;A&#39; - &#39;a&#39;
fmt.Printf(&quot;%c&quot;, x) // &quot;HELLO&quot; (one letter per iteration)
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,101),s=[t];function r(l,c){return i(),n("div",null,s)}const u=e(a,[["render",r],["__file","4.1 程序结构.html.vue"]]);export{u as default};
