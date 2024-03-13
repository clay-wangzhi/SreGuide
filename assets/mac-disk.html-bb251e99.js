import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as a,a as e,b as i,d as t,e as r}from"./app-54f39dde.js";const c={},o=e("h1",{id:"mac上挂载移动硬盘出现-read-only-file-system-问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mac上挂载移动硬盘出现-read-only-file-system-问题","aria-hidden":"true"},"#"),i(' Mac上挂载移动硬盘出现"Read-only file system"问题')],-1),v={href:"https://blog.csdn.net/Beyond_TJU/article/details/88125617",target:"_blank",rel:"noopener noreferrer"},u=r(`<p>解决步骤如下</p><ol><li>确保移动硬盘链接，查看硬盘挂在的节点，操作如下</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>diskutil info /Volumes/YOUR_NTFS_DISK_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到 Device Node</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Device Node:              /dev/disk1s1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如我这里的硬盘默认挂在在/Volumes/Elements 我查看我的硬盘挂在节点信息如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ diskutil info /Volumes/Elements
   Device Identifier:        disk2s1
   Device Node:              /dev/disk2s1
   Whole:                    No
   Part of Whole:            disk2
 
   Volume Name:              Elements
   Mounted:                  Yes
   Mount Point:              /Volumes/Elements
 
   Partition Type:           Microsoft Basic Data
   File System Personality:  NTFS
   Type (Bundle):            ntfs
   Name (User Visible):      Windows NT File System (NTFS)
 
   OS Can Be Installed:      No
   Media Type:               Generic
   Protocol:                 USB
   SMART Status:             Not Supported
   Disk / Partition UUID:    F082E054-36E6-419F-A2CD-5B9A82576C4F
 
   Disk Size:                1.0 TB (1000168488960 Bytes) (exactly 1953454080 512-Byte-Units)
   Device Block Size:        512 Bytes
 
   Volume Total Space:       1.0 TB (1000168484864 Bytes) (exactly 1953454072 512-Byte-Units)
   Volume Used Space:        424.7 GB (424701173760 Bytes) (exactly 829494480 512-Byte-Units) (42.5%)
   Volume Available Space:   575.5 GB (575467311104 Bytes) (exactly 1123959592 512-Byte-Units) (57.5%)
   Allocation Block Size:    4096 Bytes
 
   Read-Only Media:          No
   Read-Only Volume:         Yes
 
   Device Location:          External
   Removable Media:          Fixed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找到</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Device Node:              /dev/disk2s1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个信息保留下来，后面会使用</p><ol start="2"><li>然后将硬盘弹出，但是不要拔掉移动硬盘连接，操作如下</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hdiutil eject /Volumes/YOUR_NTFS_DISK_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我这里的执行如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$  hdiutil eject /Volumes/MYHD/
&quot;disk2&quot; unmounted.
&quot;disk2&quot; ejected.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建一个目录，稍后将mount到这个目录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo mkdir /Volumes/MYHD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>将NTFS硬盘 挂载 mount 到mac</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo mount_ntfs -o rw,nobrowse /dev/disk2s1 /Volumes/MYHD/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>可以进行任意的写入操作了，比如我这里进行了copy操作</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp ~/Movies/小XXX黄XXX片.mp4 /Volumes/MYHD/xx/xxx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>将NTFS硬盘从 mac 上卸载 umount</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo umount /Volumes/MYHD/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>链接：https://www.xiaorongmao.com/blog/49</p>`,23);function m(b,x){const n=l("ExternalLinkIcon");return d(),a("div",null,[o,e("blockquote",null,[e("p",null,[i("转载自："),e("a",v,[i('Mac上挂载移动硬盘出现"Read-only file system"问题'),t(n)])])]),u])}const y=s(c,[["render",m],["__file","mac-disk.html.vue"]]);export{y as default};
