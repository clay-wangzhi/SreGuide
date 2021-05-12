const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./config/navbar");
const sideBarConfig = require("./config/sideBar");

module.exports = config({
  title: "IT外卖小哥",
  description: "Keep Learning",

  dest: "./dist",
  locales: {
    "/": {
      // 设置需要的语言
      lang: "zh-CN",
    },
  },

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],


  themeConfig: {
    logo: "/lufei.jpg",
    hostname: "https://clay-wangzhi.com",

    author: "Clay",
    repo: "https://github.com/clay-wangzhi/wiki",
	  docsBranch: "master",
    docsDir: "src",

    pageInfo: [
      'time',
      'author',
      'visitor',
      'reading-time',
      'word',
      'category',
      'tag',
    ],

    nav: navBarConfig.zh,
    sidebar: sideBarConfig.zh,

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
