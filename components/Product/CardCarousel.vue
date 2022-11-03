<template lang="html">
  <div class="card-carousel-product">
    <VueSlickCarousel v-bind="slickOptions">
      <div class="mxw-100" v-for="(item, index) in products" v-bind:key="index">
        <ProductCard
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="900"
          :product="item"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import ProductCard from "../../smallComponents/ProductCard.vue";
export default {
  props: ["products"],
  data() {
    return {
      slickOptions: {
        dots: false,
        arrow: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  components: {
    VueSlickCarousel,
    ProductCard,
  },
};
</script>
<style lang="css">
.mxw-100 {
  padding-right: 15px;
  padding-left: 15px;
}
.card-carousel-product .slick-arrow {
  display: none !important;
}
</style>
