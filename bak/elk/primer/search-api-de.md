---
category: 监控
tag:
  - ELK
---

# URI Search详解

## 通过URI query实现搜索

* q 指定查询语句，使用Query String Syntax
* df 指定默认字段，不指定时会对所有字段进行查询
* Sort排序 / from 和size用于分页
* Profile 可以查看查询是如何被执行的

### Query String Syntax

* 指定字段 v.s 泛查询
  * q=title:2012  /   q=2012
* Term v.s Phrase
  * Beautiful Mind 等效于 Beautiful OR Mind
  * "Beautiful Mind"等效于Beautiful AND Mind。Phrase查询，还要求前后顺序保持一致
* 分组与引号
  * title:(Beautiful AND Mind)   - term查询要用"()"括起来
  * title="Beautiful Mind" - phrase查询要用""双引号
* 布尔操作
  * AND 、OR、NOT或者 && 、||、！
    * 必须大写
* 分组
  * \+ 表示must
  * \- 表示must_not
* 范围查询
  * 区间表示：[]闭区间，{}开区间
    * year:{2018 TO 2019}
    * year:[* TO 2018]
* 算数符号
  * year:>2010
  * year:(>2010 && <=2018)
  * year:(+>2010 -<2018)
* 通配符查询（通配符查询效率低，占用内存大，不建议使用。特别是放在最前面）
  * ？代表1个字符，* 代表0或多个字符
    * title:mi?d
    * title:be*
* 正则表达
  * title:[bt]oy
* 模糊匹配与近似查询
  * title:befutifl~1
  * title:"lord rings"~2
    * 表示lord 和rings之间可以存在两个单词

