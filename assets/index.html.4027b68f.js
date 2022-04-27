import{_ as l,r as i,c as r,a as e,b as t,F as o,e as s,d as a,o as c}from"./app.ac0f71d5.js";const d={},p=s(`<h1 id="gitlab\u5907\u4EFD\u8FC1\u79FB\u5347\u7EA7-\u96C6\u6210openldap" tabindex="-1"><a class="header-anchor" href="#gitlab\u5907\u4EFD\u8FC1\u79FB\u5347\u7EA7-\u96C6\u6210openldap" aria-hidden="true">#</a> gitlab\u5907\u4EFD\u8FC1\u79FB\u5347\u7EA7&amp;\u96C6\u6210openldap</h1><h2 id="gitlab\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#gitlab\u5B89\u88C5" aria-hidden="true">#</a> gitlab\u5B89\u88C5</h2><h3 id="\u5B89\u88C5\u76F8\u5173\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u76F8\u5173\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u76F8\u5173\u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y <span class="token function">curl</span> policycoreutils-python openssh-server
yum <span class="token function">install</span> postfix
systemctl <span class="token builtin class-name">enable</span> postfix
systemctl start postfix
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u955C\u50CF\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u5207\u6362" aria-hidden="true">#</a> \u955C\u50CF\u5207\u6362</h3><p>\u5207\u6362\u4E3A\u56FD\u5185\u7684\u6E05\u534E\u6E90</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cat gitlab_gitlab-ce.repo </span>
<span class="token punctuation">[</span>gitlab_gitlab-ce<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>gitlab_gitlab-ce
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/
<span class="token assign-left variable">repo_gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7531\u4E8E\u4E0D\u540C\u7248\u672C\u53F7\u7684\u5907\u4EFD\u6587\u4EF6\u4E0D\u80FD\u76F8\u4E92\u4F7F\u7528\uFF0C\u4E0B\u8F7D\u65E7gitlab\u4E2D\u7684\u5BF9\u5E94\u7684\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> gitlab-ce-11.5.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4F7F\u7528" aria-hidden="true">#</a> \u914D\u7F6E\u4F7F\u7528</h3><p>\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728<code>/etc/gitblab/gitlab.rb</code>\u4E2D\u6309\u7167\u9700\u6C42\u4FEE\u6539\u914D\u7F6E\uFF0C \u4E3B\u8981\u9700\u8981\u4FEE\u6539<code>external_url</code>\uFF0C\u6539\u6210\u81EA\u5DF1\u4F7F\u7528\u7684 url \u5730\u5740\u3002 \u6267\u884C\u547D\u4EE4\u914D\u7F6E\u751F\u6548\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitlab-ctl reconfigure
gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="gitlab\u5907\u4EFD-\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#gitlab\u5907\u4EFD-\u6062\u590D" aria-hidden="true">#</a> gitlab\u5907\u4EFD&amp;\u6062\u590D</h2><p>Gitlab \u6210\u529F\u8FD0\u884C\u8D77\u6765\u4E4B\u540E\uFF0C\u6700\u7EC8\u7684\u4E8B\u60C5\u5C31\u662F\u5B9A\u671F\u7684\u5907\u4EFD\uFF0C\u9047\u5230\u95EE\u9898\u540E\u7684\u8FD8\u539F\u3002</p><h3 id="\u5907\u4EFD\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD\u914D\u7F6E" aria-hidden="true">#</a> \u5907\u4EFD\u914D\u7F6E</h3><p>\u9ED8\u8BA4 Gitlab \u7684\u5907\u4EFD\u6587\u4EF6\u4F1A\u521B\u5EFA\u5728<code>/var/opt/gitlab/backups</code>\u6587\u4EF6\u5939\u4E2D\uFF0C\u683C\u5F0F\u4E3A<code>\u65F6\u95F4\u6233_\u65E5\u671F_\u7248\u672C\u53F7_gitlab_backup.tar</code>\uFF0C\u4F8B\u5982\uFF1A<code>1515031353_2018_01_04_10.3.2_gitlab_backup.tar</code>\u3002 \u4FEE\u6539\u5907\u4EFD\u6587\u4EF6\u5939\uFF0C\u9700\u8981\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6<code>/etc/gitlab/gitlab.rb</code>\u4E2D\u7684\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;backup_path&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;/your_wish/backups&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7136\u540E<code>gitlabctl-reconfigure</code>\u751F\u6548\u3002</p><h3 id="\u624B\u52A8\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u5907\u4EFD" aria-hidden="true">#</a> \u624B\u52A8\u5907\u4EFD</h3><p>\u547D\u4EE4\uFF1A<code>gitlab-backup create</code></p><p>For GitLab 12.1 and earlier, use <code>gitlab-rake gitlab:backup:create</code>. \u4F1A\u5728\u547D\u4EE4\u6267\u884C\u7684\u65F6\u95F4\u70B9\uFF0C\u5728\u4F60\u914D\u7F6E\u7684\u6587\u4EF6\u5939\u6216\u8005\u9ED8\u8BA4\u6587\u4EF6\u5939\u521B\u5EFA\u4E00\u4E2A\u5907\u4EFD\u6587\u4EF6\u3002</p><h3 id="\u81EA\u52A8\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5907\u4EFD" aria-hidden="true">#</a> \u81EA\u52A8\u5907\u4EFD</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">0</span> <span class="token number">2</span> * * * /opt/gitlab/bin/gitlab-backup create <span class="token assign-left variable">CRON</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><strong>Note</strong> For GitLab 12.1 and earlier, use <code>gitlab-rake gitlab:backup:create</code>.</p></blockquote><h3 id="\u5907\u4EFD\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD\u6062\u590D" aria-hidden="true">#</a> \u5907\u4EFD\u6062\u590D</h3><p>First make sure your backup tar file is in the backup directory described in the <code>gitlab.rb</code> configuration <code>gitlab_rails[&#39;backup_path&#39;]</code>. The default is <code>/var/opt/gitlab/backups</code>. It needs to be owned by the <code>git</code> user.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp 11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar /var/opt/gitlab/backups/
chown git.git /var/opt/gitlab/backups/11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Stop the processes that are connected to the database. Leave the rest of GitLab running:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq
<span class="token comment"># Verify</span>
gitlab-ctl status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Next, restore the backup, specifying the timestamp of the backup you wish to restore:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># This command will overwrite the contents of your GitLab database!</span>
gitlab-backup restore <span class="token assign-left variable">BACKUP</span><span class="token operator">=</span>1493107454_2018_04_25_10.6.4-ce
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p><strong>Note</strong> For GitLab 12.1 and earlier, use <code>gitlab-rake gitlab:backup:restore</code>.</p></blockquote>`,32),b=e("strong",null,"Warning:",-1),u=a(),g=e("code",null,"gitlab-rake gitlab:backup:restore",-1),h=a(" does not set the right file system permissions on your Registry directory. This is a "),m={href:"https://gitlab.com/gitlab-org/gitlab-foss/issues/62759",target:"_blank",rel:"noopener noreferrer"},v=a("known issue"),k=a(". On GitLab 12.2 or newer, you can use "),_=e("code",null,"gitlab-backup restore",-1),f=a(" to avoid this issue."),x=s(`<p>Next, restore <code>/etc/gitlab/gitlab-secrets.json</code> if necessary as mentioned above.</p><p>Reconfigure, restart and check GitLab:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitlab-ctl reconfigure
gitlab-ctl restart
gitlab-rake gitlab:check <span class="token assign-left variable">SANITIZE</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3),y=a("If there is a GitLab version mismatch between your backup tar file and the installed version of GitLab, the restore command will abort with an error. Install the "),w={href:"https://packages.gitlab.com/gitlab/",target:"_blank",rel:"noopener noreferrer"},L=a("correct GitLab version"),G=a(" and try again."),j=s(`<h2 id="gitlab\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#gitlab\u5347\u7EA7" aria-hidden="true">#</a> gitlab\u5347\u7EA7</h2><p>It is considered safe to jump between patch versions and minor versions within one major version. For example, it is safe to:</p><ul><li>Upgrade the patch version: <ul><li><code>8.9.0</code> -&gt; <code>8.9.7</code></li><li><code>8.9.0</code> -&gt; <code>8.9.1</code></li><li><code>8.9.2</code> -&gt; <code>8.9.6</code></li><li><code>9.5.5</code> -&gt; <code>9.5.9</code></li><li><code>10.6.3</code> -&gt; <code>10.6.6</code></li><li><code>11.11.1</code> -&gt; <code>11.11.8</code></li><li><code>12.0.4</code> -&gt; <code>12.0.9</code></li></ul></li><li>Upgrade the minor version: <ul><li><code>8.9.4</code> -&gt; <code>8.12.3</code></li><li><code>9.2.3</code> -&gt; <code>9.5.5</code></li><li><code>10.6.6</code> -&gt; <code>10.8.7</code></li><li><code>11.3.4</code> -&gt; <code>11.11.8</code></li></ul></li></ul><p>Upgrading the major version requires more attention. We cannot guarantee that upgrading between major versions will be seamless. As previously mentioned, major versions are reserved for backwards incompatible changes. We recommend that you first upgrade to the latest available minor version within your major version. By doing this, you can address any deprecation messages that could change behavior in the next major release. To ensure background migrations are successful, increment by one minor version during the version jump before installing newer releases.</p><p>For example: <code>11.11.x</code> -&gt; <code>12.0.x</code> Please see the table below for some examples:</p><table><thead><tr><th style="text-align:left;">Latest stable version</th><th style="text-align:left;">Your version</th><th style="text-align:left;">Recommended upgrade path</th><th style="text-align:left;">Note</th></tr></thead><tbody><tr><td style="text-align:left;">9.4.5</td><td style="text-align:left;">8.13.4</td><td style="text-align:left;"><code>8.13.4</code> -&gt; <code>8.17.7</code> -&gt; <code>9.4.5</code></td><td style="text-align:left;"><code>8.17.7</code> is the last version in version <code>8</code></td></tr><tr><td style="text-align:left;">10.1.4</td><td style="text-align:left;">8.13.4</td><td style="text-align:left;"><code>8.13.4 -&gt; 8.17.7 -&gt; 9.5.10 -&gt; 10.1.4</code></td><td style="text-align:left;"><code>8.17.7</code> is the last version in version <code>8</code>, <code>9.5.10</code> is the last version in version <code>9</code></td></tr><tr><td style="text-align:left;">11.3.4</td><td style="text-align:left;">8.13.4</td><td style="text-align:left;"><code>8.13.4</code> -&gt; <code>8.17.7</code> -&gt; <code>9.5.10</code> -&gt; <code>10.8.7</code> -&gt; <code>11.3.4</code></td><td style="text-align:left;"><code>8.17.7</code> is the last version in version <code>8</code>, <code>9.5.10</code> is the last version in version <code>9</code>, <code>10.8.7</code> is the last version in version <code>10</code></td></tr><tr><td style="text-align:left;">12.5.8</td><td style="text-align:left;">11.3.4</td><td style="text-align:left;"><code>11.3.4</code> -&gt; <code>11.11.8</code> -&gt; <code>12.0.9</code> -&gt; <code>12.5.8</code></td><td style="text-align:left;"><code>11.11.8</code> is the last version in version <code>11</code></td></tr></tbody></table><p>\u6211\u7684\u5347\u7EA7\u8DEF\u7EBF\u4E3A\uFF1A\u8868\u683C\u4E2D\u6700\u540E\u4E00\u4E2A</p><p>\u6BCF\u6B21\u5347\u7EA7\u76F4\u63A5<code>yum -y install gitlab-ce-\u7248\u672C\u53F7</code>\u5C31\u53EF\u4EE5\u4E86</p><p>\u4F8B\u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> gitlab-ce-11.11.8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6BCF\u5347\u7EA7\u4E00\u6B21\uFF0C\u91CD\u8F7D\u4E00\u4E0B\u914D\u7F6E\uFF0C\u91CD\u542F\u4E00\u4E0Bgitlab</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitlab-ctl reconfigure
gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="gitlab\u96C6\u6210openldap" tabindex="-1"><a class="header-anchor" href="#gitlab\u96C6\u6210openldap" aria-hidden="true">#</a> gitlab\u96C6\u6210openldap</h2><h3 id="setting-up-ldap-sign-in" tabindex="-1"><a class="header-anchor" href="#setting-up-ldap-sign-in" aria-hidden="true">#</a> Setting up LDAP sign-in</h3><p>If you have an LDAP directory service such as Active Directory, you can configure GitLab so that your users can sign in with their LDAP credentials. Add the following to <code>/etc/gitlab/gitlab.rb</code>, edited for your server.</p><p>For GitLab Community Edition:</p><p>\u4EE5\u4E0B\u662F\u6211ldap\u7684\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">### LDAP Settings</span>
<span class="token comment">###! Docs: https://docs.gitlab.com/omnibus/settings/ldap.html</span>
<span class="token comment">###! **Be careful not to break the indentation in the ldap_servers block. It is</span>
<span class="token comment">###!   in yaml format and the spaces must be retained. Using tabs will not work.**</span>

gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;ldap_enabled&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;prevent_ldap_sign_in&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;ldap_servers&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> YAML.load <span class="token operator">&lt;&lt;-</span><span class="token string">EOS
main:
  label: &#39;LDAP&#39;
  host: &#39;192.168.x.x&#39;
  port: 389
  uid: &#39;cn&#39;
  encryption: &#39;plain&#39;
  bind_dn: &#39;cn=admin,dc=xxx,dc=com&#39;
  password: &#39;xxx&#39;
  smartcard_auth: false
  active_directory: true
  allow_username_or_email_login: true
  lowercase_usernames: false
  base: &#39;ou=People,dc=xxx,dc=com&#39;
  user_filter: &#39;&#39;
EOS</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitlab-ctl reconfigure
gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u53C2\u8003\u6587\u7AE0\uFF1A</p><p>https://www.jianshu.com/p/d29c332bcf53</p><p>https://docs.gitlab.com/ee/raketasks/backup_restore.html#restore-for-omnibus-gitlab-installations</p><p>https://www.jianshu.com/p/6361cba123a8</p><p>https://docs.gitlab.com/ee/policy/maintenance.html#upgrade-recommendations</p><p>https://docs.gitlab.com/omnibus/settings/ldap.html</p><p>https://www.jianshu.com/p/083cf462fed4</p></blockquote>`,20);function A(N,I){const n=i("ExternalLinkIcon");return c(),r(o,null,[p,e("blockquote",null,[e("p",null,[b,u,g,h,e("a",m,[v,t(n)]),k,_,f])]),x,e("p",null,[y,e("a",w,[L,t(n)]),G]),j],64)}var F=l(d,[["render",A],["__file","index.html.vue"]]);export{F as default};
