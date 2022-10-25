import{_ as a,r as l,c as i,a as e,b as r,F as t,d as n,e as c,o}from"./app.741e01f1.js";const d={},p=e("h1",{id:"mac\u4E0A\u6302\u8F7D\u79FB\u52A8\u786C\u76D8\u51FA\u73B0-read-only-file-system-\u95EE\u9898",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mac\u4E0A\u6302\u8F7D\u79FB\u52A8\u786C\u76D8\u51FA\u73B0-read-only-file-system-\u95EE\u9898","aria-hidden":"true"},"#"),n(' Mac\u4E0A\u6302\u8F7D\u79FB\u52A8\u786C\u76D8\u51FA\u73B0"Read-only file system"\u95EE\u9898')],-1),u=n("\u8F6C\u8F7D\u81EA\uFF1A"),m={href:"https://blog.csdn.net/Beyond_TJU/article/details/88125617",target:"_blank",rel:"noopener noreferrer"},b=n('Mac\u4E0A\u6302\u8F7D\u79FB\u52A8\u786C\u76D8\u51FA\u73B0"Read-only file system"\u95EE\u9898'),x=c(`<p>\u89E3\u51B3\u6B65\u9AA4\u5982\u4E0B</p><ol><li>\u786E\u4FDD\u79FB\u52A8\u786C\u76D8\u94FE\u63A5\uFF0C\u67E5\u770B\u786C\u76D8\u6302\u5728\u7684\u8282\u70B9\uFF0C\u64CD\u4F5C\u5982\u4E0B</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>diskutil info /Volumes/YOUR_NTFS_DISK_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u627E\u5230 Device Node</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Device Node:              /dev/disk1s1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6BD4\u5982\u6211\u8FD9\u91CC\u7684\u786C\u76D8\u9ED8\u8BA4\u6302\u5728\u5728/Volumes/Elements \u6211\u67E5\u770B\u6211\u7684\u786C\u76D8\u6302\u5728\u8282\u70B9\u4FE1\u606F\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ diskutil info /Volumes/Elements
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u627E\u5230</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Device Node:              /dev/disk2s1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u4FE1\u606F\u4FDD\u7559\u4E0B\u6765\uFF0C\u540E\u9762\u4F1A\u4F7F\u7528</p><ol start="2"><li>\u7136\u540E\u5C06\u786C\u76D8\u5F39\u51FA\uFF0C\u4F46\u662F\u4E0D\u8981\u62D4\u6389\u79FB\u52A8\u786C\u76D8\u8FDE\u63A5\uFF0C\u64CD\u4F5C\u5982\u4E0B</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hdiutil eject /Volumes/YOUR_NTFS_DISK_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6211\u8FD9\u91CC\u7684\u6267\u884C\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$  hdiutil eject /Volumes/MYHD/
&quot;disk2&quot; unmounted.
&quot;disk2&quot; ejected.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u7A0D\u540E\u5C06mount\u5230\u8FD9\u4E2A\u76EE\u5F55</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo mkdir /Volumes/MYHD
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u5C06NTFS\u786C\u76D8 \u6302\u8F7D mount \u5230mac</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo mount_ntfs -o rw,nobrowse /dev/disk2s1 /Volumes/MYHD/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>\u53EF\u4EE5\u8FDB\u884C\u4EFB\u610F\u7684\u5199\u5165\u64CD\u4F5C\u4E86\uFF0C\u6BD4\u5982\u6211\u8FD9\u91CC\u8FDB\u884C\u4E86copy\u64CD\u4F5C</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp ~/Movies/\u5C0FXXX\u9EC4XXX\u7247.mp4 /Volumes/MYHD/xx/xxx/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6"><li>\u5C06NTFS\u786C\u76D8\u4ECE mac \u4E0A\u5378\u8F7D umount</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo umount /Volumes/MYHD/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u94FE\u63A5\uFF1Ahttps://www.xiaorongmao.com/blog/49</p>`,23);function v(g,_){const s=l("ExternalLinkIcon");return o(),i(t,null,[p,e("blockquote",null,[e("p",null,[u,e("a",m,[b,r(s)])])]),x],64)}var h=a(d,[["render",v],["__file","mac-disk.html.vue"]]);export{h as default};
