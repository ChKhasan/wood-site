<template>
  <div>
    <Banner :sliders="sliders" />
    <div class="mt-5">
      <TitleComp
        :title="
          translate[getLang]?.homepage.ourProducts ??
          translate.ru.homepage.ourProducts
        "
      />
    </div>
    <HomeCardBlog :products="products" :category="category" />
    <TitleComp
      :title="
        translate[getLang]?.homepage.recentPosts ??
        translate.ru.homepage.recentPosts
      "
    />
    <NewPosts :posts="posts" />
    <ContactCardBlog :siteInfo="siteInfo" />
  </div>
</template>

<script>
import Banner from "~/components/Home/Banner.vue";
import HomeCardBlog from "../components/Home/HomeCardBlog.vue";
import TitleComp from "../components/TitleComp.vue";
import ContactCardBlog from "../components/Home/ContactCardBlog.vue";
import NewPosts from "~/components/Home/NewPosts.vue";
import translate from "@/translate/translation";

export default {
  loading: false,
  name: "IndexPage",
  data() {
    return {
      translate: {
        ru: require("../locales/ru.json"),
        uz: require("../locales/uz.json"),
      },
    };
  },

  computed: {
    getLang() {
      return this.$store.getters.language;
    },
  },
  async asyncData({ store }) {
    const language = await store.dispatch("language/fetchLanguage");
    if (!localStorage.getItem("Lang")) {
      await store.dispatch("actionLangRu", language[0].code);
    }
    const products = await store.dispatch("products/fetchProductsPaginate");
    const category = await store.dispatch("categories/fetchCategoriesPaginate");
    const posts = await store.dispatch("posts/fetchPostsPaginate", 3);
    const sliders = await store.dispatch("sliders/fetchSliders");
    const siteInfo = await store.dispatch("site-info/fetchSiteInfo");
    await translate.trans();
    return {
      products,
      category,
      posts,
      sliders,
      siteInfo,
    };
  },

  components: {
    Banner,
    HomeCardBlog,
    TitleComp,
    ContactCardBlog,
    NewPosts,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Montserrat:wght@100;200;300;500;700&family=Philosopher:wght@700&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,800;1,100&family=Roboto&display=swap");
body {
  margin: 0;
  font-family: "Montserrat", sans-serif !important;
}
a {
  text-decoration: none !important;
}
@media (min-width: 768px) {
  .mb-md-8,
  .my-md-8 {
    margin-bottom: 3.125rem !important;
  }
}
.container {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
@media (min-width: 576px) {
  .container_block {
    max-width: 540px !important;
    margin: 0 auto !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
}
@media (min-width: 576px) {
  .container_block {
    max-width: 540px !important;
    margin: 0 auto !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
}
@media (min-width: 768px) {
  .container_block {
    max-width: 720px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 992px) {
  .container_block {
    max-width: 960px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 1200px) {
  .container_block {
    max-width: 1200px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 1750px) {
  .container-xl {
    max-width: 1750px !important;
    margin: 0 auto !important;
  }
}
.container-shop {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
@media (min-width: 576px) {
  .container-shop {
    max-width: 540px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 768px) {
  .container-shop {
    max-width: 720px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 992px) {
  .container-shop {
    max-width: 960px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 1200px) {
  .container-shop {
    max-width: 1200px !important;
    margin: 0 auto !important;
  }
}

.shop_now_btn {
  border: 1px solid #000 !important;
  border-radius: 0 !important;
  color: #000 !important;
  font-weight: 700 !important;
  padding: 0.625rem 1.875rem !important;
  margin-top: 20px;
  transition: 0.3s !important;
}
.shop_now_btn:hover {
  border: 1px solid #000 !important;
  background-color: black !important;
  color: #fff !important;
}
.text-muted {
  color: #999 !important;
}
#icon-container {
  background: #fff !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
#icon-arrow-up {
  color: #000 !important;
}
.color-gray {
  color: #777 !important;
  font-family: "Poppins", sans-serif;
}
#icon-container {
  z-index: 2000 !important;
}
</style>
