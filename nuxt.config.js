import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import VsPagination from '@vuesimple/vs-pagination';

Vue.component('vs-pagination', VsPagination);
// import 'element-ui/lib/theme-chalk/index.css';/
// import ElementUI from 'element-ui';
// import ElementUI from "element-ui";
// import VueAos from "vue-aos";
// Vue.use(VueAos);
Vue.use(Aos);

// Vue.use(ElementUI);
// Vue.use(ElementUI);
// Aos.init();
// This is important, we are going to let Nuxt.js worry about the CSS
// config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas, fab);

// Register the component globally
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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@fortawesome/fontawesome-svg-core/styles.css","element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vs-pagination', mode: 'client' }
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
    "bootstrap-vue/nuxt",
    'nuxt-element-ui'
    
  ],
  elementUI: {
    components: ['Button', 'DatePicker',"Pagination"],
    locale: 'fr',
  },
  mode: 'spa',
  axios:{ baseURL: "https://plaza.choopon.uz/api" }
 ,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["aos"],
  },
  plugins: [{ src: "~/plugins/aos", ssr: false }],
  css: ["aos/dist/aos.css"],
};
