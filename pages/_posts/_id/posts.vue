<template lang="html">
  <div>
    <BreadCrumbComp category="Посты" />
    <PostCategory />
  </div>
</template>

<script>
import BreadCrumbComp from "../../../components/BreadCrumbComp.vue";
import PostCategory from "~/components/PostCategory.vue";

export default {
  components: {
    BreadCrumbComp,
    PostCategory,
  },
};
</script>
<style lang="css"></style>
