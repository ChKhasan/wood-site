import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import VsPagination from "@vuesimple/vs-pagination";
import YmapPlugin from "vue-yandex-maps";
const options = {
  apiKey: "xxx",
  lang: "ru_RU",
  version: "2.1",
};
Vue.component("vs-pagination", VsPagination);
Vue.use(Aos);

Vue.use(YmapPlugin, options);

library.add(fas, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "wood-site",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      {
        src:
          "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "element-ui/lib/theme-chalk/index.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/v-scroll-to-top.js", mode: "client" },
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/bl-components.js", mode: "client" },
    // { src: "~/plugins/vue-ripple-directive.js", mode: "client" },
    { src: "~/plugins/vue-touch-ripple.js", mode: "client" },
    "@/plugins/element-ui",
    "@/plugins/vue-i18n",
    "@/plugins/vue-tel-input",
    "@/plugins/vue-the-mask",
    "@/plugins/vue-ripple-directive",
    "@/plugins/bl-components",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "@nuxtjs/recaptcha",
    "bootstrap-vue/nuxt",
    "nuxt-element-ui",
    "vue-yandex-maps/nuxt",
    "nuxt-i18n",
  ],

  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "ru",
      messages: {
        en: {
          curLang: "en",
        },
        ru: {
          curLang: "ru",
        },
      },
    },
  },
  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    language: "en", // Recaptcha language (v2)
    // mode: String,       // Mode: 'base', 'enterprise'
    siteKey: "6LdlkNEiAAAAAKEt2rLVxjel1xMpjUjhFKKvLIUV", // Site key for requests
    version: 2, // Version
    // size: String        // Size: 'compact', 'normal', 'invisible' (v2)
  },
  elementUI: {
    components: ["Button", "DatePicker", "Pagination", "Collapse"],
    locale: "",
  },
  mode: "spa",
  axios: { baseURL: "https://plaza.choopon.uz/api" },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["aos"],
  },
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "~plugins/v-scroll-to-top.js", ssr: false },
    { src: "~plugins/element-ui.js", ssr: false },
    { src: "~plugins/vue-i18n.js", ssr: false },
    { src: "~/plugins/vue-ripple-directive.js", ssr: false },
    { src: "~/plugins/vue-toast-notifitation.js", ssr: false },

  ],
  css: ["aos/dist/aos.css","vue-toast-notification/dist/theme-sugar.css"],
};
