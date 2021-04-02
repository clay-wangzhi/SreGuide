## 1 fact简介

为了让Ansible更了解目标节点，可以让它去收集目标节点的信息，比如获取对方的主机名、系统版本、IP地址或其它网卡信息、分区挂载信息等等。在Ansible中，收集到的这些节点信息称为Facts。

有了这些信息，用户可以更好的控制管理节点，比如当IP地址为xxx时就怎样怎样，当系统是CentOS 6时怎样怎样，是CentOS 7时怎样怎样，等等。

有这些信息当然好，但是收集这些信息是有代价的，而且代价很大：因为要收集的信息量很大，所以收集的过程非常慢。所以，如果在playbook中用不上这些信息时，应当禁用收集行为，这也是一个非常有效的效率优化手段。

ansible两个模块叫setup、gather_facts，用于获取远程主机的相关信息，并可以将这些信息作为变量在playbook里进行调用。而setup模块获取这些信息的方法就是依赖于fact。

```
$ ansible localhost -m setup
$ ansible localhost -m gather_facts
```

简单说明一下setup模块和gather_facts模块的区别。setup模块是早就存在的模块，而gather_facts模块是Ansible 2.8才提供的，它是一个二次封装的模块，内部很可能就是调用setup模块，但为何还要提供gather_facts模块呢？也许原因就在于gather_facts模块相比setup模块多的一个功能：并行收集多个节点的信息，而且在探测到要收集多个节点信息时会自动并行。

既然setup和gather_facts是模块，那么它们也可以在playbook中当作任务来执行。但是playbook专门为此提供了一个play级别的指令：gather_facts。

```
# ansible test -m setup
10.1.61.187 | SUCCESS => {
    "ansible_facts": {
        "ansible_all_ipv4_addresses": [
            "10.1.61.187"
        ],
        "ansible_all_ipv6_addresses": [
            "fe80::f816:3eff:fe4f:6611"
        ],
        "ansible_apparmor": {
            "status": "disabled"
        },
        "ansible_architecture": "x86_64",
        "ansible_bios_date": "04/01/2014",
        "ansible_bios_version": "Ubuntu-1.8.2-1ubuntu1~cloud0",
        
        ...output omitted...
}
```

setup获取的这些信息，都是可用于该主机的变量。

## 2 自定义fact(Local Facts)

### 2.1 手动设置fact

ansible除了能获取到预定义的fact的内容,还支持手动为某个主机定制fact。称之为本地fact。本地fact默认存放于被控端的`/etc/ansible/facts.d`目录下，如果文件为`ini`格式或者`json`格式，ansible会自动识别。以这种形式加载的fact是key为`ansible_local`的特殊变量。

下面是一个简单的示例，在ansibler主控端定义一个`ini`格式的custom.fact文件内容如下：

```
[general]
package = httpd
service = httpd
state = started
```

然后我们编写一个playbook文件名为setup_facts.yml内容如下：

```
---
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
        path: "{{ remote_dir }}"
    - name: Install the new facts
      copy:
        src: "{{ facts_file }}"
        dest: "{{ remote_dir }}"
```

执行该playbook，完成facts的推送：

```
ansible-playbook setup_facts.yml
```

此时，我们可以在被控端看到新的facts已经生成：

```
# ansible test -m setup        
10.1.61.187 | SUCCESS => {
    "ansible_facts": {
    
        ...output omitted...
        
        "ansible_local": {
            "custom": {
                "general": {
                    "package": "httpd",
                    "service": "httpd",
                    "state": "started"
                }
            }
        },

        ...output omitted...
  
}
```

我们可以写一个简单的playbook来使用这些facts：

```
- name: Install Apache and starts the service
  hosts: test
  tasks:
    - name: Install the required package
      yum: 
        name: "{{ ansible_facts.ansible_local.custom.general.package }}"
        state: latest
    - name: Start the service
      service: 
        name: "{{ ansible_facts.ansible_local.custom.general.service }}"
        state: "{{ ansible_facts.ansible_local.custom.general.state }}"
```

### 2.2 使用set_fact模块定义新的变量

`set_fact`模块可以自定义facts，这些自定义的facts可以通过template或者变量的方式在playbook中使用。如果你想要获取一个进程使用的内存的百分比，则必须通过set_fact来进行计算之后得出其值，并将其值在playbook中引用。

下面是一个set_fact模块的应用示例：

```
- name: set_fact example
  hosts: test
  tasks:
    - name: Calculate InnoDB buffer pool size
      set_fact: innodb_buffer_pool_size_mb="{{ ansible_memtotal_mb / 2 |int }}"
      
    - debug: var=innodb_buffer_pool_size_mb
```

执行playbook如下：

```
# ansible-playbook set_fact_ex.yaml 

PLAY [set_fact example] *****************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Calculate InnoDB buffer pool size] ************************************************************************************************************************************
ok: [10.1.61.187]

TASK [debug] ****************************************************************************************************************************************************************
ok: [10.1.61.187] => {
    "innodb_buffer_pool_size_mb": "3911.0"
}

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
```

> 这种设置方式只在当前playbook当中有效

## 3 手动采集fact

收集到目标节点信息之后，各信息都保存在一个名为ansible_facts的变量中，所以可以直接debug去查看这个变量里保存了什么东西，也即收集了目标节点的哪些信息。

```
- name: info in ansible_facts
  debug:
    var: ansible_facts
```

此外也可以直接使用下面的方式来查看Facts中收集了哪些信息：

```
$ ansible localhost -m 'setup'
```

下面是收集到的部分Facts信息：

```
localhost | SUCCESS => {
    "ansible_facts": {
        "ansible_all_ipv4_addresses": [
            "192.168.135.234"
        ],
        "ansible_all_ipv6_addresses": [
            "fe80::c38:ea5:1598:8169"
        ],
        "ansible_apparmor": {
            "status": "disabled"
        },
        "ansible_architecture": "x86_64",
        "ansible_bios_date": "04/01/2014",
        "ansible_bios_version": "1.11.0-2.el7",
        "ansible_cmdline": {
            "BOOT_IMAGE": "/vmlinuz-3.10.0-957.el7.x86_64",
            "biosdevname": "0",
            "crashkernel": "auto",
            "net.ifnames": "0",
            "quiet": true,
            "rhgb": true,
            "ro": true,
            "root": "UUID=120cca73-ddab-4aac-b751-7421263b55ad"
        },
        "ansible_date_time": {
            "date": "2021-03-16",
            "day": "16",
            "epoch": "1615886206",
            "hour": "17",
            "iso8601": "2021-03-16T09:16:46Z",
            "iso8601_basic": "20210316T171646952201",
            "iso8601_basic_short": "20210316T171646",
            "iso8601_micro": "2021-03-16T09:16:46.952201Z",
            "minute": "16",
            "month": "03",
            "second": "46",
            "time": "17:16:46",
            "tz": "CST",
            "tz_offset": "+0800",
            "weekday": "Tuesday",
            "weekday_number": "2",
            "weeknumber": "11",
            "year": "2021"
        },
        "ansible_default_ipv4": {
            "address": "192.168.135.234",
            "alias": "eth0",
            "broadcast": "192.168.135.255",
            "gateway": "192.168.135.254",
            "interface": "eth0",
            "macaddress": "fa:16:3e:7e:9b:47",
            "mtu": 1500,
            "netmask": "255.255.255.0",
            "network": "192.168.135.0",
            "type": "ether"
        },
        "ansible_default_ipv6": {},
        "ansible_device_links": {
            "ids": {
                "sr0": [
                    "ata-QEMU_DVD-ROM_QM00002"
                ],
                "sr1": [
                    "ata-QEMU_DVD-ROM_QM00004"
                ],
                "vda": [
                    "virtio-c1672133-7ae6-4318-8"
                ],
                "vda1": [
                    "virtio-c1672133-7ae6-4318-8-part1"
                ],
                "vda2": [
                    "virtio-c1672133-7ae6-4318-8-part2"
                ]
            },
            "labels": {
                "sr1": [
                    "config-2"
                ]
            },
            "masters": {},
            "uuids": {
                "sr1": [
                    "2021-03-08-14-55-38-00"
                ],
                "vda1": [
                    "fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88"
                ],
                "vda2": [
                    "120cca73-ddab-4aac-b751-7421263b55ad"
                ]
            }
        },
        "ansible_devices": {
            "sr0": {
                "holders": [],
                "host": "",
                "links": {
                    "ids": [
                        "ata-QEMU_DVD-ROM_QM00002"
                    ],
                    "labels": [],
                    "masters": [],
                    "uuids": []
                },
                "model": "QEMU DVD-ROM",
                "partitions": {},
                "removable": "1",
                "rotational": "1",
                "sas_address": null,
                "sas_device_handle": null,
                "scheduler_mode": "deadline",
                "sectors": "2097151",
                "sectorsize": "512",
                "size": "1024.00 MB",
                "support_discard": "0",
                "vendor": "QEMU",
                "virtual": 1
            },
            "sr1": {
                "holders": [],
                "host": "",
                "links": {
                    "ids": [
                        "ata-QEMU_DVD-ROM_QM00004"
                    ],
                    "labels": [
                        "config-2"
                    ],
                    "masters": [],
                    "uuids": [
                        "2021-03-08-14-55-38-00"
                    ]
                },
                "model": "QEMU DVD-ROM",
                "partitions": {},
                "removable": "1",
                "rotational": "1",
                "sas_address": null,
                "sas_device_handle": null,
                "scheduler_mode": "deadline",
                "sectors": "964",
                "sectorsize": "2048",
                "size": "482.00 KB",
                "support_discard": "0",
                "vendor": "QEMU",
                "virtual": 1
            },
            "vda": {
                "holders": [],
                "host": "",
                "links": {
                    "ids": [
                        "virtio-c1672133-7ae6-4318-8"
                    ],
                    "labels": [],
                    "masters": [],
                    "uuids": []
                },
                "model": null,
                "partitions": {
                    "vda1": {
                        "holders": [],
                        "links": {
                            "ids": [
                                "virtio-c1672133-7ae6-4318-8-part1"
                            ],
                            "labels": [],
                            "masters": [],
                            "uuids": [
                                "fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88"
                            ]
                        },
                        "sectors": "1024000",
                        "sectorsize": 512,
                        "size": "500.00 MB",
                        "start": "2048",
                        "uuid": "fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88"
                    },
                    "vda2": {
                        "holders": [],
                        "links": {
                            "ids": [
                                "virtio-c1672133-7ae6-4318-8-part2"
                            ],
                            "labels": [],
                            "masters": [],
                            "uuids": [
                                "120cca73-ddab-4aac-b751-7421263b55ad"
                            ]
                        },
                        "sectors": "208689152",
                        "sectorsize": 512,
                        "size": "99.51 GB",
                        "start": "1026048",
                        "uuid": "120cca73-ddab-4aac-b751-7421263b55ad"
                    }
                },
                "removable": "0",
                "rotational": "1",
                "sas_address": null,
                "sas_device_handle": null,
                "scheduler_mode": "mq-deadline",
                "sectors": "209715200",
                "sectorsize": "512",
                "size": "100.00 GB",
                "support_discard": "0",
                "vendor": "0x1af4",
                "virtual": 1
            }
        },
        "ansible_distribution": "CentOS",
        "ansible_distribution_file_parsed": true,
        "ansible_distribution_file_path": "/etc/redhat-release",
        "ansible_distribution_file_variety": "RedHat",
        "ansible_distribution_major_version": "7",
        "ansible_distribution_release": "Core",
        "ansible_distribution_version": "7.6",
        "ansible_dns": {
            "nameservers": [
                "202.96.209.5",
                "114.114.114.114"
            ],
            "search": [
                "openstacklocal"
            ]
        },
        "ansible_domain": "",
        "ansible_effective_group_id": 0,
        "ansible_effective_user_id": 0,
        "ansible_env": {
            "CLASSPATH": ".::/opt/jdk1.8.0_144/lib:/opt/jdk1.8.0_144/jre/lib",
            "HISTCONTROL": "ignoredups",
            "HISTSIZE": "1000",
            "HOME": "/root",
            "HOSTNAME": "host-192-168-135-234",
            "JAVA_HOME": "/opt/jdk1.8.0_144",
            "JRE_HOME": "/opt/jdk1.8.0_144/jre",
            "LANG": "en_US.UTF-8",
            "LESSOPEN": "||/usr/bin/lesspipe.sh %s",
            "LOGNAME": "root",
            "LS_COLORS": "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.axa=01;36:*.oga=01;36:*.spx=01;36:*.xspf=01;36:",
            "MAIL": "/var/spool/mail/root",
            "PATH": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/opt/jdk1.8.0_144/bin:/opt/jdk1.8.0_144/jre/bin:/root/bin",
            "PWD": "/etc/ansible/playbooks",
            "SHELL": "/bin/bash",
            "SHLVL": "3",
            "SSH_CLIENT": "192.168.135.72 6220 22",
            "SSH_CONNECTION": "192.168.135.72 6220 192.168.135.234 22",
            "SSH_TTY": "/dev/pts/0",
            "TERM": "xterm",
            "USER": "root",
            "XDG_RUNTIME_DIR": "/run/user/0",
            "XDG_SESSION_ID": "5879",
            "_": "/usr/bin/python3"
        },
        "ansible_eth0": {
            "active": true,
            "device": "eth0",
            "features": {
                "busy_poll": "off [fixed]",
                "fcoe_mtu": "off [fixed]",
                "generic_receive_offload": "on",
                "generic_segmentation_offload": "on",
                "highdma": "on [fixed]",
                "hw_tc_offload": "off [fixed]",
                "l2_fwd_offload": "off [fixed]",
                "large_receive_offload": "off [fixed]",
                "loopback": "off [fixed]",
                "netns_local": "off [fixed]",
                "ntuple_filters": "off [fixed]",
                "receive_hashing": "off [fixed]",
                "rx_all": "off [fixed]",
                "rx_checksumming": "on [fixed]",
                "rx_fcs": "off [fixed]",
                "rx_gro_hw": "off [fixed]",
                "rx_udp_tunnel_port_offload": "off [fixed]",
                "rx_vlan_filter": "on [fixed]",
                "rx_vlan_offload": "off [fixed]",
                "rx_vlan_stag_filter": "off [fixed]",
                "rx_vlan_stag_hw_parse": "off [fixed]",
                "scatter_gather": "on",
                "tcp_segmentation_offload": "on",
                "tx_checksum_fcoe_crc": "off [fixed]",
                "tx_checksum_ip_generic": "on",
                "tx_checksum_ipv4": "off [fixed]",
                "tx_checksum_ipv6": "off [fixed]",
                "tx_checksum_sctp": "off [fixed]",
                "tx_checksumming": "on",
                "tx_fcoe_segmentation": "off [fixed]",
                "tx_gre_csum_segmentation": "off [fixed]",
                "tx_gre_segmentation": "off [fixed]",
                "tx_gso_partial": "off [fixed]",
                "tx_gso_robust": "off [fixed]",
                "tx_ipip_segmentation": "off [fixed]",
                "tx_lockless": "off [fixed]",
                "tx_nocache_copy": "off",
                "tx_scatter_gather": "on",
                "tx_scatter_gather_fraglist": "off [fixed]",
                "tx_sctp_segmentation": "off [fixed]",
                "tx_sit_segmentation": "off [fixed]",
                "tx_tcp6_segmentation": "on",
                "tx_tcp_ecn_segmentation": "on",
                "tx_tcp_mangleid_segmentation": "off",
                "tx_tcp_segmentation": "on",
                "tx_udp_tnl_csum_segmentation": "off [fixed]",
                "tx_udp_tnl_segmentation": "off [fixed]",
                "tx_vlan_offload": "off [fixed]",
                "tx_vlan_stag_hw_insert": "off [fixed]",
                "udp_fragmentation_offload": "on",
                "vlan_challenged": "off [fixed]"
            },
            "hw_timestamp_filters": [],
            "ipv4": {
                "address": "192.168.135.234",
                "broadcast": "192.168.135.255",
                "netmask": "255.255.255.0",
                "network": "192.168.135.0"
            },
            "ipv6": [
                {
                    "address": "fe80::c38:ea5:1598:8169",
                    "prefix": "64",
                    "scope": "link"
                }
            ],
            "macaddress": "fa:16:3e:7e:9b:47",
            "module": "virtio_net",
            "mtu": 1500,
            "pciid": "virtio0",
            "promisc": false,
            "timestamping": [
                "rx_software",
                "software"
            ],
            "type": "ether"
        },
        "ansible_fibre_channel_wwn": [],
        "ansible_fips": false,
        "ansible_form_factor": "Other",
        "ansible_fqdn": "host-192-168-135-234",
        "ansible_hostname": "host-192-168-135-234",
        "ansible_hostnqn": "",
        "ansible_interfaces": [
            "lo",
            "eth0"
        ],
        "ansible_is_chroot": false,
        "ansible_iscsi_iqn": "",
        "ansible_kernel": "3.10.0-957.el7.x86_64",
        "ansible_kernel_version": "#1 SMP Thu Nov 8 23:39:32 UTC 2018",
        "ansible_lo": {
            "active": true,
            "device": "lo",
            "features": {
                "busy_poll": "off [fixed]",
                "fcoe_mtu": "off [fixed]",
                "generic_receive_offload": "on",
                "generic_segmentation_offload": "on",
                "highdma": "on [fixed]",
                "hw_tc_offload": "off [fixed]",
                "l2_fwd_offload": "off [fixed]",
                "large_receive_offload": "off [fixed]",
                "loopback": "on [fixed]",
                "netns_local": "on [fixed]",
                "ntuple_filters": "off [fixed]",
                "receive_hashing": "off [fixed]",
                "rx_all": "off [fixed]",
                "rx_checksumming": "on [fixed]",
                "rx_fcs": "off [fixed]",
                "rx_gro_hw": "off [fixed]",
                "rx_udp_tunnel_port_offload": "off [fixed]",
                "rx_vlan_filter": "off [fixed]",
                "rx_vlan_offload": "off [fixed]",
                "rx_vlan_stag_filter": "off [fixed]",
                "rx_vlan_stag_hw_parse": "off [fixed]",
                "scatter_gather": "on",
                "tcp_segmentation_offload": "on",
                "tx_checksum_fcoe_crc": "off [fixed]",
                "tx_checksum_ip_generic": "on [fixed]",
                "tx_checksum_ipv4": "off [fixed]",
                "tx_checksum_ipv6": "off [fixed]",
                "tx_checksum_sctp": "on [fixed]",
                "tx_checksumming": "on",
                "tx_fcoe_segmentation": "off [fixed]",
                "tx_gre_csum_segmentation": "off [fixed]",
                "tx_gre_segmentation": "off [fixed]",
                "tx_gso_partial": "off [fixed]",
                "tx_gso_robust": "off [fixed]",
                "tx_ipip_segmentation": "off [fixed]",
                "tx_lockless": "on [fixed]",
                "tx_nocache_copy": "off [fixed]",
                "tx_scatter_gather": "on [fixed]",
                "tx_scatter_gather_fraglist": "on [fixed]",
                "tx_sctp_segmentation": "on",
                "tx_sit_segmentation": "off [fixed]",
                "tx_tcp6_segmentation": "on",
                "tx_tcp_ecn_segmentation": "on",
                "tx_tcp_mangleid_segmentation": "on",
                "tx_tcp_segmentation": "on",
                "tx_udp_tnl_csum_segmentation": "off [fixed]",
                "tx_udp_tnl_segmentation": "off [fixed]",
                "tx_vlan_offload": "off [fixed]",
                "tx_vlan_stag_hw_insert": "off [fixed]",
                "udp_fragmentation_offload": "on",
                "vlan_challenged": "on [fixed]"
            },
            "hw_timestamp_filters": [],
            "ipv4": {
                "address": "127.0.0.1",
                "broadcast": "",
                "netmask": "255.0.0.0",
                "network": "127.0.0.0"
            },
            "ipv6": [
                {
                    "address": "::1",
                    "prefix": "128",
                    "scope": "host"
                }
            ],
            "mtu": 65536,
            "promisc": false,
            "timestamping": [
                "rx_software",
                "software"
            ],
            "type": "loopback"
        },
        "ansible_local": {},
        "ansible_lsb": {},
        "ansible_machine": "x86_64",
        "ansible_machine_id": "5da37d186bbc4fab946458f383820cc2",
        "ansible_memfree_mb": 5793,
        "ansible_memory_mb": {
            "nocache": {
                "free": 6652,
                "used": 1150
            },
            "real": {
                "free": 5793,
                "total": 7802,
                "used": 2009
            },
            "swap": {
                "cached": 0,
                "free": 0,
                "total": 0,
                "used": 0
            }
        },
        "ansible_memtotal_mb": 7802,
        "ansible_mounts": [
            {
                "block_available": 25154087,
                "block_size": 4096,
                "block_total": 26073407,
                "block_used": 919320,
                "device": "/dev/vda2",
                "fstype": "xfs",
                "inode_available": 52034972,
                "inode_total": 52172288,
                "inode_used": 137316,
                "mount": "/",
                "options": "rw,relatime,attr2,inode64,noquota",
                "size_available": 103031140352,
                "size_total": 106796675072,
                "uuid": "120cca73-ddab-4aac-b751-7421263b55ad"
            },
            {
                "block_available": 93950,
                "block_size": 4096,
                "block_total": 127145,
                "block_used": 33195,
                "device": "/dev/vda1",
                "fstype": "xfs",
                "inode_available": 255673,
                "inode_total": 256000,
                "inode_used": 327,
                "mount": "/boot",
                "options": "rw,relatime,attr2,inode64,noquota",
                "size_available": 384819200,
                "size_total": 520785920,
                "uuid": "fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88"
            }
        ],
        "ansible_nodename": "host-192-168-135-234",
        "ansible_os_family": "RedHat",
        "ansible_pkg_mgr": "yum",
        "ansible_proc_cmdline": {
            "BOOT_IMAGE": "/vmlinuz-3.10.0-957.el7.x86_64",
            "biosdevname": [
                "0",
                "0",
                "0"
            ],
            "crashkernel": "auto",
            "net.ifnames": [
                "0",
                "0",
                "0"
            ],
            "quiet": true,
            "rhgb": true,
            "ro": true,
            "root": "UUID=120cca73-ddab-4aac-b751-7421263b55ad"
        },
        "ansible_processor": [
            "0",
            "GenuineIntel",
            "QEMU Virtual CPU version (cpu64-rhel6)",
            "1",
            "GenuineIntel",
            "QEMU Virtual CPU version (cpu64-rhel6)",
            "2",
            "GenuineIntel",
            "QEMU Virtual CPU version (cpu64-rhel6)",
            "3",
            "GenuineIntel",
            "QEMU Virtual CPU version (cpu64-rhel6)"
        ],
        "ansible_processor_cores": 1,
        "ansible_processor_count": 4,
        "ansible_processor_threads_per_core": 1,
        "ansible_processor_vcpus": 4,
        "ansible_product_name": "ArStack",
        "ansible_product_serial": "ed734a0c-5e92-45e4-8491-1f2882a28b98",
        "ansible_product_uuid": "E9D04AFD-381C-4EF2-8523-A5F2177334A9",
        "ansible_product_version": "2020.5.15-1.el7.centos",
        "ansible_python": {
            "executable": "/usr/bin/python3",
            "has_sslcontext": true,
            "type": "cpython",
            "version": {
                "major": 3,
                "micro": 8,
                "minor": 6,
                "releaselevel": "final",
                "serial": 0
            },
            "version_info": [
                3,
                6,
                8,
                "final",
                0
            ]
        },
        "ansible_python_version": "3.6.8",
        "ansible_real_group_id": 0,
        "ansible_real_user_id": 0,
        "ansible_selinux": {
            "status": "Missing selinux Python library"
        },
        "ansible_selinux_python_present": false,
        "ansible_service_mgr": "systemd",
        "ansible_ssh_host_key_ecdsa_public": "AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBNxkCyohIHmaY5FLaLU4NRenQ6QE9qcjzbs87lvJhhH7TpWKHw3/NOVLks1amivsFJ1CQsgzk+XkU/YLfDFGNRo=",
        "ansible_ssh_host_key_ed25519_public": "AAAAC3NzaC1lZDI1NTE5AAAAILGRRrB9EPLkKsnOkyTzCpIyfWuIPEh7Qy9l2H0O+k4U",
        "ansible_ssh_host_key_rsa_public": "AAAAB3NzaC1yc2EAAAADAQABAAABAQDXqv9l/aw5jmEeKMRIVCUSUCpAPSUYyiVzfe7MNGDJ/Wd/ZHBMScAKgPq31z5OXJBpzDzIULZ5Di3WwmIdRHU6f4+PQ7E2LHQN4SDQvk7Flz7ivUv/aGtwUft929llVyT7/jrVFzWeR3ABtc6Roux2UMwWZANDwGWLkv+R6qluFNZ4yGTmYr7i/WTa0IXqI0AgZbAjGcSxqwGpgC7+NW8UVn975sz2pBRgCz9PG0mTWLKjcpESPpeypX0D0liq3rkwCjmU3OutwrTOYX1Di5n9miufUvZeSauWfska++t8xSYcOvbkzWidCOWOYtmx6VqrbKSSQiEDAbWJipIGcX+T",
        "ansible_swapfree_mb": 0,
        "ansible_swaptotal_mb": 0,
        "ansible_system": "Linux",
        "ansible_system_capabilities": [
            "cap_chown",
            "cap_dac_override",
            "cap_dac_read_search",
            "cap_fowner",
            "cap_fsetid",
            "cap_kill",
            "cap_setgid",
            "cap_setuid",
            "cap_setpcap",
            "cap_linux_immutable",
            "cap_net_bind_service",
            "cap_net_broadcast",
            "cap_net_admin",
            "cap_net_raw",
            "cap_ipc_lock",
            "cap_ipc_owner",
            "cap_sys_module",
            "cap_sys_rawio",
            "cap_sys_chroot",
            "cap_sys_ptrace",
            "cap_sys_pacct",
            "cap_sys_admin",
            "cap_sys_boot",
            "cap_sys_nice",
            "cap_sys_resource",
            "cap_sys_time",
            "cap_sys_tty_config",
            "cap_mknod",
            "cap_lease",
            "cap_audit_write",
            "cap_audit_control",
            "cap_setfcap",
            "cap_mac_override",
            "cap_mac_admin",
            "cap_syslog",
            "35",
            "36+ep"
        ],
        "ansible_system_capabilities_enforced": "True",
        "ansible_system_vendor": "Huayun",
        "ansible_uptime_seconds": 571792,
        "ansible_user_dir": "/root",
        "ansible_user_gecos": "root",
        "ansible_user_gid": 0,
        "ansible_user_id": "root",
        "ansible_user_shell": "/bin/bash",
        "ansible_user_uid": 0,
        "ansible_userspace_architecture": "x86_64",
        "ansible_userspace_bits": "64",
        "ansible_virtualization_role": "guest",
        "ansible_virtualization_type": "kvm",
        "gather_subset": [
            "all"
        ],
        "module_setup": true
    },
    "changed": false
}
```

收集到的信息量非常大，但很幸运，只需关注其中常见的几项即可，比如系统版本号、主机名、IP地址、分区信息、挂载信息。

有了这些信息，就可以去访问这些信息。由于它们都存放在ansible_facts变量中，所以通过这个变量去访问即可。但需要注意的是，对于收集到的绝大多数Facts信息，都有两种访问方式：

(1).一种是debug查看ansible_facts变量得到的结果，这也是真正存储这些信息的方式

(2).一种是命令行执行setup模块输出的方式

直接使用debug模块去输出ansible_facts变量，即可知如何访问这些信息。例如：

要获取eth0的ipv4地址：

```
debug:
  var: ansible_facts.eth0.ipv4.address
```

再看在ansible命令行中执行setup模块的输出信息，会发现原本ansible_facts内几乎所有顶级的key现在都以ansible_开头，例如：

```
debug:
  var: ansible_all_ipv4_addresses
```

之所以可以这样直接访问，是因为Ansible将Facts中绝大多数的顶级key都注入到了Ansible自身维护的变量表(即hostvars)中，这样访问它们就方便的多。

至于采用何种方式访问，这无所谓，但是要知道的是，虽然绝大多数Facts信息都单独定义了变量，但并非所有(主要是那些可能产生歧义或冲突的变量)。

另外再多提醒一句，ansible_facts自身也是变量，它也保存在各自节点的hostvars变量中，所以也可以通过hostvars去访问Facts信息。例如：

```
debug:
  var: hostvars['logstash2']['ansible_facts'].eth0.ipv4.address
```



通常情况下，我们在运行play的时候，ansible会先尝试ssh到被控端采集fact，如果此时，被控制端的ssh还没有完全启动，就会导致整个play执行失败。这个时候，我们可以先显示的关闭fact采集，然后在task中通过wait_for等待被控端ssh端口被正常监听，再在task中使用setup模块来手动采集fact：

```
- name: Deploy apps
  hosts: webservers
  gather_facts: false
  tasks：
    - name: wait for ssh to be running
      local_action: wait_for port=22 host="{{ inventory_hostname }}" search_regex=OpenSSH
    - name: gather facts
      setup:
    ......
```

## 4 启用fact缓存

如果在play中需要引入fact，则可以开启fact缓存。fact缓存目前支持三种存储方式，分别为JSON、memcached、redis。

redis：缓存在redis服务中，直到目前(Ansible 2.9)为止，Ansible还不支持指定连接redis的端口、密码等

1.gathering：控制Ansible是否自动收集Facts，它有三种值：

(1).implicit：这是默认值，表示执行play时会自动收集Facts，除非显式指定gather_facts: false禁止收集

(2).explicit：不自动收集Facts，除非显式指定gather_facts: true开启收集

(3).smart：自动收集Facts，但如果已存在(缓存)则不重复收集

### 4.1 Json文件fact缓存后端

使用JSON文件作为fact缓存后端的时候，ansible将会把采集的fact写入到控制主机的文件中。

ansible.cfg配置如下：

```
[defaults]
gathering = smart
#缓存时间，单位为秒
fact_caching_timeout = 86400    
fact_caching = jsonfile
#指定ansible包含fact的json文件位置，如果目录不存在，会自动创建
fact_caching_connection = /tmp/ansible_fact_cache    
```

### 4.2  Redis fact缓存后端

使用redis作为fact缓存后端，需要在控制主机上安装redis服务并保持运行。需要安装python操作redis的软件包。

ansible.cfg配置如下：

```
[defaults]
gathering = smart
fact_caching_timeout = 86400 
fact_caching = redis
```

### 4.3 Memcached fact缓存后端

使用memcached作为fact缓存后端，需要在控制主机上安装Memcached服务并保持运行，需要安装python操作memcached的软件包。

ansible.cfg配置如下：

```
[defaults]
gathering = smart
fact_caching_timeout = 86400 
fact_caching = memcached
```

## 5 关闭fact

如果不想从fact中获取变量，或者说整个playbook当中都没有使用到fact变量，可以通过如下方法关闭fact以提升执行效率：

```
- hosts: test
  gather_facts: false
```

也可以在ansible.cfg中添加如下配置：

```
[defaults]
gathering = explicit
```

## 6 委托Facts

略：我暂时还没有用到