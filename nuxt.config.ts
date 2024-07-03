export default {
  // Nuxt target (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-target)
  target: 'static',

  // Global page headers (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-head)
  head: {
    title: 'REECHEFF - Aplikasi Resep',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Aplikasi web resep menggunakan Nuxt.js dan Firebase Firestore' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css)
  css: [
    '@/assets/main.css',
  ],

  // Plugins to run before rendering page (https://nuxtjs.org/docs/2.x/directory-structure/plugins)
  plugins: [
    { src: '~/plugins/firebase.js', mode: 'client' }, // Firebase initialization plugin
  ],

  // Auto import components (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-components)
  components: true,

  // Modules for dev and build (recommended) (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build)
  build: {
  },

  // Environment variables (https://nuxtjs.org/docs/2.x/directory-structure/env)
  env: {
    firebaseConfig: {
      apiKey: "AIzaSyCAEYeWin3NnxCmK5SwVYhsXjHVW_2g_RM",
      authDomain: "reecheff-892b6.firebaseapp.com",
      projectId: "reecheff-892b6",
      storageBucket: "reecheff-892b6.appspot.com",
      messagingSenderId: "322618219461",
      appId: "1:322618219461:web:e0dbc7e075c27d457f89ac",
      measurementId: "G-YKYPHBW6D8"

    },
  },
};
