// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-23",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap", "@nuxtjs/robots"],
  css: ['~/assets/css/main.css'],
  vite: {
    optimizeDeps: {
      exclude: ["pocketbase"],
    },
  },
  app: {
    head: {
      title: "Asadudzaman Joy - Content Creator & Book Reviewer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "I mostly talk about books, but also discusses various topics including business and productivity. And sometimes I travel to different districts of the country and share that experience with you."
        },
        // Open Graph
        { property: "og:title", content: "Asadudzaman Joy - Content Creator & Book Reviewer" },
        { property: "og:description", content: "I mostly talk about books, but also discusses various topics including business and productivity. And sometimes I travel to different districts of the country and share that experience with you." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://asadjoy.com" }, // Replace with actual domain
        { property: "og:image", content: "https://asadjoy.com/images/profile.jpg" }, // Replace with actual image
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Asadudzaman Joy - Content Creator & Book Reviewer" },
        { name: "twitter:description", content: "I mostly talk about books, but also discusses various topics including business and productivity. And sometimes I travel to different districts of the country and share that experience with you." },
        { name: "twitter:image", content: "https://asadjoy.com/images/profile.jpg" }, // Replace with actual image
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://asadjoy.com" }, // Replace with actual domain
      ],
    },
  },
  sitemap: {
    hostname: "https://asadjoy.com", // Replace with actual domain
  },
});
