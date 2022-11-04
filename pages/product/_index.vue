<template lang="html">
  <div>
    <BreadCrumbComp category="Товар" />
    <ProductPageBody :product="product" />
    <TitleComp title="Последние товары" />
    <div class="container container-xxl mb-120">
      <div class="row pb-4">
        <div class="col-12">
          <CardCarousel :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbComp from "../../components/BreadCrumbComp.vue";
import ProductPageBody from "../../components/Product/ProductPageBody.vue";
import TitleComp from "../../components/TitleComp.vue";
import CardCarousel from "../../components/Product/CardCarousel.vue";

export default {
  data() {},
  components: {
    BreadCrumbComp,
    ProductPageBody,
    CardCarousel,
    TitleComp,
  },
  async asyncData({ params, store }) {
    const products = await store.dispatch("products/fetchProductsPaginate");
    const product = await store.dispatch(
      "products/fetchProductBySlug",
      params.index
    );
    return { product, products };
  },
};
</script>
<style lang="css">
.mb-120 {
  margin-bottom: 120px;
}
</style>
