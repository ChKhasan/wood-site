<template lang="html">
  <div>
    <!-- <span
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="900"
      v-for="(item, index) in products"
      v-bind:key="index"
    >
      <ProductCard :product="item" img="../static/images/product-19.jpg" />
    </span> -->
  </div>
</template>
<script>
export default {
    async asyncData({ $axios, $config }) {
    const mountains = await $axios.$get(`/products`);
    console.log("pro",mountains);
    return { mountains };
  },
};
</script>
<style lang="css"></style>
