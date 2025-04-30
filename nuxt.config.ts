// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/content'
  ]
})