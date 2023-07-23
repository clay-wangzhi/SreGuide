import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,a as e}from"./app-679550bc.js";const r={},a=e('<h1 id="_5-状态码" tabindex="-1"><a class="header-anchor" href="#_5-状态码" aria-hidden="true">#</a> 5. 状态码</h1><h2 id="nginx-code-常用状态码学习小结" tabindex="-1"><a class="header-anchor" href="#nginx-code-常用状态码学习小结" aria-hidden="true">#</a> Nginx code 常用状态码学习小结</h2><h3 id="nginx-code-status" tabindex="-1"><a class="header-anchor" href="#nginx-code-status" aria-hidden="true">#</a> Nginx Code Status</h3><p>状态码分为五类：</p><ol><li>100-199 用于指定客户端应相应的某些动作。</li><li>200-299 用于表示请求成功。</li><li>300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。</li><li>400-499 用于指出客户端的错误。</li><li>500-599 用于指出服务器错误。</li></ol><hr><p><strong>200 （成功） 服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页。</strong></p><p>201 （已创建） 请求成功并且服务器创建了新的资源。</p><p>202 （已接受） 服务器已接受请求，但尚未处理。</p><p>203 （非授权信息） 服务器已成功处理了请求，但返回的信息可能来自另一来源。</p><p>204 （无内容） 服务器成功处理了请求，但没有返回任何内容。</p><p>205 （重置内容） 服务器成功处理了请求，但没有返回任何内容。</p><p>206 （部分内容） 服务器成功处理了部分 GET 请求。</p><hr><p>300 （多种选择） 针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择。</p><p>301 （永久移动） 请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。</p><p>302 （临时移动） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。</p><p>303 （查看其他位置） 请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码。</p><p>304 （未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。</p><p>305 （使用代理） 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理。</p><p>307 （临时重定向） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。</p><hr><p>400 （错误请求） 服务器不理解请求的语法。</p><p>401 （未授权） 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。</p><p>403 （禁止） 服务器拒绝请求。</p><p><strong>404 （未找到） 服务器找不到请求的网页。</strong></p><p>405 （方法禁用） 禁用请求中指定的方法。</p><p>406 （不接受） 无法使用请求的内容特性响应请求的网页。</p><p>407 （需要代理授权） 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理。</p><p>408 （请求超时） 服务器等候请求时发生超时。</p><p>409 （冲突） 服务器在完成请求时发生冲突。 服务器必须在响应中包含有关冲突的信息。</p><p>410 （已删除） 如果请求的资源已永久删除，服务器就会返回此响应。</p><p>411 （需要有效长度） 服务器不接受不含有效内容长度标头字段的请求。</p><p>412 （未满足前提条件） 服务器未满足请求者在请求中设置的其中一个前提条件。</p><p>413 （请求实体过大） 服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。</p><p>414 （请求的 URI 过长） 请求的 URI（通常为网址）过长，服务器无法处理。</p><p>415 （不支持的媒体类型） 请求的格式不受请求页面的支持。</p><p>416 （请求范围不符合要求） 如果页面无法提供请求的范围，则服务器会返回此状态代码。</p><p>417 （未满足期望值） 服务器未满足<code>&quot;期望&quot;</code>请求标头字段的要求。</p><p><strong>499 客户端主动断开了连接，有的时候是因为客户端请求超时，主动断开连接。</strong></p><hr><p><strong>500 （服务器内部错误） 服务器遇到错误，无法完成请求。</strong></p><p>501 （尚未实施） 服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。</p><p><strong>502 （错误网关） 服务器作为网关或代理，从上游服务器收到无效响应。</strong></p><p><strong>503 （服务不可用） 服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。</strong></p><p><strong>504 （网关超时） 服务器作为网关或代理，但是没有及时从上游服务器收到请求。</strong></p><p>505 （HTTP 版本不受支持） 服务器不支持请求中所用的 HTTP 协议版本。</p><h3 id="http请求流程" tabindex="-1"><a class="header-anchor" href="#http请求流程" aria-hidden="true">#</a> http请求流程</h3><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/http.png" alt=""></p><p>一个普通的http请求处理流程，如上图所示： A -&gt; client端发起请求给nginx B -&gt; nginx处理后，将请求转发到uwsgi，并等待结果 C -&gt; uwsgi处理完请求后，返回数据给nginx D -&gt; nginx将处理结果返回给客户端 每个阶段都会有一个预设的超时时间，由于网络、机器负载、代码异常等等各种原因，如果某个阶段没有在预期的时间内正常返回，就会导致这次请求异常，进而产生不同的状态码。</p>',50),i=[a];function o(s,h){return t(),n("div",null,i)}const d=p(r,[["render",o],["__file","status.html.vue"]]);export{d as default};
