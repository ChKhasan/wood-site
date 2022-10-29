<template lang="html">
  <div class="journal-card mt-5">
    <nuxt-link :to="`/post/${post.slug}`" class="j-card-img">
      <!-- <img :src="post.post_images[0].lg_img" alt="" /> -->
      <div class="journal-img" style="transition: 1s">
        <img :src="post.post_images[0].lg_img" alt="" />
      </div>
    </nuxt-link>
    <div class="j-card-body pt-5">
      <div class="j-card-date">
        <span> April 24, 2019 </span>
      </div>
      <div class="j-card-title mb-3">
        <h3>
          <a href="">{{ post.title.ru }}</a>
        </h3>
      </div>
      <div class="j-card-text">
        <p v-html="post.desc.ru"></p>
      </div>
      <BorderBlackBtn name="Все посты" />
    </div>
  </div>
</template>
<script>
import BorderBlackBtn from "../smallComponents/BorderBlackBtn.vue";
export default {
  props: ["img", "post"],
  components: {
    BorderBlackBtn,
  },
};
</script>
<style lang="css">
.journal-card {
  transition: 0.3s;
}
/* .journal-card:hover {
  transform: scale(1.05) !important;
} */
.j-card-img {
  flex-shrink: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: block;
  z-index: 100;
}
.j-card-img img::before {
  position: absolute;
  top: 0;
  left: -100%;
  z-index: 2;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
}

.j-card-img img {
  max-width: 100%;
}

.j-card-date {
  font-weight: 500 !important;
  letter-spacing: 0.5px !important;
  line-height: 1.2 !important;
  color: #999 !important;
  text-transform: uppercase !important;
  margin-bottom: 0.625rem !important;
  font-family: "Poppins", sans-serif;
}
.j-card-title h3 {
  font-size: 20px !important;
  font-family: "Poppins", sans-serif;
  font-weight: 700 !important;
}
.j-card-text {
  font-weight: 500 !important;
  position: relative;
  margin-bottom: 1.25rem !important;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  line-height: 1.63;
  color: #777;
}
.journal-card {
  cursor: pointer;
  transition: 0.5s !important;
}
.j-card-text p {
  text-overflow: clip;
  overflow: hidden;
  width: 100%;
  height: 50px;
  white-space: wrap;
}
.journal-img {
  height: 200px;
  transition: .5s;
  object-fit: cover !important;
}
.journal-img img {
  width: 100%;
  height: 200px;
  transition: background-size 2s linear;
  object-fit: cover;
  transition: .5s !important;

}
.journal-img:hover{
  transform: scale(1.2);
}
</style>
