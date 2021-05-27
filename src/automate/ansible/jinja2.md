## Jinja2 简介

### Jinja2 是什么？模板是什么？

Jinja2 是基于 python 的模板引擎。那么什么是模板？

所谓模板，是可以在纯文本字符串中嵌入一些特殊语法格式的表达式，然后使用模板引擎去解析整个模板，将其中嵌入的特殊语法部分解析替换成对应的结果字符串。其中，解析并替换模板表达式的过程称为渲染。

为了让模板引擎只替换模板表达式而不操作普通字符串，所以模板引擎需要能够区分模板表达式和普通字符串，所以模板表达式通常会使用特殊符号包围起来。

模板更多用在 web 编程中来生成 HTML 页面，但绝不限于 web 编程，它可以用在很多方面，比如 Ansible 就使用 Jinja2 模板引擎来解析 YAML 中的字符串，也用在 template 模块渲染模板文件。

Jinja2 模板引擎提供了三种特殊符号来包围模板表达式：

* `{{xxx}}`：双大括号包围变量或表达式( Ansible 中的变量就是它包围的)

* `{#xxx#}`：Jinja2 的注释符号

* `{%xxx%}`：Jinja2 的一些特殊关键字标签，比如 if 语句、for 循环语句等等

Jinja2 的内容较多，但对于学习 Ansible 来说，只需要学习其中和 template 相关的一部分(其它的都和开发有关或 Ansible 中用不上)以及 Ansible 对 Jinja2 的扩展功能即可。

* [Jinja2 的官方手册](https://jinja.palletsprojects.com/en/2.10.x/templates/)

* [Ansible Jinja2的官方手册](https://docs.ansible.com/ansible/latest/user_guide/playbooks_templating.html)

### Ansible 哪里使用了 Jinja2

严格地说，playbook 中所有地方都使用了 Jinja2，包括几乎所有指令的值、template 模板文件、copy 模块的 content 指令的值、lookup 的 template 插件，等等。它们会先经过 Jinja2 渲染，然后再执行相关任务。

例如，下面的playbook中分别使用了三种Jinja2特殊符号。

```yaml
---
- hosts: localhost
  gather_facts: no
  tasks:
    - debug:
      msg: "hello world, {{inventory_hostname}}"
    - debug:
      msg: "hello world{# comment #}"
    - debug:
      msg: "{% if True %}hello world{% endif %}"
```

> :warning: 注：jinja2原生的布尔值应当是小写的true和false，但也支持首字母大写形式的True和False。

执行结果：

```
TASK [debug] ************************
ok: [localhost] => {
"msg": "hello world, localhost"
}

TASK [debug] ************************
ok: [localhost] => {
"msg": "hello world"
}

TASK [debug] ************************
ok: [localhost] => {
"msg": "hello world"
}
```

再比如模板文件 a.conf.j2 中使用这三种特殊语法：

```yaml
{# Comment this line #}
variable value: {{inventory_hostname}}
{% if True %}
in if tag code: {{inventory_hostname}}
{% endif %}
```

对应的模板渲染任务：

```yaml
- template:
    src: a.conf.j2
    dest: /tmp/a.conf
```

执行后，将在`/tmp/a.conf`中生成如下内容：

```
variable value: localhost
in if tag code: localhost
```

有些指令比较特殊，它们已经使用隐式的`{{}}`进行了预包围，例如 debug 模块的 var 参数、条件判断 when 指令，所以这时就不要手动使用`{{}}`再包围指令的值。例如：

```yaml
- debug:
    var: inventory_hostname
```

### Jinja2 访问元素的两种方式

Jinja2 模板引擎允许使用点.来访问列表或字典元素，比如 `mylist=["a","b","c"] `列表，在 Jinja2 中既可以使用`mylist[1]`来访问第二个元素，也可以使用`mylist.1`来访问它。

在之前的文章中曾解释过这两种访问方式的区别，这里再重复一遍：

* 使用`X.Y` 时，先搜索 Python 对象的属性名或方法名，搜索不到时再搜索 Jinja2 变量
* 使用`X["Y"]`时，先搜索Jinja2变量，搜索失败时再搜索Python对象的属性名或方法名

所以，使用`X.Y`方式时需要小心一些，使用`X["Y"]`更保险。当然，使用哪种方式都无所谓，出错了也知道如何去调整。



### Jinja2 条件判断

#### if 语句块

Jinja2 中可以使用if语句进行条件判断。

其语法为：

```
{% if CONDITION1 %}
string_or_expression1
{% elif CONDITION2 %}
string_or_expression2
{% elif CONDITION3 %}
string_or_expression3
{% else %}
string_or_expression4
{% endif %}
```

其中 elif 和 else 分支都是可省略的。CONDITION 部分是条件表达式，关于 Jinja2 支持的条件表达式，后面会介绍。

例如，模板文件`a.txt.j2`内容如下：

```
今天星期几：
{% if whatday == "0" %}
星期日
{% elif whatday == "1" %}
星期一
{% elif whatday == "2" %}
星期二
{% elif whatday == "3" %}
星期三
{% elif whatday == "4" %}
星期四
{% elif whatday == "5" %}
星期五
{% elif whatday == "6" %}
星期六
{% else %}
错误数值
{% endif %}
```

上面判断变量`whatday`的值，然后输出对应的星期几。因为`whatday`变量的值是字符串，所以让它和字符串形式的数值进行等值比较。当然，也可以使用筛选器将字符串转换为数值后进行数值比较：`whatday|int == 0`。

playbook 内容如下：

```
---
- hosts: localhost
  gather_facts: no
  vars_prompt:
    - name: whatday
      default: 0
      prompt: "星期几(0->星期日,1->星期一...):"
      private: no
  tasks:
    - template:
        src: a.txt.j2
        dest: /tmp/a.txt
```

#### 行内 if 表达式

如果if语句的分支比较简单(没有elif逻辑)，那么可以使用行内if表达式。

其语法格式为：

```
string_or_expr1 if CONDITION else string_or_expr2
```

因为行内if是表达式而不是语句块，所以不使用{%%}符号，而使用{{}}。

例如：

```
- debug:
    msg: "{{'周末' if whatday|int > 5 else '工作日'}}"
```



### for 循环

#### for迭代列表

for循环的语法：

```
{% for i in LIST %}
string_or_expression
{% endfor %}
```

还支持直接条件判断筛选要参与迭代的元素：

```
{% for i in LIST if CONDITION %}
string_or_expression
{% endfor %}
```

此外，Jinja2 的 for 语句还允许使用 else 分支，如果 for 所迭代的列表 LIST 是空列表(或没有元素可迭代)，则会执行 else 分支。

```
{% for i in LIST %}
string_or_expression
{% else %}
string_or_expression
{% endfor %}
```

例如，在模板文件`a.txt.j2`中有如下内容：

```yaml
{% for file in files %}
<{{file}}>
{% else %}
no file in files
{% endfor %}
```

playbook 文件内容如下：

```yaml
---
- hosts: localhost
  gather_facts: no
  vars:
    files:
      - /tmp/a1
      - /tmp/a2
      - /tmp/a3
  tasks:
    - template:
        src: a.txt.j2
        dest: /tmp/a.txt
```

执行 playbook 之后，将生成包含如下内容的`/tmp/a.txt`文件：

```
</tmp/a1>
</tmp/a2>
</tmp/a3>
```

如果将 playbook 中的 files 变量设置为空列表，则会执行 else 分支，所以生成的`/tmp/a.txt`的内容为：

```yaml
no file in files
```

如果files变量未定义或变量类型不是list，则默认会报错。针对未定义变量，可采用如下策略提供默认空列表：

```
{% for file in (files|default([])) %}
<{{file}}>
{% else %}
no file in files
{% endfor %}
```

如果不想迭代文件列表中的`/tmp/a3`，则可以加上条件判断：

```
{% for file in (files|default([])) if file != "/tmp/a3" %}
<{{file}}>
{% else %}
no file in files
{% endfor %}
```

Jinja2 的 for 循环没有提供 break 和 continue 的功能，所以只能通过`{% for...if...%}`来间接实现类似功能。

#### for迭代字典

默认情况下，Jinja2 的 for 语句只能迭代列表。

如果要迭代字典结构，需要先使用字典的 items() 方法进行转换。如果没有学过 python，我下面做个简单解释：

```
p:
  name: junmajinlong
  age: 18
```

如果使用`p.items()`，将计算得到如下结果：

```
[('name', 'junmajinlong'), ('age', 18)]
```

然后 for 语句中使用两个迭代变量分别保存各列表元素中的子元素即可。下面设置了两个迭代变量 key 和 value：

```
{% for key,value in p.items() %}
```

那么第一轮迭代时，key 变量保存的是 name 字符串，value 变量保存的是 junmajinlong 字符串，那么第二轮迭代时，key 变量保存的是 age 字符串，value 变量保存的是 18 数值。

如果 for 迭代时不想要 key 或不想要 value，则使用_来丢弃对应的值。也可以使用`keys()`方法和`values()`方法分别获取字典的key组成的列表、字典的value组成的列表。例如：

```
{% for key,_ in p.items() %}
{% for _,values in p.items() %}
{% for key in p.keys() %}
{% for value in p.values() %}
```

将上面的解释整理成下面的示例。playbook 内容如下：

```
- hosts: localhost
  gather_facts: no
  vars:
    p1:
      name: "junmajinlong"
      age: 18
  tasks:
    - template:
        src: a.txt.j2
        dest: /tmp/a.txt
```

模板文件`a.txt.j2`内容如下：

```
{% for key,value in p1.items() %}
key: {{key}}, value: {{value}}
{% endfor %}
```

执行结果：

```
key: name, value: junmajinlong
key: age, value: 18
```

#### for的特殊控制变量

在for循环内部，可以使用一些特殊变量，如下：

![image-20210527143348798](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210527143348798.png)

详解 ，略

### Macro

后续补充

### block

后续补充

### 变量赋值和作用域

后续补充

### Jinja2的空白处理

后续补充

## jinja2 基础补充

### 基本运算符

* 算术类操作符：

  ```
  +
  -
  *
  /
  //
  %
  **
  ```

  说明几点：

  ```
  +操作符也可用于字符串串联、列表相加，例如"a"+"b"得到"ab"，[1,2]+[3,4]得到[1,2,3,4]
  /是浮点数除法，例如3/2得到1.5
  //是截断式整除法，例如20/7得到2
  *也可用于重复字符串，例如"-" * 10得到10个连续的短横线
  ```

* 比较类操作符：

  ```
  >
  <
  >=
  <=
  ==
  !=
  ```

  需要说明一点：比较操作不仅仅只能比较数值，也能比较其它对象，比如字符串。

  例如"hey" > "hello" 返回True。

* 逻辑运算符：

  ```
  not
  and
  or
  (expr)
  ```

* 其它操作符：

  ```
  in：成员测试，测试是否在容器内
  is：做is测试，参见后文
  |：筛选器，参见后文
  ~：字符串串联
  ```

  需要说明几点：

  ```
  in操作符可测试多种容器，常见的包括：列表测试3 in [1,2,3]、字符串测试"h" in "hey"和字典测试"name" in {"name":"junma","age":28}都返回True
  is可以做很多测试，比如测试是否是数值，是否是字符串等等，具体内容后面会完整介绍
  +可以做字符串串联，~也可以做字符串串联，例如"ab" ~ "cd"得到"abcd"
  not操作符和is、in结合时，可以放在两个位置。例如not ("h" in "hey")、"h" not in "hey"都可以，not (3 is number())和3 is not number()都可以
  ```

### Jinja2 内置的 is 测试函数

jinja2 的 is 操作符可以做很多测试操作，比如测试是否是数值，是否是字符串等等。下表列出了所有 Jinja2 内置的测试函数。

![image-20210527144740868](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210527144740868.png)

详解；略

### Ansible 扩展的测试函数

模板引擎是多功能的，可以用在很多方面，所以 Jinja2 自身置的大多数功能都是通用功能。使用 Jinja2 的工具可能会对 Jinja2 进行功能扩展，比如 Flask扩 展了一些功能，Ansible 也对 Jinja2 扩展了一些功能。

Ansible 扩展的测试函数官方手册：https://docs.ansible.com/ansible/latest/user_guide/playbooks_tests.html 。

#### 测试字符串

Ansible 提供了三个正则测试函数：

* match()
* search()
* regex()

它们都返回布尔值，匹配成功时返回true。

其中，match()要求从字符串的首字符开始匹配成功。

例如：

```
"hello123world" is match("\d+") -> False
"hello123world" is match(".*\d+") -> True
"hello123world" is search("\d+") -> True
"hello123world" is regex("\d+") -> True
```

#### 版本号大小比较

Ansible作为配置服务、程序的配置管理工具，经常需要比较版本号的大小是否符合要求。Ansible 提供了一个`version`测试函数可以用来测试版本号是否大于、小于、等于、不等于给定的版本号。

语法：

```
version('VERSION',CMP)
```

其中 CMP 可以是如下几种：

```
<, lt, <=, le, >, gt, >=, ge, ==, =, eq, !=, <>, ne
```

例如：

```
{{ ansible_facts["distribution_version"] is version("7.5","<=") }}
```

判断操作系统版本号是否小于等于7.5。

#### 子集、父集测试

* `A is subset(B)`测试 A 是否是 B 的子集
* `A is superset(B)`测试 A 是否是 B 的父集

例如：

```
- debug:
    msg: '{{[1,2,3] is subset([1,2,3,4])}}'
```

#### 成员测试

Jinja2 自己有一个 in 操作符可以做成员测试，Ansible 另外还实现了一个 contains 测试函数，主要目的是为了结合 select、reject、selectattr 和 rejectattr 筛选器。

详解；略

#### 测试文件

Ansible 提供了测试文件的相关函数：

* is exists：是否存在
* is directory：是否是目录
* is file：是否是普通文件
* is link：是否是软链接
* is abs：是否是绝对路径
* is same_file(F)：是否和F是硬链接关系
* is mount：是否是挂载点

```
- debug:
    msg: "path is a directory"
  when: mypath is directory

# 如果mypath是绝对路径，即is测试返回true，
# 则筛选器返回absolute，否则返回relative
- debug:
    msg: "path is {{ (mypath is abs)|ternary('absolute','relative')}}"

- debug:
    msg: "path is the same file as path2"
  when: mypath is same_file(path2)

- debug:
    msg: "path is a mount"
  when: mypath is mount
```

#### 测试任务的执行状态

每个任务的执行结果都有4种状态：成功、失败、changed、跳过。

Ansible 提供了相关的测试函数：

* succeeded、success
* failed、failure
* changed、change
* skipped、skip

```yaml
- shell: /usr/bin/foo
  register: result
  ignore_errors: True

- debug:
    msg: "it failed"
    when: result is failed

- debug:
    msg: "it changed"
  when: result is changed

- debug:
    msg: "it succeeded in Ansible >= 2.1"
  when: result is succeeded

- debug:
    msg: "it succeeded"
  when: result is success

- debug:
    msg: "it was skipped"
  when: result is skipped
```

### Jinja2 内置 Filter

通常，模板语言都会带有筛选器，JinJa2 也不例外，每个筛选器函数都是一个功能，作用就类似于函数，而且它也可以接参数。

Jinja2 的筛选器使用方式非常简单，直接使用一根竖线`|`，在模板解析时，Jinja2 会将竖线左边的返回值或计算结果当作隐式参数传递给竖线右边的筛选器函数。另外，筛选器是一个表达式，所以写在`{{}}`内部。

例如，Jinja2 有一个内置 lower() 筛选器函数，可以将字符串全部转化成小写字母。

```yaml
- debug:
    msg: "{{'HELLO WORLD'|lower()}}"
```

JinJa2 内置了50多个筛选器函数，Ansible 自身也扩展了一些方便的筛选器函数，所以数量非常多。如下：

![image-20210527150327795](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210527150327795.png)

详解；略

### Ansible 扩展的 Filter

#### 类型转换类筛选器

```
{{"123"|int}}
{{"123"|float}}
{{123|string}}
{{range(1,6)|list}}
{{123|bool}}
```

注意，没有dict筛选器转换成字典类型。

#### 获取当前时间点

Ansible 提供的 now() 可以获取当前时间点。

可以指定输出的格式化字符串，支持的格式化字符串参考python官方手册：https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior 。

详解；略

#### YAML、JSON 格式化

Ansible 提供了几个和 YAML、JSON 格式化相关的 Filter：

```
to_yaml
to_json
to_nice_yaml
to_nice_json
```

它们都可使用 indent 参数指定缩进的层次。

`to_yaml`和`to_json`适用于调试，`to_nice_yaml`和`to_nice_json`适用于用户查看。

例如：

```yaml
- debug:
    msg: '{{f1|to_nice_json(indent=2)}}'
  vars:
    f1:
      father: "Bob"
      mother: "Alice"
      Children:
        - Judy
        - Tedy
```

#### 参数忽略

Ansible 提供了一个特殊变量 omit ，可以用来忽略模块的参数效果。

官方手册给了一个非常有代表性的示例，如下：

```yaml
- name: touch files with an optional mode
  file:
    dest: "{{ item.path }}"
    state: touch
    mode: "{{ item.mode | default(omit) }}"
  loop:
    - path: /tmp/foo
    - path: /tmp/bar
    - path: /tmp/baz
  mode: "0444"
```

当所迭代的元素中不存在 mode 项，则使用默认值，默认值设置为特殊变量 omit，使得 file 模块的 mode 参数被忽略，相当于未书写该参数。只有给定了 mode 项时，mode 参数才生效。

#### 列表元素连接

`join`可以将列表各个元素根据指定的连接符连接起来：

```
{{ [1,2,3] | join("-") }}
```

#### json_query

可查询 Json 格式的数据，json_query 在 Ansible 中非常实用，是必学 Filter 之一。

Ansible 的 json_query 基于 jmespath，所以需要先安装 jmespath：

```
pip3 install jmespath
```

详解；后续补充

#### 文件名处理

* basename：获取字符串中的文件名部分
* dirname：获取字符串中目录名部分
* expanduser：扩展家目录，即将~替换为家目录
* realpath：获取软链接的原始路径
* splitext：扩展名分离

#### 后续补充

* 列表压平
* 并集、交集、差集
* dict 和 list 转换
* zip 和 zip_longest
* 子元素 subelements
* random 生成随机数
* shuffle 打乱顺序
* ip地址筛选
* 正则表达式筛选器
* URL处理筛选器
* extract 提取元素
* dict 合并
* hash 值计算
* base64 编解码筛选器
* 日期时间类处理
* human_to_bytes和human_readable

> 转载自：
>
> https://blog.51cto.com/cloumn/blog/1592
>
> https://blog.51cto.com/cloumn/blog/1593
