<template lang="html">
  <div>
    <!-- <v-scroll-to-top></v-scroll-to-top> -->
      <BreadCrumbComp category="Товар" />
      <ProductPageBody :product="product.data"/>
      <TitleComp title="Последние товары" />
      <div class="container container-xxl mb-120">
        <div class="row py-5">
          <div class="col-12">
            <CardCarousel :products="products"/>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import BreadCrumbComp from "../../components/BreadCrumbComp.vue";
import ProductPageBody from "../../components/ProductPageBody.vue";
import TitleComp from "../../components/TitleComp.vue";
import CardCarousel from "../../components/CardCarousel.vue";
import productApi from "@/api/product.js";
import categoryApi from "@/api/product.js";

export default {
  data() {
  
  },
  components: {
    BreadCrumbComp,
    ProductPageBody,
    CardCarousel,
    TitleComp,
  },
  mounted() {
  },
  async asyncData({ $axios,params }) {
    const product = await $axios.$get(`/products/${params.index}`)
    // const products = await $axios.$get(`/products`)
    const products = await productApi.getProducts($axios);
  return { product,products }
},
  // async asyncData({ $axios }) {
  //   const products = await productApi.getProducts($axios);
  //   console.log(products);
  //   return {
  //     products,
  //   };
  // },
  // async asyncData({ $axios }) {
  //   const products = await productApi.getProducts($axios);
  //   const category = await categoryApi.getCategories($axios);
  //   return {
  //     products,
  //     category
  //   };
  // },

  mounted() {
  },
};
</script>
<style lang="css">
.grid-container {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 30px;
}
/* .w_sh_card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
} */
@media (min-width: 576px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
.mb-120 {
  margin-bottom: 120px;
}
</style>
