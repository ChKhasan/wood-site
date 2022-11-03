<template lang="html">
  <div>
    <BreadCrumbComp category="Каталог" />
    <ShopPageBody />
  </div>
</template>
<script>
import BreadCrumbComp from "../../../components/BreadCrumbComp.vue";
import ShopPageBody from "../../../components/Category/ShopPageBody.vue";
export default {
  data() {
    return {
      params: {
        paginate: 1,
        page: 2,
      },
    };
  },

  mounted() {
    this.$i18n.setLocale(localStorage.getItem("Lang"));
  },
  components: {
    BreadCrumbComp,
    ShopPageBody,
  },
};
</script>
<style lang="css"></style>
