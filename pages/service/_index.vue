<template lang="html">
  <div>
    <BreadCrumbComp category="Товар" />
    <!-- <ProductPageBody :product="product" /> -->
    <TitleComp title="Последние товары" />
    <div class="container container-xxl mb-120">
      <div class="row py-5">
        <div class="col-12">
          <CardCarousel :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbComp from "../../components/BreadCrumbComp.vue";
// import ProductPageBody from "../../components/Product/ProductPageBody.vue";
import TitleComp from "../../components/TitleComp.vue";
import CardCarousel from "../../components/Product/CardCarousel.vue";
export default {
  data() {
    return {
      slug: "adasfaf",
    };
  },
  components: {
    BreadCrumbComp,
    // ProductPageBody,
    CardCarousel,
    TitleComp,
  },
  mounted() {},
  async asyncData({ params, store }) {
    const product = await store.dispatch(
      "products/fetchProductBySlug",
      params.index
    );
    const products = await store.dispatch("products/fetchProductsPaginate");
    return { product, products };
  },
};
</script>
<style lang="css">
.grid-container {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 30px;
}
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
