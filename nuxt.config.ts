// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-06",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "pt-br",
        file: "pt-br.json",
      },
    ],
    defaultLocale: "en",
    langDir: "locales",
    strategy: "prefix_and_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
});
