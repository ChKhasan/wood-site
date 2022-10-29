<template lang="html">
  <div>
      <BreadCrumbComp category="Каталог" />
      <ShopPageBody
      
      />
  </div>
</template>
<script>
import BreadCrumbComp from "../../../components/BreadCrumbComp.vue";
import ShopPageBody from "../../../components/ShopPageBody.vue";
export default {
  data() {
    return {
      params: {
        paginate: 1,
        page: 2,
        // categories_id: [],
        // brand_id: null,
        // search: null,
      },
    };
  },
  // async asyncData({ $axios, route }) {
  //   const categories = await $axios.$get(`/categories`);
  //   const brands = await $axios.$get(`/brands`);
  //   const productsById = await $axios.$get(route.fullPath);
  //   console.log(route);
  //   const categoryById = await $axios.$get(`/categories/1`);
  //   return { categories, categoryById, productsById, brands };
  // },
  mounted() {
    // this.params.page = this.$route.query.paginate || 1;
    // this.$router.replace({
    //   path: "/categories/1/products",
    //   query: this.params,
    // });
  },
  components: {
    BreadCrumbComp,
    ShopPageBody,
  },
};
</script>
<style lang="css"></style>
