const a=JSON.parse('{"key":"v-53d9a91b","path":"/cloudnative/stability/dr-br/etcd-backup-restore.html","title":"Etcd 备份恢复","lang":"zh-CN","frontmatter":{"order":3,"category":"云原生","tag":["etcd"],"description":"Etcd 备份恢复 Etcd 备份 创建备份脚本/opt/etcd_backup.sh #!/usr/bin/env bash # # Etcd backup set -e ETCD_CA_CERT=\\"/etc/kubernetes/pki/etcd/ca.crt\\" ETCD_CERT=\\"/etc/kubernetes/pki/etcd/server.crt\\" ETCD_KEY=\\"/etc/kubernetes/pki/etcd/server.key\\" BACKUP_DIR=\\"/var/lib/docker/etcd_backup\\" DT=$(date +%Y%m%d.%H%M%S) [[ ! -d ${BACKUP_DIR} ]] &amp;&amp; mkdir -p ${BACKUP_DIR} find ${BACKUP_DIR} -name \\"*.db\\" -mtime +7 -exec rm -f {} \\\\; ETCDCTL_API=3 /usr/local/bin/etcdctl --endpoints=https://127.0.0.1:2379 \\\\ --cacert=\\"${ETCD_CA_CERT}\\" --cert=\\"${ETCD_CERT}\\" --key=\\"${ETCD_KEY}\\" \\\\ snapshot save \\"${BACKUP_DIR}/etcd-snapshot-${DT}.db\\" echo \\"Etcd backup success, backup file: ${BACKUP_DIR}/etcd-snapshot-${DT}.db, \\\\ file size: $(du -sh ${BACKUP_DIR}/etcd-snapshot-${DT}.db |awk \'{print $1}\')\\" echo 添加cron定时任务 crontab -e 0 */1 * * * /bin/bash /opt/etcd_backup.sh &gt;&gt;/opt/log-backup-etcd.log 2&gt;&amp;1","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/stability/dr-br/etcd-backup-restore.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"Etcd 备份恢复"}],["meta",{"property":"og:description","content":"Etcd 备份恢复 Etcd 备份 创建备份脚本/opt/etcd_backup.sh #!/usr/bin/env bash # # Etcd backup set -e ETCD_CA_CERT=\\"/etc/kubernetes/pki/etcd/ca.crt\\" ETCD_CERT=\\"/etc/kubernetes/pki/etcd/server.crt\\" ETCD_KEY=\\"/etc/kubernetes/pki/etcd/server.key\\" BACKUP_DIR=\\"/var/lib/docker/etcd_backup\\" DT=$(date +%Y%m%d.%H%M%S) [[ ! -d ${BACKUP_DIR} ]] &amp;&amp; mkdir -p ${BACKUP_DIR} find ${BACKUP_DIR} -name \\"*.db\\" -mtime +7 -exec rm -f {} \\\\; ETCDCTL_API=3 /usr/local/bin/etcdctl --endpoints=https://127.0.0.1:2379 \\\\ --cacert=\\"${ETCD_CA_CERT}\\" --cert=\\"${ETCD_CERT}\\" --key=\\"${ETCD_KEY}\\" \\\\ snapshot save \\"${BACKUP_DIR}/etcd-snapshot-${DT}.db\\" echo \\"Etcd backup success, backup file: ${BACKUP_DIR}/etcd-snapshot-${DT}.db, \\\\ file size: $(du -sh ${BACKUP_DIR}/etcd-snapshot-${DT}.db |awk \'{print $1}\')\\" echo 添加cron定时任务 crontab -e 0 */1 * * * /bin/bash /opt/etcd_backup.sh &gt;&gt;/opt/log-backup-etcd.log 2&gt;&amp;1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-03T16:18:47.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"etcd"}],["meta",{"property":"article:modified_time","content":"2023-08-03T16:18:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Etcd 备份恢复\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-03T16:18:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"Etcd 备份","slug":"etcd-备份","link":"#etcd-备份","children":[]},{"level":2,"title":"Etcd 恢复","slug":"etcd-恢复","link":"#etcd-恢复","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1691079527000,"updatedTime":1691079527000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":1.79,"words":536},"filePathRelative":"cloudnative/stability/dr-br/etcd-backup-restore.md","localizedDate":"2023年8月3日","excerpt":"<h1> Etcd 备份恢复</h1>\\n<h2> Etcd 备份</h2>\\n<ol>\\n<li>\\n<p>创建备份脚本<code>/opt/etcd_backup.sh</code></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/usr/bin/env bash</span>\\n<span class=\\"token comment\\">#</span>\\n<span class=\\"token comment\\"># Etcd backup</span>\\n \\n<span class=\\"token builtin class-name\\">set</span> <span class=\\"token parameter variable\\">-e</span>\\n \\n<span class=\\"token assign-left variable\\">ETCD_CA_CERT</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/etc/kubernetes/pki/etcd/ca.crt\\"</span>\\n<span class=\\"token assign-left variable\\">ETCD_CERT</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/etc/kubernetes/pki/etcd/server.crt\\"</span>\\n<span class=\\"token assign-left variable\\">ETCD_KEY</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/etc/kubernetes/pki/etcd/server.key\\"</span>\\n<span class=\\"token assign-left variable\\">BACKUP_DIR</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/var/lib/docker/etcd_backup\\"</span>\\n<span class=\\"token assign-left variable\\">DT</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">date</span> +%Y%m%d.%H%M%S<span class=\\"token variable\\">)</span></span>\\n \\n<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span> <span class=\\"token operator\\">!</span> <span class=\\"token parameter variable\\">-d</span> <span class=\\"token variable\\">${BACKUP_DIR}</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token function\\">mkdir</span> <span class=\\"token parameter variable\\">-p</span> <span class=\\"token variable\\">${BACKUP_DIR}</span>\\n<span class=\\"token function\\">find</span> <span class=\\"token variable\\">${BACKUP_DIR}</span> <span class=\\"token parameter variable\\">-name</span> <span class=\\"token string\\">\\"*.db\\"</span> <span class=\\"token parameter variable\\">-mtime</span> +7 <span class=\\"token parameter variable\\">-exec</span> <span class=\\"token function\\">rm</span> <span class=\\"token parameter variable\\">-f</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span> <span class=\\"token punctuation\\">\\\\</span><span class=\\"token punctuation\\">;</span>\\n \\n<span class=\\"token assign-left variable\\">ETCDCTL_API</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">3</span> /usr/local/bin/etcdctl <span class=\\"token parameter variable\\">--endpoints</span><span class=\\"token operator\\">=</span>https://127.0.0.1:2379 <span class=\\"token punctuation\\">\\\\</span>\\n  <span class=\\"token parameter variable\\">--cacert</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">${ETCD_CA_CERT}</span>\\"</span> <span class=\\"token parameter variable\\">--cert</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">${ETCD_CERT}</span>\\"</span> <span class=\\"token parameter variable\\">--key</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">${ETCD_KEY}</span>\\"</span> <span class=\\"token punctuation\\">\\\\</span>\\n  snapshot save <span class=\\"token string\\">\\"<span class=\\"token variable\\">${BACKUP_DIR}</span>/etcd-snapshot-<span class=\\"token variable\\">${DT}</span>.db\\"</span>\\n \\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Etcd backup success, backup file: <span class=\\"token variable\\">${BACKUP_DIR}</span>/etcd-snapshot-<span class=\\"token variable\\">${DT}</span>.db, \\\\\\n  file size: <span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">du</span> <span class=\\"token parameter variable\\">-sh</span> $<span class=\\"token punctuation\\">{</span>BACKUP_DIR<span class=\\"token punctuation\\">}</span>/etcd-snapshot-$<span class=\\"token punctuation\\">{</span>DT<span class=\\"token punctuation\\">}</span>.db <span class=\\"token operator\\">|</span><span class=\\"token function\\">awk</span> <span class=\\"token string\\">\'{print $1}\'</span><span class=\\"token variable\\">)</span></span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>添加cron定时任务 <code>crontab -e</code></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">0</span> */1 * * * /bin/bash /opt/etcd_backup.sh <span class=\\"token operator\\">&gt;&gt;</span>/opt/log-backup-etcd.log <span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">2</span>&gt;</span><span class=\\"token file-descriptor important\\">&amp;1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{"author":"Clay"},"autoDesc":true}');export{a as data};
