const e={key:"v-765b1b97",path:"/code/shell/part3/09_1_internal_variables.html",title:"9.1 \u5185\u90E8\u53D8\u91CF",lang:"zh-CN",frontmatter:{author:"LinuxStory",category:["Linux"],tag:["Bash"],summary:"9.1 \u5185\u90E8\u53D8\u91CF \u5185\u5EFA\u53D8\u91CF \u5F71\u54CD Bash \u811A\u672C\u884C\u4E3A\u7684\u53D8\u91CF\u3002 $BASH Bash\u7A0B\u5E8F\u7684\u8DEF\u5F84\u3002 $BASH_ENV \u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\u4F1A\u6307\u5411\u4E00\u4E2A Bash \u542F\u52A8\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u5728\u811A\u672C\u88AB\u8C03\u7528\u65F6\u4F1A\u88AB\u8BFB\u53D6\u3002 $BASH_SUBSHELL \u8BE5\u53D8\u91CF\u7528\u4E8E\u63D0\u793A\u6240\u5904\u7684 subshell \u5C42\u7EA7\u3002\u8FD9\u662F\u5728 Bash version 3 \u4E2D\u88AB\u5F15\u5165\u7684\u65B0\u7279\u6027\u3002 \u5177\u4F53\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003 \u6837\u4F8B21-1\u3002 ",head:[["meta",{property:"og:url",content:"https://clay-wangzhi.com/code/shell/part3/09_1_internal_variables.html"}],["meta",{property:"og:site_name",content:"SRE\u8FD0\u7EF4\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{property:"og:title",content:"9.1 \u5185\u90E8\u53D8\u91CF"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-27T15:33:00.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"LinuxStory"}],["meta",{property:"article:tag",content:"Bash"}],["meta",{property:"article:modified_time",content:"2022-04-27T15:33:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u5185\u5EFA\u53D8\u91CF",slug:"\u5185\u5EFA\u53D8\u91CF",children:[{level:3,title:"$BASH",slug:"bash",children:[]},{level:3,title:"$BASH_ENV",slug:"bash-env",children:[]},{level:3,title:"$BASH_SUBSHELL",slug:"bash-subshell",children:[]},{level:3,title:"$BASHPID",slug:"bashpid",children:[]},{level:3,title:"$BASH_VERSINFO[n]",slug:"bash-versinfo-n",children:[]},{level:3,title:"$BASH_VERSION",slug:"bash-version",children:[]},{level:3,title:"$CDPATH",slug:"cdpath",children:[]},{level:3,title:"$DIRSTACK",slug:"dirstack",children:[]},{level:3,title:"$EDITOR",slug:"editor",children:[]},{level:3,title:"$EUID",slug:"euid",children:[]},{level:3,title:"$FUNCNAME",slug:"funcname",children:[]},{level:3,title:"$GLOBIGNORE",slug:"globignore",children:[]},{level:3,title:"$GROUPS",slug:"groups",children:[]},{level:3,title:"$HOME",slug:"home",children:[]},{level:3,title:"$HOMENAME",slug:"homename",children:[]},{level:3,title:"$HOSTTYPE",slug:"hosttype",children:[]},{level:3,title:"$IFS",slug:"ifs",children:[]},{level:3,title:"$IGNOREEOF",slug:"ignoreeof",children:[]},{level:3,title:"$LC_COLLATE",slug:"lc-collate",children:[]},{level:3,title:"$LC_CTYPE",slug:"lc-ctype",children:[]},{level:3,title:"$LINENO",slug:"lineno",children:[]},{level:3,title:"$MACHTYPE",slug:"machtype",children:[]},{level:3,title:"$OLDPWD",slug:"oldpwd",children:[]},{level:3,title:"$OSTYPE",slug:"ostype",children:[]},{level:3,title:"$PATH",slug:"path",children:[]},{level:3,title:"$PIPESTATUS",slug:"pipestatus",children:[]},{level:3,title:"$PPID",slug:"ppid",children:[]},{level:3,title:"$PROMPT_COMMAND",slug:"prompt-command",children:[]},{level:3,title:"$PS1",slug:"ps1",children:[]},{level:3,title:"$PS2",slug:"ps2",children:[]},{level:3,title:"$PS3",slug:"ps3",children:[]},{level:3,title:"$PS4",slug:"ps4",children:[]},{level:3,title:"$PWD",slug:"pwd",children:[]},{level:3,title:"$REPLY",slug:"reply",children:[]},{level:3,title:"$SECONDS",slug:"seconds",children:[]},{level:3,title:"$SHELLOPTS",slug:"shellopts",children:[]},{level:3,title:"$SHLVL",slug:"shlvl",children:[]},{level:3,title:"$TMOUT",slug:"tmout",children:[]},{level:3,title:"$UID",slug:"uid",children:[]}]},{level:2,title:"\u4F4D\u7F6E\u53C2\u6570",slug:"\u4F4D\u7F6E\u53C2\u6570",children:[{level:3,title:"$0, $1, $2 \u7B49",slug:"_0-1-2-\u7B49",children:[]},{level:3,title:"$#",slug:"",children:[]},{level:3,title:"$*",slug:"-1",children:[]},{level:3,title:"$@",slug:"-2",children:[]}]},{level:2,title:"\u5176\u4ED6\u7279\u6B8A\u53C2\u6570",slug:"\u5176\u4ED6\u7279\u6B8A\u53C2\u6570",children:[{level:3,title:"$-",slug:"-3",children:[]},{level:3,title:"$!",slug:"-4",children:[]},{level:3,title:"$_",slug:"-5",children:[]},{level:3,title:"$?",slug:"-6",children:[]},{level:3,title:"$$",slug:"-7",children:[]}]},{level:2,title:"\u6CE8\u8BB0",slug:"\u6CE8\u8BB0",children:[]}],git:{createdTime:1620705291e3,updatedTime:165107358e4,contributors:[{name:"clay-wangzhi",email:"clay.wangzhi@gmail.com",commits:3}]},readingTime:{minutes:22.45,words:6734},filePathRelative:"code/shell/part3/09_1_internal_variables.md"};export{e as data};
