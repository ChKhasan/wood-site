<template lang="html">
    <div class="card-carousel-product">
      <VueSlickCarousel v-bind="slickOptions">
        <div class="mxw-100">
          <ProductCard  data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="900"
          img="images/product-10.jpg"/>
        </div>
        <div class="mxw-100">
          <ProductCard  data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="900"
          img="images/product-10.jpg"/>
        </div>
        <div class="mxw-100">
          <ProductCard  data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="900"
          img="images/product-10.jpg"/>
        </div>
        <div class="mxw-100">
          <ProductCard  data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="900"
          img="images/product-10.jpg"/>
        </div>
        <div class="mxw-100">
          <ProductCard  data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="900"
          img="images/product-10.jpg"/>
        </div>
        <div class="mxw-100">
          <ProductCard  data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="900"
          img="images/product-10.jpg"/>
        </div>
      </VueSlickCarousel>
    </div>
  </template>
  <script>
  import VueSlickCarousel from "vue-slick-carousel";
  import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
  import "vue-slick-carousel/dist/vue-slick-carousel.css";
  import ProductCard  from "../smallComponents/ProductCard.vue";
  export default {
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
  