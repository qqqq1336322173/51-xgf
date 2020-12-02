export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: "universal",
  mode: "spa",
  router: {
    // mode: "hash",
    // base: "./"
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
    title: process.env.npm_package_name || "",
    meta: [{
      charset: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
      // content: "width=device-width, initial-scale=1"
    },
    {
      hid: "description",
      name: "description",
      content: process.env.npm_package_description || ""
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
    script: [{
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
  plugins: [{
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