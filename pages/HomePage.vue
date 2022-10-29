<template lang="html">
  <div>
    <LayoutComp>
      <BannerComp />
      <HomeCardBox :products="products"/>
      <TitleComp title="Недавние Посты" />
      <JournalComp :posts="posts"/>
      <ContactCardBox />
      <CustomServiceInfo />
    </LayoutComp>
  </div>
</template>
<script>
import BannerComp from "~/components/BannerComp.vue";
import HomeCardBox from "../components/HomeCardBox.vue";
import TitleComp from "../components/TitleComp.vue";
import ContactCardBox from "../components/ContactCardBox.vue";
import CustomServiceInfo from "../components/CustomServiceInfo.vue";
import LayoutComp from "../layouts/default.vue";
import JournalComp from "~/components/JournalComp.vue";

export default {
  name: "navbar-comp",
  props: ["posts"],
  data() {
    return {
      products: []
    }
  },
  mounted() {
   this.getProducts()
  },
  methods: {
    async getProducts() {
      const products = await this.$axios.$get("/products");
      this.products = products.data.data.data
    }
  },
  components: {
    BannerComp,
    HomeCardBox,
    TitleComp,
    ContactCardBox,
    CustomServiceInfo,
    LayoutComp,
    JournalComp
},

};
</script>
