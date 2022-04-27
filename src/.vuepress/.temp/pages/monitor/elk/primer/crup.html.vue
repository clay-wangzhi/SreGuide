<template><h1 id="文档的基本操作crup与批量操作" tabindex="-1"><a class="header-anchor" href="#文档的基本操作crup与批量操作" aria-hidden="true">#</a> 文档的基本操作CRUP与批量操作</h1>
<h2 id="文档的crud" tabindex="-1"><a class="header-anchor" href="#文档的crud" aria-hidden="true">#</a> 文档的CRUD</h2>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568013522348.png" alt="" loading="lazy"></p>
<ul>
<li>Type名，约定都用_doc</li>
<li>Create - 如果ID已经存在，会失败</li>
<li>Index - 如果ID不存在，创建新的文档。否则，先删除现有的文档，再创建现有的文档，再创建新的文档，版本会增加</li>
<li>Update - 文档必须已经存在，更新只会对相应字段做增量修改</li>
</ul>
<h3 id="create一个文档" tabindex="-1"><a class="header-anchor" href="#create一个文档" aria-hidden="true">#</a> Create一个文档</h3>
<ul>
<li>支持自动生产文档id和指定文档id两种方式</li>
<li>通过调用&quot;post /users/_doc&quot;
<ul>
<li>系统会自动生产document id</li>
</ul>
</li>
<li>使用HTTP PUT user/create/1创建时，URI中显示指定_create，此时如果该id的文档已经存在，操作失败</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568015379663.png" alt="" loading="lazy"></p>
<h3 id="get一个文档" tabindex="-1"><a class="header-anchor" href="#get一个文档" aria-hidden="true">#</a> Get一个文档</h3>
<ul>
<li>找到文档，返回HTTP 200
<ul>
<li>文档元信息
<ul>
<li>_index / _type /</li>
<li>版本信息，同一个id的文档，即使被删除，version号也会不断增加</li>
<li>_source中默认包含了文档的所有原始信息</li>
</ul>
</li>
</ul>
</li>
<li>找不到文档，返回HTTP 404</li>
</ul>
<h3 id="index-文档" tabindex="-1"><a class="header-anchor" href="#index-文档" aria-hidden="true">#</a> Index 文档</h3>
<ul>
<li>Index和Create不一样的地方：如果文档不存在，就索引新的文档。否则现有文档会被删除，新的文档被索引。版本信息+1</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568015891907.png" alt="" loading="lazy"></p>
<h3 id="update文档" tabindex="-1"><a class="header-anchor" href="#update文档" aria-hidden="true">#</a> Update文档</h3>
<ul>
<li>Update方法不会删除原来的文档，而是实现真正的数据更新</li>
<li>Post方法 / Payload需要包含在&quot;doc&quot;中</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568016019747.png" alt="" loading="lazy"></p>
<h2 id="api的批量操作" tabindex="-1"><a class="header-anchor" href="#api的批量操作" aria-hidden="true">#</a> API的批量操作</h2>
<h3 id="bulk-api" tabindex="-1"><a class="header-anchor" href="#bulk-api" aria-hidden="true">#</a> Bulk API</h3>
<ul>
<li>支持在一次API调用中，对不同的索引进行操作</li>
<li>支持四种类型操作
<ul>
<li>Index</li>
<li>Create</li>
<li>Update</li>
<li>Delete</li>
</ul>
</li>
<li>可以在URI中指定Index，也可以在请求的Payload中进行</li>
<li>操作中单条操作失败，并不会影响其他操作</li>
<li>返回结果包括了每一条操作执行的结果</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568017190479.png" alt="" loading="lazy"></p>
<h3 id="批量读取-mget" tabindex="-1"><a class="header-anchor" href="#批量读取-mget" aria-hidden="true">#</a> 批量读取 - mget</h3>
<p>批量操作，可以减少网络连接所产生的开销，提高性能</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568018531224.png" alt="" loading="lazy"></p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568018545981.png" alt="" loading="lazy"></p>
<h3 id="批量查询-msearch" tabindex="-1"><a class="header-anchor" href="#批量查询-msearch" aria-hidden="true">#</a> 批量查询 - msearch</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568018796705.png" alt="" loading="lazy"></p>
<h2 id="常见的错误返回" tabindex="-1"><a class="header-anchor" href="#常见的错误返回" aria-hidden="true">#</a> 常见的错误返回</h2>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568018899854.png" alt="" loading="lazy"></p>
</template>
