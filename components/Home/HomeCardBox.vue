<template lang="html">
  <div class="container_block card_box">
    <div class="grid-container">
      <ProductCard
        v-for="(item, index) in products"
        data-aos="fade-up"
        data-aos-duration="900"
        :data-aos-delay="(1 + (index % 5)) * 100"
        v-bind:key="index"
        :product="item"
      />

      <ShoppingCard
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="900"
        v-for="(item, index) in category"
        v-bind:key="index"
        :category="item"
        :gridClass="`shopping_card-grid${index + 1}`"
      />
    </div>
    <div class="d-flex justify-content-center my-5">
      <nuxt-link
        to="/categories"
        class="btn btn-outline-primary text-uppercase shop_now_btn"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
        >Показать Сейчас</nuxt-link
      >
    </div>
  </div>
</template>
<script>
import ProductCard from "../../smallComponents/ProductCard.vue";
import { mapState } from "vuex";
import ShoppingCard from "../../smallComponents/ShoppingCard.vue";

export default {
  props: ["products", "category"],
  data() {
    return {};
  },
  components: {
    ProductCard,
    ShoppingCard,
  },

  async asyncData({ $axios, $config }) {
    const mountains = await $axios.$get(`/posts`);
    return { mountains };
  },
  mounted() {},

  computed: {
    ...mapState(["data"]),
  },
};
</script>
<style lang="css">
.card_box {
  padding-top: 110px;
  padding-bottom: 110px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
}

</style>
