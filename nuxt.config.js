export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - hansa',
    title: 'hansa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: ""
      },
      { rel: 'preload',as: 'style', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap&subset=cyrillic', },
      { rel: 'stylesheet', media: "print",  onload: "this.media='all'", href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap&subset=cyrillic', },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  //   '~/assets/fonts.css'
  // ],
  serverMiddleware: [
    { path: "/api", handler: require("body-parser").json() },
    {
      path: "/api",
      handler: (req, res, next) => {
        const url = require("url");
        req.query = url.parse(req.url, true).query;
        req.params = { ...req.query, ...req.body };
        next();
      }
    },
    { path: "/api", handler: "~/server-middleware/api-server.js" }
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper.client.js', mode: 'client' },
    '@plugins/vmask.js'
  ],
  ssr: true,
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { treeShake: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    breakpoint: {
      mobileBreakpoint: 'sm'
    },
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'home',
        path: '/home',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    extractCSS: true,
    babel: {
      presets({ isClient }, preset) {
        if (isClient) {
          preset[1].targets = {
            browsers: [
              'Chrome >= 60',
              'Safari >= 10.1',
              'iOS >= 10.3',
              'Firefox >= 54',
              'Edge >= 15',
            ]
          }
        }
        return [preset]
      }
    },
  },
  watch: ['~/api/**/*.js'],
  target: 'server'
}
