import { defineUserConfig } from "vuepress";
import { hopeTheme, pwa } from "vuepress-theme-hope";
/* npm i -D vuepress-plugin-search-pro@next */
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { commentPlugin } from "vuepress-plugin-comment2";
export default defineUserConfig({
  base: "/",
  //
  
  /* 语言配置 */
  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Blog Demo",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
    /* 单语言 */
    "/": {
      lang: "zh-CN",
      title: "ismeoh",
      description: "",
    },
  },
  /* 主题配置 */
  theme: hopeTheme({
    
    // 配置作者
    author: {
      name: "ismeoh",
      url: "https://ismeoh.com",
    },
    // 配置根网址
    hostname:"https://ismeoh.com",
    // 配置仓库地址
    repo: "https://github.com/ismeoh/ismeoh.github.io",
    // 配置侧边栏
    sidebar: {
      "/posts/": "structure",
      // vue基础导航栏单独设置左侧侧边栏
      "/vue/": "structure"
     
    },
    // 配置导航栏
    navbar: [
      
      {
        text: "主页",
        icon: "creative",
        link:"/"
      },
      {
        text: "前端",
        icon: "circle-info",
        children: ["/project/vue/vue-basic.md", ],
      },
      {
        text: "后端",
        // icon: "circle-info",
        link:"/null"
      },
      {
        text: "博客",
        // icon: "circle-info",
        children: [
          {
            text: "博客首页",
            link: "/2",
          },
          {
            text: "旧的文章",
            link: "/posts/oldposts/README.md",
          },
          {
            text: "新的文章",
            link: "/zh/guide/README.md",
          },
        ],
      },
      {
        text: "其他",
        // icon: "circle-info",
        children: [
          {
            text: "git",
            link: "/project/git/git-basic.md",
          },
          {
            text: "英语",
            link: "https://english-grammer-docs.ismeoh.com/",
          },
          
        ],
      },
      {
        text: "归档",
        // icon: "circle-info",
        link: "/1"
        
      },
    ],

    /* 插件配置 */
    plugins: {
      
      // 网站地图配置
      sitemap:{
        // 更新频率
        changefreq:"hourly"
      }
      ,
      // 配置pwa应用
      pwa:{
        cachePic:true,
        cacheHTML:true,
        showInstall:true,
        favicon:"/favicon.ico",
        update:"available",
      },
      /* 博客插件配置 */
      blog:{
        // 是否显示文章摘要
        excerpt: false
      },
      
    },
    // 配置图标
    iconAssets: "iconfont",
    hotReload: true,
  }),

  shouldPrefetch: false,
  plugins: [
    // 配置评论
    commentPlugin({
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "ismeoh/ismeoh.github.io",
      repoId: "R_kgDOG0qaJQ",
      category: "Announcements",
      categoryId: "DIC_kwDOG0qaJc4CTyjw",

      /**
       * Using twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    }),
    // 配置搜索
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        // {
        //   // getter: (page) => page.frontmatter.category,
        //   // formatter: "分类：$content",
        // },
        // {
        //   // getter: (page) => page.frontmatter.tag,
        //   // formatter: "标签：$content",
        // },
      ],
    }),
  ],

});
