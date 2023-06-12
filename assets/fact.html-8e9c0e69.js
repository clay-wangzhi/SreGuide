import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as u}from"./app-e46907be.js";const t={},s=u(`<h1 id="_5-2-fact变量" tabindex="-1"><a class="header-anchor" href="#_5-2-fact变量" aria-hidden="true">#</a> 5.2 Fact变量</h1><h2 id="_1-fact简介" tabindex="-1"><a class="header-anchor" href="#_1-fact简介" aria-hidden="true">#</a> 1 fact简介</h2><p>为了让Ansible更了解目标节点，可以让它去收集目标节点的信息，比如获取对方的主机名、系统版本、IP地址或其它网卡信息、分区挂载信息等等。在Ansible中，收集到的这些节点信息称为Facts。</p><p>有了这些信息，用户可以更好的控制管理节点，比如当IP地址为xxx时就怎样怎样，当系统是CentOS 6时怎样怎样，是CentOS 7时怎样怎样，等等。</p><p>有这些信息当然好，但是收集这些信息是有代价的，而且代价很大：因为要收集的信息量很大，所以收集的过程非常慢。所以，如果在playbook中用不上这些信息时，应当禁用收集行为，这也是一个非常有效的效率优化手段。</p><p>ansible两个模块叫setup、gather_facts，用于获取远程主机的相关信息，并可以将这些信息作为变量在playbook里进行调用。而setup模块获取这些信息的方法就是依赖于fact。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ansible localhost -m setup
$ ansible localhost -m gather_facts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>简单说明一下setup模块和gather_facts模块的区别。setup模块是早就存在的模块，而gather_facts模块是Ansible 2.8才提供的，它是一个二次封装的模块，内部很可能就是调用setup模块，但为何还要提供gather_facts模块呢？也许原因就在于gather_facts模块相比setup模块多的一个功能：并行收集多个节点的信息，而且在探测到要收集多个节点信息时会自动并行。</p><p>既然setup和gather_facts是模块，那么它们也可以在playbook中当作任务来执行。但是playbook专门为此提供了一个play级别的指令：gather_facts。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible test -m setup
10.1.61.187 | SUCCESS =&gt; {
    &quot;ansible_facts&quot;: {
        &quot;ansible_all_ipv4_addresses&quot;: [
            &quot;10.1.61.187&quot;
        ],
        &quot;ansible_all_ipv6_addresses&quot;: [
            &quot;fe80::f816:3eff:fe4f:6611&quot;
        ],
        &quot;ansible_apparmor&quot;: {
            &quot;status&quot;: &quot;disabled&quot;
        },
        &quot;ansible_architecture&quot;: &quot;x86_64&quot;,
        &quot;ansible_bios_date&quot;: &quot;04/01/2014&quot;,
        &quot;ansible_bios_version&quot;: &quot;Ubuntu-1.8.2-1ubuntu1~cloud0&quot;,
        
        ...output omitted...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setup获取的这些信息，都是可用于该主机的变量。</p><h2 id="_2-自定义fact-local-facts" tabindex="-1"><a class="header-anchor" href="#_2-自定义fact-local-facts" aria-hidden="true">#</a> 2 自定义fact(Local Facts)</h2><h3 id="_2-1-手动设置fact" tabindex="-1"><a class="header-anchor" href="#_2-1-手动设置fact" aria-hidden="true">#</a> 2.1 手动设置fact</h3><p>ansible除了能获取到预定义的fact的内容,还支持手动为某个主机定制fact。称之为本地fact。本地fact默认存放于被控端的<code>/etc/ansible/facts.d</code>目录下，如果文件为<code>ini</code>格式或者<code>json</code>格式，ansible会自动识别。以这种形式加载的fact是key为<code>ansible_local</code>的特殊变量。</p><p>下面是一个简单的示例，在ansibler主控端定义一个<code>ini</code>格式的custom.fact文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[general]
package = httpd
service = httpd
state = started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们编写一个playbook文件名为setup_facts.yml内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: Install remote facts
  hosts: test
  vars: 
    remote_dir: /etc/ansible/facts.d
    facts_file: custom.fact
  tasks:
    - name: Create the remote directory
      file:
        state: directory
        recurse: yes
        path: &quot;{{ remote_dir }}&quot;
    - name: Install the new facts
      copy:
        src: &quot;{{ facts_file }}&quot;
        dest: &quot;{{ remote_dir }}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行该playbook，完成facts的推送：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible-playbook setup_facts.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，我们可以在被控端看到新的facts已经生成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible test -m setup        
10.1.61.187 | SUCCESS =&gt; {
    &quot;ansible_facts&quot;: {
    
        ...output omitted...
        
        &quot;ansible_local&quot;: {
            &quot;custom&quot;: {
                &quot;general&quot;: {
                    &quot;package&quot;: &quot;httpd&quot;,
                    &quot;service&quot;: &quot;httpd&quot;,
                    &quot;state&quot;: &quot;started&quot;
                }
            }
        },

        ...output omitted...
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以写一个简单的playbook来使用这些facts：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: Install Apache and starts the service
  hosts: test
  tasks:
    - name: Install the required package
      yum: 
        name: &quot;{{ ansible_facts.ansible_local.custom.general.package }}&quot;
        state: latest
    - name: Start the service
      service: 
        name: &quot;{{ ansible_facts.ansible_local.custom.general.service }}&quot;
        state: &quot;{{ ansible_facts.ansible_local.custom.general.state }}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-使用set-fact模块定义新的变量" tabindex="-1"><a class="header-anchor" href="#_2-2-使用set-fact模块定义新的变量" aria-hidden="true">#</a> 2.2 使用set_fact模块定义新的变量</h3><p><code>set_fact</code>模块可以自定义facts，这些自定义的facts可以通过template或者变量的方式在playbook中使用。如果你想要获取一个进程使用的内存的百分比，则必须通过set_fact来进行计算之后得出其值，并将其值在playbook中引用。</p><p>下面是一个set_fact模块的应用示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: set_fact example
  hosts: test
  tasks:
    - name: Calculate InnoDB buffer pool size
      set_fact: innodb_buffer_pool_size_mb=&quot;{{ ansible_memtotal_mb / 2 |int }}&quot;
      
    - debug: var=innodb_buffer_pool_size_mb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行playbook如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible-playbook set_fact_ex.yaml 

PLAY [set_fact example] *****************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Calculate InnoDB buffer pool size] ************************************************************************************************************************************
ok: [10.1.61.187]

TASK [debug] ****************************************************************************************************************************************************************
ok: [10.1.61.187] =&gt; {
    &quot;innodb_buffer_pool_size_mb&quot;: &quot;3911.0&quot;
}

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这种设置方式只在当前playbook当中有效</p></blockquote><h2 id="_3-手动采集fact" tabindex="-1"><a class="header-anchor" href="#_3-手动采集fact" aria-hidden="true">#</a> 3 手动采集fact</h2><p>收集到目标节点信息之后，各信息都保存在一个名为ansible_facts的变量中，所以可以直接debug去查看这个变量里保存了什么东西，也即收集了目标节点的哪些信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: info in ansible_facts
  debug:
    var: ansible_facts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外也可以直接使用下面的方式来查看Facts中收集了哪些信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ansible localhost -m &#39;setup&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是收集到的部分Facts信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>localhost | SUCCESS =&gt; {
    &quot;ansible_facts&quot;: {
        &quot;ansible_all_ipv4_addresses&quot;: [
            &quot;192.168.135.234&quot;
        ],
        &quot;ansible_all_ipv6_addresses&quot;: [
            &quot;fe80::c38:ea5:1598:8169&quot;
        ],
        &quot;ansible_apparmor&quot;: {
            &quot;status&quot;: &quot;disabled&quot;
        },
        &quot;ansible_architecture&quot;: &quot;x86_64&quot;,
        &quot;ansible_bios_date&quot;: &quot;04/01/2014&quot;,
        &quot;ansible_bios_version&quot;: &quot;1.11.0-2.el7&quot;,
        &quot;ansible_cmdline&quot;: {
            &quot;BOOT_IMAGE&quot;: &quot;/vmlinuz-3.10.0-957.el7.x86_64&quot;,
            &quot;biosdevname&quot;: &quot;0&quot;,
            &quot;crashkernel&quot;: &quot;auto&quot;,
            &quot;net.ifnames&quot;: &quot;0&quot;,
            &quot;quiet&quot;: true,
            &quot;rhgb&quot;: true,
            &quot;ro&quot;: true,
            &quot;root&quot;: &quot;UUID=120cca73-ddab-4aac-b751-7421263b55ad&quot;
        },
        &quot;ansible_date_time&quot;: {
            &quot;date&quot;: &quot;2021-03-16&quot;,
            &quot;day&quot;: &quot;16&quot;,
            &quot;epoch&quot;: &quot;1615886206&quot;,
            &quot;hour&quot;: &quot;17&quot;,
            &quot;iso8601&quot;: &quot;2021-03-16T09:16:46Z&quot;,
            &quot;iso8601_basic&quot;: &quot;20210316T171646952201&quot;,
            &quot;iso8601_basic_short&quot;: &quot;20210316T171646&quot;,
            &quot;iso8601_micro&quot;: &quot;2021-03-16T09:16:46.952201Z&quot;,
            &quot;minute&quot;: &quot;16&quot;,
            &quot;month&quot;: &quot;03&quot;,
            &quot;second&quot;: &quot;46&quot;,
            &quot;time&quot;: &quot;17:16:46&quot;,
            &quot;tz&quot;: &quot;CST&quot;,
            &quot;tz_offset&quot;: &quot;+0800&quot;,
            &quot;weekday&quot;: &quot;Tuesday&quot;,
            &quot;weekday_number&quot;: &quot;2&quot;,
            &quot;weeknumber&quot;: &quot;11&quot;,
            &quot;year&quot;: &quot;2021&quot;
        },
        &quot;ansible_default_ipv4&quot;: {
            &quot;address&quot;: &quot;192.168.135.234&quot;,
            &quot;alias&quot;: &quot;eth0&quot;,
            &quot;broadcast&quot;: &quot;192.168.135.255&quot;,
            &quot;gateway&quot;: &quot;192.168.135.254&quot;,
            &quot;interface&quot;: &quot;eth0&quot;,
            &quot;macaddress&quot;: &quot;fa:16:3e:7e:9b:47&quot;,
            &quot;mtu&quot;: 1500,
            &quot;netmask&quot;: &quot;255.255.255.0&quot;,
            &quot;network&quot;: &quot;192.168.135.0&quot;,
            &quot;type&quot;: &quot;ether&quot;
        },
        &quot;ansible_default_ipv6&quot;: {},
        &quot;ansible_device_links&quot;: {
            &quot;ids&quot;: {
                &quot;sr0&quot;: [
                    &quot;ata-QEMU_DVD-ROM_QM00002&quot;
                ],
                &quot;sr1&quot;: [
                    &quot;ata-QEMU_DVD-ROM_QM00004&quot;
                ],
                &quot;vda&quot;: [
                    &quot;virtio-c1672133-7ae6-4318-8&quot;
                ],
                &quot;vda1&quot;: [
                    &quot;virtio-c1672133-7ae6-4318-8-part1&quot;
                ],
                &quot;vda2&quot;: [
                    &quot;virtio-c1672133-7ae6-4318-8-part2&quot;
                ]
            },
            &quot;labels&quot;: {
                &quot;sr1&quot;: [
                    &quot;config-2&quot;
                ]
            },
            &quot;masters&quot;: {},
            &quot;uuids&quot;: {
                &quot;sr1&quot;: [
                    &quot;2021-03-08-14-55-38-00&quot;
                ],
                &quot;vda1&quot;: [
                    &quot;fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88&quot;
                ],
                &quot;vda2&quot;: [
                    &quot;120cca73-ddab-4aac-b751-7421263b55ad&quot;
                ]
            }
        },
        &quot;ansible_devices&quot;: {
            &quot;sr0&quot;: {
                &quot;holders&quot;: [],
                &quot;host&quot;: &quot;&quot;,
                &quot;links&quot;: {
                    &quot;ids&quot;: [
                        &quot;ata-QEMU_DVD-ROM_QM00002&quot;
                    ],
                    &quot;labels&quot;: [],
                    &quot;masters&quot;: [],
                    &quot;uuids&quot;: []
                },
                &quot;model&quot;: &quot;QEMU DVD-ROM&quot;,
                &quot;partitions&quot;: {},
                &quot;removable&quot;: &quot;1&quot;,
                &quot;rotational&quot;: &quot;1&quot;,
                &quot;sas_address&quot;: null,
                &quot;sas_device_handle&quot;: null,
                &quot;scheduler_mode&quot;: &quot;deadline&quot;,
                &quot;sectors&quot;: &quot;2097151&quot;,
                &quot;sectorsize&quot;: &quot;512&quot;,
                &quot;size&quot;: &quot;1024.00 MB&quot;,
                &quot;support_discard&quot;: &quot;0&quot;,
                &quot;vendor&quot;: &quot;QEMU&quot;,
                &quot;virtual&quot;: 1
            },
            &quot;sr1&quot;: {
                &quot;holders&quot;: [],
                &quot;host&quot;: &quot;&quot;,
                &quot;links&quot;: {
                    &quot;ids&quot;: [
                        &quot;ata-QEMU_DVD-ROM_QM00004&quot;
                    ],
                    &quot;labels&quot;: [
                        &quot;config-2&quot;
                    ],
                    &quot;masters&quot;: [],
                    &quot;uuids&quot;: [
                        &quot;2021-03-08-14-55-38-00&quot;
                    ]
                },
                &quot;model&quot;: &quot;QEMU DVD-ROM&quot;,
                &quot;partitions&quot;: {},
                &quot;removable&quot;: &quot;1&quot;,
                &quot;rotational&quot;: &quot;1&quot;,
                &quot;sas_address&quot;: null,
                &quot;sas_device_handle&quot;: null,
                &quot;scheduler_mode&quot;: &quot;deadline&quot;,
                &quot;sectors&quot;: &quot;964&quot;,
                &quot;sectorsize&quot;: &quot;2048&quot;,
                &quot;size&quot;: &quot;482.00 KB&quot;,
                &quot;support_discard&quot;: &quot;0&quot;,
                &quot;vendor&quot;: &quot;QEMU&quot;,
                &quot;virtual&quot;: 1
            },
            &quot;vda&quot;: {
                &quot;holders&quot;: [],
                &quot;host&quot;: &quot;&quot;,
                &quot;links&quot;: {
                    &quot;ids&quot;: [
                        &quot;virtio-c1672133-7ae6-4318-8&quot;
                    ],
                    &quot;labels&quot;: [],
                    &quot;masters&quot;: [],
                    &quot;uuids&quot;: []
                },
                &quot;model&quot;: null,
                &quot;partitions&quot;: {
                    &quot;vda1&quot;: {
                        &quot;holders&quot;: [],
                        &quot;links&quot;: {
                            &quot;ids&quot;: [
                                &quot;virtio-c1672133-7ae6-4318-8-part1&quot;
                            ],
                            &quot;labels&quot;: [],
                            &quot;masters&quot;: [],
                            &quot;uuids&quot;: [
                                &quot;fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88&quot;
                            ]
                        },
                        &quot;sectors&quot;: &quot;1024000&quot;,
                        &quot;sectorsize&quot;: 512,
                        &quot;size&quot;: &quot;500.00 MB&quot;,
                        &quot;start&quot;: &quot;2048&quot;,
                        &quot;uuid&quot;: &quot;fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88&quot;
                    },
                    &quot;vda2&quot;: {
                        &quot;holders&quot;: [],
                        &quot;links&quot;: {
                            &quot;ids&quot;: [
                                &quot;virtio-c1672133-7ae6-4318-8-part2&quot;
                            ],
                            &quot;labels&quot;: [],
                            &quot;masters&quot;: [],
                            &quot;uuids&quot;: [
                                &quot;120cca73-ddab-4aac-b751-7421263b55ad&quot;
                            ]
                        },
                        &quot;sectors&quot;: &quot;208689152&quot;,
                        &quot;sectorsize&quot;: 512,
                        &quot;size&quot;: &quot;99.51 GB&quot;,
                        &quot;start&quot;: &quot;1026048&quot;,
                        &quot;uuid&quot;: &quot;120cca73-ddab-4aac-b751-7421263b55ad&quot;
                    }
                },
                &quot;removable&quot;: &quot;0&quot;,
                &quot;rotational&quot;: &quot;1&quot;,
                &quot;sas_address&quot;: null,
                &quot;sas_device_handle&quot;: null,
                &quot;scheduler_mode&quot;: &quot;mq-deadline&quot;,
                &quot;sectors&quot;: &quot;209715200&quot;,
                &quot;sectorsize&quot;: &quot;512&quot;,
                &quot;size&quot;: &quot;100.00 GB&quot;,
                &quot;support_discard&quot;: &quot;0&quot;,
                &quot;vendor&quot;: &quot;0x1af4&quot;,
                &quot;virtual&quot;: 1
            }
        },
        &quot;ansible_distribution&quot;: &quot;CentOS&quot;,
        &quot;ansible_distribution_file_parsed&quot;: true,
        &quot;ansible_distribution_file_path&quot;: &quot;/etc/redhat-release&quot;,
        &quot;ansible_distribution_file_variety&quot;: &quot;RedHat&quot;,
        &quot;ansible_distribution_major_version&quot;: &quot;7&quot;,
        &quot;ansible_distribution_release&quot;: &quot;Core&quot;,
        &quot;ansible_distribution_version&quot;: &quot;7.6&quot;,
        &quot;ansible_dns&quot;: {
            &quot;nameservers&quot;: [
                &quot;202.96.209.5&quot;,
                &quot;114.114.114.114&quot;
            ],
            &quot;search&quot;: [
                &quot;openstacklocal&quot;
            ]
        },
        &quot;ansible_domain&quot;: &quot;&quot;,
        &quot;ansible_effective_group_id&quot;: 0,
        &quot;ansible_effective_user_id&quot;: 0,
        &quot;ansible_env&quot;: {
            &quot;CLASSPATH&quot;: &quot;.::/opt/jdk1.8.0_144/lib:/opt/jdk1.8.0_144/jre/lib&quot;,
            &quot;HISTCONTROL&quot;: &quot;ignoredups&quot;,
            &quot;HISTSIZE&quot;: &quot;1000&quot;,
            &quot;HOME&quot;: &quot;/root&quot;,
            &quot;HOSTNAME&quot;: &quot;host-192-168-135-234&quot;,
            &quot;JAVA_HOME&quot;: &quot;/opt/jdk1.8.0_144&quot;,
            &quot;JRE_HOME&quot;: &quot;/opt/jdk1.8.0_144/jre&quot;,
            &quot;LANG&quot;: &quot;en_US.UTF-8&quot;,
            &quot;LESSOPEN&quot;: &quot;||/usr/bin/lesspipe.sh %s&quot;,
            &quot;LOGNAME&quot;: &quot;root&quot;,
            &quot;LS_COLORS&quot;: &quot;rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.axa=01;36:*.oga=01;36:*.spx=01;36:*.xspf=01;36:&quot;,
            &quot;MAIL&quot;: &quot;/var/spool/mail/root&quot;,
            &quot;PATH&quot;: &quot;/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/opt/jdk1.8.0_144/bin:/opt/jdk1.8.0_144/jre/bin:/root/bin&quot;,
            &quot;PWD&quot;: &quot;/etc/ansible/playbooks&quot;,
            &quot;SHELL&quot;: &quot;/bin/bash&quot;,
            &quot;SHLVL&quot;: &quot;3&quot;,
            &quot;SSH_CLIENT&quot;: &quot;192.168.135.72 6220 22&quot;,
            &quot;SSH_CONNECTION&quot;: &quot;192.168.135.72 6220 192.168.135.234 22&quot;,
            &quot;SSH_TTY&quot;: &quot;/dev/pts/0&quot;,
            &quot;TERM&quot;: &quot;xterm&quot;,
            &quot;USER&quot;: &quot;root&quot;,
            &quot;XDG_RUNTIME_DIR&quot;: &quot;/run/user/0&quot;,
            &quot;XDG_SESSION_ID&quot;: &quot;5879&quot;,
            &quot;_&quot;: &quot;/usr/bin/python3&quot;
        },
        &quot;ansible_eth0&quot;: {
            &quot;active&quot;: true,
            &quot;device&quot;: &quot;eth0&quot;,
            &quot;features&quot;: {
                &quot;busy_poll&quot;: &quot;off [fixed]&quot;,
                &quot;fcoe_mtu&quot;: &quot;off [fixed]&quot;,
                &quot;generic_receive_offload&quot;: &quot;on&quot;,
                &quot;generic_segmentation_offload&quot;: &quot;on&quot;,
                &quot;highdma&quot;: &quot;on [fixed]&quot;,
                &quot;hw_tc_offload&quot;: &quot;off [fixed]&quot;,
                &quot;l2_fwd_offload&quot;: &quot;off [fixed]&quot;,
                &quot;large_receive_offload&quot;: &quot;off [fixed]&quot;,
                &quot;loopback&quot;: &quot;off [fixed]&quot;,
                &quot;netns_local&quot;: &quot;off [fixed]&quot;,
                &quot;ntuple_filters&quot;: &quot;off [fixed]&quot;,
                &quot;receive_hashing&quot;: &quot;off [fixed]&quot;,
                &quot;rx_all&quot;: &quot;off [fixed]&quot;,
                &quot;rx_checksumming&quot;: &quot;on [fixed]&quot;,
                &quot;rx_fcs&quot;: &quot;off [fixed]&quot;,
                &quot;rx_gro_hw&quot;: &quot;off [fixed]&quot;,
                &quot;rx_udp_tunnel_port_offload&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_filter&quot;: &quot;on [fixed]&quot;,
                &quot;rx_vlan_offload&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_stag_filter&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_stag_hw_parse&quot;: &quot;off [fixed]&quot;,
                &quot;scatter_gather&quot;: &quot;on&quot;,
                &quot;tcp_segmentation_offload&quot;: &quot;on&quot;,
                &quot;tx_checksum_fcoe_crc&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_ip_generic&quot;: &quot;on&quot;,
                &quot;tx_checksum_ipv4&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_ipv6&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_sctp&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksumming&quot;: &quot;on&quot;,
                &quot;tx_fcoe_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gre_csum_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gre_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gso_partial&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gso_robust&quot;: &quot;off [fixed]&quot;,
                &quot;tx_ipip_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_lockless&quot;: &quot;off [fixed]&quot;,
                &quot;tx_nocache_copy&quot;: &quot;off&quot;,
                &quot;tx_scatter_gather&quot;: &quot;on&quot;,
                &quot;tx_scatter_gather_fraglist&quot;: &quot;off [fixed]&quot;,
                &quot;tx_sctp_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_sit_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_tcp6_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_ecn_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_mangleid_segmentation&quot;: &quot;off&quot;,
                &quot;tx_tcp_segmentation&quot;: &quot;on&quot;,
                &quot;tx_udp_tnl_csum_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_udp_tnl_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_vlan_offload&quot;: &quot;off [fixed]&quot;,
                &quot;tx_vlan_stag_hw_insert&quot;: &quot;off [fixed]&quot;,
                &quot;udp_fragmentation_offload&quot;: &quot;on&quot;,
                &quot;vlan_challenged&quot;: &quot;off [fixed]&quot;
            },
            &quot;hw_timestamp_filters&quot;: [],
            &quot;ipv4&quot;: {
                &quot;address&quot;: &quot;192.168.135.234&quot;,
                &quot;broadcast&quot;: &quot;192.168.135.255&quot;,
                &quot;netmask&quot;: &quot;255.255.255.0&quot;,
                &quot;network&quot;: &quot;192.168.135.0&quot;
            },
            &quot;ipv6&quot;: [
                {
                    &quot;address&quot;: &quot;fe80::c38:ea5:1598:8169&quot;,
                    &quot;prefix&quot;: &quot;64&quot;,
                    &quot;scope&quot;: &quot;link&quot;
                }
            ],
            &quot;macaddress&quot;: &quot;fa:16:3e:7e:9b:47&quot;,
            &quot;module&quot;: &quot;virtio_net&quot;,
            &quot;mtu&quot;: 1500,
            &quot;pciid&quot;: &quot;virtio0&quot;,
            &quot;promisc&quot;: false,
            &quot;timestamping&quot;: [
                &quot;rx_software&quot;,
                &quot;software&quot;
            ],
            &quot;type&quot;: &quot;ether&quot;
        },
        &quot;ansible_fibre_channel_wwn&quot;: [],
        &quot;ansible_fips&quot;: false,
        &quot;ansible_form_factor&quot;: &quot;Other&quot;,
        &quot;ansible_fqdn&quot;: &quot;host-192-168-135-234&quot;,
        &quot;ansible_hostname&quot;: &quot;host-192-168-135-234&quot;,
        &quot;ansible_hostnqn&quot;: &quot;&quot;,
        &quot;ansible_interfaces&quot;: [
            &quot;lo&quot;,
            &quot;eth0&quot;
        ],
        &quot;ansible_is_chroot&quot;: false,
        &quot;ansible_iscsi_iqn&quot;: &quot;&quot;,
        &quot;ansible_kernel&quot;: &quot;3.10.0-957.el7.x86_64&quot;,
        &quot;ansible_kernel_version&quot;: &quot;#1 SMP Thu Nov 8 23:39:32 UTC 2018&quot;,
        &quot;ansible_lo&quot;: {
            &quot;active&quot;: true,
            &quot;device&quot;: &quot;lo&quot;,
            &quot;features&quot;: {
                &quot;busy_poll&quot;: &quot;off [fixed]&quot;,
                &quot;fcoe_mtu&quot;: &quot;off [fixed]&quot;,
                &quot;generic_receive_offload&quot;: &quot;on&quot;,
                &quot;generic_segmentation_offload&quot;: &quot;on&quot;,
                &quot;highdma&quot;: &quot;on [fixed]&quot;,
                &quot;hw_tc_offload&quot;: &quot;off [fixed]&quot;,
                &quot;l2_fwd_offload&quot;: &quot;off [fixed]&quot;,
                &quot;large_receive_offload&quot;: &quot;off [fixed]&quot;,
                &quot;loopback&quot;: &quot;on [fixed]&quot;,
                &quot;netns_local&quot;: &quot;on [fixed]&quot;,
                &quot;ntuple_filters&quot;: &quot;off [fixed]&quot;,
                &quot;receive_hashing&quot;: &quot;off [fixed]&quot;,
                &quot;rx_all&quot;: &quot;off [fixed]&quot;,
                &quot;rx_checksumming&quot;: &quot;on [fixed]&quot;,
                &quot;rx_fcs&quot;: &quot;off [fixed]&quot;,
                &quot;rx_gro_hw&quot;: &quot;off [fixed]&quot;,
                &quot;rx_udp_tunnel_port_offload&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_filter&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_offload&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_stag_filter&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_stag_hw_parse&quot;: &quot;off [fixed]&quot;,
                &quot;scatter_gather&quot;: &quot;on&quot;,
                &quot;tcp_segmentation_offload&quot;: &quot;on&quot;,
                &quot;tx_checksum_fcoe_crc&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_ip_generic&quot;: &quot;on [fixed]&quot;,
                &quot;tx_checksum_ipv4&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_ipv6&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_sctp&quot;: &quot;on [fixed]&quot;,
                &quot;tx_checksumming&quot;: &quot;on&quot;,
                &quot;tx_fcoe_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gre_csum_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gre_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gso_partial&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gso_robust&quot;: &quot;off [fixed]&quot;,
                &quot;tx_ipip_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_lockless&quot;: &quot;on [fixed]&quot;,
                &quot;tx_nocache_copy&quot;: &quot;off [fixed]&quot;,
                &quot;tx_scatter_gather&quot;: &quot;on [fixed]&quot;,
                &quot;tx_scatter_gather_fraglist&quot;: &quot;on [fixed]&quot;,
                &quot;tx_sctp_segmentation&quot;: &quot;on&quot;,
                &quot;tx_sit_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_tcp6_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_ecn_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_mangleid_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_segmentation&quot;: &quot;on&quot;,
                &quot;tx_udp_tnl_csum_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_udp_tnl_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_vlan_offload&quot;: &quot;off [fixed]&quot;,
                &quot;tx_vlan_stag_hw_insert&quot;: &quot;off [fixed]&quot;,
                &quot;udp_fragmentation_offload&quot;: &quot;on&quot;,
                &quot;vlan_challenged&quot;: &quot;on [fixed]&quot;
            },
            &quot;hw_timestamp_filters&quot;: [],
            &quot;ipv4&quot;: {
                &quot;address&quot;: &quot;127.0.0.1&quot;,
                &quot;broadcast&quot;: &quot;&quot;,
                &quot;netmask&quot;: &quot;255.0.0.0&quot;,
                &quot;network&quot;: &quot;127.0.0.0&quot;
            },
            &quot;ipv6&quot;: [
                {
                    &quot;address&quot;: &quot;::1&quot;,
                    &quot;prefix&quot;: &quot;128&quot;,
                    &quot;scope&quot;: &quot;host&quot;
                }
            ],
            &quot;mtu&quot;: 65536,
            &quot;promisc&quot;: false,
            &quot;timestamping&quot;: [
                &quot;rx_software&quot;,
                &quot;software&quot;
            ],
            &quot;type&quot;: &quot;loopback&quot;
        },
        &quot;ansible_local&quot;: {},
        &quot;ansible_lsb&quot;: {},
        &quot;ansible_machine&quot;: &quot;x86_64&quot;,
        &quot;ansible_machine_id&quot;: &quot;5da37d186bbc4fab946458f383820cc2&quot;,
        &quot;ansible_memfree_mb&quot;: 5793,
        &quot;ansible_memory_mb&quot;: {
            &quot;nocache&quot;: {
                &quot;free&quot;: 6652,
                &quot;used&quot;: 1150
            },
            &quot;real&quot;: {
                &quot;free&quot;: 5793,
                &quot;total&quot;: 7802,
                &quot;used&quot;: 2009
            },
            &quot;swap&quot;: {
                &quot;cached&quot;: 0,
                &quot;free&quot;: 0,
                &quot;total&quot;: 0,
                &quot;used&quot;: 0
            }
        },
        &quot;ansible_memtotal_mb&quot;: 7802,
        &quot;ansible_mounts&quot;: [
            {
                &quot;block_available&quot;: 25154087,
                &quot;block_size&quot;: 4096,
                &quot;block_total&quot;: 26073407,
                &quot;block_used&quot;: 919320,
                &quot;device&quot;: &quot;/dev/vda2&quot;,
                &quot;fstype&quot;: &quot;xfs&quot;,
                &quot;inode_available&quot;: 52034972,
                &quot;inode_total&quot;: 52172288,
                &quot;inode_used&quot;: 137316,
                &quot;mount&quot;: &quot;/&quot;,
                &quot;options&quot;: &quot;rw,relatime,attr2,inode64,noquota&quot;,
                &quot;size_available&quot;: 103031140352,
                &quot;size_total&quot;: 106796675072,
                &quot;uuid&quot;: &quot;120cca73-ddab-4aac-b751-7421263b55ad&quot;
            },
            {
                &quot;block_available&quot;: 93950,
                &quot;block_size&quot;: 4096,
                &quot;block_total&quot;: 127145,
                &quot;block_used&quot;: 33195,
                &quot;device&quot;: &quot;/dev/vda1&quot;,
                &quot;fstype&quot;: &quot;xfs&quot;,
                &quot;inode_available&quot;: 255673,
                &quot;inode_total&quot;: 256000,
                &quot;inode_used&quot;: 327,
                &quot;mount&quot;: &quot;/boot&quot;,
                &quot;options&quot;: &quot;rw,relatime,attr2,inode64,noquota&quot;,
                &quot;size_available&quot;: 384819200,
                &quot;size_total&quot;: 520785920,
                &quot;uuid&quot;: &quot;fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88&quot;
            }
        ],
        &quot;ansible_nodename&quot;: &quot;host-192-168-135-234&quot;,
        &quot;ansible_os_family&quot;: &quot;RedHat&quot;,
        &quot;ansible_pkg_mgr&quot;: &quot;yum&quot;,
        &quot;ansible_proc_cmdline&quot;: {
            &quot;BOOT_IMAGE&quot;: &quot;/vmlinuz-3.10.0-957.el7.x86_64&quot;,
            &quot;biosdevname&quot;: [
                &quot;0&quot;,
                &quot;0&quot;,
                &quot;0&quot;
            ],
            &quot;crashkernel&quot;: &quot;auto&quot;,
            &quot;net.ifnames&quot;: [
                &quot;0&quot;,
                &quot;0&quot;,
                &quot;0&quot;
            ],
            &quot;quiet&quot;: true,
            &quot;rhgb&quot;: true,
            &quot;ro&quot;: true,
            &quot;root&quot;: &quot;UUID=120cca73-ddab-4aac-b751-7421263b55ad&quot;
        },
        &quot;ansible_processor&quot;: [
            &quot;0&quot;,
            &quot;GenuineIntel&quot;,
            &quot;QEMU Virtual CPU version (cpu64-rhel6)&quot;,
            &quot;1&quot;,
            &quot;GenuineIntel&quot;,
            &quot;QEMU Virtual CPU version (cpu64-rhel6)&quot;,
            &quot;2&quot;,
            &quot;GenuineIntel&quot;,
            &quot;QEMU Virtual CPU version (cpu64-rhel6)&quot;,
            &quot;3&quot;,
            &quot;GenuineIntel&quot;,
            &quot;QEMU Virtual CPU version (cpu64-rhel6)&quot;
        ],
        &quot;ansible_processor_cores&quot;: 1,
        &quot;ansible_processor_count&quot;: 4,
        &quot;ansible_processor_threads_per_core&quot;: 1,
        &quot;ansible_processor_vcpus&quot;: 4,
        &quot;ansible_product_name&quot;: &quot;ArStack&quot;,
        &quot;ansible_product_serial&quot;: &quot;ed734a0c-5e92-45e4-8491-1f2882a28b98&quot;,
        &quot;ansible_product_uuid&quot;: &quot;E9D04AFD-381C-4EF2-8523-A5F2177334A9&quot;,
        &quot;ansible_product_version&quot;: &quot;2020.5.15-1.el7.centos&quot;,
        &quot;ansible_python&quot;: {
            &quot;executable&quot;: &quot;/usr/bin/python3&quot;,
            &quot;has_sslcontext&quot;: true,
            &quot;type&quot;: &quot;cpython&quot;,
            &quot;version&quot;: {
                &quot;major&quot;: 3,
                &quot;micro&quot;: 8,
                &quot;minor&quot;: 6,
                &quot;releaselevel&quot;: &quot;final&quot;,
                &quot;serial&quot;: 0
            },
            &quot;version_info&quot;: [
                3,
                6,
                8,
                &quot;final&quot;,
                0
            ]
        },
        &quot;ansible_python_version&quot;: &quot;3.6.8&quot;,
        &quot;ansible_real_group_id&quot;: 0,
        &quot;ansible_real_user_id&quot;: 0,
        &quot;ansible_selinux&quot;: {
            &quot;status&quot;: &quot;Missing selinux Python library&quot;
        },
        &quot;ansible_selinux_python_present&quot;: false,
        &quot;ansible_service_mgr&quot;: &quot;systemd&quot;,
        &quot;ansible_ssh_host_key_ecdsa_public&quot;: &quot;AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBNxkCyohIHmaY5FLaLU4NRenQ6QE9qcjzbs87lvJhhH7TpWKHw3/NOVLks1amivsFJ1CQsgzk+XkU/YLfDFGNRo=&quot;,
        &quot;ansible_ssh_host_key_ed25519_public&quot;: &quot;AAAAC3NzaC1lZDI1NTE5AAAAILGRRrB9EPLkKsnOkyTzCpIyfWuIPEh7Qy9l2H0O+k4U&quot;,
        &quot;ansible_ssh_host_key_rsa_public&quot;: &quot;AAAAB3NzaC1yc2EAAAADAQABAAABAQDXqv9l/aw5jmEeKMRIVCUSUCpAPSUYyiVzfe7MNGDJ/Wd/ZHBMScAKgPq31z5OXJBpzDzIULZ5Di3WwmIdRHU6f4+PQ7E2LHQN4SDQvk7Flz7ivUv/aGtwUft929llVyT7/jrVFzWeR3ABtc6Roux2UMwWZANDwGWLkv+R6qluFNZ4yGTmYr7i/WTa0IXqI0AgZbAjGcSxqwGpgC7+NW8UVn975sz2pBRgCz9PG0mTWLKjcpESPpeypX0D0liq3rkwCjmU3OutwrTOYX1Di5n9miufUvZeSauWfska++t8xSYcOvbkzWidCOWOYtmx6VqrbKSSQiEDAbWJipIGcX+T&quot;,
        &quot;ansible_swapfree_mb&quot;: 0,
        &quot;ansible_swaptotal_mb&quot;: 0,
        &quot;ansible_system&quot;: &quot;Linux&quot;,
        &quot;ansible_system_capabilities&quot;: [
            &quot;cap_chown&quot;,
            &quot;cap_dac_override&quot;,
            &quot;cap_dac_read_search&quot;,
            &quot;cap_fowner&quot;,
            &quot;cap_fsetid&quot;,
            &quot;cap_kill&quot;,
            &quot;cap_setgid&quot;,
            &quot;cap_setuid&quot;,
            &quot;cap_setpcap&quot;,
            &quot;cap_linux_immutable&quot;,
            &quot;cap_net_bind_service&quot;,
            &quot;cap_net_broadcast&quot;,
            &quot;cap_net_admin&quot;,
            &quot;cap_net_raw&quot;,
            &quot;cap_ipc_lock&quot;,
            &quot;cap_ipc_owner&quot;,
            &quot;cap_sys_module&quot;,
            &quot;cap_sys_rawio&quot;,
            &quot;cap_sys_chroot&quot;,
            &quot;cap_sys_ptrace&quot;,
            &quot;cap_sys_pacct&quot;,
            &quot;cap_sys_admin&quot;,
            &quot;cap_sys_boot&quot;,
            &quot;cap_sys_nice&quot;,
            &quot;cap_sys_resource&quot;,
            &quot;cap_sys_time&quot;,
            &quot;cap_sys_tty_config&quot;,
            &quot;cap_mknod&quot;,
            &quot;cap_lease&quot;,
            &quot;cap_audit_write&quot;,
            &quot;cap_audit_control&quot;,
            &quot;cap_setfcap&quot;,
            &quot;cap_mac_override&quot;,
            &quot;cap_mac_admin&quot;,
            &quot;cap_syslog&quot;,
            &quot;35&quot;,
            &quot;36+ep&quot;
        ],
        &quot;ansible_system_capabilities_enforced&quot;: &quot;True&quot;,
        &quot;ansible_system_vendor&quot;: &quot;Huayun&quot;,
        &quot;ansible_uptime_seconds&quot;: 571792,
        &quot;ansible_user_dir&quot;: &quot;/root&quot;,
        &quot;ansible_user_gecos&quot;: &quot;root&quot;,
        &quot;ansible_user_gid&quot;: 0,
        &quot;ansible_user_id&quot;: &quot;root&quot;,
        &quot;ansible_user_shell&quot;: &quot;/bin/bash&quot;,
        &quot;ansible_user_uid&quot;: 0,
        &quot;ansible_userspace_architecture&quot;: &quot;x86_64&quot;,
        &quot;ansible_userspace_bits&quot;: &quot;64&quot;,
        &quot;ansible_virtualization_role&quot;: &quot;guest&quot;,
        &quot;ansible_virtualization_type&quot;: &quot;kvm&quot;,
        &quot;gather_subset&quot;: [
            &quot;all&quot;
        ],
        &quot;module_setup&quot;: true
    },
    &quot;changed&quot;: false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>收集到的信息量非常大，但很幸运，只需关注其中常见的几项即可，比如系统版本号、主机名、IP地址、分区信息、挂载信息。</p><p>有了这些信息，就可以去访问这些信息。由于它们都存放在ansible_facts变量中，所以通过这个变量去访问即可。但需要注意的是，对于收集到的绝大多数Facts信息，都有两种访问方式：</p><p>(1).一种是debug查看ansible_facts变量得到的结果，这也是真正存储这些信息的方式</p><p>(2).一种是命令行执行setup模块输出的方式</p><p>直接使用debug模块去输出ansible_facts变量，即可知如何访问这些信息。例如：</p><p>要获取eth0的ipv4地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>debug:
  var: ansible_facts.eth0.ipv4.address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再看在ansible命令行中执行setup模块的输出信息，会发现原本ansible_facts内几乎所有顶级的key现在都以ansible_开头，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>debug:
  var: ansible_all_ipv4_addresses
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>之所以可以这样直接访问，是因为Ansible将Facts中绝大多数的顶级key都注入到了Ansible自身维护的变量表(即hostvars)中，这样访问它们就方便的多。</p><p>至于采用何种方式访问，这无所谓，但是要知道的是，虽然绝大多数Facts信息都单独定义了变量，但并非所有(主要是那些可能产生歧义或冲突的变量)。</p><p>另外再多提醒一句，ansible_facts自身也是变量，它也保存在各自节点的hostvars变量中，所以也可以通过hostvars去访问Facts信息。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>debug:
  var: hostvars[&#39;logstash2&#39;][&#39;ansible_facts&#39;].eth0.ipv4.address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通常情况下，我们在运行play的时候，ansible会先尝试ssh到被控端采集fact，如果此时，被控制端的ssh还没有完全启动，就会导致整个play执行失败。这个时候，我们可以先显示的关闭fact采集，然后在task中通过wait_for等待被控端ssh端口被正常监听，再在task中使用setup模块来手动采集fact：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: Deploy apps
  hosts: webservers
  gather_facts: false
  tasks：
    - name: wait for ssh to be running
      local_action: wait_for port=22 host=&quot;{{ inventory_hostname }}&quot; search_regex=OpenSSH
    - name: gather facts
      setup:
    ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-启用fact缓存" tabindex="-1"><a class="header-anchor" href="#_4-启用fact缓存" aria-hidden="true">#</a> 4 启用fact缓存</h2><p>如果在play中需要引入fact，则可以开启fact缓存。fact缓存目前支持三种存储方式，分别为JSON、memcached、redis。</p><p>redis：缓存在redis服务中，直到目前(Ansible 2.9)为止，Ansible还不支持指定连接redis的端口、密码等</p><p>1.gathering：控制Ansible是否自动收集Facts，它有三种值：</p><p>(1).implicit：这是默认值，表示执行play时会自动收集Facts，除非显式指定gather_facts: false禁止收集</p><p>(2).explicit：不自动收集Facts，除非显式指定gather_facts: true开启收集</p><p>(3).smart：自动收集Facts，但如果已存在(缓存)则不重复收集</p><h3 id="_4-1-json文件fact缓存后端" tabindex="-1"><a class="header-anchor" href="#_4-1-json文件fact缓存后端" aria-hidden="true">#</a> 4.1 Json文件fact缓存后端</h3><p>使用JSON文件作为fact缓存后端的时候，ansible将会把采集的fact写入到控制主机的文件中。</p><p>ansible.cfg配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[defaults]
gathering = smart
#缓存时间，单位为秒
fact_caching_timeout = 86400    
fact_caching = jsonfile
#指定ansible包含fact的json文件位置，如果目录不存在，会自动创建
fact_caching_connection = /tmp/ansible_fact_cache    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-redis-fact缓存后端" tabindex="-1"><a class="header-anchor" href="#_4-2-redis-fact缓存后端" aria-hidden="true">#</a> 4.2 Redis fact缓存后端</h3><p>使用redis作为fact缓存后端，需要在控制主机上安装redis服务并保持运行。需要安装python操作redis的软件包。</p><p>ansible.cfg配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[defaults]
gathering = smart
fact_caching_timeout = 86400 
fact_caching = redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-memcached-fact缓存后端" tabindex="-1"><a class="header-anchor" href="#_4-3-memcached-fact缓存后端" aria-hidden="true">#</a> 4.3 Memcached fact缓存后端</h3><p>使用memcached作为fact缓存后端，需要在控制主机上安装Memcached服务并保持运行，需要安装python操作memcached的软件包。</p><p>ansible.cfg配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[defaults]
gathering = smart
fact_caching_timeout = 86400 
fact_caching = memcached
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-关闭fact" tabindex="-1"><a class="header-anchor" href="#_5-关闭fact" aria-hidden="true">#</a> 5 关闭fact</h2><p>如果不想从fact中获取变量，或者说整个playbook当中都没有使用到fact变量，可以通过如下方法关闭fact以提升执行效率：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  gather_facts: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在ansible.cfg中添加如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[defaults]
gathering = explicit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-委托facts" tabindex="-1"><a class="header-anchor" href="#_6-委托facts" aria-hidden="true">#</a> 6 委托Facts</h2><p>略：我暂时还没有用到</p>`,79),o=[s];function l(d,a){return e(),n("div",null,o)}const c=i(t,[["render",l],["__file","fact.html.vue"]]);export{c as default};
