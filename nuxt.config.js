export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: "universal",
  mode: "spa",
  /**
   * 路由配置
   */
  router: {
    // mode: "hash",
    // base: "./",
    extendRoutes (routes, resolve) {
      // Add some routes here ...
      // console.log(routes)
      // const originalPush = routes.prototype.push;
      // routes.prototype.push = function (location) {
      //   console.log(location)
      //   // console.log(originalPush)
      //   return originalPush.call(this, location).catch(err => err)
      // };
      // and then sort them
    },
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: "server",
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // title: process.env.npm_package_name || "",
    title: "Java培训_ Oracle培训_MySQL培训_【51学工坊官网】" || "",
    meta: [{
      charset: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
      // content: "width=device-width, initial-scale=1"
    },
    {
      name: "keywords",
      content: "Java培训,oracle培训,oracle培训认证,oracle认证,oracle认证培训,oracle数据库,培训,OCA培训_OCP培训_OCP认证,mysql培训,mysql数据库,mysql认证,mysql认证培训,Java考试"
      // content: "width=device-width, initial-scale=1"
    },
    {
      hid: "description",
      name: "description",
      content: "51学工坊是Oracle官方授权合作伙伴，面向有志于从事IT技术的在校大学生及社会人士提供线上“实战软件开发技术+知名厂商认证”教育，51学工坊的在线课程包括Java培训、Oracle培训、mysql培训等，是口碑比较好的IT培训机构。" || ""
      // content: process.env.npm_package_description || ""
    },
    //http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge,chrome=1"
    }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }],
    /*{
    src: "/js/flexible.js",
    type: "text/javascript",
    charset: "utf-8"
    },*/
    script: [
      {
        src: "https://hm.baidu.com/hm.js?23f5dfff8e8ee3717076feecd2e9a922",
        type: "text/javascript",
        charset: "utf-8"
      },
      {
        src: "/js/flexible.js",
        type: "text/javascript",
        charset: "utf-8"
      },
      {
        src: "/js/isMobile.js",
        type: "text/javascript",
        charset: "utf-8"
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    "element-ui/lib/theme-chalk/reset.css",
    "element-ui/lib/theme-chalk/index.css",
    "@/assets/css/main.css"
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: "~plugins/baidu",
      ssr: true
    },
    {
      src: "~plugins/element-ui",
      ssr: true
    },
    // "@/plugins/element-ui",
    {
      src: "~assets/js/iconfont.js",
      ssr: false
    },
    {
      src: "~plugins/default-passive-events",
      ssr: true
    },
    {
      src: "~plugins/app",
      ssr: true
    },
    {
      src: "~plugins/isObjectValueEqual",
      ssr: true
    },
    {
      src: "~plugins/mint-ui.js",
      ssr: true
    }
    // "@/plugins/default-passive-events"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      "postcss-pxtorem": {
        rootValue: 37.5,
        propList: ["*"],
        selectorBlackList: ["mint-"]
      }
    },
    // postcss: {
    // plugins: {
    // autoprefixer: {
    // browsers: ["Android >= 4.0", "ios >= 7"]
    // },
    // "postcss-pxtorem": {
    // rootValue: 24,
    // propList: ["*"]
    // },
    // extend(config, ctx) {}
    // }
    // },
    transpile: [/^element-ui/],
    cache: true
  }
};