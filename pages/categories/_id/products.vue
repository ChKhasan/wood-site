<template lang="html">
  <div>
    <BreadCrumbComp category="Каталог" />
    <CategoryBody />
  </div>
</template>
<script>
import BreadCrumbComp from "../../../components/BreadCrumbComp.vue";
import CategoryBody from "../../../components/Category/CategoryBody.vue";
export default {
  data() {
    return {
      params: {
        paginate: 1,
        page: 2,
      },
    };
  },

  mounted() {
    this.$i18n.setLocale(localStorage.getItem("Lang"));
  },
  components: {
    BreadCrumbComp,
    CategoryBody,
  },
};
</script>
<style lang="css"></style>
