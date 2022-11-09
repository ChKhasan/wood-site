<template lang="html">
  <div>
    <BreadCrumbComp category="Посты" />
    <PostCategory :lang="getLang"/>
  </div>
</template>

<script>
import BreadCrumbComp from "../../../components/BreadCrumbComp.vue";
import PostCategory from "~/components/Posts/PostCategory.vue";

export default {
  components: {
    BreadCrumbComp,
    PostCategory,
  },
  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
};
</script>
<style lang="css"></style>
