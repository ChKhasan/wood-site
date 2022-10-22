<template lang="html">
  <div>
    <LayoutComp>
      <BannerComp />
      <HomeCardBox :products="products"/>
      <TitleComp title="Our Journal" />
      <JournalComp />
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
import LayoutComp from "../Layouts/LayoutComp.vue";

export default {
  name: "navbar-comp",
  props: ["products"],
  components: {
    BannerComp,
    HomeCardBox,
    TitleComp,
    ContactCardBox,
    CustomServiceInfo,
    LayoutComp,
  },

};
</script>
