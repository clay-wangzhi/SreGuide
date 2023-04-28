import{_ as e,r as o,c as u,b as n,a as t,F as l,d as s,e as p,o as c}from"./app.bb7a353b.js";const r={},i=n("h1",{id:"go\u8BED\u8A00-restful-api-\u670D\u52A1-\u6025\u901F\u5165\u95E8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#go\u8BED\u8A00-restful-api-\u670D\u52A1-\u6025\u901F\u5165\u95E8","aria-hidden":"true"},"#"),s(" Go\u8BED\u8A00\uFF1ARESTful API \u670D\u52A1\uFF0C\u6025\u901F\u5165\u95E8")],-1),b=n("p",null,"\u8F6C\u8F7D\u81EA\uFF1A",-1),k={href:"https://segmentfault.com/a/1190000040414777",target:"_blank",rel:"noopener noreferrer"},m=s("Go\u8BED\u8A00\uFF1ARESTful API \u670D\u52A1\uFF0C\u6025\u901F\u5165\u95E8"),d={href:"https://www.cnblogs.com/zhaof/p/11346412.html",target:"_blank",rel:"noopener noreferrer"},q=s("golang\u5E38\u7528\u7684http\u8BF7\u6C42\u64CD\u4F5C "),g=p(`<h2 id="restful-api" tabindex="-1"><a class="header-anchor" href="#restful-api" aria-hidden="true">#</a> RESTful API</h2><p>EST\u5373\u8868\u8FF0\u6027\u72B6\u6001\u4F20\u9012\uFF08\u82F1\u6587\uFF1ARepresentational State Transfer\uFF0C\u7B80\u79F0REST\uFF09\uFF0C\u5B83\u662F\u4E00\u79CD\u9488\u5BF9\u7F51\u7EDC\u5E94\u7528\u7684\u8BBE\u8BA1\u548C\u5F00\u53D1\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u964D\u4F4E\u5F00\u53D1\u7684\u590D\u6742\u6027\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u53EF\u4F38\u7F29\u6027\u3002(\u5F15\u7528\u81EA\u767E\u5EA6\u767E\u79D1)\u3002</p><h3 id="http-method" tabindex="-1"><a class="header-anchor" href="#http-method" aria-hidden="true">#</a> HTTP Method</h3><ol><li>\u65E9\u5728 HTTP 0.9 \u7248\u672C\u4E2D\uFF0C\u53EA\u6709\u4E00\u4E2AGET\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u662F\u4E00\u4E2A\u5E42\u7B49\u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u6E90\uFF1B</li><li>HTTP 1.0 \u7248\u672C\u4E2D\u53C8\u589E\u52A0\u4E86HEAD\u548CPOST\u65B9\u6CD5\uFF0C\u5176\u4E2D\u5E38\u7528\u7684\u662F POST \u65B9\u6CD5\uFF0C\u4E00\u822C\u7528\u4E8E\u7ED9\u670D\u52A1\u7AEF\u63D0\u4EA4\u4E00\u4E2A\u8D44\u6E90\u3002</li><li>HTTP1.1 \u7248\u672C\u7684\u65F6\uFF0C\u53C8\u589E\u52A0\u4E86\u51E0\u4E2A\u65B9\u6CD5\u3002\u603B\u5171\u52A0\u8D77\u6765\u67099\u4E2A\u3002 \u5B83\u4EEC\u7684\u4F5C\u7528\uFF1A</li><li><strong>GET</strong> \u65B9\u6CD5\u53EF\u8BF7\u6C42\u4E00\u4E2A\u6307\u5B9A\u8D44\u6E90\u7684\u8868\u793A\u5F62\u5F0F\uFF0C\u4F7F\u7528 GET \u7684\u8BF7\u6C42\u5E94\u8BE5\u53EA\u88AB\u7528\u4E8E\u83B7\u53D6\u6570\u636E\u3002</li><li><strong>HEAD</strong> \u65B9\u6CD5\u7528\u4E8E\u8BF7\u6C42\u4E00\u4E2A\u4E0E GET \u8BF7\u6C42\u7684\u54CD\u5E94\u76F8\u540C\u7684\u54CD\u5E94\uFF0C\u4F46\u6CA1\u6709\u54CD\u5E94\u4F53\u3002</li><li><strong>POST</strong> \u65B9\u6CD5\u7528\u4E8E\u5C06\u5B9E\u4F53\u63D0\u4EA4\u5230\u6307\u5B9A\u7684\u8D44\u6E90\uFF0C\u901A\u5E38\u5BFC\u81F4\u670D\u52A1\u5668\u4E0A\u7684\u72B6\u6001\u53D8\u5316\u6216\u526F\u4F5C\u7528\u3002</li><li><strong>PUT</strong> \u65B9\u6CD5\u7528\u4E8E\u8BF7\u6C42\u6709\u6548\u8F7D\u8377\u66FF\u6362\u76EE\u6807\u8D44\u6E90\u7684\u6240\u6709\u5F53\u524D\u8868\u793A\u3002</li><li><strong>DELETE</strong> \u65B9\u6CD5\u7528\u4E8E\u5220\u9664\u6307\u5B9A\u7684\u8D44\u6E90\u3002</li><li><strong>CONNECT</strong> \u65B9\u6CD5\u7528\u4E8E\u5EFA\u7ACB\u4E00\u4E2A\u5230\u7531\u76EE\u6807\u8D44\u6E90\u6807\u8BC6\u7684\u670D\u52A1\u5668\u7684\u96A7\u9053\u3002</li><li><strong>OPTIONS</strong> \u65B9\u6CD5\u7528\u4E8E\u63CF\u8FF0\u76EE\u6807\u8D44\u6E90\u7684\u901A\u4FE1\u9009\u9879\u3002</li><li><strong>TRACE</strong> \u65B9\u6CD5\u7528\u4E8E\u6CBF\u7740\u5230\u76EE\u6807\u8D44\u6E90\u7684\u8DEF\u5F84\u6267\u884C\u4E00\u4E2A\u6D88\u606F\u73AF\u56DE\u6D4B\u8BD5\u3002</li><li><strong>PATCH</strong> \u65B9\u6CD5\u7528\u4E8E\u5BF9\u8D44\u6E90\u5E94\u7528\u90E8\u5206\u4FEE\u6539\u3002</li></ol><p>\u5728 RESTful API \u4E2D\uFF0C\u4F7F\u7528\u7684\u4E3B\u8981\u662F\u4EE5\u4E0B\u4E94\u79CD HTTP \u65B9\u6CD5\uFF1A</p><ul><li>GET\uFF0C\u8868\u793A\u8BFB\u53D6\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u6E90\uFF1B</li><li>POST\uFF0C\u8868\u793A\u5728\u670D\u52A1\u5668\u4E0A\u521B\u5EFA\u8D44\u6E90\uFF1B</li><li>PUT\uFF0C\u8868\u793A\u66F4\u65B0\u6216\u8005\u66FF\u6362\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u6E90\uFF1B</li><li>DELETE\uFF0C\u8868\u793A\u5220\u9664\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u6E90\uFF1B</li><li>PATCH\uFF0C\u8868\u793A\u66F4\u65B0 / \u4FEE\u6539\u8D44\u6E90\u7684\u4E00\u90E8\u5206\u3002</li></ul><h2 id="golang-\u5E38\u7528\u7684http\u8BF7\u6C42\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#golang-\u5E38\u7528\u7684http\u8BF7\u6C42\u64CD\u4F5C" aria-hidden="true">#</a> golang \u5E38\u7528\u7684http\u8BF7\u6C42\u64CD\u4F5C</h2><h2 id="golang\u53D1\u8D77get\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#golang\u53D1\u8D77get\u8BF7\u6C42" aria-hidden="true">#</a> golang\u53D1\u8D77GET\u8BF7\u6C42</h2><h3 id="\u57FA\u672C\u7684get\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7684get\u8BF7\u6C42" aria-hidden="true">#</a> \u57FA\u672C\u7684GET\u8BF7\u6C42</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u57FA\u672C\u7684GET\u8BF7\u6C42
package main

import (
    &quot;fmt&quot;
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
)

func main() {
    resp, err := http.Get(&quot;http://httpbin.org/get&quot;)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()
    body, err := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
    fmt.Println(resp.StatusCode)
    if resp.StatusCode == 200 {
        fmt.Println(&quot;ok&quot;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u5E26\u53C2\u6570\u7684Get\u8BF7\u6C42</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
)

func main(){
    resp, err := http.Get(&quot;http://httpbin.org/get?name=zhaofan&amp;age=23&quot;)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4F46\u662F\u5982\u679C\u6211\u4EEC\u60F3\u8981\u628A\u4E00\u4E9B\u53C2\u6570\u505A\u6210\u53D8\u91CF\u800C\u4E0D\u662F\u76F4\u63A5\u653E\u5230url\u4E2D\u600E\u4E48\u64CD\u4F5C\uFF0C\u4EE3\u7801\u4F8B\u5B50\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
    &quot;net/url&quot;
)

func main(){
    params := url.Values{}
    Url, err := url.Parse(&quot;http://httpbin.org/get&quot;)
    if err != nil {
        return
    }
    params.Set(&quot;name&quot;,&quot;zhaofan&quot;)
    params.Set(&quot;age&quot;,&quot;23&quot;)
    //\u5982\u679C\u53C2\u6570\u4E2D\u6709\u4E2D\u6587\u53C2\u6570,\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8FDB\u884CURLEncode
    Url.RawQuery = params.Encode()
    urlPath := Url.String()
    fmt.Println(urlPath) // https://httpbin.org/get?age=23&amp;name=zhaofan
    resp,err := http.Get(urlPath)
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u89E3\u6790json\u7C7B\u578B\u7684\u8FD4\u56DE\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790json\u7C7B\u578B\u7684\u8FD4\u56DE\u7ED3\u679C" aria-hidden="true">#</a> \u89E3\u6790JSON\u7C7B\u578B\u7684\u8FD4\u56DE\u7ED3\u679C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;encoding/json&quot;
    &quot;fmt&quot;
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
)

type result struct {
    Args string \`json:&quot;args&quot;\`
    Headers map[string]string \`json:&quot;headers&quot;\`
    Origin string \`json:&quot;origin&quot;\`
    Url string \`json:&quot;url&quot;\`
}

func main() {
    resp, err := http.Get(&quot;http://httpbin.org/get&quot;)
    if err != nil {
        return
    }
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
    var res result
    _ = json.Unmarshal(body,&amp;res)
    fmt.Printf(&quot;%#v&quot;, res)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="get\u8BF7\u6C42\u6DFB\u52A0\u8BF7\u6C42\u5934" tabindex="-1"><a class="header-anchor" href="#get\u8BF7\u6C42\u6DFB\u52A0\u8BF7\u6C42\u5934" aria-hidden="true">#</a> GET\u8BF7\u6C42\u6DFB\u52A0\u8BF7\u6C42\u5934</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
)

func main() {
    client := &amp;http.Client{}
    req,_ := http.NewRequest(&quot;GET&quot;,&quot;http://httpbin.org/get&quot;,nil)
    req.Header.Add(&quot;name&quot;,&quot;zhaofan&quot;)
    req.Header.Add(&quot;age&quot;,&quot;3&quot;)
    resp,_ := client.Do(req)
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Printf(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u4ECE\u4E0A\u8FF0\u7684\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\u6211\u4EEC\u8BBE\u7F6E\u7684\u5934\u662F\u6210\u529F\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;args&quot;: {}, 
  &quot;headers&quot;: {
    &quot;Accept-Encoding&quot;: &quot;gzip&quot;, 
    &quot;Age&quot;: &quot;3&quot;, 
    &quot;Host&quot;: &quot;httpbin.org&quot;, 
    &quot;Name&quot;: &quot;zhaofan&quot;, 
    &quot;User-Agent&quot;: &quot;Go-http-client/1.1&quot;
  }, 
  &quot;origin&quot;: &quot;211.138.20.170, 211.138.20.170&quot;, 
  &quot;url&quot;: &quot;https://httpbin.org/get&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="golang-\u53D1\u8D77post\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#golang-\u53D1\u8D77post\u8BF7\u6C42" aria-hidden="true">#</a> golang \u53D1\u8D77POST\u8BF7\u6C42</h2><h3 id="\u57FA\u672C\u7684post\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7684post\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u7684POST\u4F7F\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
    &quot;net/url&quot;
)

func main() {
    urlValues := url.Values{}
    urlValues.Add(&quot;name&quot;,&quot;zhaofan&quot;)
    urlValues.Add(&quot;age&quot;,&quot;22&quot;)
    resp, _ := http.PostForm(&quot;http://httpbin.org/post&quot;,urlValues)
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;args&quot;: {}, 
  &quot;data&quot;: &quot;&quot;, 
  &quot;files&quot;: {}, 
  &quot;form&quot;: {
    &quot;age&quot;: &quot;22&quot;, 
    &quot;name&quot;: &quot;zhaofan&quot;
  }, 
  &quot;headers&quot;: {
    &quot;Accept-Encoding&quot;: &quot;gzip&quot;, 
    &quot;Content-Length&quot;: &quot;19&quot;, 
    &quot;Content-Type&quot;: &quot;application/x-www-form-urlencoded&quot;, 
    &quot;Host&quot;: &quot;httpbin.org&quot;, 
    &quot;User-Agent&quot;: &quot;Go-http-client/1.1&quot;
  }, 
  &quot;json&quot;: null, 
  &quot;origin&quot;: &quot;211.138.20.170, 211.138.20.170&quot;, 
  &quot;url&quot;: &quot;https://httpbin.org/post&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u53E6\u5916\u4E00\u79CD\u65B9\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
    &quot;net/url&quot;
    &quot;strings&quot;
)

func main() {
    urlValues := url.Values{
        &quot;name&quot;:{&quot;zhaofan&quot;},
        &quot;age&quot;:{&quot;23&quot;},
    }
    reqBody:= urlValues.Encode()
    resp, _ := http.Post(&quot;http://httpbin.org/post&quot;, &quot;text/html&quot;,strings.NewReader(reqBody))
    body,_:= ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;args&quot;: {}, 
  &quot;data&quot;: &quot;age=23&amp;name=zhaofan&quot;, 
  &quot;files&quot;: {}, 
  &quot;form&quot;: {}, 
  &quot;headers&quot;: {
    &quot;Accept-Encoding&quot;: &quot;gzip&quot;, 
    &quot;Content-Length&quot;: &quot;19&quot;, 
    &quot;Content-Type&quot;: &quot;text/html&quot;, 
    &quot;Host&quot;: &quot;httpbin.org&quot;, 
    &quot;User-Agent&quot;: &quot;Go-http-client/1.1&quot;
  }, 
  &quot;json&quot;: null, 
  &quot;origin&quot;: &quot;211.138.20.170, 211.138.20.170&quot;, 
  &quot;url&quot;: &quot;https://httpbin.org/post&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u53D1\u9001json\u6570\u636E\u7684post\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001json\u6570\u636E\u7684post\u8BF7\u6C42" aria-hidden="true">#</a> \u53D1\u9001JSON\u6570\u636E\u7684post\u8BF7\u6C42</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;bytes&quot;
    &quot;encoding/json&quot;
    &quot;fmt&quot;
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
)

func main() {
    client := &amp;http.Client{}
    data := make(map[string]interface{})
    data[&quot;name&quot;] = &quot;zhaofan&quot;
    data[&quot;age&quot;] = &quot;23&quot;
    bytesData, _ := json.Marshal(data)
    req, _ := http.NewRequest(&quot;POST&quot;,&quot;http://httpbin.org/post&quot;,bytes.NewReader(bytesData))
    resp, _ := client.Do(req)
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;args&quot;: {}, 
  &quot;data&quot;: &quot;{\\&quot;age\\&quot;:\\&quot;23\\&quot;,\\&quot;name\\&quot;:\\&quot;zhaofan\\&quot;}&quot;, 
  &quot;files&quot;: {}, 
  &quot;form&quot;: {}, 
  &quot;headers&quot;: {
    &quot;Accept-Encoding&quot;: &quot;gzip&quot;, 
    &quot;Content-Length&quot;: &quot;29&quot;, 
    &quot;Host&quot;: &quot;httpbin.org&quot;, 
    &quot;User-Agent&quot;: &quot;Go-http-client/1.1&quot;
  }, 
  &quot;json&quot;: {
    &quot;age&quot;: &quot;23&quot;, 
    &quot;name&quot;: &quot;zhaofan&quot;
  }, 
  &quot;origin&quot;: &quot;211.138.20.170, 211.138.20.170&quot;, 
  &quot;url&quot;: &quot;https://httpbin.org/post&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u4E0D\u7528client\u7684post\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u7528client\u7684post\u8BF7\u6C42" aria-hidden="true">#</a> \u4E0D\u7528client\u7684post\u8BF7\u6C42</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;bytes&quot;
    &quot;encoding/json&quot;
    &quot;fmt&quot;
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
)

func main() {
    data := make(map[string]interface{})
    data[&quot;name&quot;] = &quot;zhaofan&quot;
    data[&quot;age&quot;] = &quot;23&quot;
    bytesData, _ := json.Marshal(data)
    resp, _ := http.Post(&quot;http://httpbin.org/post&quot;,&quot;application/json&quot;, bytes.NewReader(bytesData))
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u4E00\u4E2A\u7B80\u5355\u7684-restful-api" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u7B80\u5355\u7684-restful-api" aria-hidden="true">#</a> \u4E00\u4E2A\u7B80\u5355\u7684 RESTful API</h2><p>Golang \u63D0\u4F9B\u4E86\u5185\u7F6E\u7684 net/http \u5305\uFF0C\u7528\u6765\u5904\u7406\u8FD9\u4E9B HTTP \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u6BD4\u8F83\u65B9\u4FBF\u5730\u5F00\u53D1\u4E00\u4E2A HTTP \u670D\u52A1\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/users&quot;</span><span class="token punctuation">,</span>handleUsers<span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">handleUsers</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">&quot;ID:1,Name:\u5F20\u4E09&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">&quot;ID:2,Name:\u674E\u56DB&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">&quot;ID:3,Name:\u738B\u4E94&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,39),h=s("\u8FD0\u884C\u7A0B\u5E8F\u540E\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165 "),f={href:"https://link.segmentfault.com/?enc=eXUFTZJjnrB5MYLXlKNrIw%3D%3D.pFy3cR5mNYn%2F17MXueahLVublC%2FDtJpTCFnLUkUpSL8%3D",target:"_blank",rel:"noopener noreferrer"},v=s("http://localhost:8080/users"),y=s(", \u5C31\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u5185\u5BB9\u4FE1\u606F\uFF1A"),x=p(`<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>ID<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span>\u5F20\u4E09
ID<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span>\u674E\u56DB
ID<span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span>\u738B\u4E94
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u793A\u4F8B\u4E2D\uFF0C\u4E0D\u5149\u53EF\u4EE5\u7528 GET \u80FD\u8FDB\u884C\u8BBF\u95EE\uFF0CPOST\u3001PUT\u7B49\u4E5F\u53EF\u4EE5\uFF0C\u63A5\u4E0B\u6765\u5BF9\u793A\u4F8B\u8FDB\u884C\u6539\u8FDB\uFF0C\u4F7F\u5B83\u4F7F\u5B83\u7B26\u5408 RESTful API \u7684\u89C4\u8303\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/users&quot;</span><span class="token punctuation">,</span>handleUsers<span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">handleUsers</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">switch</span> r<span class="token punctuation">.</span>Method <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">:</span>
        w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">&quot;ID:1,Name:\u5F20\u4E09&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">&quot;ID:2,Name:\u674E\u56DB&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">&quot;ID:3,Name:\u738B\u4E94&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusNotFound<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">&quot;not found&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u6211\u4EEC\u5728 handleUsers \u51FD\u6570\u4E2D\u589E\u52A0\u4E86\u53EA\u5728\u4F7F\u7528 GET \u65B9\u6CD5\u65F6\uFF0C\u624D\u83B7\u5F97\u6240\u6709\u7528\u6237\u7684\u4FE1\u606F\uFF0C\u5176\u4ED6\u60C5\u51B5\u8FD4\u56DE not found\u3002</p><h2 id="restful-json-api" tabindex="-1"><a class="header-anchor" href="#restful-json-api" aria-hidden="true">#</a> RESTful JSON API</h2><p>\u5728\u9879\u76EE\u63A5\u53E3\u4E2D\uFF0C\u6570\u636E\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u7528 json \u683C\u5F0F\u6765\u4F20\u8F93\uFF0C\u518D\u6B21\u5BF9\u793A\u4F8B\u8FDB\u884C\u6539\u9020\uFF0C\u4F7F\u5B83\u8FD4\u56DE json \u683C\u5F0F\u7684\u5185\u5BB9\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/users&quot;</span><span class="token punctuation">,</span>handleUsers<span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u6570\u636E\u6E90\uFF0C\u6A21\u62DFMySQL\u4E2D\u7684\u6570\u636E</span>
<span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>User<span class="token punctuation">{</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;\u738B\u4E94&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">handleUsers</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">switch</span> r<span class="token punctuation">.</span>Method <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">:</span>
        users<span class="token punctuation">,</span>err<span class="token operator">:=</span>json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err<span class="token operator">!=</span><span class="token boolean">nil</span> <span class="token punctuation">{</span>
            w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Fprint</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">&quot;{\\&quot;message\\&quot;: \\&quot;&quot;</span><span class="token operator">+</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;\\&quot;}&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">)</span>
            w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusNotFound<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprint</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span><span class="token string">&quot;{\\&quot;message\\&quot;: \\&quot;not found\\&quot;}&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u7528\u6237</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID <span class="token builtin">int</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;ID&quot;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;ID&quot;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;ID&quot;</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u738B\u4E94&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6B21\uFF0C\u6211\u4EEC\u65B0\u5EFA\u4E86\u4E00\u4E2A User \u7ED3\u6784\u4F53\uFF0C\u4F7F\u7528 users \u8FD9\u4E2A\u5207\u7247\u5B58\u50A8\u6240\u6709\u7684\u7528\u6237\uFF0C\u7136\u540E\u5728 handleUsers \u51FD\u6570\u4E2D\u628A\u5B83\u8F6C\u5316\u4E3A\u4E00\u4E2A JSON \u6570\u7EC4\u8FD4\u56DE\u3002</p><h2 id="gin-\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#gin-\u6846\u67B6" aria-hidden="true">#</a> Gin \u6846\u67B6</h2><p>\u4E0A\u9762\u6211\u4EEC\u4F7F\u7528\u7684\u662F Go \u8BED\u8A00\u81EA\u5E26\u7684 net/http \u5305\uFF0C\u5199\u6CD5\u6BD4\u8F83\u7B80\u5355\uFF0C\u4F46\u662F\u5B83\u4E5F\u6709\u8BB8\u591A\u4E0D\u8DB3\u4E4B\u5904\uFF1A</p><ul><li>\u4E0D\u80FD\u5355\u72EC\u5730\u5BF9\u8BF7\u6C42\u65B9\u6CD5\uFF08POST\u3001GET \u7B49\uFF09\u6CE8\u518C\u7279\u5B9A\u7684\u5904\u7406\u51FD\u6570\uFF1B</li><li>\u4E0D\u652F\u6301 Path \u53D8\u91CF\u53C2\u6570\uFF1B</li><li>\u4E0D\u80FD\u81EA\u52A8\u5BF9 Path \u8FDB\u884C\u6821\u51C6\uFF1B</li><li>\u6027\u80FD\u4E00\u822C\uFF0C\u6269\u5C55\u6027\u4E0D\u8DB3\uFF1B</li><li>\u2026\u2026</li></ul><p>\u57FA\u4E8E\u4EE5\u4E0A\u7684\u4E0D\u8DB3\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5176\u5B83\u7684 Golang Web \u6846\u67B6\uFF0C\u4F8B\u5982\u4ECA\u5929\u8981\u4ECB\u7ECD\u7684 Gin \u6846\u67B6\u3002</p><h3 id="\u5F15\u5165-gin-\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165-gin-\u6846\u67B6" aria-hidden="true">#</a> \u5F15\u5165 Gin \u6846\u67B6</h3><p>Gin \u6846\u67B6\u662F\u4E00\u4E2A\u5728 Github \u4E0A\u5F00\u6E90\u7684 Web \u6846\u67B6\uFF0C\u5B83\u5C01\u88C5\u4E86\u5F88\u591A Web \u5F00\u53D1\u9700\u8981\u7684\u529F\u80FD\uFF0C\u800C\u4E14\u6027\u80FD\u4E5F\u975E\u5E38\u9AD8\uFF0C\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u5199\u51FA RESTful API\u3002 Gin \u6846\u67B6\u5176\u5B9E\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u91C7\u7528 Go Mod \u7684\u65B9\u6CD5\u5F15\u5165\u5373\u53EF\uFF1A</p><ol><li>\u4E0B\u8F7D\u5B89\u88C5 Gin \u6846\u67B6 <code>go get -u github.com/gin-gonic/gin</code></li><li>\u5728 Go \u8BED\u8A00\u4EE3\u7801\u4E2D\u5BFC\u5165\u4F7F\u7528 <code>import &quot;github.com/gin-gonic/gin&quot;</code></li></ol><h3 id="\u4F7F\u7528-gin-\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-gin-\u6846\u67B6" aria-hidden="true">#</a> \u4F7F\u7528 Gin \u6846\u67B6</h3><p>\u6211\u4EEC\u4F7F\u7528 Gin \u6846\u67B6\u6765\u91CD\u5199\u4E0A\u9762\u7684\u793A\u4F8B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/users&quot;</span><span class="token punctuation">,</span> listUser<span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">listUser</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> users<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6570\u636E\u6E90\uFF0C\u6A21\u62DFMySQL\u4E2D\u7684\u6570\u636E</span>
<span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>User<span class="token punctuation">{</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> Name<span class="token punctuation">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> Name<span class="token punctuation">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> Name<span class="token punctuation">:</span> <span class="token string">&quot;\u738B\u4E94&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u7528\u6237</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID   <span class="token builtin">int</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,20),w=s("\u5BF9\u6BD4 net/http \u5305\uFF0CGin \u6846\u67B6\u7684\u4EE3\u7801\u975E\u5E38\u7B80\u5355\uFF0C\u901A\u8FC7 GET \u65B9\u6CD5\u5C31\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u53EA\u5904\u7406 HTTP GET \u65B9\u6CD5\u7684\u670D\u52A1\uFF0C\u4E14\u4F7F\u7528 c.JSON \u65B9\u6CD5\u4FBF\u53EF\u8F93\u51FA JSON \u683C\u5F0F\u7684\u6570\u636E\u3002 \u901A\u8FC7 Run \u65B9\u6CD5\u542F\u52A8 HTTP \u670D\u52A1\uFF0C\u76D1\u542C 8080 \u7AEF\u53E3\u3002\u8FD0\u884C\u8FD9\u4E2A Gin \u793A\u4F8B\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165 "),T={href:"https://link.segmentfault.com/?enc=BzzzanQIusJ9k3IwfDNCYg%3D%3D.4mlkPSmFvjiJFfnjmQKIHT67VPZjCK1RtPDM3cqzBLI%3D",target:"_blank",rel:"noopener noreferrer"},_=s("http://localhost:8080/users"),P=s("\uFF0C\u53EF\u4EE5\u770B\u5230\u548C\u901A\u8FC7 net/http \u5305\u5B9E\u73B0\u7684\u6548\u679C\u662F\u4E00\u6837\u7684\u3002"),S=p(`<h3 id="\u83B7\u53D6\u4E00\u4E2A\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u4E00\u4E2A\u7528\u6237" aria-hidden="true">#</a> \u83B7\u53D6\u4E00\u4E2A\u7528\u6237</h3><p>\u83B7\u53D6\u4E00\u4E2A\u7528\u6237\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u4F7F\u7528 GET \u65B9\u6CD5\uFF0C\u8BBE\u8BA1\u7684 URL \u683C\u5F0F\u4E3A \uFF1A <code>http://localhost:8080/users/1</code> url\u4E2D\u7684\u6570\u5B571\u4E3A\u7528\u6237id\uFF0C\u6211\u4EEC\u901A\u8FC7id\u6765\u83B7\u53D6\u4E00\u4E2A\u6307\u5B9A\u7684\u7528\u6237\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//\u7701\u7565\u5176\u5B83\u6CA1\u6709\u6539\u52A8\u8FC7\u7684\u4EE3\u7801</span>
   r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/users/:id&quot;</span><span class="token punctuation">,</span> getUser<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">getUser</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   id <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">var</span> user User
   found <span class="token operator">:=</span> <span class="token boolean">false</span>
   <span class="token comment">//\u7C7B\u4F3C\u4E8E\u6570\u636E\u5E93\u7684SQL\u67E5\u8BE2</span>
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
         <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u7528\u6237\u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5728 Gin \u6846\u67B6\u4E2D\uFF0C\u8DEF\u5F84\u4E2D\u4F7F\u7528\u5192\u53F7\u8868\u793A Path \u8DEF\u5F84\u53C2\u6570\uFF0C\u6BD4\u5982\u793A\u4F8B\u4E2D\u7684 :id\uFF0C\u7136\u540E\u901A\u8FC7 c.Param(&quot;id&quot;) \u83B7\u53D6\u9700\u8981\u67E5\u8BE2\u7528\u6237\u7684 ID \u503C\u3002 \u8FD0\u884C\u793A\u4F8B\uFF0C\u8BBF\u95EE\u5730\u5740 <code>http://localhost:8080/users/1</code> \uFF0C\u4FBF\u53EF\u4EE5\u83B7\u53D6 ID \u4E3A1 \u7684\u7528\u6237\uFF1A <code>{&quot;ID&quot;:1,&quot;Name&quot;:&quot;\u5F20\u4E09&quot;}</code></p><h3 id="\u65B0\u589E\u4E00\u4E2A\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u4E00\u4E2A\u7528\u6237" aria-hidden="true">#</a> \u65B0\u589E\u4E00\u4E2A\u7528\u6237</h3><p>\u65B0\u589E\u4E00\u4E2A\u7528\u6237\u7684 URL \u683C\u5F0F\u4E3A\uFF1A <code>http://localhost:8080/users</code> \u5411\u8FD9\u4E2A URL \u53D1\u9001\u6570\u636E\uFF0C\u5C31\u53EF\u4EE5\u65B0\u589E\u4E00\u4E2A\u7528\u6237.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//\u7701\u7565\u5176\u5B83\u6CA1\u6709\u6539\u52A8\u8FC7\u7684\u4EE3\u7801</span>
   r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/users&quot;</span><span class="token punctuation">,</span> createUser<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">createUser</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   name <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">DefaultPostForm</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> name <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
      u <span class="token operator">:=</span> User<span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token function">len</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Name<span class="token punctuation">:</span> name<span class="token punctuation">}</span>
      users <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> u<span class="token punctuation">)</span>
      c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusCreated<span class="token punctuation">,</span>u<span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
         <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u65B0\u589E\u7528\u6237\u7684\u903B\u8F91\u662F\u83B7\u53D6\u5BA2\u6237\u7AEF\u4E0A\u4F20\u7684 name \u503C\uFF0C\u7136\u540E\u751F\u6210\u4E00\u4E2A User \u7528\u6237\uFF0C\u6700\u540E\u628A\u5B83\u5B58\u50A8\u5230 users \u96C6\u5408\u4E2D\u3002 \u6211\u4EEC\u4F7F\u7528 curl \u547D\u4EE4\u53D1\u9001\u4E00\u4E2A\u65B0\u589E\u7528\u6237\u8BF7\u6C42\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>curl <span class="token operator">-</span>X POST <span class="token operator">-</span>d <span class="token char">&#39;name=\u65E0\u5C18&#39;</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">8080</span><span class="token operator">/</span>users
<span class="token punctuation">{</span><span class="token string">&quot;ID&quot;</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u65E0\u5C18&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u65B0\u589E\u7528\u6237\u6210\u529F\uFF0C\u4E14\u8FD4\u56DE\u4E86\u65B0\u589E\u7684\u7528\u6237\u53CA\u5206\u914D\u7684 ID\u3002</p><h2 id="\u4F7F\u7528gin\u63A5\u53D7post\u7684json\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528gin\u63A5\u53D7post\u7684json\u6570\u636E" aria-hidden="true">#</a> \u4F7F\u7528gin\u63A5\u53D7post\u7684json\u6570\u636E</h2><h3 id="\u7B2C\u4E00\u79CD" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u79CD" aria-hidden="true">#</a> \u7B2C\u4E00\u79CD</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Login</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	json <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//\u6CE8\u610F\u8BE5\u7ED3\u6784\u63A5\u53D7\u7684\u5185\u5BB9</span>
	c<span class="token punctuation">.</span><span class="token function">BindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>json<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>json<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> json<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> json<span class="token punctuation">[</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u7B2C\u4E8C\u79CD" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u79CD" aria-hidden="true">#</a> \u7B2C\u4E8C\u79CD</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
	Password <span class="token builtin">int64</span> <span class="token string">\`json:&quot;password&quot;\`</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">Login</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	json <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token punctuation">}</span>

	c<span class="token punctuation">.</span><span class="token function">BindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>json<span class="token punctuation">)</span>

	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>json<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> json<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
		<span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> json<span class="token punctuation">.</span>Password<span class="token punctuation">,</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,15);function N(E,D){const a=o("ExternalLinkIcon");return c(),u(l,null,[i,n("blockquote",null,[b,n("p",null,[n("a",k,[m,t(a)])]),n("p",null,[n("a",d,[q,t(a)])])]),g,n("p",null,[h,n("a",f,[v,t(a)]),y]),x,n("p",null,[w,n("a",T,[_,t(a)]),P]),S],64)}var I=e(r,[["render",N],["__file","go-restful-api.html.vue"]]);export{I as default};
