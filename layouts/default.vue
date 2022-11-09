<template lang="html">
  <div>
    <v-scroll-to-top></v-scroll-to-top>
    <Navbar
      :siteInfo="site_info"
      :language="language"
      :translations="translations"
    />
    <Nuxt />
    <Footer :siteInfo="site_info" />
  </div>
</template>
<script>
import Navbar from "../components/Layout/Navbar.vue";
import Footer from "../components/Layout/Footer.vue";

export default {
  data() {
    return {
      site_info: {},
      language: [],
      translations: [],
    };
  },
  components: {
    Navbar,
    Footer,
  },

  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      const siteInfo = await this.$store.dispatch("site-info/fetchSiteInfo");
      const language = await this.$store.dispatch("language/fetchLanguage");
      const translations = await this.$store.dispatch(
        "translation/fetchTranslations"
      );

      this.translations = translations.filter((item,index) => item.translation_group.title === "Products");
      console.log(this.translations);
      this.site_info = siteInfo;
      this.language = language;
    },
  },
};
</script>
