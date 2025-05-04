import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/google-fonts',
  ],
  css: ['@/assets/app.css'],
  googleFonts: {
    families: {
      Roboto: [400, 500, 700],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    // Server-only variables (NOT exposed to client)
    apiBaseUrl: process.env.API_BASE_URL,

    // Exposed to client if under `public:`
    // public: {
    // },
  },
});
