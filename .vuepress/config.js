const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "IT外卖小哥",
  description: "当你发现自己的才华撑不起野心时，就请安静下来学习吧！",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],


  themeConfig: {
    baseLang: 'zh-CN',
    logo: "/lufei.jpg",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "Clay",
    repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
    
    pageInfo: [
	  'time',
      'author',
      'visitor',
      'reading-time',
      'word',
	  'category',
	  'tag',
    ],



    nav: [
      { text: "博客主页", link: "/", icon: "home" },
	  {
        text: "学习笔记",
        icon: "code",
        items: [
		{ text: "容器",
          items: [
          { text: "Kubernetes", icon: "kubernetes", link: "/container/kubernetes/" },
          ],
        },
        { text: "编程语言",
          items: [
          { text: "Python", icon: "python", link: "/code/python/" },
          { text: "Golang", icon: "go", link: "/code/golang/" },
          ],
        },
		{ text: "web中间件",
          items: [
          { text: "Nginx", icon: "nginx", link: "/web/nginx/" },
          ],
        },
        { text: "自动化工具",
          items: [
          { text: "Ansible", icon: "ansible", link: "/automate/ansible/" },
          ],
        },
        { text: "监控工具",
          items: [
          { text: "ELK", icon: "elastic", link: "/monitor/elk/" },
          ],
        },
		{ text: "数据库",
          items: [
          { text: "MySQL", icon: "mysql", link: "/db/mysql/" },
          ],
        },
        ],
      },
    ],
    sidebar: {
      "/automate/ansible/": [
        "",
        "inventory",
        { 
          title: "3 Ansible Ad-hoc命令集",
          path: "ad-hoc/",
          collapsable: false,
          children: ["lineinfile",]
        },
        { 
          title: "4 Ansible Playbook",
          path: "playbook/",
          collapsable: false,
          children: ["dir-handler", "playbook-for", "playbook-if", "advanced-playbook", "playbook-tags", "roles", "file-jinja2", "yaml",]
        },
        { 
          title: "5 Ansible变量",
          path: "var/",
          collapsable: false,
          children: ["custom", "fact", "magic", "lookup", "vault",]
        },
        "optimize",
        "qa",
      ],
      "/web/nginx/": [
        "",
        "framework",
        {
          title: "3. nginx配置文件详解",
          path: "config/",
          collapsable: false,
          children: ["global-events", "http", "server", "location", "module",]
        },
        "core",
        "status",
        {
          title: "6. nginx常见问题",
          path: "qa/",
          collapsable: false,
          children: ["forbidden",]
        },
      ],
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Email: "mailto:clay_wangzhi@163.com",
      },
    },

    footer: {
      display: true,
      content: "",
    },

    comment: {
      type: "valine",
      appId: "9WtpTAylwFHKYQgg3JOQpHnl-gzGzoHsz",
      appKey: "7yiwm2Pegp8r6uwfaPBbjqI4",
    },

    copyright: true,

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
