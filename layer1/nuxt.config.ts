// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        flag: "flagpack:gb-ukm",
        file: "en.json",
      },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    compilation: {
      strictMessage: false,
    },
  },
});
