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
    script: [{
      src: "https://www.google.com/recaptcha/api.js"
    }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "element-ui/lib/theme-chalk/index.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~plugins/vs-pagination", mode: "client" },
    { src: "~/plugins/ymapPlugin.js", mode: "client" },
    { src: "~plugins/v-scroll-to-top.js", mode: "client" },

    { src: "~/plugins/aos", ssr: false },
    "@/plugins/element-ui",
    "@/plugins/vue-i18n",
    "@/plugins/vue-tel-input",
    "@/plugins/vue-the-mask",
    "@/plugins/vue-recaptcha",
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
    "bootstrap-vue/nuxt",
    "nuxt-element-ui",
    "vue-yandex-maps/nuxt",
    "nuxt-i18n",
    "@nuxtjs/recaptcha"
    // "vue-recaptcha"

    // "@intlify/vue-i18n-loader",
    // options,
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
    hideBadge: true,
    siteKey: '6LdlkNEiAAAAAKEt2rLVxjel1xMpjUjhFKKvLIUV',
    version: 3
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
  ],
  css: ["aos/dist/aos.css"],
};
