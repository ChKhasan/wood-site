<template lang="html">
  <div>
    <BreadCrumbComp :category="posts[getLang] ? posts[getLang]:posts.ru" />
    <PostCategory :lang="getLang" />
  </div>
</template>

<script>
import BreadCrumbComp from "../../../components/BreadCrumbComp.vue";
import PostCategory from "~/components/Posts/PostCategory.vue";

export default {
  data() {
    return {
      posts: {
        ru: "Посты",
        uz: "Xabarlar",
      },
    };
  },
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
