<template><h1 id="go语言-restful-api-服务-急速入门" tabindex="-1"><a class="header-anchor" href="#go语言-restful-api-服务-急速入门" aria-hidden="true">#</a> Go语言：RESTful API 服务，急速入门</h1>
<blockquote>
<p>转载自：</p>
<p><a href="https://segmentfault.com/a/1190000040414777" target="_blank" rel="noopener noreferrer">Go语言：RESTful API 服务，急速入门<ExternalLinkIcon/></a></p>
<p><a href="https://www.cnblogs.com/zhaof/p/11346412.html" target="_blank" rel="noopener noreferrer">golang常用的http请求操作 <ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="restful-api" tabindex="-1"><a class="header-anchor" href="#restful-api" aria-hidden="true">#</a> RESTful API</h2>
<p>EST即表述性状态传递（英文：Representational State Transfer，简称REST），它是一种针对网络应用的设计和开发方式，可以降低开发的复杂性，提高系统的可伸缩性。(引用自百度百科)。</p>
<h3 id="http-method" tabindex="-1"><a class="header-anchor" href="#http-method" aria-hidden="true">#</a> HTTP Method</h3>
<ol>
<li>早在 HTTP 0.9 版本中，只有一个GET方法，该方法是一个幂等方法，用于获取服务器上的资源；</li>
<li>HTTP 1.0 版本中又增加了HEAD和POST方法，其中常用的是 POST 方法，一般用于给服务端提交一个资源。</li>
<li>HTTP1.1 版本的时，又增加了几个方法。总共加起来有9个。
它们的作用：</li>
<li><strong>GET</strong> 方法可请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据。</li>
<li><strong>HEAD</strong> 方法用于请求一个与 GET 请求的响应相同的响应，但没有响应体。</li>
<li><strong>POST</strong> 方法用于将实体提交到指定的资源，通常导致服务器上的状态变化或副作用。</li>
<li><strong>PUT</strong> 方法用于请求有效载荷替换目标资源的所有当前表示。</li>
<li><strong>DELETE</strong> 方法用于删除指定的资源。</li>
<li><strong>CONNECT</strong> 方法用于建立一个到由目标资源标识的服务器的隧道。</li>
<li><strong>OPTIONS</strong> 方法用于描述目标资源的通信选项。</li>
<li><strong>TRACE</strong> 方法用于沿着到目标资源的路径执行一个消息环回测试。</li>
<li><strong>PATCH</strong> 方法用于对资源应用部分修改。</li>
</ol>
<p>在 RESTful API 中，使用的主要是以下五种 HTTP 方法：</p>
<ul>
<li>GET，表示读取服务器上的资源；</li>
<li>POST，表示在服务器上创建资源；</li>
<li>PUT，表示更新或者替换服务器上的资源；</li>
<li>DELETE，表示删除服务器上的资源；</li>
<li>PATCH，表示更新 / 修改资源的一部分。</li>
</ul>
<h2 id="golang-常用的http请求操作" tabindex="-1"><a class="header-anchor" href="#golang-常用的http请求操作" aria-hidden="true">#</a> golang 常用的http请求操作</h2>
<h2 id="golang发起get请求" tabindex="-1"><a class="header-anchor" href="#golang发起get请求" aria-hidden="true">#</a> golang发起GET请求</h2>
<h3 id="基本的get请求" tabindex="-1"><a class="header-anchor" href="#基本的get请求" aria-hidden="true">#</a> 基本的GET请求</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//基本的GET请求
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    resp, err := http.Get("http://httpbin.org/get")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()
    body, err := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
    fmt.Println(resp.StatusCode)
    if resp.StatusCode == 200 {
        fmt.Println("ok")
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>带参数的Get请求</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main(){
    resp, err := http.Get("http://httpbin.org/get?name=zhaofan&amp;age=23")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>但是如果我们想要把一些参数做成变量而不是直接放到url中怎么操作，代码例子如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "net/url"
)

func main(){
    params := url.Values{}
    Url, err := url.Parse("http://httpbin.org/get")
    if err != nil {
        return
    }
    params.Set("name","zhaofan")
    params.Set("age","23")
    //如果参数中有中文参数,这个方法会进行URLEncode
    Url.RawQuery = params.Encode()
    urlPath := Url.String()
    fmt.Println(urlPath) // https://httpbin.org/get?age=23&amp;name=zhaofan
    resp,err := http.Get(urlPath)
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="解析json类型的返回结果" tabindex="-1"><a class="header-anchor" href="#解析json类型的返回结果" aria-hidden="true">#</a> 解析JSON类型的返回结果</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

type result struct {
    Args string `json:"args"`
    Headers map[string]string `json:"headers"`
    Origin string `json:"origin"`
    Url string `json:"url"`
}

func main() {
    resp, err := http.Get("http://httpbin.org/get")
    if err != nil {
        return
    }
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
    var res result
    _ = json.Unmarshal(body,&amp;res)
    fmt.Printf("%#v", res)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="get请求添加请求头" tabindex="-1"><a class="header-anchor" href="#get请求添加请求头" aria-hidden="true">#</a> GET请求添加请求头</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &amp;http.Client{}
    req,_ := http.NewRequest("GET","http://httpbin.org/get",nil)
    req.Header.Add("name","zhaofan")
    req.Header.Add("age","3")
    resp,_ := client.Do(req)
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Printf(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>从上述的结果可以看出我们设置的头是成功了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "args": {}, 
  "headers": {
    "Accept-Encoding": "gzip", 
    "Age": "3", 
    "Host": "httpbin.org", 
    "Name": "zhaofan", 
    "User-Agent": "Go-http-client/1.1"
  }, 
  "origin": "211.138.20.170, 211.138.20.170", 
  "url": "https://httpbin.org/get"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="golang-发起post请求" tabindex="-1"><a class="header-anchor" href="#golang-发起post请求" aria-hidden="true">#</a> golang 发起POST请求</h2>
<h3 id="基本的post使用" tabindex="-1"><a class="header-anchor" href="#基本的post使用" aria-hidden="true">#</a> 基本的POST使用</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "net/url"
)

func main() {
    urlValues := url.Values{}
    urlValues.Add("name","zhaofan")
    urlValues.Add("age","22")
    resp, _ := http.PostForm("http://httpbin.org/post",urlValues)
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "age": "22", 
    "name": "zhaofan"
  }, 
  "headers": {
    "Accept-Encoding": "gzip", 
    "Content-Length": "19", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "User-Agent": "Go-http-client/1.1"
  }, 
  "json": null, 
  "origin": "211.138.20.170, 211.138.20.170", 
  "url": "https://httpbin.org/post"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>另外一种方式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "net/url"
    "strings"
)

func main() {
    urlValues := url.Values{
        "name":{"zhaofan"},
        "age":{"23"},
    }
    reqBody:= urlValues.Encode()
    resp, _ := http.Post("http://httpbin.org/post", "text/html",strings.NewReader(reqBody))
    body,_:= ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "args": {}, 
  "data": "age=23&amp;name=zhaofan", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept-Encoding": "gzip", 
    "Content-Length": "19", 
    "Content-Type": "text/html", 
    "Host": "httpbin.org", 
    "User-Agent": "Go-http-client/1.1"
  }, 
  "json": null, 
  "origin": "211.138.20.170, 211.138.20.170", 
  "url": "https://httpbin.org/post"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="发送json数据的post请求" tabindex="-1"><a class="header-anchor" href="#发送json数据的post请求" aria-hidden="true">#</a> 发送JSON数据的post请求</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &amp;http.Client{}
    data := make(map[string]interface{})
    data["name"] = "zhaofan"
    data["age"] = "23"
    bytesData, _ := json.Marshal(data)
    req, _ := http.NewRequest("POST","http://httpbin.org/post",bytes.NewReader(bytesData))
    resp, _ := client.Do(req)
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "args": {}, 
  "data": "{\"age\":\"23\",\"name\":\"zhaofan\"}", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept-Encoding": "gzip", 
    "Content-Length": "29", 
    "Host": "httpbin.org", 
    "User-Agent": "Go-http-client/1.1"
  }, 
  "json": {
    "age": "23", 
    "name": "zhaofan"
  }, 
  "origin": "211.138.20.170, 211.138.20.170", 
  "url": "https://httpbin.org/post"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="不用client的post请求" tabindex="-1"><a class="header-anchor" href="#不用client的post请求" aria-hidden="true">#</a> 不用client的post请求</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    data := make(map[string]interface{})
    data["name"] = "zhaofan"
    data["age"] = "23"
    bytesData, _ := json.Marshal(data)
    resp, _ := http.Post("http://httpbin.org/post","application/json", bytes.NewReader(bytesData))
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="一个简单的-restful-api" tabindex="-1"><a class="header-anchor" href="#一个简单的-restful-api" aria-hidden="true">#</a> 一个简单的 RESTful API</h2>
<p>Golang 提供了内置的 net/http 包，用来处理这些 HTTP 请求，可以比较方便地开发一个 HTTP 服务。</p>
<p>示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">,</span>handleUsers<span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">":8080"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">handleUsers</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">"ID:1,Name:张三"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">"ID:2,Name:李四"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">"ID:3,Name:王五"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>运行程序后，在浏览器中输入 <a href="https://link.segmentfault.com/?enc=eXUFTZJjnrB5MYLXlKNrIw%3D%3D.pFy3cR5mNYn%2F17MXueahLVublC%2FDtJpTCFnLUkUpSL8%3D" target="_blank" rel="noopener noreferrer">http://localhost:8080/users<ExternalLinkIcon/></a>, 就可以看到如下内容信息：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>ID<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span>张三
ID<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span>李四
ID<span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span>王五
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>示例中，不光可以用 GET 能进行访问，POST、PUT等也可以，接下来对示例进行改进，使它使它符合 RESTful API 的规范：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">,</span>handleUsers<span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">":8080"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">handleUsers</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">switch</span> r<span class="token punctuation">.</span>Method <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"GET"</span><span class="token punctuation">:</span>
        w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">"ID:1,Name:张三"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">"ID:2,Name:李四"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">"ID:3,Name:王五"</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusNotFound<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">"not found"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>我们在 handleUsers 函数中增加了只在使用 GET 方法时，才获得所有用户的信息，其他情况返回 not found。</p>
<h2 id="restful-json-api" tabindex="-1"><a class="header-anchor" href="#restful-json-api" aria-hidden="true">#</a> RESTful JSON API</h2>
<p>在项目接口中，数据大多数情况下会使用 json 格式来传输，再次对示例进行改造，使它返回 json 格式的内容：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"encoding/json"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">,</span>handleUsers<span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">":8080"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//数据源，模拟MySQL中的数据</span>
<span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>User<span class="token punctuation">{</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span> <span class="token string">"张三"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span> <span class="token string">"李四"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span> <span class="token string">"王五"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">handleUsers</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">switch</span> r<span class="token punctuation">.</span>Method <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"GET"</span><span class="token punctuation">:</span>
        users<span class="token punctuation">,</span>err<span class="token operator">:=</span>json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err<span class="token operator">!=</span><span class="token boolean">nil</span> <span class="token punctuation">{</span>
            w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Fprint</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">"{\"message\": \""</span><span class="token operator">+</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"\"}"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">)</span>
            w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusNotFound<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprint</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">"{\"message\": \"not found\"}"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//用户</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID <span class="token builtin">int</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>运行结果：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"ID"</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"Name"</span><span class="token punctuation">:</span><span class="token string">"张三"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"ID"</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">"Name"</span><span class="token punctuation">:</span><span class="token string">"李四"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"ID"</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">"Name"</span><span class="token punctuation">:</span><span class="token string">"王五"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这次，我们新建了一个 User 结构体，使用 users 这个切片存储所有的用户，然后在 handleUsers 函数中把它转化为一个 JSON 数组返回。</p>
<h2 id="gin-框架" tabindex="-1"><a class="header-anchor" href="#gin-框架" aria-hidden="true">#</a> Gin 框架</h2>
<p>上面我们使用的是 Go 语言自带的 net/http 包，写法比较简单，但是它也有许多不足之处：</p>
<ul>
<li>不能单独地对请求方法（POST、GET 等）注册特定的处理函数；</li>
<li>不支持 Path 变量参数；</li>
<li>不能自动对 Path 进行校准；</li>
<li>性能一般，扩展性不足；</li>
<li>……</li>
</ul>
<p>基于以上的不足，我们可以使用其它的 Golang Web 框架，例如今天要介绍的 Gin 框架。</p>
<h3 id="引入-gin-框架" tabindex="-1"><a class="header-anchor" href="#引入-gin-框架" aria-hidden="true">#</a> 引入 Gin 框架</h3>
<p>Gin 框架是一个在 Github 上开源的 Web 框架，它封装了很多 Web 开发需要的功能，而且性能也非常高，可以很容易地写出 RESTful API。
Gin 框架其实是一个模块，采用 Go Mod 的方法引入即可：</p>
<ol>
<li>下载安装 Gin 框架
<code>go get -u github.com/gin-gonic/gin</code></li>
<li>在 Go 语言代码中导入使用
<code>import &quot;github.com/gin-gonic/gin&quot;</code></li>
</ol>
<h3 id="使用-gin-框架" tabindex="-1"><a class="header-anchor" href="#使用-gin-框架" aria-hidden="true">#</a> 使用 Gin 框架</h3>
<p>我们使用 Gin 框架来重写上面的示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"github.com/gin-gonic/gin"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">,</span> listUser<span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">":8080"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">listUser</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> users<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//数据源，模拟MySQL中的数据</span>
<span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>User<span class="token punctuation">{</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> Name<span class="token punctuation">:</span> <span class="token string">"张三"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> Name<span class="token punctuation">:</span> <span class="token string">"李四"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> Name<span class="token punctuation">:</span> <span class="token string">"王五"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//用户</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID   <span class="token builtin">int</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>对比 net/http 包，Gin 框架的代码非常简单，通过 GET 方法就可以创建一个只处理 HTTP GET 方法的服务，且使用 c.JSON 方法便可输出 JSON 格式的数据。
通过 Run 方法启动 HTTP 服务，监听 8080 端口。运行这个 Gin 示例，在浏览器中输入 <a href="https://link.segmentfault.com/?enc=BzzzanQIusJ9k3IwfDNCYg%3D%3D.4mlkPSmFvjiJFfnjmQKIHT67VPZjCK1RtPDM3cqzBLI%3D" target="_blank" rel="noopener noreferrer">http://localhost:8080/users<ExternalLinkIcon/></a>，可以看到和通过 net/http 包实现的效果是一样的。</p>
<h3 id="获取一个用户" tabindex="-1"><a class="header-anchor" href="#获取一个用户" aria-hidden="true">#</a> 获取一个用户</h3>
<p>获取一个用户的信息，我们使用 GET 方法，设计的 URL 格式为 ：
<code>http://localhost:8080/users/1</code>
url中的数字1为用户id，我们通过id来获取一个指定的用户：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//省略其它没有改动过的代码</span>
   r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/users/:id"</span><span class="token punctuation">,</span> getUser<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">getUser</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   id <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span>
   <span class="token keyword">var</span> user User
   found <span class="token operator">:=</span> <span class="token boolean">false</span>
   <span class="token comment">//类似于数据库的SQL查询</span>
   <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> u <span class="token operator">:=</span> <span class="token keyword">range</span> users <span class="token punctuation">{</span>
      <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">EqualFold</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>ID<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         user <span class="token operator">=</span> u
         found <span class="token operator">=</span> <span class="token boolean">true</span>
         <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">if</span> found <span class="token punctuation">{</span>
      c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
         <span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"用户不存在"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>在 Gin 框架中，路径中使用冒号表示 Path 路径参数，比如示例中的 :id，然后通过 c.Param(&quot;id&quot;) 获取需要查询用户的 ID 值。
运行示例，访问地址 <code>http://localhost:8080/users/1</code> ，便可以获取 ID 为1 的用户：
<code>{&quot;ID&quot;:1,&quot;Name&quot;:&quot;张三&quot;}</code></p>
<h3 id="新增一个用户" tabindex="-1"><a class="header-anchor" href="#新增一个用户" aria-hidden="true">#</a> 新增一个用户</h3>
<p>新增一个用户的 URL 格式为：
<code>http://localhost:8080/users</code>
向这个 URL 发送数据，就可以新增一个用户.</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//省略其它没有改动过的代码</span>
   r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">,</span> createUser<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">createUser</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   name <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">DefaultPostForm</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> name <span class="token operator">!=</span> <span class="token string">""</span> <span class="token punctuation">{</span>
      u <span class="token operator">:=</span> User<span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token function">len</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Name<span class="token punctuation">:</span> name<span class="token punctuation">}</span>
      users <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> u<span class="token punctuation">)</span>
      c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusCreated<span class="token punctuation">,</span>u<span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
         <span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"请输入用户名称"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>新增用户的逻辑是获取客户端上传的 name 值，然后生成一个 User 用户，最后把它存储到 users 集合中。
我们使用 curl 命令发送一个新增用户请求：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>curl <span class="token operator">-</span>X POST <span class="token operator">-</span>d <span class="token char">'name=无尘'</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">8080</span><span class="token operator">/</span>users
<span class="token punctuation">{</span><span class="token string">"ID"</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">"Name"</span><span class="token punctuation">:</span><span class="token string">"无尘"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以看到，新增用户成功，且返回了新增的用户及分配的 ID。</p>
<h2 id="使用gin接受post的json数据" tabindex="-1"><a class="header-anchor" href="#使用gin接受post的json数据" aria-hidden="true">#</a> 使用gin接受post的json数据</h2>
<h3 id="第一种" tabindex="-1"><a class="header-anchor" href="#第一种" aria-hidden="true">#</a> 第一种</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Login</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	json <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//注意该结构接受的内容</span>
	c<span class="token punctuation">.</span><span class="token function">BindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>json<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>json<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">"name"</span><span class="token punctuation">:</span> json<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token string">"password"</span><span class="token punctuation">:</span> json<span class="token punctuation">[</span><span class="token string">"password"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="第二种" tabindex="-1"><a class="header-anchor" href="#第二种" aria-hidden="true">#</a> 第二种</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> <span class="token string">`json:"name"`</span>
	Password <span class="token builtin">int64</span> <span class="token string">`json:"password"`</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">Login</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	json <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token punctuation">}</span>

	c<span class="token punctuation">.</span><span class="token function">BindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>json<span class="token punctuation">)</span>

	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>json<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">"name"</span><span class="token punctuation">:</span> json<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
		<span class="token string">"password"</span><span class="token punctuation">:</span> json<span class="token punctuation">.</span>Password<span class="token punctuation">,</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
