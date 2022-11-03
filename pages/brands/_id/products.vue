<template lang="html">
  <div>
      <BreadCrumbComp category="Бренды" />
      <BrandsBody />
  </div>
</template>
<script>
import BrandsBody from "~/components/Brands/BrandsBody.vue";
import BreadCrumbComp from "../../../components/BreadCrumbComp.vue";
export default {
  data() {
    return {
      params: {
        paginate: 1,
        page: 2,
      },
    };
  },

  components: {
    BreadCrumbComp,
    BrandsBody,
  },
};
</script>
<style lang="css"></style>
