// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore'],
    // storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  import: {
    dirs: ['./stores'],
  },
  // buildModules: ['@nuxtjs/composition-api/module', ['@pinia/nuxt', { disableVuex: false }]],
});
