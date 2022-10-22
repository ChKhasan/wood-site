<template lang="html">
  <div class="container_block card_box">
    <div class="d-grid g-1 g-sm-2 g-lg-4 grid-gap grid-container">
      <!-- <span v-for="(item, index) in products" v-bind:key="index"> -->
        <ProductCard
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
            v-for="(item, index) in products" v-bind:key="index"
            :product="item"
            img="../static/images/product-19.jpg"
          />
      <!-- </span> -->

      <!-- <ProductCard
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="900"
        img="../images/product-19.jpg"
      />
      <ProductCard
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="900"
        img="../images/product-02.jpg"
      />
      <ProductCard
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="../images/product-10.jpg"
      />
      <ProductCard
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="900"
        img="../images/product-04.jpg"
      />
      <ShoppingCard
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="900"
        img="../static/images/product-16.jpg"
      />
      <ProductCard
        data-aos="fade-up"
        data-aos-delay="350"
        data-aos-duration="900"
        img="../images/product-08.jpg"
      />
      <ProductCard
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="900"
        img="../images/product-09.jpg"
      />
      <ProductCard
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="900"
        img="../images/product-19.jpg"
      />
      <ProductCard
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="900"
        img="../images/product-02.jpg"
      />
      <ProductCard
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="../images/product-10.jpg"
      />
      <ProductCard
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="900"
        img="../images/product-04.jpg"
      /> -->
    </div>
    <div class="d-flex justify-content-center my-5">
      <nuxt-link
      to="/categories"
        class="btn btn-outline-primary text-uppercase shop_now_btn"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
        >Shop Now</nuxt-link
      >
    </div>
  </div>
</template>
<script>
import ProductCard from "../smallComponents/ProductCard.vue";
// import ShoppingCard from "../smallComponents/ShoppingCard.vue";
import { mapState } from "vuex";

export default {
  props: ["products"],
  data() {
    return {
    };
  },
  components: {
    ProductCard,
    // ShoppingCard,
  },
 
  async asyncData({ $axios, $config }) {
    const mountains = await $axios.$get(`/posts`)
    console.log(mountains);
    return { mountains }
  },
  mounted() {
  },

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
  grid-template-columns: auto;
  grid-gap: 30px;
}
.w_sh_card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
@media (min-width: 576px) {
  .grid-container {
    grid-template-columns: auto auto;
  }
}
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: auto auto;
  }
}
@media (min-width: 1200px) {
  .grid-container {
    grid-template-columns: 25% 25% 25% 25%;
  }
}
</style>
