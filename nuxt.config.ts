// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-23",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['~/assets/css/main.css'],
  vite: {
    optimizeDeps: {
      exclude: ["pocketbase"],
    },
  },
});
