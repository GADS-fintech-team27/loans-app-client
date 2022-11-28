import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '',
    title: 'checker',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/main.scss'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 600, offset: -100 }],
    '~/api',
  ],

  axios: {
    baseURL: '/',
  },

  vuetify: {
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
}
