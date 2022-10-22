<template lang="html">
  <div>
    <LayoutComp>
      <BreadCrumbComp category="Каталог" />
      
      <ShopPageBody :categories="categories.data" :firstCategory="categoryById.data" :productsById="productsById.data.data"/>
    </LayoutComp>
  </div>
</template>
<script>
import BreadCrumbComp from "../../components/BreadCrumbComp.vue";
import ShopPageBody from "../../components/ShopPageBody.vue";
import LayoutComp from "../../Layouts/LayoutComp.vue"
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
    }
  },
  async asyncData({ $axios }) {
  const categories = await $axios.$get(`/categories`)
  const productsById = await $axios.$get(`/categories/1/products?paginate=2&page=1`)
  const categoryById = await $axios.$get(
        `categories/1`
      );
console.log(categories);
  return { categories,categoryById,productsById }
},
mounted() {
      this.params.page = this.$route.query.paginate || 1;
      this.$router.replace({ path: "/categories/products", query: this.params });

    },
  components: {
    BreadCrumbComp,
    ShopPageBody,
    LayoutComp,
  },
};
</script>
<style lang="css"></style>
