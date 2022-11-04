<template lang="html">
  <div>
    <v-scroll-to-top></v-scroll-to-top>
    <NavbarComp :siteInfo="site_info" />
    <Nuxt />
    <FooterComp :siteInfo="site_info" />
  </div>
</template>
<script>
import NavbarComp from "../components/Layout/NavbarComp.vue";
import FooterComp from "../components/Layout/FooterComp.vue";

export default {
  data() {
    return {
      site_info: {},
    };
  },
  components: {
    NavbarComp,
    FooterComp,
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
