<template lang="html">
  <div
    class="product_card d-flex flex-column justify-content-between position-relative"
  >
    <nuxt-link class="mt-1" :to="`/product/${product.slug}`">
      <div class="product-card-banner d-flex align-items-end">
        <img :src="product.product_images[0].lg_img" alt="" />
      </div>
    </nuxt-link>

    <div class="d-flex flex-column justify-content-between pt-4" style="">
      <div class="product_card_title d-flex flex-column">
        <p v-if="hide" class="p_card_title_type">
          {{
            product.products_categories[0].title[getLang]
              ? product.products_categories[0].title[getLang]
              : product.products_categories[0].title.ru
          }}
        </p>
        <div class="d-flex justify-content-between ">
          <nuxt-link class="p_card_title mt-1" :to="`/product/${product.slug}`">
            {{
              product.title[getLang] ? product.title[getLang] : product.title.ru
            }}
          </nuxt-link>
          <p class="p_card_title_price">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product", "hide"],
  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
};
</script>
<style lang="css">
a {
  text-decoration: none !important;
  color: #000 !important;
}

.p_card_title {
  line-height: 1.2 !important;
  font-weight: 700 !important;
  text-overflow: clip;
  overflow: hidden;
  width: 70%;
  height: 50px;
  
  font-family: "Montserrat", sans-serif !important;
}
.p_card_title_type {
  font-size: 13px !important;
  letter-spacing: 0.5px !important;
  font-weight: 500 !important;
  color: #999 !important;
}
.p_card_title_price {
  font-weight: 500 !important;
  color: #000 !important;
  margin-bottom: 0 !important;
  line-height: 20px;
}
.content-change-vertical {
  position: relative;
  display: flex !important;
  height: 100px;
  justify-content: space-between !important;
  align-content: space-between;
  width: 100%;
}
.content-change-vertical a {
  border-radius: 50%;
  width: 42px;
  bottom: -100px !important;
  aspect-ratio: 1.1;
  height: 42px;
  position: absolute;
  /* display: none !important; */
  transition: 0.5s;
  opacity: 0;
  font-family: "Montserrat", sans-serif !important;
}
.content-change-vertical svg {
  color: black;
}
.content-change-vertical a:hover {
  background: black !important;
  color: white !important;
}
.content-change-vertical a:hover path {
  background: black !important;
  color: white !important;
}
.content-change-vertical a:hover .card_icons {
  color: white !important;
}
.card_icons {
  color: black;
}

.content-change-vertical a:first-child {
  left: 0px !important;
  transition: bottom 0.5s 0.1s;
}
.content-change-vertical a:last-child {
  left: 25% !important;
  transition: bottom 0.5s 0.2s;
}
.content-change-vertical a:nth-child(2) {
  left: 50%;
  transition: bottom 0.5s 0.3s;
}
.content-change-vertical a:nth-child(3) {
  left: 75%;
  transition: bottom 0.5s 0.4s;
}
.product_card:hover .add-to-cart {
  bottom: 0 !important;
  opacity: 1;
}
.product_card:hover .status {
  /* display: none; */
  opacity: 0 !important;
}
.status_sale {
  background-color: #e67a7a;
}
.status_new {
  background-color: #9bd6c1;
}
.status_sale,
.status_new {
  transition: 0.4s !important;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  position: absolute;
  aspect-ratio: 1.1;
  font-size: 12px !important;
  color: #fff;
  line-height: 1.15;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  right: 25px;
  top: 25px;
  border-radius: 50%;
}
.product-card-banner {
  aspect-ratio: 1/1 !important;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  transition: 0.3s;
}
.product-card-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover !important;
  transition: .5s;
}
.product_card {
  transition: 0.3s !important;
  font-family: "Montserrat", sans-serif !important;
}
/* .product_card:hover {
  transform: scale(1.05) !important;
} */
.product-card-banner:hover img {
  transform: scale(1.2);
}
</style>
