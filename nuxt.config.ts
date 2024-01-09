// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@sidebase/nuxt-session',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  pinia: {
    autoImports: ['defineStore'],
  },
  import: {
    dirs: ['./stores'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  loading: '~/components/Loading.vue',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
