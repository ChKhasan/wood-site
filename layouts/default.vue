<template lang="html">
  <div>
    <NavbarComp :siteInfo="site_info" />
    <Nuxt />
    <FooterComp :siteInfo="site_info" />
  </div>
</template>
<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";
import getSiteInfo from "@/api/site-info.js";
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
      const siteInfo = await this.$axios.$get("/site-info");
      this.site_info = siteInfo.data;
      console.log(this.site_info);
    },
  },
};
</script>
