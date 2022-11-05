<template lang="html">
  <div>
    <v-scroll-to-top></v-scroll-to-top>
    <Navbar :siteInfo="site_info" />
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
      this.site_info = siteInfo;
    },
  },
};
</script>
